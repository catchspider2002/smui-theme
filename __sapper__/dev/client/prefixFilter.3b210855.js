import { E as listen, F as bubble } from './index.53a8c4d3.js';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

function forwardEventsBuilder(component, additionalEvents = []) {
  const events = [
    'focus', 'blur',
    'fullscreenchange', 'fullscreenerror', 'scroll',
    'cut', 'copy', 'paste',
    'keydown', 'keypress', 'keyup',
    'auxclick', 'click', 'contextmenu', 'dblclick', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseover', 'mouseout', 'mouseup', 'pointerlockchange', 'pointerlockerror', 'select', 'wheel',
    'drag', 'dragend', 'dragenter', 'dragstart', 'dragleave', 'dragover', 'drop',
    'touchcancel', 'touchend', 'touchmove', 'touchstart',
    'pointerover', 'pointerenter', 'pointerdown', 'pointermove', 'pointerup', 'pointercancel', 'pointerout', 'pointerleave', 'gotpointercapture', 'lostpointercapture',
    ...additionalEvents
  ];

  function forward(e) {
    bubble(component, e);
  }

  return node => {
    const destructors = [];

    for (let i = 0; i < events.length; i++) {
      destructors.push(listen(node, events[i], forward));
    }

    return {
      destroy: () => {
        for (let i = 0; i < destructors.length; i++) {
          destructors[i]();
        }
      }
    }
  };
}

function exclude(obj, keys) {
  let names = Object.getOwnPropertyNames(obj);
  const newObj = {};

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const cashIndex = name.indexOf('$');
    if (cashIndex !== -1 && keys.indexOf(name.substring(0, cashIndex + 1)) !== -1) {
      continue;
    }
    if (keys.indexOf(name) !== -1) {
      continue;
    }
    newObj[name] = obj[name];
  }

  return newObj;
}

function useActions(node, actions) {
  let objects = [];

  if (actions) {
    for (let i = 0; i < actions.length; i++) {
      const isArray = Array.isArray(actions[i]);
      const action = isArray ? actions[i][0] : actions[i];
      if (isArray && actions[i].length > 1) {
        objects.push(action(node, actions[i][1]));
      } else {
        objects.push(action(node));
      }
    }
  }

  return {
    update(actions) {
      if ((actions && actions.length || 0) != objects.length) {
        throw new Error('You must not change the length of an actions array.');
      }

      if (actions) {
        for (let i = 0; i < actions.length; i++) {
          if (objects[i] && 'update' in objects[i]) {
            const isArray = Array.isArray(actions[i]);
            if (isArray && actions[i].length > 1) {
              objects[i].update(actions[i][1]);
            } else {
              objects[i].update();
            }
          }
        }
      }
    },

    destroy() {
      for (let i = 0; i < objects.length; i++) {
        if (objects[i] && 'destroy' in objects[i]) {
          objects[i].destroy();
        }
      }
    }
  }
}

/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */
var supportsCssVariables_;
function detectEdgePseudoVarBug(windowObj) {
    // Detect versions of Edge with buggy var() support
    // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
    var document = windowObj.document;
    var node = document.createElement('div');
    node.className = 'mdc-ripple-surface--test-edge-var-bug';
    // Append to head instead of body because this script might be invoked in the
    // head, in which case the body doesn't exist yet. The probe works either way.
    document.head.appendChild(node);
    // The bug exists if ::before style ends up propagating to the parent element.
    // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
    // but Firefox is known to support CSS custom properties correctly.
    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    var computedStyle = windowObj.getComputedStyle(node);
    var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }
    return hasPseudoVarBug;
}
function supportsCssVariables(windowObj, forceRefresh) {
    if (forceRefresh === void 0) { forceRefresh = false; }
    var CSS = windowObj.CSS;
    var supportsCssVars = supportsCssVariables_;
    if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
        return supportsCssVariables_;
    }
    var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';
    if (!supportsFunctionPresent) {
        return false;
    }
    var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes');
    // See: https://bugs.webkit.org/show_bug.cgi?id=154669
    // See: README section on Safari
    var weAreFeatureDetectingSafari10plus = (CSS.supports('(--css-vars: yes)') &&
        CSS.supports('color', '#00000000'));
    if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
        supportsCssVars = !detectEdgePseudoVarBug(windowObj);
    }
    else {
        supportsCssVars = false;
    }
    if (!forceRefresh) {
        supportsCssVariables_ = supportsCssVars;
    }
    return supportsCssVars;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
    if (!evt) {
        return { x: 0, y: 0 };
    }
    var x = pageOffset.x, y = pageOffset.y;
    var documentX = x + clientRect.left;
    var documentY = y + clientRect.top;
    var normalizedX;
    var normalizedY;
    // Determine touch point relative to the ripple container.
    if (evt.type === 'touchstart') {
        var touchEvent = evt;
        normalizedX = touchEvent.changedTouches[0].pageX - documentX;
        normalizedY = touchEvent.changedTouches[0].pageY - documentY;
    }
    else {
        var mouseEvent = evt;
        normalizedX = mouseEvent.pageX - documentX;
        normalizedY = mouseEvent.pageY - documentY;
    }
    return { x: normalizedX, y: normalizedY };
}
//# sourceMappingURL=util.js.map

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = /** @class */ (function () {
    function MDCFoundation(adapter) {
        if (adapter === void 0) { adapter = {}; }
        this.adapter_ = adapter;
    }
    Object.defineProperty(MDCFoundation, "cssClasses", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "strings", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "numbers", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "defaultAdapter", {
        get: function () {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
        },
        enumerable: true,
        configurable: true
    });
    MDCFoundation.prototype.init = function () {
        // Subclasses should override this method to perform initialization routines (registering events, etc.)
    };
    MDCFoundation.prototype.destroy = function () {
        // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    };
    return MDCFoundation;
}());
//# sourceMappingURL=foundation.js.map

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCComponent = /** @class */ (function () {
    function MDCComponent(root, foundation) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        this.root_ = root;
        this.initialize.apply(this, __spread(args));
        // Note that we initialize foundation here and not within the constructor's default param so that
        // this.root_ is defined and can be used within the foundation class.
        this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
        this.foundation_.init();
        this.initialSyncWithDOM();
    }
    MDCComponent.attachTo = function (root) {
        // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
        // returns an instantiated component with its root set to that element. Also note that in the cases of
        // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
        // from getDefaultFoundation().
        return new MDCComponent(root, new MDCFoundation({}));
    };
    /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */
    MDCComponent.prototype.initialize = function () {
        var _args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _args[_i] = arguments[_i];
        }
        // Subclasses can override this to do any additional setup work that would be considered part of a
        // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
        // initialized. Any additional arguments besides root and foundation will be passed in here.
    };
    MDCComponent.prototype.getDefaultFoundation = function () {
        // Subclasses must override this method to return a properly configured foundation class for the
        // component.
        throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' +
            'foundation class');
    };
    MDCComponent.prototype.initialSyncWithDOM = function () {
        // Subclasses should override this method if they need to perform work to synchronize with a host DOM
        // object. An example of this would be a form control wrapper that needs to synchronize its internal state
        // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
        // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    };
    MDCComponent.prototype.destroy = function () {
        // Subclasses may implement this method to release any resources / deregister any listeners they have
        // attached. An example of this might be deregistering a resize event from the window object.
        this.foundation_.destroy();
    };
    MDCComponent.prototype.listen = function (evtType, handler, options) {
        this.root_.addEventListener(evtType, handler, options);
    };
    MDCComponent.prototype.unlisten = function (evtType, handler, options) {
        this.root_.removeEventListener(evtType, handler, options);
    };
    /**
     * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
     */
    MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
        if (shouldBubble === void 0) { shouldBubble = false; }
        var evt;
        if (typeof CustomEvent === 'function') {
            evt = new CustomEvent(evtType, {
                bubbles: shouldBubble,
                detail: evtData,
            });
        }
        else {
            evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(evtType, shouldBubble, false, evtData);
        }
        this.root_.dispatchEvent(evt);
    };
    return MDCComponent;
}());
//# sourceMappingURL=component.js.map

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * Stores result from applyPassive to avoid redundant processing to detect
 * passive event listener support.
 */
var supportsPassive_;
/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */
function applyPassive(globalObj, forceRefresh) {
    if (globalObj === void 0) { globalObj = window; }
    if (forceRefresh === void 0) { forceRefresh = false; }
    if (supportsPassive_ === undefined || forceRefresh) {
        var isSupported_1 = false;
        try {
            globalObj.document.addEventListener('test', function () { return undefined; }, {
                get passive() {
                    isSupported_1 = true;
                    return isSupported_1;
                },
            });
        }
        catch (e) {
        } // tslint:disable-line:no-empty cannot throw error due to tests. tslint also disables console.log.
        supportsPassive_ = isSupported_1;
    }
    return supportsPassive_ ? { passive: true } : false;
}
//# sourceMappingURL=events.js.map

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */
function closest(element, selector) {
    if (element.closest) {
        return element.closest(selector);
    }
    var el = element;
    while (el) {
        if (matches(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}
function matches(element, selector) {
    var nativeMatches = element.matches
        || element.webkitMatchesSelector
        || element.msMatchesSelector;
    return nativeMatches.call(element, selector);
}
//# sourceMappingURL=ponyfill.js.map

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    // Ripple is a special case where the "root" component is really a "mixin" of sorts,
    // given that it's an 'upgrade' to an existing component. That being said it is the root
    // CSS class that all other CSS classes derive from.
    BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
    FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
    FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
    ROOT: 'mdc-ripple-upgraded',
    UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
};
var strings = {
    VAR_FG_SCALE: '--mdc-ripple-fg-scale',
    VAR_FG_SIZE: '--mdc-ripple-fg-size',
    VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
    VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
    VAR_LEFT: '--mdc-ripple-left',
    VAR_TOP: '--mdc-ripple-top',
};
var numbers = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300,
};
//# sourceMappingURL=constants.js.map

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = [
    'touchstart', 'pointerdown', 'mousedown', 'keydown',
];
// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = [
    'touchend', 'pointerup', 'mouseup', 'contextmenu',
];
// simultaneous nested activations
var activatedTargets = [];
var MDCRippleFoundation = /** @class */ (function (_super) {
    __extends(MDCRippleFoundation, _super);
    function MDCRippleFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCRippleFoundation.defaultAdapter, adapter)) || this;
        _this.activationAnimationHasEnded_ = false;
        _this.activationTimer_ = 0;
        _this.fgDeactivationRemovalTimer_ = 0;
        _this.fgScale_ = '0';
        _this.frame_ = { width: 0, height: 0 };
        _this.initialSize_ = 0;
        _this.layoutFrame_ = 0;
        _this.maxRadius_ = 0;
        _this.unboundedCoords_ = { left: 0, top: 0 };
        _this.activationState_ = _this.defaultActivationState_();
        _this.activationTimerCallback_ = function () {
            _this.activationAnimationHasEnded_ = true;
            _this.runDeactivationUXLogicIfReady_();
        };
        _this.activateHandler_ = function (e) { return _this.activate_(e); };
        _this.deactivateHandler_ = function () { return _this.deactivate_(); };
        _this.focusHandler_ = function () { return _this.handleFocus(); };
        _this.blurHandler_ = function () { return _this.handleBlur(); };
        _this.resizeHandler_ = function () { return _this.layout(); };
        return _this;
    }
    Object.defineProperty(MDCRippleFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "numbers", {
        get: function () {
            return numbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                browserSupportsCssVars: function () { return true; },
                computeBoundingRect: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                containsEventTarget: function () { return true; },
                deregisterDocumentInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                deregisterResizeHandler: function () { return undefined; },
                getWindowPageOffset: function () { return ({ x: 0, y: 0 }); },
                isSurfaceActive: function () { return true; },
                isSurfaceDisabled: function () { return true; },
                isUnbounded: function () { return true; },
                registerDocumentInteractionHandler: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
                registerResizeHandler: function () { return undefined; },
                removeClass: function () { return undefined; },
                updateCssVariable: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCRippleFoundation.prototype.init = function () {
        var _this = this;
        var supportsPressRipple = this.supportsPressRipple_();
        this.registerRootHandlers_(supportsPressRipple);
        if (supportsPressRipple) {
            var _a = MDCRippleFoundation.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter_.addClass(ROOT_1);
                if (_this.adapter_.isUnbounded()) {
                    _this.adapter_.addClass(UNBOUNDED_1);
                    // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                    _this.layoutInternal_();
                }
            });
        }
    };
    MDCRippleFoundation.prototype.destroy = function () {
        var _this = this;
        if (this.supportsPressRipple_()) {
            if (this.activationTimer_) {
                clearTimeout(this.activationTimer_);
                this.activationTimer_ = 0;
                this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
            }
            if (this.fgDeactivationRemovalTimer_) {
                clearTimeout(this.fgDeactivationRemovalTimer_);
                this.fgDeactivationRemovalTimer_ = 0;
                this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
            }
            var _a = MDCRippleFoundation.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter_.removeClass(ROOT_2);
                _this.adapter_.removeClass(UNBOUNDED_2);
                _this.removeCssVars_();
            });
        }
        this.deregisterRootHandlers_();
        this.deregisterDeactivationHandlers_();
    };
    /**
     * @param evt Optional event containing position information.
     */
    MDCRippleFoundation.prototype.activate = function (evt) {
        this.activate_(evt);
    };
    MDCRippleFoundation.prototype.deactivate = function () {
        this.deactivate_();
    };
    MDCRippleFoundation.prototype.layout = function () {
        var _this = this;
        if (this.layoutFrame_) {
            cancelAnimationFrame(this.layoutFrame_);
        }
        this.layoutFrame_ = requestAnimationFrame(function () {
            _this.layoutInternal_();
            _this.layoutFrame_ = 0;
        });
    };
    MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
        var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
        if (unbounded) {
            this.adapter_.addClass(UNBOUNDED);
        }
        else {
            this.adapter_.removeClass(UNBOUNDED);
        }
    };
    MDCRippleFoundation.prototype.handleFocus = function () {
        var _this = this;
        requestAnimationFrame(function () {
            return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
    };
    MDCRippleFoundation.prototype.handleBlur = function () {
        var _this = this;
        requestAnimationFrame(function () {
            return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
    };
    /**
     * We compute this property so that we are not querying information about the client
     * until the point in time where the foundation requests it. This prevents scenarios where
     * client-side feature-detection may happen too early, such as when components are rendered on the server
     * and then initialized at mount time on the client.
     */
    MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
        return this.adapter_.browserSupportsCssVars();
    };
    MDCRippleFoundation.prototype.defaultActivationState_ = function () {
        return {
            activationEvent: undefined,
            hasDeactivationUXRun: false,
            isActivated: false,
            isProgrammatic: false,
            wasActivatedByPointer: false,
            wasElementMadeActive: false,
        };
    };
    /**
     * supportsPressRipple Passed from init to save a redundant function call
     */
    MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
        var _this = this;
        if (supportsPressRipple) {
            ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                _this.adapter_.registerInteractionHandler(evtType, _this.activateHandler_);
            });
            if (this.adapter_.isUnbounded()) {
                this.adapter_.registerResizeHandler(this.resizeHandler_);
            }
        }
        this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
        this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
    };
    MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
        var _this = this;
        if (evt.type === 'keydown') {
            this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
        }
        else {
            POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                _this.adapter_.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
            });
        }
    };
    MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
        var _this = this;
        ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter_.deregisterInteractionHandler(evtType, _this.activateHandler_);
        });
        this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
        this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
        if (this.adapter_.isUnbounded()) {
            this.adapter_.deregisterResizeHandler(this.resizeHandler_);
        }
    };
    MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
        var _this = this;
        this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter_.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
        });
    };
    MDCRippleFoundation.prototype.removeCssVars_ = function () {
        var _this = this;
        var rippleStrings = MDCRippleFoundation.strings;
        var keys = Object.keys(rippleStrings);
        keys.forEach(function (key) {
            if (key.indexOf('VAR_') === 0) {
                _this.adapter_.updateCssVariable(rippleStrings[key], null);
            }
        });
    };
    MDCRippleFoundation.prototype.activate_ = function (evt) {
        var _this = this;
        if (this.adapter_.isSurfaceDisabled()) {
            return;
        }
        var activationState = this.activationState_;
        if (activationState.isActivated) {
            return;
        }
        // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
        var previousActivationEvent = this.previousActivationEvent_;
        var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
        if (isSameInteraction) {
            return;
        }
        activationState.isActivated = true;
        activationState.isProgrammatic = evt === undefined;
        activationState.activationEvent = evt;
        activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
        var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) { return _this.adapter_.containsEventTarget(target); });
        if (hasActivatedChild) {
            // Immediately reset activation state, while preserving logic that prevents touch follow-on events
            this.resetActivationState_();
            return;
        }
        if (evt !== undefined) {
            activatedTargets.push(evt.target);
            this.registerDeactivationHandlers_(evt);
        }
        activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);
        if (activationState.wasElementMadeActive) {
            this.animateActivation_();
        }
        requestAnimationFrame(function () {
            // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
            activatedTargets = [];
            if (!activationState.wasElementMadeActive
                && evt !== undefined
                && (evt.key === ' ' || evt.keyCode === 32)) {
                // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                // active states inconsistently when they're called within event handling code:
                // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                // variable is set within a rAF callback for a submit button interaction (#2241).
                activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);
                if (activationState.wasElementMadeActive) {
                    _this.animateActivation_();
                }
            }
            if (!activationState.wasElementMadeActive) {
                // Reset activation state immediately if element was not made active.
                _this.activationState_ = _this.defaultActivationState_();
            }
        });
    };
    MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
        return (evt !== undefined && evt.type === 'keydown') ? this.adapter_.isSurfaceActive() : true;
    };
    MDCRippleFoundation.prototype.animateActivation_ = function () {
        var _this = this;
        var _a = MDCRippleFoundation.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
        var _b = MDCRippleFoundation.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
        var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal_();
        var translateStart = '';
        var translateEnd = '';
        if (!this.adapter_.isUnbounded()) {
            var _c = this.getFgTranslationCoordinates_(), startPoint = _c.startPoint, endPoint = _c.endPoint;
            translateStart = startPoint.x + "px, " + startPoint.y + "px";
            translateEnd = endPoint.x + "px, " + endPoint.y + "px";
        }
        this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
        this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
        // Cancel any ongoing activation/deactivation animations
        clearTimeout(this.activationTimer_);
        clearTimeout(this.fgDeactivationRemovalTimer_);
        this.rmBoundedActivationClasses_();
        this.adapter_.removeClass(FG_DEACTIVATION);
        // Force layout in order to re-trigger the animation.
        this.adapter_.computeBoundingRect();
        this.adapter_.addClass(FG_ACTIVATION);
        this.activationTimer_ = setTimeout(function () { return _this.activationTimerCallback_(); }, DEACTIVATION_TIMEOUT_MS);
    };
    MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
        var _a = this.activationState_, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
        var startPoint;
        if (wasActivatedByPointer) {
            startPoint = getNormalizedEventCoords(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
        }
        else {
            startPoint = {
                x: this.frame_.width / 2,
                y: this.frame_.height / 2,
            };
        }
        // Center the element around the start point.
        startPoint = {
            x: startPoint.x - (this.initialSize_ / 2),
            y: startPoint.y - (this.initialSize_ / 2),
        };
        var endPoint = {
            x: (this.frame_.width / 2) - (this.initialSize_ / 2),
            y: (this.frame_.height / 2) - (this.initialSize_ / 2),
        };
        return { startPoint: startPoint, endPoint: endPoint };
    };
    MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
        var _this = this;
        // This method is called both when a pointing device is released, and when the activation animation ends.
        // The deactivation animation should only run after both of those occur.
        var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
        var _a = this.activationState_, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
        var activationHasEnded = hasDeactivationUXRun || !isActivated;
        if (activationHasEnded && this.activationAnimationHasEnded_) {
            this.rmBoundedActivationClasses_();
            this.adapter_.addClass(FG_DEACTIVATION);
            this.fgDeactivationRemovalTimer_ = setTimeout(function () {
                _this.adapter_.removeClass(FG_DEACTIVATION);
            }, numbers.FG_DEACTIVATION_MS);
        }
    };
    MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
        var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
        this.adapter_.removeClass(FG_ACTIVATION);
        this.activationAnimationHasEnded_ = false;
        this.adapter_.computeBoundingRect();
    };
    MDCRippleFoundation.prototype.resetActivationState_ = function () {
        var _this = this;
        this.previousActivationEvent_ = this.activationState_.activationEvent;
        this.activationState_ = this.defaultActivationState_();
        // Touch devices may fire additional events for the same interaction within a short time.
        // Store the previous event until it's safe to assume that subsequent events are for new interactions.
        setTimeout(function () { return _this.previousActivationEvent_ = undefined; }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    };
    MDCRippleFoundation.prototype.deactivate_ = function () {
        var _this = this;
        var activationState = this.activationState_;
        // This can happen in scenarios such as when you have a keyup event that blurs the element.
        if (!activationState.isActivated) {
            return;
        }
        var state = __assign({}, activationState);
        if (activationState.isProgrammatic) {
            requestAnimationFrame(function () { return _this.animateDeactivation_(state); });
            this.resetActivationState_();
        }
        else {
            this.deregisterDeactivationHandlers_();
            requestAnimationFrame(function () {
                _this.activationState_.hasDeactivationUXRun = true;
                _this.animateDeactivation_(state);
                _this.resetActivationState_();
            });
        }
    };
    MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
        var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
        if (wasActivatedByPointer || wasElementMadeActive) {
            this.runDeactivationUXLogicIfReady_();
        }
    };
    MDCRippleFoundation.prototype.layoutInternal_ = function () {
        var _this = this;
        this.frame_ = this.adapter_.computeBoundingRect();
        var maxDim = Math.max(this.frame_.height, this.frame_.width);
        // Surface diameter is treated differently for unbounded vs. bounded ripples.
        // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
        // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
        // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
        // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
        // `overflow: hidden`.
        var getBoundedRadius = function () {
            var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
            return hypotenuse + MDCRippleFoundation.numbers.PADDING;
        };
        this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();
        // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
        this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
        this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
        this.updateLayoutCssVars_();
    };
    MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
        var _a = MDCRippleFoundation.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
        this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
        this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);
        if (this.adapter_.isUnbounded()) {
            this.unboundedCoords_ = {
                left: Math.round((this.frame_.width / 2) - (this.initialSize_ / 2)),
                top: Math.round((this.frame_.height / 2) - (this.initialSize_ / 2)),
            };
            this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
            this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
        }
    };
    return MDCRippleFoundation;
}(MDCFoundation));
//# sourceMappingURL=foundation.js.map

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCRipple = /** @class */ (function (_super) {
    __extends(MDCRipple, _super);
    function MDCRipple() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disabled = false;
        return _this;
    }
    MDCRipple.attachTo = function (root, opts) {
        if (opts === void 0) { opts = { isUnbounded: undefined }; }
        var ripple = new MDCRipple(root);
        // Only override unbounded behavior if option is explicitly specified
        if (opts.isUnbounded !== undefined) {
            ripple.unbounded = opts.isUnbounded;
        }
        return ripple;
    };
    MDCRipple.createAdapter = function (instance) {
        return {
            addClass: function (className) { return instance.root_.classList.add(className); },
            browserSupportsCssVars: function () { return supportsCssVariables(window); },
            computeBoundingRect: function () { return instance.root_.getBoundingClientRect(); },
            containsEventTarget: function (target) { return instance.root_.contains(target); },
            deregisterDocumentInteractionHandler: function (evtType, handler) {
                return document.documentElement.removeEventListener(evtType, handler, applyPassive());
            },
            deregisterInteractionHandler: function (evtType, handler) {
                return instance.root_.removeEventListener(evtType, handler, applyPassive());
            },
            deregisterResizeHandler: function (handler) { return window.removeEventListener('resize', handler); },
            getWindowPageOffset: function () { return ({ x: window.pageXOffset, y: window.pageYOffset }); },
            isSurfaceActive: function () { return matches(instance.root_, ':active'); },
            isSurfaceDisabled: function () { return Boolean(instance.disabled); },
            isUnbounded: function () { return Boolean(instance.unbounded); },
            registerDocumentInteractionHandler: function (evtType, handler) {
                return document.documentElement.addEventListener(evtType, handler, applyPassive());
            },
            registerInteractionHandler: function (evtType, handler) {
                return instance.root_.addEventListener(evtType, handler, applyPassive());
            },
            registerResizeHandler: function (handler) { return window.addEventListener('resize', handler); },
            removeClass: function (className) { return instance.root_.classList.remove(className); },
            updateCssVariable: function (varName, value) { return instance.root_.style.setProperty(varName, value); },
        };
    };
    Object.defineProperty(MDCRipple.prototype, "unbounded", {
        get: function () {
            return Boolean(this.unbounded_);
        },
        set: function (unbounded) {
            this.unbounded_ = Boolean(unbounded);
            this.setUnbounded_();
        },
        enumerable: true,
        configurable: true
    });
    MDCRipple.prototype.activate = function () {
        this.foundation_.activate();
    };
    MDCRipple.prototype.deactivate = function () {
        this.foundation_.deactivate();
    };
    MDCRipple.prototype.layout = function () {
        this.foundation_.layout();
    };
    MDCRipple.prototype.getDefaultFoundation = function () {
        return new MDCRippleFoundation(MDCRipple.createAdapter(this));
    };
    MDCRipple.prototype.initialSyncWithDOM = function () {
        var root = this.root_;
        this.unbounded = 'mdcRippleIsUnbounded' in root.dataset;
    };
    /**
     * Closure Compiler throws an access control error when directly accessing a
     * protected or private property inside a getter/setter, like unbounded above.
     * By accessing the protected property inside a method, we solve that problem.
     * That's why this function exists.
     */
    MDCRipple.prototype.setUnbounded_ = function () {
        this.foundation_.setUnbounded(Boolean(this.unbounded_));
    };
    return MDCRipple;
}(MDCComponent));
//# sourceMappingURL=component.js.map

function prefixFilter(obj, prefix) {
  let names = Object.getOwnPropertyNames(obj);
  const newObj = {};

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name.substring(0, prefix.length) === prefix) {
      newObj[name.substring(prefix.length)] = obj[name];
    }
  }

  return newObj;
}

export { MDCRipple as M, __extends as _, __assign as a, MDCFoundation as b, closest as c, MDCComponent as d, exclude as e, forwardEventsBuilder as f, __values as g, applyPassive as h, MDCRippleFoundation as i, matches as m, prefixFilter as p, styleInject as s, useActions as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZml4RmlsdGVyLjNiMjEwODU1LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtaW5qZWN0L2Rpc3Qvc3R5bGUtaW5qZWN0LmVzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9mb3J3YXJkRXZlbnRzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9leGNsdWRlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi91c2VBY3Rpb25zLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvdXRpbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RvbS9ldmVudHMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RvbS9wb255ZmlsbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2NvbnN0YW50cy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9jb21wb25lbnQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL3ByZWZpeEZpbHRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzdHlsZUluamVjdChjc3MsIHJlZikge1xuICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0ge307XG4gIHZhciBpbnNlcnRBdCA9IHJlZi5pbnNlcnRBdDtcblxuICBpZiAoIWNzcyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7IHJldHVybjsgfVxuXG4gIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcblxuICBpZiAoaW5zZXJ0QXQgPT09ICd0b3AnKSB7XG4gICAgaWYgKGhlYWQuZmlyc3RDaGlsZCkge1xuICAgICAgaGVhZC5pbnNlcnRCZWZvcmUoc3R5bGUsIGhlYWQuZmlyc3RDaGlsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlSW5qZWN0O1xuIiwiaW1wb3J0IHtidWJibGUsIGxpc3Rlbn0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRFdmVudHNCdWlsZGVyKGNvbXBvbmVudCwgYWRkaXRpb25hbEV2ZW50cyA9IFtdKSB7XG4gIGNvbnN0IGV2ZW50cyA9IFtcbiAgICAnZm9jdXMnLCAnYmx1cicsXG4gICAgJ2Z1bGxzY3JlZW5jaGFuZ2UnLCAnZnVsbHNjcmVlbmVycm9yJywgJ3Njcm9sbCcsXG4gICAgJ2N1dCcsICdjb3B5JywgJ3Bhc3RlJyxcbiAgICAna2V5ZG93bicsICdrZXlwcmVzcycsICdrZXl1cCcsXG4gICAgJ2F1eGNsaWNrJywgJ2NsaWNrJywgJ2NvbnRleHRtZW51JywgJ2RibGNsaWNrJywgJ21vdXNlZG93bicsICdtb3VzZWVudGVyJywgJ21vdXNlbGVhdmUnLCAnbW91c2Vtb3ZlJywgJ21vdXNlb3ZlcicsICdtb3VzZW91dCcsICdtb3VzZXVwJywgJ3BvaW50ZXJsb2NrY2hhbmdlJywgJ3BvaW50ZXJsb2NrZXJyb3InLCAnc2VsZWN0JywgJ3doZWVsJyxcbiAgICAnZHJhZycsICdkcmFnZW5kJywgJ2RyYWdlbnRlcicsICdkcmFnc3RhcnQnLCAnZHJhZ2xlYXZlJywgJ2RyYWdvdmVyJywgJ2Ryb3AnLFxuICAgICd0b3VjaGNhbmNlbCcsICd0b3VjaGVuZCcsICd0b3VjaG1vdmUnLCAndG91Y2hzdGFydCcsXG4gICAgJ3BvaW50ZXJvdmVyJywgJ3BvaW50ZXJlbnRlcicsICdwb2ludGVyZG93bicsICdwb2ludGVybW92ZScsICdwb2ludGVydXAnLCAncG9pbnRlcmNhbmNlbCcsICdwb2ludGVyb3V0JywgJ3BvaW50ZXJsZWF2ZScsICdnb3Rwb2ludGVyY2FwdHVyZScsICdsb3N0cG9pbnRlcmNhcHR1cmUnLFxuICAgIC4uLmFkZGl0aW9uYWxFdmVudHNcbiAgXTtcblxuICBmdW5jdGlvbiBmb3J3YXJkKGUpIHtcbiAgICBidWJibGUoY29tcG9uZW50LCBlKTtcbiAgfVxuXG4gIHJldHVybiBub2RlID0+IHtcbiAgICBjb25zdCBkZXN0cnVjdG9ycyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlc3RydWN0b3JzLnB1c2gobGlzdGVuKG5vZGUsIGV2ZW50c1tpXSwgZm9yd2FyZCkpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBkZXN0cm95OiAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVzdHJ1Y3RvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBkZXN0cnVjdG9yc1tpXSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufSIsImV4cG9ydCBmdW5jdGlvbiBleGNsdWRlKG9iaiwga2V5cykge1xuICBsZXQgbmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopO1xuICBjb25zdCBuZXdPYmogPSB7fTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbmFtZSA9IG5hbWVzW2ldO1xuICAgIGNvbnN0IGNhc2hJbmRleCA9IG5hbWUuaW5kZXhPZignJCcpO1xuICAgIGlmIChjYXNoSW5kZXggIT09IC0xICYmIGtleXMuaW5kZXhPZihuYW1lLnN1YnN0cmluZygwLCBjYXNoSW5kZXggKyAxKSkgIT09IC0xKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGtleXMuaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBuZXdPYmpbbmFtZV0gPSBvYmpbbmFtZV07XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufSIsImV4cG9ydCBmdW5jdGlvbiB1c2VBY3Rpb25zKG5vZGUsIGFjdGlvbnMpIHtcbiAgbGV0IG9iamVjdHMgPSBbXTtcblxuICBpZiAoYWN0aW9ucykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYWN0aW9uc1tpXSk7XG4gICAgICBjb25zdCBhY3Rpb24gPSBpc0FycmF5ID8gYWN0aW9uc1tpXVswXSA6IGFjdGlvbnNbaV07XG4gICAgICBpZiAoaXNBcnJheSAmJiBhY3Rpb25zW2ldLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgb2JqZWN0cy5wdXNoKGFjdGlvbihub2RlLCBhY3Rpb25zW2ldWzFdKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmplY3RzLnB1c2goYWN0aW9uKG5vZGUpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVwZGF0ZShhY3Rpb25zKSB7XG4gICAgICBpZiAoKGFjdGlvbnMgJiYgYWN0aW9ucy5sZW5ndGggfHwgMCkgIT0gb2JqZWN0cy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBub3QgY2hhbmdlIHRoZSBsZW5ndGggb2YgYW4gYWN0aW9ucyBhcnJheS4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGlvbnMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKG9iamVjdHNbaV0gJiYgJ3VwZGF0ZScgaW4gb2JqZWN0c1tpXSkge1xuICAgICAgICAgICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYWN0aW9uc1tpXSk7XG4gICAgICAgICAgICBpZiAoaXNBcnJheSAmJiBhY3Rpb25zW2ldLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgb2JqZWN0c1tpXS51cGRhdGUoYWN0aW9uc1tpXVsxXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBvYmplY3RzW2ldLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChvYmplY3RzW2ldICYmICdkZXN0cm95JyBpbiBvYmplY3RzW2ldKSB7XG4gICAgICAgICAgb2JqZWN0c1tpXS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCIvKipcbiAqIFN0b3JlcyByZXN1bHQgZnJvbSBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZyB0b1xuICogZGV0ZWN0IENTUyBjdXN0b20gdmFyaWFibGUgc3VwcG9ydC5cbiAqL1xudmFyIHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcbmZ1bmN0aW9uIGRldGVjdEVkZ2VQc2V1ZG9WYXJCdWcod2luZG93T2JqKSB7XG4gICAgLy8gRGV0ZWN0IHZlcnNpb25zIG9mIEVkZ2Ugd2l0aCBidWdneSB2YXIoKSBzdXBwb3J0XG4gICAgLy8gU2VlOiBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xMTQ5NTQ0OC9cbiAgICB2YXIgZG9jdW1lbnQgPSB3aW5kb3dPYmouZG9jdW1lbnQ7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBub2RlLmNsYXNzTmFtZSA9ICdtZGMtcmlwcGxlLXN1cmZhY2UtLXRlc3QtZWRnZS12YXItYnVnJztcbiAgICAvLyBBcHBlbmQgdG8gaGVhZCBpbnN0ZWFkIG9mIGJvZHkgYmVjYXVzZSB0aGlzIHNjcmlwdCBtaWdodCBiZSBpbnZva2VkIGluIHRoZVxuICAgIC8vIGhlYWQsIGluIHdoaWNoIGNhc2UgdGhlIGJvZHkgZG9lc24ndCBleGlzdCB5ZXQuIFRoZSBwcm9iZSB3b3JrcyBlaXRoZXIgd2F5LlxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgLy8gVGhlIGJ1ZyBleGlzdHMgaWYgOjpiZWZvcmUgc3R5bGUgZW5kcyB1cCBwcm9wYWdhdGluZyB0byB0aGUgcGFyZW50IGVsZW1lbnQuXG4gICAgLy8gQWRkaXRpb25hbGx5LCBnZXRDb21wdXRlZFN0eWxlIHJldHVybnMgbnVsbCBpbiBpZnJhbWVzIHdpdGggZGlzcGxheTogXCJub25lXCIgaW4gRmlyZWZveCxcbiAgICAvLyBidXQgRmlyZWZveCBpcyBrbm93biB0byBzdXBwb3J0IENTUyBjdXN0b20gcHJvcGVydGllcyBjb3JyZWN0bHkuXG4gICAgLy8gU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01NDgzOTdcbiAgICB2YXIgY29tcHV0ZWRTdHlsZSA9IHdpbmRvd09iai5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIHZhciBoYXNQc2V1ZG9WYXJCdWcgPSBjb21wdXRlZFN0eWxlICE9PSBudWxsICYmIGNvbXB1dGVkU3R5bGUuYm9yZGVyVG9wU3R5bGUgPT09ICdzb2xpZCc7XG4gICAgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgfVxuICAgIHJldHVybiBoYXNQc2V1ZG9WYXJCdWc7XG59XG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93T2JqLCBmb3JjZVJlZnJlc2gpIHtcbiAgICBpZiAoZm9yY2VSZWZyZXNoID09PSB2b2lkIDApIHsgZm9yY2VSZWZyZXNoID0gZmFsc2U7IH1cbiAgICB2YXIgQ1NTID0gd2luZG93T2JqLkNTUztcbiAgICB2YXIgc3VwcG9ydHNDc3NWYXJzID0gc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuICAgIGlmICh0eXBlb2Ygc3VwcG9ydHNDc3NWYXJpYWJsZXNfID09PSAnYm9vbGVhbicgJiYgIWZvcmNlUmVmcmVzaCkge1xuICAgICAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuICAgIH1cbiAgICB2YXIgc3VwcG9ydHNGdW5jdGlvblByZXNlbnQgPSBDU1MgJiYgdHlwZW9mIENTUy5zdXBwb3J0cyA9PT0gJ2Z1bmN0aW9uJztcbiAgICBpZiAoIXN1cHBvcnRzRnVuY3Rpb25QcmVzZW50KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgPSBDU1Muc3VwcG9ydHMoJy0tY3NzLXZhcnMnLCAneWVzJyk7XG4gICAgLy8gU2VlOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU0NjY5XG4gICAgLy8gU2VlOiBSRUFETUUgc2VjdGlvbiBvbiBTYWZhcmlcbiAgICB2YXIgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzID0gKENTUy5zdXBwb3J0cygnKC0tY3NzLXZhcnM6IHllcyknKSAmJlxuICAgICAgICBDU1Muc3VwcG9ydHMoJ2NvbG9yJywgJyMwMDAwMDAwMCcpKTtcbiAgICBpZiAoZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyB8fCB3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMpIHtcbiAgICAgICAgc3VwcG9ydHNDc3NWYXJzID0gIWRldGVjdEVkZ2VQc2V1ZG9WYXJCdWcod2luZG93T2JqKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN1cHBvcnRzQ3NzVmFycyA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWZvcmNlUmVmcmVzaCkge1xuICAgICAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPSBzdXBwb3J0c0Nzc1ZhcnM7XG4gICAgfVxuICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcnM7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzKGV2dCwgcGFnZU9mZnNldCwgY2xpZW50UmVjdCkge1xuICAgIGlmICghZXZ0KSB7XG4gICAgICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTtcbiAgICB9XG4gICAgdmFyIHggPSBwYWdlT2Zmc2V0LngsIHkgPSBwYWdlT2Zmc2V0Lnk7XG4gICAgdmFyIGRvY3VtZW50WCA9IHggKyBjbGllbnRSZWN0LmxlZnQ7XG4gICAgdmFyIGRvY3VtZW50WSA9IHkgKyBjbGllbnRSZWN0LnRvcDtcbiAgICB2YXIgbm9ybWFsaXplZFg7XG4gICAgdmFyIG5vcm1hbGl6ZWRZO1xuICAgIC8vIERldGVybWluZSB0b3VjaCBwb2ludCByZWxhdGl2ZSB0byB0aGUgcmlwcGxlIGNvbnRhaW5lci5cbiAgICBpZiAoZXZ0LnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgICAgICB2YXIgdG91Y2hFdmVudCA9IGV2dDtcbiAgICAgICAgbm9ybWFsaXplZFggPSB0b3VjaEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgICAgICBub3JtYWxpemVkWSA9IHRvdWNoRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgLSBkb2N1bWVudFk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgbW91c2VFdmVudCA9IGV2dDtcbiAgICAgICAgbm9ybWFsaXplZFggPSBtb3VzZUV2ZW50LnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgICAgICBub3JtYWxpemVkWSA9IG1vdXNlRXZlbnQucGFnZVkgLSBkb2N1bWVudFk7XG4gICAgfVxuICAgIHJldHVybiB7IHg6IG5vcm1hbGl6ZWRYLCB5OiBub3JtYWxpemVkWSB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbC5qcy5tYXAiLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBNRENGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1EQ0ZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICBpZiAoYWRhcHRlciA9PT0gdm9pZCAwKSB7IGFkYXB0ZXIgPSB7fTsgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfID0gYWRhcHRlcjtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBldmVyeVxuICAgICAgICAgICAgLy8gQ1NTIGNsYXNzIHRoZSBmb3VuZGF0aW9uIGNsYXNzIG5lZWRzIGFzIGEgcHJvcGVydHkuIGUuZy4ge0FDVElWRTogJ21kYy1jb21wb25lbnQtLWFjdGl2ZSd9XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgICAgICAgICAvLyBzZW1hbnRpYyBzdHJpbmdzIGFzIGNvbnN0YW50cy4gZS5nLiB7QVJJQV9ST0xFOiAndGFibGlzdCd9XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgICAgICAgICAvLyBvZiBpdHMgc2VtYW50aWMgbnVtYmVycyBhcyBjb25zdGFudHMuIGUuZy4ge0FOSU1BVElPTl9ERUxBWV9NUzogMzUwfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBtYXkgY2hvb3NlIHRvIGltcGxlbWVudCB0aGlzIGdldHRlciBpbiBvcmRlciB0byBwcm92aWRlIGEgY29udmVuaWVudFxuICAgICAgICAgICAgLy8gd2F5IG9mIHZpZXdpbmcgdGhlIG5lY2Vzc2FyeSBtZXRob2RzIG9mIGFuIGFkYXB0ZXIuIEluIHRoZSBmdXR1cmUsIHRoaXMgY291bGQgYWxzbyBiZSB1c2VkIGZvciBhZGFwdGVyXG4gICAgICAgICAgICAvLyB2YWxpZGF0aW9uLlxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChyZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gICAgfTtcbiAgICBNRENGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGRlLWluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChkZS1yZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gICAgfTtcbiAgICByZXR1cm4gTURDRm91bmRhdGlvbjtcbn0oKSk7XG5leHBvcnQgeyBNRENGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbic7XG52YXIgTURDQ29tcG9uZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1EQ0NvbXBvbmVudChyb290LCBmb3VuZGF0aW9uKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMjsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm9vdF8gPSByb290O1xuICAgICAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgdHNsaWJfMS5fX3NwcmVhZChhcmdzKSk7XG4gICAgICAgIC8vIE5vdGUgdGhhdCB3ZSBpbml0aWFsaXplIGZvdW5kYXRpb24gaGVyZSBhbmQgbm90IHdpdGhpbiB0aGUgY29uc3RydWN0b3IncyBkZWZhdWx0IHBhcmFtIHNvIHRoYXRcbiAgICAgICAgLy8gdGhpcy5yb290XyBpcyBkZWZpbmVkIGFuZCBjYW4gYmUgdXNlZCB3aXRoaW4gdGhlIGZvdW5kYXRpb24gY2xhc3MuXG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8gPSBmb3VuZGF0aW9uID09PSB1bmRlZmluZWQgPyB0aGlzLmdldERlZmF1bHRGb3VuZGF0aW9uKCkgOiBmb3VuZGF0aW9uO1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmluaXQoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsU3luY1dpdGhET00oKTtcbiAgICB9XG4gICAgTURDQ29tcG9uZW50LmF0dGFjaFRvID0gZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyB3aGljaCBleHRlbmQgTURDQmFzZSBzaG91bGQgcHJvdmlkZSBhbiBhdHRhY2hUbygpIG1ldGhvZCB0aGF0IHRha2VzIGEgcm9vdCBlbGVtZW50IGFuZFxuICAgICAgICAvLyByZXR1cm5zIGFuIGluc3RhbnRpYXRlZCBjb21wb25lbnQgd2l0aCBpdHMgcm9vdCBzZXQgdG8gdGhhdCBlbGVtZW50LiBBbHNvIG5vdGUgdGhhdCBpbiB0aGUgY2FzZXMgb2ZcbiAgICAgICAgLy8gc3ViY2xhc3NlcywgYW4gZXhwbGljaXQgZm91bmRhdGlvbiBjbGFzcyB3aWxsIG5vdCBoYXZlIHRvIGJlIHBhc3NlZCBpbjsgaXQgd2lsbCBzaW1wbHkgYmUgaW5pdGlhbGl6ZWRcbiAgICAgICAgLy8gZnJvbSBnZXREZWZhdWx0Rm91bmRhdGlvbigpLlxuICAgICAgICByZXR1cm4gbmV3IE1EQ0NvbXBvbmVudChyb290LCBuZXcgTURDRm91bmRhdGlvbih7fSkpO1xuICAgIH07XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IG1ldGhvZCBwYXJhbSBvbmx5IGV4aXN0cyBmb3IgdHlwaW5nIHB1cnBvc2VzOyBpdCBkb2VzIG5vdCBuZWVkIHRvIGJlIHVuaXQgdGVzdGVkICovXG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2FyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIF9hcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3ViY2xhc3NlcyBjYW4gb3ZlcnJpZGUgdGhpcyB0byBkbyBhbnkgYWRkaXRpb25hbCBzZXR1cCB3b3JrIHRoYXQgd291bGQgYmUgY29uc2lkZXJlZCBwYXJ0IG9mIGFcbiAgICAgICAgLy8gXCJjb25zdHJ1Y3RvclwiLiBFc3NlbnRpYWxseSwgaXQgaXMgYSBob29rIGludG8gdGhlIHBhcmVudCBjb25zdHJ1Y3RvciBiZWZvcmUgdGhlIGZvdW5kYXRpb24gaXNcbiAgICAgICAgLy8gaW5pdGlhbGl6ZWQuIEFueSBhZGRpdGlvbmFsIGFyZ3VtZW50cyBiZXNpZGVzIHJvb3QgYW5kIGZvdW5kYXRpb24gd2lsbCBiZSBwYXNzZWQgaW4gaGVyZS5cbiAgICB9O1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUuZ2V0RGVmYXVsdEZvdW5kYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgbXVzdCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byByZXR1cm4gYSBwcm9wZXJseSBjb25maWd1cmVkIGZvdW5kYXRpb24gY2xhc3MgZm9yIHRoZVxuICAgICAgICAvLyBjb21wb25lbnQuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIGdldERlZmF1bHRGb3VuZGF0aW9uIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgJyArXG4gICAgICAgICAgICAnZm91bmRhdGlvbiBjbGFzcycpO1xuICAgIH07XG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS5pbml0aWFsU3luY1dpdGhET00gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIGlmIHRoZXkgbmVlZCB0byBwZXJmb3JtIHdvcmsgdG8gc3luY2hyb25pemUgd2l0aCBhIGhvc3QgRE9NXG4gICAgICAgIC8vIG9iamVjdC4gQW4gZXhhbXBsZSBvZiB0aGlzIHdvdWxkIGJlIGEgZm9ybSBjb250cm9sIHdyYXBwZXIgdGhhdCBuZWVkcyB0byBzeW5jaHJvbml6ZSBpdHMgaW50ZXJuYWwgc3RhdGVcbiAgICAgICAgLy8gdG8gc29tZSBwcm9wZXJ0eSBvciBhdHRyaWJ1dGUgb2YgdGhlIGhvc3QgRE9NLiBQbGVhc2Ugbm90ZTogdGhpcyBpcyAqbm90KiB0aGUgcGxhY2UgdG8gcGVyZm9ybSBET01cbiAgICAgICAgLy8gcmVhZHMvd3JpdGVzIHRoYXQgd291bGQgY2F1c2UgbGF5b3V0IC8gcGFpbnQsIGFzIHRoaXMgaXMgY2FsbGVkIHN5bmNocm9ub3VzbHkgZnJvbSB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgIH07XG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIG1heSBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmVsZWFzZSBhbnkgcmVzb3VyY2VzIC8gZGVyZWdpc3RlciBhbnkgbGlzdGVuZXJzIHRoZXkgaGF2ZVxuICAgICAgICAvLyBhdHRhY2hlZC4gQW4gZXhhbXBsZSBvZiB0aGlzIG1pZ2h0IGJlIGRlcmVnaXN0ZXJpbmcgYSByZXNpemUgZXZlbnQgZnJvbSB0aGUgd2luZG93IG9iamVjdC5cbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5kZXN0cm95KCk7XG4gICAgfTtcbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmxpc3RlbiA9IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICB9O1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUudW5saXN0ZW4gPSBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBGaXJlcyBhIGNyb3NzLWJyb3dzZXItY29tcGF0aWJsZSBjdXN0b20gZXZlbnQgZnJvbSB0aGUgY29tcG9uZW50IHJvb3Qgb2YgdGhlIGdpdmVuIHR5cGUsIHdpdGggdGhlIGdpdmVuIGRhdGEuXG4gICAgICovXG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gKGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSkge1xuICAgICAgICBpZiAoc2hvdWxkQnViYmxlID09PSB2b2lkIDApIHsgc2hvdWxkQnViYmxlID0gZmFsc2U7IH1cbiAgICAgICAgdmFyIGV2dDtcbiAgICAgICAgaWYgKHR5cGVvZiBDdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2dFR5cGUsIHtcbiAgICAgICAgICAgICAgICBidWJibGVzOiBzaG91bGRCdWJibGUsXG4gICAgICAgICAgICAgICAgZGV0YWlsOiBldnREYXRhLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgICAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb290Xy5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDQ29tcG9uZW50O1xufSgpKTtcbmV4cG9ydCB7IE1EQ0NvbXBvbmVudCB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0NvbXBvbmVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIGFwcGx5UGFzc2l2ZSB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZyB0byBkZXRlY3RcbiAqIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXIgc3VwcG9ydC5cbiAqL1xudmFyIHN1cHBvcnRzUGFzc2l2ZV87XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnMsIGFuZFxuICogaWYgc28sIHVzZSB0aGVtLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQYXNzaXZlKGdsb2JhbE9iaiwgZm9yY2VSZWZyZXNoKSB7XG4gICAgaWYgKGdsb2JhbE9iaiA9PT0gdm9pZCAwKSB7IGdsb2JhbE9iaiA9IHdpbmRvdzsgfVxuICAgIGlmIChmb3JjZVJlZnJlc2ggPT09IHZvaWQgMCkgeyBmb3JjZVJlZnJlc2ggPSBmYWxzZTsgfVxuICAgIGlmIChzdXBwb3J0c1Bhc3NpdmVfID09PSB1bmRlZmluZWQgfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIHZhciBpc1N1cHBvcnRlZF8xID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBnbG9iYWxPYmouZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSwge1xuICAgICAgICAgICAgICAgIGdldCBwYXNzaXZlKCkge1xuICAgICAgICAgICAgICAgICAgICBpc1N1cHBvcnRlZF8xID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzU3VwcG9ydGVkXzE7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIH0gLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1lbXB0eSBjYW5ub3QgdGhyb3cgZXJyb3IgZHVlIHRvIHRlc3RzLiB0c2xpbnQgYWxzbyBkaXNhYmxlcyBjb25zb2xlLmxvZy5cbiAgICAgICAgc3VwcG9ydHNQYXNzaXZlXyA9IGlzU3VwcG9ydGVkXzE7XG4gICAgfVxuICAgIHJldHVybiBzdXBwb3J0c1Bhc3NpdmVfID8geyBwYXNzaXZlOiB0cnVlIH0gOiBmYWxzZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV2ZW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbi8qKlxuICogQGZpbGVvdmVydmlldyBBIFwicG9ueWZpbGxcIiBpcyBhIHBvbHlmaWxsIHRoYXQgZG9lc24ndCBtb2RpZnkgdGhlIGdsb2JhbCBwcm90b3R5cGUgY2hhaW4uXG4gKiBUaGlzIG1ha2VzIHBvbnlmaWxscyBzYWZlciB0aGFuIHRyYWRpdGlvbmFsIHBvbHlmaWxscywgZXNwZWNpYWxseSBmb3IgbGlicmFyaWVzIGxpa2UgTURDLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VzdChlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGlmIChlbGVtZW50LmNsb3Nlc3QpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xvc2VzdChzZWxlY3Rvcik7XG4gICAgfVxuICAgIHZhciBlbCA9IGVsZW1lbnQ7XG4gICAgd2hpbGUgKGVsKSB7XG4gICAgICAgIGlmIChtYXRjaGVzKGVsLCBzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuICAgICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoZXMoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICB2YXIgbmF0aXZlTWF0Y2hlcyA9IGVsZW1lbnQubWF0Y2hlc1xuICAgICAgICB8fCBlbGVtZW50LndlYmtpdE1hdGNoZXNTZWxlY3RvclxuICAgICAgICB8fCBlbGVtZW50Lm1zTWF0Y2hlc1NlbGVjdG9yO1xuICAgIHJldHVybiBuYXRpdmVNYXRjaGVzLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG9ueWZpbGwuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5leHBvcnQgdmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgLy8gUmlwcGxlIGlzIGEgc3BlY2lhbCBjYXNlIHdoZXJlIHRoZSBcInJvb3RcIiBjb21wb25lbnQgaXMgcmVhbGx5IGEgXCJtaXhpblwiIG9mIHNvcnRzLFxuICAgIC8vIGdpdmVuIHRoYXQgaXQncyBhbiAndXBncmFkZScgdG8gYW4gZXhpc3RpbmcgY29tcG9uZW50LiBUaGF0IGJlaW5nIHNhaWQgaXQgaXMgdGhlIHJvb3RcbiAgICAvLyBDU1MgY2xhc3MgdGhhdCBhbGwgb3RoZXIgQ1NTIGNsYXNzZXMgZGVyaXZlIGZyb20uXG4gICAgQkdfRk9DVVNFRDogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZCcsXG4gICAgRkdfQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtYWN0aXZhdGlvbicsXG4gICAgRkdfREVBQ1RJVkFUSU9OOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1kZWFjdGl2YXRpb24nLFxuICAgIFJPT1Q6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkJyxcbiAgICBVTkJPVU5ERUQ6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS11bmJvdW5kZWQnLFxufTtcbmV4cG9ydCB2YXIgc3RyaW5ncyA9IHtcbiAgICBWQVJfRkdfU0NBTEU6ICctLW1kYy1yaXBwbGUtZmctc2NhbGUnLFxuICAgIFZBUl9GR19TSVpFOiAnLS1tZGMtcmlwcGxlLWZnLXNpemUnLFxuICAgIFZBUl9GR19UUkFOU0xBVEVfRU5EOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQnLFxuICAgIFZBUl9GR19UUkFOU0xBVEVfU1RBUlQ6ICctLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLXN0YXJ0JyxcbiAgICBWQVJfTEVGVDogJy0tbWRjLXJpcHBsZS1sZWZ0JyxcbiAgICBWQVJfVE9QOiAnLS1tZGMtcmlwcGxlLXRvcCcsXG59O1xuZXhwb3J0IHZhciBudW1iZXJzID0ge1xuICAgIERFQUNUSVZBVElPTl9USU1FT1VUX01TOiAyMjUsXG4gICAgRkdfREVBQ1RJVkFUSU9OX01TOiAxNTAsXG4gICAgSU5JVElBTF9PUklHSU5fU0NBTEU6IDAuNixcbiAgICBQQURESU5HOiAxMCxcbiAgICBUQVBfREVMQVlfTVM6IDMwMCxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3NlcywgbnVtYmVycywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyB9IGZyb20gJy4vdXRpbCc7XG4vLyBBY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIHRoZSByb290IGVsZW1lbnQgb2YgZWFjaCBpbnN0YW5jZSBmb3IgYWN0aXZhdGlvblxudmFyIEFDVElWQVRJT05fRVZFTlRfVFlQRVMgPSBbXG4gICAgJ3RvdWNoc3RhcnQnLCAncG9pbnRlcmRvd24nLCAnbW91c2Vkb3duJywgJ2tleWRvd24nLFxuXTtcbi8vIERlYWN0aXZhdGlvbiBldmVudHMgcmVnaXN0ZXJlZCBvbiBkb2N1bWVudEVsZW1lbnQgd2hlbiBhIHBvaW50ZXItcmVsYXRlZCBkb3duIGV2ZW50IG9jY3Vyc1xudmFyIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTID0gW1xuICAgICd0b3VjaGVuZCcsICdwb2ludGVydXAnLCAnbW91c2V1cCcsICdjb250ZXh0bWVudScsXG5dO1xuLy8gc2ltdWx0YW5lb3VzIG5lc3RlZCBhY3RpdmF0aW9uc1xudmFyIGFjdGl2YXRlZFRhcmdldHMgPSBbXTtcbnZhciBNRENSaXBwbGVGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ1JpcHBsZUZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDUmlwcGxlRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ1JpcHBsZUZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmFjdGl2YXRpb25UaW1lcl8gPSAwO1xuICAgICAgICBfdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSAwO1xuICAgICAgICBfdGhpcy5mZ1NjYWxlXyA9ICcwJztcbiAgICAgICAgX3RoaXMuZnJhbWVfID0geyB3aWR0aDogMCwgaGVpZ2h0OiAwIH07XG4gICAgICAgIF90aGlzLmluaXRpYWxTaXplXyA9IDA7XG4gICAgICAgIF90aGlzLmxheW91dEZyYW1lXyA9IDA7XG4gICAgICAgIF90aGlzLm1heFJhZGl1c18gPSAwO1xuICAgICAgICBfdGhpcy51bmJvdW5kZWRDb29yZHNfID0geyBsZWZ0OiAwLCB0b3A6IDAgfTtcbiAgICAgICAgX3RoaXMuYWN0aXZhdGlvblN0YXRlXyA9IF90aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgIF90aGlzLmFjdGl2YXRpb25UaW1lckNhbGxiYWNrXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSB0cnVlO1xuICAgICAgICAgICAgX3RoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmFjdGl2YXRlSGFuZGxlcl8gPSBmdW5jdGlvbiAoZSkgeyByZXR1cm4gX3RoaXMuYWN0aXZhdGVfKGUpOyB9O1xuICAgICAgICBfdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5kZWFjdGl2YXRlXygpOyB9O1xuICAgICAgICBfdGhpcy5mb2N1c0hhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlRm9jdXMoKTsgfTtcbiAgICAgICAgX3RoaXMuYmx1ckhhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlQmx1cigpOyB9O1xuICAgICAgICBfdGhpcy5yZXNpemVIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmxheW91dCgpOyB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENSaXBwbGVGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZUZvdW5kYXRpb24sIFwibnVtYmVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlcnM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENSaXBwbGVGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSxcbiAgICAgICAgICAgICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDAsIGxlZnQ6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSk7IH0sXG4gICAgICAgICAgICAgICAgY29udGFpbnNFdmVudFRhcmdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyB4OiAwLCB5OiAwIH0pOyB9LFxuICAgICAgICAgICAgICAgIGlzU3VyZmFjZUFjdGl2ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSxcbiAgICAgICAgICAgICAgICBpc1N1cmZhY2VEaXNhYmxlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSxcbiAgICAgICAgICAgICAgICBpc1VuYm91bmRlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc3VwcG9ydHNQcmVzc1JpcHBsZSA9IHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlclJvb3RIYW5kbGVyc18oc3VwcG9ydHNQcmVzc1JpcHBsZSk7XG4gICAgICAgIGlmIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMsIFJPT1RfMSA9IF9hLlJPT1QsIFVOQk9VTkRFRF8xID0gX2EuVU5CT1VOREVEO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhST09UXzEpO1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFVOQk9VTkRFRF8xKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVW5ib3VuZGVkIHJpcHBsZXMgbmVlZCBsYXlvdXQgbG9naWMgYXBwbGllZCBpbW1lZGlhdGVseSB0byBzZXQgY29vcmRpbmF0ZXMgZm9yIGJvdGggc2hhZGUgYW5kIHJpcHBsZVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZhdGlvblRpbWVyXykge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFjdGl2YXRpb25UaW1lcl8pO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfQUNUSVZBVElPTik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pO1xuICAgICAgICAgICAgICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19ERUFDVElWQVRJT04pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIF9hID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLCBST09UXzIgPSBfYS5ST09ULCBVTkJPVU5ERURfMiA9IF9hLlVOQk9VTkRFRDtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoUk9PVF8yKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhVTkJPVU5ERURfMik7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVtb3ZlQ3NzVmFyc18oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVyZWdpc3RlclJvb3RIYW5kbGVyc18oKTtcbiAgICAgICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZXZ0IE9wdGlvbmFsIGV2ZW50IGNvbnRhaW5pbmcgcG9zaXRpb24gaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHRoaXMuYWN0aXZhdGVfKGV2dCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZWFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRlYWN0aXZhdGVfKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5sYXlvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmxheW91dEZyYW1lXykge1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5sYXlvdXRGcmFtZV8pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF5b3V0RnJhbWVfID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgICAgICAgX3RoaXMubGF5b3V0RnJhbWVfID0gMDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRVbmJvdW5kZWQgPSBmdW5jdGlvbiAodW5ib3VuZGVkKSB7XG4gICAgICAgIHZhciBVTkJPVU5ERUQgPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuVU5CT1VOREVEO1xuICAgICAgICBpZiAodW5ib3VuZGVkKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFVOQk9VTkRFRCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFVOQk9VTkRFRCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5CR19GT0NVU0VEKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVCbHVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5CR19GT0NVU0VEKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBXZSBjb21wdXRlIHRoaXMgcHJvcGVydHkgc28gdGhhdCB3ZSBhcmUgbm90IHF1ZXJ5aW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjbGllbnRcbiAgICAgKiB1bnRpbCB0aGUgcG9pbnQgaW4gdGltZSB3aGVyZSB0aGUgZm91bmRhdGlvbiByZXF1ZXN0cyBpdC4gVGhpcyBwcmV2ZW50cyBzY2VuYXJpb3Mgd2hlcmVcbiAgICAgKiBjbGllbnQtc2lkZSBmZWF0dXJlLWRldGVjdGlvbiBtYXkgaGFwcGVuIHRvbyBlYXJseSwgc3VjaCBhcyB3aGVuIGNvbXBvbmVudHMgYXJlIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXJcbiAgICAgKiBhbmQgdGhlbiBpbml0aWFsaXplZCBhdCBtb3VudCB0aW1lIG9uIHRoZSBjbGllbnQuXG4gICAgICovXG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuc3VwcG9ydHNQcmVzc1JpcHBsZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnMoKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWN0aXZhdGlvbkV2ZW50OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBoYXNEZWFjdGl2YXRpb25VWFJ1bjogZmFsc2UsXG4gICAgICAgICAgICBpc0FjdGl2YXRlZDogZmFsc2UsXG4gICAgICAgICAgICBpc1Byb2dyYW1tYXRpYzogZmFsc2UsXG4gICAgICAgICAgICB3YXNBY3RpdmF0ZWRCeVBvaW50ZXI6IGZhbHNlLFxuICAgICAgICAgICAgd2FzRWxlbWVudE1hZGVBY3RpdmU6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogc3VwcG9ydHNQcmVzc1JpcHBsZSBQYXNzZWQgZnJvbSBpbml0IHRvIHNhdmUgYSByZWR1bmRhbnQgZnVuY3Rpb24gY2FsbFxuICAgICAqL1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJlZ2lzdGVyUm9vdEhhbmRsZXJzXyA9IGZ1bmN0aW9uIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICAgICAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXJfKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoZXZ0LnR5cGUgPT09ICdrZXlkb3duJykge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlcmVnaXN0ZXJSb290SGFuZGxlcnNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMuYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXJfKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleXVwJywgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5yZW1vdmVDc3NWYXJzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHJpcHBsZVN0cmluZ3MgPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3M7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocmlwcGxlU3RyaW5ncyk7XG4gICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ1ZBUl8nKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKHJpcHBsZVN0cmluZ3Nba2V5XSwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuYWN0aXZhdGVfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1N1cmZhY2VEaXNhYmxlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEF2b2lkIHJlYWN0aW5nIHRvIGZvbGxvdy1vbiBldmVudHMgZmlyZWQgYnkgdG91Y2ggZGV2aWNlIGFmdGVyIGFuIGFscmVhZHktcHJvY2Vzc2VkIHVzZXIgaW50ZXJhY3Rpb25cbiAgICAgICAgdmFyIHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ID0gdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF87XG4gICAgICAgIHZhciBpc1NhbWVJbnRlcmFjdGlvbiA9IHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ICYmIGV2dCAhPT0gdW5kZWZpbmVkICYmIHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50LnR5cGUgIT09IGV2dC50eXBlO1xuICAgICAgICBpZiAoaXNTYW1lSW50ZXJhY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQgPSB0cnVlO1xuICAgICAgICBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPSBldnQgPT09IHVuZGVmaW5lZDtcbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLmFjdGl2YXRpb25FdmVudCA9IGV2dDtcbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLndhc0FjdGl2YXRlZEJ5UG9pbnRlciA9IGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYyA/IGZhbHNlIDogZXZ0ICE9PSB1bmRlZmluZWQgJiYgKGV2dC50eXBlID09PSAnbW91c2Vkb3duJyB8fCBldnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGV2dC50eXBlID09PSAncG9pbnRlcmRvd24nKTtcbiAgICAgICAgdmFyIGhhc0FjdGl2YXRlZENoaWxkID0gZXZ0ICE9PSB1bmRlZmluZWQgJiYgYWN0aXZhdGVkVGFyZ2V0cy5sZW5ndGggPiAwICYmIGFjdGl2YXRlZFRhcmdldHMuc29tZShmdW5jdGlvbiAodGFyZ2V0KSB7IHJldHVybiBfdGhpcy5hZGFwdGVyXy5jb250YWluc0V2ZW50VGFyZ2V0KHRhcmdldCk7IH0pO1xuICAgICAgICBpZiAoaGFzQWN0aXZhdGVkQ2hpbGQpIHtcbiAgICAgICAgICAgIC8vIEltbWVkaWF0ZWx5IHJlc2V0IGFjdGl2YXRpb24gc3RhdGUsIHdoaWxlIHByZXNlcnZpbmcgbG9naWMgdGhhdCBwcmV2ZW50cyB0b3VjaCBmb2xsb3ctb24gZXZlbnRzXG4gICAgICAgICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYWN0aXZhdGVkVGFyZ2V0cy5wdXNoKGV2dC50YXJnZXQpO1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyhldnQpO1xuICAgICAgICB9XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSA9IHRoaXMuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZXZ0KTtcbiAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlQWN0aXZhdGlvbl8oKTtcbiAgICAgICAgfVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gUmVzZXQgYXJyYXkgb24gbmV4dCBmcmFtZSBhZnRlciB0aGUgY3VycmVudCBldmVudCBoYXMgaGFkIGEgY2hhbmNlIHRvIGJ1YmJsZSB0byBwcmV2ZW50IGFuY2VzdG9yIHJpcHBsZXNcbiAgICAgICAgICAgIGFjdGl2YXRlZFRhcmdldHMgPSBbXTtcbiAgICAgICAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlXG4gICAgICAgICAgICAgICAgJiYgZXZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAmJiAoZXZ0LmtleSA9PT0gJyAnIHx8IGV2dC5rZXlDb2RlID09PSAzMikpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBzcGFjZSB3YXMgcHJlc3NlZCwgdHJ5IGFnYWluIHdpdGhpbiBhbiByQUYgY2FsbCB0byBkZXRlY3QgOmFjdGl2ZSwgYmVjYXVzZSBkaWZmZXJlbnQgVUFzIHJlcG9ydFxuICAgICAgICAgICAgICAgIC8vIGFjdGl2ZSBzdGF0ZXMgaW5jb25zaXN0ZW50bHkgd2hlbiB0aGV5J3JlIGNhbGxlZCB3aXRoaW4gZXZlbnQgaGFuZGxpbmcgY29kZTpcbiAgICAgICAgICAgICAgICAvLyAtIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTYzNTk3MVxuICAgICAgICAgICAgICAgIC8vIC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTI5Mzc0MVxuICAgICAgICAgICAgICAgIC8vIFdlIHRyeSBmaXJzdCBvdXRzaWRlIHJBRiB0byBzdXBwb3J0IEVkZ2UsIHdoaWNoIGRvZXMgbm90IGV4aGliaXQgdGhpcyBwcm9ibGVtLCBidXQgd2lsbCBjcmFzaCBpZiBhIENTU1xuICAgICAgICAgICAgICAgIC8vIHZhcmlhYmxlIGlzIHNldCB3aXRoaW4gYSByQUYgY2FsbGJhY2sgZm9yIGEgc3VibWl0IGJ1dHRvbiBpbnRlcmFjdGlvbiAoIzIyNDEpLlxuICAgICAgICAgICAgICAgIGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSA9IF90aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGV2dCk7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hbmltYXRlQWN0aXZhdGlvbl8oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIC8vIFJlc2V0IGFjdGl2YXRpb24gc3RhdGUgaW1tZWRpYXRlbHkgaWYgZWxlbWVudCB3YXMgbm90IG1hZGUgYWN0aXZlLlxuICAgICAgICAgICAgICAgIF90aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSBfdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICByZXR1cm4gKGV2dCAhPT0gdW5kZWZpbmVkICYmIGV2dC50eXBlID09PSAna2V5ZG93bicpID8gdGhpcy5hZGFwdGVyXy5pc1N1cmZhY2VBY3RpdmUoKSA6IHRydWU7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5hbmltYXRlQWN0aXZhdGlvbl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfYSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncywgVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCA9IF9hLlZBUl9GR19UUkFOU0xBVEVfU1RBUlQsIFZBUl9GR19UUkFOU0xBVEVfRU5EID0gX2EuVkFSX0ZHX1RSQU5TTEFURV9FTkQ7XG4gICAgICAgIHZhciBfYiA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcywgRkdfREVBQ1RJVkFUSU9OID0gX2IuRkdfREVBQ1RJVkFUSU9OLCBGR19BQ1RJVkFUSU9OID0gX2IuRkdfQUNUSVZBVElPTjtcbiAgICAgICAgdmFyIERFQUNUSVZBVElPTl9USU1FT1VUX01TID0gTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLkRFQUNUSVZBVElPTl9USU1FT1VUX01TO1xuICAgICAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgICB2YXIgdHJhbnNsYXRlU3RhcnQgPSAnJztcbiAgICAgICAgdmFyIHRyYW5zbGF0ZUVuZCA9ICcnO1xuICAgICAgICBpZiAoIXRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgdmFyIF9jID0gdGhpcy5nZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfKCksIHN0YXJ0UG9pbnQgPSBfYy5zdGFydFBvaW50LCBlbmRQb2ludCA9IF9jLmVuZFBvaW50O1xuICAgICAgICAgICAgdHJhbnNsYXRlU3RhcnQgPSBzdGFydFBvaW50LnggKyBcInB4LCBcIiArIHN0YXJ0UG9pbnQueSArIFwicHhcIjtcbiAgICAgICAgICAgIHRyYW5zbGF0ZUVuZCA9IGVuZFBvaW50LnggKyBcInB4LCBcIiArIGVuZFBvaW50LnkgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfVFJBTlNMQVRFX1NUQVJULCB0cmFuc2xhdGVTdGFydCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9FTkQsIHRyYW5zbGF0ZUVuZCk7XG4gICAgICAgIC8vIENhbmNlbCBhbnkgb25nb2luZyBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbiBhbmltYXRpb25zXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFjdGl2YXRpb25UaW1lcl8pO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pO1xuICAgICAgICB0aGlzLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICAgIC8vIEZvcmNlIGxheW91dCBpbiBvcmRlciB0byByZS10cmlnZ2VyIHRoZSBhbmltYXRpb24uXG4gICAgICAgIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmFjdGl2YXRpb25UaW1lckNhbGxiYWNrXygpOyB9LCBERUFDVElWQVRJT05fVElNRU9VVF9NUyk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8sIGFjdGl2YXRpb25FdmVudCA9IF9hLmFjdGl2YXRpb25FdmVudCwgd2FzQWN0aXZhdGVkQnlQb2ludGVyID0gX2Eud2FzQWN0aXZhdGVkQnlQb2ludGVyO1xuICAgICAgICB2YXIgc3RhcnRQb2ludDtcbiAgICAgICAgaWYgKHdhc0FjdGl2YXRlZEJ5UG9pbnRlcikge1xuICAgICAgICAgICAgc3RhcnRQb2ludCA9IGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyhhY3RpdmF0aW9uRXZlbnQsIHRoaXMuYWRhcHRlcl8uZ2V0V2luZG93UGFnZU9mZnNldCgpLCB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdGFydFBvaW50ID0ge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMuZnJhbWVfLndpZHRoIC8gMixcbiAgICAgICAgICAgICAgICB5OiB0aGlzLmZyYW1lXy5oZWlnaHQgLyAyLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDZW50ZXIgdGhlIGVsZW1lbnQgYXJvdW5kIHRoZSBzdGFydCBwb2ludC5cbiAgICAgICAgc3RhcnRQb2ludCA9IHtcbiAgICAgICAgICAgIHg6IHN0YXJ0UG9pbnQueCAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgICAgICAgeTogc3RhcnRQb2ludC55IC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICAgIH07XG4gICAgICAgIHZhciBlbmRQb2ludCA9IHtcbiAgICAgICAgICAgIHg6ICh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICAgICAgICB5OiAodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHsgc3RhcnRQb2ludDogc3RhcnRQb2ludCwgZW5kUG9pbnQ6IGVuZFBvaW50IH07XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBib3RoIHdoZW4gYSBwb2ludGluZyBkZXZpY2UgaXMgcmVsZWFzZWQsIGFuZCB3aGVuIHRoZSBhY3RpdmF0aW9uIGFuaW1hdGlvbiBlbmRzLlxuICAgICAgICAvLyBUaGUgZGVhY3RpdmF0aW9uIGFuaW1hdGlvbiBzaG91bGQgb25seSBydW4gYWZ0ZXIgYm90aCBvZiB0aG9zZSBvY2N1ci5cbiAgICAgICAgdmFyIEZHX0RFQUNUSVZBVElPTiA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19ERUFDVElWQVRJT047XG4gICAgICAgIHZhciBfYSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXywgaGFzRGVhY3RpdmF0aW9uVVhSdW4gPSBfYS5oYXNEZWFjdGl2YXRpb25VWFJ1biwgaXNBY3RpdmF0ZWQgPSBfYS5pc0FjdGl2YXRlZDtcbiAgICAgICAgdmFyIGFjdGl2YXRpb25IYXNFbmRlZCA9IGhhc0RlYWN0aXZhdGlvblVYUnVuIHx8ICFpc0FjdGl2YXRlZDtcbiAgICAgICAgaWYgKGFjdGl2YXRpb25IYXNFbmRlZCAmJiB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8pIHtcbiAgICAgICAgICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICAgICAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICAgICAgICB9LCBudW1iZXJzLkZHX0RFQUNUSVZBVElPTl9NUyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIEZHX0FDVElWQVRJT04gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfQUNUSVZBVElPTjtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19BQ1RJVkFUSU9OKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucmVzZXRBY3RpdmF0aW9uU3RhdGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXy5hY3RpdmF0aW9uRXZlbnQ7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgLy8gVG91Y2ggZGV2aWNlcyBtYXkgZmlyZSBhZGRpdGlvbmFsIGV2ZW50cyBmb3IgdGhlIHNhbWUgaW50ZXJhY3Rpb24gd2l0aGluIGEgc2hvcnQgdGltZS5cbiAgICAgICAgLy8gU3RvcmUgdGhlIHByZXZpb3VzIGV2ZW50IHVudGlsIGl0J3Mgc2FmZSB0byBhc3N1bWUgdGhhdCBzdWJzZXF1ZW50IGV2ZW50cyBhcmUgZm9yIG5ldyBpbnRlcmFjdGlvbnMuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfID0gdW5kZWZpbmVkOyB9LCBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuVEFQX0RFTEFZX01TKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlYWN0aXZhdGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgYWN0aXZhdGlvblN0YXRlID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaW4gc2NlbmFyaW9zIHN1Y2ggYXMgd2hlbiB5b3UgaGF2ZSBhIGtleXVwIGV2ZW50IHRoYXQgYmx1cnMgdGhlIGVsZW1lbnQuXG4gICAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0YXRlID0gdHNsaWJfMS5fX2Fzc2lnbih7fSwgYWN0aXZhdGlvblN0YXRlKTtcbiAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYykge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKHN0YXRlKTsgfSk7XG4gICAgICAgICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFjdGl2YXRpb25TdGF0ZV8uaGFzRGVhY3RpdmF0aW9uVVhSdW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIF90aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKHN0YXRlKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5hbmltYXRlRGVhY3RpdmF0aW9uXyA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgd2FzQWN0aXZhdGVkQnlQb2ludGVyID0gX2Eud2FzQWN0aXZhdGVkQnlQb2ludGVyLCB3YXNFbGVtZW50TWFkZUFjdGl2ZSA9IF9hLndhc0VsZW1lbnRNYWRlQWN0aXZlO1xuICAgICAgICBpZiAod2FzQWN0aXZhdGVkQnlQb2ludGVyIHx8IHdhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5sYXlvdXRJbnRlcm5hbF8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuZnJhbWVfID0gdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgICAgIHZhciBtYXhEaW0gPSBNYXRoLm1heCh0aGlzLmZyYW1lXy5oZWlnaHQsIHRoaXMuZnJhbWVfLndpZHRoKTtcbiAgICAgICAgLy8gU3VyZmFjZSBkaWFtZXRlciBpcyB0cmVhdGVkIGRpZmZlcmVudGx5IGZvciB1bmJvdW5kZWQgdnMuIGJvdW5kZWQgcmlwcGxlcy5cbiAgICAgICAgLy8gVW5ib3VuZGVkIHJpcHBsZSBkaWFtZXRlciBpcyBjYWxjdWxhdGVkIHNtYWxsZXIgc2luY2UgdGhlIHN1cmZhY2UgaXMgZXhwZWN0ZWQgdG8gYWxyZWFkeSBiZSBwYWRkZWQgYXBwcm9wcmlhdGVseVxuICAgICAgICAvLyB0byBleHRlbmQgdGhlIGhpdGJveCwgYW5kIHRoZSByaXBwbGUgaXMgZXhwZWN0ZWQgdG8gbWVldCB0aGUgZWRnZXMgb2YgdGhlIHBhZGRlZCBoaXRib3ggKHdoaWNoIGlzIHR5cGljYWxseVxuICAgICAgICAvLyBzcXVhcmUpLiBCb3VuZGVkIHJpcHBsZXMsIG9uIHRoZSBvdGhlciBoYW5kLCBhcmUgZnVsbHkgZXhwZWN0ZWQgdG8gZXhwYW5kIGJleW9uZCB0aGUgc3VyZmFjZSdzIGxvbmdlc3QgZGlhbWV0ZXJcbiAgICAgICAgLy8gKGNhbGN1bGF0ZWQgYmFzZWQgb24gdGhlIGRpYWdvbmFsIHBsdXMgYSBjb25zdGFudCBwYWRkaW5nKSwgYW5kIGFyZSBjbGlwcGVkIGF0IHRoZSBzdXJmYWNlJ3MgYm9yZGVyIHZpYVxuICAgICAgICAvLyBgb3ZlcmZsb3c6IGhpZGRlbmAuXG4gICAgICAgIHZhciBnZXRCb3VuZGVkUmFkaXVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGh5cG90ZW51c2UgPSBNYXRoLnNxcnQoTWF0aC5wb3coX3RoaXMuZnJhbWVfLndpZHRoLCAyKSArIE1hdGgucG93KF90aGlzLmZyYW1lXy5oZWlnaHQsIDIpKTtcbiAgICAgICAgICAgIHJldHVybiBoeXBvdGVudXNlICsgTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLlBBRERJTkc7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubWF4UmFkaXVzXyA9IHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSA/IG1heERpbSA6IGdldEJvdW5kZWRSYWRpdXMoKTtcbiAgICAgICAgLy8gUmlwcGxlIGlzIHNpemVkIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGxhcmdlc3QgZGltZW5zaW9uIG9mIHRoZSBzdXJmYWNlLCB0aGVuIHNjYWxlcyB1cCB1c2luZyBhIENTUyBzY2FsZSB0cmFuc2Zvcm1cbiAgICAgICAgdGhpcy5pbml0aWFsU2l6ZV8gPSBNYXRoLmZsb29yKG1heERpbSAqIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5JTklUSUFMX09SSUdJTl9TQ0FMRSk7XG4gICAgICAgIHRoaXMuZmdTY2FsZV8gPSBcIlwiICsgdGhpcy5tYXhSYWRpdXNfIC8gdGhpcy5pbml0aWFsU2l6ZV87XG4gICAgICAgIHRoaXMudXBkYXRlTGF5b3V0Q3NzVmFyc18oKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnVwZGF0ZUxheW91dENzc1ZhcnNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3MsIFZBUl9GR19TSVpFID0gX2EuVkFSX0ZHX1NJWkUsIFZBUl9MRUZUID0gX2EuVkFSX0xFRlQsIFZBUl9UT1AgPSBfYS5WQVJfVE9QLCBWQVJfRkdfU0NBTEUgPSBfYS5WQVJfRkdfU0NBTEU7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NJWkUsIHRoaXMuaW5pdGlhbFNpemVfICsgXCJweFwiKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfU0NBTEUsIHRoaXMuZmdTY2FsZV8pO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnVuYm91bmRlZENvb3Jkc18gPSB7XG4gICAgICAgICAgICAgICAgbGVmdDogTWF0aC5yb3VuZCgodGhpcy5mcmFtZV8ud2lkdGggLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpKSxcbiAgICAgICAgICAgICAgICB0b3A6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0xFRlQsIHRoaXMudW5ib3VuZGVkQ29vcmRzXy5sZWZ0ICsgXCJweFwiKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX1RPUCwgdGhpcy51bmJvdW5kZWRDb29yZHNfLnRvcCArIFwicHhcIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNRENSaXBwbGVGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENSaXBwbGVGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDUmlwcGxlRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDQ29tcG9uZW50IH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IGFwcGx5UGFzc2l2ZSB9IGZyb20gJ0BtYXRlcmlhbC9kb20vZXZlbnRzJztcbmltcG9ydCB7IG1hdGNoZXMgfSBmcm9tICdAbWF0ZXJpYWwvZG9tL3BvbnlmaWxsJztcbmltcG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xudmFyIE1EQ1JpcHBsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENSaXBwbGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDUmlwcGxlKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBNRENSaXBwbGUuYXR0YWNoVG8gPSBmdW5jdGlvbiAocm9vdCwgb3B0cykge1xuICAgICAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7IG9wdHMgPSB7IGlzVW5ib3VuZGVkOiB1bmRlZmluZWQgfTsgfVxuICAgICAgICB2YXIgcmlwcGxlID0gbmV3IE1EQ1JpcHBsZShyb290KTtcbiAgICAgICAgLy8gT25seSBvdmVycmlkZSB1bmJvdW5kZWQgYmVoYXZpb3IgaWYgb3B0aW9uIGlzIGV4cGxpY2l0bHkgc3BlY2lmaWVkXG4gICAgICAgIGlmIChvcHRzLmlzVW5ib3VuZGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJpcHBsZS51bmJvdW5kZWQgPSBvcHRzLmlzVW5ib3VuZGVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByaXBwbGU7XG4gICAgfTtcbiAgICBNRENSaXBwbGUuY3JlYXRlQWRhcHRlciA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIGluc3RhbmNlLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHV0aWwuc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93KTsgfSxcbiAgICAgICAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGluc3RhbmNlLnJvb3RfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOyB9LFxuICAgICAgICAgICAgY29udGFpbnNFdmVudFRhcmdldDogZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gaW5zdGFuY2Uucm9vdF8uY29udGFpbnModGFyZ2V0KTsgfSxcbiAgICAgICAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBmdW5jdGlvbiAoaGFuZGxlcikgeyByZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpOyB9LFxuICAgICAgICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgeDogd2luZG93LnBhZ2VYT2Zmc2V0LCB5OiB3aW5kb3cucGFnZVlPZmZzZXQgfSk7IH0sXG4gICAgICAgICAgICBpc1N1cmZhY2VBY3RpdmU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1hdGNoZXMoaW5zdGFuY2Uucm9vdF8sICc6YWN0aXZlJyk7IH0sXG4gICAgICAgICAgICBpc1N1cmZhY2VEaXNhYmxlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQm9vbGVhbihpbnN0YW5jZS5kaXNhYmxlZCk7IH0sXG4gICAgICAgICAgICBpc1VuYm91bmRlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQm9vbGVhbihpbnN0YW5jZS51bmJvdW5kZWQpOyB9LFxuICAgICAgICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uIChoYW5kbGVyKSB7IHJldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcik7IH0sXG4gICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gaW5zdGFuY2Uucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6IGZ1bmN0aW9uICh2YXJOYW1lLCB2YWx1ZSkgeyByZXR1cm4gaW5zdGFuY2Uucm9vdF8uc3R5bGUuc2V0UHJvcGVydHkodmFyTmFtZSwgdmFsdWUpOyB9LFxuICAgICAgICB9O1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZS5wcm90b3R5cGUsIFwidW5ib3VuZGVkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gQm9vbGVhbih0aGlzLnVuYm91bmRlZF8pO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh1bmJvdW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMudW5ib3VuZGVkXyA9IEJvb2xlYW4odW5ib3VuZGVkKTtcbiAgICAgICAgICAgIHRoaXMuc2V0VW5ib3VuZGVkXygpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENSaXBwbGUucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmFjdGl2YXRlKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGUucHJvdG90eXBlLmRlYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uZGVhY3RpdmF0ZSgpO1xuICAgIH07XG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5sYXlvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8ubGF5b3V0KCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGUucHJvdG90eXBlLmdldERlZmF1bHRGb3VuZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IE1EQ1JpcHBsZUZvdW5kYXRpb24oTURDUmlwcGxlLmNyZWF0ZUFkYXB0ZXIodGhpcykpO1xuICAgIH07XG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5pbml0aWFsU3luY1dpdGhET00gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByb290ID0gdGhpcy5yb290XztcbiAgICAgICAgdGhpcy51bmJvdW5kZWQgPSAnbWRjUmlwcGxlSXNVbmJvdW5kZWQnIGluIHJvb3QuZGF0YXNldDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENsb3N1cmUgQ29tcGlsZXIgdGhyb3dzIGFuIGFjY2VzcyBjb250cm9sIGVycm9yIHdoZW4gZGlyZWN0bHkgYWNjZXNzaW5nIGFcbiAgICAgKiBwcm90ZWN0ZWQgb3IgcHJpdmF0ZSBwcm9wZXJ0eSBpbnNpZGUgYSBnZXR0ZXIvc2V0dGVyLCBsaWtlIHVuYm91bmRlZCBhYm92ZS5cbiAgICAgKiBCeSBhY2Nlc3NpbmcgdGhlIHByb3RlY3RlZCBwcm9wZXJ0eSBpbnNpZGUgYSBtZXRob2QsIHdlIHNvbHZlIHRoYXQgcHJvYmxlbS5cbiAgICAgKiBUaGF0J3Mgd2h5IHRoaXMgZnVuY3Rpb24gZXhpc3RzLlxuICAgICAqL1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUuc2V0VW5ib3VuZGVkXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRVbmJvdW5kZWQoQm9vbGVhbih0aGlzLnVuYm91bmRlZF8pKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENSaXBwbGU7XG59KE1EQ0NvbXBvbmVudCkpO1xuZXhwb3J0IHsgTURDUmlwcGxlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnQuanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIHByZWZpeEZpbHRlcihvYmosIHByZWZpeCkge1xuICBsZXQgbmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopO1xuICBjb25zdCBuZXdPYmogPSB7fTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbmFtZSA9IG5hbWVzW2ldO1xuICAgIGlmIChuYW1lLnN1YnN0cmluZygwLCBwcmVmaXgubGVuZ3RoKSA9PT0gcHJlZml4KSB7XG4gICAgICBuZXdPYmpbbmFtZS5zdWJzdHJpbmcocHJlZml4Lmxlbmd0aCldID0gb2JqW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59Il0sIm5hbWVzIjpbInRzbGliXzEuX19zcHJlYWQiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsInRzbGliXzEuX19hc3NpZ24iLCJ1dGlsLnN1cHBvcnRzQ3NzVmFyaWFibGVzIl0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVMsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUU7RUFDN0IsS0FBSyxHQUFHLEtBQUssS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztFQUMvQixJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDOztFQUU1QixJQUFJLENBQUMsR0FBRyxJQUFJLE9BQU8sUUFBUSxLQUFLLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRTs7RUFFeEQsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDckUsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztFQUM1QyxLQUFLLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQzs7RUFFeEIsSUFBSSxRQUFRLEtBQUssS0FBSyxFQUFFO0lBQ3RCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtNQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLEtB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

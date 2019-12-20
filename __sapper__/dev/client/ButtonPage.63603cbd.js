import { H as listen, I as bubble, J as getContext, S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, y as setContext, x as assign, K as exclude_internal_props, v as empty, p as insert_dev, F as group_outros, b as transition_out, G as check_outros, t as transition_in, m as detach_dev, c as create_slot, f as element, j as claim_element, k as children, L as set_attributes, o as add_location, g as get_slot_context, a as get_slot_changes, C as get_spread_update, M as is_function, N as current_component, O as onMount, P as onDestroy, Q as listen_dev, R as run_all, T as binding_callbacks, U as bind, z as create_component, A as claim_component, B as mount_component, D as get_spread_object, V as add_flush_callback, E as destroy_component, W as createEventDispatcher, n as noop, h as text, l as claim_text, X as attr_dev, q as append_dev, u as space, w as claim_space } from './index.ff9f59d2.js';
import Page from './Page.465fe70a.js';
import Example from './Example.5abb1488.js';

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

var css = ".mdc-typography--headline6{font-size:1.25rem;line-height:2rem;letter-spacing:.0125em}.mdc-typography--headline6,.mdc-typography--subtitle2{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-weight:500;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle2{font-size:.875rem;line-height:1.375rem;letter-spacing:.0071428571em}.mdc-typography--body2{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit}:root{--primary-100:#ebf8ff;--primary-200:#bee3f8;--primary-300:#90cdf4;--primary-400:#63b3ed;--primary-500:#4299e1;--primary-600:#3182ce;--primary-700:#2b6cb0;--primary-800:#2c5282;--primary-900:#2a4365;--secondary-100:#fff5f5;--secondary-200:#fed7d7;--secondary-300:#feb2b2;--secondary-400:#fc8181;--secondary-500:#f56565;--secondary-600:#e53e3e;--secondary-700:#c53030;--secondary-800:#9b2c2c;--secondary-900:#742a2a;--primary-color:var(--primary-700);--secondary-color:var(--secondary-700);--primary-font-color:#fff;--secondary-font-color:#fff;--disabled-button-bg-color:#e0e0e0;--font-color:#212121;--other-font-color:#000;--bg-color:#fff;--bg-layer-color:#f5f5f5;--bg-card-color:#fff;--enabled-color:#757575;--disabled-color:#bdbdbd;--switch-toggle-color:#fafafa;--switch-track-color:#4d4d4d;--font-family:\"Montserrat\",sans-serif;--filter:invert(0%);--alert-default-bg-color:var(--primary-200);--alert-solid-bg-color:var(--primary-700);--alert-solid-text-color:\"text-white\";--alert-outline-bg-color:var(--primary-100);--alert-outline-border-color:var(--primary-400);--alert-outline-border-color2:var(--primary-600);--alert-outline-text-color:var(--primary-800)}[data-theme=dark]{--primary-color:var(--primary-400);--secondary-color:var(--secondary-400);--primary-font-color:#000;--secondary-font-color:#000;--disabled-button-bg-color:#1f1f1f;--font-color:#dedede;--other-font-color:#fff;--bg-color:#121212;--bg-layer-color:#333;--bg-card-color:#424242;--enabled-color:#b3b3b3;--disabled-color:#4d4d4d;--switch-toggle-color:#b3b3b3;--switch-track-color:#fff;--filter:invert(100%)}body{--mdc-theme-primary:var(--primary-color);--mdc-theme-secondary:var(--secondary-color);--mdc-theme-on-primary:var(--primary-font-color);--mdc-theme-on-secondary:var(--secondary-font-color);--mdc-text-field-ink-color:var(--other-font-color);--mdc-theme-text-primary-on-background:var(--font-color);--mdc-theme-surface:transparent;--duration:0.5s;--timing:ease;background-color:var(--bg-color);color:var(--font-color);-webkit-transition:color var(--duration) var(--timing),background-color var(--duration) var(--timing);transition:color var(--duration) var(--timing),background-color var(--duration) var(--timing);font-family:var(--font-family)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:var(--disabled-button-bg-color)}.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--disabled-color)}.mdc-select:not(.mdc-select--disabled) .mdc-select__native-control,.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text,.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--other-font-color)}.mdc-select:not(.mdc-select--disabled) .mdc-select__native-control option{color:#000}.mdc-select--with-leading-icon:not(.mdc-select--disabled) .mdc-select__icon{color:var(--enabled-color);opacity:1}.mdc-select__dropdown-icon{-webkit-filter:var(--filter);filter:var(--filter)}.mdc-select--invalid .mdc-select__dropdown-icon{-webkit-filter:invert(0);filter:invert(0)}.mdc-switch--disabled{opacity:.5}.mdc-card__action--icon:not(:disabled){color:var(--enabled-color)}.flex-1-0-auto{-webkit-box-flex:1;flex:1 0 auto}.mdc-button{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.0892857143em;text-decoration:none;text-transform:uppercase;padding:0 8px;display:-webkit-inline-box;display:inline-flex;position:relative;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;box-sizing:border-box;min-width:64px;height:36px;border:none;outline:none;line-height:inherit;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none;overflow:hidden;vertical-align:middle;border-radius:4px}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{background-color:transparent;color:var(--disabled-color);cursor:default;pointer-events:none}.mdc-button.mdc-button--dense{border-radius:4px}.mdc-button:not(:disabled){background-color:transparent}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}.mdc-button .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button .mdc-button__icon{margin-left:8px;margin-right:0}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary,#6200ee)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}.mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button__label+.mdc-button__icon{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--outlined .mdc-button__icon,.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon{margin-left:-4px;margin-right:8px}.mdc-button--outlined .mdc-button__icon[dir=rtl],.mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--outlined .mdc-button__icon,[dir=rtl] .mdc-button--raised .mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__icon{margin-left:8px;margin-right:-4px}.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0,0,0,.12);color:var(--disabled-color)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee}@supports not (-ms-ime-align:auto){.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-primary,#6200ee)}}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary,#fff)}.mdc-button--raised{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);-webkit-transition:box-shadow .28s cubic-bezier(.4,0,.2,1);transition:box-shadow .28s cubic-bezier(.4,0,.2,1)}.mdc-button--raised:focus,.mdc-button--raised:hover{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mdc-button--outlined{border-style:solid;padding:0 15px;border-width:1px}.mdc-button--outlined:disabled{border-color:var(--disabled-color)}.mdc-button--outlined:not(:disabled){border-color:#6200ee;border-color:var(--mdc-theme-primary,#6200ee)}.mdc-button--dense{height:32px;font-size:.8125rem}@-webkit-keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@-webkit-keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@-webkit-keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-button:after,.mdc-button:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-button:before{-webkit-transition:opacity 15ms linear,background-color 15ms linear;transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-button:after,.mdc-button:before{top:-50%;left:-50%;width:200%;height:200%;background-color:#6200ee}@supports not (-ms-ime-align:auto){.mdc-button:after,.mdc-button:before{background-color:var(--mdc-theme-primary,#6200ee)}}.mdc-button:hover:before{opacity:.04}.mdc-button:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.mdc-button:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.mdc-button:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.mdc-button--raised:after,.mdc-button--raised:before,.mdc-button--unelevated:after,.mdc-button--unelevated:before{background-color:#fff}@supports not (-ms-ime-align:auto){.mdc-button--raised:after,.mdc-button--raised:before,.mdc-button--unelevated:after,.mdc-button--unelevated:before{background-color:var(--mdc-theme-on-primary,#fff)}}.mdc-button--raised:hover:before,.mdc-button--unelevated:hover:before{opacity:.08}.mdc-button--raised:not(.mdc-ripple-upgraded):focus:before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}.mdc-button--raised:not(.mdc-ripple-upgraded):after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active:after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}.smui-button--color-secondary:not(:disabled){color:#018786;color:var(--mdc-theme-secondary,#018786)}.smui-button--color-secondary.mdc-button--raised:not(:disabled),.smui-button--color-secondary.mdc-button--unelevated:not(:disabled){background-color:#018786}@supports not (-ms-ime-align:auto){.smui-button--color-secondary.mdc-button--raised:not(:disabled),.smui-button--color-secondary.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-secondary,#018786)}}.smui-button--color-secondary.mdc-button--raised:not(:disabled),.smui-button--color-secondary.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-secondary,#fff)}.smui-button--color-secondary.mdc-button--outlined:not(:disabled){border-color:#018786;border-color:var(--mdc-theme-secondary,#018786)}.smui-button--color-secondary:after,.smui-button--color-secondary:before{background-color:#018786}@supports not (-ms-ime-align:auto){.smui-button--color-secondary:after,.smui-button--color-secondary:before{background-color:var(--mdc-theme-secondary,#018786)}}.smui-button--color-secondary:hover:before{opacity:.04}.smui-button--color-secondary:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.smui-button--color-secondary:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.smui-button--color-secondary:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.smui-button--color-secondary.mdc-button--raised:after,.smui-button--color-secondary.mdc-button--raised:before,.smui-button--color-secondary.mdc-button--unelevated:after,.smui-button--color-secondary.mdc-button--unelevated:before{background-color:#fff}@supports not (-ms-ime-align:auto){.smui-button--color-secondary.mdc-button--raised:after,.smui-button--color-secondary.mdc-button--raised:before,.smui-button--color-secondary.mdc-button--unelevated:after,.smui-button--color-secondary.mdc-button--unelevated:before{background-color:var(--mdc-theme-on-secondary,#fff)}}.smui-button--color-secondary.mdc-button--raised:hover:before,.smui-button--color-secondary.mdc-button--unelevated:hover:before{opacity:.08}.smui-button--color-secondary.mdc-button--raised:not(.mdc-ripple-upgraded):focus:before,.smui-button--color-secondary.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}.smui-button--color-secondary.mdc-button--raised:not(.mdc-ripple-upgraded):after,.smui-button--color-secondary.mdc-button--unelevated:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.smui-button--color-secondary.mdc-button--raised:not(.mdc-ripple-upgraded):active:after,.smui-button--color-secondary.mdc-button--unelevated:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}.smui-button__group{display:-webkit-inline-box;display:inline-flex}.smui-button__group>.mdc-button:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.smui-button__group>.mdc-button:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.smui-button__group.smui-button__group--raised{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.smui-button__group>.mdc-button--raised,.smui-button__group>.mdc-button--raised:active,.smui-button__group>.mdc-button--raised:disabled,.smui-button__group>.mdc-button--raised:focus,.smui-button__group>.mdc-button--raised:hover{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.smui-button__group>.mdc-button--outlined:not(:last-child){border-right-width:0}";
styleInject(css);

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

function Ripple(node, [ripple, props = {unbounded: false, color: null}]) {
  let instance = null;
  let addLayoutListener = getContext('SMUI:addLayoutListener');
  let removeLayoutListener;

  function handleProps(ripple, props) {
    if (ripple && !instance) {
      instance = new MDCRipple(node);
    } else if (instance && !ripple) {
      instance.destroy();
      instance = null;
    }
    if (ripple) {
      instance.unbounded = !!props.unbounded;
      switch (props.color) {
        case 'surface':
          node.classList.add('mdc-ripple-surface');
          node.classList.remove('mdc-ripple-surface--primary');
          node.classList.remove('mdc-ripple-surface--accent');
          return;
        case 'primary':
          node.classList.add('mdc-ripple-surface');
          node.classList.add('mdc-ripple-surface--primary');
          node.classList.remove('mdc-ripple-surface--accent');
          return;
        case 'secondary':
          node.classList.add('mdc-ripple-surface');
          node.classList.remove('mdc-ripple-surface--primary');
          node.classList.add('mdc-ripple-surface--accent');
          return;
      }
    }
    node.classList.remove('mdc-ripple-surface');
    node.classList.remove('mdc-ripple-surface--primary');
    node.classList.remove('mdc-ripple-surface--accent');
  }

  if (ripple) {
    handleProps(ripple, props);
  }

  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }

  function layout() {
    if (instance) {
      instance.layout();
    }
  }

  return {
    update([ripple, props = {unbounded: false, color: null}]) {
      handleProps(ripple, props);
    },

    destroy() {
      if (instance) {
        instance.destroy();
        instance = null;
        node.classList.remove('mdc-ripple-surface');
        node.classList.remove('mdc-ripple-surface--primary');
        node.classList.remove('mdc-ripple-surface--accent');
      }

      if (removeLayoutListener) {
        removeLayoutListener();
      }
    }
  }
}

/* node_modules\@smui\button\Button.svelte generated by Svelte v3.16.4 */
const file = "node_modules\\@smui\\button\\Button.svelte";

// (26:0) {:else}
function create_else_block(ctx) {
	let button;
	let useActions_action;
	let forwardEvents_action;
	let Ripple_action;
	let current;
	const default_slot_template = /*$$slots*/ ctx[17].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[16], null);

	let button_levels = [
		{
			class: "\n      mdc-button\n      " + /*className*/ ctx[1] + "\n      " + (/*variant*/ ctx[4] === "raised"
			? "mdc-button--raised"
			: "") + "\n      " + (/*variant*/ ctx[4] === "unelevated"
			? "mdc-button--unelevated"
			: "") + "\n      " + (/*variant*/ ctx[4] === "outlined"
			? "mdc-button--outlined"
			: "") + "\n      " + (/*dense*/ ctx[5] ? "mdc-button--dense" : "") + "\n      " + (/*color*/ ctx[3] === "secondary"
			? "smui-button--color-secondary"
			: "") + "\n      " + (/*context*/ ctx[11] === "card:action"
			? "mdc-card__action"
			: "") + "\n      " + (/*context*/ ctx[11] === "card:action"
			? "mdc-card__action--button"
			: "") + "\n      " + (/*context*/ ctx[11] === "dialog:action"
			? "mdc-dialog__button"
			: "") + "\n      " + (/*context*/ ctx[11] === "top-app-bar:navigation"
			? "mdc-top-app-bar__navigation-icon"
			: "") + "\n      " + (/*context*/ ctx[11] === "top-app-bar:action"
			? "mdc-top-app-bar__action-item"
			: "") + "\n      " + (/*context*/ ctx[11] === "snackbar"
			? "mdc-snackbar__action"
			: "") + "\n    "
		},
		/*actionProp*/ ctx[8],
		/*defaultProp*/ ctx[9],
		/*props*/ ctx[7]
	];

	let button_data = {};

	for (let i = 0; i < button_levels.length; i += 1) {
		button_data = assign(button_data, button_levels[i]);
	}

	const block = {
		c: function create() {
			button = element("button");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			if (default_slot) default_slot.l(button_nodes);
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(button, button_data);
			add_location(button, file, 26, 2, 971);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);

			if (default_slot) {
				default_slot.m(button, null);
			}

			useActions_action = useActions.call(null, button, /*use*/ ctx[0]) || ({});
			forwardEvents_action = /*forwardEvents*/ ctx[10].call(null, button) || ({});
			Ripple_action = Ripple.call(null, button, [/*ripple*/ ctx[2], { unbounded: false }]) || ({});
			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot && default_slot.p && dirty[0] & /*$$scope*/ 65536) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[16], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[16], dirty, null));
			}

			set_attributes(button, get_spread_update(button_levels, [
				dirty[0] & /*className, variant, dense, color, context*/ 2106 && ({
					class: "\n      mdc-button\n      " + /*className*/ ctx[1] + "\n      " + (/*variant*/ ctx[4] === "raised"
					? "mdc-button--raised"
					: "") + "\n      " + (/*variant*/ ctx[4] === "unelevated"
					? "mdc-button--unelevated"
					: "") + "\n      " + (/*variant*/ ctx[4] === "outlined"
					? "mdc-button--outlined"
					: "") + "\n      " + (/*dense*/ ctx[5] ? "mdc-button--dense" : "") + "\n      " + (/*color*/ ctx[3] === "secondary"
					? "smui-button--color-secondary"
					: "") + "\n      " + (/*context*/ ctx[11] === "card:action"
					? "mdc-card__action"
					: "") + "\n      " + (/*context*/ ctx[11] === "card:action"
					? "mdc-card__action--button"
					: "") + "\n      " + (/*context*/ ctx[11] === "dialog:action"
					? "mdc-dialog__button"
					: "") + "\n      " + (/*context*/ ctx[11] === "top-app-bar:navigation"
					? "mdc-top-app-bar__navigation-icon"
					: "") + "\n      " + (/*context*/ ctx[11] === "top-app-bar:action"
					? "mdc-top-app-bar__action-item"
					: "") + "\n      " + (/*context*/ ctx[11] === "snackbar"
					? "mdc-snackbar__action"
					: "") + "\n    "
				}),
				dirty[0] & /*actionProp*/ 256 && /*actionProp*/ ctx[8],
				dirty[0] & /*defaultProp*/ 512 && /*defaultProp*/ ctx[9],
				dirty[0] & /*props*/ 128 && /*props*/ ctx[7]
			]));

			if (is_function(useActions_action.update) && dirty[0] & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
			if (is_function(Ripple_action.update) && dirty[0] & /*ripple*/ 4) Ripple_action.update.call(null, [/*ripple*/ ctx[2], { unbounded: false }]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			if (default_slot) default_slot.d(detaching);
			if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
			if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
			if (Ripple_action && is_function(Ripple_action.destroy)) Ripple_action.destroy();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(26:0) {:else}",
		ctx
	});

	return block;
}

// (1:0) {#if href}
function create_if_block(ctx) {
	let a;
	let useActions_action;
	let forwardEvents_action;
	let Ripple_action;
	let current;
	const default_slot_template = /*$$slots*/ ctx[17].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[16], null);

	let a_levels = [
		{
			class: "\n      mdc-button\n      " + /*className*/ ctx[1] + "\n      " + (/*variant*/ ctx[4] === "raised"
			? "mdc-button--raised"
			: "") + "\n      " + (/*variant*/ ctx[4] === "unelevated"
			? "mdc-button--unelevated"
			: "") + "\n      " + (/*variant*/ ctx[4] === "outlined"
			? "mdc-button--outlined"
			: "") + "\n      " + (/*dense*/ ctx[5] ? "mdc-button--dense" : "") + "\n      " + (/*color*/ ctx[3] === "secondary"
			? "smui-button--color-secondary"
			: "") + "\n      " + (/*context*/ ctx[11] === "card:action"
			? "mdc-card__action"
			: "") + "\n      " + (/*context*/ ctx[11] === "card:action"
			? "mdc-card__action--button"
			: "") + "\n      " + (/*context*/ ctx[11] === "dialog:action"
			? "mdc-dialog__button"
			: "") + "\n      " + (/*context*/ ctx[11] === "top-app-bar:navigation"
			? "mdc-top-app-bar__navigation-icon"
			: "") + "\n      " + (/*context*/ ctx[11] === "top-app-bar:action"
			? "mdc-top-app-bar__action-item"
			: "") + "\n      " + (/*context*/ ctx[11] === "snackbar"
			? "mdc-snackbar__action"
			: "") + "\n    "
		},
		{ href: /*href*/ ctx[6] },
		/*actionProp*/ ctx[8],
		/*defaultProp*/ ctx[9],
		/*props*/ ctx[7]
	];

	let a_data = {};

	for (let i = 0; i < a_levels.length; i += 1) {
		a_data = assign(a_data, a_levels[i]);
	}

	const block = {
		c: function create() {
			a = element("a");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { class: true, href: true });
			var a_nodes = children(a);
			if (default_slot) default_slot.l(a_nodes);
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(a, a_data);
			add_location(a, file, 1, 2, 13);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);

			if (default_slot) {
				default_slot.m(a, null);
			}

			useActions_action = useActions.call(null, a, /*use*/ ctx[0]) || ({});
			forwardEvents_action = /*forwardEvents*/ ctx[10].call(null, a) || ({});
			Ripple_action = Ripple.call(null, a, [/*ripple*/ ctx[2], { unbounded: false }]) || ({});
			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot && default_slot.p && dirty[0] & /*$$scope*/ 65536) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[16], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[16], dirty, null));
			}

			set_attributes(a, get_spread_update(a_levels, [
				dirty[0] & /*className, variant, dense, color, context*/ 2106 && ({
					class: "\n      mdc-button\n      " + /*className*/ ctx[1] + "\n      " + (/*variant*/ ctx[4] === "raised"
					? "mdc-button--raised"
					: "") + "\n      " + (/*variant*/ ctx[4] === "unelevated"
					? "mdc-button--unelevated"
					: "") + "\n      " + (/*variant*/ ctx[4] === "outlined"
					? "mdc-button--outlined"
					: "") + "\n      " + (/*dense*/ ctx[5] ? "mdc-button--dense" : "") + "\n      " + (/*color*/ ctx[3] === "secondary"
					? "smui-button--color-secondary"
					: "") + "\n      " + (/*context*/ ctx[11] === "card:action"
					? "mdc-card__action"
					: "") + "\n      " + (/*context*/ ctx[11] === "card:action"
					? "mdc-card__action--button"
					: "") + "\n      " + (/*context*/ ctx[11] === "dialog:action"
					? "mdc-dialog__button"
					: "") + "\n      " + (/*context*/ ctx[11] === "top-app-bar:navigation"
					? "mdc-top-app-bar__navigation-icon"
					: "") + "\n      " + (/*context*/ ctx[11] === "top-app-bar:action"
					? "mdc-top-app-bar__action-item"
					: "") + "\n      " + (/*context*/ ctx[11] === "snackbar"
					? "mdc-snackbar__action"
					: "") + "\n    "
				}),
				dirty[0] & /*href*/ 64 && ({ href: /*href*/ ctx[6] }),
				dirty[0] & /*actionProp*/ 256 && /*actionProp*/ ctx[8],
				dirty[0] & /*defaultProp*/ 512 && /*defaultProp*/ ctx[9],
				dirty[0] & /*props*/ 128 && /*props*/ ctx[7]
			]));

			if (is_function(useActions_action.update) && dirty[0] & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
			if (is_function(Ripple_action.update) && dirty[0] & /*ripple*/ 4) Ripple_action.update.call(null, [/*ripple*/ ctx[2], { unbounded: false }]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
			if (default_slot) default_slot.d(detaching);
			if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
			if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
			if (Ripple_action && is_function(Ripple_action.destroy)) Ripple_action.destroy();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(1:0) {#if href}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*href*/ ctx[6]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const block = {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				}

				transition_in(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	const forwardEvents = forwardEventsBuilder(current_component);
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { ripple = true } = $$props;
	let { color = "primary" } = $$props;
	let { variant = "text" } = $$props;
	let { dense = false } = $$props;
	let { href = null } = $$props;
	let { action = "close" } = $$props;
	let { default: defaultAction = false } = $$props;
	let context = getContext("SMUI:button:context");
	setContext("SMUI:label:context", "button");
	setContext("SMUI:icon:context", "button");
	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$new_props => {
		$$invalidate(15, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("ripple" in $$new_props) $$invalidate(2, ripple = $$new_props.ripple);
		if ("color" in $$new_props) $$invalidate(3, color = $$new_props.color);
		if ("variant" in $$new_props) $$invalidate(4, variant = $$new_props.variant);
		if ("dense" in $$new_props) $$invalidate(5, dense = $$new_props.dense);
		if ("href" in $$new_props) $$invalidate(6, href = $$new_props.href);
		if ("action" in $$new_props) $$invalidate(12, action = $$new_props.action);
		if ("default" in $$new_props) $$invalidate(13, defaultAction = $$new_props.default);
		if ("$$scope" in $$new_props) $$invalidate(16, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => {
		return {
			use,
			className,
			ripple,
			color,
			variant,
			dense,
			href,
			action,
			defaultAction,
			context,
			dialogExcludes,
			props,
			actionProp,
			defaultProp
		};
	};

	$$self.$inject_state = $$new_props => {
		$$invalidate(15, $$props = assign(assign({}, $$props), $$new_props));
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("ripple" in $$props) $$invalidate(2, ripple = $$new_props.ripple);
		if ("color" in $$props) $$invalidate(3, color = $$new_props.color);
		if ("variant" in $$props) $$invalidate(4, variant = $$new_props.variant);
		if ("dense" in $$props) $$invalidate(5, dense = $$new_props.dense);
		if ("href" in $$props) $$invalidate(6, href = $$new_props.href);
		if ("action" in $$props) $$invalidate(12, action = $$new_props.action);
		if ("defaultAction" in $$props) $$invalidate(13, defaultAction = $$new_props.defaultAction);
		if ("context" in $$props) $$invalidate(11, context = $$new_props.context);
		if ("dialogExcludes" in $$props) $$invalidate(14, dialogExcludes = $$new_props.dialogExcludes);
		if ("props" in $$props) $$invalidate(7, props = $$new_props.props);
		if ("actionProp" in $$props) $$invalidate(8, actionProp = $$new_props.actionProp);
		if ("defaultProp" in $$props) $$invalidate(9, defaultProp = $$new_props.defaultProp);
	};

	let dialogExcludes;
	let props;
	let actionProp;
	let defaultProp;

	$$self.$$.update = () => {
		 $$invalidate(7, props = exclude($$props, [
			"use",
			"class",
			"ripple",
			"color",
			"variant",
			"dense",
			"href",
			...dialogExcludes
		]));

		if ($$self.$$.dirty[0] & /*action*/ 4096) {
			 $$invalidate(8, actionProp = context === "dialog:action" && action !== null
			? { "data-mdc-dialog-action": action }
			: {});
		}

		if ($$self.$$.dirty[0] & /*defaultAction*/ 8192) {
			 $$invalidate(9, defaultProp = context === "dialog:action" && defaultAction
			? { "data-mdc-dialog-button-default": "" }
			: {});
		}
	};

	 $$invalidate(14, dialogExcludes = context === "dialog:action" ? ["action", "default"] : []);
	$$props = exclude_internal_props($$props);

	return [
		use,
		className,
		ripple,
		color,
		variant,
		dense,
		href,
		props,
		actionProp,
		defaultProp,
		forwardEvents,
		context,
		action,
		defaultAction,
		dialogExcludes,
		$$props,
		$$scope,
		$$slots
	];
}

class Button extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			use: 0,
			class: 1,
			ripple: 2,
			color: 3,
			variant: 4,
			dense: 5,
			href: 6,
			action: 12,
			default: 13
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Button",
			options,
			id: create_fragment.name
		});
	}

	get use() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get ripple() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set ripple(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get color() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set color(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get variant() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set variant(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get dense() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set dense(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get href() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set href(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get action() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set action(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get default() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set default(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* node_modules\@smui\button\Group.svelte generated by Svelte v3.16.4 */
const file$1 = "node_modules\\@smui\\button\\Group.svelte";

function create_fragment$1(ctx) {
	let div;
	let useActions_action;
	let forwardEvents_action;
	let current;
	const default_slot_template = /*$$slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

	let div_levels = [
		{
			class: "\n    smui-button__group\n    " + /*className*/ ctx[1] + "\n    " + (/*variant*/ ctx[2] === "raised"
			? "smui-button__group--raised"
			: "") + "\n  "
		},
		exclude(/*$$props*/ ctx[4], ["use", "class", "variant"])
	];

	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	const block = {
		c: function create() {
			div = element("div");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if (default_slot) default_slot.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(div, div_data);
			add_location(div, file$1, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			useActions_action = useActions.call(null, div, /*use*/ ctx[0]) || ({});
			forwardEvents_action = /*forwardEvents*/ ctx[3].call(null, div) || ({});
			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot && default_slot.p && dirty[0] & /*$$scope*/ 32) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[5], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, null));
			}

			set_attributes(div, get_spread_update(div_levels, [
				dirty[0] & /*className, variant*/ 6 && ({
					class: "\n    smui-button__group\n    " + /*className*/ ctx[1] + "\n    " + (/*variant*/ ctx[2] === "raised"
					? "smui-button__group--raised"
					: "") + "\n  "
				}),
				dirty[0] & /*$$props*/ 16 && exclude(/*$$props*/ ctx[4], ["use", "class", "variant"])
			]));

			if (is_function(useActions_action.update) && dirty[0] & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (default_slot) default_slot.d(detaching);
			if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
			if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	const forwardEvents = forwardEventsBuilder(current_component);
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { variant = "text" } = $$props;
	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$new_props => {
		$$invalidate(4, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("variant" in $$new_props) $$invalidate(2, variant = $$new_props.variant);
		if ("$$scope" in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => {
		return { use, className, variant };
	};

	$$self.$inject_state = $$new_props => {
		$$invalidate(4, $$props = assign(assign({}, $$props), $$new_props));
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("variant" in $$props) $$invalidate(2, variant = $$new_props.variant);
	};

	$$props = exclude_internal_props($$props);
	return [use, className, variant, forwardEvents, $$props, $$scope, $$slots];
}

class Group extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { use: 0, class: 1, variant: 2 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Group",
			options,
			id: create_fragment$1.name
		});
	}

	get use() {
		throw new Error("<Group>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Group>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<Group>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<Group>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get variant() {
		throw new Error("<Group>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set variant(value) {
		throw new Error("<Group>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

function GroupItem(node) {
  node.classList.add('smui-button__group-item');

  return {
    destroy() {
      node.classList.remove('smui-button__group-item');
    }
  }
}

/* node_modules\@smui\common\Label.svelte generated by Svelte v3.16.4 */
const file$2 = "node_modules\\@smui\\common\\Label.svelte";

function create_fragment$2(ctx) {
	let span;
	let useActions_action;
	let forwardEvents_action;
	let current;
	const default_slot_template = /*$$slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

	let span_levels = [
		{
			class: "\n    " + /*className*/ ctx[1] + "\n    " + (/*context*/ ctx[3] === "button"
			? "mdc-button__label"
			: "") + "\n    " + (/*context*/ ctx[3] === "fab" ? "mdc-fab__label" : "") + "\n    " + (/*context*/ ctx[3] === "chip" ? "mdc-chip__text" : "") + "\n    " + (/*context*/ ctx[3] === "tab"
			? "mdc-tab__text-label"
			: "") + "\n    " + (/*context*/ ctx[3] === "image-list"
			? "mdc-image-list__label"
			: "") + "\n    " + (/*context*/ ctx[3] === "snackbar"
			? "mdc-snackbar__label"
			: "") + "\n  "
		},
		/*context*/ ctx[3] === "snackbar"
		? { role: "status", "aria-live": "polite" }
		: {},
		exclude(/*$$props*/ ctx[4], ["use", "class"])
	];

	let span_data = {};

	for (let i = 0; i < span_levels.length; i += 1) {
		span_data = assign(span_data, span_levels[i]);
	}

	const block = {
		c: function create() {
			span = element("span");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			if (default_slot) default_slot.l(span_nodes);
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(span, span_data);
			add_location(span, file$2, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);

			if (default_slot) {
				default_slot.m(span, null);
			}

			useActions_action = useActions.call(null, span, /*use*/ ctx[0]) || ({});
			forwardEvents_action = /*forwardEvents*/ ctx[2].call(null, span) || ({});
			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot && default_slot.p && dirty[0] & /*$$scope*/ 32) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[5], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, null));
			}

			set_attributes(span, get_spread_update(span_levels, [
				dirty[0] & /*className, context*/ 10 && ({
					class: "\n    " + /*className*/ ctx[1] + "\n    " + (/*context*/ ctx[3] === "button"
					? "mdc-button__label"
					: "") + "\n    " + (/*context*/ ctx[3] === "fab" ? "mdc-fab__label" : "") + "\n    " + (/*context*/ ctx[3] === "chip" ? "mdc-chip__text" : "") + "\n    " + (/*context*/ ctx[3] === "tab"
					? "mdc-tab__text-label"
					: "") + "\n    " + (/*context*/ ctx[3] === "image-list"
					? "mdc-image-list__label"
					: "") + "\n    " + (/*context*/ ctx[3] === "snackbar"
					? "mdc-snackbar__label"
					: "") + "\n  "
				}),
				dirty[0] & /*context*/ 8 && (/*context*/ ctx[3] === "snackbar"
				? { role: "status", "aria-live": "polite" }
				: {}),
				dirty[0] & /*$$props*/ 16 && exclude(/*$$props*/ ctx[4], ["use", "class"])
			]));

			if (is_function(useActions_action.update) && dirty[0] & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
			if (default_slot) default_slot.d(detaching);
			if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
			if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$2($$self, $$props, $$invalidate) {
	const forwardEvents = forwardEventsBuilder(current_component);
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	const context = getContext("SMUI:label:context");
	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$new_props => {
		$$invalidate(4, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("$$scope" in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => {
		return { use, className };
	};

	$$self.$inject_state = $$new_props => {
		$$invalidate(4, $$props = assign(assign({}, $$props), $$new_props));
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
	};

	$$props = exclude_internal_props($$props);
	return [use, className, forwardEvents, context, $$props, $$scope, $$slots];
}

class Label extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, { use: 0, class: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Label",
			options,
			id: create_fragment$2.name
		});
	}

	get use() {
		throw new Error("<Label>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Label>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<Label>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<Label>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* node_modules\@smui\common\Icon.svelte generated by Svelte v3.16.4 */
const file$3 = "node_modules\\@smui\\common\\Icon.svelte";

function create_fragment$3(ctx) {
	let i;
	let useActions_action;
	let forwardEvents_action;
	let current;
	const default_slot_template = /*$$slots*/ ctx[10].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[9], null);

	let i_levels = [
		{
			class: "\n    " + /*className*/ ctx[1] + "\n    " + (/*context*/ ctx[7] === "button"
			? "mdc-button__icon"
			: "") + "\n    " + (/*context*/ ctx[7] === "fab" ? "mdc-fab__icon" : "") + "\n    " + (/*context*/ ctx[7] === "icon-button"
			? "mdc-icon-button__icon"
			: "") + "\n    " + (/*context*/ ctx[7] === "icon-button" && /*on*/ ctx[2]
			? "mdc-icon-button__icon--on"
			: "") + "\n    " + (/*context*/ ctx[7] === "chip" ? "mdc-chip__icon" : "") + "\n    " + (/*context*/ ctx[7] === "chip" && /*leading*/ ctx[3]
			? "mdc-chip__icon--leading"
			: "") + "\n    " + (/*context*/ ctx[7] === "chip" && /*leadingHidden*/ ctx[4]
			? "mdc-chip__icon--leading-hidden"
			: "") + "\n    " + (/*context*/ ctx[7] === "chip" && /*trailing*/ ctx[5]
			? "mdc-chip__icon--trailing"
			: "") + "\n    " + (/*context*/ ctx[7] === "tab" ? "mdc-tab__icon" : "") + "\n  "
		},
		{ "aria-hidden": "true" },
		exclude(/*$$props*/ ctx[8], ["use", "class", "on", "leading", "leadingHidden", "trailing"])
	];

	let i_data = {};

	for (let i = 0; i < i_levels.length; i += 1) {
		i_data = assign(i_data, i_levels[i]);
	}

	const block = {
		c: function create() {
			i = element("i");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			i = claim_element(nodes, "I", { class: true, "aria-hidden": true });
			var i_nodes = children(i);
			if (default_slot) default_slot.l(i_nodes);
			i_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(i, i_data);
			add_location(i, file$3, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, i, anchor);

			if (default_slot) {
				default_slot.m(i, null);
			}

			useActions_action = useActions.call(null, i, /*use*/ ctx[0]) || ({});
			forwardEvents_action = /*forwardEvents*/ ctx[6].call(null, i) || ({});
			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot && default_slot.p && dirty[0] & /*$$scope*/ 512) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[9], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[9], dirty, null));
			}

			set_attributes(i, get_spread_update(i_levels, [
				dirty[0] & /*className, context, on, leading, leadingHidden, trailing*/ 190 && ({
					class: "\n    " + /*className*/ ctx[1] + "\n    " + (/*context*/ ctx[7] === "button"
					? "mdc-button__icon"
					: "") + "\n    " + (/*context*/ ctx[7] === "fab" ? "mdc-fab__icon" : "") + "\n    " + (/*context*/ ctx[7] === "icon-button"
					? "mdc-icon-button__icon"
					: "") + "\n    " + (/*context*/ ctx[7] === "icon-button" && /*on*/ ctx[2]
					? "mdc-icon-button__icon--on"
					: "") + "\n    " + (/*context*/ ctx[7] === "chip" ? "mdc-chip__icon" : "") + "\n    " + (/*context*/ ctx[7] === "chip" && /*leading*/ ctx[3]
					? "mdc-chip__icon--leading"
					: "") + "\n    " + (/*context*/ ctx[7] === "chip" && /*leadingHidden*/ ctx[4]
					? "mdc-chip__icon--leading-hidden"
					: "") + "\n    " + (/*context*/ ctx[7] === "chip" && /*trailing*/ ctx[5]
					? "mdc-chip__icon--trailing"
					: "") + "\n    " + (/*context*/ ctx[7] === "tab" ? "mdc-tab__icon" : "") + "\n  "
				}),
				{ "aria-hidden": "true" },
				dirty[0] & /*$$props*/ 256 && exclude(/*$$props*/ ctx[8], ["use", "class", "on", "leading", "leadingHidden", "trailing"])
			]));

			if (is_function(useActions_action.update) && dirty[0] & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(i);
			if (default_slot) default_slot.d(detaching);
			if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
			if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$3.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$3($$self, $$props, $$invalidate) {
	const forwardEvents = forwardEventsBuilder(current_component);
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { on = false } = $$props;
	let { leading = false } = $$props;
	let { leadingHidden = false } = $$props;
	let { trailing = false } = $$props;
	const context = getContext("SMUI:icon:context");
	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$new_props => {
		$$invalidate(8, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("on" in $$new_props) $$invalidate(2, on = $$new_props.on);
		if ("leading" in $$new_props) $$invalidate(3, leading = $$new_props.leading);
		if ("leadingHidden" in $$new_props) $$invalidate(4, leadingHidden = $$new_props.leadingHidden);
		if ("trailing" in $$new_props) $$invalidate(5, trailing = $$new_props.trailing);
		if ("$$scope" in $$new_props) $$invalidate(9, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => {
		return {
			use,
			className,
			on,
			leading,
			leadingHidden,
			trailing
		};
	};

	$$self.$inject_state = $$new_props => {
		$$invalidate(8, $$props = assign(assign({}, $$props), $$new_props));
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("on" in $$props) $$invalidate(2, on = $$new_props.on);
		if ("leading" in $$props) $$invalidate(3, leading = $$new_props.leading);
		if ("leadingHidden" in $$props) $$invalidate(4, leadingHidden = $$new_props.leadingHidden);
		if ("trailing" in $$props) $$invalidate(5, trailing = $$new_props.trailing);
	};

	$$props = exclude_internal_props($$props);

	return [
		use,
		className,
		on,
		leading,
		leadingHidden,
		trailing,
		forwardEvents,
		context,
		$$props,
		$$scope,
		$$slots
	];
}

class Icon extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$3, create_fragment$3, safe_not_equal, {
			use: 0,
			class: 1,
			on: 2,
			leading: 3,
			leadingHidden: 4,
			trailing: 5
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Icon",
			options,
			id: create_fragment$3.name
		});
	}

	get use() {
		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get on() {
		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set on(value) {
		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get leading() {
		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set leading(value) {
		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get leadingHidden() {
		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set leadingHidden(value) {
		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get trailing() {
		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set trailing(value) {
		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

var css$1 = ".mdc-typography--headline6{font-size:1.25rem;line-height:2rem;letter-spacing:.0125em}.mdc-typography--headline6,.mdc-typography--subtitle2{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-weight:500;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle2{font-size:.875rem;line-height:1.375rem;letter-spacing:.0071428571em}.mdc-typography--body2{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit}:root{--primary-100:#ebf8ff;--primary-200:#bee3f8;--primary-300:#90cdf4;--primary-400:#63b3ed;--primary-500:#4299e1;--primary-600:#3182ce;--primary-700:#2b6cb0;--primary-800:#2c5282;--primary-900:#2a4365;--secondary-100:#fff5f5;--secondary-200:#fed7d7;--secondary-300:#feb2b2;--secondary-400:#fc8181;--secondary-500:#f56565;--secondary-600:#e53e3e;--secondary-700:#c53030;--secondary-800:#9b2c2c;--secondary-900:#742a2a;--primary-color:var(--primary-700);--secondary-color:var(--secondary-700);--primary-font-color:#fff;--secondary-font-color:#fff;--disabled-button-bg-color:#e0e0e0;--font-color:#212121;--other-font-color:#000;--bg-color:#fff;--bg-layer-color:#f5f5f5;--bg-card-color:#fff;--enabled-color:#757575;--disabled-color:#bdbdbd;--switch-toggle-color:#fafafa;--switch-track-color:#4d4d4d;--font-family:\"Montserrat\",sans-serif;--filter:invert(0%);--alert-default-bg-color:var(--primary-200);--alert-solid-bg-color:var(--primary-700);--alert-solid-text-color:\"text-white\";--alert-outline-bg-color:var(--primary-100);--alert-outline-border-color:var(--primary-400);--alert-outline-border-color2:var(--primary-600);--alert-outline-text-color:var(--primary-800)}[data-theme=dark]{--primary-color:var(--primary-400);--secondary-color:var(--secondary-400);--primary-font-color:#000;--secondary-font-color:#000;--disabled-button-bg-color:#1f1f1f;--font-color:#dedede;--other-font-color:#fff;--bg-color:#121212;--bg-layer-color:#333;--bg-card-color:#424242;--enabled-color:#b3b3b3;--disabled-color:#4d4d4d;--switch-toggle-color:#b3b3b3;--switch-track-color:#fff;--filter:invert(100%)}body{--mdc-theme-primary:var(--primary-color);--mdc-theme-secondary:var(--secondary-color);--mdc-theme-on-primary:var(--primary-font-color);--mdc-theme-on-secondary:var(--secondary-font-color);--mdc-text-field-ink-color:var(--other-font-color);--mdc-theme-text-primary-on-background:var(--font-color);--mdc-theme-surface:transparent;--duration:0.5s;--timing:ease;background-color:var(--bg-color);color:var(--font-color);-webkit-transition:color var(--duration) var(--timing),background-color var(--duration) var(--timing);transition:color var(--duration) var(--timing),background-color var(--duration) var(--timing);font-family:var(--font-family)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:var(--disabled-button-bg-color)}.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--disabled-color)}.mdc-select:not(.mdc-select--disabled) .mdc-select__native-control,.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text,.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--other-font-color)}.mdc-select:not(.mdc-select--disabled) .mdc-select__native-control option{color:#000}.mdc-select--with-leading-icon:not(.mdc-select--disabled) .mdc-select__icon{color:var(--enabled-color);opacity:1}.mdc-select__dropdown-icon{-webkit-filter:var(--filter);filter:var(--filter)}.mdc-select--invalid .mdc-select__dropdown-icon{-webkit-filter:invert(0);filter:invert(0)}.mdc-switch--disabled{opacity:.5}.mdc-card__action--icon:not(:disabled){color:var(--enabled-color)}.flex-1-0-auto{-webkit-box-flex:1;flex:1 0 auto}@-webkit-keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@-webkit-keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@-webkit-keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-menu{min-width:112px}.mdc-menu .mdc-list{color:rgba(0,0,0,.87)}.mdc-menu .mdc-list-divider{margin:8px 0}.mdc-menu .mdc-list-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mdc-menu .mdc-list-item--disabled{cursor:auto}@media screen and (-ms-high-contrast:active){.mdc-menu .mdc-list-item--disabled{opacity:.38}}.mdc-menu a.mdc-list-item .mdc-list-item__text{pointer-events:none}.mdc-menu__selection-group{padding:0;fill:currentColor}.mdc-menu__selection-group .mdc-list-item{padding-left:56px;padding-right:16px}.mdc-menu__selection-group .mdc-list-item[dir=rtl],[dir=rtl] .mdc-menu__selection-group .mdc-list-item{padding-left:16px;padding-right:56px}.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);margin:0;padding:0;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:top left;transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;-webkit-transition:opacity .03s linear,-webkit-transform .12s cubic-bezier(0,0,.2,1);transition:opacity .03s linear,-webkit-transform .12s cubic-bezier(0,0,.2,1);transition:opacity .03s linear,transform .12s cubic-bezier(0,0,.2,1);transition:opacity .03s linear,transform .12s cubic-bezier(0,0,.2,1),-webkit-transform .12s cubic-bezier(0,0,.2,1);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface,#fff);color:#000;color:var(--mdc-theme-on-surface,#000);border-radius:4px;transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--open{display:inline-block;-webkit-transform:scale(1);transform:scale(1);opacity:1}.mdc-menu-surface[dir=rtl],[dir=rtl] .mdc-menu-surface{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.smui-menu-surface--static{position:static;z-index:0;display:inline-block;-webkit-transform:scale(1);transform:scale(1);opacity:1}";
styleInject(css$1);

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
var cssClasses$1 = {
    ANCHOR: 'mdc-menu-surface--anchor',
    ANIMATING_CLOSED: 'mdc-menu-surface--animating-closed',
    ANIMATING_OPEN: 'mdc-menu-surface--animating-open',
    FIXED: 'mdc-menu-surface--fixed',
    OPEN: 'mdc-menu-surface--open',
    ROOT: 'mdc-menu-surface',
};
// tslint:disable:object-literal-sort-keys
var strings$1 = {
    CLOSED_EVENT: 'MDCMenuSurface:closed',
    OPENED_EVENT: 'MDCMenuSurface:opened',
    FOCUSABLE_ELEMENTS: [
        'button:not(:disabled)', '[href]:not([aria-disabled="true"])', 'input:not(:disabled)',
        'select:not(:disabled)', 'textarea:not(:disabled)', '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])',
    ].join(', '),
};
// tslint:enable:object-literal-sort-keys
var numbers$1 = {
    /** Total duration of menu-surface open animation. */
    TRANSITION_OPEN_DURATION: 120,
    /** Total duration of menu-surface close animation. */
    TRANSITION_CLOSE_DURATION: 75,
    /** Margin left to the edge of the viewport when menu-surface is at maximum possible height. */
    MARGIN_TO_EDGE: 32,
    /** Ratio of anchor width to menu-surface width for switching from corner positioning to center positioning. */
    ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67,
};
/**
 * Enum for bits in the {@see Corner) bitmap.
 */
var CornerBit;
(function (CornerBit) {
    CornerBit[CornerBit["BOTTOM"] = 1] = "BOTTOM";
    CornerBit[CornerBit["CENTER"] = 2] = "CENTER";
    CornerBit[CornerBit["RIGHT"] = 4] = "RIGHT";
    CornerBit[CornerBit["FLIP_RTL"] = 8] = "FLIP_RTL";
})(CornerBit || (CornerBit = {}));
/**
 * Enum for representing an element corner for positioning the menu-surface.
 *
 * The START constants map to LEFT if element directionality is left
 * to right and RIGHT if the directionality is right to left.
 * Likewise END maps to RIGHT or LEFT depending on the directionality.
 */
var Corner;
(function (Corner) {
    Corner[Corner["TOP_LEFT"] = 0] = "TOP_LEFT";
    Corner[Corner["TOP_RIGHT"] = 4] = "TOP_RIGHT";
    Corner[Corner["BOTTOM_LEFT"] = 1] = "BOTTOM_LEFT";
    Corner[Corner["BOTTOM_RIGHT"] = 5] = "BOTTOM_RIGHT";
    Corner[Corner["TOP_START"] = 8] = "TOP_START";
    Corner[Corner["TOP_END"] = 12] = "TOP_END";
    Corner[Corner["BOTTOM_START"] = 9] = "BOTTOM_START";
    Corner[Corner["BOTTOM_END"] = 13] = "BOTTOM_END";
})(Corner || (Corner = {}));

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
var cssClasses$2 = {
    LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated',
    LIST_ITEM_CLASS: 'mdc-list-item',
    LIST_ITEM_DISABLED_CLASS: 'mdc-list-item--disabled',
    LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
    ROOT: 'mdc-list',
};
var strings$2 = {
    ACTION_EVENT: 'MDCList:action',
    ARIA_CHECKED: 'aria-checked',
    ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
    ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
    ARIA_CURRENT: 'aria-current',
    ARIA_DISABLED: 'aria-disabled',
    ARIA_ORIENTATION: 'aria-orientation',
    ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
    ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
    ARIA_SELECTED: 'aria-selected',
    CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"]:not(:disabled), input[type="radio"]:not(:disabled)',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]:not(:disabled)',
    CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses$2.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses$2.LIST_ITEM_CLASS + " a\n  ",
    FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses$2.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses$2.LIST_ITEM_CLASS + " a,\n    ." + cssClasses$2.LIST_ITEM_CLASS + " input[type=\"radio\"]:not(:disabled),\n    ." + cssClasses$2.LIST_ITEM_CLASS + " input[type=\"checkbox\"]:not(:disabled)\n  ",
    RADIO_SELECTOR: 'input[type="radio"]:not(:disabled)',
};
var numbers$2 = {
    UNSET_INDEX: -1,
};

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
var ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select'];
function isNumberArray(selectedIndex) {
    return selectedIndex instanceof Array;
}
var MDCListFoundation = /** @class */ (function (_super) {
    __extends(MDCListFoundation, _super);
    function MDCListFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCListFoundation.defaultAdapter, adapter)) || this;
        _this.wrapFocus_ = false;
        _this.isVertical_ = true;
        _this.isSingleSelectionList_ = false;
        _this.selectedIndex_ = numbers$2.UNSET_INDEX;
        _this.focusedItemIndex_ = numbers$2.UNSET_INDEX;
        _this.useActivatedClass_ = false;
        _this.ariaCurrentAttrValue_ = null;
        _this.isCheckboxList_ = false;
        _this.isRadioList_ = false;
        return _this;
    }
    Object.defineProperty(MDCListFoundation, "strings", {
        get: function () {
            return strings$2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCListFoundation, "cssClasses", {
        get: function () {
            return cssClasses$2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCListFoundation, "numbers", {
        get: function () {
            return numbers$2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCListFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClassForElementIndex: function () { return undefined; },
                focusItemAtIndex: function () { return undefined; },
                getAttributeForElementIndex: function () { return null; },
                getFocusedElementIndex: function () { return 0; },
                getListItemCount: function () { return 0; },
                hasCheckboxAtIndex: function () { return false; },
                hasRadioAtIndex: function () { return false; },
                isCheckboxCheckedAtIndex: function () { return false; },
                isFocusInsideList: function () { return false; },
                isRootFocused: function () { return false; },
                notifyAction: function () { return undefined; },
                removeClassForElementIndex: function () { return undefined; },
                setAttributeForElementIndex: function () { return undefined; },
                setCheckedCheckboxOrRadioAtIndex: function () { return undefined; },
                setTabIndexForListItemChildren: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCListFoundation.prototype.layout = function () {
        if (this.adapter_.getListItemCount() === 0) {
            return;
        }
        if (this.adapter_.hasCheckboxAtIndex(0)) {
            this.isCheckboxList_ = true;
        }
        else if (this.adapter_.hasRadioAtIndex(0)) {
            this.isRadioList_ = true;
        }
    };
    /**
     * Sets the private wrapFocus_ variable.
     */
    MDCListFoundation.prototype.setWrapFocus = function (value) {
        this.wrapFocus_ = value;
    };
    /**
     * Sets the isVertical_ private variable.
     */
    MDCListFoundation.prototype.setVerticalOrientation = function (value) {
        this.isVertical_ = value;
    };
    /**
     * Sets the isSingleSelectionList_ private variable.
     */
    MDCListFoundation.prototype.setSingleSelection = function (value) {
        this.isSingleSelectionList_ = value;
    };
    /**
     * Sets the useActivatedClass_ private variable.
     */
    MDCListFoundation.prototype.setUseActivatedClass = function (useActivated) {
        this.useActivatedClass_ = useActivated;
    };
    MDCListFoundation.prototype.getSelectedIndex = function () {
        return this.selectedIndex_;
    };
    MDCListFoundation.prototype.setSelectedIndex = function (index) {
        if (!this.isIndexValid_(index)) {
            return;
        }
        if (this.isCheckboxList_) {
            this.setCheckboxAtIndex_(index);
        }
        else if (this.isRadioList_) {
            this.setRadioAtIndex_(index);
        }
        else {
            this.setSingleSelectionAtIndex_(index);
        }
    };
    /**
     * Focus in handler for the list items.
     */
    MDCListFoundation.prototype.handleFocusIn = function (_, listItemIndex) {
        if (listItemIndex >= 0) {
            this.adapter_.setTabIndexForListItemChildren(listItemIndex, '0');
        }
    };
    /**
     * Focus out handler for the list items.
     */
    MDCListFoundation.prototype.handleFocusOut = function (_, listItemIndex) {
        var _this = this;
        if (listItemIndex >= 0) {
            this.adapter_.setTabIndexForListItemChildren(listItemIndex, '-1');
        }
        /**
         * Between Focusout & Focusin some browsers do not have focus on any element. Setting a delay to wait till the focus
         * is moved to next element.
         */
        setTimeout(function () {
            if (!_this.adapter_.isFocusInsideList()) {
                _this.setTabindexToFirstSelectedItem_();
            }
        }, 0);
    };
    /**
     * Key handler for the list.
     */
    MDCListFoundation.prototype.handleKeydown = function (evt, isRootListItem, listItemIndex) {
        var isArrowLeft = evt.key === 'ArrowLeft' || evt.keyCode === 37;
        var isArrowUp = evt.key === 'ArrowUp' || evt.keyCode === 38;
        var isArrowRight = evt.key === 'ArrowRight' || evt.keyCode === 39;
        var isArrowDown = evt.key === 'ArrowDown' || evt.keyCode === 40;
        var isHome = evt.key === 'Home' || evt.keyCode === 36;
        var isEnd = evt.key === 'End' || evt.keyCode === 35;
        var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
        var isSpace = evt.key === 'Space' || evt.keyCode === 32;
        if (this.adapter_.isRootFocused()) {
            if (isArrowUp || isEnd) {
                evt.preventDefault();
                this.focusLastElement();
            }
            else if (isArrowDown || isHome) {
                evt.preventDefault();
                this.focusFirstElement();
            }
            return;
        }
        var currentIndex = this.adapter_.getFocusedElementIndex();
        if (currentIndex === -1) {
            currentIndex = listItemIndex;
            if (currentIndex < 0) {
                // If this event doesn't have a mdc-list-item ancestor from the
                // current list (not from a sublist), return early.
                return;
            }
        }
        var nextIndex;
        if ((this.isVertical_ && isArrowDown) || (!this.isVertical_ && isArrowRight)) {
            this.preventDefaultEvent_(evt);
            nextIndex = this.focusNextElement(currentIndex);
        }
        else if ((this.isVertical_ && isArrowUp) || (!this.isVertical_ && isArrowLeft)) {
            this.preventDefaultEvent_(evt);
            nextIndex = this.focusPrevElement(currentIndex);
        }
        else if (isHome) {
            this.preventDefaultEvent_(evt);
            nextIndex = this.focusFirstElement();
        }
        else if (isEnd) {
            this.preventDefaultEvent_(evt);
            nextIndex = this.focusLastElement();
        }
        else if (isEnter || isSpace) {
            if (isRootListItem) {
                // Return early if enter key is pressed on anchor element which triggers synthetic MouseEvent event.
                var target = evt.target;
                if (target && target.tagName === 'A' && isEnter) {
                    return;
                }
                this.preventDefaultEvent_(evt);
                if (this.isSelectableList_()) {
                    this.setSelectedIndexOnAction_(currentIndex);
                }
                this.adapter_.notifyAction(currentIndex);
            }
        }
        this.focusedItemIndex_ = currentIndex;
        if (nextIndex !== undefined) {
            this.setTabindexAtIndex_(nextIndex);
            this.focusedItemIndex_ = nextIndex;
        }
    };
    /**
     * Click handler for the list.
     */
    MDCListFoundation.prototype.handleClick = function (index, toggleCheckbox) {
        if (index === numbers$2.UNSET_INDEX) {
            return;
        }
        if (this.isSelectableList_()) {
            this.setSelectedIndexOnAction_(index, toggleCheckbox);
        }
        this.adapter_.notifyAction(index);
        this.setTabindexAtIndex_(index);
        this.focusedItemIndex_ = index;
    };
    /**
     * Focuses the next element on the list.
     */
    MDCListFoundation.prototype.focusNextElement = function (index) {
        var count = this.adapter_.getListItemCount();
        var nextIndex = index + 1;
        if (nextIndex >= count) {
            if (this.wrapFocus_) {
                nextIndex = 0;
            }
            else {
                // Return early because last item is already focused.
                return index;
            }
        }
        this.adapter_.focusItemAtIndex(nextIndex);
        return nextIndex;
    };
    /**
     * Focuses the previous element on the list.
     */
    MDCListFoundation.prototype.focusPrevElement = function (index) {
        var prevIndex = index - 1;
        if (prevIndex < 0) {
            if (this.wrapFocus_) {
                prevIndex = this.adapter_.getListItemCount() - 1;
            }
            else {
                // Return early because first item is already focused.
                return index;
            }
        }
        this.adapter_.focusItemAtIndex(prevIndex);
        return prevIndex;
    };
    MDCListFoundation.prototype.focusFirstElement = function () {
        this.adapter_.focusItemAtIndex(0);
        return 0;
    };
    MDCListFoundation.prototype.focusLastElement = function () {
        var lastIndex = this.adapter_.getListItemCount() - 1;
        this.adapter_.focusItemAtIndex(lastIndex);
        return lastIndex;
    };
    /**
     * @param itemIndex Index of the list item
     * @param isEnabled Sets the list item to enabled or disabled.
     */
    MDCListFoundation.prototype.setEnabled = function (itemIndex, isEnabled) {
        if (!this.isIndexValid_(itemIndex)) {
            return;
        }
        if (isEnabled) {
            this.adapter_.removeClassForElementIndex(itemIndex, cssClasses$2.LIST_ITEM_DISABLED_CLASS);
            this.adapter_.setAttributeForElementIndex(itemIndex, strings$2.ARIA_DISABLED, 'false');
        }
        else {
            this.adapter_.addClassForElementIndex(itemIndex, cssClasses$2.LIST_ITEM_DISABLED_CLASS);
            this.adapter_.setAttributeForElementIndex(itemIndex, strings$2.ARIA_DISABLED, 'true');
        }
    };
    /**
     * Ensures that preventDefault is only called if the containing element doesn't
     * consume the event, and it will cause an unintended scroll.
     */
    MDCListFoundation.prototype.preventDefaultEvent_ = function (evt) {
        var target = evt.target;
        var tagName = ("" + target.tagName).toLowerCase();
        if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
            evt.preventDefault();
        }
    };
    MDCListFoundation.prototype.setSingleSelectionAtIndex_ = function (index) {
        if (this.selectedIndex_ === index) {
            return;
        }
        var selectedClassName = cssClasses$2.LIST_ITEM_SELECTED_CLASS;
        if (this.useActivatedClass_) {
            selectedClassName = cssClasses$2.LIST_ITEM_ACTIVATED_CLASS;
        }
        if (this.selectedIndex_ !== numbers$2.UNSET_INDEX) {
            this.adapter_.removeClassForElementIndex(this.selectedIndex_, selectedClassName);
        }
        this.adapter_.addClassForElementIndex(index, selectedClassName);
        this.setAriaForSingleSelectionAtIndex_(index);
        this.selectedIndex_ = index;
    };
    /**
     * Sets aria attribute for single selection at given index.
     */
    MDCListFoundation.prototype.setAriaForSingleSelectionAtIndex_ = function (index) {
        // Detect the presence of aria-current and get the value only during list initialization when it is in unset state.
        if (this.selectedIndex_ === numbers$2.UNSET_INDEX) {
            this.ariaCurrentAttrValue_ =
                this.adapter_.getAttributeForElementIndex(index, strings$2.ARIA_CURRENT);
        }
        var isAriaCurrent = this.ariaCurrentAttrValue_ !== null;
        var ariaAttribute = isAriaCurrent ? strings$2.ARIA_CURRENT : strings$2.ARIA_SELECTED;
        if (this.selectedIndex_ !== numbers$2.UNSET_INDEX) {
            this.adapter_.setAttributeForElementIndex(this.selectedIndex_, ariaAttribute, 'false');
        }
        var ariaAttributeValue = isAriaCurrent ? this.ariaCurrentAttrValue_ : 'true';
        this.adapter_.setAttributeForElementIndex(index, ariaAttribute, ariaAttributeValue);
    };
    /**
     * Toggles radio at give index. Radio doesn't change the checked state if it is already checked.
     */
    MDCListFoundation.prototype.setRadioAtIndex_ = function (index) {
        this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, true);
        if (this.selectedIndex_ !== numbers$2.UNSET_INDEX) {
            this.adapter_.setAttributeForElementIndex(this.selectedIndex_, strings$2.ARIA_CHECKED, 'false');
        }
        this.adapter_.setAttributeForElementIndex(index, strings$2.ARIA_CHECKED, 'true');
        this.selectedIndex_ = index;
    };
    MDCListFoundation.prototype.setCheckboxAtIndex_ = function (index) {
        for (var i = 0; i < this.adapter_.getListItemCount(); i++) {
            var isChecked = false;
            if (index.indexOf(i) >= 0) {
                isChecked = true;
            }
            this.adapter_.setCheckedCheckboxOrRadioAtIndex(i, isChecked);
            this.adapter_.setAttributeForElementIndex(i, strings$2.ARIA_CHECKED, isChecked ? 'true' : 'false');
        }
        this.selectedIndex_ = index;
    };
    MDCListFoundation.prototype.setTabindexAtIndex_ = function (index) {
        if (this.focusedItemIndex_ === numbers$2.UNSET_INDEX && index !== 0) {
            // If no list item was selected set first list item's tabindex to -1.
            // Generally, tabindex is set to 0 on first list item of list that has no preselected items.
            this.adapter_.setAttributeForElementIndex(0, 'tabindex', '-1');
        }
        else if (this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== index) {
            this.adapter_.setAttributeForElementIndex(this.focusedItemIndex_, 'tabindex', '-1');
        }
        this.adapter_.setAttributeForElementIndex(index, 'tabindex', '0');
    };
    /**
     * @return Return true if it is single selectin list, checkbox list or radio list.
     */
    MDCListFoundation.prototype.isSelectableList_ = function () {
        return this.isSingleSelectionList_ || this.isCheckboxList_ || this.isRadioList_;
    };
    MDCListFoundation.prototype.setTabindexToFirstSelectedItem_ = function () {
        var targetIndex = 0;
        if (this.isSelectableList_()) {
            if (typeof this.selectedIndex_ === 'number' && this.selectedIndex_ !== numbers$2.UNSET_INDEX) {
                targetIndex = this.selectedIndex_;
            }
            else if (isNumberArray(this.selectedIndex_) && this.selectedIndex_.length > 0) {
                targetIndex = this.selectedIndex_.reduce(function (currentIndex, minIndex) { return Math.min(currentIndex, minIndex); });
            }
        }
        this.setTabindexAtIndex_(targetIndex);
    };
    MDCListFoundation.prototype.isIndexValid_ = function (index) {
        var _this = this;
        if (index instanceof Array) {
            if (!this.isCheckboxList_) {
                throw new Error('MDCListFoundation: Array of index is only supported for checkbox based list');
            }
            if (index.length === 0) {
                return true;
            }
            else {
                return index.some(function (i) { return _this.isIndexInRange_(i); });
            }
        }
        else if (typeof index === 'number') {
            if (this.isCheckboxList_) {
                throw new Error('MDCListFoundation: Expected array of index for checkbox based list but got number: ' + index);
            }
            return this.isIndexInRange_(index);
        }
        else {
            return false;
        }
    };
    MDCListFoundation.prototype.isIndexInRange_ = function (index) {
        var listSize = this.adapter_.getListItemCount();
        return index >= 0 && index < listSize;
    };
    MDCListFoundation.prototype.setSelectedIndexOnAction_ = function (index, toggleCheckbox) {
        if (toggleCheckbox === void 0) { toggleCheckbox = true; }
        if (this.isCheckboxList_) {
            this.toggleCheckboxAtIndex_(index, toggleCheckbox);
        }
        else {
            this.setSelectedIndex(index);
        }
    };
    MDCListFoundation.prototype.toggleCheckboxAtIndex_ = function (index, toggleCheckbox) {
        var isChecked = this.adapter_.isCheckboxCheckedAtIndex(index);
        if (toggleCheckbox) {
            isChecked = !isChecked;
            this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, isChecked);
        }
        this.adapter_.setAttributeForElementIndex(index, strings$2.ARIA_CHECKED, isChecked ? 'true' : 'false');
        // If none of the checkbox items are selected and selectedIndex is not initialized then provide a default value.
        var selectedIndexes = this.selectedIndex_ === numbers$2.UNSET_INDEX ? [] : this.selectedIndex_.slice();
        if (isChecked) {
            selectedIndexes.push(index);
        }
        else {
            selectedIndexes = selectedIndexes.filter(function (i) { return i !== index; });
        }
        this.selectedIndex_ = selectedIndexes;
    };
    return MDCListFoundation;
}(MDCFoundation));

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
var MDCList = /** @class */ (function (_super) {
    __extends(MDCList, _super);
    function MDCList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MDCList.prototype, "vertical", {
        set: function (value) {
            this.foundation_.setVerticalOrientation(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "listElements", {
        get: function () {
            return [].slice.call(this.root_.querySelectorAll("." + cssClasses$2.LIST_ITEM_CLASS));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "wrapFocus", {
        set: function (value) {
            this.foundation_.setWrapFocus(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "singleSelection", {
        set: function (isSingleSelectionList) {
            this.foundation_.setSingleSelection(isSingleSelectionList);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "selectedIndex", {
        get: function () {
            return this.foundation_.getSelectedIndex();
        },
        set: function (index) {
            this.foundation_.setSelectedIndex(index);
        },
        enumerable: true,
        configurable: true
    });
    MDCList.attachTo = function (root) {
        return new MDCList(root);
    };
    MDCList.prototype.initialSyncWithDOM = function () {
        this.handleClick_ = this.handleClickEvent_.bind(this);
        this.handleKeydown_ = this.handleKeydownEvent_.bind(this);
        this.focusInEventListener_ = this.handleFocusInEvent_.bind(this);
        this.focusOutEventListener_ = this.handleFocusOutEvent_.bind(this);
        this.listen('keydown', this.handleKeydown_);
        this.listen('click', this.handleClick_);
        this.listen('focusin', this.focusInEventListener_);
        this.listen('focusout', this.focusOutEventListener_);
        this.layout();
        this.initializeListType();
    };
    MDCList.prototype.destroy = function () {
        this.unlisten('keydown', this.handleKeydown_);
        this.unlisten('click', this.handleClick_);
        this.unlisten('focusin', this.focusInEventListener_);
        this.unlisten('focusout', this.focusOutEventListener_);
    };
    MDCList.prototype.layout = function () {
        var direction = this.root_.getAttribute(strings$2.ARIA_ORIENTATION);
        this.vertical = direction !== strings$2.ARIA_ORIENTATION_HORIZONTAL;
        // List items need to have at least tabindex=-1 to be focusable.
        [].slice.call(this.root_.querySelectorAll('.mdc-list-item:not([tabindex])'))
            .forEach(function (el) {
            el.setAttribute('tabindex', '-1');
        });
        // Child button/a elements are not tabbable until the list item is focused.
        [].slice.call(this.root_.querySelectorAll(strings$2.FOCUSABLE_CHILD_ELEMENTS))
            .forEach(function (el) { return el.setAttribute('tabindex', '-1'); });
        this.foundation_.layout();
    };
    /**
     * Initialize selectedIndex value based on pre-selected checkbox list items, single selection or radio.
     */
    MDCList.prototype.initializeListType = function () {
        var _this = this;
        var checkboxListItems = this.root_.querySelectorAll(strings$2.ARIA_ROLE_CHECKBOX_SELECTOR);
        var singleSelectedListItem = this.root_.querySelector("\n      ." + cssClasses$2.LIST_ITEM_ACTIVATED_CLASS + ",\n      ." + cssClasses$2.LIST_ITEM_SELECTED_CLASS + "\n    ");
        var radioSelectedListItem = this.root_.querySelector(strings$2.ARIA_CHECKED_RADIO_SELECTOR);
        if (checkboxListItems.length) {
            var preselectedItems = this.root_.querySelectorAll(strings$2.ARIA_CHECKED_CHECKBOX_SELECTOR);
            this.selectedIndex =
                [].map.call(preselectedItems, function (listItem) { return _this.listElements.indexOf(listItem); });
        }
        else if (singleSelectedListItem) {
            if (singleSelectedListItem.classList.contains(cssClasses$2.LIST_ITEM_ACTIVATED_CLASS)) {
                this.foundation_.setUseActivatedClass(true);
            }
            this.singleSelection = true;
            this.selectedIndex = this.listElements.indexOf(singleSelectedListItem);
        }
        else if (radioSelectedListItem) {
            this.selectedIndex = this.listElements.indexOf(radioSelectedListItem);
        }
    };
    /**
     * Updates the list item at itemIndex to the desired isEnabled state.
     * @param itemIndex Index of the list item
     * @param isEnabled Sets the list item to enabled or disabled.
     */
    MDCList.prototype.setEnabled = function (itemIndex, isEnabled) {
        this.foundation_.setEnabled(itemIndex, isEnabled);
    };
    MDCList.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClassForElementIndex: function (index, className) {
                var element = _this.listElements[index];
                if (element) {
                    element.classList.add(className);
                }
            },
            focusItemAtIndex: function (index) {
                var element = _this.listElements[index];
                if (element) {
                    element.focus();
                }
            },
            getAttributeForElementIndex: function (index, attr) { return _this.listElements[index].getAttribute(attr); },
            getFocusedElementIndex: function () { return _this.listElements.indexOf(document.activeElement); },
            getListItemCount: function () { return _this.listElements.length; },
            hasCheckboxAtIndex: function (index) {
                var listItem = _this.listElements[index];
                return !!listItem.querySelector(strings$2.CHECKBOX_SELECTOR);
            },
            hasRadioAtIndex: function (index) {
                var listItem = _this.listElements[index];
                return !!listItem.querySelector(strings$2.RADIO_SELECTOR);
            },
            isCheckboxCheckedAtIndex: function (index) {
                var listItem = _this.listElements[index];
                var toggleEl = listItem.querySelector(strings$2.CHECKBOX_SELECTOR);
                return toggleEl.checked;
            },
            isFocusInsideList: function () {
                return _this.root_.contains(document.activeElement);
            },
            isRootFocused: function () { return document.activeElement === _this.root_; },
            notifyAction: function (index) {
                _this.emit(strings$2.ACTION_EVENT, { index: index }, /** shouldBubble */ true);
            },
            removeClassForElementIndex: function (index, className) {
                var element = _this.listElements[index];
                if (element) {
                    element.classList.remove(className);
                }
            },
            setAttributeForElementIndex: function (index, attr, value) {
                var element = _this.listElements[index];
                if (element) {
                    element.setAttribute(attr, value);
                }
            },
            setCheckedCheckboxOrRadioAtIndex: function (index, isChecked) {
                var listItem = _this.listElements[index];
                var toggleEl = listItem.querySelector(strings$2.CHECKBOX_RADIO_SELECTOR);
                toggleEl.checked = isChecked;
                var event = document.createEvent('Event');
                event.initEvent('change', true, true);
                toggleEl.dispatchEvent(event);
            },
            setTabIndexForListItemChildren: function (listItemIndex, tabIndexValue) {
                var element = _this.listElements[listItemIndex];
                var listItemChildren = [].slice.call(element.querySelectorAll(strings$2.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
                listItemChildren.forEach(function (el) { return el.setAttribute('tabindex', tabIndexValue); });
            },
        };
        return new MDCListFoundation(adapter);
    };
    /**
     * Used to figure out which list item this event is targetting. Or returns -1 if
     * there is no list item
     */
    MDCList.prototype.getListItemIndex_ = function (evt) {
        var eventTarget = evt.target;
        var nearestParent = closest(eventTarget, "." + cssClasses$2.LIST_ITEM_CLASS + ", ." + cssClasses$2.ROOT);
        // Get the index of the element if it is a list item.
        if (nearestParent && matches(nearestParent, "." + cssClasses$2.LIST_ITEM_CLASS)) {
            return this.listElements.indexOf(nearestParent);
        }
        return -1;
    };
    /**
     * Used to figure out which element was clicked before sending the event to the foundation.
     */
    MDCList.prototype.handleFocusInEvent_ = function (evt) {
        var index = this.getListItemIndex_(evt);
        this.foundation_.handleFocusIn(evt, index);
    };
    /**
     * Used to figure out which element was clicked before sending the event to the foundation.
     */
    MDCList.prototype.handleFocusOutEvent_ = function (evt) {
        var index = this.getListItemIndex_(evt);
        this.foundation_.handleFocusOut(evt, index);
    };
    /**
     * Used to figure out which element was focused when keydown event occurred before sending the event to the
     * foundation.
     */
    MDCList.prototype.handleKeydownEvent_ = function (evt) {
        var index = this.getListItemIndex_(evt);
        var target = evt.target;
        this.foundation_.handleKeydown(evt, target.classList.contains(cssClasses$2.LIST_ITEM_CLASS), index);
    };
    /**
     * Used to figure out which element was clicked before sending the event to the foundation.
     */
    MDCList.prototype.handleClickEvent_ = function (evt) {
        var index = this.getListItemIndex_(evt);
        var target = evt.target;
        // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.
        var toggleCheckbox = !matches(target, strings$2.CHECKBOX_RADIO_SELECTOR);
        this.foundation_.handleClick(index, toggleCheckbox);
    };
    return MDCList;
}(MDCComponent));

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
var MDCMenuSurfaceFoundation = /** @class */ (function (_super) {
    __extends(MDCMenuSurfaceFoundation, _super);
    function MDCMenuSurfaceFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCMenuSurfaceFoundation.defaultAdapter, adapter)) || this;
        _this.isOpen_ = false;
        _this.isQuickOpen_ = false;
        _this.isHoistedElement_ = false;
        _this.isFixedPosition_ = false;
        _this.openAnimationEndTimerId_ = 0;
        _this.closeAnimationEndTimerId_ = 0;
        _this.animationRequestId_ = 0;
        _this.anchorCorner_ = Corner.TOP_START;
        _this.anchorMargin_ = { top: 0, right: 0, bottom: 0, left: 0 };
        _this.position_ = { x: 0, y: 0 };
        return _this;
    }
    Object.defineProperty(MDCMenuSurfaceFoundation, "cssClasses", {
        get: function () {
            return cssClasses$1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "strings", {
        get: function () {
            return strings$1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "numbers", {
        get: function () {
            return numbers$1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "Corner", {
        get: function () {
            return Corner;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "defaultAdapter", {
        /**
         * @see {@link MDCMenuSurfaceAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                hasAnchor: function () { return false; },
                isElementInContainer: function () { return false; },
                isFocused: function () { return false; },
                isRtl: function () { return false; },
                getInnerDimensions: function () { return ({ height: 0, width: 0 }); },
                getAnchorDimensions: function () { return null; },
                getWindowDimensions: function () { return ({ height: 0, width: 0 }); },
                getBodyDimensions: function () { return ({ height: 0, width: 0 }); },
                getWindowScroll: function () { return ({ x: 0, y: 0 }); },
                setPosition: function () { return undefined; },
                setMaxHeight: function () { return undefined; },
                setTransformOrigin: function () { return undefined; },
                saveFocus: function () { return undefined; },
                restoreFocus: function () { return undefined; },
                notifyClose: function () { return undefined; },
                notifyOpen: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCMenuSurfaceFoundation.prototype.init = function () {
        var _a = MDCMenuSurfaceFoundation.cssClasses, ROOT = _a.ROOT, OPEN = _a.OPEN;
        if (!this.adapter_.hasClass(ROOT)) {
            throw new Error(ROOT + " class required in root element.");
        }
        if (this.adapter_.hasClass(OPEN)) {
            this.isOpen_ = true;
        }
    };
    MDCMenuSurfaceFoundation.prototype.destroy = function () {
        clearTimeout(this.openAnimationEndTimerId_);
        clearTimeout(this.closeAnimationEndTimerId_);
        // Cancel any currently running animations.
        cancelAnimationFrame(this.animationRequestId_);
    };
    /**
     * @param corner Default anchor corner alignment of top-left menu surface corner.
     */
    MDCMenuSurfaceFoundation.prototype.setAnchorCorner = function (corner) {
        this.anchorCorner_ = corner;
    };
    /**
     * @param margin Set of margin values from anchor.
     */
    MDCMenuSurfaceFoundation.prototype.setAnchorMargin = function (margin) {
        this.anchorMargin_.top = margin.top || 0;
        this.anchorMargin_.right = margin.right || 0;
        this.anchorMargin_.bottom = margin.bottom || 0;
        this.anchorMargin_.left = margin.left || 0;
    };
    /** Used to indicate if the menu-surface is hoisted to the body. */
    MDCMenuSurfaceFoundation.prototype.setIsHoisted = function (isHoisted) {
        this.isHoistedElement_ = isHoisted;
    };
    /** Used to set the menu-surface calculations based on a fixed position menu. */
    MDCMenuSurfaceFoundation.prototype.setFixedPosition = function (isFixedPosition) {
        this.isFixedPosition_ = isFixedPosition;
    };
    /** Sets the menu-surface position on the page. */
    MDCMenuSurfaceFoundation.prototype.setAbsolutePosition = function (x, y) {
        this.position_.x = this.isFinite_(x) ? x : 0;
        this.position_.y = this.isFinite_(y) ? y : 0;
    };
    MDCMenuSurfaceFoundation.prototype.setQuickOpen = function (quickOpen) {
        this.isQuickOpen_ = quickOpen;
    };
    MDCMenuSurfaceFoundation.prototype.isOpen = function () {
        return this.isOpen_;
    };
    /**
     * Open the menu surface.
     */
    MDCMenuSurfaceFoundation.prototype.open = function () {
        var _this = this;
        this.adapter_.saveFocus();
        if (!this.isQuickOpen_) {
            this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
        }
        this.animationRequestId_ = requestAnimationFrame(function () {
            _this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
            _this.dimensions_ = _this.adapter_.getInnerDimensions();
            _this.autoPosition_();
            if (_this.isQuickOpen_) {
                _this.adapter_.notifyOpen();
            }
            else {
                _this.openAnimationEndTimerId_ = setTimeout(function () {
                    _this.openAnimationEndTimerId_ = 0;
                    _this.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
                    _this.adapter_.notifyOpen();
                }, numbers$1.TRANSITION_OPEN_DURATION);
            }
        });
        this.isOpen_ = true;
    };
    /**
     * Closes the menu surface.
     */
    MDCMenuSurfaceFoundation.prototype.close = function (skipRestoreFocus) {
        var _this = this;
        if (skipRestoreFocus === void 0) { skipRestoreFocus = false; }
        if (!this.isQuickOpen_) {
            this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
        }
        requestAnimationFrame(function () {
            _this.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
            if (_this.isQuickOpen_) {
                _this.adapter_.notifyClose();
            }
            else {
                _this.closeAnimationEndTimerId_ = setTimeout(function () {
                    _this.closeAnimationEndTimerId_ = 0;
                    _this.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
                    _this.adapter_.notifyClose();
                }, numbers$1.TRANSITION_CLOSE_DURATION);
            }
        });
        this.isOpen_ = false;
        if (!skipRestoreFocus) {
            this.maybeRestoreFocus_();
        }
    };
    /** Handle clicks and close if not within menu-surface element. */
    MDCMenuSurfaceFoundation.prototype.handleBodyClick = function (evt) {
        var el = evt.target;
        if (this.adapter_.isElementInContainer(el)) {
            return;
        }
        this.close();
    };
    /** Handle keys that close the surface. */
    MDCMenuSurfaceFoundation.prototype.handleKeydown = function (evt) {
        var keyCode = evt.keyCode, key = evt.key;
        var isEscape = key === 'Escape' || keyCode === 27;
        if (isEscape) {
            this.close();
        }
    };
    MDCMenuSurfaceFoundation.prototype.autoPosition_ = function () {
        var _a;
        // Compute measurements for autoposition methods reuse.
        this.measurements_ = this.getAutoLayoutMeasurements_();
        var corner = this.getOriginCorner_();
        var maxMenuSurfaceHeight = this.getMenuSurfaceMaxHeight_(corner);
        var verticalAlignment = this.hasBit_(corner, CornerBit.BOTTOM) ? 'bottom' : 'top';
        var horizontalAlignment = this.hasBit_(corner, CornerBit.RIGHT) ? 'right' : 'left';
        var horizontalOffset = this.getHorizontalOriginOffset_(corner);
        var verticalOffset = this.getVerticalOriginOffset_(corner);
        var _b = this.measurements_, anchorSize = _b.anchorSize, surfaceSize = _b.surfaceSize;
        var position = (_a = {},
            _a[horizontalAlignment] = horizontalOffset,
            _a[verticalAlignment] = verticalOffset,
            _a);
        // Center align when anchor width is comparable or greater than menu surface, otherwise keep corner.
        if (anchorSize.width / surfaceSize.width > numbers$1.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO) {
            horizontalAlignment = 'center';
        }
        // If the menu-surface has been hoisted to the body, it's no longer relative to the anchor element
        if (this.isHoistedElement_ || this.isFixedPosition_) {
            this.adjustPositionForHoistedElement_(position);
        }
        this.adapter_.setTransformOrigin(horizontalAlignment + " " + verticalAlignment);
        this.adapter_.setPosition(position);
        this.adapter_.setMaxHeight(maxMenuSurfaceHeight ? maxMenuSurfaceHeight + 'px' : '');
    };
    /**
     * @return Measurements used to position menu surface popup.
     */
    MDCMenuSurfaceFoundation.prototype.getAutoLayoutMeasurements_ = function () {
        var anchorRect = this.adapter_.getAnchorDimensions();
        var bodySize = this.adapter_.getBodyDimensions();
        var viewportSize = this.adapter_.getWindowDimensions();
        var windowScroll = this.adapter_.getWindowScroll();
        if (!anchorRect) {
            // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
            anchorRect = {
                top: this.position_.y,
                right: this.position_.x,
                bottom: this.position_.y,
                left: this.position_.x,
                width: 0,
                height: 0,
            };
            // tslint:enable:object-literal-sort-keys
        }
        return {
            anchorSize: anchorRect,
            bodySize: bodySize,
            surfaceSize: this.dimensions_,
            viewportDistance: {
                // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
                top: anchorRect.top,
                right: viewportSize.width - anchorRect.right,
                bottom: viewportSize.height - anchorRect.bottom,
                left: anchorRect.left,
            },
            viewportSize: viewportSize,
            windowScroll: windowScroll,
        };
    };
    /**
     * Computes the corner of the anchor from which to animate and position the menu surface.
     */
    MDCMenuSurfaceFoundation.prototype.getOriginCorner_ = function () {
        // Defaults: open from the top left.
        var corner = Corner.TOP_LEFT;
        var _a = this.measurements_, viewportDistance = _a.viewportDistance, anchorSize = _a.anchorSize, surfaceSize = _a.surfaceSize;
        var isBottomAligned = this.hasBit_(this.anchorCorner_, CornerBit.BOTTOM);
        var availableTop = isBottomAligned ? viewportDistance.top + anchorSize.height + this.anchorMargin_.bottom
            : viewportDistance.top + this.anchorMargin_.top;
        var availableBottom = isBottomAligned ? viewportDistance.bottom - this.anchorMargin_.bottom
            : viewportDistance.bottom + anchorSize.height - this.anchorMargin_.top;
        var topOverflow = surfaceSize.height - availableTop;
        var bottomOverflow = surfaceSize.height - availableBottom;
        if (bottomOverflow > 0 && topOverflow < bottomOverflow) {
            corner = this.setBit_(corner, CornerBit.BOTTOM);
        }
        var isRtl = this.adapter_.isRtl();
        var isFlipRtl = this.hasBit_(this.anchorCorner_, CornerBit.FLIP_RTL);
        var avoidHorizontalOverlap = this.hasBit_(this.anchorCorner_, CornerBit.RIGHT);
        var isAlignedRight = (avoidHorizontalOverlap && !isRtl) ||
            (!avoidHorizontalOverlap && isFlipRtl && isRtl);
        var availableLeft = isAlignedRight ? viewportDistance.left + anchorSize.width + this.anchorMargin_.right :
            viewportDistance.left + this.anchorMargin_.left;
        var availableRight = isAlignedRight ? viewportDistance.right - this.anchorMargin_.right :
            viewportDistance.right + anchorSize.width - this.anchorMargin_.left;
        var leftOverflow = surfaceSize.width - availableLeft;
        var rightOverflow = surfaceSize.width - availableRight;
        if ((leftOverflow < 0 && isAlignedRight && isRtl) ||
            (avoidHorizontalOverlap && !isAlignedRight && leftOverflow < 0) ||
            (rightOverflow > 0 && leftOverflow < rightOverflow)) {
            corner = this.setBit_(corner, CornerBit.RIGHT);
        }
        return corner;
    };
    /**
     * @param corner Origin corner of the menu surface.
     * @return Maximum height of the menu surface, based on available space. 0 indicates should not be set.
     */
    MDCMenuSurfaceFoundation.prototype.getMenuSurfaceMaxHeight_ = function (corner) {
        var viewportDistance = this.measurements_.viewportDistance;
        var maxHeight = 0;
        var isBottomAligned = this.hasBit_(corner, CornerBit.BOTTOM);
        var isBottomAnchored = this.hasBit_(this.anchorCorner_, CornerBit.BOTTOM);
        var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation.numbers.MARGIN_TO_EDGE;
        // When maximum height is not specified, it is handled from CSS.
        if (isBottomAligned) {
            maxHeight = viewportDistance.top + this.anchorMargin_.top - MARGIN_TO_EDGE;
            if (!isBottomAnchored) {
                maxHeight += this.measurements_.anchorSize.height;
            }
        }
        else {
            maxHeight =
                viewportDistance.bottom - this.anchorMargin_.bottom + this.measurements_.anchorSize.height - MARGIN_TO_EDGE;
            if (isBottomAnchored) {
                maxHeight -= this.measurements_.anchorSize.height;
            }
        }
        return maxHeight;
    };
    /**
     * @param corner Origin corner of the menu surface.
     * @return Horizontal offset of menu surface origin corner from corresponding anchor corner.
     */
    MDCMenuSurfaceFoundation.prototype.getHorizontalOriginOffset_ = function (corner) {
        var anchorSize = this.measurements_.anchorSize;
        // isRightAligned corresponds to using the 'right' property on the surface.
        var isRightAligned = this.hasBit_(corner, CornerBit.RIGHT);
        var avoidHorizontalOverlap = this.hasBit_(this.anchorCorner_, CornerBit.RIGHT);
        if (isRightAligned) {
            var rightOffset = avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin_.left : this.anchorMargin_.right;
            // For hoisted or fixed elements, adjust the offset by the difference between viewport width and body width so
            // when we calculate the right value (`adjustPositionForHoistedElement_`) based on the element position,
            // the right property is correct.
            if (this.isHoistedElement_ || this.isFixedPosition_) {
                return rightOffset - (this.measurements_.viewportSize.width - this.measurements_.bodySize.width);
            }
            return rightOffset;
        }
        return avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin_.right : this.anchorMargin_.left;
    };
    /**
     * @param corner Origin corner of the menu surface.
     * @return Vertical offset of menu surface origin corner from corresponding anchor corner.
     */
    MDCMenuSurfaceFoundation.prototype.getVerticalOriginOffset_ = function (corner) {
        var anchorSize = this.measurements_.anchorSize;
        var isBottomAligned = this.hasBit_(corner, CornerBit.BOTTOM);
        var avoidVerticalOverlap = this.hasBit_(this.anchorCorner_, CornerBit.BOTTOM);
        var y = 0;
        if (isBottomAligned) {
            y = avoidVerticalOverlap ? anchorSize.height - this.anchorMargin_.top : -this.anchorMargin_.bottom;
        }
        else {
            y = avoidVerticalOverlap ? (anchorSize.height + this.anchorMargin_.bottom) : this.anchorMargin_.top;
        }
        return y;
    };
    /** Calculates the offsets for positioning the menu-surface when the menu-surface has been hoisted to the body. */
    MDCMenuSurfaceFoundation.prototype.adjustPositionForHoistedElement_ = function (position) {
        var e_1, _a;
        var _b = this.measurements_, windowScroll = _b.windowScroll, viewportDistance = _b.viewportDistance;
        var props = Object.keys(position);
        try {
            for (var props_1 = __values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
                var prop = props_1_1.value;
                var value = position[prop] || 0;
                // Hoisted surfaces need to have the anchor elements location on the page added to the
                // position properties for proper alignment on the body.
                value += viewportDistance[prop];
                // Surfaces that are absolutely positioned need to have additional calculations for scroll
                // and bottom positioning.
                if (!this.isFixedPosition_) {
                    if (prop === 'top') {
                        value += windowScroll.y;
                    }
                    else if (prop === 'bottom') {
                        value -= windowScroll.y;
                    }
                    else if (prop === 'left') {
                        value += windowScroll.x;
                    }
                    else { // prop === 'right'
                        value -= windowScroll.x;
                    }
                }
                position[prop] = value;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * The last focused element when the menu surface was opened should regain focus, if the user is
     * focused on or within the menu surface when it is closed.
     */
    MDCMenuSurfaceFoundation.prototype.maybeRestoreFocus_ = function () {
        var isRootFocused = this.adapter_.isFocused();
        var childHasFocus = document.activeElement && this.adapter_.isElementInContainer(document.activeElement);
        if (isRootFocused || childHasFocus) {
            this.adapter_.restoreFocus();
        }
    };
    MDCMenuSurfaceFoundation.prototype.hasBit_ = function (corner, bit) {
        return Boolean(corner & bit); // tslint:disable-line:no-bitwise
    };
    MDCMenuSurfaceFoundation.prototype.setBit_ = function (corner, bit) {
        return corner | bit; // tslint:disable-line:no-bitwise
    };
    /**
     * isFinite that doesn't force conversion to number type.
     * Equivalent to Number.isFinite in ES2015, which is not supported in IE.
     */
    MDCMenuSurfaceFoundation.prototype.isFinite_ = function (num) {
        return typeof num === 'number' && isFinite(num);
    };
    return MDCMenuSurfaceFoundation;
}(MDCFoundation));

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
var cachedCssTransformPropertyName_;
/**
 * Returns the name of the correct transform property to use on the current browser.
 */
function getTransformPropertyName(globalObj, forceRefresh) {
    if (forceRefresh === void 0) { forceRefresh = false; }
    if (cachedCssTransformPropertyName_ === undefined || forceRefresh) {
        var el = globalObj.document.createElement('div');
        cachedCssTransformPropertyName_ = 'transform' in el.style ? 'transform' : 'webkitTransform';
    }
    return cachedCssTransformPropertyName_;
}

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
var MDCMenuSurface = /** @class */ (function (_super) {
    __extends(MDCMenuSurface, _super);
    function MDCMenuSurface() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCMenuSurface.attachTo = function (root) {
        return new MDCMenuSurface(root);
    };
    MDCMenuSurface.prototype.initialSyncWithDOM = function () {
        var _this = this;
        var parentEl = this.root_.parentElement;
        this.anchorElement = parentEl && parentEl.classList.contains(cssClasses$1.ANCHOR) ? parentEl : null;
        if (this.root_.classList.contains(cssClasses$1.FIXED)) {
            this.setFixedPosition(true);
        }
        this.handleKeydown_ = function (evt) { return _this.foundation_.handleKeydown(evt); };
        this.handleBodyClick_ = function (evt) { return _this.foundation_.handleBodyClick(evt); };
        this.registerBodyClickListener_ = function () { return document.body.addEventListener('click', _this.handleBodyClick_); };
        this.deregisterBodyClickListener_ = function () { return document.body.removeEventListener('click', _this.handleBodyClick_); };
        this.listen('keydown', this.handleKeydown_);
        this.listen(strings$1.OPENED_EVENT, this.registerBodyClickListener_);
        this.listen(strings$1.CLOSED_EVENT, this.deregisterBodyClickListener_);
    };
    MDCMenuSurface.prototype.destroy = function () {
        this.unlisten('keydown', this.handleKeydown_);
        this.unlisten(strings$1.OPENED_EVENT, this.registerBodyClickListener_);
        this.unlisten(strings$1.CLOSED_EVENT, this.deregisterBodyClickListener_);
        _super.prototype.destroy.call(this);
    };
    MDCMenuSurface.prototype.isOpen = function () {
        return this.foundation_.isOpen();
    };
    MDCMenuSurface.prototype.open = function () {
        this.foundation_.open();
    };
    MDCMenuSurface.prototype.close = function (skipRestoreFocus) {
        if (skipRestoreFocus === void 0) { skipRestoreFocus = false; }
        this.foundation_.close(skipRestoreFocus);
    };
    Object.defineProperty(MDCMenuSurface.prototype, "quickOpen", {
        set: function (quickOpen) {
            this.foundation_.setQuickOpen(quickOpen);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Removes the menu-surface from it's current location and appends it to the
     * body to overcome any overflow:hidden issues.
     */
    MDCMenuSurface.prototype.hoistMenuToBody = function () {
        document.body.appendChild(this.root_);
        this.setIsHoisted(true);
    };
    /** Sets the foundation to use page offsets for an positioning when the menu is hoisted to the body. */
    MDCMenuSurface.prototype.setIsHoisted = function (isHoisted) {
        this.foundation_.setIsHoisted(isHoisted);
    };
    /** Sets the element that the menu-surface is anchored to. */
    MDCMenuSurface.prototype.setMenuSurfaceAnchorElement = function (element) {
        this.anchorElement = element;
    };
    /** Sets the menu-surface to position: fixed. */
    MDCMenuSurface.prototype.setFixedPosition = function (isFixed) {
        if (isFixed) {
            this.root_.classList.add(cssClasses$1.FIXED);
        }
        else {
            this.root_.classList.remove(cssClasses$1.FIXED);
        }
        this.foundation_.setFixedPosition(isFixed);
    };
    /** Sets the absolute x/y position to position based on. Requires the menu to be hoisted. */
    MDCMenuSurface.prototype.setAbsolutePosition = function (x, y) {
        this.foundation_.setAbsolutePosition(x, y);
        this.setIsHoisted(true);
    };
    /**
     * @param corner Default anchor corner alignment of top-left surface corner.
     */
    MDCMenuSurface.prototype.setAnchorCorner = function (corner) {
        this.foundation_.setAnchorCorner(corner);
    };
    MDCMenuSurface.prototype.setAnchorMargin = function (margin) {
        this.foundation_.setAnchorMargin(margin);
    };
    MDCMenuSurface.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            hasAnchor: function () { return !!_this.anchorElement; },
            notifyClose: function () { return _this.emit(MDCMenuSurfaceFoundation.strings.CLOSED_EVENT, {}); },
            notifyOpen: function () { return _this.emit(MDCMenuSurfaceFoundation.strings.OPENED_EVENT, {}); },
            isElementInContainer: function (el) { return _this.root_.contains(el); },
            isRtl: function () { return getComputedStyle(_this.root_).getPropertyValue('direction') === 'rtl'; },
            setTransformOrigin: function (origin) {
                var propertyName = getTransformPropertyName(window) + "-origin";
                _this.root_.style.setProperty(propertyName, origin);
            },
            isFocused: function () { return document.activeElement === _this.root_; },
            saveFocus: function () {
                _this.previousFocus_ = document.activeElement;
            },
            restoreFocus: function () {
                if (_this.root_.contains(document.activeElement)) {
                    if (_this.previousFocus_ && _this.previousFocus_.focus) {
                        _this.previousFocus_.focus();
                    }
                }
            },
            getInnerDimensions: function () {
                return { width: _this.root_.offsetWidth, height: _this.root_.offsetHeight };
            },
            getAnchorDimensions: function () { return _this.anchorElement ? _this.anchorElement.getBoundingClientRect() : null; },
            getWindowDimensions: function () {
                return { width: window.innerWidth, height: window.innerHeight };
            },
            getBodyDimensions: function () {
                return { width: document.body.clientWidth, height: document.body.clientHeight };
            },
            getWindowScroll: function () {
                return { x: window.pageXOffset, y: window.pageYOffset };
            },
            setPosition: function (position) {
                _this.root_.style.left = 'left' in position ? position.left + "px" : '';
                _this.root_.style.right = 'right' in position ? position.right + "px" : '';
                _this.root_.style.top = 'top' in position ? position.top + "px" : '';
                _this.root_.style.bottom = 'bottom' in position ? position.bottom + "px" : '';
            },
            setMaxHeight: function (height) {
                _this.root_.style.maxHeight = height;
            },
        };
        // tslint:enable:object-literal-sort-keys
        return new MDCMenuSurfaceFoundation(adapter);
    };
    return MDCMenuSurface;
}(MDCComponent));

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
var cssClasses$3 = {
    MENU_SELECTED_LIST_ITEM: 'mdc-menu-item--selected',
    MENU_SELECTION_GROUP: 'mdc-menu__selection-group',
    ROOT: 'mdc-menu',
};
var strings$3 = {
    ARIA_CHECKED_ATTR: 'aria-checked',
    ARIA_DISABLED_ATTR: 'aria-disabled',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    LIST_SELECTOR: '.mdc-list',
    SELECTED_EVENT: 'MDCMenu:selected',
};
var numbers$3 = {
    FOCUS_ROOT_INDEX: -1,
};
var DefaultFocusState;
(function (DefaultFocusState) {
    DefaultFocusState[DefaultFocusState["NONE"] = 0] = "NONE";
    DefaultFocusState[DefaultFocusState["LIST_ROOT"] = 1] = "LIST_ROOT";
    DefaultFocusState[DefaultFocusState["FIRST_ITEM"] = 2] = "FIRST_ITEM";
    DefaultFocusState[DefaultFocusState["LAST_ITEM"] = 3] = "LAST_ITEM";
})(DefaultFocusState || (DefaultFocusState = {}));

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
var MDCMenuFoundation = /** @class */ (function (_super) {
    __extends(MDCMenuFoundation, _super);
    function MDCMenuFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCMenuFoundation.defaultAdapter, adapter)) || this;
        _this.closeAnimationEndTimerId_ = 0;
        _this.defaultFocusState_ = DefaultFocusState.LIST_ROOT;
        return _this;
    }
    Object.defineProperty(MDCMenuFoundation, "cssClasses", {
        get: function () {
            return cssClasses$3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenuFoundation, "strings", {
        get: function () {
            return strings$3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenuFoundation, "numbers", {
        get: function () {
            return numbers$3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenuFoundation, "defaultAdapter", {
        /**
         * @see {@link MDCMenuAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClassToElementAtIndex: function () { return undefined; },
                removeClassFromElementAtIndex: function () { return undefined; },
                addAttributeToElementAtIndex: function () { return undefined; },
                removeAttributeFromElementAtIndex: function () { return undefined; },
                elementContainsClass: function () { return false; },
                closeSurface: function () { return undefined; },
                getElementIndex: function () { return -1; },
                notifySelected: function () { return undefined; },
                getMenuItemCount: function () { return 0; },
                focusItemAtIndex: function () { return undefined; },
                focusListRoot: function () { return undefined; },
                getSelectedSiblingOfItemAtIndex: function () { return -1; },
                isSelectableItemAtIndex: function () { return false; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCMenuFoundation.prototype.destroy = function () {
        if (this.closeAnimationEndTimerId_) {
            clearTimeout(this.closeAnimationEndTimerId_);
        }
        this.adapter_.closeSurface();
    };
    MDCMenuFoundation.prototype.handleKeydown = function (evt) {
        var key = evt.key, keyCode = evt.keyCode;
        var isTab = key === 'Tab' || keyCode === 9;
        if (isTab) {
            this.adapter_.closeSurface(/** skipRestoreFocus */ true);
        }
    };
    MDCMenuFoundation.prototype.handleItemAction = function (listItem) {
        var _this = this;
        var index = this.adapter_.getElementIndex(listItem);
        if (index < 0) {
            return;
        }
        this.adapter_.notifySelected({ index: index });
        this.adapter_.closeSurface();
        // Wait for the menu to close before adding/removing classes that affect styles.
        this.closeAnimationEndTimerId_ = setTimeout(function () {
            // Recompute the index in case the menu contents have changed.
            var recomputedIndex = _this.adapter_.getElementIndex(listItem);
            if (_this.adapter_.isSelectableItemAtIndex(recomputedIndex)) {
                _this.setSelectedIndex(recomputedIndex);
            }
        }, MDCMenuSurfaceFoundation.numbers.TRANSITION_CLOSE_DURATION);
    };
    MDCMenuFoundation.prototype.handleMenuSurfaceOpened = function () {
        switch (this.defaultFocusState_) {
            case DefaultFocusState.FIRST_ITEM:
                this.adapter_.focusItemAtIndex(0);
                break;
            case DefaultFocusState.LAST_ITEM:
                this.adapter_.focusItemAtIndex(this.adapter_.getMenuItemCount() - 1);
                break;
            case DefaultFocusState.NONE:
                // Do nothing.
                break;
            default:
                this.adapter_.focusListRoot();
                break;
        }
    };
    /**
     * Sets default focus state where the menu should focus every time when menu
     * is opened. Focuses the list root (`DefaultFocusState.LIST_ROOT`) element by
     * default.
     */
    MDCMenuFoundation.prototype.setDefaultFocusState = function (focusState) {
        this.defaultFocusState_ = focusState;
    };
    /**
     * Selects the list item at `index` within the menu.
     * @param index Index of list item within the menu.
     */
    MDCMenuFoundation.prototype.setSelectedIndex = function (index) {
        this.validatedIndex_(index);
        if (!this.adapter_.isSelectableItemAtIndex(index)) {
            throw new Error('MDCMenuFoundation: No selection group at specified index.');
        }
        var prevSelectedIndex = this.adapter_.getSelectedSiblingOfItemAtIndex(index);
        if (prevSelectedIndex >= 0) {
            this.adapter_.removeAttributeFromElementAtIndex(prevSelectedIndex, strings$3.ARIA_CHECKED_ATTR);
            this.adapter_.removeClassFromElementAtIndex(prevSelectedIndex, cssClasses$3.MENU_SELECTED_LIST_ITEM);
        }
        this.adapter_.addClassToElementAtIndex(index, cssClasses$3.MENU_SELECTED_LIST_ITEM);
        this.adapter_.addAttributeToElementAtIndex(index, strings$3.ARIA_CHECKED_ATTR, 'true');
    };
    /**
     * Sets the enabled state to isEnabled for the menu item at the given index.
     * @param index Index of the menu item
     * @param isEnabled The desired enabled state of the menu item.
     */
    MDCMenuFoundation.prototype.setEnabled = function (index, isEnabled) {
        this.validatedIndex_(index);
        if (isEnabled) {
            this.adapter_.removeClassFromElementAtIndex(index, cssClasses$2.LIST_ITEM_DISABLED_CLASS);
            this.adapter_.addAttributeToElementAtIndex(index, strings$3.ARIA_DISABLED_ATTR, 'false');
        }
        else {
            this.adapter_.addClassToElementAtIndex(index, cssClasses$2.LIST_ITEM_DISABLED_CLASS);
            this.adapter_.addAttributeToElementAtIndex(index, strings$3.ARIA_DISABLED_ATTR, 'true');
        }
    };
    MDCMenuFoundation.prototype.validatedIndex_ = function (index) {
        var menuSize = this.adapter_.getMenuItemCount();
        var isIndexInRange = index >= 0 && index < menuSize;
        if (!isIndexInRange) {
            throw new Error('MDCMenuFoundation: No list item at specified index.');
        }
    };
    return MDCMenuFoundation;
}(MDCFoundation));

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
var MDCMenu = /** @class */ (function (_super) {
    __extends(MDCMenu, _super);
    function MDCMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCMenu.attachTo = function (root) {
        return new MDCMenu(root);
    };
    MDCMenu.prototype.initialize = function (menuSurfaceFactory, listFactory) {
        if (menuSurfaceFactory === void 0) { menuSurfaceFactory = function (el) { return new MDCMenuSurface(el); }; }
        if (listFactory === void 0) { listFactory = function (el) { return new MDCList(el); }; }
        this.menuSurfaceFactory_ = menuSurfaceFactory;
        this.listFactory_ = listFactory;
    };
    MDCMenu.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.menuSurface_ = this.menuSurfaceFactory_(this.root_);
        var list = this.root_.querySelector(strings$3.LIST_SELECTOR);
        if (list) {
            this.list_ = this.listFactory_(list);
            this.list_.wrapFocus = true;
        }
        else {
            this.list_ = null;
        }
        this.handleKeydown_ = function (evt) { return _this.foundation_.handleKeydown(evt); };
        this.handleItemAction_ = function (evt) { return _this.foundation_.handleItemAction(_this.items[evt.detail.index]); };
        this.handleMenuSurfaceOpened_ = function () { return _this.foundation_.handleMenuSurfaceOpened(); };
        this.menuSurface_.listen(MDCMenuSurfaceFoundation.strings.OPENED_EVENT, this.handleMenuSurfaceOpened_);
        this.listen('keydown', this.handleKeydown_);
        this.listen(MDCListFoundation.strings.ACTION_EVENT, this.handleItemAction_);
    };
    MDCMenu.prototype.destroy = function () {
        if (this.list_) {
            this.list_.destroy();
        }
        this.menuSurface_.destroy();
        this.menuSurface_.unlisten(MDCMenuSurfaceFoundation.strings.OPENED_EVENT, this.handleMenuSurfaceOpened_);
        this.unlisten('keydown', this.handleKeydown_);
        this.unlisten(MDCListFoundation.strings.ACTION_EVENT, this.handleItemAction_);
        _super.prototype.destroy.call(this);
    };
    Object.defineProperty(MDCMenu.prototype, "open", {
        get: function () {
            return this.menuSurface_.isOpen();
        },
        set: function (value) {
            if (value) {
                this.menuSurface_.open();
            }
            else {
                this.menuSurface_.close();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenu.prototype, "wrapFocus", {
        get: function () {
            return this.list_ ? this.list_.wrapFocus : false;
        },
        set: function (value) {
            if (this.list_) {
                this.list_.wrapFocus = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenu.prototype, "items", {
        /**
         * Return the items within the menu. Note that this only contains the set of elements within
         * the items container that are proper list items, and not supplemental / presentational DOM
         * elements.
         */
        get: function () {
            return this.list_ ? this.list_.listElements : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenu.prototype, "quickOpen", {
        set: function (quickOpen) {
            this.menuSurface_.quickOpen = quickOpen;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets default focus state where the menu should focus every time when menu
     * is opened. Focuses the list root (`DefaultFocusState.LIST_ROOT`) element by
     * default.
     * @param focusState Default focus state.
     */
    MDCMenu.prototype.setDefaultFocusState = function (focusState) {
        this.foundation_.setDefaultFocusState(focusState);
    };
    /**
     * @param corner Default anchor corner alignment of top-left menu corner.
     */
    MDCMenu.prototype.setAnchorCorner = function (corner) {
        this.menuSurface_.setAnchorCorner(corner);
    };
    MDCMenu.prototype.setAnchorMargin = function (margin) {
        this.menuSurface_.setAnchorMargin(margin);
    };
    /**
     * Sets the list item as the selected row at the specified index.
     * @param index Index of list item within menu.
     */
    MDCMenu.prototype.setSelectedIndex = function (index) {
        this.foundation_.setSelectedIndex(index);
    };
    /**
     * Sets the enabled state to isEnabled for the menu item at the given index.
     * @param index Index of the menu item
     * @param isEnabled The desired enabled state of the menu item.
     */
    MDCMenu.prototype.setEnabled = function (index, isEnabled) {
        this.foundation_.setEnabled(index, isEnabled);
    };
    /**
     * @return The item within the menu at the index specified.
     */
    MDCMenu.prototype.getOptionByIndex = function (index) {
        var items = this.items;
        if (index < items.length) {
            return this.items[index];
        }
        else {
            return null;
        }
    };
    MDCMenu.prototype.setFixedPosition = function (isFixed) {
        this.menuSurface_.setFixedPosition(isFixed);
    };
    MDCMenu.prototype.hoistMenuToBody = function () {
        this.menuSurface_.hoistMenuToBody();
    };
    MDCMenu.prototype.setIsHoisted = function (isHoisted) {
        this.menuSurface_.setIsHoisted(isHoisted);
    };
    MDCMenu.prototype.setAbsolutePosition = function (x, y) {
        this.menuSurface_.setAbsolutePosition(x, y);
    };
    /**
     * Sets the element that the menu-surface is anchored to.
     */
    MDCMenu.prototype.setAnchorElement = function (element) {
        this.menuSurface_.anchorElement = element;
    };
    MDCMenu.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClassToElementAtIndex: function (index, className) {
                var list = _this.items;
                list[index].classList.add(className);
            },
            removeClassFromElementAtIndex: function (index, className) {
                var list = _this.items;
                list[index].classList.remove(className);
            },
            addAttributeToElementAtIndex: function (index, attr, value) {
                var list = _this.items;
                list[index].setAttribute(attr, value);
            },
            removeAttributeFromElementAtIndex: function (index, attr) {
                var list = _this.items;
                list[index].removeAttribute(attr);
            },
            elementContainsClass: function (element, className) { return element.classList.contains(className); },
            closeSurface: function (skipRestoreFocus) { return _this.menuSurface_.close(skipRestoreFocus); },
            getElementIndex: function (element) { return _this.items.indexOf(element); },
            notifySelected: function (evtData) { return _this.emit(strings$3.SELECTED_EVENT, {
                index: evtData.index,
                item: _this.items[evtData.index],
            }); },
            getMenuItemCount: function () { return _this.items.length; },
            focusItemAtIndex: function (index) { return _this.items[index].focus(); },
            focusListRoot: function () { return _this.root_.querySelector(strings$3.LIST_SELECTOR).focus(); },
            isSelectableItemAtIndex: function (index) { return !!closest(_this.items[index], "." + cssClasses$3.MENU_SELECTION_GROUP); },
            getSelectedSiblingOfItemAtIndex: function (index) {
                var selectionGroupEl = closest(_this.items[index], "." + cssClasses$3.MENU_SELECTION_GROUP);
                var selectedItemEl = selectionGroupEl.querySelector("." + cssClasses$3.MENU_SELECTED_LIST_ITEM);
                return selectedItemEl ? _this.items.indexOf(selectedItemEl) : -1;
            },
        };
        // tslint:enable:object-literal-sort-keys
        return new MDCMenuFoundation(adapter);
    };
    return MDCMenu;
}(MDCComponent));

/* node_modules\@smui\menu-surface\MenuSurface.svelte generated by Svelte v3.16.4 */
const file$4 = "node_modules\\@smui\\menu-surface\\MenuSurface.svelte";

function create_fragment$4(ctx) {
	let div;
	let useActions_action;
	let forwardEvents_action;
	let current;
	let dispose;
	const default_slot_template = /*$$slots*/ ctx[27].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[26], null);

	let div_levels = [
		{
			class: "\n    mdc-menu-surface\n    " + /*className*/ ctx[3] + "\n    " + (/*fixed*/ ctx[0] ? "mdc-menu-surface--fixed" : "") + "\n    " + (/*isStatic*/ ctx[4] ? "mdc-menu-surface--open" : "") + "\n    " + (/*isStatic*/ ctx[4] ? "smui-menu-surface--static" : "") + "\n  "
		},
		exclude(/*$$props*/ ctx[7], [
			"use",
			"class",
			"static",
			"anchor",
			"fixed",
			"open",
			"quickOpen",
			"anchorElement",
			"anchorCorner",
			"element"
		])
	];

	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	const block = {
		c: function create() {
			div = element("div");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if (default_slot) default_slot.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(div, div_data);
			add_location(div, file$4, 0, 0, 0);

			dispose = [
				listen_dev(div, "MDCMenuSurface:closed", /*updateOpen*/ ctx[6], false, false, false),
				listen_dev(div, "MDCMenuSurface:opened", /*updateOpen*/ ctx[6], false, false, false)
			];
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			/*div_binding*/ ctx[28](div);
			useActions_action = useActions.call(null, div, /*use*/ ctx[2]) || ({});
			forwardEvents_action = /*forwardEvents*/ ctx[5].call(null, div) || ({});
			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot && default_slot.p && dirty[0] & /*$$scope*/ 67108864) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[26], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[26], dirty, null));
			}

			set_attributes(div, get_spread_update(div_levels, [
				dirty[0] & /*className, fixed, isStatic*/ 25 && ({
					class: "\n    mdc-menu-surface\n    " + /*className*/ ctx[3] + "\n    " + (/*fixed*/ ctx[0] ? "mdc-menu-surface--fixed" : "") + "\n    " + (/*isStatic*/ ctx[4] ? "mdc-menu-surface--open" : "") + "\n    " + (/*isStatic*/ ctx[4] ? "smui-menu-surface--static" : "") + "\n  "
				}),
				dirty[0] & /*$$props*/ 128 && exclude(/*$$props*/ ctx[7], [
					"use",
					"class",
					"static",
					"anchor",
					"fixed",
					"open",
					"quickOpen",
					"anchorElement",
					"anchorCorner",
					"element"
				])
			]));

			if (is_function(useActions_action.update) && dirty[0] & /*use*/ 4) useActions_action.update.call(null, /*use*/ ctx[2]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (default_slot) default_slot.d(detaching);
			/*div_binding*/ ctx[28](null);
			if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
			if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$4.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$4($$self, $$props, $$invalidate) {
	const forwardEvents = forwardEventsBuilder(current_component, ["MDCMenuSurface:closed", "MDCMenuSurface:opened"]);
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { static: isStatic = false } = $$props;
	let { anchor = true } = $$props;
	let { fixed = false } = $$props;
	let { open = isStatic } = $$props;
	let { quickOpen = false } = $$props;
	let { anchorElement = null } = $$props;
	let { anchorCorner = null } = $$props;
	let { element = undefined } = $$props;
	let menuSurface;
	let instantiate = getContext("SMUI:menu-surface:instantiate");
	let getInstance = getContext("SMUI:menu-surface:getInstance");
	setContext("SMUI:list:role", "menu");
	setContext("SMUI:list:item:role", "menuitem");
	let oldFixed = null;

	onMount(async () => {
		if (instantiate !== false) {
			$$invalidate(22, menuSurface = new MDCMenuSurface(element));
		} else {
			$$invalidate(22, menuSurface = await getInstance());
		}
	});

	onDestroy(() => {
		if (anchor) {
			element && element.parentNode.classList.remove("mdc-menu-surface--anchor");
		}

		let isHoisted = false;

		if (menuSurface) {
			isHoisted = menuSurface.foundation_.isHoistedElement_;
		}

		if (instantiate !== false) {
			menuSurface.destroy();
		}

		if (isHoisted) {
			element.parentNode.removeChild(element);
		}
	});

	function updateOpen() {
		if (menuSurface) {
			if (isStatic) {
				$$invalidate(8, open = true);
			} else {
				$$invalidate(8, open = menuSurface.isOpen());
			}
		}
	}

	function setOpen(value) {
		$$invalidate(8, open = value);
	}

	function setAnchorCorner(...args) {
		return menuSurface.setAnchorCorner(...args);
	}

	function setAnchorMargin(...args) {
		return menuSurface.setAnchorMargin(...args);
	}

	function setFixedPosition(isFixed, ...args) {
		$$invalidate(0, fixed = isFixed);
		return menuSurface.setFixedPosition(isFixed, ...args);
	}

	function setAbsolutePosition(...args) {
		return menuSurface.setAbsolutePosition(...args);
	}

	function setMenuSurfaceAnchorElement(...args) {
		return menuSurface.setMenuSurfaceAnchorElement(...args);
	}

	function hoistMenuToBody(...args) {
		return menuSurface.hoistMenuToBody(...args);
	}

	function setIsHoisted(...args) {
		return menuSurface.setIsHoisted(...args);
	}

	function getDefaultFoundation(...args) {
		return menuSurface.getDefaultFoundation(...args);
	}

	let { $$slots = {}, $$scope } = $$props;

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(1, element = $$value);
		});
	}

	$$self.$set = $$new_props => {
		$$invalidate(7, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ("use" in $$new_props) $$invalidate(2, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(3, className = $$new_props.class);
		if ("static" in $$new_props) $$invalidate(4, isStatic = $$new_props.static);
		if ("anchor" in $$new_props) $$invalidate(10, anchor = $$new_props.anchor);
		if ("fixed" in $$new_props) $$invalidate(0, fixed = $$new_props.fixed);
		if ("open" in $$new_props) $$invalidate(8, open = $$new_props.open);
		if ("quickOpen" in $$new_props) $$invalidate(11, quickOpen = $$new_props.quickOpen);
		if ("anchorElement" in $$new_props) $$invalidate(9, anchorElement = $$new_props.anchorElement);
		if ("anchorCorner" in $$new_props) $$invalidate(12, anchorCorner = $$new_props.anchorCorner);
		if ("element" in $$new_props) $$invalidate(1, element = $$new_props.element);
		if ("$$scope" in $$new_props) $$invalidate(26, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => {
		return {
			use,
			className,
			isStatic,
			anchor,
			fixed,
			open,
			quickOpen,
			anchorElement,
			anchorCorner,
			element,
			menuSurface,
			instantiate,
			getInstance,
			oldFixed
		};
	};

	$$self.$inject_state = $$new_props => {
		$$invalidate(7, $$props = assign(assign({}, $$props), $$new_props));
		if ("use" in $$props) $$invalidate(2, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(3, className = $$new_props.className);
		if ("isStatic" in $$props) $$invalidate(4, isStatic = $$new_props.isStatic);
		if ("anchor" in $$props) $$invalidate(10, anchor = $$new_props.anchor);
		if ("fixed" in $$props) $$invalidate(0, fixed = $$new_props.fixed);
		if ("open" in $$props) $$invalidate(8, open = $$new_props.open);
		if ("quickOpen" in $$props) $$invalidate(11, quickOpen = $$new_props.quickOpen);
		if ("anchorElement" in $$props) $$invalidate(9, anchorElement = $$new_props.anchorElement);
		if ("anchorCorner" in $$props) $$invalidate(12, anchorCorner = $$new_props.anchorCorner);
		if ("element" in $$props) $$invalidate(1, element = $$new_props.element);
		if ("menuSurface" in $$props) $$invalidate(22, menuSurface = $$new_props.menuSurface);
		if ("instantiate" in $$props) instantiate = $$new_props.instantiate;
		if ("getInstance" in $$props) getInstance = $$new_props.getInstance;
		if ("oldFixed" in $$props) $$invalidate(23, oldFixed = $$new_props.oldFixed);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*element, anchor*/ 1026) {
			 if (element && anchor && !element.parentNode.classList.contains("mdc-menu-surface--anchor")) {
				element.parentNode.classList.add("mdc-menu-surface--anchor");
				$$invalidate(9, anchorElement = element.parentNode);
			}
		}

		if ($$self.$$.dirty[0] & /*menuSurface, quickOpen*/ 4196352) {
			 if (menuSurface && menuSurface.quickOpen !== quickOpen) {
				$$invalidate(22, menuSurface.quickOpen = quickOpen, menuSurface);
			}
		}

		if ($$self.$$.dirty[0] & /*menuSurface, anchorElement*/ 4194816) {
			 if (menuSurface && menuSurface.anchorElement !== anchorElement) {
				$$invalidate(22, menuSurface.anchorElement = anchorElement, menuSurface);
			}
		}

		if ($$self.$$.dirty[0] & /*menuSurface, open*/ 4194560) {
			 if (menuSurface && menuSurface.isOpen() !== open) {
				if (open) {
					menuSurface.open();
				} else {
					menuSurface.close();
				}
			}
		}

		if ($$self.$$.dirty[0] & /*menuSurface, oldFixed, fixed*/ 12582913) {
			 if (menuSurface && oldFixed !== fixed) {
				menuSurface.setFixedPosition(fixed);
				$$invalidate(23, oldFixed = fixed);
			}
		}

		if ($$self.$$.dirty[0] & /*menuSurface, anchorCorner*/ 4198400) {
			 if (menuSurface && anchorCorner != null) {
				if (Corner.hasOwnProperty(anchorCorner)) {
					menuSurface.setAnchorCorner(Corner[anchorCorner]);
				} else if (CornerBit.hasOwnProperty(anchorCorner)) {
					menuSurface.setAnchorCorner(Corner[anchorCorner]);
				} else {
					menuSurface.setAnchorCorner(anchorCorner);
				}
			}
		}
	};

	$$props = exclude_internal_props($$props);

	return [
		fixed,
		element,
		use,
		className,
		isStatic,
		forwardEvents,
		updateOpen,
		$$props,
		open,
		anchorElement,
		anchor,
		quickOpen,
		anchorCorner,
		setOpen,
		setAnchorCorner,
		setAnchorMargin,
		setFixedPosition,
		setAbsolutePosition,
		setMenuSurfaceAnchorElement,
		hoistMenuToBody,
		setIsHoisted,
		getDefaultFoundation,
		menuSurface,
		oldFixed,
		instantiate,
		getInstance,
		$$scope,
		$$slots,
		div_binding
	];
}

class MenuSurface extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$4, create_fragment$4, safe_not_equal, {
			use: 2,
			class: 3,
			static: 4,
			anchor: 10,
			fixed: 0,
			open: 8,
			quickOpen: 11,
			anchorElement: 9,
			anchorCorner: 12,
			element: 1,
			setOpen: 13,
			setAnchorCorner: 14,
			setAnchorMargin: 15,
			setFixedPosition: 16,
			setAbsolutePosition: 17,
			setMenuSurfaceAnchorElement: 18,
			hoistMenuToBody: 19,
			setIsHoisted: 20,
			getDefaultFoundation: 21
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "MenuSurface",
			options,
			id: create_fragment$4.name
		});
	}

	get use() {
		throw new Error("<MenuSurface>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<MenuSurface>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get static() {
		throw new Error("<MenuSurface>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set static(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get anchor() {
		throw new Error("<MenuSurface>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set anchor(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get fixed() {
		throw new Error("<MenuSurface>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set fixed(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get open() {
		throw new Error("<MenuSurface>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set open(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get quickOpen() {
		throw new Error("<MenuSurface>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set quickOpen(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get anchorElement() {
		throw new Error("<MenuSurface>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set anchorElement(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get anchorCorner() {
		throw new Error("<MenuSurface>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set anchorCorner(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get element() {
		throw new Error("<MenuSurface>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set element(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get setOpen() {
		return this.$$.ctx[13];
	}

	set setOpen(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get setAnchorCorner() {
		return this.$$.ctx[14];
	}

	set setAnchorCorner(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get setAnchorMargin() {
		return this.$$.ctx[15];
	}

	set setAnchorMargin(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get setFixedPosition() {
		return this.$$.ctx[16];
	}

	set setFixedPosition(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get setAbsolutePosition() {
		return this.$$.ctx[17];
	}

	set setAbsolutePosition(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get setMenuSurfaceAnchorElement() {
		return this.$$.ctx[18];
	}

	set setMenuSurfaceAnchorElement(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get hoistMenuToBody() {
		return this.$$.ctx[19];
	}

	set hoistMenuToBody(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get setIsHoisted() {
		return this.$$.ctx[20];
	}

	set setIsHoisted(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getDefaultFoundation() {
		return this.$$.ctx[21];
	}

	set getDefaultFoundation(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* node_modules\@smui\menu\Menu.svelte generated by Svelte v3.16.4 */

// (1:0) <MenuSurface   bind:element   use={[forwardEvents, ...use]}   class="mdc-menu {className}"   on:MDCMenu:selected={updateOpen}   on:MDCMenuSurface:closed={updateOpen} on:MDCMenuSurface:opened={updateOpen}   {...exclude($$props, ['use', 'class', 'wrapFocus'])} >
function create_default_slot(ctx) {
	let current;
	const default_slot_template = /*$$slots*/ ctx[34].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[36], null);

	const block = {
		c: function create() {
			if (default_slot) default_slot.c();
		},
		l: function claim(nodes) {
			if (default_slot) default_slot.l(nodes);
		},
		m: function mount(target, anchor) {
			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot && default_slot.p && dirty[1] & /*$$scope*/ 32) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[36], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[36], dirty, null));
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (default_slot) default_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(1:0) <MenuSurface   bind:element   use={[forwardEvents, ...use]}   class=\\\"mdc-menu {className}\\\"   on:MDCMenu:selected={updateOpen}   on:MDCMenuSurface:closed={updateOpen} on:MDCMenuSurface:opened={updateOpen}   {...exclude($$props, ['use', 'class', 'wrapFocus'])} >",
		ctx
	});

	return block;
}

function create_fragment$5(ctx) {
	let updating_element;
	let current;

	const menusurface_spread_levels = [
		{
			use: [/*forwardEvents*/ ctx[3], .../*use*/ ctx[0]]
		},
		{
			class: "mdc-menu " + /*className*/ ctx[1]
		},
		exclude(/*$$props*/ ctx[5], ["use", "class", "wrapFocus"])
	];

	function menusurface_element_binding(value) {
		/*menusurface_element_binding*/ ctx[35].call(null, value);
	}

	let menusurface_props = {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	};

	for (let i = 0; i < menusurface_spread_levels.length; i += 1) {
		menusurface_props = assign(menusurface_props, menusurface_spread_levels[i]);
	}

	if (/*element*/ ctx[2] !== void 0) {
		menusurface_props.element = /*element*/ ctx[2];
	}

	const menusurface = new MenuSurface({ props: menusurface_props, $$inline: true });
	binding_callbacks.push(() => bind(menusurface, "element", menusurface_element_binding));
	menusurface.$on("MDCMenu:selected", /*updateOpen*/ ctx[4]);
	menusurface.$on("MDCMenuSurface:closed", /*updateOpen*/ ctx[4]);
	menusurface.$on("MDCMenuSurface:opened", /*updateOpen*/ ctx[4]);

	const block = {
		c: function create() {
			create_component(menusurface.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(menusurface.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(menusurface, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const menusurface_changes = (dirty[0] & /*forwardEvents, use, className, $$props*/ 43)
			? get_spread_update(menusurface_spread_levels, [
					dirty[0] & /*forwardEvents, use*/ 9 && ({
						use: [/*forwardEvents*/ ctx[3], .../*use*/ ctx[0]]
					}),
					dirty[0] & /*className*/ 2 && ({
						class: "mdc-menu " + /*className*/ ctx[1]
					}),
					dirty[0] & /*$$props*/ 32 && get_spread_object(exclude(/*$$props*/ ctx[5], ["use", "class", "wrapFocus"]))
				])
			: {};

			if (dirty[1] & /*$$scope*/ 32) {
				menusurface_changes.$$scope = { dirty, ctx };
			}

			if (!updating_element && dirty[0] & /*element*/ 4) {
				updating_element = true;
				menusurface_changes.element = /*element*/ ctx[2];
				add_flush_callback(() => updating_element = false);
			}

			menusurface.$set(menusurface_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(menusurface.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(menusurface.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(menusurface, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$5.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$5($$self, $$props, $$invalidate) {
	const forwardEvents = forwardEventsBuilder(current_component, ["MDCMenu:selected", "MDCMenuSurface:closed", "MDCMenuSurface:opened"]);
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { static: isStatic = false } = $$props;
	let { open = isStatic } = $$props;
	let { quickOpen = false } = $$props;
	let { anchorCorner = null } = $$props;
	let { wrapFocus = false } = $$props;
	let element;
	let menu;
	let instantiate = getContext("SMUI:menu:instantiate");
	let getInstance = getContext("SMUI:menu:getInstance");
	let menuSurfacePromiseResolve;
	let menuSurfacePromise = new Promise(resolve => menuSurfacePromiseResolve = resolve);
	let listPromiseResolve;
	let listPromise = new Promise(resolve => listPromiseResolve = resolve);
	setContext("SMUI:menu-surface:instantiate", false);
	setContext("SMUI:menu-surface:getInstance", getMenuSurfaceInstancePromise);
	setContext("SMUI:list:instantiate", false);
	setContext("SMUI:list:getInstance", getListInstancePromise);

	onMount(async () => {
		if (instantiate !== false) {
			$$invalidate(25, menu = new MDCMenu(element));
		} else {
			$$invalidate(25, menu = await getInstance());
		}

		menuSurfacePromiseResolve(menu.menuSurface_);
		listPromiseResolve(menu.list_);
	});

	onDestroy(() => {
		if (instantiate !== false) {
			menu && menu.destroy();
		}
	});

	function getMenuSurfaceInstancePromise() {
		return menuSurfacePromise;
	}

	function getListInstancePromise() {
		return listPromise;
	}

	function updateOpen() {
		$$invalidate(6, open = menu.open);
	}

	function setOpen(value) {
		$$invalidate(6, open = value);
	}

	function getItems() {
		return menu.items;
	}

	function setDefaultFocusState(...args) {
		return menu.setDefaultFocusState(...args);
	}

	function setAnchorCorner(...args) {
		return menu.setAnchorCorner(...args);
	}

	function setAnchorMargin(...args) {
		return menu.setAnchorMargin(...args);
	}

	function setSelectedIndex(...args) {
		return menu.setSelectedIndex(...args);
	}

	function setEnabled(...args) {
		return menu.setEnabled(...args);
	}

	function getOptionByIndex(...args) {
		return menu.getOptionByIndex(...args);
	}

	function setFixedPosition(...args) {
		return menu.setFixedPosition(...args);
	}

	function hoistMenuToBody(...args) {
		return menu.hoistMenuToBody(...args);
	}

	function setIsHoisted(...args) {
		return menu.setIsHoisted(...args);
	}

	function setAbsolutePosition(...args) {
		return menu.setAbsolutePosition(...args);
	}

	function setAnchorElement(...args) {
		return menu.setAnchorElement(...args);
	}

	function getDefaultFoundation(...args) {
		return menu.getDefaultFoundation(...args);
	}

	let { $$slots = {}, $$scope } = $$props;

	function menusurface_element_binding(value) {
		element = value;
		$$invalidate(2, element);
	}

	$$self.$set = $$new_props => {
		$$invalidate(5, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("static" in $$new_props) $$invalidate(7, isStatic = $$new_props.static);
		if ("open" in $$new_props) $$invalidate(6, open = $$new_props.open);
		if ("quickOpen" in $$new_props) $$invalidate(8, quickOpen = $$new_props.quickOpen);
		if ("anchorCorner" in $$new_props) $$invalidate(9, anchorCorner = $$new_props.anchorCorner);
		if ("wrapFocus" in $$new_props) $$invalidate(10, wrapFocus = $$new_props.wrapFocus);
		if ("$$scope" in $$new_props) $$invalidate(36, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => {
		return {
			use,
			className,
			isStatic,
			open,
			quickOpen,
			anchorCorner,
			wrapFocus,
			element,
			menu,
			instantiate,
			getInstance,
			menuSurfacePromiseResolve,
			menuSurfacePromise,
			listPromiseResolve,
			listPromise
		};
	};

	$$self.$inject_state = $$new_props => {
		$$invalidate(5, $$props = assign(assign({}, $$props), $$new_props));
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("isStatic" in $$props) $$invalidate(7, isStatic = $$new_props.isStatic);
		if ("open" in $$props) $$invalidate(6, open = $$new_props.open);
		if ("quickOpen" in $$props) $$invalidate(8, quickOpen = $$new_props.quickOpen);
		if ("anchorCorner" in $$props) $$invalidate(9, anchorCorner = $$new_props.anchorCorner);
		if ("wrapFocus" in $$props) $$invalidate(10, wrapFocus = $$new_props.wrapFocus);
		if ("element" in $$props) $$invalidate(2, element = $$new_props.element);
		if ("menu" in $$props) $$invalidate(25, menu = $$new_props.menu);
		if ("instantiate" in $$props) instantiate = $$new_props.instantiate;
		if ("getInstance" in $$props) getInstance = $$new_props.getInstance;
		if ("menuSurfacePromiseResolve" in $$props) menuSurfacePromiseResolve = $$new_props.menuSurfacePromiseResolve;
		if ("menuSurfacePromise" in $$props) menuSurfacePromise = $$new_props.menuSurfacePromise;
		if ("listPromiseResolve" in $$props) listPromiseResolve = $$new_props.listPromiseResolve;
		if ("listPromise" in $$props) listPromise = $$new_props.listPromise;
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*menu, open, isStatic*/ 33554624) {
			 if (menu && menu.open !== open) {
				if (isStatic) {
					$$invalidate(6, open = true);
				}

				$$invalidate(25, menu.open = open, menu);
			}
		}

		if ($$self.$$.dirty[0] & /*menu, wrapFocus*/ 33555456) {
			 if (menu && menu.wrapFocus !== wrapFocus) {
				$$invalidate(25, menu.wrapFocus = wrapFocus, menu);
			}
		}

		if ($$self.$$.dirty[0] & /*menu, quickOpen*/ 33554688) {
			 if (menu) {
				$$invalidate(25, menu.quickOpen = quickOpen, menu);
			}
		}

		if ($$self.$$.dirty[0] & /*menu, anchorCorner*/ 33554944) {
			 if (menu && anchorCorner != null) {
				if (Corner.hasOwnProperty(anchorCorner)) {
					menu.setAnchorCorner(Corner[anchorCorner]);
				} else if (CornerBit.hasOwnProperty(anchorCorner)) {
					menu.setAnchorCorner(Corner[anchorCorner]);
				} else {
					menu.setAnchorCorner(anchorCorner);
				}
			}
		}
	};

	$$props = exclude_internal_props($$props);

	return [
		use,
		className,
		element,
		forwardEvents,
		updateOpen,
		$$props,
		open,
		isStatic,
		quickOpen,
		anchorCorner,
		wrapFocus,
		setOpen,
		getItems,
		setDefaultFocusState,
		setAnchorCorner,
		setAnchorMargin,
		setSelectedIndex,
		setEnabled,
		getOptionByIndex,
		setFixedPosition,
		hoistMenuToBody,
		setIsHoisted,
		setAbsolutePosition,
		setAnchorElement,
		getDefaultFoundation,
		menu,
		menuSurfacePromiseResolve,
		listPromiseResolve,
		instantiate,
		getInstance,
		menuSurfacePromise,
		listPromise,
		getMenuSurfaceInstancePromise,
		getListInstancePromise,
		$$slots,
		menusurface_element_binding,
		$$scope
	];
}

class Menu extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(
			this,
			options,
			instance$5,
			create_fragment$5,
			safe_not_equal,
			{
				use: 0,
				class: 1,
				static: 7,
				open: 6,
				quickOpen: 8,
				anchorCorner: 9,
				wrapFocus: 10,
				setOpen: 11,
				getItems: 12,
				setDefaultFocusState: 13,
				setAnchorCorner: 14,
				setAnchorMargin: 15,
				setSelectedIndex: 16,
				setEnabled: 17,
				getOptionByIndex: 18,
				setFixedPosition: 19,
				hoistMenuToBody: 20,
				setIsHoisted: 21,
				setAbsolutePosition: 22,
				setAnchorElement: 23,
				getDefaultFoundation: 24
			},
			[-1, -1]
		);

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Menu",
			options,
			id: create_fragment$5.name
		});
	}

	get use() {
		throw new Error("<Menu>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Menu>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<Menu>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<Menu>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get static() {
		throw new Error("<Menu>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set static(value) {
		throw new Error("<Menu>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get open() {
		throw new Error("<Menu>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set open(value) {
		throw new Error("<Menu>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get quickOpen() {
		throw new Error("<Menu>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set quickOpen(value) {
		throw new Error("<Menu>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get anchorCorner() {
		throw new Error("<Menu>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set anchorCorner(value) {
		throw new Error("<Menu>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get wrapFocus() {
		throw new Error("<Menu>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set wrapFocus(value) {
		throw new Error("<Menu>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get setOpen() {
		return this.$$.ctx[11];
	}

	set setOpen(value) {
		throw new Error("<Menu>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getItems() {
		return this.$$.ctx[12];
	}

	set getItems(value) {
		throw new Error("<Menu>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get setDefaultFocusState() {
		return this.$$.ctx[13];
	}

	set setDefaultFocusState(value) {
		throw new Error("<Menu>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get setAnchorCorner() {
		return this.$$.ctx[14];
	}

	set setAnchorCorner(value) {
		throw new Error("<Menu>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get setAnchorMargin() {
		return this.$$.ctx[15];
	}

	set setAnchorMargin(value) {
		throw new Error("<Menu>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get setSelectedIndex() {
		return this.$$.ctx[16];
	}

	set setSelectedIndex(value) {
		throw new Error("<Menu>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get setEnabled() {
		return this.$$.ctx[17];
	}

	set setEnabled(value) {
		throw new Error("<Menu>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getOptionByIndex() {
		return this.$$.ctx[18];
	}

	set getOptionByIndex(value) {
		throw new Error("<Menu>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get setFixedPosition() {
		return this.$$.ctx[19];
	}

	set setFixedPosition(value) {
		throw new Error("<Menu>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get hoistMenuToBody() {
		return this.$$.ctx[20];
	}

	set hoistMenuToBody(value) {
		throw new Error("<Menu>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get setIsHoisted() {
		return this.$$.ctx[21];
	}

	set setIsHoisted(value) {
		throw new Error("<Menu>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get setAbsolutePosition() {
		return this.$$.ctx[22];
	}

	set setAbsolutePosition(value) {
		throw new Error("<Menu>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get setAnchorElement() {
		return this.$$.ctx[23];
	}

	set setAnchorElement(value) {
		throw new Error("<Menu>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getDefaultFoundation() {
		return this.$$.ctx[24];
	}

	set getDefaultFoundation(value) {
		throw new Error("<Menu>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* node_modules\@smui\common\ClassAdder.svelte generated by Svelte v3.16.4 */

// (1:0) <svelte:component   this={component}   use={[forwardEvents, ...use]}   class="{smuiClass} {className}"   {...exclude($$props, ['use', 'class', 'component', 'forwardEvents'])} >
function create_default_slot$1(ctx) {
	let current;
	const default_slot_template = /*$$slots*/ ctx[8].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[9], null);

	const block = {
		c: function create() {
			if (default_slot) default_slot.c();
		},
		l: function claim(nodes) {
			if (default_slot) default_slot.l(nodes);
		},
		m: function mount(target, anchor) {
			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot && default_slot.p && dirty[0] & /*$$scope*/ 512) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[9], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[9], dirty, null));
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (default_slot) default_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$1.name,
		type: "slot",
		source: "(1:0) <svelte:component   this={component}   use={[forwardEvents, ...use]}   class=\\\"{smuiClass} {className}\\\"   {...exclude($$props, ['use', 'class', 'component', 'forwardEvents'])} >",
		ctx
	});

	return block;
}

function create_fragment$6(ctx) {
	let switch_instance_anchor;
	let current;

	const switch_instance_spread_levels = [
		{
			use: [/*forwardEvents*/ ctx[4], .../*use*/ ctx[0]]
		},
		{
			class: "" + (/*smuiClass*/ ctx[3] + " " + /*className*/ ctx[1])
		},
		exclude(/*$$props*/ ctx[5], ["use", "class", "component", "forwardEvents"])
	];

	var switch_value = /*component*/ ctx[2];

	function switch_props(ctx) {
		let switch_instance_props = {
			$$slots: { default: [create_default_slot$1] },
			$$scope: { ctx }
		};

		for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
			switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
		}

		return {
			props: switch_instance_props,
			$$inline: true
		};
	}

	if (switch_value) {
		var switch_instance = new switch_value(switch_props(ctx));
	}

	const block = {
		c: function create() {
			if (switch_instance) create_component(switch_instance.$$.fragment);
			switch_instance_anchor = empty();
		},
		l: function claim(nodes) {
			if (switch_instance) claim_component(switch_instance.$$.fragment, nodes);
			switch_instance_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (switch_instance) {
				mount_component(switch_instance, target, anchor);
			}

			insert_dev(target, switch_instance_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const switch_instance_changes = (dirty[0] & /*forwardEvents, use, smuiClass, className, $$props*/ 59)
			? get_spread_update(switch_instance_spread_levels, [
					dirty[0] & /*forwardEvents, use*/ 17 && ({
						use: [/*forwardEvents*/ ctx[4], .../*use*/ ctx[0]]
					}),
					dirty[0] & /*smuiClass, className*/ 10 && ({
						class: "" + (/*smuiClass*/ ctx[3] + " " + /*className*/ ctx[1])
					}),
					dirty[0] & /*$$props*/ 32 && get_spread_object(exclude(/*$$props*/ ctx[5], ["use", "class", "component", "forwardEvents"]))
				])
			: {};

			if (dirty[0] & /*$$scope*/ 512) {
				switch_instance_changes.$$scope = { dirty, ctx };
			}

			if (switch_value !== (switch_value = /*component*/ ctx[2])) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}
		},
		i: function intro(local) {
			if (current) return;
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(switch_instance_anchor);
			if (switch_instance) destroy_component(switch_instance, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$6.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

const internals = {
	component: null,
	smuiClass: null,
	contexts: {}
};

function instance$6($$self, $$props, $$invalidate) {
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { component = internals.component } = $$props;
	let { forwardEvents: smuiForwardEvents = [] } = $$props;
	const smuiClass = internals.class;
	const contexts = internals.contexts;
	const forwardEvents = forwardEventsBuilder(current_component, smuiForwardEvents);

	for (let context in contexts) {
		if (contexts.hasOwnProperty(context)) {
			setContext(context, contexts[context]);
		}
	}

	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$new_props => {
		$$invalidate(5, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("component" in $$new_props) $$invalidate(2, component = $$new_props.component);
		if ("forwardEvents" in $$new_props) $$invalidate(6, smuiForwardEvents = $$new_props.forwardEvents);
		if ("$$scope" in $$new_props) $$invalidate(9, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => {
		return {
			use,
			className,
			component,
			smuiForwardEvents
		};
	};

	$$self.$inject_state = $$new_props => {
		$$invalidate(5, $$props = assign(assign({}, $$props), $$new_props));
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("component" in $$props) $$invalidate(2, component = $$new_props.component);
		if ("smuiForwardEvents" in $$props) $$invalidate(6, smuiForwardEvents = $$new_props.smuiForwardEvents);
	};

	$$props = exclude_internal_props($$props);

	return [
		use,
		className,
		component,
		smuiClass,
		forwardEvents,
		$$props,
		smuiForwardEvents,
		contexts,
		$$slots,
		$$scope
	];
}

class ClassAdder extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$6, create_fragment$6, safe_not_equal, {
			use: 0,
			class: 1,
			component: 2,
			forwardEvents: 6
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ClassAdder",
			options,
			id: create_fragment$6.name
		});
	}

	get use() {
		throw new Error("<ClassAdder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<ClassAdder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<ClassAdder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<ClassAdder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get component() {
		throw new Error("<ClassAdder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set component(value) {
		throw new Error("<ClassAdder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get forwardEvents() {
		throw new Error("<ClassAdder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set forwardEvents(value) {
		throw new Error("<ClassAdder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

function classAdderBuilder(props) {
  function Component(...args) {
    Object.assign(internals, props);
    return new ClassAdder(...args);
  }

  Component.prototype = ClassAdder;

  // SSR support
  if (ClassAdder.$$render) {
    Component.$$render = (...args) => Object.assign(internals, props) && ClassAdder.$$render(...args);
  }
  if (ClassAdder.render) {
    Component.render = (...args) => Object.assign(internals, props) && ClassAdder.render(...args);
  }

  return Component;
}

/* node_modules\@smui\common\Span.svelte generated by Svelte v3.16.4 */
const file$5 = "node_modules\\@smui\\common\\Span.svelte";

function create_fragment$7(ctx) {
	let span;
	let useActions_action;
	let forwardEvents_action;
	let current;
	const default_slot_template = /*$$slots*/ ctx[4].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);
	let span_levels = [exclude(/*$$props*/ ctx[2], ["use"])];
	let span_data = {};

	for (let i = 0; i < span_levels.length; i += 1) {
		span_data = assign(span_data, span_levels[i]);
	}

	const block = {
		c: function create() {
			span = element("span");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", {});
			var span_nodes = children(span);
			if (default_slot) default_slot.l(span_nodes);
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(span, span_data);
			add_location(span, file$5, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);

			if (default_slot) {
				default_slot.m(span, null);
			}

			useActions_action = useActions.call(null, span, /*use*/ ctx[0]) || ({});
			forwardEvents_action = /*forwardEvents*/ ctx[1].call(null, span) || ({});
			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot && default_slot.p && dirty[0] & /*$$scope*/ 8) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[3], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[3], dirty, null));
			}

			set_attributes(span, get_spread_update(span_levels, [dirty[0] & /*$$props*/ 4 && exclude(/*$$props*/ ctx[2], ["use"])]));
			if (is_function(useActions_action.update) && dirty[0] & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
			if (default_slot) default_slot.d(detaching);
			if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
			if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$7.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$7($$self, $$props, $$invalidate) {
	const forwardEvents = forwardEventsBuilder(current_component);
	let { use = [] } = $$props;
	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$new_props => {
		$$invalidate(2, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("$$scope" in $$new_props) $$invalidate(3, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => {
		return { use };
	};

	$$self.$inject_state = $$new_props => {
		$$invalidate(2, $$props = assign(assign({}, $$props), $$new_props));
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
	};

	$$props = exclude_internal_props($$props);
	return [use, forwardEvents, $$props, $$scope, $$slots];
}

class Span extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$7, create_fragment$7, safe_not_equal, { use: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Span",
			options,
			id: create_fragment$7.name
		});
	}

	get use() {
		throw new Error("<Span>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Span>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

var Graphic = classAdderBuilder({
  class: 'mdc-list-item__graphic',
  component: Span,
  contexts: {}
});

classAdderBuilder({
  class: 'mdc-menu__selection-group-icon',
  component: Graphic,
  contexts: {}
});

var css$2 = ".mdc-typography--headline6{font-size:1.25rem;line-height:2rem;letter-spacing:.0125em}.mdc-typography--headline6,.mdc-typography--subtitle2{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-weight:500;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle2{font-size:.875rem;line-height:1.375rem;letter-spacing:.0071428571em}.mdc-typography--body2{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit}:root{--primary-100:#ebf8ff;--primary-200:#bee3f8;--primary-300:#90cdf4;--primary-400:#63b3ed;--primary-500:#4299e1;--primary-600:#3182ce;--primary-700:#2b6cb0;--primary-800:#2c5282;--primary-900:#2a4365;--secondary-100:#fff5f5;--secondary-200:#fed7d7;--secondary-300:#feb2b2;--secondary-400:#fc8181;--secondary-500:#f56565;--secondary-600:#e53e3e;--secondary-700:#c53030;--secondary-800:#9b2c2c;--secondary-900:#742a2a;--primary-color:var(--primary-700);--secondary-color:var(--secondary-700);--primary-font-color:#fff;--secondary-font-color:#fff;--disabled-button-bg-color:#e0e0e0;--font-color:#212121;--other-font-color:#000;--bg-color:#fff;--bg-layer-color:#f5f5f5;--bg-card-color:#fff;--enabled-color:#757575;--disabled-color:#bdbdbd;--switch-toggle-color:#fafafa;--switch-track-color:#4d4d4d;--font-family:\"Montserrat\",sans-serif;--filter:invert(0%);--alert-default-bg-color:var(--primary-200);--alert-solid-bg-color:var(--primary-700);--alert-solid-text-color:\"text-white\";--alert-outline-bg-color:var(--primary-100);--alert-outline-border-color:var(--primary-400);--alert-outline-border-color2:var(--primary-600);--alert-outline-text-color:var(--primary-800)}[data-theme=dark]{--primary-color:var(--primary-400);--secondary-color:var(--secondary-400);--primary-font-color:#000;--secondary-font-color:#000;--disabled-button-bg-color:#1f1f1f;--font-color:#dedede;--other-font-color:#fff;--bg-color:#121212;--bg-layer-color:#333;--bg-card-color:#424242;--enabled-color:#b3b3b3;--disabled-color:#4d4d4d;--switch-toggle-color:#b3b3b3;--switch-track-color:#fff;--filter:invert(100%)}body{--mdc-theme-primary:var(--primary-color);--mdc-theme-secondary:var(--secondary-color);--mdc-theme-on-primary:var(--primary-font-color);--mdc-theme-on-secondary:var(--secondary-font-color);--mdc-text-field-ink-color:var(--other-font-color);--mdc-theme-text-primary-on-background:var(--font-color);--mdc-theme-surface:transparent;--duration:0.5s;--timing:ease;background-color:var(--bg-color);color:var(--font-color);-webkit-transition:color var(--duration) var(--timing),background-color var(--duration) var(--timing);transition:color var(--duration) var(--timing),background-color var(--duration) var(--timing);font-family:var(--font-family)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:var(--disabled-button-bg-color)}.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--disabled-color)}.mdc-select:not(.mdc-select--disabled) .mdc-select__native-control,.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text,.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--other-font-color)}.mdc-select:not(.mdc-select--disabled) .mdc-select__native-control option{color:#000}.mdc-select--with-leading-icon:not(.mdc-select--disabled) .mdc-select__icon{color:var(--enabled-color);opacity:1}.mdc-select__dropdown-icon{-webkit-filter:var(--filter);filter:var(--filter)}.mdc-select--invalid .mdc-select__dropdown-icon{-webkit-filter:invert(0);filter:invert(0)}.mdc-switch--disabled{opacity:.5}.mdc-card__action--icon:not(:disabled){color:var(--enabled-color)}.flex-1-0-auto{-webkit-box-flex:1;flex:1 0 auto}.mdc-list{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.009375em;text-decoration:inherit;text-transform:inherit;line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))}.mdc-list:focus{outline:none}.mdc-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-list-item{display:-webkit-box;display:flex;position:relative;-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:flex-start;height:48px;padding:0 16px;overflow:hidden}.mdc-list-item:focus{outline:none}.mdc-list-item--activated,.mdc-list-item--selected{color:#6200ee;color:var(--mdc-theme-primary,#6200ee)}.mdc-list-item--disabled{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-background,rgba(0,0,0,.38))}.mdc-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-list-item__text[for]{pointer-events:none}.mdc-list--dense .mdc-list-item{height:40px}.mdc-list--avatar-list .mdc-list-item{height:56px}.mdc-list--two-line .mdc-list-item__text{align-self:flex-start}.mdc-list--two-line .mdc-list-item{height:72px}.mdc-list--avatar-list.mdc-list--dense .mdc-list-item,.mdc-list--two-line.mdc-list--dense .mdc-list-item{height:60px}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item{cursor:pointer}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-divider{height:0;margin:0;border:none;border-bottom:1px solid;border-bottom-color:rgba(0,0,0,.12)}.mdc-list-divider--padded{margin:0 16px}.mdc-list-divider--inset{margin-left:72px;margin-right:0;width:calc(100% - 72px)}.mdc-list-divider--inset.mdc-list-divider--padded{width:calc(100% - 88px)}@-webkit-keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@-webkit-keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@-webkit-keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:after,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:before{-webkit-transition:opacity 15ms linear,background-color 15ms linear;transition:opacity 15ms linear,background-color 15ms linear;z-index:1}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:after,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:before{top:-50%;left:-50%;width:200%;height:200%;background-color:#000}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:hover:before{opacity:.04}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated:before{opacity:.12}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated:after,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated:before{background-color:#6200ee}@supports not (-ms-ime-align:auto){:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated:after,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated:before{background-color:var(--mdc-theme-primary,#6200ee)}}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated:hover:before{opacity:.16}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected:before{opacity:.08}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected:after,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected:before{background-color:#6200ee}@supports not (-ms-ime-align:auto){:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected:after,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected:before{background-color:var(--mdc-theme-primary,#6200ee)}}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected:hover:before{opacity:.12}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.2}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.2}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled:after,:not(.mdc-list--non-interactive)>.mdc-list-item--disabled:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled:before{-webkit-transition:opacity 15ms linear,background-color 15ms linear;transition:opacity 15ms linear,background-color 15ms linear;z-index:1}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled:after,:not(.mdc-list--non-interactive)>.mdc-list-item--disabled:before{top:-50%;left:-50%;width:200%;height:200%;background-color:#000}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.smui-list--three-line .mdc-list-item__text{align-self:flex-start}.smui-list--three-line .mdc-list-item{height:88px}.smui-list--three-line.mdc-list--dense .mdc-list-item{height:76px}";
styleInject(css$2);

/* node_modules\@smui\list\List.svelte generated by Svelte v3.16.4 */
const file$6 = "node_modules\\@smui\\list\\List.svelte";

// (18:0) {:else}
function create_else_block$1(ctx) {
	let ul;
	let useActions_action;
	let forwardEvents_action;
	let current;
	let dispose;
	const default_slot_template = /*$$slots*/ ctx[29].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[28], null);

	let ul_levels = [
		{
			class: "\n      mdc-list\n      " + /*className*/ ctx[1] + "\n      " + (/*nonInteractive*/ ctx[2]
			? "mdc-list--non-interactive"
			: "") + "\n      " + (/*dense*/ ctx[3] ? "mdc-list--dense" : "") + "\n      " + (/*avatarList*/ ctx[4] ? "mdc-list--avatar-list" : "") + "\n      " + (/*twoLine*/ ctx[5] ? "mdc-list--two-line" : "") + "\n      " + (/*threeLine*/ ctx[6] && !/*twoLine*/ ctx[5]
			? "smui-list--three-line"
			: "") + "\n    "
		},
		{ role: /*role*/ ctx[8] },
		/*props*/ ctx[9]
	];

	let ul_data = {};

	for (let i = 0; i < ul_levels.length; i += 1) {
		ul_data = assign(ul_data, ul_levels[i]);
	}

	const block = {
		c: function create() {
			ul = element("ul");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			ul = claim_element(nodes, "UL", { class: true, role: true });
			var ul_nodes = children(ul);
			if (default_slot) default_slot.l(ul_nodes);
			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(ul, ul_data);
			add_location(ul, file$6, 18, 2, 478);
			dispose = listen_dev(ul, "MDCList:action", /*handleAction*/ ctx[12], false, false, false);
		},
		m: function mount(target, anchor) {
			insert_dev(target, ul, anchor);

			if (default_slot) {
				default_slot.m(ul, null);
			}

			/*ul_binding*/ ctx[31](ul);
			useActions_action = useActions.call(null, ul, /*use*/ ctx[0]) || ({});
			forwardEvents_action = /*forwardEvents*/ ctx[10].call(null, ul) || ({});
			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot && default_slot.p && dirty[0] & /*$$scope*/ 268435456) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[28], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[28], dirty, null));
			}

			set_attributes(ul, get_spread_update(ul_levels, [
				dirty[0] & /*className, nonInteractive, dense, avatarList, twoLine, threeLine*/ 126 && ({
					class: "\n      mdc-list\n      " + /*className*/ ctx[1] + "\n      " + (/*nonInteractive*/ ctx[2]
					? "mdc-list--non-interactive"
					: "") + "\n      " + (/*dense*/ ctx[3] ? "mdc-list--dense" : "") + "\n      " + (/*avatarList*/ ctx[4] ? "mdc-list--avatar-list" : "") + "\n      " + (/*twoLine*/ ctx[5] ? "mdc-list--two-line" : "") + "\n      " + (/*threeLine*/ ctx[6] && !/*twoLine*/ ctx[5]
					? "smui-list--three-line"
					: "") + "\n    "
				}),
				dirty[0] & /*role*/ 256 && ({ role: /*role*/ ctx[8] }),
				dirty[0] & /*props*/ 512 && /*props*/ ctx[9]
			]));

			if (is_function(useActions_action.update) && dirty[0] & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(ul);
			if (default_slot) default_slot.d(detaching);
			/*ul_binding*/ ctx[31](null);
			if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
			if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block$1.name,
		type: "else",
		source: "(18:0) {:else}",
		ctx
	});

	return block;
}

// (1:0) {#if nav}
function create_if_block$1(ctx) {
	let nav_1;
	let useActions_action;
	let forwardEvents_action;
	let current;
	let dispose;
	const default_slot_template = /*$$slots*/ ctx[29].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[28], null);

	let nav_1_levels = [
		{
			class: "\n      mdc-list\n      " + /*className*/ ctx[1] + "\n      " + (/*nonInteractive*/ ctx[2]
			? "mdc-list--non-interactive"
			: "") + "\n      " + (/*dense*/ ctx[3] ? "mdc-list--dense" : "") + "\n      " + (/*avatarList*/ ctx[4] ? "mdc-list--avatar-list" : "") + "\n      " + (/*twoLine*/ ctx[5] ? "mdc-list--two-line" : "") + "\n      " + (/*threeLine*/ ctx[6] && !/*twoLine*/ ctx[5]
			? "smui-list--three-line"
			: "") + "\n    "
		},
		/*props*/ ctx[9]
	];

	let nav_1_data = {};

	for (let i = 0; i < nav_1_levels.length; i += 1) {
		nav_1_data = assign(nav_1_data, nav_1_levels[i]);
	}

	const block = {
		c: function create() {
			nav_1 = element("nav");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			nav_1 = claim_element(nodes, "NAV", { class: true });
			var nav_1_nodes = children(nav_1);
			if (default_slot) default_slot.l(nav_1_nodes);
			nav_1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(nav_1, nav_1_data);
			add_location(nav_1, file$6, 1, 2, 12);
			dispose = listen_dev(nav_1, "MDCList:action", /*handleAction*/ ctx[12], false, false, false);
		},
		m: function mount(target, anchor) {
			insert_dev(target, nav_1, anchor);

			if (default_slot) {
				default_slot.m(nav_1, null);
			}

			/*nav_1_binding*/ ctx[30](nav_1);
			useActions_action = useActions.call(null, nav_1, /*use*/ ctx[0]) || ({});
			forwardEvents_action = /*forwardEvents*/ ctx[10].call(null, nav_1) || ({});
			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot && default_slot.p && dirty[0] & /*$$scope*/ 268435456) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[28], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[28], dirty, null));
			}

			set_attributes(nav_1, get_spread_update(nav_1_levels, [
				dirty[0] & /*className, nonInteractive, dense, avatarList, twoLine, threeLine*/ 126 && ({
					class: "\n      mdc-list\n      " + /*className*/ ctx[1] + "\n      " + (/*nonInteractive*/ ctx[2]
					? "mdc-list--non-interactive"
					: "") + "\n      " + (/*dense*/ ctx[3] ? "mdc-list--dense" : "") + "\n      " + (/*avatarList*/ ctx[4] ? "mdc-list--avatar-list" : "") + "\n      " + (/*twoLine*/ ctx[5] ? "mdc-list--two-line" : "") + "\n      " + (/*threeLine*/ ctx[6] && !/*twoLine*/ ctx[5]
					? "smui-list--three-line"
					: "") + "\n    "
				}),
				dirty[0] & /*props*/ 512 && /*props*/ ctx[9]
			]));

			if (is_function(useActions_action.update) && dirty[0] & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(nav_1);
			if (default_slot) default_slot.d(detaching);
			/*nav_1_binding*/ ctx[30](null);
			if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
			if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$1.name,
		type: "if",
		source: "(1:0) {#if nav}",
		ctx
	});

	return block;
}

function create_fragment$8(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block$1, create_else_block$1];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*nav*/ ctx[11]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const block = {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if_block.p(ctx, dirty);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$8.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$8($$self, $$props, $$invalidate) {
	const forwardEvents = forwardEventsBuilder(current_component, ["MDCList:action"]);
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { nonInteractive = false } = $$props;
	let { dense = false } = $$props;
	let { avatarList = false } = $$props;
	let { twoLine = false } = $$props;
	let { threeLine = false } = $$props;
	let { vertical = true } = $$props;
	let { wrapFocus = false } = $$props;
	let { singleSelection = false } = $$props;
	let { selectedIndex = null } = $$props;
	let { radiolist = false } = $$props;
	let { checklist = false } = $$props;
	let element;
	let list;
	let role = getContext("SMUI:list:role");
	let nav = getContext("SMUI:list:nav");
	let instantiate = getContext("SMUI:list:instantiate");
	let getInstance = getContext("SMUI:list:getInstance");
	let addLayoutListener = getContext("SMUI:addLayoutListener");
	let removeLayoutListener;
	setContext("SMUI:list:nonInteractive", nonInteractive);

	if (!role) {
		if (singleSelection) {
			role = "listbox";
			setContext("SMUI:list:item:role", "option");
		} else if (radiolist) {
			role = "radiogroup";
			setContext("SMUI:list:item:role", "radio");
		} else if (checklist) {
			role = "group";
			setContext("SMUI:list:item:role", "checkbox");
		} else {
			role = "list";
			setContext("SMUI:list:item:role", undefined);
		}
	}

	if (addLayoutListener) {
		removeLayoutListener = addLayoutListener(layout);
	}

	onMount(async () => {
		if (instantiate !== false) {
			$$invalidate(22, list = new MDCList(element));
		} else {
			$$invalidate(22, list = await getInstance());
		}

		if (singleSelection) {
			list.initializeListType();
			$$invalidate(13, selectedIndex = list.selectedIndex);
		}
	});

	onDestroy(() => {
		if (instantiate !== false) {
			list && list.destroy();
		}

		if (removeLayoutListener) {
			removeLayoutListener();
		}
	});

	function handleAction(e) {
		if (list && list.listElements[e.detail.index].classList.contains("mdc-list-item--disabled")) {
			e.preventDefault();
			$$invalidate(22, list.selectedIndex = selectedIndex, list);
		} else if (list && list.selectedIndex === e.detail.index) {
			$$invalidate(13, selectedIndex = e.detail.index);
		}
	}

	function layout(...args) {
		return list.layout(...args);
	}

	function setEnabled(...args) {
		return list.setEnabled(...args);
	}

	function getDefaultFoundation(...args) {
		return list.getDefaultFoundation(...args);
	}

	let { $$slots = {}, $$scope } = $$props;

	function nav_1_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(7, element = $$value);
		});
	}

	function ul_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(7, element = $$value);
		});
	}

	$$self.$set = $$new_props => {
		$$invalidate(27, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("nonInteractive" in $$new_props) $$invalidate(2, nonInteractive = $$new_props.nonInteractive);
		if ("dense" in $$new_props) $$invalidate(3, dense = $$new_props.dense);
		if ("avatarList" in $$new_props) $$invalidate(4, avatarList = $$new_props.avatarList);
		if ("twoLine" in $$new_props) $$invalidate(5, twoLine = $$new_props.twoLine);
		if ("threeLine" in $$new_props) $$invalidate(6, threeLine = $$new_props.threeLine);
		if ("vertical" in $$new_props) $$invalidate(14, vertical = $$new_props.vertical);
		if ("wrapFocus" in $$new_props) $$invalidate(15, wrapFocus = $$new_props.wrapFocus);
		if ("singleSelection" in $$new_props) $$invalidate(16, singleSelection = $$new_props.singleSelection);
		if ("selectedIndex" in $$new_props) $$invalidate(13, selectedIndex = $$new_props.selectedIndex);
		if ("radiolist" in $$new_props) $$invalidate(17, radiolist = $$new_props.radiolist);
		if ("checklist" in $$new_props) $$invalidate(18, checklist = $$new_props.checklist);
		if ("$$scope" in $$new_props) $$invalidate(28, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => {
		return {
			use,
			className,
			nonInteractive,
			dense,
			avatarList,
			twoLine,
			threeLine,
			vertical,
			wrapFocus,
			singleSelection,
			selectedIndex,
			radiolist,
			checklist,
			element,
			list,
			role,
			nav,
			instantiate,
			getInstance,
			addLayoutListener,
			removeLayoutListener,
			props
		};
	};

	$$self.$inject_state = $$new_props => {
		$$invalidate(27, $$props = assign(assign({}, $$props), $$new_props));
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("nonInteractive" in $$props) $$invalidate(2, nonInteractive = $$new_props.nonInteractive);
		if ("dense" in $$props) $$invalidate(3, dense = $$new_props.dense);
		if ("avatarList" in $$props) $$invalidate(4, avatarList = $$new_props.avatarList);
		if ("twoLine" in $$props) $$invalidate(5, twoLine = $$new_props.twoLine);
		if ("threeLine" in $$props) $$invalidate(6, threeLine = $$new_props.threeLine);
		if ("vertical" in $$props) $$invalidate(14, vertical = $$new_props.vertical);
		if ("wrapFocus" in $$props) $$invalidate(15, wrapFocus = $$new_props.wrapFocus);
		if ("singleSelection" in $$props) $$invalidate(16, singleSelection = $$new_props.singleSelection);
		if ("selectedIndex" in $$props) $$invalidate(13, selectedIndex = $$new_props.selectedIndex);
		if ("radiolist" in $$props) $$invalidate(17, radiolist = $$new_props.radiolist);
		if ("checklist" in $$props) $$invalidate(18, checklist = $$new_props.checklist);
		if ("element" in $$props) $$invalidate(7, element = $$new_props.element);
		if ("list" in $$props) $$invalidate(22, list = $$new_props.list);
		if ("role" in $$props) $$invalidate(8, role = $$new_props.role);
		if ("nav" in $$props) $$invalidate(11, nav = $$new_props.nav);
		if ("instantiate" in $$props) instantiate = $$new_props.instantiate;
		if ("getInstance" in $$props) getInstance = $$new_props.getInstance;
		if ("addLayoutListener" in $$props) addLayoutListener = $$new_props.addLayoutListener;
		if ("removeLayoutListener" in $$props) removeLayoutListener = $$new_props.removeLayoutListener;
		if ("props" in $$props) $$invalidate(9, props = $$new_props.props);
	};

	let props;

	$$self.$$.update = () => {
		 $$invalidate(9, props = exclude($$props, [
			"use",
			"class",
			"nonInteractive",
			"dense",
			"avatarList",
			"twoLine",
			"threeLine",
			"vertical",
			"wrapFocus",
			"singleSelection",
			"selectedIndex",
			"radiolist",
			"checklist"
		]));

		if ($$self.$$.dirty[0] & /*list, vertical*/ 4210688) {
			 if (list && list.vertical !== vertical) {
				$$invalidate(22, list.vertical = vertical, list);
			}
		}

		if ($$self.$$.dirty[0] & /*list, wrapFocus*/ 4227072) {
			 if (list && list.wrapFocus !== wrapFocus) {
				$$invalidate(22, list.wrapFocus = wrapFocus, list);
			}
		}

		if ($$self.$$.dirty[0] & /*list, singleSelection*/ 4259840) {
			 if (list && list.singleSelection !== singleSelection) {
				$$invalidate(22, list.singleSelection = singleSelection, list);
			}
		}

		if ($$self.$$.dirty[0] & /*list, singleSelection, selectedIndex*/ 4268032) {
			 if (list && singleSelection && list.selectedIndex !== selectedIndex) {
				$$invalidate(22, list.selectedIndex = selectedIndex, list);
			}
		}
	};

	$$props = exclude_internal_props($$props);

	return [
		use,
		className,
		nonInteractive,
		dense,
		avatarList,
		twoLine,
		threeLine,
		element,
		role,
		props,
		forwardEvents,
		nav,
		handleAction,
		selectedIndex,
		vertical,
		wrapFocus,
		singleSelection,
		radiolist,
		checklist,
		layout,
		setEnabled,
		getDefaultFoundation,
		list,
		removeLayoutListener,
		instantiate,
		getInstance,
		addLayoutListener,
		$$props,
		$$scope,
		$$slots,
		nav_1_binding,
		ul_binding
	];
}

class List extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(
			this,
			options,
			instance$8,
			create_fragment$8,
			safe_not_equal,
			{
				use: 0,
				class: 1,
				nonInteractive: 2,
				dense: 3,
				avatarList: 4,
				twoLine: 5,
				threeLine: 6,
				vertical: 14,
				wrapFocus: 15,
				singleSelection: 16,
				selectedIndex: 13,
				radiolist: 17,
				checklist: 18,
				layout: 19,
				setEnabled: 20,
				getDefaultFoundation: 21
			},
			[-1, -1]
		);

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "List",
			options,
			id: create_fragment$8.name
		});
	}

	get use() {
		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get nonInteractive() {
		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set nonInteractive(value) {
		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get dense() {
		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set dense(value) {
		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get avatarList() {
		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set avatarList(value) {
		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get twoLine() {
		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set twoLine(value) {
		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get threeLine() {
		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set threeLine(value) {
		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get vertical() {
		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set vertical(value) {
		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get wrapFocus() {
		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set wrapFocus(value) {
		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get singleSelection() {
		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set singleSelection(value) {
		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get selectedIndex() {
		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set selectedIndex(value) {
		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get radiolist() {
		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set radiolist(value) {
		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get checklist() {
		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set checklist(value) {
		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get layout() {
		return this.$$.ctx[19];
	}

	set layout(value) {
		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get setEnabled() {
		return this.$$.ctx[20];
	}

	set setEnabled(value) {
		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getDefaultFoundation() {
		return this.$$.ctx[21];
	}

	set getDefaultFoundation(value) {
		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* node_modules\@smui\list\Item.svelte generated by Svelte v3.16.4 */
const file$7 = "node_modules\\@smui\\list\\Item.svelte";

// (40:0) {:else}
function create_else_block$2(ctx) {
	let li;
	let forwardEvents_action;
	let Ripple_action;
	let useActions_action;
	let current;
	let dispose;
	const default_slot_template = /*$$slots*/ ctx[25].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[24], null);

	let li_levels = [
		/*role*/ ctx[6] === "option"
		? {
				"aria-selected": /*selected*/ ctx[7] ? "true" : "false"
			}
		: {},
		/*props*/ ctx[12],
		{
			class: "\n      mdc-list-item\n      " + /*className*/ ctx[2] + "\n      " + (/*activated*/ ctx[5] ? "mdc-list-item--activated" : "") + "\n      " + (/*selected*/ ctx[7] ? "mdc-list-item--selected" : "") + "\n      " + (/*disabled*/ ctx[8] ? "mdc-list-item--disabled" : "") + "\n      " + (/*role*/ ctx[6] === "menuitem" && /*selected*/ ctx[7]
			? "mdc-menu-item--selected"
			: "") + "\n    "
		},
		{ role: /*role*/ ctx[6] },
		/*role*/ ctx[6] === "radio" || /*role*/ ctx[6] === "checkbox"
		? {
				"aria-checked": /*checked*/ ctx[10] ? "true" : "false"
			}
		: {},
		{ tabindex: /*tabindex*/ ctx[0] }
	];

	let li_data = {};

	for (let i = 0; i < li_levels.length; i += 1) {
		li_data = assign(li_data, li_levels[i]);
	}

	const block = {
		c: function create() {
			li = element("li");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { class: true, role: true, tabindex: true });
			var li_nodes = children(li);
			if (default_slot) default_slot.l(li_nodes);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(li, li_data);
			add_location(li, file$7, 40, 2, 1057);

			dispose = [
				listen_dev(li, "click", /*action*/ ctx[15], false, false, false),
				listen_dev(li, "keydown", /*handleKeydown*/ ctx[16], false, false, false)
			];
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);

			if (default_slot) {
				default_slot.m(li, null);
			}

			/*li_binding*/ ctx[28](li);
			forwardEvents_action = /*forwardEvents*/ ctx[13].call(null, li) || ({});

			Ripple_action = Ripple.call(null, li, [
				/*ripple*/ ctx[3],
				{
					unbounded: false,
					color: /*color*/ ctx[4]
				}
			]) || ({});

			useActions_action = useActions.call(null, li, /*use*/ ctx[1]) || ({});
			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot && default_slot.p && dirty[0] & /*$$scope*/ 16777216) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[24], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[24], dirty, null));
			}

			set_attributes(li, get_spread_update(li_levels, [
				dirty[0] & /*role, selected*/ 192 && (/*role*/ ctx[6] === "option"
				? {
						"aria-selected": /*selected*/ ctx[7] ? "true" : "false"
					}
				: {}),
				dirty[0] & /*props*/ 4096 && /*props*/ ctx[12],
				dirty[0] & /*className, activated, selected, disabled, role*/ 484 && ({
					class: "\n      mdc-list-item\n      " + /*className*/ ctx[2] + "\n      " + (/*activated*/ ctx[5] ? "mdc-list-item--activated" : "") + "\n      " + (/*selected*/ ctx[7] ? "mdc-list-item--selected" : "") + "\n      " + (/*disabled*/ ctx[8] ? "mdc-list-item--disabled" : "") + "\n      " + (/*role*/ ctx[6] === "menuitem" && /*selected*/ ctx[7]
					? "mdc-menu-item--selected"
					: "") + "\n    "
				}),
				dirty[0] & /*role*/ 64 && ({ role: /*role*/ ctx[6] }),
				dirty[0] & /*role, checked*/ 1088 && (/*role*/ ctx[6] === "radio" || /*role*/ ctx[6] === "checkbox"
				? {
						"aria-checked": /*checked*/ ctx[10] ? "true" : "false"
					}
				: {}),
				dirty[0] & /*tabindex*/ 1 && ({ tabindex: /*tabindex*/ ctx[0] })
			]));

			if (is_function(Ripple_action.update) && dirty[0] & /*ripple, color*/ 24) Ripple_action.update.call(null, [
				/*ripple*/ ctx[3],
				{
					unbounded: false,
					color: /*color*/ ctx[4]
				}
			]);

			if (is_function(useActions_action.update) && dirty[0] & /*use*/ 2) useActions_action.update.call(null, /*use*/ ctx[1]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
			if (default_slot) default_slot.d(detaching);
			/*li_binding*/ ctx[28](null);
			if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
			if (Ripple_action && is_function(Ripple_action.destroy)) Ripple_action.destroy();
			if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block$2.name,
		type: "else",
		source: "(40:0) {:else}",
		ctx
	});

	return block;
}

// (21:23) 
function create_if_block_1(ctx) {
	let span;
	let useActions_action;
	let forwardEvents_action;
	let Ripple_action;
	let current;
	let dispose;
	const default_slot_template = /*$$slots*/ ctx[25].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[24], null);

	let span_levels = [
		{
			class: "\n      mdc-list-item\n      " + /*className*/ ctx[2] + "\n      " + (/*activated*/ ctx[5] ? "mdc-list-item--activated" : "") + "\n      " + (/*selected*/ ctx[7] ? "mdc-list-item--selected" : "") + "\n      " + (/*disabled*/ ctx[8] ? "mdc-list-item--disabled" : "") + "\n    "
		},
		/*activated*/ ctx[5] ? { "aria-current": "page" } : {},
		{ tabindex: /*tabindex*/ ctx[0] },
		/*props*/ ctx[12]
	];

	let span_data = {};

	for (let i = 0; i < span_levels.length; i += 1) {
		span_data = assign(span_data, span_levels[i]);
	}

	const block = {
		c: function create() {
			span = element("span");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { class: true, tabindex: true });
			var span_nodes = children(span);
			if (default_slot) default_slot.l(span_nodes);
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(span, span_data);
			add_location(span, file$7, 21, 2, 549);

			dispose = [
				listen_dev(span, "click", /*action*/ ctx[15], false, false, false),
				listen_dev(span, "keydown", /*handleKeydown*/ ctx[16], false, false, false)
			];
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);

			if (default_slot) {
				default_slot.m(span, null);
			}

			/*span_binding*/ ctx[27](span);
			useActions_action = useActions.call(null, span, /*use*/ ctx[1]) || ({});
			forwardEvents_action = /*forwardEvents*/ ctx[13].call(null, span) || ({});

			Ripple_action = Ripple.call(null, span, [
				/*ripple*/ ctx[3],
				{
					unbounded: false,
					color: /*color*/ ctx[4]
				}
			]) || ({});

			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot && default_slot.p && dirty[0] & /*$$scope*/ 16777216) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[24], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[24], dirty, null));
			}

			set_attributes(span, get_spread_update(span_levels, [
				dirty[0] & /*className, activated, selected, disabled*/ 420 && ({
					class: "\n      mdc-list-item\n      " + /*className*/ ctx[2] + "\n      " + (/*activated*/ ctx[5] ? "mdc-list-item--activated" : "") + "\n      " + (/*selected*/ ctx[7] ? "mdc-list-item--selected" : "") + "\n      " + (/*disabled*/ ctx[8] ? "mdc-list-item--disabled" : "") + "\n    "
				}),
				dirty[0] & /*activated*/ 32 && (/*activated*/ ctx[5] ? { "aria-current": "page" } : {}),
				dirty[0] & /*tabindex*/ 1 && ({ tabindex: /*tabindex*/ ctx[0] }),
				dirty[0] & /*props*/ 4096 && /*props*/ ctx[12]
			]));

			if (is_function(useActions_action.update) && dirty[0] & /*use*/ 2) useActions_action.update.call(null, /*use*/ ctx[1]);

			if (is_function(Ripple_action.update) && dirty[0] & /*ripple, color*/ 24) Ripple_action.update.call(null, [
				/*ripple*/ ctx[3],
				{
					unbounded: false,
					color: /*color*/ ctx[4]
				}
			]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
			if (default_slot) default_slot.d(detaching);
			/*span_binding*/ ctx[27](null);
			if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
			if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
			if (Ripple_action && is_function(Ripple_action.destroy)) Ripple_action.destroy();
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(21:23) ",
		ctx
	});

	return block;
}

// (1:0) {#if nav && href}
function create_if_block$2(ctx) {
	let a;
	let forwardEvents_action;
	let Ripple_action;
	let useActions_action;
	let current;
	let dispose;
	const default_slot_template = /*$$slots*/ ctx[25].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[24], null);

	let a_levels = [
		{ href: /*href*/ ctx[9] },
		/*props*/ ctx[12],
		{
			class: "\n      mdc-list-item\n      " + /*className*/ ctx[2] + "\n      " + (/*activated*/ ctx[5] ? "mdc-list-item--activated" : "") + "\n      " + (/*selected*/ ctx[7] ? "mdc-list-item--selected" : "") + "\n      " + (/*disabled*/ ctx[8] ? "mdc-list-item--disabled" : "") + "\n    "
		},
		/*activated*/ ctx[5] ? { "aria-current": "page" } : {},
		{ tabindex: /*tabindex*/ ctx[0] }
	];

	let a_data = {};

	for (let i = 0; i < a_levels.length; i += 1) {
		a_data = assign(a_data, a_levels[i]);
	}

	const block = {
		c: function create() {
			a = element("a");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { href: true, class: true, tabindex: true });
			var a_nodes = children(a);
			if (default_slot) default_slot.l(a_nodes);
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(a, a_data);
			add_location(a, file$7, 1, 2, 20);

			dispose = [
				listen_dev(a, "click", /*action*/ ctx[15], false, false, false),
				listen_dev(a, "keydown", /*handleKeydown*/ ctx[16], false, false, false)
			];
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);

			if (default_slot) {
				default_slot.m(a, null);
			}

			/*a_binding*/ ctx[26](a);
			forwardEvents_action = /*forwardEvents*/ ctx[13].call(null, a) || ({});

			Ripple_action = Ripple.call(null, a, [
				/*ripple*/ ctx[3],
				{
					unbounded: false,
					color: /*color*/ ctx[4]
				}
			]) || ({});

			useActions_action = useActions.call(null, a, /*use*/ ctx[1]) || ({});
			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot && default_slot.p && dirty[0] & /*$$scope*/ 16777216) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[24], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[24], dirty, null));
			}

			set_attributes(a, get_spread_update(a_levels, [
				dirty[0] & /*href*/ 512 && ({ href: /*href*/ ctx[9] }),
				dirty[0] & /*props*/ 4096 && /*props*/ ctx[12],
				dirty[0] & /*className, activated, selected, disabled*/ 420 && ({
					class: "\n      mdc-list-item\n      " + /*className*/ ctx[2] + "\n      " + (/*activated*/ ctx[5] ? "mdc-list-item--activated" : "") + "\n      " + (/*selected*/ ctx[7] ? "mdc-list-item--selected" : "") + "\n      " + (/*disabled*/ ctx[8] ? "mdc-list-item--disabled" : "") + "\n    "
				}),
				dirty[0] & /*activated*/ 32 && (/*activated*/ ctx[5] ? { "aria-current": "page" } : {}),
				dirty[0] & /*tabindex*/ 1 && ({ tabindex: /*tabindex*/ ctx[0] })
			]));

			if (is_function(Ripple_action.update) && dirty[0] & /*ripple, color*/ 24) Ripple_action.update.call(null, [
				/*ripple*/ ctx[3],
				{
					unbounded: false,
					color: /*color*/ ctx[4]
				}
			]);

			if (is_function(useActions_action.update) && dirty[0] & /*use*/ 2) useActions_action.update.call(null, /*use*/ ctx[1]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
			if (default_slot) default_slot.d(detaching);
			/*a_binding*/ ctx[26](null);
			if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
			if (Ripple_action && is_function(Ripple_action.destroy)) Ripple_action.destroy();
			if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$2.name,
		type: "if",
		source: "(1:0) {#if nav && href}",
		ctx
	});

	return block;
}

function create_fragment$9(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block$2, create_if_block_1, create_else_block$2];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*nav*/ ctx[14] && /*href*/ ctx[9]) return 0;
		if (/*nav*/ ctx[14] && !/*href*/ ctx[9]) return 1;
		return 2;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const block = {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				}

				transition_in(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$9.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

let counter = 0;

function instance$9($$self, $$props, $$invalidate) {
	const dispatch = createEventDispatcher();
	const forwardEvents = forwardEventsBuilder(current_component);
	let checked = false;
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { ripple = true } = $$props;
	let { color = null } = $$props;
	let { nonInteractive = getContext("SMUI:list:nonInteractive") } = $$props;
	let { activated = false } = $$props;
	let { role = getContext("SMUI:list:item:role") } = $$props;
	let { selected = false } = $$props;
	let { disabled = false } = $$props;
	let { tabindex = !nonInteractive && !disabled && (selected || checked) && "0" || "-1" } = $$props;
	let { href = false } = $$props;
	let { inputId = "SMUI-form-field-list-" + counter++ } = $$props;
	let element;
	let addTabindexIfNoItemsSelectedRaf;
	let nav = getContext("SMUI:list:item:nav");
	setContext("SMUI:generic:input:props", { id: inputId });
	setContext("SMUI:generic:input:setChecked", setChecked);

	onMount(() => {
		if (!selected && !nonInteractive) {
			let first = true;
			let el = element;

			while (el.previousSibling) {
				el = el.previousSibling;

				if (el.nodeType === 1 && el.classList.contains("mdc-list-item") && !el.classList.contains("mdc-list-item--disabled")) {
					first = false;
					break;
				}
			}

			if (first) {
				addTabindexIfNoItemsSelectedRaf = window.requestAnimationFrame(addTabindexIfNoItemsSelected);
			}
		}
	});

	onDestroy(() => {
		if (addTabindexIfNoItemsSelectedRaf) {
			window.cancelAnimationFrame(addTabindexIfNoItemsSelectedRaf);
		}
	});

	function addTabindexIfNoItemsSelected() {
		let noneSelected = true;
		let el = element;

		while (el.nextSibling) {
			el = el.nextSibling;

			if (el.nodeType === 1 && el.classList.contains("mdc-list-item") && el.attributes["tabindex"] && el.attributes["tabindex"].value === "0") {
				noneSelected = false;
				break;
			}
		}

		if (noneSelected) {
			$$invalidate(0, tabindex = "0");
		}
	}

	function action(e) {
		if (disabled) {
			e.preventDefault();
		} else {
			dispatch("SMUI:action", e);
		}
	}

	function handleKeydown(e) {
		const isEnter = e.key === "Enter" || e.keyCode === 13;
		const isSpace = e.key === "Space" || e.keyCode === 32;

		if (isEnter || isSpace) {
			action(e);
		}
	}

	function setChecked(isChecked) {
		$$invalidate(10, checked = isChecked);
		$$invalidate(0, tabindex = !nonInteractive && !disabled && (selected || checked) && "0" || "-1");
	}

	let { $$slots = {}, $$scope } = $$props;

	function a_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(11, element = $$value);
		});
	}

	function span_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(11, element = $$value);
		});
	}

	function li_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(11, element = $$value);
		});
	}

	$$self.$set = $$new_props => {
		$$invalidate(23, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ("use" in $$new_props) $$invalidate(1, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(2, className = $$new_props.class);
		if ("ripple" in $$new_props) $$invalidate(3, ripple = $$new_props.ripple);
		if ("color" in $$new_props) $$invalidate(4, color = $$new_props.color);
		if ("nonInteractive" in $$new_props) $$invalidate(17, nonInteractive = $$new_props.nonInteractive);
		if ("activated" in $$new_props) $$invalidate(5, activated = $$new_props.activated);
		if ("role" in $$new_props) $$invalidate(6, role = $$new_props.role);
		if ("selected" in $$new_props) $$invalidate(7, selected = $$new_props.selected);
		if ("disabled" in $$new_props) $$invalidate(8, disabled = $$new_props.disabled);
		if ("tabindex" in $$new_props) $$invalidate(0, tabindex = $$new_props.tabindex);
		if ("href" in $$new_props) $$invalidate(9, href = $$new_props.href);
		if ("inputId" in $$new_props) $$invalidate(18, inputId = $$new_props.inputId);
		if ("$$scope" in $$new_props) $$invalidate(24, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => {
		return {
			counter,
			checked,
			use,
			className,
			ripple,
			color,
			nonInteractive,
			activated,
			role,
			selected,
			disabled,
			tabindex,
			href,
			inputId,
			element,
			addTabindexIfNoItemsSelectedRaf,
			nav,
			props
		};
	};

	$$self.$inject_state = $$new_props => {
		$$invalidate(23, $$props = assign(assign({}, $$props), $$new_props));
		if ("checked" in $$props) $$invalidate(10, checked = $$new_props.checked);
		if ("use" in $$props) $$invalidate(1, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(2, className = $$new_props.className);
		if ("ripple" in $$props) $$invalidate(3, ripple = $$new_props.ripple);
		if ("color" in $$props) $$invalidate(4, color = $$new_props.color);
		if ("nonInteractive" in $$props) $$invalidate(17, nonInteractive = $$new_props.nonInteractive);
		if ("activated" in $$props) $$invalidate(5, activated = $$new_props.activated);
		if ("role" in $$props) $$invalidate(6, role = $$new_props.role);
		if ("selected" in $$props) $$invalidate(7, selected = $$new_props.selected);
		if ("disabled" in $$props) $$invalidate(8, disabled = $$new_props.disabled);
		if ("tabindex" in $$props) $$invalidate(0, tabindex = $$new_props.tabindex);
		if ("href" in $$props) $$invalidate(9, href = $$new_props.href);
		if ("inputId" in $$props) $$invalidate(18, inputId = $$new_props.inputId);
		if ("element" in $$props) $$invalidate(11, element = $$new_props.element);
		if ("addTabindexIfNoItemsSelectedRaf" in $$props) addTabindexIfNoItemsSelectedRaf = $$new_props.addTabindexIfNoItemsSelectedRaf;
		if ("nav" in $$props) $$invalidate(14, nav = $$new_props.nav);
		if ("props" in $$props) $$invalidate(12, props = $$new_props.props);
	};

	let props;

	$$self.$$.update = () => {
		 $$invalidate(12, props = exclude($$props, [
			"use",
			"class",
			"ripple",
			"color",
			"nonInteractive",
			"activated",
			"selected",
			"disabled",
			"tabindex",
			"href",
			"inputId"
		]));
	};

	$$props = exclude_internal_props($$props);

	return [
		tabindex,
		use,
		className,
		ripple,
		color,
		activated,
		role,
		selected,
		disabled,
		href,
		checked,
		element,
		props,
		forwardEvents,
		nav,
		action,
		handleKeydown,
		nonInteractive,
		inputId,
		addTabindexIfNoItemsSelectedRaf,
		dispatch,
		addTabindexIfNoItemsSelected,
		setChecked,
		$$props,
		$$scope,
		$$slots,
		a_binding,
		span_binding,
		li_binding
	];
}

class Item extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$9, create_fragment$9, safe_not_equal, {
			use: 1,
			class: 2,
			ripple: 3,
			color: 4,
			nonInteractive: 17,
			activated: 5,
			role: 6,
			selected: 7,
			disabled: 8,
			tabindex: 0,
			href: 9,
			inputId: 18
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Item",
			options,
			id: create_fragment$9.name
		});
	}

	get use() {
		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get ripple() {
		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set ripple(value) {
		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get color() {
		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set color(value) {
		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get nonInteractive() {
		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set nonInteractive(value) {
		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get activated() {
		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set activated(value) {
		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get role() {
		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set role(value) {
		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get selected() {
		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set selected(value) {
		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get disabled() {
		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set disabled(value) {
		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get tabindex() {
		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set tabindex(value) {
		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get href() {
		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set href(value) {
		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get inputId() {
		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set inputId(value) {
		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

var Text = classAdderBuilder({
  class: 'mdc-list-item__text',
  component: Span,
  contexts: {}
});

classAdderBuilder({
  class: 'mdc-list-item__primary-text',
  component: Span,
  contexts: {}
});

classAdderBuilder({
  class: 'mdc-list-item__secondary-text',
  component: Span,
  contexts: {}
});

classAdderBuilder({
  class: 'mdc-list-item__meta',
  component: Span,
  contexts: {}
});

/* node_modules\@smui\common\Div.svelte generated by Svelte v3.16.4 */
const file$8 = "node_modules\\@smui\\common\\Div.svelte";

function create_fragment$a(ctx) {
	let div;
	let useActions_action;
	let forwardEvents_action;
	let current;
	const default_slot_template = /*$$slots*/ ctx[4].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);
	let div_levels = [exclude(/*$$props*/ ctx[2], ["use"])];
	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	const block = {
		c: function create() {
			div = element("div");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			if (default_slot) default_slot.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(div, div_data);
			add_location(div, file$8, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			useActions_action = useActions.call(null, div, /*use*/ ctx[0]) || ({});
			forwardEvents_action = /*forwardEvents*/ ctx[1].call(null, div) || ({});
			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot && default_slot.p && dirty[0] & /*$$scope*/ 8) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[3], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[3], dirty, null));
			}

			set_attributes(div, get_spread_update(div_levels, [dirty[0] & /*$$props*/ 4 && exclude(/*$$props*/ ctx[2], ["use"])]));
			if (is_function(useActions_action.update) && dirty[0] & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (default_slot) default_slot.d(detaching);
			if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
			if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$a.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$a($$self, $$props, $$invalidate) {
	const forwardEvents = forwardEventsBuilder(current_component);
	let { use = [] } = $$props;
	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$new_props => {
		$$invalidate(2, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("$$scope" in $$new_props) $$invalidate(3, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => {
		return { use };
	};

	$$self.$inject_state = $$new_props => {
		$$invalidate(2, $$props = assign(assign({}, $$props), $$new_props));
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
	};

	$$props = exclude_internal_props($$props);
	return [use, forwardEvents, $$props, $$scope, $$slots];
}

class Div extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$a, create_fragment$a, safe_not_equal, { use: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Div",
			options,
			id: create_fragment$a.name
		});
	}

	get use() {
		throw new Error("<Div>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Div>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

classAdderBuilder({
  class: 'mdc-list-group',
  component: Div,
  contexts: {}
});

/* node_modules\@smui\common\H3.svelte generated by Svelte v3.16.4 */
const file$9 = "node_modules\\@smui\\common\\H3.svelte";

function create_fragment$b(ctx) {
	let h3;
	let useActions_action;
	let forwardEvents_action;
	let current;
	const default_slot_template = /*$$slots*/ ctx[4].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);
	let h3_levels = [exclude(/*$$props*/ ctx[2], ["use"])];
	let h3_data = {};

	for (let i = 0; i < h3_levels.length; i += 1) {
		h3_data = assign(h3_data, h3_levels[i]);
	}

	const block = {
		c: function create() {
			h3 = element("h3");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			h3 = claim_element(nodes, "H3", {});
			var h3_nodes = children(h3);
			if (default_slot) default_slot.l(h3_nodes);
			h3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(h3, h3_data);
			add_location(h3, file$9, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h3, anchor);

			if (default_slot) {
				default_slot.m(h3, null);
			}

			useActions_action = useActions.call(null, h3, /*use*/ ctx[0]) || ({});
			forwardEvents_action = /*forwardEvents*/ ctx[1].call(null, h3) || ({});
			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot && default_slot.p && dirty[0] & /*$$scope*/ 8) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[3], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[3], dirty, null));
			}

			set_attributes(h3, get_spread_update(h3_levels, [dirty[0] & /*$$props*/ 4 && exclude(/*$$props*/ ctx[2], ["use"])]));
			if (is_function(useActions_action.update) && dirty[0] & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h3);
			if (default_slot) default_slot.d(detaching);
			if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
			if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$b.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$b($$self, $$props, $$invalidate) {
	const forwardEvents = forwardEventsBuilder(current_component);
	let { use = [] } = $$props;
	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$new_props => {
		$$invalidate(2, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("$$scope" in $$new_props) $$invalidate(3, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => {
		return { use };
	};

	$$self.$inject_state = $$new_props => {
		$$invalidate(2, $$props = assign(assign({}, $$props), $$new_props));
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
	};

	$$props = exclude_internal_props($$props);
	return [use, forwardEvents, $$props, $$scope, $$slots];
}

class H3 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$b, create_fragment$b, safe_not_equal, { use: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "H3",
			options,
			id: create_fragment$b.name
		});
	}

	get use() {
		throw new Error("<H3>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<H3>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

classAdderBuilder({
  class: 'mdc-list-group__subheader',
  component: H3,
  contexts: {}
});

/* node_modules\@smui\list\Separator.svelte generated by Svelte v3.16.4 */
const file$a = "node_modules\\@smui\\list\\Separator.svelte";

// (13:0) {:else}
function create_else_block$3(ctx) {
	let li;
	let useActions_action;
	let forwardEvents_action;

	let li_levels = [
		{
			class: "\n      mdc-list-divider\n      " + /*className*/ ctx[1] + "\n      " + (/*padded*/ ctx[4] ? "mdc-list-divider--padded" : "") + "\n      " + (/*inset*/ ctx[5] ? "mdc-list-divider--inset" : "") + "\n    "
		},
		{ role: "separator" },
		/*props*/ ctx[6]
	];

	let li_data = {};

	for (let i = 0; i < li_levels.length; i += 1) {
		li_data = assign(li_data, li_levels[i]);
	}

	const block = {
		c: function create() {
			li = element("li");
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { class: true, role: true });
			children(li).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(li, li_data);
			add_location(li, file$a, 13, 2, 257);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			useActions_action = useActions.call(null, li, /*use*/ ctx[0]) || ({});
			forwardEvents_action = /*forwardEvents*/ ctx[7].call(null, li) || ({});
		},
		p: function update(ctx, dirty) {
			set_attributes(li, get_spread_update(li_levels, [
				dirty[0] & /*className, padded, inset*/ 50 && ({
					class: "\n      mdc-list-divider\n      " + /*className*/ ctx[1] + "\n      " + (/*padded*/ ctx[4] ? "mdc-list-divider--padded" : "") + "\n      " + (/*inset*/ ctx[5] ? "mdc-list-divider--inset" : "") + "\n    "
				}),
				{ role: "separator" },
				dirty[0] & /*props*/ 64 && /*props*/ ctx[6]
			]));

			if (is_function(useActions_action.update) && dirty[0] & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
			if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
			if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block$3.name,
		type: "else",
		source: "(13:0) {:else}",
		ctx
	});

	return block;
}

// (1:0) {#if group || nav}
function create_if_block$3(ctx) {
	let hr;
	let useActions_action;
	let forwardEvents_action;

	let hr_levels = [
		{
			class: "\n      mdc-list-divider\n      " + /*className*/ ctx[1] + "\n      " + (/*padded*/ ctx[4] ? "mdc-list-divider--padded" : "") + "\n      " + (/*inset*/ ctx[5] ? "mdc-list-divider--inset" : "") + "\n    "
		},
		/*props*/ ctx[6]
	];

	let hr_data = {};

	for (let i = 0; i < hr_levels.length; i += 1) {
		hr_data = assign(hr_data, hr_levels[i]);
	}

	const block = {
		c: function create() {
			hr = element("hr");
			this.h();
		},
		l: function claim(nodes) {
			hr = claim_element(nodes, "HR", { class: true });
			this.h();
		},
		h: function hydrate() {
			set_attributes(hr, hr_data);
			add_location(hr, file$a, 1, 2, 21);
		},
		m: function mount(target, anchor) {
			insert_dev(target, hr, anchor);
			useActions_action = useActions.call(null, hr, /*use*/ ctx[0]) || ({});
			forwardEvents_action = /*forwardEvents*/ ctx[7].call(null, hr) || ({});
		},
		p: function update(ctx, dirty) {
			set_attributes(hr, get_spread_update(hr_levels, [
				dirty[0] & /*className, padded, inset*/ 50 && ({
					class: "\n      mdc-list-divider\n      " + /*className*/ ctx[1] + "\n      " + (/*padded*/ ctx[4] ? "mdc-list-divider--padded" : "") + "\n      " + (/*inset*/ ctx[5] ? "mdc-list-divider--inset" : "") + "\n    "
				}),
				dirty[0] & /*props*/ 64 && /*props*/ ctx[6]
			]));

			if (is_function(useActions_action.update) && dirty[0] & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(hr);
			if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
			if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$3.name,
		type: "if",
		source: "(1:0) {#if group || nav}",
		ctx
	});

	return block;
}

function create_fragment$c(ctx) {
	let if_block_anchor;

	function select_block_type(ctx, dirty) {
		if (/*group*/ ctx[2] || /*nav*/ ctx[3]) return create_if_block$3;
		return create_else_block$3;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$c.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$c($$self, $$props, $$invalidate) {
	const forwardEvents = forwardEventsBuilder(current_component);
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { group = false } = $$props;
	let { nav = false } = $$props;
	let { padded = false } = $$props;
	let { inset = false } = $$props;

	$$self.$set = $$new_props => {
		$$invalidate(8, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("group" in $$new_props) $$invalidate(2, group = $$new_props.group);
		if ("nav" in $$new_props) $$invalidate(3, nav = $$new_props.nav);
		if ("padded" in $$new_props) $$invalidate(4, padded = $$new_props.padded);
		if ("inset" in $$new_props) $$invalidate(5, inset = $$new_props.inset);
	};

	$$self.$capture_state = () => {
		return {
			use,
			className,
			group,
			nav,
			padded,
			inset,
			props
		};
	};

	$$self.$inject_state = $$new_props => {
		$$invalidate(8, $$props = assign(assign({}, $$props), $$new_props));
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("group" in $$props) $$invalidate(2, group = $$new_props.group);
		if ("nav" in $$props) $$invalidate(3, nav = $$new_props.nav);
		if ("padded" in $$props) $$invalidate(4, padded = $$new_props.padded);
		if ("inset" in $$props) $$invalidate(5, inset = $$new_props.inset);
		if ("props" in $$props) $$invalidate(6, props = $$new_props.props);
	};

	let props;

	$$self.$$.update = () => {
		 $$invalidate(6, props = exclude($$props, ["use", "class", "group", "nav", "padded", "inset"]));
	};

	$$props = exclude_internal_props($$props);
	return [use, className, group, nav, padded, inset, props, forwardEvents];
}

class Separator extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$c, create_fragment$c, safe_not_equal, {
			use: 0,
			class: 1,
			group: 2,
			nav: 3,
			padded: 4,
			inset: 5
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Separator",
			options,
			id: create_fragment$c.name
		});
	}

	get use() {
		throw new Error("<Separator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Separator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<Separator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<Separator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get group() {
		throw new Error("<Separator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set group(value) {
		throw new Error("<Separator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get nav() {
		throw new Error("<Separator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set nav(value) {
		throw new Error("<Separator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get padded() {
		throw new Error("<Separator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set padded(value) {
		throw new Error("<Separator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get inset() {
		throw new Error("<Separator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set inset(value) {
		throw new Error("<Separator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src\routes\ButtonPage.svelte generated by Svelte v3.16.4 */
const file$b = "src\\routes\\ButtonPage.svelte";

// (28:2) <span slot="header">
function create_header_slot_8(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("Button");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true, class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, "Button");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "slot", "header");
			attr_dev(span, "class", "svelte-1aw35an");
			add_location(span, file$b, 27, 2, 586);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_header_slot_8.name,
		type: "slot",
		source: "(28:2) <span slot=\\\"header\\\">",
		ctx
	});

	return block;
}

// (29:2) <span slot="description">
function create_description_slot(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("Buttons allow users to take actions, and make choices, with a single tap.");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true, class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, "Buttons allow users to take actions, and make choices, with a single tap.");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "slot", "description");
			attr_dev(span, "class", "svelte-1aw35an");
			add_location(span, file$b, 28, 2, 623);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_description_slot.name,
		type: "slot",
		source: "(29:2) <span slot=\\\"description\\\">",
		ctx
	});

	return block;
}

// (32:2) <span slot="import">
function create_import_slot(ctx) {
	let span;
	let t0;
	let br;
	let t1;

	const block = {
		c: function create() {
			span = element("span");
			t0 = text("import Radio from \"@smui/radio\";\r\n    ");
			br = element("br");
			t1 = text("\r\n    import FormField from \"@smui/form-field\";");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true, class: true });
			var span_nodes = children(span);
			t0 = claim_text(span_nodes, "import Radio from \"@smui/radio\";\r\n    ");
			br = claim_element(span_nodes, "BR", { class: true });
			t1 = claim_text(span_nodes, "\r\n    import FormField from \"@smui/form-field\";");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(br, "class", "svelte-1aw35an");
			add_location(br, file$b, 33, 4, 806);
			attr_dev(span, "slot", "import");
			attr_dev(span, "class", "svelte-1aw35an");
			add_location(span, file$b, 31, 2, 742);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, t0);
			append_dev(span, br);
			append_dev(span, t1);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_import_slot.name,
		type: "slot",
		source: "(32:2) <span slot=\\\"import\\\">",
		ctx
	});

	return block;
}

// (39:6) <span slot="header">
function create_header_slot_7(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("Contained Buttons");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true, class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, "Contained Buttons");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "slot", "header");
			attr_dev(span, "class", "svelte-1aw35an");
			add_location(span, file$b, 38, 6, 917);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_header_slot_7.name,
		type: "slot",
		source: "(39:6) <span slot=\\\"header\\\">",
		ctx
	});

	return block;
}

// (42:10) <Label>
function create_default_slot_135(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("PRIMARY");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "PRIMARY");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_135.name,
		type: "slot",
		source: "(42:10) <Label>",
		ctx
	});

	return block;
}

// (41:8) <Button on:click={() => clicked++} variant="unelevated">
function create_default_slot_134(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_135] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_134.name,
		type: "slot",
		source: "(41:8) <Button on:click={() => clicked++} variant=\\\"unelevated\\\">",
		ctx
	});

	return block;
}

// (50:10) <Label>
function create_default_slot_133(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("SECONDARY");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "SECONDARY");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_133.name,
		type: "slot",
		source: "(50:10) <Label>",
		ctx
	});

	return block;
}

// (46:8) <Button            color="secondary"            on:click={() => clicked++}            variant="unelevated">
function create_default_slot_132(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_133] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_132.name,
		type: "slot",
		source: "(46:8) <Button            color=\\\"secondary\\\"            on:click={() => clicked++}            variant=\\\"unelevated\\\">",
		ctx
	});

	return block;
}

// (55:10) <Label>
function create_default_slot_131(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("RAISED");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "RAISED");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_131.name,
		type: "slot",
		source: "(55:10) <Label>",
		ctx
	});

	return block;
}

// (54:8) <Button on:click={() => clicked++} variant="raised">
function create_default_slot_130(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_131] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_130.name,
		type: "slot",
		source: "(54:8) <Button on:click={() => clicked++} variant=\\\"raised\\\">",
		ctx
	});

	return block;
}

// (60:10) <Label>
function create_default_slot_129(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("RAISED");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "RAISED");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_129.name,
		type: "slot",
		source: "(60:10) <Label>",
		ctx
	});

	return block;
}

// (59:8) <Button color="secondary" on:click={() => clicked++} variant="raised">
function create_default_slot_128(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_129] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_128.name,
		type: "slot",
		source: "(59:8) <Button color=\\\"secondary\\\" on:click={() => clicked++} variant=\\\"raised\\\">",
		ctx
	});

	return block;
}

// (65:10) <Label>
function create_default_slot_127(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Disabled");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Disabled");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_127.name,
		type: "slot",
		source: "(65:10) <Label>",
		ctx
	});

	return block;
}

// (64:8) <Button on:click={() => clicked++} variant="unelevated" disabled>
function create_default_slot_126(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_127] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_126.name,
		type: "slot",
		source: "(64:8) <Button on:click={() => clicked++} variant=\\\"unelevated\\\" disabled>",
		ctx
	});

	return block;
}

// (63:6) <div slot="horizontal" class="mr-8 mb-8">
function create_horizontal_slot_6(ctx) {
	let div0;
	let div1;
	let div2;
	let div3;
	let div4;
	let current;

	const button0 = new Button({
			props: {
				variant: "unelevated",
				$$slots: { default: [create_default_slot_134] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button0.$on("click", /*click_handler*/ ctx[3]);

	const button1 = new Button({
			props: {
				color: "secondary",
				variant: "unelevated",
				$$slots: { default: [create_default_slot_132] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1.$on("click", /*click_handler_1*/ ctx[4]);

	const button2 = new Button({
			props: {
				variant: "raised",
				$$slots: { default: [create_default_slot_130] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button2.$on("click", /*click_handler_2*/ ctx[5]);

	const button3 = new Button({
			props: {
				color: "secondary",
				variant: "raised",
				$$slots: { default: [create_default_slot_128] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button3.$on("click", /*click_handler_3*/ ctx[6]);

	const button4 = new Button({
			props: {
				variant: "unelevated",
				disabled: true,
				$$slots: { default: [create_default_slot_126] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button4.$on("click", /*click_handler_4*/ ctx[7]);

	const block = {
		c: function create() {
			div0 = element("div");
			create_component(button0.$$.fragment);
			div1 = element("div");
			create_component(button1.$$.fragment);
			div2 = element("div");
			create_component(button2.$$.fragment);
			div3 = element("div");
			create_component(button3.$$.fragment);
			div4 = element("div");
			create_component(button4.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div0_nodes = children(div0);
			claim_component(button0.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			div1 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div1_nodes = children(div1);
			claim_component(button1.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			div2 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div2_nodes = children(div2);
			claim_component(button2.$$.fragment, div2_nodes);
			div2_nodes.forEach(detach_dev);
			div3 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div3_nodes = children(div3);
			claim_component(button3.$$.fragment, div3_nodes);
			div3_nodes.forEach(detach_dev);
			div4 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div4_nodes = children(div4);
			claim_component(button4.$$.fragment, div4_nodes);
			div4_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "slot", "horizontal");
			attr_dev(div0, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div0, file$b, 39, 6, 969);
			attr_dev(div1, "slot", "horizontal");
			attr_dev(div1, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div1, file$b, 44, 6, 1151);
			attr_dev(div2, "slot", "horizontal");
			attr_dev(div2, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div2, file$b, 52, 6, 1386);
			attr_dev(div3, "slot", "horizontal");
			attr_dev(div3, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div3, file$b, 57, 6, 1563);
			attr_dev(div4, "slot", "horizontal");
			attr_dev(div4, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div4, file$b, 62, 6, 1758);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			mount_component(button0, div0, null);
			insert_dev(target, div1, anchor);
			mount_component(button1, div1, null);
			insert_dev(target, div2, anchor);
			mount_component(button2, div2, null);
			insert_dev(target, div3, anchor);
			mount_component(button3, div3, null);
			insert_dev(target, div4, anchor);
			mount_component(button4, div4, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const button0_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button1_changes.$$scope = { dirty, ctx };
			}

			button1.$set(button1_changes);
			const button2_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button2_changes.$$scope = { dirty, ctx };
			}

			button2.$set(button2_changes);
			const button3_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button3_changes.$$scope = { dirty, ctx };
			}

			button3.$set(button3_changes);
			const button4_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button4_changes.$$scope = { dirty, ctx };
			}

			button4.$set(button4_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button0.$$.fragment, local);
			transition_in(button1.$$.fragment, local);
			transition_in(button2.$$.fragment, local);
			transition_in(button3.$$.fragment, local);
			transition_in(button4.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button0.$$.fragment, local);
			transition_out(button1.$$.fragment, local);
			transition_out(button2.$$.fragment, local);
			transition_out(button3.$$.fragment, local);
			transition_out(button4.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			destroy_component(button0);
			if (detaching) detach_dev(div1);
			destroy_component(button1);
			if (detaching) detach_dev(div2);
			destroy_component(button2);
			if (detaching) detach_dev(div3);
			destroy_component(button3);
			if (detaching) detach_dev(div4);
			destroy_component(button4);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_horizontal_slot_6.name,
		type: "slot",
		source: "(63:6) <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">",
		ctx
	});

	return block;
}

// (38:4) <Example>
function create_default_slot_125(ctx) {
	let t0;
	let t1;
	let t2;
	let t3;
	let t4;

	const block = {
		c: function create() {
			t0 = space();
			t1 = space();
			t2 = space();
			t3 = space();
			t4 = space();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			t1 = claim_space(nodes);
			t2 = claim_space(nodes);
			t3 = claim_space(nodes);
			t4 = claim_space(nodes);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, t2, anchor);
			insert_dev(target, t3, anchor);
			insert_dev(target, t4, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(t4);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_125.name,
		type: "slot",
		source: "(38:4) <Example>",
		ctx
	});

	return block;
}

// (70:6) <span slot="header">
function create_header_slot_6(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("Outlined Buttons");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true, class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, "Outlined Buttons");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "slot", "header");
			attr_dev(span, "class", "svelte-1aw35an");
			add_location(span, file$b, 69, 6, 1981);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_header_slot_6.name,
		type: "slot",
		source: "(70:6) <span slot=\\\"header\\\">",
		ctx
	});

	return block;
}

// (73:10) <Label>
function create_default_slot_124(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Outlined");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Outlined");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_124.name,
		type: "slot",
		source: "(73:10) <Label>",
		ctx
	});

	return block;
}

// (72:8) <Button on:click={() => clicked++} variant="outlined">
function create_default_slot_123(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_124] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_123.name,
		type: "slot",
		source: "(72:8) <Button on:click={() => clicked++} variant=\\\"outlined\\\">",
		ctx
	});

	return block;
}

// (78:10) <Label>
function create_default_slot_122(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Outlined");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Outlined");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_122.name,
		type: "slot",
		source: "(78:10) <Label>",
		ctx
	});

	return block;
}

// (77:8) <Button color="secondary" on:click={() => clicked++} variant="outlined">
function create_default_slot_121(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_122] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_121.name,
		type: "slot",
		source: "(77:8) <Button color=\\\"secondary\\\" on:click={() => clicked++} variant=\\\"outlined\\\">",
		ctx
	});

	return block;
}

// (83:10) <Label>
function create_default_slot_120(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Disabled");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Disabled");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_120.name,
		type: "slot",
		source: "(83:10) <Label>",
		ctx
	});

	return block;
}

// (82:8) <Button on:click={() => clicked++} variant="outlined" disabled>
function create_default_slot_119(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_120] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_119.name,
		type: "slot",
		source: "(82:8) <Button on:click={() => clicked++} variant=\\\"outlined\\\" disabled>",
		ctx
	});

	return block;
}

// (81:6) <div slot="horizontal" class="mr-8 mb-8">
function create_horizontal_slot_5(ctx) {
	let div0;
	let div1;
	let div2;
	let current;

	const button0 = new Button({
			props: {
				variant: "outlined",
				$$slots: { default: [create_default_slot_123] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button0.$on("click", /*click_handler_5*/ ctx[8]);

	const button1 = new Button({
			props: {
				color: "secondary",
				variant: "outlined",
				$$slots: { default: [create_default_slot_121] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1.$on("click", /*click_handler_6*/ ctx[9]);

	const button2 = new Button({
			props: {
				variant: "outlined",
				disabled: true,
				$$slots: { default: [create_default_slot_119] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button2.$on("click", /*click_handler_7*/ ctx[10]);

	const block = {
		c: function create() {
			div0 = element("div");
			create_component(button0.$$.fragment);
			div1 = element("div");
			create_component(button1.$$.fragment);
			div2 = element("div");
			create_component(button2.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div0_nodes = children(div0);
			claim_component(button0.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			div1 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div1_nodes = children(div1);
			claim_component(button1.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			div2 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div2_nodes = children(div2);
			claim_component(button2.$$.fragment, div2_nodes);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "slot", "horizontal");
			attr_dev(div0, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div0, file$b, 70, 6, 2032);
			attr_dev(div1, "slot", "horizontal");
			attr_dev(div1, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div1, file$b, 75, 6, 2213);
			attr_dev(div2, "slot", "horizontal");
			attr_dev(div2, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div2, file$b, 80, 6, 2412);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			mount_component(button0, div0, null);
			insert_dev(target, div1, anchor);
			mount_component(button1, div1, null);
			insert_dev(target, div2, anchor);
			mount_component(button2, div2, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const button0_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button1_changes.$$scope = { dirty, ctx };
			}

			button1.$set(button1_changes);
			const button2_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button2_changes.$$scope = { dirty, ctx };
			}

			button2.$set(button2_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button0.$$.fragment, local);
			transition_in(button1.$$.fragment, local);
			transition_in(button2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button0.$$.fragment, local);
			transition_out(button1.$$.fragment, local);
			transition_out(button2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			destroy_component(button0);
			if (detaching) detach_dev(div1);
			destroy_component(button1);
			if (detaching) detach_dev(div2);
			destroy_component(button2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_horizontal_slot_5.name,
		type: "slot",
		source: "(81:6) <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">",
		ctx
	});

	return block;
}

// (69:4) <Example>
function create_default_slot_118(ctx) {
	let t0;
	let t1;
	let t2;

	const block = {
		c: function create() {
			t0 = space();
			t1 = space();
			t2 = space();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			t1 = claim_space(nodes);
			t2 = claim_space(nodes);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, t2, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(t2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_118.name,
		type: "slot",
		source: "(69:4) <Example>",
		ctx
	});

	return block;
}

// (88:6) <span slot="header">
function create_header_slot_5(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("Text Buttons");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true, class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, "Text Buttons");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "slot", "header");
			attr_dev(span, "class", "svelte-1aw35an");
			add_location(span, file$b, 87, 6, 2633);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_header_slot_5.name,
		type: "slot",
		source: "(88:6) <span slot=\\\"header\\\">",
		ctx
	});

	return block;
}

// (91:10) <Label>
function create_default_slot_117(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Default");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Default");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_117.name,
		type: "slot",
		source: "(91:10) <Label>",
		ctx
	});

	return block;
}

// (90:8) <Button on:click={() => clicked++}>
function create_default_slot_116(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_117] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_116.name,
		type: "slot",
		source: "(90:8) <Button on:click={() => clicked++}>",
		ctx
	});

	return block;
}

// (96:10) <Label>
function create_default_slot_115(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Default");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Default");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_115.name,
		type: "slot",
		source: "(96:10) <Label>",
		ctx
	});

	return block;
}

// (95:8) <Button color="secondary" on:click={() => clicked++}>
function create_default_slot_114(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_115] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_114.name,
		type: "slot",
		source: "(95:8) <Button color=\\\"secondary\\\" on:click={() => clicked++}>",
		ctx
	});

	return block;
}

// (101:10) <Label>
function create_default_slot_113(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Disabled");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Disabled");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_113.name,
		type: "slot",
		source: "(101:10) <Label>",
		ctx
	});

	return block;
}

// (100:8) <Button on:click={() => clicked++} disabled>
function create_default_slot_112(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_113] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_112.name,
		type: "slot",
		source: "(100:8) <Button on:click={() => clicked++} disabled>",
		ctx
	});

	return block;
}

// (99:6) <div slot="horizontal" class="mr-8 mb-8">
function create_horizontal_slot_4(ctx) {
	let div0;
	let div1;
	let div2;
	let current;

	const button0 = new Button({
			props: {
				$$slots: { default: [create_default_slot_116] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button0.$on("click", /*click_handler_8*/ ctx[11]);

	const button1 = new Button({
			props: {
				color: "secondary",
				$$slots: { default: [create_default_slot_114] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1.$on("click", /*click_handler_9*/ ctx[12]);

	const button2 = new Button({
			props: {
				disabled: true,
				$$slots: { default: [create_default_slot_112] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button2.$on("click", /*click_handler_10*/ ctx[13]);

	const block = {
		c: function create() {
			div0 = element("div");
			create_component(button0.$$.fragment);
			div1 = element("div");
			create_component(button1.$$.fragment);
			div2 = element("div");
			create_component(button2.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div0_nodes = children(div0);
			claim_component(button0.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			div1 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div1_nodes = children(div1);
			claim_component(button1.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			div2 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div2_nodes = children(div2);
			claim_component(button2.$$.fragment, div2_nodes);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "slot", "horizontal");
			attr_dev(div0, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div0, file$b, 88, 6, 2680);
			attr_dev(div1, "slot", "horizontal");
			attr_dev(div1, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div1, file$b, 93, 6, 2841);
			attr_dev(div2, "slot", "horizontal");
			attr_dev(div2, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div2, file$b, 98, 6, 3020);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			mount_component(button0, div0, null);
			insert_dev(target, div1, anchor);
			mount_component(button1, div1, null);
			insert_dev(target, div2, anchor);
			mount_component(button2, div2, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const button0_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button1_changes.$$scope = { dirty, ctx };
			}

			button1.$set(button1_changes);
			const button2_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button2_changes.$$scope = { dirty, ctx };
			}

			button2.$set(button2_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button0.$$.fragment, local);
			transition_in(button1.$$.fragment, local);
			transition_in(button2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button0.$$.fragment, local);
			transition_out(button1.$$.fragment, local);
			transition_out(button2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			destroy_component(button0);
			if (detaching) detach_dev(div1);
			destroy_component(button1);
			if (detaching) detach_dev(div2);
			destroy_component(button2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_horizontal_slot_4.name,
		type: "slot",
		source: "(99:6) <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">",
		ctx
	});

	return block;
}

// (87:4) <Example>
function create_default_slot_111(ctx) {
	let t0;
	let t1;
	let t2;

	const block = {
		c: function create() {
			t0 = space();
			t1 = space();
			t2 = space();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			t1 = claim_space(nodes);
			t2 = claim_space(nodes);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, t2, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(t2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_111.name,
		type: "slot",
		source: "(87:4) <Example>",
		ctx
	});

	return block;
}

// (106:6) <span slot="header">
function create_header_slot_4(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("Buttons with icons");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true, class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, "Buttons with icons");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "slot", "header");
			attr_dev(span, "class", "svelte-1aw35an");
			add_location(span, file$b, 105, 6, 3222);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_header_slot_4.name,
		type: "slot",
		source: "(106:6) <span slot=\\\"header\\\">",
		ctx
	});

	return block;
}

// (109:10) <Label>
function create_default_slot_110(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Unelevated");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Unelevated");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_110.name,
		type: "slot",
		source: "(109:10) <Label>",
		ctx
	});

	return block;
}

// (110:10) <Icon class="material-icons">
function create_default_slot_109(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("favorite");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "favorite");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_109.name,
		type: "slot",
		source: "(110:10) <Icon class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (108:8) <Button on:click={() => clicked++} variant="unelevated">
function create_default_slot_108(ctx) {
	let t;
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_110] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const icon = new Icon({
			props: {
				class: "material-icons",
				$$slots: { default: [create_default_slot_109] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
			t = space();
			create_component(icon.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(icon.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(icon, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
			const icon_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				icon_changes.$$scope = { dirty, ctx };
			}

			icon.$set(icon_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			transition_in(icon.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			transition_out(icon.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
			if (detaching) detach_dev(t);
			destroy_component(icon, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_108.name,
		type: "slot",
		source: "(108:8) <Button on:click={() => clicked++} variant=\\\"unelevated\\\">",
		ctx
	});

	return block;
}

// (115:10) <Icon class="material-icons">
function create_default_slot_107(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("favorite");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "favorite");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_107.name,
		type: "slot",
		source: "(115:10) <Icon class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (116:10) <Label>
function create_default_slot_106(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Unelevated");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Unelevated");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_106.name,
		type: "slot",
		source: "(116:10) <Label>",
		ctx
	});

	return block;
}

// (114:8) <Button on:click={() => clicked++} variant="unelevated">
function create_default_slot_105(ctx) {
	let t;
	let current;

	const icon = new Icon({
			props: {
				class: "material-icons",
				$$slots: { default: [create_default_slot_107] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_106] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(icon.$$.fragment);
			t = space();
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(icon.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(icon, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const icon_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				icon_changes.$$scope = { dirty, ctx };
			}

			icon.$set(icon_changes);
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(icon.$$.fragment, local);
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(icon.$$.fragment, local);
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(icon, detaching);
			if (detaching) detach_dev(t);
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_105.name,
		type: "slot",
		source: "(114:8) <Button on:click={() => clicked++} variant=\\\"unelevated\\\">",
		ctx
	});

	return block;
}

// (121:10) <Label>
function create_default_slot_104(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Raised");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Raised");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_104.name,
		type: "slot",
		source: "(121:10) <Label>",
		ctx
	});

	return block;
}

// (122:10) <Icon class="material-icons">
function create_default_slot_103(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("favorite");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "favorite");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_103.name,
		type: "slot",
		source: "(122:10) <Icon class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (120:8) <Button on:click={() => clicked++} variant="raised">
function create_default_slot_102(ctx) {
	let t;
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_104] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const icon = new Icon({
			props: {
				class: "material-icons",
				$$slots: { default: [create_default_slot_103] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
			t = space();
			create_component(icon.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(icon.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(icon, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
			const icon_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				icon_changes.$$scope = { dirty, ctx };
			}

			icon.$set(icon_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			transition_in(icon.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			transition_out(icon.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
			if (detaching) detach_dev(t);
			destroy_component(icon, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_102.name,
		type: "slot",
		source: "(120:8) <Button on:click={() => clicked++} variant=\\\"raised\\\">",
		ctx
	});

	return block;
}

// (127:10) <Icon class="material-icons">
function create_default_slot_101(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("favorite");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "favorite");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_101.name,
		type: "slot",
		source: "(127:10) <Icon class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (128:10) <Label>
function create_default_slot_100(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Raised");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Raised");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_100.name,
		type: "slot",
		source: "(128:10) <Label>",
		ctx
	});

	return block;
}

// (126:8) <Button on:click={() => clicked++} variant="raised">
function create_default_slot_99(ctx) {
	let t;
	let current;

	const icon = new Icon({
			props: {
				class: "material-icons",
				$$slots: { default: [create_default_slot_101] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_100] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(icon.$$.fragment);
			t = space();
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(icon.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(icon, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const icon_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				icon_changes.$$scope = { dirty, ctx };
			}

			icon.$set(icon_changes);
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(icon.$$.fragment, local);
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(icon.$$.fragment, local);
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(icon, detaching);
			if (detaching) detach_dev(t);
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_99.name,
		type: "slot",
		source: "(126:8) <Button on:click={() => clicked++} variant=\\\"raised\\\">",
		ctx
	});

	return block;
}

// (133:10) <Icon class="material-icons">
function create_default_slot_98(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("favorite");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "favorite");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_98.name,
		type: "slot",
		source: "(133:10) <Icon class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (134:10) <Label>
function create_default_slot_97(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Outlined");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Outlined");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_97.name,
		type: "slot",
		source: "(134:10) <Label>",
		ctx
	});

	return block;
}

// (132:8) <Button on:click={() => clicked++} variant="outlined">
function create_default_slot_96(ctx) {
	let t;
	let current;

	const icon = new Icon({
			props: {
				class: "material-icons",
				$$slots: { default: [create_default_slot_98] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_97] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(icon.$$.fragment);
			t = space();
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(icon.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(icon, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const icon_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				icon_changes.$$scope = { dirty, ctx };
			}

			icon.$set(icon_changes);
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(icon.$$.fragment, local);
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(icon.$$.fragment, local);
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(icon, detaching);
			if (detaching) detach_dev(t);
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_96.name,
		type: "slot",
		source: "(132:8) <Button on:click={() => clicked++} variant=\\\"outlined\\\">",
		ctx
	});

	return block;
}

// (139:10) <Label>
function create_default_slot_95(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Outlined");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Outlined");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_95.name,
		type: "slot",
		source: "(139:10) <Label>",
		ctx
	});

	return block;
}

// (140:10) <Icon class="material-icons">
function create_default_slot_94(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("favorite");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "favorite");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_94.name,
		type: "slot",
		source: "(140:10) <Icon class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (138:8) <Button on:click={() => clicked++} variant="outlined">
function create_default_slot_93(ctx) {
	let t;
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_95] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const icon = new Icon({
			props: {
				class: "material-icons",
				$$slots: { default: [create_default_slot_94] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
			t = space();
			create_component(icon.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(icon.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(icon, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
			const icon_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				icon_changes.$$scope = { dirty, ctx };
			}

			icon.$set(icon_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			transition_in(icon.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			transition_out(icon.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
			if (detaching) detach_dev(t);
			destroy_component(icon, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_93.name,
		type: "slot",
		source: "(138:8) <Button on:click={() => clicked++} variant=\\\"outlined\\\">",
		ctx
	});

	return block;
}

// (145:10) <Icon class="material-icons">
function create_default_slot_92(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("favorite");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "favorite");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_92.name,
		type: "slot",
		source: "(145:10) <Icon class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (146:10) <Label>
function create_default_slot_91(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Leading Icon");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Leading Icon");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_91.name,
		type: "slot",
		source: "(146:10) <Label>",
		ctx
	});

	return block;
}

// (144:8) <Button on:click={() => clicked++}>
function create_default_slot_90(ctx) {
	let t;
	let current;

	const icon = new Icon({
			props: {
				class: "material-icons",
				$$slots: { default: [create_default_slot_92] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_91] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(icon.$$.fragment);
			t = space();
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(icon.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(icon, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const icon_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				icon_changes.$$scope = { dirty, ctx };
			}

			icon.$set(icon_changes);
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(icon.$$.fragment, local);
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(icon.$$.fragment, local);
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(icon, detaching);
			if (detaching) detach_dev(t);
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_90.name,
		type: "slot",
		source: "(144:8) <Button on:click={() => clicked++}>",
		ctx
	});

	return block;
}

// (151:10) <Label>
function create_default_slot_89(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Trailing Icon");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Trailing Icon");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_89.name,
		type: "slot",
		source: "(151:10) <Label>",
		ctx
	});

	return block;
}

// (152:10) <Icon class="material-icons">
function create_default_slot_88(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("favorite");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "favorite");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_88.name,
		type: "slot",
		source: "(152:10) <Icon class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (150:8) <Button on:click={() => clicked++}>
function create_default_slot_87(ctx) {
	let t;
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_89] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const icon = new Icon({
			props: {
				class: "material-icons",
				$$slots: { default: [create_default_slot_88] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
			t = space();
			create_component(icon.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(icon.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(icon, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
			const icon_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				icon_changes.$$scope = { dirty, ctx };
			}

			icon.$set(icon_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			transition_in(icon.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			transition_out(icon.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
			if (detaching) detach_dev(t);
			destroy_component(icon, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_87.name,
		type: "slot",
		source: "(150:8) <Button on:click={() => clicked++}>",
		ctx
	});

	return block;
}

// (157:10) <Icon class="material-icons">
function create_default_slot_86(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("favorite");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "favorite");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_86.name,
		type: "slot",
		source: "(157:10) <Icon class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (158:10) <Label>
function create_default_slot_85(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Leading Icon");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Leading Icon");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_85.name,
		type: "slot",
		source: "(158:10) <Label>",
		ctx
	});

	return block;
}

// (156:8) <Button color="secondary" on:click={() => clicked++}>
function create_default_slot_84(ctx) {
	let t;
	let current;

	const icon = new Icon({
			props: {
				class: "material-icons",
				$$slots: { default: [create_default_slot_86] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_85] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(icon.$$.fragment);
			t = space();
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(icon.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(icon, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const icon_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				icon_changes.$$scope = { dirty, ctx };
			}

			icon.$set(icon_changes);
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(icon.$$.fragment, local);
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(icon.$$.fragment, local);
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(icon, detaching);
			if (detaching) detach_dev(t);
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_84.name,
		type: "slot",
		source: "(156:8) <Button color=\\\"secondary\\\" on:click={() => clicked++}>",
		ctx
	});

	return block;
}

// (163:10) <Label>
function create_default_slot_83(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Trailing Icon");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Trailing Icon");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_83.name,
		type: "slot",
		source: "(163:10) <Label>",
		ctx
	});

	return block;
}

// (164:10) <Icon class="material-icons">
function create_default_slot_82(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("favorite");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "favorite");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_82.name,
		type: "slot",
		source: "(164:10) <Icon class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (162:8) <Button color="secondary" on:click={() => clicked++}>
function create_default_slot_81(ctx) {
	let t;
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_83] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const icon = new Icon({
			props: {
				class: "material-icons",
				$$slots: { default: [create_default_slot_82] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
			t = space();
			create_component(icon.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(icon.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(icon, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
			const icon_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				icon_changes.$$scope = { dirty, ctx };
			}

			icon.$set(icon_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			transition_in(icon.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			transition_out(icon.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
			if (detaching) detach_dev(t);
			destroy_component(icon, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_81.name,
		type: "slot",
		source: "(162:8) <Button color=\\\"secondary\\\" on:click={() => clicked++}>",
		ctx
	});

	return block;
}

// (161:6) <div slot="horizontal" class="mr-8 mb-8">
function create_horizontal_slot_3(ctx) {
	let div0;
	let div1;
	let div2;
	let div3;
	let div4;
	let div5;
	let div6;
	let div7;
	let div8;
	let div9;
	let current;

	const button0 = new Button({
			props: {
				variant: "unelevated",
				$$slots: { default: [create_default_slot_108] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button0.$on("click", /*click_handler_11*/ ctx[14]);

	const button1 = new Button({
			props: {
				variant: "unelevated",
				$$slots: { default: [create_default_slot_105] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1.$on("click", /*click_handler_12*/ ctx[15]);

	const button2 = new Button({
			props: {
				variant: "raised",
				$$slots: { default: [create_default_slot_102] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button2.$on("click", /*click_handler_13*/ ctx[16]);

	const button3 = new Button({
			props: {
				variant: "raised",
				$$slots: { default: [create_default_slot_99] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button3.$on("click", /*click_handler_14*/ ctx[17]);

	const button4 = new Button({
			props: {
				variant: "outlined",
				$$slots: { default: [create_default_slot_96] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button4.$on("click", /*click_handler_15*/ ctx[18]);

	const button5 = new Button({
			props: {
				variant: "outlined",
				$$slots: { default: [create_default_slot_93] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button5.$on("click", /*click_handler_16*/ ctx[19]);

	const button6 = new Button({
			props: {
				$$slots: { default: [create_default_slot_90] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button6.$on("click", /*click_handler_17*/ ctx[20]);

	const button7 = new Button({
			props: {
				$$slots: { default: [create_default_slot_87] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button7.$on("click", /*click_handler_18*/ ctx[21]);

	const button8 = new Button({
			props: {
				color: "secondary",
				$$slots: { default: [create_default_slot_84] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button8.$on("click", /*click_handler_19*/ ctx[22]);

	const button9 = new Button({
			props: {
				color: "secondary",
				$$slots: { default: [create_default_slot_81] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button9.$on("click", /*click_handler_20*/ ctx[23]);

	const block = {
		c: function create() {
			div0 = element("div");
			create_component(button0.$$.fragment);
			div1 = element("div");
			create_component(button1.$$.fragment);
			div2 = element("div");
			create_component(button2.$$.fragment);
			div3 = element("div");
			create_component(button3.$$.fragment);
			div4 = element("div");
			create_component(button4.$$.fragment);
			div5 = element("div");
			create_component(button5.$$.fragment);
			div6 = element("div");
			create_component(button6.$$.fragment);
			div7 = element("div");
			create_component(button7.$$.fragment);
			div8 = element("div");
			create_component(button8.$$.fragment);
			div9 = element("div");
			create_component(button9.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div0_nodes = children(div0);
			claim_component(button0.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			div1 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div1_nodes = children(div1);
			claim_component(button1.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			div2 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div2_nodes = children(div2);
			claim_component(button2.$$.fragment, div2_nodes);
			div2_nodes.forEach(detach_dev);
			div3 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div3_nodes = children(div3);
			claim_component(button3.$$.fragment, div3_nodes);
			div3_nodes.forEach(detach_dev);
			div4 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div4_nodes = children(div4);
			claim_component(button4.$$.fragment, div4_nodes);
			div4_nodes.forEach(detach_dev);
			div5 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div5_nodes = children(div5);
			claim_component(button5.$$.fragment, div5_nodes);
			div5_nodes.forEach(detach_dev);
			div6 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div6_nodes = children(div6);
			claim_component(button6.$$.fragment, div6_nodes);
			div6_nodes.forEach(detach_dev);
			div7 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div7_nodes = children(div7);
			claim_component(button7.$$.fragment, div7_nodes);
			div7_nodes.forEach(detach_dev);
			div8 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div8_nodes = children(div8);
			claim_component(button8.$$.fragment, div8_nodes);
			div8_nodes.forEach(detach_dev);
			div9 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div9_nodes = children(div9);
			claim_component(button9.$$.fragment, div9_nodes);
			div9_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "slot", "horizontal");
			attr_dev(div0, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div0, file$b, 106, 6, 3275);
			attr_dev(div1, "slot", "horizontal");
			attr_dev(div1, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div1, file$b, 112, 6, 3516);
			attr_dev(div2, "slot", "horizontal");
			attr_dev(div2, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div2, file$b, 118, 6, 3757);
			attr_dev(div3, "slot", "horizontal");
			attr_dev(div3, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div3, file$b, 124, 6, 3990);
			attr_dev(div4, "slot", "horizontal");
			attr_dev(div4, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div4, file$b, 130, 6, 4223);
			attr_dev(div5, "slot", "horizontal");
			attr_dev(div5, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div5, file$b, 136, 6, 4460);
			attr_dev(div6, "slot", "horizontal");
			attr_dev(div6, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div6, file$b, 142, 6, 4697);
			attr_dev(div7, "slot", "horizontal");
			attr_dev(div7, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div7, file$b, 148, 6, 4919);
			attr_dev(div8, "slot", "horizontal");
			attr_dev(div8, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div8, file$b, 154, 6, 5142);
			attr_dev(div9, "slot", "horizontal");
			attr_dev(div9, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div9, file$b, 160, 6, 5382);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			mount_component(button0, div0, null);
			insert_dev(target, div1, anchor);
			mount_component(button1, div1, null);
			insert_dev(target, div2, anchor);
			mount_component(button2, div2, null);
			insert_dev(target, div3, anchor);
			mount_component(button3, div3, null);
			insert_dev(target, div4, anchor);
			mount_component(button4, div4, null);
			insert_dev(target, div5, anchor);
			mount_component(button5, div5, null);
			insert_dev(target, div6, anchor);
			mount_component(button6, div6, null);
			insert_dev(target, div7, anchor);
			mount_component(button7, div7, null);
			insert_dev(target, div8, anchor);
			mount_component(button8, div8, null);
			insert_dev(target, div9, anchor);
			mount_component(button9, div9, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const button0_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button1_changes.$$scope = { dirty, ctx };
			}

			button1.$set(button1_changes);
			const button2_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button2_changes.$$scope = { dirty, ctx };
			}

			button2.$set(button2_changes);
			const button3_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button3_changes.$$scope = { dirty, ctx };
			}

			button3.$set(button3_changes);
			const button4_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button4_changes.$$scope = { dirty, ctx };
			}

			button4.$set(button4_changes);
			const button5_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button5_changes.$$scope = { dirty, ctx };
			}

			button5.$set(button5_changes);
			const button6_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button6_changes.$$scope = { dirty, ctx };
			}

			button6.$set(button6_changes);
			const button7_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button7_changes.$$scope = { dirty, ctx };
			}

			button7.$set(button7_changes);
			const button8_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button8_changes.$$scope = { dirty, ctx };
			}

			button8.$set(button8_changes);
			const button9_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button9_changes.$$scope = { dirty, ctx };
			}

			button9.$set(button9_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button0.$$.fragment, local);
			transition_in(button1.$$.fragment, local);
			transition_in(button2.$$.fragment, local);
			transition_in(button3.$$.fragment, local);
			transition_in(button4.$$.fragment, local);
			transition_in(button5.$$.fragment, local);
			transition_in(button6.$$.fragment, local);
			transition_in(button7.$$.fragment, local);
			transition_in(button8.$$.fragment, local);
			transition_in(button9.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button0.$$.fragment, local);
			transition_out(button1.$$.fragment, local);
			transition_out(button2.$$.fragment, local);
			transition_out(button3.$$.fragment, local);
			transition_out(button4.$$.fragment, local);
			transition_out(button5.$$.fragment, local);
			transition_out(button6.$$.fragment, local);
			transition_out(button7.$$.fragment, local);
			transition_out(button8.$$.fragment, local);
			transition_out(button9.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			destroy_component(button0);
			if (detaching) detach_dev(div1);
			destroy_component(button1);
			if (detaching) detach_dev(div2);
			destroy_component(button2);
			if (detaching) detach_dev(div3);
			destroy_component(button3);
			if (detaching) detach_dev(div4);
			destroy_component(button4);
			if (detaching) detach_dev(div5);
			destroy_component(button5);
			if (detaching) detach_dev(div6);
			destroy_component(button6);
			if (detaching) detach_dev(div7);
			destroy_component(button7);
			if (detaching) detach_dev(div8);
			destroy_component(button8);
			if (detaching) detach_dev(div9);
			destroy_component(button9);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_horizontal_slot_3.name,
		type: "slot",
		source: "(161:6) <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">",
		ctx
	});

	return block;
}

// (105:4) <Example>
function create_default_slot_80(ctx) {
	let t0;
	let t1;
	let t2;
	let t3;
	let t4;
	let t5;
	let t6;
	let t7;
	let t8;
	let t9;

	const block = {
		c: function create() {
			t0 = space();
			t1 = space();
			t2 = space();
			t3 = space();
			t4 = space();
			t5 = space();
			t6 = space();
			t7 = space();
			t8 = space();
			t9 = space();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			t1 = claim_space(nodes);
			t2 = claim_space(nodes);
			t3 = claim_space(nodes);
			t4 = claim_space(nodes);
			t5 = claim_space(nodes);
			t6 = claim_space(nodes);
			t7 = claim_space(nodes);
			t8 = claim_space(nodes);
			t9 = claim_space(nodes);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, t2, anchor);
			insert_dev(target, t3, anchor);
			insert_dev(target, t4, anchor);
			insert_dev(target, t5, anchor);
			insert_dev(target, t6, anchor);
			insert_dev(target, t7, anchor);
			insert_dev(target, t8, anchor);
			insert_dev(target, t9, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(t6);
			if (detaching) detach_dev(t7);
			if (detaching) detach_dev(t8);
			if (detaching) detach_dev(t9);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_80.name,
		type: "slot",
		source: "(105:4) <Example>",
		ctx
	});

	return block;
}

// (169:6) <span slot="header">
function create_header_slot_3(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("Variations");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true, class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, "Variations");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "slot", "header");
			attr_dev(span, "class", "svelte-1aw35an");
			add_location(span, file$b, 168, 6, 5654);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_header_slot_3.name,
		type: "slot",
		source: "(169:6) <span slot=\\\"header\\\">",
		ctx
	});

	return block;
}

// (172:10) <Label>
function create_default_slot_79(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("No Ripple");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "No Ripple");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_79.name,
		type: "slot",
		source: "(172:10) <Label>",
		ctx
	});

	return block;
}

// (171:8) <Button on:click={() => clicked++} ripple={false}>
function create_default_slot_78(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_79] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_78.name,
		type: "slot",
		source: "(171:8) <Button on:click={() => clicked++} ripple={false}>",
		ctx
	});

	return block;
}

// (177:10) <Label>
function create_default_slot_77(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("No Ripple");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "No Ripple");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_77.name,
		type: "slot",
		source: "(177:10) <Label>",
		ctx
	});

	return block;
}

// (176:8) <Button color="secondary" on:click={() => clicked++} ripple={false}>
function create_default_slot_76(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_77] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_76.name,
		type: "slot",
		source: "(176:8) <Button color=\\\"secondary\\\" on:click={() => clicked++} ripple={false}>",
		ctx
	});

	return block;
}

// (182:10) <Label>
function create_default_slot_75(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Dense");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Dense");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_75.name,
		type: "slot",
		source: "(182:10) <Label>",
		ctx
	});

	return block;
}

// (181:8) <Button on:click={() => clicked++} dense>
function create_default_slot_74(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_75] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_74.name,
		type: "slot",
		source: "(181:8) <Button on:click={() => clicked++} dense>",
		ctx
	});

	return block;
}

// (187:10) <Label>
function create_default_slot_73(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Dense");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Dense");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_73.name,
		type: "slot",
		source: "(187:10) <Label>",
		ctx
	});

	return block;
}

// (186:8) <Button color="secondary" on:click={() => clicked++} dense>
function create_default_slot_72(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_73] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_72.name,
		type: "slot",
		source: "(186:8) <Button color=\\\"secondary\\\" on:click={() => clicked++} dense>",
		ctx
	});

	return block;
}

// (192:10) <Label>
function create_default_slot_71(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("With a Class");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "With a Class");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_71.name,
		type: "slot",
		source: "(192:10) <Label>",
		ctx
	});

	return block;
}

// (191:8) <Button on:click={() => clicked++} class="myClass">
function create_default_slot_70(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_71] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_70.name,
		type: "slot",
		source: "(191:8) <Button on:click={() => clicked++} class=\\\"myClass\\\">",
		ctx
	});

	return block;
}

// (197:10) <Label>
function create_default_slot_69(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("With a Class");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "With a Class");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_69.name,
		type: "slot",
		source: "(197:10) <Label>",
		ctx
	});

	return block;
}

// (196:8) <Button color="secondary" on:click={() => clicked++} class="myClass">
function create_default_slot_68(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_69] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_68.name,
		type: "slot",
		source: "(196:8) <Button color=\\\"secondary\\\" on:click={() => clicked++} class=\\\"myClass\\\">",
		ctx
	});

	return block;
}

// (195:6) <div slot="horizontal" class="mr-8 mb-8">
function create_horizontal_slot_2(ctx) {
	let div0;
	let div1;
	let div2;
	let div3;
	let div4;
	let div5;
	let current;

	const button0 = new Button({
			props: {
				ripple: false,
				$$slots: { default: [create_default_slot_78] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button0.$on("click", /*click_handler_21*/ ctx[24]);

	const button1 = new Button({
			props: {
				color: "secondary",
				ripple: false,
				$$slots: { default: [create_default_slot_76] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1.$on("click", /*click_handler_22*/ ctx[25]);

	const button2 = new Button({
			props: {
				dense: true,
				$$slots: { default: [create_default_slot_74] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button2.$on("click", /*click_handler_23*/ ctx[26]);

	const button3 = new Button({
			props: {
				color: "secondary",
				dense: true,
				$$slots: { default: [create_default_slot_72] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button3.$on("click", /*click_handler_24*/ ctx[27]);

	const button4 = new Button({
			props: {
				class: "myClass",
				$$slots: { default: [create_default_slot_70] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button4.$on("click", /*click_handler_25*/ ctx[28]);

	const button5 = new Button({
			props: {
				color: "secondary",
				class: "myClass",
				$$slots: { default: [create_default_slot_68] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button5.$on("click", /*click_handler_26*/ ctx[29]);

	const block = {
		c: function create() {
			div0 = element("div");
			create_component(button0.$$.fragment);
			div1 = element("div");
			create_component(button1.$$.fragment);
			div2 = element("div");
			create_component(button2.$$.fragment);
			div3 = element("div");
			create_component(button3.$$.fragment);
			div4 = element("div");
			create_component(button4.$$.fragment);
			div5 = element("div");
			create_component(button5.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div0_nodes = children(div0);
			claim_component(button0.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			div1 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div1_nodes = children(div1);
			claim_component(button1.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			div2 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div2_nodes = children(div2);
			claim_component(button2.$$.fragment, div2_nodes);
			div2_nodes.forEach(detach_dev);
			div3 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div3_nodes = children(div3);
			claim_component(button3.$$.fragment, div3_nodes);
			div3_nodes.forEach(detach_dev);
			div4 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div4_nodes = children(div4);
			claim_component(button4.$$.fragment, div4_nodes);
			div4_nodes.forEach(detach_dev);
			div5 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div5_nodes = children(div5);
			claim_component(button5.$$.fragment, div5_nodes);
			div5_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "slot", "horizontal");
			attr_dev(div0, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div0, file$b, 169, 6, 5699);
			attr_dev(div1, "slot", "horizontal");
			attr_dev(div1, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div1, file$b, 174, 6, 5877);
			attr_dev(div2, "slot", "horizontal");
			attr_dev(div2, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div2, file$b, 179, 6, 6073);
			attr_dev(div3, "slot", "horizontal");
			attr_dev(div3, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div3, file$b, 184, 6, 6238);
			attr_dev(div4, "slot", "horizontal");
			attr_dev(div4, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div4, file$b, 189, 6, 6421);
			attr_dev(div5, "slot", "horizontal");
			attr_dev(div5, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div5, file$b, 194, 6, 6603);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			mount_component(button0, div0, null);
			insert_dev(target, div1, anchor);
			mount_component(button1, div1, null);
			insert_dev(target, div2, anchor);
			mount_component(button2, div2, null);
			insert_dev(target, div3, anchor);
			mount_component(button3, div3, null);
			insert_dev(target, div4, anchor);
			mount_component(button4, div4, null);
			insert_dev(target, div5, anchor);
			mount_component(button5, div5, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const button0_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button1_changes.$$scope = { dirty, ctx };
			}

			button1.$set(button1_changes);
			const button2_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button2_changes.$$scope = { dirty, ctx };
			}

			button2.$set(button2_changes);
			const button3_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button3_changes.$$scope = { dirty, ctx };
			}

			button3.$set(button3_changes);
			const button4_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button4_changes.$$scope = { dirty, ctx };
			}

			button4.$set(button4_changes);
			const button5_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button5_changes.$$scope = { dirty, ctx };
			}

			button5.$set(button5_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button0.$$.fragment, local);
			transition_in(button1.$$.fragment, local);
			transition_in(button2.$$.fragment, local);
			transition_in(button3.$$.fragment, local);
			transition_in(button4.$$.fragment, local);
			transition_in(button5.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button0.$$.fragment, local);
			transition_out(button1.$$.fragment, local);
			transition_out(button2.$$.fragment, local);
			transition_out(button3.$$.fragment, local);
			transition_out(button4.$$.fragment, local);
			transition_out(button5.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			destroy_component(button0);
			if (detaching) detach_dev(div1);
			destroy_component(button1);
			if (detaching) detach_dev(div2);
			destroy_component(button2);
			if (detaching) detach_dev(div3);
			destroy_component(button3);
			if (detaching) detach_dev(div4);
			destroy_component(button4);
			if (detaching) detach_dev(div5);
			destroy_component(button5);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_horizontal_slot_2.name,
		type: "slot",
		source: "(195:6) <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">",
		ctx
	});

	return block;
}

// (168:4) <Example>
function create_default_slot_67(ctx) {
	let t0;
	let t1;
	let t2;
	let t3;
	let t4;
	let t5;

	const block = {
		c: function create() {
			t0 = space();
			t1 = space();
			t2 = space();
			t3 = space();
			t4 = space();
			t5 = space();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			t1 = claim_space(nodes);
			t2 = claim_space(nodes);
			t3 = claim_space(nodes);
			t4 = claim_space(nodes);
			t5 = claim_space(nodes);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, t2, anchor);
			insert_dev(target, t3, anchor);
			insert_dev(target, t4, anchor);
			insert_dev(target, t5, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(t5);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_67.name,
		type: "slot",
		source: "(168:4) <Example>",
		ctx
	});

	return block;
}

// (202:6) <span slot="header">
function create_header_slot_2(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("Button groups");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true, class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, "Button groups");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "slot", "header");
			attr_dev(span, "class", "svelte-1aw35an");
			add_location(span, file$b, 201, 6, 6834);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_header_slot_2.name,
		type: "slot",
		source: "(202:6) <span slot=\\\"header\\\">",
		ctx
	});

	return block;
}

// (206:12) <Label>
function create_default_slot_66(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("One");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "One");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_66.name,
		type: "slot",
		source: "(206:12) <Label>",
		ctx
	});

	return block;
}

// (205:10) <Button on:click={() => clicked++} variant="unelevated">
function create_default_slot_65(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_66] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_65.name,
		type: "slot",
		source: "(205:10) <Button on:click={() => clicked++} variant=\\\"unelevated\\\">",
		ctx
	});

	return block;
}

// (209:12) <Label>
function create_default_slot_64(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Two");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Two");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_64.name,
		type: "slot",
		source: "(209:12) <Label>",
		ctx
	});

	return block;
}

// (208:10) <Button on:click={() => clicked++} variant="unelevated">
function create_default_slot_63(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_64] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_63.name,
		type: "slot",
		source: "(208:10) <Button on:click={() => clicked++} variant=\\\"unelevated\\\">",
		ctx
	});

	return block;
}

// (212:12) <Label>
function create_default_slot_62(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Three");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Three");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_62.name,
		type: "slot",
		source: "(212:12) <Label>",
		ctx
	});

	return block;
}

// (211:10) <Button on:click={() => clicked++} variant="unelevated">
function create_default_slot_61(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_62] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_61.name,
		type: "slot",
		source: "(211:10) <Button on:click={() => clicked++} variant=\\\"unelevated\\\">",
		ctx
	});

	return block;
}

// (204:8) <Group variant="unelevated">
function create_default_slot_60(ctx) {
	let t0;
	let t1;
	let current;

	const button0 = new Button({
			props: {
				variant: "unelevated",
				$$slots: { default: [create_default_slot_65] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button0.$on("click", /*click_handler_27*/ ctx[30]);

	const button1 = new Button({
			props: {
				variant: "unelevated",
				$$slots: { default: [create_default_slot_63] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1.$on("click", /*click_handler_28*/ ctx[31]);

	const button2 = new Button({
			props: {
				variant: "unelevated",
				$$slots: { default: [create_default_slot_61] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button2.$on("click", /*click_handler_29*/ ctx[32]);

	const block = {
		c: function create() {
			create_component(button0.$$.fragment);
			t0 = space();
			create_component(button1.$$.fragment);
			t1 = space();
			create_component(button2.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(button0.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(button1.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(button2.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(button0, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(button1, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(button2, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const button0_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button1_changes.$$scope = { dirty, ctx };
			}

			button1.$set(button1_changes);
			const button2_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button2_changes.$$scope = { dirty, ctx };
			}

			button2.$set(button2_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button0.$$.fragment, local);
			transition_in(button1.$$.fragment, local);
			transition_in(button2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button0.$$.fragment, local);
			transition_out(button1.$$.fragment, local);
			transition_out(button2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(button0, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(button1, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(button2, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_60.name,
		type: "slot",
		source: "(204:8) <Group variant=\\\"unelevated\\\">",
		ctx
	});

	return block;
}

// (219:12) <Label>
function create_default_slot_59(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("One");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "One");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_59.name,
		type: "slot",
		source: "(219:12) <Label>",
		ctx
	});

	return block;
}

// (218:10) <Button on:click={() => clicked++} variant="raised">
function create_default_slot_58(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_59] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_58.name,
		type: "slot",
		source: "(218:10) <Button on:click={() => clicked++} variant=\\\"raised\\\">",
		ctx
	});

	return block;
}

// (222:12) <Label>
function create_default_slot_57(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Two");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Two");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_57.name,
		type: "slot",
		source: "(222:12) <Label>",
		ctx
	});

	return block;
}

// (221:10) <Button on:click={() => clicked++} variant="raised">
function create_default_slot_56(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_57] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_56.name,
		type: "slot",
		source: "(221:10) <Button on:click={() => clicked++} variant=\\\"raised\\\">",
		ctx
	});

	return block;
}

// (225:12) <Label>
function create_default_slot_55(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Three");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Three");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_55.name,
		type: "slot",
		source: "(225:12) <Label>",
		ctx
	});

	return block;
}

// (224:10) <Button on:click={() => clicked++} variant="raised">
function create_default_slot_54(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_55] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_54.name,
		type: "slot",
		source: "(224:10) <Button on:click={() => clicked++} variant=\\\"raised\\\">",
		ctx
	});

	return block;
}

// (217:8) <Group variant="raised">
function create_default_slot_53(ctx) {
	let t0;
	let t1;
	let current;

	const button0 = new Button({
			props: {
				variant: "raised",
				$$slots: { default: [create_default_slot_58] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button0.$on("click", /*click_handler_30*/ ctx[33]);

	const button1 = new Button({
			props: {
				variant: "raised",
				$$slots: { default: [create_default_slot_56] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1.$on("click", /*click_handler_31*/ ctx[34]);

	const button2 = new Button({
			props: {
				variant: "raised",
				$$slots: { default: [create_default_slot_54] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button2.$on("click", /*click_handler_32*/ ctx[35]);

	const block = {
		c: function create() {
			create_component(button0.$$.fragment);
			t0 = space();
			create_component(button1.$$.fragment);
			t1 = space();
			create_component(button2.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(button0.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(button1.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(button2.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(button0, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(button1, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(button2, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const button0_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button1_changes.$$scope = { dirty, ctx };
			}

			button1.$set(button1_changes);
			const button2_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button2_changes.$$scope = { dirty, ctx };
			}

			button2.$set(button2_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button0.$$.fragment, local);
			transition_in(button1.$$.fragment, local);
			transition_in(button2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button0.$$.fragment, local);
			transition_out(button1.$$.fragment, local);
			transition_out(button2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(button0, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(button1, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(button2, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_53.name,
		type: "slot",
		source: "(217:8) <Group variant=\\\"raised\\\">",
		ctx
	});

	return block;
}

// (232:12) <Label>
function create_default_slot_52(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("One");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "One");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_52.name,
		type: "slot",
		source: "(232:12) <Label>",
		ctx
	});

	return block;
}

// (231:10) <Button on:click={() => clicked++} variant="outlined">
function create_default_slot_51(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_52] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_51.name,
		type: "slot",
		source: "(231:10) <Button on:click={() => clicked++} variant=\\\"outlined\\\">",
		ctx
	});

	return block;
}

// (235:12) <Label>
function create_default_slot_50(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Two");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Two");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_50.name,
		type: "slot",
		source: "(235:12) <Label>",
		ctx
	});

	return block;
}

// (234:10) <Button on:click={() => clicked++} variant="outlined">
function create_default_slot_49(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_50] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_49.name,
		type: "slot",
		source: "(234:10) <Button on:click={() => clicked++} variant=\\\"outlined\\\">",
		ctx
	});

	return block;
}

// (238:12) <Label>
function create_default_slot_48(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Three");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Three");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_48.name,
		type: "slot",
		source: "(238:12) <Label>",
		ctx
	});

	return block;
}

// (237:10) <Button on:click={() => clicked++} variant="outlined">
function create_default_slot_47(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_48] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_47.name,
		type: "slot",
		source: "(237:10) <Button on:click={() => clicked++} variant=\\\"outlined\\\">",
		ctx
	});

	return block;
}

// (230:8) <Group variant="outlined">
function create_default_slot_46(ctx) {
	let t0;
	let t1;
	let current;

	const button0 = new Button({
			props: {
				variant: "outlined",
				$$slots: { default: [create_default_slot_51] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button0.$on("click", /*click_handler_33*/ ctx[36]);

	const button1 = new Button({
			props: {
				variant: "outlined",
				$$slots: { default: [create_default_slot_49] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1.$on("click", /*click_handler_34*/ ctx[37]);

	const button2 = new Button({
			props: {
				variant: "outlined",
				$$slots: { default: [create_default_slot_47] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button2.$on("click", /*click_handler_35*/ ctx[38]);

	const block = {
		c: function create() {
			create_component(button0.$$.fragment);
			t0 = space();
			create_component(button1.$$.fragment);
			t1 = space();
			create_component(button2.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(button0.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(button1.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(button2.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(button0, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(button1, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(button2, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const button0_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button1_changes.$$scope = { dirty, ctx };
			}

			button1.$set(button1_changes);
			const button2_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button2_changes.$$scope = { dirty, ctx };
			}

			button2.$set(button2_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button0.$$.fragment, local);
			transition_in(button1.$$.fragment, local);
			transition_in(button2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button0.$$.fragment, local);
			transition_out(button1.$$.fragment, local);
			transition_out(button2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(button0, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(button1, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(button2, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_46.name,
		type: "slot",
		source: "(230:8) <Group variant=\\\"outlined\\\">",
		ctx
	});

	return block;
}

// (245:12) <Label>
function create_default_slot_45(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("One");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "One");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_45.name,
		type: "slot",
		source: "(245:12) <Label>",
		ctx
	});

	return block;
}

// (244:10) <Button on:click={() => clicked++}>
function create_default_slot_44(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_45] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_44.name,
		type: "slot",
		source: "(244:10) <Button on:click={() => clicked++}>",
		ctx
	});

	return block;
}

// (248:12) <Label>
function create_default_slot_43(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Two");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Two");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_43.name,
		type: "slot",
		source: "(248:12) <Label>",
		ctx
	});

	return block;
}

// (247:10) <Button on:click={() => clicked++}>
function create_default_slot_42(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_43] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_42.name,
		type: "slot",
		source: "(247:10) <Button on:click={() => clicked++}>",
		ctx
	});

	return block;
}

// (251:12) <Label>
function create_default_slot_41(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Three");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Three");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_41.name,
		type: "slot",
		source: "(251:12) <Label>",
		ctx
	});

	return block;
}

// (250:10) <Button on:click={() => clicked++}>
function create_default_slot_40(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_41] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_40.name,
		type: "slot",
		source: "(250:10) <Button on:click={() => clicked++}>",
		ctx
	});

	return block;
}

// (243:8) <Group>
function create_default_slot_39(ctx) {
	let t0;
	let t1;
	let current;

	const button0 = new Button({
			props: {
				$$slots: { default: [create_default_slot_44] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button0.$on("click", /*click_handler_36*/ ctx[39]);

	const button1 = new Button({
			props: {
				$$slots: { default: [create_default_slot_42] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1.$on("click", /*click_handler_37*/ ctx[40]);

	const button2 = new Button({
			props: {
				$$slots: { default: [create_default_slot_40] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button2.$on("click", /*click_handler_38*/ ctx[41]);

	const block = {
		c: function create() {
			create_component(button0.$$.fragment);
			t0 = space();
			create_component(button1.$$.fragment);
			t1 = space();
			create_component(button2.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(button0.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(button1.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(button2.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(button0, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(button1, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(button2, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const button0_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button1_changes.$$scope = { dirty, ctx };
			}

			button1.$set(button1_changes);
			const button2_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button2_changes.$$scope = { dirty, ctx };
			}

			button2.$set(button2_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button0.$$.fragment, local);
			transition_in(button1.$$.fragment, local);
			transition_in(button2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button0.$$.fragment, local);
			transition_out(button1.$$.fragment, local);
			transition_out(button2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(button0, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(button1, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(button2, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_39.name,
		type: "slot",
		source: "(243:8) <Group>",
		ctx
	});

	return block;
}

// (242:6) <div slot="horizontal" class="mr-8 mb-8">
function create_horizontal_slot_1(ctx) {
	let div0;
	let div1;
	let div2;
	let div3;
	let current;

	const group0 = new Group({
			props: {
				variant: "unelevated",
				$$slots: { default: [create_default_slot_60] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const group1 = new Group({
			props: {
				variant: "raised",
				$$slots: { default: [create_default_slot_53] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const group2 = new Group({
			props: {
				variant: "outlined",
				$$slots: { default: [create_default_slot_46] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const group3 = new Group({
			props: {
				$$slots: { default: [create_default_slot_39] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div0 = element("div");
			create_component(group0.$$.fragment);
			div1 = element("div");
			create_component(group1.$$.fragment);
			div2 = element("div");
			create_component(group2.$$.fragment);
			div3 = element("div");
			create_component(group3.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div0_nodes = children(div0);
			claim_component(group0.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			div1 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div1_nodes = children(div1);
			claim_component(group1.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			div2 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div2_nodes = children(div2);
			claim_component(group2.$$.fragment, div2_nodes);
			div2_nodes.forEach(detach_dev);
			div3 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div3_nodes = children(div3);
			claim_component(group3.$$.fragment, div3_nodes);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "slot", "horizontal");
			attr_dev(div0, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div0, file$b, 202, 6, 6882);
			attr_dev(div1, "slot", "horizontal");
			attr_dev(div1, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div1, file$b, 215, 6, 7366);
			attr_dev(div2, "slot", "horizontal");
			attr_dev(div2, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div2, file$b, 228, 6, 7834);
			attr_dev(div3, "slot", "horizontal");
			attr_dev(div3, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div3, file$b, 241, 6, 8310);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			mount_component(group0, div0, null);
			insert_dev(target, div1, anchor);
			mount_component(group1, div1, null);
			insert_dev(target, div2, anchor);
			mount_component(group2, div2, null);
			insert_dev(target, div3, anchor);
			mount_component(group3, div3, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const group0_changes = {};

			if (dirty[0] & /*clicked*/ 1 | dirty[1] & /*$$scope*/ 134217728) {
				group0_changes.$$scope = { dirty, ctx };
			}

			group0.$set(group0_changes);
			const group1_changes = {};

			if (dirty[0] & /*clicked*/ 1 | dirty[1] & /*$$scope*/ 134217728) {
				group1_changes.$$scope = { dirty, ctx };
			}

			group1.$set(group1_changes);
			const group2_changes = {};

			if (dirty[0] & /*clicked*/ 1 | dirty[1] & /*$$scope*/ 134217728) {
				group2_changes.$$scope = { dirty, ctx };
			}

			group2.$set(group2_changes);
			const group3_changes = {};

			if (dirty[0] & /*clicked*/ 1 | dirty[1] & /*$$scope*/ 134217728) {
				group3_changes.$$scope = { dirty, ctx };
			}

			group3.$set(group3_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(group0.$$.fragment, local);
			transition_in(group1.$$.fragment, local);
			transition_in(group2.$$.fragment, local);
			transition_in(group3.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(group0.$$.fragment, local);
			transition_out(group1.$$.fragment, local);
			transition_out(group2.$$.fragment, local);
			transition_out(group3.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			destroy_component(group0);
			if (detaching) detach_dev(div1);
			destroy_component(group1);
			if (detaching) detach_dev(div2);
			destroy_component(group2);
			if (detaching) detach_dev(div3);
			destroy_component(group3);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_horizontal_slot_1.name,
		type: "slot",
		source: "(242:6) <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">",
		ctx
	});

	return block;
}

// (201:4) <Example>
function create_default_slot_38(ctx) {
	let t0;
	let t1;
	let t2;
	let t3;

	const block = {
		c: function create() {
			t0 = space();
			t1 = space();
			t2 = space();
			t3 = space();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			t1 = claim_space(nodes);
			t2 = claim_space(nodes);
			t3 = claim_space(nodes);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, t2, anchor);
			insert_dev(target, t3, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(t3);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_38.name,
		type: "slot",
		source: "(201:4) <Example>",
		ctx
	});

	return block;
}

// (257:6) <span slot="header">
function create_header_slot_1(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("Block button");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true, class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, "Block button");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "slot", "header");
			attr_dev(span, "class", "svelte-1aw35an");
			add_location(span, file$b, 256, 6, 8741);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_header_slot_1.name,
		type: "slot",
		source: "(257:6) <span slot=\\\"header\\\">",
		ctx
	});

	return block;
}

// (260:10) <Label>
function create_default_slot_37(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("BLOCK BUTTON");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "BLOCK BUTTON");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_37.name,
		type: "slot",
		source: "(260:10) <Label>",
		ctx
	});

	return block;
}

// (259:8) <Button on:click={() => clicked++} variant="unelevated" class="w-full">
function create_default_slot_36(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_37] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_36.name,
		type: "slot",
		source: "(259:8) <Button on:click={() => clicked++} variant=\\\"unelevated\\\" class=\\\"w-full\\\">",
		ctx
	});

	return block;
}

// (270:12) <Label>
function create_default_slot_35(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Primary");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Primary");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_35.name,
		type: "slot",
		source: "(270:12) <Label>",
		ctx
	});

	return block;
}

// (265:10) <Button              on:click={() => clicked++}              variant="unelevated"              color="primary"              style="flex-grow: 3;">
function create_default_slot_34(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_35] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_34.name,
		type: "slot",
		source: "(265:10) <Button              on:click={() => clicked++}              variant=\\\"unelevated\\\"              color=\\\"primary\\\"              style=\\\"flex-grow: 3;\\\">",
		ctx
	});

	return block;
}

// (277:12) <Label>
function create_default_slot_33(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Secondary");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Secondary");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_33.name,
		type: "slot",
		source: "(277:12) <Label>",
		ctx
	});

	return block;
}

// (272:10) <Button              on:click={() => clicked++}              variant="unelevated"              color="secondary"              style="flex-grow: 1;">
function create_default_slot_32(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_33] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_32.name,
		type: "slot",
		source: "(272:10) <Button              on:click={() => clicked++}              variant=\\\"unelevated\\\"              color=\\\"secondary\\\"              style=\\\"flex-grow: 1;\\\">",
		ctx
	});

	return block;
}

// (284:12) <Label>
function create_default_slot_31(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Secondary");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Secondary");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_31.name,
		type: "slot",
		source: "(284:12) <Label>",
		ctx
	});

	return block;
}

// (279:10) <Button              on:click={() => clicked++}              variant="unelevated"              color="secondary"              style="flex-grow: 1;">
function create_default_slot_30(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_31] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_30.name,
		type: "slot",
		source: "(279:10) <Button              on:click={() => clicked++}              variant=\\\"unelevated\\\"              color=\\\"secondary\\\"              style=\\\"flex-grow: 1;\\\">",
		ctx
	});

	return block;
}

// (264:8) <Group variant="outlined" style="display: flex;">
function create_default_slot_29(ctx) {
	let t0;
	let t1;
	let current;

	const button0 = new Button({
			props: {
				variant: "unelevated",
				color: "primary",
				style: "flex-grow: 3;",
				$$slots: { default: [create_default_slot_34] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button0.$on("click", /*click_handler_40*/ ctx[43]);

	const button1 = new Button({
			props: {
				variant: "unelevated",
				color: "secondary",
				style: "flex-grow: 1;",
				$$slots: { default: [create_default_slot_32] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1.$on("click", /*click_handler_41*/ ctx[44]);

	const button2 = new Button({
			props: {
				variant: "unelevated",
				color: "secondary",
				style: "flex-grow: 1;",
				$$slots: { default: [create_default_slot_30] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button2.$on("click", /*click_handler_42*/ ctx[45]);

	const block = {
		c: function create() {
			create_component(button0.$$.fragment);
			t0 = space();
			create_component(button1.$$.fragment);
			t1 = space();
			create_component(button2.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(button0.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(button1.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(button2.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(button0, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(button1, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(button2, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const button0_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button1_changes.$$scope = { dirty, ctx };
			}

			button1.$set(button1_changes);
			const button2_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button2_changes.$$scope = { dirty, ctx };
			}

			button2.$set(button2_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button0.$$.fragment, local);
			transition_in(button1.$$.fragment, local);
			transition_in(button2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button0.$$.fragment, local);
			transition_out(button1.$$.fragment, local);
			transition_out(button2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(button0, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(button1, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(button2, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_29.name,
		type: "slot",
		source: "(264:8) <Group variant=\\\"outlined\\\" style=\\\"display: flex;\\\">",
		ctx
	});

	return block;
}

// (263:6) <div slot="vertical" class="mr-8 mb-8 w-full">
function create_vertical_slot(ctx) {
	let div0;
	let div1;
	let current;

	const button = new Button({
			props: {
				variant: "unelevated",
				class: "w-full",
				$$slots: { default: [create_default_slot_36] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*click_handler_39*/ ctx[42]);

	const group = new Group({
			props: {
				variant: "outlined",
				style: "display: flex;",
				$$slots: { default: [create_default_slot_29] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div0 = element("div");
			create_component(button.$$.fragment);
			div1 = element("div");
			create_component(group.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div0_nodes = children(div0);
			claim_component(button.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			div1 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div1_nodes = children(div1);
			claim_component(group.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "slot", "vertical");
			attr_dev(div0, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div0, file$b, 257, 6, 8788);
			attr_dev(div1, "slot", "vertical");
			attr_dev(div1, "class", "mr-8 mb-8 w-full svelte-1aw35an");
			add_location(div1, file$b, 262, 6, 8988);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			mount_component(button, div0, null);
			insert_dev(target, div1, anchor);
			mount_component(group, div1, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const button_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
			const group_changes = {};

			if (dirty[0] & /*clicked*/ 1 | dirty[1] & /*$$scope*/ 134217728) {
				group_changes.$$scope = { dirty, ctx };
			}

			group.$set(group_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button.$$.fragment, local);
			transition_in(group.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button.$$.fragment, local);
			transition_out(group.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			destroy_component(button);
			if (detaching) detach_dev(div1);
			destroy_component(group);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_vertical_slot.name,
		type: "slot",
		source: "(263:6) <div slot=\\\"vertical\\\" class=\\\"mr-8 mb-8 w-full\\\">",
		ctx
	});

	return block;
}

// (256:4) <Example>
function create_default_slot_28(ctx) {
	let t0;
	let t1;

	const block = {
		c: function create() {
			t0 = space();
			t1 = space();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			t1 = claim_space(nodes);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, t1, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(t1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_28.name,
		type: "slot",
		source: "(256:4) <Example>",
		ctx
	});

	return block;
}

// (290:6) <span slot="header">
function create_header_slot(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("Split buttons using a button group");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true, class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, "Split buttons using a button group");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "slot", "header");
			attr_dev(span, "class", "svelte-1aw35an");
			add_location(span, file$b, 289, 6, 9817);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_header_slot.name,
		type: "slot",
		source: "(290:6) <span slot=\\\"header\\\">",
		ctx
	});

	return block;
}

// (294:12) <Label>
function create_default_slot_27(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Do the thing");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Do the thing");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_27.name,
		type: "slot",
		source: "(294:12) <Label>",
		ctx
	});

	return block;
}

// (293:10) <Button on:click={() => clicked++} variant="raised">
function create_default_slot_26(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_27] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_26.name,
		type: "slot",
		source: "(293:10) <Button on:click={() => clicked++} variant=\\\"raised\\\">",
		ctx
	});

	return block;
}

// (301:14) <Icon class="material-icons" style="margin: 0;">
function create_default_slot_25(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("arrow_drop_down");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "arrow_drop_down");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_25.name,
		type: "slot",
		source: "(301:14) <Icon class=\\\"material-icons\\\" style=\\\"margin: 0;\\\">",
		ctx
	});

	return block;
}

// (297:12) <Button                on:click={() => menu.setOpen(true)}                variant="raised"                style="padding: 0; min-width: 36px;">
function create_default_slot_24(ctx) {
	let current;

	const icon = new Icon({
			props: {
				class: "material-icons",
				style: "margin: 0;",
				$$slots: { default: [create_default_slot_25] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(icon.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(icon.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(icon, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const icon_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				icon_changes.$$scope = { dirty, ctx };
			}

			icon.$set(icon_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(icon.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(icon.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(icon, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_24.name,
		type: "slot",
		source: "(297:12) <Button                on:click={() => menu.setOpen(true)}                variant=\\\"raised\\\"                style=\\\"padding: 0; min-width: 36px;\\\">",
		ctx
	});

	return block;
}

// (308:18) <Text>
function create_default_slot_23(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Thing 1");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Thing 1");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_23.name,
		type: "slot",
		source: "(308:18) <Text>",
		ctx
	});

	return block;
}

// (307:16) <Item on:SMUI:action={() => clicked++}>
function create_default_slot_22(ctx) {
	let current;

	const text_1 = new Text({
			props: {
				$$slots: { default: [create_default_slot_23] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(text_1.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(text_1.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(text_1, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const text_1_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				text_1_changes.$$scope = { dirty, ctx };
			}

			text_1.$set(text_1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(text_1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(text_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(text_1, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_22.name,
		type: "slot",
		source: "(307:16) <Item on:SMUI:action={() => clicked++}>",
		ctx
	});

	return block;
}

// (311:18) <Text>
function create_default_slot_21(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Thing 2");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Thing 2");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_21.name,
		type: "slot",
		source: "(311:18) <Text>",
		ctx
	});

	return block;
}

// (310:16) <Item on:SMUI:action={() => clicked++}>
function create_default_slot_20(ctx) {
	let current;

	const text_1 = new Text({
			props: {
				$$slots: { default: [create_default_slot_21] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(text_1.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(text_1.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(text_1, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const text_1_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				text_1_changes.$$scope = { dirty, ctx };
			}

			text_1.$set(text_1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(text_1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(text_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(text_1, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_20.name,
		type: "slot",
		source: "(310:16) <Item on:SMUI:action={() => clicked++}>",
		ctx
	});

	return block;
}

// (315:18) <Text>
function create_default_slot_19(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Thing 3");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Thing 3");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_19.name,
		type: "slot",
		source: "(315:18) <Text>",
		ctx
	});

	return block;
}

// (314:16) <Item on:SMUI:action={() => clicked++}>
function create_default_slot_18(ctx) {
	let current;

	const text_1 = new Text({
			props: {
				$$slots: { default: [create_default_slot_19] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(text_1.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(text_1.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(text_1, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const text_1_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				text_1_changes.$$scope = { dirty, ctx };
			}

			text_1.$set(text_1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(text_1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(text_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(text_1, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_18.name,
		type: "slot",
		source: "(314:16) <Item on:SMUI:action={() => clicked++}>",
		ctx
	});

	return block;
}

// (306:14) <List>
function create_default_slot_17(ctx) {
	let t0;
	let t1;
	let t2;
	let current;

	const item0 = new Item({
			props: {
				$$slots: { default: [create_default_slot_22] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	item0.$on("SMUI:action", /*SMUI_action_handler*/ ctx[48]);

	const item1 = new Item({
			props: {
				$$slots: { default: [create_default_slot_20] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	item1.$on("SMUI:action", /*SMUI_action_handler_1*/ ctx[49]);
	const separator = new Separator({ $$inline: true });

	const item2 = new Item({
			props: {
				$$slots: { default: [create_default_slot_18] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	item2.$on("SMUI:action", /*SMUI_action_handler_2*/ ctx[50]);

	const block = {
		c: function create() {
			create_component(item0.$$.fragment);
			t0 = space();
			create_component(item1.$$.fragment);
			t1 = space();
			create_component(separator.$$.fragment);
			t2 = space();
			create_component(item2.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(item0.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(item1.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(separator.$$.fragment, nodes);
			t2 = claim_space(nodes);
			claim_component(item2.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(item0, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(item1, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(separator, target, anchor);
			insert_dev(target, t2, anchor);
			mount_component(item2, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const item0_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				item0_changes.$$scope = { dirty, ctx };
			}

			item0.$set(item0_changes);
			const item1_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				item1_changes.$$scope = { dirty, ctx };
			}

			item1.$set(item1_changes);
			const item2_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				item2_changes.$$scope = { dirty, ctx };
			}

			item2.$set(item2_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(item0.$$.fragment, local);
			transition_in(item1.$$.fragment, local);
			transition_in(separator.$$.fragment, local);
			transition_in(item2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(item0.$$.fragment, local);
			transition_out(item1.$$.fragment, local);
			transition_out(separator.$$.fragment, local);
			transition_out(item2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(item0, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(item1, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(separator, detaching);
			if (detaching) detach_dev(t2);
			destroy_component(item2, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_17.name,
		type: "slot",
		source: "(306:14) <List>",
		ctx
	});

	return block;
}

// (305:12) <Menu bind:this={menu} anchorCorner="TOP_LEFT">
function create_default_slot_16(ctx) {
	let current;

	const list = new List({
			props: {
				$$slots: { default: [create_default_slot_17] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(list.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(list.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(list, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const list_changes = {};

			if (dirty[0] & /*clicked*/ 1 | dirty[1] & /*$$scope*/ 134217728) {
				list_changes.$$scope = { dirty, ctx };
			}

			list.$set(list_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(list.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(list.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(list, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_16.name,
		type: "slot",
		source: "(305:12) <Menu bind:this={menu} anchorCorner=\\\"TOP_LEFT\\\">",
		ctx
	});

	return block;
}

// (292:8) <Group variant="raised">
function create_default_slot_15(ctx) {
	let t0;
	let div;
	let t1;
	let GroupItem_action;
	let current;

	const button0 = new Button({
			props: {
				variant: "raised",
				$$slots: { default: [create_default_slot_26] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button0.$on("click", /*click_handler_43*/ ctx[46]);

	const button1 = new Button({
			props: {
				variant: "raised",
				style: "padding: 0; min-width: 36px;",
				$$slots: { default: [create_default_slot_24] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1.$on("click", /*click_handler_44*/ ctx[47]);

	let menu_1_props = {
		anchorCorner: "TOP_LEFT",
		$$slots: { default: [create_default_slot_16] },
		$$scope: { ctx }
	};

	const menu_1 = new Menu({ props: menu_1_props, $$inline: true });
	/*menu_1_binding*/ ctx[51](menu_1);

	const block = {
		c: function create() {
			create_component(button0.$$.fragment);
			t0 = space();
			div = element("div");
			create_component(button1.$$.fragment);
			t1 = space();
			create_component(menu_1.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			claim_component(button0.$$.fragment, nodes);
			t0 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(button1.$$.fragment, div_nodes);
			t1 = claim_space(div_nodes);
			claim_component(menu_1.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "svelte-1aw35an");
			add_location(div, file$b, 295, 10, 10099);
		},
		m: function mount(target, anchor) {
			mount_component(button0, target, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);
			mount_component(button1, div, null);
			append_dev(div, t1);
			mount_component(menu_1, div, null);
			GroupItem_action = GroupItem.call(null, div) || ({});
			current = true;
		},
		p: function update(ctx, dirty) {
			const button0_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button1_changes.$$scope = { dirty, ctx };
			}

			button1.$set(button1_changes);
			const menu_1_changes = {};

			if (dirty[0] & /*clicked*/ 1 | dirty[1] & /*$$scope*/ 134217728) {
				menu_1_changes.$$scope = { dirty, ctx };
			}

			menu_1.$set(menu_1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button0.$$.fragment, local);
			transition_in(button1.$$.fragment, local);
			transition_in(menu_1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button0.$$.fragment, local);
			transition_out(button1.$$.fragment, local);
			transition_out(menu_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(button0, detaching);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div);
			destroy_component(button1);
			/*menu_1_binding*/ ctx[51](null);
			destroy_component(menu_1);
			if (GroupItem_action && is_function(GroupItem_action.destroy)) GroupItem_action.destroy();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_15.name,
		type: "slot",
		source: "(292:8) <Group variant=\\\"raised\\\">",
		ctx
	});

	return block;
}

// (325:12) <Label>
function create_default_slot_14(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Do the thing");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Do the thing");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_14.name,
		type: "slot",
		source: "(325:12) <Label>",
		ctx
	});

	return block;
}

// (324:10) <Button on:click={() => clicked++} variant="outlined">
function create_default_slot_13(ctx) {
	let current;

	const label = new Label({
			props: {
				$$slots: { default: [create_default_slot_14] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_13.name,
		type: "slot",
		source: "(324:10) <Button on:click={() => clicked++} variant=\\\"outlined\\\">",
		ctx
	});

	return block;
}

// (332:14) <Icon class="material-icons" style="margin: 0;">
function create_default_slot_12(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("arrow_drop_down");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "arrow_drop_down");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_12.name,
		type: "slot",
		source: "(332:14) <Icon class=\\\"material-icons\\\" style=\\\"margin: 0;\\\">",
		ctx
	});

	return block;
}

// (328:12) <Button                on:click={() => menu2.setOpen(true)}                variant="outlined"                style="padding: 0; min-width: 36px;">
function create_default_slot_11(ctx) {
	let current;

	const icon = new Icon({
			props: {
				class: "material-icons",
				style: "margin: 0;",
				$$slots: { default: [create_default_slot_12] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(icon.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(icon.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(icon, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const icon_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				icon_changes.$$scope = { dirty, ctx };
			}

			icon.$set(icon_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(icon.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(icon.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(icon, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_11.name,
		type: "slot",
		source: "(328:12) <Button                on:click={() => menu2.setOpen(true)}                variant=\\\"outlined\\\"                style=\\\"padding: 0; min-width: 36px;\\\">",
		ctx
	});

	return block;
}

// (339:18) <Text>
function create_default_slot_10(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Thing 1");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Thing 1");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_10.name,
		type: "slot",
		source: "(339:18) <Text>",
		ctx
	});

	return block;
}

// (338:16) <Item on:SMUI:action={() => clicked++}>
function create_default_slot_9(ctx) {
	let current;

	const text_1 = new Text({
			props: {
				$$slots: { default: [create_default_slot_10] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(text_1.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(text_1.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(text_1, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const text_1_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				text_1_changes.$$scope = { dirty, ctx };
			}

			text_1.$set(text_1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(text_1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(text_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(text_1, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_9.name,
		type: "slot",
		source: "(338:16) <Item on:SMUI:action={() => clicked++}>",
		ctx
	});

	return block;
}

// (342:18) <Text>
function create_default_slot_8(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Thing 2");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Thing 2");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_8.name,
		type: "slot",
		source: "(342:18) <Text>",
		ctx
	});

	return block;
}

// (341:16) <Item on:SMUI:action={() => clicked++}>
function create_default_slot_7(ctx) {
	let current;

	const text_1 = new Text({
			props: {
				$$slots: { default: [create_default_slot_8] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(text_1.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(text_1.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(text_1, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const text_1_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				text_1_changes.$$scope = { dirty, ctx };
			}

			text_1.$set(text_1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(text_1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(text_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(text_1, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_7.name,
		type: "slot",
		source: "(341:16) <Item on:SMUI:action={() => clicked++}>",
		ctx
	});

	return block;
}

// (346:18) <Text>
function create_default_slot_6(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Thing 3");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Thing 3");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_6.name,
		type: "slot",
		source: "(346:18) <Text>",
		ctx
	});

	return block;
}

// (345:16) <Item on:SMUI:action={() => clicked++}>
function create_default_slot_5(ctx) {
	let current;

	const text_1 = new Text({
			props: {
				$$slots: { default: [create_default_slot_6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(text_1.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(text_1.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(text_1, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const text_1_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				text_1_changes.$$scope = { dirty, ctx };
			}

			text_1.$set(text_1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(text_1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(text_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(text_1, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_5.name,
		type: "slot",
		source: "(345:16) <Item on:SMUI:action={() => clicked++}>",
		ctx
	});

	return block;
}

// (337:14) <List>
function create_default_slot_4(ctx) {
	let t0;
	let t1;
	let t2;
	let current;

	const item0 = new Item({
			props: {
				$$slots: { default: [create_default_slot_9] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	item0.$on("SMUI:action", /*SMUI_action_handler_3*/ ctx[54]);

	const item1 = new Item({
			props: {
				$$slots: { default: [create_default_slot_7] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	item1.$on("SMUI:action", /*SMUI_action_handler_4*/ ctx[55]);
	const separator = new Separator({ $$inline: true });

	const item2 = new Item({
			props: {
				$$slots: { default: [create_default_slot_5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	item2.$on("SMUI:action", /*SMUI_action_handler_5*/ ctx[56]);

	const block = {
		c: function create() {
			create_component(item0.$$.fragment);
			t0 = space();
			create_component(item1.$$.fragment);
			t1 = space();
			create_component(separator.$$.fragment);
			t2 = space();
			create_component(item2.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(item0.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(item1.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(separator.$$.fragment, nodes);
			t2 = claim_space(nodes);
			claim_component(item2.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(item0, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(item1, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(separator, target, anchor);
			insert_dev(target, t2, anchor);
			mount_component(item2, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const item0_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				item0_changes.$$scope = { dirty, ctx };
			}

			item0.$set(item0_changes);
			const item1_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				item1_changes.$$scope = { dirty, ctx };
			}

			item1.$set(item1_changes);
			const item2_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				item2_changes.$$scope = { dirty, ctx };
			}

			item2.$set(item2_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(item0.$$.fragment, local);
			transition_in(item1.$$.fragment, local);
			transition_in(separator.$$.fragment, local);
			transition_in(item2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(item0.$$.fragment, local);
			transition_out(item1.$$.fragment, local);
			transition_out(separator.$$.fragment, local);
			transition_out(item2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(item0, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(item1, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(separator, detaching);
			if (detaching) detach_dev(t2);
			destroy_component(item2, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_4.name,
		type: "slot",
		source: "(337:14) <List>",
		ctx
	});

	return block;
}

// (336:12) <Menu bind:this={menu2} anchorCorner="TOP_LEFT">
function create_default_slot_3(ctx) {
	let current;

	const list = new List({
			props: {
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(list.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(list.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(list, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const list_changes = {};

			if (dirty[0] & /*clicked*/ 1 | dirty[1] & /*$$scope*/ 134217728) {
				list_changes.$$scope = { dirty, ctx };
			}

			list.$set(list_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(list.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(list.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(list, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3.name,
		type: "slot",
		source: "(336:12) <Menu bind:this={menu2} anchorCorner=\\\"TOP_LEFT\\\">",
		ctx
	});

	return block;
}

// (323:8) <Group variant="outlined">
function create_default_slot_2(ctx) {
	let t0;
	let div;
	let t1;
	let GroupItem_action;
	let current;

	const button0 = new Button({
			props: {
				variant: "outlined",
				$$slots: { default: [create_default_slot_13] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button0.$on("click", /*click_handler_45*/ ctx[52]);

	const button1 = new Button({
			props: {
				variant: "outlined",
				style: "padding: 0; min-width: 36px;",
				$$slots: { default: [create_default_slot_11] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1.$on("click", /*click_handler_46*/ ctx[53]);

	let menu_1_props = {
		anchorCorner: "TOP_LEFT",
		$$slots: { default: [create_default_slot_3] },
		$$scope: { ctx }
	};

	const menu_1 = new Menu({ props: menu_1_props, $$inline: true });
	/*menu_1_binding_1*/ ctx[57](menu_1);

	const block = {
		c: function create() {
			create_component(button0.$$.fragment);
			t0 = space();
			div = element("div");
			create_component(button1.$$.fragment);
			t1 = space();
			create_component(menu_1.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			claim_component(button0.$$.fragment, nodes);
			t0 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(button1.$$.fragment, div_nodes);
			t1 = claim_space(div_nodes);
			claim_component(menu_1.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "svelte-1aw35an");
			add_location(div, file$b, 326, 10, 11217);
		},
		m: function mount(target, anchor) {
			mount_component(button0, target, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);
			mount_component(button1, div, null);
			append_dev(div, t1);
			mount_component(menu_1, div, null);
			GroupItem_action = GroupItem.call(null, div) || ({});
			current = true;
		},
		p: function update(ctx, dirty) {
			const button0_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty[1] & /*$$scope*/ 134217728) {
				button1_changes.$$scope = { dirty, ctx };
			}

			button1.$set(button1_changes);
			const menu_1_changes = {};

			if (dirty[0] & /*clicked*/ 1 | dirty[1] & /*$$scope*/ 134217728) {
				menu_1_changes.$$scope = { dirty, ctx };
			}

			menu_1.$set(menu_1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button0.$$.fragment, local);
			transition_in(button1.$$.fragment, local);
			transition_in(menu_1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button0.$$.fragment, local);
			transition_out(button1.$$.fragment, local);
			transition_out(menu_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(button0, detaching);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div);
			destroy_component(button1);
			/*menu_1_binding_1*/ ctx[57](null);
			destroy_component(menu_1);
			if (GroupItem_action && is_function(GroupItem_action.destroy)) GroupItem_action.destroy();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2.name,
		type: "slot",
		source: "(323:8) <Group variant=\\\"outlined\\\">",
		ctx
	});

	return block;
}

// (322:6) <div slot="horizontal" class="mr-8 mb-8">
function create_horizontal_slot(ctx) {
	let div0;
	let div1;
	let current;

	const group0 = new Group({
			props: {
				variant: "raised",
				$$slots: { default: [create_default_slot_15] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const group1 = new Group({
			props: {
				variant: "outlined",
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div0 = element("div");
			create_component(group0.$$.fragment);
			div1 = element("div");
			create_component(group1.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div0_nodes = children(div0);
			claim_component(group0.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			div1 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div1_nodes = children(div1);
			claim_component(group1.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "slot", "horizontal");
			attr_dev(div0, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div0, file$b, 290, 6, 9886);
			attr_dev(div1, "slot", "horizontal");
			attr_dev(div1, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div1, file$b, 321, 6, 11000);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			mount_component(group0, div0, null);
			insert_dev(target, div1, anchor);
			mount_component(group1, div1, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const group0_changes = {};

			if (dirty[0] & /*menu, clicked*/ 3 | dirty[1] & /*$$scope*/ 134217728) {
				group0_changes.$$scope = { dirty, ctx };
			}

			group0.$set(group0_changes);
			const group1_changes = {};

			if (dirty[0] & /*menu2, clicked*/ 5 | dirty[1] & /*$$scope*/ 134217728) {
				group1_changes.$$scope = { dirty, ctx };
			}

			group1.$set(group1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(group0.$$.fragment, local);
			transition_in(group1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(group0.$$.fragment, local);
			transition_out(group1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			destroy_component(group0);
			if (detaching) detach_dev(div1);
			destroy_component(group1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_horizontal_slot.name,
		type: "slot",
		source: "(322:6) <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">",
		ctx
	});

	return block;
}

// (289:4) <Example>
function create_default_slot_1(ctx) {
	let t0;
	let t1;

	const block = {
		c: function create() {
			t0 = space();
			t1 = space();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			t1 = claim_space(nodes);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, t1, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(t1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1.name,
		type: "slot",
		source: "(289:4) <Example>",
		ctx
	});

	return block;
}

// (37:2) <div slot="content">
function create_content_slot(ctx) {
	let div;
	let t0;
	let t1;
	let t2;
	let t3;
	let t4;
	let t5;
	let t6;
	let current;

	const example0 = new Example({
			props: {
				$$slots: {
					default: [create_default_slot_125],
					horizontal: [create_horizontal_slot_6],
					header: [create_header_slot_7]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const example1 = new Example({
			props: {
				$$slots: {
					default: [create_default_slot_118],
					horizontal: [create_horizontal_slot_5],
					header: [create_header_slot_6]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const example2 = new Example({
			props: {
				$$slots: {
					default: [create_default_slot_111],
					horizontal: [create_horizontal_slot_4],
					header: [create_header_slot_5]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const example3 = new Example({
			props: {
				$$slots: {
					default: [create_default_slot_80],
					horizontal: [create_horizontal_slot_3],
					header: [create_header_slot_4]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const example4 = new Example({
			props: {
				$$slots: {
					default: [create_default_slot_67],
					horizontal: [create_horizontal_slot_2],
					header: [create_header_slot_3]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const example5 = new Example({
			props: {
				$$slots: {
					default: [create_default_slot_38],
					horizontal: [create_horizontal_slot_1],
					header: [create_header_slot_2]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const example6 = new Example({
			props: {
				$$slots: {
					default: [create_default_slot_28],
					vertical: [create_vertical_slot],
					header: [create_header_slot_1]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const example7 = new Example({
			props: {
				$$slots: {
					default: [create_default_slot_1],
					horizontal: [create_horizontal_slot],
					header: [create_header_slot]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div = element("div");
			create_component(example0.$$.fragment);
			t0 = space();
			create_component(example1.$$.fragment);
			t1 = space();
			create_component(example2.$$.fragment);
			t2 = space();
			create_component(example3.$$.fragment);
			t3 = space();
			create_component(example4.$$.fragment);
			t4 = space();
			create_component(example5.$$.fragment);
			t5 = space();
			create_component(example6.$$.fragment);
			t6 = space();
			create_component(example7.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { slot: true, class: true });
			var div_nodes = children(div);
			claim_component(example0.$$.fragment, div_nodes);
			t0 = claim_space(div_nodes);
			claim_component(example1.$$.fragment, div_nodes);
			t1 = claim_space(div_nodes);
			claim_component(example2.$$.fragment, div_nodes);
			t2 = claim_space(div_nodes);
			claim_component(example3.$$.fragment, div_nodes);
			t3 = claim_space(div_nodes);
			claim_component(example4.$$.fragment, div_nodes);
			t4 = claim_space(div_nodes);
			claim_component(example5.$$.fragment, div_nodes);
			t5 = claim_space(div_nodes);
			claim_component(example6.$$.fragment, div_nodes);
			t6 = claim_space(div_nodes);
			claim_component(example7.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "slot", "content");
			attr_dev(div, "class", "svelte-1aw35an");
			add_location(div, file$b, 36, 2, 874);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(example0, div, null);
			append_dev(div, t0);
			mount_component(example1, div, null);
			append_dev(div, t1);
			mount_component(example2, div, null);
			append_dev(div, t2);
			mount_component(example3, div, null);
			append_dev(div, t3);
			mount_component(example4, div, null);
			append_dev(div, t4);
			mount_component(example5, div, null);
			append_dev(div, t5);
			mount_component(example6, div, null);
			append_dev(div, t6);
			mount_component(example7, div, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const example0_changes = {};

			if (dirty[0] & /*clicked*/ 1 | dirty[1] & /*$$scope*/ 134217728) {
				example0_changes.$$scope = { dirty, ctx };
			}

			example0.$set(example0_changes);
			const example1_changes = {};

			if (dirty[0] & /*clicked*/ 1 | dirty[1] & /*$$scope*/ 134217728) {
				example1_changes.$$scope = { dirty, ctx };
			}

			example1.$set(example1_changes);
			const example2_changes = {};

			if (dirty[0] & /*clicked*/ 1 | dirty[1] & /*$$scope*/ 134217728) {
				example2_changes.$$scope = { dirty, ctx };
			}

			example2.$set(example2_changes);
			const example3_changes = {};

			if (dirty[0] & /*clicked*/ 1 | dirty[1] & /*$$scope*/ 134217728) {
				example3_changes.$$scope = { dirty, ctx };
			}

			example3.$set(example3_changes);
			const example4_changes = {};

			if (dirty[0] & /*clicked*/ 1 | dirty[1] & /*$$scope*/ 134217728) {
				example4_changes.$$scope = { dirty, ctx };
			}

			example4.$set(example4_changes);
			const example5_changes = {};

			if (dirty[0] & /*clicked*/ 1 | dirty[1] & /*$$scope*/ 134217728) {
				example5_changes.$$scope = { dirty, ctx };
			}

			example5.$set(example5_changes);
			const example6_changes = {};

			if (dirty[0] & /*clicked*/ 1 | dirty[1] & /*$$scope*/ 134217728) {
				example6_changes.$$scope = { dirty, ctx };
			}

			example6.$set(example6_changes);
			const example7_changes = {};

			if (dirty[0] & /*menu2, clicked, menu*/ 7 | dirty[1] & /*$$scope*/ 134217728) {
				example7_changes.$$scope = { dirty, ctx };
			}

			example7.$set(example7_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(example0.$$.fragment, local);
			transition_in(example1.$$.fragment, local);
			transition_in(example2.$$.fragment, local);
			transition_in(example3.$$.fragment, local);
			transition_in(example4.$$.fragment, local);
			transition_in(example5.$$.fragment, local);
			transition_in(example6.$$.fragment, local);
			transition_in(example7.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(example0.$$.fragment, local);
			transition_out(example1.$$.fragment, local);
			transition_out(example2.$$.fragment, local);
			transition_out(example3.$$.fragment, local);
			transition_out(example4.$$.fragment, local);
			transition_out(example5.$$.fragment, local);
			transition_out(example6.$$.fragment, local);
			transition_out(example7.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(example0);
			destroy_component(example1);
			destroy_component(example2);
			destroy_component(example3);
			destroy_component(example4);
			destroy_component(example5);
			destroy_component(example6);
			destroy_component(example7);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_content_slot.name,
		type: "slot",
		source: "(37:2) <div slot=\\\"content\\\">",
		ctx
	});

	return block;
}

// (27:0) <Page>
function create_default_slot$2(ctx) {
	let t0;
	let t1;
	let t2;

	const block = {
		c: function create() {
			t0 = space();
			t1 = space();
			t2 = space();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			t1 = claim_space(nodes);
			t2 = claim_space(nodes);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, t2, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(t2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$2.name,
		type: "slot",
		source: "(27:0) <Page>",
		ctx
	});

	return block;
}

function create_fragment$d(ctx) {
	let current;

	const page = new Page({
			props: {
				$$slots: {
					default: [create_default_slot$2],
					content: [create_content_slot],
					import: [create_import_slot],
					description: [create_description_slot],
					header: [create_header_slot_8]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(page.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(page.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(page, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const page_changes = {};

			if (dirty[0] & /*menu2, clicked, menu*/ 7 | dirty[1] & /*$$scope*/ 134217728) {
				page_changes.$$scope = { dirty, ctx };
			}

			page.$set(page_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(page.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(page.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(page, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$d.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$d($$self, $$props, $$invalidate) {
	let clicked = 0;
	let menu;
	let menu2;
	const click_handler = () => $$invalidate(0, clicked++, clicked);
	const click_handler_1 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_2 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_3 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_4 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_5 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_6 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_7 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_8 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_9 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_10 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_11 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_12 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_13 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_14 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_15 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_16 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_17 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_18 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_19 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_20 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_21 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_22 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_23 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_24 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_25 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_26 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_27 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_28 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_29 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_30 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_31 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_32 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_33 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_34 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_35 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_36 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_37 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_38 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_39 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_40 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_41 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_42 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_43 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_44 = () => menu.setOpen(true);
	const SMUI_action_handler = () => $$invalidate(0, clicked++, clicked);
	const SMUI_action_handler_1 = () => $$invalidate(0, clicked++, clicked);
	const SMUI_action_handler_2 = () => $$invalidate(0, clicked++, clicked);

	function menu_1_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(1, menu = $$value);
		});
	}

	const click_handler_45 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_46 = () => menu2.setOpen(true);
	const SMUI_action_handler_3 = () => $$invalidate(0, clicked++, clicked);
	const SMUI_action_handler_4 = () => $$invalidate(0, clicked++, clicked);
	const SMUI_action_handler_5 = () => $$invalidate(0, clicked++, clicked);

	function menu_1_binding_1($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(2, menu2 = $$value);
		});
	}

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("clicked" in $$props) $$invalidate(0, clicked = $$props.clicked);
		if ("menu" in $$props) $$invalidate(1, menu = $$props.menu);
		if ("menu2" in $$props) $$invalidate(2, menu2 = $$props.menu2);
	};

	return [
		clicked,
		menu,
		menu2,
		click_handler,
		click_handler_1,
		click_handler_2,
		click_handler_3,
		click_handler_4,
		click_handler_5,
		click_handler_6,
		click_handler_7,
		click_handler_8,
		click_handler_9,
		click_handler_10,
		click_handler_11,
		click_handler_12,
		click_handler_13,
		click_handler_14,
		click_handler_15,
		click_handler_16,
		click_handler_17,
		click_handler_18,
		click_handler_19,
		click_handler_20,
		click_handler_21,
		click_handler_22,
		click_handler_23,
		click_handler_24,
		click_handler_25,
		click_handler_26,
		click_handler_27,
		click_handler_28,
		click_handler_29,
		click_handler_30,
		click_handler_31,
		click_handler_32,
		click_handler_33,
		click_handler_34,
		click_handler_35,
		click_handler_36,
		click_handler_37,
		click_handler_38,
		click_handler_39,
		click_handler_40,
		click_handler_41,
		click_handler_42,
		click_handler_43,
		click_handler_44,
		SMUI_action_handler,
		SMUI_action_handler_1,
		SMUI_action_handler_2,
		menu_1_binding,
		click_handler_45,
		click_handler_46,
		SMUI_action_handler_3,
		SMUI_action_handler_4,
		SMUI_action_handler_5,
		menu_1_binding_1
	];
}

class ButtonPage extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$d, create_fragment$d, safe_not_equal, {}, [-1, -1]);

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ButtonPage",
			options,
			id: create_fragment$d.name
		});
	}
}

export default ButtonPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uUGFnZS42MzYwM2NiZC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWluamVjdC9kaXN0L3N0eWxlLWluamVjdC5lcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vZm9yd2FyZEV2ZW50cy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vZXhjbHVkZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vdXNlQWN0aW9ucy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL3V0aWwuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kb20vZXZlbnRzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kb20vcG9ueWZpbGwuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9jb25zdGFudHMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvY29tcG9uZW50LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL3JpcHBsZS9SaXBwbGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNtdWkvYnV0dG9uL0J1dHRvbi5zdmVsdGUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNtdWkvYnV0dG9uL0dyb3VwLnN2ZWx0ZSIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS9idXR0b24vR3JvdXBJdGVtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9MYWJlbC5zdmVsdGUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL0ljb24uc3ZlbHRlIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9tZW51LXN1cmZhY2UvY29uc3RhbnRzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9saXN0L2NvbnN0YW50cy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbGlzdC9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9saXN0L2NvbXBvbmVudC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbWVudS1zdXJmYWNlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL21lbnUtc3VyZmFjZS91dGlsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9tZW51LXN1cmZhY2UvY29tcG9uZW50LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9tZW51L2NvbnN0YW50cy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbWVudS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9tZW51L2NvbXBvbmVudC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS9tZW51LXN1cmZhY2UvTWVudVN1cmZhY2Uuc3ZlbHRlIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL21lbnUvTWVudS5zdmVsdGUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL0NsYXNzQWRkZXIuc3ZlbHRlIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9jbGFzc0FkZGVyQnVpbGRlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vU3Bhbi5zdmVsdGUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNtdWkvbGlzdC9HcmFwaGljLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL21lbnUvU2VsZWN0aW9uR3JvdXBJY29uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL2xpc3QvTGlzdC5zdmVsdGUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNtdWkvbGlzdC9JdGVtLnN2ZWx0ZSIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS9saXN0L1RleHQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNtdWkvbGlzdC9QcmltYXJ5VGV4dC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS9saXN0L1NlY29uZGFyeVRleHQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNtdWkvbGlzdC9NZXRhLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9EaXYuc3ZlbHRlIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL2xpc3QvR3JvdXAuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL0gzLnN2ZWx0ZSIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS9saXN0L1N1YmhlYWRlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS9saXN0L1NlcGFyYXRvci5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL0J1dHRvblBhZ2Uuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHN0eWxlSW5qZWN0KGNzcywgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSB7fTtcbiAgdmFyIGluc2VydEF0ID0gcmVmLmluc2VydEF0O1xuXG4gIGlmICghY3NzIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuOyB9XG5cbiAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gIGlmIChpbnNlcnRBdCA9PT0gJ3RvcCcpIHtcbiAgICBpZiAoaGVhZC5maXJzdENoaWxkKSB7XG4gICAgICBoZWFkLmluc2VydEJlZm9yZShzdHlsZSwgaGVhZC5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVJbmplY3Q7XG4iLCJpbXBvcnQge2J1YmJsZSwgbGlzdGVufSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZEV2ZW50c0J1aWxkZXIoY29tcG9uZW50LCBhZGRpdGlvbmFsRXZlbnRzID0gW10pIHtcbiAgY29uc3QgZXZlbnRzID0gW1xuICAgICdmb2N1cycsICdibHVyJyxcbiAgICAnZnVsbHNjcmVlbmNoYW5nZScsICdmdWxsc2NyZWVuZXJyb3InLCAnc2Nyb2xsJyxcbiAgICAnY3V0JywgJ2NvcHknLCAncGFzdGUnLFxuICAgICdrZXlkb3duJywgJ2tleXByZXNzJywgJ2tleXVwJyxcbiAgICAnYXV4Y2xpY2snLCAnY2xpY2snLCAnY29udGV4dG1lbnUnLCAnZGJsY2xpY2snLCAnbW91c2Vkb3duJywgJ21vdXNlZW50ZXInLCAnbW91c2VsZWF2ZScsICdtb3VzZW1vdmUnLCAnbW91c2VvdmVyJywgJ21vdXNlb3V0JywgJ21vdXNldXAnLCAncG9pbnRlcmxvY2tjaGFuZ2UnLCAncG9pbnRlcmxvY2tlcnJvcicsICdzZWxlY3QnLCAnd2hlZWwnLFxuICAgICdkcmFnJywgJ2RyYWdlbmQnLCAnZHJhZ2VudGVyJywgJ2RyYWdzdGFydCcsICdkcmFnbGVhdmUnLCAnZHJhZ292ZXInLCAnZHJvcCcsXG4gICAgJ3RvdWNoY2FuY2VsJywgJ3RvdWNoZW5kJywgJ3RvdWNobW92ZScsICd0b3VjaHN0YXJ0JyxcbiAgICAncG9pbnRlcm92ZXInLCAncG9pbnRlcmVudGVyJywgJ3BvaW50ZXJkb3duJywgJ3BvaW50ZXJtb3ZlJywgJ3BvaW50ZXJ1cCcsICdwb2ludGVyY2FuY2VsJywgJ3BvaW50ZXJvdXQnLCAncG9pbnRlcmxlYXZlJywgJ2dvdHBvaW50ZXJjYXB0dXJlJywgJ2xvc3Rwb2ludGVyY2FwdHVyZScsXG4gICAgLi4uYWRkaXRpb25hbEV2ZW50c1xuICBdO1xuXG4gIGZ1bmN0aW9uIGZvcndhcmQoZSkge1xuICAgIGJ1YmJsZShjb21wb25lbnQsIGUpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGUgPT4ge1xuICAgIGNvbnN0IGRlc3RydWN0b3JzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgZGVzdHJ1Y3RvcnMucHVzaChsaXN0ZW4obm9kZSwgZXZlbnRzW2ldLCBmb3J3YXJkKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRlc3Ryb3k6ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZXN0cnVjdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGRlc3RydWN0b3JzW2ldKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGV4Y2x1ZGUob2JqLCBrZXlzKSB7XG4gIGxldCBuYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaik7XG4gIGNvbnN0IG5ld09iaiA9IHt9O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBuYW1lID0gbmFtZXNbaV07XG4gICAgY29uc3QgY2FzaEluZGV4ID0gbmFtZS5pbmRleE9mKCckJyk7XG4gICAgaWYgKGNhc2hJbmRleCAhPT0gLTEgJiYga2V5cy5pbmRleE9mKG5hbWUuc3Vic3RyaW5nKDAsIGNhc2hJbmRleCArIDEpKSAhPT0gLTEpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoa2V5cy5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIG5ld09ialtuYW1lXSA9IG9ialtuYW1lXTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHVzZUFjdGlvbnMobm9kZSwgYWN0aW9ucykge1xuICBsZXQgb2JqZWN0cyA9IFtdO1xuXG4gIGlmIChhY3Rpb25zKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShhY3Rpb25zW2ldKTtcbiAgICAgIGNvbnN0IGFjdGlvbiA9IGlzQXJyYXkgPyBhY3Rpb25zW2ldWzBdIDogYWN0aW9uc1tpXTtcbiAgICAgIGlmIChpc0FycmF5ICYmIGFjdGlvbnNbaV0ubGVuZ3RoID4gMSkge1xuICAgICAgICBvYmplY3RzLnB1c2goYWN0aW9uKG5vZGUsIGFjdGlvbnNbaV1bMV0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9iamVjdHMucHVzaChhY3Rpb24obm9kZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdXBkYXRlKGFjdGlvbnMpIHtcbiAgICAgIGlmICgoYWN0aW9ucyAmJiBhY3Rpb25zLmxlbmd0aCB8fCAwKSAhPSBvYmplY3RzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IG5vdCBjaGFuZ2UgdGhlIGxlbmd0aCBvZiBhbiBhY3Rpb25zIGFycmF5LicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aW9ucykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAob2JqZWN0c1tpXSAmJiAndXBkYXRlJyBpbiBvYmplY3RzW2ldKSB7XG4gICAgICAgICAgICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShhY3Rpb25zW2ldKTtcbiAgICAgICAgICAgIGlmIChpc0FycmF5ICYmIGFjdGlvbnNbaV0ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICBvYmplY3RzW2ldLnVwZGF0ZShhY3Rpb25zW2ldWzFdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG9iamVjdHNbaV0udXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG9iamVjdHNbaV0gJiYgJ2Rlc3Ryb3knIGluIG9iamVjdHNbaV0pIHtcbiAgICAgICAgICBvYmplY3RzW2ldLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSIsIi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIHN1cHBvcnRzQ3NzVmFyaWFibGVzIHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nIHRvXG4gKiBkZXRlY3QgQ1NTIGN1c3RvbSB2YXJpYWJsZSBzdXBwb3J0LlxuICovXG52YXIgc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuZnVuY3Rpb24gZGV0ZWN0RWRnZVBzZXVkb1ZhckJ1Zyh3aW5kb3dPYmopIHtcbiAgICAvLyBEZXRlY3QgdmVyc2lvbnMgb2YgRWRnZSB3aXRoIGJ1Z2d5IHZhcigpIHN1cHBvcnRcbiAgICAvLyBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzExNDk1NDQ4L1xuICAgIHZhciBkb2N1bWVudCA9IHdpbmRvd09iai5kb2N1bWVudDtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5vZGUuY2xhc3NOYW1lID0gJ21kYy1yaXBwbGUtc3VyZmFjZS0tdGVzdC1lZGdlLXZhci1idWcnO1xuICAgIC8vIEFwcGVuZCB0byBoZWFkIGluc3RlYWQgb2YgYm9keSBiZWNhdXNlIHRoaXMgc2NyaXB0IG1pZ2h0IGJlIGludm9rZWQgaW4gdGhlXG4gICAgLy8gaGVhZCwgaW4gd2hpY2ggY2FzZSB0aGUgYm9keSBkb2Vzbid0IGV4aXN0IHlldC4gVGhlIHByb2JlIHdvcmtzIGVpdGhlciB3YXkuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAvLyBUaGUgYnVnIGV4aXN0cyBpZiA6OmJlZm9yZSBzdHlsZSBlbmRzIHVwIHByb3BhZ2F0aW5nIHRvIHRoZSBwYXJlbnQgZWxlbWVudC5cbiAgICAvLyBBZGRpdGlvbmFsbHksIGdldENvbXB1dGVkU3R5bGUgcmV0dXJucyBudWxsIGluIGlmcmFtZXMgd2l0aCBkaXNwbGF5OiBcIm5vbmVcIiBpbiBGaXJlZm94LFxuICAgIC8vIGJ1dCBGaXJlZm94IGlzIGtub3duIHRvIHN1cHBvcnQgQ1NTIGN1c3RvbSBwcm9wZXJ0aWVzIGNvcnJlY3RseS5cbiAgICAvLyBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTU0ODM5N1xuICAgIHZhciBjb21wdXRlZFN0eWxlID0gd2luZG93T2JqLmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgdmFyIGhhc1BzZXVkb1ZhckJ1ZyA9IGNvbXB1dGVkU3R5bGUgIT09IG51bGwgJiYgY29tcHV0ZWRTdHlsZS5ib3JkZXJUb3BTdHlsZSA9PT0gJ3NvbGlkJztcbiAgICBpZiAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc1BzZXVkb1ZhckJ1Zztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3dPYmosIGZvcmNlUmVmcmVzaCkge1xuICAgIGlmIChmb3JjZVJlZnJlc2ggPT09IHZvaWQgMCkgeyBmb3JjZVJlZnJlc2ggPSBmYWxzZTsgfVxuICAgIHZhciBDU1MgPSB3aW5kb3dPYmouQ1NTO1xuICAgIHZhciBzdXBwb3J0c0Nzc1ZhcnMgPSBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG4gICAgaWYgKHR5cGVvZiBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPT09ICdib29sZWFuJyAmJiAhZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG4gICAgfVxuICAgIHZhciBzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCA9IENTUyAmJiB0eXBlb2YgQ1NTLnN1cHBvcnRzID09PSAnZnVuY3Rpb24nO1xuICAgIGlmICghc3VwcG9ydHNGdW5jdGlvblByZXNlbnQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyA9IENTUy5zdXBwb3J0cygnLS1jc3MtdmFycycsICd5ZXMnKTtcbiAgICAvLyBTZWU6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTQ2NjlcbiAgICAvLyBTZWU6IFJFQURNRSBzZWN0aW9uIG9uIFNhZmFyaVxuICAgIHZhciB3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMgPSAoQ1NTLnN1cHBvcnRzKCcoLS1jc3MtdmFyczogeWVzKScpICYmXG4gICAgICAgIENTUy5zdXBwb3J0cygnY29sb3InLCAnIzAwMDAwMDAwJykpO1xuICAgIGlmIChleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzIHx8IHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cykge1xuICAgICAgICBzdXBwb3J0c0Nzc1ZhcnMgPSAhZGV0ZWN0RWRnZVBzZXVkb1ZhckJ1Zyh3aW5kb3dPYmopO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3VwcG9ydHNDc3NWYXJzID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICghZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIHN1cHBvcnRzQ3NzVmFyaWFibGVzXyA9IHN1cHBvcnRzQ3NzVmFycztcbiAgICB9XG4gICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFycztcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoZXZ0LCBwYWdlT2Zmc2V0LCBjbGllbnRSZWN0KSB7XG4gICAgaWYgKCFldnQpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogMCwgeTogMCB9O1xuICAgIH1cbiAgICB2YXIgeCA9IHBhZ2VPZmZzZXQueCwgeSA9IHBhZ2VPZmZzZXQueTtcbiAgICB2YXIgZG9jdW1lbnRYID0geCArIGNsaWVudFJlY3QubGVmdDtcbiAgICB2YXIgZG9jdW1lbnRZID0geSArIGNsaWVudFJlY3QudG9wO1xuICAgIHZhciBub3JtYWxpemVkWDtcbiAgICB2YXIgbm9ybWFsaXplZFk7XG4gICAgLy8gRGV0ZXJtaW5lIHRvdWNoIHBvaW50IHJlbGF0aXZlIHRvIHRoZSByaXBwbGUgY29udGFpbmVyLlxuICAgIGlmIChldnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICAgIHZhciB0b3VjaEV2ZW50ID0gZXZ0O1xuICAgICAgICBub3JtYWxpemVkWCA9IHRvdWNoRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggLSBkb2N1bWVudFg7XG4gICAgICAgIG5vcm1hbGl6ZWRZID0gdG91Y2hFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSAtIGRvY3VtZW50WTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBtb3VzZUV2ZW50ID0gZXZ0O1xuICAgICAgICBub3JtYWxpemVkWCA9IG1vdXNlRXZlbnQucGFnZVggLSBkb2N1bWVudFg7XG4gICAgICAgIG5vcm1hbGl6ZWRZID0gbW91c2VFdmVudC5wYWdlWSAtIGRvY3VtZW50WTtcbiAgICB9XG4gICAgcmV0dXJuIHsgeDogbm9ybWFsaXplZFgsIHk6IG5vcm1hbGl6ZWRZIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsLmpzLm1hcCIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIE1EQ0ZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTURDRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIGlmIChhZGFwdGVyID09PSB2b2lkIDApIHsgYWRhcHRlciA9IHt9OyB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8gPSBhZGFwdGVyO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGV2ZXJ5XG4gICAgICAgICAgICAvLyBDU1MgY2xhc3MgdGhlIGZvdW5kYXRpb24gY2xhc3MgbmVlZHMgYXMgYSBwcm9wZXJ0eS4gZS5nLiB7QUNUSVZFOiAnbWRjLWNvbXBvbmVudC0tYWN0aXZlJ31cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAgICAgICAgIC8vIHNlbWFudGljIHN0cmluZ3MgYXMgY29uc3RhbnRzLiBlLmcuIHtBUklBX1JPTEU6ICd0YWJsaXN0J31cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwibnVtYmVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAgICAgICAgIC8vIG9mIGl0cyBzZW1hbnRpYyBudW1iZXJzIGFzIGNvbnN0YW50cy4gZS5nLiB7QU5JTUFUSU9OX0RFTEFZX01TOiAzNTB9XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIG1heSBjaG9vc2UgdG8gaW1wbGVtZW50IHRoaXMgZ2V0dGVyIGluIG9yZGVyIHRvIHByb3ZpZGUgYSBjb252ZW5pZW50XG4gICAgICAgICAgICAvLyB3YXkgb2Ygdmlld2luZyB0aGUgbmVjZXNzYXJ5IG1ldGhvZHMgb2YgYW4gYWRhcHRlci4gSW4gdGhlIGZ1dHVyZSwgdGhpcyBjb3VsZCBhbHNvIGJlIHVzZWQgZm9yIGFkYXB0ZXJcbiAgICAgICAgICAgIC8vIHZhbGlkYXRpb24uXG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0ZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKHJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgICB9O1xuICAgIE1EQ0ZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gZGUtaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKGRlLXJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgICB9O1xuICAgIHJldHVybiBNRENGb3VuZGF0aW9uO1xufSgpKTtcbmV4cG9ydCB7IE1EQ0ZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uJztcbnZhciBNRENDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTURDQ29tcG9uZW50KHJvb3QsIGZvdW5kYXRpb24pIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb290XyA9IHJvb3Q7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCB0c2xpYl8xLl9fc3ByZWFkKGFyZ3MpKTtcbiAgICAgICAgLy8gTm90ZSB0aGF0IHdlIGluaXRpYWxpemUgZm91bmRhdGlvbiBoZXJlIGFuZCBub3Qgd2l0aGluIHRoZSBjb25zdHJ1Y3RvcidzIGRlZmF1bHQgcGFyYW0gc28gdGhhdFxuICAgICAgICAvLyB0aGlzLnJvb3RfIGlzIGRlZmluZWQgYW5kIGNhbiBiZSB1c2VkIHdpdGhpbiB0aGUgZm91bmRhdGlvbiBjbGFzcy5cbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXyA9IGZvdW5kYXRpb24gPT09IHVuZGVmaW5lZCA/IHRoaXMuZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSA6IGZvdW5kYXRpb247XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uaW5pdCgpO1xuICAgICAgICB0aGlzLmluaXRpYWxTeW5jV2l0aERPTSgpO1xuICAgIH1cbiAgICBNRENDb21wb25lbnQuYXR0YWNoVG8gPSBmdW5jdGlvbiAocm9vdCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIHdoaWNoIGV4dGVuZCBNRENCYXNlIHNob3VsZCBwcm92aWRlIGFuIGF0dGFjaFRvKCkgbWV0aG9kIHRoYXQgdGFrZXMgYSByb290IGVsZW1lbnQgYW5kXG4gICAgICAgIC8vIHJldHVybnMgYW4gaW5zdGFudGlhdGVkIGNvbXBvbmVudCB3aXRoIGl0cyByb290IHNldCB0byB0aGF0IGVsZW1lbnQuIEFsc28gbm90ZSB0aGF0IGluIHRoZSBjYXNlcyBvZlxuICAgICAgICAvLyBzdWJjbGFzc2VzLCBhbiBleHBsaWNpdCBmb3VuZGF0aW9uIGNsYXNzIHdpbGwgbm90IGhhdmUgdG8gYmUgcGFzc2VkIGluOyBpdCB3aWxsIHNpbXBseSBiZSBpbml0aWFsaXplZFxuICAgICAgICAvLyBmcm9tIGdldERlZmF1bHRGb3VuZGF0aW9uKCkuXG4gICAgICAgIHJldHVybiBuZXcgTURDQ29tcG9uZW50KHJvb3QsIG5ldyBNRENGb3VuZGF0aW9uKHt9KSk7XG4gICAgfTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogbWV0aG9kIHBhcmFtIG9ubHkgZXhpc3RzIGZvciB0eXBpbmcgcHVycG9zZXM7IGl0IGRvZXMgbm90IG5lZWQgdG8gYmUgdW5pdCB0ZXN0ZWQgKi9cbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgX2FyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTdWJjbGFzc2VzIGNhbiBvdmVycmlkZSB0aGlzIHRvIGRvIGFueSBhZGRpdGlvbmFsIHNldHVwIHdvcmsgdGhhdCB3b3VsZCBiZSBjb25zaWRlcmVkIHBhcnQgb2YgYVxuICAgICAgICAvLyBcImNvbnN0cnVjdG9yXCIuIEVzc2VudGlhbGx5LCBpdCBpcyBhIGhvb2sgaW50byB0aGUgcGFyZW50IGNvbnN0cnVjdG9yIGJlZm9yZSB0aGUgZm91bmRhdGlvbiBpc1xuICAgICAgICAvLyBpbml0aWFsaXplZC4gQW55IGFkZGl0aW9uYWwgYXJndW1lbnRzIGJlc2lkZXMgcm9vdCBhbmQgZm91bmRhdGlvbiB3aWxsIGJlIHBhc3NlZCBpbiBoZXJlLlxuICAgIH07XG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS5nZXREZWZhdWx0Rm91bmRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgZm91bmRhdGlvbiBjbGFzcyBmb3IgdGhlXG4gICAgICAgIC8vIGNvbXBvbmVudC5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdWJjbGFzc2VzIG11c3Qgb3ZlcnJpZGUgZ2V0RGVmYXVsdEZvdW5kYXRpb24gdG8gcmV0dXJuIGEgcHJvcGVybHkgY29uZmlndXJlZCAnICtcbiAgICAgICAgICAgICdmb3VuZGF0aW9uIGNsYXNzJyk7XG4gICAgfTtcbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmluaXRpYWxTeW5jV2l0aERPTSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgaWYgdGhleSBuZWVkIHRvIHBlcmZvcm0gd29yayB0byBzeW5jaHJvbml6ZSB3aXRoIGEgaG9zdCBET01cbiAgICAgICAgLy8gb2JqZWN0LiBBbiBleGFtcGxlIG9mIHRoaXMgd291bGQgYmUgYSBmb3JtIGNvbnRyb2wgd3JhcHBlciB0aGF0IG5lZWRzIHRvIHN5bmNocm9uaXplIGl0cyBpbnRlcm5hbCBzdGF0ZVxuICAgICAgICAvLyB0byBzb21lIHByb3BlcnR5IG9yIGF0dHJpYnV0ZSBvZiB0aGUgaG9zdCBET00uIFBsZWFzZSBub3RlOiB0aGlzIGlzICpub3QqIHRoZSBwbGFjZSB0byBwZXJmb3JtIERPTVxuICAgICAgICAvLyByZWFkcy93cml0ZXMgdGhhdCB3b3VsZCBjYXVzZSBsYXlvdXQgLyBwYWludCwgYXMgdGhpcyBpcyBjYWxsZWQgc3luY2hyb25vdXNseSBmcm9tIHdpdGhpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgfTtcbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgbWF5IGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZWxlYXNlIGFueSByZXNvdXJjZXMgLyBkZXJlZ2lzdGVyIGFueSBsaXN0ZW5lcnMgdGhleSBoYXZlXG4gICAgICAgIC8vIGF0dGFjaGVkLiBBbiBleGFtcGxlIG9mIHRoaXMgbWlnaHQgYmUgZGVyZWdpc3RlcmluZyBhIHJlc2l6ZSBldmVudCBmcm9tIHRoZSB3aW5kb3cgb2JqZWN0LlxuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmRlc3Ryb3koKTtcbiAgICB9O1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUubGlzdGVuID0gZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIH07XG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS51bmxpc3RlbiA9IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEZpcmVzIGEgY3Jvc3MtYnJvd3Nlci1jb21wYXRpYmxlIGN1c3RvbSBldmVudCBmcm9tIHRoZSBjb21wb25lbnQgcm9vdCBvZiB0aGUgZ2l2ZW4gdHlwZSwgd2l0aCB0aGUgZ2l2ZW4gZGF0YS5cbiAgICAgKi9cbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiAoZXZ0VHlwZSwgZXZ0RGF0YSwgc2hvdWxkQnViYmxlKSB7XG4gICAgICAgIGlmIChzaG91bGRCdWJibGUgPT09IHZvaWQgMCkgeyBzaG91bGRCdWJibGUgPSBmYWxzZTsgfVxuICAgICAgICB2YXIgZXZ0O1xuICAgICAgICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgICAgICAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZSxcbiAgICAgICAgICAgICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgICAgICAgZXZ0LmluaXRDdXN0b21FdmVudChldnRUeXBlLCBzaG91bGRCdWJibGUsIGZhbHNlLCBldnREYXRhKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvb3RfLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICB9O1xuICAgIHJldHVybiBNRENDb21wb25lbnQ7XG59KCkpO1xuZXhwb3J0IHsgTURDQ29tcG9uZW50IH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDQ29tcG9uZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gYXBwbHlQYXNzaXZlIHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nIHRvIGRldGVjdFxuICogcGFzc2l2ZSBldmVudCBsaXN0ZW5lciBzdXBwb3J0LlxuICovXG52YXIgc3VwcG9ydHNQYXNzaXZlXztcbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGN1cnJlbnQgYnJvd3NlciBzdXBwb3J0cyBwYXNzaXZlIGV2ZW50IGxpc3RlbmVycywgYW5kXG4gKiBpZiBzbywgdXNlIHRoZW0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVBhc3NpdmUoZ2xvYmFsT2JqLCBmb3JjZVJlZnJlc2gpIHtcbiAgICBpZiAoZ2xvYmFsT2JqID09PSB2b2lkIDApIHsgZ2xvYmFsT2JqID0gd2luZG93OyB9XG4gICAgaWYgKGZvcmNlUmVmcmVzaCA9PT0gdm9pZCAwKSB7IGZvcmNlUmVmcmVzaCA9IGZhbHNlOyB9XG4gICAgaWYgKHN1cHBvcnRzUGFzc2l2ZV8gPT09IHVuZGVmaW5lZCB8fCBmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgdmFyIGlzU3VwcG9ydGVkXzEgPSBmYWxzZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGdsb2JhbE9iai5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LCB7XG4gICAgICAgICAgICAgICAgZ2V0IHBhc3NpdmUoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzU3VwcG9ydGVkXzEgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNTdXBwb3J0ZWRfMTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgfSAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWVtcHR5IGNhbm5vdCB0aHJvdyBlcnJvciBkdWUgdG8gdGVzdHMuIHRzbGludCBhbHNvIGRpc2FibGVzIGNvbnNvbGUubG9nLlxuICAgICAgICBzdXBwb3J0c1Bhc3NpdmVfID0gaXNTdXBwb3J0ZWRfMTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZV8gPyB7IHBhc3NpdmU6IHRydWUgfSA6IGZhbHNlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXZlbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEEgXCJwb255ZmlsbFwiIGlzIGEgcG9seWZpbGwgdGhhdCBkb2Vzbid0IG1vZGlmeSB0aGUgZ2xvYmFsIHByb3RvdHlwZSBjaGFpbi5cbiAqIFRoaXMgbWFrZXMgcG9ueWZpbGxzIHNhZmVyIHRoYW4gdHJhZGl0aW9uYWwgcG9seWZpbGxzLCBlc3BlY2lhbGx5IGZvciBsaWJyYXJpZXMgbGlrZSBNREMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZXN0KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgaWYgKGVsZW1lbnQuY2xvc2VzdCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5jbG9zZXN0KHNlbGVjdG9yKTtcbiAgICB9XG4gICAgdmFyIGVsID0gZWxlbWVudDtcbiAgICB3aGlsZSAoZWwpIHtcbiAgICAgICAgaWYgKG1hdGNoZXMoZWwsIHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9XG4gICAgICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hlcyhlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIHZhciBuYXRpdmVNYXRjaGVzID0gZWxlbWVudC5tYXRjaGVzXG4gICAgICAgIHx8IGVsZW1lbnQud2Via2l0TWF0Y2hlc1NlbGVjdG9yXG4gICAgICAgIHx8IGVsZW1lbnQubXNNYXRjaGVzU2VsZWN0b3I7XG4gICAgcmV0dXJuIG5hdGl2ZU1hdGNoZXMuY2FsbChlbGVtZW50LCBzZWxlY3Rvcik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb255ZmlsbC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmV4cG9ydCB2YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICAvLyBSaXBwbGUgaXMgYSBzcGVjaWFsIGNhc2Ugd2hlcmUgdGhlIFwicm9vdFwiIGNvbXBvbmVudCBpcyByZWFsbHkgYSBcIm1peGluXCIgb2Ygc29ydHMsXG4gICAgLy8gZ2l2ZW4gdGhhdCBpdCdzIGFuICd1cGdyYWRlJyB0byBhbiBleGlzdGluZyBjb21wb25lbnQuIFRoYXQgYmVpbmcgc2FpZCBpdCBpcyB0aGUgcm9vdFxuICAgIC8vIENTUyBjbGFzcyB0aGF0IGFsbCBvdGhlciBDU1MgY2xhc3NlcyBkZXJpdmUgZnJvbS5cbiAgICBCR19GT0NVU0VEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkJyxcbiAgICBGR19BQ1RJVkFUSU9OOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1hY3RpdmF0aW9uJyxcbiAgICBGR19ERUFDVElWQVRJT046ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWRlYWN0aXZhdGlvbicsXG4gICAgUk9PVDogJ21kYy1yaXBwbGUtdXBncmFkZWQnLFxuICAgIFVOQk9VTkRFRDogJ21kYy1yaXBwbGUtdXBncmFkZWQtLXVuYm91bmRlZCcsXG59O1xuZXhwb3J0IHZhciBzdHJpbmdzID0ge1xuICAgIFZBUl9GR19TQ0FMRTogJy0tbWRjLXJpcHBsZS1mZy1zY2FsZScsXG4gICAgVkFSX0ZHX1NJWkU6ICctLW1kYy1yaXBwbGUtZmctc2l6ZScsXG4gICAgVkFSX0ZHX1RSQU5TTEFURV9FTkQ6ICctLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCcsXG4gICAgVkFSX0ZHX1RSQU5TTEFURV9TVEFSVDogJy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQnLFxuICAgIFZBUl9MRUZUOiAnLS1tZGMtcmlwcGxlLWxlZnQnLFxuICAgIFZBUl9UT1A6ICctLW1kYy1yaXBwbGUtdG9wJyxcbn07XG5leHBvcnQgdmFyIG51bWJlcnMgPSB7XG4gICAgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVM6IDIyNSxcbiAgICBGR19ERUFDVElWQVRJT05fTVM6IDE1MCxcbiAgICBJTklUSUFMX09SSUdJTl9TQ0FMRTogMC42LFxuICAgIFBBRERJTkc6IDEwLFxuICAgIFRBUF9ERUxBWV9NUzogMzAwLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBudW1iZXJzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzIH0gZnJvbSAnLi91dGlsJztcbi8vIEFjdGl2YXRpb24gZXZlbnRzIHJlZ2lzdGVyZWQgb24gdGhlIHJvb3QgZWxlbWVudCBvZiBlYWNoIGluc3RhbmNlIGZvciBhY3RpdmF0aW9uXG52YXIgQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFtcbiAgICAndG91Y2hzdGFydCcsICdwb2ludGVyZG93bicsICdtb3VzZWRvd24nLCAna2V5ZG93bicsXG5dO1xuLy8gRGVhY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIGRvY3VtZW50RWxlbWVudCB3aGVuIGEgcG9pbnRlci1yZWxhdGVkIGRvd24gZXZlbnQgb2NjdXJzXG52YXIgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMgPSBbXG4gICAgJ3RvdWNoZW5kJywgJ3BvaW50ZXJ1cCcsICdtb3VzZXVwJywgJ2NvbnRleHRtZW51Jyxcbl07XG4vLyBzaW11bHRhbmVvdXMgbmVzdGVkIGFjdGl2YXRpb25zXG52YXIgYWN0aXZhdGVkVGFyZ2V0cyA9IFtdO1xudmFyIE1EQ1JpcHBsZUZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDUmlwcGxlRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENSaXBwbGVGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgTURDUmlwcGxlRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG4gICAgICAgIF90aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IDA7XG4gICAgICAgIF90aGlzLmZnU2NhbGVfID0gJzAnO1xuICAgICAgICBfdGhpcy5mcmFtZV8gPSB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfTtcbiAgICAgICAgX3RoaXMuaW5pdGlhbFNpemVfID0gMDtcbiAgICAgICAgX3RoaXMubGF5b3V0RnJhbWVfID0gMDtcbiAgICAgICAgX3RoaXMubWF4UmFkaXVzXyA9IDA7XG4gICAgICAgIF90aGlzLnVuYm91bmRlZENvb3Jkc18gPSB7IGxlZnQ6IDAsIHRvcDogMCB9O1xuICAgICAgICBfdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gX3RoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgX3RoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IHRydWU7XG4gICAgICAgICAgICBfdGhpcy5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuYWN0aXZhdGVIYW5kbGVyXyA9IGZ1bmN0aW9uIChlKSB7IHJldHVybiBfdGhpcy5hY3RpdmF0ZV8oZSk7IH07XG4gICAgICAgIF90aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmRlYWN0aXZhdGVfKCk7IH07XG4gICAgICAgIF90aGlzLmZvY3VzSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVGb2N1cygpOyB9O1xuICAgICAgICBfdGhpcy5ibHVySGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVCbHVyKCk7IH07XG4gICAgICAgIF90aGlzLnJlc2l6ZUhhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMubGF5b3V0KCk7IH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZUZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENSaXBwbGVGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlRm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVycztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZUZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IHRvcDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMCwgbGVmdDogMCwgd2lkdGg6IDAsIGhlaWdodDogMCB9KTsgfSxcbiAgICAgICAgICAgICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IHg6IDAsIHk6IDAgfSk7IH0sXG4gICAgICAgICAgICAgICAgaXNTdXJmYWNlQWN0aXZlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIGlzU3VyZmFjZURpc2FibGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIGlzVW5ib3VuZGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzdXBwb3J0c1ByZXNzUmlwcGxlID0gdGhpcy5zdXBwb3J0c1ByZXNzUmlwcGxlXygpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyUm9vdEhhbmRsZXJzXyhzdXBwb3J0c1ByZXNzUmlwcGxlKTtcbiAgICAgICAgaWYgKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcywgUk9PVF8xID0gX2EuUk9PVCwgVU5CT1VOREVEXzEgPSBfYS5VTkJPVU5ERUQ7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFJPT1RfMSk7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoVU5CT1VOREVEXzEpO1xuICAgICAgICAgICAgICAgICAgICAvLyBVbmJvdW5kZWQgcmlwcGxlcyBuZWVkIGxheW91dCBsb2dpYyBhcHBsaWVkIGltbWVkaWF0ZWx5IHRvIHNldCBjb29yZGluYXRlcyBmb3IgYm90aCBzaGFkZSBhbmQgcmlwcGxlXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5zdXBwb3J0c1ByZXNzUmlwcGxlXygpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmF0aW9uVGltZXJfKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19BQ1RJVkFUSU9OKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXykge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyk7XG4gICAgICAgICAgICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0RFQUNUSVZBVElPTik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgX2EgPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMsIFJPT1RfMiA9IF9hLlJPT1QsIFVOQk9VTkRFRF8yID0gX2EuVU5CT1VOREVEO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhST09UXzIpO1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFVOQk9VTkRFRF8yKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZW1vdmVDc3NWYXJzXygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXygpO1xuICAgICAgICB0aGlzLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBldnQgT3B0aW9uYWwgZXZlbnQgY29udGFpbmluZyBwb3NpdGlvbiBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZV8oZXZ0KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZV8oKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0RnJhbWVfKSB7XG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxheW91dEZyYW1lXyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXlvdXRGcmFtZV8gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICAgICAgICBfdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnNldFVuYm91bmRlZCA9IGZ1bmN0aW9uICh1bmJvdW5kZWQpIHtcbiAgICAgICAgdmFyIFVOQk9VTkRFRCA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5VTkJPVU5ERUQ7XG4gICAgICAgIGlmICh1bmJvdW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkJHX0ZPQ1VTRUQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUJsdXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkJHX0ZPQ1VTRUQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFdlIGNvbXB1dGUgdGhpcyBwcm9wZXJ0eSBzbyB0aGF0IHdlIGFyZSBub3QgcXVlcnlpbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNsaWVudFxuICAgICAqIHVudGlsIHRoZSBwb2ludCBpbiB0aW1lIHdoZXJlIHRoZSBmb3VuZGF0aW9uIHJlcXVlc3RzIGl0LiBUaGlzIHByZXZlbnRzIHNjZW5hcmlvcyB3aGVyZVxuICAgICAqIGNsaWVudC1zaWRlIGZlYXR1cmUtZGV0ZWN0aW9uIG1heSBoYXBwZW4gdG9vIGVhcmx5LCBzdWNoIGFzIHdoZW4gY29tcG9uZW50cyBhcmUgcmVuZGVyZWQgb24gdGhlIHNlcnZlclxuICAgICAqIGFuZCB0aGVuIGluaXRpYWxpemVkIGF0IG1vdW50IHRpbWUgb24gdGhlIGNsaWVudC5cbiAgICAgKi9cbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5zdXBwb3J0c1ByZXNzUmlwcGxlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uYnJvd3NlclN1cHBvcnRzQ3NzVmFycygpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY3RpdmF0aW9uRXZlbnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGhhc0RlYWN0aXZhdGlvblVYUnVuOiBmYWxzZSxcbiAgICAgICAgICAgIGlzQWN0aXZhdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGlzUHJvZ3JhbW1hdGljOiBmYWxzZSxcbiAgICAgICAgICAgIHdhc0FjdGl2YXRlZEJ5UG9pbnRlcjogZmFsc2UsXG4gICAgICAgICAgICB3YXNFbGVtZW50TWFkZUFjdGl2ZTogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBzdXBwb3J0c1ByZXNzUmlwcGxlIFBhc3NlZCBmcm9tIGluaXQgdG8gc2F2ZSBhIHJlZHVuZGFudCBmdW5jdGlvbiBjYWxsXG4gICAgICovXG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucmVnaXN0ZXJSb290SGFuZGxlcnNfID0gZnVuY3Rpb24gKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgICAgICAgIEFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChldnQudHlwZSA9PT0gJ2tleWRvd24nKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVyZWdpc3RlclJvb3RIYW5kbGVyc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIEFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmJsdXJIYW5kbGVyXyk7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJlbW92ZUNzc1ZhcnNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcmlwcGxlU3RyaW5ncyA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncztcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhyaXBwbGVTdHJpbmdzKTtcbiAgICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZignVkFSXycpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUocmlwcGxlU3RyaW5nc1trZXldLCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5hY3RpdmF0ZV8gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzU3VyZmFjZURpc2FibGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYWN0aXZhdGlvblN0YXRlID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXZvaWQgcmVhY3RpbmcgdG8gZm9sbG93LW9uIGV2ZW50cyBmaXJlZCBieSB0b3VjaCBkZXZpY2UgYWZ0ZXIgYW4gYWxyZWFkeS1wcm9jZXNzZWQgdXNlciBpbnRlcmFjdGlvblxuICAgICAgICB2YXIgcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQgPSB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XztcbiAgICAgICAgdmFyIGlzU2FtZUludGVyYWN0aW9uID0gcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQgJiYgZXZ0ICE9PSB1bmRlZmluZWQgJiYgcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQudHlwZSAhPT0gZXZ0LnR5cGU7XG4gICAgICAgIGlmIChpc1NhbWVJbnRlcmFjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCA9IHRydWU7XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYyA9IGV2dCA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBhY3RpdmF0aW9uU3RhdGUuYWN0aXZhdGlvbkV2ZW50ID0gZXZ0O1xuICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzQWN0aXZhdGVkQnlQb2ludGVyID0gYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljID8gZmFsc2UgOiBldnQgIT09IHVuZGVmaW5lZCAmJiAoZXZ0LnR5cGUgPT09ICdtb3VzZWRvd24nIHx8IGV2dC50eXBlID09PSAndG91Y2hzdGFydCcgfHwgZXZ0LnR5cGUgPT09ICdwb2ludGVyZG93bicpO1xuICAgICAgICB2YXIgaGFzQWN0aXZhdGVkQ2hpbGQgPSBldnQgIT09IHVuZGVmaW5lZCAmJiBhY3RpdmF0ZWRUYXJnZXRzLmxlbmd0aCA+IDAgJiYgYWN0aXZhdGVkVGFyZ2V0cy5zb21lKGZ1bmN0aW9uICh0YXJnZXQpIHsgcmV0dXJuIF90aGlzLmFkYXB0ZXJfLmNvbnRhaW5zRXZlbnRUYXJnZXQodGFyZ2V0KTsgfSk7XG4gICAgICAgIGlmIChoYXNBY3RpdmF0ZWRDaGlsZCkge1xuICAgICAgICAgICAgLy8gSW1tZWRpYXRlbHkgcmVzZXQgYWN0aXZhdGlvbiBzdGF0ZSwgd2hpbGUgcHJlc2VydmluZyBsb2dpYyB0aGF0IHByZXZlbnRzIHRvdWNoIGZvbGxvdy1vbiBldmVudHNcbiAgICAgICAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBhY3RpdmF0ZWRUYXJnZXRzLnB1c2goZXZ0LnRhcmdldCk7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKGV2dCk7XG4gICAgICAgIH1cbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlID0gdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhldnQpO1xuICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVBY3RpdmF0aW9uXygpO1xuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBSZXNldCBhcnJheSBvbiBuZXh0IGZyYW1lIGFmdGVyIHRoZSBjdXJyZW50IGV2ZW50IGhhcyBoYWQgYSBjaGFuY2UgdG8gYnViYmxlIHRvIHByZXZlbnQgYW5jZXN0b3IgcmlwcGxlc1xuICAgICAgICAgICAgYWN0aXZhdGVkVGFyZ2V0cyA9IFtdO1xuICAgICAgICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmVcbiAgICAgICAgICAgICAgICAmJiBldnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICYmIChldnQua2V5ID09PSAnICcgfHwgZXZ0LmtleUNvZGUgPT09IDMyKSkge1xuICAgICAgICAgICAgICAgIC8vIElmIHNwYWNlIHdhcyBwcmVzc2VkLCB0cnkgYWdhaW4gd2l0aGluIGFuIHJBRiBjYWxsIHRvIGRldGVjdCA6YWN0aXZlLCBiZWNhdXNlIGRpZmZlcmVudCBVQXMgcmVwb3J0XG4gICAgICAgICAgICAgICAgLy8gYWN0aXZlIHN0YXRlcyBpbmNvbnNpc3RlbnRseSB3aGVuIHRoZXkncmUgY2FsbGVkIHdpdGhpbiBldmVudCBoYW5kbGluZyBjb2RlOlxuICAgICAgICAgICAgICAgIC8vIC0gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NjM1OTcxXG4gICAgICAgICAgICAgICAgLy8gLSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMjkzNzQxXG4gICAgICAgICAgICAgICAgLy8gV2UgdHJ5IGZpcnN0IG91dHNpZGUgckFGIHRvIHN1cHBvcnQgRWRnZSwgd2hpY2ggZG9lcyBub3QgZXhoaWJpdCB0aGlzIHByb2JsZW0sIGJ1dCB3aWxsIGNyYXNoIGlmIGEgQ1NTXG4gICAgICAgICAgICAgICAgLy8gdmFyaWFibGUgaXMgc2V0IHdpdGhpbiBhIHJBRiBjYWxsYmFjayBmb3IgYSBzdWJtaXQgYnV0dG9uIGludGVyYWN0aW9uICgjMjI0MSkuXG4gICAgICAgICAgICAgICAgYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlID0gX3RoaXMuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZXZ0KTtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFuaW1hdGVBY3RpdmF0aW9uXygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVzZXQgYWN0aXZhdGlvbiBzdGF0ZSBpbW1lZGlhdGVseSBpZiBlbGVtZW50IHdhcyBub3QgbWFkZSBhY3RpdmUuXG4gICAgICAgICAgICAgICAgX3RoaXMuYWN0aXZhdGlvblN0YXRlXyA9IF90aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHJldHVybiAoZXZ0ICE9PSB1bmRlZmluZWQgJiYgZXZ0LnR5cGUgPT09ICdrZXlkb3duJykgPyB0aGlzLmFkYXB0ZXJfLmlzU3VyZmFjZUFjdGl2ZSgpIDogdHJ1ZTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmFuaW1hdGVBY3RpdmF0aW9uXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIF9hID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzLCBWQVJfRkdfVFJBTlNMQVRFX1NUQVJUID0gX2EuVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgVkFSX0ZHX1RSQU5TTEFURV9FTkQgPSBfYS5WQVJfRkdfVFJBTlNMQVRFX0VORDtcbiAgICAgICAgdmFyIF9iID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLCBGR19ERUFDVElWQVRJT04gPSBfYi5GR19ERUFDVElWQVRJT04sIEZHX0FDVElWQVRJT04gPSBfYi5GR19BQ1RJVkFUSU9OO1xuICAgICAgICB2YXIgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMgPSBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVM7XG4gICAgICAgIHRoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICAgIHZhciB0cmFuc2xhdGVTdGFydCA9ICcnO1xuICAgICAgICB2YXIgdHJhbnNsYXRlRW5kID0gJyc7XG4gICAgICAgIGlmICghdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICB2YXIgX2MgPSB0aGlzLmdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18oKSwgc3RhcnRQb2ludCA9IF9jLnN0YXJ0UG9pbnQsIGVuZFBvaW50ID0gX2MuZW5kUG9pbnQ7XG4gICAgICAgICAgICB0cmFuc2xhdGVTdGFydCA9IHN0YXJ0UG9pbnQueCArIFwicHgsIFwiICsgc3RhcnRQb2ludC55ICsgXCJweFwiO1xuICAgICAgICAgICAgdHJhbnNsYXRlRW5kID0gZW5kUG9pbnQueCArIFwicHgsIFwiICsgZW5kUG9pbnQueSArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19UUkFOU0xBVEVfU1RBUlQsIHRyYW5zbGF0ZVN0YXJ0KTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfVFJBTlNMQVRFX0VORCwgdHJhbnNsYXRlRW5kKTtcbiAgICAgICAgLy8gQ2FuY2VsIGFueSBvbmdvaW5nIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGFuaW1hdGlvbnNcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyk7XG4gICAgICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgICAgLy8gRm9yY2UgbGF5b3V0IGluIG9yZGVyIHRvIHJlLXRyaWdnZXIgdGhlIGFuaW1hdGlvbi5cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfKCk7IH0sIERFQUNUSVZBVElPTl9USU1FT1VUX01TKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXywgYWN0aXZhdGlvbkV2ZW50ID0gX2EuYWN0aXZhdGlvbkV2ZW50LCB3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBfYS53YXNBY3RpdmF0ZWRCeVBvaW50ZXI7XG4gICAgICAgIHZhciBzdGFydFBvaW50O1xuICAgICAgICBpZiAod2FzQWN0aXZhdGVkQnlQb2ludGVyKSB7XG4gICAgICAgICAgICBzdGFydFBvaW50ID0gZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzKGFjdGl2YXRpb25FdmVudCwgdGhpcy5hZGFwdGVyXy5nZXRXaW5kb3dQYWdlT2Zmc2V0KCksIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICAgICAgICAgICAgeDogdGhpcy5mcmFtZV8ud2lkdGggLyAyLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMuZnJhbWVfLmhlaWdodCAvIDIsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIC8vIENlbnRlciB0aGUgZWxlbWVudCBhcm91bmQgdGhlIHN0YXJ0IHBvaW50LlxuICAgICAgICBzdGFydFBvaW50ID0ge1xuICAgICAgICAgICAgeDogc3RhcnRQb2ludC54IC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICAgICAgICB5OiBzdGFydFBvaW50LnkgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGVuZFBvaW50ID0ge1xuICAgICAgICAgICAgeDogKHRoaXMuZnJhbWVfLndpZHRoIC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgICAgICAgIHk6ICh0aGlzLmZyYW1lXy5oZWlnaHQgLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4geyBzdGFydFBvaW50OiBzdGFydFBvaW50LCBlbmRQb2ludDogZW5kUG9pbnQgfTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJvdGggd2hlbiBhIHBvaW50aW5nIGRldmljZSBpcyByZWxlYXNlZCwgYW5kIHdoZW4gdGhlIGFjdGl2YXRpb24gYW5pbWF0aW9uIGVuZHMuXG4gICAgICAgIC8vIFRoZSBkZWFjdGl2YXRpb24gYW5pbWF0aW9uIHNob3VsZCBvbmx5IHJ1biBhZnRlciBib3RoIG9mIHRob3NlIG9jY3VyLlxuICAgICAgICB2YXIgRkdfREVBQ1RJVkFUSU9OID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0RFQUNUSVZBVElPTjtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfLCBoYXNEZWFjdGl2YXRpb25VWFJ1biA9IF9hLmhhc0RlYWN0aXZhdGlvblVYUnVuLCBpc0FjdGl2YXRlZCA9IF9hLmlzQWN0aXZhdGVkO1xuICAgICAgICB2YXIgYWN0aXZhdGlvbkhhc0VuZGVkID0gaGFzRGVhY3RpdmF0aW9uVVhSdW4gfHwgIWlzQWN0aXZhdGVkO1xuICAgICAgICBpZiAoYWN0aXZhdGlvbkhhc0VuZGVkICYmIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXykge1xuICAgICAgICAgICAgdGhpcy5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgICAgICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgICAgICAgIH0sIG51bWJlcnMuRkdfREVBQ1RJVkFUSU9OX01TKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgRkdfQUNUSVZBVElPTiA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19BQ1RJVkFUSU9OO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5yZXNldEFjdGl2YXRpb25TdGF0ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfLmFjdGl2YXRpb25FdmVudDtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICAvLyBUb3VjaCBkZXZpY2VzIG1heSBmaXJlIGFkZGl0aW9uYWwgZXZlbnRzIGZvciB0aGUgc2FtZSBpbnRlcmFjdGlvbiB3aXRoaW4gYSBzaG9ydCB0aW1lLlxuICAgICAgICAvLyBTdG9yZSB0aGUgcHJldmlvdXMgZXZlbnQgdW50aWwgaXQncyBzYWZlIHRvIGFzc3VtZSB0aGF0IHN1YnNlcXVlbnQgZXZlbnRzIGFyZSBmb3IgbmV3IGludGVyYWN0aW9ucy5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB1bmRlZmluZWQ7IH0sIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5UQVBfREVMQVlfTVMpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVhY3RpdmF0ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpbiBzY2VuYXJpb3Mgc3VjaCBhcyB3aGVuIHlvdSBoYXZlIGEga2V5dXAgZXZlbnQgdGhhdCBibHVycyB0aGUgZWxlbWVudC5cbiAgICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RhdGUgPSB0c2xpYl8xLl9fYXNzaWduKHt9LCBhY3RpdmF0aW9uU3RhdGUpO1xuICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljKSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYW5pbWF0ZURlYWN0aXZhdGlvbl8oc3RhdGUpOyB9KTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWN0aXZhdGlvblN0YXRlXy5oYXNEZWFjdGl2YXRpb25VWFJ1biA9IHRydWU7XG4gICAgICAgICAgICAgICAgX3RoaXMuYW5pbWF0ZURlYWN0aXZhdGlvbl8oc3RhdGUpO1xuICAgICAgICAgICAgICAgIF90aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmFuaW1hdGVEZWFjdGl2YXRpb25fID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciB3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBfYS53YXNBY3RpdmF0ZWRCeVBvaW50ZXIsIHdhc0VsZW1lbnRNYWRlQWN0aXZlID0gX2Eud2FzRWxlbWVudE1hZGVBY3RpdmU7XG4gICAgICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgfHwgd2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmxheW91dEludGVybmFsXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5mcmFtZV8gPSB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICAgICAgdmFyIG1heERpbSA9IE1hdGgubWF4KHRoaXMuZnJhbWVfLmhlaWdodCwgdGhpcy5mcmFtZV8ud2lkdGgpO1xuICAgICAgICAvLyBTdXJmYWNlIGRpYW1ldGVyIGlzIHRyZWF0ZWQgZGlmZmVyZW50bHkgZm9yIHVuYm91bmRlZCB2cy4gYm91bmRlZCByaXBwbGVzLlxuICAgICAgICAvLyBVbmJvdW5kZWQgcmlwcGxlIGRpYW1ldGVyIGlzIGNhbGN1bGF0ZWQgc21hbGxlciBzaW5jZSB0aGUgc3VyZmFjZSBpcyBleHBlY3RlZCB0byBhbHJlYWR5IGJlIHBhZGRlZCBhcHByb3ByaWF0ZWx5XG4gICAgICAgIC8vIHRvIGV4dGVuZCB0aGUgaGl0Ym94LCBhbmQgdGhlIHJpcHBsZSBpcyBleHBlY3RlZCB0byBtZWV0IHRoZSBlZGdlcyBvZiB0aGUgcGFkZGVkIGhpdGJveCAod2hpY2ggaXMgdHlwaWNhbGx5XG4gICAgICAgIC8vIHNxdWFyZSkuIEJvdW5kZWQgcmlwcGxlcywgb24gdGhlIG90aGVyIGhhbmQsIGFyZSBmdWxseSBleHBlY3RlZCB0byBleHBhbmQgYmV5b25kIHRoZSBzdXJmYWNlJ3MgbG9uZ2VzdCBkaWFtZXRlclxuICAgICAgICAvLyAoY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgZGlhZ29uYWwgcGx1cyBhIGNvbnN0YW50IHBhZGRpbmcpLCBhbmQgYXJlIGNsaXBwZWQgYXQgdGhlIHN1cmZhY2UncyBib3JkZXIgdmlhXG4gICAgICAgIC8vIGBvdmVyZmxvdzogaGlkZGVuYC5cbiAgICAgICAgdmFyIGdldEJvdW5kZWRSYWRpdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaHlwb3RlbnVzZSA9IE1hdGguc3FydChNYXRoLnBvdyhfdGhpcy5mcmFtZV8ud2lkdGgsIDIpICsgTWF0aC5wb3coX3RoaXMuZnJhbWVfLmhlaWdodCwgMikpO1xuICAgICAgICAgICAgcmV0dXJuIGh5cG90ZW51c2UgKyBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuUEFERElORztcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tYXhSYWRpdXNfID0gdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpID8gbWF4RGltIDogZ2V0Qm91bmRlZFJhZGl1cygpO1xuICAgICAgICAvLyBSaXBwbGUgaXMgc2l6ZWQgYXMgYSBmcmFjdGlvbiBvZiB0aGUgbGFyZ2VzdCBkaW1lbnNpb24gb2YgdGhlIHN1cmZhY2UsIHRoZW4gc2NhbGVzIHVwIHVzaW5nIGEgQ1NTIHNjYWxlIHRyYW5zZm9ybVxuICAgICAgICB0aGlzLmluaXRpYWxTaXplXyA9IE1hdGguZmxvb3IobWF4RGltICogTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLklOSVRJQUxfT1JJR0lOX1NDQUxFKTtcbiAgICAgICAgdGhpcy5mZ1NjYWxlXyA9IFwiXCIgKyB0aGlzLm1heFJhZGl1c18gLyB0aGlzLmluaXRpYWxTaXplXztcbiAgICAgICAgdGhpcy51cGRhdGVMYXlvdXRDc3NWYXJzXygpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUudXBkYXRlTGF5b3V0Q3NzVmFyc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncywgVkFSX0ZHX1NJWkUgPSBfYS5WQVJfRkdfU0laRSwgVkFSX0xFRlQgPSBfYS5WQVJfTEVGVCwgVkFSX1RPUCA9IF9hLlZBUl9UT1AsIFZBUl9GR19TQ0FMRSA9IF9hLlZBUl9GR19TQ0FMRTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfU0laRSwgdGhpcy5pbml0aWFsU2l6ZV8gKyBcInB4XCIpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19TQ0FMRSwgdGhpcy5mZ1NjYWxlXyk7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgICAgICAgICAgIHRvcDogTWF0aC5yb3VuZCgodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfTEVGVCwgdGhpcy51bmJvdW5kZWRDb29yZHNfLmxlZnQgKyBcInB4XCIpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfVE9QLCB0aGlzLnVuYm91bmRlZENvb3Jkc18udG9wICsgXCJweFwiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ1JpcHBsZUZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENSaXBwbGVGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENDb21wb25lbnQgfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgYXBwbHlQYXNzaXZlIH0gZnJvbSAnQG1hdGVyaWFsL2RvbS9ldmVudHMnO1xuaW1wb3J0IHsgbWF0Y2hlcyB9IGZyb20gJ0BtYXRlcmlhbC9kb20vcG9ueWZpbGwnO1xuaW1wb3J0IHsgTURDUmlwcGxlRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCc7XG52YXIgTURDUmlwcGxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ1JpcHBsZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENSaXBwbGUoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE1EQ1JpcHBsZS5hdHRhY2hUbyA9IGZ1bmN0aW9uIChyb290LCBvcHRzKSB7XG4gICAgICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsgb3B0cyA9IHsgaXNVbmJvdW5kZWQ6IHVuZGVmaW5lZCB9OyB9XG4gICAgICAgIHZhciByaXBwbGUgPSBuZXcgTURDUmlwcGxlKHJvb3QpO1xuICAgICAgICAvLyBPbmx5IG92ZXJyaWRlIHVuYm91bmRlZCBiZWhhdmlvciBpZiBvcHRpb24gaXMgZXhwbGljaXRseSBzcGVjaWZpZWRcbiAgICAgICAgaWYgKG9wdHMuaXNVbmJvdW5kZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmlwcGxlLnVuYm91bmRlZCA9IG9wdHMuaXNVbmJvdW5kZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJpcHBsZTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZS5jcmVhdGVBZGFwdGVyID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gaW5zdGFuY2Uucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdXRpbC5zdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3cpOyB9LFxuICAgICAgICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gaW5zdGFuY2Uucm9vdF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7IH0sXG4gICAgICAgICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiBmdW5jdGlvbiAodGFyZ2V0KSB7IHJldHVybiBpbnN0YW5jZS5yb290Xy5jb250YWlucyh0YXJnZXQpOyB9LFxuICAgICAgICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2Uucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uIChoYW5kbGVyKSB7IHJldHVybiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcik7IH0sXG4gICAgICAgICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyB4OiB3aW5kb3cucGFnZVhPZmZzZXQsIHk6IHdpbmRvdy5wYWdlWU9mZnNldCB9KTsgfSxcbiAgICAgICAgICAgIGlzU3VyZmFjZUFjdGl2ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gbWF0Y2hlcyhpbnN0YW5jZS5yb290XywgJzphY3RpdmUnKTsgfSxcbiAgICAgICAgICAgIGlzU3VyZmFjZURpc2FibGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiBCb29sZWFuKGluc3RhbmNlLmRpc2FibGVkKTsgfSxcbiAgICAgICAgICAgIGlzVW5ib3VuZGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiBCb29sZWFuKGluc3RhbmNlLnVuYm91bmRlZCk7IH0sXG4gICAgICAgICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogZnVuY3Rpb24gKGhhbmRsZXIpIHsgcmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKTsgfSxcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBpbnN0YW5jZS5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICB1cGRhdGVDc3NWYXJpYWJsZTogZnVuY3Rpb24gKHZhck5hbWUsIHZhbHVlKSB7IHJldHVybiBpbnN0YW5jZS5yb290Xy5zdHlsZS5zZXRQcm9wZXJ0eSh2YXJOYW1lLCB2YWx1ZSk7IH0sXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlLnByb3RvdHlwZSwgXCJ1bmJvdW5kZWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBCb29sZWFuKHRoaXMudW5ib3VuZGVkXyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHVuYm91bmRlZCkge1xuICAgICAgICAgICAgdGhpcy51bmJvdW5kZWRfID0gQm9vbGVhbih1bmJvdW5kZWQpO1xuICAgICAgICAgICAgdGhpcy5zZXRVbmJvdW5kZWRfKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uYWN0aXZhdGUoKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUuZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5kZWFjdGl2YXRlKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGUucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5sYXlvdXQoKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUuZ2V0RGVmYXVsdEZvdW5kYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgTURDUmlwcGxlRm91bmRhdGlvbihNRENSaXBwbGUuY3JlYXRlQWRhcHRlcih0aGlzKSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGUucHJvdG90eXBlLmluaXRpYWxTeW5jV2l0aERPTSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJvb3QgPSB0aGlzLnJvb3RfO1xuICAgICAgICB0aGlzLnVuYm91bmRlZCA9ICdtZGNSaXBwbGVJc1VuYm91bmRlZCcgaW4gcm9vdC5kYXRhc2V0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2xvc3VyZSBDb21waWxlciB0aHJvd3MgYW4gYWNjZXNzIGNvbnRyb2wgZXJyb3Igd2hlbiBkaXJlY3RseSBhY2Nlc3NpbmcgYVxuICAgICAqIHByb3RlY3RlZCBvciBwcml2YXRlIHByb3BlcnR5IGluc2lkZSBhIGdldHRlci9zZXR0ZXIsIGxpa2UgdW5ib3VuZGVkIGFib3ZlLlxuICAgICAqIEJ5IGFjY2Vzc2luZyB0aGUgcHJvdGVjdGVkIHByb3BlcnR5IGluc2lkZSBhIG1ldGhvZCwgd2Ugc29sdmUgdGhhdCBwcm9ibGVtLlxuICAgICAqIFRoYXQncyB3aHkgdGhpcyBmdW5jdGlvbiBleGlzdHMuXG4gICAgICovXG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5zZXRVbmJvdW5kZWRfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldFVuYm91bmRlZChCb29sZWFuKHRoaXMudW5ib3VuZGVkXykpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ1JpcHBsZTtcbn0oTURDQ29tcG9uZW50KSk7XG5leHBvcnQgeyBNRENSaXBwbGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudC5qcy5tYXAiLCJpbXBvcnQge01EQ1JpcHBsZX0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZSc7XG5pbXBvcnQge2dldENvbnRleHR9IGZyb20gJ3N2ZWx0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJpcHBsZShub2RlLCBbcmlwcGxlLCBwcm9wcyA9IHt1bmJvdW5kZWQ6IGZhbHNlLCBjb2xvcjogbnVsbH1dKSB7XG4gIGxldCBpbnN0YW5jZSA9IG51bGw7XG4gIGxldCBhZGRMYXlvdXRMaXN0ZW5lciA9IGdldENvbnRleHQoJ1NNVUk6YWRkTGF5b3V0TGlzdGVuZXInKTtcbiAgbGV0IHJlbW92ZUxheW91dExpc3RlbmVyO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVByb3BzKHJpcHBsZSwgcHJvcHMpIHtcbiAgICBpZiAocmlwcGxlICYmICFpbnN0YW5jZSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgTURDUmlwcGxlKG5vZGUpO1xuICAgIH0gZWxzZSBpZiAoaW5zdGFuY2UgJiYgIXJpcHBsZSkge1xuICAgICAgaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgaW5zdGFuY2UgPSBudWxsO1xuICAgIH1cbiAgICBpZiAocmlwcGxlKSB7XG4gICAgICBpbnN0YW5jZS51bmJvdW5kZWQgPSAhIXByb3BzLnVuYm91bmRlZDtcbiAgICAgIHN3aXRjaCAocHJvcHMuY29sb3IpIHtcbiAgICAgICAgY2FzZSAnc3VyZmFjZSc6XG4gICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdtZGMtcmlwcGxlLXN1cmZhY2UnKTtcbiAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ21kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeScpO1xuICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnbWRjLXJpcHBsZS1zdXJmYWNlLS1hY2NlbnQnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNhc2UgJ3ByaW1hcnknOlxuICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnbWRjLXJpcHBsZS1zdXJmYWNlJyk7XG4gICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdtZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnknKTtcbiAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ21kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50Jyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjYXNlICdzZWNvbmRhcnknOlxuICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnbWRjLXJpcHBsZS1zdXJmYWNlJyk7XG4gICAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdtZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnknKTtcbiAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ21kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50Jyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ21kYy1yaXBwbGUtc3VyZmFjZScpO1xuICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnbWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5Jyk7XG4gICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdtZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudCcpO1xuICB9XG5cbiAgaWYgKHJpcHBsZSkge1xuICAgIGhhbmRsZVByb3BzKHJpcHBsZSwgcHJvcHMpO1xuICB9XG5cbiAgaWYgKGFkZExheW91dExpc3RlbmVyKSB7XG4gICAgcmVtb3ZlTGF5b3V0TGlzdGVuZXIgPSBhZGRMYXlvdXRMaXN0ZW5lcihsYXlvdXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gbGF5b3V0KCkge1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgaW5zdGFuY2UubGF5b3V0KCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB1cGRhdGUoW3JpcHBsZSwgcHJvcHMgPSB7dW5ib3VuZGVkOiBmYWxzZSwgY29sb3I6IG51bGx9XSkge1xuICAgICAgaGFuZGxlUHJvcHMocmlwcGxlLCBwcm9wcyk7XG4gICAgfSxcblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgICBpbnN0YW5jZSA9IG51bGw7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnbWRjLXJpcHBsZS1zdXJmYWNlJyk7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnbWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5Jyk7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnbWRjLXJpcHBsZS1zdXJmYWNlLS1hY2NlbnQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlbW92ZUxheW91dExpc3RlbmVyKSB7XG4gICAgICAgIHJlbW92ZUxheW91dExpc3RlbmVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwieyNpZiBocmVmfVxuICA8YVxuICAgIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gICAgdXNlOmZvcndhcmRFdmVudHNcbiAgICBjbGFzcz1cIlxuICAgICAgbWRjLWJ1dHRvblxuICAgICAge2NsYXNzTmFtZX1cbiAgICAgIHt2YXJpYW50ID09PSAncmFpc2VkJyA/ICdtZGMtYnV0dG9uLS1yYWlzZWQnIDogJyd9XG4gICAgICB7dmFyaWFudCA9PT0gJ3VuZWxldmF0ZWQnID8gJ21kYy1idXR0b24tLXVuZWxldmF0ZWQnIDogJyd9XG4gICAgICB7dmFyaWFudCA9PT0gJ291dGxpbmVkJyA/ICdtZGMtYnV0dG9uLS1vdXRsaW5lZCcgOiAnJ31cbiAgICAgIHtkZW5zZSA/ICdtZGMtYnV0dG9uLS1kZW5zZScgOiAnJ31cbiAgICAgIHtjb2xvciA9PT0gJ3NlY29uZGFyeScgPyAnc211aS1idXR0b24tLWNvbG9yLXNlY29uZGFyeScgOiAnJ31cbiAgICAgIHtjb250ZXh0ID09PSAnY2FyZDphY3Rpb24nID8gJ21kYy1jYXJkX19hY3Rpb24nIDogJyd9XG4gICAgICB7Y29udGV4dCA9PT0gJ2NhcmQ6YWN0aW9uJyA/ICdtZGMtY2FyZF9fYWN0aW9uLS1idXR0b24nIDogJyd9XG4gICAgICB7Y29udGV4dCA9PT0gJ2RpYWxvZzphY3Rpb24nID8gJ21kYy1kaWFsb2dfX2J1dHRvbicgOiAnJ31cbiAgICAgIHtjb250ZXh0ID09PSAndG9wLWFwcC1iYXI6bmF2aWdhdGlvbicgPyAnbWRjLXRvcC1hcHAtYmFyX19uYXZpZ2F0aW9uLWljb24nIDogJyd9XG4gICAgICB7Y29udGV4dCA9PT0gJ3RvcC1hcHAtYmFyOmFjdGlvbicgPyAnbWRjLXRvcC1hcHAtYmFyX19hY3Rpb24taXRlbScgOiAnJ31cbiAgICAgIHtjb250ZXh0ID09PSAnc25hY2tiYXInID8gJ21kYy1zbmFja2Jhcl9fYWN0aW9uJyA6ICcnfVxuICAgIFwiXG4gICAgdXNlOlJpcHBsZT17W3JpcHBsZSwge3VuYm91bmRlZDogZmFsc2V9XX1cbiAgICB7aHJlZn1cbiAgICB7Li4uYWN0aW9uUHJvcH1cbiAgICB7Li4uZGVmYXVsdFByb3B9XG4gICAgey4uLnByb3BzfVxuICA+PHNsb3Q+PC9zbG90PjwvYT5cbns6ZWxzZX1cbiAgPGJ1dHRvblxuICAgIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gICAgdXNlOmZvcndhcmRFdmVudHNcbiAgICBjbGFzcz1cIlxuICAgICAgbWRjLWJ1dHRvblxuICAgICAge2NsYXNzTmFtZX1cbiAgICAgIHt2YXJpYW50ID09PSAncmFpc2VkJyA/ICdtZGMtYnV0dG9uLS1yYWlzZWQnIDogJyd9XG4gICAgICB7dmFyaWFudCA9PT0gJ3VuZWxldmF0ZWQnID8gJ21kYy1idXR0b24tLXVuZWxldmF0ZWQnIDogJyd9XG4gICAgICB7dmFyaWFudCA9PT0gJ291dGxpbmVkJyA/ICdtZGMtYnV0dG9uLS1vdXRsaW5lZCcgOiAnJ31cbiAgICAgIHtkZW5zZSA/ICdtZGMtYnV0dG9uLS1kZW5zZScgOiAnJ31cbiAgICAgIHtjb2xvciA9PT0gJ3NlY29uZGFyeScgPyAnc211aS1idXR0b24tLWNvbG9yLXNlY29uZGFyeScgOiAnJ31cbiAgICAgIHtjb250ZXh0ID09PSAnY2FyZDphY3Rpb24nID8gJ21kYy1jYXJkX19hY3Rpb24nIDogJyd9XG4gICAgICB7Y29udGV4dCA9PT0gJ2NhcmQ6YWN0aW9uJyA/ICdtZGMtY2FyZF9fYWN0aW9uLS1idXR0b24nIDogJyd9XG4gICAgICB7Y29udGV4dCA9PT0gJ2RpYWxvZzphY3Rpb24nID8gJ21kYy1kaWFsb2dfX2J1dHRvbicgOiAnJ31cbiAgICAgIHtjb250ZXh0ID09PSAndG9wLWFwcC1iYXI6bmF2aWdhdGlvbicgPyAnbWRjLXRvcC1hcHAtYmFyX19uYXZpZ2F0aW9uLWljb24nIDogJyd9XG4gICAgICB7Y29udGV4dCA9PT0gJ3RvcC1hcHAtYmFyOmFjdGlvbicgPyAnbWRjLXRvcC1hcHAtYmFyX19hY3Rpb24taXRlbScgOiAnJ31cbiAgICAgIHtjb250ZXh0ID09PSAnc25hY2tiYXInID8gJ21kYy1zbmFja2Jhcl9fYWN0aW9uJyA6ICcnfVxuICAgIFwiXG4gICAgdXNlOlJpcHBsZT17W3JpcHBsZSwge3VuYm91bmRlZDogZmFsc2V9XX1cbiAgICB7Li4uYWN0aW9uUHJvcH1cbiAgICB7Li4uZGVmYXVsdFByb3B9XG4gICAgey4uLnByb3BzfVxuICA+PHNsb3Q+PC9zbG90PjwvYnV0dG9uPlxuey9pZn1cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHtzZXRDb250ZXh0LCBnZXRDb250ZXh0fSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQge2N1cnJlbnRfY29tcG9uZW50fSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQge2ZvcndhcmRFdmVudHNCdWlsZGVyfSBmcm9tICdAc211aS9jb21tb24vZm9yd2FyZEV2ZW50cy5qcyc7XG4gIGltcG9ydCB7ZXhjbHVkZX0gZnJvbSAnQHNtdWkvY29tbW9uL2V4Y2x1ZGUuanMnO1xuICBpbXBvcnQge3VzZUFjdGlvbnN9IGZyb20gJ0BzbXVpL2NvbW1vbi91c2VBY3Rpb25zLmpzJztcbiAgaW1wb3J0IFJpcHBsZSBmcm9tICdAc211aS9yaXBwbGUvYmFyZS5qcyc7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGN1cnJlbnRfY29tcG9uZW50KTtcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gIGV4cG9ydCB7Y2xhc3NOYW1lIGFzIGNsYXNzfTtcbiAgZXhwb3J0IGxldCByaXBwbGUgPSB0cnVlO1xuICBleHBvcnQgbGV0IGNvbG9yID0gJ3ByaW1hcnknO1xuICBleHBvcnQgbGV0IHZhcmlhbnQgPSAndGV4dCc7XG4gIGV4cG9ydCBsZXQgZGVuc2UgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBocmVmID0gbnVsbDtcbiAgZXhwb3J0IGxldCBhY3Rpb24gPSAnY2xvc2UnO1xuICBsZXQgZGVmYXVsdEFjdGlvbiA9IGZhbHNlO1xuICBleHBvcnQge2RlZmF1bHRBY3Rpb24gYXMgZGVmYXVsdH07XG5cbiAgbGV0IGNvbnRleHQgPSBnZXRDb250ZXh0KCdTTVVJOmJ1dHRvbjpjb250ZXh0Jyk7XG5cbiAgJDogZGlhbG9nRXhjbHVkZXMgPSAoY29udGV4dCA9PT0gJ2RpYWxvZzphY3Rpb24nKSA/IFsnYWN0aW9uJywgJ2RlZmF1bHQnXSA6IFtdO1xuXG4gICQ6IHByb3BzID0gZXhjbHVkZSgkJHByb3BzLCBbJ3VzZScsICdjbGFzcycsICdyaXBwbGUnLCAnY29sb3InLCAndmFyaWFudCcsICdkZW5zZScsICdocmVmJywgLi4uZGlhbG9nRXhjbHVkZXNdKTtcblxuICAkOiBhY3Rpb25Qcm9wID0gKGNvbnRleHQgPT09ICdkaWFsb2c6YWN0aW9uJyAmJiBhY3Rpb24gIT09IG51bGwpID8geydkYXRhLW1kYy1kaWFsb2ctYWN0aW9uJzogYWN0aW9ufSA6IHt9O1xuICAkOiBkZWZhdWx0UHJvcCA9IChjb250ZXh0ID09PSAnZGlhbG9nOmFjdGlvbicgJiYgZGVmYXVsdEFjdGlvbikgPyB7J2RhdGEtbWRjLWRpYWxvZy1idXR0b24tZGVmYXVsdCc6ICcnfSA6IHt9O1xuXG4gIHNldENvbnRleHQoJ1NNVUk6bGFiZWw6Y29udGV4dCcsICdidXR0b24nKTtcbiAgc2V0Q29udGV4dCgnU01VSTppY29uOmNvbnRleHQnLCAnYnV0dG9uJyk7XG48L3NjcmlwdD4iLCI8ZGl2XG4gIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gIHVzZTpmb3J3YXJkRXZlbnRzXG4gIGNsYXNzPVwiXG4gICAgc211aS1idXR0b25fX2dyb3VwXG4gICAge2NsYXNzTmFtZX1cbiAgICB7dmFyaWFudCA9PT0gJ3JhaXNlZCcgPyAnc211aS1idXR0b25fX2dyb3VwLS1yYWlzZWQnIDogJyd9XG4gIFwiXG4gIHsuLi5leGNsdWRlKCQkcHJvcHMsIFsndXNlJywgJ2NsYXNzJywgJ3ZhcmlhbnQnXSl9XG4+PHNsb3Q+PC9zbG90PjwvZGl2PlxuXG48c2NyaXB0PlxuICBpbXBvcnQge3NldENvbnRleHQsIGdldENvbnRleHR9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7Y3VycmVudF9jb21wb25lbnR9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7Zm9yd2FyZEV2ZW50c0J1aWxkZXJ9IGZyb20gJ0BzbXVpL2NvbW1vbi9mb3J3YXJkRXZlbnRzLmpzJztcbiAgaW1wb3J0IHtleGNsdWRlfSBmcm9tICdAc211aS9jb21tb24vZXhjbHVkZS5qcyc7XG4gIGltcG9ydCB7dXNlQWN0aW9uc30gZnJvbSAnQHNtdWkvY29tbW9uL3VzZUFjdGlvbnMuanMnO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihjdXJyZW50X2NvbXBvbmVudCk7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBleHBvcnQge2NsYXNzTmFtZSBhcyBjbGFzc307XG4gIGV4cG9ydCBsZXQgdmFyaWFudCA9ICd0ZXh0Jztcbjwvc2NyaXB0PiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyb3VwSXRlbShub2RlKSB7XG4gIG5vZGUuY2xhc3NMaXN0LmFkZCgnc211aS1idXR0b25fX2dyb3VwLWl0ZW0nKTtcblxuICByZXR1cm4ge1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3NtdWktYnV0dG9uX19ncm91cC1pdGVtJyk7XG4gICAgfVxuICB9XG59IiwiPHNwYW5cbiAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgdXNlOmZvcndhcmRFdmVudHNcbiAgY2xhc3M9XCJcbiAgICB7Y2xhc3NOYW1lfVxuICAgIHtjb250ZXh0ID09PSAnYnV0dG9uJyA/ICdtZGMtYnV0dG9uX19sYWJlbCcgOiAnJ31cbiAgICB7Y29udGV4dCA9PT0gJ2ZhYicgPyAnbWRjLWZhYl9fbGFiZWwnIDogJyd9XG4gICAge2NvbnRleHQgPT09ICdjaGlwJyA/ICdtZGMtY2hpcF9fdGV4dCcgOiAnJ31cbiAgICB7Y29udGV4dCA9PT0gJ3RhYicgPyAnbWRjLXRhYl9fdGV4dC1sYWJlbCcgOiAnJ31cbiAgICB7Y29udGV4dCA9PT0gJ2ltYWdlLWxpc3QnID8gJ21kYy1pbWFnZS1saXN0X19sYWJlbCcgOiAnJ31cbiAgICB7Y29udGV4dCA9PT0gJ3NuYWNrYmFyJyA/ICdtZGMtc25hY2tiYXJfX2xhYmVsJyA6ICcnfVxuICBcIlxuICB7Li4uKChjb250ZXh0ID09PSAnc25hY2tiYXInKSA/IHtyb2xlOiAnc3RhdHVzJywgJ2FyaWEtbGl2ZSc6ICdwb2xpdGUnfSA6IHt9KX1cbiAgey4uLmV4Y2x1ZGUoJCRwcm9wcywgWyd1c2UnLCAnY2xhc3MnXSl9XG4+PHNsb3Q+PC9zbG90Pjwvc3Bhbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHtnZXRDb250ZXh0fSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQge2N1cnJlbnRfY29tcG9uZW50fSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQge2ZvcndhcmRFdmVudHNCdWlsZGVyfSBmcm9tICcuL2ZvcndhcmRFdmVudHMuanMnO1xuICBpbXBvcnQge2V4Y2x1ZGV9IGZyb20gJy4vZXhjbHVkZS5qcyc7XG4gIGltcG9ydCB7dXNlQWN0aW9uc30gZnJvbSAnLi91c2VBY3Rpb25zLmpzJztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoY3VycmVudF9jb21wb25lbnQpO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG4gIGxldCBjbGFzc05hbWUgPSAnJztcbiAgZXhwb3J0IHtjbGFzc05hbWUgYXMgY2xhc3N9O1xuXG4gIGNvbnN0IGNvbnRleHQgPSBnZXRDb250ZXh0KCdTTVVJOmxhYmVsOmNvbnRleHQnKTtcbjwvc2NyaXB0PiIsIjxpXG4gIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gIHVzZTpmb3J3YXJkRXZlbnRzXG4gIGNsYXNzPVwiXG4gICAge2NsYXNzTmFtZX1cbiAgICB7Y29udGV4dCA9PT0gJ2J1dHRvbicgPyAnbWRjLWJ1dHRvbl9faWNvbicgOiAnJ31cbiAgICB7Y29udGV4dCA9PT0gJ2ZhYicgPyAnbWRjLWZhYl9faWNvbicgOiAnJ31cbiAgICB7Y29udGV4dCA9PT0gJ2ljb24tYnV0dG9uJyA/ICdtZGMtaWNvbi1idXR0b25fX2ljb24nIDogJyd9XG4gICAgeyhjb250ZXh0ID09PSAnaWNvbi1idXR0b24nICYmIG9uKSA/ICdtZGMtaWNvbi1idXR0b25fX2ljb24tLW9uJyA6ICcnfVxuICAgIHtjb250ZXh0ID09PSAnY2hpcCcgPyAnbWRjLWNoaXBfX2ljb24nIDogJyd9XG4gICAgeyhjb250ZXh0ID09PSAnY2hpcCcgJiYgbGVhZGluZykgPyAnbWRjLWNoaXBfX2ljb24tLWxlYWRpbmcnIDogJyd9XG4gICAgeyhjb250ZXh0ID09PSAnY2hpcCcgJiYgbGVhZGluZ0hpZGRlbikgPyAnbWRjLWNoaXBfX2ljb24tLWxlYWRpbmctaGlkZGVuJyA6ICcnfVxuICAgIHsoY29udGV4dCA9PT0gJ2NoaXAnICYmIHRyYWlsaW5nKSA/ICdtZGMtY2hpcF9faWNvbi0tdHJhaWxpbmcnIDogJyd9XG4gICAge2NvbnRleHQgPT09ICd0YWInID8gJ21kYy10YWJfX2ljb24nIDogJyd9XG4gIFwiXG4gIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gIHsuLi5leGNsdWRlKCQkcHJvcHMsIFsndXNlJywgJ2NsYXNzJywgJ29uJywgJ2xlYWRpbmcnLCAnbGVhZGluZ0hpZGRlbicsICd0cmFpbGluZyddKX1cbj48c2xvdD48L3Nsb3Q+PC9pPlxuXG48c2NyaXB0PlxuICBpbXBvcnQge2dldENvbnRleHR9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7Y3VycmVudF9jb21wb25lbnR9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7Zm9yd2FyZEV2ZW50c0J1aWxkZXJ9IGZyb20gJy4vZm9yd2FyZEV2ZW50cy5qcyc7XG4gIGltcG9ydCB7ZXhjbHVkZX0gZnJvbSAnLi9leGNsdWRlLmpzJztcbiAgaW1wb3J0IHt1c2VBY3Rpb25zfSBmcm9tICcuL3VzZUFjdGlvbnMuanMnO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihjdXJyZW50X2NvbXBvbmVudCk7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBleHBvcnQge2NsYXNzTmFtZSBhcyBjbGFzc307XG4gIGV4cG9ydCBsZXQgb24gPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBsZWFkaW5nID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgbGVhZGluZ0hpZGRlbiA9IGZhbHNlO1xuICBleHBvcnQgbGV0IHRyYWlsaW5nID0gZmFsc2U7XG5cbiAgY29uc3QgY29udGV4dCA9IGdldENvbnRleHQoJ1NNVUk6aWNvbjpjb250ZXh0Jyk7XG48L3NjcmlwdD4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBjc3NDbGFzc2VzID0ge1xuICAgIEFOQ0hPUjogJ21kYy1tZW51LXN1cmZhY2UtLWFuY2hvcicsXG4gICAgQU5JTUFUSU5HX0NMT1NFRDogJ21kYy1tZW51LXN1cmZhY2UtLWFuaW1hdGluZy1jbG9zZWQnLFxuICAgIEFOSU1BVElOR19PUEVOOiAnbWRjLW1lbnUtc3VyZmFjZS0tYW5pbWF0aW5nLW9wZW4nLFxuICAgIEZJWEVEOiAnbWRjLW1lbnUtc3VyZmFjZS0tZml4ZWQnLFxuICAgIE9QRU46ICdtZGMtbWVudS1zdXJmYWNlLS1vcGVuJyxcbiAgICBST09UOiAnbWRjLW1lbnUtc3VyZmFjZScsXG59O1xuLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG52YXIgc3RyaW5ncyA9IHtcbiAgICBDTE9TRURfRVZFTlQ6ICdNRENNZW51U3VyZmFjZTpjbG9zZWQnLFxuICAgIE9QRU5FRF9FVkVOVDogJ01EQ01lbnVTdXJmYWNlOm9wZW5lZCcsXG4gICAgRk9DVVNBQkxFX0VMRU1FTlRTOiBbXG4gICAgICAgICdidXR0b246bm90KDpkaXNhYmxlZCknLCAnW2hyZWZdOm5vdChbYXJpYS1kaXNhYmxlZD1cInRydWVcIl0pJywgJ2lucHV0Om5vdCg6ZGlzYWJsZWQpJyxcbiAgICAgICAgJ3NlbGVjdDpub3QoOmRpc2FibGVkKScsICd0ZXh0YXJlYTpub3QoOmRpc2FibGVkKScsICdbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XCItMVwiXSk6bm90KFthcmlhLWRpc2FibGVkPVwidHJ1ZVwiXSknLFxuICAgIF0uam9pbignLCAnKSxcbn07XG4vLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xudmFyIG51bWJlcnMgPSB7XG4gICAgLyoqIFRvdGFsIGR1cmF0aW9uIG9mIG1lbnUtc3VyZmFjZSBvcGVuIGFuaW1hdGlvbi4gKi9cbiAgICBUUkFOU0lUSU9OX09QRU5fRFVSQVRJT046IDEyMCxcbiAgICAvKiogVG90YWwgZHVyYXRpb24gb2YgbWVudS1zdXJmYWNlIGNsb3NlIGFuaW1hdGlvbi4gKi9cbiAgICBUUkFOU0lUSU9OX0NMT1NFX0RVUkFUSU9OOiA3NSxcbiAgICAvKiogTWFyZ2luIGxlZnQgdG8gdGhlIGVkZ2Ugb2YgdGhlIHZpZXdwb3J0IHdoZW4gbWVudS1zdXJmYWNlIGlzIGF0IG1heGltdW0gcG9zc2libGUgaGVpZ2h0LiAqL1xuICAgIE1BUkdJTl9UT19FREdFOiAzMixcbiAgICAvKiogUmF0aW8gb2YgYW5jaG9yIHdpZHRoIHRvIG1lbnUtc3VyZmFjZSB3aWR0aCBmb3Igc3dpdGNoaW5nIGZyb20gY29ybmVyIHBvc2l0aW9uaW5nIHRvIGNlbnRlciBwb3NpdGlvbmluZy4gKi9cbiAgICBBTkNIT1JfVE9fTUVOVV9TVVJGQUNFX1dJRFRIX1JBVElPOiAwLjY3LFxufTtcbi8qKlxuICogRW51bSBmb3IgYml0cyBpbiB0aGUge0BzZWUgQ29ybmVyKSBiaXRtYXAuXG4gKi9cbnZhciBDb3JuZXJCaXQ7XG4oZnVuY3Rpb24gKENvcm5lckJpdCkge1xuICAgIENvcm5lckJpdFtDb3JuZXJCaXRbXCJCT1RUT01cIl0gPSAxXSA9IFwiQk9UVE9NXCI7XG4gICAgQ29ybmVyQml0W0Nvcm5lckJpdFtcIkNFTlRFUlwiXSA9IDJdID0gXCJDRU5URVJcIjtcbiAgICBDb3JuZXJCaXRbQ29ybmVyQml0W1wiUklHSFRcIl0gPSA0XSA9IFwiUklHSFRcIjtcbiAgICBDb3JuZXJCaXRbQ29ybmVyQml0W1wiRkxJUF9SVExcIl0gPSA4XSA9IFwiRkxJUF9SVExcIjtcbn0pKENvcm5lckJpdCB8fCAoQ29ybmVyQml0ID0ge30pKTtcbi8qKlxuICogRW51bSBmb3IgcmVwcmVzZW50aW5nIGFuIGVsZW1lbnQgY29ybmVyIGZvciBwb3NpdGlvbmluZyB0aGUgbWVudS1zdXJmYWNlLlxuICpcbiAqIFRoZSBTVEFSVCBjb25zdGFudHMgbWFwIHRvIExFRlQgaWYgZWxlbWVudCBkaXJlY3Rpb25hbGl0eSBpcyBsZWZ0XG4gKiB0byByaWdodCBhbmQgUklHSFQgaWYgdGhlIGRpcmVjdGlvbmFsaXR5IGlzIHJpZ2h0IHRvIGxlZnQuXG4gKiBMaWtld2lzZSBFTkQgbWFwcyB0byBSSUdIVCBvciBMRUZUIGRlcGVuZGluZyBvbiB0aGUgZGlyZWN0aW9uYWxpdHkuXG4gKi9cbnZhciBDb3JuZXI7XG4oZnVuY3Rpb24gKENvcm5lcikge1xuICAgIENvcm5lcltDb3JuZXJbXCJUT1BfTEVGVFwiXSA9IDBdID0gXCJUT1BfTEVGVFwiO1xuICAgIENvcm5lcltDb3JuZXJbXCJUT1BfUklHSFRcIl0gPSA0XSA9IFwiVE9QX1JJR0hUXCI7XG4gICAgQ29ybmVyW0Nvcm5lcltcIkJPVFRPTV9MRUZUXCJdID0gMV0gPSBcIkJPVFRPTV9MRUZUXCI7XG4gICAgQ29ybmVyW0Nvcm5lcltcIkJPVFRPTV9SSUdIVFwiXSA9IDVdID0gXCJCT1RUT01fUklHSFRcIjtcbiAgICBDb3JuZXJbQ29ybmVyW1wiVE9QX1NUQVJUXCJdID0gOF0gPSBcIlRPUF9TVEFSVFwiO1xuICAgIENvcm5lcltDb3JuZXJbXCJUT1BfRU5EXCJdID0gMTJdID0gXCJUT1BfRU5EXCI7XG4gICAgQ29ybmVyW0Nvcm5lcltcIkJPVFRPTV9TVEFSVFwiXSA9IDldID0gXCJCT1RUT01fU1RBUlRcIjtcbiAgICBDb3JuZXJbQ29ybmVyW1wiQk9UVE9NX0VORFwiXSA9IDEzXSA9IFwiQk9UVE9NX0VORFwiO1xufSkoQ29ybmVyIHx8IChDb3JuZXIgPSB7fSkpO1xuZXhwb3J0IHsgY3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVycywgQ29ybmVyQml0LCBDb3JuZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBjc3NDbGFzc2VzID0ge1xuICAgIExJU1RfSVRFTV9BQ1RJVkFURURfQ0xBU1M6ICdtZGMtbGlzdC1pdGVtLS1hY3RpdmF0ZWQnLFxuICAgIExJU1RfSVRFTV9DTEFTUzogJ21kYy1saXN0LWl0ZW0nLFxuICAgIExJU1RfSVRFTV9ESVNBQkxFRF9DTEFTUzogJ21kYy1saXN0LWl0ZW0tLWRpc2FibGVkJyxcbiAgICBMSVNUX0lURU1fU0VMRUNURURfQ0xBU1M6ICdtZGMtbGlzdC1pdGVtLS1zZWxlY3RlZCcsXG4gICAgUk9PVDogJ21kYy1saXN0Jyxcbn07XG52YXIgc3RyaW5ncyA9IHtcbiAgICBBQ1RJT05fRVZFTlQ6ICdNRENMaXN0OmFjdGlvbicsXG4gICAgQVJJQV9DSEVDS0VEOiAnYXJpYS1jaGVja2VkJyxcbiAgICBBUklBX0NIRUNLRURfQ0hFQ0tCT1hfU0VMRUNUT1I6ICdbcm9sZT1cImNoZWNrYm94XCJdW2FyaWEtY2hlY2tlZD1cInRydWVcIl0nLFxuICAgIEFSSUFfQ0hFQ0tFRF9SQURJT19TRUxFQ1RPUjogJ1tyb2xlPVwicmFkaW9cIl1bYXJpYS1jaGVja2VkPVwidHJ1ZVwiXScsXG4gICAgQVJJQV9DVVJSRU5UOiAnYXJpYS1jdXJyZW50JyxcbiAgICBBUklBX0RJU0FCTEVEOiAnYXJpYS1kaXNhYmxlZCcsXG4gICAgQVJJQV9PUklFTlRBVElPTjogJ2FyaWEtb3JpZW50YXRpb24nLFxuICAgIEFSSUFfT1JJRU5UQVRJT05fSE9SSVpPTlRBTDogJ2hvcml6b250YWwnLFxuICAgIEFSSUFfUk9MRV9DSEVDS0JPWF9TRUxFQ1RPUjogJ1tyb2xlPVwiY2hlY2tib3hcIl0nLFxuICAgIEFSSUFfU0VMRUNURUQ6ICdhcmlhLXNlbGVjdGVkJyxcbiAgICBDSEVDS0JPWF9SQURJT19TRUxFQ1RPUjogJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmRpc2FibGVkKSwgaW5wdXRbdHlwZT1cInJhZGlvXCJdOm5vdCg6ZGlzYWJsZWQpJyxcbiAgICBDSEVDS0JPWF9TRUxFQ1RPUjogJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmRpc2FibGVkKScsXG4gICAgQ0hJTERfRUxFTUVOVFNfVE9fVE9HR0xFX1RBQklOREVYOiBcIlxcbiAgICAuXCIgKyBjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTUyArIFwiIGJ1dHRvbjpub3QoOmRpc2FibGVkKSxcXG4gICAgLlwiICsgY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1MgKyBcIiBhXFxuICBcIixcbiAgICBGT0NVU0FCTEVfQ0hJTERfRUxFTUVOVFM6IFwiXFxuICAgIC5cIiArIGNzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTICsgXCIgYnV0dG9uOm5vdCg6ZGlzYWJsZWQpLFxcbiAgICAuXCIgKyBjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTUyArIFwiIGEsXFxuICAgIC5cIiArIGNzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTICsgXCIgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpub3QoOmRpc2FibGVkKSxcXG4gICAgLlwiICsgY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1MgKyBcIiBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOm5vdCg6ZGlzYWJsZWQpXFxuICBcIixcbiAgICBSQURJT19TRUxFQ1RPUjogJ2lucHV0W3R5cGU9XCJyYWRpb1wiXTpub3QoOmRpc2FibGVkKScsXG59O1xudmFyIG51bWJlcnMgPSB7XG4gICAgVU5TRVRfSU5ERVg6IC0xLFxufTtcbmV4cG9ydCB7IHN0cmluZ3MsIGNzc0NsYXNzZXMsIG51bWJlcnMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBudW1iZXJzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIEVMRU1FTlRTX0tFWV9BTExPV0VEX0lOID0gWydpbnB1dCcsICdidXR0b24nLCAndGV4dGFyZWEnLCAnc2VsZWN0J107XG5mdW5jdGlvbiBpc051bWJlckFycmF5KHNlbGVjdGVkSW5kZXgpIHtcbiAgICByZXR1cm4gc2VsZWN0ZWRJbmRleCBpbnN0YW5jZW9mIEFycmF5O1xufVxudmFyIE1EQ0xpc3RGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ0xpc3RGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ0xpc3RGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgTURDTGlzdEZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy53cmFwRm9jdXNfID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmlzVmVydGljYWxfID0gdHJ1ZTtcbiAgICAgICAgX3RoaXMuaXNTaW5nbGVTZWxlY3Rpb25MaXN0XyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5zZWxlY3RlZEluZGV4XyA9IG51bWJlcnMuVU5TRVRfSU5ERVg7XG4gICAgICAgIF90aGlzLmZvY3VzZWRJdGVtSW5kZXhfID0gbnVtYmVycy5VTlNFVF9JTkRFWDtcbiAgICAgICAgX3RoaXMudXNlQWN0aXZhdGVkQ2xhc3NfID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmFyaWFDdXJyZW50QXR0clZhbHVlXyA9IG51bGw7XG4gICAgICAgIF90aGlzLmlzQ2hlY2tib3hMaXN0XyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5pc1JhZGlvTGlzdF8gPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTGlzdEZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENMaXN0Rm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0xpc3RGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTGlzdEZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3NGb3JFbGVtZW50SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBmb2N1c0l0ZW1BdEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZ2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICAgICAgICAgIGdldEZvY3VzZWRFbGVtZW50SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gICAgICAgICAgICAgICAgZ2V0TGlzdEl0ZW1Db3VudDogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgICAgICAgICBoYXNDaGVja2JveEF0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGhhc1JhZGlvQXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgaXNDaGVja2JveENoZWNrZWRBdEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBpc0ZvY3VzSW5zaWRlTGlzdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgaXNSb290Rm9jdXNlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5QWN0aW9uOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3NGb3JFbGVtZW50SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXRDaGVja2VkQ2hlY2tib3hPclJhZGlvQXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldFRhYkluZGV4Rm9yTGlzdEl0ZW1DaGlsZHJlbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uZ2V0TGlzdEl0ZW1Db3VudCgpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaGFzQ2hlY2tib3hBdEluZGV4KDApKSB7XG4gICAgICAgICAgICB0aGlzLmlzQ2hlY2tib3hMaXN0XyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5hZGFwdGVyXy5oYXNSYWRpb0F0SW5kZXgoMCkpIHtcbiAgICAgICAgICAgIHRoaXMuaXNSYWRpb0xpc3RfID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJpdmF0ZSB3cmFwRm9jdXNfIHZhcmlhYmxlLlxuICAgICAqL1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRXcmFwRm9jdXMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy53cmFwRm9jdXNfID0gdmFsdWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBpc1ZlcnRpY2FsXyBwcml2YXRlIHZhcmlhYmxlLlxuICAgICAqL1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRWZXJ0aWNhbE9yaWVudGF0aW9uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaXNWZXJ0aWNhbF8gPSB2YWx1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGlzU2luZ2xlU2VsZWN0aW9uTGlzdF8gcHJpdmF0ZSB2YXJpYWJsZS5cbiAgICAgKi9cbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0U2luZ2xlU2VsZWN0aW9uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaXNTaW5nbGVTZWxlY3Rpb25MaXN0XyA9IHZhbHVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdXNlQWN0aXZhdGVkQ2xhc3NfIHByaXZhdGUgdmFyaWFibGUuXG4gICAgICovXG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFVzZUFjdGl2YXRlZENsYXNzID0gZnVuY3Rpb24gKHVzZUFjdGl2YXRlZCkge1xuICAgICAgICB0aGlzLnVzZUFjdGl2YXRlZENsYXNzXyA9IHVzZUFjdGl2YXRlZDtcbiAgICB9O1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRTZWxlY3RlZEluZGV4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEluZGV4XztcbiAgICB9O1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRTZWxlY3RlZEluZGV4ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIGlmICghdGhpcy5pc0luZGV4VmFsaWRfKGluZGV4KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzQ2hlY2tib3hMaXN0Xykge1xuICAgICAgICAgICAgdGhpcy5zZXRDaGVja2JveEF0SW5kZXhfKGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzUmFkaW9MaXN0Xykge1xuICAgICAgICAgICAgdGhpcy5zZXRSYWRpb0F0SW5kZXhfKGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2luZ2xlU2VsZWN0aW9uQXRJbmRleF8oaW5kZXgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBGb2N1cyBpbiBoYW5kbGVyIGZvciB0aGUgbGlzdCBpdGVtcy5cbiAgICAgKi9cbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlRm9jdXNJbiA9IGZ1bmN0aW9uIChfLCBsaXN0SXRlbUluZGV4KSB7XG4gICAgICAgIGlmIChsaXN0SXRlbUluZGV4ID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0VGFiSW5kZXhGb3JMaXN0SXRlbUNoaWxkcmVuKGxpc3RJdGVtSW5kZXgsICcwJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEZvY3VzIG91dCBoYW5kbGVyIGZvciB0aGUgbGlzdCBpdGVtcy5cbiAgICAgKi9cbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlRm9jdXNPdXQgPSBmdW5jdGlvbiAoXywgbGlzdEl0ZW1JbmRleCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAobGlzdEl0ZW1JbmRleCA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldFRhYkluZGV4Rm9yTGlzdEl0ZW1DaGlsZHJlbihsaXN0SXRlbUluZGV4LCAnLTEnKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQmV0d2VlbiBGb2N1c291dCAmIEZvY3VzaW4gc29tZSBicm93c2VycyBkbyBub3QgaGF2ZSBmb2N1cyBvbiBhbnkgZWxlbWVudC4gU2V0dGluZyBhIGRlbGF5IHRvIHdhaXQgdGlsbCB0aGUgZm9jdXNcbiAgICAgICAgICogaXMgbW92ZWQgdG8gbmV4dCBlbGVtZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIV90aGlzLmFkYXB0ZXJfLmlzRm9jdXNJbnNpZGVMaXN0KCkpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRUYWJpbmRleFRvRmlyc3RTZWxlY3RlZEl0ZW1fKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDApO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogS2V5IGhhbmRsZXIgZm9yIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVLZXlkb3duID0gZnVuY3Rpb24gKGV2dCwgaXNSb290TGlzdEl0ZW0sIGxpc3RJdGVtSW5kZXgpIHtcbiAgICAgICAgdmFyIGlzQXJyb3dMZWZ0ID0gZXZ0LmtleSA9PT0gJ0Fycm93TGVmdCcgfHwgZXZ0LmtleUNvZGUgPT09IDM3O1xuICAgICAgICB2YXIgaXNBcnJvd1VwID0gZXZ0LmtleSA9PT0gJ0Fycm93VXAnIHx8IGV2dC5rZXlDb2RlID09PSAzODtcbiAgICAgICAgdmFyIGlzQXJyb3dSaWdodCA9IGV2dC5rZXkgPT09ICdBcnJvd1JpZ2h0JyB8fCBldnQua2V5Q29kZSA9PT0gMzk7XG4gICAgICAgIHZhciBpc0Fycm93RG93biA9IGV2dC5rZXkgPT09ICdBcnJvd0Rvd24nIHx8IGV2dC5rZXlDb2RlID09PSA0MDtcbiAgICAgICAgdmFyIGlzSG9tZSA9IGV2dC5rZXkgPT09ICdIb21lJyB8fCBldnQua2V5Q29kZSA9PT0gMzY7XG4gICAgICAgIHZhciBpc0VuZCA9IGV2dC5rZXkgPT09ICdFbmQnIHx8IGV2dC5rZXlDb2RlID09PSAzNTtcbiAgICAgICAgdmFyIGlzRW50ZXIgPSBldnQua2V5ID09PSAnRW50ZXInIHx8IGV2dC5rZXlDb2RlID09PSAxMztcbiAgICAgICAgdmFyIGlzU3BhY2UgPSBldnQua2V5ID09PSAnU3BhY2UnIHx8IGV2dC5rZXlDb2RlID09PSAzMjtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNSb290Rm9jdXNlZCgpKSB7XG4gICAgICAgICAgICBpZiAoaXNBcnJvd1VwIHx8IGlzRW5kKSB7XG4gICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0xhc3RFbGVtZW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc0Fycm93RG93biB8fCBpc0hvbWUpIHtcbiAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzRmlyc3RFbGVtZW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IHRoaXMuYWRhcHRlcl8uZ2V0Rm9jdXNlZEVsZW1lbnRJbmRleCgpO1xuICAgICAgICBpZiAoY3VycmVudEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgY3VycmVudEluZGV4ID0gbGlzdEl0ZW1JbmRleDtcbiAgICAgICAgICAgIGlmIChjdXJyZW50SW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBldmVudCBkb2Vzbid0IGhhdmUgYSBtZGMtbGlzdC1pdGVtIGFuY2VzdG9yIGZyb20gdGhlXG4gICAgICAgICAgICAgICAgLy8gY3VycmVudCBsaXN0IChub3QgZnJvbSBhIHN1Ymxpc3QpLCByZXR1cm4gZWFybHkuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBuZXh0SW5kZXg7XG4gICAgICAgIGlmICgodGhpcy5pc1ZlcnRpY2FsXyAmJiBpc0Fycm93RG93bikgfHwgKCF0aGlzLmlzVmVydGljYWxfICYmIGlzQXJyb3dSaWdodCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJldmVudERlZmF1bHRFdmVudF8oZXZ0KTtcbiAgICAgICAgICAgIG5leHRJbmRleCA9IHRoaXMuZm9jdXNOZXh0RWxlbWVudChjdXJyZW50SW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCh0aGlzLmlzVmVydGljYWxfICYmIGlzQXJyb3dVcCkgfHwgKCF0aGlzLmlzVmVydGljYWxfICYmIGlzQXJyb3dMZWZ0KSkge1xuICAgICAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdEV2ZW50XyhldnQpO1xuICAgICAgICAgICAgbmV4dEluZGV4ID0gdGhpcy5mb2N1c1ByZXZFbGVtZW50KGN1cnJlbnRJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNIb21lKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0RXZlbnRfKGV2dCk7XG4gICAgICAgICAgICBuZXh0SW5kZXggPSB0aGlzLmZvY3VzRmlyc3RFbGVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNFbmQpIHtcbiAgICAgICAgICAgIHRoaXMucHJldmVudERlZmF1bHRFdmVudF8oZXZ0KTtcbiAgICAgICAgICAgIG5leHRJbmRleCA9IHRoaXMuZm9jdXNMYXN0RWxlbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzRW50ZXIgfHwgaXNTcGFjZSkge1xuICAgICAgICAgICAgaWYgKGlzUm9vdExpc3RJdGVtKSB7XG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIGVhcmx5IGlmIGVudGVyIGtleSBpcyBwcmVzc2VkIG9uIGFuY2hvciBlbGVtZW50IHdoaWNoIHRyaWdnZXJzIHN5bnRoZXRpYyBNb3VzZUV2ZW50IGV2ZW50LlxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBldnQudGFyZ2V0O1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LnRhZ05hbWUgPT09ICdBJyAmJiBpc0VudGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdEV2ZW50XyhldnQpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU2VsZWN0YWJsZUxpc3RfKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3RlZEluZGV4T25BY3Rpb25fKGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5QWN0aW9uKGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb2N1c2VkSXRlbUluZGV4XyA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAgaWYgKG5leHRJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFRhYmluZGV4QXRJbmRleF8obmV4dEluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZEl0ZW1JbmRleF8gPSBuZXh0SW5kZXg7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENsaWNrIGhhbmRsZXIgZm9yIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVDbGljayA9IGZ1bmN0aW9uIChpbmRleCwgdG9nZ2xlQ2hlY2tib3gpIHtcbiAgICAgICAgaWYgKGluZGV4ID09PSBudW1iZXJzLlVOU0VUX0lOREVYKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNTZWxlY3RhYmxlTGlzdF8oKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3RlZEluZGV4T25BY3Rpb25fKGluZGV4LCB0b2dnbGVDaGVja2JveCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlBY3Rpb24oaW5kZXgpO1xuICAgICAgICB0aGlzLnNldFRhYmluZGV4QXRJbmRleF8oaW5kZXgpO1xuICAgICAgICB0aGlzLmZvY3VzZWRJdGVtSW5kZXhfID0gaW5kZXg7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBGb2N1c2VzIHRoZSBuZXh0IGVsZW1lbnQgb24gdGhlIGxpc3QuXG4gICAgICovXG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLmZvY3VzTmV4dEVsZW1lbnQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdmFyIGNvdW50ID0gdGhpcy5hZGFwdGVyXy5nZXRMaXN0SXRlbUNvdW50KCk7XG4gICAgICAgIHZhciBuZXh0SW5kZXggPSBpbmRleCArIDE7XG4gICAgICAgIGlmIChuZXh0SW5kZXggPj0gY291bnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLndyYXBGb2N1c18pIHtcbiAgICAgICAgICAgICAgICBuZXh0SW5kZXggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIGVhcmx5IGJlY2F1c2UgbGFzdCBpdGVtIGlzIGFscmVhZHkgZm9jdXNlZC5cbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5mb2N1c0l0ZW1BdEluZGV4KG5leHRJbmRleCk7XG4gICAgICAgIHJldHVybiBuZXh0SW5kZXg7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBGb2N1c2VzIHRoZSBwcmV2aW91cyBlbGVtZW50IG9uIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5mb2N1c1ByZXZFbGVtZW50ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHZhciBwcmV2SW5kZXggPSBpbmRleCAtIDE7XG4gICAgICAgIGlmIChwcmV2SW5kZXggPCAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy53cmFwRm9jdXNfKSB7XG4gICAgICAgICAgICAgICAgcHJldkluZGV4ID0gdGhpcy5hZGFwdGVyXy5nZXRMaXN0SXRlbUNvdW50KCkgLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIGVhcmx5IGJlY2F1c2UgZmlyc3QgaXRlbSBpcyBhbHJlYWR5IGZvY3VzZWQuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZm9jdXNJdGVtQXRJbmRleChwcmV2SW5kZXgpO1xuICAgICAgICByZXR1cm4gcHJldkluZGV4O1xuICAgIH07XG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLmZvY3VzRmlyc3RFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmZvY3VzSXRlbUF0SW5kZXgoMCk7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH07XG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLmZvY3VzTGFzdEVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBsYXN0SW5kZXggPSB0aGlzLmFkYXB0ZXJfLmdldExpc3RJdGVtQ291bnQoKSAtIDE7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZm9jdXNJdGVtQXRJbmRleChsYXN0SW5kZXgpO1xuICAgICAgICByZXR1cm4gbGFzdEluZGV4O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGl0ZW1JbmRleCBJbmRleCBvZiB0aGUgbGlzdCBpdGVtXG4gICAgICogQHBhcmFtIGlzRW5hYmxlZCBTZXRzIHRoZSBsaXN0IGl0ZW0gdG8gZW5hYmxlZCBvciBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0RW5hYmxlZCA9IGZ1bmN0aW9uIChpdGVtSW5kZXgsIGlzRW5hYmxlZCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNJbmRleFZhbGlkXyhpdGVtSW5kZXgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzc0ZvckVsZW1lbnRJbmRleChpdGVtSW5kZXgsIGNzc0NsYXNzZXMuTElTVF9JVEVNX0RJU0FCTEVEX0NMQVNTKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KGl0ZW1JbmRleCwgc3RyaW5ncy5BUklBX0RJU0FCTEVELCAnZmFsc2UnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3NGb3JFbGVtZW50SW5kZXgoaXRlbUluZGV4LCBjc3NDbGFzc2VzLkxJU1RfSVRFTV9ESVNBQkxFRF9DTEFTUyk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleChpdGVtSW5kZXgsIHN0cmluZ3MuQVJJQV9ESVNBQkxFRCwgJ3RydWUnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogRW5zdXJlcyB0aGF0IHByZXZlbnREZWZhdWx0IGlzIG9ubHkgY2FsbGVkIGlmIHRoZSBjb250YWluaW5nIGVsZW1lbnQgZG9lc24ndFxuICAgICAqIGNvbnN1bWUgdGhlIGV2ZW50LCBhbmQgaXQgd2lsbCBjYXVzZSBhbiB1bmludGVuZGVkIHNjcm9sbC5cbiAgICAgKi9cbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUucHJldmVudERlZmF1bHRFdmVudF8gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBldnQudGFyZ2V0O1xuICAgICAgICB2YXIgdGFnTmFtZSA9IChcIlwiICsgdGFyZ2V0LnRhZ05hbWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChFTEVNRU5UU19LRVlfQUxMT1dFRF9JTi5pbmRleE9mKHRhZ05hbWUpID09PSAtMSkge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRTaW5nbGVTZWxlY3Rpb25BdEluZGV4XyA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4XyA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VsZWN0ZWRDbGFzc05hbWUgPSBjc3NDbGFzc2VzLkxJU1RfSVRFTV9TRUxFQ1RFRF9DTEFTUztcbiAgICAgICAgaWYgKHRoaXMudXNlQWN0aXZhdGVkQ2xhc3NfKSB7XG4gICAgICAgICAgICBzZWxlY3RlZENsYXNzTmFtZSA9IGNzc0NsYXNzZXMuTElTVF9JVEVNX0FDVElWQVRFRF9DTEFTUztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4XyAhPT0gbnVtYmVycy5VTlNFVF9JTkRFWCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzc0ZvckVsZW1lbnRJbmRleCh0aGlzLnNlbGVjdGVkSW5kZXhfLCBzZWxlY3RlZENsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzc0ZvckVsZW1lbnRJbmRleChpbmRleCwgc2VsZWN0ZWRDbGFzc05hbWUpO1xuICAgICAgICB0aGlzLnNldEFyaWFGb3JTaW5nbGVTZWxlY3Rpb25BdEluZGV4XyhpbmRleCk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleF8gPSBpbmRleDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgYXJpYSBhdHRyaWJ1dGUgZm9yIHNpbmdsZSBzZWxlY3Rpb24gYXQgZ2l2ZW4gaW5kZXguXG4gICAgICovXG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLnNldEFyaWFGb3JTaW5nbGVTZWxlY3Rpb25BdEluZGV4XyA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAvLyBEZXRlY3QgdGhlIHByZXNlbmNlIG9mIGFyaWEtY3VycmVudCBhbmQgZ2V0IHRoZSB2YWx1ZSBvbmx5IGR1cmluZyBsaXN0IGluaXRpYWxpemF0aW9uIHdoZW4gaXQgaXMgaW4gdW5zZXQgc3RhdGUuXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXhfID09PSBudW1iZXJzLlVOU0VUX0lOREVYKSB7XG4gICAgICAgICAgICB0aGlzLmFyaWFDdXJyZW50QXR0clZhbHVlXyA9XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5nZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaW5kZXgsIHN0cmluZ3MuQVJJQV9DVVJSRU5UKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaXNBcmlhQ3VycmVudCA9IHRoaXMuYXJpYUN1cnJlbnRBdHRyVmFsdWVfICE9PSBudWxsO1xuICAgICAgICB2YXIgYXJpYUF0dHJpYnV0ZSA9IGlzQXJpYUN1cnJlbnQgPyBzdHJpbmdzLkFSSUFfQ1VSUkVOVCA6IHN0cmluZ3MuQVJJQV9TRUxFQ1RFRDtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleF8gIT09IG51bWJlcnMuVU5TRVRfSU5ERVgpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KHRoaXMuc2VsZWN0ZWRJbmRleF8sIGFyaWFBdHRyaWJ1dGUsICdmYWxzZScpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhcmlhQXR0cmlidXRlVmFsdWUgPSBpc0FyaWFDdXJyZW50ID8gdGhpcy5hcmlhQ3VycmVudEF0dHJWYWx1ZV8gOiAndHJ1ZSc7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KGluZGV4LCBhcmlhQXR0cmlidXRlLCBhcmlhQXR0cmlidXRlVmFsdWUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyByYWRpbyBhdCBnaXZlIGluZGV4LiBSYWRpbyBkb2Vzbid0IGNoYW5nZSB0aGUgY2hlY2tlZCBzdGF0ZSBpZiBpdCBpcyBhbHJlYWR5IGNoZWNrZWQuXG4gICAgICovXG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFJhZGlvQXRJbmRleF8gPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRDaGVja2VkQ2hlY2tib3hPclJhZGlvQXRJbmRleChpbmRleCwgdHJ1ZSk7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXhfICE9PSBudW1iZXJzLlVOU0VUX0lOREVYKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleCh0aGlzLnNlbGVjdGVkSW5kZXhfLCBzdHJpbmdzLkFSSUFfQ0hFQ0tFRCwgJ2ZhbHNlJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaW5kZXgsIHN0cmluZ3MuQVJJQV9DSEVDS0VELCAndHJ1ZScpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXhfID0gaW5kZXg7XG4gICAgfTtcbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0Q2hlY2tib3hBdEluZGV4XyA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYWRhcHRlcl8uZ2V0TGlzdEl0ZW1Db3VudCgpOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChpbmRleC5pbmRleE9mKGkpID49IDApIHtcbiAgICAgICAgICAgICAgICBpc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRDaGVja2VkQ2hlY2tib3hPclJhZGlvQXRJbmRleChpLCBpc0NoZWNrZWQpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaSwgc3RyaW5ncy5BUklBX0NIRUNLRUQsIGlzQ2hlY2tlZCA/ICd0cnVlJyA6ICdmYWxzZScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleF8gPSBpbmRleDtcbiAgICB9O1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRUYWJpbmRleEF0SW5kZXhfID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIGlmICh0aGlzLmZvY3VzZWRJdGVtSW5kZXhfID09PSBudW1iZXJzLlVOU0VUX0lOREVYICYmIGluZGV4ICE9PSAwKSB7XG4gICAgICAgICAgICAvLyBJZiBubyBsaXN0IGl0ZW0gd2FzIHNlbGVjdGVkIHNldCBmaXJzdCBsaXN0IGl0ZW0ncyB0YWJpbmRleCB0byAtMS5cbiAgICAgICAgICAgIC8vIEdlbmVyYWxseSwgdGFiaW5kZXggaXMgc2V0IHRvIDAgb24gZmlyc3QgbGlzdCBpdGVtIG9mIGxpc3QgdGhhdCBoYXMgbm8gcHJlc2VsZWN0ZWQgaXRlbXMuXG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleCgwLCAndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmZvY3VzZWRJdGVtSW5kZXhfID49IDAgJiYgdGhpcy5mb2N1c2VkSXRlbUluZGV4XyAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KHRoaXMuZm9jdXNlZEl0ZW1JbmRleF8sICd0YWJpbmRleCcsICctMScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KGluZGV4LCAndGFiaW5kZXgnLCAnMCcpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiBSZXR1cm4gdHJ1ZSBpZiBpdCBpcyBzaW5nbGUgc2VsZWN0aW4gbGlzdCwgY2hlY2tib3ggbGlzdCBvciByYWRpbyBsaXN0LlxuICAgICAqL1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5pc1NlbGVjdGFibGVMaXN0XyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNTaW5nbGVTZWxlY3Rpb25MaXN0XyB8fCB0aGlzLmlzQ2hlY2tib3hMaXN0XyB8fCB0aGlzLmlzUmFkaW9MaXN0XztcbiAgICB9O1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRUYWJpbmRleFRvRmlyc3RTZWxlY3RlZEl0ZW1fID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdGFyZ2V0SW5kZXggPSAwO1xuICAgICAgICBpZiAodGhpcy5pc1NlbGVjdGFibGVMaXN0XygpKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0ZWRJbmRleF8gPT09ICdudW1iZXInICYmIHRoaXMuc2VsZWN0ZWRJbmRleF8gIT09IG51bWJlcnMuVU5TRVRfSU5ERVgpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleF87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc051bWJlckFycmF5KHRoaXMuc2VsZWN0ZWRJbmRleF8pICYmIHRoaXMuc2VsZWN0ZWRJbmRleF8ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRhcmdldEluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4Xy5yZWR1Y2UoZnVuY3Rpb24gKGN1cnJlbnRJbmRleCwgbWluSW5kZXgpIHsgcmV0dXJuIE1hdGgubWluKGN1cnJlbnRJbmRleCwgbWluSW5kZXgpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFRhYmluZGV4QXRJbmRleF8odGFyZ2V0SW5kZXgpO1xuICAgIH07XG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLmlzSW5kZXhWYWxpZF8gPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGluZGV4IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0NoZWNrYm94TGlzdF8pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01EQ0xpc3RGb3VuZGF0aW9uOiBBcnJheSBvZiBpbmRleCBpcyBvbmx5IHN1cHBvcnRlZCBmb3IgY2hlY2tib3ggYmFzZWQgbGlzdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGluZGV4Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4LnNvbWUoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIF90aGlzLmlzSW5kZXhJblJhbmdlXyhpKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGluZGV4ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNDaGVja2JveExpc3RfKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNRENMaXN0Rm91bmRhdGlvbjogRXhwZWN0ZWQgYXJyYXkgb2YgaW5kZXggZm9yIGNoZWNrYm94IGJhc2VkIGxpc3QgYnV0IGdvdCBudW1iZXI6ICcgKyBpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc0luZGV4SW5SYW5nZV8oaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuaXNJbmRleEluUmFuZ2VfID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHZhciBsaXN0U2l6ZSA9IHRoaXMuYWRhcHRlcl8uZ2V0TGlzdEl0ZW1Db3VudCgpO1xuICAgICAgICByZXR1cm4gaW5kZXggPj0gMCAmJiBpbmRleCA8IGxpc3RTaXplO1xuICAgIH07XG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFNlbGVjdGVkSW5kZXhPbkFjdGlvbl8gPSBmdW5jdGlvbiAoaW5kZXgsIHRvZ2dsZUNoZWNrYm94KSB7XG4gICAgICAgIGlmICh0b2dnbGVDaGVja2JveCA9PT0gdm9pZCAwKSB7IHRvZ2dsZUNoZWNrYm94ID0gdHJ1ZTsgfVxuICAgICAgICBpZiAodGhpcy5pc0NoZWNrYm94TGlzdF8pIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQ2hlY2tib3hBdEluZGV4XyhpbmRleCwgdG9nZ2xlQ2hlY2tib3gpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3RlZEluZGV4KGluZGV4KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLnRvZ2dsZUNoZWNrYm94QXRJbmRleF8gPSBmdW5jdGlvbiAoaW5kZXgsIHRvZ2dsZUNoZWNrYm94KSB7XG4gICAgICAgIHZhciBpc0NoZWNrZWQgPSB0aGlzLmFkYXB0ZXJfLmlzQ2hlY2tib3hDaGVja2VkQXRJbmRleChpbmRleCk7XG4gICAgICAgIGlmICh0b2dnbGVDaGVja2JveCkge1xuICAgICAgICAgICAgaXNDaGVja2VkID0gIWlzQ2hlY2tlZDtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0Q2hlY2tlZENoZWNrYm94T3JSYWRpb0F0SW5kZXgoaW5kZXgsIGlzQ2hlY2tlZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaW5kZXgsIHN0cmluZ3MuQVJJQV9DSEVDS0VELCBpc0NoZWNrZWQgPyAndHJ1ZScgOiAnZmFsc2UnKTtcbiAgICAgICAgLy8gSWYgbm9uZSBvZiB0aGUgY2hlY2tib3ggaXRlbXMgYXJlIHNlbGVjdGVkIGFuZCBzZWxlY3RlZEluZGV4IGlzIG5vdCBpbml0aWFsaXplZCB0aGVuIHByb3ZpZGUgYSBkZWZhdWx0IHZhbHVlLlxuICAgICAgICB2YXIgc2VsZWN0ZWRJbmRleGVzID0gdGhpcy5zZWxlY3RlZEluZGV4XyA9PT0gbnVtYmVycy5VTlNFVF9JTkRFWCA/IFtdIDogdGhpcy5zZWxlY3RlZEluZGV4Xy5zbGljZSgpO1xuICAgICAgICBpZiAoaXNDaGVja2VkKSB7XG4gICAgICAgICAgICBzZWxlY3RlZEluZGV4ZXMucHVzaChpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3RlZEluZGV4ZXMgPSBzZWxlY3RlZEluZGV4ZXMuZmlsdGVyKGZ1bmN0aW9uIChpKSB7IHJldHVybiBpICE9PSBpbmRleDsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4XyA9IHNlbGVjdGVkSW5kZXhlcztcbiAgICB9O1xuICAgIHJldHVybiBNRENMaXN0Rm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDTGlzdEZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENMaXN0Rm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDQ29tcG9uZW50IH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IGNsb3Nlc3QsIG1hdGNoZXMgfSBmcm9tICdAbWF0ZXJpYWwvZG9tL3BvbnlmaWxsJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBNRENMaXN0Rm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbic7XG52YXIgTURDTGlzdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENMaXN0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ0xpc3QoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0xpc3QucHJvdG90eXBlLCBcInZlcnRpY2FsXCIsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0VmVydGljYWxPcmllbnRhdGlvbih2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENMaXN0LnByb3RvdHlwZSwgXCJsaXN0RWxlbWVudHNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBbXS5zbGljZS5jYWxsKHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvckFsbChcIi5cIiArIGNzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENMaXN0LnByb3RvdHlwZSwgXCJ3cmFwRm9jdXNcIiwge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRXcmFwRm9jdXModmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTGlzdC5wcm90b3R5cGUsIFwic2luZ2xlU2VsZWN0aW9uXCIsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoaXNTaW5nbGVTZWxlY3Rpb25MaXN0KSB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldFNpbmdsZVNlbGVjdGlvbihpc1NpbmdsZVNlbGVjdGlvbkxpc3QpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTGlzdC5wcm90b3R5cGUsIFwic2VsZWN0ZWRJbmRleFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbl8uZ2V0U2VsZWN0ZWRJbmRleCgpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRTZWxlY3RlZEluZGV4KGluZGV4KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDTGlzdC5hdHRhY2hUbyA9IGZ1bmN0aW9uIChyb290KSB7XG4gICAgICAgIHJldHVybiBuZXcgTURDTGlzdChyb290KTtcbiAgICB9O1xuICAgIE1EQ0xpc3QucHJvdG90eXBlLmluaXRpYWxTeW5jV2l0aERPTSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGlja18gPSB0aGlzLmhhbmRsZUNsaWNrRXZlbnRfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlS2V5ZG93bl8gPSB0aGlzLmhhbmRsZUtleWRvd25FdmVudF8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5mb2N1c0luRXZlbnRMaXN0ZW5lcl8gPSB0aGlzLmhhbmRsZUZvY3VzSW5FdmVudF8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5mb2N1c091dEV2ZW50TGlzdGVuZXJfID0gdGhpcy5oYW5kbGVGb2N1c091dEV2ZW50Xy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmxpc3Rlbigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5ZG93bl8pO1xuICAgICAgICB0aGlzLmxpc3RlbignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrXyk7XG4gICAgICAgIHRoaXMubGlzdGVuKCdmb2N1c2luJywgdGhpcy5mb2N1c0luRXZlbnRMaXN0ZW5lcl8pO1xuICAgICAgICB0aGlzLmxpc3RlbignZm9jdXNvdXQnLCB0aGlzLmZvY3VzT3V0RXZlbnRMaXN0ZW5lcl8pO1xuICAgICAgICB0aGlzLmxheW91dCgpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVMaXN0VHlwZSgpO1xuICAgIH07XG4gICAgTURDTGlzdC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy51bmxpc3Rlbigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5ZG93bl8pO1xuICAgICAgICB0aGlzLnVubGlzdGVuKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2tfKTtcbiAgICAgICAgdGhpcy51bmxpc3RlbignZm9jdXNpbicsIHRoaXMuZm9jdXNJbkV2ZW50TGlzdGVuZXJfKTtcbiAgICAgICAgdGhpcy51bmxpc3RlbignZm9jdXNvdXQnLCB0aGlzLmZvY3VzT3V0RXZlbnRMaXN0ZW5lcl8pO1xuICAgIH07XG4gICAgTURDTGlzdC5wcm90b3R5cGUubGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGlyZWN0aW9uID0gdGhpcy5yb290Xy5nZXRBdHRyaWJ1dGUoc3RyaW5ncy5BUklBX09SSUVOVEFUSU9OKTtcbiAgICAgICAgdGhpcy52ZXJ0aWNhbCA9IGRpcmVjdGlvbiAhPT0gc3RyaW5ncy5BUklBX09SSUVOVEFUSU9OX0hPUklaT05UQUw7XG4gICAgICAgIC8vIExpc3QgaXRlbXMgbmVlZCB0byBoYXZlIGF0IGxlYXN0IHRhYmluZGV4PS0xIHRvIGJlIGZvY3VzYWJsZS5cbiAgICAgICAgW10uc2xpY2UuY2FsbCh0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZGMtbGlzdC1pdGVtOm5vdChbdGFiaW5kZXhdKScpKVxuICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBDaGlsZCBidXR0b24vYSBlbGVtZW50cyBhcmUgbm90IHRhYmJhYmxlIHVudGlsIHRoZSBsaXN0IGl0ZW0gaXMgZm9jdXNlZC5cbiAgICAgICAgW10uc2xpY2UuY2FsbCh0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3JBbGwoc3RyaW5ncy5GT0NVU0FCTEVfQ0hJTERfRUxFTUVOVFMpKVxuICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7IHJldHVybiBlbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7IH0pO1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmxheW91dCgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBzZWxlY3RlZEluZGV4IHZhbHVlIGJhc2VkIG9uIHByZS1zZWxlY3RlZCBjaGVja2JveCBsaXN0IGl0ZW1zLCBzaW5nbGUgc2VsZWN0aW9uIG9yIHJhZGlvLlxuICAgICAqL1xuICAgIE1EQ0xpc3QucHJvdG90eXBlLmluaXRpYWxpemVMaXN0VHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGNoZWNrYm94TGlzdEl0ZW1zID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yQWxsKHN0cmluZ3MuQVJJQV9ST0xFX0NIRUNLQk9YX1NFTEVDVE9SKTtcbiAgICAgICAgdmFyIHNpbmdsZVNlbGVjdGVkTGlzdEl0ZW0gPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3IoXCJcXG4gICAgICAuXCIgKyBjc3NDbGFzc2VzLkxJU1RfSVRFTV9BQ1RJVkFURURfQ0xBU1MgKyBcIixcXG4gICAgICAuXCIgKyBjc3NDbGFzc2VzLkxJU1RfSVRFTV9TRUxFQ1RFRF9DTEFTUyArIFwiXFxuICAgIFwiKTtcbiAgICAgICAgdmFyIHJhZGlvU2VsZWN0ZWRMaXN0SXRlbSA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihzdHJpbmdzLkFSSUFfQ0hFQ0tFRF9SQURJT19TRUxFQ1RPUik7XG4gICAgICAgIGlmIChjaGVja2JveExpc3RJdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBwcmVzZWxlY3RlZEl0ZW1zID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yQWxsKHN0cmluZ3MuQVJJQV9DSEVDS0VEX0NIRUNLQk9YX1NFTEVDVE9SKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9XG4gICAgICAgICAgICAgICAgW10ubWFwLmNhbGwocHJlc2VsZWN0ZWRJdGVtcywgZnVuY3Rpb24gKGxpc3RJdGVtKSB7IHJldHVybiBfdGhpcy5saXN0RWxlbWVudHMuaW5kZXhPZihsaXN0SXRlbSk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNpbmdsZVNlbGVjdGVkTGlzdEl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChzaW5nbGVTZWxlY3RlZExpc3RJdGVtLmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzc2VzLkxJU1RfSVRFTV9BQ1RJVkFURURfQ0xBU1MpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRVc2VBY3RpdmF0ZWRDbGFzcyh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2luZ2xlU2VsZWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMubGlzdEVsZW1lbnRzLmluZGV4T2Yoc2luZ2xlU2VsZWN0ZWRMaXN0SXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmFkaW9TZWxlY3RlZExpc3RJdGVtKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLmxpc3RFbGVtZW50cy5pbmRleE9mKHJhZGlvU2VsZWN0ZWRMaXN0SXRlbSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGxpc3QgaXRlbSBhdCBpdGVtSW5kZXggdG8gdGhlIGRlc2lyZWQgaXNFbmFibGVkIHN0YXRlLlxuICAgICAqIEBwYXJhbSBpdGVtSW5kZXggSW5kZXggb2YgdGhlIGxpc3QgaXRlbVxuICAgICAqIEBwYXJhbSBpc0VuYWJsZWQgU2V0cyB0aGUgbGlzdCBpdGVtIHRvIGVuYWJsZWQgb3IgZGlzYWJsZWQuXG4gICAgICovXG4gICAgTURDTGlzdC5wcm90b3R5cGUuc2V0RW5hYmxlZCA9IGZ1bmN0aW9uIChpdGVtSW5kZXgsIGlzRW5hYmxlZCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldEVuYWJsZWQoaXRlbUluZGV4LCBpc0VuYWJsZWQpO1xuICAgIH07XG4gICAgTURDTGlzdC5wcm90b3R5cGUuZ2V0RGVmYXVsdEZvdW5kYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIERPIE5PVCBJTkxJTkUgdGhpcyB2YXJpYWJsZS4gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGZvdW5kYXRpb25zIHRha2UgYSBQYXJ0aWFsPE1EQ0Zvb0FkYXB0ZXI+LlxuICAgICAgICAvLyBUbyBlbnN1cmUgd2UgZG9uJ3QgYWNjaWRlbnRhbGx5IG9taXQgYW55IG1ldGhvZHMsIHdlIG5lZWQgYSBzZXBhcmF0ZSwgc3Ryb25nbHkgdHlwZWQgYWRhcHRlciB2YXJpYWJsZS5cbiAgICAgICAgdmFyIGFkYXB0ZXIgPSB7XG4gICAgICAgICAgICBhZGRDbGFzc0ZvckVsZW1lbnRJbmRleDogZnVuY3Rpb24gKGluZGV4LCBjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IF90aGlzLmxpc3RFbGVtZW50c1tpbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvY3VzSXRlbUF0SW5kZXg6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gX3RoaXMubGlzdEVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleDogZnVuY3Rpb24gKGluZGV4LCBhdHRyKSB7IHJldHVybiBfdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdLmdldEF0dHJpYnV0ZShhdHRyKTsgfSxcbiAgICAgICAgICAgIGdldEZvY3VzZWRFbGVtZW50SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmxpc3RFbGVtZW50cy5pbmRleE9mKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpOyB9LFxuICAgICAgICAgICAgZ2V0TGlzdEl0ZW1Db3VudDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMubGlzdEVsZW1lbnRzLmxlbmd0aDsgfSxcbiAgICAgICAgICAgIGhhc0NoZWNrYm94QXRJbmRleDogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpc3RJdGVtID0gX3RoaXMubGlzdEVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICByZXR1cm4gISFsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuQ0hFQ0tCT1hfU0VMRUNUT1IpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhc1JhZGlvQXRJbmRleDogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpc3RJdGVtID0gX3RoaXMubGlzdEVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICByZXR1cm4gISFsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuUkFESU9fU0VMRUNUT1IpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzQ2hlY2tib3hDaGVja2VkQXRJbmRleDogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpc3RJdGVtID0gX3RoaXMubGlzdEVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICB2YXIgdG9nZ2xlRWwgPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuQ0hFQ0tCT1hfU0VMRUNUT1IpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0b2dnbGVFbC5jaGVja2VkO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzRm9jdXNJbnNpZGVMaXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJvb3RfLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzUm9vdEZvY3VzZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IF90aGlzLnJvb3RfOyB9LFxuICAgICAgICAgICAgbm90aWZ5QWN0aW9uOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KHN0cmluZ3MuQUNUSU9OX0VWRU5ULCB7IGluZGV4OiBpbmRleCB9LCAvKiogc2hvdWxkQnViYmxlICovIHRydWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzRm9yRWxlbWVudEluZGV4OiBmdW5jdGlvbiAoaW5kZXgsIGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gX3RoaXMubGlzdEVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4OiBmdW5jdGlvbiAoaW5kZXgsIGF0dHIsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBfdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0Q2hlY2tlZENoZWNrYm94T3JSYWRpb0F0SW5kZXg6IGZ1bmN0aW9uIChpbmRleCwgaXNDaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpc3RJdGVtID0gX3RoaXMubGlzdEVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICB2YXIgdG9nZ2xlRWwgPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuQ0hFQ0tCT1hfUkFESU9fU0VMRUNUT1IpO1xuICAgICAgICAgICAgICAgIHRvZ2dsZUVsLmNoZWNrZWQgPSBpc0NoZWNrZWQ7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgICAgICAgICAgICAgZXZlbnQuaW5pdEV2ZW50KCdjaGFuZ2UnLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0b2dnbGVFbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRUYWJJbmRleEZvckxpc3RJdGVtQ2hpbGRyZW46IGZ1bmN0aW9uIChsaXN0SXRlbUluZGV4LCB0YWJJbmRleFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBfdGhpcy5saXN0RWxlbWVudHNbbGlzdEl0ZW1JbmRleF07XG4gICAgICAgICAgICAgICAgdmFyIGxpc3RJdGVtQ2hpbGRyZW4gPSBbXS5zbGljZS5jYWxsKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzdHJpbmdzLkNISUxEX0VMRU1FTlRTX1RPX1RPR0dMRV9UQUJJTkRFWCkpO1xuICAgICAgICAgICAgICAgIGxpc3RJdGVtQ2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGVsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB0YWJJbmRleFZhbHVlKTsgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IE1EQ0xpc3RGb3VuZGF0aW9uKGFkYXB0ZXIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXNlZCB0byBmaWd1cmUgb3V0IHdoaWNoIGxpc3QgaXRlbSB0aGlzIGV2ZW50IGlzIHRhcmdldHRpbmcuIE9yIHJldHVybnMgLTEgaWZcbiAgICAgKiB0aGVyZSBpcyBubyBsaXN0IGl0ZW1cbiAgICAgKi9cbiAgICBNRENMaXN0LnByb3RvdHlwZS5nZXRMaXN0SXRlbUluZGV4XyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIGV2ZW50VGFyZ2V0ID0gZXZ0LnRhcmdldDtcbiAgICAgICAgdmFyIG5lYXJlc3RQYXJlbnQgPSBjbG9zZXN0KGV2ZW50VGFyZ2V0LCBcIi5cIiArIGNzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTICsgXCIsIC5cIiArIGNzc0NsYXNzZXMuUk9PVCk7XG4gICAgICAgIC8vIEdldCB0aGUgaW5kZXggb2YgdGhlIGVsZW1lbnQgaWYgaXQgaXMgYSBsaXN0IGl0ZW0uXG4gICAgICAgIGlmIChuZWFyZXN0UGFyZW50ICYmIG1hdGNoZXMobmVhcmVzdFBhcmVudCwgXCIuXCIgKyBjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTUykpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RFbGVtZW50cy5pbmRleE9mKG5lYXJlc3RQYXJlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVzZWQgdG8gZmlndXJlIG91dCB3aGljaCBlbGVtZW50IHdhcyBjbGlja2VkIGJlZm9yZSBzZW5kaW5nIHRoZSBldmVudCB0byB0aGUgZm91bmRhdGlvbi5cbiAgICAgKi9cbiAgICBNRENMaXN0LnByb3RvdHlwZS5oYW5kbGVGb2N1c0luRXZlbnRfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldExpc3RJdGVtSW5kZXhfKGV2dCk7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uaGFuZGxlRm9jdXNJbihldnQsIGluZGV4KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVzZWQgdG8gZmlndXJlIG91dCB3aGljaCBlbGVtZW50IHdhcyBjbGlja2VkIGJlZm9yZSBzZW5kaW5nIHRoZSBldmVudCB0byB0aGUgZm91bmRhdGlvbi5cbiAgICAgKi9cbiAgICBNRENMaXN0LnByb3RvdHlwZS5oYW5kbGVGb2N1c091dEV2ZW50XyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRMaXN0SXRlbUluZGV4XyhldnQpO1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmhhbmRsZUZvY3VzT3V0KGV2dCwgaW5kZXgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXNlZCB0byBmaWd1cmUgb3V0IHdoaWNoIGVsZW1lbnQgd2FzIGZvY3VzZWQgd2hlbiBrZXlkb3duIGV2ZW50IG9jY3VycmVkIGJlZm9yZSBzZW5kaW5nIHRoZSBldmVudCB0byB0aGVcbiAgICAgKiBmb3VuZGF0aW9uLlxuICAgICAqL1xuICAgIE1EQ0xpc3QucHJvdG90eXBlLmhhbmRsZUtleWRvd25FdmVudF8gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0TGlzdEl0ZW1JbmRleF8oZXZ0KTtcbiAgICAgICAgdmFyIHRhcmdldCA9IGV2dC50YXJnZXQ7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uaGFuZGxlS2V5ZG93bihldnQsIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1MpLCBpbmRleCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIGZpZ3VyZSBvdXQgd2hpY2ggZWxlbWVudCB3YXMgY2xpY2tlZCBiZWZvcmUgc2VuZGluZyB0aGUgZXZlbnQgdG8gdGhlIGZvdW5kYXRpb24uXG4gICAgICovXG4gICAgTURDTGlzdC5wcm90b3R5cGUuaGFuZGxlQ2xpY2tFdmVudF8gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0TGlzdEl0ZW1JbmRleF8oZXZ0KTtcbiAgICAgICAgdmFyIHRhcmdldCA9IGV2dC50YXJnZXQ7XG4gICAgICAgIC8vIFRvZ2dsZSB0aGUgY2hlY2tib3ggb25seSBpZiBpdCdzIG5vdCB0aGUgdGFyZ2V0IG9mIHRoZSBldmVudCwgb3IgdGhlIGNoZWNrYm94IHdpbGwgaGF2ZSAyIGNoYW5nZSBldmVudHMuXG4gICAgICAgIHZhciB0b2dnbGVDaGVja2JveCA9ICFtYXRjaGVzKHRhcmdldCwgc3RyaW5ncy5DSEVDS0JPWF9SQURJT19TRUxFQ1RPUik7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uaGFuZGxlQ2xpY2soaW5kZXgsIHRvZ2dsZUNoZWNrYm94KTtcbiAgICB9O1xuICAgIHJldHVybiBNRENMaXN0O1xufShNRENDb21wb25lbnQpKTtcbmV4cG9ydCB7IE1EQ0xpc3QgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBDb3JuZXIsIENvcm5lckJpdCwgY3NzQ2xhc3NlcywgbnVtYmVycywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmlzT3Blbl8gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaXNRdWlja09wZW5fID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmlzSG9pc3RlZEVsZW1lbnRfID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmlzRml4ZWRQb3NpdGlvbl8gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMub3BlbkFuaW1hdGlvbkVuZFRpbWVySWRfID0gMDtcbiAgICAgICAgX3RoaXMuY2xvc2VBbmltYXRpb25FbmRUaW1lcklkXyA9IDA7XG4gICAgICAgIF90aGlzLmFuaW1hdGlvblJlcXVlc3RJZF8gPSAwO1xuICAgICAgICBfdGhpcy5hbmNob3JDb3JuZXJfID0gQ29ybmVyLlRPUF9TVEFSVDtcbiAgICAgICAgX3RoaXMuYW5jaG9yTWFyZ2luXyA9IHsgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwLCBsZWZ0OiAwIH07XG4gICAgICAgIF90aGlzLnBvc2l0aW9uXyA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENNZW51U3VyZmFjZUZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENNZW51U3VyZmFjZUZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENNZW51U3VyZmFjZUZvdW5kYXRpb24sIFwibnVtYmVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlcnM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENNZW51U3VyZmFjZUZvdW5kYXRpb24sIFwiQ29ybmVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gQ29ybmVyO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBzZWUge0BsaW5rIE1EQ01lbnVTdXJmYWNlQWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm4gdHlwZXMuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBoYXNDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgaGFzQW5jaG9yOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBpc0VsZW1lbnRJbkNvbnRhaW5lcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgaXNGb2N1c2VkOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBpc1J0bDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgZ2V0SW5uZXJEaW1lbnNpb25zOiBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyBoZWlnaHQ6IDAsIHdpZHRoOiAwIH0pOyB9LFxuICAgICAgICAgICAgICAgIGdldEFuY2hvckRpbWVuc2lvbnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgICAgICAgICAgZ2V0V2luZG93RGltZW5zaW9uczogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgaGVpZ2h0OiAwLCB3aWR0aDogMCB9KTsgfSxcbiAgICAgICAgICAgICAgICBnZXRCb2R5RGltZW5zaW9uczogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgaGVpZ2h0OiAwLCB3aWR0aDogMCB9KTsgfSxcbiAgICAgICAgICAgICAgICBnZXRXaW5kb3dTY3JvbGw6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IHg6IDAsIHk6IDAgfSk7IH0sXG4gICAgICAgICAgICAgICAgc2V0UG9zaXRpb246IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXRNYXhIZWlnaHQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXRUcmFuc2Zvcm1PcmlnaW46IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzYXZlRm9jdXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZXN0b3JlRm9jdXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlDbG9zZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeU9wZW46IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5jc3NDbGFzc2VzLCBST09UID0gX2EuUk9PVCwgT1BFTiA9IF9hLk9QRU47XG4gICAgICAgIGlmICghdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhST09UKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFJPT1QgKyBcIiBjbGFzcyByZXF1aXJlZCBpbiByb290IGVsZW1lbnQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKE9QRU4pKSB7XG4gICAgICAgICAgICB0aGlzLmlzT3Blbl8gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLm9wZW5BbmltYXRpb25FbmRUaW1lcklkXyk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsb3NlQW5pbWF0aW9uRW5kVGltZXJJZF8pO1xuICAgICAgICAvLyBDYW5jZWwgYW55IGN1cnJlbnRseSBydW5uaW5nIGFuaW1hdGlvbnMuXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uUmVxdWVzdElkXyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gY29ybmVyIERlZmF1bHQgYW5jaG9yIGNvcm5lciBhbGlnbm1lbnQgb2YgdG9wLWxlZnQgbWVudSBzdXJmYWNlIGNvcm5lci5cbiAgICAgKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLnNldEFuY2hvckNvcm5lciA9IGZ1bmN0aW9uIChjb3JuZXIpIHtcbiAgICAgICAgdGhpcy5hbmNob3JDb3JuZXJfID0gY29ybmVyO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIG1hcmdpbiBTZXQgb2YgbWFyZ2luIHZhbHVlcyBmcm9tIGFuY2hvci5cbiAgICAgKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLnNldEFuY2hvck1hcmdpbiA9IGZ1bmN0aW9uIChtYXJnaW4pIHtcbiAgICAgICAgdGhpcy5hbmNob3JNYXJnaW5fLnRvcCA9IG1hcmdpbi50b3AgfHwgMDtcbiAgICAgICAgdGhpcy5hbmNob3JNYXJnaW5fLnJpZ2h0ID0gbWFyZ2luLnJpZ2h0IHx8IDA7XG4gICAgICAgIHRoaXMuYW5jaG9yTWFyZ2luXy5ib3R0b20gPSBtYXJnaW4uYm90dG9tIHx8IDA7XG4gICAgICAgIHRoaXMuYW5jaG9yTWFyZ2luXy5sZWZ0ID0gbWFyZ2luLmxlZnQgfHwgMDtcbiAgICB9O1xuICAgIC8qKiBVc2VkIHRvIGluZGljYXRlIGlmIHRoZSBtZW51LXN1cmZhY2UgaXMgaG9pc3RlZCB0byB0aGUgYm9keS4gKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLnNldElzSG9pc3RlZCA9IGZ1bmN0aW9uIChpc0hvaXN0ZWQpIHtcbiAgICAgICAgdGhpcy5pc0hvaXN0ZWRFbGVtZW50XyA9IGlzSG9pc3RlZDtcbiAgICB9O1xuICAgIC8qKiBVc2VkIHRvIHNldCB0aGUgbWVudS1zdXJmYWNlIGNhbGN1bGF0aW9ucyBiYXNlZCBvbiBhIGZpeGVkIHBvc2l0aW9uIG1lbnUuICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRGaXhlZFBvc2l0aW9uID0gZnVuY3Rpb24gKGlzRml4ZWRQb3NpdGlvbikge1xuICAgICAgICB0aGlzLmlzRml4ZWRQb3NpdGlvbl8gPSBpc0ZpeGVkUG9zaXRpb247XG4gICAgfTtcbiAgICAvKiogU2V0cyB0aGUgbWVudS1zdXJmYWNlIHBvc2l0aW9uIG9uIHRoZSBwYWdlLiAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0QWJzb2x1dGVQb3NpdGlvbiA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHRoaXMucG9zaXRpb25fLnggPSB0aGlzLmlzRmluaXRlXyh4KSA/IHggOiAwO1xuICAgICAgICB0aGlzLnBvc2l0aW9uXy55ID0gdGhpcy5pc0Zpbml0ZV8oeSkgPyB5IDogMDtcbiAgICB9O1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0UXVpY2tPcGVuID0gZnVuY3Rpb24gKHF1aWNrT3Blbikge1xuICAgICAgICB0aGlzLmlzUXVpY2tPcGVuXyA9IHF1aWNrT3BlbjtcbiAgICB9O1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuaXNPcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc09wZW5fO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogT3BlbiB0aGUgbWVudSBzdXJmYWNlLlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zYXZlRm9jdXMoKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzUXVpY2tPcGVuXykge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BTklNQVRJTkdfT1BFTik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hbmltYXRpb25SZXF1ZXN0SWRfID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5jc3NDbGFzc2VzLk9QRU4pO1xuICAgICAgICAgICAgX3RoaXMuZGltZW5zaW9uc18gPSBfdGhpcy5hZGFwdGVyXy5nZXRJbm5lckRpbWVuc2lvbnMoKTtcbiAgICAgICAgICAgIF90aGlzLmF1dG9Qb3NpdGlvbl8oKTtcbiAgICAgICAgICAgIGlmIChfdGhpcy5pc1F1aWNrT3Blbl8pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5ub3RpZnlPcGVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5vcGVuQW5pbWF0aW9uRW5kVGltZXJJZF8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMub3BlbkFuaW1hdGlvbkVuZFRpbWVySWRfID0gMDtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQU5JTUFUSU5HX09QRU4pO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5ub3RpZnlPcGVuKCk7XG4gICAgICAgICAgICAgICAgfSwgbnVtYmVycy5UUkFOU0lUSU9OX09QRU5fRFVSQVRJT04pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pc09wZW5fID0gdHJ1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENsb3NlcyB0aGUgbWVudSBzdXJmYWNlLlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoc2tpcFJlc3RvcmVGb2N1cykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoc2tpcFJlc3RvcmVGb2N1cyA9PT0gdm9pZCAwKSB7IHNraXBSZXN0b3JlRm9jdXMgPSBmYWxzZTsgfVxuICAgICAgICBpZiAoIXRoaXMuaXNRdWlja09wZW5fKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkFOSU1BVElOR19DTE9TRUQpO1xuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5PUEVOKTtcbiAgICAgICAgICAgIGlmIChfdGhpcy5pc1F1aWNrT3Blbl8pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5ub3RpZnlDbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY2xvc2VBbmltYXRpb25FbmRUaW1lcklkXyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jbG9zZUFuaW1hdGlvbkVuZFRpbWVySWRfID0gMDtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQU5JTUFUSU5HX0NMT1NFRCk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLm5vdGlmeUNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfSwgbnVtYmVycy5UUkFOU0lUSU9OX0NMT1NFX0RVUkFUSU9OKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaXNPcGVuXyA9IGZhbHNlO1xuICAgICAgICBpZiAoIXNraXBSZXN0b3JlRm9jdXMpIHtcbiAgICAgICAgICAgIHRoaXMubWF5YmVSZXN0b3JlRm9jdXNfKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKiBIYW5kbGUgY2xpY2tzIGFuZCBjbG9zZSBpZiBub3Qgd2l0aGluIG1lbnUtc3VyZmFjZSBlbGVtZW50LiAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQm9keUNsaWNrID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgZWwgPSBldnQudGFyZ2V0O1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc0VsZW1lbnRJbkNvbnRhaW5lcihlbCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfTtcbiAgICAvKiogSGFuZGxlIGtleXMgdGhhdCBjbG9zZSB0aGUgc3VyZmFjZS4gKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUtleWRvd24gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBrZXlDb2RlID0gZXZ0LmtleUNvZGUsIGtleSA9IGV2dC5rZXk7XG4gICAgICAgIHZhciBpc0VzY2FwZSA9IGtleSA9PT0gJ0VzY2FwZScgfHwga2V5Q29kZSA9PT0gMjc7XG4gICAgICAgIGlmIChpc0VzY2FwZSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmF1dG9Qb3NpdGlvbl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgLy8gQ29tcHV0ZSBtZWFzdXJlbWVudHMgZm9yIGF1dG9wb3NpdGlvbiBtZXRob2RzIHJldXNlLlxuICAgICAgICB0aGlzLm1lYXN1cmVtZW50c18gPSB0aGlzLmdldEF1dG9MYXlvdXRNZWFzdXJlbWVudHNfKCk7XG4gICAgICAgIHZhciBjb3JuZXIgPSB0aGlzLmdldE9yaWdpbkNvcm5lcl8oKTtcbiAgICAgICAgdmFyIG1heE1lbnVTdXJmYWNlSGVpZ2h0ID0gdGhpcy5nZXRNZW51U3VyZmFjZU1heEhlaWdodF8oY29ybmVyKTtcbiAgICAgICAgdmFyIHZlcnRpY2FsQWxpZ25tZW50ID0gdGhpcy5oYXNCaXRfKGNvcm5lciwgQ29ybmVyQml0LkJPVFRPTSkgPyAnYm90dG9tJyA6ICd0b3AnO1xuICAgICAgICB2YXIgaG9yaXpvbnRhbEFsaWdubWVudCA9IHRoaXMuaGFzQml0Xyhjb3JuZXIsIENvcm5lckJpdC5SSUdIVCkgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgICAgICB2YXIgaG9yaXpvbnRhbE9mZnNldCA9IHRoaXMuZ2V0SG9yaXpvbnRhbE9yaWdpbk9mZnNldF8oY29ybmVyKTtcbiAgICAgICAgdmFyIHZlcnRpY2FsT2Zmc2V0ID0gdGhpcy5nZXRWZXJ0aWNhbE9yaWdpbk9mZnNldF8oY29ybmVyKTtcbiAgICAgICAgdmFyIF9iID0gdGhpcy5tZWFzdXJlbWVudHNfLCBhbmNob3JTaXplID0gX2IuYW5jaG9yU2l6ZSwgc3VyZmFjZVNpemUgPSBfYi5zdXJmYWNlU2l6ZTtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gKF9hID0ge30sXG4gICAgICAgICAgICBfYVtob3Jpem9udGFsQWxpZ25tZW50XSA9IGhvcml6b250YWxPZmZzZXQsXG4gICAgICAgICAgICBfYVt2ZXJ0aWNhbEFsaWdubWVudF0gPSB2ZXJ0aWNhbE9mZnNldCxcbiAgICAgICAgICAgIF9hKTtcbiAgICAgICAgLy8gQ2VudGVyIGFsaWduIHdoZW4gYW5jaG9yIHdpZHRoIGlzIGNvbXBhcmFibGUgb3IgZ3JlYXRlciB0aGFuIG1lbnUgc3VyZmFjZSwgb3RoZXJ3aXNlIGtlZXAgY29ybmVyLlxuICAgICAgICBpZiAoYW5jaG9yU2l6ZS53aWR0aCAvIHN1cmZhY2VTaXplLndpZHRoID4gbnVtYmVycy5BTkNIT1JfVE9fTUVOVV9TVVJGQUNFX1dJRFRIX1JBVElPKSB7XG4gICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50ID0gJ2NlbnRlcic7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIG1lbnUtc3VyZmFjZSBoYXMgYmVlbiBob2lzdGVkIHRvIHRoZSBib2R5LCBpdCdzIG5vIGxvbmdlciByZWxhdGl2ZSB0byB0aGUgYW5jaG9yIGVsZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuaXNIb2lzdGVkRWxlbWVudF8gfHwgdGhpcy5pc0ZpeGVkUG9zaXRpb25fKSB7XG4gICAgICAgICAgICB0aGlzLmFkanVzdFBvc2l0aW9uRm9ySG9pc3RlZEVsZW1lbnRfKHBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldFRyYW5zZm9ybU9yaWdpbihob3Jpem9udGFsQWxpZ25tZW50ICsgXCIgXCIgKyB2ZXJ0aWNhbEFsaWdubWVudCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0UG9zaXRpb24ocG9zaXRpb24pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldE1heEhlaWdodChtYXhNZW51U3VyZmFjZUhlaWdodCA/IG1heE1lbnVTdXJmYWNlSGVpZ2h0ICsgJ3B4JyA6ICcnKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gTWVhc3VyZW1lbnRzIHVzZWQgdG8gcG9zaXRpb24gbWVudSBzdXJmYWNlIHBvcHVwLlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0QXV0b0xheW91dE1lYXN1cmVtZW50c18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhbmNob3JSZWN0ID0gdGhpcy5hZGFwdGVyXy5nZXRBbmNob3JEaW1lbnNpb25zKCk7XG4gICAgICAgIHZhciBib2R5U2l6ZSA9IHRoaXMuYWRhcHRlcl8uZ2V0Qm9keURpbWVuc2lvbnMoKTtcbiAgICAgICAgdmFyIHZpZXdwb3J0U2l6ZSA9IHRoaXMuYWRhcHRlcl8uZ2V0V2luZG93RGltZW5zaW9ucygpO1xuICAgICAgICB2YXIgd2luZG93U2Nyb2xsID0gdGhpcy5hZGFwdGVyXy5nZXRXaW5kb3dTY3JvbGwoKTtcbiAgICAgICAgaWYgKCFhbmNob3JSZWN0KSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgUG9zaXRpb25hbCBwcm9wZXJ0aWVzIGFyZSBtb3JlIHJlYWRhYmxlIHdoZW4gdGhleSdyZSBncm91cGVkIHRvZ2V0aGVyXG4gICAgICAgICAgICBhbmNob3JSZWN0ID0ge1xuICAgICAgICAgICAgICAgIHRvcDogdGhpcy5wb3NpdGlvbl8ueSxcbiAgICAgICAgICAgICAgICByaWdodDogdGhpcy5wb3NpdGlvbl8ueCxcbiAgICAgICAgICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb25fLnksXG4gICAgICAgICAgICAgICAgbGVmdDogdGhpcy5wb3NpdGlvbl8ueCxcbiAgICAgICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYW5jaG9yU2l6ZTogYW5jaG9yUmVjdCxcbiAgICAgICAgICAgIGJvZHlTaXplOiBib2R5U2l6ZSxcbiAgICAgICAgICAgIHN1cmZhY2VTaXplOiB0aGlzLmRpbWVuc2lvbnNfLFxuICAgICAgICAgICAgdmlld3BvcnREaXN0YW5jZToge1xuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBQb3NpdGlvbmFsIHByb3BlcnRpZXMgYXJlIG1vcmUgcmVhZGFibGUgd2hlbiB0aGV5J3JlIGdyb3VwZWQgdG9nZXRoZXJcbiAgICAgICAgICAgICAgICB0b3A6IGFuY2hvclJlY3QudG9wLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiB2aWV3cG9ydFNpemUud2lkdGggLSBhbmNob3JSZWN0LnJpZ2h0LFxuICAgICAgICAgICAgICAgIGJvdHRvbTogdmlld3BvcnRTaXplLmhlaWdodCAtIGFuY2hvclJlY3QuYm90dG9tLFxuICAgICAgICAgICAgICAgIGxlZnQ6IGFuY2hvclJlY3QubGVmdCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2aWV3cG9ydFNpemU6IHZpZXdwb3J0U2l6ZSxcbiAgICAgICAgICAgIHdpbmRvd1Njcm9sbDogd2luZG93U2Nyb2xsLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIGNvcm5lciBvZiB0aGUgYW5jaG9yIGZyb20gd2hpY2ggdG8gYW5pbWF0ZSBhbmQgcG9zaXRpb24gdGhlIG1lbnUgc3VyZmFjZS5cbiAgICAgKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmdldE9yaWdpbkNvcm5lcl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIERlZmF1bHRzOiBvcGVuIGZyb20gdGhlIHRvcCBsZWZ0LlxuICAgICAgICB2YXIgY29ybmVyID0gQ29ybmVyLlRPUF9MRUZUO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLm1lYXN1cmVtZW50c18sIHZpZXdwb3J0RGlzdGFuY2UgPSBfYS52aWV3cG9ydERpc3RhbmNlLCBhbmNob3JTaXplID0gX2EuYW5jaG9yU2l6ZSwgc3VyZmFjZVNpemUgPSBfYS5zdXJmYWNlU2l6ZTtcbiAgICAgICAgdmFyIGlzQm90dG9tQWxpZ25lZCA9IHRoaXMuaGFzQml0Xyh0aGlzLmFuY2hvckNvcm5lcl8sIENvcm5lckJpdC5CT1RUT00pO1xuICAgICAgICB2YXIgYXZhaWxhYmxlVG9wID0gaXNCb3R0b21BbGlnbmVkID8gdmlld3BvcnREaXN0YW5jZS50b3AgKyBhbmNob3JTaXplLmhlaWdodCArIHRoaXMuYW5jaG9yTWFyZ2luXy5ib3R0b21cbiAgICAgICAgICAgIDogdmlld3BvcnREaXN0YW5jZS50b3AgKyB0aGlzLmFuY2hvck1hcmdpbl8udG9wO1xuICAgICAgICB2YXIgYXZhaWxhYmxlQm90dG9tID0gaXNCb3R0b21BbGlnbmVkID8gdmlld3BvcnREaXN0YW5jZS5ib3R0b20gLSB0aGlzLmFuY2hvck1hcmdpbl8uYm90dG9tXG4gICAgICAgICAgICA6IHZpZXdwb3J0RGlzdGFuY2UuYm90dG9tICsgYW5jaG9yU2l6ZS5oZWlnaHQgLSB0aGlzLmFuY2hvck1hcmdpbl8udG9wO1xuICAgICAgICB2YXIgdG9wT3ZlcmZsb3cgPSBzdXJmYWNlU2l6ZS5oZWlnaHQgLSBhdmFpbGFibGVUb3A7XG4gICAgICAgIHZhciBib3R0b21PdmVyZmxvdyA9IHN1cmZhY2VTaXplLmhlaWdodCAtIGF2YWlsYWJsZUJvdHRvbTtcbiAgICAgICAgaWYgKGJvdHRvbU92ZXJmbG93ID4gMCAmJiB0b3BPdmVyZmxvdyA8IGJvdHRvbU92ZXJmbG93KSB7XG4gICAgICAgICAgICBjb3JuZXIgPSB0aGlzLnNldEJpdF8oY29ybmVyLCBDb3JuZXJCaXQuQk9UVE9NKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaXNSdGwgPSB0aGlzLmFkYXB0ZXJfLmlzUnRsKCk7XG4gICAgICAgIHZhciBpc0ZsaXBSdGwgPSB0aGlzLmhhc0JpdF8odGhpcy5hbmNob3JDb3JuZXJfLCBDb3JuZXJCaXQuRkxJUF9SVEwpO1xuICAgICAgICB2YXIgYXZvaWRIb3Jpem9udGFsT3ZlcmxhcCA9IHRoaXMuaGFzQml0Xyh0aGlzLmFuY2hvckNvcm5lcl8sIENvcm5lckJpdC5SSUdIVCk7XG4gICAgICAgIHZhciBpc0FsaWduZWRSaWdodCA9IChhdm9pZEhvcml6b250YWxPdmVybGFwICYmICFpc1J0bCkgfHxcbiAgICAgICAgICAgICghYXZvaWRIb3Jpem9udGFsT3ZlcmxhcCAmJiBpc0ZsaXBSdGwgJiYgaXNSdGwpO1xuICAgICAgICB2YXIgYXZhaWxhYmxlTGVmdCA9IGlzQWxpZ25lZFJpZ2h0ID8gdmlld3BvcnREaXN0YW5jZS5sZWZ0ICsgYW5jaG9yU2l6ZS53aWR0aCArIHRoaXMuYW5jaG9yTWFyZ2luXy5yaWdodCA6XG4gICAgICAgICAgICB2aWV3cG9ydERpc3RhbmNlLmxlZnQgKyB0aGlzLmFuY2hvck1hcmdpbl8ubGVmdDtcbiAgICAgICAgdmFyIGF2YWlsYWJsZVJpZ2h0ID0gaXNBbGlnbmVkUmlnaHQgPyB2aWV3cG9ydERpc3RhbmNlLnJpZ2h0IC0gdGhpcy5hbmNob3JNYXJnaW5fLnJpZ2h0IDpcbiAgICAgICAgICAgIHZpZXdwb3J0RGlzdGFuY2UucmlnaHQgKyBhbmNob3JTaXplLndpZHRoIC0gdGhpcy5hbmNob3JNYXJnaW5fLmxlZnQ7XG4gICAgICAgIHZhciBsZWZ0T3ZlcmZsb3cgPSBzdXJmYWNlU2l6ZS53aWR0aCAtIGF2YWlsYWJsZUxlZnQ7XG4gICAgICAgIHZhciByaWdodE92ZXJmbG93ID0gc3VyZmFjZVNpemUud2lkdGggLSBhdmFpbGFibGVSaWdodDtcbiAgICAgICAgaWYgKChsZWZ0T3ZlcmZsb3cgPCAwICYmIGlzQWxpZ25lZFJpZ2h0ICYmIGlzUnRsKSB8fFxuICAgICAgICAgICAgKGF2b2lkSG9yaXpvbnRhbE92ZXJsYXAgJiYgIWlzQWxpZ25lZFJpZ2h0ICYmIGxlZnRPdmVyZmxvdyA8IDApIHx8XG4gICAgICAgICAgICAocmlnaHRPdmVyZmxvdyA+IDAgJiYgbGVmdE92ZXJmbG93IDwgcmlnaHRPdmVyZmxvdykpIHtcbiAgICAgICAgICAgIGNvcm5lciA9IHRoaXMuc2V0Qml0Xyhjb3JuZXIsIENvcm5lckJpdC5SSUdIVCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvcm5lcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBjb3JuZXIgT3JpZ2luIGNvcm5lciBvZiB0aGUgbWVudSBzdXJmYWNlLlxuICAgICAqIEByZXR1cm4gTWF4aW11bSBoZWlnaHQgb2YgdGhlIG1lbnUgc3VyZmFjZSwgYmFzZWQgb24gYXZhaWxhYmxlIHNwYWNlLiAwIGluZGljYXRlcyBzaG91bGQgbm90IGJlIHNldC5cbiAgICAgKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmdldE1lbnVTdXJmYWNlTWF4SGVpZ2h0XyA9IGZ1bmN0aW9uIChjb3JuZXIpIHtcbiAgICAgICAgdmFyIHZpZXdwb3J0RGlzdGFuY2UgPSB0aGlzLm1lYXN1cmVtZW50c18udmlld3BvcnREaXN0YW5jZTtcbiAgICAgICAgdmFyIG1heEhlaWdodCA9IDA7XG4gICAgICAgIHZhciBpc0JvdHRvbUFsaWduZWQgPSB0aGlzLmhhc0JpdF8oY29ybmVyLCBDb3JuZXJCaXQuQk9UVE9NKTtcbiAgICAgICAgdmFyIGlzQm90dG9tQW5jaG9yZWQgPSB0aGlzLmhhc0JpdF8odGhpcy5hbmNob3JDb3JuZXJfLCBDb3JuZXJCaXQuQk9UVE9NKTtcbiAgICAgICAgdmFyIE1BUkdJTl9UT19FREdFID0gTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLm51bWJlcnMuTUFSR0lOX1RPX0VER0U7XG4gICAgICAgIC8vIFdoZW4gbWF4aW11bSBoZWlnaHQgaXMgbm90IHNwZWNpZmllZCwgaXQgaXMgaGFuZGxlZCBmcm9tIENTUy5cbiAgICAgICAgaWYgKGlzQm90dG9tQWxpZ25lZCkge1xuICAgICAgICAgICAgbWF4SGVpZ2h0ID0gdmlld3BvcnREaXN0YW5jZS50b3AgKyB0aGlzLmFuY2hvck1hcmdpbl8udG9wIC0gTUFSR0lOX1RPX0VER0U7XG4gICAgICAgICAgICBpZiAoIWlzQm90dG9tQW5jaG9yZWQpIHtcbiAgICAgICAgICAgICAgICBtYXhIZWlnaHQgKz0gdGhpcy5tZWFzdXJlbWVudHNfLmFuY2hvclNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbWF4SGVpZ2h0ID1cbiAgICAgICAgICAgICAgICB2aWV3cG9ydERpc3RhbmNlLmJvdHRvbSAtIHRoaXMuYW5jaG9yTWFyZ2luXy5ib3R0b20gKyB0aGlzLm1lYXN1cmVtZW50c18uYW5jaG9yU2l6ZS5oZWlnaHQgLSBNQVJHSU5fVE9fRURHRTtcbiAgICAgICAgICAgIGlmIChpc0JvdHRvbUFuY2hvcmVkKSB7XG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0IC09IHRoaXMubWVhc3VyZW1lbnRzXy5hbmNob3JTaXplLmhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF4SGVpZ2h0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNvcm5lciBPcmlnaW4gY29ybmVyIG9mIHRoZSBtZW51IHN1cmZhY2UuXG4gICAgICogQHJldHVybiBIb3Jpem9udGFsIG9mZnNldCBvZiBtZW51IHN1cmZhY2Ugb3JpZ2luIGNvcm5lciBmcm9tIGNvcnJlc3BvbmRpbmcgYW5jaG9yIGNvcm5lci5cbiAgICAgKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmdldEhvcml6b250YWxPcmlnaW5PZmZzZXRfID0gZnVuY3Rpb24gKGNvcm5lcikge1xuICAgICAgICB2YXIgYW5jaG9yU2l6ZSA9IHRoaXMubWVhc3VyZW1lbnRzXy5hbmNob3JTaXplO1xuICAgICAgICAvLyBpc1JpZ2h0QWxpZ25lZCBjb3JyZXNwb25kcyB0byB1c2luZyB0aGUgJ3JpZ2h0JyBwcm9wZXJ0eSBvbiB0aGUgc3VyZmFjZS5cbiAgICAgICAgdmFyIGlzUmlnaHRBbGlnbmVkID0gdGhpcy5oYXNCaXRfKGNvcm5lciwgQ29ybmVyQml0LlJJR0hUKTtcbiAgICAgICAgdmFyIGF2b2lkSG9yaXpvbnRhbE92ZXJsYXAgPSB0aGlzLmhhc0JpdF8odGhpcy5hbmNob3JDb3JuZXJfLCBDb3JuZXJCaXQuUklHSFQpO1xuICAgICAgICBpZiAoaXNSaWdodEFsaWduZWQpIHtcbiAgICAgICAgICAgIHZhciByaWdodE9mZnNldCA9IGF2b2lkSG9yaXpvbnRhbE92ZXJsYXAgPyBhbmNob3JTaXplLndpZHRoIC0gdGhpcy5hbmNob3JNYXJnaW5fLmxlZnQgOiB0aGlzLmFuY2hvck1hcmdpbl8ucmlnaHQ7XG4gICAgICAgICAgICAvLyBGb3IgaG9pc3RlZCBvciBmaXhlZCBlbGVtZW50cywgYWRqdXN0IHRoZSBvZmZzZXQgYnkgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB2aWV3cG9ydCB3aWR0aCBhbmQgYm9keSB3aWR0aCBzb1xuICAgICAgICAgICAgLy8gd2hlbiB3ZSBjYWxjdWxhdGUgdGhlIHJpZ2h0IHZhbHVlIChgYWRqdXN0UG9zaXRpb25Gb3JIb2lzdGVkRWxlbWVudF9gKSBiYXNlZCBvbiB0aGUgZWxlbWVudCBwb3NpdGlvbixcbiAgICAgICAgICAgIC8vIHRoZSByaWdodCBwcm9wZXJ0eSBpcyBjb3JyZWN0LlxuICAgICAgICAgICAgaWYgKHRoaXMuaXNIb2lzdGVkRWxlbWVudF8gfHwgdGhpcy5pc0ZpeGVkUG9zaXRpb25fKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJpZ2h0T2Zmc2V0IC0gKHRoaXMubWVhc3VyZW1lbnRzXy52aWV3cG9ydFNpemUud2lkdGggLSB0aGlzLm1lYXN1cmVtZW50c18uYm9keVNpemUud2lkdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJpZ2h0T2Zmc2V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhdm9pZEhvcml6b250YWxPdmVybGFwID8gYW5jaG9yU2l6ZS53aWR0aCAtIHRoaXMuYW5jaG9yTWFyZ2luXy5yaWdodCA6IHRoaXMuYW5jaG9yTWFyZ2luXy5sZWZ0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNvcm5lciBPcmlnaW4gY29ybmVyIG9mIHRoZSBtZW51IHN1cmZhY2UuXG4gICAgICogQHJldHVybiBWZXJ0aWNhbCBvZmZzZXQgb2YgbWVudSBzdXJmYWNlIG9yaWdpbiBjb3JuZXIgZnJvbSBjb3JyZXNwb25kaW5nIGFuY2hvciBjb3JuZXIuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRWZXJ0aWNhbE9yaWdpbk9mZnNldF8gPSBmdW5jdGlvbiAoY29ybmVyKSB7XG4gICAgICAgIHZhciBhbmNob3JTaXplID0gdGhpcy5tZWFzdXJlbWVudHNfLmFuY2hvclNpemU7XG4gICAgICAgIHZhciBpc0JvdHRvbUFsaWduZWQgPSB0aGlzLmhhc0JpdF8oY29ybmVyLCBDb3JuZXJCaXQuQk9UVE9NKTtcbiAgICAgICAgdmFyIGF2b2lkVmVydGljYWxPdmVybGFwID0gdGhpcy5oYXNCaXRfKHRoaXMuYW5jaG9yQ29ybmVyXywgQ29ybmVyQml0LkJPVFRPTSk7XG4gICAgICAgIHZhciB5ID0gMDtcbiAgICAgICAgaWYgKGlzQm90dG9tQWxpZ25lZCkge1xuICAgICAgICAgICAgeSA9IGF2b2lkVmVydGljYWxPdmVybGFwID8gYW5jaG9yU2l6ZS5oZWlnaHQgLSB0aGlzLmFuY2hvck1hcmdpbl8udG9wIDogLXRoaXMuYW5jaG9yTWFyZ2luXy5ib3R0b207XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB5ID0gYXZvaWRWZXJ0aWNhbE92ZXJsYXAgPyAoYW5jaG9yU2l6ZS5oZWlnaHQgKyB0aGlzLmFuY2hvck1hcmdpbl8uYm90dG9tKSA6IHRoaXMuYW5jaG9yTWFyZ2luXy50b3A7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHk7XG4gICAgfTtcbiAgICAvKiogQ2FsY3VsYXRlcyB0aGUgb2Zmc2V0cyBmb3IgcG9zaXRpb25pbmcgdGhlIG1lbnUtc3VyZmFjZSB3aGVuIHRoZSBtZW51LXN1cmZhY2UgaGFzIGJlZW4gaG9pc3RlZCB0byB0aGUgYm9keS4gKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmFkanVzdFBvc2l0aW9uRm9ySG9pc3RlZEVsZW1lbnRfID0gZnVuY3Rpb24gKHBvc2l0aW9uKSB7XG4gICAgICAgIHZhciBlXzEsIF9hO1xuICAgICAgICB2YXIgX2IgPSB0aGlzLm1lYXN1cmVtZW50c18sIHdpbmRvd1Njcm9sbCA9IF9iLndpbmRvd1Njcm9sbCwgdmlld3BvcnREaXN0YW5jZSA9IF9iLnZpZXdwb3J0RGlzdGFuY2U7XG4gICAgICAgIHZhciBwcm9wcyA9IE9iamVjdC5rZXlzKHBvc2l0aW9uKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIHByb3BzXzEgPSB0c2xpYl8xLl9fdmFsdWVzKHByb3BzKSwgcHJvcHNfMV8xID0gcHJvcHNfMS5uZXh0KCk7ICFwcm9wc18xXzEuZG9uZTsgcHJvcHNfMV8xID0gcHJvcHNfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcCA9IHByb3BzXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBwb3NpdGlvbltwcm9wXSB8fCAwO1xuICAgICAgICAgICAgICAgIC8vIEhvaXN0ZWQgc3VyZmFjZXMgbmVlZCB0byBoYXZlIHRoZSBhbmNob3IgZWxlbWVudHMgbG9jYXRpb24gb24gdGhlIHBhZ2UgYWRkZWQgdG8gdGhlXG4gICAgICAgICAgICAgICAgLy8gcG9zaXRpb24gcHJvcGVydGllcyBmb3IgcHJvcGVyIGFsaWdubWVudCBvbiB0aGUgYm9keS5cbiAgICAgICAgICAgICAgICB2YWx1ZSArPSB2aWV3cG9ydERpc3RhbmNlW3Byb3BdO1xuICAgICAgICAgICAgICAgIC8vIFN1cmZhY2VzIHRoYXQgYXJlIGFic29sdXRlbHkgcG9zaXRpb25lZCBuZWVkIHRvIGhhdmUgYWRkaXRpb25hbCBjYWxjdWxhdGlvbnMgZm9yIHNjcm9sbFxuICAgICAgICAgICAgICAgIC8vIGFuZCBib3R0b20gcG9zaXRpb25pbmcuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzRml4ZWRQb3NpdGlvbl8pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09ICd0b3AnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSB3aW5kb3dTY3JvbGwueTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9wID09PSAnYm90dG9tJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgLT0gd2luZG93U2Nyb2xsLnk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvcCA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSB3aW5kb3dTY3JvbGwueDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHsgLy8gcHJvcCA9PT0gJ3JpZ2h0J1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgLT0gd2luZG93U2Nyb2xsLng7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcG9zaXRpb25bcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzXzFfMSAmJiAhcHJvcHNfMV8xLmRvbmUgJiYgKF9hID0gcHJvcHNfMS5yZXR1cm4pKSBfYS5jYWxsKHByb3BzXzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUaGUgbGFzdCBmb2N1c2VkIGVsZW1lbnQgd2hlbiB0aGUgbWVudSBzdXJmYWNlIHdhcyBvcGVuZWQgc2hvdWxkIHJlZ2FpbiBmb2N1cywgaWYgdGhlIHVzZXIgaXNcbiAgICAgKiBmb2N1c2VkIG9uIG9yIHdpdGhpbiB0aGUgbWVudSBzdXJmYWNlIHdoZW4gaXQgaXMgY2xvc2VkLlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUubWF5YmVSZXN0b3JlRm9jdXNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaXNSb290Rm9jdXNlZCA9IHRoaXMuYWRhcHRlcl8uaXNGb2N1c2VkKCk7XG4gICAgICAgIHZhciBjaGlsZEhhc0ZvY3VzID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiB0aGlzLmFkYXB0ZXJfLmlzRWxlbWVudEluQ29udGFpbmVyKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICBpZiAoaXNSb290Rm9jdXNlZCB8fCBjaGlsZEhhc0ZvY3VzKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlc3RvcmVGb2N1cygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmhhc0JpdF8gPSBmdW5jdGlvbiAoY29ybmVyLCBiaXQpIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4oY29ybmVyICYgYml0KTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1iaXR3aXNlXG4gICAgfTtcbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLnNldEJpdF8gPSBmdW5jdGlvbiAoY29ybmVyLCBiaXQpIHtcbiAgICAgICAgcmV0dXJuIGNvcm5lciB8IGJpdDsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1iaXR3aXNlXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBpc0Zpbml0ZSB0aGF0IGRvZXNuJ3QgZm9yY2UgY29udmVyc2lvbiB0byBudW1iZXIgdHlwZS5cbiAgICAgKiBFcXVpdmFsZW50IHRvIE51bWJlci5pc0Zpbml0ZSBpbiBFUzIwMTUsIHdoaWNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gSUUuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5pc0Zpbml0ZV8gPSBmdW5jdGlvbiAobnVtKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZShudW0pO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBjYWNoZWRDc3NUcmFuc2Zvcm1Qcm9wZXJ0eU5hbWVfO1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSBjb3JyZWN0IHRyYW5zZm9ybSBwcm9wZXJ0eSB0byB1c2Ugb24gdGhlIGN1cnJlbnQgYnJvd3Nlci5cbiAqL1xuZnVuY3Rpb24gZ2V0VHJhbnNmb3JtUHJvcGVydHlOYW1lKGdsb2JhbE9iaiwgZm9yY2VSZWZyZXNoKSB7XG4gICAgaWYgKGZvcmNlUmVmcmVzaCA9PT0gdm9pZCAwKSB7IGZvcmNlUmVmcmVzaCA9IGZhbHNlOyB9XG4gICAgaWYgKGNhY2hlZENzc1RyYW5zZm9ybVByb3BlcnR5TmFtZV8gPT09IHVuZGVmaW5lZCB8fCBmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgdmFyIGVsID0gZ2xvYmFsT2JqLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYWNoZWRDc3NUcmFuc2Zvcm1Qcm9wZXJ0eU5hbWVfID0gJ3RyYW5zZm9ybScgaW4gZWwuc3R5bGUgPyAndHJhbnNmb3JtJyA6ICd3ZWJraXRUcmFuc2Zvcm0nO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVkQ3NzVHJhbnNmb3JtUHJvcGVydHlOYW1lXztcbn1cbmV4cG9ydCB7IGdldFRyYW5zZm9ybVByb3BlcnR5TmFtZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENDb21wb25lbnQgfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgY3NzQ2xhc3Nlcywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCc7XG52YXIgTURDTWVudVN1cmZhY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDTWVudVN1cmZhY2UsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDTWVudVN1cmZhY2UoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgTURDTWVudVN1cmZhY2UuYXR0YWNoVG8gPSBmdW5jdGlvbiAocm9vdCkge1xuICAgICAgICByZXR1cm4gbmV3IE1EQ01lbnVTdXJmYWNlKHJvb3QpO1xuICAgIH07XG4gICAgTURDTWVudVN1cmZhY2UucHJvdG90eXBlLmluaXRpYWxTeW5jV2l0aERPTSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHBhcmVudEVsID0gdGhpcy5yb290Xy5wYXJlbnRFbGVtZW50O1xuICAgICAgICB0aGlzLmFuY2hvckVsZW1lbnQgPSBwYXJlbnRFbCAmJiBwYXJlbnRFbC5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3Nlcy5BTkNIT1IpID8gcGFyZW50RWwgOiBudWxsO1xuICAgICAgICBpZiAodGhpcy5yb290Xy5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3Nlcy5GSVhFRCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Rml4ZWRQb3NpdGlvbih0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUtleWRvd25fID0gZnVuY3Rpb24gKGV2dCkgeyByZXR1cm4gX3RoaXMuZm91bmRhdGlvbl8uaGFuZGxlS2V5ZG93bihldnQpOyB9O1xuICAgICAgICB0aGlzLmhhbmRsZUJvZHlDbGlja18gPSBmdW5jdGlvbiAoZXZ0KSB7IHJldHVybiBfdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVCb2R5Q2xpY2soZXZ0KTsgfTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckJvZHlDbGlja0xpc3RlbmVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfdGhpcy5oYW5kbGVCb2R5Q2xpY2tfKTsgfTtcbiAgICAgICAgdGhpcy5kZXJlZ2lzdGVyQm9keUNsaWNrTGlzdGVuZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIF90aGlzLmhhbmRsZUJvZHlDbGlja18pOyB9O1xuICAgICAgICB0aGlzLmxpc3Rlbigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5ZG93bl8pO1xuICAgICAgICB0aGlzLmxpc3RlbihzdHJpbmdzLk9QRU5FRF9FVkVOVCwgdGhpcy5yZWdpc3RlckJvZHlDbGlja0xpc3RlbmVyXyk7XG4gICAgICAgIHRoaXMubGlzdGVuKHN0cmluZ3MuQ0xPU0VEX0VWRU5ULCB0aGlzLmRlcmVnaXN0ZXJCb2R5Q2xpY2tMaXN0ZW5lcl8pO1xuICAgIH07XG4gICAgTURDTWVudVN1cmZhY2UucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudW5saXN0ZW4oJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd25fKTtcbiAgICAgICAgdGhpcy51bmxpc3RlbihzdHJpbmdzLk9QRU5FRF9FVkVOVCwgdGhpcy5yZWdpc3RlckJvZHlDbGlja0xpc3RlbmVyXyk7XG4gICAgICAgIHRoaXMudW5saXN0ZW4oc3RyaW5ncy5DTE9TRURfRVZFTlQsIHRoaXMuZGVyZWdpc3RlckJvZHlDbGlja0xpc3RlbmVyXyk7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgTURDTWVudVN1cmZhY2UucHJvdG90eXBlLmlzT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbl8uaXNPcGVuKCk7XG4gICAgfTtcbiAgICBNRENNZW51U3VyZmFjZS5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5vcGVuKCk7XG4gICAgfTtcbiAgICBNRENNZW51U3VyZmFjZS5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoc2tpcFJlc3RvcmVGb2N1cykge1xuICAgICAgICBpZiAoc2tpcFJlc3RvcmVGb2N1cyA9PT0gdm9pZCAwKSB7IHNraXBSZXN0b3JlRm9jdXMgPSBmYWxzZTsgfVxuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmNsb3NlKHNraXBSZXN0b3JlRm9jdXMpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ01lbnVTdXJmYWNlLnByb3RvdHlwZSwgXCJxdWlja09wZW5cIiwge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChxdWlja09wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0UXVpY2tPcGVuKHF1aWNrT3Blbik7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIG1lbnUtc3VyZmFjZSBmcm9tIGl0J3MgY3VycmVudCBsb2NhdGlvbiBhbmQgYXBwZW5kcyBpdCB0byB0aGVcbiAgICAgKiBib2R5IHRvIG92ZXJjb21lIGFueSBvdmVyZmxvdzpoaWRkZW4gaXNzdWVzLlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlLnByb3RvdHlwZS5ob2lzdE1lbnVUb0JvZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5yb290Xyk7XG4gICAgICAgIHRoaXMuc2V0SXNIb2lzdGVkKHRydWUpO1xuICAgIH07XG4gICAgLyoqIFNldHMgdGhlIGZvdW5kYXRpb24gdG8gdXNlIHBhZ2Ugb2Zmc2V0cyBmb3IgYW4gcG9zaXRpb25pbmcgd2hlbiB0aGUgbWVudSBpcyBob2lzdGVkIHRvIHRoZSBib2R5LiAqL1xuICAgIE1EQ01lbnVTdXJmYWNlLnByb3RvdHlwZS5zZXRJc0hvaXN0ZWQgPSBmdW5jdGlvbiAoaXNIb2lzdGVkKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0SXNIb2lzdGVkKGlzSG9pc3RlZCk7XG4gICAgfTtcbiAgICAvKiogU2V0cyB0aGUgZWxlbWVudCB0aGF0IHRoZSBtZW51LXN1cmZhY2UgaXMgYW5jaG9yZWQgdG8uICovXG4gICAgTURDTWVudVN1cmZhY2UucHJvdG90eXBlLnNldE1lbnVTdXJmYWNlQW5jaG9yRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuYW5jaG9yRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfTtcbiAgICAvKiogU2V0cyB0aGUgbWVudS1zdXJmYWNlIHRvIHBvc2l0aW9uOiBmaXhlZC4gKi9cbiAgICBNRENNZW51U3VyZmFjZS5wcm90b3R5cGUuc2V0Rml4ZWRQb3NpdGlvbiA9IGZ1bmN0aW9uIChpc0ZpeGVkKSB7XG4gICAgICAgIGlmIChpc0ZpeGVkKSB7XG4gICAgICAgICAgICB0aGlzLnJvb3RfLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3Nlcy5GSVhFRCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY3NzQ2xhc3Nlcy5GSVhFRCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRGaXhlZFBvc2l0aW9uKGlzRml4ZWQpO1xuICAgIH07XG4gICAgLyoqIFNldHMgdGhlIGFic29sdXRlIHgveSBwb3NpdGlvbiB0byBwb3NpdGlvbiBiYXNlZCBvbi4gUmVxdWlyZXMgdGhlIG1lbnUgdG8gYmUgaG9pc3RlZC4gKi9cbiAgICBNRENNZW51U3VyZmFjZS5wcm90b3R5cGUuc2V0QWJzb2x1dGVQb3NpdGlvbiA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0QWJzb2x1dGVQb3NpdGlvbih4LCB5KTtcbiAgICAgICAgdGhpcy5zZXRJc0hvaXN0ZWQodHJ1ZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gY29ybmVyIERlZmF1bHQgYW5jaG9yIGNvcm5lciBhbGlnbm1lbnQgb2YgdG9wLWxlZnQgc3VyZmFjZSBjb3JuZXIuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2UucHJvdG90eXBlLnNldEFuY2hvckNvcm5lciA9IGZ1bmN0aW9uIChjb3JuZXIpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRBbmNob3JDb3JuZXIoY29ybmVyKTtcbiAgICB9O1xuICAgIE1EQ01lbnVTdXJmYWNlLnByb3RvdHlwZS5zZXRBbmNob3JNYXJnaW4gPSBmdW5jdGlvbiAobWFyZ2luKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0QW5jaG9yTWFyZ2luKG1hcmdpbik7XG4gICAgfTtcbiAgICBNRENNZW51U3VyZmFjZS5wcm90b3R5cGUuZ2V0RGVmYXVsdEZvdW5kYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIERPIE5PVCBJTkxJTkUgdGhpcyB2YXJpYWJsZS4gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGZvdW5kYXRpb25zIHRha2UgYSBQYXJ0aWFsPE1EQ0Zvb0FkYXB0ZXI+LlxuICAgICAgICAvLyBUbyBlbnN1cmUgd2UgZG9uJ3QgYWNjaWRlbnRhbGx5IG9taXQgYW55IG1ldGhvZHMsIHdlIG5lZWQgYSBzZXBhcmF0ZSwgc3Ryb25nbHkgdHlwZWQgYWRhcHRlciB2YXJpYWJsZS5cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgdmFyIGFkYXB0ZXIgPSB7XG4gICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIF90aGlzLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290Xy5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIGhhc0FuY2hvcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gISFfdGhpcy5hbmNob3JFbGVtZW50OyB9LFxuICAgICAgICAgICAgbm90aWZ5Q2xvc2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmVtaXQoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnN0cmluZ3MuQ0xPU0VEX0VWRU5ULCB7fSk7IH0sXG4gICAgICAgICAgICBub3RpZnlPcGVuOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5lbWl0KE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5zdHJpbmdzLk9QRU5FRF9FVkVOVCwge30pOyB9LFxuICAgICAgICAgICAgaXNFbGVtZW50SW5Db250YWluZXI6IGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gX3RoaXMucm9vdF8uY29udGFpbnMoZWwpOyB9LFxuICAgICAgICAgICAgaXNSdGw6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldENvbXB1dGVkU3R5bGUoX3RoaXMucm9vdF8pLmdldFByb3BlcnR5VmFsdWUoJ2RpcmVjdGlvbicpID09PSAncnRsJzsgfSxcbiAgICAgICAgICAgIHNldFRyYW5zZm9ybU9yaWdpbjogZnVuY3Rpb24gKG9yaWdpbikge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wZXJ0eU5hbWUgPSB1dGlsLmdldFRyYW5zZm9ybVByb3BlcnR5TmFtZSh3aW5kb3cpICsgXCItb3JpZ2luXCI7XG4gICAgICAgICAgICAgICAgX3RoaXMucm9vdF8uc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHlOYW1lLCBvcmlnaW4pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzRm9jdXNlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gX3RoaXMucm9vdF87IH0sXG4gICAgICAgICAgICBzYXZlRm9jdXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5wcmV2aW91c0ZvY3VzXyA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzdG9yZUZvY3VzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLnJvb3RfLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5wcmV2aW91c0ZvY3VzXyAmJiBfdGhpcy5wcmV2aW91c0ZvY3VzXy5mb2N1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucHJldmlvdXNGb2N1c18uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRJbm5lckRpbWVuc2lvbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB3aWR0aDogX3RoaXMucm9vdF8ub2Zmc2V0V2lkdGgsIGhlaWdodDogX3RoaXMucm9vdF8ub2Zmc2V0SGVpZ2h0IH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0QW5jaG9yRGltZW5zaW9uczogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYW5jaG9yRWxlbWVudCA/IF90aGlzLmFuY2hvckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgOiBudWxsOyB9LFxuICAgICAgICAgICAgZ2V0V2luZG93RGltZW5zaW9uczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCwgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRCb2R5RGltZW5zaW9uczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHdpZHRoOiBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLCBoZWlnaHQ6IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0IH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0V2luZG93U2Nyb2xsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgeDogd2luZG93LnBhZ2VYT2Zmc2V0LCB5OiB3aW5kb3cucGFnZVlPZmZzZXQgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRQb3NpdGlvbjogZnVuY3Rpb24gKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucm9vdF8uc3R5bGUubGVmdCA9ICdsZWZ0JyBpbiBwb3NpdGlvbiA/IHBvc2l0aW9uLmxlZnQgKyBcInB4XCIgOiAnJztcbiAgICAgICAgICAgICAgICBfdGhpcy5yb290Xy5zdHlsZS5yaWdodCA9ICdyaWdodCcgaW4gcG9zaXRpb24gPyBwb3NpdGlvbi5yaWdodCArIFwicHhcIiA6ICcnO1xuICAgICAgICAgICAgICAgIF90aGlzLnJvb3RfLnN0eWxlLnRvcCA9ICd0b3AnIGluIHBvc2l0aW9uID8gcG9zaXRpb24udG9wICsgXCJweFwiIDogJyc7XG4gICAgICAgICAgICAgICAgX3RoaXMucm9vdF8uc3R5bGUuYm90dG9tID0gJ2JvdHRvbScgaW4gcG9zaXRpb24gPyBwb3NpdGlvbi5ib3R0b20gKyBcInB4XCIgOiAnJztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRNYXhIZWlnaHQ6IGZ1bmN0aW9uIChoZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yb290Xy5zdHlsZS5tYXhIZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICByZXR1cm4gbmV3IE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbihhZGFwdGVyKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENNZW51U3VyZmFjZTtcbn0oTURDQ29tcG9uZW50KSk7XG5leHBvcnQgeyBNRENNZW51U3VyZmFjZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgTUVOVV9TRUxFQ1RFRF9MSVNUX0lURU06ICdtZGMtbWVudS1pdGVtLS1zZWxlY3RlZCcsXG4gICAgTUVOVV9TRUxFQ1RJT05fR1JPVVA6ICdtZGMtbWVudV9fc2VsZWN0aW9uLWdyb3VwJyxcbiAgICBST09UOiAnbWRjLW1lbnUnLFxufTtcbnZhciBzdHJpbmdzID0ge1xuICAgIEFSSUFfQ0hFQ0tFRF9BVFRSOiAnYXJpYS1jaGVja2VkJyxcbiAgICBBUklBX0RJU0FCTEVEX0FUVFI6ICdhcmlhLWRpc2FibGVkJyxcbiAgICBDSEVDS0JPWF9TRUxFQ1RPUjogJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsXG4gICAgTElTVF9TRUxFQ1RPUjogJy5tZGMtbGlzdCcsXG4gICAgU0VMRUNURURfRVZFTlQ6ICdNRENNZW51OnNlbGVjdGVkJyxcbn07XG52YXIgbnVtYmVycyA9IHtcbiAgICBGT0NVU19ST09UX0lOREVYOiAtMSxcbn07XG52YXIgRGVmYXVsdEZvY3VzU3RhdGU7XG4oZnVuY3Rpb24gKERlZmF1bHRGb2N1c1N0YXRlKSB7XG4gICAgRGVmYXVsdEZvY3VzU3RhdGVbRGVmYXVsdEZvY3VzU3RhdGVbXCJOT05FXCJdID0gMF0gPSBcIk5PTkVcIjtcbiAgICBEZWZhdWx0Rm9jdXNTdGF0ZVtEZWZhdWx0Rm9jdXNTdGF0ZVtcIkxJU1RfUk9PVFwiXSA9IDFdID0gXCJMSVNUX1JPT1RcIjtcbiAgICBEZWZhdWx0Rm9jdXNTdGF0ZVtEZWZhdWx0Rm9jdXNTdGF0ZVtcIkZJUlNUX0lURU1cIl0gPSAyXSA9IFwiRklSU1RfSVRFTVwiO1xuICAgIERlZmF1bHRGb2N1c1N0YXRlW0RlZmF1bHRGb2N1c1N0YXRlW1wiTEFTVF9JVEVNXCJdID0gM10gPSBcIkxBU1RfSVRFTVwiO1xufSkoRGVmYXVsdEZvY3VzU3RhdGUgfHwgKERlZmF1bHRGb2N1c1N0YXRlID0ge30pKTtcbmV4cG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnMsIERlZmF1bHRGb2N1c1N0YXRlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3NlcyBhcyBsaXN0Q3NzQ2xhc3NlcyB9IGZyb20gJ0BtYXRlcmlhbC9saXN0L2NvbnN0YW50cyc7XG5pbXBvcnQgeyBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvbWVudS1zdXJmYWNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3NlcywgRGVmYXVsdEZvY3VzU3RhdGUsIG51bWJlcnMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgTURDTWVudUZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDTWVudUZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDTWVudUZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBNRENNZW51Rm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmNsb3NlQW5pbWF0aW9uRW5kVGltZXJJZF8gPSAwO1xuICAgICAgICBfdGhpcy5kZWZhdWx0Rm9jdXNTdGF0ZV8gPSBEZWZhdWx0Rm9jdXNTdGF0ZS5MSVNUX1JPT1Q7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ01lbnVGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTWVudUZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENNZW51Rm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVycztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ01lbnVGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBzZWUge0BsaW5rIE1EQ01lbnVBZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVybiB0eXBlcy5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3NUb0VsZW1lbnRBdEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3NGcm9tRWxlbWVudEF0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBhZGRBdHRyaWJ1dGVUb0VsZW1lbnRBdEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQXR0cmlidXRlRnJvbUVsZW1lbnRBdEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZWxlbWVudENvbnRhaW5zQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGNsb3NlU3VyZmFjZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldEVsZW1lbnRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gLTE7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5U2VsZWN0ZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBnZXRNZW51SXRlbUNvdW50OiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICAgICAgICAgICAgICAgIGZvY3VzSXRlbUF0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBmb2N1c0xpc3RSb290OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZ2V0U2VsZWN0ZWRTaWJsaW5nT2ZJdGVtQXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gLTE7IH0sXG4gICAgICAgICAgICAgICAgaXNTZWxlY3RhYmxlSXRlbUF0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ01lbnVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jbG9zZUFuaW1hdGlvbkVuZFRpbWVySWRfKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5jbG9zZUFuaW1hdGlvbkVuZFRpbWVySWRfKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmNsb3NlU3VyZmFjZSgpO1xuICAgIH07XG4gICAgTURDTWVudUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUtleWRvd24gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBrZXkgPSBldnQua2V5LCBrZXlDb2RlID0gZXZ0LmtleUNvZGU7XG4gICAgICAgIHZhciBpc1RhYiA9IGtleSA9PT0gJ1RhYicgfHwga2V5Q29kZSA9PT0gOTtcbiAgICAgICAgaWYgKGlzVGFiKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmNsb3NlU3VyZmFjZSgvKiogc2tpcFJlc3RvcmVGb2N1cyAqLyB0cnVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDTWVudUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUl0ZW1BY3Rpb24gPSBmdW5jdGlvbiAobGlzdEl0ZW0pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5hZGFwdGVyXy5nZXRFbGVtZW50SW5kZXgobGlzdEl0ZW0pO1xuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlTZWxlY3RlZCh7IGluZGV4OiBpbmRleCB9KTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5jbG9zZVN1cmZhY2UoKTtcbiAgICAgICAgLy8gV2FpdCBmb3IgdGhlIG1lbnUgdG8gY2xvc2UgYmVmb3JlIGFkZGluZy9yZW1vdmluZyBjbGFzc2VzIHRoYXQgYWZmZWN0IHN0eWxlcy5cbiAgICAgICAgdGhpcy5jbG9zZUFuaW1hdGlvbkVuZFRpbWVySWRfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBSZWNvbXB1dGUgdGhlIGluZGV4IGluIGNhc2UgdGhlIG1lbnUgY29udGVudHMgaGF2ZSBjaGFuZ2VkLlxuICAgICAgICAgICAgdmFyIHJlY29tcHV0ZWRJbmRleCA9IF90aGlzLmFkYXB0ZXJfLmdldEVsZW1lbnRJbmRleChsaXN0SXRlbSk7XG4gICAgICAgICAgICBpZiAoX3RoaXMuYWRhcHRlcl8uaXNTZWxlY3RhYmxlSXRlbUF0SW5kZXgocmVjb21wdXRlZEluZGV4KSkge1xuICAgICAgICAgICAgICAgIF90aGlzLnNldFNlbGVjdGVkSW5kZXgocmVjb21wdXRlZEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLm51bWJlcnMuVFJBTlNJVElPTl9DTE9TRV9EVVJBVElPTik7XG4gICAgfTtcbiAgICBNRENNZW51Rm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlTWVudVN1cmZhY2VPcGVuZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5kZWZhdWx0Rm9jdXNTdGF0ZV8pIHtcbiAgICAgICAgICAgIGNhc2UgRGVmYXVsdEZvY3VzU3RhdGUuRklSU1RfSVRFTTpcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmZvY3VzSXRlbUF0SW5kZXgoMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERlZmF1bHRGb2N1c1N0YXRlLkxBU1RfSVRFTTpcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmZvY3VzSXRlbUF0SW5kZXgodGhpcy5hZGFwdGVyXy5nZXRNZW51SXRlbUNvdW50KCkgLSAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGVmYXVsdEZvY3VzU3RhdGUuTk9ORTpcbiAgICAgICAgICAgICAgICAvLyBEbyBub3RoaW5nLlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmZvY3VzTGlzdFJvb3QoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyBkZWZhdWx0IGZvY3VzIHN0YXRlIHdoZXJlIHRoZSBtZW51IHNob3VsZCBmb2N1cyBldmVyeSB0aW1lIHdoZW4gbWVudVxuICAgICAqIGlzIG9wZW5lZC4gRm9jdXNlcyB0aGUgbGlzdCByb290IChgRGVmYXVsdEZvY3VzU3RhdGUuTElTVF9ST09UYCkgZWxlbWVudCBieVxuICAgICAqIGRlZmF1bHQuXG4gICAgICovXG4gICAgTURDTWVudUZvdW5kYXRpb24ucHJvdG90eXBlLnNldERlZmF1bHRGb2N1c1N0YXRlID0gZnVuY3Rpb24gKGZvY3VzU3RhdGUpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0Rm9jdXNTdGF0ZV8gPSBmb2N1c1N0YXRlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2VsZWN0cyB0aGUgbGlzdCBpdGVtIGF0IGBpbmRleGAgd2l0aGluIHRoZSBtZW51LlxuICAgICAqIEBwYXJhbSBpbmRleCBJbmRleCBvZiBsaXN0IGl0ZW0gd2l0aGluIHRoZSBtZW51LlxuICAgICAqL1xuICAgIE1EQ01lbnVGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRTZWxlY3RlZEluZGV4ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHRoaXMudmFsaWRhdGVkSW5kZXhfKGluZGV4KTtcbiAgICAgICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmlzU2VsZWN0YWJsZUl0ZW1BdEluZGV4KGluZGV4KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNRENNZW51Rm91bmRhdGlvbjogTm8gc2VsZWN0aW9uIGdyb3VwIGF0IHNwZWNpZmllZCBpbmRleC4nKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJldlNlbGVjdGVkSW5kZXggPSB0aGlzLmFkYXB0ZXJfLmdldFNlbGVjdGVkU2libGluZ09mSXRlbUF0SW5kZXgoaW5kZXgpO1xuICAgICAgICBpZiAocHJldlNlbGVjdGVkSW5kZXggPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVBdHRyaWJ1dGVGcm9tRWxlbWVudEF0SW5kZXgocHJldlNlbGVjdGVkSW5kZXgsIHN0cmluZ3MuQVJJQV9DSEVDS0VEX0FUVFIpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzc0Zyb21FbGVtZW50QXRJbmRleChwcmV2U2VsZWN0ZWRJbmRleCwgY3NzQ2xhc3Nlcy5NRU5VX1NFTEVDVEVEX0xJU1RfSVRFTSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzc1RvRWxlbWVudEF0SW5kZXgoaW5kZXgsIGNzc0NsYXNzZXMuTUVOVV9TRUxFQ1RFRF9MSVNUX0lURU0pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZEF0dHJpYnV0ZVRvRWxlbWVudEF0SW5kZXgoaW5kZXgsIHN0cmluZ3MuQVJJQV9DSEVDS0VEX0FUVFIsICd0cnVlJyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBlbmFibGVkIHN0YXRlIHRvIGlzRW5hYmxlZCBmb3IgdGhlIG1lbnUgaXRlbSBhdCB0aGUgZ2l2ZW4gaW5kZXguXG4gICAgICogQHBhcmFtIGluZGV4IEluZGV4IG9mIHRoZSBtZW51IGl0ZW1cbiAgICAgKiBAcGFyYW0gaXNFbmFibGVkIFRoZSBkZXNpcmVkIGVuYWJsZWQgc3RhdGUgb2YgdGhlIG1lbnUgaXRlbS5cbiAgICAgKi9cbiAgICBNRENNZW51Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0RW5hYmxlZCA9IGZ1bmN0aW9uIChpbmRleCwgaXNFbmFibGVkKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdGVkSW5kZXhfKGluZGV4KTtcbiAgICAgICAgaWYgKGlzRW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzc0Zyb21FbGVtZW50QXRJbmRleChpbmRleCwgbGlzdENzc0NsYXNzZXMuTElTVF9JVEVNX0RJU0FCTEVEX0NMQVNTKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQXR0cmlidXRlVG9FbGVtZW50QXRJbmRleChpbmRleCwgc3RyaW5ncy5BUklBX0RJU0FCTEVEX0FUVFIsICdmYWxzZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzc1RvRWxlbWVudEF0SW5kZXgoaW5kZXgsIGxpc3RDc3NDbGFzc2VzLkxJU1RfSVRFTV9ESVNBQkxFRF9DTEFTUyk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZEF0dHJpYnV0ZVRvRWxlbWVudEF0SW5kZXgoaW5kZXgsIHN0cmluZ3MuQVJJQV9ESVNBQkxFRF9BVFRSLCAndHJ1ZScpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENNZW51Rm91bmRhdGlvbi5wcm90b3R5cGUudmFsaWRhdGVkSW5kZXhfID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHZhciBtZW51U2l6ZSA9IHRoaXMuYWRhcHRlcl8uZ2V0TWVudUl0ZW1Db3VudCgpO1xuICAgICAgICB2YXIgaXNJbmRleEluUmFuZ2UgPSBpbmRleCA+PSAwICYmIGluZGV4IDwgbWVudVNpemU7XG4gICAgICAgIGlmICghaXNJbmRleEluUmFuZ2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTURDTWVudUZvdW5kYXRpb246IE5vIGxpc3QgaXRlbSBhdCBzcGVjaWZpZWQgaW5kZXguJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNRENNZW51Rm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDTWVudUZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENNZW51Rm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDQ29tcG9uZW50IH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IGNsb3Nlc3QgfSBmcm9tICdAbWF0ZXJpYWwvZG9tL3BvbnlmaWxsJztcbmltcG9ydCB7IE1EQ0xpc3QgfSBmcm9tICdAbWF0ZXJpYWwvbGlzdC9jb21wb25lbnQnO1xuaW1wb3J0IHsgTURDTGlzdEZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvbGlzdC9mb3VuZGF0aW9uJztcbmltcG9ydCB7IE1EQ01lbnVTdXJmYWNlIH0gZnJvbSAnQG1hdGVyaWFsL21lbnUtc3VyZmFjZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL21lbnUtc3VyZmFjZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBNRENNZW51Rm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbic7XG52YXIgTURDTWVudSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENNZW51LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ01lbnUoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgTURDTWVudS5hdHRhY2hUbyA9IGZ1bmN0aW9uIChyb290KSB7XG4gICAgICAgIHJldHVybiBuZXcgTURDTWVudShyb290KTtcbiAgICB9O1xuICAgIE1EQ01lbnUucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAobWVudVN1cmZhY2VGYWN0b3J5LCBsaXN0RmFjdG9yeSkge1xuICAgICAgICBpZiAobWVudVN1cmZhY2VGYWN0b3J5ID09PSB2b2lkIDApIHsgbWVudVN1cmZhY2VGYWN0b3J5ID0gZnVuY3Rpb24gKGVsKSB7IHJldHVybiBuZXcgTURDTWVudVN1cmZhY2UoZWwpOyB9OyB9XG4gICAgICAgIGlmIChsaXN0RmFjdG9yeSA9PT0gdm9pZCAwKSB7IGxpc3RGYWN0b3J5ID0gZnVuY3Rpb24gKGVsKSB7IHJldHVybiBuZXcgTURDTGlzdChlbCk7IH07IH1cbiAgICAgICAgdGhpcy5tZW51U3VyZmFjZUZhY3RvcnlfID0gbWVudVN1cmZhY2VGYWN0b3J5O1xuICAgICAgICB0aGlzLmxpc3RGYWN0b3J5XyA9IGxpc3RGYWN0b3J5O1xuICAgIH07XG4gICAgTURDTWVudS5wcm90b3R5cGUuaW5pdGlhbFN5bmNXaXRoRE9NID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLm1lbnVTdXJmYWNlXyA9IHRoaXMubWVudVN1cmZhY2VGYWN0b3J5Xyh0aGlzLnJvb3RfKTtcbiAgICAgICAgdmFyIGxpc3QgPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5MSVNUX1NFTEVDVE9SKTtcbiAgICAgICAgaWYgKGxpc3QpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdF8gPSB0aGlzLmxpc3RGYWN0b3J5XyhsaXN0KTtcbiAgICAgICAgICAgIHRoaXMubGlzdF8ud3JhcEZvY3VzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGlzdF8gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlS2V5ZG93bl8gPSBmdW5jdGlvbiAoZXZ0KSB7IHJldHVybiBfdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVLZXlkb3duKGV2dCk7IH07XG4gICAgICAgIHRoaXMuaGFuZGxlSXRlbUFjdGlvbl8gPSBmdW5jdGlvbiAoZXZ0KSB7IHJldHVybiBfdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVJdGVtQWN0aW9uKF90aGlzLml0ZW1zW2V2dC5kZXRhaWwuaW5kZXhdKTsgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVNZW51U3VyZmFjZU9wZW5lZF8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVNZW51U3VyZmFjZU9wZW5lZCgpOyB9O1xuICAgICAgICB0aGlzLm1lbnVTdXJmYWNlXy5saXN0ZW4oTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnN0cmluZ3MuT1BFTkVEX0VWRU5ULCB0aGlzLmhhbmRsZU1lbnVTdXJmYWNlT3BlbmVkXyk7XG4gICAgICAgIHRoaXMubGlzdGVuKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlkb3duXyk7XG4gICAgICAgIHRoaXMubGlzdGVuKE1EQ0xpc3RGb3VuZGF0aW9uLnN0cmluZ3MuQUNUSU9OX0VWRU5ULCB0aGlzLmhhbmRsZUl0ZW1BY3Rpb25fKTtcbiAgICB9O1xuICAgIE1EQ01lbnUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmxpc3RfKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RfLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1lbnVTdXJmYWNlXy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMubWVudVN1cmZhY2VfLnVubGlzdGVuKE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5zdHJpbmdzLk9QRU5FRF9FVkVOVCwgdGhpcy5oYW5kbGVNZW51U3VyZmFjZU9wZW5lZF8pO1xuICAgICAgICB0aGlzLnVubGlzdGVuKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlkb3duXyk7XG4gICAgICAgIHRoaXMudW5saXN0ZW4oTURDTGlzdEZvdW5kYXRpb24uc3RyaW5ncy5BQ1RJT05fRVZFTlQsIHRoaXMuaGFuZGxlSXRlbUFjdGlvbl8pO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENNZW51LnByb3RvdHlwZSwgXCJvcGVuXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tZW51U3VyZmFjZV8uaXNPcGVuKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnVTdXJmYWNlXy5vcGVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnVTdXJmYWNlXy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTWVudS5wcm90b3R5cGUsIFwid3JhcEZvY3VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saXN0XyA/IHRoaXMubGlzdF8ud3JhcEZvY3VzIDogZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5saXN0Xykge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdF8ud3JhcEZvY3VzID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENNZW51LnByb3RvdHlwZSwgXCJpdGVtc1wiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm4gdGhlIGl0ZW1zIHdpdGhpbiB0aGUgbWVudS4gTm90ZSB0aGF0IHRoaXMgb25seSBjb250YWlucyB0aGUgc2V0IG9mIGVsZW1lbnRzIHdpdGhpblxuICAgICAgICAgKiB0aGUgaXRlbXMgY29udGFpbmVyIHRoYXQgYXJlIHByb3BlciBsaXN0IGl0ZW1zLCBhbmQgbm90IHN1cHBsZW1lbnRhbCAvIHByZXNlbnRhdGlvbmFsIERPTVxuICAgICAgICAgKiBlbGVtZW50cy5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlzdF8gPyB0aGlzLmxpc3RfLmxpc3RFbGVtZW50cyA6IFtdO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTWVudS5wcm90b3R5cGUsIFwicXVpY2tPcGVuXCIsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAocXVpY2tPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLm1lbnVTdXJmYWNlXy5xdWlja09wZW4gPSBxdWlja09wZW47XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIFNldHMgZGVmYXVsdCBmb2N1cyBzdGF0ZSB3aGVyZSB0aGUgbWVudSBzaG91bGQgZm9jdXMgZXZlcnkgdGltZSB3aGVuIG1lbnVcbiAgICAgKiBpcyBvcGVuZWQuIEZvY3VzZXMgdGhlIGxpc3Qgcm9vdCAoYERlZmF1bHRGb2N1c1N0YXRlLkxJU1RfUk9PVGApIGVsZW1lbnQgYnlcbiAgICAgKiBkZWZhdWx0LlxuICAgICAqIEBwYXJhbSBmb2N1c1N0YXRlIERlZmF1bHQgZm9jdXMgc3RhdGUuXG4gICAgICovXG4gICAgTURDTWVudS5wcm90b3R5cGUuc2V0RGVmYXVsdEZvY3VzU3RhdGUgPSBmdW5jdGlvbiAoZm9jdXNTdGF0ZSkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldERlZmF1bHRGb2N1c1N0YXRlKGZvY3VzU3RhdGUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNvcm5lciBEZWZhdWx0IGFuY2hvciBjb3JuZXIgYWxpZ25tZW50IG9mIHRvcC1sZWZ0IG1lbnUgY29ybmVyLlxuICAgICAqL1xuICAgIE1EQ01lbnUucHJvdG90eXBlLnNldEFuY2hvckNvcm5lciA9IGZ1bmN0aW9uIChjb3JuZXIpIHtcbiAgICAgICAgdGhpcy5tZW51U3VyZmFjZV8uc2V0QW5jaG9yQ29ybmVyKGNvcm5lcik7XG4gICAgfTtcbiAgICBNRENNZW51LnByb3RvdHlwZS5zZXRBbmNob3JNYXJnaW4gPSBmdW5jdGlvbiAobWFyZ2luKSB7XG4gICAgICAgIHRoaXMubWVudVN1cmZhY2VfLnNldEFuY2hvck1hcmdpbihtYXJnaW4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbGlzdCBpdGVtIGFzIHRoZSBzZWxlY3RlZCByb3cgYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cbiAgICAgKiBAcGFyYW0gaW5kZXggSW5kZXggb2YgbGlzdCBpdGVtIHdpdGhpbiBtZW51LlxuICAgICAqL1xuICAgIE1EQ01lbnUucHJvdG90eXBlLnNldFNlbGVjdGVkSW5kZXggPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRTZWxlY3RlZEluZGV4KGluZGV4KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGVuYWJsZWQgc3RhdGUgdG8gaXNFbmFibGVkIGZvciB0aGUgbWVudSBpdGVtIGF0IHRoZSBnaXZlbiBpbmRleC5cbiAgICAgKiBAcGFyYW0gaW5kZXggSW5kZXggb2YgdGhlIG1lbnUgaXRlbVxuICAgICAqIEBwYXJhbSBpc0VuYWJsZWQgVGhlIGRlc2lyZWQgZW5hYmxlZCBzdGF0ZSBvZiB0aGUgbWVudSBpdGVtLlxuICAgICAqL1xuICAgIE1EQ01lbnUucHJvdG90eXBlLnNldEVuYWJsZWQgPSBmdW5jdGlvbiAoaW5kZXgsIGlzRW5hYmxlZCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldEVuYWJsZWQoaW5kZXgsIGlzRW5hYmxlZCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIFRoZSBpdGVtIHdpdGhpbiB0aGUgbWVudSBhdCB0aGUgaW5kZXggc3BlY2lmaWVkLlxuICAgICAqL1xuICAgIE1EQ01lbnUucHJvdG90eXBlLmdldE9wdGlvbkJ5SW5kZXggPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICAgICAgaWYgKGluZGV4IDwgaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1tpbmRleF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDTWVudS5wcm90b3R5cGUuc2V0Rml4ZWRQb3NpdGlvbiA9IGZ1bmN0aW9uIChpc0ZpeGVkKSB7XG4gICAgICAgIHRoaXMubWVudVN1cmZhY2VfLnNldEZpeGVkUG9zaXRpb24oaXNGaXhlZCk7XG4gICAgfTtcbiAgICBNRENNZW51LnByb3RvdHlwZS5ob2lzdE1lbnVUb0JvZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubWVudVN1cmZhY2VfLmhvaXN0TWVudVRvQm9keSgpO1xuICAgIH07XG4gICAgTURDTWVudS5wcm90b3R5cGUuc2V0SXNIb2lzdGVkID0gZnVuY3Rpb24gKGlzSG9pc3RlZCkge1xuICAgICAgICB0aGlzLm1lbnVTdXJmYWNlXy5zZXRJc0hvaXN0ZWQoaXNIb2lzdGVkKTtcbiAgICB9O1xuICAgIE1EQ01lbnUucHJvdG90eXBlLnNldEFic29sdXRlUG9zaXRpb24gPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICB0aGlzLm1lbnVTdXJmYWNlXy5zZXRBYnNvbHV0ZVBvc2l0aW9uKHgsIHkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZWxlbWVudCB0aGF0IHRoZSBtZW51LXN1cmZhY2UgaXMgYW5jaG9yZWQgdG8uXG4gICAgICovXG4gICAgTURDTWVudS5wcm90b3R5cGUuc2V0QW5jaG9yRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHRoaXMubWVudVN1cmZhY2VfLmFuY2hvckVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH07XG4gICAgTURDTWVudS5wcm90b3R5cGUuZ2V0RGVmYXVsdEZvdW5kYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIERPIE5PVCBJTkxJTkUgdGhpcyB2YXJpYWJsZS4gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGZvdW5kYXRpb25zIHRha2UgYSBQYXJ0aWFsPE1EQ0Zvb0FkYXB0ZXI+LlxuICAgICAgICAvLyBUbyBlbnN1cmUgd2UgZG9uJ3QgYWNjaWRlbnRhbGx5IG9taXQgYW55IG1ldGhvZHMsIHdlIG5lZWQgYSBzZXBhcmF0ZSwgc3Ryb25nbHkgdHlwZWQgYWRhcHRlciB2YXJpYWJsZS5cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgdmFyIGFkYXB0ZXIgPSB7XG4gICAgICAgICAgICBhZGRDbGFzc1RvRWxlbWVudEF0SW5kZXg6IGZ1bmN0aW9uIChpbmRleCwgY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpc3QgPSBfdGhpcy5pdGVtcztcbiAgICAgICAgICAgICAgICBsaXN0W2luZGV4XS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3NGcm9tRWxlbWVudEF0SW5kZXg6IGZ1bmN0aW9uIChpbmRleCwgY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpc3QgPSBfdGhpcy5pdGVtcztcbiAgICAgICAgICAgICAgICBsaXN0W2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkQXR0cmlidXRlVG9FbGVtZW50QXRJbmRleDogZnVuY3Rpb24gKGluZGV4LCBhdHRyLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBsaXN0ID0gX3RoaXMuaXRlbXM7XG4gICAgICAgICAgICAgICAgbGlzdFtpbmRleF0uc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW1vdmVBdHRyaWJ1dGVGcm9tRWxlbWVudEF0SW5kZXg6IGZ1bmN0aW9uIChpbmRleCwgYXR0cikge1xuICAgICAgICAgICAgICAgIHZhciBsaXN0ID0gX3RoaXMuaXRlbXM7XG4gICAgICAgICAgICAgICAgbGlzdFtpbmRleF0ucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVsZW1lbnRDb250YWluc0NsYXNzOiBmdW5jdGlvbiAoZWxlbWVudCwgY2xhc3NOYW1lKSB7IHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgY2xvc2VTdXJmYWNlOiBmdW5jdGlvbiAoc2tpcFJlc3RvcmVGb2N1cykgeyByZXR1cm4gX3RoaXMubWVudVN1cmZhY2VfLmNsb3NlKHNraXBSZXN0b3JlRm9jdXMpOyB9LFxuICAgICAgICAgICAgZ2V0RWxlbWVudEluZGV4OiBmdW5jdGlvbiAoZWxlbWVudCkgeyByZXR1cm4gX3RoaXMuaXRlbXMuaW5kZXhPZihlbGVtZW50KTsgfSxcbiAgICAgICAgICAgIG5vdGlmeVNlbGVjdGVkOiBmdW5jdGlvbiAoZXZ0RGF0YSkgeyByZXR1cm4gX3RoaXMuZW1pdChzdHJpbmdzLlNFTEVDVEVEX0VWRU5ULCB7XG4gICAgICAgICAgICAgICAgaW5kZXg6IGV2dERhdGEuaW5kZXgsXG4gICAgICAgICAgICAgICAgaXRlbTogX3RoaXMuaXRlbXNbZXZ0RGF0YS5pbmRleF0sXG4gICAgICAgICAgICB9KTsgfSxcbiAgICAgICAgICAgIGdldE1lbnVJdGVtQ291bnQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLml0ZW1zLmxlbmd0aDsgfSxcbiAgICAgICAgICAgIGZvY3VzSXRlbUF0SW5kZXg6IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gX3RoaXMuaXRlbXNbaW5kZXhdLmZvY3VzKCk7IH0sXG4gICAgICAgICAgICBmb2N1c0xpc3RSb290OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuTElTVF9TRUxFQ1RPUikuZm9jdXMoKTsgfSxcbiAgICAgICAgICAgIGlzU2VsZWN0YWJsZUl0ZW1BdEluZGV4OiBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuICEhY2xvc2VzdChfdGhpcy5pdGVtc1tpbmRleF0sIFwiLlwiICsgY3NzQ2xhc3Nlcy5NRU5VX1NFTEVDVElPTl9HUk9VUCk7IH0sXG4gICAgICAgICAgICBnZXRTZWxlY3RlZFNpYmxpbmdPZkl0ZW1BdEluZGV4OiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0aW9uR3JvdXBFbCA9IGNsb3Nlc3QoX3RoaXMuaXRlbXNbaW5kZXhdLCBcIi5cIiArIGNzc0NsYXNzZXMuTUVOVV9TRUxFQ1RJT05fR1JPVVApO1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZEl0ZW1FbCA9IHNlbGVjdGlvbkdyb3VwRWwucXVlcnlTZWxlY3RvcihcIi5cIiArIGNzc0NsYXNzZXMuTUVOVV9TRUxFQ1RFRF9MSVNUX0lURU0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZEl0ZW1FbCA/IF90aGlzLml0ZW1zLmluZGV4T2Yoc2VsZWN0ZWRJdGVtRWwpIDogLTE7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICByZXR1cm4gbmV3IE1EQ01lbnVGb3VuZGF0aW9uKGFkYXB0ZXIpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ01lbnU7XG59KE1EQ0NvbXBvbmVudCkpO1xuZXhwb3J0IHsgTURDTWVudSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50LmpzLm1hcCIsIjxkaXZcbiAgYmluZDp0aGlzPXtlbGVtZW50fVxuICB1c2U6dXNlQWN0aW9ucz17dXNlfVxuICB1c2U6Zm9yd2FyZEV2ZW50c1xuICBjbGFzcz1cIlxuICAgIG1kYy1tZW51LXN1cmZhY2VcbiAgICB7Y2xhc3NOYW1lfVxuICAgIHtmaXhlZCA/ICdtZGMtbWVudS1zdXJmYWNlLS1maXhlZCcgOiAnJ31cbiAgICB7aXNTdGF0aWMgPyAnbWRjLW1lbnUtc3VyZmFjZS0tb3BlbicgOiAnJ31cbiAgICB7aXNTdGF0aWMgPyAnc211aS1tZW51LXN1cmZhY2UtLXN0YXRpYycgOiAnJ31cbiAgXCJcbiAgb246TURDTWVudVN1cmZhY2U6Y2xvc2VkPXt1cGRhdGVPcGVufSBvbjpNRENNZW51U3VyZmFjZTpvcGVuZWQ9e3VwZGF0ZU9wZW59XG4gIHsuLi5leGNsdWRlKCQkcHJvcHMsIFsndXNlJywgJ2NsYXNzJywgJ3N0YXRpYycsICdhbmNob3InLCAnZml4ZWQnLCAnb3BlbicsICdxdWlja09wZW4nLCAnYW5jaG9yRWxlbWVudCcsICdhbmNob3JDb3JuZXInLCAnZWxlbWVudCddKX1cbj48c2xvdD48L3Nsb3Q+PC9kaXY+XG5cbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICBpbXBvcnQge0Nvcm5lciwgQ29ybmVyQml0fSBmcm9tICdAbWF0ZXJpYWwvbWVudS1zdXJmYWNlJztcblxuICBleHBvcnQge0Nvcm5lciwgQ29ybmVyQml0fTtcbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICBpbXBvcnQge01EQ01lbnVTdXJmYWNlfSBmcm9tICdAbWF0ZXJpYWwvbWVudS1zdXJmYWNlJztcbiAgaW1wb3J0IHtvbk1vdW50LCBvbkRlc3Ryb3ksIGdldENvbnRleHQsIHNldENvbnRleHR9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7Y3VycmVudF9jb21wb25lbnR9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7Zm9yd2FyZEV2ZW50c0J1aWxkZXJ9IGZyb20gJ0BzbXVpL2NvbW1vbi9mb3J3YXJkRXZlbnRzLmpzJztcbiAgaW1wb3J0IHtleGNsdWRlfSBmcm9tICdAc211aS9jb21tb24vZXhjbHVkZS5qcyc7XG4gIGltcG9ydCB7dXNlQWN0aW9uc30gZnJvbSAnQHNtdWkvY29tbW9uL3VzZUFjdGlvbnMuanMnO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihjdXJyZW50X2NvbXBvbmVudCwgWydNRENNZW51U3VyZmFjZTpjbG9zZWQnLCAnTURDTWVudVN1cmZhY2U6b3BlbmVkJ10pO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG4gIGxldCBjbGFzc05hbWUgPSAnJztcbiAgZXhwb3J0IHtjbGFzc05hbWUgYXMgY2xhc3N9O1xuICBsZXQgaXNTdGF0aWMgPSBmYWxzZTtcbiAgZXhwb3J0IHtpc1N0YXRpYyBhcyBzdGF0aWN9O1xuICBleHBvcnQgbGV0IGFuY2hvciA9IHRydWU7XG4gIGV4cG9ydCBsZXQgZml4ZWQgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBvcGVuID0gaXNTdGF0aWM7XG4gIGV4cG9ydCBsZXQgcXVpY2tPcGVuID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgYW5jaG9yRWxlbWVudCA9IG51bGw7XG4gIGV4cG9ydCBsZXQgYW5jaG9yQ29ybmVyID0gbnVsbDtcblxuICBleHBvcnQgbGV0IGVsZW1lbnQgPSB1bmRlZmluZWQ7IC8vIFRoaXMgaXMgZXhwb3J0ZWQgYmVjYXVzZSBNZW51IG5lZWRzIGl0LlxuICBsZXQgbWVudVN1cmZhY2U7XG4gIGxldCBpbnN0YW50aWF0ZSA9IGdldENvbnRleHQoJ1NNVUk6bWVudS1zdXJmYWNlOmluc3RhbnRpYXRlJyk7XG4gIGxldCBnZXRJbnN0YW5jZSA9IGdldENvbnRleHQoJ1NNVUk6bWVudS1zdXJmYWNlOmdldEluc3RhbmNlJyk7XG5cbiAgc2V0Q29udGV4dCgnU01VSTpsaXN0OnJvbGUnLCAnbWVudScpO1xuICBzZXRDb250ZXh0KCdTTVVJOmxpc3Q6aXRlbTpyb2xlJywgJ21lbnVpdGVtJyk7XG5cbiAgJDogaWYgKGVsZW1lbnQgJiYgYW5jaG9yICYmICFlbGVtZW50LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZGMtbWVudS1zdXJmYWNlLS1hbmNob3InKSkge1xuICAgIGVsZW1lbnQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdtZGMtbWVudS1zdXJmYWNlLS1hbmNob3InKTtcbiAgICBhbmNob3JFbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICB9XG5cbiAgJDogaWYgKG1lbnVTdXJmYWNlICYmIG1lbnVTdXJmYWNlLmlzT3BlbigpICE9PSBvcGVuKSB7XG4gICAgaWYgKG9wZW4pIHtcbiAgICAgIG1lbnVTdXJmYWNlLm9wZW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVudVN1cmZhY2UuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICAkOiBpZiAobWVudVN1cmZhY2UgJiYgbWVudVN1cmZhY2UucXVpY2tPcGVuICE9PSBxdWlja09wZW4pIHtcbiAgICBtZW51U3VyZmFjZS5xdWlja09wZW4gPSBxdWlja09wZW47XG4gIH1cblxuICAkOiBpZiAobWVudVN1cmZhY2UgJiYgbWVudVN1cmZhY2UuYW5jaG9yRWxlbWVudCAhPT0gYW5jaG9yRWxlbWVudCkge1xuICAgIG1lbnVTdXJmYWNlLmFuY2hvckVsZW1lbnQgPSBhbmNob3JFbGVtZW50O1xuICB9XG5cbiAgbGV0IG9sZEZpeGVkID0gbnVsbDtcbiAgJDogaWYgKG1lbnVTdXJmYWNlICYmIG9sZEZpeGVkICE9PSBmaXhlZCkge1xuICAgIG1lbnVTdXJmYWNlLnNldEZpeGVkUG9zaXRpb24oZml4ZWQpO1xuICAgIG9sZEZpeGVkID0gZml4ZWQ7XG4gIH1cblxuICAkOiBpZiAobWVudVN1cmZhY2UgJiYgYW5jaG9yQ29ybmVyICE9IG51bGwpIHtcbiAgICBpZiAoQ29ybmVyLmhhc093blByb3BlcnR5KGFuY2hvckNvcm5lcikpIHtcbiAgICAgIG1lbnVTdXJmYWNlLnNldEFuY2hvckNvcm5lcihDb3JuZXJbYW5jaG9yQ29ybmVyXSk7XG4gICAgfSBlbHNlIGlmIChDb3JuZXJCaXQuaGFzT3duUHJvcGVydHkoYW5jaG9yQ29ybmVyKSkge1xuICAgICAgbWVudVN1cmZhY2Uuc2V0QW5jaG9yQ29ybmVyKENvcm5lclthbmNob3JDb3JuZXJdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVudVN1cmZhY2Uuc2V0QW5jaG9yQ29ybmVyKGFuY2hvckNvcm5lcik7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VudChhc3luYyAoKSA9PiB7XG4gICAgaWYgKGluc3RhbnRpYXRlICE9PSBmYWxzZSkge1xuICAgICAgbWVudVN1cmZhY2UgPSBuZXcgTURDTWVudVN1cmZhY2UoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbnVTdXJmYWNlID0gYXdhaXQgZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG4gIH0pO1xuXG4gIG9uRGVzdHJveSgoKSA9PiB7XG4gICAgaWYgKGFuY2hvcikge1xuICAgICAgZWxlbWVudCAmJiBlbGVtZW50LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnbWRjLW1lbnUtc3VyZmFjZS0tYW5jaG9yJyk7XG4gICAgfVxuICAgIGxldCBpc0hvaXN0ZWQgPSBmYWxzZTtcbiAgICBpZiAobWVudVN1cmZhY2UpIHtcbiAgICAgIGlzSG9pc3RlZCA9IG1lbnVTdXJmYWNlLmZvdW5kYXRpb25fLmlzSG9pc3RlZEVsZW1lbnRfO1xuICAgIH1cbiAgICBpZiAoaW5zdGFudGlhdGUgIT09IGZhbHNlKSB7XG4gICAgICBtZW51U3VyZmFjZS5kZXN0cm95KCk7XG4gICAgfVxuICAgIGlmIChpc0hvaXN0ZWQpIHtcbiAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZU9wZW4oKSB7XG4gICAgaWYgKG1lbnVTdXJmYWNlKSB7XG4gICAgICBpZiAoaXNTdGF0aWMpIHtcbiAgICAgICAgb3BlbiA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcGVuID0gbWVudVN1cmZhY2UuaXNPcGVuKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldE9wZW4odmFsdWUpIHtcbiAgICBvcGVuID0gdmFsdWU7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gc2V0QW5jaG9yQ29ybmVyKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbWVudVN1cmZhY2Uuc2V0QW5jaG9yQ29ybmVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldEFuY2hvck1hcmdpbiguLi5hcmdzKSB7XG4gICAgcmV0dXJuIG1lbnVTdXJmYWNlLnNldEFuY2hvck1hcmdpbiguLi5hcmdzKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRGaXhlZFBvc2l0aW9uKGlzRml4ZWQsIC4uLmFyZ3MpIHtcbiAgICBmaXhlZCA9IGlzRml4ZWQ7XG4gICAgcmV0dXJuIG1lbnVTdXJmYWNlLnNldEZpeGVkUG9zaXRpb24oaXNGaXhlZCwgLi4uYXJncyk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gc2V0QWJzb2x1dGVQb3NpdGlvbiguLi5hcmdzKSB7XG4gICAgcmV0dXJuIG1lbnVTdXJmYWNlLnNldEFic29sdXRlUG9zaXRpb24oLi4uYXJncyk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gc2V0TWVudVN1cmZhY2VBbmNob3JFbGVtZW50KC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbWVudVN1cmZhY2Uuc2V0TWVudVN1cmZhY2VBbmNob3JFbGVtZW50KC4uLmFyZ3MpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGhvaXN0TWVudVRvQm9keSguLi5hcmdzKSB7XG4gICAgcmV0dXJuIG1lbnVTdXJmYWNlLmhvaXN0TWVudVRvQm9keSguLi5hcmdzKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRJc0hvaXN0ZWQoLi4uYXJncykge1xuICAgIHJldHVybiBtZW51U3VyZmFjZS5zZXRJc0hvaXN0ZWQoLi4uYXJncyk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdEZvdW5kYXRpb24oLi4uYXJncykge1xuICAgIHJldHVybiBtZW51U3VyZmFjZS5nZXREZWZhdWx0Rm91bmRhdGlvbiguLi5hcmdzKTtcbiAgfVxuPC9zY3JpcHQ+IiwiPE1lbnVTdXJmYWNlXG4gIGJpbmQ6ZWxlbWVudFxuICB1c2U9e1tmb3J3YXJkRXZlbnRzLCAuLi51c2VdfVxuICBjbGFzcz1cIm1kYy1tZW51IHtjbGFzc05hbWV9XCJcbiAgb246TURDTWVudTpzZWxlY3RlZD17dXBkYXRlT3Blbn1cbiAgb246TURDTWVudVN1cmZhY2U6Y2xvc2VkPXt1cGRhdGVPcGVufSBvbjpNRENNZW51U3VyZmFjZTpvcGVuZWQ9e3VwZGF0ZU9wZW59XG4gIHsuLi5leGNsdWRlKCQkcHJvcHMsIFsndXNlJywgJ2NsYXNzJywgJ3dyYXBGb2N1cyddKX1cbj48c2xvdD48L3Nsb3Q+PC9NZW51U3VyZmFjZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHtNRENNZW51fSBmcm9tICdAbWF0ZXJpYWwvbWVudSc7XG4gIGltcG9ydCB7b25Nb3VudCwgb25EZXN0cm95LCBnZXRDb250ZXh0LCBzZXRDb250ZXh0fSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQge2N1cnJlbnRfY29tcG9uZW50fSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQge2ZvcndhcmRFdmVudHNCdWlsZGVyfSBmcm9tICdAc211aS9jb21tb24vZm9yd2FyZEV2ZW50cy5qcyc7XG4gIGltcG9ydCB7ZXhjbHVkZX0gZnJvbSAnQHNtdWkvY29tbW9uL2V4Y2x1ZGUuanMnO1xuICBpbXBvcnQge3VzZUFjdGlvbnN9IGZyb20gJ0BzbXVpL2NvbW1vbi91c2VBY3Rpb25zLmpzJztcbiAgaW1wb3J0IE1lbnVTdXJmYWNlLCB7Q29ybmVyLCBDb3JuZXJCaXR9IGZyb20gJ0BzbXVpL21lbnUtc3VyZmFjZS9NZW51U3VyZmFjZS5zdmVsdGUnO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihjdXJyZW50X2NvbXBvbmVudCwgWydNRENNZW51OnNlbGVjdGVkJywgJ01EQ01lbnVTdXJmYWNlOmNsb3NlZCcsICdNRENNZW51U3VyZmFjZTpvcGVuZWQnXSk7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBleHBvcnQge2NsYXNzTmFtZSBhcyBjbGFzc307XG4gIGxldCBpc1N0YXRpYyA9IGZhbHNlO1xuICBleHBvcnQge2lzU3RhdGljIGFzIHN0YXRpY307IC8vIFB1cnBvc2VseSBvbWl0dGVkIGZyb20gdGhlIGV4Y2x1ZGUgY2FsbCBhYm92ZS5cbiAgZXhwb3J0IGxldCBvcGVuID0gaXNTdGF0aWM7IC8vIFB1cnBvc2VseSBvbWl0dGVkIGZyb20gdGhlIGV4Y2x1ZGUgY2FsbCBhYm92ZS5cbiAgZXhwb3J0IGxldCBxdWlja09wZW4gPSBmYWxzZTsgLy8gUHVycG9zZWx5IG9taXR0ZWQgZnJvbSB0aGUgZXhjbHVkZSBjYWxsIGFib3ZlLlxuICBleHBvcnQgbGV0IGFuY2hvckNvcm5lciA9IG51bGw7IC8vIFB1cnBvc2VseSBvbWl0dGVkIGZyb20gdGhlIGV4Y2x1ZGUgY2FsbCBhYm92ZS5cbiAgZXhwb3J0IGxldCB3cmFwRm9jdXMgPSBmYWxzZTtcblxuICBsZXQgZWxlbWVudDtcbiAgbGV0IG1lbnU7XG4gIGxldCBpbnN0YW50aWF0ZSA9IGdldENvbnRleHQoJ1NNVUk6bWVudTppbnN0YW50aWF0ZScpO1xuICBsZXQgZ2V0SW5zdGFuY2UgPSBnZXRDb250ZXh0KCdTTVVJOm1lbnU6Z2V0SW5zdGFuY2UnKTtcbiAgbGV0IG1lbnVTdXJmYWNlUHJvbWlzZVJlc29sdmU7XG4gIGxldCBtZW51U3VyZmFjZVByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IG1lbnVTdXJmYWNlUHJvbWlzZVJlc29sdmUgPSByZXNvbHZlKTtcbiAgbGV0IGxpc3RQcm9taXNlUmVzb2x2ZTtcbiAgbGV0IGxpc3RQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBsaXN0UHJvbWlzZVJlc29sdmUgPSByZXNvbHZlKTtcblxuICBzZXRDb250ZXh0KCdTTVVJOm1lbnUtc3VyZmFjZTppbnN0YW50aWF0ZScsIGZhbHNlKTtcbiAgc2V0Q29udGV4dCgnU01VSTptZW51LXN1cmZhY2U6Z2V0SW5zdGFuY2UnLCBnZXRNZW51U3VyZmFjZUluc3RhbmNlUHJvbWlzZSk7XG4gIHNldENvbnRleHQoJ1NNVUk6bGlzdDppbnN0YW50aWF0ZScsIGZhbHNlKTtcbiAgc2V0Q29udGV4dCgnU01VSTpsaXN0OmdldEluc3RhbmNlJywgZ2V0TGlzdEluc3RhbmNlUHJvbWlzZSk7XG5cbiAgJDogaWYgKG1lbnUgJiYgbWVudS5vcGVuICE9PSBvcGVuKSB7XG4gICAgaWYgKGlzU3RhdGljKSB7XG4gICAgICBvcGVuID0gdHJ1ZTtcbiAgICB9XG4gICAgbWVudS5vcGVuID0gb3BlbjtcbiAgfVxuXG4gICQ6IGlmIChtZW51ICYmIG1lbnUud3JhcEZvY3VzICE9PSB3cmFwRm9jdXMpIHtcbiAgICBtZW51LndyYXBGb2N1cyA9IHdyYXBGb2N1cztcbiAgfVxuXG4gICQ6IGlmIChtZW51KSB7XG4gICAgbWVudS5xdWlja09wZW4gPSBxdWlja09wZW47XG4gIH1cblxuICAkOiBpZiAobWVudSAmJiBhbmNob3JDb3JuZXIgIT0gbnVsbCkge1xuICAgIGlmIChDb3JuZXIuaGFzT3duUHJvcGVydHkoYW5jaG9yQ29ybmVyKSkge1xuICAgICAgbWVudS5zZXRBbmNob3JDb3JuZXIoQ29ybmVyW2FuY2hvckNvcm5lcl0pO1xuICAgIH0gZWxzZSBpZiAoQ29ybmVyQml0Lmhhc093blByb3BlcnR5KGFuY2hvckNvcm5lcikpIHtcbiAgICAgIG1lbnUuc2V0QW5jaG9yQ29ybmVyKENvcm5lclthbmNob3JDb3JuZXJdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVudS5zZXRBbmNob3JDb3JuZXIoYW5jaG9yQ29ybmVyKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdW50KGFzeW5jICgpID0+IHtcbiAgICBpZiAoaW5zdGFudGlhdGUgIT09IGZhbHNlKSB7XG4gICAgICBtZW51ID0gbmV3IE1EQ01lbnUoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbnUgPSBhd2FpdCBnZXRJbnN0YW5jZSgpO1xuICAgIH1cbiAgICBtZW51U3VyZmFjZVByb21pc2VSZXNvbHZlKG1lbnUubWVudVN1cmZhY2VfKTtcbiAgICBsaXN0UHJvbWlzZVJlc29sdmUobWVudS5saXN0Xyk7XG4gIH0pO1xuXG4gIG9uRGVzdHJveSgoKSA9PiB7XG4gICAgaWYgKGluc3RhbnRpYXRlICE9PSBmYWxzZSkge1xuICAgICAgbWVudSAmJiBtZW51LmRlc3Ryb3koKTtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGdldE1lbnVTdXJmYWNlSW5zdGFuY2VQcm9taXNlKCkge1xuICAgIHJldHVybiBtZW51U3VyZmFjZVByb21pc2U7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRMaXN0SW5zdGFuY2VQcm9taXNlKCkge1xuICAgIHJldHVybiBsaXN0UHJvbWlzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZU9wZW4oKSB7XG4gICAgb3BlbiA9IG1lbnUub3BlbjtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRPcGVuKHZhbHVlKSB7XG4gICAgb3BlbiA9IHZhbHVlO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1zKCkge1xuICAgIHJldHVybiBtZW51Lml0ZW1zO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRGb2N1c1N0YXRlKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbWVudS5zZXREZWZhdWx0Rm9jdXNTdGF0ZSguLi5hcmdzKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRBbmNob3JDb3JuZXIoLi4uYXJncykge1xuICAgIHJldHVybiBtZW51LnNldEFuY2hvckNvcm5lciguLi5hcmdzKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRBbmNob3JNYXJnaW4oLi4uYXJncykge1xuICAgIHJldHVybiBtZW51LnNldEFuY2hvck1hcmdpbiguLi5hcmdzKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRTZWxlY3RlZEluZGV4KC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbWVudS5zZXRTZWxlY3RlZEluZGV4KC4uLmFyZ3MpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldEVuYWJsZWQoLi4uYXJncykge1xuICAgIHJldHVybiBtZW51LnNldEVuYWJsZWQoLi4uYXJncyk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0T3B0aW9uQnlJbmRleCguLi5hcmdzKSB7XG4gICAgcmV0dXJuIG1lbnUuZ2V0T3B0aW9uQnlJbmRleCguLi5hcmdzKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRGaXhlZFBvc2l0aW9uKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbWVudS5zZXRGaXhlZFBvc2l0aW9uKC4uLmFyZ3MpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGhvaXN0TWVudVRvQm9keSguLi5hcmdzKSB7XG4gICAgcmV0dXJuIG1lbnUuaG9pc3RNZW51VG9Cb2R5KC4uLmFyZ3MpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldElzSG9pc3RlZCguLi5hcmdzKSB7XG4gICAgcmV0dXJuIG1lbnUuc2V0SXNIb2lzdGVkKC4uLmFyZ3MpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldEFic29sdXRlUG9zaXRpb24oLi4uYXJncykge1xuICAgIHJldHVybiBtZW51LnNldEFic29sdXRlUG9zaXRpb24oLi4uYXJncyk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gc2V0QW5jaG9yRWxlbWVudCguLi5hcmdzKSB7XG4gICAgcmV0dXJuIG1lbnUuc2V0QW5jaG9yRWxlbWVudCguLi5hcmdzKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0Rm91bmRhdGlvbiguLi5hcmdzKSB7XG4gICAgcmV0dXJuIG1lbnUuZ2V0RGVmYXVsdEZvdW5kYXRpb24oLi4uYXJncyk7XG4gIH1cbjwvc2NyaXB0PiIsIjxzdmVsdGU6Y29tcG9uZW50XG4gIHRoaXM9e2NvbXBvbmVudH1cbiAgdXNlPXtbZm9yd2FyZEV2ZW50cywgLi4udXNlXX1cbiAgY2xhc3M9XCJ7c211aUNsYXNzfSB7Y2xhc3NOYW1lfVwiXG4gIHsuLi5leGNsdWRlKCQkcHJvcHMsIFsndXNlJywgJ2NsYXNzJywgJ2NvbXBvbmVudCcsICdmb3J3YXJkRXZlbnRzJ10pfVxuPjxzbG90Pjwvc2xvdD48L3N2ZWx0ZTpjb21wb25lbnQ+XG5cbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICBleHBvcnQgY29uc3QgaW50ZXJuYWxzID0ge1xuICAgIGNvbXBvbmVudDogbnVsbCxcbiAgICBzbXVpQ2xhc3M6IG51bGwsXG4gICAgY29udGV4dHM6IHt9XG4gIH07XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHtzZXRDb250ZXh0fSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQge2N1cnJlbnRfY29tcG9uZW50fSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQge2ZvcndhcmRFdmVudHNCdWlsZGVyfSBmcm9tICcuL2ZvcndhcmRFdmVudHMuanMnO1xuICBpbXBvcnQge2V4Y2x1ZGV9IGZyb20gJy4vZXhjbHVkZS5qcyc7XG4gIGltcG9ydCB7dXNlQWN0aW9uc30gZnJvbSAnLi91c2VBY3Rpb25zLmpzJztcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gIGV4cG9ydCB7Y2xhc3NOYW1lIGFzIGNsYXNzfTtcbiAgZXhwb3J0IGxldCBjb21wb25lbnQgPSBpbnRlcm5hbHMuY29tcG9uZW50O1xuICBsZXQgc211aUZvcndhcmRFdmVudHMgPSBbXTtcbiAgZXhwb3J0IHtzbXVpRm9yd2FyZEV2ZW50cyBhcyBmb3J3YXJkRXZlbnRzfTtcblxuICBjb25zdCBzbXVpQ2xhc3MgPSBpbnRlcm5hbHMuY2xhc3M7XG4gIGNvbnN0IGNvbnRleHRzID0gaW50ZXJuYWxzLmNvbnRleHRzO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihjdXJyZW50X2NvbXBvbmVudCwgc211aUZvcndhcmRFdmVudHMpO1xuXG4gIGZvciAobGV0IGNvbnRleHQgaW4gY29udGV4dHMpIHtcbiAgICBpZiAoY29udGV4dHMuaGFzT3duUHJvcGVydHkoY29udGV4dCkpIHtcbiAgICAgIHNldENvbnRleHQoY29udGV4dCwgY29udGV4dHNbY29udGV4dF0pO1xuICAgIH1cbiAgfVxuPC9zY3JpcHQ+IiwiaW1wb3J0IENsYXNzQWRkZXIsIHtpbnRlcm5hbHN9IGZyb20gJy4vQ2xhc3NBZGRlci5zdmVsdGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NBZGRlckJ1aWxkZXIocHJvcHMpIHtcbiAgZnVuY3Rpb24gQ29tcG9uZW50KC4uLmFyZ3MpIHtcbiAgICBPYmplY3QuYXNzaWduKGludGVybmFscywgcHJvcHMpO1xuICAgIHJldHVybiBuZXcgQ2xhc3NBZGRlciguLi5hcmdzKTtcbiAgfVxuXG4gIENvbXBvbmVudC5wcm90b3R5cGUgPSBDbGFzc0FkZGVyO1xuXG4gIC8vIFNTUiBzdXBwb3J0XG4gIGlmIChDbGFzc0FkZGVyLiQkcmVuZGVyKSB7XG4gICAgQ29tcG9uZW50LiQkcmVuZGVyID0gKC4uLmFyZ3MpID0+IE9iamVjdC5hc3NpZ24oaW50ZXJuYWxzLCBwcm9wcykgJiYgQ2xhc3NBZGRlci4kJHJlbmRlciguLi5hcmdzKTtcbiAgfVxuICBpZiAoQ2xhc3NBZGRlci5yZW5kZXIpIHtcbiAgICBDb21wb25lbnQucmVuZGVyID0gKC4uLmFyZ3MpID0+IE9iamVjdC5hc3NpZ24oaW50ZXJuYWxzLCBwcm9wcykgJiYgQ2xhc3NBZGRlci5yZW5kZXIoLi4uYXJncyk7XG4gIH1cblxuICByZXR1cm4gQ29tcG9uZW50O1xufSIsIjxzcGFuXG4gIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gIHVzZTpmb3J3YXJkRXZlbnRzXG4gIHsuLi5leGNsdWRlKCQkcHJvcHMsIFsndXNlJ10pfVxuPjxzbG90Pjwvc2xvdD48L3NwYW4+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7Y3VycmVudF9jb21wb25lbnR9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7Zm9yd2FyZEV2ZW50c0J1aWxkZXJ9IGZyb20gJy4vZm9yd2FyZEV2ZW50cy5qcyc7XG4gIGltcG9ydCB7ZXhjbHVkZX0gZnJvbSAnLi9leGNsdWRlLmpzJztcbiAgaW1wb3J0IHt1c2VBY3Rpb25zfSBmcm9tICcuL3VzZUFjdGlvbnMuanMnO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihjdXJyZW50X2NvbXBvbmVudCk7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbjwvc2NyaXB0PiIsImltcG9ydCB7Y2xhc3NBZGRlckJ1aWxkZXJ9IGZyb20gJ0BzbXVpL2NvbW1vbi9jbGFzc0FkZGVyQnVpbGRlci5qcyc7XG5pbXBvcnQgU3BhbiBmcm9tICdAc211aS9jb21tb24vU3Bhbi5zdmVsdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzc0FkZGVyQnVpbGRlcih7XG4gIGNsYXNzOiAnbWRjLWxpc3QtaXRlbV9fZ3JhcGhpYycsXG4gIGNvbXBvbmVudDogU3BhbixcbiAgY29udGV4dHM6IHt9XG59KTsiLCJpbXBvcnQge2NsYXNzQWRkZXJCdWlsZGVyfSBmcm9tICdAc211aS9jb21tb24vY2xhc3NBZGRlckJ1aWxkZXIuanMnO1xuaW1wb3J0IEdyYXBoaWMgZnJvbSAnQHNtdWkvbGlzdC9HcmFwaGljLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3NBZGRlckJ1aWxkZXIoe1xuICBjbGFzczogJ21kYy1tZW51X19zZWxlY3Rpb24tZ3JvdXAtaWNvbicsXG4gIGNvbXBvbmVudDogR3JhcGhpYyxcbiAgY29udGV4dHM6IHt9XG59KTsiLCJ7I2lmIG5hdn1cbiAgPG5hdlxuICAgIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgICB1c2U6dXNlQWN0aW9ucz17dXNlfVxuICAgIHVzZTpmb3J3YXJkRXZlbnRzXG4gICAgY2xhc3M9XCJcbiAgICAgIG1kYy1saXN0XG4gICAgICB7Y2xhc3NOYW1lfVxuICAgICAge25vbkludGVyYWN0aXZlID8gJ21kYy1saXN0LS1ub24taW50ZXJhY3RpdmUnIDogJyd9XG4gICAgICB7ZGVuc2UgPyAnbWRjLWxpc3QtLWRlbnNlJyA6ICcnfVxuICAgICAge2F2YXRhckxpc3QgPyAnbWRjLWxpc3QtLWF2YXRhci1saXN0JyA6ICcnfVxuICAgICAge3R3b0xpbmUgPyAnbWRjLWxpc3QtLXR3by1saW5lJyA6ICcnfVxuICAgICAgeyh0aHJlZUxpbmUgJiYgIXR3b0xpbmUpID8gJ3NtdWktbGlzdC0tdGhyZWUtbGluZScgOiAnJ31cbiAgICBcIlxuICAgIG9uOk1EQ0xpc3Q6YWN0aW9uPXtoYW5kbGVBY3Rpb259XG4gICAgey4uLnByb3BzfVxuICA+PHNsb3Q+PC9zbG90PjwvbmF2PlxuezplbHNlfVxuICA8dWxcbiAgICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gICAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgICB1c2U6Zm9yd2FyZEV2ZW50c1xuICAgIGNsYXNzPVwiXG4gICAgICBtZGMtbGlzdFxuICAgICAge2NsYXNzTmFtZX1cbiAgICAgIHtub25JbnRlcmFjdGl2ZSA/ICdtZGMtbGlzdC0tbm9uLWludGVyYWN0aXZlJyA6ICcnfVxuICAgICAge2RlbnNlID8gJ21kYy1saXN0LS1kZW5zZScgOiAnJ31cbiAgICAgIHthdmF0YXJMaXN0ID8gJ21kYy1saXN0LS1hdmF0YXItbGlzdCcgOiAnJ31cbiAgICAgIHt0d29MaW5lID8gJ21kYy1saXN0LS10d28tbGluZScgOiAnJ31cbiAgICAgIHsodGhyZWVMaW5lICYmICF0d29MaW5lKSA/ICdzbXVpLWxpc3QtLXRocmVlLWxpbmUnIDogJyd9XG4gICAgXCJcbiAgICB7cm9sZX1cbiAgICBvbjpNRENMaXN0OmFjdGlvbj17aGFuZGxlQWN0aW9ufVxuICAgIHsuLi5wcm9wc31cbiAgPjxzbG90Pjwvc2xvdD48L3VsPlxuey9pZn1cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHtNRENMaXN0fSBmcm9tICdAbWF0ZXJpYWwvbGlzdCc7XG4gIGltcG9ydCB7b25Nb3VudCwgb25EZXN0cm95LCBnZXRDb250ZXh0LCBzZXRDb250ZXh0fSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQge2N1cnJlbnRfY29tcG9uZW50fSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQge2ZvcndhcmRFdmVudHNCdWlsZGVyfSBmcm9tICdAc211aS9jb21tb24vZm9yd2FyZEV2ZW50cy5qcyc7XG4gIGltcG9ydCB7ZXhjbHVkZX0gZnJvbSAnQHNtdWkvY29tbW9uL2V4Y2x1ZGUuanMnO1xuICBpbXBvcnQge3VzZUFjdGlvbnN9IGZyb20gJ0BzbXVpL2NvbW1vbi91c2VBY3Rpb25zLmpzJztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoY3VycmVudF9jb21wb25lbnQsIFsnTURDTGlzdDphY3Rpb24nXSk7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBleHBvcnQge2NsYXNzTmFtZSBhcyBjbGFzc307XG4gIGV4cG9ydCBsZXQgbm9uSW50ZXJhY3RpdmUgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBkZW5zZSA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGF2YXRhckxpc3QgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCB0d29MaW5lID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgdGhyZWVMaW5lID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgdmVydGljYWwgPSB0cnVlO1xuICBleHBvcnQgbGV0IHdyYXBGb2N1cyA9IGZhbHNlO1xuICBleHBvcnQgbGV0IHNpbmdsZVNlbGVjdGlvbiA9IGZhbHNlO1xuICBleHBvcnQgbGV0IHNlbGVjdGVkSW5kZXggPSBudWxsO1xuICBleHBvcnQgbGV0IHJhZGlvbGlzdCA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGNoZWNrbGlzdCA9IGZhbHNlO1xuXG4gICQ6IHByb3BzID0gZXhjbHVkZSgkJHByb3BzLCBbJ3VzZScsICdjbGFzcycsICdub25JbnRlcmFjdGl2ZScsICdkZW5zZScsICdhdmF0YXJMaXN0JywgJ3R3b0xpbmUnLCAndGhyZWVMaW5lJywgJ3ZlcnRpY2FsJywgJ3dyYXBGb2N1cycsICdzaW5nbGVTZWxlY3Rpb24nLCAnc2VsZWN0ZWRJbmRleCcsICdyYWRpb2xpc3QnLCAnY2hlY2tsaXN0J10pO1xuXG4gIGxldCBlbGVtZW50O1xuICBsZXQgbGlzdDtcbiAgbGV0IHJvbGUgPSBnZXRDb250ZXh0KCdTTVVJOmxpc3Q6cm9sZScpO1xuICBsZXQgbmF2ID0gZ2V0Q29udGV4dCgnU01VSTpsaXN0Om5hdicpO1xuICBsZXQgaW5zdGFudGlhdGUgPSBnZXRDb250ZXh0KCdTTVVJOmxpc3Q6aW5zdGFudGlhdGUnKTtcbiAgbGV0IGdldEluc3RhbmNlID0gZ2V0Q29udGV4dCgnU01VSTpsaXN0OmdldEluc3RhbmNlJyk7XG4gIGxldCBhZGRMYXlvdXRMaXN0ZW5lciA9IGdldENvbnRleHQoJ1NNVUk6YWRkTGF5b3V0TGlzdGVuZXInKTtcbiAgbGV0IHJlbW92ZUxheW91dExpc3RlbmVyO1xuXG4gIHNldENvbnRleHQoJ1NNVUk6bGlzdDpub25JbnRlcmFjdGl2ZScsIG5vbkludGVyYWN0aXZlKTtcblxuICBpZiAoIXJvbGUpIHtcbiAgICBpZiAoc2luZ2xlU2VsZWN0aW9uKSB7XG4gICAgICByb2xlID0gJ2xpc3Rib3gnO1xuICAgICAgc2V0Q29udGV4dCgnU01VSTpsaXN0Oml0ZW06cm9sZScsICdvcHRpb24nKTtcbiAgICB9IGVsc2UgaWYgKHJhZGlvbGlzdCkge1xuICAgICAgcm9sZSA9ICdyYWRpb2dyb3VwJztcbiAgICAgIHNldENvbnRleHQoJ1NNVUk6bGlzdDppdGVtOnJvbGUnLCAncmFkaW8nKTtcbiAgICB9IGVsc2UgaWYgKGNoZWNrbGlzdCkge1xuICAgICAgcm9sZSA9ICdncm91cCc7XG4gICAgICBzZXRDb250ZXh0KCdTTVVJOmxpc3Q6aXRlbTpyb2xlJywgJ2NoZWNrYm94Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvbGUgPSAnbGlzdCc7XG4gICAgICBzZXRDb250ZXh0KCdTTVVJOmxpc3Q6aXRlbTpyb2xlJywgdW5kZWZpbmVkKTtcbiAgICB9XG4gIH1cblxuICAkOiBpZiAobGlzdCAmJiBsaXN0LnZlcnRpY2FsICE9PSB2ZXJ0aWNhbCkge1xuICAgIGxpc3QudmVydGljYWwgPSB2ZXJ0aWNhbDtcbiAgfVxuXG4gICQ6IGlmIChsaXN0ICYmIGxpc3Qud3JhcEZvY3VzICE9PSB3cmFwRm9jdXMpIHtcbiAgICBsaXN0LndyYXBGb2N1cyA9IHdyYXBGb2N1cztcbiAgfVxuXG4gICQ6IGlmIChsaXN0ICYmIGxpc3Quc2luZ2xlU2VsZWN0aW9uICE9PSBzaW5nbGVTZWxlY3Rpb24pIHtcbiAgICBsaXN0LnNpbmdsZVNlbGVjdGlvbiA9IHNpbmdsZVNlbGVjdGlvbjtcbiAgfVxuXG4gICQ6IGlmIChsaXN0ICYmIHNpbmdsZVNlbGVjdGlvbiAmJiBsaXN0LnNlbGVjdGVkSW5kZXggIT09IHNlbGVjdGVkSW5kZXgpIHtcbiAgICBsaXN0LnNlbGVjdGVkSW5kZXggPSBzZWxlY3RlZEluZGV4O1xuICB9XG5cbiAgaWYgKGFkZExheW91dExpc3RlbmVyKSB7XG4gICAgcmVtb3ZlTGF5b3V0TGlzdGVuZXIgPSBhZGRMYXlvdXRMaXN0ZW5lcihsYXlvdXQpO1xuICB9XG5cbiAgb25Nb3VudChhc3luYyAoKSA9PiB7XG4gICAgaWYgKGluc3RhbnRpYXRlICE9PSBmYWxzZSkge1xuICAgICAgbGlzdCA9IG5ldyBNRENMaXN0KGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0ID0gYXdhaXQgZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG4gICAgaWYgKHNpbmdsZVNlbGVjdGlvbikge1xuICAgICAgbGlzdC5pbml0aWFsaXplTGlzdFR5cGUoKTtcbiAgICAgIHNlbGVjdGVkSW5kZXggPSBsaXN0LnNlbGVjdGVkSW5kZXg7XG4gICAgfVxuICB9KTtcblxuICBvbkRlc3Ryb3koKCkgPT4ge1xuICAgIGlmIChpbnN0YW50aWF0ZSAhPT0gZmFsc2UpIHtcbiAgICAgIGxpc3QgJiYgbGlzdC5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgaWYgKHJlbW92ZUxheW91dExpc3RlbmVyKSB7XG4gICAgICByZW1vdmVMYXlvdXRMaXN0ZW5lcigpO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQWN0aW9uKGUpIHtcbiAgICBpZiAobGlzdCAmJiBsaXN0Lmxpc3RFbGVtZW50c1tlLmRldGFpbC5pbmRleF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdtZGMtbGlzdC1pdGVtLS1kaXNhYmxlZCcpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsaXN0LnNlbGVjdGVkSW5kZXggPSBzZWxlY3RlZEluZGV4O1xuICAgIH0gZWxzZSBpZiAobGlzdCAmJiBsaXN0LnNlbGVjdGVkSW5kZXggPT09IGUuZGV0YWlsLmluZGV4KSB7XG4gICAgICBzZWxlY3RlZEluZGV4ID0gZS5kZXRhaWwuaW5kZXg7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGxheW91dCguLi5hcmdzKSB7XG4gICAgcmV0dXJuIGxpc3QubGF5b3V0KC4uLmFyZ3MpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldEVuYWJsZWQoLi4uYXJncykge1xuICAgIHJldHVybiBsaXN0LnNldEVuYWJsZWQoLi4uYXJncyk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdEZvdW5kYXRpb24oLi4uYXJncykge1xuICAgIHJldHVybiBsaXN0LmdldERlZmF1bHRGb3VuZGF0aW9uKC4uLmFyZ3MpO1xuICB9XG48L3NjcmlwdD4iLCJ7I2lmIG5hdiAmJiBocmVmfVxuICA8YVxuICAgIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgICB1c2U6dXNlQWN0aW9ucz17dXNlfVxuICAgIHVzZTpmb3J3YXJkRXZlbnRzXG4gICAgY2xhc3M9XCJcbiAgICAgIG1kYy1saXN0LWl0ZW1cbiAgICAgIHtjbGFzc05hbWV9XG4gICAgICB7YWN0aXZhdGVkID8gJ21kYy1saXN0LWl0ZW0tLWFjdGl2YXRlZCcgOiAnJ31cbiAgICAgIHtzZWxlY3RlZCA/ICdtZGMtbGlzdC1pdGVtLS1zZWxlY3RlZCcgOiAnJ31cbiAgICAgIHtkaXNhYmxlZCA/ICdtZGMtbGlzdC1pdGVtLS1kaXNhYmxlZCcgOiAnJ31cbiAgICBcIlxuICAgIHVzZTpSaXBwbGU9e1tyaXBwbGUsIHt1bmJvdW5kZWQ6IGZhbHNlLCBjb2xvcn1dfVxuICAgIHtocmVmfVxuICAgIHsuLi4oYWN0aXZhdGVkID8geydhcmlhLWN1cnJlbnQnOiAncGFnZSd9IDoge30pfVxuICAgIHt0YWJpbmRleH1cbiAgICBvbjpjbGljaz17YWN0aW9ufVxuICAgIG9uOmtleWRvd249e2hhbmRsZUtleWRvd259XG4gICAgey4uLnByb3BzfVxuICA+PHNsb3Q+PC9zbG90PjwvYT5cbns6ZWxzZSBpZiBuYXYgJiYgIWhyZWZ9XG4gIDxzcGFuXG4gICAgYmluZDp0aGlzPXtlbGVtZW50fVxuICAgIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gICAgdXNlOmZvcndhcmRFdmVudHNcbiAgICBjbGFzcz1cIlxuICAgICAgbWRjLWxpc3QtaXRlbVxuICAgICAge2NsYXNzTmFtZX1cbiAgICAgIHthY3RpdmF0ZWQgPyAnbWRjLWxpc3QtaXRlbS0tYWN0aXZhdGVkJyA6ICcnfVxuICAgICAge3NlbGVjdGVkID8gJ21kYy1saXN0LWl0ZW0tLXNlbGVjdGVkJyA6ICcnfVxuICAgICAge2Rpc2FibGVkID8gJ21kYy1saXN0LWl0ZW0tLWRpc2FibGVkJyA6ICcnfVxuICAgIFwiXG4gICAgdXNlOlJpcHBsZT17W3JpcHBsZSwge3VuYm91bmRlZDogZmFsc2UsIGNvbG9yfV19XG4gICAgey4uLihhY3RpdmF0ZWQgPyB7J2FyaWEtY3VycmVudCc6ICdwYWdlJ30gOiB7fSl9XG4gICAge3RhYmluZGV4fVxuICAgIG9uOmNsaWNrPXthY3Rpb259XG4gICAgb246a2V5ZG93bj17aGFuZGxlS2V5ZG93bn1cbiAgICB7Li4ucHJvcHN9XG4gID48c2xvdD48L3Nsb3Q+PC9zcGFuPlxuezplbHNlfVxuICA8bGlcbiAgICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gICAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgICB1c2U6Zm9yd2FyZEV2ZW50c1xuICAgIGNsYXNzPVwiXG4gICAgICBtZGMtbGlzdC1pdGVtXG4gICAgICB7Y2xhc3NOYW1lfVxuICAgICAge2FjdGl2YXRlZCA/ICdtZGMtbGlzdC1pdGVtLS1hY3RpdmF0ZWQnIDogJyd9XG4gICAgICB7c2VsZWN0ZWQgPyAnbWRjLWxpc3QtaXRlbS0tc2VsZWN0ZWQnIDogJyd9XG4gICAgICB7ZGlzYWJsZWQgPyAnbWRjLWxpc3QtaXRlbS0tZGlzYWJsZWQnIDogJyd9XG4gICAgICB7KHJvbGUgPT09ICdtZW51aXRlbScgJiYgc2VsZWN0ZWQpID8gJ21kYy1tZW51LWl0ZW0tLXNlbGVjdGVkJyA6ICcnfVxuICAgIFwiXG4gICAgdXNlOlJpcHBsZT17W3JpcHBsZSwge3VuYm91bmRlZDogZmFsc2UsIGNvbG9yfV19XG4gICAge3JvbGV9XG4gICAgey4uLihyb2xlID09PSAnb3B0aW9uJyA/IHsnYXJpYS1zZWxlY3RlZCc6IChzZWxlY3RlZCA/ICd0cnVlJyA6ICdmYWxzZScpfSA6IHt9KX1cbiAgICB7Li4uKChyb2xlID09PSAncmFkaW8nIHx8IHJvbGUgPT09ICdjaGVja2JveCcpID8geydhcmlhLWNoZWNrZWQnOiAoY2hlY2tlZCA/ICd0cnVlJyA6ICdmYWxzZScpfSA6IHt9KX1cbiAgICB7dGFiaW5kZXh9XG4gICAgb246Y2xpY2s9e2FjdGlvbn1cbiAgICBvbjprZXlkb3duPXtoYW5kbGVLZXlkb3dufVxuICAgIHsuLi5wcm9wc31cbiAgPjxzbG90Pjwvc2xvdD48L2xpPlxuey9pZn1cblxuPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG4gIGxldCBjb3VudGVyID0gMDtcbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICBpbXBvcnQge29uTW91bnQsIG9uRGVzdHJveSwgZ2V0Q29udGV4dCwgc2V0Q29udGV4dCwgY3JlYXRlRXZlbnREaXNwYXRjaGVyfSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQge2N1cnJlbnRfY29tcG9uZW50fSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQge2ZvcndhcmRFdmVudHNCdWlsZGVyfSBmcm9tICdAc211aS9jb21tb24vZm9yd2FyZEV2ZW50cy5qcyc7XG4gIGltcG9ydCB7ZXhjbHVkZX0gZnJvbSAnQHNtdWkvY29tbW9uL2V4Y2x1ZGUuanMnO1xuICBpbXBvcnQge3VzZUFjdGlvbnN9IGZyb20gJ0BzbXVpL2NvbW1vbi91c2VBY3Rpb25zLmpzJztcbiAgaW1wb3J0IFJpcHBsZSBmcm9tICdAc211aS9yaXBwbGUvYmFyZS5qcyc7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGN1cnJlbnRfY29tcG9uZW50KTtcbiAgbGV0IGNoZWNrZWQgPSBmYWxzZTtcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gIGV4cG9ydCB7Y2xhc3NOYW1lIGFzIGNsYXNzfTtcbiAgZXhwb3J0IGxldCByaXBwbGUgPSB0cnVlO1xuICBleHBvcnQgbGV0IGNvbG9yID0gbnVsbDtcbiAgZXhwb3J0IGxldCBub25JbnRlcmFjdGl2ZSA9IGdldENvbnRleHQoJ1NNVUk6bGlzdDpub25JbnRlcmFjdGl2ZScpO1xuICBleHBvcnQgbGV0IGFjdGl2YXRlZCA9IGZhbHNlO1xuICBleHBvcnQgbGV0IHJvbGUgPSBnZXRDb250ZXh0KCdTTVVJOmxpc3Q6aXRlbTpyb2xlJyk7XG4gIGV4cG9ydCBsZXQgc2VsZWN0ZWQgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBkaXNhYmxlZCA9IGZhbHNlO1xuICBleHBvcnQgbGV0IHRhYmluZGV4ID0gIW5vbkludGVyYWN0aXZlICYmICFkaXNhYmxlZCAmJiAoc2VsZWN0ZWQgfHwgY2hlY2tlZCkgJiYgJzAnIHx8ICctMSc7XG4gIGV4cG9ydCBsZXQgaHJlZiA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGlucHV0SWQgPSAnU01VSS1mb3JtLWZpZWxkLWxpc3QtJysoY291bnRlcisrKTtcblxuICAkOiBwcm9wcyA9IGV4Y2x1ZGUoJCRwcm9wcywgWyd1c2UnLCAnY2xhc3MnLCAncmlwcGxlJywgJ2NvbG9yJywgJ25vbkludGVyYWN0aXZlJywgJ2FjdGl2YXRlZCcsICdzZWxlY3RlZCcsICdkaXNhYmxlZCcsICd0YWJpbmRleCcsICdocmVmJywgJ2lucHV0SWQnXSk7XG5cbiAgbGV0IGVsZW1lbnQ7XG4gIGxldCBhZGRUYWJpbmRleElmTm9JdGVtc1NlbGVjdGVkUmFmO1xuICBsZXQgbmF2ID0gZ2V0Q29udGV4dCgnU01VSTpsaXN0Oml0ZW06bmF2Jyk7XG5cbiAgc2V0Q29udGV4dCgnU01VSTpnZW5lcmljOmlucHV0OnByb3BzJywge2lkOiBpbnB1dElkfSk7XG4gIHNldENvbnRleHQoJ1NNVUk6Z2VuZXJpYzppbnB1dDpzZXRDaGVja2VkJywgc2V0Q2hlY2tlZCk7XG5cbiAgb25Nb3VudCgoKSA9PiB7XG4gICAgLy8gVGFiaW5kZXggbmVlZHMgdG8gYmUgJzAnIGlmIHRoaXMgaXMgdGhlIGZpcnN0IG5vbi1kaXNhYmxlZCBsaXN0IGl0ZW0sIGFuZFxuICAgIC8vIG5vIG90aGVyIGl0ZW0gaXMgc2VsZWN0ZWQuXG5cbiAgICBpZiAoIXNlbGVjdGVkICYmICFub25JbnRlcmFjdGl2ZSkge1xuICAgICAgbGV0IGZpcnN0ID0gdHJ1ZTtcbiAgICAgIGxldCBlbCA9IGVsZW1lbnQ7XG4gICAgICB3aGlsZSAoZWwucHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICAgIGVsID0gZWwucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICBpZiAoZWwubm9kZVR5cGUgPT09IDEgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZGMtbGlzdC1pdGVtJykgJiYgIWVsLmNsYXNzTGlzdC5jb250YWlucygnbWRjLWxpc3QtaXRlbS0tZGlzYWJsZWQnKSkge1xuICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICAvLyBUaGlzIGlzIGZpcnN0LCBzbyBub3cgc2V0IHVwIGEgY2hlY2sgdGhhdCBubyBvdGhlciBpdGVtcyBhcmVcbiAgICAgICAgLy8gc2VsZWN0ZWQuXG4gICAgICAgIGFkZFRhYmluZGV4SWZOb0l0ZW1zU2VsZWN0ZWRSYWYgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFkZFRhYmluZGV4SWZOb0l0ZW1zU2VsZWN0ZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgb25EZXN0cm95KCgpID0+IHtcbiAgICBpZiAoYWRkVGFiaW5kZXhJZk5vSXRlbXNTZWxlY3RlZFJhZikge1xuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGFkZFRhYmluZGV4SWZOb0l0ZW1zU2VsZWN0ZWRSYWYpO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gYWRkVGFiaW5kZXhJZk5vSXRlbXNTZWxlY3RlZCgpIHtcbiAgICAvLyBMb29rIHRocm91Z2ggbmV4dCBzaWJsaW5ncyB0byBzZWUgaWYgbm9uZSBvZiB0aGVtIGFyZSBzZWxlY3RlZC5cbiAgICBsZXQgbm9uZVNlbGVjdGVkID0gdHJ1ZTtcbiAgICBsZXQgZWwgPSBlbGVtZW50O1xuICAgIHdoaWxlIChlbC5uZXh0U2libGluZykge1xuICAgICAgZWwgPSBlbC5uZXh0U2libGluZztcbiAgICAgIGlmIChlbC5ub2RlVHlwZSA9PT0gMSAmJiBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ21kYy1saXN0LWl0ZW0nKSAmJiBlbC5hdHRyaWJ1dGVzWyd0YWJpbmRleCddICYmIGVsLmF0dHJpYnV0ZXNbJ3RhYmluZGV4J10udmFsdWUgPT09ICcwJykge1xuICAgICAgICBub25lU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChub25lU2VsZWN0ZWQpIHtcbiAgICAgIC8vIFRoaXMgaXMgdGhlIGZpcnN0IGVsZW1lbnQsIGFuZCBubyBvdGhlciBlbGVtZW50IGlzIHNlbGVjdGVkLCBzbyB0aGVcbiAgICAgIC8vIHRhYmluZGV4IHNob3VsZCBiZSAnMCcuXG4gICAgICB0YWJpbmRleCA9ICcwJztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhY3Rpb24oZSkge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwYXRjaCgnU01VSTphY3Rpb24nLCBlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVLZXlkb3duKGUpIHtcbiAgICBjb25zdCBpc0VudGVyID0gZS5rZXkgPT09ICdFbnRlcicgfHwgZS5rZXlDb2RlID09PSAxMztcbiAgICBjb25zdCBpc1NwYWNlID0gZS5rZXkgPT09ICdTcGFjZScgfHwgZS5rZXlDb2RlID09PSAzMjtcbiAgICBpZiAoaXNFbnRlciB8fCBpc1NwYWNlKSB7XG4gICAgICBhY3Rpb24oZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0Q2hlY2tlZChpc0NoZWNrZWQpIHtcbiAgICBjaGVja2VkID0gaXNDaGVja2VkO1xuICAgIHRhYmluZGV4ID0gIW5vbkludGVyYWN0aXZlICYmICFkaXNhYmxlZCAmJiAoc2VsZWN0ZWQgfHwgY2hlY2tlZCkgJiYgJzAnIHx8ICctMSc7XG4gIH1cbjwvc2NyaXB0PiIsImltcG9ydCB7Y2xhc3NBZGRlckJ1aWxkZXJ9IGZyb20gJ0BzbXVpL2NvbW1vbi9jbGFzc0FkZGVyQnVpbGRlci5qcyc7XG5pbXBvcnQgU3BhbiBmcm9tICdAc211aS9jb21tb24vU3Bhbi5zdmVsdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzc0FkZGVyQnVpbGRlcih7XG4gIGNsYXNzOiAnbWRjLWxpc3QtaXRlbV9fdGV4dCcsXG4gIGNvbXBvbmVudDogU3BhbixcbiAgY29udGV4dHM6IHt9XG59KTsiLCJpbXBvcnQge2NsYXNzQWRkZXJCdWlsZGVyfSBmcm9tICdAc211aS9jb21tb24vY2xhc3NBZGRlckJ1aWxkZXIuanMnO1xuaW1wb3J0IFNwYW4gZnJvbSAnQHNtdWkvY29tbW9uL1NwYW4uc3ZlbHRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3NBZGRlckJ1aWxkZXIoe1xuICBjbGFzczogJ21kYy1saXN0LWl0ZW1fX3ByaW1hcnktdGV4dCcsXG4gIGNvbXBvbmVudDogU3BhbixcbiAgY29udGV4dHM6IHt9XG59KTsiLCJpbXBvcnQge2NsYXNzQWRkZXJCdWlsZGVyfSBmcm9tICdAc211aS9jb21tb24vY2xhc3NBZGRlckJ1aWxkZXIuanMnO1xuaW1wb3J0IFNwYW4gZnJvbSAnQHNtdWkvY29tbW9uL1NwYW4uc3ZlbHRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3NBZGRlckJ1aWxkZXIoe1xuICBjbGFzczogJ21kYy1saXN0LWl0ZW1fX3NlY29uZGFyeS10ZXh0JyxcbiAgY29tcG9uZW50OiBTcGFuLFxuICBjb250ZXh0czoge31cbn0pOyIsImltcG9ydCB7Y2xhc3NBZGRlckJ1aWxkZXJ9IGZyb20gJ0BzbXVpL2NvbW1vbi9jbGFzc0FkZGVyQnVpbGRlci5qcyc7XG5pbXBvcnQgU3BhbiBmcm9tICdAc211aS9jb21tb24vU3Bhbi5zdmVsdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzc0FkZGVyQnVpbGRlcih7XG4gIGNsYXNzOiAnbWRjLWxpc3QtaXRlbV9fbWV0YScsXG4gIGNvbXBvbmVudDogU3BhbixcbiAgY29udGV4dHM6IHt9XG59KTsiLCI8ZGl2XG4gIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gIHVzZTpmb3J3YXJkRXZlbnRzXG4gIHsuLi5leGNsdWRlKCQkcHJvcHMsIFsndXNlJ10pfVxuPjxzbG90Pjwvc2xvdD48L2Rpdj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHtjdXJyZW50X2NvbXBvbmVudH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHtmb3J3YXJkRXZlbnRzQnVpbGRlcn0gZnJvbSAnLi9mb3J3YXJkRXZlbnRzLmpzJztcbiAgaW1wb3J0IHtleGNsdWRlfSBmcm9tICcuL2V4Y2x1ZGUuanMnO1xuICBpbXBvcnQge3VzZUFjdGlvbnN9IGZyb20gJy4vdXNlQWN0aW9ucy5qcyc7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGN1cnJlbnRfY29tcG9uZW50KTtcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuPC9zY3JpcHQ+IiwiaW1wb3J0IHtjbGFzc0FkZGVyQnVpbGRlcn0gZnJvbSAnQHNtdWkvY29tbW9uL2NsYXNzQWRkZXJCdWlsZGVyLmpzJztcbmltcG9ydCBEaXYgZnJvbSAnQHNtdWkvY29tbW9uL0Rpdi5zdmVsdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzc0FkZGVyQnVpbGRlcih7XG4gIGNsYXNzOiAnbWRjLWxpc3QtZ3JvdXAnLFxuICBjb21wb25lbnQ6IERpdixcbiAgY29udGV4dHM6IHt9XG59KTsiLCI8aDNcbiAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgdXNlOmZvcndhcmRFdmVudHNcbiAgey4uLmV4Y2x1ZGUoJCRwcm9wcywgWyd1c2UnXSl9XG4+PHNsb3Q+PC9zbG90PjwvaDM+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7Y3VycmVudF9jb21wb25lbnR9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7Zm9yd2FyZEV2ZW50c0J1aWxkZXJ9IGZyb20gJy4vZm9yd2FyZEV2ZW50cy5qcyc7XG4gIGltcG9ydCB7ZXhjbHVkZX0gZnJvbSAnLi9leGNsdWRlLmpzJztcbiAgaW1wb3J0IHt1c2VBY3Rpb25zfSBmcm9tICcuL3VzZUFjdGlvbnMuanMnO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihjdXJyZW50X2NvbXBvbmVudCk7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbjwvc2NyaXB0PiIsImltcG9ydCB7Y2xhc3NBZGRlckJ1aWxkZXJ9IGZyb20gJ0BzbXVpL2NvbW1vbi9jbGFzc0FkZGVyQnVpbGRlci5qcyc7XG5pbXBvcnQgSDMgZnJvbSAnQHNtdWkvY29tbW9uL0gzLnN2ZWx0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzQWRkZXJCdWlsZGVyKHtcbiAgY2xhc3M6ICdtZGMtbGlzdC1ncm91cF9fc3ViaGVhZGVyJyxcbiAgY29tcG9uZW50OiBIMyxcbiAgY29udGV4dHM6IHt9XG59KTsiLCJ7I2lmIGdyb3VwIHx8IG5hdn1cbiAgPGhyXG4gICAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgICB1c2U6Zm9yd2FyZEV2ZW50c1xuICAgIGNsYXNzPVwiXG4gICAgICBtZGMtbGlzdC1kaXZpZGVyXG4gICAgICB7Y2xhc3NOYW1lfVxuICAgICAge3BhZGRlZCA/ICdtZGMtbGlzdC1kaXZpZGVyLS1wYWRkZWQnIDogJyd9XG4gICAgICB7aW5zZXQgPyAnbWRjLWxpc3QtZGl2aWRlci0taW5zZXQnIDogJyd9XG4gICAgXCJcbiAgICB7Li4ucHJvcHN9XG4gIC8+XG57OmVsc2V9XG4gIDxsaVxuICAgIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gICAgdXNlOmZvcndhcmRFdmVudHNcbiAgICBjbGFzcz1cIlxuICAgICAgbWRjLWxpc3QtZGl2aWRlclxuICAgICAge2NsYXNzTmFtZX1cbiAgICAgIHtwYWRkZWQgPyAnbWRjLWxpc3QtZGl2aWRlci0tcGFkZGVkJyA6ICcnfVxuICAgICAge2luc2V0ID8gJ21kYy1saXN0LWRpdmlkZXItLWluc2V0JyA6ICcnfVxuICAgIFwiXG4gICAgcm9sZT1cInNlcGFyYXRvclwiXG4gICAgey4uLnByb3BzfVxuICA+PC9saT5cbnsvaWZ9XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7Y3VycmVudF9jb21wb25lbnR9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7Zm9yd2FyZEV2ZW50c0J1aWxkZXJ9IGZyb20gJ0BzbXVpL2NvbW1vbi9mb3J3YXJkRXZlbnRzLmpzJztcbiAgaW1wb3J0IHtleGNsdWRlfSBmcm9tICdAc211aS9jb21tb24vZXhjbHVkZS5qcyc7XG4gIGltcG9ydCB7dXNlQWN0aW9uc30gZnJvbSAnQHNtdWkvY29tbW9uL3VzZUFjdGlvbnMuanMnO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihjdXJyZW50X2NvbXBvbmVudCk7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBleHBvcnQge2NsYXNzTmFtZSBhcyBjbGFzc307XG4gIGV4cG9ydCBsZXQgZ3JvdXAgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBuYXYgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBwYWRkZWQgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBpbnNldCA9IGZhbHNlO1xuXG4gICQ6IHByb3BzID0gZXhjbHVkZSgkJHByb3BzLCBbJ3VzZScsICdjbGFzcycsICdncm91cCcsICduYXYnLCAncGFkZGVkJywgJ2luc2V0J10pO1xuPC9zY3JpcHQ+IiwiPHNjcmlwdD5cclxuICBpbXBvcnQgQnV0dG9uLCB7IEdyb3VwLCBHcm91cEl0ZW0sIExhYmVsLCBJY29uIH0gZnJvbSBcIkBzbXVpL2J1dHRvblwiO1xyXG4gIGltcG9ydCBNZW51IGZyb20gXCJAc211aS9tZW51XCI7XHJcbiAgaW1wb3J0IExpc3QsIHsgSXRlbSwgU2VwYXJhdG9yLCBUZXh0IH0gZnJvbSBcIkBzbXVpL2xpc3RcIjtcclxuICBpbXBvcnQgUGFnZSBmcm9tIFwiLi9QYWdlLnN2ZWx0ZVwiO1xyXG4gIGltcG9ydCBFeGFtcGxlIGZyb20gXCIuL0V4YW1wbGUuc3ZlbHRlXCI7XHJcblxyXG4gIGxldCBjbGlja2VkID0gMDtcclxuICBsZXQgbWVudTtcclxuICBsZXQgbWVudTI7XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4gICogOmdsb2JhbCgubXlDbGFzcykge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICogOmdsb2JhbCgubWRjLWJ1dHRvbiwgLnNtdWktYnV0dG9uX19ncm91cCkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC40ZW07XHJcbiAgfVxyXG5cclxuICAqIDpnbG9iYWwoLnNtdWktYnV0dG9uX19ncm91cCAubWRjLWJ1dHRvbikge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbjwvc3R5bGU+XHJcblxyXG48UGFnZT5cclxuICA8c3BhbiBzbG90PVwiaGVhZGVyXCI+QnV0dG9uPC9zcGFuPlxyXG4gIDxzcGFuIHNsb3Q9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgQnV0dG9ucyBhbGxvdyB1c2VycyB0byB0YWtlIGFjdGlvbnMsIGFuZCBtYWtlIGNob2ljZXMsIHdpdGggYSBzaW5nbGUgdGFwLlxyXG4gIDwvc3Bhbj5cclxuICA8c3BhbiBzbG90PVwiaW1wb3J0XCI+XHJcbiAgICBpbXBvcnQgUmFkaW8gZnJvbSBcIkBzbXVpL3JhZGlvXCI7XHJcbiAgICA8YnIgLz5cclxuICAgIGltcG9ydCBGb3JtRmllbGQgZnJvbSBcIkBzbXVpL2Zvcm0tZmllbGRcIjtcclxuICA8L3NwYW4+XHJcbiAgPGRpdiBzbG90PVwiY29udGVudFwiPlxyXG4gICAgPEV4YW1wbGU+XHJcbiAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5Db250YWluZWQgQnV0dG9uczwvc3Bhbj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwidW5lbGV2YXRlZFwiPlxyXG4gICAgICAgICAgPExhYmVsPlBSSU1BUlk8L0xhYmVsPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK31cclxuICAgICAgICAgIHZhcmlhbnQ9XCJ1bmVsZXZhdGVkXCI+XHJcbiAgICAgICAgICA8TGFiZWw+U0VDT05EQVJZPC9MYWJlbD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInJhaXNlZFwiPlxyXG4gICAgICAgICAgPExhYmVsPlJBSVNFRDwvTGFiZWw+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInJhaXNlZFwiPlxyXG4gICAgICAgICAgPExhYmVsPlJBSVNFRDwvTGFiZWw+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJ1bmVsZXZhdGVkXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICA8TGFiZWw+RGlzYWJsZWQ8L0xhYmVsPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRXhhbXBsZT5cclxuICAgIDxFeGFtcGxlPlxyXG4gICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCI+T3V0bGluZWQgQnV0dG9uczwvc3Bhbj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgIDxMYWJlbD5PdXRsaW5lZDwvTGFiZWw+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcbiAgICAgICAgICA8TGFiZWw+T3V0bGluZWQ8L0xhYmVsPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwib3V0bGluZWRcIiBkaXNhYmxlZD5cclxuICAgICAgICAgIDxMYWJlbD5EaXNhYmxlZDwvTGFiZWw+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9FeGFtcGxlPlxyXG4gICAgPEV4YW1wbGU+XHJcbiAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5UZXh0IEJ1dHRvbnM8L3NwYW4+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30+XHJcbiAgICAgICAgICA8TGFiZWw+RGVmYXVsdDwvTGFiZWw+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30+XHJcbiAgICAgICAgICA8TGFiZWw+RGVmYXVsdDwvTGFiZWw+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IGRpc2FibGVkPlxyXG4gICAgICAgICAgPExhYmVsPkRpc2FibGVkPC9MYWJlbD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0V4YW1wbGU+XHJcbiAgICA8RXhhbXBsZT5cclxuICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiPkJ1dHRvbnMgd2l0aCBpY29uczwvc3Bhbj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwidW5lbGV2YXRlZFwiPlxyXG4gICAgICAgICAgPExhYmVsPlVuZWxldmF0ZWQ8L0xhYmVsPlxyXG4gICAgICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmZhdm9yaXRlPC9JY29uPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwidW5lbGV2YXRlZFwiPlxyXG4gICAgICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmZhdm9yaXRlPC9JY29uPlxyXG4gICAgICAgICAgPExhYmVsPlVuZWxldmF0ZWQ8L0xhYmVsPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwicmFpc2VkXCI+XHJcbiAgICAgICAgICA8TGFiZWw+UmFpc2VkPC9MYWJlbD5cclxuICAgICAgICAgIDxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5mYXZvcml0ZTwvSWNvbj5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInJhaXNlZFwiPlxyXG4gICAgICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmZhdm9yaXRlPC9JY29uPlxyXG4gICAgICAgICAgPExhYmVsPlJhaXNlZDwvTGFiZWw+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmZhdm9yaXRlPC9JY29uPlxyXG4gICAgICAgICAgPExhYmVsPk91dGxpbmVkPC9MYWJlbD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcbiAgICAgICAgICA8TGFiZWw+T3V0bGluZWQ8L0xhYmVsPlxyXG4gICAgICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmZhdm9yaXRlPC9JY29uPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfT5cclxuICAgICAgICAgIDxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5mYXZvcml0ZTwvSWNvbj5cclxuICAgICAgICAgIDxMYWJlbD5MZWFkaW5nIEljb248L0xhYmVsPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfT5cclxuICAgICAgICAgIDxMYWJlbD5UcmFpbGluZyBJY29uPC9MYWJlbD5cclxuICAgICAgICAgIDxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5mYXZvcml0ZTwvSWNvbj5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfT5cclxuICAgICAgICAgIDxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5mYXZvcml0ZTwvSWNvbj5cclxuICAgICAgICAgIDxMYWJlbD5MZWFkaW5nIEljb248L0xhYmVsPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PlxyXG4gICAgICAgICAgPExhYmVsPlRyYWlsaW5nIEljb248L0xhYmVsPlxyXG4gICAgICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmZhdm9yaXRlPC9JY29uPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRXhhbXBsZT5cclxuICAgIDxFeGFtcGxlPlxyXG4gICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCI+VmFyaWF0aW9uczwvc3Bhbj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSByaXBwbGU9e2ZhbHNlfT5cclxuICAgICAgICAgIDxMYWJlbD5ObyBSaXBwbGU8L0xhYmVsPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHJpcHBsZT17ZmFsc2V9PlxyXG4gICAgICAgICAgPExhYmVsPk5vIFJpcHBsZTwvTGFiZWw+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IGRlbnNlPlxyXG4gICAgICAgICAgPExhYmVsPkRlbnNlPC9MYWJlbD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSBkZW5zZT5cclxuICAgICAgICAgIDxMYWJlbD5EZW5zZTwvTGFiZWw+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IGNsYXNzPVwibXlDbGFzc1wiPlxyXG4gICAgICAgICAgPExhYmVsPldpdGggYSBDbGFzczwvTGFiZWw+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gY2xhc3M9XCJteUNsYXNzXCI+XHJcbiAgICAgICAgICA8TGFiZWw+V2l0aCBhIENsYXNzPC9MYWJlbD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0V4YW1wbGU+XHJcbiAgICA8RXhhbXBsZT5cclxuICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiPkJ1dHRvbiBncm91cHM8L3NwYW4+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxHcm91cCB2YXJpYW50PVwidW5lbGV2YXRlZFwiPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwidW5lbGV2YXRlZFwiPlxyXG4gICAgICAgICAgICA8TGFiZWw+T25lPC9MYWJlbD5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwidW5lbGV2YXRlZFwiPlxyXG4gICAgICAgICAgICA8TGFiZWw+VHdvPC9MYWJlbD5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwidW5lbGV2YXRlZFwiPlxyXG4gICAgICAgICAgICA8TGFiZWw+VGhyZWU8L0xhYmVsPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Hcm91cD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxHcm91cCB2YXJpYW50PVwicmFpc2VkXCI+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJyYWlzZWRcIj5cclxuICAgICAgICAgICAgPExhYmVsPk9uZTwvTGFiZWw+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInJhaXNlZFwiPlxyXG4gICAgICAgICAgICA8TGFiZWw+VHdvPC9MYWJlbD5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwicmFpc2VkXCI+XHJcbiAgICAgICAgICAgIDxMYWJlbD5UaHJlZTwvTGFiZWw+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0dyb3VwPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEdyb3VwIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgICAgPExhYmVsPk9uZTwvTGFiZWw+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcbiAgICAgICAgICAgIDxMYWJlbD5Ud288L0xhYmVsPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgICA8TGFiZWw+VGhyZWU8L0xhYmVsPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Hcm91cD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxHcm91cD5cclxuICAgICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30+XHJcbiAgICAgICAgICAgIDxMYWJlbD5PbmU8L0xhYmVsPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PlxyXG4gICAgICAgICAgICA8TGFiZWw+VHdvPC9MYWJlbD5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfT5cclxuICAgICAgICAgICAgPExhYmVsPlRocmVlPC9MYWJlbD5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvR3JvdXA+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9FeGFtcGxlPlxyXG4gICAgPEV4YW1wbGU+XHJcbiAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5CbG9jayBidXR0b248L3NwYW4+XHJcbiAgICAgIDxkaXYgc2xvdD1cInZlcnRpY2FsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJ1bmVsZXZhdGVkXCIgY2xhc3M9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgIDxMYWJlbD5CTE9DSyBCVVRUT048L0xhYmVsPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwidmVydGljYWxcIiBjbGFzcz1cIm1yLTggbWItOCB3LWZ1bGxcIj5cclxuICAgICAgICA8R3JvdXAgdmFyaWFudD1cIm91dGxpbmVkXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O1wiPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfVxyXG4gICAgICAgICAgICB2YXJpYW50PVwidW5lbGV2YXRlZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHN0eWxlPVwiZmxleC1ncm93OiAzO1wiPlxyXG4gICAgICAgICAgICA8TGFiZWw+UHJpbWFyeTwvTGFiZWw+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK31cclxuICAgICAgICAgICAgdmFyaWFudD1cInVuZWxldmF0ZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgIHN0eWxlPVwiZmxleC1ncm93OiAxO1wiPlxyXG4gICAgICAgICAgICA8TGFiZWw+U2Vjb25kYXJ5PC9MYWJlbD5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfVxyXG4gICAgICAgICAgICB2YXJpYW50PVwidW5lbGV2YXRlZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgc3R5bGU9XCJmbGV4LWdyb3c6IDE7XCI+XHJcbiAgICAgICAgICAgIDxMYWJlbD5TZWNvbmRhcnk8L0xhYmVsPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Hcm91cD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0V4YW1wbGU+XHJcbiAgICA8RXhhbXBsZT5cclxuICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiPlNwbGl0IGJ1dHRvbnMgdXNpbmcgYSBidXR0b24gZ3JvdXA8L3NwYW4+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxHcm91cCB2YXJpYW50PVwicmFpc2VkXCI+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJyYWlzZWRcIj5cclxuICAgICAgICAgICAgPExhYmVsPkRvIHRoZSB0aGluZzwvTGFiZWw+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxkaXYgdXNlOkdyb3VwSXRlbT5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiBtZW51LnNldE9wZW4odHJ1ZSl9XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cInJhaXNlZFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9XCJwYWRkaW5nOiAwOyBtaW4td2lkdGg6IDM2cHg7XCI+XHJcbiAgICAgICAgICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIHN0eWxlPVwibWFyZ2luOiAwO1wiPlxyXG4gICAgICAgICAgICAgICAgYXJyb3dfZHJvcF9kb3duXHJcbiAgICAgICAgICAgICAgPC9JY29uPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPE1lbnUgYmluZDp0aGlzPXttZW51fSBhbmNob3JDb3JuZXI9XCJUT1BfTEVGVFwiPlxyXG4gICAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAgPEl0ZW0gb246U01VSTphY3Rpb249eygpID0+IGNsaWNrZWQrK30+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0PlRoaW5nIDE8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICAgICAgICA8SXRlbSBvbjpTTVVJOmFjdGlvbj17KCkgPT4gY2xpY2tlZCsrfT5cclxuICAgICAgICAgICAgICAgICAgPFRleHQ+VGhpbmcgMjwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgICAgICAgIDxTZXBhcmF0b3IgLz5cclxuICAgICAgICAgICAgICAgIDxJdGVtIG9uOlNNVUk6YWN0aW9uPXsoKSA9PiBjbGlja2VkKyt9PlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dD5UaGluZyAzPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Hcm91cD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxHcm91cCB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcbiAgICAgICAgICAgIDxMYWJlbD5EbyB0aGUgdGhpbmc8L0xhYmVsPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8ZGl2IHVzZTpHcm91cEl0ZW0+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBvbjpjbGljaz17KCkgPT4gbWVudTIuc2V0T3Blbih0cnVlKX1cclxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPVwicGFkZGluZzogMDsgbWluLXdpZHRoOiAzNnB4O1wiPlxyXG4gICAgICAgICAgICAgIDxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBzdHlsZT1cIm1hcmdpbjogMDtcIj5cclxuICAgICAgICAgICAgICAgIGFycm93X2Ryb3BfZG93blxyXG4gICAgICAgICAgICAgIDwvSWNvbj5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxNZW51IGJpbmQ6dGhpcz17bWVudTJ9IGFuY2hvckNvcm5lcj1cIlRPUF9MRUZUXCI+XHJcbiAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICA8SXRlbSBvbjpTTVVJOmFjdGlvbj17KCkgPT4gY2xpY2tlZCsrfT5cclxuICAgICAgICAgICAgICAgICAgPFRleHQ+VGhpbmcgMTwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgICAgICAgIDxJdGVtIG9uOlNNVUk6YWN0aW9uPXsoKSA9PiBjbGlja2VkKyt9PlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dD5UaGluZyAyPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgICAgICAgPFNlcGFyYXRvciAvPlxyXG4gICAgICAgICAgICAgICAgPEl0ZW0gb246U01VSTphY3Rpb249eygpID0+IGNsaWNrZWQrK30+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0PlRoaW5nIDM8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0dyb3VwPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRXhhbXBsZT5cclxuICA8L2Rpdj5cclxuPC9QYWdlPlxyXG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX3NwcmVhZCIsInRzbGliXzEuX19leHRlbmRzIiwidHNsaWJfMS5fX2Fzc2lnbiIsInV0aWwuc3VwcG9ydHNDc3NWYXJpYWJsZXMiLCJjc3NDbGFzc2VzIiwic3RyaW5ncyIsIm51bWJlcnMiLCJ0c2xpYl8xLl9fdmFsdWVzIiwidXRpbC5nZXRUcmFuc2Zvcm1Qcm9wZXJ0eU5hbWUiLCJsaXN0Q3NzQ2xhc3NlcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLFNBQVMsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUU7RUFDN0IsS0FBSyxHQUFHLEtB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0NUMUUsT0FBTyxHQUFHLENBQUM7S0FDWCxJQUFJO0tBQ0osS0FBSzs2Q0ErQnFCLE9BQU87K0NBT2IsT0FBTzsrQ0FNRCxPQUFPOytDQUtXLE9BQU87K0NBS3pCLE9BQU87K0NBUVAsT0FBTzsrQ0FLVyxPQUFPOytDQUt6QixPQUFPOytDQVFQLE9BQU87K0NBS1csT0FBTztnREFLekIsT0FBTztnREFRUCxPQUFPO2dEQU1QLE9BQU87Z0RBTVAsT0FBTztnREFNUCxPQUFPO2dEQU1QLE9BQU87Z0RBTVAsT0FBTztnREFNUCxPQUFPO2dEQU1QLE9BQU87Z0RBTVcsT0FBTztnREFNUCxPQUFPO2dEQVN6QixPQUFPO2dEQUtXLE9BQU87Z0RBS3pCLE9BQU87Z0RBS1csT0FBTztnREFLekIsT0FBTztnREFLVyxPQUFPO2dEQVN2QixPQUFPO2dEQUdQLE9BQU87Z0RBR1AsT0FBTztnREFPUCxPQUFPO2dEQUdQLE9BQU87Z0RBR1AsT0FBTztnREFPUCxPQUFPO2dEQUdQLE9BQU87Z0RBR1AsT0FBTztnREFPUCxPQUFPO2dEQUdQLE9BQU87Z0RBR1AsT0FBTztnREFTVCxPQUFPO2dEQU9YLE9BQU87Z0RBT1AsT0FBTztnREFPUCxPQUFPO2dEQWFELE9BQU87Z0NBS1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO21EQVNILE9BQU87cURBR1AsT0FBTztxREFJUCxPQUFPOzs7Ozs7OztnREFVakIsT0FBTztnQ0FLWCxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUk7cURBU0osT0FBTztxREFHUCxPQUFPO3FEQUlQLE9BQU87Ozs7bUJBVHRCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9

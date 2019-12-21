import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, c as create_slot, a as assign, E as getContext, A as setContext, o as onMount, e as onDestroy, f as exclude_internal_props, g as element, h as claim_element, j as children, k as detach_dev, m as set_attributes, p as add_location, C as listen_dev, q as insert_dev, r as get_slot_context, t as get_slot_changes, u as get_spread_update, v as is_function, w as transition_in, x as transition_out, D as run_all, y as current_component, z as binding_callbacks, L as bind, M as create_component, N as claim_component, O as mount_component, a1 as get_spread_object, V as add_flush_callback, P as destroy_component, X as text, Y as claim_text, T as attr_dev, U as append_dev, Q as space, R as claim_space, n as noop } from './index.47a13945.js';
import { s as styleInject, _ as __extends, a as __assign, g as __values, M as MDCFoundation, b as MDCComponent, d as closest, e as exclude, u as useActions, f as forwardEventsBuilder } from './useActions.7bd84619.js';
import { d as cssClasses$2, M as MDCListFoundation, a as MDCList, c as classAdderBuilder, G as Graphic, B as Button, e as Group, f as Label, I as Icon, g as GroupItem, L as List, b as Item, h as Separator, T as Text } from './index.aa385844.js';
import './prefixFilter.27f2145a.js';
import Page from './Page.48efacb9.js';
import Example from './Example.52cb0634.js';

var css = ".mdc-typography--headline6{font-size:1.25rem;line-height:2rem;letter-spacing:.0125em}.mdc-typography--headline6,.mdc-typography--subtitle2{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-weight:500;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle2{font-size:.875rem;line-height:1.375rem;letter-spacing:.0071428571em}.mdc-typography--body2{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit}:root{--primary-100:#ebf8ff;--primary-200:#bee3f8;--primary-300:#90cdf4;--primary-400:#63b3ed;--primary-500:#4299e1;--primary-600:#3182ce;--primary-700:#2b6cb0;--primary-800:#2c5282;--primary-900:#2a4365;--secondary-100:#fff5f5;--secondary-200:#fed7d7;--secondary-300:#feb2b2;--secondary-400:#fc8181;--secondary-500:#f56565;--secondary-600:#e53e3e;--secondary-700:#c53030;--secondary-800:#9b2c2c;--secondary-900:#742a2a;--primary-color:var(--primary-700);--secondary-color:var(--secondary-700);--primary-font-color:#fff;--secondary-font-color:#fff;--disabled-button-bg-color:#e0e0e0;--font-color:#212121;--other-font-color:#000;--bg-color:#fff;--bg-layer-color:#f5f5f5;--bg-card-color:#fff;--enabled-color:#757575;--disabled-color:#bdbdbd;--switch-toggle-color:#fafafa;--switch-track-color:#4d4d4d;--font-family:\"Montserrat\",sans-serif;--filter:invert(0%);--alert-default-bg-color:var(--primary-200);--alert-solid-bg-color:var(--primary-700);--alert-solid-text-color:\"text-white\";--alert-outline-bg-color:var(--primary-100);--alert-outline-border-color:var(--primary-400);--alert-outline-border-color2:var(--primary-600);--alert-outline-text-color:var(--primary-800)}[data-theme=dark]{--primary-color:var(--primary-400);--secondary-color:var(--secondary-400);--primary-font-color:#000;--secondary-font-color:#000;--disabled-button-bg-color:#1f1f1f;--font-color:#dedede;--other-font-color:#fff;--bg-color:#121212;--bg-layer-color:#333;--bg-card-color:#424242;--enabled-color:#b3b3b3;--disabled-color:#4d4d4d;--switch-toggle-color:#b3b3b3;--switch-track-color:#fff;--filter:invert(100%)}body{--mdc-theme-primary:var(--primary-color);--mdc-theme-secondary:var(--secondary-color);--mdc-theme-on-primary:var(--primary-font-color);--mdc-theme-on-secondary:var(--secondary-font-color);--mdc-text-field-ink-color:var(--other-font-color);--mdc-theme-text-primary-on-background:var(--font-color);--mdc-theme-surface:transparent;--duration:0.5s;--timing:ease;background-color:var(--bg-color);color:var(--font-color);-webkit-transition:color var(--duration) var(--timing),background-color var(--duration) var(--timing);transition:color var(--duration) var(--timing),background-color var(--duration) var(--timing);font-family:var(--font-family)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:var(--disabled-button-bg-color)}.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--disabled-color)}.mdc-select:not(.mdc-select--disabled) .mdc-select__native-control,.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text,.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--other-font-color)}.mdc-select:not(.mdc-select--disabled) .mdc-select__native-control option{color:#000}.mdc-select--with-leading-icon:not(.mdc-select--disabled) .mdc-select__icon{color:var(--enabled-color);opacity:1}.mdc-select__dropdown-icon{-webkit-filter:var(--filter);filter:var(--filter)}.mdc-select--invalid .mdc-select__dropdown-icon{-webkit-filter:invert(0);filter:invert(0)}.mdc-switch--disabled{opacity:.5}.mdc-card__action--icon:not(:disabled){color:var(--enabled-color)}.flex-1-0-auto{-webkit-box-flex:1;flex:1 0 auto}@-webkit-keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@-webkit-keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@-webkit-keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-menu{min-width:112px}.mdc-menu .mdc-list{color:rgba(0,0,0,.87)}.mdc-menu .mdc-list-divider{margin:8px 0}.mdc-menu .mdc-list-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mdc-menu .mdc-list-item--disabled{cursor:auto}@media screen and (-ms-high-contrast:active){.mdc-menu .mdc-list-item--disabled{opacity:.38}}.mdc-menu a.mdc-list-item .mdc-list-item__text{pointer-events:none}.mdc-menu__selection-group{padding:0;fill:currentColor}.mdc-menu__selection-group .mdc-list-item{padding-left:56px;padding-right:16px}.mdc-menu__selection-group .mdc-list-item[dir=rtl],[dir=rtl] .mdc-menu__selection-group .mdc-list-item{padding-left:16px;padding-right:56px}.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);margin:0;padding:0;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:top left;transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;-webkit-transition:opacity .03s linear,-webkit-transform .12s cubic-bezier(0,0,.2,1);transition:opacity .03s linear,-webkit-transform .12s cubic-bezier(0,0,.2,1);transition:opacity .03s linear,transform .12s cubic-bezier(0,0,.2,1);transition:opacity .03s linear,transform .12s cubic-bezier(0,0,.2,1),-webkit-transform .12s cubic-bezier(0,0,.2,1);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface,#fff);color:#000;color:var(--mdc-theme-on-surface,#000);border-radius:4px;transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--open{display:inline-block;-webkit-transform:scale(1);transform:scale(1);opacity:1}.mdc-menu-surface[dir=rtl],[dir=rtl] .mdc-menu-surface{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.smui-menu-surface--static{position:static;z-index:0;display:inline-block;-webkit-transform:scale(1);transform:scale(1);opacity:1}";
styleInject(css);

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
var cssClasses = {
    ANCHOR: 'mdc-menu-surface--anchor',
    ANIMATING_CLOSED: 'mdc-menu-surface--animating-closed',
    ANIMATING_OPEN: 'mdc-menu-surface--animating-open',
    FIXED: 'mdc-menu-surface--fixed',
    OPEN: 'mdc-menu-surface--open',
    ROOT: 'mdc-menu-surface',
};
// tslint:disable:object-literal-sort-keys
var strings = {
    CLOSED_EVENT: 'MDCMenuSurface:closed',
    OPENED_EVENT: 'MDCMenuSurface:opened',
    FOCUSABLE_ELEMENTS: [
        'button:not(:disabled)', '[href]:not([aria-disabled="true"])', 'input:not(:disabled)',
        'select:not(:disabled)', 'textarea:not(:disabled)', '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])',
    ].join(', '),
};
// tslint:enable:object-literal-sort-keys
var numbers = {
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
//# sourceMappingURL=constants.js.map

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
            return cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "numbers", {
        get: function () {
            return numbers;
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
                }, numbers.TRANSITION_OPEN_DURATION);
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
                }, numbers.TRANSITION_CLOSE_DURATION);
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
        if (anchorSize.width / surfaceSize.width > numbers.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO) {
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
//# sourceMappingURL=foundation.js.map

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
//# sourceMappingURL=util.js.map

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
        this.anchorElement = parentEl && parentEl.classList.contains(cssClasses.ANCHOR) ? parentEl : null;
        if (this.root_.classList.contains(cssClasses.FIXED)) {
            this.setFixedPosition(true);
        }
        this.handleKeydown_ = function (evt) { return _this.foundation_.handleKeydown(evt); };
        this.handleBodyClick_ = function (evt) { return _this.foundation_.handleBodyClick(evt); };
        this.registerBodyClickListener_ = function () { return document.body.addEventListener('click', _this.handleBodyClick_); };
        this.deregisterBodyClickListener_ = function () { return document.body.removeEventListener('click', _this.handleBodyClick_); };
        this.listen('keydown', this.handleKeydown_);
        this.listen(strings.OPENED_EVENT, this.registerBodyClickListener_);
        this.listen(strings.CLOSED_EVENT, this.deregisterBodyClickListener_);
    };
    MDCMenuSurface.prototype.destroy = function () {
        this.unlisten('keydown', this.handleKeydown_);
        this.unlisten(strings.OPENED_EVENT, this.registerBodyClickListener_);
        this.unlisten(strings.CLOSED_EVENT, this.deregisterBodyClickListener_);
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
            this.root_.classList.add(cssClasses.FIXED);
        }
        else {
            this.root_.classList.remove(cssClasses.FIXED);
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
//# sourceMappingURL=component.js.map

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
    MENU_SELECTED_LIST_ITEM: 'mdc-menu-item--selected',
    MENU_SELECTION_GROUP: 'mdc-menu__selection-group',
    ROOT: 'mdc-menu',
};
var strings$1 = {
    ARIA_CHECKED_ATTR: 'aria-checked',
    ARIA_DISABLED_ATTR: 'aria-disabled',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    LIST_SELECTOR: '.mdc-list',
    SELECTED_EVENT: 'MDCMenu:selected',
};
var numbers$1 = {
    FOCUS_ROOT_INDEX: -1,
};
var DefaultFocusState;
(function (DefaultFocusState) {
    DefaultFocusState[DefaultFocusState["NONE"] = 0] = "NONE";
    DefaultFocusState[DefaultFocusState["LIST_ROOT"] = 1] = "LIST_ROOT";
    DefaultFocusState[DefaultFocusState["FIRST_ITEM"] = 2] = "FIRST_ITEM";
    DefaultFocusState[DefaultFocusState["LAST_ITEM"] = 3] = "LAST_ITEM";
})(DefaultFocusState || (DefaultFocusState = {}));
//# sourceMappingURL=constants.js.map

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
            return cssClasses$1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenuFoundation, "strings", {
        get: function () {
            return strings$1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenuFoundation, "numbers", {
        get: function () {
            return numbers$1;
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
            this.adapter_.removeAttributeFromElementAtIndex(prevSelectedIndex, strings$1.ARIA_CHECKED_ATTR);
            this.adapter_.removeClassFromElementAtIndex(prevSelectedIndex, cssClasses$1.MENU_SELECTED_LIST_ITEM);
        }
        this.adapter_.addClassToElementAtIndex(index, cssClasses$1.MENU_SELECTED_LIST_ITEM);
        this.adapter_.addAttributeToElementAtIndex(index, strings$1.ARIA_CHECKED_ATTR, 'true');
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
            this.adapter_.addAttributeToElementAtIndex(index, strings$1.ARIA_DISABLED_ATTR, 'false');
        }
        else {
            this.adapter_.addClassToElementAtIndex(index, cssClasses$2.LIST_ITEM_DISABLED_CLASS);
            this.adapter_.addAttributeToElementAtIndex(index, strings$1.ARIA_DISABLED_ATTR, 'true');
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
//# sourceMappingURL=foundation.js.map

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
        var list = this.root_.querySelector(strings$1.LIST_SELECTOR);
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
            notifySelected: function (evtData) { return _this.emit(strings$1.SELECTED_EVENT, {
                index: evtData.index,
                item: _this.items[evtData.index],
            }); },
            getMenuItemCount: function () { return _this.items.length; },
            focusItemAtIndex: function (index) { return _this.items[index].focus(); },
            focusListRoot: function () { return _this.root_.querySelector(strings$1.LIST_SELECTOR).focus(); },
            isSelectableItemAtIndex: function (index) { return !!closest(_this.items[index], "." + cssClasses$1.MENU_SELECTION_GROUP); },
            getSelectedSiblingOfItemAtIndex: function (index) {
                var selectionGroupEl = closest(_this.items[index], "." + cssClasses$1.MENU_SELECTION_GROUP);
                var selectedItemEl = selectionGroupEl.querySelector("." + cssClasses$1.MENU_SELECTED_LIST_ITEM);
                return selectedItemEl ? _this.items.indexOf(selectedItemEl) : -1;
            },
        };
        // tslint:enable:object-literal-sort-keys
        return new MDCMenuFoundation(adapter);
    };
    return MDCMenu;
}(MDCComponent));
//# sourceMappingURL=component.js.map

/* node_modules\@smui\menu-surface\MenuSurface.svelte generated by Svelte v3.16.4 */
const file = "node_modules\\@smui\\menu-surface\\MenuSurface.svelte";

function create_fragment(ctx) {
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
			add_location(div, file, 0, 0, 0);

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
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
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

		init(this, options, instance, create_fragment, safe_not_equal, {
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
			id: create_fragment.name
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

function create_fragment$1(ctx) {
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
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
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
			instance$1,
			create_fragment$1,
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
			id: create_fragment$1.name
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

classAdderBuilder({
  class: 'mdc-menu__selection-group-icon',
  component: Graphic,
  contexts: {}
});

/* src\routes\ButtonPage.svelte generated by Svelte v3.16.4 */
const file$1 = "src\\routes\\ButtonPage.svelte";

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
			add_location(span, file$1, 27, 2, 586);
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
			add_location(span, file$1, 28, 2, 623);
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
			add_location(br, file$1, 33, 4, 806);
			attr_dev(span, "slot", "import");
			attr_dev(span, "class", "svelte-1aw35an");
			add_location(span, file$1, 31, 2, 742);
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
			add_location(span, file$1, 38, 6, 917);
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
			add_location(div0, file$1, 39, 6, 969);
			attr_dev(div1, "slot", "horizontal");
			attr_dev(div1, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div1, file$1, 44, 6, 1151);
			attr_dev(div2, "slot", "horizontal");
			attr_dev(div2, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div2, file$1, 52, 6, 1386);
			attr_dev(div3, "slot", "horizontal");
			attr_dev(div3, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div3, file$1, 57, 6, 1563);
			attr_dev(div4, "slot", "horizontal");
			attr_dev(div4, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div4, file$1, 62, 6, 1758);
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
			add_location(span, file$1, 69, 6, 1981);
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
			add_location(div0, file$1, 70, 6, 2032);
			attr_dev(div1, "slot", "horizontal");
			attr_dev(div1, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div1, file$1, 75, 6, 2213);
			attr_dev(div2, "slot", "horizontal");
			attr_dev(div2, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div2, file$1, 80, 6, 2412);
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
			add_location(span, file$1, 87, 6, 2633);
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
			add_location(div0, file$1, 88, 6, 2680);
			attr_dev(div1, "slot", "horizontal");
			attr_dev(div1, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div1, file$1, 93, 6, 2841);
			attr_dev(div2, "slot", "horizontal");
			attr_dev(div2, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div2, file$1, 98, 6, 3020);
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
			add_location(span, file$1, 105, 6, 3222);
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
			add_location(div0, file$1, 106, 6, 3275);
			attr_dev(div1, "slot", "horizontal");
			attr_dev(div1, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div1, file$1, 112, 6, 3516);
			attr_dev(div2, "slot", "horizontal");
			attr_dev(div2, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div2, file$1, 118, 6, 3757);
			attr_dev(div3, "slot", "horizontal");
			attr_dev(div3, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div3, file$1, 124, 6, 3990);
			attr_dev(div4, "slot", "horizontal");
			attr_dev(div4, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div4, file$1, 130, 6, 4223);
			attr_dev(div5, "slot", "horizontal");
			attr_dev(div5, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div5, file$1, 136, 6, 4460);
			attr_dev(div6, "slot", "horizontal");
			attr_dev(div6, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div6, file$1, 142, 6, 4697);
			attr_dev(div7, "slot", "horizontal");
			attr_dev(div7, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div7, file$1, 148, 6, 4919);
			attr_dev(div8, "slot", "horizontal");
			attr_dev(div8, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div8, file$1, 154, 6, 5142);
			attr_dev(div9, "slot", "horizontal");
			attr_dev(div9, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div9, file$1, 160, 6, 5382);
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
			add_location(span, file$1, 168, 6, 5654);
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
			add_location(div0, file$1, 169, 6, 5699);
			attr_dev(div1, "slot", "horizontal");
			attr_dev(div1, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div1, file$1, 174, 6, 5877);
			attr_dev(div2, "slot", "horizontal");
			attr_dev(div2, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div2, file$1, 179, 6, 6073);
			attr_dev(div3, "slot", "horizontal");
			attr_dev(div3, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div3, file$1, 184, 6, 6238);
			attr_dev(div4, "slot", "horizontal");
			attr_dev(div4, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div4, file$1, 189, 6, 6421);
			attr_dev(div5, "slot", "horizontal");
			attr_dev(div5, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div5, file$1, 194, 6, 6603);
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
			add_location(span, file$1, 201, 6, 6834);
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
			add_location(div0, file$1, 202, 6, 6882);
			attr_dev(div1, "slot", "horizontal");
			attr_dev(div1, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div1, file$1, 215, 6, 7366);
			attr_dev(div2, "slot", "horizontal");
			attr_dev(div2, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div2, file$1, 228, 6, 7834);
			attr_dev(div3, "slot", "horizontal");
			attr_dev(div3, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div3, file$1, 241, 6, 8310);
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
			add_location(span, file$1, 256, 6, 8741);
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
			add_location(div0, file$1, 257, 6, 8788);
			attr_dev(div1, "slot", "vertical");
			attr_dev(div1, "class", "mr-8 mb-8 w-full svelte-1aw35an");
			add_location(div1, file$1, 262, 6, 8988);
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
			add_location(span, file$1, 289, 6, 9817);
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
			add_location(div, file$1, 295, 10, 10099);
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
			add_location(div, file$1, 326, 10, 11217);
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
			add_location(div0, file$1, 290, 6, 9886);
			attr_dev(div1, "slot", "horizontal");
			attr_dev(div1, "class", "mr-8 mb-8 svelte-1aw35an");
			add_location(div1, file$1, 321, 6, 11000);
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
			add_location(div, file$1, 36, 2, 874);
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
function create_default_slot$1(ctx) {
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
		id: create_default_slot$1.name,
		type: "slot",
		source: "(27:0) <Page>",
		ctx
	});

	return block;
}

function create_fragment$2(ctx) {
	let current;

	const page = new Page({
			props: {
				$$slots: {
					default: [create_default_slot$1],
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
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$2($$self, $$props, $$invalidate) {
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
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {}, [-1, -1]);

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ButtonPage",
			options,
			id: create_fragment$2.name
		});
	}
}

export default ButtonPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uUGFnZS44MmZiNzM3ZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9tZW51LXN1cmZhY2UvY29uc3RhbnRzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9tZW51LXN1cmZhY2UvZm91bmRhdGlvbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbWVudS1zdXJmYWNlL3V0aWwuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL21lbnUtc3VyZmFjZS9jb21wb25lbnQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL21lbnUvY29uc3RhbnRzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9tZW51L2ZvdW5kYXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL21lbnUvY29tcG9uZW50LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL21lbnUtc3VyZmFjZS9NZW51U3VyZmFjZS5zdmVsdGUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNtdWkvbWVudS9NZW51LnN2ZWx0ZSIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS9tZW51L1NlbGVjdGlvbkdyb3VwSWNvbi5qcyIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvQnV0dG9uUGFnZS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBBTkNIT1I6ICdtZGMtbWVudS1zdXJmYWNlLS1hbmNob3InLFxuICAgIEFOSU1BVElOR19DTE9TRUQ6ICdtZGMtbWVudS1zdXJmYWNlLS1hbmltYXRpbmctY2xvc2VkJyxcbiAgICBBTklNQVRJTkdfT1BFTjogJ21kYy1tZW51LXN1cmZhY2UtLWFuaW1hdGluZy1vcGVuJyxcbiAgICBGSVhFRDogJ21kYy1tZW51LXN1cmZhY2UtLWZpeGVkJyxcbiAgICBPUEVOOiAnbWRjLW1lbnUtc3VyZmFjZS0tb3BlbicsXG4gICAgUk9PVDogJ21kYy1tZW51LXN1cmZhY2UnLFxufTtcbi8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xudmFyIHN0cmluZ3MgPSB7XG4gICAgQ0xPU0VEX0VWRU5UOiAnTURDTWVudVN1cmZhY2U6Y2xvc2VkJyxcbiAgICBPUEVORURfRVZFTlQ6ICdNRENNZW51U3VyZmFjZTpvcGVuZWQnLFxuICAgIEZPQ1VTQUJMRV9FTEVNRU5UUzogW1xuICAgICAgICAnYnV0dG9uOm5vdCg6ZGlzYWJsZWQpJywgJ1tocmVmXTpub3QoW2FyaWEtZGlzYWJsZWQ9XCJ0cnVlXCJdKScsICdpbnB1dDpub3QoOmRpc2FibGVkKScsXG4gICAgICAgICdzZWxlY3Q6bm90KDpkaXNhYmxlZCknLCAndGV4dGFyZWE6bm90KDpkaXNhYmxlZCknLCAnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4PVwiLTFcIl0pOm5vdChbYXJpYS1kaXNhYmxlZD1cInRydWVcIl0pJyxcbiAgICBdLmpvaW4oJywgJyksXG59O1xuLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbnZhciBudW1iZXJzID0ge1xuICAgIC8qKiBUb3RhbCBkdXJhdGlvbiBvZiBtZW51LXN1cmZhY2Ugb3BlbiBhbmltYXRpb24uICovXG4gICAgVFJBTlNJVElPTl9PUEVOX0RVUkFUSU9OOiAxMjAsXG4gICAgLyoqIFRvdGFsIGR1cmF0aW9uIG9mIG1lbnUtc3VyZmFjZSBjbG9zZSBhbmltYXRpb24uICovXG4gICAgVFJBTlNJVElPTl9DTE9TRV9EVVJBVElPTjogNzUsXG4gICAgLyoqIE1hcmdpbiBsZWZ0IHRvIHRoZSBlZGdlIG9mIHRoZSB2aWV3cG9ydCB3aGVuIG1lbnUtc3VyZmFjZSBpcyBhdCBtYXhpbXVtIHBvc3NpYmxlIGhlaWdodC4gKi9cbiAgICBNQVJHSU5fVE9fRURHRTogMzIsXG4gICAgLyoqIFJhdGlvIG9mIGFuY2hvciB3aWR0aCB0byBtZW51LXN1cmZhY2Ugd2lkdGggZm9yIHN3aXRjaGluZyBmcm9tIGNvcm5lciBwb3NpdGlvbmluZyB0byBjZW50ZXIgcG9zaXRpb25pbmcuICovXG4gICAgQU5DSE9SX1RPX01FTlVfU1VSRkFDRV9XSURUSF9SQVRJTzogMC42Nyxcbn07XG4vKipcbiAqIEVudW0gZm9yIGJpdHMgaW4gdGhlIHtAc2VlIENvcm5lcikgYml0bWFwLlxuICovXG52YXIgQ29ybmVyQml0O1xuKGZ1bmN0aW9uIChDb3JuZXJCaXQpIHtcbiAgICBDb3JuZXJCaXRbQ29ybmVyQml0W1wiQk9UVE9NXCJdID0gMV0gPSBcIkJPVFRPTVwiO1xuICAgIENvcm5lckJpdFtDb3JuZXJCaXRbXCJDRU5URVJcIl0gPSAyXSA9IFwiQ0VOVEVSXCI7XG4gICAgQ29ybmVyQml0W0Nvcm5lckJpdFtcIlJJR0hUXCJdID0gNF0gPSBcIlJJR0hUXCI7XG4gICAgQ29ybmVyQml0W0Nvcm5lckJpdFtcIkZMSVBfUlRMXCJdID0gOF0gPSBcIkZMSVBfUlRMXCI7XG59KShDb3JuZXJCaXQgfHwgKENvcm5lckJpdCA9IHt9KSk7XG4vKipcbiAqIEVudW0gZm9yIHJlcHJlc2VudGluZyBhbiBlbGVtZW50IGNvcm5lciBmb3IgcG9zaXRpb25pbmcgdGhlIG1lbnUtc3VyZmFjZS5cbiAqXG4gKiBUaGUgU1RBUlQgY29uc3RhbnRzIG1hcCB0byBMRUZUIGlmIGVsZW1lbnQgZGlyZWN0aW9uYWxpdHkgaXMgbGVmdFxuICogdG8gcmlnaHQgYW5kIFJJR0hUIGlmIHRoZSBkaXJlY3Rpb25hbGl0eSBpcyByaWdodCB0byBsZWZ0LlxuICogTGlrZXdpc2UgRU5EIG1hcHMgdG8gUklHSFQgb3IgTEVGVCBkZXBlbmRpbmcgb24gdGhlIGRpcmVjdGlvbmFsaXR5LlxuICovXG52YXIgQ29ybmVyO1xuKGZ1bmN0aW9uIChDb3JuZXIpIHtcbiAgICBDb3JuZXJbQ29ybmVyW1wiVE9QX0xFRlRcIl0gPSAwXSA9IFwiVE9QX0xFRlRcIjtcbiAgICBDb3JuZXJbQ29ybmVyW1wiVE9QX1JJR0hUXCJdID0gNF0gPSBcIlRPUF9SSUdIVFwiO1xuICAgIENvcm5lcltDb3JuZXJbXCJCT1RUT01fTEVGVFwiXSA9IDFdID0gXCJCT1RUT01fTEVGVFwiO1xuICAgIENvcm5lcltDb3JuZXJbXCJCT1RUT01fUklHSFRcIl0gPSA1XSA9IFwiQk9UVE9NX1JJR0hUXCI7XG4gICAgQ29ybmVyW0Nvcm5lcltcIlRPUF9TVEFSVFwiXSA9IDhdID0gXCJUT1BfU1RBUlRcIjtcbiAgICBDb3JuZXJbQ29ybmVyW1wiVE9QX0VORFwiXSA9IDEyXSA9IFwiVE9QX0VORFwiO1xuICAgIENvcm5lcltDb3JuZXJbXCJCT1RUT01fU1RBUlRcIl0gPSA5XSA9IFwiQk9UVE9NX1NUQVJUXCI7XG4gICAgQ29ybmVyW0Nvcm5lcltcIkJPVFRPTV9FTkRcIl0gPSAxM10gPSBcIkJPVFRPTV9FTkRcIjtcbn0pKENvcm5lciB8fCAoQ29ybmVyID0ge30pKTtcbmV4cG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnMsIENvcm5lckJpdCwgQ29ybmVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgQ29ybmVyLCBDb3JuZXJCaXQsIGNzc0NsYXNzZXMsIG51bWJlcnMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5pc09wZW5fID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmlzUXVpY2tPcGVuXyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5pc0hvaXN0ZWRFbGVtZW50XyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5pc0ZpeGVkUG9zaXRpb25fID0gZmFsc2U7XG4gICAgICAgIF90aGlzLm9wZW5BbmltYXRpb25FbmRUaW1lcklkXyA9IDA7XG4gICAgICAgIF90aGlzLmNsb3NlQW5pbWF0aW9uRW5kVGltZXJJZF8gPSAwO1xuICAgICAgICBfdGhpcy5hbmltYXRpb25SZXF1ZXN0SWRfID0gMDtcbiAgICAgICAgX3RoaXMuYW5jaG9yQ29ybmVyXyA9IENvcm5lci5UT1BfU1RBUlQ7XG4gICAgICAgIF90aGlzLmFuY2hvck1hcmdpbl8gPSB7IHRvcDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMCwgbGVmdDogMCB9O1xuICAgICAgICBfdGhpcy5wb3NpdGlvbl8gPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLCBcIkNvcm5lclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIENvcm5lcjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAc2VlIHtAbGluayBNRENNZW51U3VyZmFjZUFkYXB0ZXJ9IGZvciB0eXBpbmcgaW5mb3JtYXRpb24gb24gcGFyYW1ldGVycyBhbmQgcmV0dXJuIHR5cGVzLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgaGFzQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGhhc0FuY2hvcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgaXNFbGVtZW50SW5Db250YWluZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGlzRm9jdXNlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgaXNSdGw6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGdldElubmVyRGltZW5zaW9uczogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgaGVpZ2h0OiAwLCB3aWR0aDogMCB9KTsgfSxcbiAgICAgICAgICAgICAgICBnZXRBbmNob3JEaW1lbnNpb25zOiBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICAgICAgICAgIGdldFdpbmRvd0RpbWVuc2lvbnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IGhlaWdodDogMCwgd2lkdGg6IDAgfSk7IH0sXG4gICAgICAgICAgICAgICAgZ2V0Qm9keURpbWVuc2lvbnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IGhlaWdodDogMCwgd2lkdGg6IDAgfSk7IH0sXG4gICAgICAgICAgICAgICAgZ2V0V2luZG93U2Nyb2xsOiBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyB4OiAwLCB5OiAwIH0pOyB9LFxuICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0TWF4SGVpZ2h0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0VHJhbnNmb3JtT3JpZ2luOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2F2ZUZvY3VzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVzdG9yZUZvY3VzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5Q2xvc2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlPcGVuOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3NlcywgUk9PVCA9IF9hLlJPT1QsIE9QRU4gPSBfYS5PUEVOO1xuICAgICAgICBpZiAoIXRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoUk9PVCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihST09UICsgXCIgY2xhc3MgcmVxdWlyZWQgaW4gcm9vdCBlbGVtZW50LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhPUEVOKSkge1xuICAgICAgICAgICAgdGhpcy5pc09wZW5fID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5vcGVuQW5pbWF0aW9uRW5kVGltZXJJZF8pO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5jbG9zZUFuaW1hdGlvbkVuZFRpbWVySWRfKTtcbiAgICAgICAgLy8gQ2FuY2VsIGFueSBjdXJyZW50bHkgcnVubmluZyBhbmltYXRpb25zLlxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvblJlcXVlc3RJZF8pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNvcm5lciBEZWZhdWx0IGFuY2hvciBjb3JuZXIgYWxpZ25tZW50IG9mIHRvcC1sZWZ0IG1lbnUgc3VyZmFjZSBjb3JuZXIuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRBbmNob3JDb3JuZXIgPSBmdW5jdGlvbiAoY29ybmVyKSB7XG4gICAgICAgIHRoaXMuYW5jaG9yQ29ybmVyXyA9IGNvcm5lcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBtYXJnaW4gU2V0IG9mIG1hcmdpbiB2YWx1ZXMgZnJvbSBhbmNob3IuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRBbmNob3JNYXJnaW4gPSBmdW5jdGlvbiAobWFyZ2luKSB7XG4gICAgICAgIHRoaXMuYW5jaG9yTWFyZ2luXy50b3AgPSBtYXJnaW4udG9wIHx8IDA7XG4gICAgICAgIHRoaXMuYW5jaG9yTWFyZ2luXy5yaWdodCA9IG1hcmdpbi5yaWdodCB8fCAwO1xuICAgICAgICB0aGlzLmFuY2hvck1hcmdpbl8uYm90dG9tID0gbWFyZ2luLmJvdHRvbSB8fCAwO1xuICAgICAgICB0aGlzLmFuY2hvck1hcmdpbl8ubGVmdCA9IG1hcmdpbi5sZWZ0IHx8IDA7XG4gICAgfTtcbiAgICAvKiogVXNlZCB0byBpbmRpY2F0ZSBpZiB0aGUgbWVudS1zdXJmYWNlIGlzIGhvaXN0ZWQgdG8gdGhlIGJvZHkuICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRJc0hvaXN0ZWQgPSBmdW5jdGlvbiAoaXNIb2lzdGVkKSB7XG4gICAgICAgIHRoaXMuaXNIb2lzdGVkRWxlbWVudF8gPSBpc0hvaXN0ZWQ7XG4gICAgfTtcbiAgICAvKiogVXNlZCB0byBzZXQgdGhlIG1lbnUtc3VyZmFjZSBjYWxjdWxhdGlvbnMgYmFzZWQgb24gYSBmaXhlZCBwb3NpdGlvbiBtZW51LiAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0Rml4ZWRQb3NpdGlvbiA9IGZ1bmN0aW9uIChpc0ZpeGVkUG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5pc0ZpeGVkUG9zaXRpb25fID0gaXNGaXhlZFBvc2l0aW9uO1xuICAgIH07XG4gICAgLyoqIFNldHMgdGhlIG1lbnUtc3VyZmFjZSBwb3NpdGlvbiBvbiB0aGUgcGFnZS4gKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLnNldEFic29sdXRlUG9zaXRpb24gPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uXy54ID0gdGhpcy5pc0Zpbml0ZV8oeCkgPyB4IDogMDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbl8ueSA9IHRoaXMuaXNGaW5pdGVfKHkpID8geSA6IDA7XG4gICAgfTtcbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLnNldFF1aWNrT3BlbiA9IGZ1bmN0aW9uIChxdWlja09wZW4pIHtcbiAgICAgICAgdGhpcy5pc1F1aWNrT3Blbl8gPSBxdWlja09wZW47XG4gICAgfTtcbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmlzT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNPcGVuXztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE9wZW4gdGhlIG1lbnUgc3VyZmFjZS5cbiAgICAgKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2F2ZUZvY3VzKCk7XG4gICAgICAgIGlmICghdGhpcy5pc1F1aWNrT3Blbl8pIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQU5JTUFUSU5HX09QRU4pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uUmVxdWVzdElkXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5PUEVOKTtcbiAgICAgICAgICAgIF90aGlzLmRpbWVuc2lvbnNfID0gX3RoaXMuYWRhcHRlcl8uZ2V0SW5uZXJEaW1lbnNpb25zKCk7XG4gICAgICAgICAgICBfdGhpcy5hdXRvUG9zaXRpb25fKCk7XG4gICAgICAgICAgICBpZiAoX3RoaXMuaXNRdWlja09wZW5fKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ubm90aWZ5T3BlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMub3BlbkFuaW1hdGlvbkVuZFRpbWVySWRfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm9wZW5BbmltYXRpb25FbmRUaW1lcklkXyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkFOSU1BVElOR19PUEVOKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ubm90aWZ5T3BlbigpO1xuICAgICAgICAgICAgICAgIH0sIG51bWJlcnMuVFJBTlNJVElPTl9PUEVOX0RVUkFUSU9OKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaXNPcGVuXyA9IHRydWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDbG9zZXMgdGhlIG1lbnUgc3VyZmFjZS5cbiAgICAgKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKHNraXBSZXN0b3JlRm9jdXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHNraXBSZXN0b3JlRm9jdXMgPT09IHZvaWQgMCkgeyBza2lwUmVzdG9yZUZvY3VzID0gZmFsc2U7IH1cbiAgICAgICAgaWYgKCF0aGlzLmlzUXVpY2tPcGVuXykge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BTklNQVRJTkdfQ0xPU0VEKTtcbiAgICAgICAgfVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLmNzc0NsYXNzZXMuT1BFTik7XG4gICAgICAgICAgICBpZiAoX3RoaXMuaXNRdWlja09wZW5fKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ubm90aWZ5Q2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLmNsb3NlQW5pbWF0aW9uRW5kVGltZXJJZF8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2xvc2VBbmltYXRpb25FbmRUaW1lcklkXyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkFOSU1BVElOR19DTE9TRUQpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5ub3RpZnlDbG9zZSgpO1xuICAgICAgICAgICAgICAgIH0sIG51bWJlcnMuVFJBTlNJVElPTl9DTE9TRV9EVVJBVElPTik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmlzT3Blbl8gPSBmYWxzZTtcbiAgICAgICAgaWYgKCFza2lwUmVzdG9yZUZvY3VzKSB7XG4gICAgICAgICAgICB0aGlzLm1heWJlUmVzdG9yZUZvY3VzXygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKiogSGFuZGxlIGNsaWNrcyBhbmQgY2xvc2UgaWYgbm90IHdpdGhpbiBtZW51LXN1cmZhY2UgZWxlbWVudC4gKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUJvZHlDbGljayA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIGVsID0gZXZ0LnRhcmdldDtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNFbGVtZW50SW5Db250YWluZXIoZWwpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH07XG4gICAgLyoqIEhhbmRsZSBrZXlzIHRoYXQgY2xvc2UgdGhlIHN1cmZhY2UuICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVLZXlkb3duID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIga2V5Q29kZSA9IGV2dC5rZXlDb2RlLCBrZXkgPSBldnQua2V5O1xuICAgICAgICB2YXIgaXNFc2NhcGUgPSBrZXkgPT09ICdFc2NhcGUnIHx8IGtleUNvZGUgPT09IDI3O1xuICAgICAgICBpZiAoaXNFc2NhcGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5hdXRvUG9zaXRpb25fID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIC8vIENvbXB1dGUgbWVhc3VyZW1lbnRzIGZvciBhdXRvcG9zaXRpb24gbWV0aG9kcyByZXVzZS5cbiAgICAgICAgdGhpcy5tZWFzdXJlbWVudHNfID0gdGhpcy5nZXRBdXRvTGF5b3V0TWVhc3VyZW1lbnRzXygpO1xuICAgICAgICB2YXIgY29ybmVyID0gdGhpcy5nZXRPcmlnaW5Db3JuZXJfKCk7XG4gICAgICAgIHZhciBtYXhNZW51U3VyZmFjZUhlaWdodCA9IHRoaXMuZ2V0TWVudVN1cmZhY2VNYXhIZWlnaHRfKGNvcm5lcik7XG4gICAgICAgIHZhciB2ZXJ0aWNhbEFsaWdubWVudCA9IHRoaXMuaGFzQml0Xyhjb3JuZXIsIENvcm5lckJpdC5CT1RUT00pID8gJ2JvdHRvbScgOiAndG9wJztcbiAgICAgICAgdmFyIGhvcml6b250YWxBbGlnbm1lbnQgPSB0aGlzLmhhc0JpdF8oY29ybmVyLCBDb3JuZXJCaXQuUklHSFQpID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICAgICAgdmFyIGhvcml6b250YWxPZmZzZXQgPSB0aGlzLmdldEhvcml6b250YWxPcmlnaW5PZmZzZXRfKGNvcm5lcik7XG4gICAgICAgIHZhciB2ZXJ0aWNhbE9mZnNldCA9IHRoaXMuZ2V0VmVydGljYWxPcmlnaW5PZmZzZXRfKGNvcm5lcik7XG4gICAgICAgIHZhciBfYiA9IHRoaXMubWVhc3VyZW1lbnRzXywgYW5jaG9yU2l6ZSA9IF9iLmFuY2hvclNpemUsIHN1cmZhY2VTaXplID0gX2Iuc3VyZmFjZVNpemU7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IChfYSA9IHt9LFxuICAgICAgICAgICAgX2FbaG9yaXpvbnRhbEFsaWdubWVudF0gPSBob3Jpem9udGFsT2Zmc2V0LFxuICAgICAgICAgICAgX2FbdmVydGljYWxBbGlnbm1lbnRdID0gdmVydGljYWxPZmZzZXQsXG4gICAgICAgICAgICBfYSk7XG4gICAgICAgIC8vIENlbnRlciBhbGlnbiB3aGVuIGFuY2hvciB3aWR0aCBpcyBjb21wYXJhYmxlIG9yIGdyZWF0ZXIgdGhhbiBtZW51IHN1cmZhY2UsIG90aGVyd2lzZSBrZWVwIGNvcm5lci5cbiAgICAgICAgaWYgKGFuY2hvclNpemUud2lkdGggLyBzdXJmYWNlU2l6ZS53aWR0aCA+IG51bWJlcnMuQU5DSE9SX1RPX01FTlVfU1VSRkFDRV9XSURUSF9SQVRJTykge1xuICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudCA9ICdjZW50ZXInO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBtZW51LXN1cmZhY2UgaGFzIGJlZW4gaG9pc3RlZCB0byB0aGUgYm9keSwgaXQncyBubyBsb25nZXIgcmVsYXRpdmUgdG8gdGhlIGFuY2hvciBlbGVtZW50XG4gICAgICAgIGlmICh0aGlzLmlzSG9pc3RlZEVsZW1lbnRfIHx8IHRoaXMuaXNGaXhlZFBvc2l0aW9uXykge1xuICAgICAgICAgICAgdGhpcy5hZGp1c3RQb3NpdGlvbkZvckhvaXN0ZWRFbGVtZW50Xyhwb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRUcmFuc2Zvcm1PcmlnaW4oaG9yaXpvbnRhbEFsaWdubWVudCArIFwiIFwiICsgdmVydGljYWxBbGlnbm1lbnQpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRNYXhIZWlnaHQobWF4TWVudVN1cmZhY2VIZWlnaHQgPyBtYXhNZW51U3VyZmFjZUhlaWdodCArICdweCcgOiAnJyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIE1lYXN1cmVtZW50cyB1c2VkIHRvIHBvc2l0aW9uIG1lbnUgc3VyZmFjZSBwb3B1cC5cbiAgICAgKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmdldEF1dG9MYXlvdXRNZWFzdXJlbWVudHNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYW5jaG9yUmVjdCA9IHRoaXMuYWRhcHRlcl8uZ2V0QW5jaG9yRGltZW5zaW9ucygpO1xuICAgICAgICB2YXIgYm9keVNpemUgPSB0aGlzLmFkYXB0ZXJfLmdldEJvZHlEaW1lbnNpb25zKCk7XG4gICAgICAgIHZhciB2aWV3cG9ydFNpemUgPSB0aGlzLmFkYXB0ZXJfLmdldFdpbmRvd0RpbWVuc2lvbnMoKTtcbiAgICAgICAgdmFyIHdpbmRvd1Njcm9sbCA9IHRoaXMuYWRhcHRlcl8uZ2V0V2luZG93U2Nyb2xsKCk7XG4gICAgICAgIGlmICghYW5jaG9yUmVjdCkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIFBvc2l0aW9uYWwgcHJvcGVydGllcyBhcmUgbW9yZSByZWFkYWJsZSB3aGVuIHRoZXkncmUgZ3JvdXBlZCB0b2dldGhlclxuICAgICAgICAgICAgYW5jaG9yUmVjdCA9IHtcbiAgICAgICAgICAgICAgICB0b3A6IHRoaXMucG9zaXRpb25fLnksXG4gICAgICAgICAgICAgICAgcmlnaHQ6IHRoaXMucG9zaXRpb25fLngsXG4gICAgICAgICAgICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uXy55LFxuICAgICAgICAgICAgICAgIGxlZnQ6IHRoaXMucG9zaXRpb25fLngsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFuY2hvclNpemU6IGFuY2hvclJlY3QsXG4gICAgICAgICAgICBib2R5U2l6ZTogYm9keVNpemUsXG4gICAgICAgICAgICBzdXJmYWNlU2l6ZTogdGhpcy5kaW1lbnNpb25zXyxcbiAgICAgICAgICAgIHZpZXdwb3J0RGlzdGFuY2U6IHtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgUG9zaXRpb25hbCBwcm9wZXJ0aWVzIGFyZSBtb3JlIHJlYWRhYmxlIHdoZW4gdGhleSdyZSBncm91cGVkIHRvZ2V0aGVyXG4gICAgICAgICAgICAgICAgdG9wOiBhbmNob3JSZWN0LnRvcCxcbiAgICAgICAgICAgICAgICByaWdodDogdmlld3BvcnRTaXplLndpZHRoIC0gYW5jaG9yUmVjdC5yaWdodCxcbiAgICAgICAgICAgICAgICBib3R0b206IHZpZXdwb3J0U2l6ZS5oZWlnaHQgLSBhbmNob3JSZWN0LmJvdHRvbSxcbiAgICAgICAgICAgICAgICBsZWZ0OiBhbmNob3JSZWN0LmxlZnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmlld3BvcnRTaXplOiB2aWV3cG9ydFNpemUsXG4gICAgICAgICAgICB3aW5kb3dTY3JvbGw6IHdpbmRvd1Njcm9sbCxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBjb3JuZXIgb2YgdGhlIGFuY2hvciBmcm9tIHdoaWNoIHRvIGFuaW1hdGUgYW5kIHBvc2l0aW9uIHRoZSBtZW51IHN1cmZhY2UuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRPcmlnaW5Db3JuZXJfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBEZWZhdWx0czogb3BlbiBmcm9tIHRoZSB0b3AgbGVmdC5cbiAgICAgICAgdmFyIGNvcm5lciA9IENvcm5lci5UT1BfTEVGVDtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5tZWFzdXJlbWVudHNfLCB2aWV3cG9ydERpc3RhbmNlID0gX2Eudmlld3BvcnREaXN0YW5jZSwgYW5jaG9yU2l6ZSA9IF9hLmFuY2hvclNpemUsIHN1cmZhY2VTaXplID0gX2Euc3VyZmFjZVNpemU7XG4gICAgICAgIHZhciBpc0JvdHRvbUFsaWduZWQgPSB0aGlzLmhhc0JpdF8odGhpcy5hbmNob3JDb3JuZXJfLCBDb3JuZXJCaXQuQk9UVE9NKTtcbiAgICAgICAgdmFyIGF2YWlsYWJsZVRvcCA9IGlzQm90dG9tQWxpZ25lZCA/IHZpZXdwb3J0RGlzdGFuY2UudG9wICsgYW5jaG9yU2l6ZS5oZWlnaHQgKyB0aGlzLmFuY2hvck1hcmdpbl8uYm90dG9tXG4gICAgICAgICAgICA6IHZpZXdwb3J0RGlzdGFuY2UudG9wICsgdGhpcy5hbmNob3JNYXJnaW5fLnRvcDtcbiAgICAgICAgdmFyIGF2YWlsYWJsZUJvdHRvbSA9IGlzQm90dG9tQWxpZ25lZCA/IHZpZXdwb3J0RGlzdGFuY2UuYm90dG9tIC0gdGhpcy5hbmNob3JNYXJnaW5fLmJvdHRvbVxuICAgICAgICAgICAgOiB2aWV3cG9ydERpc3RhbmNlLmJvdHRvbSArIGFuY2hvclNpemUuaGVpZ2h0IC0gdGhpcy5hbmNob3JNYXJnaW5fLnRvcDtcbiAgICAgICAgdmFyIHRvcE92ZXJmbG93ID0gc3VyZmFjZVNpemUuaGVpZ2h0IC0gYXZhaWxhYmxlVG9wO1xuICAgICAgICB2YXIgYm90dG9tT3ZlcmZsb3cgPSBzdXJmYWNlU2l6ZS5oZWlnaHQgLSBhdmFpbGFibGVCb3R0b207XG4gICAgICAgIGlmIChib3R0b21PdmVyZmxvdyA+IDAgJiYgdG9wT3ZlcmZsb3cgPCBib3R0b21PdmVyZmxvdykge1xuICAgICAgICAgICAgY29ybmVyID0gdGhpcy5zZXRCaXRfKGNvcm5lciwgQ29ybmVyQml0LkJPVFRPTSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlzUnRsID0gdGhpcy5hZGFwdGVyXy5pc1J0bCgpO1xuICAgICAgICB2YXIgaXNGbGlwUnRsID0gdGhpcy5oYXNCaXRfKHRoaXMuYW5jaG9yQ29ybmVyXywgQ29ybmVyQml0LkZMSVBfUlRMKTtcbiAgICAgICAgdmFyIGF2b2lkSG9yaXpvbnRhbE92ZXJsYXAgPSB0aGlzLmhhc0JpdF8odGhpcy5hbmNob3JDb3JuZXJfLCBDb3JuZXJCaXQuUklHSFQpO1xuICAgICAgICB2YXIgaXNBbGlnbmVkUmlnaHQgPSAoYXZvaWRIb3Jpem9udGFsT3ZlcmxhcCAmJiAhaXNSdGwpIHx8XG4gICAgICAgICAgICAoIWF2b2lkSG9yaXpvbnRhbE92ZXJsYXAgJiYgaXNGbGlwUnRsICYmIGlzUnRsKTtcbiAgICAgICAgdmFyIGF2YWlsYWJsZUxlZnQgPSBpc0FsaWduZWRSaWdodCA/IHZpZXdwb3J0RGlzdGFuY2UubGVmdCArIGFuY2hvclNpemUud2lkdGggKyB0aGlzLmFuY2hvck1hcmdpbl8ucmlnaHQgOlxuICAgICAgICAgICAgdmlld3BvcnREaXN0YW5jZS5sZWZ0ICsgdGhpcy5hbmNob3JNYXJnaW5fLmxlZnQ7XG4gICAgICAgIHZhciBhdmFpbGFibGVSaWdodCA9IGlzQWxpZ25lZFJpZ2h0ID8gdmlld3BvcnREaXN0YW5jZS5yaWdodCAtIHRoaXMuYW5jaG9yTWFyZ2luXy5yaWdodCA6XG4gICAgICAgICAgICB2aWV3cG9ydERpc3RhbmNlLnJpZ2h0ICsgYW5jaG9yU2l6ZS53aWR0aCAtIHRoaXMuYW5jaG9yTWFyZ2luXy5sZWZ0O1xuICAgICAgICB2YXIgbGVmdE92ZXJmbG93ID0gc3VyZmFjZVNpemUud2lkdGggLSBhdmFpbGFibGVMZWZ0O1xuICAgICAgICB2YXIgcmlnaHRPdmVyZmxvdyA9IHN1cmZhY2VTaXplLndpZHRoIC0gYXZhaWxhYmxlUmlnaHQ7XG4gICAgICAgIGlmICgobGVmdE92ZXJmbG93IDwgMCAmJiBpc0FsaWduZWRSaWdodCAmJiBpc1J0bCkgfHxcbiAgICAgICAgICAgIChhdm9pZEhvcml6b250YWxPdmVybGFwICYmICFpc0FsaWduZWRSaWdodCAmJiBsZWZ0T3ZlcmZsb3cgPCAwKSB8fFxuICAgICAgICAgICAgKHJpZ2h0T3ZlcmZsb3cgPiAwICYmIGxlZnRPdmVyZmxvdyA8IHJpZ2h0T3ZlcmZsb3cpKSB7XG4gICAgICAgICAgICBjb3JuZXIgPSB0aGlzLnNldEJpdF8oY29ybmVyLCBDb3JuZXJCaXQuUklHSFQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3JuZXI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gY29ybmVyIE9yaWdpbiBjb3JuZXIgb2YgdGhlIG1lbnUgc3VyZmFjZS5cbiAgICAgKiBAcmV0dXJuIE1heGltdW0gaGVpZ2h0IG9mIHRoZSBtZW51IHN1cmZhY2UsIGJhc2VkIG9uIGF2YWlsYWJsZSBzcGFjZS4gMCBpbmRpY2F0ZXMgc2hvdWxkIG5vdCBiZSBzZXQuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRNZW51U3VyZmFjZU1heEhlaWdodF8gPSBmdW5jdGlvbiAoY29ybmVyKSB7XG4gICAgICAgIHZhciB2aWV3cG9ydERpc3RhbmNlID0gdGhpcy5tZWFzdXJlbWVudHNfLnZpZXdwb3J0RGlzdGFuY2U7XG4gICAgICAgIHZhciBtYXhIZWlnaHQgPSAwO1xuICAgICAgICB2YXIgaXNCb3R0b21BbGlnbmVkID0gdGhpcy5oYXNCaXRfKGNvcm5lciwgQ29ybmVyQml0LkJPVFRPTSk7XG4gICAgICAgIHZhciBpc0JvdHRvbUFuY2hvcmVkID0gdGhpcy5oYXNCaXRfKHRoaXMuYW5jaG9yQ29ybmVyXywgQ29ybmVyQml0LkJPVFRPTSk7XG4gICAgICAgIHZhciBNQVJHSU5fVE9fRURHRSA9IE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5udW1iZXJzLk1BUkdJTl9UT19FREdFO1xuICAgICAgICAvLyBXaGVuIG1heGltdW0gaGVpZ2h0IGlzIG5vdCBzcGVjaWZpZWQsIGl0IGlzIGhhbmRsZWQgZnJvbSBDU1MuXG4gICAgICAgIGlmIChpc0JvdHRvbUFsaWduZWQpIHtcbiAgICAgICAgICAgIG1heEhlaWdodCA9IHZpZXdwb3J0RGlzdGFuY2UudG9wICsgdGhpcy5hbmNob3JNYXJnaW5fLnRvcCAtIE1BUkdJTl9UT19FREdFO1xuICAgICAgICAgICAgaWYgKCFpc0JvdHRvbUFuY2hvcmVkKSB7XG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0ICs9IHRoaXMubWVhc3VyZW1lbnRzXy5hbmNob3JTaXplLmhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1heEhlaWdodCA9XG4gICAgICAgICAgICAgICAgdmlld3BvcnREaXN0YW5jZS5ib3R0b20gLSB0aGlzLmFuY2hvck1hcmdpbl8uYm90dG9tICsgdGhpcy5tZWFzdXJlbWVudHNfLmFuY2hvclNpemUuaGVpZ2h0IC0gTUFSR0lOX1RPX0VER0U7XG4gICAgICAgICAgICBpZiAoaXNCb3R0b21BbmNob3JlZCkge1xuICAgICAgICAgICAgICAgIG1heEhlaWdodCAtPSB0aGlzLm1lYXN1cmVtZW50c18uYW5jaG9yU2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heEhlaWdodDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBjb3JuZXIgT3JpZ2luIGNvcm5lciBvZiB0aGUgbWVudSBzdXJmYWNlLlxuICAgICAqIEByZXR1cm4gSG9yaXpvbnRhbCBvZmZzZXQgb2YgbWVudSBzdXJmYWNlIG9yaWdpbiBjb3JuZXIgZnJvbSBjb3JyZXNwb25kaW5nIGFuY2hvciBjb3JuZXIuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRIb3Jpem9udGFsT3JpZ2luT2Zmc2V0XyA9IGZ1bmN0aW9uIChjb3JuZXIpIHtcbiAgICAgICAgdmFyIGFuY2hvclNpemUgPSB0aGlzLm1lYXN1cmVtZW50c18uYW5jaG9yU2l6ZTtcbiAgICAgICAgLy8gaXNSaWdodEFsaWduZWQgY29ycmVzcG9uZHMgdG8gdXNpbmcgdGhlICdyaWdodCcgcHJvcGVydHkgb24gdGhlIHN1cmZhY2UuXG4gICAgICAgIHZhciBpc1JpZ2h0QWxpZ25lZCA9IHRoaXMuaGFzQml0Xyhjb3JuZXIsIENvcm5lckJpdC5SSUdIVCk7XG4gICAgICAgIHZhciBhdm9pZEhvcml6b250YWxPdmVybGFwID0gdGhpcy5oYXNCaXRfKHRoaXMuYW5jaG9yQ29ybmVyXywgQ29ybmVyQml0LlJJR0hUKTtcbiAgICAgICAgaWYgKGlzUmlnaHRBbGlnbmVkKSB7XG4gICAgICAgICAgICB2YXIgcmlnaHRPZmZzZXQgPSBhdm9pZEhvcml6b250YWxPdmVybGFwID8gYW5jaG9yU2l6ZS53aWR0aCAtIHRoaXMuYW5jaG9yTWFyZ2luXy5sZWZ0IDogdGhpcy5hbmNob3JNYXJnaW5fLnJpZ2h0O1xuICAgICAgICAgICAgLy8gRm9yIGhvaXN0ZWQgb3IgZml4ZWQgZWxlbWVudHMsIGFkanVzdCB0aGUgb2Zmc2V0IGJ5IHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdmlld3BvcnQgd2lkdGggYW5kIGJvZHkgd2lkdGggc29cbiAgICAgICAgICAgIC8vIHdoZW4gd2UgY2FsY3VsYXRlIHRoZSByaWdodCB2YWx1ZSAoYGFkanVzdFBvc2l0aW9uRm9ySG9pc3RlZEVsZW1lbnRfYCkgYmFzZWQgb24gdGhlIGVsZW1lbnQgcG9zaXRpb24sXG4gICAgICAgICAgICAvLyB0aGUgcmlnaHQgcHJvcGVydHkgaXMgY29ycmVjdC5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzSG9pc3RlZEVsZW1lbnRfIHx8IHRoaXMuaXNGaXhlZFBvc2l0aW9uXykge1xuICAgICAgICAgICAgICAgIHJldHVybiByaWdodE9mZnNldCAtICh0aGlzLm1lYXN1cmVtZW50c18udmlld3BvcnRTaXplLndpZHRoIC0gdGhpcy5tZWFzdXJlbWVudHNfLmJvZHlTaXplLndpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByaWdodE9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXZvaWRIb3Jpem9udGFsT3ZlcmxhcCA/IGFuY2hvclNpemUud2lkdGggLSB0aGlzLmFuY2hvck1hcmdpbl8ucmlnaHQgOiB0aGlzLmFuY2hvck1hcmdpbl8ubGVmdDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBjb3JuZXIgT3JpZ2luIGNvcm5lciBvZiB0aGUgbWVudSBzdXJmYWNlLlxuICAgICAqIEByZXR1cm4gVmVydGljYWwgb2Zmc2V0IG9mIG1lbnUgc3VyZmFjZSBvcmlnaW4gY29ybmVyIGZyb20gY29ycmVzcG9uZGluZyBhbmNob3IgY29ybmVyLlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0VmVydGljYWxPcmlnaW5PZmZzZXRfID0gZnVuY3Rpb24gKGNvcm5lcikge1xuICAgICAgICB2YXIgYW5jaG9yU2l6ZSA9IHRoaXMubWVhc3VyZW1lbnRzXy5hbmNob3JTaXplO1xuICAgICAgICB2YXIgaXNCb3R0b21BbGlnbmVkID0gdGhpcy5oYXNCaXRfKGNvcm5lciwgQ29ybmVyQml0LkJPVFRPTSk7XG4gICAgICAgIHZhciBhdm9pZFZlcnRpY2FsT3ZlcmxhcCA9IHRoaXMuaGFzQml0Xyh0aGlzLmFuY2hvckNvcm5lcl8sIENvcm5lckJpdC5CT1RUT00pO1xuICAgICAgICB2YXIgeSA9IDA7XG4gICAgICAgIGlmIChpc0JvdHRvbUFsaWduZWQpIHtcbiAgICAgICAgICAgIHkgPSBhdm9pZFZlcnRpY2FsT3ZlcmxhcCA/IGFuY2hvclNpemUuaGVpZ2h0IC0gdGhpcy5hbmNob3JNYXJnaW5fLnRvcCA6IC10aGlzLmFuY2hvck1hcmdpbl8uYm90dG9tO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgeSA9IGF2b2lkVmVydGljYWxPdmVybGFwID8gKGFuY2hvclNpemUuaGVpZ2h0ICsgdGhpcy5hbmNob3JNYXJnaW5fLmJvdHRvbSkgOiB0aGlzLmFuY2hvck1hcmdpbl8udG9wO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB5O1xuICAgIH07XG4gICAgLyoqIENhbGN1bGF0ZXMgdGhlIG9mZnNldHMgZm9yIHBvc2l0aW9uaW5nIHRoZSBtZW51LXN1cmZhY2Ugd2hlbiB0aGUgbWVudS1zdXJmYWNlIGhhcyBiZWVuIGhvaXN0ZWQgdG8gdGhlIGJvZHkuICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5hZGp1c3RQb3NpdGlvbkZvckhvaXN0ZWRFbGVtZW50XyA9IGZ1bmN0aW9uIChwb3NpdGlvbikge1xuICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgdmFyIF9iID0gdGhpcy5tZWFzdXJlbWVudHNfLCB3aW5kb3dTY3JvbGwgPSBfYi53aW5kb3dTY3JvbGwsIHZpZXdwb3J0RGlzdGFuY2UgPSBfYi52aWV3cG9ydERpc3RhbmNlO1xuICAgICAgICB2YXIgcHJvcHMgPSBPYmplY3Qua2V5cyhwb3NpdGlvbik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBwcm9wc18xID0gdHNsaWJfMS5fX3ZhbHVlcyhwcm9wcyksIHByb3BzXzFfMSA9IHByb3BzXzEubmV4dCgpOyAhcHJvcHNfMV8xLmRvbmU7IHByb3BzXzFfMSA9IHByb3BzXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3AgPSBwcm9wc18xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gcG9zaXRpb25bcHJvcF0gfHwgMDtcbiAgICAgICAgICAgICAgICAvLyBIb2lzdGVkIHN1cmZhY2VzIG5lZWQgdG8gaGF2ZSB0aGUgYW5jaG9yIGVsZW1lbnRzIGxvY2F0aW9uIG9uIHRoZSBwYWdlIGFkZGVkIHRvIHRoZVxuICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uIHByb3BlcnRpZXMgZm9yIHByb3BlciBhbGlnbm1lbnQgb24gdGhlIGJvZHkuXG4gICAgICAgICAgICAgICAgdmFsdWUgKz0gdmlld3BvcnREaXN0YW5jZVtwcm9wXTtcbiAgICAgICAgICAgICAgICAvLyBTdXJmYWNlcyB0aGF0IGFyZSBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQgbmVlZCB0byBoYXZlIGFkZGl0aW9uYWwgY2FsY3VsYXRpb25zIGZvciBzY3JvbGxcbiAgICAgICAgICAgICAgICAvLyBhbmQgYm90dG9tIHBvc2l0aW9uaW5nLlxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0ZpeGVkUG9zaXRpb25fKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSAndG9wJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gd2luZG93U2Nyb2xsLnk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvcCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIC09IHdpbmRvd1Njcm9sbC55O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb3AgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gd2luZG93U2Nyb2xsLng7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7IC8vIHByb3AgPT09ICdyaWdodCdcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIC09IHdpbmRvd1Njcm9sbC54O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBvc2l0aW9uW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc18xXzEgJiYgIXByb3BzXzFfMS5kb25lICYmIChfYSA9IHByb3BzXzEucmV0dXJuKSkgX2EuY2FsbChwcm9wc18xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhlIGxhc3QgZm9jdXNlZCBlbGVtZW50IHdoZW4gdGhlIG1lbnUgc3VyZmFjZSB3YXMgb3BlbmVkIHNob3VsZCByZWdhaW4gZm9jdXMsIGlmIHRoZSB1c2VyIGlzXG4gICAgICogZm9jdXNlZCBvbiBvciB3aXRoaW4gdGhlIG1lbnUgc3VyZmFjZSB3aGVuIGl0IGlzIGNsb3NlZC5cbiAgICAgKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLm1heWJlUmVzdG9yZUZvY3VzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlzUm9vdEZvY3VzZWQgPSB0aGlzLmFkYXB0ZXJfLmlzRm9jdXNlZCgpO1xuICAgICAgICB2YXIgY2hpbGRIYXNGb2N1cyA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgdGhpcy5hZGFwdGVyXy5pc0VsZW1lbnRJbkNvbnRhaW5lcihkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgICAgICAgaWYgKGlzUm9vdEZvY3VzZWQgfHwgY2hpbGRIYXNGb2N1cykge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZXN0b3JlRm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5oYXNCaXRfID0gZnVuY3Rpb24gKGNvcm5lciwgYml0KSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKGNvcm5lciAmIGJpdCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYml0d2lzZVxuICAgIH07XG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRCaXRfID0gZnVuY3Rpb24gKGNvcm5lciwgYml0KSB7XG4gICAgICAgIHJldHVybiBjb3JuZXIgfCBiaXQ7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYml0d2lzZVxuICAgIH07XG4gICAgLyoqXG4gICAgICogaXNGaW5pdGUgdGhhdCBkb2Vzbid0IGZvcmNlIGNvbnZlcnNpb24gdG8gbnVtYmVyIHR5cGUuXG4gICAgICogRXF1aXZhbGVudCB0byBOdW1iZXIuaXNGaW5pdGUgaW4gRVMyMDE1LCB3aGljaCBpcyBub3Qgc3VwcG9ydGVkIGluIElFLlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuaXNGaW5pdGVfID0gZnVuY3Rpb24gKG51bSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIG51bSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUobnVtKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENNZW51U3VyZmFjZUZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgY2FjaGVkQ3NzVHJhbnNmb3JtUHJvcGVydHlOYW1lXztcbi8qKlxuICogUmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgY29ycmVjdCB0cmFuc2Zvcm0gcHJvcGVydHkgdG8gdXNlIG9uIHRoZSBjdXJyZW50IGJyb3dzZXIuXG4gKi9cbmZ1bmN0aW9uIGdldFRyYW5zZm9ybVByb3BlcnR5TmFtZShnbG9iYWxPYmosIGZvcmNlUmVmcmVzaCkge1xuICAgIGlmIChmb3JjZVJlZnJlc2ggPT09IHZvaWQgMCkgeyBmb3JjZVJlZnJlc2ggPSBmYWxzZTsgfVxuICAgIGlmIChjYWNoZWRDc3NUcmFuc2Zvcm1Qcm9wZXJ0eU5hbWVfID09PSB1bmRlZmluZWQgfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIHZhciBlbCA9IGdsb2JhbE9iai5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FjaGVkQ3NzVHJhbnNmb3JtUHJvcGVydHlOYW1lXyA9ICd0cmFuc2Zvcm0nIGluIGVsLnN0eWxlID8gJ3RyYW5zZm9ybScgOiAnd2Via2l0VHJhbnNmb3JtJztcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZENzc1RyYW5zZm9ybVByb3BlcnR5TmFtZV87XG59XG5leHBvcnQgeyBnZXRUcmFuc2Zvcm1Qcm9wZXJ0eU5hbWUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWwuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDQ29tcG9uZW50IH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xudmFyIE1EQ01lbnVTdXJmYWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ01lbnVTdXJmYWNlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ01lbnVTdXJmYWNlKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE1EQ01lbnVTdXJmYWNlLmF0dGFjaFRvID0gZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNRENNZW51U3VyZmFjZShyb290KTtcbiAgICB9O1xuICAgIE1EQ01lbnVTdXJmYWNlLnByb3RvdHlwZS5pbml0aWFsU3luY1dpdGhET00gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBwYXJlbnRFbCA9IHRoaXMucm9vdF8ucGFyZW50RWxlbWVudDtcbiAgICAgICAgdGhpcy5hbmNob3JFbGVtZW50ID0gcGFyZW50RWwgJiYgcGFyZW50RWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzZXMuQU5DSE9SKSA/IHBhcmVudEVsIDogbnVsbDtcbiAgICAgICAgaWYgKHRoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzZXMuRklYRUQpKSB7XG4gICAgICAgICAgICB0aGlzLnNldEZpeGVkUG9zaXRpb24odHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVLZXlkb3duXyA9IGZ1bmN0aW9uIChldnQpIHsgcmV0dXJuIF90aGlzLmZvdW5kYXRpb25fLmhhbmRsZUtleWRvd24oZXZ0KTsgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVCb2R5Q2xpY2tfID0gZnVuY3Rpb24gKGV2dCkgeyByZXR1cm4gX3RoaXMuZm91bmRhdGlvbl8uaGFuZGxlQm9keUNsaWNrKGV2dCk7IH07XG4gICAgICAgIHRoaXMucmVnaXN0ZXJCb2R5Q2xpY2tMaXN0ZW5lcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3RoaXMuaGFuZGxlQm9keUNsaWNrXyk7IH07XG4gICAgICAgIHRoaXMuZGVyZWdpc3RlckJvZHlDbGlja0xpc3RlbmVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfdGhpcy5oYW5kbGVCb2R5Q2xpY2tfKTsgfTtcbiAgICAgICAgdGhpcy5saXN0ZW4oJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd25fKTtcbiAgICAgICAgdGhpcy5saXN0ZW4oc3RyaW5ncy5PUEVORURfRVZFTlQsIHRoaXMucmVnaXN0ZXJCb2R5Q2xpY2tMaXN0ZW5lcl8pO1xuICAgICAgICB0aGlzLmxpc3RlbihzdHJpbmdzLkNMT1NFRF9FVkVOVCwgdGhpcy5kZXJlZ2lzdGVyQm9keUNsaWNrTGlzdGVuZXJfKTtcbiAgICB9O1xuICAgIE1EQ01lbnVTdXJmYWNlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnVubGlzdGVuKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlkb3duXyk7XG4gICAgICAgIHRoaXMudW5saXN0ZW4oc3RyaW5ncy5PUEVORURfRVZFTlQsIHRoaXMucmVnaXN0ZXJCb2R5Q2xpY2tMaXN0ZW5lcl8pO1xuICAgICAgICB0aGlzLnVubGlzdGVuKHN0cmluZ3MuQ0xPU0VEX0VWRU5ULCB0aGlzLmRlcmVnaXN0ZXJCb2R5Q2xpY2tMaXN0ZW5lcl8pO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIE1EQ01lbnVTdXJmYWNlLnByb3RvdHlwZS5pc09wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb25fLmlzT3BlbigpO1xuICAgIH07XG4gICAgTURDTWVudVN1cmZhY2UucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8ub3BlbigpO1xuICAgIH07XG4gICAgTURDTWVudVN1cmZhY2UucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKHNraXBSZXN0b3JlRm9jdXMpIHtcbiAgICAgICAgaWYgKHNraXBSZXN0b3JlRm9jdXMgPT09IHZvaWQgMCkgeyBza2lwUmVzdG9yZUZvY3VzID0gZmFsc2U7IH1cbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5jbG9zZShza2lwUmVzdG9yZUZvY3VzKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENNZW51U3VyZmFjZS5wcm90b3R5cGUsIFwicXVpY2tPcGVuXCIsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAocXVpY2tPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldFF1aWNrT3BlbihxdWlja09wZW4pO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBtZW51LXN1cmZhY2UgZnJvbSBpdCdzIGN1cnJlbnQgbG9jYXRpb24gYW5kIGFwcGVuZHMgaXQgdG8gdGhlXG4gICAgICogYm9keSB0byBvdmVyY29tZSBhbnkgb3ZlcmZsb3c6aGlkZGVuIGlzc3Vlcy5cbiAgICAgKi9cbiAgICBNRENNZW51U3VyZmFjZS5wcm90b3R5cGUuaG9pc3RNZW51VG9Cb2R5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucm9vdF8pO1xuICAgICAgICB0aGlzLnNldElzSG9pc3RlZCh0cnVlKTtcbiAgICB9O1xuICAgIC8qKiBTZXRzIHRoZSBmb3VuZGF0aW9uIHRvIHVzZSBwYWdlIG9mZnNldHMgZm9yIGFuIHBvc2l0aW9uaW5nIHdoZW4gdGhlIG1lbnUgaXMgaG9pc3RlZCB0byB0aGUgYm9keS4gKi9cbiAgICBNRENNZW51U3VyZmFjZS5wcm90b3R5cGUuc2V0SXNIb2lzdGVkID0gZnVuY3Rpb24gKGlzSG9pc3RlZCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldElzSG9pc3RlZChpc0hvaXN0ZWQpO1xuICAgIH07XG4gICAgLyoqIFNldHMgdGhlIGVsZW1lbnQgdGhhdCB0aGUgbWVudS1zdXJmYWNlIGlzIGFuY2hvcmVkIHRvLiAqL1xuICAgIE1EQ01lbnVTdXJmYWNlLnByb3RvdHlwZS5zZXRNZW51U3VyZmFjZUFuY2hvckVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB0aGlzLmFuY2hvckVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH07XG4gICAgLyoqIFNldHMgdGhlIG1lbnUtc3VyZmFjZSB0byBwb3NpdGlvbjogZml4ZWQuICovXG4gICAgTURDTWVudVN1cmZhY2UucHJvdG90eXBlLnNldEZpeGVkUG9zaXRpb24gPSBmdW5jdGlvbiAoaXNGaXhlZCkge1xuICAgICAgICBpZiAoaXNGaXhlZCkge1xuICAgICAgICAgICAgdGhpcy5yb290Xy5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzZXMuRklYRUQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNzc0NsYXNzZXMuRklYRUQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0Rml4ZWRQb3NpdGlvbihpc0ZpeGVkKTtcbiAgICB9O1xuICAgIC8qKiBTZXRzIHRoZSBhYnNvbHV0ZSB4L3kgcG9zaXRpb24gdG8gcG9zaXRpb24gYmFzZWQgb24uIFJlcXVpcmVzIHRoZSBtZW51IHRvIGJlIGhvaXN0ZWQuICovXG4gICAgTURDTWVudVN1cmZhY2UucHJvdG90eXBlLnNldEFic29sdXRlUG9zaXRpb24gPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldEFic29sdXRlUG9zaXRpb24oeCwgeSk7XG4gICAgICAgIHRoaXMuc2V0SXNIb2lzdGVkKHRydWUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNvcm5lciBEZWZhdWx0IGFuY2hvciBjb3JuZXIgYWxpZ25tZW50IG9mIHRvcC1sZWZ0IHN1cmZhY2UgY29ybmVyLlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlLnByb3RvdHlwZS5zZXRBbmNob3JDb3JuZXIgPSBmdW5jdGlvbiAoY29ybmVyKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0QW5jaG9yQ29ybmVyKGNvcm5lcik7XG4gICAgfTtcbiAgICBNRENNZW51U3VyZmFjZS5wcm90b3R5cGUuc2V0QW5jaG9yTWFyZ2luID0gZnVuY3Rpb24gKG1hcmdpbikge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldEFuY2hvck1hcmdpbihtYXJnaW4pO1xuICAgIH07XG4gICAgTURDTWVudVN1cmZhY2UucHJvdG90eXBlLmdldERlZmF1bHRGb3VuZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBETyBOT1QgSU5MSU5FIHRoaXMgdmFyaWFibGUuIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCBmb3VuZGF0aW9ucyB0YWtlIGEgUGFydGlhbDxNRENGb29BZGFwdGVyPi5cbiAgICAgICAgLy8gVG8gZW5zdXJlIHdlIGRvbid0IGFjY2lkZW50YWxseSBvbWl0IGFueSBtZXRob2RzLCB3ZSBuZWVkIGEgc2VwYXJhdGUsIHN0cm9uZ2x5IHR5cGVkIGFkYXB0ZXIgdmFyaWFibGUuXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgIHZhciBhZGFwdGVyID0ge1xuICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIF90aGlzLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICBoYXNDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICBoYXNBbmNob3I6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICEhX3RoaXMuYW5jaG9yRWxlbWVudDsgfSxcbiAgICAgICAgICAgIG5vdGlmeUNsb3NlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5lbWl0KE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5zdHJpbmdzLkNMT1NFRF9FVkVOVCwge30pOyB9LFxuICAgICAgICAgICAgbm90aWZ5T3BlbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZW1pdChNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uc3RyaW5ncy5PUEVORURfRVZFTlQsIHt9KTsgfSxcbiAgICAgICAgICAgIGlzRWxlbWVudEluQ29udGFpbmVyOiBmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIF90aGlzLnJvb3RfLmNvbnRhaW5zKGVsKTsgfSxcbiAgICAgICAgICAgIGlzUnRsOiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRDb21wdXRlZFN0eWxlKF90aGlzLnJvb3RfKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXJlY3Rpb24nKSA9PT0gJ3J0bCc7IH0sXG4gICAgICAgICAgICBzZXRUcmFuc2Zvcm1PcmlnaW46IGZ1bmN0aW9uIChvcmlnaW4pIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcGVydHlOYW1lID0gdXRpbC5nZXRUcmFuc2Zvcm1Qcm9wZXJ0eU5hbWUod2luZG93KSArIFwiLW9yaWdpblwiO1xuICAgICAgICAgICAgICAgIF90aGlzLnJvb3RfLnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5TmFtZSwgb3JpZ2luKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc0ZvY3VzZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IF90aGlzLnJvb3RfOyB9LFxuICAgICAgICAgICAgc2F2ZUZvY3VzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucHJldmlvdXNGb2N1c18gPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3RvcmVGb2N1czogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5yb290Xy5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMucHJldmlvdXNGb2N1c18gJiYgX3RoaXMucHJldmlvdXNGb2N1c18uZm9jdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnByZXZpb3VzRm9jdXNfLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0SW5uZXJEaW1lbnNpb25zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgd2lkdGg6IF90aGlzLnJvb3RfLm9mZnNldFdpZHRoLCBoZWlnaHQ6IF90aGlzLnJvb3RfLm9mZnNldEhlaWdodCB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldEFuY2hvckRpbWVuc2lvbnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmFuY2hvckVsZW1lbnQgPyBfdGhpcy5hbmNob3JFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogbnVsbDsgfSxcbiAgICAgICAgICAgIGdldFdpbmRvd0RpbWVuc2lvbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0Qm9keURpbWVuc2lvbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB3aWR0aDogZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgaGVpZ2h0OiBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldFdpbmRvd1Njcm9sbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHg6IHdpbmRvdy5wYWdlWE9mZnNldCwgeTogd2luZG93LnBhZ2VZT2Zmc2V0IH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0UG9zaXRpb246IGZ1bmN0aW9uIChwb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIF90aGlzLnJvb3RfLnN0eWxlLmxlZnQgPSAnbGVmdCcgaW4gcG9zaXRpb24gPyBwb3NpdGlvbi5sZWZ0ICsgXCJweFwiIDogJyc7XG4gICAgICAgICAgICAgICAgX3RoaXMucm9vdF8uc3R5bGUucmlnaHQgPSAncmlnaHQnIGluIHBvc2l0aW9uID8gcG9zaXRpb24ucmlnaHQgKyBcInB4XCIgOiAnJztcbiAgICAgICAgICAgICAgICBfdGhpcy5yb290Xy5zdHlsZS50b3AgPSAndG9wJyBpbiBwb3NpdGlvbiA/IHBvc2l0aW9uLnRvcCArIFwicHhcIiA6ICcnO1xuICAgICAgICAgICAgICAgIF90aGlzLnJvb3RfLnN0eWxlLmJvdHRvbSA9ICdib3R0b20nIGluIHBvc2l0aW9uID8gcG9zaXRpb24uYm90dG9tICsgXCJweFwiIDogJyc7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0TWF4SGVpZ2h0OiBmdW5jdGlvbiAoaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucm9vdF8uc3R5bGUubWF4SGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgcmV0dXJuIG5ldyBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24oYWRhcHRlcik7XG4gICAgfTtcbiAgICByZXR1cm4gTURDTWVudVN1cmZhY2U7XG59KE1EQ0NvbXBvbmVudCkpO1xuZXhwb3J0IHsgTURDTWVudVN1cmZhY2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBjc3NDbGFzc2VzID0ge1xuICAgIE1FTlVfU0VMRUNURURfTElTVF9JVEVNOiAnbWRjLW1lbnUtaXRlbS0tc2VsZWN0ZWQnLFxuICAgIE1FTlVfU0VMRUNUSU9OX0dST1VQOiAnbWRjLW1lbnVfX3NlbGVjdGlvbi1ncm91cCcsXG4gICAgUk9PVDogJ21kYy1tZW51Jyxcbn07XG52YXIgc3RyaW5ncyA9IHtcbiAgICBBUklBX0NIRUNLRURfQVRUUjogJ2FyaWEtY2hlY2tlZCcsXG4gICAgQVJJQV9ESVNBQkxFRF9BVFRSOiAnYXJpYS1kaXNhYmxlZCcsXG4gICAgQ0hFQ0tCT1hfU0VMRUNUT1I6ICdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nLFxuICAgIExJU1RfU0VMRUNUT1I6ICcubWRjLWxpc3QnLFxuICAgIFNFTEVDVEVEX0VWRU5UOiAnTURDTWVudTpzZWxlY3RlZCcsXG59O1xudmFyIG51bWJlcnMgPSB7XG4gICAgRk9DVVNfUk9PVF9JTkRFWDogLTEsXG59O1xudmFyIERlZmF1bHRGb2N1c1N0YXRlO1xuKGZ1bmN0aW9uIChEZWZhdWx0Rm9jdXNTdGF0ZSkge1xuICAgIERlZmF1bHRGb2N1c1N0YXRlW0RlZmF1bHRGb2N1c1N0YXRlW1wiTk9ORVwiXSA9IDBdID0gXCJOT05FXCI7XG4gICAgRGVmYXVsdEZvY3VzU3RhdGVbRGVmYXVsdEZvY3VzU3RhdGVbXCJMSVNUX1JPT1RcIl0gPSAxXSA9IFwiTElTVF9ST09UXCI7XG4gICAgRGVmYXVsdEZvY3VzU3RhdGVbRGVmYXVsdEZvY3VzU3RhdGVbXCJGSVJTVF9JVEVNXCJdID0gMl0gPSBcIkZJUlNUX0lURU1cIjtcbiAgICBEZWZhdWx0Rm9jdXNTdGF0ZVtEZWZhdWx0Rm9jdXNTdGF0ZVtcIkxBU1RfSVRFTVwiXSA9IDNdID0gXCJMQVNUX0lURU1cIjtcbn0pKERlZmF1bHRGb2N1c1N0YXRlIHx8IChEZWZhdWx0Rm9jdXNTdGF0ZSA9IHt9KSk7XG5leHBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzLCBEZWZhdWx0Rm9jdXNTdGF0ZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMgYXMgbGlzdENzc0NsYXNzZXMgfSBmcm9tICdAbWF0ZXJpYWwvbGlzdC9jb25zdGFudHMnO1xuaW1wb3J0IHsgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL21lbnUtc3VyZmFjZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIERlZmF1bHRGb2N1c1N0YXRlLCBudW1iZXJzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIE1EQ01lbnVGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ01lbnVGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ01lbnVGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgTURDTWVudUZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5jbG9zZUFuaW1hdGlvbkVuZFRpbWVySWRfID0gMDtcbiAgICAgICAgX3RoaXMuZGVmYXVsdEZvY3VzU3RhdGVfID0gRGVmYXVsdEZvY3VzU3RhdGUuTElTVF9ST09UO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENNZW51Rm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ01lbnVGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTWVudUZvdW5kYXRpb24sIFwibnVtYmVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlcnM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENNZW51Rm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAc2VlIHtAbGluayBNRENNZW51QWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm4gdHlwZXMuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzVG9FbGVtZW50QXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzRnJvbUVsZW1lbnRBdEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgYWRkQXR0cmlidXRlVG9FbGVtZW50QXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUF0dHJpYnV0ZUZyb21FbGVtZW50QXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGVsZW1lbnRDb250YWluc0NsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBjbG9zZVN1cmZhY2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBnZXRFbGVtZW50SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIC0xOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeVNlbGVjdGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZ2V0TWVudUl0ZW1Db3VudDogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgICAgICAgICBmb2N1c0l0ZW1BdEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZm9jdXNMaXN0Um9vdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldFNlbGVjdGVkU2libGluZ09mSXRlbUF0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIC0xOyB9LFxuICAgICAgICAgICAgICAgIGlzU2VsZWN0YWJsZUl0ZW1BdEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENNZW51Rm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VBbmltYXRpb25FbmRUaW1lcklkXykge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xvc2VBbmltYXRpb25FbmRUaW1lcklkXyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5jbG9zZVN1cmZhY2UoKTtcbiAgICB9O1xuICAgIE1EQ01lbnVGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVLZXlkb3duID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIga2V5ID0gZXZ0LmtleSwga2V5Q29kZSA9IGV2dC5rZXlDb2RlO1xuICAgICAgICB2YXIgaXNUYWIgPSBrZXkgPT09ICdUYWInIHx8IGtleUNvZGUgPT09IDk7XG4gICAgICAgIGlmIChpc1RhYikge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5jbG9zZVN1cmZhY2UoLyoqIHNraXBSZXN0b3JlRm9jdXMgKi8gdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ01lbnVGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVJdGVtQWN0aW9uID0gZnVuY3Rpb24gKGxpc3RJdGVtKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuYWRhcHRlcl8uZ2V0RWxlbWVudEluZGV4KGxpc3RJdGVtKTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5U2VsZWN0ZWQoeyBpbmRleDogaW5kZXggfSk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uY2xvc2VTdXJmYWNlKCk7XG4gICAgICAgIC8vIFdhaXQgZm9yIHRoZSBtZW51IHRvIGNsb3NlIGJlZm9yZSBhZGRpbmcvcmVtb3ZpbmcgY2xhc3NlcyB0aGF0IGFmZmVjdCBzdHlsZXMuXG4gICAgICAgIHRoaXMuY2xvc2VBbmltYXRpb25FbmRUaW1lcklkXyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gUmVjb21wdXRlIHRoZSBpbmRleCBpbiBjYXNlIHRoZSBtZW51IGNvbnRlbnRzIGhhdmUgY2hhbmdlZC5cbiAgICAgICAgICAgIHZhciByZWNvbXB1dGVkSW5kZXggPSBfdGhpcy5hZGFwdGVyXy5nZXRFbGVtZW50SW5kZXgobGlzdEl0ZW0pO1xuICAgICAgICAgICAgaWYgKF90aGlzLmFkYXB0ZXJfLmlzU2VsZWN0YWJsZUl0ZW1BdEluZGV4KHJlY29tcHV0ZWRJbmRleCkpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTZWxlY3RlZEluZGV4KHJlY29tcHV0ZWRJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5udW1iZXJzLlRSQU5TSVRJT05fQ0xPU0VfRFVSQVRJT04pO1xuICAgIH07XG4gICAgTURDTWVudUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZU1lbnVTdXJmYWNlT3BlbmVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuZGVmYXVsdEZvY3VzU3RhdGVfKSB7XG4gICAgICAgICAgICBjYXNlIERlZmF1bHRGb2N1c1N0YXRlLkZJUlNUX0lURU06XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5mb2N1c0l0ZW1BdEluZGV4KDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEZWZhdWx0Rm9jdXNTdGF0ZS5MQVNUX0lURU06XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5mb2N1c0l0ZW1BdEluZGV4KHRoaXMuYWRhcHRlcl8uZ2V0TWVudUl0ZW1Db3VudCgpIC0gMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERlZmF1bHRGb2N1c1N0YXRlLk5PTkU6XG4gICAgICAgICAgICAgICAgLy8gRG8gbm90aGluZy5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5mb2N1c0xpc3RSb290KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgZGVmYXVsdCBmb2N1cyBzdGF0ZSB3aGVyZSB0aGUgbWVudSBzaG91bGQgZm9jdXMgZXZlcnkgdGltZSB3aGVuIG1lbnVcbiAgICAgKiBpcyBvcGVuZWQuIEZvY3VzZXMgdGhlIGxpc3Qgcm9vdCAoYERlZmF1bHRGb2N1c1N0YXRlLkxJU1RfUk9PVGApIGVsZW1lbnQgYnlcbiAgICAgKiBkZWZhdWx0LlxuICAgICAqL1xuICAgIE1EQ01lbnVGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXREZWZhdWx0Rm9jdXNTdGF0ZSA9IGZ1bmN0aW9uIChmb2N1c1N0YXRlKSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdEZvY3VzU3RhdGVfID0gZm9jdXNTdGF0ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNlbGVjdHMgdGhlIGxpc3QgaXRlbSBhdCBgaW5kZXhgIHdpdGhpbiB0aGUgbWVudS5cbiAgICAgKiBAcGFyYW0gaW5kZXggSW5kZXggb2YgbGlzdCBpdGVtIHdpdGhpbiB0aGUgbWVudS5cbiAgICAgKi9cbiAgICBNRENNZW51Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0U2VsZWN0ZWRJbmRleCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB0aGlzLnZhbGlkYXRlZEluZGV4XyhpbmRleCk7XG4gICAgICAgIGlmICghdGhpcy5hZGFwdGVyXy5pc1NlbGVjdGFibGVJdGVtQXRJbmRleChpbmRleCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTURDTWVudUZvdW5kYXRpb246IE5vIHNlbGVjdGlvbiBncm91cCBhdCBzcGVjaWZpZWQgaW5kZXguJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByZXZTZWxlY3RlZEluZGV4ID0gdGhpcy5hZGFwdGVyXy5nZXRTZWxlY3RlZFNpYmxpbmdPZkl0ZW1BdEluZGV4KGluZGV4KTtcbiAgICAgICAgaWYgKHByZXZTZWxlY3RlZEluZGV4ID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQXR0cmlidXRlRnJvbUVsZW1lbnRBdEluZGV4KHByZXZTZWxlY3RlZEluZGV4LCBzdHJpbmdzLkFSSUFfQ0hFQ0tFRF9BVFRSKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3NGcm9tRWxlbWVudEF0SW5kZXgocHJldlNlbGVjdGVkSW5kZXgsIGNzc0NsYXNzZXMuTUVOVV9TRUxFQ1RFRF9MSVNUX0lURU0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3NUb0VsZW1lbnRBdEluZGV4KGluZGV4LCBjc3NDbGFzc2VzLk1FTlVfU0VMRUNURURfTElTVF9JVEVNKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRBdHRyaWJ1dGVUb0VsZW1lbnRBdEluZGV4KGluZGV4LCBzdHJpbmdzLkFSSUFfQ0hFQ0tFRF9BVFRSLCAndHJ1ZScpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZW5hYmxlZCBzdGF0ZSB0byBpc0VuYWJsZWQgZm9yIHRoZSBtZW51IGl0ZW0gYXQgdGhlIGdpdmVuIGluZGV4LlxuICAgICAqIEBwYXJhbSBpbmRleCBJbmRleCBvZiB0aGUgbWVudSBpdGVtXG4gICAgICogQHBhcmFtIGlzRW5hYmxlZCBUaGUgZGVzaXJlZCBlbmFibGVkIHN0YXRlIG9mIHRoZSBtZW51IGl0ZW0uXG4gICAgICovXG4gICAgTURDTWVudUZvdW5kYXRpb24ucHJvdG90eXBlLnNldEVuYWJsZWQgPSBmdW5jdGlvbiAoaW5kZXgsIGlzRW5hYmxlZCkge1xuICAgICAgICB0aGlzLnZhbGlkYXRlZEluZGV4XyhpbmRleCk7XG4gICAgICAgIGlmIChpc0VuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3NGcm9tRWxlbWVudEF0SW5kZXgoaW5kZXgsIGxpc3RDc3NDbGFzc2VzLkxJU1RfSVRFTV9ESVNBQkxFRF9DTEFTUyk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZEF0dHJpYnV0ZVRvRWxlbWVudEF0SW5kZXgoaW5kZXgsIHN0cmluZ3MuQVJJQV9ESVNBQkxFRF9BVFRSLCAnZmFsc2UnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3NUb0VsZW1lbnRBdEluZGV4KGluZGV4LCBsaXN0Q3NzQ2xhc3Nlcy5MSVNUX0lURU1fRElTQUJMRURfQ0xBU1MpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRBdHRyaWJ1dGVUb0VsZW1lbnRBdEluZGV4KGluZGV4LCBzdHJpbmdzLkFSSUFfRElTQUJMRURfQVRUUiwgJ3RydWUnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDTWVudUZvdW5kYXRpb24ucHJvdG90eXBlLnZhbGlkYXRlZEluZGV4XyA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB2YXIgbWVudVNpemUgPSB0aGlzLmFkYXB0ZXJfLmdldE1lbnVJdGVtQ291bnQoKTtcbiAgICAgICAgdmFyIGlzSW5kZXhJblJhbmdlID0gaW5kZXggPj0gMCAmJiBpbmRleCA8IG1lbnVTaXplO1xuICAgICAgICBpZiAoIWlzSW5kZXhJblJhbmdlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01EQ01lbnVGb3VuZGF0aW9uOiBObyBsaXN0IGl0ZW0gYXQgc3BlY2lmaWVkIGluZGV4LicpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTURDTWVudUZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ01lbnVGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDTWVudUZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0NvbXBvbmVudCB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBjbG9zZXN0IH0gZnJvbSAnQG1hdGVyaWFsL2RvbS9wb255ZmlsbCc7XG5pbXBvcnQgeyBNRENMaXN0IH0gZnJvbSAnQG1hdGVyaWFsL2xpc3QvY29tcG9uZW50JztcbmltcG9ydCB7IE1EQ0xpc3RGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2xpc3QvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBNRENNZW51U3VyZmFjZSB9IGZyb20gJ0BtYXRlcmlhbC9tZW51LXN1cmZhY2UvY29tcG9uZW50JztcbmltcG9ydCB7IE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9tZW51LXN1cmZhY2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgTURDTWVudUZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xudmFyIE1EQ01lbnUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDTWVudSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENNZW51KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE1EQ01lbnUuYXR0YWNoVG8gPSBmdW5jdGlvbiAocm9vdCkge1xuICAgICAgICByZXR1cm4gbmV3IE1EQ01lbnUocm9vdCk7XG4gICAgfTtcbiAgICBNRENNZW51LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKG1lbnVTdXJmYWNlRmFjdG9yeSwgbGlzdEZhY3RvcnkpIHtcbiAgICAgICAgaWYgKG1lbnVTdXJmYWNlRmFjdG9yeSA9PT0gdm9pZCAwKSB7IG1lbnVTdXJmYWNlRmFjdG9yeSA9IGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gbmV3IE1EQ01lbnVTdXJmYWNlKGVsKTsgfTsgfVxuICAgICAgICBpZiAobGlzdEZhY3RvcnkgPT09IHZvaWQgMCkgeyBsaXN0RmFjdG9yeSA9IGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gbmV3IE1EQ0xpc3QoZWwpOyB9OyB9XG4gICAgICAgIHRoaXMubWVudVN1cmZhY2VGYWN0b3J5XyA9IG1lbnVTdXJmYWNlRmFjdG9yeTtcbiAgICAgICAgdGhpcy5saXN0RmFjdG9yeV8gPSBsaXN0RmFjdG9yeTtcbiAgICB9O1xuICAgIE1EQ01lbnUucHJvdG90eXBlLmluaXRpYWxTeW5jV2l0aERPTSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5tZW51U3VyZmFjZV8gPSB0aGlzLm1lbnVTdXJmYWNlRmFjdG9yeV8odGhpcy5yb290Xyk7XG4gICAgICAgIHZhciBsaXN0ID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuTElTVF9TRUxFQ1RPUik7XG4gICAgICAgIGlmIChsaXN0KSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RfID0gdGhpcy5saXN0RmFjdG9yeV8obGlzdCk7XG4gICAgICAgICAgICB0aGlzLmxpc3RfLndyYXBGb2N1cyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RfID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUtleWRvd25fID0gZnVuY3Rpb24gKGV2dCkgeyByZXR1cm4gX3RoaXMuZm91bmRhdGlvbl8uaGFuZGxlS2V5ZG93bihldnQpOyB9O1xuICAgICAgICB0aGlzLmhhbmRsZUl0ZW1BY3Rpb25fID0gZnVuY3Rpb24gKGV2dCkgeyByZXR1cm4gX3RoaXMuZm91bmRhdGlvbl8uaGFuZGxlSXRlbUFjdGlvbihfdGhpcy5pdGVtc1tldnQuZGV0YWlsLmluZGV4XSk7IH07XG4gICAgICAgIHRoaXMuaGFuZGxlTWVudVN1cmZhY2VPcGVuZWRfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZm91bmRhdGlvbl8uaGFuZGxlTWVudVN1cmZhY2VPcGVuZWQoKTsgfTtcbiAgICAgICAgdGhpcy5tZW51U3VyZmFjZV8ubGlzdGVuKE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5zdHJpbmdzLk9QRU5FRF9FVkVOVCwgdGhpcy5oYW5kbGVNZW51U3VyZmFjZU9wZW5lZF8pO1xuICAgICAgICB0aGlzLmxpc3Rlbigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5ZG93bl8pO1xuICAgICAgICB0aGlzLmxpc3RlbihNRENMaXN0Rm91bmRhdGlvbi5zdHJpbmdzLkFDVElPTl9FVkVOVCwgdGhpcy5oYW5kbGVJdGVtQWN0aW9uXyk7XG4gICAgfTtcbiAgICBNRENNZW51LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5saXN0Xykge1xuICAgICAgICAgICAgdGhpcy5saXN0Xy5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tZW51U3VyZmFjZV8uZGVzdHJveSgpO1xuICAgICAgICB0aGlzLm1lbnVTdXJmYWNlXy51bmxpc3RlbihNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uc3RyaW5ncy5PUEVORURfRVZFTlQsIHRoaXMuaGFuZGxlTWVudVN1cmZhY2VPcGVuZWRfKTtcbiAgICAgICAgdGhpcy51bmxpc3Rlbigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5ZG93bl8pO1xuICAgICAgICB0aGlzLnVubGlzdGVuKE1EQ0xpc3RGb3VuZGF0aW9uLnN0cmluZ3MuQUNUSU9OX0VWRU5ULCB0aGlzLmhhbmRsZUl0ZW1BY3Rpb25fKTtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTWVudS5wcm90b3R5cGUsIFwib3BlblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWVudVN1cmZhY2VfLmlzT3BlbigpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZW51U3VyZmFjZV8ub3BlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZW51U3VyZmFjZV8uY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ01lbnUucHJvdG90eXBlLCBcIndyYXBGb2N1c1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlzdF8gPyB0aGlzLmxpc3RfLndyYXBGb2N1cyA6IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGlzdF8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RfLndyYXBGb2N1cyA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTWVudS5wcm90b3R5cGUsIFwiaXRlbXNcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJuIHRoZSBpdGVtcyB3aXRoaW4gdGhlIG1lbnUuIE5vdGUgdGhhdCB0aGlzIG9ubHkgY29udGFpbnMgdGhlIHNldCBvZiBlbGVtZW50cyB3aXRoaW5cbiAgICAgICAgICogdGhlIGl0ZW1zIGNvbnRhaW5lciB0aGF0IGFyZSBwcm9wZXIgbGlzdCBpdGVtcywgYW5kIG5vdCBzdXBwbGVtZW50YWwgLyBwcmVzZW50YXRpb25hbCBET01cbiAgICAgICAgICogZWxlbWVudHMuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RfID8gdGhpcy5saXN0Xy5saXN0RWxlbWVudHMgOiBbXTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ01lbnUucHJvdG90eXBlLCBcInF1aWNrT3BlblwiLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKHF1aWNrT3Blbikge1xuICAgICAgICAgICAgdGhpcy5tZW51U3VyZmFjZV8ucXVpY2tPcGVuID0gcXVpY2tPcGVuO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBTZXRzIGRlZmF1bHQgZm9jdXMgc3RhdGUgd2hlcmUgdGhlIG1lbnUgc2hvdWxkIGZvY3VzIGV2ZXJ5IHRpbWUgd2hlbiBtZW51XG4gICAgICogaXMgb3BlbmVkLiBGb2N1c2VzIHRoZSBsaXN0IHJvb3QgKGBEZWZhdWx0Rm9jdXNTdGF0ZS5MSVNUX1JPT1RgKSBlbGVtZW50IGJ5XG4gICAgICogZGVmYXVsdC5cbiAgICAgKiBAcGFyYW0gZm9jdXNTdGF0ZSBEZWZhdWx0IGZvY3VzIHN0YXRlLlxuICAgICAqL1xuICAgIE1EQ01lbnUucHJvdG90eXBlLnNldERlZmF1bHRGb2N1c1N0YXRlID0gZnVuY3Rpb24gKGZvY3VzU3RhdGUpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXREZWZhdWx0Rm9jdXNTdGF0ZShmb2N1c1N0YXRlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBjb3JuZXIgRGVmYXVsdCBhbmNob3IgY29ybmVyIGFsaWdubWVudCBvZiB0b3AtbGVmdCBtZW51IGNvcm5lci5cbiAgICAgKi9cbiAgICBNRENNZW51LnByb3RvdHlwZS5zZXRBbmNob3JDb3JuZXIgPSBmdW5jdGlvbiAoY29ybmVyKSB7XG4gICAgICAgIHRoaXMubWVudVN1cmZhY2VfLnNldEFuY2hvckNvcm5lcihjb3JuZXIpO1xuICAgIH07XG4gICAgTURDTWVudS5wcm90b3R5cGUuc2V0QW5jaG9yTWFyZ2luID0gZnVuY3Rpb24gKG1hcmdpbikge1xuICAgICAgICB0aGlzLm1lbnVTdXJmYWNlXy5zZXRBbmNob3JNYXJnaW4obWFyZ2luKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGxpc3QgaXRlbSBhcyB0aGUgc2VsZWN0ZWQgcm93IGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gICAgICogQHBhcmFtIGluZGV4IEluZGV4IG9mIGxpc3QgaXRlbSB3aXRoaW4gbWVudS5cbiAgICAgKi9cbiAgICBNRENNZW51LnByb3RvdHlwZS5zZXRTZWxlY3RlZEluZGV4ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0U2VsZWN0ZWRJbmRleChpbmRleCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBlbmFibGVkIHN0YXRlIHRvIGlzRW5hYmxlZCBmb3IgdGhlIG1lbnUgaXRlbSBhdCB0aGUgZ2l2ZW4gaW5kZXguXG4gICAgICogQHBhcmFtIGluZGV4IEluZGV4IG9mIHRoZSBtZW51IGl0ZW1cbiAgICAgKiBAcGFyYW0gaXNFbmFibGVkIFRoZSBkZXNpcmVkIGVuYWJsZWQgc3RhdGUgb2YgdGhlIG1lbnUgaXRlbS5cbiAgICAgKi9cbiAgICBNRENNZW51LnByb3RvdHlwZS5zZXRFbmFibGVkID0gZnVuY3Rpb24gKGluZGV4LCBpc0VuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRFbmFibGVkKGluZGV4LCBpc0VuYWJsZWQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiBUaGUgaXRlbSB3aXRoaW4gdGhlIG1lbnUgYXQgdGhlIGluZGV4IHNwZWNpZmllZC5cbiAgICAgKi9cbiAgICBNRENNZW51LnByb3RvdHlwZS5nZXRPcHRpb25CeUluZGV4ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgICAgIGlmIChpbmRleCA8IGl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNbaW5kZXhdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ01lbnUucHJvdG90eXBlLnNldEZpeGVkUG9zaXRpb24gPSBmdW5jdGlvbiAoaXNGaXhlZCkge1xuICAgICAgICB0aGlzLm1lbnVTdXJmYWNlXy5zZXRGaXhlZFBvc2l0aW9uKGlzRml4ZWQpO1xuICAgIH07XG4gICAgTURDTWVudS5wcm90b3R5cGUuaG9pc3RNZW51VG9Cb2R5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm1lbnVTdXJmYWNlXy5ob2lzdE1lbnVUb0JvZHkoKTtcbiAgICB9O1xuICAgIE1EQ01lbnUucHJvdG90eXBlLnNldElzSG9pc3RlZCA9IGZ1bmN0aW9uIChpc0hvaXN0ZWQpIHtcbiAgICAgICAgdGhpcy5tZW51U3VyZmFjZV8uc2V0SXNIb2lzdGVkKGlzSG9pc3RlZCk7XG4gICAgfTtcbiAgICBNRENNZW51LnByb3RvdHlwZS5zZXRBYnNvbHV0ZVBvc2l0aW9uID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgdGhpcy5tZW51U3VyZmFjZV8uc2V0QWJzb2x1dGVQb3NpdGlvbih4LCB5KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGVsZW1lbnQgdGhhdCB0aGUgbWVudS1zdXJmYWNlIGlzIGFuY2hvcmVkIHRvLlxuICAgICAqL1xuICAgIE1EQ01lbnUucHJvdG90eXBlLnNldEFuY2hvckVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB0aGlzLm1lbnVTdXJmYWNlXy5hbmNob3JFbGVtZW50ID0gZWxlbWVudDtcbiAgICB9O1xuICAgIE1EQ01lbnUucHJvdG90eXBlLmdldERlZmF1bHRGb3VuZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBETyBOT1QgSU5MSU5FIHRoaXMgdmFyaWFibGUuIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCBmb3VuZGF0aW9ucyB0YWtlIGEgUGFydGlhbDxNRENGb29BZGFwdGVyPi5cbiAgICAgICAgLy8gVG8gZW5zdXJlIHdlIGRvbid0IGFjY2lkZW50YWxseSBvbWl0IGFueSBtZXRob2RzLCB3ZSBuZWVkIGEgc2VwYXJhdGUsIHN0cm9uZ2x5IHR5cGVkIGFkYXB0ZXIgdmFyaWFibGUuXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgIHZhciBhZGFwdGVyID0ge1xuICAgICAgICAgICAgYWRkQ2xhc3NUb0VsZW1lbnRBdEluZGV4OiBmdW5jdGlvbiAoaW5kZXgsIGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBsaXN0ID0gX3RoaXMuaXRlbXM7XG4gICAgICAgICAgICAgICAgbGlzdFtpbmRleF0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzRnJvbUVsZW1lbnRBdEluZGV4OiBmdW5jdGlvbiAoaW5kZXgsIGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBsaXN0ID0gX3RoaXMuaXRlbXM7XG4gICAgICAgICAgICAgICAgbGlzdFtpbmRleF0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZEF0dHJpYnV0ZVRvRWxlbWVudEF0SW5kZXg6IGZ1bmN0aW9uIChpbmRleCwgYXR0ciwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdCA9IF90aGlzLml0ZW1zO1xuICAgICAgICAgICAgICAgIGxpc3RbaW5kZXhdLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVtb3ZlQXR0cmlidXRlRnJvbUVsZW1lbnRBdEluZGV4OiBmdW5jdGlvbiAoaW5kZXgsIGF0dHIpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdCA9IF90aGlzLml0ZW1zO1xuICAgICAgICAgICAgICAgIGxpc3RbaW5kZXhdLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbGVtZW50Q29udGFpbnNDbGFzczogZnVuY3Rpb24gKGVsZW1lbnQsIGNsYXNzTmFtZSkgeyByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIGNsb3NlU3VyZmFjZTogZnVuY3Rpb24gKHNraXBSZXN0b3JlRm9jdXMpIHsgcmV0dXJuIF90aGlzLm1lbnVTdXJmYWNlXy5jbG9zZShza2lwUmVzdG9yZUZvY3VzKTsgfSxcbiAgICAgICAgICAgIGdldEVsZW1lbnRJbmRleDogZnVuY3Rpb24gKGVsZW1lbnQpIHsgcmV0dXJuIF90aGlzLml0ZW1zLmluZGV4T2YoZWxlbWVudCk7IH0sXG4gICAgICAgICAgICBub3RpZnlTZWxlY3RlZDogZnVuY3Rpb24gKGV2dERhdGEpIHsgcmV0dXJuIF90aGlzLmVtaXQoc3RyaW5ncy5TRUxFQ1RFRF9FVkVOVCwge1xuICAgICAgICAgICAgICAgIGluZGV4OiBldnREYXRhLmluZGV4LFxuICAgICAgICAgICAgICAgIGl0ZW06IF90aGlzLml0ZW1zW2V2dERhdGEuaW5kZXhdLFxuICAgICAgICAgICAgfSk7IH0sXG4gICAgICAgICAgICBnZXRNZW51SXRlbUNvdW50OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5pdGVtcy5sZW5ndGg7IH0sXG4gICAgICAgICAgICBmb2N1c0l0ZW1BdEluZGV4OiBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIF90aGlzLml0ZW1zW2luZGV4XS5mb2N1cygpOyB9LFxuICAgICAgICAgICAgZm9jdXNMaXN0Um9vdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihzdHJpbmdzLkxJU1RfU0VMRUNUT1IpLmZvY3VzKCk7IH0sXG4gICAgICAgICAgICBpc1NlbGVjdGFibGVJdGVtQXRJbmRleDogZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiAhIWNsb3Nlc3QoX3RoaXMuaXRlbXNbaW5kZXhdLCBcIi5cIiArIGNzc0NsYXNzZXMuTUVOVV9TRUxFQ1RJT05fR1JPVVApOyB9LFxuICAgICAgICAgICAgZ2V0U2VsZWN0ZWRTaWJsaW5nT2ZJdGVtQXRJbmRleDogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGlvbkdyb3VwRWwgPSBjbG9zZXN0KF90aGlzLml0ZW1zW2luZGV4XSwgXCIuXCIgKyBjc3NDbGFzc2VzLk1FTlVfU0VMRUNUSU9OX0dST1VQKTtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWRJdGVtRWwgPSBzZWxlY3Rpb25Hcm91cEVsLnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBjc3NDbGFzc2VzLk1FTlVfU0VMRUNURURfTElTVF9JVEVNKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRJdGVtRWwgPyBfdGhpcy5pdGVtcy5pbmRleE9mKHNlbGVjdGVkSXRlbUVsKSA6IC0xO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgcmV0dXJuIG5ldyBNRENNZW51Rm91bmRhdGlvbihhZGFwdGVyKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENNZW51O1xufShNRENDb21wb25lbnQpKTtcbmV4cG9ydCB7IE1EQ01lbnUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudC5qcy5tYXAiLCI8ZGl2XG4gIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgdXNlOmZvcndhcmRFdmVudHNcbiAgY2xhc3M9XCJcbiAgICBtZGMtbWVudS1zdXJmYWNlXG4gICAge2NsYXNzTmFtZX1cbiAgICB7Zml4ZWQgPyAnbWRjLW1lbnUtc3VyZmFjZS0tZml4ZWQnIDogJyd9XG4gICAge2lzU3RhdGljID8gJ21kYy1tZW51LXN1cmZhY2UtLW9wZW4nIDogJyd9XG4gICAge2lzU3RhdGljID8gJ3NtdWktbWVudS1zdXJmYWNlLS1zdGF0aWMnIDogJyd9XG4gIFwiXG4gIG9uOk1EQ01lbnVTdXJmYWNlOmNsb3NlZD17dXBkYXRlT3Blbn0gb246TURDTWVudVN1cmZhY2U6b3BlbmVkPXt1cGRhdGVPcGVufVxuICB7Li4uZXhjbHVkZSgkJHByb3BzLCBbJ3VzZScsICdjbGFzcycsICdzdGF0aWMnLCAnYW5jaG9yJywgJ2ZpeGVkJywgJ29wZW4nLCAncXVpY2tPcGVuJywgJ2FuY2hvckVsZW1lbnQnLCAnYW5jaG9yQ29ybmVyJywgJ2VsZW1lbnQnXSl9XG4+PHNsb3Q+PC9zbG90PjwvZGl2PlxuXG48c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgaW1wb3J0IHtDb3JuZXIsIENvcm5lckJpdH0gZnJvbSAnQG1hdGVyaWFsL21lbnUtc3VyZmFjZSc7XG5cbiAgZXhwb3J0IHtDb3JuZXIsIENvcm5lckJpdH07XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHtNRENNZW51U3VyZmFjZX0gZnJvbSAnQG1hdGVyaWFsL21lbnUtc3VyZmFjZSc7XG4gIGltcG9ydCB7b25Nb3VudCwgb25EZXN0cm95LCBnZXRDb250ZXh0LCBzZXRDb250ZXh0fSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQge2N1cnJlbnRfY29tcG9uZW50fSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQge2ZvcndhcmRFdmVudHNCdWlsZGVyfSBmcm9tICdAc211aS9jb21tb24vZm9yd2FyZEV2ZW50cy5qcyc7XG4gIGltcG9ydCB7ZXhjbHVkZX0gZnJvbSAnQHNtdWkvY29tbW9uL2V4Y2x1ZGUuanMnO1xuICBpbXBvcnQge3VzZUFjdGlvbnN9IGZyb20gJ0BzbXVpL2NvbW1vbi91c2VBY3Rpb25zLmpzJztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoY3VycmVudF9jb21wb25lbnQsIFsnTURDTWVudVN1cmZhY2U6Y2xvc2VkJywgJ01EQ01lbnVTdXJmYWNlOm9wZW5lZCddKTtcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gIGV4cG9ydCB7Y2xhc3NOYW1lIGFzIGNsYXNzfTtcbiAgbGV0IGlzU3RhdGljID0gZmFsc2U7XG4gIGV4cG9ydCB7aXNTdGF0aWMgYXMgc3RhdGljfTtcbiAgZXhwb3J0IGxldCBhbmNob3IgPSB0cnVlO1xuICBleHBvcnQgbGV0IGZpeGVkID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgb3BlbiA9IGlzU3RhdGljO1xuICBleHBvcnQgbGV0IHF1aWNrT3BlbiA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGFuY2hvckVsZW1lbnQgPSBudWxsO1xuICBleHBvcnQgbGV0IGFuY2hvckNvcm5lciA9IG51bGw7XG5cbiAgZXhwb3J0IGxldCBlbGVtZW50ID0gdW5kZWZpbmVkOyAvLyBUaGlzIGlzIGV4cG9ydGVkIGJlY2F1c2UgTWVudSBuZWVkcyBpdC5cbiAgbGV0IG1lbnVTdXJmYWNlO1xuICBsZXQgaW5zdGFudGlhdGUgPSBnZXRDb250ZXh0KCdTTVVJOm1lbnUtc3VyZmFjZTppbnN0YW50aWF0ZScpO1xuICBsZXQgZ2V0SW5zdGFuY2UgPSBnZXRDb250ZXh0KCdTTVVJOm1lbnUtc3VyZmFjZTpnZXRJbnN0YW5jZScpO1xuXG4gIHNldENvbnRleHQoJ1NNVUk6bGlzdDpyb2xlJywgJ21lbnUnKTtcbiAgc2V0Q29udGV4dCgnU01VSTpsaXN0Oml0ZW06cm9sZScsICdtZW51aXRlbScpO1xuXG4gICQ6IGlmIChlbGVtZW50ICYmIGFuY2hvciAmJiAhZWxlbWVudC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnbWRjLW1lbnUtc3VyZmFjZS0tYW5jaG9yJykpIHtcbiAgICBlbGVtZW50LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnbWRjLW1lbnUtc3VyZmFjZS0tYW5jaG9yJyk7XG4gICAgYW5jaG9yRWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgfVxuXG4gICQ6IGlmIChtZW51U3VyZmFjZSAmJiBtZW51U3VyZmFjZS5pc09wZW4oKSAhPT0gb3Blbikge1xuICAgIGlmIChvcGVuKSB7XG4gICAgICBtZW51U3VyZmFjZS5vcGVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbnVTdXJmYWNlLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgJDogaWYgKG1lbnVTdXJmYWNlICYmIG1lbnVTdXJmYWNlLnF1aWNrT3BlbiAhPT0gcXVpY2tPcGVuKSB7XG4gICAgbWVudVN1cmZhY2UucXVpY2tPcGVuID0gcXVpY2tPcGVuO1xuICB9XG5cbiAgJDogaWYgKG1lbnVTdXJmYWNlICYmIG1lbnVTdXJmYWNlLmFuY2hvckVsZW1lbnQgIT09IGFuY2hvckVsZW1lbnQpIHtcbiAgICBtZW51U3VyZmFjZS5hbmNob3JFbGVtZW50ID0gYW5jaG9yRWxlbWVudDtcbiAgfVxuXG4gIGxldCBvbGRGaXhlZCA9IG51bGw7XG4gICQ6IGlmIChtZW51U3VyZmFjZSAmJiBvbGRGaXhlZCAhPT0gZml4ZWQpIHtcbiAgICBtZW51U3VyZmFjZS5zZXRGaXhlZFBvc2l0aW9uKGZpeGVkKTtcbiAgICBvbGRGaXhlZCA9IGZpeGVkO1xuICB9XG5cbiAgJDogaWYgKG1lbnVTdXJmYWNlICYmIGFuY2hvckNvcm5lciAhPSBudWxsKSB7XG4gICAgaWYgKENvcm5lci5oYXNPd25Qcm9wZXJ0eShhbmNob3JDb3JuZXIpKSB7XG4gICAgICBtZW51U3VyZmFjZS5zZXRBbmNob3JDb3JuZXIoQ29ybmVyW2FuY2hvckNvcm5lcl0pO1xuICAgIH0gZWxzZSBpZiAoQ29ybmVyQml0Lmhhc093blByb3BlcnR5KGFuY2hvckNvcm5lcikpIHtcbiAgICAgIG1lbnVTdXJmYWNlLnNldEFuY2hvckNvcm5lcihDb3JuZXJbYW5jaG9yQ29ybmVyXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbnVTdXJmYWNlLnNldEFuY2hvckNvcm5lcihhbmNob3JDb3JuZXIpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91bnQoYXN5bmMgKCkgPT4ge1xuICAgIGlmIChpbnN0YW50aWF0ZSAhPT0gZmFsc2UpIHtcbiAgICAgIG1lbnVTdXJmYWNlID0gbmV3IE1EQ01lbnVTdXJmYWNlKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZW51U3VyZmFjZSA9IGF3YWl0IGdldEluc3RhbmNlKCk7XG4gICAgfVxuICB9KTtcblxuICBvbkRlc3Ryb3koKCkgPT4ge1xuICAgIGlmIChhbmNob3IpIHtcbiAgICAgIGVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ21kYy1tZW51LXN1cmZhY2UtLWFuY2hvcicpO1xuICAgIH1cbiAgICBsZXQgaXNIb2lzdGVkID0gZmFsc2U7XG4gICAgaWYgKG1lbnVTdXJmYWNlKSB7XG4gICAgICBpc0hvaXN0ZWQgPSBtZW51U3VyZmFjZS5mb3VuZGF0aW9uXy5pc0hvaXN0ZWRFbGVtZW50XztcbiAgICB9XG4gICAgaWYgKGluc3RhbnRpYXRlICE9PSBmYWxzZSkge1xuICAgICAgbWVudVN1cmZhY2UuZGVzdHJveSgpO1xuICAgIH1cbiAgICBpZiAoaXNIb2lzdGVkKSB7XG4gICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiB1cGRhdGVPcGVuKCkge1xuICAgIGlmIChtZW51U3VyZmFjZSkge1xuICAgICAgaWYgKGlzU3RhdGljKSB7XG4gICAgICAgIG9wZW4gPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3BlbiA9IG1lbnVTdXJmYWNlLmlzT3BlbigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRPcGVuKHZhbHVlKSB7XG4gICAgb3BlbiA9IHZhbHVlO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldEFuY2hvckNvcm5lciguLi5hcmdzKSB7XG4gICAgcmV0dXJuIG1lbnVTdXJmYWNlLnNldEFuY2hvckNvcm5lciguLi5hcmdzKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRBbmNob3JNYXJnaW4oLi4uYXJncykge1xuICAgIHJldHVybiBtZW51U3VyZmFjZS5zZXRBbmNob3JNYXJnaW4oLi4uYXJncyk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gc2V0Rml4ZWRQb3NpdGlvbihpc0ZpeGVkLCAuLi5hcmdzKSB7XG4gICAgZml4ZWQgPSBpc0ZpeGVkO1xuICAgIHJldHVybiBtZW51U3VyZmFjZS5zZXRGaXhlZFBvc2l0aW9uKGlzRml4ZWQsIC4uLmFyZ3MpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldEFic29sdXRlUG9zaXRpb24oLi4uYXJncykge1xuICAgIHJldHVybiBtZW51U3VyZmFjZS5zZXRBYnNvbHV0ZVBvc2l0aW9uKC4uLmFyZ3MpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldE1lbnVTdXJmYWNlQW5jaG9yRWxlbWVudCguLi5hcmdzKSB7XG4gICAgcmV0dXJuIG1lbnVTdXJmYWNlLnNldE1lbnVTdXJmYWNlQW5jaG9yRWxlbWVudCguLi5hcmdzKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBob2lzdE1lbnVUb0JvZHkoLi4uYXJncykge1xuICAgIHJldHVybiBtZW51U3VyZmFjZS5ob2lzdE1lbnVUb0JvZHkoLi4uYXJncyk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gc2V0SXNIb2lzdGVkKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbWVudVN1cmZhY2Uuc2V0SXNIb2lzdGVkKC4uLmFyZ3MpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRGb3VuZGF0aW9uKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbWVudVN1cmZhY2UuZ2V0RGVmYXVsdEZvdW5kYXRpb24oLi4uYXJncyk7XG4gIH1cbjwvc2NyaXB0PiIsIjxNZW51U3VyZmFjZVxuICBiaW5kOmVsZW1lbnRcbiAgdXNlPXtbZm9yd2FyZEV2ZW50cywgLi4udXNlXX1cbiAgY2xhc3M9XCJtZGMtbWVudSB7Y2xhc3NOYW1lfVwiXG4gIG9uOk1EQ01lbnU6c2VsZWN0ZWQ9e3VwZGF0ZU9wZW59XG4gIG9uOk1EQ01lbnVTdXJmYWNlOmNsb3NlZD17dXBkYXRlT3Blbn0gb246TURDTWVudVN1cmZhY2U6b3BlbmVkPXt1cGRhdGVPcGVufVxuICB7Li4uZXhjbHVkZSgkJHByb3BzLCBbJ3VzZScsICdjbGFzcycsICd3cmFwRm9jdXMnXSl9XG4+PHNsb3Q+PC9zbG90PjwvTWVudVN1cmZhY2U+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7TURDTWVudX0gZnJvbSAnQG1hdGVyaWFsL21lbnUnO1xuICBpbXBvcnQge29uTW91bnQsIG9uRGVzdHJveSwgZ2V0Q29udGV4dCwgc2V0Q29udGV4dH0gZnJvbSAnc3ZlbHRlJztcbiAgaW1wb3J0IHtjdXJyZW50X2NvbXBvbmVudH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHtmb3J3YXJkRXZlbnRzQnVpbGRlcn0gZnJvbSAnQHNtdWkvY29tbW9uL2ZvcndhcmRFdmVudHMuanMnO1xuICBpbXBvcnQge2V4Y2x1ZGV9IGZyb20gJ0BzbXVpL2NvbW1vbi9leGNsdWRlLmpzJztcbiAgaW1wb3J0IHt1c2VBY3Rpb25zfSBmcm9tICdAc211aS9jb21tb24vdXNlQWN0aW9ucy5qcyc7XG4gIGltcG9ydCBNZW51U3VyZmFjZSwge0Nvcm5lciwgQ29ybmVyQml0fSBmcm9tICdAc211aS9tZW51LXN1cmZhY2UvTWVudVN1cmZhY2Uuc3ZlbHRlJztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoY3VycmVudF9jb21wb25lbnQsIFsnTURDTWVudTpzZWxlY3RlZCcsICdNRENNZW51U3VyZmFjZTpjbG9zZWQnLCAnTURDTWVudVN1cmZhY2U6b3BlbmVkJ10pO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG4gIGxldCBjbGFzc05hbWUgPSAnJztcbiAgZXhwb3J0IHtjbGFzc05hbWUgYXMgY2xhc3N9O1xuICBsZXQgaXNTdGF0aWMgPSBmYWxzZTtcbiAgZXhwb3J0IHtpc1N0YXRpYyBhcyBzdGF0aWN9OyAvLyBQdXJwb3NlbHkgb21pdHRlZCBmcm9tIHRoZSBleGNsdWRlIGNhbGwgYWJvdmUuXG4gIGV4cG9ydCBsZXQgb3BlbiA9IGlzU3RhdGljOyAvLyBQdXJwb3NlbHkgb21pdHRlZCBmcm9tIHRoZSBleGNsdWRlIGNhbGwgYWJvdmUuXG4gIGV4cG9ydCBsZXQgcXVpY2tPcGVuID0gZmFsc2U7IC8vIFB1cnBvc2VseSBvbWl0dGVkIGZyb20gdGhlIGV4Y2x1ZGUgY2FsbCBhYm92ZS5cbiAgZXhwb3J0IGxldCBhbmNob3JDb3JuZXIgPSBudWxsOyAvLyBQdXJwb3NlbHkgb21pdHRlZCBmcm9tIHRoZSBleGNsdWRlIGNhbGwgYWJvdmUuXG4gIGV4cG9ydCBsZXQgd3JhcEZvY3VzID0gZmFsc2U7XG5cbiAgbGV0IGVsZW1lbnQ7XG4gIGxldCBtZW51O1xuICBsZXQgaW5zdGFudGlhdGUgPSBnZXRDb250ZXh0KCdTTVVJOm1lbnU6aW5zdGFudGlhdGUnKTtcbiAgbGV0IGdldEluc3RhbmNlID0gZ2V0Q29udGV4dCgnU01VSTptZW51OmdldEluc3RhbmNlJyk7XG4gIGxldCBtZW51U3VyZmFjZVByb21pc2VSZXNvbHZlO1xuICBsZXQgbWVudVN1cmZhY2VQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBtZW51U3VyZmFjZVByb21pc2VSZXNvbHZlID0gcmVzb2x2ZSk7XG4gIGxldCBsaXN0UHJvbWlzZVJlc29sdmU7XG4gIGxldCBsaXN0UHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gbGlzdFByb21pc2VSZXNvbHZlID0gcmVzb2x2ZSk7XG5cbiAgc2V0Q29udGV4dCgnU01VSTptZW51LXN1cmZhY2U6aW5zdGFudGlhdGUnLCBmYWxzZSk7XG4gIHNldENvbnRleHQoJ1NNVUk6bWVudS1zdXJmYWNlOmdldEluc3RhbmNlJywgZ2V0TWVudVN1cmZhY2VJbnN0YW5jZVByb21pc2UpO1xuICBzZXRDb250ZXh0KCdTTVVJOmxpc3Q6aW5zdGFudGlhdGUnLCBmYWxzZSk7XG4gIHNldENvbnRleHQoJ1NNVUk6bGlzdDpnZXRJbnN0YW5jZScsIGdldExpc3RJbnN0YW5jZVByb21pc2UpO1xuXG4gICQ6IGlmIChtZW51ICYmIG1lbnUub3BlbiAhPT0gb3Blbikge1xuICAgIGlmIChpc1N0YXRpYykge1xuICAgICAgb3BlbiA9IHRydWU7XG4gICAgfVxuICAgIG1lbnUub3BlbiA9IG9wZW47XG4gIH1cblxuICAkOiBpZiAobWVudSAmJiBtZW51LndyYXBGb2N1cyAhPT0gd3JhcEZvY3VzKSB7XG4gICAgbWVudS53cmFwRm9jdXMgPSB3cmFwRm9jdXM7XG4gIH1cblxuICAkOiBpZiAobWVudSkge1xuICAgIG1lbnUucXVpY2tPcGVuID0gcXVpY2tPcGVuO1xuICB9XG5cbiAgJDogaWYgKG1lbnUgJiYgYW5jaG9yQ29ybmVyICE9IG51bGwpIHtcbiAgICBpZiAoQ29ybmVyLmhhc093blByb3BlcnR5KGFuY2hvckNvcm5lcikpIHtcbiAgICAgIG1lbnUuc2V0QW5jaG9yQ29ybmVyKENvcm5lclthbmNob3JDb3JuZXJdKTtcbiAgICB9IGVsc2UgaWYgKENvcm5lckJpdC5oYXNPd25Qcm9wZXJ0eShhbmNob3JDb3JuZXIpKSB7XG4gICAgICBtZW51LnNldEFuY2hvckNvcm5lcihDb3JuZXJbYW5jaG9yQ29ybmVyXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbnUuc2V0QW5jaG9yQ29ybmVyKGFuY2hvckNvcm5lcik7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VudChhc3luYyAoKSA9PiB7XG4gICAgaWYgKGluc3RhbnRpYXRlICE9PSBmYWxzZSkge1xuICAgICAgbWVudSA9IG5ldyBNRENNZW51KGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZW51ID0gYXdhaXQgZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG4gICAgbWVudVN1cmZhY2VQcm9taXNlUmVzb2x2ZShtZW51Lm1lbnVTdXJmYWNlXyk7XG4gICAgbGlzdFByb21pc2VSZXNvbHZlKG1lbnUubGlzdF8pO1xuICB9KTtcblxuICBvbkRlc3Ryb3koKCkgPT4ge1xuICAgIGlmIChpbnN0YW50aWF0ZSAhPT0gZmFsc2UpIHtcbiAgICAgIG1lbnUgJiYgbWVudS5kZXN0cm95KCk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBnZXRNZW51U3VyZmFjZUluc3RhbmNlUHJvbWlzZSgpIHtcbiAgICByZXR1cm4gbWVudVN1cmZhY2VQcm9taXNlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TGlzdEluc3RhbmNlUHJvbWlzZSgpIHtcbiAgICByZXR1cm4gbGlzdFByb21pc2U7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVPcGVuKCkge1xuICAgIG9wZW4gPSBtZW51Lm9wZW47XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gc2V0T3Blbih2YWx1ZSkge1xuICAgIG9wZW4gPSB2YWx1ZTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtcygpIHtcbiAgICByZXR1cm4gbWVudS5pdGVtcztcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0Rm9jdXNTdGF0ZSguLi5hcmdzKSB7XG4gICAgcmV0dXJuIG1lbnUuc2V0RGVmYXVsdEZvY3VzU3RhdGUoLi4uYXJncyk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gc2V0QW5jaG9yQ29ybmVyKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbWVudS5zZXRBbmNob3JDb3JuZXIoLi4uYXJncyk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gc2V0QW5jaG9yTWFyZ2luKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbWVudS5zZXRBbmNob3JNYXJnaW4oLi4uYXJncyk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gc2V0U2VsZWN0ZWRJbmRleCguLi5hcmdzKSB7XG4gICAgcmV0dXJuIG1lbnUuc2V0U2VsZWN0ZWRJbmRleCguLi5hcmdzKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRFbmFibGVkKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbWVudS5zZXRFbmFibGVkKC4uLmFyZ3MpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldE9wdGlvbkJ5SW5kZXgoLi4uYXJncykge1xuICAgIHJldHVybiBtZW51LmdldE9wdGlvbkJ5SW5kZXgoLi4uYXJncyk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gc2V0Rml4ZWRQb3NpdGlvbiguLi5hcmdzKSB7XG4gICAgcmV0dXJuIG1lbnUuc2V0Rml4ZWRQb3NpdGlvbiguLi5hcmdzKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBob2lzdE1lbnVUb0JvZHkoLi4uYXJncykge1xuICAgIHJldHVybiBtZW51LmhvaXN0TWVudVRvQm9keSguLi5hcmdzKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRJc0hvaXN0ZWQoLi4uYXJncykge1xuICAgIHJldHVybiBtZW51LnNldElzSG9pc3RlZCguLi5hcmdzKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRBYnNvbHV0ZVBvc2l0aW9uKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbWVudS5zZXRBYnNvbHV0ZVBvc2l0aW9uKC4uLmFyZ3MpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldEFuY2hvckVsZW1lbnQoLi4uYXJncykge1xuICAgIHJldHVybiBtZW51LnNldEFuY2hvckVsZW1lbnQoLi4uYXJncyk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdEZvdW5kYXRpb24oLi4uYXJncykge1xuICAgIHJldHVybiBtZW51LmdldERlZmF1bHRGb3VuZGF0aW9uKC4uLmFyZ3MpO1xuICB9XG48L3NjcmlwdD4iLCJpbXBvcnQge2NsYXNzQWRkZXJCdWlsZGVyfSBmcm9tICdAc211aS9jb21tb24vY2xhc3NBZGRlckJ1aWxkZXIuanMnO1xuaW1wb3J0IEdyYXBoaWMgZnJvbSAnQHNtdWkvbGlzdC9HcmFwaGljLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3NBZGRlckJ1aWxkZXIoe1xuICBjbGFzczogJ21kYy1tZW51X19zZWxlY3Rpb24tZ3JvdXAtaWNvbicsXG4gIGNvbXBvbmVudDogR3JhcGhpYyxcbiAgY29udGV4dHM6IHt9XG59KTsiLCI8c2NyaXB0PlxyXG4gIGltcG9ydCBCdXR0b24sIHsgR3JvdXAsIEdyb3VwSXRlbSwgTGFiZWwsIEljb24gfSBmcm9tIFwiQHNtdWkvYnV0dG9uXCI7XHJcbiAgaW1wb3J0IE1lbnUgZnJvbSBcIkBzbXVpL21lbnVcIjtcclxuICBpbXBvcnQgTGlzdCwgeyBJdGVtLCBTZXBhcmF0b3IsIFRleHQgfSBmcm9tIFwiQHNtdWkvbGlzdFwiO1xyXG4gIGltcG9ydCBQYWdlIGZyb20gXCIuL1BhZ2Uuc3ZlbHRlXCI7XHJcbiAgaW1wb3J0IEV4YW1wbGUgZnJvbSBcIi4vRXhhbXBsZS5zdmVsdGVcIjtcclxuXHJcbiAgbGV0IGNsaWNrZWQgPSAwO1xyXG4gIGxldCBtZW51O1xyXG4gIGxldCBtZW51MjtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgKiA6Z2xvYmFsKC5teUNsYXNzKSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgKiA6Z2xvYmFsKC5tZGMtYnV0dG9uLCAuc211aS1idXR0b25fX2dyb3VwKSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjRlbTtcclxuICB9XHJcblxyXG4gICogOmdsb2JhbCguc211aS1idXR0b25fX2dyb3VwIC5tZGMtYnV0dG9uKSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuPC9zdHlsZT5cclxuXHJcbjxQYWdlPlxyXG4gIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5CdXR0b248L3NwYW4+XHJcbiAgPHNwYW4gc2xvdD1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICBCdXR0b25zIGFsbG93IHVzZXJzIHRvIHRha2UgYWN0aW9ucywgYW5kIG1ha2UgY2hvaWNlcywgd2l0aCBhIHNpbmdsZSB0YXAuXHJcbiAgPC9zcGFuPlxyXG4gIDxzcGFuIHNsb3Q9XCJpbXBvcnRcIj5cclxuICAgIGltcG9ydCBSYWRpbyBmcm9tIFwiQHNtdWkvcmFkaW9cIjtcclxuICAgIDxiciAvPlxyXG4gICAgaW1wb3J0IEZvcm1GaWVsZCBmcm9tIFwiQHNtdWkvZm9ybS1maWVsZFwiO1xyXG4gIDwvc3Bhbj5cclxuICA8ZGl2IHNsb3Q9XCJjb250ZW50XCI+XHJcbiAgICA8RXhhbXBsZT5cclxuICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiPkNvbnRhaW5lZCBCdXR0b25zPC9zcGFuPlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJ1bmVsZXZhdGVkXCI+XHJcbiAgICAgICAgICA8TGFiZWw+UFJJTUFSWTwvTGFiZWw+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfVxyXG4gICAgICAgICAgdmFyaWFudD1cInVuZWxldmF0ZWRcIj5cclxuICAgICAgICAgIDxMYWJlbD5TRUNPTkRBUlk8L0xhYmVsPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwicmFpc2VkXCI+XHJcbiAgICAgICAgICA8TGFiZWw+UkFJU0VEPC9MYWJlbD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwicmFpc2VkXCI+XHJcbiAgICAgICAgICA8TGFiZWw+UkFJU0VEPC9MYWJlbD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInVuZWxldmF0ZWRcIiBkaXNhYmxlZD5cclxuICAgICAgICAgIDxMYWJlbD5EaXNhYmxlZDwvTGFiZWw+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9FeGFtcGxlPlxyXG4gICAgPEV4YW1wbGU+XHJcbiAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5PdXRsaW5lZCBCdXR0b25zPC9zcGFuPlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgPExhYmVsPk91dGxpbmVkPC9MYWJlbD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgIDxMYWJlbD5PdXRsaW5lZDwvTGFiZWw+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgPExhYmVsPkRpc2FibGVkPC9MYWJlbD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0V4YW1wbGU+XHJcbiAgICA8RXhhbXBsZT5cclxuICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiPlRleHQgQnV0dG9uczwvc3Bhbj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfT5cclxuICAgICAgICAgIDxMYWJlbD5EZWZhdWx0PC9MYWJlbD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfT5cclxuICAgICAgICAgIDxMYWJlbD5EZWZhdWx0PC9MYWJlbD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gZGlzYWJsZWQ+XHJcbiAgICAgICAgICA8TGFiZWw+RGlzYWJsZWQ8L0xhYmVsPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRXhhbXBsZT5cclxuICAgIDxFeGFtcGxlPlxyXG4gICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCI+QnV0dG9ucyB3aXRoIGljb25zPC9zcGFuPlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJ1bmVsZXZhdGVkXCI+XHJcbiAgICAgICAgICA8TGFiZWw+VW5lbGV2YXRlZDwvTGFiZWw+XHJcbiAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGU8L0ljb24+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJ1bmVsZXZhdGVkXCI+XHJcbiAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGU8L0ljb24+XHJcbiAgICAgICAgICA8TGFiZWw+VW5lbGV2YXRlZDwvTGFiZWw+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJyYWlzZWRcIj5cclxuICAgICAgICAgIDxMYWJlbD5SYWlzZWQ8L0xhYmVsPlxyXG4gICAgICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmZhdm9yaXRlPC9JY29uPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwicmFpc2VkXCI+XHJcbiAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGU8L0ljb24+XHJcbiAgICAgICAgICA8TGFiZWw+UmFpc2VkPC9MYWJlbD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcbiAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGU8L0ljb24+XHJcbiAgICAgICAgICA8TGFiZWw+T3V0bGluZWQ8L0xhYmVsPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgIDxMYWJlbD5PdXRsaW5lZDwvTGFiZWw+XHJcbiAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGU8L0ljb24+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PlxyXG4gICAgICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmZhdm9yaXRlPC9JY29uPlxyXG4gICAgICAgICAgPExhYmVsPkxlYWRpbmcgSWNvbjwvTGFiZWw+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PlxyXG4gICAgICAgICAgPExhYmVsPlRyYWlsaW5nIEljb248L0xhYmVsPlxyXG4gICAgICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmZhdm9yaXRlPC9JY29uPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PlxyXG4gICAgICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmZhdm9yaXRlPC9JY29uPlxyXG4gICAgICAgICAgPExhYmVsPkxlYWRpbmcgSWNvbjwvTGFiZWw+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30+XHJcbiAgICAgICAgICA8TGFiZWw+VHJhaWxpbmcgSWNvbjwvTGFiZWw+XHJcbiAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGU8L0ljb24+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9FeGFtcGxlPlxyXG4gICAgPEV4YW1wbGU+XHJcbiAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5WYXJpYXRpb25zPC9zcGFuPlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHJpcHBsZT17ZmFsc2V9PlxyXG4gICAgICAgICAgPExhYmVsPk5vIFJpcHBsZTwvTGFiZWw+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gcmlwcGxlPXtmYWxzZX0+XHJcbiAgICAgICAgICA8TGFiZWw+Tm8gUmlwcGxlPC9MYWJlbD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gZGVuc2U+XHJcbiAgICAgICAgICA8TGFiZWw+RGVuc2U8L0xhYmVsPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IGRlbnNlPlxyXG4gICAgICAgICAgPExhYmVsPkRlbnNlPC9MYWJlbD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gY2xhc3M9XCJteUNsYXNzXCI+XHJcbiAgICAgICAgICA8TGFiZWw+V2l0aCBhIENsYXNzPC9MYWJlbD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSBjbGFzcz1cIm15Q2xhc3NcIj5cclxuICAgICAgICAgIDxMYWJlbD5XaXRoIGEgQ2xhc3M8L0xhYmVsPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRXhhbXBsZT5cclxuICAgIDxFeGFtcGxlPlxyXG4gICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCI+QnV0dG9uIGdyb3Vwczwvc3Bhbj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEdyb3VwIHZhcmlhbnQ9XCJ1bmVsZXZhdGVkXCI+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJ1bmVsZXZhdGVkXCI+XHJcbiAgICAgICAgICAgIDxMYWJlbD5PbmU8L0xhYmVsPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJ1bmVsZXZhdGVkXCI+XHJcbiAgICAgICAgICAgIDxMYWJlbD5Ud288L0xhYmVsPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJ1bmVsZXZhdGVkXCI+XHJcbiAgICAgICAgICAgIDxMYWJlbD5UaHJlZTwvTGFiZWw+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0dyb3VwPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEdyb3VwIHZhcmlhbnQ9XCJyYWlzZWRcIj5cclxuICAgICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInJhaXNlZFwiPlxyXG4gICAgICAgICAgICA8TGFiZWw+T25lPC9MYWJlbD5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwicmFpc2VkXCI+XHJcbiAgICAgICAgICAgIDxMYWJlbD5Ud288L0xhYmVsPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJyYWlzZWRcIj5cclxuICAgICAgICAgICAgPExhYmVsPlRocmVlPC9MYWJlbD5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvR3JvdXA+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8R3JvdXAgdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgICA8TGFiZWw+T25lPC9MYWJlbD5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgICAgPExhYmVsPlR3bzwvTGFiZWw+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcbiAgICAgICAgICAgIDxMYWJlbD5UaHJlZTwvTGFiZWw+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0dyb3VwPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEdyb3VwPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfT5cclxuICAgICAgICAgICAgPExhYmVsPk9uZTwvTGFiZWw+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30+XHJcbiAgICAgICAgICAgIDxMYWJlbD5Ud288L0xhYmVsPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PlxyXG4gICAgICAgICAgICA8TGFiZWw+VGhyZWU8L0xhYmVsPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Hcm91cD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0V4YW1wbGU+XHJcbiAgICA8RXhhbXBsZT5cclxuICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiPkJsb2NrIGJ1dHRvbjwvc3Bhbj5cclxuICAgICAgPGRpdiBzbG90PVwidmVydGljYWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInVuZWxldmF0ZWRcIiBjbGFzcz1cInctZnVsbFwiPlxyXG4gICAgICAgICAgPExhYmVsPkJMT0NLIEJVVFRPTjwvTGFiZWw+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJ2ZXJ0aWNhbFwiIGNsYXNzPVwibXItOCBtYi04IHctZnVsbFwiPlxyXG4gICAgICAgIDxHcm91cCB2YXJpYW50PVwib3V0bGluZWRcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7XCI+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJ1bmVsZXZhdGVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgc3R5bGU9XCJmbGV4LWdyb3c6IDM7XCI+XHJcbiAgICAgICAgICAgIDxMYWJlbD5QcmltYXJ5PC9MYWJlbD5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfVxyXG4gICAgICAgICAgICB2YXJpYW50PVwidW5lbGV2YXRlZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgc3R5bGU9XCJmbGV4LWdyb3c6IDE7XCI+XHJcbiAgICAgICAgICAgIDxMYWJlbD5TZWNvbmRhcnk8L0xhYmVsPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJ1bmVsZXZhdGVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICBzdHlsZT1cImZsZXgtZ3JvdzogMTtcIj5cclxuICAgICAgICAgICAgPExhYmVsPlNlY29uZGFyeTwvTGFiZWw+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0dyb3VwPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRXhhbXBsZT5cclxuICAgIDxFeGFtcGxlPlxyXG4gICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCI+U3BsaXQgYnV0dG9ucyB1c2luZyBhIGJ1dHRvbiBncm91cDwvc3Bhbj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEdyb3VwIHZhcmlhbnQ9XCJyYWlzZWRcIj5cclxuICAgICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInJhaXNlZFwiPlxyXG4gICAgICAgICAgICA8TGFiZWw+RG8gdGhlIHRoaW5nPC9MYWJlbD5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiB1c2U6R3JvdXBJdGVtPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgb246Y2xpY2s9eygpID0+IG1lbnUuc2V0T3Blbih0cnVlKX1cclxuICAgICAgICAgICAgICB2YXJpYW50PVwicmFpc2VkXCJcclxuICAgICAgICAgICAgICBzdHlsZT1cInBhZGRpbmc6IDA7IG1pbi13aWR0aDogMzZweDtcIj5cclxuICAgICAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgc3R5bGU9XCJtYXJnaW46IDA7XCI+XHJcbiAgICAgICAgICAgICAgICBhcnJvd19kcm9wX2Rvd25cclxuICAgICAgICAgICAgICA8L0ljb24+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8TWVudSBiaW5kOnRoaXM9e21lbnV9IGFuY2hvckNvcm5lcj1cIlRPUF9MRUZUXCI+XHJcbiAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICA8SXRlbSBvbjpTTVVJOmFjdGlvbj17KCkgPT4gY2xpY2tlZCsrfT5cclxuICAgICAgICAgICAgICAgICAgPFRleHQ+VGhpbmcgMTwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgICAgICAgIDxJdGVtIG9uOlNNVUk6YWN0aW9uPXsoKSA9PiBjbGlja2VkKyt9PlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dD5UaGluZyAyPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgICAgICAgPFNlcGFyYXRvciAvPlxyXG4gICAgICAgICAgICAgICAgPEl0ZW0gb246U01VSTphY3Rpb249eygpID0+IGNsaWNrZWQrK30+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0PlRoaW5nIDM8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0dyb3VwPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEdyb3VwIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgICAgPExhYmVsPkRvIHRoZSB0aGluZzwvTGFiZWw+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxkaXYgdXNlOkdyb3VwSXRlbT5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiBtZW51Mi5zZXRPcGVuKHRydWUpfVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9XCJwYWRkaW5nOiAwOyBtaW4td2lkdGg6IDM2cHg7XCI+XHJcbiAgICAgICAgICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIHN0eWxlPVwibWFyZ2luOiAwO1wiPlxyXG4gICAgICAgICAgICAgICAgYXJyb3dfZHJvcF9kb3duXHJcbiAgICAgICAgICAgICAgPC9JY29uPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPE1lbnUgYmluZDp0aGlzPXttZW51Mn0gYW5jaG9yQ29ybmVyPVwiVE9QX0xFRlRcIj5cclxuICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgIDxJdGVtIG9uOlNNVUk6YWN0aW9uPXsoKSA9PiBjbGlja2VkKyt9PlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dD5UaGluZyAxPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgICAgICAgPEl0ZW0gb246U01VSTphY3Rpb249eygpID0+IGNsaWNrZWQrK30+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0PlRoaW5nIDI8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICAgICAgICA8U2VwYXJhdG9yIC8+XHJcbiAgICAgICAgICAgICAgICA8SXRlbSBvbjpTTVVJOmFjdGlvbj17KCkgPT4gY2xpY2tlZCsrfT5cclxuICAgICAgICAgICAgICAgICAgPFRleHQ+VGhpbmcgMzwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvR3JvdXA+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9FeGFtcGxlPlxyXG4gIDwvZGl2PlxyXG48L1BhZ2U+XHJcbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyIsInRzbGliXzEuX19hc3NpZ24iLCJ0c2xpYl8xLl9fdmFsdWVzIiwidXRpbC5nZXRUcmFuc2Zvcm1Qcm9wZXJ0eU5hbWUiLCJjc3NDbGFzc2VzIiwic3RyaW5ncyIsIm51bWJlcnMiLCJsaXN0Q3NzQ2xhc3NlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBLElBQUksVUFBVSxHQUFHO0lBQ2IsTUFBTSxFQUFFLDBCQUEwQjtJQUNsQyxnQkFBZ0IsRUFBRSxvQ0FBb0M7SUFDdEQsY0FBYyxFQUFFLGtDQUFrQztJQUNsRCxLQUFLLEVBQUUseUJBQXlCO0lBQ2hDLElBQUksRUFBRSx3QkFBd0I7SUFDOUIsSUFBSSxFQUFFLGtCQUFrQjtD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QUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxZQUFZOztLQUV4QyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRHhCLGlCQUFpQixDQUFDO0VBQy9CLEtBQUssRUFBRSxnQ0FBZ0M7RUFDdkMsU0FBUyxFQUFFLE9BQU87RUFDbEIsUUFBUSxFQUFFLEVBQUU7Q0FDYixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQ0FJLE9BQU8sR0FBRyxDQUFDO0tBQ1gsSUFBSTtLQUNKLEtBQUs7NkNBK0JxQixPQUFPOytDQU9iLE9BQU87K0NBTUQsT0FBTzsrQ0FLVyxPQUFPOytDQUt6QixPQUFPOytDQVFQLE9BQU87K0NBS1csT0FBTzsrQ0FLekIsT0FBTzsrQ0FRUCxPQUFPOytDQUtXLE9BQU87Z0RBS3pCLE9BQU87Z0RBUVAsT0FBTztnREFNUCxPQUFPO2dEQU1QLE9BQU87Z0RBTVAsT0FBTztnREFNUCxPQUFPO2dEQU1QLE9BQU87Z0RBTVAsT0FBTztnREFNUCxPQUFPO2dEQU1XLE9BQU87Z0RBTVAsT0FBTztnREFTekIsT0FBTztnREFLVyxPQUFPO2dEQUt6QixPQUFPO2dEQUtXLE9BQU87Z0RBS3pCLE9BQU87Z0RBS1csT0FBTztnREFTdkIsT0FBTztnREFHUCxPQUFPO2dEQUdQLE9BQU87Z0RBT1AsT0FBTztnREFHUCxPQUFPO2dEQUdQLE9BQU87Z0RBT1AsT0FBTztnREFHUCxPQUFPO2dEQUdQLE9BQU87Z0RBT1AsT0FBTztnREFHUCxPQUFPO2dEQUdQLE9BQU87Z0RBU1QsT0FBTztnREFPWCxPQUFPO2dEQU9QLE9BQU87Z0RBT1AsT0FBTztnREFhRCxPQUFPO2dDQUtYLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTttREFTSCxPQUFPO3FEQUdQLE9BQU87cURBSVAsT0FBTzs7Ozs7Ozs7Z0RBVWpCLE9BQU87Z0NBS1gsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJO3FEQVNKLE9BQU87cURBR1AsT0FBTztxREFJUCxPQUFPOzs7O21CQVR0QixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

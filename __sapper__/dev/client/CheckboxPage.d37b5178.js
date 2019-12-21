import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, a as assign, E as getContext, o as onMount, e as onDestroy, f as exclude_internal_props, g as element, Q as space, _ as svg_element, h as claim_element, j as children, R as claim_space, k as detach_dev, m as set_attributes, p as add_location, T as attr_dev, C as listen_dev, q as insert_dev, U as append_dev, u as get_spread_update, v as is_function, n as noop, D as run_all, b as bubble, z as binding_callbacks, y as current_component, c as create_slot, A as setContext, r as get_slot_context, t as get_slot_changes, w as transition_in, x as transition_out, M as create_component, N as claim_component, O as mount_component, P as destroy_component, X as text, Y as claim_text, L as bind, V as add_flush_callback } from './index.47a13945.js';
import { s as styleInject, _ as __extends, a as __assign, M as MDCFoundation, c as MDCRipple, h as applyPassive, m as matches, i as MDCRippleFoundation, b as MDCComponent, e as exclude, u as useActions, f as forwardEventsBuilder } from './useActions.7bd84619.js';
import { p as prefixFilter } from './prefixFilter.27f2145a.js';
import Page from './Page.48efacb9.js';
import Example from './Example.52cb0634.js';

var css = ".mdc-typography--headline6{font-size:1.25rem;line-height:2rem;letter-spacing:.0125em}.mdc-typography--headline6,.mdc-typography--subtitle2{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-weight:500;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle2{font-size:.875rem;line-height:1.375rem;letter-spacing:.0071428571em}.mdc-typography--body2{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit}:root{--primary-100:#ebf8ff;--primary-200:#bee3f8;--primary-300:#90cdf4;--primary-400:#63b3ed;--primary-500:#4299e1;--primary-600:#3182ce;--primary-700:#2b6cb0;--primary-800:#2c5282;--primary-900:#2a4365;--secondary-100:#fff5f5;--secondary-200:#fed7d7;--secondary-300:#feb2b2;--secondary-400:#fc8181;--secondary-500:#f56565;--secondary-600:#e53e3e;--secondary-700:#c53030;--secondary-800:#9b2c2c;--secondary-900:#742a2a;--primary-color:var(--primary-700);--secondary-color:var(--secondary-700);--primary-font-color:#fff;--secondary-font-color:#fff;--disabled-button-bg-color:#e0e0e0;--font-color:#212121;--other-font-color:#000;--bg-color:#fff;--bg-layer-color:#f5f5f5;--bg-card-color:#fff;--enabled-color:#757575;--disabled-color:#bdbdbd;--switch-toggle-color:#fafafa;--switch-track-color:#4d4d4d;--font-family:\"Montserrat\",sans-serif;--filter:invert(0%);--alert-default-bg-color:var(--primary-200);--alert-solid-bg-color:var(--primary-700);--alert-solid-text-color:\"text-white\";--alert-outline-bg-color:var(--primary-100);--alert-outline-border-color:var(--primary-400);--alert-outline-border-color2:var(--primary-600);--alert-outline-text-color:var(--primary-800)}[data-theme=dark]{--primary-color:var(--primary-400);--secondary-color:var(--secondary-400);--primary-font-color:#000;--secondary-font-color:#000;--disabled-button-bg-color:#1f1f1f;--font-color:#dedede;--other-font-color:#fff;--bg-color:#121212;--bg-layer-color:#333;--bg-card-color:#424242;--enabled-color:#b3b3b3;--disabled-color:#4d4d4d;--switch-toggle-color:#b3b3b3;--switch-track-color:#fff;--filter:invert(100%)}body{--mdc-theme-primary:var(--primary-color);--mdc-theme-secondary:var(--secondary-color);--mdc-theme-on-primary:var(--primary-font-color);--mdc-theme-on-secondary:var(--secondary-font-color);--mdc-text-field-ink-color:var(--other-font-color);--mdc-theme-text-primary-on-background:var(--font-color);--mdc-theme-surface:transparent;--duration:0.5s;--timing:ease;background-color:var(--bg-color);color:var(--font-color);-webkit-transition:color var(--duration) var(--timing),background-color var(--duration) var(--timing);transition:color var(--duration) var(--timing),background-color var(--duration) var(--timing);font-family:var(--font-family)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:var(--disabled-button-bg-color)}.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--disabled-color)}.mdc-select:not(.mdc-select--disabled) .mdc-select__native-control,.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text,.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--other-font-color)}.mdc-select:not(.mdc-select--disabled) .mdc-select__native-control option{color:#000}.mdc-select--with-leading-icon:not(.mdc-select--disabled) .mdc-select__icon{color:var(--enabled-color);opacity:1}.mdc-select__dropdown-icon{-webkit-filter:var(--filter);filter:var(--filter)}.mdc-select--invalid .mdc-select__dropdown-icon{-webkit-filter:invert(0);filter:invert(0)}.mdc-switch--disabled{opacity:.5}.mdc-card__action--icon:not(:disabled){color:var(--enabled-color)}.flex-1-0-auto{-webkit-box-flex:1;flex:1 0 auto}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}to{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{-webkit-transform:scaleX(0);transform:scaleX(0)}68.2%{-webkit-animation-timing-function:cubic-bezier(0,0,0,1);animation-timing-function:cubic-bezier(0,0,0,1)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes mdc-checkbox-checked-unchecked-checkmark-path{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,1,1);animation-timing-function:cubic-bezier(.4,0,1,1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,1,1);animation-timing-function:cubic-bezier(.4,0,1,1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@-webkit-keyframes mdc-checkbox-checked-indeterminate-checkmark{0%{-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1);-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}to{-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{0%{-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1);-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}to{-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}}@-webkit-keyframes mdc-checkbox-indeterminate-checked-checkmark{0%{-webkit-animation-timing-function:cubic-bezier(.14,0,0,1);animation-timing-function:cubic-bezier(.14,0,0,1);-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}to{-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{0%{-webkit-animation-timing-function:cubic-bezier(.14,0,0,1);animation-timing-function:cubic-bezier(.14,0,0,1);-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}to{-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:1}}@-webkit-keyframes mdc-checkbox-checked-indeterminate-mixedmark{0%{-webkit-animation-timing-function:mdc-animation-deceleration-curve-timing-function;animation-timing-function:mdc-animation-deceleration-curve-timing-function;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}to{-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{0%{-webkit-animation-timing-function:mdc-animation-deceleration-curve-timing-function;animation-timing-function:mdc-animation-deceleration-curve-timing-function;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}to{-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}}@-webkit-keyframes mdc-checkbox-indeterminate-checked-mixedmark{0%{-webkit-animation-timing-function:cubic-bezier(.14,0,0,1);animation-timing-function:cubic-bezier(.14,0,0,1);-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}to{-webkit-transform:rotate(315deg);transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{0%{-webkit-animation-timing-function:cubic-bezier(.14,0,0,1);animation-timing-function:cubic-bezier(.14,0,0,1);-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}to{-webkit-transform:rotate(315deg);transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-transform:scaleX(1);transform:scaleX(1);opacity:1}32.8%,to{-webkit-transform:scaleX(0);transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;-webkit-box-flex:0;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}.mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background:before,.mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background:before{background-color:#6200ee}@supports not (-ms-ime-align:auto){.mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background:before,.mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background:before{background-color:var(--mdc-theme-primary,#6200ee)}}.mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:var(--enabled-color);background-color:transparent}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:#6200ee;border-color:var(--mdc-theme-primary,#6200ee);background-color:#6200ee;background-color:var(--mdc-theme-primary,#6200ee)}@keyframes mdc-checkbox-fade-in-background-ui48s2k{0%{border-color:var(--enabled-color);background-color:transparent}50%{border-color:#6200ee;border-color:var(--mdc-theme-primary,#6200ee);background-color:#6200ee;background-color:var(--mdc-theme-primary,#6200ee)}}@keyframes mdc-checkbox-fade-out-background-ui48s2k{0%,80%{border-color:#6200ee;border-color:var(--mdc-theme-primary,#6200ee);background-color:#6200ee;background-color:var(--mdc-theme-primary,#6200ee)}to{border-color:var(--enabled-color);background-color:transparent}}.mdc-checkbox__checkmark{color:#fff}.mdc-checkbox__mixedmark{border-color:#fff}.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:var(--disabled-color)}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background{border-color:transparent;background-color:var(--disabled-color)}@media screen and (-ms-high-contrast:active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:-webkit-inline-box;display:inline-flex;position:absolute;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;-webkit-transition:background-color 90ms cubic-bezier(.4,0,.6,1) 0ms,border-color 90ms cubic-bezier(.4,0,.6,1) 0ms;transition:background-color 90ms cubic-bezier(.4,0,.6,1) 0ms,border-color 90ms cubic-bezier(.4,0,.6,1) 0ms}.mdc-checkbox__background .mdc-checkbox__background:before{background-color:#000}@supports not (-ms-ime-align:auto){.mdc-checkbox__background .mdc-checkbox__background:before{background-color:var(--mdc-theme-on-surface,#000)}}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;-webkit-transition:opacity .18s cubic-bezier(.4,0,.6,1) 0ms;transition:opacity .18s cubic-bezier(.4,0,.6,1) 0ms}.mdc-checkbox__checkmark-path{-webkit-transition:stroke-dashoffset .18s cubic-bezier(.4,0,.6,1) 0ms;transition:stroke-dashoffset .18s cubic-bezier(.4,0,.6,1) 0ms;stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;-webkit-transform:scaleX(0) rotate(0deg);transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;-webkit-transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,-webkit-transform 90ms cubic-bezier(.4,0,.6,1) 0ms;transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,-webkit-transform 90ms cubic-bezier(.4,0,.6,1) 0ms;transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,transform 90ms cubic-bezier(.4,0,.6,1) 0ms;transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,transform 90ms cubic-bezier(.4,0,.6,1) 0ms,-webkit-transform 90ms cubic-bezier(.4,0,.6,1) 0ms}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{-webkit-transition:border-color 90ms cubic-bezier(0,0,.2,1) 0ms,background-color 90ms cubic-bezier(0,0,.2,1) 0ms;transition:border-color 90ms cubic-bezier(0,0,.2,1) 0ms,background-color 90ms cubic-bezier(0,0,.2,1) 0ms}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__background:before{position:absolute;-webkit-transform:scale(0);transform:scale(0);border-radius:50%;opacity:0;pointer-events:none;content:\"\";will-change:opacity,transform;-webkit-transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,-webkit-transform 90ms cubic-bezier(.4,0,.6,1) 0ms;transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,-webkit-transform 90ms cubic-bezier(.4,0,.6,1) 0ms;transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,transform 90ms cubic-bezier(.4,0,.6,1) 0ms;transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,transform 90ms cubic-bezier(.4,0,.6,1) 0ms,-webkit-transform 90ms cubic-bezier(.4,0,.6,1) 0ms}.mdc-checkbox__native-control:focus~.mdc-checkbox__background:before{-webkit-transform:scale(1);transform:scale(1);opacity:.12;-webkit-transition:opacity 80ms cubic-bezier(0,0,.2,1) 0ms,-webkit-transform 80ms cubic-bezier(0,0,.2,1) 0ms;transition:opacity 80ms cubic-bezier(0,0,.2,1) 0ms,-webkit-transform 80ms cubic-bezier(0,0,.2,1) 0ms;transition:opacity 80ms cubic-bezier(0,0,.2,1) 0ms,transform 80ms cubic-bezier(0,0,.2,1) 0ms;transition:opacity 80ms cubic-bezier(0,0,.2,1) 0ms,transform 80ms cubic-bezier(0,0,.2,1) 0ms,-webkit-transform 80ms cubic-bezier(0,0,.2,1) 0ms}.mdc-checkbox__native-control{position:absolute;top:0;left:0;width:100%;height:100%;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{-webkit-transition:opacity .18s cubic-bezier(0,0,.2,1) 0ms,-webkit-transform .18s cubic-bezier(0,0,.2,1) 0ms;transition:opacity .18s cubic-bezier(0,0,.2,1) 0ms,-webkit-transform .18s cubic-bezier(0,0,.2,1) 0ms;transition:opacity .18s cubic-bezier(0,0,.2,1) 0ms,transform .18s cubic-bezier(0,0,.2,1) 0ms;transition:opacity .18s cubic-bezier(0,0,.2,1) 0ms,transform .18s cubic-bezier(0,0,.2,1) 0ms,-webkit-transform .18s cubic-bezier(0,0,.2,1) 0ms;opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{-webkit-transform:scaleX(1) rotate(-45deg);transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark{-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0;-webkit-transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,-webkit-transform 90ms cubic-bezier(.4,0,.6,1) 0ms;transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,-webkit-transform 90ms cubic-bezier(.4,0,.6,1) 0ms;transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,transform 90ms cubic-bezier(.4,0,.6,1) 0ms;transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,transform 90ms cubic-bezier(.4,0,.6,1) 0ms,-webkit-transform 90ms cubic-bezier(.4,0,.6,1) 0ms}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark{-webkit-transform:scaleX(1) rotate(0deg);transform:scaleX(1) rotate(0deg);opacity:1}@-webkit-keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@-webkit-keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@-webkit-keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-checkbox{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0);padding:11px}.mdc-checkbox:after,.mdc-checkbox:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-checkbox:before{-webkit-transition:opacity 15ms linear,background-color 15ms linear;transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-checkbox:after,.mdc-checkbox:before{background-color:#000}@supports not (-ms-ime-align:auto){.mdc-checkbox:after,.mdc-checkbox:before{background-color:var(--mdc-theme-on-surface,#000)}}.mdc-checkbox:hover:before{opacity:.04}.mdc-checkbox:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.mdc-checkbox:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.mdc-checkbox:after,.mdc-checkbox:before{top:0;left:0;width:100%;height:100%}.mdc-checkbox .mdc-checkbox__background{left:11px;right:auto;top:11px}.mdc-checkbox[dir=rtl] .mdc-checkbox .mdc-checkbox__background,[dir=rtl] .mdc-checkbox .mdc-checkbox .mdc-checkbox__background{left:auto;right:11px}.mdc-checkbox .mdc-checkbox__background:before{top:-13px;left:-13px;width:40px;height:40px}";
styleInject(css);

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
var jsEventTypeMap = {
    animationend: {
        cssProperty: 'animation',
        prefixed: 'webkitAnimationEnd',
        standard: 'animationend',
    },
    animationiteration: {
        cssProperty: 'animation',
        prefixed: 'webkitAnimationIteration',
        standard: 'animationiteration',
    },
    animationstart: {
        cssProperty: 'animation',
        prefixed: 'webkitAnimationStart',
        standard: 'animationstart',
    },
    transitionend: {
        cssProperty: 'transition',
        prefixed: 'webkitTransitionEnd',
        standard: 'transitionend',
    },
};
function isWindow(windowObj) {
    return Boolean(windowObj.document) && typeof windowObj.document.createElement === 'function';
}
function getCorrectEventName(windowObj, eventType) {
    if (isWindow(windowObj) && eventType in jsEventTypeMap) {
        var el = windowObj.document.createElement('div');
        var _a = jsEventTypeMap[eventType], standard = _a.standard, prefixed = _a.prefixed, cssProperty = _a.cssProperty;
        var isStandard = cssProperty in el.style;
        return isStandard ? standard : prefixed;
    }
    return eventType;
}
//# sourceMappingURL=util.js.map

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
    ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate',
    ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked',
    ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked',
    ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked',
    ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked',
    ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate',
    BACKGROUND: 'mdc-checkbox__background',
    CHECKED: 'mdc-checkbox--checked',
    CHECKMARK: 'mdc-checkbox__checkmark',
    CHECKMARK_PATH: 'mdc-checkbox__checkmark-path',
    DISABLED: 'mdc-checkbox--disabled',
    INDETERMINATE: 'mdc-checkbox--indeterminate',
    MIXEDMARK: 'mdc-checkbox__mixedmark',
    NATIVE_CONTROL: 'mdc-checkbox__native-control',
    ROOT: 'mdc-checkbox',
    SELECTED: 'mdc-checkbox--selected',
    UPGRADED: 'mdc-checkbox--upgraded',
};
var strings = {
    ARIA_CHECKED_ATTR: 'aria-checked',
    ARIA_CHECKED_INDETERMINATE_VALUE: 'mixed',
    NATIVE_CONTROL_SELECTOR: '.mdc-checkbox__native-control',
    TRANSITION_STATE_CHECKED: 'checked',
    TRANSITION_STATE_INDETERMINATE: 'indeterminate',
    TRANSITION_STATE_INIT: 'init',
    TRANSITION_STATE_UNCHECKED: 'unchecked',
};
var numbers = {
    ANIM_END_LATCH_MS: 250,
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
var MDCCheckboxFoundation = /** @class */ (function (_super) {
    __extends(MDCCheckboxFoundation, _super);
    function MDCCheckboxFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCCheckboxFoundation.defaultAdapter, adapter)) || this;
        _this.currentCheckState_ = strings.TRANSITION_STATE_INIT;
        _this.currentAnimationClass_ = '';
        _this.animEndLatchTimer_ = 0;
        _this.enableAnimationEndHandler_ = false;
        return _this;
    }
    Object.defineProperty(MDCCheckboxFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCCheckboxFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCCheckboxFoundation, "numbers", {
        get: function () {
            return numbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCCheckboxFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                forceLayout: function () { return undefined; },
                hasNativeControl: function () { return false; },
                isAttachedToDOM: function () { return false; },
                isChecked: function () { return false; },
                isIndeterminate: function () { return false; },
                removeClass: function () { return undefined; },
                removeNativeControlAttr: function () { return undefined; },
                setNativeControlAttr: function () { return undefined; },
                setNativeControlDisabled: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCCheckboxFoundation.prototype.init = function () {
        this.currentCheckState_ = this.determineCheckState_();
        this.updateAriaChecked_();
        this.adapter_.addClass(cssClasses.UPGRADED);
    };
    MDCCheckboxFoundation.prototype.destroy = function () {
        clearTimeout(this.animEndLatchTimer_);
    };
    MDCCheckboxFoundation.prototype.setDisabled = function (disabled) {
        this.adapter_.setNativeControlDisabled(disabled);
        if (disabled) {
            this.adapter_.addClass(cssClasses.DISABLED);
        }
        else {
            this.adapter_.removeClass(cssClasses.DISABLED);
        }
    };
    /**
     * Handles the animationend event for the checkbox
     */
    MDCCheckboxFoundation.prototype.handleAnimationEnd = function () {
        var _this = this;
        if (!this.enableAnimationEndHandler_) {
            return;
        }
        clearTimeout(this.animEndLatchTimer_);
        this.animEndLatchTimer_ = setTimeout(function () {
            _this.adapter_.removeClass(_this.currentAnimationClass_);
            _this.enableAnimationEndHandler_ = false;
        }, numbers.ANIM_END_LATCH_MS);
    };
    /**
     * Handles the change event for the checkbox
     */
    MDCCheckboxFoundation.prototype.handleChange = function () {
        this.transitionCheckState_();
    };
    MDCCheckboxFoundation.prototype.transitionCheckState_ = function () {
        if (!this.adapter_.hasNativeControl()) {
            return;
        }
        var oldState = this.currentCheckState_;
        var newState = this.determineCheckState_();
        if (oldState === newState) {
            return;
        }
        this.updateAriaChecked_();
        var TRANSITION_STATE_UNCHECKED = strings.TRANSITION_STATE_UNCHECKED;
        var SELECTED = cssClasses.SELECTED;
        if (newState === TRANSITION_STATE_UNCHECKED) {
            this.adapter_.removeClass(SELECTED);
        }
        else {
            this.adapter_.addClass(SELECTED);
        }
        // Check to ensure that there isn't a previously existing animation class, in case for example
        // the user interacted with the checkbox before the animation was finished.
        if (this.currentAnimationClass_.length > 0) {
            clearTimeout(this.animEndLatchTimer_);
            this.adapter_.forceLayout();
            this.adapter_.removeClass(this.currentAnimationClass_);
        }
        this.currentAnimationClass_ = this.getTransitionAnimationClass_(oldState, newState);
        this.currentCheckState_ = newState;
        // Check for parentNode so that animations are only run when the element is attached
        // to the DOM.
        if (this.adapter_.isAttachedToDOM() && this.currentAnimationClass_.length > 0) {
            this.adapter_.addClass(this.currentAnimationClass_);
            this.enableAnimationEndHandler_ = true;
        }
    };
    MDCCheckboxFoundation.prototype.determineCheckState_ = function () {
        var TRANSITION_STATE_INDETERMINATE = strings.TRANSITION_STATE_INDETERMINATE, TRANSITION_STATE_CHECKED = strings.TRANSITION_STATE_CHECKED, TRANSITION_STATE_UNCHECKED = strings.TRANSITION_STATE_UNCHECKED;
        if (this.adapter_.isIndeterminate()) {
            return TRANSITION_STATE_INDETERMINATE;
        }
        return this.adapter_.isChecked() ? TRANSITION_STATE_CHECKED : TRANSITION_STATE_UNCHECKED;
    };
    MDCCheckboxFoundation.prototype.getTransitionAnimationClass_ = function (oldState, newState) {
        var TRANSITION_STATE_INIT = strings.TRANSITION_STATE_INIT, TRANSITION_STATE_CHECKED = strings.TRANSITION_STATE_CHECKED, TRANSITION_STATE_UNCHECKED = strings.TRANSITION_STATE_UNCHECKED;
        var _a = MDCCheckboxFoundation.cssClasses, ANIM_UNCHECKED_CHECKED = _a.ANIM_UNCHECKED_CHECKED, ANIM_UNCHECKED_INDETERMINATE = _a.ANIM_UNCHECKED_INDETERMINATE, ANIM_CHECKED_UNCHECKED = _a.ANIM_CHECKED_UNCHECKED, ANIM_CHECKED_INDETERMINATE = _a.ANIM_CHECKED_INDETERMINATE, ANIM_INDETERMINATE_CHECKED = _a.ANIM_INDETERMINATE_CHECKED, ANIM_INDETERMINATE_UNCHECKED = _a.ANIM_INDETERMINATE_UNCHECKED;
        switch (oldState) {
            case TRANSITION_STATE_INIT:
                if (newState === TRANSITION_STATE_UNCHECKED) {
                    return '';
                }
                return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
            case TRANSITION_STATE_UNCHECKED:
                return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;
            case TRANSITION_STATE_CHECKED:
                return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;
            default: // TRANSITION_STATE_INDETERMINATE
                return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
        }
    };
    MDCCheckboxFoundation.prototype.updateAriaChecked_ = function () {
        // Ensure aria-checked is set to mixed if checkbox is in indeterminate state.
        if (this.adapter_.isIndeterminate()) {
            this.adapter_.setNativeControlAttr(strings.ARIA_CHECKED_ATTR, strings.ARIA_CHECKED_INDETERMINATE_VALUE);
        }
        else {
            // The on/off state does not need to keep track of aria-checked, since
            // the screenreader uses the checked property on the checkbox element.
            this.adapter_.removeNativeControlAttr(strings.ARIA_CHECKED_ATTR);
        }
    };
    return MDCCheckboxFoundation;
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
var CB_PROTO_PROPS = ['checked', 'indeterminate'];
var MDCCheckbox = /** @class */ (function (_super) {
    __extends(MDCCheckbox, _super);
    function MDCCheckbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ripple_ = _this.createRipple_();
        return _this;
    }
    MDCCheckbox.attachTo = function (root) {
        return new MDCCheckbox(root);
    };
    Object.defineProperty(MDCCheckbox.prototype, "ripple", {
        get: function () {
            return this.ripple_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCCheckbox.prototype, "checked", {
        get: function () {
            return this.nativeControl_.checked;
        },
        set: function (checked) {
            this.nativeControl_.checked = checked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCCheckbox.prototype, "indeterminate", {
        get: function () {
            return this.nativeControl_.indeterminate;
        },
        set: function (indeterminate) {
            this.nativeControl_.indeterminate = indeterminate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCCheckbox.prototype, "disabled", {
        get: function () {
            return this.nativeControl_.disabled;
        },
        set: function (disabled) {
            this.foundation_.setDisabled(disabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCCheckbox.prototype, "value", {
        get: function () {
            return this.nativeControl_.value;
        },
        set: function (value) {
            this.nativeControl_.value = value;
        },
        enumerable: true,
        configurable: true
    });
    MDCCheckbox.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleChange_ = function () { return _this.foundation_.handleChange(); };
        this.handleAnimationEnd_ = function () { return _this.foundation_.handleAnimationEnd(); };
        this.nativeControl_.addEventListener('change', this.handleChange_);
        this.listen(getCorrectEventName(window, 'animationend'), this.handleAnimationEnd_);
        this.installPropertyChangeHooks_();
    };
    MDCCheckbox.prototype.destroy = function () {
        this.ripple_.destroy();
        this.nativeControl_.removeEventListener('change', this.handleChange_);
        this.unlisten(getCorrectEventName(window, 'animationend'), this.handleAnimationEnd_);
        this.uninstallPropertyChangeHooks_();
        _super.prototype.destroy.call(this);
    };
    MDCCheckbox.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
            forceLayout: function () { return _this.root_.offsetWidth; },
            hasNativeControl: function () { return !!_this.nativeControl_; },
            isAttachedToDOM: function () { return Boolean(_this.root_.parentNode); },
            isChecked: function () { return _this.checked; },
            isIndeterminate: function () { return _this.indeterminate; },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            removeNativeControlAttr: function (attr) { return _this.nativeControl_.removeAttribute(attr); },
            setNativeControlAttr: function (attr, value) { return _this.nativeControl_.setAttribute(attr, value); },
            setNativeControlDisabled: function (disabled) { return _this.nativeControl_.disabled = disabled; },
        };
        return new MDCCheckboxFoundation(adapter);
    };
    MDCCheckbox.prototype.createRipple_ = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = __assign({}, MDCRipple.createAdapter(this), { deregisterInteractionHandler: function (evtType, handler) { return _this.nativeControl_.removeEventListener(evtType, handler, applyPassive()); }, isSurfaceActive: function () { return matches(_this.nativeControl_, ':active'); }, isUnbounded: function () { return true; }, registerInteractionHandler: function (evtType, handler) { return _this.nativeControl_.addEventListener(evtType, handler, applyPassive()); } });
        return new MDCRipple(this.root_, new MDCRippleFoundation(adapter));
    };
    MDCCheckbox.prototype.installPropertyChangeHooks_ = function () {
        var _this = this;
        var nativeCb = this.nativeControl_;
        var cbProto = Object.getPrototypeOf(nativeCb);
        CB_PROTO_PROPS.forEach(function (controlState) {
            var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
            // We have to check for this descriptor, since some browsers (Safari) don't support its return.
            // See: https://bugs.webkit.org/show_bug.cgi?id=49739
            if (!validDescriptor(desc)) {
                return;
            }
            // Type cast is needed for compatibility with Closure Compiler.
            var nativeGetter = desc.get;
            var nativeCbDesc = {
                configurable: desc.configurable,
                enumerable: desc.enumerable,
                get: nativeGetter,
                set: function (state) {
                    desc.set.call(nativeCb, state);
                    _this.foundation_.handleChange();
                },
            };
            Object.defineProperty(nativeCb, controlState, nativeCbDesc);
        });
    };
    MDCCheckbox.prototype.uninstallPropertyChangeHooks_ = function () {
        var nativeCb = this.nativeControl_;
        var cbProto = Object.getPrototypeOf(nativeCb);
        CB_PROTO_PROPS.forEach(function (controlState) {
            var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
            if (!validDescriptor(desc)) {
                return;
            }
            Object.defineProperty(nativeCb, controlState, desc);
        });
    };
    Object.defineProperty(MDCCheckbox.prototype, "nativeControl_", {
        get: function () {
            var NATIVE_CONTROL_SELECTOR = MDCCheckboxFoundation.strings.NATIVE_CONTROL_SELECTOR;
            var el = this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
            if (!el) {
                throw new Error("Checkbox component requires a " + NATIVE_CONTROL_SELECTOR + " element");
            }
            return el;
        },
        enumerable: true,
        configurable: true
    });
    return MDCCheckbox;
}(MDCComponent));
function validDescriptor(inputPropDesc) {
    return !!inputPropDesc && typeof inputPropDesc.set === 'function';
}
//# sourceMappingURL=component.js.map

/* node_modules\@smui\checkbox\Checkbox.svelte generated by Svelte v3.16.4 */
const file = "node_modules\\@smui\\checkbox\\Checkbox.svelte";

function create_fragment(ctx) {
	let div2;
	let input;
	let useActions_action;
	let t0;
	let div1;
	let svg;
	let path;
	let t1;
	let div0;
	let useActions_action_1;
	let forwardEvents_action;
	let dispose;

	let input_levels = [
		{
			value: /*valueKey*/ ctx[4] === /*uninitializedValue*/ ctx[10]
			? /*value*/ ctx[3]
			: /*valueKey*/ ctx[4]
		},
		{ type: "checkbox" },
		/*inputProps*/ ctx[11],
		{ disabled: /*disabled*/ ctx[2] },
		{
			class: "mdc-checkbox__native-control " + /*input$class*/ ctx[6]
		},
		exclude(prefixFilter(/*$$props*/ ctx[15], "input$"), ["use", "class"])
	];

	let input_data = {};

	for (let i = 0; i < input_levels.length; i += 1) {
		input_data = assign(input_data, input_levels[i]);
	}

	let div2_levels = [
		{
			class: "\n    mdc-checkbox\n    " + /*className*/ ctx[1] + "\n    " + (/*disabled*/ ctx[2] ? "mdc-checkbox--disabled" : "") + "\n    " + (/*context*/ ctx[12] === "data-table" && /*dataTableHeader*/ ctx[13]
			? "mdc-data-table__header-row-checkbox"
			: "") + "\n    " + (/*context*/ ctx[12] === "data-table" && !/*dataTableHeader*/ ctx[13]
			? "mdc-data-table__row-checkbox"
			: "") + "\n  "
		},
		exclude(/*$$props*/ ctx[15], [
			"use",
			"class",
			"disabled",
			"indeterminate",
			"group",
			"checked",
			"value",
			"valueKey",
			"input$"
		])
	];

	let div2_data = {};

	for (let i = 0; i < div2_levels.length; i += 1) {
		div2_data = assign(div2_data, div2_levels[i]);
	}

	const block = {
		c: function create() {
			div2 = element("div");
			input = element("input");
			t0 = space();
			div1 = element("div");
			svg = svg_element("svg");
			path = svg_element("path");
			t1 = space();
			div0 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);

			input = claim_element(div2_nodes, "INPUT", {
				value: true,
				type: true,
				disabled: true,
				class: true
			});

			t0 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			svg = claim_element(div1_nodes, "svg", { class: true, viewBox: true }, 1);
			var svg_nodes = children(svg);
			path = claim_element(svg_nodes, "path", { class: true, fill: true, d: true }, 1);
			children(path).forEach(detach_dev);
			svg_nodes.forEach(detach_dev);
			t1 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			children(div0).forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(input, input_data);
			add_location(input, file, 13, 2, 478);
			attr_dev(path, "class", "mdc-checkbox__checkmark-path");
			attr_dev(path, "fill", "none");
			attr_dev(path, "d", "M1.73,12.91 8.1,19.28 22.79,4.59");
			add_location(path, file, 28, 6, 984);
			attr_dev(svg, "class", "mdc-checkbox__checkmark");
			attr_dev(svg, "viewBox", "0 0 24 24");
			add_location(svg, file, 27, 4, 920);
			attr_dev(div0, "class", "mdc-checkbox__mixedmark");
			add_location(div0, file, 30, 4, 1094);
			attr_dev(div1, "class", "mdc-checkbox__background");
			add_location(div1, file, 26, 2, 877);
			set_attributes(div2, div2_data);
			add_location(div2, file, 0, 0, 0);

			dispose = [
				listen_dev(input, "change", /*input_change_handler*/ ctx[30]),
				listen_dev(input, "input", /*input_handler*/ ctx[28], false, false, false),
				listen_dev(input, "change", /*handleChange*/ ctx[14], false, false, false),
				listen_dev(input, "input", /*handleChange*/ ctx[14], false, false, false),
				listen_dev(input, "change", /*change_handler*/ ctx[29], false, false, false)
			];
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, input);
			input.checked = /*nativeChecked*/ ctx[8];
			useActions_action = useActions.call(null, input, /*input$use*/ ctx[5]) || ({});
			append_dev(div2, t0);
			append_dev(div2, div1);
			append_dev(div1, svg);
			append_dev(svg, path);
			append_dev(div1, t1);
			append_dev(div1, div0);
			/*div2_binding*/ ctx[31](div2);
			useActions_action_1 = useActions.call(null, div2, /*use*/ ctx[0]) || ({});
			forwardEvents_action = /*forwardEvents*/ ctx[9].call(null, div2) || ({});
		},
		p: function update(ctx, dirty) {
			set_attributes(input, get_spread_update(input_levels, [
				dirty[0] & /*valueKey, uninitializedValue, value*/ 1048 && ({
					value: /*valueKey*/ ctx[4] === /*uninitializedValue*/ ctx[10]
					? /*value*/ ctx[3]
					: /*valueKey*/ ctx[4]
				}),
				{ type: "checkbox" },
				dirty[0] & /*inputProps*/ 2048 && /*inputProps*/ ctx[11],
				dirty[0] & /*disabled*/ 4 && ({ disabled: /*disabled*/ ctx[2] }),
				dirty[0] & /*input$class*/ 64 && ({
					class: "mdc-checkbox__native-control " + /*input$class*/ ctx[6]
				}),
				dirty[0] & /*$$props*/ 32768 && exclude(prefixFilter(/*$$props*/ ctx[15], "input$"), ["use", "class"])
			]));

			if (dirty[0] & /*nativeChecked*/ 256) {
				input.checked = /*nativeChecked*/ ctx[8];
			}

			if (is_function(useActions_action.update) && dirty[0] & /*input$use*/ 32) useActions_action.update.call(null, /*input$use*/ ctx[5]);

			set_attributes(div2, get_spread_update(div2_levels, [
				dirty[0] & /*className, disabled, context, dataTableHeader*/ 12294 && ({
					class: "\n    mdc-checkbox\n    " + /*className*/ ctx[1] + "\n    " + (/*disabled*/ ctx[2] ? "mdc-checkbox--disabled" : "") + "\n    " + (/*context*/ ctx[12] === "data-table" && /*dataTableHeader*/ ctx[13]
					? "mdc-data-table__header-row-checkbox"
					: "") + "\n    " + (/*context*/ ctx[12] === "data-table" && !/*dataTableHeader*/ ctx[13]
					? "mdc-data-table__row-checkbox"
					: "") + "\n  "
				}),
				dirty[0] & /*$$props*/ 32768 && exclude(/*$$props*/ ctx[15], [
					"use",
					"class",
					"disabled",
					"indeterminate",
					"group",
					"checked",
					"value",
					"valueKey",
					"input$"
				])
			]));

			if (is_function(useActions_action_1.update) && dirty[0] & /*use*/ 1) useActions_action_1.update.call(null, /*use*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
			if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
			/*div2_binding*/ ctx[31](null);
			if (useActions_action_1 && is_function(useActions_action_1.destroy)) useActions_action_1.destroy();
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
	const forwardEvents = forwardEventsBuilder(current_component);

	let uninitializedValue = () => {
		
	};

	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { disabled = false } = $$props;
	let { indeterminate = uninitializedValue } = $$props;
	let { group = uninitializedValue } = $$props;
	let { checked = uninitializedValue } = $$props;
	let { value = null } = $$props;
	let { valueKey = uninitializedValue } = $$props;
	let { input$use = [] } = $$props;
	let { input$class = "" } = $$props;
	let element;
	let checkbox;
	let formField = getContext("SMUI:form-field");
	let inputProps = getContext("SMUI:generic:input:props") || ({});
	let setChecked = getContext("SMUI:generic:input:setChecked");
	let addChangeHandler = getContext("SMUI:generic:input:addChangeHandler");

	let nativeChecked = group === uninitializedValue
	? checked === uninitializedValue ? false : checked
	: group.indexOf(value) !== -1;

	let context = getContext("SMUI:checkbox:context");
	let dataTableHeader = getContext("SMUI:data-table:row:header");
	let getDataTableRowIndex = getContext("SMUI:data-table:row:getIndex");
	let instantiate = getContext("SMUI:checkbox:instantiate");
	let getInstance = getContext("SMUI:checkbox:getInstance");
	let previousChecked = checked;

	if (addChangeHandler) {
		addChangeHandler(handleChange);
	}

	onMount(async () => {
		if (instantiate !== false) {
			$$invalidate(20, checkbox = new MDCCheckbox(element));
		} else {
			if (context === "data-table") {
				if (dataTableHeader) {
					$$invalidate(20, checkbox = await getInstance(true));
				} else {
					$$invalidate(20, checkbox = (await getInstance(false))[getDataTableRowIndex()]);
				}
			} else {
				$$invalidate(20, checkbox = await getInstance());
			}
		}

		if (formField && formField()) {
			formField().input = checkbox;
		}
	});

	onDestroy(() => {
		if (instantiate !== false) {
			checkbox && checkbox.destroy();
		}
	});

	function handleChange() {
		if (group !== uninitializedValue) {
			const idx = group.indexOf(value);

			if (checkbox.checked && idx === -1) {
				group.push(value);
				$$invalidate(16, group);
			} else if (!checkbox.checked && idx !== -1) {
				group.splice(idx, 1);
				$$invalidate(16, group);
			}
		}
	}

	function getId() {
		return inputProps && inputProps.id;
	}

	function input_handler(event) {
		bubble($$self, event);
	}

	function change_handler(event) {
		bubble($$self, event);
	}

	function input_change_handler() {
		nativeChecked = this.checked;
		((($$invalidate(8, nativeChecked), $$invalidate(17, checked)), $$invalidate(10, uninitializedValue)), $$invalidate(21, previousChecked));
	}

	function div2_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(7, element = $$value);
		});
	}

	$$self.$set = $$new_props => {
		$$invalidate(15, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("disabled" in $$new_props) $$invalidate(2, disabled = $$new_props.disabled);
		if ("indeterminate" in $$new_props) $$invalidate(18, indeterminate = $$new_props.indeterminate);
		if ("group" in $$new_props) $$invalidate(16, group = $$new_props.group);
		if ("checked" in $$new_props) $$invalidate(17, checked = $$new_props.checked);
		if ("value" in $$new_props) $$invalidate(3, value = $$new_props.value);
		if ("valueKey" in $$new_props) $$invalidate(4, valueKey = $$new_props.valueKey);
		if ("input$use" in $$new_props) $$invalidate(5, input$use = $$new_props.input$use);
		if ("input$class" in $$new_props) $$invalidate(6, input$class = $$new_props.input$class);
	};

	$$self.$capture_state = () => {
		return {
			uninitializedValue,
			use,
			className,
			disabled,
			indeterminate,
			group,
			checked,
			value,
			valueKey,
			input$use,
			input$class,
			element,
			checkbox,
			formField,
			inputProps,
			setChecked,
			addChangeHandler,
			nativeChecked,
			context,
			dataTableHeader,
			getDataTableRowIndex,
			instantiate,
			getInstance,
			previousChecked
		};
	};

	$$self.$inject_state = $$new_props => {
		$$invalidate(15, $$props = assign(assign({}, $$props), $$new_props));
		if ("uninitializedValue" in $$props) $$invalidate(10, uninitializedValue = $$new_props.uninitializedValue);
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("disabled" in $$props) $$invalidate(2, disabled = $$new_props.disabled);
		if ("indeterminate" in $$props) $$invalidate(18, indeterminate = $$new_props.indeterminate);
		if ("group" in $$props) $$invalidate(16, group = $$new_props.group);
		if ("checked" in $$props) $$invalidate(17, checked = $$new_props.checked);
		if ("value" in $$props) $$invalidate(3, value = $$new_props.value);
		if ("valueKey" in $$props) $$invalidate(4, valueKey = $$new_props.valueKey);
		if ("input$use" in $$props) $$invalidate(5, input$use = $$new_props.input$use);
		if ("input$class" in $$props) $$invalidate(6, input$class = $$new_props.input$class);
		if ("element" in $$props) $$invalidate(7, element = $$new_props.element);
		if ("checkbox" in $$props) $$invalidate(20, checkbox = $$new_props.checkbox);
		if ("formField" in $$props) formField = $$new_props.formField;
		if ("inputProps" in $$props) $$invalidate(11, inputProps = $$new_props.inputProps);
		if ("setChecked" in $$props) $$invalidate(23, setChecked = $$new_props.setChecked);
		if ("addChangeHandler" in $$props) addChangeHandler = $$new_props.addChangeHandler;
		if ("nativeChecked" in $$props) $$invalidate(8, nativeChecked = $$new_props.nativeChecked);
		if ("context" in $$props) $$invalidate(12, context = $$new_props.context);
		if ("dataTableHeader" in $$props) $$invalidate(13, dataTableHeader = $$new_props.dataTableHeader);
		if ("getDataTableRowIndex" in $$props) getDataTableRowIndex = $$new_props.getDataTableRowIndex;
		if ("instantiate" in $$props) instantiate = $$new_props.instantiate;
		if ("getInstance" in $$props) getInstance = $$new_props.getInstance;
		if ("previousChecked" in $$props) $$invalidate(21, previousChecked = $$new_props.previousChecked);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*checked, previousChecked, nativeChecked*/ 2228480) {
			 if (checked !== uninitializedValue) {
				if (checked === previousChecked) {
					$$invalidate(17, checked = nativeChecked);
				} else if (nativeChecked !== checked) {
					$$invalidate(8, nativeChecked = checked);
				}

				$$invalidate(21, previousChecked = checked);
			}
		}

		if ($$self.$$.dirty[0] & /*nativeChecked*/ 256) {
			 if (setChecked) {
				setChecked(nativeChecked);
			}
		}

		if ($$self.$$.dirty[0] & /*checkbox, indeterminate*/ 1310720) {
			 if (checkbox && indeterminate !== uninitializedValue && checkbox.indeterminate !== indeterminate) {
				$$invalidate(20, checkbox.indeterminate = indeterminate, checkbox);
			}
		}

		if ($$self.$$.dirty[0] & /*checkbox, group, value, checked*/ 1245192) {
			 if (checkbox) {
				if (group !== uninitializedValue) {
					const isChecked = group.indexOf(value) !== -1;

					if (checkbox.checked !== isChecked) {
						$$invalidate(20, checkbox.checked = isChecked, checkbox);
					}
				} else if (checked !== uninitializedValue && checkbox.checked !== checked) {
					$$invalidate(20, checkbox.checked = checked, checkbox);
				}
			}
		}

		if ($$self.$$.dirty[0] & /*checkbox, disabled*/ 1048580) {
			 if (checkbox && checkbox.disabled !== disabled) {
				$$invalidate(20, checkbox.disabled = disabled, checkbox);
			}
		}

		if ($$self.$$.dirty[0] & /*checkbox, valueKey, value*/ 1048600) {
			 if (checkbox && valueKey === uninitializedValue && checkbox.value !== value) {
				$$invalidate(20, checkbox.value = value, checkbox);
			}
		}

		if ($$self.$$.dirty[0] & /*checkbox, valueKey*/ 1048592) {
			 if (checkbox && valueKey !== uninitializedValue && checkbox.value !== valueKey) {
				$$invalidate(20, checkbox.value = valueKey, checkbox);
			}
		}
	};

	$$props = exclude_internal_props($$props);

	return [
		use,
		className,
		disabled,
		value,
		valueKey,
		input$use,
		input$class,
		element,
		nativeChecked,
		forwardEvents,
		uninitializedValue,
		inputProps,
		context,
		dataTableHeader,
		handleChange,
		$$props,
		group,
		checked,
		indeterminate,
		getId,
		checkbox,
		previousChecked,
		formField,
		setChecked,
		addChangeHandler,
		getDataTableRowIndex,
		instantiate,
		getInstance,
		input_handler,
		change_handler,
		input_change_handler,
		div2_binding
	];
}

class Checkbox extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(
			this,
			options,
			instance,
			create_fragment,
			safe_not_equal,
			{
				use: 0,
				class: 1,
				disabled: 2,
				indeterminate: 18,
				group: 16,
				checked: 17,
				value: 3,
				valueKey: 4,
				input$use: 5,
				input$class: 6,
				getId: 19
			},
			[-1, -1]
		);

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Checkbox",
			options,
			id: create_fragment.name
		});
	}

	get use() {
		throw new Error("<Checkbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<Checkbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get disabled() {
		throw new Error("<Checkbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set disabled(value) {
		throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get indeterminate() {
		throw new Error("<Checkbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set indeterminate(value) {
		throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get group() {
		throw new Error("<Checkbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set group(value) {
		throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get checked() {
		throw new Error("<Checkbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set checked(value) {
		throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get value() {
		throw new Error("<Checkbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set value(value) {
		throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get valueKey() {
		throw new Error("<Checkbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set valueKey(value) {
		throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get input$use() {
		throw new Error("<Checkbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set input$use(value) {
		throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get input$class() {
		throw new Error("<Checkbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set input$class(value) {
		throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getId() {
		return this.$$.ctx[19];
	}

	set getId(value) {
		throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

var css$1 = ".mdc-typography--headline6{font-size:1.25rem;line-height:2rem;letter-spacing:.0125em}.mdc-typography--headline6,.mdc-typography--subtitle2{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-weight:500;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle2{font-size:.875rem;line-height:1.375rem;letter-spacing:.0071428571em}.mdc-typography--body2{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit}:root{--primary-100:#ebf8ff;--primary-200:#bee3f8;--primary-300:#90cdf4;--primary-400:#63b3ed;--primary-500:#4299e1;--primary-600:#3182ce;--primary-700:#2b6cb0;--primary-800:#2c5282;--primary-900:#2a4365;--secondary-100:#fff5f5;--secondary-200:#fed7d7;--secondary-300:#feb2b2;--secondary-400:#fc8181;--secondary-500:#f56565;--secondary-600:#e53e3e;--secondary-700:#c53030;--secondary-800:#9b2c2c;--secondary-900:#742a2a;--primary-color:var(--primary-700);--secondary-color:var(--secondary-700);--primary-font-color:#fff;--secondary-font-color:#fff;--disabled-button-bg-color:#e0e0e0;--font-color:#212121;--other-font-color:#000;--bg-color:#fff;--bg-layer-color:#f5f5f5;--bg-card-color:#fff;--enabled-color:#757575;--disabled-color:#bdbdbd;--switch-toggle-color:#fafafa;--switch-track-color:#4d4d4d;--font-family:\"Montserrat\",sans-serif;--filter:invert(0%);--alert-default-bg-color:var(--primary-200);--alert-solid-bg-color:var(--primary-700);--alert-solid-text-color:\"text-white\";--alert-outline-bg-color:var(--primary-100);--alert-outline-border-color:var(--primary-400);--alert-outline-border-color2:var(--primary-600);--alert-outline-text-color:var(--primary-800)}[data-theme=dark]{--primary-color:var(--primary-400);--secondary-color:var(--secondary-400);--primary-font-color:#000;--secondary-font-color:#000;--disabled-button-bg-color:#1f1f1f;--font-color:#dedede;--other-font-color:#fff;--bg-color:#121212;--bg-layer-color:#333;--bg-card-color:#424242;--enabled-color:#b3b3b3;--disabled-color:#4d4d4d;--switch-toggle-color:#b3b3b3;--switch-track-color:#fff;--filter:invert(100%)}body{--mdc-theme-primary:var(--primary-color);--mdc-theme-secondary:var(--secondary-color);--mdc-theme-on-primary:var(--primary-font-color);--mdc-theme-on-secondary:var(--secondary-font-color);--mdc-text-field-ink-color:var(--other-font-color);--mdc-theme-text-primary-on-background:var(--font-color);--mdc-theme-surface:transparent;--duration:0.5s;--timing:ease;background-color:var(--bg-color);color:var(--font-color);-webkit-transition:color var(--duration) var(--timing),background-color var(--duration) var(--timing);transition:color var(--duration) var(--timing),background-color var(--duration) var(--timing);font-family:var(--font-family)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:var(--disabled-button-bg-color)}.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--disabled-color)}.mdc-select:not(.mdc-select--disabled) .mdc-select__native-control,.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text,.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--other-font-color)}.mdc-select:not(.mdc-select--disabled) .mdc-select__native-control option{color:#000}.mdc-select--with-leading-icon:not(.mdc-select--disabled) .mdc-select__icon{color:var(--enabled-color);opacity:1}.mdc-select__dropdown-icon{-webkit-filter:var(--filter);filter:var(--filter)}.mdc-select--invalid .mdc-select__dropdown-icon{-webkit-filter:invert(0);filter:invert(0)}.mdc-switch--disabled{opacity:.5}.mdc-card__action--icon:not(:disabled){color:var(--enabled-color)}.flex-1-0-auto{-webkit-box-flex:1;flex:1 0 auto}.mdc-form-field{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87));display:-webkit-inline-box;display:inline-flex;-webkit-box-align:center;align-items:center;vertical-align:middle}.mdc-form-field>label{-webkit-box-ordinal-group:1;order:0;margin-right:auto;padding-left:4px}.mdc-form-field--align-end>label,.mdc-form-field[dir=rtl]>label,[dir=rtl] .mdc-form-field>label{margin-left:auto;padding-right:4px}.mdc-form-field--align-end>label{-webkit-box-ordinal-group:0;order:-1}.mdc-form-field--align-end[dir=rtl]>label,[dir=rtl] .mdc-form-field--align-end>label{margin-right:auto;padding-left:4px}.mdc-form-field .mdc-switch+label{margin-left:10px;margin-right:0}.mdc-form-field.mdc-form-field--align-end .mdc-switch+label,.mdc-form-field .mdc-switch+label[dir=rtl],[dir=rtl] .mdc-form-field .mdc-switch+label{margin-left:0;margin-right:10px}.mdc-form-field.mdc-form-field--align-end .mdc-switch+label[dir=rtl],[dir=rtl] .mdc-form-field.mdc-form-field--align-end .mdc-switch+label{margin-left:10px;margin-right:0}";
styleInject(css$1);

/**
 * @license
 * Copyright 2017 Google Inc.
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
    ROOT: 'mdc-form-field',
};
var strings$1 = {
    LABEL_SELECTOR: '.mdc-form-field > label',
};
//# sourceMappingURL=constants.js.map

/**
 * @license
 * Copyright 2017 Google Inc.
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
var MDCFormFieldFoundation = /** @class */ (function (_super) {
    __extends(MDCFormFieldFoundation, _super);
    function MDCFormFieldFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCFormFieldFoundation.defaultAdapter, adapter)) || this;
        _this.clickHandler_ = function () { return _this.handleClick_(); };
        return _this;
    }
    Object.defineProperty(MDCFormFieldFoundation, "cssClasses", {
        get: function () {
            return cssClasses$1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFormFieldFoundation, "strings", {
        get: function () {
            return strings$1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFormFieldFoundation, "defaultAdapter", {
        get: function () {
            return {
                activateInputRipple: function () { return undefined; },
                deactivateInputRipple: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCFormFieldFoundation.prototype.init = function () {
        this.adapter_.registerInteractionHandler('click', this.clickHandler_);
    };
    MDCFormFieldFoundation.prototype.destroy = function () {
        this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
    };
    MDCFormFieldFoundation.prototype.handleClick_ = function () {
        var _this = this;
        this.adapter_.activateInputRipple();
        requestAnimationFrame(function () { return _this.adapter_.deactivateInputRipple(); });
    };
    return MDCFormFieldFoundation;
}(MDCFoundation));
//# sourceMappingURL=foundation.js.map

/**
 * @license
 * Copyright 2017 Google Inc.
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
var MDCFormField = /** @class */ (function (_super) {
    __extends(MDCFormField, _super);
    function MDCFormField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCFormField.attachTo = function (root) {
        return new MDCFormField(root);
    };
    Object.defineProperty(MDCFormField.prototype, "input", {
        get: function () {
            return this.input_;
        },
        set: function (input) {
            this.input_ = input;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFormField.prototype, "label_", {
        get: function () {
            var LABEL_SELECTOR = MDCFormFieldFoundation.strings.LABEL_SELECTOR;
            return this.root_.querySelector(LABEL_SELECTOR);
        },
        enumerable: true,
        configurable: true
    });
    MDCFormField.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            activateInputRipple: function () {
                if (_this.input_ && _this.input_.ripple) {
                    _this.input_.ripple.activate();
                }
            },
            deactivateInputRipple: function () {
                if (_this.input_ && _this.input_.ripple) {
                    _this.input_.ripple.deactivate();
                }
            },
            deregisterInteractionHandler: function (evtType, handler) {
                if (_this.label_) {
                    _this.label_.removeEventListener(evtType, handler);
                }
            },
            registerInteractionHandler: function (evtType, handler) {
                if (_this.label_) {
                    _this.label_.addEventListener(evtType, handler);
                }
            },
        };
        return new MDCFormFieldFoundation(adapter);
    };
    return MDCFormField;
}(MDCComponent));
//# sourceMappingURL=component.js.map

/* node_modules\@smui\form-field\FormField.svelte generated by Svelte v3.16.4 */
const file$1 = "node_modules\\@smui\\form-field\\FormField.svelte";
const get_label_slot_changes = dirty => ({});
const get_label_slot_context = ctx => ({});

function create_fragment$1(ctx) {
	let div;
	let t;
	let label;
	let useActions_action;
	let useActions_action_1;
	let forwardEvents_action;
	let current;
	const default_slot_template = /*$$slots*/ ctx[10].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[9], null);
	const label_slot_template = /*$$slots*/ ctx[10].label;
	const label_slot = create_slot(label_slot_template, ctx, /*$$scope*/ ctx[9], get_label_slot_context);

	let label_levels = [
		{ for: /*inputId*/ ctx[3] },
		exclude(prefixFilter(/*$$props*/ ctx[7], "label$"), ["use"])
	];

	let label_data = {};

	for (let i = 0; i < label_levels.length; i += 1) {
		label_data = assign(label_data, label_levels[i]);
	}

	let div_levels = [
		{
			class: "\n    mdc-form-field\n    " + /*className*/ ctx[1] + "\n    " + (/*align*/ ctx[2] === "end"
			? "mdc-form-field--align-end"
			: "") + "\n  "
		},
		exclude(/*$$props*/ ctx[7], ["use", "class", "alignEnd", "inputId", "label$"])
	];

	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	const block = {
		c: function create() {
			div = element("div");
			if (default_slot) default_slot.c();
			t = space();
			label = element("label");
			if (label_slot) label_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if (default_slot) default_slot.l(div_nodes);
			t = claim_space(div_nodes);
			label = claim_element(div_nodes, "LABEL", { for: true });
			var label_nodes = children(label);
			if (label_slot) label_slot.l(label_nodes);
			label_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(label, label_data);
			add_location(label, file$1, 12, 2, 271);
			set_attributes(div, div_data);
			add_location(div, file$1, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			append_dev(div, t);
			append_dev(div, label);

			if (label_slot) {
				label_slot.m(label, null);
			}

			useActions_action = useActions.call(null, label, /*label$use*/ ctx[4]) || ({});
			/*div_binding*/ ctx[11](div);
			useActions_action_1 = useActions.call(null, div, /*use*/ ctx[0]) || ({});
			forwardEvents_action = /*forwardEvents*/ ctx[6].call(null, div) || ({});
			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot && default_slot.p && dirty[0] & /*$$scope*/ 512) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[9], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[9], dirty, null));
			}

			if (label_slot && label_slot.p && dirty[0] & /*$$scope*/ 512) {
				label_slot.p(get_slot_context(label_slot_template, ctx, /*$$scope*/ ctx[9], get_label_slot_context), get_slot_changes(label_slot_template, /*$$scope*/ ctx[9], dirty, get_label_slot_changes));
			}

			set_attributes(label, get_spread_update(label_levels, [
				dirty[0] & /*inputId*/ 8 && ({ for: /*inputId*/ ctx[3] }),
				dirty[0] & /*$$props*/ 128 && exclude(prefixFilter(/*$$props*/ ctx[7], "label$"), ["use"])
			]));

			if (is_function(useActions_action.update) && dirty[0] & /*label$use*/ 16) useActions_action.update.call(null, /*label$use*/ ctx[4]);

			set_attributes(div, get_spread_update(div_levels, [
				dirty[0] & /*className, align*/ 6 && ({
					class: "\n    mdc-form-field\n    " + /*className*/ ctx[1] + "\n    " + (/*align*/ ctx[2] === "end"
					? "mdc-form-field--align-end"
					: "") + "\n  "
				}),
				dirty[0] & /*$$props*/ 128 && exclude(/*$$props*/ ctx[7], ["use", "class", "alignEnd", "inputId", "label$"])
			]));

			if (is_function(useActions_action_1.update) && dirty[0] & /*use*/ 1) useActions_action_1.update.call(null, /*use*/ ctx[0]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			transition_in(label_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			transition_out(label_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (default_slot) default_slot.d(detaching);
			if (label_slot) label_slot.d(detaching);
			if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
			/*div_binding*/ ctx[11](null);
			if (useActions_action_1 && is_function(useActions_action_1.destroy)) useActions_action_1.destroy();
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

let counter = 0;

function instance$1($$self, $$props, $$invalidate) {
	const forwardEvents = forwardEventsBuilder(current_component);
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { align = "start" } = $$props;
	let { inputId = "SMUI-form-field-" + counter++ } = $$props;
	let { label$use = [] } = $$props;
	let element;
	let formField;
	setContext("SMUI:form-field", () => formField);
	setContext("SMUI:generic:input:props", { id: inputId });

	onMount(() => {
		formField = new MDCFormField(element);
	});

	onDestroy(() => {
		formField && formField.destroy();
	});

	let { $$slots = {}, $$scope } = $$props;

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(5, element = $$value);
		});
	}

	$$self.$set = $$new_props => {
		$$invalidate(7, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("align" in $$new_props) $$invalidate(2, align = $$new_props.align);
		if ("inputId" in $$new_props) $$invalidate(3, inputId = $$new_props.inputId);
		if ("label$use" in $$new_props) $$invalidate(4, label$use = $$new_props.label$use);
		if ("$$scope" in $$new_props) $$invalidate(9, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => {
		return {
			counter,
			use,
			className,
			align,
			inputId,
			label$use,
			element,
			formField
		};
	};

	$$self.$inject_state = $$new_props => {
		$$invalidate(7, $$props = assign(assign({}, $$props), $$new_props));
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("align" in $$props) $$invalidate(2, align = $$new_props.align);
		if ("inputId" in $$props) $$invalidate(3, inputId = $$new_props.inputId);
		if ("label$use" in $$props) $$invalidate(4, label$use = $$new_props.label$use);
		if ("element" in $$props) $$invalidate(5, element = $$new_props.element);
		if ("formField" in $$props) formField = $$new_props.formField;
	};

	$$props = exclude_internal_props($$props);

	return [
		use,
		className,
		align,
		inputId,
		label$use,
		element,
		forwardEvents,
		$$props,
		formField,
		$$scope,
		$$slots,
		div_binding
	];
}

class FormField extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$1, create_fragment$1, safe_not_equal, {
			use: 0,
			class: 1,
			align: 2,
			inputId: 3,
			label$use: 4
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "FormField",
			options,
			id: create_fragment$1.name
		});
	}

	get use() {
		throw new Error("<FormField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<FormField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<FormField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<FormField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get align() {
		throw new Error("<FormField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set align(value) {
		throw new Error("<FormField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get inputId() {
		throw new Error("<FormField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set inputId(value) {
		throw new Error("<FormField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get label$use() {
		throw new Error("<FormField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set label$use(value) {
		throw new Error("<FormField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src\routes\CheckboxPage.svelte generated by Svelte v3.16.4 */
const file$2 = "src\\routes\\CheckboxPage.svelte";

// (29:2) <span slot="header">
function create_header_slot_2(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("Checkbox");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true, class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, "Checkbox");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "slot", "header");
			attr_dev(span, "class", "svelte-xn2xk7");
			add_location(span, file$2, 28, 2, 740);
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
		source: "(29:2) <span slot=\\\"header\\\">",
		ctx
	});

	return block;
}

// (30:2) <span slot="description">
function create_description_slot(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("Checkbox allows the user to select one or more items from a set.");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true, class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, "Checkbox allows the user to select one or more items from a set.");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "slot", "description");
			attr_dev(span, "class", "svelte-xn2xk7");
			add_location(span, file$2, 29, 2, 779);
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
		source: "(30:2) <span slot=\\\"description\\\">",
		ctx
	});

	return block;
}

// (33:2) <span slot="import">
function create_import_slot(ctx) {
	let span;
	let t0;
	let br;
	let t1;

	const block = {
		c: function create() {
			span = element("span");
			t0 = text("import Switch from \"@smui/switch\";\r\n    ");
			br = element("br");
			t1 = text("\r\n    import FormField from \"@smui/form-field\";");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true, class: true });
			var span_nodes = children(span);
			t0 = claim_text(span_nodes, "import Switch from \"@smui/switch\";\r\n    ");
			br = claim_element(span_nodes, "BR", { class: true });
			t1 = claim_text(span_nodes, "\r\n    import FormField from \"@smui/form-field\";");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(br, "class", "svelte-xn2xk7");
			add_location(br, file$2, 34, 4, 955);
			attr_dev(span, "slot", "import");
			attr_dev(span, "class", "svelte-xn2xk7");
			add_location(span, file$2, 32, 2, 889);
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
		source: "(33:2) <span slot=\\\"import\\\">",
		ctx
	});

	return block;
}

// (40:6) <span slot="header">
function create_header_slot_1(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("Usage");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true, class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, "Usage");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "slot", "header");
			attr_dev(span, "class", "svelte-xn2xk7");
			add_location(span, file$2, 39, 6, 1066);
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
		source: "(40:6) <span slot=\\\"header\\\">",
		ctx
	});

	return block;
}

// (45:10) <span slot="label">
function create_label_slot_5(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("Checked");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true, class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, "Checked");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "slot", "label");
			attr_dev(span, "class", "svelte-xn2xk7");
			add_location(span, file$2, 44, 10, 1231);
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
		id: create_label_slot_5.name,
		type: "slot",
		source: "(45:10) <span slot=\\\"label\\\">",
		ctx
	});

	return block;
}

// (43:8) <FormField>
function create_default_slot_8(ctx) {
	let updating_checked;
	let t;
	let current;

	function checkbox_checked_binding(value) {
		/*checkbox_checked_binding*/ ctx[6].call(null, value);
	}

	let checkbox_props = {};

	if (/*selected1*/ ctx[0] !== void 0) {
		checkbox_props.checked = /*selected1*/ ctx[0];
	}

	const checkbox = new Checkbox({ props: checkbox_props, $$inline: true });
	binding_callbacks.push(() => bind(checkbox, "checked", checkbox_checked_binding));

	const block = {
		c: function create() {
			create_component(checkbox.$$.fragment);
			t = space();
		},
		l: function claim(nodes) {
			claim_component(checkbox.$$.fragment, nodes);
			t = claim_space(nodes);
		},
		m: function mount(target, anchor) {
			mount_component(checkbox, target, anchor);
			insert_dev(target, t, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const checkbox_changes = {};

			if (!updating_checked && dirty[0] & /*selected1*/ 1) {
				updating_checked = true;
				checkbox_changes.checked = /*selected1*/ ctx[0];
				add_flush_callback(() => updating_checked = false);
			}

			checkbox.$set(checkbox_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(checkbox.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(checkbox.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(checkbox, detaching);
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_8.name,
		type: "slot",
		source: "(43:8) <FormField>",
		ctx
	});

	return block;
}

// (51:10) <span slot="label">
function create_label_slot_4(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("Unchecked");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true, class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, "Unchecked");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "slot", "label");
			attr_dev(span, "class", "svelte-xn2xk7");
			add_location(span, file$2, 50, 10, 1431);
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
		id: create_label_slot_4.name,
		type: "slot",
		source: "(51:10) <span slot=\\\"label\\\">",
		ctx
	});

	return block;
}

// (49:8) <FormField>
function create_default_slot_7(ctx) {
	let updating_checked;
	let t;
	let current;

	function checkbox_checked_binding_1(value) {
		/*checkbox_checked_binding_1*/ ctx[7].call(null, value);
	}

	let checkbox_props = {};

	if (/*selected2*/ ctx[1] !== void 0) {
		checkbox_props.checked = /*selected2*/ ctx[1];
	}

	const checkbox = new Checkbox({ props: checkbox_props, $$inline: true });
	binding_callbacks.push(() => bind(checkbox, "checked", checkbox_checked_binding_1));

	const block = {
		c: function create() {
			create_component(checkbox.$$.fragment);
			t = space();
		},
		l: function claim(nodes) {
			claim_component(checkbox.$$.fragment, nodes);
			t = claim_space(nodes);
		},
		m: function mount(target, anchor) {
			mount_component(checkbox, target, anchor);
			insert_dev(target, t, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const checkbox_changes = {};

			if (!updating_checked && dirty[0] & /*selected2*/ 2) {
				updating_checked = true;
				checkbox_changes.checked = /*selected2*/ ctx[1];
				add_flush_callback(() => updating_checked = false);
			}

			checkbox.$set(checkbox_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(checkbox.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(checkbox.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(checkbox, detaching);
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_7.name,
		type: "slot",
		source: "(49:8) <FormField>",
		ctx
	});

	return block;
}

// (57:10) <span slot="label">
function create_label_slot_3(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("Disabled Checked");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true, class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, "Disabled Checked");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "slot", "label");
			attr_dev(span, "class", "svelte-xn2xk7");
			add_location(span, file$2, 56, 10, 1642);
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
		id: create_label_slot_3.name,
		type: "slot",
		source: "(57:10) <span slot=\\\"label\\\">",
		ctx
	});

	return block;
}

// (55:8) <FormField>
function create_default_slot_6(ctx) {
	let updating_checked;
	let t;
	let current;

	function checkbox_checked_binding_2(value) {
		/*checkbox_checked_binding_2*/ ctx[8].call(null, value);
	}

	let checkbox_props = { disabled: true };

	if (/*selected3*/ ctx[2] !== void 0) {
		checkbox_props.checked = /*selected3*/ ctx[2];
	}

	const checkbox = new Checkbox({ props: checkbox_props, $$inline: true });
	binding_callbacks.push(() => bind(checkbox, "checked", checkbox_checked_binding_2));

	const block = {
		c: function create() {
			create_component(checkbox.$$.fragment);
			t = space();
		},
		l: function claim(nodes) {
			claim_component(checkbox.$$.fragment, nodes);
			t = claim_space(nodes);
		},
		m: function mount(target, anchor) {
			mount_component(checkbox, target, anchor);
			insert_dev(target, t, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const checkbox_changes = {};

			if (!updating_checked && dirty[0] & /*selected3*/ 4) {
				updating_checked = true;
				checkbox_changes.checked = /*selected3*/ ctx[2];
				add_flush_callback(() => updating_checked = false);
			}

			checkbox.$set(checkbox_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(checkbox.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(checkbox.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(checkbox, detaching);
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_6.name,
		type: "slot",
		source: "(55:8) <FormField>",
		ctx
	});

	return block;
}

// (63:10) <span slot="label">
function create_label_slot_2(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("Disabled Unchecked");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true, class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, "Disabled Unchecked");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "slot", "label");
			attr_dev(span, "class", "svelte-xn2xk7");
			add_location(span, file$2, 62, 10, 1860);
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
		id: create_label_slot_2.name,
		type: "slot",
		source: "(63:10) <span slot=\\\"label\\\">",
		ctx
	});

	return block;
}

// (61:8) <FormField>
function create_default_slot_5(ctx) {
	let updating_checked;
	let t;
	let current;

	function checkbox_checked_binding_3(value) {
		/*checkbox_checked_binding_3*/ ctx[9].call(null, value);
	}

	let checkbox_props = { disabled: true };

	if (/*selected4*/ ctx[3] !== void 0) {
		checkbox_props.checked = /*selected4*/ ctx[3];
	}

	const checkbox = new Checkbox({ props: checkbox_props, $$inline: true });
	binding_callbacks.push(() => bind(checkbox, "checked", checkbox_checked_binding_3));

	const block = {
		c: function create() {
			create_component(checkbox.$$.fragment);
			t = space();
		},
		l: function claim(nodes) {
			claim_component(checkbox.$$.fragment, nodes);
			t = claim_space(nodes);
		},
		m: function mount(target, anchor) {
			mount_component(checkbox, target, anchor);
			insert_dev(target, t, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const checkbox_changes = {};

			if (!updating_checked && dirty[0] & /*selected4*/ 8) {
				updating_checked = true;
				checkbox_changes.checked = /*selected4*/ ctx[3];
				add_flush_callback(() => updating_checked = false);
			}

			checkbox.$set(checkbox_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(checkbox.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(checkbox.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(checkbox, detaching);
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_5.name,
		type: "slot",
		source: "(61:8) <FormField>",
		ctx
	});

	return block;
}

// (60:6) <div slot="horizontal" class="mr-8 mb-8">
function create_horizontal_slot_1(ctx) {
	let div0;
	let div1;
	let div2;
	let div3;
	let current;

	const formfield0 = new FormField({
			props: {
				$$slots: {
					default: [create_default_slot_8],
					label: [create_label_slot_5]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const formfield1 = new FormField({
			props: {
				$$slots: {
					default: [create_default_slot_7],
					label: [create_label_slot_4]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const formfield2 = new FormField({
			props: {
				$$slots: {
					default: [create_default_slot_6],
					label: [create_label_slot_3]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const formfield3 = new FormField({
			props: {
				$$slots: {
					default: [create_default_slot_5],
					label: [create_label_slot_2]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div0 = element("div");
			create_component(formfield0.$$.fragment);
			div1 = element("div");
			create_component(formfield1.$$.fragment);
			div2 = element("div");
			create_component(formfield2.$$.fragment);
			div3 = element("div");
			create_component(formfield3.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div0_nodes = children(div0);
			claim_component(formfield0.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			div1 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div1_nodes = children(div1);
			claim_component(formfield1.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			div2 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div2_nodes = children(div2);
			claim_component(formfield2.$$.fragment, div2_nodes);
			div2_nodes.forEach(detach_dev);
			div3 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div3_nodes = children(div3);
			claim_component(formfield3.$$.fragment, div3_nodes);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "slot", "horizontal");
			attr_dev(div0, "class", "mr-8 mb-8 svelte-xn2xk7");
			add_location(div0, file$2, 41, 6, 1108);
			attr_dev(div1, "slot", "horizontal");
			attr_dev(div1, "class", "mr-8 mb-8 svelte-xn2xk7");
			add_location(div1, file$2, 47, 6, 1308);
			attr_dev(div2, "slot", "horizontal");
			attr_dev(div2, "class", "mr-8 mb-8 svelte-xn2xk7");
			add_location(div2, file$2, 53, 6, 1510);
			attr_dev(div3, "slot", "horizontal");
			attr_dev(div3, "class", "mr-8 mb-8 svelte-xn2xk7");
			add_location(div3, file$2, 59, 6, 1728);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			mount_component(formfield0, div0, null);
			insert_dev(target, div1, anchor);
			mount_component(formfield1, div1, null);
			insert_dev(target, div2, anchor);
			mount_component(formfield2, div2, null);
			insert_dev(target, div3, anchor);
			mount_component(formfield3, div3, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const formfield0_changes = {};

			if (dirty[0] & /*$$scope, selected1*/ 4097) {
				formfield0_changes.$$scope = { dirty, ctx };
			}

			formfield0.$set(formfield0_changes);
			const formfield1_changes = {};

			if (dirty[0] & /*$$scope, selected2*/ 4098) {
				formfield1_changes.$$scope = { dirty, ctx };
			}

			formfield1.$set(formfield1_changes);
			const formfield2_changes = {};

			if (dirty[0] & /*$$scope, selected3*/ 4100) {
				formfield2_changes.$$scope = { dirty, ctx };
			}

			formfield2.$set(formfield2_changes);
			const formfield3_changes = {};

			if (dirty[0] & /*$$scope, selected4*/ 4104) {
				formfield3_changes.$$scope = { dirty, ctx };
			}

			formfield3.$set(formfield3_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(formfield0.$$.fragment, local);
			transition_in(formfield1.$$.fragment, local);
			transition_in(formfield2.$$.fragment, local);
			transition_in(formfield3.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(formfield0.$$.fragment, local);
			transition_out(formfield1.$$.fragment, local);
			transition_out(formfield2.$$.fragment, local);
			transition_out(formfield3.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			destroy_component(formfield0);
			if (detaching) detach_dev(div1);
			destroy_component(formfield1);
			if (detaching) detach_dev(div2);
			destroy_component(formfield2);
			if (detaching) detach_dev(div3);
			destroy_component(formfield3);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_horizontal_slot_1.name,
		type: "slot",
		source: "(60:6) <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">",
		ctx
	});

	return block;
}

// (39:4) <Example>
function create_default_slot_4(ctx) {
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
		id: create_default_slot_4.name,
		type: "slot",
		source: "(39:4) <Example>",
		ctx
	});

	return block;
}

// (68:6) <span slot="header">
function create_header_slot(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("Labels");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true, class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, "Labels");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "slot", "header");
			attr_dev(span, "class", "svelte-xn2xk7");
			add_location(span, file$2, 67, 6, 1979);
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
		source: "(68:6) <span slot=\\\"header\\\">",
		ctx
	});

	return block;
}

// (73:10) <span slot="label">
function create_label_slot_1(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("Right label");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true, class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, "Right label");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "slot", "label");
			attr_dev(span, "class", "svelte-xn2xk7");
			add_location(span, file$2, 72, 10, 2145);
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
		id: create_label_slot_1.name,
		type: "slot",
		source: "(73:10) <span slot=\\\"label\\\">",
		ctx
	});

	return block;
}

// (71:8) <FormField>
function create_default_slot_3(ctx) {
	let updating_checked;
	let t;
	let current;

	function checkbox_checked_binding_4(value) {
		/*checkbox_checked_binding_4*/ ctx[10].call(null, value);
	}

	let checkbox_props = {};

	if (/*selected5*/ ctx[4] !== void 0) {
		checkbox_props.checked = /*selected5*/ ctx[4];
	}

	const checkbox = new Checkbox({ props: checkbox_props, $$inline: true });
	binding_callbacks.push(() => bind(checkbox, "checked", checkbox_checked_binding_4));

	const block = {
		c: function create() {
			create_component(checkbox.$$.fragment);
			t = space();
		},
		l: function claim(nodes) {
			claim_component(checkbox.$$.fragment, nodes);
			t = claim_space(nodes);
		},
		m: function mount(target, anchor) {
			mount_component(checkbox, target, anchor);
			insert_dev(target, t, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const checkbox_changes = {};

			if (!updating_checked && dirty[0] & /*selected5*/ 16) {
				updating_checked = true;
				checkbox_changes.checked = /*selected5*/ ctx[4];
				add_flush_callback(() => updating_checked = false);
			}

			checkbox.$set(checkbox_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(checkbox.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(checkbox.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(checkbox, detaching);
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3.name,
		type: "slot",
		source: "(71:8) <FormField>",
		ctx
	});

	return block;
}

// (79:10) <span slot="label">
function create_label_slot(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("Left label");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true, class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, "Left label");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "slot", "label");
			attr_dev(span, "class", "svelte-xn2xk7");
			add_location(span, file$2, 78, 10, 2361);
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
		id: create_label_slot.name,
		type: "slot",
		source: "(79:10) <span slot=\\\"label\\\">",
		ctx
	});

	return block;
}

// (77:8) <FormField align="end">
function create_default_slot_2(ctx) {
	let updating_checked;
	let t;
	let current;

	function checkbox_checked_binding_5(value) {
		/*checkbox_checked_binding_5*/ ctx[11].call(null, value);
	}

	let checkbox_props = {};

	if (/*selected6*/ ctx[5] !== void 0) {
		checkbox_props.checked = /*selected6*/ ctx[5];
	}

	const checkbox = new Checkbox({ props: checkbox_props, $$inline: true });
	binding_callbacks.push(() => bind(checkbox, "checked", checkbox_checked_binding_5));

	const block = {
		c: function create() {
			create_component(checkbox.$$.fragment);
			t = space();
		},
		l: function claim(nodes) {
			claim_component(checkbox.$$.fragment, nodes);
			t = claim_space(nodes);
		},
		m: function mount(target, anchor) {
			mount_component(checkbox, target, anchor);
			insert_dev(target, t, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const checkbox_changes = {};

			if (!updating_checked && dirty[0] & /*selected6*/ 32) {
				updating_checked = true;
				checkbox_changes.checked = /*selected6*/ ctx[5];
				add_flush_callback(() => updating_checked = false);
			}

			checkbox.$set(checkbox_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(checkbox.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(checkbox.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(checkbox, detaching);
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2.name,
		type: "slot",
		source: "(77:8) <FormField align=\\\"end\\\">",
		ctx
	});

	return block;
}

// (76:6) <div slot="horizontal" class="mr-8 mb-8">
function create_horizontal_slot(ctx) {
	let div0;
	let div1;
	let current;

	const formfield0 = new FormField({
			props: {
				$$slots: {
					default: [create_default_slot_3],
					label: [create_label_slot_1]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const formfield1 = new FormField({
			props: {
				align: "end",
				$$slots: {
					default: [create_default_slot_2],
					label: [create_label_slot]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div0 = element("div");
			create_component(formfield0.$$.fragment);
			div1 = element("div");
			create_component(formfield1.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div0_nodes = children(div0);
			claim_component(formfield0.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			div1 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div1_nodes = children(div1);
			claim_component(formfield1.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "slot", "horizontal");
			attr_dev(div0, "class", "mr-8 mb-8 svelte-xn2xk7");
			add_location(div0, file$2, 69, 6, 2022);
			attr_dev(div1, "slot", "horizontal");
			attr_dev(div1, "class", "mr-8 mb-8 svelte-xn2xk7");
			add_location(div1, file$2, 75, 6, 2226);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			mount_component(formfield0, div0, null);
			insert_dev(target, div1, anchor);
			mount_component(formfield1, div1, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const formfield0_changes = {};

			if (dirty[0] & /*$$scope, selected5*/ 4112) {
				formfield0_changes.$$scope = { dirty, ctx };
			}

			formfield0.$set(formfield0_changes);
			const formfield1_changes = {};

			if (dirty[0] & /*$$scope, selected6*/ 4128) {
				formfield1_changes.$$scope = { dirty, ctx };
			}

			formfield1.$set(formfield1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(formfield0.$$.fragment, local);
			transition_in(formfield1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(formfield0.$$.fragment, local);
			transition_out(formfield1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			destroy_component(formfield0);
			if (detaching) detach_dev(div1);
			destroy_component(formfield1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_horizontal_slot.name,
		type: "slot",
		source: "(76:6) <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">",
		ctx
	});

	return block;
}

// (67:4) <Example>
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
		source: "(67:4) <Example>",
		ctx
	});

	return block;
}

// (38:2) <div slot="content">
function create_content_slot(ctx) {
	let div;
	let t;
	let current;

	const example0 = new Example({
			props: {
				$$slots: {
					default: [create_default_slot_4],
					horizontal: [create_horizontal_slot_1],
					header: [create_header_slot_1]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const example1 = new Example({
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
			t = space();
			create_component(example1.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { slot: true, class: true });
			var div_nodes = children(div);
			claim_component(example0.$$.fragment, div_nodes);
			t = claim_space(div_nodes);
			claim_component(example1.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "slot", "content");
			attr_dev(div, "class", "svelte-xn2xk7");
			add_location(div, file$2, 37, 2, 1023);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(example0, div, null);
			append_dev(div, t);
			mount_component(example1, div, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const example0_changes = {};

			if (dirty[0] & /*$$scope, selected4, selected3, selected2, selected1*/ 4111) {
				example0_changes.$$scope = { dirty, ctx };
			}

			example0.$set(example0_changes);
			const example1_changes = {};

			if (dirty[0] & /*$$scope, selected6, selected5*/ 4144) {
				example1_changes.$$scope = { dirty, ctx };
			}

			example1.$set(example1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(example0.$$.fragment, local);
			transition_in(example1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(example0.$$.fragment, local);
			transition_out(example1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(example0);
			destroy_component(example1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_content_slot.name,
		type: "slot",
		source: "(38:2) <div slot=\\\"content\\\">",
		ctx
	});

	return block;
}

// (28:0) <Page>
function create_default_slot(ctx) {
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
		id: create_default_slot.name,
		type: "slot",
		source: "(28:0) <Page>",
		ctx
	});

	return block;
}

function create_fragment$2(ctx) {
	let current;

	const page = new Page({
			props: {
				$$slots: {
					default: [create_default_slot],
					content: [create_content_slot],
					import: [create_import_slot],
					description: [create_description_slot],
					header: [create_header_slot_2]
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

			if (dirty[0] & /*$$scope, selected6, selected5, selected4, selected3, selected2, selected1*/ 4159) {
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
	let selected1 = true;
	let selected2 = false;
	let selected3 = true;
	let selected4 = false;
	let selected5 = false;
	let selected6 = false;

	function checkbox_checked_binding(value) {
		selected1 = value;
		$$invalidate(0, selected1);
	}

	function checkbox_checked_binding_1(value) {
		selected2 = value;
		$$invalidate(1, selected2);
	}

	function checkbox_checked_binding_2(value) {
		selected3 = value;
		$$invalidate(2, selected3);
	}

	function checkbox_checked_binding_3(value) {
		selected4 = value;
		$$invalidate(3, selected4);
	}

	function checkbox_checked_binding_4(value) {
		selected5 = value;
		$$invalidate(4, selected5);
	}

	function checkbox_checked_binding_5(value) {
		selected6 = value;
		$$invalidate(5, selected6);
	}

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("selected1" in $$props) $$invalidate(0, selected1 = $$props.selected1);
		if ("selected2" in $$props) $$invalidate(1, selected2 = $$props.selected2);
		if ("selected3" in $$props) $$invalidate(2, selected3 = $$props.selected3);
		if ("selected4" in $$props) $$invalidate(3, selected4 = $$props.selected4);
		if ("selected5" in $$props) $$invalidate(4, selected5 = $$props.selected5);
		if ("selected6" in $$props) $$invalidate(5, selected6 = $$props.selected6);
	};

	return [
		selected1,
		selected2,
		selected3,
		selected4,
		selected5,
		selected6,
		checkbox_checked_binding,
		checkbox_checked_binding_1,
		checkbox_checked_binding_2,
		checkbox_checked_binding_3,
		checkbox_checked_binding_4,
		checkbox_checked_binding_5
	];
}

class CheckboxPage extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "CheckboxPage",
			options,
			id: create_fragment$2.name
		});
	}
}

export default CheckboxPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tib3hQYWdlLmQzN2I1MTc4LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2FuaW1hdGlvbi91dGlsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9jaGVja2JveC9jb25zdGFudHMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2NoZWNrYm94L2ZvdW5kYXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2NoZWNrYm94L2NvbXBvbmVudC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS9jaGVja2JveC9DaGVja2JveC5zdmVsdGUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Zvcm0tZmllbGQvY29uc3RhbnRzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9mb3JtLWZpZWxkL2ZvdW5kYXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Zvcm0tZmllbGQvY29tcG9uZW50LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL2Zvcm0tZmllbGQvRm9ybUZpZWxkLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvQ2hlY2tib3hQYWdlLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBjc3NQcm9wZXJ0eU5hbWVNYXAgPSB7XG4gICAgYW5pbWF0aW9uOiB7XG4gICAgICAgIHByZWZpeGVkOiAnLXdlYmtpdC1hbmltYXRpb24nLFxuICAgICAgICBzdGFuZGFyZDogJ2FuaW1hdGlvbicsXG4gICAgfSxcbiAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgcHJlZml4ZWQ6ICctd2Via2l0LXRyYW5zZm9ybScsXG4gICAgICAgIHN0YW5kYXJkOiAndHJhbnNmb3JtJyxcbiAgICB9LFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgcHJlZml4ZWQ6ICctd2Via2l0LXRyYW5zaXRpb24nLFxuICAgICAgICBzdGFuZGFyZDogJ3RyYW5zaXRpb24nLFxuICAgIH0sXG59O1xudmFyIGpzRXZlbnRUeXBlTWFwID0ge1xuICAgIGFuaW1hdGlvbmVuZDoge1xuICAgICAgICBjc3NQcm9wZXJ0eTogJ2FuaW1hdGlvbicsXG4gICAgICAgIHByZWZpeGVkOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICAgICAgc3RhbmRhcmQ6ICdhbmltYXRpb25lbmQnLFxuICAgIH0sXG4gICAgYW5pbWF0aW9uaXRlcmF0aW9uOiB7XG4gICAgICAgIGNzc1Byb3BlcnR5OiAnYW5pbWF0aW9uJyxcbiAgICAgICAgcHJlZml4ZWQ6ICd3ZWJraXRBbmltYXRpb25JdGVyYXRpb24nLFxuICAgICAgICBzdGFuZGFyZDogJ2FuaW1hdGlvbml0ZXJhdGlvbicsXG4gICAgfSxcbiAgICBhbmltYXRpb25zdGFydDoge1xuICAgICAgICBjc3NQcm9wZXJ0eTogJ2FuaW1hdGlvbicsXG4gICAgICAgIHByZWZpeGVkOiAnd2Via2l0QW5pbWF0aW9uU3RhcnQnLFxuICAgICAgICBzdGFuZGFyZDogJ2FuaW1hdGlvbnN0YXJ0JyxcbiAgICB9LFxuICAgIHRyYW5zaXRpb25lbmQ6IHtcbiAgICAgICAgY3NzUHJvcGVydHk6ICd0cmFuc2l0aW9uJyxcbiAgICAgICAgcHJlZml4ZWQ6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICAgICAgc3RhbmRhcmQ6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICB9LFxufTtcbmZ1bmN0aW9uIGlzV2luZG93KHdpbmRvd09iaikge1xuICAgIHJldHVybiBCb29sZWFuKHdpbmRvd09iai5kb2N1bWVudCkgJiYgdHlwZW9mIHdpbmRvd09iai5kb2N1bWVudC5jcmVhdGVFbGVtZW50ID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENvcnJlY3RQcm9wZXJ0eU5hbWUod2luZG93T2JqLCBjc3NQcm9wZXJ0eSkge1xuICAgIGlmIChpc1dpbmRvdyh3aW5kb3dPYmopICYmIGNzc1Byb3BlcnR5IGluIGNzc1Byb3BlcnR5TmFtZU1hcCkge1xuICAgICAgICB2YXIgZWwgPSB3aW5kb3dPYmouZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHZhciBfYSA9IGNzc1Byb3BlcnR5TmFtZU1hcFtjc3NQcm9wZXJ0eV0sIHN0YW5kYXJkID0gX2Euc3RhbmRhcmQsIHByZWZpeGVkID0gX2EucHJlZml4ZWQ7XG4gICAgICAgIHZhciBpc1N0YW5kYXJkID0gc3RhbmRhcmQgaW4gZWwuc3R5bGU7XG4gICAgICAgIHJldHVybiBpc1N0YW5kYXJkID8gc3RhbmRhcmQgOiBwcmVmaXhlZDtcbiAgICB9XG4gICAgcmV0dXJuIGNzc1Byb3BlcnR5O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENvcnJlY3RFdmVudE5hbWUod2luZG93T2JqLCBldmVudFR5cGUpIHtcbiAgICBpZiAoaXNXaW5kb3cod2luZG93T2JqKSAmJiBldmVudFR5cGUgaW4ganNFdmVudFR5cGVNYXApIHtcbiAgICAgICAgdmFyIGVsID0gd2luZG93T2JqLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB2YXIgX2EgPSBqc0V2ZW50VHlwZU1hcFtldmVudFR5cGVdLCBzdGFuZGFyZCA9IF9hLnN0YW5kYXJkLCBwcmVmaXhlZCA9IF9hLnByZWZpeGVkLCBjc3NQcm9wZXJ0eSA9IF9hLmNzc1Byb3BlcnR5O1xuICAgICAgICB2YXIgaXNTdGFuZGFyZCA9IGNzc1Byb3BlcnR5IGluIGVsLnN0eWxlO1xuICAgICAgICByZXR1cm4gaXNTdGFuZGFyZCA/IHN0YW5kYXJkIDogcHJlZml4ZWQ7XG4gICAgfVxuICAgIHJldHVybiBldmVudFR5cGU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuZXhwb3J0IHZhciBjc3NDbGFzc2VzID0ge1xuICAgIEFOSU1fQ0hFQ0tFRF9JTkRFVEVSTUlOQVRFOiAnbWRjLWNoZWNrYm94LS1hbmltLWNoZWNrZWQtaW5kZXRlcm1pbmF0ZScsXG4gICAgQU5JTV9DSEVDS0VEX1VOQ0hFQ0tFRDogJ21kYy1jaGVja2JveC0tYW5pbS1jaGVja2VkLXVuY2hlY2tlZCcsXG4gICAgQU5JTV9JTkRFVEVSTUlOQVRFX0NIRUNLRUQ6ICdtZGMtY2hlY2tib3gtLWFuaW0taW5kZXRlcm1pbmF0ZS1jaGVja2VkJyxcbiAgICBBTklNX0lOREVURVJNSU5BVEVfVU5DSEVDS0VEOiAnbWRjLWNoZWNrYm94LS1hbmltLWluZGV0ZXJtaW5hdGUtdW5jaGVja2VkJyxcbiAgICBBTklNX1VOQ0hFQ0tFRF9DSEVDS0VEOiAnbWRjLWNoZWNrYm94LS1hbmltLXVuY2hlY2tlZC1jaGVja2VkJyxcbiAgICBBTklNX1VOQ0hFQ0tFRF9JTkRFVEVSTUlOQVRFOiAnbWRjLWNoZWNrYm94LS1hbmltLXVuY2hlY2tlZC1pbmRldGVybWluYXRlJyxcbiAgICBCQUNLR1JPVU5EOiAnbWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kJyxcbiAgICBDSEVDS0VEOiAnbWRjLWNoZWNrYm94LS1jaGVja2VkJyxcbiAgICBDSEVDS01BUks6ICdtZGMtY2hlY2tib3hfX2NoZWNrbWFyaycsXG4gICAgQ0hFQ0tNQVJLX1BBVEg6ICdtZGMtY2hlY2tib3hfX2NoZWNrbWFyay1wYXRoJyxcbiAgICBESVNBQkxFRDogJ21kYy1jaGVja2JveC0tZGlzYWJsZWQnLFxuICAgIElOREVURVJNSU5BVEU6ICdtZGMtY2hlY2tib3gtLWluZGV0ZXJtaW5hdGUnLFxuICAgIE1JWEVETUFSSzogJ21kYy1jaGVja2JveF9fbWl4ZWRtYXJrJyxcbiAgICBOQVRJVkVfQ09OVFJPTDogJ21kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2wnLFxuICAgIFJPT1Q6ICdtZGMtY2hlY2tib3gnLFxuICAgIFNFTEVDVEVEOiAnbWRjLWNoZWNrYm94LS1zZWxlY3RlZCcsXG4gICAgVVBHUkFERUQ6ICdtZGMtY2hlY2tib3gtLXVwZ3JhZGVkJyxcbn07XG5leHBvcnQgdmFyIHN0cmluZ3MgPSB7XG4gICAgQVJJQV9DSEVDS0VEX0FUVFI6ICdhcmlhLWNoZWNrZWQnLFxuICAgIEFSSUFfQ0hFQ0tFRF9JTkRFVEVSTUlOQVRFX1ZBTFVFOiAnbWl4ZWQnLFxuICAgIE5BVElWRV9DT05UUk9MX1NFTEVDVE9SOiAnLm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2wnLFxuICAgIFRSQU5TSVRJT05fU1RBVEVfQ0hFQ0tFRDogJ2NoZWNrZWQnLFxuICAgIFRSQU5TSVRJT05fU1RBVEVfSU5ERVRFUk1JTkFURTogJ2luZGV0ZXJtaW5hdGUnLFxuICAgIFRSQU5TSVRJT05fU1RBVEVfSU5JVDogJ2luaXQnLFxuICAgIFRSQU5TSVRJT05fU1RBVEVfVU5DSEVDS0VEOiAndW5jaGVja2VkJyxcbn07XG5leHBvcnQgdmFyIG51bWJlcnMgPSB7XG4gICAgQU5JTV9FTkRfTEFUQ0hfTVM6IDI1MCxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3NlcywgbnVtYmVycywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBNRENDaGVja2JveEZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDQ2hlY2tib3hGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ0NoZWNrYm94Rm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ0NoZWNrYm94Rm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmN1cnJlbnRDaGVja1N0YXRlXyA9IHN0cmluZ3MuVFJBTlNJVElPTl9TVEFURV9JTklUO1xuICAgICAgICBfdGhpcy5jdXJyZW50QW5pbWF0aW9uQ2xhc3NfID0gJyc7XG4gICAgICAgIF90aGlzLmFuaW1FbmRMYXRjaFRpbWVyXyA9IDA7XG4gICAgICAgIF90aGlzLmVuYWJsZUFuaW1hdGlvbkVuZEhhbmRsZXJfID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0NoZWNrYm94Rm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0NoZWNrYm94Rm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0NoZWNrYm94Rm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVycztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0NoZWNrYm94Rm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGZvcmNlTGF5b3V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgaGFzTmF0aXZlQ29udHJvbDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgaXNBdHRhY2hlZFRvRE9NOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBpc0NoZWNrZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGlzSW5kZXRlcm1pbmF0ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVOYXRpdmVDb250cm9sQXR0cjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldE5hdGl2ZUNvbnRyb2xBdHRyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0TmF0aXZlQ29udHJvbERpc2FibGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENDaGVja2JveEZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudENoZWNrU3RhdGVfID0gdGhpcy5kZXRlcm1pbmVDaGVja1N0YXRlXygpO1xuICAgICAgICB0aGlzLnVwZGF0ZUFyaWFDaGVja2VkXygpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuVVBHUkFERUQpO1xuICAgIH07XG4gICAgTURDQ2hlY2tib3hGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hbmltRW5kTGF0Y2hUaW1lcl8pO1xuICAgIH07XG4gICAgTURDQ2hlY2tib3hGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXREaXNhYmxlZCA9IGZ1bmN0aW9uIChkaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldE5hdGl2ZUNvbnRyb2xEaXNhYmxlZChkaXNhYmxlZCk7XG4gICAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkRJU0FCTEVEKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5ESVNBQkxFRCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIGFuaW1hdGlvbmVuZCBldmVudCBmb3IgdGhlIGNoZWNrYm94XG4gICAgICovXG4gICAgTURDQ2hlY2tib3hGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVBbmltYXRpb25FbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVBbmltYXRpb25FbmRIYW5kbGVyXykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFuaW1FbmRMYXRjaFRpbWVyXyk7XG4gICAgICAgIHRoaXMuYW5pbUVuZExhdGNoVGltZXJfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhfdGhpcy5jdXJyZW50QW5pbWF0aW9uQ2xhc3NfKTtcbiAgICAgICAgICAgIF90aGlzLmVuYWJsZUFuaW1hdGlvbkVuZEhhbmRsZXJfID0gZmFsc2U7XG4gICAgICAgIH0sIG51bWJlcnMuQU5JTV9FTkRfTEFUQ0hfTVMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgY2hhbmdlIGV2ZW50IGZvciB0aGUgY2hlY2tib3hcbiAgICAgKi9cbiAgICBNRENDaGVja2JveEZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uQ2hlY2tTdGF0ZV8oKTtcbiAgICB9O1xuICAgIE1EQ0NoZWNrYm94Rm91bmRhdGlvbi5wcm90b3R5cGUudHJhbnNpdGlvbkNoZWNrU3RhdGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuYWRhcHRlcl8uaGFzTmF0aXZlQ29udHJvbCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9sZFN0YXRlID0gdGhpcy5jdXJyZW50Q2hlY2tTdGF0ZV87XG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IHRoaXMuZGV0ZXJtaW5lQ2hlY2tTdGF0ZV8oKTtcbiAgICAgICAgaWYgKG9sZFN0YXRlID09PSBuZXdTdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlQXJpYUNoZWNrZWRfKCk7XG4gICAgICAgIHZhciBUUkFOU0lUSU9OX1NUQVRFX1VOQ0hFQ0tFRCA9IHN0cmluZ3MuVFJBTlNJVElPTl9TVEFURV9VTkNIRUNLRUQ7XG4gICAgICAgIHZhciBTRUxFQ1RFRCA9IGNzc0NsYXNzZXMuU0VMRUNURUQ7XG4gICAgICAgIGlmIChuZXdTdGF0ZSA9PT0gVFJBTlNJVElPTl9TVEFURV9VTkNIRUNLRUQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoU0VMRUNURUQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhTRUxFQ1RFRCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgdG8gZW5zdXJlIHRoYXQgdGhlcmUgaXNuJ3QgYSBwcmV2aW91c2x5IGV4aXN0aW5nIGFuaW1hdGlvbiBjbGFzcywgaW4gY2FzZSBmb3IgZXhhbXBsZVxuICAgICAgICAvLyB0aGUgdXNlciBpbnRlcmFjdGVkIHdpdGggdGhlIGNoZWNrYm94IGJlZm9yZSB0aGUgYW5pbWF0aW9uIHdhcyBmaW5pc2hlZC5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEFuaW1hdGlvbkNsYXNzXy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hbmltRW5kTGF0Y2hUaW1lcl8pO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5mb3JjZUxheW91dCgpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyh0aGlzLmN1cnJlbnRBbmltYXRpb25DbGFzc18pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbkNsYXNzXyA9IHRoaXMuZ2V0VHJhbnNpdGlvbkFuaW1hdGlvbkNsYXNzXyhvbGRTdGF0ZSwgbmV3U3RhdGUpO1xuICAgICAgICB0aGlzLmN1cnJlbnRDaGVja1N0YXRlXyA9IG5ld1N0YXRlO1xuICAgICAgICAvLyBDaGVjayBmb3IgcGFyZW50Tm9kZSBzbyB0aGF0IGFuaW1hdGlvbnMgYXJlIG9ubHkgcnVuIHdoZW4gdGhlIGVsZW1lbnQgaXMgYXR0YWNoZWRcbiAgICAgICAgLy8gdG8gdGhlIERPTS5cbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNBdHRhY2hlZFRvRE9NKCkgJiYgdGhpcy5jdXJyZW50QW5pbWF0aW9uQ2xhc3NfLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3ModGhpcy5jdXJyZW50QW5pbWF0aW9uQ2xhc3NfKTtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlQW5pbWF0aW9uRW5kSGFuZGxlcl8gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENDaGVja2JveEZvdW5kYXRpb24ucHJvdG90eXBlLmRldGVybWluZUNoZWNrU3RhdGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgVFJBTlNJVElPTl9TVEFURV9JTkRFVEVSTUlOQVRFID0gc3RyaW5ncy5UUkFOU0lUSU9OX1NUQVRFX0lOREVURVJNSU5BVEUsIFRSQU5TSVRJT05fU1RBVEVfQ0hFQ0tFRCA9IHN0cmluZ3MuVFJBTlNJVElPTl9TVEFURV9DSEVDS0VELCBUUkFOU0lUSU9OX1NUQVRFX1VOQ0hFQ0tFRCA9IHN0cmluZ3MuVFJBTlNJVElPTl9TVEFURV9VTkNIRUNLRUQ7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzSW5kZXRlcm1pbmF0ZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gVFJBTlNJVElPTl9TVEFURV9JTkRFVEVSTUlOQVRFO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmlzQ2hlY2tlZCgpID8gVFJBTlNJVElPTl9TVEFURV9DSEVDS0VEIDogVFJBTlNJVElPTl9TVEFURV9VTkNIRUNLRUQ7XG4gICAgfTtcbiAgICBNRENDaGVja2JveEZvdW5kYXRpb24ucHJvdG90eXBlLmdldFRyYW5zaXRpb25BbmltYXRpb25DbGFzc18gPSBmdW5jdGlvbiAob2xkU3RhdGUsIG5ld1N0YXRlKSB7XG4gICAgICAgIHZhciBUUkFOU0lUSU9OX1NUQVRFX0lOSVQgPSBzdHJpbmdzLlRSQU5TSVRJT05fU1RBVEVfSU5JVCwgVFJBTlNJVElPTl9TVEFURV9DSEVDS0VEID0gc3RyaW5ncy5UUkFOU0lUSU9OX1NUQVRFX0NIRUNLRUQsIFRSQU5TSVRJT05fU1RBVEVfVU5DSEVDS0VEID0gc3RyaW5ncy5UUkFOU0lUSU9OX1NUQVRFX1VOQ0hFQ0tFRDtcbiAgICAgICAgdmFyIF9hID0gTURDQ2hlY2tib3hGb3VuZGF0aW9uLmNzc0NsYXNzZXMsIEFOSU1fVU5DSEVDS0VEX0NIRUNLRUQgPSBfYS5BTklNX1VOQ0hFQ0tFRF9DSEVDS0VELCBBTklNX1VOQ0hFQ0tFRF9JTkRFVEVSTUlOQVRFID0gX2EuQU5JTV9VTkNIRUNLRURfSU5ERVRFUk1JTkFURSwgQU5JTV9DSEVDS0VEX1VOQ0hFQ0tFRCA9IF9hLkFOSU1fQ0hFQ0tFRF9VTkNIRUNLRUQsIEFOSU1fQ0hFQ0tFRF9JTkRFVEVSTUlOQVRFID0gX2EuQU5JTV9DSEVDS0VEX0lOREVURVJNSU5BVEUsIEFOSU1fSU5ERVRFUk1JTkFURV9DSEVDS0VEID0gX2EuQU5JTV9JTkRFVEVSTUlOQVRFX0NIRUNLRUQsIEFOSU1fSU5ERVRFUk1JTkFURV9VTkNIRUNLRUQgPSBfYS5BTklNX0lOREVURVJNSU5BVEVfVU5DSEVDS0VEO1xuICAgICAgICBzd2l0Y2ggKG9sZFN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIFRSQU5TSVRJT05fU1RBVEVfSU5JVDpcbiAgICAgICAgICAgICAgICBpZiAobmV3U3RhdGUgPT09IFRSQU5TSVRJT05fU1RBVEVfVU5DSEVDS0VEKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlID09PSBUUkFOU0lUSU9OX1NUQVRFX0NIRUNLRUQgPyBBTklNX0lOREVURVJNSU5BVEVfQ0hFQ0tFRCA6IEFOSU1fSU5ERVRFUk1JTkFURV9VTkNIRUNLRUQ7XG4gICAgICAgICAgICBjYXNlIFRSQU5TSVRJT05fU1RBVEVfVU5DSEVDS0VEOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZSA9PT0gVFJBTlNJVElPTl9TVEFURV9DSEVDS0VEID8gQU5JTV9VTkNIRUNLRURfQ0hFQ0tFRCA6IEFOSU1fVU5DSEVDS0VEX0lOREVURVJNSU5BVEU7XG4gICAgICAgICAgICBjYXNlIFRSQU5TSVRJT05fU1RBVEVfQ0hFQ0tFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3U3RhdGUgPT09IFRSQU5TSVRJT05fU1RBVEVfVU5DSEVDS0VEID8gQU5JTV9DSEVDS0VEX1VOQ0hFQ0tFRCA6IEFOSU1fQ0hFQ0tFRF9JTkRFVEVSTUlOQVRFO1xuICAgICAgICAgICAgZGVmYXVsdDogLy8gVFJBTlNJVElPTl9TVEFURV9JTkRFVEVSTUlOQVRFXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlID09PSBUUkFOU0lUSU9OX1NUQVRFX0NIRUNLRUQgPyBBTklNX0lOREVURVJNSU5BVEVfQ0hFQ0tFRCA6IEFOSU1fSU5ERVRFUk1JTkFURV9VTkNIRUNLRUQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ0NoZWNrYm94Rm91bmRhdGlvbi5wcm90b3R5cGUudXBkYXRlQXJpYUNoZWNrZWRfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBFbnN1cmUgYXJpYS1jaGVja2VkIGlzIHNldCB0byBtaXhlZCBpZiBjaGVja2JveCBpcyBpbiBpbmRldGVybWluYXRlIHN0YXRlLlxuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc0luZGV0ZXJtaW5hdGUoKSkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXROYXRpdmVDb250cm9sQXR0cihzdHJpbmdzLkFSSUFfQ0hFQ0tFRF9BVFRSLCBzdHJpbmdzLkFSSUFfQ0hFQ0tFRF9JTkRFVEVSTUlOQVRFX1ZBTFVFKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRoZSBvbi9vZmYgc3RhdGUgZG9lcyBub3QgbmVlZCB0byBrZWVwIHRyYWNrIG9mIGFyaWEtY2hlY2tlZCwgc2luY2VcbiAgICAgICAgICAgIC8vIHRoZSBzY3JlZW5yZWFkZXIgdXNlcyB0aGUgY2hlY2tlZCBwcm9wZXJ0eSBvbiB0aGUgY2hlY2tib3ggZWxlbWVudC5cbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlTmF0aXZlQ29udHJvbEF0dHIoc3RyaW5ncy5BUklBX0NIRUNLRURfQVRUUik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNRENDaGVja2JveEZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ0NoZWNrYm94Rm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0NoZWNrYm94Rm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgZ2V0Q29ycmVjdEV2ZW50TmFtZSB9IGZyb20gJ0BtYXRlcmlhbC9hbmltYXRpb24vdXRpbCc7XG5pbXBvcnQgeyBNRENDb21wb25lbnQgfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgYXBwbHlQYXNzaXZlIH0gZnJvbSAnQG1hdGVyaWFsL2RvbS9ldmVudHMnO1xuaW1wb3J0IHsgbWF0Y2hlcyB9IGZyb20gJ0BtYXRlcmlhbC9kb20vcG9ueWZpbGwnO1xuaW1wb3J0IHsgTURDUmlwcGxlIH0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgTURDUmlwcGxlRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBNRENDaGVja2JveEZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xudmFyIENCX1BST1RPX1BST1BTID0gWydjaGVja2VkJywgJ2luZGV0ZXJtaW5hdGUnXTtcbnZhciBNRENDaGVja2JveCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENDaGVja2JveCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENDaGVja2JveCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnJpcHBsZV8gPSBfdGhpcy5jcmVhdGVSaXBwbGVfKCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTURDQ2hlY2tib3guYXR0YWNoVG8gPSBmdW5jdGlvbiAocm9vdCkge1xuICAgICAgICByZXR1cm4gbmV3IE1EQ0NoZWNrYm94KHJvb3QpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0NoZWNrYm94LnByb3RvdHlwZSwgXCJyaXBwbGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJpcHBsZV87XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENDaGVja2JveC5wcm90b3R5cGUsIFwiY2hlY2tlZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmF0aXZlQ29udHJvbF8uY2hlY2tlZDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoY2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVDb250cm9sXy5jaGVja2VkID0gY2hlY2tlZDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0NoZWNrYm94LnByb3RvdHlwZSwgXCJpbmRldGVybWluYXRlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYXRpdmVDb250cm9sXy5pbmRldGVybWluYXRlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChpbmRldGVybWluYXRlKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUNvbnRyb2xfLmluZGV0ZXJtaW5hdGUgPSBpbmRldGVybWluYXRlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDQ2hlY2tib3gucHJvdG90eXBlLCBcImRpc2FibGVkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYXRpdmVDb250cm9sXy5kaXNhYmxlZDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0RGlzYWJsZWQoZGlzYWJsZWQpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDQ2hlY2tib3gucHJvdG90eXBlLCBcInZhbHVlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYXRpdmVDb250cm9sXy52YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlQ29udHJvbF8udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDQ2hlY2tib3gucHJvdG90eXBlLmluaXRpYWxTeW5jV2l0aERPTSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZm91bmRhdGlvbl8uaGFuZGxlQ2hhbmdlKCk7IH07XG4gICAgICAgIHRoaXMuaGFuZGxlQW5pbWF0aW9uRW5kXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmZvdW5kYXRpb25fLmhhbmRsZUFuaW1hdGlvbkVuZCgpOyB9O1xuICAgICAgICB0aGlzLm5hdGl2ZUNvbnRyb2xfLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlQ2hhbmdlXyk7XG4gICAgICAgIHRoaXMubGlzdGVuKGdldENvcnJlY3RFdmVudE5hbWUod2luZG93LCAnYW5pbWF0aW9uZW5kJyksIHRoaXMuaGFuZGxlQW5pbWF0aW9uRW5kXyk7XG4gICAgICAgIHRoaXMuaW5zdGFsbFByb3BlcnR5Q2hhbmdlSG9va3NfKCk7XG4gICAgfTtcbiAgICBNRENDaGVja2JveC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yaXBwbGVfLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5uYXRpdmVDb250cm9sXy5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUNoYW5nZV8pO1xuICAgICAgICB0aGlzLnVubGlzdGVuKGdldENvcnJlY3RFdmVudE5hbWUod2luZG93LCAnYW5pbWF0aW9uZW5kJyksIHRoaXMuaGFuZGxlQW5pbWF0aW9uRW5kXyk7XG4gICAgICAgIHRoaXMudW5pbnN0YWxsUHJvcGVydHlDaGFuZ2VIb29rc18oKTtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBNRENDaGVja2JveC5wcm90b3R5cGUuZ2V0RGVmYXVsdEZvdW5kYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIERPIE5PVCBJTkxJTkUgdGhpcyB2YXJpYWJsZS4gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGZvdW5kYXRpb25zIHRha2UgYSBQYXJ0aWFsPE1EQ0Zvb0FkYXB0ZXI+LlxuICAgICAgICAvLyBUbyBlbnN1cmUgd2UgZG9uJ3QgYWNjaWRlbnRhbGx5IG9taXQgYW55IG1ldGhvZHMsIHdlIG5lZWQgYSBzZXBhcmF0ZSwgc3Ryb25nbHkgdHlwZWQgYWRhcHRlciB2YXJpYWJsZS5cbiAgICAgICAgdmFyIGFkYXB0ZXIgPSB7XG4gICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgZm9yY2VMYXlvdXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnJvb3RfLm9mZnNldFdpZHRoOyB9LFxuICAgICAgICAgICAgaGFzTmF0aXZlQ29udHJvbDogZnVuY3Rpb24gKCkgeyByZXR1cm4gISFfdGhpcy5uYXRpdmVDb250cm9sXzsgfSxcbiAgICAgICAgICAgIGlzQXR0YWNoZWRUb0RPTTogZnVuY3Rpb24gKCkgeyByZXR1cm4gQm9vbGVhbihfdGhpcy5yb290Xy5wYXJlbnROb2RlKTsgfSxcbiAgICAgICAgICAgIGlzQ2hlY2tlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuY2hlY2tlZDsgfSxcbiAgICAgICAgICAgIGlzSW5kZXRlcm1pbmF0ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaW5kZXRlcm1pbmF0ZTsgfSxcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICByZW1vdmVOYXRpdmVDb250cm9sQXR0cjogZnVuY3Rpb24gKGF0dHIpIHsgcmV0dXJuIF90aGlzLm5hdGl2ZUNvbnRyb2xfLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTsgfSxcbiAgICAgICAgICAgIHNldE5hdGl2ZUNvbnRyb2xBdHRyOiBmdW5jdGlvbiAoYXR0ciwgdmFsdWUpIHsgcmV0dXJuIF90aGlzLm5hdGl2ZUNvbnRyb2xfLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSk7IH0sXG4gICAgICAgICAgICBzZXROYXRpdmVDb250cm9sRGlzYWJsZWQ6IGZ1bmN0aW9uIChkaXNhYmxlZCkgeyByZXR1cm4gX3RoaXMubmF0aXZlQ29udHJvbF8uZGlzYWJsZWQgPSBkaXNhYmxlZDsgfSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBNRENDaGVja2JveEZvdW5kYXRpb24oYWRhcHRlcik7XG4gICAgfTtcbiAgICBNRENDaGVja2JveC5wcm90b3R5cGUuY3JlYXRlUmlwcGxlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gRE8gTk9UIElOTElORSB0aGlzIHZhcmlhYmxlLiBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgZm91bmRhdGlvbnMgdGFrZSBhIFBhcnRpYWw8TURDRm9vQWRhcHRlcj4uXG4gICAgICAgIC8vIFRvIGVuc3VyZSB3ZSBkb24ndCBhY2NpZGVudGFsbHkgb21pdCBhbnkgbWV0aG9kcywgd2UgbmVlZCBhIHNlcGFyYXRlLCBzdHJvbmdseSB0eXBlZCBhZGFwdGVyIHZhcmlhYmxlLlxuICAgICAgICB2YXIgYWRhcHRlciA9IHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ1JpcHBsZS5jcmVhdGVBZGFwdGVyKHRoaXMpLCB7IGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7IHJldHVybiBfdGhpcy5uYXRpdmVDb250cm9sXy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKTsgfSwgaXNTdXJmYWNlQWN0aXZlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBtYXRjaGVzKF90aGlzLm5hdGl2ZUNvbnRyb2xfLCAnOmFjdGl2ZScpOyB9LCBpc1VuYm91bmRlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSwgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7IHJldHVybiBfdGhpcy5uYXRpdmVDb250cm9sXy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKTsgfSB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBNRENSaXBwbGUodGhpcy5yb290XywgbmV3IE1EQ1JpcHBsZUZvdW5kYXRpb24oYWRhcHRlcikpO1xuICAgIH07XG4gICAgTURDQ2hlY2tib3gucHJvdG90eXBlLmluc3RhbGxQcm9wZXJ0eUNoYW5nZUhvb2tzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG5hdGl2ZUNiID0gdGhpcy5uYXRpdmVDb250cm9sXztcbiAgICAgICAgdmFyIGNiUHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YobmF0aXZlQ2IpO1xuICAgICAgICBDQl9QUk9UT19QUk9QUy5mb3JFYWNoKGZ1bmN0aW9uIChjb250cm9sU3RhdGUpIHtcbiAgICAgICAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjYlByb3RvLCBjb250cm9sU3RhdGUpO1xuICAgICAgICAgICAgLy8gV2UgaGF2ZSB0byBjaGVjayBmb3IgdGhpcyBkZXNjcmlwdG9yLCBzaW5jZSBzb21lIGJyb3dzZXJzIChTYWZhcmkpIGRvbid0IHN1cHBvcnQgaXRzIHJldHVybi5cbiAgICAgICAgICAgIC8vIFNlZTogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTQ5NzM5XG4gICAgICAgICAgICBpZiAoIXZhbGlkRGVzY3JpcHRvcihkZXNjKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFR5cGUgY2FzdCBpcyBuZWVkZWQgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBDbG9zdXJlIENvbXBpbGVyLlxuICAgICAgICAgICAgdmFyIG5hdGl2ZUdldHRlciA9IGRlc2MuZ2V0O1xuICAgICAgICAgICAgdmFyIG5hdGl2ZUNiRGVzYyA9IHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IGRlc2MuY29uZmlndXJhYmxlLFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGRlc2MuZW51bWVyYWJsZSxcbiAgICAgICAgICAgICAgICBnZXQ6IG5hdGl2ZUdldHRlcixcbiAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBkZXNjLnNldC5jYWxsKG5hdGl2ZUNiLCBzdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmZvdW5kYXRpb25fLmhhbmRsZUNoYW5nZSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5hdGl2ZUNiLCBjb250cm9sU3RhdGUsIG5hdGl2ZUNiRGVzYyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDQ2hlY2tib3gucHJvdG90eXBlLnVuaW5zdGFsbFByb3BlcnR5Q2hhbmdlSG9va3NfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbmF0aXZlQ2IgPSB0aGlzLm5hdGl2ZUNvbnRyb2xfO1xuICAgICAgICB2YXIgY2JQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihuYXRpdmVDYik7XG4gICAgICAgIENCX1BST1RPX1BST1BTLmZvckVhY2goZnVuY3Rpb24gKGNvbnRyb2xTdGF0ZSkge1xuICAgICAgICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNiUHJvdG8sIGNvbnRyb2xTdGF0ZSk7XG4gICAgICAgICAgICBpZiAoIXZhbGlkRGVzY3JpcHRvcihkZXNjKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuYXRpdmVDYiwgY29udHJvbFN0YXRlLCBkZXNjKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDQ2hlY2tib3gucHJvdG90eXBlLCBcIm5hdGl2ZUNvbnRyb2xfXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgTkFUSVZFX0NPTlRST0xfU0VMRUNUT1IgPSBNRENDaGVja2JveEZvdW5kYXRpb24uc3RyaW5ncy5OQVRJVkVfQ09OVFJPTF9TRUxFQ1RPUjtcbiAgICAgICAgICAgIHZhciBlbCA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihOQVRJVkVfQ09OVFJPTF9TRUxFQ1RPUik7XG4gICAgICAgICAgICBpZiAoIWVsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2hlY2tib3ggY29tcG9uZW50IHJlcXVpcmVzIGEgXCIgKyBOQVRJVkVfQ09OVFJPTF9TRUxFQ1RPUiArIFwiIGVsZW1lbnRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBNRENDaGVja2JveDtcbn0oTURDQ29tcG9uZW50KSk7XG5leHBvcnQgeyBNRENDaGVja2JveCB9O1xuZnVuY3Rpb24gdmFsaWREZXNjcmlwdG9yKGlucHV0UHJvcERlc2MpIHtcbiAgICByZXR1cm4gISFpbnB1dFByb3BEZXNjICYmIHR5cGVvZiBpbnB1dFByb3BEZXNjLnNldCA9PT0gJ2Z1bmN0aW9uJztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudC5qcy5tYXAiLCI8ZGl2XG4gIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgdXNlOmZvcndhcmRFdmVudHNcbiAgY2xhc3M9XCJcbiAgICBtZGMtY2hlY2tib3hcbiAgICB7Y2xhc3NOYW1lfVxuICAgIHtkaXNhYmxlZCA/ICdtZGMtY2hlY2tib3gtLWRpc2FibGVkJyA6ICcnfVxuICAgIHsoY29udGV4dCA9PT0gJ2RhdGEtdGFibGUnICYmIGRhdGFUYWJsZUhlYWRlcikgPyAnbWRjLWRhdGEtdGFibGVfX2hlYWRlci1yb3ctY2hlY2tib3gnIDogJyd9XG4gICAgeyhjb250ZXh0ID09PSAnZGF0YS10YWJsZScgJiYgIWRhdGFUYWJsZUhlYWRlcikgPyAnbWRjLWRhdGEtdGFibGVfX3Jvdy1jaGVja2JveCcgOiAnJ31cbiAgXCJcbiAgey4uLmV4Y2x1ZGUoJCRwcm9wcywgWyd1c2UnLCAnY2xhc3MnLCAnZGlzYWJsZWQnLCAnaW5kZXRlcm1pbmF0ZScsICdncm91cCcsICdjaGVja2VkJywgJ3ZhbHVlJywgJ3ZhbHVlS2V5JywgJ2lucHV0JCddKX1cbj5cbiAgPGlucHV0XG4gICAgdXNlOnVzZUFjdGlvbnM9e2lucHV0JHVzZX1cbiAgICBjbGFzcz1cIm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2wge2lucHV0JGNsYXNzfVwiXG4gICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICB7Li4uaW5wdXRQcm9wc31cbiAgICB7ZGlzYWJsZWR9XG4gICAgYmluZDpjaGVja2VkPXtuYXRpdmVDaGVja2VkfVxuICAgIHZhbHVlPXt2YWx1ZUtleSA9PT0gdW5pbml0aWFsaXplZFZhbHVlID8gdmFsdWUgOiB2YWx1ZUtleX1cbiAgICBvbjpjaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICBvbjppbnB1dD17aGFuZGxlQ2hhbmdlfVxuICAgIG9uOmNoYW5nZSBvbjppbnB1dFxuICAgIHsuLi5leGNsdWRlKHByZWZpeEZpbHRlcigkJHByb3BzLCAnaW5wdXQkJyksIFsndXNlJywgJ2NsYXNzJ10pfVxuICAvPlxuICA8ZGl2IGNsYXNzPVwibWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kXCI+XG4gICAgPHN2ZyBjbGFzcz1cIm1kYy1jaGVja2JveF9fY2hlY2ttYXJrXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgPHBhdGggY2xhc3M9XCJtZGMtY2hlY2tib3hfX2NoZWNrbWFyay1wYXRoXCIgZmlsbD1cIm5vbmVcIiBkPVwiTTEuNzMsMTIuOTEgOC4xLDE5LjI4IDIyLjc5LDQuNTlcIiAvPlxuICAgIDwvc3ZnPlxuICAgIDxkaXYgY2xhc3M9XCJtZGMtY2hlY2tib3hfX21peGVkbWFya1wiPjwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48c2NyaXB0PlxuICBpbXBvcnQge01EQ0NoZWNrYm94fSBmcm9tICdAbWF0ZXJpYWwvY2hlY2tib3gnO1xuICBpbXBvcnQge29uTW91bnQsIG9uRGVzdHJveSwgZ2V0Q29udGV4dH0gZnJvbSAnc3ZlbHRlJztcbiAgaW1wb3J0IHtjdXJyZW50X2NvbXBvbmVudH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHtmb3J3YXJkRXZlbnRzQnVpbGRlcn0gZnJvbSAnQHNtdWkvY29tbW9uL2ZvcndhcmRFdmVudHMuanMnO1xuICBpbXBvcnQge2V4Y2x1ZGV9IGZyb20gJ0BzbXVpL2NvbW1vbi9leGNsdWRlLmpzJztcbiAgaW1wb3J0IHtwcmVmaXhGaWx0ZXJ9IGZyb20gJ0BzbXVpL2NvbW1vbi9wcmVmaXhGaWx0ZXIuanMnO1xuICBpbXBvcnQge3VzZUFjdGlvbnN9IGZyb20gJ0BzbXVpL2NvbW1vbi91c2VBY3Rpb25zLmpzJztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoY3VycmVudF9jb21wb25lbnQpO1xuICBsZXQgdW5pbml0aWFsaXplZFZhbHVlID0gKCkgPT4ge307XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBleHBvcnQge2NsYXNzTmFtZSBhcyBjbGFzc307XG4gIGV4cG9ydCBsZXQgZGlzYWJsZWQgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBpbmRldGVybWluYXRlID0gdW5pbml0aWFsaXplZFZhbHVlO1xuICBleHBvcnQgbGV0IGdyb3VwID0gdW5pbml0aWFsaXplZFZhbHVlO1xuICBleHBvcnQgbGV0IGNoZWNrZWQgPSB1bmluaXRpYWxpemVkVmFsdWU7XG4gIGV4cG9ydCBsZXQgdmFsdWUgPSBudWxsO1xuICBleHBvcnQgbGV0IHZhbHVlS2V5ID0gdW5pbml0aWFsaXplZFZhbHVlO1xuICBleHBvcnQgbGV0IGlucHV0JHVzZSA9IFtdO1xuICBleHBvcnQgbGV0IGlucHV0JGNsYXNzID0gJyc7XG5cbiAgbGV0IGVsZW1lbnQ7XG4gIGxldCBjaGVja2JveDtcbiAgbGV0IGZvcm1GaWVsZCA9IGdldENvbnRleHQoJ1NNVUk6Zm9ybS1maWVsZCcpO1xuICBsZXQgaW5wdXRQcm9wcyA9IGdldENvbnRleHQoJ1NNVUk6Z2VuZXJpYzppbnB1dDpwcm9wcycpIHx8IHt9O1xuICBsZXQgc2V0Q2hlY2tlZCA9IGdldENvbnRleHQoJ1NNVUk6Z2VuZXJpYzppbnB1dDpzZXRDaGVja2VkJyk7XG4gIGxldCBhZGRDaGFuZ2VIYW5kbGVyID0gZ2V0Q29udGV4dCgnU01VSTpnZW5lcmljOmlucHV0OmFkZENoYW5nZUhhbmRsZXInKTtcbiAgbGV0IG5hdGl2ZUNoZWNrZWQgPSBncm91cCA9PT0gdW5pbml0aWFsaXplZFZhbHVlID8gKGNoZWNrZWQgPT09IHVuaW5pdGlhbGl6ZWRWYWx1ZSA/IGZhbHNlIDogY2hlY2tlZCkgOiBncm91cC5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG4gIGxldCBjb250ZXh0ID0gZ2V0Q29udGV4dCgnU01VSTpjaGVja2JveDpjb250ZXh0Jyk7XG4gIGxldCBkYXRhVGFibGVIZWFkZXIgPSBnZXRDb250ZXh0KCdTTVVJOmRhdGEtdGFibGU6cm93OmhlYWRlcicpO1xuICBsZXQgZ2V0RGF0YVRhYmxlUm93SW5kZXggPSBnZXRDb250ZXh0KCdTTVVJOmRhdGEtdGFibGU6cm93OmdldEluZGV4Jyk7XG4gIGxldCBpbnN0YW50aWF0ZSA9IGdldENvbnRleHQoJ1NNVUk6Y2hlY2tib3g6aW5zdGFudGlhdGUnKTtcbiAgbGV0IGdldEluc3RhbmNlID0gZ2V0Q29udGV4dCgnU01VSTpjaGVja2JveDpnZXRJbnN0YW5jZScpO1xuXG4gICQ6IGlmIChzZXRDaGVja2VkKSB7XG4gICAgc2V0Q2hlY2tlZChuYXRpdmVDaGVja2VkKTtcbiAgfVxuXG4gICQ6IGlmIChjaGVja2JveCAmJiBpbmRldGVybWluYXRlICE9PSB1bmluaXRpYWxpemVkVmFsdWUgJiYgY2hlY2tib3guaW5kZXRlcm1pbmF0ZSAhPT0gaW5kZXRlcm1pbmF0ZSkge1xuICAgIGNoZWNrYm94LmluZGV0ZXJtaW5hdGUgPSBpbmRldGVybWluYXRlO1xuICB9XG5cbiAgJDogaWYgKGNoZWNrYm94KSB7XG4gICAgaWYgKGdyb3VwICE9PSB1bmluaXRpYWxpemVkVmFsdWUpIHtcbiAgICAgIGNvbnN0IGlzQ2hlY2tlZCA9IGdyb3VwLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbiAgICAgIGlmIChjaGVja2JveC5jaGVja2VkICE9PSBpc0NoZWNrZWQpIHtcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGlzQ2hlY2tlZDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNoZWNrZWQgIT09IHVuaW5pdGlhbGl6ZWRWYWx1ZSAmJiBjaGVja2JveC5jaGVja2VkICE9PSBjaGVja2VkKSB7XG4gICAgICBjaGVja2JveC5jaGVja2VkID0gY2hlY2tlZDtcbiAgICB9XG4gIH1cblxuICAkOiBpZiAoY2hlY2tib3ggJiYgY2hlY2tib3guZGlzYWJsZWQgIT09IGRpc2FibGVkKSB7XG4gICAgY2hlY2tib3guZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfVxuXG4gICQ6IGlmIChjaGVja2JveCAmJiB2YWx1ZUtleSA9PT0gdW5pbml0aWFsaXplZFZhbHVlICYmIGNoZWNrYm94LnZhbHVlICE9PSB2YWx1ZSkge1xuICAgIGNoZWNrYm94LnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICAkOiBpZiAoY2hlY2tib3ggJiYgdmFsdWVLZXkgIT09IHVuaW5pdGlhbGl6ZWRWYWx1ZSAmJiBjaGVja2JveC52YWx1ZSAhPT0gdmFsdWVLZXkpIHtcbiAgICBjaGVja2JveC52YWx1ZSA9IHZhbHVlS2V5O1xuICB9XG5cbiAgbGV0IHByZXZpb3VzQ2hlY2tlZCA9IGNoZWNrZWQ7XG4gICQ6IGlmIChjaGVja2VkICE9PSB1bmluaXRpYWxpemVkVmFsdWUpIHtcbiAgICBpZiAoY2hlY2tlZCA9PT0gcHJldmlvdXNDaGVja2VkKSB7XG4gICAgICBjaGVja2VkID0gbmF0aXZlQ2hlY2tlZDtcbiAgICB9IGVsc2UgaWYgKG5hdGl2ZUNoZWNrZWQgIT09IGNoZWNrZWQpIHtcbiAgICAgIG5hdGl2ZUNoZWNrZWQgPSBjaGVja2VkO1xuICAgIH1cbiAgICBwcmV2aW91c0NoZWNrZWQgPSBjaGVja2VkO1xuICB9XG5cbiAgaWYgKGFkZENoYW5nZUhhbmRsZXIpIHtcbiAgICBhZGRDaGFuZ2VIYW5kbGVyKGhhbmRsZUNoYW5nZSk7XG4gIH1cblxuICBvbk1vdW50KGFzeW5jICgpID0+IHtcbiAgICBpZiAoaW5zdGFudGlhdGUgIT09IGZhbHNlKSB7XG4gICAgICBjaGVja2JveCA9IG5ldyBNRENDaGVja2JveChlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbnRleHQgPT09ICdkYXRhLXRhYmxlJykge1xuICAgICAgICBpZiAoZGF0YVRhYmxlSGVhZGVyKSB7XG4gICAgICAgICAgY2hlY2tib3ggPSBhd2FpdCBnZXRJbnN0YW5jZSh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGVja2JveCA9IChhd2FpdCBnZXRJbnN0YW5jZShmYWxzZSkpW2dldERhdGFUYWJsZVJvd0luZGV4KCldO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGVja2JveCA9IGF3YWl0IGdldEluc3RhbmNlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZvcm1GaWVsZCAmJiBmb3JtRmllbGQoKSkge1xuICAgICAgZm9ybUZpZWxkKCkuaW5wdXQgPSBjaGVja2JveDtcbiAgICB9XG4gIH0pO1xuXG4gIG9uRGVzdHJveSgoKSA9PiB7XG4gICAgaWYgKGluc3RhbnRpYXRlICE9PSBmYWxzZSkge1xuICAgICAgY2hlY2tib3ggJiYgY2hlY2tib3guZGVzdHJveSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKCkge1xuICAgIGlmIChncm91cCAhPT0gdW5pbml0aWFsaXplZFZhbHVlKSB7XG4gICAgICBjb25zdCBpZHggPSBncm91cC5pbmRleE9mKHZhbHVlKTtcbiAgICAgIGlmIChjaGVja2JveC5jaGVja2VkICYmIGlkeCA9PT0gLTEpIHtcbiAgICAgICAgZ3JvdXAucHVzaCh2YWx1ZSk7XG4gICAgICAgIGdyb3VwID0gZ3JvdXA7XG4gICAgICB9IGVsc2UgaWYgKCFjaGVja2JveC5jaGVja2VkICYmIGlkeCAhPT0gLTEpIHtcbiAgICAgICAgZ3JvdXAuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgIGdyb3VwID0gZ3JvdXA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldElkKCkge1xuICAgIHJldHVybiBpbnB1dFByb3BzICYmIGlucHV0UHJvcHMuaWQ7XG4gIH1cbjwvc2NyaXB0PiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuZXhwb3J0IHZhciBjc3NDbGFzc2VzID0ge1xuICAgIFJPT1Q6ICdtZGMtZm9ybS1maWVsZCcsXG59O1xuZXhwb3J0IHZhciBzdHJpbmdzID0ge1xuICAgIExBQkVMX1NFTEVDVE9SOiAnLm1kYy1mb3JtLWZpZWxkID4gbGFiZWwnLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIE1EQ0Zvcm1GaWVsZEZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDRm9ybUZpZWxkRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENGb3JtRmllbGRGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgTURDRm9ybUZpZWxkRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmNsaWNrSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVDbGlja18oKTsgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm9ybUZpZWxkRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0Zvcm1GaWVsZEZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3JtRmllbGRGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFjdGl2YXRlSW5wdXRSaXBwbGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZWFjdGl2YXRlSW5wdXRSaXBwbGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0Zvcm1GaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXJfKTtcbiAgICB9O1xuICAgIE1EQ0Zvcm1GaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlcl8pO1xuICAgIH07XG4gICAgTURDRm9ybUZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQ2xpY2tfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFjdGl2YXRlSW5wdXRSaXBwbGUoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmFkYXB0ZXJfLmRlYWN0aXZhdGVJbnB1dFJpcHBsZSgpOyB9KTtcbiAgICB9O1xuICAgIHJldHVybiBNRENGb3JtRmllbGRGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENGb3JtRmllbGRGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDRm9ybUZpZWxkRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDQ29tcG9uZW50IH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IE1EQ0Zvcm1GaWVsZEZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xudmFyIE1EQ0Zvcm1GaWVsZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENGb3JtRmllbGQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDRm9ybUZpZWxkKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE1EQ0Zvcm1GaWVsZC5hdHRhY2hUbyA9IGZ1bmN0aW9uIChyb290KSB7XG4gICAgICAgIHJldHVybiBuZXcgTURDRm9ybUZpZWxkKHJvb3QpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0Zvcm1GaWVsZC5wcm90b3R5cGUsIFwiaW5wdXRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlucHV0XztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRfID0gaW5wdXQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3JtRmllbGQucHJvdG90eXBlLCBcImxhYmVsX1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIExBQkVMX1NFTEVDVE9SID0gTURDRm9ybUZpZWxkRm91bmRhdGlvbi5zdHJpbmdzLkxBQkVMX1NFTEVDVE9SO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihMQUJFTF9TRUxFQ1RPUik7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0Zvcm1GaWVsZC5wcm90b3R5cGUuZ2V0RGVmYXVsdEZvdW5kYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIERPIE5PVCBJTkxJTkUgdGhpcyB2YXJpYWJsZS4gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGZvdW5kYXRpb25zIHRha2UgYSBQYXJ0aWFsPE1EQ0Zvb0FkYXB0ZXI+LlxuICAgICAgICAvLyBUbyBlbnN1cmUgd2UgZG9uJ3QgYWNjaWRlbnRhbGx5IG9taXQgYW55IG1ldGhvZHMsIHdlIG5lZWQgYSBzZXBhcmF0ZSwgc3Ryb25nbHkgdHlwZWQgYWRhcHRlciB2YXJpYWJsZS5cbiAgICAgICAgdmFyIGFkYXB0ZXIgPSB7XG4gICAgICAgICAgICBhY3RpdmF0ZUlucHV0UmlwcGxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmlucHV0XyAmJiBfdGhpcy5pbnB1dF8ucmlwcGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmlucHV0Xy5yaXBwbGUuYWN0aXZhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVhY3RpdmF0ZUlucHV0UmlwcGxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmlucHV0XyAmJiBfdGhpcy5pbnB1dF8ucmlwcGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmlucHV0Xy5yaXBwbGUuZGVhY3RpdmF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5sYWJlbF8pIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubGFiZWxfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5sYWJlbF8pIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubGFiZWxfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBNRENGb3JtRmllbGRGb3VuZGF0aW9uKGFkYXB0ZXIpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ0Zvcm1GaWVsZDtcbn0oTURDQ29tcG9uZW50KSk7XG5leHBvcnQgeyBNRENGb3JtRmllbGQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudC5qcy5tYXAiLCI8ZGl2XG4gIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgdXNlOmZvcndhcmRFdmVudHNcbiAgY2xhc3M9XCJcbiAgICBtZGMtZm9ybS1maWVsZFxuICAgIHtjbGFzc05hbWV9XG4gICAge2FsaWduID09PSAnZW5kJyA/ICdtZGMtZm9ybS1maWVsZC0tYWxpZ24tZW5kJyA6ICcnfVxuICBcIlxuICB7Li4uZXhjbHVkZSgkJHByb3BzLCBbJ3VzZScsICdjbGFzcycsICdhbGlnbkVuZCcsICdpbnB1dElkJywgJ2xhYmVsJCddKX1cbj5cbiAgPHNsb3Q+PC9zbG90PlxuICA8bGFiZWxcbiAgICB1c2U6dXNlQWN0aW9ucz17bGFiZWwkdXNlfVxuICAgIGZvcj17aW5wdXRJZH1cbiAgICB7Li4uZXhjbHVkZShwcmVmaXhGaWx0ZXIoJCRwcm9wcywgJ2xhYmVsJCcpLCBbJ3VzZSddKX1cbiAgPjxzbG90IG5hbWU9XCJsYWJlbFwiPjwvc2xvdD48L2xhYmVsPlxuPC9kaXY+XG5cbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICBsZXQgY291bnRlciA9IDA7XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHtNRENGb3JtRmllbGR9IGZyb20gJ0BtYXRlcmlhbC9mb3JtLWZpZWxkJztcbiAgaW1wb3J0IHtvbk1vdW50LCBvbkRlc3Ryb3ksIHNldENvbnRleHR9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7Y3VycmVudF9jb21wb25lbnR9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7Zm9yd2FyZEV2ZW50c0J1aWxkZXJ9IGZyb20gJ0BzbXVpL2NvbW1vbi9mb3J3YXJkRXZlbnRzLmpzJztcbiAgaW1wb3J0IHtleGNsdWRlfSBmcm9tICdAc211aS9jb21tb24vZXhjbHVkZS5qcyc7XG4gIGltcG9ydCB7cHJlZml4RmlsdGVyfSBmcm9tICdAc211aS9jb21tb24vcHJlZml4RmlsdGVyLmpzJztcbiAgaW1wb3J0IHt1c2VBY3Rpb25zfSBmcm9tICdAc211aS9jb21tb24vdXNlQWN0aW9ucy5qcyc7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGN1cnJlbnRfY29tcG9uZW50KTtcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gIGV4cG9ydCB7Y2xhc3NOYW1lIGFzIGNsYXNzfTtcbiAgZXhwb3J0IGxldCBhbGlnbiA9ICdzdGFydCc7XG4gIGV4cG9ydCBsZXQgaW5wdXRJZCA9ICdTTVVJLWZvcm0tZmllbGQtJysoY291bnRlcisrKTtcbiAgZXhwb3J0IGxldCBsYWJlbCR1c2UgPSBbXTtcblxuICBsZXQgZWxlbWVudDtcbiAgbGV0IGZvcm1GaWVsZDtcblxuICBzZXRDb250ZXh0KCdTTVVJOmZvcm0tZmllbGQnLCAoKSA9PiBmb3JtRmllbGQpO1xuICBzZXRDb250ZXh0KCdTTVVJOmdlbmVyaWM6aW5wdXQ6cHJvcHMnLCB7aWQ6IGlucHV0SWR9KTtcblxuICBvbk1vdW50KCgpID0+IHtcbiAgICBmb3JtRmllbGQgPSBuZXcgTURDRm9ybUZpZWxkKGVsZW1lbnQpO1xuICB9KTtcblxuICBvbkRlc3Ryb3koKCkgPT4ge1xuICAgIGZvcm1GaWVsZCAmJiBmb3JtRmllbGQuZGVzdHJveSgpO1xuICB9KTtcbjwvc2NyaXB0PiIsIjxzY3JpcHQ+XHJcbiAgaW1wb3J0IENoZWNrYm94IGZyb20gXCJAc211aS9jaGVja2JveFwiO1xyXG4gIGltcG9ydCBGb3JtRmllbGQgZnJvbSBcIkBzbXVpL2Zvcm0tZmllbGRcIjtcclxuICBpbXBvcnQgUGFnZSBmcm9tIFwiLi9QYWdlLnN2ZWx0ZVwiO1xyXG4gIGltcG9ydCBFeGFtcGxlIGZyb20gXCIuL0V4YW1wbGUuc3ZlbHRlXCI7XHJcblxyXG4gIGxldCBzZWxlY3RlZDEgPSB0cnVlO1xyXG4gIGxldCBzZWxlY3RlZDIgPSBmYWxzZTtcclxuICBsZXQgc2VsZWN0ZWQzID0gdHJ1ZTtcclxuICBsZXQgc2VsZWN0ZWQ0ID0gZmFsc2U7XHJcbiAgbGV0IHNlbGVjdGVkNSA9IGZhbHNlO1xyXG4gIGxldCBzZWxlY3RlZDYgPSBmYWxzZTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgKiA6Z2xvYmFsKC5tZGMtZm9ybS1maWVsZCkge1xyXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIH1cclxuICAvKipcclxuICAgICA6Z2xvYmFsKC5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmVuYWJsZWQ6Y2hlY2tlZFxyXG4gICAgICB+IC5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQsIC5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmVuYWJsZWQ6aW5kZXRlcm1pbmF0ZVxyXG4gICAgICB+IC5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQpIHtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbWRjLXRoZW1lLXByaW1hcnkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWRjLXRoZW1lLXByaW1hcnkpO1xyXG4gIH0gKi9cclxuPC9zdHlsZT5cclxuXHJcbjxQYWdlPlxyXG4gIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5DaGVja2JveDwvc3Bhbj5cclxuICA8c3BhbiBzbG90PVwiZGVzY3JpcHRpb25cIj5cclxuICAgIENoZWNrYm94IGFsbG93cyB0aGUgdXNlciB0byBzZWxlY3Qgb25lIG9yIG1vcmUgaXRlbXMgZnJvbSBhIHNldC5cclxuICA8L3NwYW4+XHJcbiAgPHNwYW4gc2xvdD1cImltcG9ydFwiPlxyXG4gICAgaW1wb3J0IFN3aXRjaCBmcm9tIFwiQHNtdWkvc3dpdGNoXCI7XHJcbiAgICA8YnIgLz5cclxuICAgIGltcG9ydCBGb3JtRmllbGQgZnJvbSBcIkBzbXVpL2Zvcm0tZmllbGRcIjtcclxuICA8L3NwYW4+XHJcbiAgPGRpdiBzbG90PVwiY29udGVudFwiPlxyXG4gICAgPEV4YW1wbGU+XHJcbiAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5Vc2FnZTwvc3Bhbj5cclxuXHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxGb3JtRmllbGQ+XHJcbiAgICAgICAgICA8Q2hlY2tib3ggYmluZDpjaGVja2VkPXtzZWxlY3RlZDF9IC8+XHJcbiAgICAgICAgICA8c3BhbiBzbG90PVwibGFiZWxcIj5DaGVja2VkPC9zcGFuPlxyXG4gICAgICAgIDwvRm9ybUZpZWxkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEZvcm1GaWVsZD5cclxuICAgICAgICAgIDxDaGVja2JveCBiaW5kOmNoZWNrZWQ9e3NlbGVjdGVkMn0gLz5cclxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlVuY2hlY2tlZDwvc3Bhbj5cclxuICAgICAgICA8L0Zvcm1GaWVsZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxGb3JtRmllbGQ+XHJcbiAgICAgICAgICA8Q2hlY2tib3ggYmluZDpjaGVja2VkPXtzZWxlY3RlZDN9IGRpc2FibGVkIC8+XHJcbiAgICAgICAgICA8c3BhbiBzbG90PVwibGFiZWxcIj5EaXNhYmxlZCBDaGVja2VkPC9zcGFuPlxyXG4gICAgICAgIDwvRm9ybUZpZWxkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEZvcm1GaWVsZD5cclxuICAgICAgICAgIDxDaGVja2JveCBiaW5kOmNoZWNrZWQ9e3NlbGVjdGVkNH0gZGlzYWJsZWQgLz5cclxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJsYWJlbFwiPkRpc2FibGVkIFVuY2hlY2tlZDwvc3Bhbj5cclxuICAgICAgICA8L0Zvcm1GaWVsZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0V4YW1wbGU+XHJcbiAgICA8RXhhbXBsZT5cclxuICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiPkxhYmVsczwvc3Bhbj5cclxuXHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxGb3JtRmllbGQ+XHJcbiAgICAgICAgICA8Q2hlY2tib3ggYmluZDpjaGVja2VkPXtzZWxlY3RlZDV9IC8+XHJcbiAgICAgICAgICA8c3BhbiBzbG90PVwibGFiZWxcIj5SaWdodCBsYWJlbDwvc3Bhbj5cclxuICAgICAgICA8L0Zvcm1GaWVsZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxGb3JtRmllbGQgYWxpZ249XCJlbmRcIj5cclxuICAgICAgICAgIDxDaGVja2JveCBiaW5kOmNoZWNrZWQ9e3NlbGVjdGVkNn0gLz5cclxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJsYWJlbFwiPkxlZnQgbGFiZWw8L3NwYW4+XHJcbiAgICAgICAgPC9Gb3JtRmllbGQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9FeGFtcGxlPlxyXG4gIDwvZGl2PlxyXG48L1BhZ2U+XHJcbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyIsInRzbGliXzEuX19hc3NpZ24iLCJjc3NDbGFzc2VzIiwic3RyaW5ncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkEsQUFjQSxJQUFJLGNBQWMsR0FBRztJQUNqQixZQUFZLEVBQUU7UUFDVixXQUFXLEVBQUUsV0FBVztRQUN4QixRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLFFBQVEsRUFBRSxjQUFjO0tBQzNCO0lBQ0Qsa0JBQWtCLEVBQUU7UUFDaEIsV0FBVyxFQUFFLFdBQVc7UUFDeEIsUUFBUSxFQUFFLDBCQUEwQjtRQUNwQyxRQUFRLEVBQUUsb0JBQW9CO0tBQ2pDO0lBQ0QsY0FBYyxFQUFFO1FBQ1osV0FBVyxFQUFFLFdBQVc7UUFDeEIsUUFBUSxFQUFFLHNCQUFzQjtRQUNoQyxRQUFRLEVBQUUsZ0JBQWdCO0tBQzdCO0lBQ0QsYUFBYSxFQUFFO1FBQ1gsV0FBVyxFQUFFLFlBQVk7UUFDekIsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQixRQUFRLEVBQUUsZUFBZTtLQUM1QjtDQUNKLENBQUM7QUFDRixTQUFTLFFBQVEsQ0FBQyxTQUFTLEVBQUU7SUFDekIsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLE9BQU8sU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEtBQUssVUFBVSxDQUFDO0NBQ2hHO0FBQ0QsQUFTTyxTQUFTLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUU7SUFDdEQsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksU0FBUyxJQUFJLGNBQWMsRUFBRTtRQUNwRCxJQUFJLEVBQUUsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxJQUFJLEVBQUUsR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQUUsUUFBUSxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsV0FBVyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUM7UUFDakgsSUFBSSxVQUFVLEdBQUcsV0FBVyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDekMsT0FBTyxVQUFVLEdBQUcsUUFBUSxHQUFHLFFBQVEsQ0FBQztLQUMzQztJQUNELE9BQU8sU0FBUyxDQUFDO0NBQ3BCOzs7QUM5RUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkEsQUFBTyxJQUFJLFVBQVUsR0FBRztJQUNwQiwwQkFBMEIsRUFBRSwwQ0FBMEM7SUFDdEUsc0JBQXNCLEVBQUUsc0NBQXNDO0lBQzlELDBCQUEwQixFQUFFLDBDQUEwQztJQUN0RSw0QkFBNEIsRUFBRSw0Q0FBNEM7SUFDMUUsc0JBQXNCLEVBQUUsc0NBQXNDO0lBQzlELDRCQUE0QixFQUFFLDRDQUE0QztJQUMxRSxVQUFVLEVBQUUsMEJBQTBCO0lBQ3RDLE9BQU8sRUFBRSx1QkFBdUI7SUFDaEMsU0FBUyxFQUFFLHlCQUF5QjtJQUNwQyxjQUFjLEVBQUUsOEJBQThCO0lBQzlDLFFBQVEsRUFBRSx3QkFBd0I7SUFDbEMsYUFBYSxFQUFFLDZCQUE2QjtJQUM1QyxTQUFTLEVBQUUseUJBQXlCO0lBQ3BDLGNBQWMsRUFBRSw4QkFBOEI7SUFDOUMsSUFBSSxFQUFFLGNBQWM7SUFDcEIsUUFBUSxFQUFFLHdCQUF3QjtJQUNsQyxRQUFRLEVBQUUsd0JBQXdCO0NBQ3JDLENBQUM7QUFDRixBQUFPLElBQUksT0FBTyxHQUFHO0lBQ2pCLGlCQUFpQixFQUFFLGNBQWM7SUFDakMsZ0NBQWdDLEVBQUUsT0FBTztJQUN6Qyx1QkFBdUIsRUFBRSwrQkFBK0I7SUFDeEQsd0JBQXdCLEVBQUUsU0FBUztJQUNuQyw4QkFBOEIsRUFBRSxlQUFlO0lBQy9DLHFCQUFxQixFQUFFLE1BQU07SUFDN0IsMEJBQTBCLEVBQUUsV0FBVztDQUMxQyxDQUFDO0FBQ0YsQUFBTyxJQUFJLE9BQU8sR0FBRztJQUNqQixpQkFBaUIsRUFBRSxHQUFHO0NBQ3pCLENBQUM7OztBQ3BERjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQSxBQUdBLElBQUkscUJBQXFCLGtCQUFrQixVQUFVLE1BQU0sRUFBRTtJQUN6REEsU0FBaUIsQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRCxTQUFTLHFCQUFxQixDQUFDLE9BQU8sRUFBRTtRQUNwQyxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRUMsUUFBZ0IsQ0FBQyxFQUFFLEVBQUUscUJBQXFCLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO1FBQzNHLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUM7UUFDekQsS0FBSyxDQUFDLHNCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUNsQyxLQUFLLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLEtBQUssQ0FBQywwQkFBMEIsR0FBRyxLQUFLLENBQUM7UUFDekMsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFDRCxNQUFNLENBQUMsY0FBYyxDQUFDLHFCQUFxQixFQUFFLFlBQVksRUFBRTtRQUN2RCxHQUFHLEVBQUUsWUFBWTtZQUNiLE9BQU8sVUFBVSxDQUFDO1NBQ3JCO1FBQ0QsVUFBVSxFQUFFLElBQUk7UUFDaEIsWUFBWSxFQUFFLElBQUk7S0FDckIsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsRUFBRSxTQUFTLEVBQUU7UUFDcEQsR0FBRyxFQUFFLFlBQVk7WUFDYixPQUFPLE9BQU8sQ0FBQztTQUNsQjtRQUNELFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFlBQVksRUFBRSxJQUFJO0tBQ3JCLENBQUMsQ0FBQztJQUNILE1BQU0sQ0FBQyxjQUFjLENBQUMscUJBQXFCLEVBQUUsU0FBUyxFQUFFO1FBQ3BELEdBQUcsRUFBRSxZQUFZO1lBQ2IsT0FBTyxPQUFPLENBQUM7U0FDbEI7UUFDRCxVQUFVLEVBQUUsSUFBSTtRQUNoQixZQUFZLEVBQUUsSUFBSTtLQUNyQixDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsY0FBYyxDQUFDLHFCQUFxQixFQUFFLGdCQUFnQixFQUFFO1FBQzNELEdBQUcsRUFBRSxZQUFZO1lBQ2IsT0FBTztnQkFDSCxRQUFRLEVBQUUsWUFBWSxFQUFFLE9BQU8sU0FBUyxDQUFDLEVBQUU7Z0JBQzNDLFdBQVcsRUFBRSxZQUFZLEVBQUUsT0FBTyxTQUFTLENBQUMsRUFBRTtnQkFDOUMsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLE9BQU8sS0FBSyxDQUFDLEVBQUU7Z0JBQy9DLGVBQWUsRUFBRSxZQUFZLEVBQUUsT0FBTyxLQUFLLENBQUMsRUFBRTtnQkFDOUMsU0FBUyxFQUFFLFlBQVksRUFBRSxPQUFPLEtBQUssQ0FBQyxFQUFFO2dCQUN4QyxlQUFlLEVBQUUsWUFBWSxFQUFFLE9BQU8sS0FBSyxDQUFDLEVBQUU7Z0JBQzlDLFdBQVcsRUFBRSxZQUFZLEVBQUUsT0FBTyxTQUFTLENBQUMsRUFBRTtnQkFDOUMsdUJBQXVCLEVBQUUsWUFBWSxFQUFFLE9BQU8sU0FBUyxDQUFDLEVBQUU7Z0JBQzFELG9CQUFvQixFQUFFLFlBQVksRUFBRSxPQUFPLFNBQVMsQ0FBQyxFQUFFO2dCQUN2RCx3QkFBd0IsRUFBRSxZQUFZLEVBQUUsT0FBTyxTQUFTLENBQUMsRUFBRTthQUM5RCxDQUFDO1NBQ0w7UUFDRCxVQUFVLEVBQUUsSUFBSTtRQUNoQixZQUFZLEVBQUUsSUFBSTtLQUNyQixDQUFDLENBQUM7SUFDSCxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLFlBQVk7UUFDL0MsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQ3RELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUMvQyxDQUFDO0lBQ0YscUJBQXFCLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxZQUFZO1FBQ2xELFlBQVksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztLQUN6QyxDQUFDO0lBQ0YscUJBQXFCLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxVQUFVLFFBQVEsRUFBRTtRQUM5RCxJQUFJLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELElBQUksUUFBUSxFQUFFO1lBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQy9DO2FBQ0k7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbEQ7S0FDSixDQUFDOzs7O0lBSUYscUJBQXFCLENBQUMsU0FBUyxDQUFDLGtCQUFrQixHQUFHLFlBQVk7UUFDN0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEVBQUU7WUFDbEMsT0FBTztTQUNWO1FBQ0QsWUFBWSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxVQUFVLENBQUMsWUFBWTtZQUM3QyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUN6RCxLQUFLLENBQUMsMEJBQTBCLEdBQUcsS0FBSyxDQUFDO1NBQzVDLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDakMsQ0FBQzs7OztJQUlGLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsWUFBWTtRQUN2RCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztLQUNoQyxDQUFDO0lBQ0YscUJBQXFCLENBQUMsU0FBUyxDQUFDLHFCQUFxQixHQUFHLFlBQVk7UUFDaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsRUFBRTtZQUNuQyxPQUFPO1NBQ1Y7UUFDRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDdkMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDM0MsSUFBSSxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQ3ZCLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksMEJBQTBCLEdBQUcsT0FBTyxDQUFDLDBCQUEwQixDQUFDO1FBQ3BFLElBQUksUUFBUSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDbkMsSUFBSSxRQUFRLEtBQUssMEJBQTBCLEVBQUU7WUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdkM7YUFDSTtZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3BDOzs7UUFHRCxJQUFJLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3hDLFlBQVksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQzs7O1FBR25DLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsSUFBSSxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMzRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDO1NBQzFDO0tBQ0osQ0FBQztJQUNGLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsR0FBRyxZQUFZO1FBQy9ELElBQUksOEJBQThCLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixFQUFFLHdCQUF3QixHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSwwQkFBMEIsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUM7UUFDMU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxFQUFFO1lBQ2pDLE9BQU8sOEJBQThCLENBQUM7U0FDekM7UUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLEdBQUcsd0JBQXdCLEdBQUcsMEJBQTBCLENBQUM7S0FDNUYsQ0FBQztJQUNGLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyw0QkFBNEIsR0FBRyxVQUFVLFFBQVEsRUFBRSxRQUFRLEVBQUU7UUFDekYsSUFBSSxxQkFBcUIsR0FBRyxPQUFPLENBQUMscUJBQXFCLEVBQUUsd0JBQXdCLEdBQUcsT0FBTyxDQUFDLHdCQUF3QixFQUFFLDBCQUEwQixHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQztRQUN4TCxJQUFJLEVBQUUsR0FBRyxxQkFBcUIsQ0FBQyxVQUFVLEVBQUUsc0JBQXNCLEdBQUcsRUFBRSxDQUFDLHNCQUFzQixFQUFFLDRCQUE0QixHQUFHLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxzQkFBc0IsR0FBRyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsMEJBQTBCLEdBQUcsRUFBRSxDQUFDLDBCQUEwQixFQUFFLDBCQUEwQixHQUFHLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSw0QkFBNEIsR0FBRyxFQUFFLENBQUMsNEJBQTRCLENBQUM7UUFDMVksUUFBUSxRQUFRO1lBQ1osS0FBSyxxQkFBcUI7Z0JBQ3RCLElBQUksUUFBUSxLQUFLLDBCQUEwQixFQUFFO29CQUN6QyxPQUFPLEVBQUUsQ0FBQztpQkFDYjtnQkFDRCxPQUFPLFFBQVEsS0FBSyx3QkFBd0IsR0FBRywwQkFBMEIsR0FBRyw0QkFBNEIsQ0FBQztZQUM3RyxLQUFLLDBCQUEwQjtnQkFDM0IsT0FBTyxRQUFRLEtBQUssd0JBQXdCLEdBQUcsc0JBQXNCLEdBQUcsNEJBQTRCLENBQUM7WUFDekcsS0FBSyx3QkFBd0I7Z0JBQ3pCLE9BQU8sUUFBUSxLQUFLLDBCQUEwQixHQUFHLHNCQUFzQixHQUFHLDBCQUEwQixDQUFDO1lBQ3pHO2dCQUNJLE9BQU8sUUFBUSxLQUFLLHdCQUF3QixHQUFHLDBCQUEwQixHQUFHLDRCQUE0QixDQUFDO1NBQ2hIO0tBQ0osQ0FBQztJQUNGLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsR0FBRyxZQUFZOztRQUU3RCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLEVBQUU7WUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7U0FDM0c7YUFDSTs7O1lBR0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUNwRTtLQUNKLENBQUM7SUFDRixPQUFPLHFCQUFxQixDQUFDO0NBQ2hDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztBQUNsQixBQUdBOztBQ3pMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQSxBQVFBLElBQUksY0FBYyxHQUFHLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ2xELElBQUksV0FBVyxrQkFBa0IsVUFBVSxNQUFNLEVBQUU7SUFDL0NELFNBQWlCLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLFNBQVMsV0FBVyxHQUFHO1FBQ25CLElBQUksS0FBSyxHQUFHLE1BQU0sS0FBSyxJQUFJLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDO1FBQ3JFLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3RDLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBQ0QsV0FBVyxDQUFDLFFBQVEsR0FBRyxVQUFVLElBQUksRUFBRTtRQUNuQyxPQUFPLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2hDLENBQUM7SUFDRixNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFO1FBQ25ELEdBQUcsRUFBRSxZQUFZO1lBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3ZCO1FBQ0QsVUFBVSxFQUFFLElBQUk7UUFDaEIsWUFBWSxFQUFFLElBQUk7S0FDckIsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRTtRQUNwRCxHQUFHLEVBQUUsWUFBWTtZQUNiLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7U0FDdEM7UUFDRCxHQUFHLEVBQUUsVUFBVSxPQUFPLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ3pDO1FBQ0QsVUFBVSxFQUFFLElBQUk7UUFDaEIsWUFBWSxFQUFFLElBQUk7S0FDckIsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLGVBQWUsRUFBRTtRQUMxRCxHQUFHLEVBQUUsWUFBWTtZQUNiLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUM7U0FDNUM7UUFDRCxHQUFHLEVBQUUsVUFBVSxhQUFhLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1NBQ3JEO1FBQ0QsVUFBVSxFQUFFLElBQUk7UUFDaEIsWUFBWSxFQUFFLElBQUk7S0FDckIsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRTtRQUNyRCxHQUFHLEVBQUUsWUFBWTtZQUNiLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUM7U0FDdkM7UUFDRCxHQUFHLEVBQUUsVUFBVSxRQUFRLEVBQUU7WUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDMUM7UUFDRCxVQUFVLEVBQUUsSUFBSTtRQUNoQixZQUFZLEVBQUUsSUFBSTtLQUNyQixDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFO1FBQ2xELEdBQUcsRUFBRSxZQUFZO1lBQ2IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztTQUNwQztRQUNELEdBQUcsRUFBRSxVQUFVLEtBQUssRUFBRTtZQUNsQixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDckM7UUFDRCxVQUFVLEVBQUUsSUFBSTtRQUNoQixZQUFZLEVBQUUsSUFBSTtLQUNyQixDQUFDLENBQUM7SUFDSCxXQUFXLENBQUMsU0FBUyxDQUFDLGtCQUFrQixHQUFHLFlBQVk7UUFDbkQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxFQUFFLE9BQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDOUUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFlBQVksRUFBRSxPQUFPLEtBQUssQ0FBQyxXQUFXLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDMUYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO0tBQ3RDLENBQUM7SUFDRixXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxZQUFZO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN2QyxDQUFDO0lBQ0YsV0FBVyxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsR0FBRyxZQUFZO1FBQ3JELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQzs7O1FBR2pCLElBQUksT0FBTyxHQUFHO1lBQ1YsUUFBUSxFQUFFLFVBQVUsU0FBUyxFQUFFLEVBQUUsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRTtZQUMvRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUM1RCxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ2hFLGVBQWUsRUFBRSxZQUFZLEVBQUUsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFO1lBQ3hFLFNBQVMsRUFBRSxZQUFZLEVBQUUsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDaEQsZUFBZSxFQUFFLFlBQVksRUFBRSxPQUFPLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUM1RCxXQUFXLEVBQUUsVUFBVSxTQUFTLEVBQUUsRUFBRSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFO1lBQ3JGLHVCQUF1QixFQUFFLFVBQVUsSUFBSSxFQUFFLEVBQUUsT0FBTyxLQUFLLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQy9GLG9CQUFvQixFQUFFLFVBQVUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLE9BQU8sS0FBSyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDdkcsd0JBQXdCLEVBQUUsVUFBVSxRQUFRLEVBQUUsRUFBRSxPQUFPLEtBQUssQ0FBQyxjQUFjLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxFQUFFO1NBQ3JHLENBQUM7UUFDRixPQUFPLElBQUkscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDN0MsQ0FBQztJQUNGLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLFlBQVk7UUFDOUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDOzs7UUFHakIsSUFBSSxPQUFPLEdBQUdDLFFBQWdCLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSw0QkFBNEIsRUFBRSxVQUFVLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLEtBQUssQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsT0FBTyxJQUFJLENBQUMsRUFBRSxFQUFFLDBCQUEwQixFQUFFLFVBQVUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sS0FBSyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNuZSxPQUFPLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0tBQ3RFLENBQUM7SUFDRixXQUFXLENBQUMsU0FBUyxDQUFDLDJCQUEyQixHQUFHLFlBQVk7UUFDNUQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDbkMsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVUsWUFBWSxFQUFFO1lBQzNDLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7OztZQUdsRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN4QixPQUFPO2FBQ1Y7O1lBRUQsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUM1QixJQUFJLFlBQVksR0FBRztnQkFDZixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7Z0JBQy9CLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtnQkFDM0IsR0FBRyxFQUFFLFlBQVk7Z0JBQ2pCLEdBQUcsRUFBRSxVQUFVLEtBQUssRUFBRTtvQkFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUMvQixLQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO2lCQUNwQzthQUNKLENBQUM7WUFDRixNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDL0QsQ0FBQyxDQUFDO0tBQ04sQ0FBQztJQUNGLFdBQVcsQ0FBQyxTQUFTLENBQUMsNkJBQTZCLEdBQUcsWUFBWTtRQUM5RCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ25DLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLFlBQVksRUFBRTtZQUMzQyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hCLE9BQU87YUFDVjtZQUNELE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN2RCxDQUFDLENBQUM7S0FDTixDQUFDO0lBQ0YsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFFO1FBQzNELEdBQUcsRUFBRSxZQUFZO1lBQ2IsSUFBSSx1QkFBdUIsR0FBRyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUM7WUFDcEYsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLEdBQUcsdUJBQXVCLEdBQUcsVUFBVSxDQUFDLENBQUM7YUFDNUY7WUFDRCxPQUFPLEVBQUUsQ0FBQztTQUNiO1FBQ0QsVUFBVSxFQUFFLElBQUk7UUFDaEIsWUFBWSxFQUFFLElBQUk7S0FDckIsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxXQUFXLENBQUM7Q0FDdEIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0FBQ2pCLEFBQ0EsU0FBUyxlQUFlLENBQUMsYUFBYSxFQUFFO0lBQ3BDLE9BQU8sQ0FBQyxDQUFDLGFBQWEsSUFBSSxPQUFPLGFBQWEsQ0FBQyxHQUFHLEtBQUssVUFBVSxDQUFDO0NBQ3JFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQ2pLVSxHQUFRLCtCQUFLLEdBQWtCO2VBQUcsR0FBSztrQkFBRyxHQUFROzs7aUJBSHJELEdBQVU7Ozs0REFGdUIsR0FBVzs7RUFTNUMsT0FBTyxDQUFDLFlBQVksYUFBQyxHQUFPLE1BQUUsUUFBUSxJQUFJLEtBQUssRUFBRSxPQUFPOzs7Ozs7Ozs7OztxREFsQjNELEdBQVMsK0JBQ1QsR0FBUSxNQUFHLHdCQUF3QixHQUFHLEVBQUUsNEJBQ3ZDLEdBQU8sU0FBSyxZQUFZLHdCQUFJLEdBQWU7S0FBSSxxQ0FBcUM7S0FBRyxFQUFFLDRCQUN6RixHQUFPLFNBQUssWUFBWSx5QkFBSyxHQUFlO0tBQUksOEJBQThCO0tBQUcsRUFBRTs7RUFFbkYsT0FBTyxhQUFDLEdBQU87R0FBRyxLQUFLO0dBQUUsT0FBTztHQUFFLFVBQVU7R0FBRSxlQUFlO0dBQUUsT0FBTztHQUFFLFNBQVM7R0FBRSxPQUFPO0dBQUUsVUFBVTtHQUFFLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lEQVV2RyxHQUFZO2dEQUNiLEdBQVk7Ozs7Ozs7cUNBSFIsR0FBYTtrRUFMWCxHQUFTOzs7Ozs7Ozs7Ozs7Ozt5QkFNbEIsR0FBUSwrQkFBSyxHQUFrQjtpQkFBRyxHQUFLO29CQUFHLEdBQVE7OztxREFIckQsR0FBVTs7OzhEQUZ1QixHQUFXOztvQ0FTNUMsT0FBTyxDQUFDLFlBQVksYUFBQyxHQUFPLE1BQUUsUUFBUSxJQUFJLEtBQUssRUFBRSxPQUFPOzs7O3NDQUw5QyxHQUFhOzs7K0hBTFgsR0FBUzs7Ozt1REFSeEIsR0FBUywrQkFDVCxHQUFRLE1BQUcsd0JBQXdCLEdBQUcsRUFBRSw0QkFDdkMsR0FBTyxTQUFLLFlBQVksd0JBQUksR0FBZTtPQUFJLHFDQUFxQztPQUFHLEVBQUUsNEJBQ3pGLEdBQU8sU0FBSyxZQUFZLHlCQUFLLEdBQWU7T0FBSSw4QkFBOEI7T0FBRyxFQUFFOztvQ0FFbkYsT0FBTyxhQUFDLEdBQU87S0FBRyxLQUFLO0tBQUUsT0FBTztLQUFFLFVBQVU7S0FBRSxlQUFlO0tBQUUsT0FBTztLQUFFLFNBQVM7S0FBRSxPQUFPO0tBQUUsVUFBVTtLQUFFLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQUY5RyxhQUFhLEdBQUcsb0JBQW9CLENBQUMsaUJBQWlCOztLQUN4RCxrQkFBa0I7Ozs7T0FFWCxHQUFHO2NBQ1YsU0FBUyxHQUFHLEVBQUU7T0FFUCxRQUFRLEdBQUcsS0FBSztPQUNoQixhQUFhLEdBQUcsa0JBQWtCO09BQ2xDLEtBQUssR0FBRyxrQkFBa0I7T0FDMUIsT0FBTyxHQUFHLGtCQUFrQjtPQUM1QixLQUFLLEdBQUcsSUFBSTtPQUNaLFFBQVEsR0FBRyxrQkFBa0I7T0FDN0IsU0FBUztPQUNULFdBQVcsR0FBRyxFQUFFO0tBRXZCLE9BQU87S0FDUCxRQUFRO0tBQ1IsU0FBUyxHQUFHLFVBQVUsQ0FBQyxpQkFBaUI7S0FDeEMsVUFBVSxHQUFHLFVBQVUsQ0FBQywwQkFBMEI7S0FDbEQsVUFBVSxHQUFHLFVBQVUsQ0FBQywrQkFBK0I7S0FDdkQsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLHFDQUFxQzs7S0FDbkUsYUFBYSxHQUFHLEtBQUssS0FBSyxrQkFBa0I7R0FBSSxPQUFPLEtBQUssa0JBQWtCLEdBQUcsS0FBSyxHQUFHLE9BQU87R0FBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssT0FBTyxDQUFDOztLQUMvSCxPQUFPLEdBQUcsVUFBVSxDQUFDLHVCQUF1QjtLQUM1QyxlQUFlLEdBQUcsVUFBVSxDQUFDLDRCQUE0QjtLQUN6RCxvQkFBb0IsR0FBRyxVQUFVLENBQUMsOEJBQThCO0tBQ2hFLFdBQVcsR0FBRyxVQUFVLENBQUMsMkJBQTJCO0tBQ3BELFdBQVcsR0FBRyxVQUFVLENBQUMsMkJBQTJCO0tBaUNwRCxlQUFlLEdBQUcsT0FBTzs7S0FVekIsZ0JBQWdCO0VBQ2xCLGdCQUFnQixDQUFDLFlBQVk7OztDQUcvQixPQUFPO01BQ0QsV0FBVyxLQUFLLEtBQUs7b0JBQ3ZCLFFBQVEsT0FBTyxXQUFXLENBQUMsT0FBTzs7T0FFOUIsT0FBTyxLQUFLLFlBQVk7UUFDdEIsZUFBZTtzQkFDakIsUUFBUSxTQUFTLFdBQVcsQ0FBQyxJQUFJOztzQkFFakMsUUFBUSxVQUFVLFdBQVcsQ0FBQyxLQUFLLEdBQUcsb0JBQW9COzs7cUJBRzVELFFBQVEsU0FBUyxXQUFXOzs7O01BSTVCLFNBQVMsSUFBSSxTQUFTO0dBQ3hCLFNBQVMsR0FBRyxLQUFLLEdBQUcsUUFBUTs7OztDQUloQyxTQUFTO01BQ0gsV0FBVyxLQUFLLEtBQUs7R0FDdkIsUUFBUSxJQUFJLFFBQVEsQ0FBQyxPQUFPOzs7O1VBSXZCLFlBQVk7TUFDZixLQUFLLEtBQUssa0JBQWtCO1NBQ3hCLEdBQUcsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUs7O09BQzNCLFFBQVEsQ0FBQyxPQUFPLElBQUksR0FBRyxNQUFNLENBQUM7SUFDaEMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLOztlQUVOLFFBQVEsQ0FBQyxPQUFPLElBQUksR0FBRyxNQUFNLENBQUM7SUFDeEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7Ozs7O1VBTVQsS0FBSztTQUNaLFVBQVUsSUFBSSxVQUFVLENBQUMsRUFBRTs7Ozs7Ozs7Ozs7O0VBdkdwQixhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtEN0IsS0FBTyxPQUFPLEtBQUssa0JBQWtCO1FBQy9CLE9BQU8sS0FBSyxlQUFlO3NCQUM3QixPQUFPLEdBQUcsYUFBYTtlQUNkLGFBQWEsS0FBSyxPQUFPO3FCQUNsQyxhQUFhLEdBQUcsT0FBTzs7O3FCQUV6QixlQUFlLEdBQUcsT0FBTzs7Ozs7R0F0QzNCLEtBQU8sVUFBVTtJQUNmLFVBQVUsQ0FBQyxhQUFhOzs7OztHQUcxQixLQUFPLFFBQVEsSUFBSSxhQUFhLEtBQUssa0JBQWtCLElBQUksUUFBUSxDQUFDLGFBQWEsS0FBSyxhQUFhO3FCQUNqRyxRQUFRLENBQUMsYUFBYSxHQUFHLGFBQWE7Ozs7O0dBR3hDLEtBQU8sUUFBUTtRQUNULEtBQUssS0FBSyxrQkFBa0I7V0FDeEIsU0FBUyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxPQUFPLENBQUM7O1NBQ3pDLFFBQVEsQ0FBQyxPQUFPLEtBQUssU0FBUzt1QkFDaEMsUUFBUSxDQUFDLE9BQU8sR0FBRyxTQUFTOztlQUVyQixPQUFPLEtBQUssa0JBQWtCLElBQUksUUFBUSxDQUFDLE9BQU8sS0FBSyxPQUFPO3NCQUN2RSxRQUFRLENBQUMsT0FBTyxHQUFHLE9BQU87Ozs7OztHQUk5QixLQUFPLFFBQVEsSUFBSSxRQUFRLENBQUMsUUFBUSxLQUFLLFFBQVE7cUJBQy9DLFFBQVEsQ0FBQyxRQUFRLEdBQUcsUUFBUTs7Ozs7R0FHOUIsS0FBTyxRQUFRLElBQUksUUFBUSxLQUFLLGtCQUFrQixJQUFJLFFBQVEsQ0FBQyxLQUFLLEtBQUssS0FBSztxQkFDNUUsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLOzs7OztHQUd4QixLQUFPLFFBQVEsSUFBSSxRQUFRLEtBQUssa0JBQWtCLElBQUksUUFBUSxDQUFDLEtBQUssS0FBSyxRQUFRO3FCQUMvRSxRQUFRLENBQUMsS0FBSyxHQUFHLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRTdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBLEFBQU8sSUFBSUMsWUFBVSxHQUFHO0lBQ3BCLElBQUksRUFBRSxnQkFBZ0I7Q0FDekIsQ0FBQztBQUNGLEFBQU8sSUFBSUMsU0FBTyxHQUFHO0lBQ2pCLGNBQWMsRUFBRSx5QkFBeUI7Q0FDNUMsQ0FBQzs7O0FDM0JGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBLEFBR0EsSUFBSSxzQkFBc0Isa0JBQWtCLFVBQVUsTUFBTSxFQUFFO0lBQzFESCxTQUFpQixDQUFDLHNCQUFzQixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2xELFNBQVMsc0JBQXNCLENBQUMsT0FBTyxFQUFFO1FBQ3JDLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFQyxRQUFnQixDQUFDLEVBQUUsRUFBRSxzQkFBc0IsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDNUcsS0FBSyxDQUFDLGFBQWEsR0FBRyxZQUFZLEVBQUUsT0FBTyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ25FLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBQ0QsTUFBTSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsRUFBRSxZQUFZLEVBQUU7UUFDeEQsR0FBRyxFQUFFLFlBQVk7WUFDYixPQUFPQyxZQUFVLENBQUM7U0FDckI7UUFDRCxVQUFVLEVBQUUsSUFBSTtRQUNoQixZQUFZLEVBQUUsSUFBSTtLQUNyQixDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsY0FBYyxDQUFDLHNCQUFzQixFQUFFLFNBQVMsRUFBRTtRQUNyRCxHQUFHLEVBQUUsWUFBWTtZQUNiLE9BQU9DLFNBQU8sQ0FBQztTQUNsQjtRQUNELFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFlBQVksRUFBRSxJQUFJO0tBQ3JCLENBQUMsQ0FBQztJQUNILE1BQU0sQ0FBQyxjQUFjLENBQUMsc0JBQXNCLEVBQUUsZ0JBQWdCLEVBQUU7UUFDNUQsR0FBRyxFQUFFLFlBQVk7WUFDYixPQUFPO2dCQUNILG1CQUFtQixFQUFFLFlBQVksRUFBRSxPQUFPLFNBQVMsQ0FBQyxFQUFFO2dCQUN0RCxxQkFBcUIsRUFBRSxZQUFZLEVBQUUsT0FBTyxTQUFTLENBQUMsRUFBRTtnQkFDeEQsNEJBQTRCLEVBQUUsWUFBWSxFQUFFLE9BQU8sU0FBUyxDQUFDLEVBQUU7Z0JBQy9ELDBCQUEwQixFQUFFLFlBQVksRUFBRSxPQUFPLFNBQVMsQ0FBQyxFQUFFO2FBQ2hFLENBQUM7U0FDTDtRQUNELFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFlBQVksRUFBRSxJQUFJO0tBQ3JCLENBQUMsQ0FBQztJQUNILHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsWUFBWTtRQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDekUsQ0FBQztJQUNGLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsWUFBWTtRQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDM0UsQ0FBQztJQUNGLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsWUFBWTtRQUN4RCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3BDLHFCQUFxQixDQUFDLFlBQVksRUFBRSxPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUN6RixDQUFDO0lBQ0YsT0FBTyxzQkFBc0IsQ0FBQztDQUNqQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFDbEIsQUFHQTs7QUMxRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkEsQUFHQSxJQUFJLFlBQVksa0JBQWtCLFVBQVUsTUFBTSxFQUFFO0lBQ2hESCxTQUFpQixDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN4QyxTQUFTLFlBQVksR0FBRztRQUNwQixPQUFPLE1BQU0sS0FBSyxJQUFJLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDO0tBQ25FO0lBQ0QsWUFBWSxDQUFDLFFBQVEsR0FBRyxVQUFVLElBQUksRUFBRTtRQUNwQyxPQUFPLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2pDLENBQUM7SUFDRixNQUFNLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFO1FBQ25ELEdBQUcsRUFBRSxZQUFZO1lBQ2IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3RCO1FBQ0QsR0FBRyxFQUFFLFVBQVUsS0FBSyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO1FBQ0QsVUFBVSxFQUFFLElBQUk7UUFDaEIsWUFBWSxFQUFFLElBQUk7S0FDckIsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRTtRQUNwRCxHQUFHLEVBQUUsWUFBWTtZQUNiLElBQUksY0FBYyxHQUFHLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7WUFDbkUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNuRDtRQUNELFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFlBQVksRUFBRSxJQUFJO0tBQ3JCLENBQUMsQ0FBQztJQUNILFlBQVksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEdBQUcsWUFBWTtRQUN0RCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7OztRQUdqQixJQUFJLE9BQU8sR0FBRztZQUNWLG1CQUFtQixFQUFFLFlBQVk7Z0JBQzdCLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtvQkFDckMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ2xDO2FBQ0o7WUFDRCxxQkFBcUIsRUFBRSxZQUFZO2dCQUMvQixJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7b0JBQ3JDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO2lCQUNwQzthQUNKO1lBQ0QsNEJBQTRCLEVBQUUsVUFBVSxPQUFPLEVBQUUsT0FBTyxFQUFFO2dCQUN0RCxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7b0JBQ2QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7aUJBQ3REO2FBQ0o7WUFDRCwwQkFBMEIsRUFBRSxVQUFVLE9BQU8sRUFBRSxPQUFPLEVBQUU7Z0JBQ3BELElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFDZCxLQUFLLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztpQkFDbkQ7YUFDSjtTQUNKLENBQUM7UUFDRixPQUFPLElBQUksc0JBQXNCLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDOUMsQ0FBQztJQUNGLE9BQU8sWUFBWSxDQUFDO0NBQ3ZCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUNqQixBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDcEVTLEdBQU87RUFDUixPQUFPLENBQUMsWUFBWSxhQUFDLEdBQU8sS0FBRSxRQUFRLElBQUksS0FBSzs7Ozs7Ozs7Ozs7dURBVGxELEdBQVMsNEJBQ1QsR0FBSyxRQUFLLEtBQUs7S0FBRywyQkFBMkI7S0FBRyxFQUFFOztFQUVqRCxPQUFPLGFBQUMsR0FBTyxNQUFHLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrRUFJbkQsR0FBUzs7Ozs7Ozs7Ozs7Ozs7OztvREFDcEIsR0FBTztrQ0FDUixPQUFPLENBQUMsWUFBWSxhQUFDLEdBQU8sS0FBRSxRQUFRLElBQUksS0FBSzs7OytIQUZuQyxHQUFTOzs7O3lEQVB4QixHQUFTLDRCQUNULEdBQUssUUFBSyxLQUFLO09BQUcsMkJBQTJCO09BQUcsRUFBRTs7a0NBRWpELE9BQU8sYUFBQyxHQUFPLE1BQUcsS0FBSyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBUmpFLE9BQU8sR0FBRyxDQUFDOzs7T0FRVCxhQUFhLEdBQUcsb0JBQW9CLENBQUMsaUJBQWlCO09BRWpELEdBQUc7Y0FDVixTQUFTLEdBQUcsRUFBRTtPQUVQLEtBQUssR0FBRyxPQUFPO09BQ2YsT0FBTyxHQUFHLGtCQUFrQixHQUFFLE9BQU87T0FDckMsU0FBUztLQUVoQixPQUFPO0tBQ1AsU0FBUztDQUViLFVBQVUsQ0FBQyxpQkFBaUIsUUFBUSxTQUFTO0NBQzdDLFVBQVUsQ0FBQywwQkFBMEIsSUFBRyxFQUFFLEVBQUUsT0FBTzs7Q0FFbkQsT0FBTztFQUNMLFNBQVMsT0FBTyxZQUFZLENBQUMsT0FBTzs7O0NBR3RDLFNBQVM7RUFDUCxTQUFTLElBQUksU0FBUyxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJDY0EsR0FBUzt5Q0FBVCxHQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZDQUFULEdBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQkFNVCxHQUFTO3lDQUFULEdBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkNBQVQsR0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQU1ULEdBQVM7eUNBQVQsR0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2Q0FBVCxHQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBTVQsR0FBUzt5Q0FBVCxHQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZDQUFULEdBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQkFVVCxHQUFTO3lDQUFULEdBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkNBQVQsR0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQU1ULEdBQVM7eUNBQVQsR0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2Q0FBVCxHQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXZFckMsU0FBUyxHQUFHLElBQUk7S0FDaEIsU0FBUyxHQUFHLEtBQUs7S0FDakIsU0FBUyxHQUFHLElBQUk7S0FDaEIsU0FBUyxHQUFHLEtBQUs7S0FDakIsU0FBUyxHQUFHLEtBQUs7S0FDakIsU0FBUyxHQUFHLEtBQUs7OztFQWdDVyxTQUFTOzs7OztFQU1ULFNBQVM7Ozs7O0VBTVQsU0FBUzs7Ozs7RUFNVCxTQUFTOzs7OztFQVVULFNBQVM7Ozs7O0VBTVQsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

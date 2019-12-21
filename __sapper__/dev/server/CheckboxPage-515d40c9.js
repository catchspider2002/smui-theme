'use strict';

var index = require('./index-8786aa53.js');
var prefixFilter = require('./prefixFilter-8b2beaa3.js');
var Page = require('./Page-6037c0c8.js');
var Example = require('./Example-cd923b49.js');

var css = ".mdc-typography--headline6{font-size:1.25rem;line-height:2rem;letter-spacing:.0125em}.mdc-typography--headline6,.mdc-typography--subtitle2{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-weight:500;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle2{font-size:.875rem;line-height:1.375rem;letter-spacing:.0071428571em}.mdc-typography--body2{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit}:root{--primary-100:#ebf8ff;--primary-200:#bee3f8;--primary-300:#90cdf4;--primary-400:#63b3ed;--primary-500:#4299e1;--primary-600:#3182ce;--primary-700:#2b6cb0;--primary-800:#2c5282;--primary-900:#2a4365;--secondary-100:#fff5f5;--secondary-200:#fed7d7;--secondary-300:#feb2b2;--secondary-400:#fc8181;--secondary-500:#f56565;--secondary-600:#e53e3e;--secondary-700:#c53030;--secondary-800:#9b2c2c;--secondary-900:#742a2a;--primary-color:var(--primary-700);--secondary-color:var(--secondary-700);--primary-font-color:#fff;--secondary-font-color:#fff;--disabled-button-bg-color:#e0e0e0;--font-color:#212121;--other-font-color:#000;--bg-color:#fff;--bg-layer-color:#f5f5f5;--bg-card-color:#fff;--enabled-color:#757575;--disabled-color:#bdbdbd;--switch-toggle-color:#fafafa;--switch-track-color:#4d4d4d;--font-family:\"Montserrat\",sans-serif;--filter:invert(0%);--alert-default-bg-color:var(--primary-200);--alert-solid-bg-color:var(--primary-700);--alert-solid-text-color:\"text-white\";--alert-outline-bg-color:var(--primary-100);--alert-outline-border-color:var(--primary-400);--alert-outline-border-color2:var(--primary-600);--alert-outline-text-color:var(--primary-800)}[data-theme=dark]{--primary-color:var(--primary-400);--secondary-color:var(--secondary-400);--primary-font-color:#000;--secondary-font-color:#000;--disabled-button-bg-color:#1f1f1f;--font-color:#dedede;--other-font-color:#fff;--bg-color:#121212;--bg-layer-color:#333;--bg-card-color:#424242;--enabled-color:#b3b3b3;--disabled-color:#4d4d4d;--switch-toggle-color:#b3b3b3;--switch-track-color:#fff;--filter:invert(100%)}body{--mdc-theme-primary:var(--primary-color);--mdc-theme-secondary:var(--secondary-color);--mdc-theme-on-primary:var(--primary-font-color);--mdc-theme-on-secondary:var(--secondary-font-color);--mdc-text-field-ink-color:var(--other-font-color);--mdc-theme-text-primary-on-background:var(--font-color);--mdc-theme-surface:transparent;--duration:0.5s;--timing:ease;background-color:var(--bg-color);color:var(--font-color);-webkit-transition:color var(--duration) var(--timing),background-color var(--duration) var(--timing);transition:color var(--duration) var(--timing),background-color var(--duration) var(--timing);font-family:var(--font-family)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:var(--disabled-button-bg-color)}.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--disabled-color)}.mdc-select:not(.mdc-select--disabled) .mdc-select__native-control,.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text,.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--other-font-color)}.mdc-select:not(.mdc-select--disabled) .mdc-select__native-control option{color:#000}.mdc-select--with-leading-icon:not(.mdc-select--disabled) .mdc-select__icon{color:var(--enabled-color);opacity:1}.mdc-select__dropdown-icon{-webkit-filter:var(--filter);filter:var(--filter)}.mdc-select--invalid .mdc-select__dropdown-icon{-webkit-filter:invert(0);filter:invert(0)}.mdc-switch--disabled{opacity:.5}.mdc-card__action--icon:not(:disabled){color:var(--enabled-color)}.flex-1-0-auto{-webkit-box-flex:1;flex:1 0 auto}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}to{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{-webkit-transform:scaleX(0);transform:scaleX(0)}68.2%{-webkit-animation-timing-function:cubic-bezier(0,0,0,1);animation-timing-function:cubic-bezier(0,0,0,1)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes mdc-checkbox-checked-unchecked-checkmark-path{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,1,1);animation-timing-function:cubic-bezier(.4,0,1,1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,1,1);animation-timing-function:cubic-bezier(.4,0,1,1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@-webkit-keyframes mdc-checkbox-checked-indeterminate-checkmark{0%{-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1);-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}to{-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{0%{-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1);-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}to{-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}}@-webkit-keyframes mdc-checkbox-indeterminate-checked-checkmark{0%{-webkit-animation-timing-function:cubic-bezier(.14,0,0,1);animation-timing-function:cubic-bezier(.14,0,0,1);-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}to{-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{0%{-webkit-animation-timing-function:cubic-bezier(.14,0,0,1);animation-timing-function:cubic-bezier(.14,0,0,1);-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}to{-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:1}}@-webkit-keyframes mdc-checkbox-checked-indeterminate-mixedmark{0%{-webkit-animation-timing-function:mdc-animation-deceleration-curve-timing-function;animation-timing-function:mdc-animation-deceleration-curve-timing-function;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}to{-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{0%{-webkit-animation-timing-function:mdc-animation-deceleration-curve-timing-function;animation-timing-function:mdc-animation-deceleration-curve-timing-function;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}to{-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}}@-webkit-keyframes mdc-checkbox-indeterminate-checked-mixedmark{0%{-webkit-animation-timing-function:cubic-bezier(.14,0,0,1);animation-timing-function:cubic-bezier(.14,0,0,1);-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}to{-webkit-transform:rotate(315deg);transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{0%{-webkit-animation-timing-function:cubic-bezier(.14,0,0,1);animation-timing-function:cubic-bezier(.14,0,0,1);-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}to{-webkit-transform:rotate(315deg);transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-transform:scaleX(1);transform:scaleX(1);opacity:1}32.8%,to{-webkit-transform:scaleX(0);transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;-webkit-box-flex:0;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}.mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background:before,.mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background:before{background-color:#6200ee}@supports not (-ms-ime-align:auto){.mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background:before,.mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background:before{background-color:var(--mdc-theme-primary,#6200ee)}}.mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:var(--enabled-color);background-color:transparent}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:#6200ee;border-color:var(--mdc-theme-primary,#6200ee);background-color:#6200ee;background-color:var(--mdc-theme-primary,#6200ee)}@keyframes mdc-checkbox-fade-in-background-ui48s1z{0%{border-color:var(--enabled-color);background-color:transparent}50%{border-color:#6200ee;border-color:var(--mdc-theme-primary,#6200ee);background-color:#6200ee;background-color:var(--mdc-theme-primary,#6200ee)}}@keyframes mdc-checkbox-fade-out-background-ui48s1z{0%,80%{border-color:#6200ee;border-color:var(--mdc-theme-primary,#6200ee);background-color:#6200ee;background-color:var(--mdc-theme-primary,#6200ee)}to{border-color:var(--enabled-color);background-color:transparent}}.mdc-checkbox__checkmark{color:#fff}.mdc-checkbox__mixedmark{border-color:#fff}.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:var(--disabled-color)}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background{border-color:transparent;background-color:var(--disabled-color)}@media screen and (-ms-high-contrast:active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:-webkit-inline-box;display:inline-flex;position:absolute;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;-webkit-transition:background-color 90ms cubic-bezier(.4,0,.6,1) 0ms,border-color 90ms cubic-bezier(.4,0,.6,1) 0ms;transition:background-color 90ms cubic-bezier(.4,0,.6,1) 0ms,border-color 90ms cubic-bezier(.4,0,.6,1) 0ms}.mdc-checkbox__background .mdc-checkbox__background:before{background-color:#000}@supports not (-ms-ime-align:auto){.mdc-checkbox__background .mdc-checkbox__background:before{background-color:var(--mdc-theme-on-surface,#000)}}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;-webkit-transition:opacity .18s cubic-bezier(.4,0,.6,1) 0ms;transition:opacity .18s cubic-bezier(.4,0,.6,1) 0ms}.mdc-checkbox__checkmark-path{-webkit-transition:stroke-dashoffset .18s cubic-bezier(.4,0,.6,1) 0ms;transition:stroke-dashoffset .18s cubic-bezier(.4,0,.6,1) 0ms;stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;-webkit-transform:scaleX(0) rotate(0deg);transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;-webkit-transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,-webkit-transform 90ms cubic-bezier(.4,0,.6,1) 0ms;transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,-webkit-transform 90ms cubic-bezier(.4,0,.6,1) 0ms;transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,transform 90ms cubic-bezier(.4,0,.6,1) 0ms;transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,transform 90ms cubic-bezier(.4,0,.6,1) 0ms,-webkit-transform 90ms cubic-bezier(.4,0,.6,1) 0ms}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{-webkit-transition:border-color 90ms cubic-bezier(0,0,.2,1) 0ms,background-color 90ms cubic-bezier(0,0,.2,1) 0ms;transition:border-color 90ms cubic-bezier(0,0,.2,1) 0ms,background-color 90ms cubic-bezier(0,0,.2,1) 0ms}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__background:before{position:absolute;-webkit-transform:scale(0);transform:scale(0);border-radius:50%;opacity:0;pointer-events:none;content:\"\";will-change:opacity,transform;-webkit-transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,-webkit-transform 90ms cubic-bezier(.4,0,.6,1) 0ms;transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,-webkit-transform 90ms cubic-bezier(.4,0,.6,1) 0ms;transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,transform 90ms cubic-bezier(.4,0,.6,1) 0ms;transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,transform 90ms cubic-bezier(.4,0,.6,1) 0ms,-webkit-transform 90ms cubic-bezier(.4,0,.6,1) 0ms}.mdc-checkbox__native-control:focus~.mdc-checkbox__background:before{-webkit-transform:scale(1);transform:scale(1);opacity:.12;-webkit-transition:opacity 80ms cubic-bezier(0,0,.2,1) 0ms,-webkit-transform 80ms cubic-bezier(0,0,.2,1) 0ms;transition:opacity 80ms cubic-bezier(0,0,.2,1) 0ms,-webkit-transform 80ms cubic-bezier(0,0,.2,1) 0ms;transition:opacity 80ms cubic-bezier(0,0,.2,1) 0ms,transform 80ms cubic-bezier(0,0,.2,1) 0ms;transition:opacity 80ms cubic-bezier(0,0,.2,1) 0ms,transform 80ms cubic-bezier(0,0,.2,1) 0ms,-webkit-transform 80ms cubic-bezier(0,0,.2,1) 0ms}.mdc-checkbox__native-control{position:absolute;top:0;left:0;width:100%;height:100%;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{-webkit-transition:opacity .18s cubic-bezier(0,0,.2,1) 0ms,-webkit-transform .18s cubic-bezier(0,0,.2,1) 0ms;transition:opacity .18s cubic-bezier(0,0,.2,1) 0ms,-webkit-transform .18s cubic-bezier(0,0,.2,1) 0ms;transition:opacity .18s cubic-bezier(0,0,.2,1) 0ms,transform .18s cubic-bezier(0,0,.2,1) 0ms;transition:opacity .18s cubic-bezier(0,0,.2,1) 0ms,transform .18s cubic-bezier(0,0,.2,1) 0ms,-webkit-transform .18s cubic-bezier(0,0,.2,1) 0ms;opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{-webkit-transform:scaleX(1) rotate(-45deg);transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark{-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0;-webkit-transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,-webkit-transform 90ms cubic-bezier(.4,0,.6,1) 0ms;transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,-webkit-transform 90ms cubic-bezier(.4,0,.6,1) 0ms;transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,transform 90ms cubic-bezier(.4,0,.6,1) 0ms;transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,transform 90ms cubic-bezier(.4,0,.6,1) 0ms,-webkit-transform 90ms cubic-bezier(.4,0,.6,1) 0ms}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark{-webkit-transform:scaleX(1) rotate(0deg);transform:scaleX(1) rotate(0deg);opacity:1}@-webkit-keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@-webkit-keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@-webkit-keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-checkbox{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0);padding:11px}.mdc-checkbox:after,.mdc-checkbox:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-checkbox:before{-webkit-transition:opacity 15ms linear,background-color 15ms linear;transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-checkbox:after,.mdc-checkbox:before{background-color:#000}@supports not (-ms-ime-align:auto){.mdc-checkbox:after,.mdc-checkbox:before{background-color:var(--mdc-theme-on-surface,#000)}}.mdc-checkbox:hover:before{opacity:.04}.mdc-checkbox:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.mdc-checkbox:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.mdc-checkbox:after,.mdc-checkbox:before{top:0;left:0;width:100%;height:100%}.mdc-checkbox .mdc-checkbox__background{left:11px;right:auto;top:11px}.mdc-checkbox[dir=rtl] .mdc-checkbox .mdc-checkbox__background,[dir=rtl] .mdc-checkbox .mdc-checkbox .mdc-checkbox__background{left:auto;right:11px}.mdc-checkbox .mdc-checkbox__background:before{top:-13px;left:-13px;width:40px;height:40px}";
prefixFilter.styleInject(css);

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
    prefixFilter.__extends(MDCCheckboxFoundation, _super);
    function MDCCheckboxFoundation(adapter) {
        var _this = _super.call(this, prefixFilter.__assign({}, MDCCheckboxFoundation.defaultAdapter, adapter)) || this;
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
}(prefixFilter.MDCFoundation));
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
    prefixFilter.__extends(MDCCheckbox, _super);
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
        var adapter = prefixFilter.__assign({}, prefixFilter.MDCRipple.createAdapter(this), { deregisterInteractionHandler: function (evtType, handler) { return _this.nativeControl_.removeEventListener(evtType, handler, prefixFilter.applyPassive()); }, isSurfaceActive: function () { return prefixFilter.matches(_this.nativeControl_, ':active'); }, isUnbounded: function () { return true; }, registerInteractionHandler: function (evtType, handler) { return _this.nativeControl_.addEventListener(evtType, handler, prefixFilter.applyPassive()); } });
        return new prefixFilter.MDCRipple(this.root_, new prefixFilter.MDCRippleFoundation(adapter));
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
}(prefixFilter.MDCComponent));
function validDescriptor(inputPropDesc) {
    return !!inputPropDesc && typeof inputPropDesc.set === 'function';
}
//# sourceMappingURL=component.js.map

/* node_modules\@smui\checkbox\Checkbox.svelte generated by Svelte v3.16.4 */

const Checkbox = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {

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
	let formField = index.getContext("SMUI:form-field");
	let inputProps = index.getContext("SMUI:generic:input:props") || ({});
	let setChecked = index.getContext("SMUI:generic:input:setChecked");
	let addChangeHandler = index.getContext("SMUI:generic:input:addChangeHandler");

	let nativeChecked = group === uninitializedValue
	? checked === uninitializedValue ? false : checked
	: group.indexOf(value) !== -1;

	let context = index.getContext("SMUI:checkbox:context");
	let dataTableHeader = index.getContext("SMUI:data-table:row:header");
	let getDataTableRowIndex = index.getContext("SMUI:data-table:row:getIndex");
	let instantiate = index.getContext("SMUI:checkbox:instantiate");
	let getInstance = index.getContext("SMUI:checkbox:getInstance");
	let previousChecked = checked;

	if (addChangeHandler) {
		addChangeHandler(handleChange);
	}

	index.onMount(async () => {
		if (instantiate !== false) {
			checkbox = new MDCCheckbox(element);
		} else {
			if (context === "data-table") {
				if (dataTableHeader) {
					checkbox = await getInstance(true);
				} else {
					checkbox = (await getInstance(false))[getDataTableRowIndex()];
				}
			} else {
				checkbox = await getInstance();
			}
		}

		if (formField && formField()) {
			formField().input = checkbox;
		}
	});

	index.onDestroy(() => {
		if (instantiate !== false) {
			checkbox && checkbox.destroy();
		}
	});

	function handleChange() {
		if (group !== uninitializedValue) {
			const idx = group.indexOf(value);

			if (checkbox.checked && idx === -1) {
				group.push(value);
				group = group;
			} else if (!checkbox.checked && idx !== -1) {
				group.splice(idx, 1);
				group = group;
			}
		}
	}

	function getId() {
		return inputProps && inputProps.id;
	}

	if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
	if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
	if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
	if ($$props.indeterminate === void 0 && $$bindings.indeterminate && indeterminate !== void 0) $$bindings.indeterminate(indeterminate);
	if ($$props.group === void 0 && $$bindings.group && group !== void 0) $$bindings.group(group);
	if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0) $$bindings.checked(checked);
	if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
	if ($$props.valueKey === void 0 && $$bindings.valueKey && valueKey !== void 0) $$bindings.valueKey(valueKey);
	if ($$props.input$use === void 0 && $$bindings.input$use && input$use !== void 0) $$bindings.input$use(input$use);
	if ($$props.input$class === void 0 && $$bindings.input$class && input$class !== void 0) $$bindings.input$class(input$class);
	if ($$props.getId === void 0 && $$bindings.getId && getId !== void 0) $$bindings.getId(getId);

	 {
		if (checked !== uninitializedValue) {
			if (checked === previousChecked) {
				checked = nativeChecked;
			} else if (nativeChecked !== checked) {
				nativeChecked = checked;
			}

			previousChecked = checked;
		}
	}

	 {
		if (setChecked) {
			setChecked(nativeChecked);
		}
	}

	 {
		if (checkbox && indeterminate !== uninitializedValue && checkbox.indeterminate !== indeterminate) {
			checkbox.indeterminate = indeterminate;
		}
	}

	 {
		if (checkbox) {
			if (group !== uninitializedValue) {
				const isChecked = group.indexOf(value) !== -1;

				if (checkbox.checked !== isChecked) {
					checkbox.checked = isChecked;
				}
			} else if (checked !== uninitializedValue && checkbox.checked !== checked) {
				checkbox.checked = checked;
			}
		}
	}

	 {
		if (checkbox && checkbox.disabled !== disabled) {
			checkbox.disabled = disabled;
		}
	}

	 {
		if (checkbox && valueKey === uninitializedValue && checkbox.value !== value) {
			checkbox.value = value;
		}
	}

	 {
		if (checkbox && valueKey !== uninitializedValue && checkbox.value !== valueKey) {
			checkbox.value = valueKey;
		}
	}

	return `<div${index.spread([
		{
			class: "\n    mdc-checkbox\n    " + index.escape(className) + "\n    " + index.escape(disabled ? "mdc-checkbox--disabled" : "") + "\n    " + index.escape(context === "data-table" && dataTableHeader
			? "mdc-data-table__header-row-checkbox"
			: "") + "\n    " + index.escape(context === "data-table" && !dataTableHeader
			? "mdc-data-table__row-checkbox"
			: "") + "\n  "
		},
		prefixFilter.exclude($$props, [
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
	])}${index.add_attribute("this", element, 1)}>
  <input${index.spread([
		{
			value: index.escape(valueKey === uninitializedValue ? value : valueKey)
		},
		{ type: "checkbox" },
		inputProps,
		{ disabled: disabled || null },
		{
			class: "mdc-checkbox__native-control " + index.escape(input$class)
		},
		prefixFilter.exclude(prefixFilter.prefixFilter($$props, "input$"), ["use", "class"])
	])}${index.add_attribute("checked", nativeChecked, 1)}>
  <div class="${"mdc-checkbox__background"}">
    <svg class="${"mdc-checkbox__checkmark"}" viewBox="${"0 0 24 24"}">
      <path class="${"mdc-checkbox__checkmark-path"}" fill="${"none"}" d="${"M1.73,12.91 8.1,19.28 22.79,4.59"}"></path>
    </svg>
    <div class="${"mdc-checkbox__mixedmark"}"></div>
  </div>
</div>`;
});

var css$1 = ".mdc-typography--headline6{font-size:1.25rem;line-height:2rem;letter-spacing:.0125em}.mdc-typography--headline6,.mdc-typography--subtitle2{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-weight:500;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle2{font-size:.875rem;line-height:1.375rem;letter-spacing:.0071428571em}.mdc-typography--body2{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit}:root{--primary-100:#ebf8ff;--primary-200:#bee3f8;--primary-300:#90cdf4;--primary-400:#63b3ed;--primary-500:#4299e1;--primary-600:#3182ce;--primary-700:#2b6cb0;--primary-800:#2c5282;--primary-900:#2a4365;--secondary-100:#fff5f5;--secondary-200:#fed7d7;--secondary-300:#feb2b2;--secondary-400:#fc8181;--secondary-500:#f56565;--secondary-600:#e53e3e;--secondary-700:#c53030;--secondary-800:#9b2c2c;--secondary-900:#742a2a;--primary-color:var(--primary-700);--secondary-color:var(--secondary-700);--primary-font-color:#fff;--secondary-font-color:#fff;--disabled-button-bg-color:#e0e0e0;--font-color:#212121;--other-font-color:#000;--bg-color:#fff;--bg-layer-color:#f5f5f5;--bg-card-color:#fff;--enabled-color:#757575;--disabled-color:#bdbdbd;--switch-toggle-color:#fafafa;--switch-track-color:#4d4d4d;--font-family:\"Montserrat\",sans-serif;--filter:invert(0%);--alert-default-bg-color:var(--primary-200);--alert-solid-bg-color:var(--primary-700);--alert-solid-text-color:\"text-white\";--alert-outline-bg-color:var(--primary-100);--alert-outline-border-color:var(--primary-400);--alert-outline-border-color2:var(--primary-600);--alert-outline-text-color:var(--primary-800)}[data-theme=dark]{--primary-color:var(--primary-400);--secondary-color:var(--secondary-400);--primary-font-color:#000;--secondary-font-color:#000;--disabled-button-bg-color:#1f1f1f;--font-color:#dedede;--other-font-color:#fff;--bg-color:#121212;--bg-layer-color:#333;--bg-card-color:#424242;--enabled-color:#b3b3b3;--disabled-color:#4d4d4d;--switch-toggle-color:#b3b3b3;--switch-track-color:#fff;--filter:invert(100%)}body{--mdc-theme-primary:var(--primary-color);--mdc-theme-secondary:var(--secondary-color);--mdc-theme-on-primary:var(--primary-font-color);--mdc-theme-on-secondary:var(--secondary-font-color);--mdc-text-field-ink-color:var(--other-font-color);--mdc-theme-text-primary-on-background:var(--font-color);--mdc-theme-surface:transparent;--duration:0.5s;--timing:ease;background-color:var(--bg-color);color:var(--font-color);-webkit-transition:color var(--duration) var(--timing),background-color var(--duration) var(--timing);transition:color var(--duration) var(--timing),background-color var(--duration) var(--timing);font-family:var(--font-family)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:var(--disabled-button-bg-color)}.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--disabled-color)}.mdc-select:not(.mdc-select--disabled) .mdc-select__native-control,.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text,.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--other-font-color)}.mdc-select:not(.mdc-select--disabled) .mdc-select__native-control option{color:#000}.mdc-select--with-leading-icon:not(.mdc-select--disabled) .mdc-select__icon{color:var(--enabled-color);opacity:1}.mdc-select__dropdown-icon{-webkit-filter:var(--filter);filter:var(--filter)}.mdc-select--invalid .mdc-select__dropdown-icon{-webkit-filter:invert(0);filter:invert(0)}.mdc-switch--disabled{opacity:.5}.mdc-card__action--icon:not(:disabled){color:var(--enabled-color)}.flex-1-0-auto{-webkit-box-flex:1;flex:1 0 auto}.mdc-form-field{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87));display:-webkit-inline-box;display:inline-flex;-webkit-box-align:center;align-items:center;vertical-align:middle}.mdc-form-field>label{-webkit-box-ordinal-group:1;order:0;margin-right:auto;padding-left:4px}.mdc-form-field--align-end>label,.mdc-form-field[dir=rtl]>label,[dir=rtl] .mdc-form-field>label{margin-left:auto;padding-right:4px}.mdc-form-field--align-end>label{-webkit-box-ordinal-group:0;order:-1}.mdc-form-field--align-end[dir=rtl]>label,[dir=rtl] .mdc-form-field--align-end>label{margin-right:auto;padding-left:4px}.mdc-form-field .mdc-switch+label{margin-left:10px;margin-right:0}.mdc-form-field.mdc-form-field--align-end .mdc-switch+label,.mdc-form-field .mdc-switch+label[dir=rtl],[dir=rtl] .mdc-form-field .mdc-switch+label{margin-left:0;margin-right:10px}.mdc-form-field.mdc-form-field--align-end .mdc-switch+label[dir=rtl],[dir=rtl] .mdc-form-field.mdc-form-field--align-end .mdc-switch+label{margin-left:10px;margin-right:0}";
prefixFilter.styleInject(css$1);

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
    prefixFilter.__extends(MDCFormFieldFoundation, _super);
    function MDCFormFieldFoundation(adapter) {
        var _this = _super.call(this, prefixFilter.__assign({}, MDCFormFieldFoundation.defaultAdapter, adapter)) || this;
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
}(prefixFilter.MDCFoundation));
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
    prefixFilter.__extends(MDCFormField, _super);
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
}(prefixFilter.MDCComponent));
//# sourceMappingURL=component.js.map

/* node_modules\@smui\form-field\FormField.svelte generated by Svelte v3.16.4 */
let counter = 0;

const FormField = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { align = "start" } = $$props;
	let { inputId = "SMUI-form-field-" + counter++ } = $$props;
	let { label$use = [] } = $$props;
	let element;
	let formField;
	index.setContext("SMUI:form-field", () => formField);
	index.setContext("SMUI:generic:input:props", { id: inputId });

	index.onMount(() => {
		formField = new MDCFormField(element);
	});

	index.onDestroy(() => {
		formField && formField.destroy();
	});

	if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
	if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
	if ($$props.align === void 0 && $$bindings.align && align !== void 0) $$bindings.align(align);
	if ($$props.inputId === void 0 && $$bindings.inputId && inputId !== void 0) $$bindings.inputId(inputId);
	if ($$props.label$use === void 0 && $$bindings.label$use && label$use !== void 0) $$bindings.label$use(label$use);

	return `<div${index.spread([
		{
			class: "\n    mdc-form-field\n    " + index.escape(className) + "\n    " + index.escape(align === "end" ? "mdc-form-field--align-end" : "") + "\n  "
		},
		prefixFilter.exclude($$props, ["use", "class", "alignEnd", "inputId", "label$"])
	])}${index.add_attribute("this", element, 1)}>
  ${$$slots.default ? $$slots.default({}) : ``}
  <label${index.spread([{ for: index.escape(inputId) }, prefixFilter.exclude(prefixFilter.prefixFilter($$props, "label$"), ["use"])])}>${$$slots.label ? $$slots.label({}) : ``}</label>
</div>`;
});

/* src\routes\ComponentPages\CheckboxPage.svelte generated by Svelte v3.16.4 */

const css$2 = {
	code: ".svelte-xn2xk7 .mdc-form-field{color:var(--font-color)}",
	map: "{\"version\":3,\"file\":\"CheckboxPage.svelte\",\"sources\":[\"CheckboxPage.svelte\"],\"sourcesContent\":[\"<script>\\r\\n  import Checkbox from \\\"@smui/checkbox\\\";\\r\\n  import FormField from \\\"@smui/form-field\\\";\\r\\n  import Page from \\\"./Page.svelte\\\";\\r\\n  import Example from \\\"./Example.svelte\\\";\\r\\n\\r\\n  let selected1 = true;\\r\\n  let selected2 = false;\\r\\n  let selected3 = true;\\r\\n  let selected4 = false;\\r\\n  let selected5 = false;\\r\\n  let selected6 = false;\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n  * :global(.mdc-form-field) {\\r\\n    color: var(--font-color);\\r\\n  }\\r\\n  /**\\r\\n     :global(.mdc-checkbox__native-control:enabled:checked\\r\\n      ~ .mdc-checkbox__background, .mdc-checkbox__native-control:enabled:indeterminate\\r\\n      ~ .mdc-checkbox__background) {\\r\\n    border-color: var(--mdc-theme-primary);\\r\\n    background-color: var(--mdc-theme-primary);\\r\\n  } */\\r\\n</style>\\r\\n\\r\\n<Page>\\r\\n  <span slot=\\\"header\\\">Checkbox</span>\\r\\n  <span slot=\\\"description\\\">\\r\\n    Checkbox allows the user to select one or more items from a set.\\r\\n  </span>\\r\\n  <span slot=\\\"import\\\">\\r\\n    import Switch from \\\"@smui/switch\\\";\\r\\n    <br />\\r\\n    import FormField from \\\"@smui/form-field\\\";\\r\\n  </span>\\r\\n  <div slot=\\\"content\\\">\\r\\n    <Example>\\r\\n      <span slot=\\\"header\\\">Usage</span>\\r\\n\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <FormField>\\r\\n          <Checkbox bind:checked={selected1} />\\r\\n          <span slot=\\\"label\\\">Checked</span>\\r\\n        </FormField>\\r\\n      </div>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <FormField>\\r\\n          <Checkbox bind:checked={selected2} />\\r\\n          <span slot=\\\"label\\\">Unchecked</span>\\r\\n        </FormField>\\r\\n      </div>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <FormField>\\r\\n          <Checkbox bind:checked={selected3} disabled />\\r\\n          <span slot=\\\"label\\\">Disabled Checked</span>\\r\\n        </FormField>\\r\\n      </div>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <FormField>\\r\\n          <Checkbox bind:checked={selected4} disabled />\\r\\n          <span slot=\\\"label\\\">Disabled Unchecked</span>\\r\\n        </FormField>\\r\\n      </div>\\r\\n    </Example>\\r\\n    <Example>\\r\\n      <span slot=\\\"header\\\">Labels</span>\\r\\n\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <FormField>\\r\\n          <Checkbox bind:checked={selected5} />\\r\\n          <span slot=\\\"label\\\">Right label</span>\\r\\n        </FormField>\\r\\n      </div>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <FormField align=\\\"end\\\">\\r\\n          <Checkbox bind:checked={selected6} />\\r\\n          <span slot=\\\"label\\\">Left label</span>\\r\\n        </FormField>\\r\\n      </div>\\r\\n    </Example>\\r\\n  </div>\\r\\n</Page>\\r\\n\"],\"names\":[],\"mappings\":\"AAeE,cAAC,CAAC,AAAQ,eAAe,AAAE,CAAC,AAC1B,KAAK,CAAE,IAAI,YAAY,CAAC,AAC1B,CAAC\"}"
};

const CheckboxPage = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let selected4 = false;
	let selected6 = false;
	$$result.css.add(css$2);
	let $$settled;
	let $$rendered;

	do {
		$$settled = true;

		$$rendered = `${index.validate_component(Page.default, "Page").$$render($$result, {}, {}, {
			header: () => `<span slot="${"header"}" class="${"svelte-xn2xk7"}">Checkbox</span>`,
			description: () => `<span slot="${"description"}" class="${"svelte-xn2xk7"}">
    Checkbox allows the user to select one or more items from a set.
  </span>`,
			import: () => `<span slot="${"import"}" class="${"svelte-xn2xk7"}">
    import Switch from &quot;@smui/switch&quot;;
    <br class="${"svelte-xn2xk7"}">
    import FormField from &quot;@smui/form-field&quot;;
  </span>`,
			content: () => `<div slot="${"content"}" class="${"svelte-xn2xk7"}">
    ${index.validate_component(Example.default, "Example").$$render($$result, {}, {}, {
				header: () => `<span slot="${"header"}" class="${"svelte-xn2xk7"}">Usage</span>`,
				horizontal: () => `<div slot="${"horizontal"}" class="${"mr-8 mb-8 svelte-xn2xk7"}">
        ${index.validate_component(FormField, "FormField").$$render($$result, {}, {}, {
					label: () => `<span slot="${"label"}" class="${"svelte-xn2xk7"}">Disabled Unchecked</span>`,
					default: () => `
          ${index.validate_component(Checkbox, "Checkbox").$$render(
						$$result,
						{ disabled: true, checked: selected4 },
						{
							checked: $$value => {
								selected4 = $$value;
								$$settled = false;
							}
						},
						{}
					)}
          
        `
				})}
      </div>`,
				default: () => `
      

      
      
      
      
    `
			})}
    ${index.validate_component(Example.default, "Example").$$render($$result, {}, {}, {
				header: () => `<span slot="${"header"}" class="${"svelte-xn2xk7"}">Labels</span>`,
				horizontal: () => `<div slot="${"horizontal"}" class="${"mr-8 mb-8 svelte-xn2xk7"}">
        ${index.validate_component(FormField, "FormField").$$render($$result, { align: "end" }, {}, {
					label: () => `<span slot="${"label"}" class="${"svelte-xn2xk7"}">Left label</span>`,
					default: () => `
          ${index.validate_component(Checkbox, "Checkbox").$$render(
						$$result,
						{ checked: selected6 },
						{
							checked: $$value => {
								selected6 = $$value;
								$$settled = false;
							}
						},
						{}
					)}
          
        `
				})}
      </div>`,
				default: () => `
      

      
      
    `
			})}
  </div>`,
			default: () => `
  
  
  
  
`
		})}`;
	} while (!$$settled);

	return $$rendered;
});

exports.default = CheckboxPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tib3hQYWdlLTUxNWQ0MGM5LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2FuaW1hdGlvbi91dGlsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9jaGVja2JveC9jb25zdGFudHMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2NoZWNrYm94L2ZvdW5kYXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2NoZWNrYm94L2NvbXBvbmVudC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS9jaGVja2JveC9DaGVja2JveC5zdmVsdGUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Zvcm0tZmllbGQvY29uc3RhbnRzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9mb3JtLWZpZWxkL2ZvdW5kYXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Zvcm0tZmllbGQvY29tcG9uZW50LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL2Zvcm0tZmllbGQvRm9ybUZpZWxkLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvQ29tcG9uZW50UGFnZXMvQ2hlY2tib3hQYWdlLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBjc3NQcm9wZXJ0eU5hbWVNYXAgPSB7XG4gICAgYW5pbWF0aW9uOiB7XG4gICAgICAgIHByZWZpeGVkOiAnLXdlYmtpdC1hbmltYXRpb24nLFxuICAgICAgICBzdGFuZGFyZDogJ2FuaW1hdGlvbicsXG4gICAgfSxcbiAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgcHJlZml4ZWQ6ICctd2Via2l0LXRyYW5zZm9ybScsXG4gICAgICAgIHN0YW5kYXJkOiAndHJhbnNmb3JtJyxcbiAgICB9LFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgcHJlZml4ZWQ6ICctd2Via2l0LXRyYW5zaXRpb24nLFxuICAgICAgICBzdGFuZGFyZDogJ3RyYW5zaXRpb24nLFxuICAgIH0sXG59O1xudmFyIGpzRXZlbnRUeXBlTWFwID0ge1xuICAgIGFuaW1hdGlvbmVuZDoge1xuICAgICAgICBjc3NQcm9wZXJ0eTogJ2FuaW1hdGlvbicsXG4gICAgICAgIHByZWZpeGVkOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICAgICAgc3RhbmRhcmQ6ICdhbmltYXRpb25lbmQnLFxuICAgIH0sXG4gICAgYW5pbWF0aW9uaXRlcmF0aW9uOiB7XG4gICAgICAgIGNzc1Byb3BlcnR5OiAnYW5pbWF0aW9uJyxcbiAgICAgICAgcHJlZml4ZWQ6ICd3ZWJraXRBbmltYXRpb25JdGVyYXRpb24nLFxuICAgICAgICBzdGFuZGFyZDogJ2FuaW1hdGlvbml0ZXJhdGlvbicsXG4gICAgfSxcbiAgICBhbmltYXRpb25zdGFydDoge1xuICAgICAgICBjc3NQcm9wZXJ0eTogJ2FuaW1hdGlvbicsXG4gICAgICAgIHByZWZpeGVkOiAnd2Via2l0QW5pbWF0aW9uU3RhcnQnLFxuICAgICAgICBzdGFuZGFyZDogJ2FuaW1hdGlvbnN0YXJ0JyxcbiAgICB9LFxuICAgIHRyYW5zaXRpb25lbmQ6IHtcbiAgICAgICAgY3NzUHJvcGVydHk6ICd0cmFuc2l0aW9uJyxcbiAgICAgICAgcHJlZml4ZWQ6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICAgICAgc3RhbmRhcmQ6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICB9LFxufTtcbmZ1bmN0aW9uIGlzV2luZG93KHdpbmRvd09iaikge1xuICAgIHJldHVybiBCb29sZWFuKHdpbmRvd09iai5kb2N1bWVudCkgJiYgdHlwZW9mIHdpbmRvd09iai5kb2N1bWVudC5jcmVhdGVFbGVtZW50ID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENvcnJlY3RQcm9wZXJ0eU5hbWUod2luZG93T2JqLCBjc3NQcm9wZXJ0eSkge1xuICAgIGlmIChpc1dpbmRvdyh3aW5kb3dPYmopICYmIGNzc1Byb3BlcnR5IGluIGNzc1Byb3BlcnR5TmFtZU1hcCkge1xuICAgICAgICB2YXIgZWwgPSB3aW5kb3dPYmouZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHZhciBfYSA9IGNzc1Byb3BlcnR5TmFtZU1hcFtjc3NQcm9wZXJ0eV0sIHN0YW5kYXJkID0gX2Euc3RhbmRhcmQsIHByZWZpeGVkID0gX2EucHJlZml4ZWQ7XG4gICAgICAgIHZhciBpc1N0YW5kYXJkID0gc3RhbmRhcmQgaW4gZWwuc3R5bGU7XG4gICAgICAgIHJldHVybiBpc1N0YW5kYXJkID8gc3RhbmRhcmQgOiBwcmVmaXhlZDtcbiAgICB9XG4gICAgcmV0dXJuIGNzc1Byb3BlcnR5O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENvcnJlY3RFdmVudE5hbWUod2luZG93T2JqLCBldmVudFR5cGUpIHtcbiAgICBpZiAoaXNXaW5kb3cod2luZG93T2JqKSAmJiBldmVudFR5cGUgaW4ganNFdmVudFR5cGVNYXApIHtcbiAgICAgICAgdmFyIGVsID0gd2luZG93T2JqLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB2YXIgX2EgPSBqc0V2ZW50VHlwZU1hcFtldmVudFR5cGVdLCBzdGFuZGFyZCA9IF9hLnN0YW5kYXJkLCBwcmVmaXhlZCA9IF9hLnByZWZpeGVkLCBjc3NQcm9wZXJ0eSA9IF9hLmNzc1Byb3BlcnR5O1xuICAgICAgICB2YXIgaXNTdGFuZGFyZCA9IGNzc1Byb3BlcnR5IGluIGVsLnN0eWxlO1xuICAgICAgICByZXR1cm4gaXNTdGFuZGFyZCA/IHN0YW5kYXJkIDogcHJlZml4ZWQ7XG4gICAgfVxuICAgIHJldHVybiBldmVudFR5cGU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuZXhwb3J0IHZhciBjc3NDbGFzc2VzID0ge1xuICAgIEFOSU1fQ0hFQ0tFRF9JTkRFVEVSTUlOQVRFOiAnbWRjLWNoZWNrYm94LS1hbmltLWNoZWNrZWQtaW5kZXRlcm1pbmF0ZScsXG4gICAgQU5JTV9DSEVDS0VEX1VOQ0hFQ0tFRDogJ21kYy1jaGVja2JveC0tYW5pbS1jaGVja2VkLXVuY2hlY2tlZCcsXG4gICAgQU5JTV9JTkRFVEVSTUlOQVRFX0NIRUNLRUQ6ICdtZGMtY2hlY2tib3gtLWFuaW0taW5kZXRlcm1pbmF0ZS1jaGVja2VkJyxcbiAgICBBTklNX0lOREVURVJNSU5BVEVfVU5DSEVDS0VEOiAnbWRjLWNoZWNrYm94LS1hbmltLWluZGV0ZXJtaW5hdGUtdW5jaGVja2VkJyxcbiAgICBBTklNX1VOQ0hFQ0tFRF9DSEVDS0VEOiAnbWRjLWNoZWNrYm94LS1hbmltLXVuY2hlY2tlZC1jaGVja2VkJyxcbiAgICBBTklNX1VOQ0hFQ0tFRF9JTkRFVEVSTUlOQVRFOiAnbWRjLWNoZWNrYm94LS1hbmltLXVuY2hlY2tlZC1pbmRldGVybWluYXRlJyxcbiAgICBCQUNLR1JPVU5EOiAnbWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kJyxcbiAgICBDSEVDS0VEOiAnbWRjLWNoZWNrYm94LS1jaGVja2VkJyxcbiAgICBDSEVDS01BUks6ICdtZGMtY2hlY2tib3hfX2NoZWNrbWFyaycsXG4gICAgQ0hFQ0tNQVJLX1BBVEg6ICdtZGMtY2hlY2tib3hfX2NoZWNrbWFyay1wYXRoJyxcbiAgICBESVNBQkxFRDogJ21kYy1jaGVja2JveC0tZGlzYWJsZWQnLFxuICAgIElOREVURVJNSU5BVEU6ICdtZGMtY2hlY2tib3gtLWluZGV0ZXJtaW5hdGUnLFxuICAgIE1JWEVETUFSSzogJ21kYy1jaGVja2JveF9fbWl4ZWRtYXJrJyxcbiAgICBOQVRJVkVfQ09OVFJPTDogJ21kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2wnLFxuICAgIFJPT1Q6ICdtZGMtY2hlY2tib3gnLFxuICAgIFNFTEVDVEVEOiAnbWRjLWNoZWNrYm94LS1zZWxlY3RlZCcsXG4gICAgVVBHUkFERUQ6ICdtZGMtY2hlY2tib3gtLXVwZ3JhZGVkJyxcbn07XG5leHBvcnQgdmFyIHN0cmluZ3MgPSB7XG4gICAgQVJJQV9DSEVDS0VEX0FUVFI6ICdhcmlhLWNoZWNrZWQnLFxuICAgIEFSSUFfQ0hFQ0tFRF9JTkRFVEVSTUlOQVRFX1ZBTFVFOiAnbWl4ZWQnLFxuICAgIE5BVElWRV9DT05UUk9MX1NFTEVDVE9SOiAnLm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2wnLFxuICAgIFRSQU5TSVRJT05fU1RBVEVfQ0hFQ0tFRDogJ2NoZWNrZWQnLFxuICAgIFRSQU5TSVRJT05fU1RBVEVfSU5ERVRFUk1JTkFURTogJ2luZGV0ZXJtaW5hdGUnLFxuICAgIFRSQU5TSVRJT05fU1RBVEVfSU5JVDogJ2luaXQnLFxuICAgIFRSQU5TSVRJT05fU1RBVEVfVU5DSEVDS0VEOiAndW5jaGVja2VkJyxcbn07XG5leHBvcnQgdmFyIG51bWJlcnMgPSB7XG4gICAgQU5JTV9FTkRfTEFUQ0hfTVM6IDI1MCxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3NlcywgbnVtYmVycywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBNRENDaGVja2JveEZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDQ2hlY2tib3hGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ0NoZWNrYm94Rm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ0NoZWNrYm94Rm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmN1cnJlbnRDaGVja1N0YXRlXyA9IHN0cmluZ3MuVFJBTlNJVElPTl9TVEFURV9JTklUO1xuICAgICAgICBfdGhpcy5jdXJyZW50QW5pbWF0aW9uQ2xhc3NfID0gJyc7XG4gICAgICAgIF90aGlzLmFuaW1FbmRMYXRjaFRpbWVyXyA9IDA7XG4gICAgICAgIF90aGlzLmVuYWJsZUFuaW1hdGlvbkVuZEhhbmRsZXJfID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0NoZWNrYm94Rm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0NoZWNrYm94Rm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0NoZWNrYm94Rm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVycztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0NoZWNrYm94Rm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGZvcmNlTGF5b3V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgaGFzTmF0aXZlQ29udHJvbDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgaXNBdHRhY2hlZFRvRE9NOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBpc0NoZWNrZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGlzSW5kZXRlcm1pbmF0ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVOYXRpdmVDb250cm9sQXR0cjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldE5hdGl2ZUNvbnRyb2xBdHRyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0TmF0aXZlQ29udHJvbERpc2FibGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENDaGVja2JveEZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudENoZWNrU3RhdGVfID0gdGhpcy5kZXRlcm1pbmVDaGVja1N0YXRlXygpO1xuICAgICAgICB0aGlzLnVwZGF0ZUFyaWFDaGVja2VkXygpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuVVBHUkFERUQpO1xuICAgIH07XG4gICAgTURDQ2hlY2tib3hGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hbmltRW5kTGF0Y2hUaW1lcl8pO1xuICAgIH07XG4gICAgTURDQ2hlY2tib3hGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXREaXNhYmxlZCA9IGZ1bmN0aW9uIChkaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldE5hdGl2ZUNvbnRyb2xEaXNhYmxlZChkaXNhYmxlZCk7XG4gICAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkRJU0FCTEVEKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5ESVNBQkxFRCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIGFuaW1hdGlvbmVuZCBldmVudCBmb3IgdGhlIGNoZWNrYm94XG4gICAgICovXG4gICAgTURDQ2hlY2tib3hGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVBbmltYXRpb25FbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVBbmltYXRpb25FbmRIYW5kbGVyXykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFuaW1FbmRMYXRjaFRpbWVyXyk7XG4gICAgICAgIHRoaXMuYW5pbUVuZExhdGNoVGltZXJfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhfdGhpcy5jdXJyZW50QW5pbWF0aW9uQ2xhc3NfKTtcbiAgICAgICAgICAgIF90aGlzLmVuYWJsZUFuaW1hdGlvbkVuZEhhbmRsZXJfID0gZmFsc2U7XG4gICAgICAgIH0sIG51bWJlcnMuQU5JTV9FTkRfTEFUQ0hfTVMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgY2hhbmdlIGV2ZW50IGZvciB0aGUgY2hlY2tib3hcbiAgICAgKi9cbiAgICBNRENDaGVja2JveEZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uQ2hlY2tTdGF0ZV8oKTtcbiAgICB9O1xuICAgIE1EQ0NoZWNrYm94Rm91bmRhdGlvbi5wcm90b3R5cGUudHJhbnNpdGlvbkNoZWNrU3RhdGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuYWRhcHRlcl8uaGFzTmF0aXZlQ29udHJvbCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9sZFN0YXRlID0gdGhpcy5jdXJyZW50Q2hlY2tTdGF0ZV87XG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IHRoaXMuZGV0ZXJtaW5lQ2hlY2tTdGF0ZV8oKTtcbiAgICAgICAgaWYgKG9sZFN0YXRlID09PSBuZXdTdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlQXJpYUNoZWNrZWRfKCk7XG4gICAgICAgIHZhciBUUkFOU0lUSU9OX1NUQVRFX1VOQ0hFQ0tFRCA9IHN0cmluZ3MuVFJBTlNJVElPTl9TVEFURV9VTkNIRUNLRUQ7XG4gICAgICAgIHZhciBTRUxFQ1RFRCA9IGNzc0NsYXNzZXMuU0VMRUNURUQ7XG4gICAgICAgIGlmIChuZXdTdGF0ZSA9PT0gVFJBTlNJVElPTl9TVEFURV9VTkNIRUNLRUQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoU0VMRUNURUQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhTRUxFQ1RFRCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgdG8gZW5zdXJlIHRoYXQgdGhlcmUgaXNuJ3QgYSBwcmV2aW91c2x5IGV4aXN0aW5nIGFuaW1hdGlvbiBjbGFzcywgaW4gY2FzZSBmb3IgZXhhbXBsZVxuICAgICAgICAvLyB0aGUgdXNlciBpbnRlcmFjdGVkIHdpdGggdGhlIGNoZWNrYm94IGJlZm9yZSB0aGUgYW5pbWF0aW9uIHdhcyBmaW5pc2hlZC5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEFuaW1hdGlvbkNsYXNzXy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hbmltRW5kTGF0Y2hUaW1lcl8pO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5mb3JjZUxheW91dCgpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyh0aGlzLmN1cnJlbnRBbmltYXRpb25DbGFzc18pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbkNsYXNzXyA9IHRoaXMuZ2V0VHJhbnNpdGlvbkFuaW1hdGlvbkNsYXNzXyhvbGRTdGF0ZSwgbmV3U3RhdGUpO1xuICAgICAgICB0aGlzLmN1cnJlbnRDaGVja1N0YXRlXyA9IG5ld1N0YXRlO1xuICAgICAgICAvLyBDaGVjayBmb3IgcGFyZW50Tm9kZSBzbyB0aGF0IGFuaW1hdGlvbnMgYXJlIG9ubHkgcnVuIHdoZW4gdGhlIGVsZW1lbnQgaXMgYXR0YWNoZWRcbiAgICAgICAgLy8gdG8gdGhlIERPTS5cbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNBdHRhY2hlZFRvRE9NKCkgJiYgdGhpcy5jdXJyZW50QW5pbWF0aW9uQ2xhc3NfLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3ModGhpcy5jdXJyZW50QW5pbWF0aW9uQ2xhc3NfKTtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlQW5pbWF0aW9uRW5kSGFuZGxlcl8gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENDaGVja2JveEZvdW5kYXRpb24ucHJvdG90eXBlLmRldGVybWluZUNoZWNrU3RhdGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgVFJBTlNJVElPTl9TVEFURV9JTkRFVEVSTUlOQVRFID0gc3RyaW5ncy5UUkFOU0lUSU9OX1NUQVRFX0lOREVURVJNSU5BVEUsIFRSQU5TSVRJT05fU1RBVEVfQ0hFQ0tFRCA9IHN0cmluZ3MuVFJBTlNJVElPTl9TVEFURV9DSEVDS0VELCBUUkFOU0lUSU9OX1NUQVRFX1VOQ0hFQ0tFRCA9IHN0cmluZ3MuVFJBTlNJVElPTl9TVEFURV9VTkNIRUNLRUQ7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzSW5kZXRlcm1pbmF0ZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gVFJBTlNJVElPTl9TVEFURV9JTkRFVEVSTUlOQVRFO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmlzQ2hlY2tlZCgpID8gVFJBTlNJVElPTl9TVEFURV9DSEVDS0VEIDogVFJBTlNJVElPTl9TVEFURV9VTkNIRUNLRUQ7XG4gICAgfTtcbiAgICBNRENDaGVja2JveEZvdW5kYXRpb24ucHJvdG90eXBlLmdldFRyYW5zaXRpb25BbmltYXRpb25DbGFzc18gPSBmdW5jdGlvbiAob2xkU3RhdGUsIG5ld1N0YXRlKSB7XG4gICAgICAgIHZhciBUUkFOU0lUSU9OX1NUQVRFX0lOSVQgPSBzdHJpbmdzLlRSQU5TSVRJT05fU1RBVEVfSU5JVCwgVFJBTlNJVElPTl9TVEFURV9DSEVDS0VEID0gc3RyaW5ncy5UUkFOU0lUSU9OX1NUQVRFX0NIRUNLRUQsIFRSQU5TSVRJT05fU1RBVEVfVU5DSEVDS0VEID0gc3RyaW5ncy5UUkFOU0lUSU9OX1NUQVRFX1VOQ0hFQ0tFRDtcbiAgICAgICAgdmFyIF9hID0gTURDQ2hlY2tib3hGb3VuZGF0aW9uLmNzc0NsYXNzZXMsIEFOSU1fVU5DSEVDS0VEX0NIRUNLRUQgPSBfYS5BTklNX1VOQ0hFQ0tFRF9DSEVDS0VELCBBTklNX1VOQ0hFQ0tFRF9JTkRFVEVSTUlOQVRFID0gX2EuQU5JTV9VTkNIRUNLRURfSU5ERVRFUk1JTkFURSwgQU5JTV9DSEVDS0VEX1VOQ0hFQ0tFRCA9IF9hLkFOSU1fQ0hFQ0tFRF9VTkNIRUNLRUQsIEFOSU1fQ0hFQ0tFRF9JTkRFVEVSTUlOQVRFID0gX2EuQU5JTV9DSEVDS0VEX0lOREVURVJNSU5BVEUsIEFOSU1fSU5ERVRFUk1JTkFURV9DSEVDS0VEID0gX2EuQU5JTV9JTkRFVEVSTUlOQVRFX0NIRUNLRUQsIEFOSU1fSU5ERVRFUk1JTkFURV9VTkNIRUNLRUQgPSBfYS5BTklNX0lOREVURVJNSU5BVEVfVU5DSEVDS0VEO1xuICAgICAgICBzd2l0Y2ggKG9sZFN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIFRSQU5TSVRJT05fU1RBVEVfSU5JVDpcbiAgICAgICAgICAgICAgICBpZiAobmV3U3RhdGUgPT09IFRSQU5TSVRJT05fU1RBVEVfVU5DSEVDS0VEKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlID09PSBUUkFOU0lUSU9OX1NUQVRFX0NIRUNLRUQgPyBBTklNX0lOREVURVJNSU5BVEVfQ0hFQ0tFRCA6IEFOSU1fSU5ERVRFUk1JTkFURV9VTkNIRUNLRUQ7XG4gICAgICAgICAgICBjYXNlIFRSQU5TSVRJT05fU1RBVEVfVU5DSEVDS0VEOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZSA9PT0gVFJBTlNJVElPTl9TVEFURV9DSEVDS0VEID8gQU5JTV9VTkNIRUNLRURfQ0hFQ0tFRCA6IEFOSU1fVU5DSEVDS0VEX0lOREVURVJNSU5BVEU7XG4gICAgICAgICAgICBjYXNlIFRSQU5TSVRJT05fU1RBVEVfQ0hFQ0tFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3U3RhdGUgPT09IFRSQU5TSVRJT05fU1RBVEVfVU5DSEVDS0VEID8gQU5JTV9DSEVDS0VEX1VOQ0hFQ0tFRCA6IEFOSU1fQ0hFQ0tFRF9JTkRFVEVSTUlOQVRFO1xuICAgICAgICAgICAgZGVmYXVsdDogLy8gVFJBTlNJVElPTl9TVEFURV9JTkRFVEVSTUlOQVRFXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlID09PSBUUkFOU0lUSU9OX1NUQVRFX0NIRUNLRUQgPyBBTklNX0lOREVURVJNSU5BVEVfQ0hFQ0tFRCA6IEFOSU1fSU5ERVRFUk1JTkFURV9VTkNIRUNLRUQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ0NoZWNrYm94Rm91bmRhdGlvbi5wcm90b3R5cGUudXBkYXRlQXJpYUNoZWNrZWRfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBFbnN1cmUgYXJpYS1jaGVja2VkIGlzIHNldCB0byBtaXhlZCBpZiBjaGVja2JveCBpcyBpbiBpbmRldGVybWluYXRlIHN0YXRlLlxuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc0luZGV0ZXJtaW5hdGUoKSkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXROYXRpdmVDb250cm9sQXR0cihzdHJpbmdzLkFSSUFfQ0hFQ0tFRF9BVFRSLCBzdHJpbmdzLkFSSUFfQ0hFQ0tFRF9JTkRFVEVSTUlOQVRFX1ZBTFVFKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRoZSBvbi9vZmYgc3RhdGUgZG9lcyBub3QgbmVlZCB0byBrZWVwIHRyYWNrIG9mIGFyaWEtY2hlY2tlZCwgc2luY2VcbiAgICAgICAgICAgIC8vIHRoZSBzY3JlZW5yZWFkZXIgdXNlcyB0aGUgY2hlY2tlZCBwcm9wZXJ0eSBvbiB0aGUgY2hlY2tib3ggZWxlbWVudC5cbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlTmF0aXZlQ29udHJvbEF0dHIoc3RyaW5ncy5BUklBX0NIRUNLRURfQVRUUik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNRENDaGVja2JveEZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ0NoZWNrYm94Rm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0NoZWNrYm94Rm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgZ2V0Q29ycmVjdEV2ZW50TmFtZSB9IGZyb20gJ0BtYXRlcmlhbC9hbmltYXRpb24vdXRpbCc7XG5pbXBvcnQgeyBNRENDb21wb25lbnQgfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgYXBwbHlQYXNzaXZlIH0gZnJvbSAnQG1hdGVyaWFsL2RvbS9ldmVudHMnO1xuaW1wb3J0IHsgbWF0Y2hlcyB9IGZyb20gJ0BtYXRlcmlhbC9kb20vcG9ueWZpbGwnO1xuaW1wb3J0IHsgTURDUmlwcGxlIH0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgTURDUmlwcGxlRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBNRENDaGVja2JveEZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xudmFyIENCX1BST1RPX1BST1BTID0gWydjaGVja2VkJywgJ2luZGV0ZXJtaW5hdGUnXTtcbnZhciBNRENDaGVja2JveCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENDaGVja2JveCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENDaGVja2JveCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnJpcHBsZV8gPSBfdGhpcy5jcmVhdGVSaXBwbGVfKCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTURDQ2hlY2tib3guYXR0YWNoVG8gPSBmdW5jdGlvbiAocm9vdCkge1xuICAgICAgICByZXR1cm4gbmV3IE1EQ0NoZWNrYm94KHJvb3QpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0NoZWNrYm94LnByb3RvdHlwZSwgXCJyaXBwbGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJpcHBsZV87XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENDaGVja2JveC5wcm90b3R5cGUsIFwiY2hlY2tlZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmF0aXZlQ29udHJvbF8uY2hlY2tlZDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoY2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVDb250cm9sXy5jaGVja2VkID0gY2hlY2tlZDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0NoZWNrYm94LnByb3RvdHlwZSwgXCJpbmRldGVybWluYXRlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYXRpdmVDb250cm9sXy5pbmRldGVybWluYXRlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChpbmRldGVybWluYXRlKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUNvbnRyb2xfLmluZGV0ZXJtaW5hdGUgPSBpbmRldGVybWluYXRlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDQ2hlY2tib3gucHJvdG90eXBlLCBcImRpc2FibGVkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYXRpdmVDb250cm9sXy5kaXNhYmxlZDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0RGlzYWJsZWQoZGlzYWJsZWQpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDQ2hlY2tib3gucHJvdG90eXBlLCBcInZhbHVlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYXRpdmVDb250cm9sXy52YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlQ29udHJvbF8udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDQ2hlY2tib3gucHJvdG90eXBlLmluaXRpYWxTeW5jV2l0aERPTSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZm91bmRhdGlvbl8uaGFuZGxlQ2hhbmdlKCk7IH07XG4gICAgICAgIHRoaXMuaGFuZGxlQW5pbWF0aW9uRW5kXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmZvdW5kYXRpb25fLmhhbmRsZUFuaW1hdGlvbkVuZCgpOyB9O1xuICAgICAgICB0aGlzLm5hdGl2ZUNvbnRyb2xfLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlQ2hhbmdlXyk7XG4gICAgICAgIHRoaXMubGlzdGVuKGdldENvcnJlY3RFdmVudE5hbWUod2luZG93LCAnYW5pbWF0aW9uZW5kJyksIHRoaXMuaGFuZGxlQW5pbWF0aW9uRW5kXyk7XG4gICAgICAgIHRoaXMuaW5zdGFsbFByb3BlcnR5Q2hhbmdlSG9va3NfKCk7XG4gICAgfTtcbiAgICBNRENDaGVja2JveC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yaXBwbGVfLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5uYXRpdmVDb250cm9sXy5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUNoYW5nZV8pO1xuICAgICAgICB0aGlzLnVubGlzdGVuKGdldENvcnJlY3RFdmVudE5hbWUod2luZG93LCAnYW5pbWF0aW9uZW5kJyksIHRoaXMuaGFuZGxlQW5pbWF0aW9uRW5kXyk7XG4gICAgICAgIHRoaXMudW5pbnN0YWxsUHJvcGVydHlDaGFuZ2VIb29rc18oKTtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBNRENDaGVja2JveC5wcm90b3R5cGUuZ2V0RGVmYXVsdEZvdW5kYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIERPIE5PVCBJTkxJTkUgdGhpcyB2YXJpYWJsZS4gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGZvdW5kYXRpb25zIHRha2UgYSBQYXJ0aWFsPE1EQ0Zvb0FkYXB0ZXI+LlxuICAgICAgICAvLyBUbyBlbnN1cmUgd2UgZG9uJ3QgYWNjaWRlbnRhbGx5IG9taXQgYW55IG1ldGhvZHMsIHdlIG5lZWQgYSBzZXBhcmF0ZSwgc3Ryb25nbHkgdHlwZWQgYWRhcHRlciB2YXJpYWJsZS5cbiAgICAgICAgdmFyIGFkYXB0ZXIgPSB7XG4gICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgZm9yY2VMYXlvdXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnJvb3RfLm9mZnNldFdpZHRoOyB9LFxuICAgICAgICAgICAgaGFzTmF0aXZlQ29udHJvbDogZnVuY3Rpb24gKCkgeyByZXR1cm4gISFfdGhpcy5uYXRpdmVDb250cm9sXzsgfSxcbiAgICAgICAgICAgIGlzQXR0YWNoZWRUb0RPTTogZnVuY3Rpb24gKCkgeyByZXR1cm4gQm9vbGVhbihfdGhpcy5yb290Xy5wYXJlbnROb2RlKTsgfSxcbiAgICAgICAgICAgIGlzQ2hlY2tlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuY2hlY2tlZDsgfSxcbiAgICAgICAgICAgIGlzSW5kZXRlcm1pbmF0ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaW5kZXRlcm1pbmF0ZTsgfSxcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICByZW1vdmVOYXRpdmVDb250cm9sQXR0cjogZnVuY3Rpb24gKGF0dHIpIHsgcmV0dXJuIF90aGlzLm5hdGl2ZUNvbnRyb2xfLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTsgfSxcbiAgICAgICAgICAgIHNldE5hdGl2ZUNvbnRyb2xBdHRyOiBmdW5jdGlvbiAoYXR0ciwgdmFsdWUpIHsgcmV0dXJuIF90aGlzLm5hdGl2ZUNvbnRyb2xfLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSk7IH0sXG4gICAgICAgICAgICBzZXROYXRpdmVDb250cm9sRGlzYWJsZWQ6IGZ1bmN0aW9uIChkaXNhYmxlZCkgeyByZXR1cm4gX3RoaXMubmF0aXZlQ29udHJvbF8uZGlzYWJsZWQgPSBkaXNhYmxlZDsgfSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBNRENDaGVja2JveEZvdW5kYXRpb24oYWRhcHRlcik7XG4gICAgfTtcbiAgICBNRENDaGVja2JveC5wcm90b3R5cGUuY3JlYXRlUmlwcGxlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gRE8gTk9UIElOTElORSB0aGlzIHZhcmlhYmxlLiBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgZm91bmRhdGlvbnMgdGFrZSBhIFBhcnRpYWw8TURDRm9vQWRhcHRlcj4uXG4gICAgICAgIC8vIFRvIGVuc3VyZSB3ZSBkb24ndCBhY2NpZGVudGFsbHkgb21pdCBhbnkgbWV0aG9kcywgd2UgbmVlZCBhIHNlcGFyYXRlLCBzdHJvbmdseSB0eXBlZCBhZGFwdGVyIHZhcmlhYmxlLlxuICAgICAgICB2YXIgYWRhcHRlciA9IHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ1JpcHBsZS5jcmVhdGVBZGFwdGVyKHRoaXMpLCB7IGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7IHJldHVybiBfdGhpcy5uYXRpdmVDb250cm9sXy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKTsgfSwgaXNTdXJmYWNlQWN0aXZlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBtYXRjaGVzKF90aGlzLm5hdGl2ZUNvbnRyb2xfLCAnOmFjdGl2ZScpOyB9LCBpc1VuYm91bmRlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSwgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7IHJldHVybiBfdGhpcy5uYXRpdmVDb250cm9sXy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKTsgfSB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBNRENSaXBwbGUodGhpcy5yb290XywgbmV3IE1EQ1JpcHBsZUZvdW5kYXRpb24oYWRhcHRlcikpO1xuICAgIH07XG4gICAgTURDQ2hlY2tib3gucHJvdG90eXBlLmluc3RhbGxQcm9wZXJ0eUNoYW5nZUhvb2tzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG5hdGl2ZUNiID0gdGhpcy5uYXRpdmVDb250cm9sXztcbiAgICAgICAgdmFyIGNiUHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YobmF0aXZlQ2IpO1xuICAgICAgICBDQl9QUk9UT19QUk9QUy5mb3JFYWNoKGZ1bmN0aW9uIChjb250cm9sU3RhdGUpIHtcbiAgICAgICAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjYlByb3RvLCBjb250cm9sU3RhdGUpO1xuICAgICAgICAgICAgLy8gV2UgaGF2ZSB0byBjaGVjayBmb3IgdGhpcyBkZXNjcmlwdG9yLCBzaW5jZSBzb21lIGJyb3dzZXJzIChTYWZhcmkpIGRvbid0IHN1cHBvcnQgaXRzIHJldHVybi5cbiAgICAgICAgICAgIC8vIFNlZTogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTQ5NzM5XG4gICAgICAgICAgICBpZiAoIXZhbGlkRGVzY3JpcHRvcihkZXNjKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFR5cGUgY2FzdCBpcyBuZWVkZWQgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBDbG9zdXJlIENvbXBpbGVyLlxuICAgICAgICAgICAgdmFyIG5hdGl2ZUdldHRlciA9IGRlc2MuZ2V0O1xuICAgICAgICAgICAgdmFyIG5hdGl2ZUNiRGVzYyA9IHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IGRlc2MuY29uZmlndXJhYmxlLFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGRlc2MuZW51bWVyYWJsZSxcbiAgICAgICAgICAgICAgICBnZXQ6IG5hdGl2ZUdldHRlcixcbiAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBkZXNjLnNldC5jYWxsKG5hdGl2ZUNiLCBzdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmZvdW5kYXRpb25fLmhhbmRsZUNoYW5nZSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5hdGl2ZUNiLCBjb250cm9sU3RhdGUsIG5hdGl2ZUNiRGVzYyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDQ2hlY2tib3gucHJvdG90eXBlLnVuaW5zdGFsbFByb3BlcnR5Q2hhbmdlSG9va3NfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbmF0aXZlQ2IgPSB0aGlzLm5hdGl2ZUNvbnRyb2xfO1xuICAgICAgICB2YXIgY2JQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihuYXRpdmVDYik7XG4gICAgICAgIENCX1BST1RPX1BST1BTLmZvckVhY2goZnVuY3Rpb24gKGNvbnRyb2xTdGF0ZSkge1xuICAgICAgICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNiUHJvdG8sIGNvbnRyb2xTdGF0ZSk7XG4gICAgICAgICAgICBpZiAoIXZhbGlkRGVzY3JpcHRvcihkZXNjKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuYXRpdmVDYiwgY29udHJvbFN0YXRlLCBkZXNjKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDQ2hlY2tib3gucHJvdG90eXBlLCBcIm5hdGl2ZUNvbnRyb2xfXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgTkFUSVZFX0NPTlRST0xfU0VMRUNUT1IgPSBNRENDaGVja2JveEZvdW5kYXRpb24uc3RyaW5ncy5OQVRJVkVfQ09OVFJPTF9TRUxFQ1RPUjtcbiAgICAgICAgICAgIHZhciBlbCA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihOQVRJVkVfQ09OVFJPTF9TRUxFQ1RPUik7XG4gICAgICAgICAgICBpZiAoIWVsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2hlY2tib3ggY29tcG9uZW50IHJlcXVpcmVzIGEgXCIgKyBOQVRJVkVfQ09OVFJPTF9TRUxFQ1RPUiArIFwiIGVsZW1lbnRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBNRENDaGVja2JveDtcbn0oTURDQ29tcG9uZW50KSk7XG5leHBvcnQgeyBNRENDaGVja2JveCB9O1xuZnVuY3Rpb24gdmFsaWREZXNjcmlwdG9yKGlucHV0UHJvcERlc2MpIHtcbiAgICByZXR1cm4gISFpbnB1dFByb3BEZXNjICYmIHR5cGVvZiBpbnB1dFByb3BEZXNjLnNldCA9PT0gJ2Z1bmN0aW9uJztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudC5qcy5tYXAiLCI8ZGl2XG4gIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgdXNlOmZvcndhcmRFdmVudHNcbiAgY2xhc3M9XCJcbiAgICBtZGMtY2hlY2tib3hcbiAgICB7Y2xhc3NOYW1lfVxuICAgIHtkaXNhYmxlZCA/ICdtZGMtY2hlY2tib3gtLWRpc2FibGVkJyA6ICcnfVxuICAgIHsoY29udGV4dCA9PT0gJ2RhdGEtdGFibGUnICYmIGRhdGFUYWJsZUhlYWRlcikgPyAnbWRjLWRhdGEtdGFibGVfX2hlYWRlci1yb3ctY2hlY2tib3gnIDogJyd9XG4gICAgeyhjb250ZXh0ID09PSAnZGF0YS10YWJsZScgJiYgIWRhdGFUYWJsZUhlYWRlcikgPyAnbWRjLWRhdGEtdGFibGVfX3Jvdy1jaGVja2JveCcgOiAnJ31cbiAgXCJcbiAgey4uLmV4Y2x1ZGUoJCRwcm9wcywgWyd1c2UnLCAnY2xhc3MnLCAnZGlzYWJsZWQnLCAnaW5kZXRlcm1pbmF0ZScsICdncm91cCcsICdjaGVja2VkJywgJ3ZhbHVlJywgJ3ZhbHVlS2V5JywgJ2lucHV0JCddKX1cbj5cbiAgPGlucHV0XG4gICAgdXNlOnVzZUFjdGlvbnM9e2lucHV0JHVzZX1cbiAgICBjbGFzcz1cIm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2wge2lucHV0JGNsYXNzfVwiXG4gICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICB7Li4uaW5wdXRQcm9wc31cbiAgICB7ZGlzYWJsZWR9XG4gICAgYmluZDpjaGVja2VkPXtuYXRpdmVDaGVja2VkfVxuICAgIHZhbHVlPXt2YWx1ZUtleSA9PT0gdW5pbml0aWFsaXplZFZhbHVlID8gdmFsdWUgOiB2YWx1ZUtleX1cbiAgICBvbjpjaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICBvbjppbnB1dD17aGFuZGxlQ2hhbmdlfVxuICAgIG9uOmNoYW5nZSBvbjppbnB1dFxuICAgIHsuLi5leGNsdWRlKHByZWZpeEZpbHRlcigkJHByb3BzLCAnaW5wdXQkJyksIFsndXNlJywgJ2NsYXNzJ10pfVxuICAvPlxuICA8ZGl2IGNsYXNzPVwibWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kXCI+XG4gICAgPHN2ZyBjbGFzcz1cIm1kYy1jaGVja2JveF9fY2hlY2ttYXJrXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgPHBhdGggY2xhc3M9XCJtZGMtY2hlY2tib3hfX2NoZWNrbWFyay1wYXRoXCIgZmlsbD1cIm5vbmVcIiBkPVwiTTEuNzMsMTIuOTEgOC4xLDE5LjI4IDIyLjc5LDQuNTlcIiAvPlxuICAgIDwvc3ZnPlxuICAgIDxkaXYgY2xhc3M9XCJtZGMtY2hlY2tib3hfX21peGVkbWFya1wiPjwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48c2NyaXB0PlxuICBpbXBvcnQge01EQ0NoZWNrYm94fSBmcm9tICdAbWF0ZXJpYWwvY2hlY2tib3gnO1xuICBpbXBvcnQge29uTW91bnQsIG9uRGVzdHJveSwgZ2V0Q29udGV4dH0gZnJvbSAnc3ZlbHRlJztcbiAgaW1wb3J0IHtjdXJyZW50X2NvbXBvbmVudH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHtmb3J3YXJkRXZlbnRzQnVpbGRlcn0gZnJvbSAnQHNtdWkvY29tbW9uL2ZvcndhcmRFdmVudHMuanMnO1xuICBpbXBvcnQge2V4Y2x1ZGV9IGZyb20gJ0BzbXVpL2NvbW1vbi9leGNsdWRlLmpzJztcbiAgaW1wb3J0IHtwcmVmaXhGaWx0ZXJ9IGZyb20gJ0BzbXVpL2NvbW1vbi9wcmVmaXhGaWx0ZXIuanMnO1xuICBpbXBvcnQge3VzZUFjdGlvbnN9IGZyb20gJ0BzbXVpL2NvbW1vbi91c2VBY3Rpb25zLmpzJztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoY3VycmVudF9jb21wb25lbnQpO1xuICBsZXQgdW5pbml0aWFsaXplZFZhbHVlID0gKCkgPT4ge307XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBleHBvcnQge2NsYXNzTmFtZSBhcyBjbGFzc307XG4gIGV4cG9ydCBsZXQgZGlzYWJsZWQgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBpbmRldGVybWluYXRlID0gdW5pbml0aWFsaXplZFZhbHVlO1xuICBleHBvcnQgbGV0IGdyb3VwID0gdW5pbml0aWFsaXplZFZhbHVlO1xuICBleHBvcnQgbGV0IGNoZWNrZWQgPSB1bmluaXRpYWxpemVkVmFsdWU7XG4gIGV4cG9ydCBsZXQgdmFsdWUgPSBudWxsO1xuICBleHBvcnQgbGV0IHZhbHVlS2V5ID0gdW5pbml0aWFsaXplZFZhbHVlO1xuICBleHBvcnQgbGV0IGlucHV0JHVzZSA9IFtdO1xuICBleHBvcnQgbGV0IGlucHV0JGNsYXNzID0gJyc7XG5cbiAgbGV0IGVsZW1lbnQ7XG4gIGxldCBjaGVja2JveDtcbiAgbGV0IGZvcm1GaWVsZCA9IGdldENvbnRleHQoJ1NNVUk6Zm9ybS1maWVsZCcpO1xuICBsZXQgaW5wdXRQcm9wcyA9IGdldENvbnRleHQoJ1NNVUk6Z2VuZXJpYzppbnB1dDpwcm9wcycpIHx8IHt9O1xuICBsZXQgc2V0Q2hlY2tlZCA9IGdldENvbnRleHQoJ1NNVUk6Z2VuZXJpYzppbnB1dDpzZXRDaGVja2VkJyk7XG4gIGxldCBhZGRDaGFuZ2VIYW5kbGVyID0gZ2V0Q29udGV4dCgnU01VSTpnZW5lcmljOmlucHV0OmFkZENoYW5nZUhhbmRsZXInKTtcbiAgbGV0IG5hdGl2ZUNoZWNrZWQgPSBncm91cCA9PT0gdW5pbml0aWFsaXplZFZhbHVlID8gKGNoZWNrZWQgPT09IHVuaW5pdGlhbGl6ZWRWYWx1ZSA/IGZhbHNlIDogY2hlY2tlZCkgOiBncm91cC5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG4gIGxldCBjb250ZXh0ID0gZ2V0Q29udGV4dCgnU01VSTpjaGVja2JveDpjb250ZXh0Jyk7XG4gIGxldCBkYXRhVGFibGVIZWFkZXIgPSBnZXRDb250ZXh0KCdTTVVJOmRhdGEtdGFibGU6cm93OmhlYWRlcicpO1xuICBsZXQgZ2V0RGF0YVRhYmxlUm93SW5kZXggPSBnZXRDb250ZXh0KCdTTVVJOmRhdGEtdGFibGU6cm93OmdldEluZGV4Jyk7XG4gIGxldCBpbnN0YW50aWF0ZSA9IGdldENvbnRleHQoJ1NNVUk6Y2hlY2tib3g6aW5zdGFudGlhdGUnKTtcbiAgbGV0IGdldEluc3RhbmNlID0gZ2V0Q29udGV4dCgnU01VSTpjaGVja2JveDpnZXRJbnN0YW5jZScpO1xuXG4gICQ6IGlmIChzZXRDaGVja2VkKSB7XG4gICAgc2V0Q2hlY2tlZChuYXRpdmVDaGVja2VkKTtcbiAgfVxuXG4gICQ6IGlmIChjaGVja2JveCAmJiBpbmRldGVybWluYXRlICE9PSB1bmluaXRpYWxpemVkVmFsdWUgJiYgY2hlY2tib3guaW5kZXRlcm1pbmF0ZSAhPT0gaW5kZXRlcm1pbmF0ZSkge1xuICAgIGNoZWNrYm94LmluZGV0ZXJtaW5hdGUgPSBpbmRldGVybWluYXRlO1xuICB9XG5cbiAgJDogaWYgKGNoZWNrYm94KSB7XG4gICAgaWYgKGdyb3VwICE9PSB1bmluaXRpYWxpemVkVmFsdWUpIHtcbiAgICAgIGNvbnN0IGlzQ2hlY2tlZCA9IGdyb3VwLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbiAgICAgIGlmIChjaGVja2JveC5jaGVja2VkICE9PSBpc0NoZWNrZWQpIHtcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGlzQ2hlY2tlZDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNoZWNrZWQgIT09IHVuaW5pdGlhbGl6ZWRWYWx1ZSAmJiBjaGVja2JveC5jaGVja2VkICE9PSBjaGVja2VkKSB7XG4gICAgICBjaGVja2JveC5jaGVja2VkID0gY2hlY2tlZDtcbiAgICB9XG4gIH1cblxuICAkOiBpZiAoY2hlY2tib3ggJiYgY2hlY2tib3guZGlzYWJsZWQgIT09IGRpc2FibGVkKSB7XG4gICAgY2hlY2tib3guZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfVxuXG4gICQ6IGlmIChjaGVja2JveCAmJiB2YWx1ZUtleSA9PT0gdW5pbml0aWFsaXplZFZhbHVlICYmIGNoZWNrYm94LnZhbHVlICE9PSB2YWx1ZSkge1xuICAgIGNoZWNrYm94LnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICAkOiBpZiAoY2hlY2tib3ggJiYgdmFsdWVLZXkgIT09IHVuaW5pdGlhbGl6ZWRWYWx1ZSAmJiBjaGVja2JveC52YWx1ZSAhPT0gdmFsdWVLZXkpIHtcbiAgICBjaGVja2JveC52YWx1ZSA9IHZhbHVlS2V5O1xuICB9XG5cbiAgbGV0IHByZXZpb3VzQ2hlY2tlZCA9IGNoZWNrZWQ7XG4gICQ6IGlmIChjaGVja2VkICE9PSB1bmluaXRpYWxpemVkVmFsdWUpIHtcbiAgICBpZiAoY2hlY2tlZCA9PT0gcHJldmlvdXNDaGVja2VkKSB7XG4gICAgICBjaGVja2VkID0gbmF0aXZlQ2hlY2tlZDtcbiAgICB9IGVsc2UgaWYgKG5hdGl2ZUNoZWNrZWQgIT09IGNoZWNrZWQpIHtcbiAgICAgIG5hdGl2ZUNoZWNrZWQgPSBjaGVja2VkO1xuICAgIH1cbiAgICBwcmV2aW91c0NoZWNrZWQgPSBjaGVja2VkO1xuICB9XG5cbiAgaWYgKGFkZENoYW5nZUhhbmRsZXIpIHtcbiAgICBhZGRDaGFuZ2VIYW5kbGVyKGhhbmRsZUNoYW5nZSk7XG4gIH1cblxuICBvbk1vdW50KGFzeW5jICgpID0+IHtcbiAgICBpZiAoaW5zdGFudGlhdGUgIT09IGZhbHNlKSB7XG4gICAgICBjaGVja2JveCA9IG5ldyBNRENDaGVja2JveChlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbnRleHQgPT09ICdkYXRhLXRhYmxlJykge1xuICAgICAgICBpZiAoZGF0YVRhYmxlSGVhZGVyKSB7XG4gICAgICAgICAgY2hlY2tib3ggPSBhd2FpdCBnZXRJbnN0YW5jZSh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGVja2JveCA9IChhd2FpdCBnZXRJbnN0YW5jZShmYWxzZSkpW2dldERhdGFUYWJsZVJvd0luZGV4KCldO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGVja2JveCA9IGF3YWl0IGdldEluc3RhbmNlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZvcm1GaWVsZCAmJiBmb3JtRmllbGQoKSkge1xuICAgICAgZm9ybUZpZWxkKCkuaW5wdXQgPSBjaGVja2JveDtcbiAgICB9XG4gIH0pO1xuXG4gIG9uRGVzdHJveSgoKSA9PiB7XG4gICAgaWYgKGluc3RhbnRpYXRlICE9PSBmYWxzZSkge1xuICAgICAgY2hlY2tib3ggJiYgY2hlY2tib3guZGVzdHJveSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKCkge1xuICAgIGlmIChncm91cCAhPT0gdW5pbml0aWFsaXplZFZhbHVlKSB7XG4gICAgICBjb25zdCBpZHggPSBncm91cC5pbmRleE9mKHZhbHVlKTtcbiAgICAgIGlmIChjaGVja2JveC5jaGVja2VkICYmIGlkeCA9PT0gLTEpIHtcbiAgICAgICAgZ3JvdXAucHVzaCh2YWx1ZSk7XG4gICAgICAgIGdyb3VwID0gZ3JvdXA7XG4gICAgICB9IGVsc2UgaWYgKCFjaGVja2JveC5jaGVja2VkICYmIGlkeCAhPT0gLTEpIHtcbiAgICAgICAgZ3JvdXAuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgIGdyb3VwID0gZ3JvdXA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldElkKCkge1xuICAgIHJldHVybiBpbnB1dFByb3BzICYmIGlucHV0UHJvcHMuaWQ7XG4gIH1cbjwvc2NyaXB0PiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuZXhwb3J0IHZhciBjc3NDbGFzc2VzID0ge1xuICAgIFJPT1Q6ICdtZGMtZm9ybS1maWVsZCcsXG59O1xuZXhwb3J0IHZhciBzdHJpbmdzID0ge1xuICAgIExBQkVMX1NFTEVDVE9SOiAnLm1kYy1mb3JtLWZpZWxkID4gbGFiZWwnLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIE1EQ0Zvcm1GaWVsZEZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDRm9ybUZpZWxkRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENGb3JtRmllbGRGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgTURDRm9ybUZpZWxkRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmNsaWNrSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVDbGlja18oKTsgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm9ybUZpZWxkRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0Zvcm1GaWVsZEZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3JtRmllbGRGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFjdGl2YXRlSW5wdXRSaXBwbGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZWFjdGl2YXRlSW5wdXRSaXBwbGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0Zvcm1GaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXJfKTtcbiAgICB9O1xuICAgIE1EQ0Zvcm1GaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlcl8pO1xuICAgIH07XG4gICAgTURDRm9ybUZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQ2xpY2tfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFjdGl2YXRlSW5wdXRSaXBwbGUoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmFkYXB0ZXJfLmRlYWN0aXZhdGVJbnB1dFJpcHBsZSgpOyB9KTtcbiAgICB9O1xuICAgIHJldHVybiBNRENGb3JtRmllbGRGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENGb3JtRmllbGRGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDRm9ybUZpZWxkRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDQ29tcG9uZW50IH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IE1EQ0Zvcm1GaWVsZEZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xudmFyIE1EQ0Zvcm1GaWVsZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENGb3JtRmllbGQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDRm9ybUZpZWxkKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE1EQ0Zvcm1GaWVsZC5hdHRhY2hUbyA9IGZ1bmN0aW9uIChyb290KSB7XG4gICAgICAgIHJldHVybiBuZXcgTURDRm9ybUZpZWxkKHJvb3QpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0Zvcm1GaWVsZC5wcm90b3R5cGUsIFwiaW5wdXRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlucHV0XztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRfID0gaW5wdXQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3JtRmllbGQucHJvdG90eXBlLCBcImxhYmVsX1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIExBQkVMX1NFTEVDVE9SID0gTURDRm9ybUZpZWxkRm91bmRhdGlvbi5zdHJpbmdzLkxBQkVMX1NFTEVDVE9SO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihMQUJFTF9TRUxFQ1RPUik7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0Zvcm1GaWVsZC5wcm90b3R5cGUuZ2V0RGVmYXVsdEZvdW5kYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIERPIE5PVCBJTkxJTkUgdGhpcyB2YXJpYWJsZS4gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGZvdW5kYXRpb25zIHRha2UgYSBQYXJ0aWFsPE1EQ0Zvb0FkYXB0ZXI+LlxuICAgICAgICAvLyBUbyBlbnN1cmUgd2UgZG9uJ3QgYWNjaWRlbnRhbGx5IG9taXQgYW55IG1ldGhvZHMsIHdlIG5lZWQgYSBzZXBhcmF0ZSwgc3Ryb25nbHkgdHlwZWQgYWRhcHRlciB2YXJpYWJsZS5cbiAgICAgICAgdmFyIGFkYXB0ZXIgPSB7XG4gICAgICAgICAgICBhY3RpdmF0ZUlucHV0UmlwcGxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmlucHV0XyAmJiBfdGhpcy5pbnB1dF8ucmlwcGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmlucHV0Xy5yaXBwbGUuYWN0aXZhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVhY3RpdmF0ZUlucHV0UmlwcGxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmlucHV0XyAmJiBfdGhpcy5pbnB1dF8ucmlwcGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmlucHV0Xy5yaXBwbGUuZGVhY3RpdmF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5sYWJlbF8pIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubGFiZWxfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5sYWJlbF8pIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubGFiZWxfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBNRENGb3JtRmllbGRGb3VuZGF0aW9uKGFkYXB0ZXIpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ0Zvcm1GaWVsZDtcbn0oTURDQ29tcG9uZW50KSk7XG5leHBvcnQgeyBNRENGb3JtRmllbGQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudC5qcy5tYXAiLCI8ZGl2XG4gIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgdXNlOmZvcndhcmRFdmVudHNcbiAgY2xhc3M9XCJcbiAgICBtZGMtZm9ybS1maWVsZFxuICAgIHtjbGFzc05hbWV9XG4gICAge2FsaWduID09PSAnZW5kJyA/ICdtZGMtZm9ybS1maWVsZC0tYWxpZ24tZW5kJyA6ICcnfVxuICBcIlxuICB7Li4uZXhjbHVkZSgkJHByb3BzLCBbJ3VzZScsICdjbGFzcycsICdhbGlnbkVuZCcsICdpbnB1dElkJywgJ2xhYmVsJCddKX1cbj5cbiAgPHNsb3Q+PC9zbG90PlxuICA8bGFiZWxcbiAgICB1c2U6dXNlQWN0aW9ucz17bGFiZWwkdXNlfVxuICAgIGZvcj17aW5wdXRJZH1cbiAgICB7Li4uZXhjbHVkZShwcmVmaXhGaWx0ZXIoJCRwcm9wcywgJ2xhYmVsJCcpLCBbJ3VzZSddKX1cbiAgPjxzbG90IG5hbWU9XCJsYWJlbFwiPjwvc2xvdD48L2xhYmVsPlxuPC9kaXY+XG5cbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICBsZXQgY291bnRlciA9IDA7XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHtNRENGb3JtRmllbGR9IGZyb20gJ0BtYXRlcmlhbC9mb3JtLWZpZWxkJztcbiAgaW1wb3J0IHtvbk1vdW50LCBvbkRlc3Ryb3ksIHNldENvbnRleHR9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7Y3VycmVudF9jb21wb25lbnR9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7Zm9yd2FyZEV2ZW50c0J1aWxkZXJ9IGZyb20gJ0BzbXVpL2NvbW1vbi9mb3J3YXJkRXZlbnRzLmpzJztcbiAgaW1wb3J0IHtleGNsdWRlfSBmcm9tICdAc211aS9jb21tb24vZXhjbHVkZS5qcyc7XG4gIGltcG9ydCB7cHJlZml4RmlsdGVyfSBmcm9tICdAc211aS9jb21tb24vcHJlZml4RmlsdGVyLmpzJztcbiAgaW1wb3J0IHt1c2VBY3Rpb25zfSBmcm9tICdAc211aS9jb21tb24vdXNlQWN0aW9ucy5qcyc7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGN1cnJlbnRfY29tcG9uZW50KTtcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gIGV4cG9ydCB7Y2xhc3NOYW1lIGFzIGNsYXNzfTtcbiAgZXhwb3J0IGxldCBhbGlnbiA9ICdzdGFydCc7XG4gIGV4cG9ydCBsZXQgaW5wdXRJZCA9ICdTTVVJLWZvcm0tZmllbGQtJysoY291bnRlcisrKTtcbiAgZXhwb3J0IGxldCBsYWJlbCR1c2UgPSBbXTtcblxuICBsZXQgZWxlbWVudDtcbiAgbGV0IGZvcm1GaWVsZDtcblxuICBzZXRDb250ZXh0KCdTTVVJOmZvcm0tZmllbGQnLCAoKSA9PiBmb3JtRmllbGQpO1xuICBzZXRDb250ZXh0KCdTTVVJOmdlbmVyaWM6aW5wdXQ6cHJvcHMnLCB7aWQ6IGlucHV0SWR9KTtcblxuICBvbk1vdW50KCgpID0+IHtcbiAgICBmb3JtRmllbGQgPSBuZXcgTURDRm9ybUZpZWxkKGVsZW1lbnQpO1xuICB9KTtcblxuICBvbkRlc3Ryb3koKCkgPT4ge1xuICAgIGZvcm1GaWVsZCAmJiBmb3JtRmllbGQuZGVzdHJveSgpO1xuICB9KTtcbjwvc2NyaXB0PiIsIjxzY3JpcHQ+XHJcbiAgaW1wb3J0IENoZWNrYm94IGZyb20gXCJAc211aS9jaGVja2JveFwiO1xyXG4gIGltcG9ydCBGb3JtRmllbGQgZnJvbSBcIkBzbXVpL2Zvcm0tZmllbGRcIjtcclxuICBpbXBvcnQgUGFnZSBmcm9tIFwiLi9QYWdlLnN2ZWx0ZVwiO1xyXG4gIGltcG9ydCBFeGFtcGxlIGZyb20gXCIuL0V4YW1wbGUuc3ZlbHRlXCI7XHJcblxyXG4gIGxldCBzZWxlY3RlZDEgPSB0cnVlO1xyXG4gIGxldCBzZWxlY3RlZDIgPSBmYWxzZTtcclxuICBsZXQgc2VsZWN0ZWQzID0gdHJ1ZTtcclxuICBsZXQgc2VsZWN0ZWQ0ID0gZmFsc2U7XHJcbiAgbGV0IHNlbGVjdGVkNSA9IGZhbHNlO1xyXG4gIGxldCBzZWxlY3RlZDYgPSBmYWxzZTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgKiA6Z2xvYmFsKC5tZGMtZm9ybS1maWVsZCkge1xyXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIH1cclxuICAvKipcclxuICAgICA6Z2xvYmFsKC5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmVuYWJsZWQ6Y2hlY2tlZFxyXG4gICAgICB+IC5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQsIC5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmVuYWJsZWQ6aW5kZXRlcm1pbmF0ZVxyXG4gICAgICB+IC5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQpIHtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbWRjLXRoZW1lLXByaW1hcnkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWRjLXRoZW1lLXByaW1hcnkpO1xyXG4gIH0gKi9cclxuPC9zdHlsZT5cclxuXHJcbjxQYWdlPlxyXG4gIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5DaGVja2JveDwvc3Bhbj5cclxuICA8c3BhbiBzbG90PVwiZGVzY3JpcHRpb25cIj5cclxuICAgIENoZWNrYm94IGFsbG93cyB0aGUgdXNlciB0byBzZWxlY3Qgb25lIG9yIG1vcmUgaXRlbXMgZnJvbSBhIHNldC5cclxuICA8L3NwYW4+XHJcbiAgPHNwYW4gc2xvdD1cImltcG9ydFwiPlxyXG4gICAgaW1wb3J0IFN3aXRjaCBmcm9tIFwiQHNtdWkvc3dpdGNoXCI7XHJcbiAgICA8YnIgLz5cclxuICAgIGltcG9ydCBGb3JtRmllbGQgZnJvbSBcIkBzbXVpL2Zvcm0tZmllbGRcIjtcclxuICA8L3NwYW4+XHJcbiAgPGRpdiBzbG90PVwiY29udGVudFwiPlxyXG4gICAgPEV4YW1wbGU+XHJcbiAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5Vc2FnZTwvc3Bhbj5cclxuXHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxGb3JtRmllbGQ+XHJcbiAgICAgICAgICA8Q2hlY2tib3ggYmluZDpjaGVja2VkPXtzZWxlY3RlZDF9IC8+XHJcbiAgICAgICAgICA8c3BhbiBzbG90PVwibGFiZWxcIj5DaGVja2VkPC9zcGFuPlxyXG4gICAgICAgIDwvRm9ybUZpZWxkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEZvcm1GaWVsZD5cclxuICAgICAgICAgIDxDaGVja2JveCBiaW5kOmNoZWNrZWQ9e3NlbGVjdGVkMn0gLz5cclxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlVuY2hlY2tlZDwvc3Bhbj5cclxuICAgICAgICA8L0Zvcm1GaWVsZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxGb3JtRmllbGQ+XHJcbiAgICAgICAgICA8Q2hlY2tib3ggYmluZDpjaGVja2VkPXtzZWxlY3RlZDN9IGRpc2FibGVkIC8+XHJcbiAgICAgICAgICA8c3BhbiBzbG90PVwibGFiZWxcIj5EaXNhYmxlZCBDaGVja2VkPC9zcGFuPlxyXG4gICAgICAgIDwvRm9ybUZpZWxkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEZvcm1GaWVsZD5cclxuICAgICAgICAgIDxDaGVja2JveCBiaW5kOmNoZWNrZWQ9e3NlbGVjdGVkNH0gZGlzYWJsZWQgLz5cclxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJsYWJlbFwiPkRpc2FibGVkIFVuY2hlY2tlZDwvc3Bhbj5cclxuICAgICAgICA8L0Zvcm1GaWVsZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0V4YW1wbGU+XHJcbiAgICA8RXhhbXBsZT5cclxuICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiPkxhYmVsczwvc3Bhbj5cclxuXHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxGb3JtRmllbGQ+XHJcbiAgICAgICAgICA8Q2hlY2tib3ggYmluZDpjaGVja2VkPXtzZWxlY3RlZDV9IC8+XHJcbiAgICAgICAgICA8c3BhbiBzbG90PVwibGFiZWxcIj5SaWdodCBsYWJlbDwvc3Bhbj5cclxuICAgICAgICA8L0Zvcm1GaWVsZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxGb3JtRmllbGQgYWxpZ249XCJlbmRcIj5cclxuICAgICAgICAgIDxDaGVja2JveCBiaW5kOmNoZWNrZWQ9e3NlbGVjdGVkNn0gLz5cclxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJsYWJlbFwiPkxlZnQgbGFiZWw8L3NwYW4+XHJcbiAgICAgICAgPC9Gb3JtRmllbGQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9FeGFtcGxlPlxyXG4gIDwvZGl2PlxyXG48L1BhZ2U+XHJcbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyIsInRzbGliXzEuX19hc3NpZ24iLCJNRENGb3VuZGF0aW9uIiwiTURDUmlwcGxlIiwiYXBwbHlQYXNzaXZlIiwibWF0Y2hlcyIsIk1EQ1JpcHBsZUZvdW5kYXRpb24iLCJNRENDb21wb25lbnQiLCJnZXRDb250ZXh0Iiwib25Nb3VudCIsIm9uRGVzdHJveSIsImV4Y2x1ZGUiLCJwcmVmaXhGaWx0ZXIiLCJjc3NDbGFzc2VzIiwic3RyaW5ncyIsInNldENvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQSxBQWNBLElBQUksY0FBYyxHQUFHO0lBQ2pCLFlBQVksRUFBRTtRQUNWLFdBQVcsRUFBRSxXQUFXO1FBQ3hCLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsUUFBUSxFQUFFLGNBQWM7S0FDM0I7SUFDRCxrQkFBa0IsRUFBRTtRQUNoQixXQUFXLEVBQUUsV0FBVztRQUN4QixRQUFRLEVBQUUsMEJBQTBCO1FBQ3BDLFFBQVEsRUFBRSxvQkFBb0I7S0FDakM7SUFDRCxjQUFjLEVBQUU7UUFDWixXQUFXLEVBQUUsV0FBVztRQUN4QixRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLFFBQVEsRUFBRSxnQkFBZ0I7S0FDN0I7SUFDRCxhQUFhLEVBQUU7UUFDWCxXQUFXLEVBQUUsWUFBWTtRQUN6QixRQUFRLEVBQUUscUJBQXFCO1FBQy9CLFFBQVEsRUFBRSxlQUFlO0tBQzVCO0NBQ0osQ0FBQztBQUNGLFNBQVMsUUFBUSxDQUFDLFNBQVMsRUFBRTtJQUN6QixPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksT0FBTyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsS0FBSyxVQUFVLENBQUM7Q0FDaEc7QUFDRCxBQVNPLFNBQVMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRTtJQUN0RCxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxTQUFTLElBQUksY0FBYyxFQUFFO1FBQ3BELElBQUksRUFBRSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxD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

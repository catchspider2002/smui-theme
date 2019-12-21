'use strict';

var index = require('./index-8786aa53.js');
var prefixFilter = require('./prefixFilter-8b2beaa3.js');
var Page = require('./Page-6037c0c8.js');
var Example = require('./Example-cd923b49.js');

var css = ".mdc-typography--headline6{font-size:1.25rem;line-height:2rem;letter-spacing:.0125em}.mdc-typography--headline6,.mdc-typography--subtitle2{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-weight:500;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle2{font-size:.875rem;line-height:1.375rem;letter-spacing:.0071428571em}.mdc-typography--body2{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit}:root{--primary-100:#ebf8ff;--primary-200:#bee3f8;--primary-300:#90cdf4;--primary-400:#63b3ed;--primary-500:#4299e1;--primary-600:#3182ce;--primary-700:#2b6cb0;--primary-800:#2c5282;--primary-900:#2a4365;--secondary-100:#fff5f5;--secondary-200:#fed7d7;--secondary-300:#feb2b2;--secondary-400:#fc8181;--secondary-500:#f56565;--secondary-600:#e53e3e;--secondary-700:#c53030;--secondary-800:#9b2c2c;--secondary-900:#742a2a;--primary-color:var(--primary-700);--secondary-color:var(--secondary-700);--primary-font-color:#fff;--secondary-font-color:#fff;--disabled-button-bg-color:#e0e0e0;--font-color:#212121;--other-font-color:#000;--bg-color:#fff;--bg-layer-color:#f5f5f5;--bg-card-color:#fff;--enabled-color:#757575;--disabled-color:#bdbdbd;--switch-toggle-color:#fafafa;--switch-track-color:#4d4d4d;--font-family:\"Montserrat\",sans-serif;--filter:invert(0%);--alert-default-bg-color:var(--primary-200);--alert-solid-bg-color:var(--primary-700);--alert-solid-text-color:\"text-white\";--alert-outline-bg-color:var(--primary-100);--alert-outline-border-color:var(--primary-400);--alert-outline-border-color2:var(--primary-600);--alert-outline-text-color:var(--primary-800)}[data-theme=dark]{--primary-color:var(--primary-400);--secondary-color:var(--secondary-400);--primary-font-color:#000;--secondary-font-color:#000;--disabled-button-bg-color:#1f1f1f;--font-color:#dedede;--other-font-color:#fff;--bg-color:#121212;--bg-layer-color:#333;--bg-card-color:#424242;--enabled-color:#b3b3b3;--disabled-color:#4d4d4d;--switch-toggle-color:#b3b3b3;--switch-track-color:#fff;--filter:invert(100%)}body{--mdc-theme-primary:var(--primary-color);--mdc-theme-secondary:var(--secondary-color);--mdc-theme-on-primary:var(--primary-font-color);--mdc-theme-on-secondary:var(--secondary-font-color);--mdc-text-field-ink-color:var(--other-font-color);--mdc-theme-text-primary-on-background:var(--font-color);--mdc-theme-surface:transparent;--duration:0.5s;--timing:ease;background-color:var(--bg-color);color:var(--font-color);-webkit-transition:color var(--duration) var(--timing),background-color var(--duration) var(--timing);transition:color var(--duration) var(--timing),background-color var(--duration) var(--timing);font-family:var(--font-family)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:var(--disabled-button-bg-color)}.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--disabled-color)}.mdc-select:not(.mdc-select--disabled) .mdc-select__native-control,.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text,.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--other-font-color)}.mdc-select:not(.mdc-select--disabled) .mdc-select__native-control option{color:#000}.mdc-select--with-leading-icon:not(.mdc-select--disabled) .mdc-select__icon{color:var(--enabled-color);opacity:1}.mdc-select__dropdown-icon{-webkit-filter:var(--filter);filter:var(--filter)}.mdc-select--invalid .mdc-select__dropdown-icon{-webkit-filter:invert(0);filter:invert(0)}.mdc-switch--disabled{opacity:.5}.mdc-card__action--icon:not(:disabled){color:var(--enabled-color)}.flex-1-0-auto{-webkit-box-flex:1;flex:1 0 auto}.mdc-button{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.0892857143em;text-decoration:none;text-transform:uppercase;padding:0 8px;display:-webkit-inline-box;display:inline-flex;position:relative;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;box-sizing:border-box;min-width:64px;height:36px;border:none;outline:none;line-height:inherit;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none;overflow:hidden;vertical-align:middle;border-radius:4px}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{background-color:transparent;color:var(--disabled-color);cursor:default;pointer-events:none}.mdc-button.mdc-button--dense{border-radius:4px}.mdc-button:not(:disabled){background-color:transparent}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}.mdc-button .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button .mdc-button__icon{margin-left:8px;margin-right:0}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary,#6200ee)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}.mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button__label+.mdc-button__icon{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--outlined .mdc-button__icon,.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon{margin-left:-4px;margin-right:8px}.mdc-button--outlined .mdc-button__icon[dir=rtl],.mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--outlined .mdc-button__icon,[dir=rtl] .mdc-button--raised .mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__icon{margin-left:8px;margin-right:-4px}.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0,0,0,.12);color:var(--disabled-color)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee}@supports not (-ms-ime-align:auto){.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-primary,#6200ee)}}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary,#fff)}.mdc-button--raised{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);-webkit-transition:box-shadow .28s cubic-bezier(.4,0,.2,1);transition:box-shadow .28s cubic-bezier(.4,0,.2,1)}.mdc-button--raised:focus,.mdc-button--raised:hover{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mdc-button--outlined{border-style:solid;padding:0 15px;border-width:1px}.mdc-button--outlined:disabled{border-color:var(--disabled-color)}.mdc-button--outlined:not(:disabled){border-color:#6200ee;border-color:var(--mdc-theme-primary,#6200ee)}.mdc-button--dense{height:32px;font-size:.8125rem}@-webkit-keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@-webkit-keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@-webkit-keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-button:after,.mdc-button:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-button:before{-webkit-transition:opacity 15ms linear,background-color 15ms linear;transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-button:after,.mdc-button:before{top:-50%;left:-50%;width:200%;height:200%;background-color:#6200ee}@supports not (-ms-ime-align:auto){.mdc-button:after,.mdc-button:before{background-color:var(--mdc-theme-primary,#6200ee)}}.mdc-button:hover:before{opacity:.04}.mdc-button:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.mdc-button:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.mdc-button:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.mdc-button--raised:after,.mdc-button--raised:before,.mdc-button--unelevated:after,.mdc-button--unelevated:before{background-color:#fff}@supports not (-ms-ime-align:auto){.mdc-button--raised:after,.mdc-button--raised:before,.mdc-button--unelevated:after,.mdc-button--unelevated:before{background-color:var(--mdc-theme-on-primary,#fff)}}.mdc-button--raised:hover:before,.mdc-button--unelevated:hover:before{opacity:.08}.mdc-button--raised:not(.mdc-ripple-upgraded):focus:before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}.mdc-button--raised:not(.mdc-ripple-upgraded):after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active:after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}.smui-button--color-secondary:not(:disabled){color:#018786;color:var(--mdc-theme-secondary,#018786)}.smui-button--color-secondary.mdc-button--raised:not(:disabled),.smui-button--color-secondary.mdc-button--unelevated:not(:disabled){background-color:#018786}@supports not (-ms-ime-align:auto){.smui-button--color-secondary.mdc-button--raised:not(:disabled),.smui-button--color-secondary.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-secondary,#018786)}}.smui-button--color-secondary.mdc-button--raised:not(:disabled),.smui-button--color-secondary.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-secondary,#fff)}.smui-button--color-secondary.mdc-button--outlined:not(:disabled){border-color:#018786;border-color:var(--mdc-theme-secondary,#018786)}.smui-button--color-secondary:after,.smui-button--color-secondary:before{background-color:#018786}@supports not (-ms-ime-align:auto){.smui-button--color-secondary:after,.smui-button--color-secondary:before{background-color:var(--mdc-theme-secondary,#018786)}}.smui-button--color-secondary:hover:before{opacity:.04}.smui-button--color-secondary:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.smui-button--color-secondary:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.smui-button--color-secondary:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.smui-button--color-secondary.mdc-button--raised:after,.smui-button--color-secondary.mdc-button--raised:before,.smui-button--color-secondary.mdc-button--unelevated:after,.smui-button--color-secondary.mdc-button--unelevated:before{background-color:#fff}@supports not (-ms-ime-align:auto){.smui-button--color-secondary.mdc-button--raised:after,.smui-button--color-secondary.mdc-button--raised:before,.smui-button--color-secondary.mdc-button--unelevated:after,.smui-button--color-secondary.mdc-button--unelevated:before{background-color:var(--mdc-theme-on-secondary,#fff)}}.smui-button--color-secondary.mdc-button--raised:hover:before,.smui-button--color-secondary.mdc-button--unelevated:hover:before{opacity:.08}.smui-button--color-secondary.mdc-button--raised:not(.mdc-ripple-upgraded):focus:before,.smui-button--color-secondary.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}.smui-button--color-secondary.mdc-button--raised:not(.mdc-ripple-upgraded):after,.smui-button--color-secondary.mdc-button--unelevated:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.smui-button--color-secondary.mdc-button--raised:not(.mdc-ripple-upgraded):active:after,.smui-button--color-secondary.mdc-button--unelevated:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}.smui-button__group{display:-webkit-inline-box;display:inline-flex}.smui-button__group>.mdc-button:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.smui-button__group>.mdc-button:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.smui-button__group.smui-button__group--raised{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.smui-button__group>.mdc-button--raised,.smui-button__group>.mdc-button--raised:active,.smui-button__group>.mdc-button--raised:disabled,.smui-button__group>.mdc-button--raised:focus,.smui-button__group>.mdc-button--raised:hover{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.smui-button__group>.mdc-button--outlined:not(:last-child){border-right-width:0}";
prefixFilter.styleInject(css);

/* node_modules\@smui\button\Button.svelte generated by Svelte v3.16.4 */

const Button = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { ripple = true } = $$props;
	let { color = "primary" } = $$props;
	let { variant = "text" } = $$props;
	let { dense = false } = $$props;
	let { href = null } = $$props;
	let { action = "close" } = $$props;
	let { default: defaultAction = false } = $$props;
	let context = index.getContext("SMUI:button:context");
	index.setContext("SMUI:label:context", "button");
	index.setContext("SMUI:icon:context", "button");
	if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
	if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
	if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0) $$bindings.ripple(ripple);
	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0) $$bindings.variant(variant);
	if ($$props.dense === void 0 && $$bindings.dense && dense !== void 0) $$bindings.dense(dense);
	if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
	if ($$props.action === void 0 && $$bindings.action && action !== void 0) $$bindings.action(action);
	if ($$props.default === void 0 && $$bindings.default && defaultAction !== void 0) $$bindings.default(defaultAction);
	let dialogExcludes = context === "dialog:action" ? ["action", "default"] : [];

	let props = prefixFilter.exclude($$props, [
		"use",
		"class",
		"ripple",
		"color",
		"variant",
		"dense",
		"href",
		...dialogExcludes
	]);

	let actionProp = context === "dialog:action" && action !== null
	? { "data-mdc-dialog-action": action }
	: {};

	let defaultProp = context === "dialog:action" && defaultAction
	? { "data-mdc-dialog-button-default": "" }
	: {};

	return `${href
	? `<a${index.spread([
			{
				class: "\n      mdc-button\n      " + index.escape(className) + "\n      " + index.escape(variant === "raised" ? "mdc-button--raised" : "") + "\n      " + index.escape(variant === "unelevated" ? "mdc-button--unelevated" : "") + "\n      " + index.escape(variant === "outlined" ? "mdc-button--outlined" : "") + "\n      " + index.escape(dense ? "mdc-button--dense" : "") + "\n      " + index.escape(color === "secondary"
				? "smui-button--color-secondary"
				: "") + "\n      " + index.escape(context === "card:action" ? "mdc-card__action" : "") + "\n      " + index.escape(context === "card:action"
				? "mdc-card__action--button"
				: "") + "\n      " + index.escape(context === "dialog:action" ? "mdc-dialog__button" : "") + "\n      " + index.escape(context === "top-app-bar:navigation"
				? "mdc-top-app-bar__navigation-icon"
				: "") + "\n      " + index.escape(context === "top-app-bar:action"
				? "mdc-top-app-bar__action-item"
				: "") + "\n      " + index.escape(context === "snackbar" ? "mdc-snackbar__action" : "") + "\n    "
			},
			{ href: index.escape(href) },
			actionProp,
			defaultProp,
			props
		])}>${$$slots.default ? $$slots.default({}) : ``}</a>`
	: `<button${index.spread([
			{
				class: "\n      mdc-button\n      " + index.escape(className) + "\n      " + index.escape(variant === "raised" ? "mdc-button--raised" : "") + "\n      " + index.escape(variant === "unelevated" ? "mdc-button--unelevated" : "") + "\n      " + index.escape(variant === "outlined" ? "mdc-button--outlined" : "") + "\n      " + index.escape(dense ? "mdc-button--dense" : "") + "\n      " + index.escape(color === "secondary"
				? "smui-button--color-secondary"
				: "") + "\n      " + index.escape(context === "card:action" ? "mdc-card__action" : "") + "\n      " + index.escape(context === "card:action"
				? "mdc-card__action--button"
				: "") + "\n      " + index.escape(context === "dialog:action" ? "mdc-dialog__button" : "") + "\n      " + index.escape(context === "top-app-bar:navigation"
				? "mdc-top-app-bar__navigation-icon"
				: "") + "\n      " + index.escape(context === "top-app-bar:action"
				? "mdc-top-app-bar__action-item"
				: "") + "\n      " + index.escape(context === "snackbar" ? "mdc-snackbar__action" : "") + "\n    "
			},
			actionProp,
			defaultProp,
			props
		])}>${$$slots.default ? $$slots.default({}) : ``}</button>`}`;
});

/* node_modules\@smui\button\Group.svelte generated by Svelte v3.16.4 */

const Group = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { variant = "text" } = $$props;
	if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
	if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
	if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0) $$bindings.variant(variant);

	return `<div${index.spread([
		{
			class: "\n    smui-button__group\n    " + index.escape(className) + "\n    " + index.escape(variant === "raised" ? "smui-button__group--raised" : "") + "\n  "
		},
		prefixFilter.exclude($$props, ["use", "class", "variant"])
	])}>${$$slots.default ? $$slots.default({}) : ``}</div>`;
});

/* node_modules\@smui\common\Label.svelte generated by Svelte v3.16.4 */

const Label = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	const context = index.getContext("SMUI:label:context");
	if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
	if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);

	return `<span${index.spread([
		{
			class: "\n    " + index.escape(className) + "\n    " + index.escape(context === "button" ? "mdc-button__label" : "") + "\n    " + index.escape(context === "fab" ? "mdc-fab__label" : "") + "\n    " + index.escape(context === "chip" ? "mdc-chip__text" : "") + "\n    " + index.escape(context === "tab" ? "mdc-tab__text-label" : "") + "\n    " + index.escape(context === "image-list" ? "mdc-image-list__label" : "") + "\n    " + index.escape(context === "snackbar" ? "mdc-snackbar__label" : "") + "\n  "
		},
		context === "snackbar"
		? { role: "status", "aria-live": "polite" }
		: {},
		prefixFilter.exclude($$props, ["use", "class"])
	])}>${$$slots.default ? $$slots.default({}) : ``}</span>`;
});

/* node_modules\@smui\common\Icon.svelte generated by Svelte v3.16.4 */

const Icon = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { on = false } = $$props;
	let { leading = false } = $$props;
	let { leadingHidden = false } = $$props;
	let { trailing = false } = $$props;
	const context = index.getContext("SMUI:icon:context");
	if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
	if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
	if ($$props.on === void 0 && $$bindings.on && on !== void 0) $$bindings.on(on);
	if ($$props.leading === void 0 && $$bindings.leading && leading !== void 0) $$bindings.leading(leading);
	if ($$props.leadingHidden === void 0 && $$bindings.leadingHidden && leadingHidden !== void 0) $$bindings.leadingHidden(leadingHidden);
	if ($$props.trailing === void 0 && $$bindings.trailing && trailing !== void 0) $$bindings.trailing(trailing);

	return `<i${index.spread([
		{
			class: "\n    " + index.escape(className) + "\n    " + index.escape(context === "button" ? "mdc-button__icon" : "") + "\n    " + index.escape(context === "fab" ? "mdc-fab__icon" : "") + "\n    " + index.escape(context === "icon-button" ? "mdc-icon-button__icon" : "") + "\n    " + index.escape(context === "icon-button" && on
			? "mdc-icon-button__icon--on"
			: "") + "\n    " + index.escape(context === "chip" ? "mdc-chip__icon" : "") + "\n    " + index.escape(context === "chip" && leading
			? "mdc-chip__icon--leading"
			: "") + "\n    " + index.escape(context === "chip" && leadingHidden
			? "mdc-chip__icon--leading-hidden"
			: "") + "\n    " + index.escape(context === "chip" && trailing
			? "mdc-chip__icon--trailing"
			: "") + "\n    " + index.escape(context === "tab" ? "mdc-tab__icon" : "") + "\n  "
		},
		{ "aria-hidden": "true" },
		prefixFilter.exclude($$props, ["use", "class", "on", "leading", "leadingHidden", "trailing"])
	])}>${$$slots.default ? $$slots.default({}) : ``}</i>`;
});

var css$1 = ".mdc-typography--headline6{font-size:1.25rem;line-height:2rem;letter-spacing:.0125em}.mdc-typography--headline6,.mdc-typography--subtitle2{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-weight:500;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle2{font-size:.875rem;line-height:1.375rem;letter-spacing:.0071428571em}.mdc-typography--body2{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit}:root{--primary-100:#ebf8ff;--primary-200:#bee3f8;--primary-300:#90cdf4;--primary-400:#63b3ed;--primary-500:#4299e1;--primary-600:#3182ce;--primary-700:#2b6cb0;--primary-800:#2c5282;--primary-900:#2a4365;--secondary-100:#fff5f5;--secondary-200:#fed7d7;--secondary-300:#feb2b2;--secondary-400:#fc8181;--secondary-500:#f56565;--secondary-600:#e53e3e;--secondary-700:#c53030;--secondary-800:#9b2c2c;--secondary-900:#742a2a;--primary-color:var(--primary-700);--secondary-color:var(--secondary-700);--primary-font-color:#fff;--secondary-font-color:#fff;--disabled-button-bg-color:#e0e0e0;--font-color:#212121;--other-font-color:#000;--bg-color:#fff;--bg-layer-color:#f5f5f5;--bg-card-color:#fff;--enabled-color:#757575;--disabled-color:#bdbdbd;--switch-toggle-color:#fafafa;--switch-track-color:#4d4d4d;--font-family:\"Montserrat\",sans-serif;--filter:invert(0%);--alert-default-bg-color:var(--primary-200);--alert-solid-bg-color:var(--primary-700);--alert-solid-text-color:\"text-white\";--alert-outline-bg-color:var(--primary-100);--alert-outline-border-color:var(--primary-400);--alert-outline-border-color2:var(--primary-600);--alert-outline-text-color:var(--primary-800)}[data-theme=dark]{--primary-color:var(--primary-400);--secondary-color:var(--secondary-400);--primary-font-color:#000;--secondary-font-color:#000;--disabled-button-bg-color:#1f1f1f;--font-color:#dedede;--other-font-color:#fff;--bg-color:#121212;--bg-layer-color:#333;--bg-card-color:#424242;--enabled-color:#b3b3b3;--disabled-color:#4d4d4d;--switch-toggle-color:#b3b3b3;--switch-track-color:#fff;--filter:invert(100%)}body{--mdc-theme-primary:var(--primary-color);--mdc-theme-secondary:var(--secondary-color);--mdc-theme-on-primary:var(--primary-font-color);--mdc-theme-on-secondary:var(--secondary-font-color);--mdc-text-field-ink-color:var(--other-font-color);--mdc-theme-text-primary-on-background:var(--font-color);--mdc-theme-surface:transparent;--duration:0.5s;--timing:ease;background-color:var(--bg-color);color:var(--font-color);-webkit-transition:color var(--duration) var(--timing),background-color var(--duration) var(--timing);transition:color var(--duration) var(--timing),background-color var(--duration) var(--timing);font-family:var(--font-family)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:var(--disabled-button-bg-color)}.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--disabled-color)}.mdc-select:not(.mdc-select--disabled) .mdc-select__native-control,.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text,.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--other-font-color)}.mdc-select:not(.mdc-select--disabled) .mdc-select__native-control option{color:#000}.mdc-select--with-leading-icon:not(.mdc-select--disabled) .mdc-select__icon{color:var(--enabled-color);opacity:1}.mdc-select__dropdown-icon{-webkit-filter:var(--filter);filter:var(--filter)}.mdc-select--invalid .mdc-select__dropdown-icon{-webkit-filter:invert(0);filter:invert(0)}.mdc-switch--disabled{opacity:.5}.mdc-card__action--icon:not(:disabled){color:var(--enabled-color)}.flex-1-0-auto{-webkit-box-flex:1;flex:1 0 auto}@-webkit-keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@-webkit-keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@-webkit-keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-menu{min-width:112px}.mdc-menu .mdc-list{color:rgba(0,0,0,.87)}.mdc-menu .mdc-list-divider{margin:8px 0}.mdc-menu .mdc-list-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mdc-menu .mdc-list-item--disabled{cursor:auto}@media screen and (-ms-high-contrast:active){.mdc-menu .mdc-list-item--disabled{opacity:.38}}.mdc-menu a.mdc-list-item .mdc-list-item__text{pointer-events:none}.mdc-menu__selection-group{padding:0;fill:currentColor}.mdc-menu__selection-group .mdc-list-item{padding-left:56px;padding-right:16px}.mdc-menu__selection-group .mdc-list-item[dir=rtl],[dir=rtl] .mdc-menu__selection-group .mdc-list-item{padding-left:16px;padding-right:56px}.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);margin:0;padding:0;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:top left;transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;-webkit-transition:opacity .03s linear,-webkit-transform .12s cubic-bezier(0,0,.2,1);transition:opacity .03s linear,-webkit-transform .12s cubic-bezier(0,0,.2,1);transition:opacity .03s linear,transform .12s cubic-bezier(0,0,.2,1);transition:opacity .03s linear,transform .12s cubic-bezier(0,0,.2,1),-webkit-transform .12s cubic-bezier(0,0,.2,1);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface,#fff);color:#000;color:var(--mdc-theme-on-surface,#000);border-radius:4px;transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--open{display:inline-block;-webkit-transform:scale(1);transform:scale(1);opacity:1}.mdc-menu-surface[dir=rtl],[dir=rtl] .mdc-menu-surface{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.smui-menu-surface--static{position:static;z-index:0;display:inline-block;-webkit-transform:scale(1);transform:scale(1);opacity:1}";
prefixFilter.styleInject(css$1);

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
var cssClasses$1 = {
    LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated',
    LIST_ITEM_CLASS: 'mdc-list-item',
    LIST_ITEM_DISABLED_CLASS: 'mdc-list-item--disabled',
    LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
    ROOT: 'mdc-list',
};
var strings$1 = {
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
    CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses$1.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses$1.LIST_ITEM_CLASS + " a\n  ",
    FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses$1.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses$1.LIST_ITEM_CLASS + " a,\n    ." + cssClasses$1.LIST_ITEM_CLASS + " input[type=\"radio\"]:not(:disabled),\n    ." + cssClasses$1.LIST_ITEM_CLASS + " input[type=\"checkbox\"]:not(:disabled)\n  ",
    RADIO_SELECTOR: 'input[type="radio"]:not(:disabled)',
};
var numbers$1 = {
    UNSET_INDEX: -1,
};
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
var ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select'];
function isNumberArray(selectedIndex) {
    return selectedIndex instanceof Array;
}
var MDCListFoundation = /** @class */ (function (_super) {
    prefixFilter.__extends(MDCListFoundation, _super);
    function MDCListFoundation(adapter) {
        var _this = _super.call(this, prefixFilter.__assign({}, MDCListFoundation.defaultAdapter, adapter)) || this;
        _this.wrapFocus_ = false;
        _this.isVertical_ = true;
        _this.isSingleSelectionList_ = false;
        _this.selectedIndex_ = numbers$1.UNSET_INDEX;
        _this.focusedItemIndex_ = numbers$1.UNSET_INDEX;
        _this.useActivatedClass_ = false;
        _this.ariaCurrentAttrValue_ = null;
        _this.isCheckboxList_ = false;
        _this.isRadioList_ = false;
        return _this;
    }
    Object.defineProperty(MDCListFoundation, "strings", {
        get: function () {
            return strings$1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCListFoundation, "cssClasses", {
        get: function () {
            return cssClasses$1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCListFoundation, "numbers", {
        get: function () {
            return numbers$1;
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
        if (index === numbers$1.UNSET_INDEX) {
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
            this.adapter_.removeClassForElementIndex(itemIndex, cssClasses$1.LIST_ITEM_DISABLED_CLASS);
            this.adapter_.setAttributeForElementIndex(itemIndex, strings$1.ARIA_DISABLED, 'false');
        }
        else {
            this.adapter_.addClassForElementIndex(itemIndex, cssClasses$1.LIST_ITEM_DISABLED_CLASS);
            this.adapter_.setAttributeForElementIndex(itemIndex, strings$1.ARIA_DISABLED, 'true');
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
        var selectedClassName = cssClasses$1.LIST_ITEM_SELECTED_CLASS;
        if (this.useActivatedClass_) {
            selectedClassName = cssClasses$1.LIST_ITEM_ACTIVATED_CLASS;
        }
        if (this.selectedIndex_ !== numbers$1.UNSET_INDEX) {
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
        if (this.selectedIndex_ === numbers$1.UNSET_INDEX) {
            this.ariaCurrentAttrValue_ =
                this.adapter_.getAttributeForElementIndex(index, strings$1.ARIA_CURRENT);
        }
        var isAriaCurrent = this.ariaCurrentAttrValue_ !== null;
        var ariaAttribute = isAriaCurrent ? strings$1.ARIA_CURRENT : strings$1.ARIA_SELECTED;
        if (this.selectedIndex_ !== numbers$1.UNSET_INDEX) {
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
        if (this.selectedIndex_ !== numbers$1.UNSET_INDEX) {
            this.adapter_.setAttributeForElementIndex(this.selectedIndex_, strings$1.ARIA_CHECKED, 'false');
        }
        this.adapter_.setAttributeForElementIndex(index, strings$1.ARIA_CHECKED, 'true');
        this.selectedIndex_ = index;
    };
    MDCListFoundation.prototype.setCheckboxAtIndex_ = function (index) {
        for (var i = 0; i < this.adapter_.getListItemCount(); i++) {
            var isChecked = false;
            if (index.indexOf(i) >= 0) {
                isChecked = true;
            }
            this.adapter_.setCheckedCheckboxOrRadioAtIndex(i, isChecked);
            this.adapter_.setAttributeForElementIndex(i, strings$1.ARIA_CHECKED, isChecked ? 'true' : 'false');
        }
        this.selectedIndex_ = index;
    };
    MDCListFoundation.prototype.setTabindexAtIndex_ = function (index) {
        if (this.focusedItemIndex_ === numbers$1.UNSET_INDEX && index !== 0) {
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
            if (typeof this.selectedIndex_ === 'number' && this.selectedIndex_ !== numbers$1.UNSET_INDEX) {
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
        this.adapter_.setAttributeForElementIndex(index, strings$1.ARIA_CHECKED, isChecked ? 'true' : 'false');
        // If none of the checkbox items are selected and selectedIndex is not initialized then provide a default value.
        var selectedIndexes = this.selectedIndex_ === numbers$1.UNSET_INDEX ? [] : this.selectedIndex_.slice();
        if (isChecked) {
            selectedIndexes.push(index);
        }
        else {
            selectedIndexes = selectedIndexes.filter(function (i) { return i !== index; });
        }
        this.selectedIndex_ = selectedIndexes;
    };
    return MDCListFoundation;
}(prefixFilter.MDCFoundation));
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
var MDCList = /** @class */ (function (_super) {
    prefixFilter.__extends(MDCList, _super);
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
            return [].slice.call(this.root_.querySelectorAll("." + cssClasses$1.LIST_ITEM_CLASS));
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
        var direction = this.root_.getAttribute(strings$1.ARIA_ORIENTATION);
        this.vertical = direction !== strings$1.ARIA_ORIENTATION_HORIZONTAL;
        // List items need to have at least tabindex=-1 to be focusable.
        [].slice.call(this.root_.querySelectorAll('.mdc-list-item:not([tabindex])'))
            .forEach(function (el) {
            el.setAttribute('tabindex', '-1');
        });
        // Child button/a elements are not tabbable until the list item is focused.
        [].slice.call(this.root_.querySelectorAll(strings$1.FOCUSABLE_CHILD_ELEMENTS))
            .forEach(function (el) { return el.setAttribute('tabindex', '-1'); });
        this.foundation_.layout();
    };
    /**
     * Initialize selectedIndex value based on pre-selected checkbox list items, single selection or radio.
     */
    MDCList.prototype.initializeListType = function () {
        var _this = this;
        var checkboxListItems = this.root_.querySelectorAll(strings$1.ARIA_ROLE_CHECKBOX_SELECTOR);
        var singleSelectedListItem = this.root_.querySelector("\n      ." + cssClasses$1.LIST_ITEM_ACTIVATED_CLASS + ",\n      ." + cssClasses$1.LIST_ITEM_SELECTED_CLASS + "\n    ");
        var radioSelectedListItem = this.root_.querySelector(strings$1.ARIA_CHECKED_RADIO_SELECTOR);
        if (checkboxListItems.length) {
            var preselectedItems = this.root_.querySelectorAll(strings$1.ARIA_CHECKED_CHECKBOX_SELECTOR);
            this.selectedIndex =
                [].map.call(preselectedItems, function (listItem) { return _this.listElements.indexOf(listItem); });
        }
        else if (singleSelectedListItem) {
            if (singleSelectedListItem.classList.contains(cssClasses$1.LIST_ITEM_ACTIVATED_CLASS)) {
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
                return !!listItem.querySelector(strings$1.CHECKBOX_SELECTOR);
            },
            hasRadioAtIndex: function (index) {
                var listItem = _this.listElements[index];
                return !!listItem.querySelector(strings$1.RADIO_SELECTOR);
            },
            isCheckboxCheckedAtIndex: function (index) {
                var listItem = _this.listElements[index];
                var toggleEl = listItem.querySelector(strings$1.CHECKBOX_SELECTOR);
                return toggleEl.checked;
            },
            isFocusInsideList: function () {
                return _this.root_.contains(document.activeElement);
            },
            isRootFocused: function () { return document.activeElement === _this.root_; },
            notifyAction: function (index) {
                _this.emit(strings$1.ACTION_EVENT, { index: index }, /** shouldBubble */ true);
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
                var toggleEl = listItem.querySelector(strings$1.CHECKBOX_RADIO_SELECTOR);
                toggleEl.checked = isChecked;
                var event = document.createEvent('Event');
                event.initEvent('change', true, true);
                toggleEl.dispatchEvent(event);
            },
            setTabIndexForListItemChildren: function (listItemIndex, tabIndexValue) {
                var element = _this.listElements[listItemIndex];
                var listItemChildren = [].slice.call(element.querySelectorAll(strings$1.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
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
        var nearestParent = prefixFilter.closest(eventTarget, "." + cssClasses$1.LIST_ITEM_CLASS + ", ." + cssClasses$1.ROOT);
        // Get the index of the element if it is a list item.
        if (nearestParent && prefixFilter.matches(nearestParent, "." + cssClasses$1.LIST_ITEM_CLASS)) {
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
        this.foundation_.handleKeydown(evt, target.classList.contains(cssClasses$1.LIST_ITEM_CLASS), index);
    };
    /**
     * Used to figure out which element was clicked before sending the event to the foundation.
     */
    MDCList.prototype.handleClickEvent_ = function (evt) {
        var index = this.getListItemIndex_(evt);
        var target = evt.target;
        // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.
        var toggleCheckbox = !prefixFilter.matches(target, strings$1.CHECKBOX_RADIO_SELECTOR);
        this.foundation_.handleClick(index, toggleCheckbox);
    };
    return MDCList;
}(prefixFilter.MDCComponent));
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
var MDCMenuSurfaceFoundation = /** @class */ (function (_super) {
    prefixFilter.__extends(MDCMenuSurfaceFoundation, _super);
    function MDCMenuSurfaceFoundation(adapter) {
        var _this = _super.call(this, prefixFilter.__assign({}, MDCMenuSurfaceFoundation.defaultAdapter, adapter)) || this;
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
            for (var props_1 = prefixFilter.__values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
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
}(prefixFilter.MDCFoundation));
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
    prefixFilter.__extends(MDCMenuSurface, _super);
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
}(prefixFilter.MDCComponent));
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
var cssClasses$2 = {
    MENU_SELECTED_LIST_ITEM: 'mdc-menu-item--selected',
    MENU_SELECTION_GROUP: 'mdc-menu__selection-group',
    ROOT: 'mdc-menu',
};
var strings$2 = {
    ARIA_CHECKED_ATTR: 'aria-checked',
    ARIA_DISABLED_ATTR: 'aria-disabled',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    LIST_SELECTOR: '.mdc-list',
    SELECTED_EVENT: 'MDCMenu:selected',
};
var numbers$2 = {
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
    prefixFilter.__extends(MDCMenuFoundation, _super);
    function MDCMenuFoundation(adapter) {
        var _this = _super.call(this, prefixFilter.__assign({}, MDCMenuFoundation.defaultAdapter, adapter)) || this;
        _this.closeAnimationEndTimerId_ = 0;
        _this.defaultFocusState_ = DefaultFocusState.LIST_ROOT;
        return _this;
    }
    Object.defineProperty(MDCMenuFoundation, "cssClasses", {
        get: function () {
            return cssClasses$2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenuFoundation, "strings", {
        get: function () {
            return strings$2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenuFoundation, "numbers", {
        get: function () {
            return numbers$2;
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
            this.adapter_.removeAttributeFromElementAtIndex(prevSelectedIndex, strings$2.ARIA_CHECKED_ATTR);
            this.adapter_.removeClassFromElementAtIndex(prevSelectedIndex, cssClasses$2.MENU_SELECTED_LIST_ITEM);
        }
        this.adapter_.addClassToElementAtIndex(index, cssClasses$2.MENU_SELECTED_LIST_ITEM);
        this.adapter_.addAttributeToElementAtIndex(index, strings$2.ARIA_CHECKED_ATTR, 'true');
    };
    /**
     * Sets the enabled state to isEnabled for the menu item at the given index.
     * @param index Index of the menu item
     * @param isEnabled The desired enabled state of the menu item.
     */
    MDCMenuFoundation.prototype.setEnabled = function (index, isEnabled) {
        this.validatedIndex_(index);
        if (isEnabled) {
            this.adapter_.removeClassFromElementAtIndex(index, cssClasses$1.LIST_ITEM_DISABLED_CLASS);
            this.adapter_.addAttributeToElementAtIndex(index, strings$2.ARIA_DISABLED_ATTR, 'false');
        }
        else {
            this.adapter_.addClassToElementAtIndex(index, cssClasses$1.LIST_ITEM_DISABLED_CLASS);
            this.adapter_.addAttributeToElementAtIndex(index, strings$2.ARIA_DISABLED_ATTR, 'true');
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
}(prefixFilter.MDCFoundation));
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
    prefixFilter.__extends(MDCMenu, _super);
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
        var list = this.root_.querySelector(strings$2.LIST_SELECTOR);
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
            notifySelected: function (evtData) { return _this.emit(strings$2.SELECTED_EVENT, {
                index: evtData.index,
                item: _this.items[evtData.index],
            }); },
            getMenuItemCount: function () { return _this.items.length; },
            focusItemAtIndex: function (index) { return _this.items[index].focus(); },
            focusListRoot: function () { return _this.root_.querySelector(strings$2.LIST_SELECTOR).focus(); },
            isSelectableItemAtIndex: function (index) { return !!prefixFilter.closest(_this.items[index], "." + cssClasses$2.MENU_SELECTION_GROUP); },
            getSelectedSiblingOfItemAtIndex: function (index) {
                var selectionGroupEl = prefixFilter.closest(_this.items[index], "." + cssClasses$2.MENU_SELECTION_GROUP);
                var selectedItemEl = selectionGroupEl.querySelector("." + cssClasses$2.MENU_SELECTED_LIST_ITEM);
                return selectedItemEl ? _this.items.indexOf(selectedItemEl) : -1;
            },
        };
        // tslint:enable:object-literal-sort-keys
        return new MDCMenuFoundation(adapter);
    };
    return MDCMenu;
}(prefixFilter.MDCComponent));
//# sourceMappingURL=component.js.map

/* node_modules\@smui\menu-surface\MenuSurface.svelte generated by Svelte v3.16.4 */

const MenuSurface = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
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
	let instantiate = index.getContext("SMUI:menu-surface:instantiate");
	let getInstance = index.getContext("SMUI:menu-surface:getInstance");
	index.setContext("SMUI:list:role", "menu");
	index.setContext("SMUI:list:item:role", "menuitem");
	let oldFixed = null;

	index.onMount(async () => {
		if (instantiate !== false) {
			menuSurface = new MDCMenuSurface(element);
		} else {
			menuSurface = await getInstance();
		}
	});

	index.onDestroy(() => {
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

	function setOpen(value) {
		open = value;
	}

	function setAnchorCorner(...args) {
		return menuSurface.setAnchorCorner(...args);
	}

	function setAnchorMargin(...args) {
		return menuSurface.setAnchorMargin(...args);
	}

	function setFixedPosition(isFixed, ...args) {
		fixed = isFixed;
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

	if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
	if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
	if ($$props.static === void 0 && $$bindings.static && isStatic !== void 0) $$bindings.static(isStatic);
	if ($$props.anchor === void 0 && $$bindings.anchor && anchor !== void 0) $$bindings.anchor(anchor);
	if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0) $$bindings.fixed(fixed);
	if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
	if ($$props.quickOpen === void 0 && $$bindings.quickOpen && quickOpen !== void 0) $$bindings.quickOpen(quickOpen);
	if ($$props.anchorElement === void 0 && $$bindings.anchorElement && anchorElement !== void 0) $$bindings.anchorElement(anchorElement);
	if ($$props.anchorCorner === void 0 && $$bindings.anchorCorner && anchorCorner !== void 0) $$bindings.anchorCorner(anchorCorner);
	if ($$props.element === void 0 && $$bindings.element && element !== void 0) $$bindings.element(element);
	if ($$props.setOpen === void 0 && $$bindings.setOpen && setOpen !== void 0) $$bindings.setOpen(setOpen);
	if ($$props.setAnchorCorner === void 0 && $$bindings.setAnchorCorner && setAnchorCorner !== void 0) $$bindings.setAnchorCorner(setAnchorCorner);
	if ($$props.setAnchorMargin === void 0 && $$bindings.setAnchorMargin && setAnchorMargin !== void 0) $$bindings.setAnchorMargin(setAnchorMargin);
	if ($$props.setFixedPosition === void 0 && $$bindings.setFixedPosition && setFixedPosition !== void 0) $$bindings.setFixedPosition(setFixedPosition);
	if ($$props.setAbsolutePosition === void 0 && $$bindings.setAbsolutePosition && setAbsolutePosition !== void 0) $$bindings.setAbsolutePosition(setAbsolutePosition);
	if ($$props.setMenuSurfaceAnchorElement === void 0 && $$bindings.setMenuSurfaceAnchorElement && setMenuSurfaceAnchorElement !== void 0) $$bindings.setMenuSurfaceAnchorElement(setMenuSurfaceAnchorElement);
	if ($$props.hoistMenuToBody === void 0 && $$bindings.hoistMenuToBody && hoistMenuToBody !== void 0) $$bindings.hoistMenuToBody(hoistMenuToBody);
	if ($$props.setIsHoisted === void 0 && $$bindings.setIsHoisted && setIsHoisted !== void 0) $$bindings.setIsHoisted(setIsHoisted);
	if ($$props.getDefaultFoundation === void 0 && $$bindings.getDefaultFoundation && getDefaultFoundation !== void 0) $$bindings.getDefaultFoundation(getDefaultFoundation);

	 {
		if (element && anchor && !element.parentNode.classList.contains("mdc-menu-surface--anchor")) {
			element.parentNode.classList.add("mdc-menu-surface--anchor");
			anchorElement = element.parentNode;
		}
	}

	 {
		if (menuSurface && menuSurface.quickOpen !== quickOpen) {
			menuSurface.quickOpen = quickOpen;
		}
	}

	 {
		if (menuSurface && menuSurface.anchorElement !== anchorElement) {
			menuSurface.anchorElement = anchorElement;
		}
	}

	 {
		if (menuSurface && menuSurface.isOpen() !== open) {
			if (open) {
				menuSurface.open();
			} else {
				menuSurface.close();
			}
		}
	}

	 {
		if (menuSurface && oldFixed !== fixed) {
			menuSurface.setFixedPosition(fixed);
			oldFixed = fixed;
		}
	}

	 {
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

	return `<div${index.spread([
		{
			class: "\n    mdc-menu-surface\n    " + index.escape(className) + "\n    " + index.escape(fixed ? "mdc-menu-surface--fixed" : "") + "\n    " + index.escape(isStatic ? "mdc-menu-surface--open" : "") + "\n    " + index.escape(isStatic ? "smui-menu-surface--static" : "") + "\n  "
		},
		prefixFilter.exclude($$props, [
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
	])}${index.add_attribute("this", element, 1)}>${$$slots.default ? $$slots.default({}) : ``}</div>`;
});

/* node_modules\@smui\menu\Menu.svelte generated by Svelte v3.16.4 */

const Menu = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	const forwardEvents = prefixFilter.forwardEventsBuilder(index.current_component, ["MDCMenu:selected", "MDCMenuSurface:closed", "MDCMenuSurface:opened"]);
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { static: isStatic = false } = $$props;
	let { open = isStatic } = $$props;
	let { quickOpen = false } = $$props;
	let { anchorCorner = null } = $$props;
	let { wrapFocus = false } = $$props;
	let element;
	let menu;
	let instantiate = index.getContext("SMUI:menu:instantiate");
	let getInstance = index.getContext("SMUI:menu:getInstance");
	let menuSurfacePromiseResolve;
	let menuSurfacePromise = new Promise(resolve => menuSurfacePromiseResolve = resolve);
	let listPromiseResolve;
	let listPromise = new Promise(resolve => listPromiseResolve = resolve);
	index.setContext("SMUI:menu-surface:instantiate", false);
	index.setContext("SMUI:menu-surface:getInstance", getMenuSurfaceInstancePromise);
	index.setContext("SMUI:list:instantiate", false);
	index.setContext("SMUI:list:getInstance", getListInstancePromise);

	index.onMount(async () => {
		if (instantiate !== false) {
			menu = new MDCMenu(element);
		} else {
			menu = await getInstance();
		}

		menuSurfacePromiseResolve(menu.menuSurface_);
		listPromiseResolve(menu.list_);
	});

	index.onDestroy(() => {
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

	function setOpen(value) {
		open = value;
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

	if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
	if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
	if ($$props.static === void 0 && $$bindings.static && isStatic !== void 0) $$bindings.static(isStatic);
	if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
	if ($$props.quickOpen === void 0 && $$bindings.quickOpen && quickOpen !== void 0) $$bindings.quickOpen(quickOpen);
	if ($$props.anchorCorner === void 0 && $$bindings.anchorCorner && anchorCorner !== void 0) $$bindings.anchorCorner(anchorCorner);
	if ($$props.wrapFocus === void 0 && $$bindings.wrapFocus && wrapFocus !== void 0) $$bindings.wrapFocus(wrapFocus);
	if ($$props.setOpen === void 0 && $$bindings.setOpen && setOpen !== void 0) $$bindings.setOpen(setOpen);
	if ($$props.getItems === void 0 && $$bindings.getItems && getItems !== void 0) $$bindings.getItems(getItems);
	if ($$props.setDefaultFocusState === void 0 && $$bindings.setDefaultFocusState && setDefaultFocusState !== void 0) $$bindings.setDefaultFocusState(setDefaultFocusState);
	if ($$props.setAnchorCorner === void 0 && $$bindings.setAnchorCorner && setAnchorCorner !== void 0) $$bindings.setAnchorCorner(setAnchorCorner);
	if ($$props.setAnchorMargin === void 0 && $$bindings.setAnchorMargin && setAnchorMargin !== void 0) $$bindings.setAnchorMargin(setAnchorMargin);
	if ($$props.setSelectedIndex === void 0 && $$bindings.setSelectedIndex && setSelectedIndex !== void 0) $$bindings.setSelectedIndex(setSelectedIndex);
	if ($$props.setEnabled === void 0 && $$bindings.setEnabled && setEnabled !== void 0) $$bindings.setEnabled(setEnabled);
	if ($$props.getOptionByIndex === void 0 && $$bindings.getOptionByIndex && getOptionByIndex !== void 0) $$bindings.getOptionByIndex(getOptionByIndex);
	if ($$props.setFixedPosition === void 0 && $$bindings.setFixedPosition && setFixedPosition !== void 0) $$bindings.setFixedPosition(setFixedPosition);
	if ($$props.hoistMenuToBody === void 0 && $$bindings.hoistMenuToBody && hoistMenuToBody !== void 0) $$bindings.hoistMenuToBody(hoistMenuToBody);
	if ($$props.setIsHoisted === void 0 && $$bindings.setIsHoisted && setIsHoisted !== void 0) $$bindings.setIsHoisted(setIsHoisted);
	if ($$props.setAbsolutePosition === void 0 && $$bindings.setAbsolutePosition && setAbsolutePosition !== void 0) $$bindings.setAbsolutePosition(setAbsolutePosition);
	if ($$props.setAnchorElement === void 0 && $$bindings.setAnchorElement && setAnchorElement !== void 0) $$bindings.setAnchorElement(setAnchorElement);
	if ($$props.getDefaultFoundation === void 0 && $$bindings.getDefaultFoundation && getDefaultFoundation !== void 0) $$bindings.getDefaultFoundation(getDefaultFoundation);
	let $$settled;
	let $$rendered;

	do {
		$$settled = true;

		 {
			if (menu && menu.open !== open) {
				if (isStatic) {
					open = true;
				}

				menu.open = open;
			}
		}

		 {
			if (menu && menu.wrapFocus !== wrapFocus) {
				menu.wrapFocus = wrapFocus;
			}
		}

		 {
			if (menu) {
				menu.quickOpen = quickOpen;
			}
		}

		 {
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

		$$rendered = `${index.validate_component(MenuSurface, "MenuSurface").$$render(
			$$result,
			Object.assign({ use: [forwardEvents, ...use] }, { class: "mdc-menu " + className }, prefixFilter.exclude($$props, ["use", "class", "wrapFocus"]), { element }),
			{
				element: $$value => {
					element = $$value;
					$$settled = false;
				}
			},
			{
				default: () => `${$$slots.default ? $$slots.default({}) : ``}`
			}
		)}`;
	} while (!$$settled);

	return $$rendered;
});

/* node_modules\@smui\common\ClassAdder.svelte generated by Svelte v3.16.4 */

const internals = {
	component: null,
	smuiClass: null,
	contexts: {}
};

const ClassAdder = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { component = internals.component } = $$props;
	let { forwardEvents: smuiForwardEvents = [] } = $$props;
	const smuiClass = internals.class;
	const contexts = internals.contexts;
	const forwardEvents = prefixFilter.forwardEventsBuilder(index.current_component, smuiForwardEvents);

	for (let context in contexts) {
		if (contexts.hasOwnProperty(context)) {
			index.setContext(context, contexts[context]);
		}
	}

	if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
	if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
	if ($$props.component === void 0 && $$bindings.component && component !== void 0) $$bindings.component(component);
	if ($$props.forwardEvents === void 0 && $$bindings.forwardEvents && smuiForwardEvents !== void 0) $$bindings.forwardEvents(smuiForwardEvents);

	return `${index.validate_component(component || index.missing_component, "svelte:component").$$render($$result, Object.assign({ use: [forwardEvents, ...use] }, { class: smuiClass + " " + className }, prefixFilter.exclude($$props, ["use", "class", "component", "forwardEvents"])), {}, {
		default: () => `${$$slots.default ? $$slots.default({}) : ``}`
	})}`;
});

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

const Span = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { use = [] } = $$props;
	if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
	return `<span${index.spread([prefixFilter.exclude($$props, ["use"])])}>${$$slots.default ? $$slots.default({}) : ``}</span>`;
});

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
prefixFilter.styleInject(css$2);

/* node_modules\@smui\list\List.svelte generated by Svelte v3.16.4 */

const List = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
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
	let role = index.getContext("SMUI:list:role");
	let nav = index.getContext("SMUI:list:nav");
	let instantiate = index.getContext("SMUI:list:instantiate");
	let getInstance = index.getContext("SMUI:list:getInstance");
	let addLayoutListener = index.getContext("SMUI:addLayoutListener");
	let removeLayoutListener;
	index.setContext("SMUI:list:nonInteractive", nonInteractive);

	if (!role) {
		if (singleSelection) {
			role = "listbox";
			index.setContext("SMUI:list:item:role", "option");
		} else if (radiolist) {
			role = "radiogroup";
			index.setContext("SMUI:list:item:role", "radio");
		} else if (checklist) {
			role = "group";
			index.setContext("SMUI:list:item:role", "checkbox");
		} else {
			role = "list";
			index.setContext("SMUI:list:item:role", undefined);
		}
	}

	if (addLayoutListener) {
		removeLayoutListener = addLayoutListener(layout);
	}

	index.onMount(async () => {
		if (instantiate !== false) {
			list = new MDCList(element);
		} else {
			list = await getInstance();
		}

		if (singleSelection) {
			list.initializeListType();
			selectedIndex = list.selectedIndex;
		}
	});

	index.onDestroy(() => {
		if (instantiate !== false) {
			list && list.destroy();
		}

		if (removeLayoutListener) {
			removeLayoutListener();
		}
	});

	function layout(...args) {
		return list.layout(...args);
	}

	function setEnabled(...args) {
		return list.setEnabled(...args);
	}

	function getDefaultFoundation(...args) {
		return list.getDefaultFoundation(...args);
	}

	if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
	if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
	if ($$props.nonInteractive === void 0 && $$bindings.nonInteractive && nonInteractive !== void 0) $$bindings.nonInteractive(nonInteractive);
	if ($$props.dense === void 0 && $$bindings.dense && dense !== void 0) $$bindings.dense(dense);
	if ($$props.avatarList === void 0 && $$bindings.avatarList && avatarList !== void 0) $$bindings.avatarList(avatarList);
	if ($$props.twoLine === void 0 && $$bindings.twoLine && twoLine !== void 0) $$bindings.twoLine(twoLine);
	if ($$props.threeLine === void 0 && $$bindings.threeLine && threeLine !== void 0) $$bindings.threeLine(threeLine);
	if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0) $$bindings.vertical(vertical);
	if ($$props.wrapFocus === void 0 && $$bindings.wrapFocus && wrapFocus !== void 0) $$bindings.wrapFocus(wrapFocus);
	if ($$props.singleSelection === void 0 && $$bindings.singleSelection && singleSelection !== void 0) $$bindings.singleSelection(singleSelection);
	if ($$props.selectedIndex === void 0 && $$bindings.selectedIndex && selectedIndex !== void 0) $$bindings.selectedIndex(selectedIndex);
	if ($$props.radiolist === void 0 && $$bindings.radiolist && radiolist !== void 0) $$bindings.radiolist(radiolist);
	if ($$props.checklist === void 0 && $$bindings.checklist && checklist !== void 0) $$bindings.checklist(checklist);
	if ($$props.layout === void 0 && $$bindings.layout && layout !== void 0) $$bindings.layout(layout);
	if ($$props.setEnabled === void 0 && $$bindings.setEnabled && setEnabled !== void 0) $$bindings.setEnabled(setEnabled);
	if ($$props.getDefaultFoundation === void 0 && $$bindings.getDefaultFoundation && getDefaultFoundation !== void 0) $$bindings.getDefaultFoundation(getDefaultFoundation);

	let props = prefixFilter.exclude($$props, [
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
	]);

	 {
		if (list && list.vertical !== vertical) {
			list.vertical = vertical;
		}
	}

	 {
		if (list && list.wrapFocus !== wrapFocus) {
			list.wrapFocus = wrapFocus;
		}
	}

	 {
		if (list && list.singleSelection !== singleSelection) {
			list.singleSelection = singleSelection;
		}
	}

	 {
		if (list && singleSelection && list.selectedIndex !== selectedIndex) {
			list.selectedIndex = selectedIndex;
		}
	}

	return `${nav
	? `<nav${index.spread([
			{
				class: "\n      mdc-list\n      " + index.escape(className) + "\n      " + index.escape(nonInteractive ? "mdc-list--non-interactive" : "") + "\n      " + index.escape(dense ? "mdc-list--dense" : "") + "\n      " + index.escape(avatarList ? "mdc-list--avatar-list" : "") + "\n      " + index.escape(twoLine ? "mdc-list--two-line" : "") + "\n      " + index.escape(threeLine && !twoLine ? "smui-list--three-line" : "") + "\n    "
			},
			props
		])}${index.add_attribute("this", element, 1)}>${$$slots.default ? $$slots.default({}) : ``}</nav>`
	: `<ul${index.spread([
			{
				class: "\n      mdc-list\n      " + index.escape(className) + "\n      " + index.escape(nonInteractive ? "mdc-list--non-interactive" : "") + "\n      " + index.escape(dense ? "mdc-list--dense" : "") + "\n      " + index.escape(avatarList ? "mdc-list--avatar-list" : "") + "\n      " + index.escape(twoLine ? "mdc-list--two-line" : "") + "\n      " + index.escape(threeLine && !twoLine ? "smui-list--three-line" : "") + "\n    "
			},
			{ role: index.escape(role) },
			props
		])}${index.add_attribute("this", element, 1)}>${$$slots.default ? $$slots.default({}) : ``}</ul>`}`;
});

/* node_modules\@smui\list\Item.svelte generated by Svelte v3.16.4 */
let counter = 0;

const Item = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	const dispatch = index.createEventDispatcher();
	let checked = false;
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { ripple = true } = $$props;
	let { color = null } = $$props;
	let { nonInteractive = index.getContext("SMUI:list:nonInteractive") } = $$props;
	let { activated = false } = $$props;
	let { role = index.getContext("SMUI:list:item:role") } = $$props;
	let { selected = false } = $$props;
	let { disabled = false } = $$props;
	let { tabindex = !nonInteractive && !disabled && (selected || checked) && "0" || "-1" } = $$props;
	let { href = false } = $$props;
	let { inputId = "SMUI-form-field-list-" + counter++ } = $$props;
	let element;
	let addTabindexIfNoItemsSelectedRaf;
	let nav = index.getContext("SMUI:list:item:nav");
	index.setContext("SMUI:generic:input:props", { id: inputId });
	index.setContext("SMUI:generic:input:setChecked", setChecked);

	index.onMount(() => {
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

	index.onDestroy(() => {
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
			tabindex = "0";
		}
	}

	function setChecked(isChecked) {
		checked = isChecked;
		tabindex = !nonInteractive && !disabled && (selected || checked) && "0" || "-1";
	}

	if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
	if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
	if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0) $$bindings.ripple(ripple);
	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	if ($$props.nonInteractive === void 0 && $$bindings.nonInteractive && nonInteractive !== void 0) $$bindings.nonInteractive(nonInteractive);
	if ($$props.activated === void 0 && $$bindings.activated && activated !== void 0) $$bindings.activated(activated);
	if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
	if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0) $$bindings.selected(selected);
	if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
	if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0) $$bindings.tabindex(tabindex);
	if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
	if ($$props.inputId === void 0 && $$bindings.inputId && inputId !== void 0) $$bindings.inputId(inputId);

	let props = prefixFilter.exclude($$props, [
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
	]);

	return `${nav && href
	? `<a${index.spread([
			{ href: index.escape(href) },
			props,
			{
				class: "\n      mdc-list-item\n      " + index.escape(className) + "\n      " + index.escape(activated ? "mdc-list-item--activated" : "") + "\n      " + index.escape(selected ? "mdc-list-item--selected" : "") + "\n      " + index.escape(disabled ? "mdc-list-item--disabled" : "") + "\n    "
			},
			activated ? { "aria-current": "page" } : {},
			{ tabindex: index.escape(tabindex) }
		])}${index.add_attribute("this", element, 1)}>${$$slots.default ? $$slots.default({}) : ``}</a>`
	: `${nav && !href
		? `<span${index.spread([
				{
					class: "\n      mdc-list-item\n      " + index.escape(className) + "\n      " + index.escape(activated ? "mdc-list-item--activated" : "") + "\n      " + index.escape(selected ? "mdc-list-item--selected" : "") + "\n      " + index.escape(disabled ? "mdc-list-item--disabled" : "") + "\n    "
				},
				activated ? { "aria-current": "page" } : {},
				{ tabindex: index.escape(tabindex) },
				props
			])}${index.add_attribute("this", element, 1)}>${$$slots.default ? $$slots.default({}) : ``}</span>`
		: `<li${index.spread([
				role === "option"
				? {
						"aria-selected": selected ? "true" : "false"
					}
				: {},
				props,
				{
					class: "\n      mdc-list-item\n      " + index.escape(className) + "\n      " + index.escape(activated ? "mdc-list-item--activated" : "") + "\n      " + index.escape(selected ? "mdc-list-item--selected" : "") + "\n      " + index.escape(disabled ? "mdc-list-item--disabled" : "") + "\n      " + index.escape(role === "menuitem" && selected
					? "mdc-menu-item--selected"
					: "") + "\n    "
				},
				{ role: index.escape(role) },
				role === "radio" || role === "checkbox"
				? {
						"aria-checked": checked ? "true" : "false"
					}
				: {},
				{ tabindex: index.escape(tabindex) }
			])}${index.add_attribute("this", element, 1)}>${$$slots.default ? $$slots.default({}) : ``}</li>`}`}`;
});

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

const Div = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { use = [] } = $$props;
	if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
	return `<div${index.spread([prefixFilter.exclude($$props, ["use"])])}>${$$slots.default ? $$slots.default({}) : ``}</div>`;
});

classAdderBuilder({
  class: 'mdc-list-group',
  component: Div,
  contexts: {}
});

/* node_modules\@smui\common\H3.svelte generated by Svelte v3.16.4 */

const H3 = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { use = [] } = $$props;
	if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
	return `<h3${index.spread([prefixFilter.exclude($$props, ["use"])])}>${$$slots.default ? $$slots.default({}) : ``}</h3>`;
});

classAdderBuilder({
  class: 'mdc-list-group__subheader',
  component: H3,
  contexts: {}
});

/* node_modules\@smui\list\Separator.svelte generated by Svelte v3.16.4 */

const Separator = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { group = false } = $$props;
	let { nav = false } = $$props;
	let { padded = false } = $$props;
	let { inset = false } = $$props;
	if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
	if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
	if ($$props.group === void 0 && $$bindings.group && group !== void 0) $$bindings.group(group);
	if ($$props.nav === void 0 && $$bindings.nav && nav !== void 0) $$bindings.nav(nav);
	if ($$props.padded === void 0 && $$bindings.padded && padded !== void 0) $$bindings.padded(padded);
	if ($$props.inset === void 0 && $$bindings.inset && inset !== void 0) $$bindings.inset(inset);
	let props = prefixFilter.exclude($$props, ["use", "class", "group", "nav", "padded", "inset"]);

	return `${group || nav
	? `<hr${index.spread([
			{
				class: "\n      mdc-list-divider\n      " + index.escape(className) + "\n      " + index.escape(padded ? "mdc-list-divider--padded" : "") + "\n      " + index.escape(inset ? "mdc-list-divider--inset" : "") + "\n    "
			},
			props
		])}>`
	: `<li${index.spread([
			{
				class: "\n      mdc-list-divider\n      " + index.escape(className) + "\n      " + index.escape(padded ? "mdc-list-divider--padded" : "") + "\n      " + index.escape(inset ? "mdc-list-divider--inset" : "") + "\n    "
			},
			{ role: "separator" },
			props
		])}></li>`}`;
});

/* src\routes\ComponentPages\ButtonPage.svelte generated by Svelte v3.16.4 */

const css$3 = {
	code: ".svelte-1aw35an .myClass{text-decoration:underline !important}.svelte-1aw35an .mdc-button, .smui-button__group{margin-bottom:0.4em}.svelte-1aw35an .smui-button__group .mdc-button{margin-bottom:0}",
	map: "{\"version\":3,\"file\":\"ButtonPage.svelte\",\"sources\":[\"ButtonPage.svelte\"],\"sourcesContent\":[\"<script>\\r\\n  import Button, { Group, GroupItem, Label, Icon } from \\\"@smui/button\\\";\\r\\n  import Menu from \\\"@smui/menu\\\";\\r\\n  import List, { Item, Separator, Text } from \\\"@smui/list\\\";\\r\\n  import Page from \\\"./Page.svelte\\\";\\r\\n  import Example from \\\"./Example.svelte\\\";\\r\\n\\r\\n  let clicked = 0;\\r\\n  let menu;\\r\\n  let menu2;\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n  * :global(.myClass) {\\r\\n    text-decoration: underline !important;\\r\\n  }\\r\\n\\r\\n  * :global(.mdc-button, .smui-button__group) {\\r\\n    margin-bottom: 0.4em;\\r\\n  }\\r\\n\\r\\n  * :global(.smui-button__group .mdc-button) {\\r\\n    margin-bottom: 0;\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<Page>\\r\\n  <span slot=\\\"header\\\">Button</span>\\r\\n  <span slot=\\\"description\\\">\\r\\n    Buttons allow users to take actions, and make choices, with a single tap.\\r\\n  </span>\\r\\n  <span slot=\\\"import\\\">\\r\\n    import Radio from \\\"@smui/radio\\\";\\r\\n    <br />\\r\\n    import FormField from \\\"@smui/form-field\\\";\\r\\n  </span>\\r\\n  <div slot=\\\"content\\\">\\r\\n    <Example>\\r\\n      <span slot=\\\"header\\\">Contained Buttons</span>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Button on:click={() => clicked++} variant=\\\"unelevated\\\">\\r\\n          <Label>PRIMARY</Label>\\r\\n        </Button>\\r\\n      </div>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Button\\r\\n          color=\\\"secondary\\\"\\r\\n          on:click={() => clicked++}\\r\\n          variant=\\\"unelevated\\\">\\r\\n          <Label>SECONDARY</Label>\\r\\n        </Button>\\r\\n      </div>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Button on:click={() => clicked++} variant=\\\"raised\\\">\\r\\n          <Label>RAISED</Label>\\r\\n        </Button>\\r\\n      </div>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Button color=\\\"secondary\\\" on:click={() => clicked++} variant=\\\"raised\\\">\\r\\n          <Label>RAISED</Label>\\r\\n        </Button>\\r\\n      </div>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Button on:click={() => clicked++} variant=\\\"unelevated\\\" disabled>\\r\\n          <Label>Disabled</Label>\\r\\n        </Button>\\r\\n      </div>\\r\\n    </Example>\\r\\n    <Example>\\r\\n      <span slot=\\\"header\\\">Outlined Buttons</span>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Button on:click={() => clicked++} variant=\\\"outlined\\\">\\r\\n          <Label>Outlined</Label>\\r\\n        </Button>\\r\\n      </div>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Button color=\\\"secondary\\\" on:click={() => clicked++} variant=\\\"outlined\\\">\\r\\n          <Label>Outlined</Label>\\r\\n        </Button>\\r\\n      </div>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Button on:click={() => clicked++} variant=\\\"outlined\\\" disabled>\\r\\n          <Label>Disabled</Label>\\r\\n        </Button>\\r\\n      </div>\\r\\n    </Example>\\r\\n    <Example>\\r\\n      <span slot=\\\"header\\\">Text Buttons</span>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Button on:click={() => clicked++}>\\r\\n          <Label>Default</Label>\\r\\n        </Button>\\r\\n      </div>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Button color=\\\"secondary\\\" on:click={() => clicked++}>\\r\\n          <Label>Default</Label>\\r\\n        </Button>\\r\\n      </div>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Button on:click={() => clicked++} disabled>\\r\\n          <Label>Disabled</Label>\\r\\n        </Button>\\r\\n      </div>\\r\\n    </Example>\\r\\n    <Example>\\r\\n      <span slot=\\\"header\\\">Buttons with icons</span>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Button on:click={() => clicked++} variant=\\\"unelevated\\\">\\r\\n          <Label>Unelevated</Label>\\r\\n          <Icon class=\\\"material-icons\\\">favorite</Icon>\\r\\n        </Button>\\r\\n      </div>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Button on:click={() => clicked++} variant=\\\"unelevated\\\">\\r\\n          <Icon class=\\\"material-icons\\\">favorite</Icon>\\r\\n          <Label>Unelevated</Label>\\r\\n        </Button>\\r\\n      </div>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Button on:click={() => clicked++} variant=\\\"raised\\\">\\r\\n          <Label>Raised</Label>\\r\\n          <Icon class=\\\"material-icons\\\">favorite</Icon>\\r\\n        </Button>\\r\\n      </div>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Button on:click={() => clicked++} variant=\\\"raised\\\">\\r\\n          <Icon class=\\\"material-icons\\\">favorite</Icon>\\r\\n          <Label>Raised</Label>\\r\\n        </Button>\\r\\n      </div>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Button on:click={() => clicked++} variant=\\\"outlined\\\">\\r\\n          <Icon class=\\\"material-icons\\\">favorite</Icon>\\r\\n          <Label>Outlined</Label>\\r\\n        </Button>\\r\\n      </div>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Button on:click={() => clicked++} variant=\\\"outlined\\\">\\r\\n          <Label>Outlined</Label>\\r\\n          <Icon class=\\\"material-icons\\\">favorite</Icon>\\r\\n        </Button>\\r\\n      </div>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Button on:click={() => clicked++}>\\r\\n          <Icon class=\\\"material-icons\\\">favorite</Icon>\\r\\n          <Label>Leading Icon</Label>\\r\\n        </Button>\\r\\n      </div>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Button on:click={() => clicked++}>\\r\\n          <Label>Trailing Icon</Label>\\r\\n          <Icon class=\\\"material-icons\\\">favorite</Icon>\\r\\n        </Button>\\r\\n      </div>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Button color=\\\"secondary\\\" on:click={() => clicked++}>\\r\\n          <Icon class=\\\"material-icons\\\">favorite</Icon>\\r\\n          <Label>Leading Icon</Label>\\r\\n        </Button>\\r\\n      </div>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Button color=\\\"secondary\\\" on:click={() => clicked++}>\\r\\n          <Label>Trailing Icon</Label>\\r\\n          <Icon class=\\\"material-icons\\\">favorite</Icon>\\r\\n        </Button>\\r\\n      </div>\\r\\n    </Example>\\r\\n    <Example>\\r\\n      <span slot=\\\"header\\\">Variations</span>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Button on:click={() => clicked++} ripple={false}>\\r\\n          <Label>No Ripple</Label>\\r\\n        </Button>\\r\\n      </div>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Button color=\\\"secondary\\\" on:click={() => clicked++} ripple={false}>\\r\\n          <Label>No Ripple</Label>\\r\\n        </Button>\\r\\n      </div>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Button on:click={() => clicked++} dense>\\r\\n          <Label>Dense</Label>\\r\\n        </Button>\\r\\n      </div>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Button color=\\\"secondary\\\" on:click={() => clicked++} dense>\\r\\n          <Label>Dense</Label>\\r\\n        </Button>\\r\\n      </div>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Button on:click={() => clicked++} class=\\\"myClass\\\">\\r\\n          <Label>With a Class</Label>\\r\\n        </Button>\\r\\n      </div>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Button color=\\\"secondary\\\" on:click={() => clicked++} class=\\\"myClass\\\">\\r\\n          <Label>With a Class</Label>\\r\\n        </Button>\\r\\n      </div>\\r\\n    </Example>\\r\\n    <Example>\\r\\n      <span slot=\\\"header\\\">Button groups</span>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Group variant=\\\"unelevated\\\">\\r\\n          <Button on:click={() => clicked++} variant=\\\"unelevated\\\">\\r\\n            <Label>One</Label>\\r\\n          </Button>\\r\\n          <Button on:click={() => clicked++} variant=\\\"unelevated\\\">\\r\\n            <Label>Two</Label>\\r\\n          </Button>\\r\\n          <Button on:click={() => clicked++} variant=\\\"unelevated\\\">\\r\\n            <Label>Three</Label>\\r\\n          </Button>\\r\\n        </Group>\\r\\n      </div>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Group variant=\\\"raised\\\">\\r\\n          <Button on:click={() => clicked++} variant=\\\"raised\\\">\\r\\n            <Label>One</Label>\\r\\n          </Button>\\r\\n          <Button on:click={() => clicked++} variant=\\\"raised\\\">\\r\\n            <Label>Two</Label>\\r\\n          </Button>\\r\\n          <Button on:click={() => clicked++} variant=\\\"raised\\\">\\r\\n            <Label>Three</Label>\\r\\n          </Button>\\r\\n        </Group>\\r\\n      </div>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Group variant=\\\"outlined\\\">\\r\\n          <Button on:click={() => clicked++} variant=\\\"outlined\\\">\\r\\n            <Label>One</Label>\\r\\n          </Button>\\r\\n          <Button on:click={() => clicked++} variant=\\\"outlined\\\">\\r\\n            <Label>Two</Label>\\r\\n          </Button>\\r\\n          <Button on:click={() => clicked++} variant=\\\"outlined\\\">\\r\\n            <Label>Three</Label>\\r\\n          </Button>\\r\\n        </Group>\\r\\n      </div>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Group>\\r\\n          <Button on:click={() => clicked++}>\\r\\n            <Label>One</Label>\\r\\n          </Button>\\r\\n          <Button on:click={() => clicked++}>\\r\\n            <Label>Two</Label>\\r\\n          </Button>\\r\\n          <Button on:click={() => clicked++}>\\r\\n            <Label>Three</Label>\\r\\n          </Button>\\r\\n        </Group>\\r\\n      </div>\\r\\n    </Example>\\r\\n    <Example>\\r\\n      <span slot=\\\"header\\\">Block button</span>\\r\\n      <div slot=\\\"vertical\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Button on:click={() => clicked++} variant=\\\"unelevated\\\" class=\\\"w-full\\\">\\r\\n          <Label>BLOCK BUTTON</Label>\\r\\n        </Button>\\r\\n      </div>\\r\\n      <div slot=\\\"vertical\\\" class=\\\"mr-8 mb-8 w-full\\\">\\r\\n        <Group variant=\\\"outlined\\\" style=\\\"display: flex;\\\">\\r\\n          <Button\\r\\n            on:click={() => clicked++}\\r\\n            variant=\\\"unelevated\\\"\\r\\n            color=\\\"primary\\\"\\r\\n            style=\\\"flex-grow: 3;\\\">\\r\\n            <Label>Primary</Label>\\r\\n          </Button>\\r\\n          <Button\\r\\n            on:click={() => clicked++}\\r\\n            variant=\\\"unelevated\\\"\\r\\n            color=\\\"secondary\\\"\\r\\n            style=\\\"flex-grow: 1;\\\">\\r\\n            <Label>Secondary</Label>\\r\\n          </Button>\\r\\n          <Button\\r\\n            on:click={() => clicked++}\\r\\n            variant=\\\"unelevated\\\"\\r\\n            color=\\\"secondary\\\"\\r\\n            style=\\\"flex-grow: 1;\\\">\\r\\n            <Label>Secondary</Label>\\r\\n          </Button>\\r\\n        </Group>\\r\\n      </div>\\r\\n    </Example>\\r\\n    <Example>\\r\\n      <span slot=\\\"header\\\">Split buttons using a button group</span>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Group variant=\\\"raised\\\">\\r\\n          <Button on:click={() => clicked++} variant=\\\"raised\\\">\\r\\n            <Label>Do the thing</Label>\\r\\n          </Button>\\r\\n          <div use:GroupItem>\\r\\n            <Button\\r\\n              on:click={() => menu.setOpen(true)}\\r\\n              variant=\\\"raised\\\"\\r\\n              style=\\\"padding: 0; min-width: 36px;\\\">\\r\\n              <Icon class=\\\"material-icons\\\" style=\\\"margin: 0;\\\">\\r\\n                arrow_drop_down\\r\\n              </Icon>\\r\\n            </Button>\\r\\n            <Menu bind:this={menu} anchorCorner=\\\"TOP_LEFT\\\">\\r\\n              <List>\\r\\n                <Item on:SMUI:action={() => clicked++}>\\r\\n                  <Text>Thing 1</Text>\\r\\n                </Item>\\r\\n                <Item on:SMUI:action={() => clicked++}>\\r\\n                  <Text>Thing 2</Text>\\r\\n                </Item>\\r\\n                <Separator />\\r\\n                <Item on:SMUI:action={() => clicked++}>\\r\\n                  <Text>Thing 3</Text>\\r\\n                </Item>\\r\\n              </List>\\r\\n            </Menu>\\r\\n          </div>\\r\\n        </Group>\\r\\n      </div>\\r\\n      <div slot=\\\"horizontal\\\" class=\\\"mr-8 mb-8\\\">\\r\\n        <Group variant=\\\"outlined\\\">\\r\\n          <Button on:click={() => clicked++} variant=\\\"outlined\\\">\\r\\n            <Label>Do the thing</Label>\\r\\n          </Button>\\r\\n          <div use:GroupItem>\\r\\n            <Button\\r\\n              on:click={() => menu2.setOpen(true)}\\r\\n              variant=\\\"outlined\\\"\\r\\n              style=\\\"padding: 0; min-width: 36px;\\\">\\r\\n              <Icon class=\\\"material-icons\\\" style=\\\"margin: 0;\\\">\\r\\n                arrow_drop_down\\r\\n              </Icon>\\r\\n            </Button>\\r\\n            <Menu bind:this={menu2} anchorCorner=\\\"TOP_LEFT\\\">\\r\\n              <List>\\r\\n                <Item on:SMUI:action={() => clicked++}>\\r\\n                  <Text>Thing 1</Text>\\r\\n                </Item>\\r\\n                <Item on:SMUI:action={() => clicked++}>\\r\\n                  <Text>Thing 2</Text>\\r\\n                </Item>\\r\\n                <Separator />\\r\\n                <Item on:SMUI:action={() => clicked++}>\\r\\n                  <Text>Thing 3</Text>\\r\\n                </Item>\\r\\n              </List>\\r\\n            </Menu>\\r\\n          </div>\\r\\n        </Group>\\r\\n      </div>\\r\\n    </Example>\\r\\n  </div>\\r\\n</Page>\\r\\n\"],\"names\":[],\"mappings\":\"AAaE,eAAC,CAAC,AAAQ,QAAQ,AAAE,CAAC,AACnB,eAAe,CAAE,SAAS,CAAC,UAAU,AACvC,CAAC,AAED,eAAC,CAAC,AAAQ,gCAAgC,AAAE,CAAC,AAC3C,aAAa,CAAE,KAAK,AACtB,CAAC,AAED,eAAC,CAAC,AAAQ,+BAA+B,AAAE,CAAC,AAC1C,aAAa,CAAE,CAAC,AAClB,CAAC\"}"
};

const ButtonPage = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let menu2;
	$$result.css.add(css$3);
	let $$settled;
	let $$rendered;

	do {
		$$settled = true;

		$$rendered = `${index.validate_component(Page.default, "Page").$$render($$result, {}, {}, {
			header: () => `<span slot="${"header"}" class="${"svelte-1aw35an"}">Button</span>`,
			description: () => `<span slot="${"description"}" class="${"svelte-1aw35an"}">
    Buttons allow users to take actions, and make choices, with a single tap.
  </span>`,
			import: () => `<span slot="${"import"}" class="${"svelte-1aw35an"}">
    import Radio from &quot;@smui/radio&quot;;
    <br class="${"svelte-1aw35an"}">
    import FormField from &quot;@smui/form-field&quot;;
  </span>`,
			content: () => `<div slot="${"content"}" class="${"svelte-1aw35an"}">
    ${index.validate_component(Example.default, "Example").$$render($$result, {}, {}, {
				header: () => `<span slot="${"header"}" class="${"svelte-1aw35an"}">Contained Buttons</span>`,
				horizontal: () => `<div slot="${"horizontal"}" class="${"mr-8 mb-8 svelte-1aw35an"}">
        ${index.validate_component(Button, "Button").$$render($$result, { variant: "unelevated", disabled: true }, {}, {
					default: () => `
          ${index.validate_component(Label, "Label").$$render($$result, {}, {}, { default: () => `Disabled` })}
        `
				})}
      </div>`,
				default: () => `
      
      
      
      
      
      
    `
			})}
    ${index.validate_component(Example.default, "Example").$$render($$result, {}, {}, {
				header: () => `<span slot="${"header"}" class="${"svelte-1aw35an"}">Outlined Buttons</span>`,
				horizontal: () => `<div slot="${"horizontal"}" class="${"mr-8 mb-8 svelte-1aw35an"}">
        ${index.validate_component(Button, "Button").$$render($$result, { variant: "outlined", disabled: true }, {}, {
					default: () => `
          ${index.validate_component(Label, "Label").$$render($$result, {}, {}, { default: () => `Disabled` })}
        `
				})}
      </div>`,
				default: () => `
      
      
      
      
    `
			})}
    ${index.validate_component(Example.default, "Example").$$render($$result, {}, {}, {
				header: () => `<span slot="${"header"}" class="${"svelte-1aw35an"}">Text Buttons</span>`,
				horizontal: () => `<div slot="${"horizontal"}" class="${"mr-8 mb-8 svelte-1aw35an"}">
        ${index.validate_component(Button, "Button").$$render($$result, { disabled: true }, {}, {
					default: () => `
          ${index.validate_component(Label, "Label").$$render($$result, {}, {}, { default: () => `Disabled` })}
        `
				})}
      </div>`,
				default: () => `
      
      
      
      
    `
			})}
    ${index.validate_component(Example.default, "Example").$$render($$result, {}, {}, {
				header: () => `<span slot="${"header"}" class="${"svelte-1aw35an"}">Buttons with icons</span>`,
				horizontal: () => `<div slot="${"horizontal"}" class="${"mr-8 mb-8 svelte-1aw35an"}">
        ${index.validate_component(Button, "Button").$$render($$result, { color: "secondary" }, {}, {
					default: () => `
          ${index.validate_component(Label, "Label").$$render($$result, {}, {}, { default: () => `Trailing Icon` })}
          ${index.validate_component(Icon, "Icon").$$render($$result, { class: "material-icons" }, {}, { default: () => `favorite` })}
        `
				})}
      </div>`,
				default: () => `
      
      
      
      
      
      
      
      
      
      
      
    `
			})}
    ${index.validate_component(Example.default, "Example").$$render($$result, {}, {}, {
				header: () => `<span slot="${"header"}" class="${"svelte-1aw35an"}">Variations</span>`,
				horizontal: () => `<div slot="${"horizontal"}" class="${"mr-8 mb-8 svelte-1aw35an"}">
        ${index.validate_component(Button, "Button").$$render($$result, { color: "secondary", class: "myClass" }, {}, {
					default: () => `
          ${index.validate_component(Label, "Label").$$render($$result, {}, {}, { default: () => `With a Class` })}
        `
				})}
      </div>`,
				default: () => `
      
      
      
      
      
      
      
    `
			})}
    ${index.validate_component(Example.default, "Example").$$render($$result, {}, {}, {
				header: () => `<span slot="${"header"}" class="${"svelte-1aw35an"}">Button groups</span>`,
				horizontal: () => `<div slot="${"horizontal"}" class="${"mr-8 mb-8 svelte-1aw35an"}">
        ${index.validate_component(Group, "Group").$$render($$result, {}, {}, {
					default: () => `
          ${index.validate_component(Button, "Button").$$render($$result, {}, {}, {
						default: () => `
            ${index.validate_component(Label, "Label").$$render($$result, {}, {}, { default: () => `One` })}
          `
					})}
          ${index.validate_component(Button, "Button").$$render($$result, {}, {}, {
						default: () => `
            ${index.validate_component(Label, "Label").$$render($$result, {}, {}, { default: () => `Two` })}
          `
					})}
          ${index.validate_component(Button, "Button").$$render($$result, {}, {}, {
						default: () => `
            ${index.validate_component(Label, "Label").$$render($$result, {}, {}, { default: () => `Three` })}
          `
					})}
        `
				})}
      </div>`,
				default: () => `
      
      
      
      
      
    `
			})}
    ${index.validate_component(Example.default, "Example").$$render($$result, {}, {}, {
				header: () => `<span slot="${"header"}" class="${"svelte-1aw35an"}">Block button</span>`,
				vertical: () => `<div slot="${"vertical"}" class="${"mr-8 mb-8 w-full svelte-1aw35an"}">
        ${index.validate_component(Group, "Group").$$render(
					$$result,
					{
						variant: "outlined",
						style: "display: flex;"
					},
					{},
					{
						default: () => `
          ${index.validate_component(Button, "Button").$$render(
							$$result,
							{
								variant: "unelevated",
								color: "primary",
								style: "flex-grow: 3;"
							},
							{},
							{
								default: () => `
            ${index.validate_component(Label, "Label").$$render($$result, {}, {}, { default: () => `Primary` })}
          `
							}
						)}
          ${index.validate_component(Button, "Button").$$render(
							$$result,
							{
								variant: "unelevated",
								color: "secondary",
								style: "flex-grow: 1;"
							},
							{},
							{
								default: () => `
            ${index.validate_component(Label, "Label").$$render($$result, {}, {}, { default: () => `Secondary` })}
          `
							}
						)}
          ${index.validate_component(Button, "Button").$$render(
							$$result,
							{
								variant: "unelevated",
								color: "secondary",
								style: "flex-grow: 1;"
							},
							{},
							{
								default: () => `
            ${index.validate_component(Label, "Label").$$render($$result, {}, {}, { default: () => `Secondary` })}
          `
							}
						)}
        `
					}
				)}
      </div>`,
				default: () => `
      
      
      
    `
			})}
    ${index.validate_component(Example.default, "Example").$$render($$result, {}, {}, {
				header: () => `<span slot="${"header"}" class="${"svelte-1aw35an"}">Split buttons using a button group</span>`,
				horizontal: () => `<div slot="${"horizontal"}" class="${"mr-8 mb-8 svelte-1aw35an"}">
        ${index.validate_component(Group, "Group").$$render($$result, { variant: "outlined" }, {}, {
					default: () => `
          ${index.validate_component(Button, "Button").$$render($$result, { variant: "outlined" }, {}, {
						default: () => `
            ${index.validate_component(Label, "Label").$$render($$result, {}, {}, { default: () => `Do the thing` })}
          `
					})}
          <div class="${"svelte-1aw35an"}">
            ${index.validate_component(Button, "Button").$$render(
						$$result,
						{
							variant: "outlined",
							style: "padding: 0; min-width: 36px;"
						},
						{},
						{
							default: () => `
              ${index.validate_component(Icon, "Icon").$$render(
								$$result,
								{
									class: "material-icons",
									style: "margin: 0;"
								},
								{},
								{
									default: () => `
                arrow_drop_down
              `
								}
							)}
            `
						}
					)}
            ${index.validate_component(Menu, "Menu").$$render(
						$$result,
						{ anchorCorner: "TOP_LEFT", this: menu2 },
						{
							this: $$value => {
								menu2 = $$value;
								$$settled = false;
							}
						},
						{
							default: () => `
              ${index.validate_component(List, "List").$$render($$result, {}, {}, {
								default: () => `
                ${index.validate_component(Item, "Item").$$render($$result, {}, {}, {
									default: () => `
                  ${index.validate_component(Text, "Text").$$render($$result, {}, {}, { default: () => `Thing 1` })}
                `
								})}
                ${index.validate_component(Item, "Item").$$render($$result, {}, {}, {
									default: () => `
                  ${index.validate_component(Text, "Text").$$render($$result, {}, {}, { default: () => `Thing 2` })}
                `
								})}
                ${index.validate_component(Separator, "Separator").$$render($$result, {}, {}, {})}
                ${index.validate_component(Item, "Item").$$render($$result, {}, {}, {
									default: () => `
                  ${index.validate_component(Text, "Text").$$render($$result, {}, {}, { default: () => `Thing 3` })}
                `
								})}
              `
							})}
            `
						}
					)}
          </div>
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

exports.Div = Div;
exports.Item = Item;
exports.List = List;
exports.MDCList = MDCList;
exports.MDCListFoundation = MDCListFoundation;
exports.Span = Span;
exports.Text = Text;
exports.classAdderBuilder = classAdderBuilder;
exports.component_2 = ButtonPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uUGFnZS05NDAwMWQwMS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL2J1dHRvbi9CdXR0b24uc3ZlbHRlIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL2J1dHRvbi9Hcm91cC5zdmVsdGUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL0xhYmVsLnN2ZWx0ZSIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vSWNvbi5zdmVsdGUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL21lbnUtc3VyZmFjZS9jb25zdGFudHMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2xpc3QvY29uc3RhbnRzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9saXN0L2ZvdW5kYXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2xpc3QvY29tcG9uZW50LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9tZW51LXN1cmZhY2UvZm91bmRhdGlvbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbWVudS1zdXJmYWNlL3V0aWwuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL21lbnUtc3VyZmFjZS9jb21wb25lbnQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL21lbnUvY29uc3RhbnRzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9tZW51L2ZvdW5kYXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL21lbnUvY29tcG9uZW50LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL21lbnUtc3VyZmFjZS9NZW51U3VyZmFjZS5zdmVsdGUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNtdWkvbWVudS9NZW51LnN2ZWx0ZSIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vQ2xhc3NBZGRlci5zdmVsdGUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL2NsYXNzQWRkZXJCdWlsZGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9TcGFuLnN2ZWx0ZSIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS9saXN0L0dyYXBoaWMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNtdWkvbWVudS9TZWxlY3Rpb25Hcm91cEljb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNtdWkvbGlzdC9MaXN0LnN2ZWx0ZSIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS9saXN0L0l0ZW0uc3ZlbHRlIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL2xpc3QvVGV4dC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS9saXN0L1ByaW1hcnlUZXh0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL2xpc3QvU2Vjb25kYXJ5VGV4dC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS9saXN0L01ldGEuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL0Rpdi5zdmVsdGUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNtdWkvbGlzdC9Hcm91cC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vSDMuc3ZlbHRlIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL2xpc3QvU3ViaGVhZGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL2xpc3QvU2VwYXJhdG9yLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvQ29tcG9uZW50UGFnZXMvQnV0dG9uUGFnZS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsieyNpZiBocmVmfVxuICA8YVxuICAgIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gICAgdXNlOmZvcndhcmRFdmVudHNcbiAgICBjbGFzcz1cIlxuICAgICAgbWRjLWJ1dHRvblxuICAgICAge2NsYXNzTmFtZX1cbiAgICAgIHt2YXJpYW50ID09PSAncmFpc2VkJyA/ICdtZGMtYnV0dG9uLS1yYWlzZWQnIDogJyd9XG4gICAgICB7dmFyaWFudCA9PT0gJ3VuZWxldmF0ZWQnID8gJ21kYy1idXR0b24tLXVuZWxldmF0ZWQnIDogJyd9XG4gICAgICB7dmFyaWFudCA9PT0gJ291dGxpbmVkJyA/ICdtZGMtYnV0dG9uLS1vdXRsaW5lZCcgOiAnJ31cbiAgICAgIHtkZW5zZSA/ICdtZGMtYnV0dG9uLS1kZW5zZScgOiAnJ31cbiAgICAgIHtjb2xvciA9PT0gJ3NlY29uZGFyeScgPyAnc211aS1idXR0b24tLWNvbG9yLXNlY29uZGFyeScgOiAnJ31cbiAgICAgIHtjb250ZXh0ID09PSAnY2FyZDphY3Rpb24nID8gJ21kYy1jYXJkX19hY3Rpb24nIDogJyd9XG4gICAgICB7Y29udGV4dCA9PT0gJ2NhcmQ6YWN0aW9uJyA/ICdtZGMtY2FyZF9fYWN0aW9uLS1idXR0b24nIDogJyd9XG4gICAgICB7Y29udGV4dCA9PT0gJ2RpYWxvZzphY3Rpb24nID8gJ21kYy1kaWFsb2dfX2J1dHRvbicgOiAnJ31cbiAgICAgIHtjb250ZXh0ID09PSAndG9wLWFwcC1iYXI6bmF2aWdhdGlvbicgPyAnbWRjLXRvcC1hcHAtYmFyX19uYXZpZ2F0aW9uLWljb24nIDogJyd9XG4gICAgICB7Y29udGV4dCA9PT0gJ3RvcC1hcHAtYmFyOmFjdGlvbicgPyAnbWRjLXRvcC1hcHAtYmFyX19hY3Rpb24taXRlbScgOiAnJ31cbiAgICAgIHtjb250ZXh0ID09PSAnc25hY2tiYXInID8gJ21kYy1zbmFja2Jhcl9fYWN0aW9uJyA6ICcnfVxuICAgIFwiXG4gICAgdXNlOlJpcHBsZT17W3JpcHBsZSwge3VuYm91bmRlZDogZmFsc2V9XX1cbiAgICB7aHJlZn1cbiAgICB7Li4uYWN0aW9uUHJvcH1cbiAgICB7Li4uZGVmYXVsdFByb3B9XG4gICAgey4uLnByb3BzfVxuICA+PHNsb3Q+PC9zbG90PjwvYT5cbns6ZWxzZX1cbiAgPGJ1dHRvblxuICAgIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gICAgdXNlOmZvcndhcmRFdmVudHNcbiAgICBjbGFzcz1cIlxuICAgICAgbWRjLWJ1dHRvblxuICAgICAge2NsYXNzTmFtZX1cbiAgICAgIHt2YXJpYW50ID09PSAncmFpc2VkJyA/ICdtZGMtYnV0dG9uLS1yYWlzZWQnIDogJyd9XG4gICAgICB7dmFyaWFudCA9PT0gJ3VuZWxldmF0ZWQnID8gJ21kYy1idXR0b24tLXVuZWxldmF0ZWQnIDogJyd9XG4gICAgICB7dmFyaWFudCA9PT0gJ291dGxpbmVkJyA/ICdtZGMtYnV0dG9uLS1vdXRsaW5lZCcgOiAnJ31cbiAgICAgIHtkZW5zZSA/ICdtZGMtYnV0dG9uLS1kZW5zZScgOiAnJ31cbiAgICAgIHtjb2xvciA9PT0gJ3NlY29uZGFyeScgPyAnc211aS1idXR0b24tLWNvbG9yLXNlY29uZGFyeScgOiAnJ31cbiAgICAgIHtjb250ZXh0ID09PSAnY2FyZDphY3Rpb24nID8gJ21kYy1jYXJkX19hY3Rpb24nIDogJyd9XG4gICAgICB7Y29udGV4dCA9PT0gJ2NhcmQ6YWN0aW9uJyA/ICdtZGMtY2FyZF9fYWN0aW9uLS1idXR0b24nIDogJyd9XG4gICAgICB7Y29udGV4dCA9PT0gJ2RpYWxvZzphY3Rpb24nID8gJ21kYy1kaWFsb2dfX2J1dHRvbicgOiAnJ31cbiAgICAgIHtjb250ZXh0ID09PSAndG9wLWFwcC1iYXI6bmF2aWdhdGlvbicgPyAnbWRjLXRvcC1hcHAtYmFyX19uYXZpZ2F0aW9uLWljb24nIDogJyd9XG4gICAgICB7Y29udGV4dCA9PT0gJ3RvcC1hcHAtYmFyOmFjdGlvbicgPyAnbWRjLXRvcC1hcHAtYmFyX19hY3Rpb24taXRlbScgOiAnJ31cbiAgICAgIHtjb250ZXh0ID09PSAnc25hY2tiYXInID8gJ21kYy1zbmFja2Jhcl9fYWN0aW9uJyA6ICcnfVxuICAgIFwiXG4gICAgdXNlOlJpcHBsZT17W3JpcHBsZSwge3VuYm91bmRlZDogZmFsc2V9XX1cbiAgICB7Li4uYWN0aW9uUHJvcH1cbiAgICB7Li4uZGVmYXVsdFByb3B9XG4gICAgey4uLnByb3BzfVxuICA+PHNsb3Q+PC9zbG90PjwvYnV0dG9uPlxuey9pZn1cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHtzZXRDb250ZXh0LCBnZXRDb250ZXh0fSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQge2N1cnJlbnRfY29tcG9uZW50fSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQge2ZvcndhcmRFdmVudHNCdWlsZGVyfSBmcm9tICdAc211aS9jb21tb24vZm9yd2FyZEV2ZW50cy5qcyc7XG4gIGltcG9ydCB7ZXhjbHVkZX0gZnJvbSAnQHNtdWkvY29tbW9uL2V4Y2x1ZGUuanMnO1xuICBpbXBvcnQge3VzZUFjdGlvbnN9IGZyb20gJ0BzbXVpL2NvbW1vbi91c2VBY3Rpb25zLmpzJztcbiAgaW1wb3J0IFJpcHBsZSBmcm9tICdAc211aS9yaXBwbGUvYmFyZS5qcyc7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGN1cnJlbnRfY29tcG9uZW50KTtcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gIGV4cG9ydCB7Y2xhc3NOYW1lIGFzIGNsYXNzfTtcbiAgZXhwb3J0IGxldCByaXBwbGUgPSB0cnVlO1xuICBleHBvcnQgbGV0IGNvbG9yID0gJ3ByaW1hcnknO1xuICBleHBvcnQgbGV0IHZhcmlhbnQgPSAndGV4dCc7XG4gIGV4cG9ydCBsZXQgZGVuc2UgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBocmVmID0gbnVsbDtcbiAgZXhwb3J0IGxldCBhY3Rpb24gPSAnY2xvc2UnO1xuICBsZXQgZGVmYXVsdEFjdGlvbiA9IGZhbHNlO1xuICBleHBvcnQge2RlZmF1bHRBY3Rpb24gYXMgZGVmYXVsdH07XG5cbiAgbGV0IGNvbnRleHQgPSBnZXRDb250ZXh0KCdTTVVJOmJ1dHRvbjpjb250ZXh0Jyk7XG5cbiAgJDogZGlhbG9nRXhjbHVkZXMgPSAoY29udGV4dCA9PT0gJ2RpYWxvZzphY3Rpb24nKSA/IFsnYWN0aW9uJywgJ2RlZmF1bHQnXSA6IFtdO1xuXG4gICQ6IHByb3BzID0gZXhjbHVkZSgkJHByb3BzLCBbJ3VzZScsICdjbGFzcycsICdyaXBwbGUnLCAnY29sb3InLCAndmFyaWFudCcsICdkZW5zZScsICdocmVmJywgLi4uZGlhbG9nRXhjbHVkZXNdKTtcblxuICAkOiBhY3Rpb25Qcm9wID0gKGNvbnRleHQgPT09ICdkaWFsb2c6YWN0aW9uJyAmJiBhY3Rpb24gIT09IG51bGwpID8geydkYXRhLW1kYy1kaWFsb2ctYWN0aW9uJzogYWN0aW9ufSA6IHt9O1xuICAkOiBkZWZhdWx0UHJvcCA9IChjb250ZXh0ID09PSAnZGlhbG9nOmFjdGlvbicgJiYgZGVmYXVsdEFjdGlvbikgPyB7J2RhdGEtbWRjLWRpYWxvZy1idXR0b24tZGVmYXVsdCc6ICcnfSA6IHt9O1xuXG4gIHNldENvbnRleHQoJ1NNVUk6bGFiZWw6Y29udGV4dCcsICdidXR0b24nKTtcbiAgc2V0Q29udGV4dCgnU01VSTppY29uOmNvbnRleHQnLCAnYnV0dG9uJyk7XG48L3NjcmlwdD4iLCI8ZGl2XG4gIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gIHVzZTpmb3J3YXJkRXZlbnRzXG4gIGNsYXNzPVwiXG4gICAgc211aS1idXR0b25fX2dyb3VwXG4gICAge2NsYXNzTmFtZX1cbiAgICB7dmFyaWFudCA9PT0gJ3JhaXNlZCcgPyAnc211aS1idXR0b25fX2dyb3VwLS1yYWlzZWQnIDogJyd9XG4gIFwiXG4gIHsuLi5leGNsdWRlKCQkcHJvcHMsIFsndXNlJywgJ2NsYXNzJywgJ3ZhcmlhbnQnXSl9XG4+PHNsb3Q+PC9zbG90PjwvZGl2PlxuXG48c2NyaXB0PlxuICBpbXBvcnQge3NldENvbnRleHQsIGdldENvbnRleHR9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7Y3VycmVudF9jb21wb25lbnR9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7Zm9yd2FyZEV2ZW50c0J1aWxkZXJ9IGZyb20gJ0BzbXVpL2NvbW1vbi9mb3J3YXJkRXZlbnRzLmpzJztcbiAgaW1wb3J0IHtleGNsdWRlfSBmcm9tICdAc211aS9jb21tb24vZXhjbHVkZS5qcyc7XG4gIGltcG9ydCB7dXNlQWN0aW9uc30gZnJvbSAnQHNtdWkvY29tbW9uL3VzZUFjdGlvbnMuanMnO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihjdXJyZW50X2NvbXBvbmVudCk7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBleHBvcnQge2NsYXNzTmFtZSBhcyBjbGFzc307XG4gIGV4cG9ydCBsZXQgdmFyaWFudCA9ICd0ZXh0Jztcbjwvc2NyaXB0PiIsIjxzcGFuXG4gIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gIHVzZTpmb3J3YXJkRXZlbnRzXG4gIGNsYXNzPVwiXG4gICAge2NsYXNzTmFtZX1cbiAgICB7Y29udGV4dCA9PT0gJ2J1dHRvbicgPyAnbWRjLWJ1dHRvbl9fbGFiZWwnIDogJyd9XG4gICAge2NvbnRleHQgPT09ICdmYWInID8gJ21kYy1mYWJfX2xhYmVsJyA6ICcnfVxuICAgIHtjb250ZXh0ID09PSAnY2hpcCcgPyAnbWRjLWNoaXBfX3RleHQnIDogJyd9XG4gICAge2NvbnRleHQgPT09ICd0YWInID8gJ21kYy10YWJfX3RleHQtbGFiZWwnIDogJyd9XG4gICAge2NvbnRleHQgPT09ICdpbWFnZS1saXN0JyA/ICdtZGMtaW1hZ2UtbGlzdF9fbGFiZWwnIDogJyd9XG4gICAge2NvbnRleHQgPT09ICdzbmFja2JhcicgPyAnbWRjLXNuYWNrYmFyX19sYWJlbCcgOiAnJ31cbiAgXCJcbiAgey4uLigoY29udGV4dCA9PT0gJ3NuYWNrYmFyJykgPyB7cm9sZTogJ3N0YXR1cycsICdhcmlhLWxpdmUnOiAncG9saXRlJ30gOiB7fSl9XG4gIHsuLi5leGNsdWRlKCQkcHJvcHMsIFsndXNlJywgJ2NsYXNzJ10pfVxuPjxzbG90Pjwvc2xvdD48L3NwYW4+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7Z2V0Q29udGV4dH0gZnJvbSAnc3ZlbHRlJztcbiAgaW1wb3J0IHtjdXJyZW50X2NvbXBvbmVudH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHtmb3J3YXJkRXZlbnRzQnVpbGRlcn0gZnJvbSAnLi9mb3J3YXJkRXZlbnRzLmpzJztcbiAgaW1wb3J0IHtleGNsdWRlfSBmcm9tICcuL2V4Y2x1ZGUuanMnO1xuICBpbXBvcnQge3VzZUFjdGlvbnN9IGZyb20gJy4vdXNlQWN0aW9ucy5qcyc7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGN1cnJlbnRfY29tcG9uZW50KTtcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gIGV4cG9ydCB7Y2xhc3NOYW1lIGFzIGNsYXNzfTtcblxuICBjb25zdCBjb250ZXh0ID0gZ2V0Q29udGV4dCgnU01VSTpsYWJlbDpjb250ZXh0Jyk7XG48L3NjcmlwdD4iLCI8aVxuICB1c2U6dXNlQWN0aW9ucz17dXNlfVxuICB1c2U6Zm9yd2FyZEV2ZW50c1xuICBjbGFzcz1cIlxuICAgIHtjbGFzc05hbWV9XG4gICAge2NvbnRleHQgPT09ICdidXR0b24nID8gJ21kYy1idXR0b25fX2ljb24nIDogJyd9XG4gICAge2NvbnRleHQgPT09ICdmYWInID8gJ21kYy1mYWJfX2ljb24nIDogJyd9XG4gICAge2NvbnRleHQgPT09ICdpY29uLWJ1dHRvbicgPyAnbWRjLWljb24tYnV0dG9uX19pY29uJyA6ICcnfVxuICAgIHsoY29udGV4dCA9PT0gJ2ljb24tYnV0dG9uJyAmJiBvbikgPyAnbWRjLWljb24tYnV0dG9uX19pY29uLS1vbicgOiAnJ31cbiAgICB7Y29udGV4dCA9PT0gJ2NoaXAnID8gJ21kYy1jaGlwX19pY29uJyA6ICcnfVxuICAgIHsoY29udGV4dCA9PT0gJ2NoaXAnICYmIGxlYWRpbmcpID8gJ21kYy1jaGlwX19pY29uLS1sZWFkaW5nJyA6ICcnfVxuICAgIHsoY29udGV4dCA9PT0gJ2NoaXAnICYmIGxlYWRpbmdIaWRkZW4pID8gJ21kYy1jaGlwX19pY29uLS1sZWFkaW5nLWhpZGRlbicgOiAnJ31cbiAgICB7KGNvbnRleHQgPT09ICdjaGlwJyAmJiB0cmFpbGluZykgPyAnbWRjLWNoaXBfX2ljb24tLXRyYWlsaW5nJyA6ICcnfVxuICAgIHtjb250ZXh0ID09PSAndGFiJyA/ICdtZGMtdGFiX19pY29uJyA6ICcnfVxuICBcIlxuICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICB7Li4uZXhjbHVkZSgkJHByb3BzLCBbJ3VzZScsICdjbGFzcycsICdvbicsICdsZWFkaW5nJywgJ2xlYWRpbmdIaWRkZW4nLCAndHJhaWxpbmcnXSl9XG4+PHNsb3Q+PC9zbG90PjwvaT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHtnZXRDb250ZXh0fSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQge2N1cnJlbnRfY29tcG9uZW50fSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQge2ZvcndhcmRFdmVudHNCdWlsZGVyfSBmcm9tICcuL2ZvcndhcmRFdmVudHMuanMnO1xuICBpbXBvcnQge2V4Y2x1ZGV9IGZyb20gJy4vZXhjbHVkZS5qcyc7XG4gIGltcG9ydCB7dXNlQWN0aW9uc30gZnJvbSAnLi91c2VBY3Rpb25zLmpzJztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoY3VycmVudF9jb21wb25lbnQpO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG4gIGxldCBjbGFzc05hbWUgPSAnJztcbiAgZXhwb3J0IHtjbGFzc05hbWUgYXMgY2xhc3N9O1xuICBleHBvcnQgbGV0IG9uID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgbGVhZGluZyA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGxlYWRpbmdIaWRkZW4gPSBmYWxzZTtcbiAgZXhwb3J0IGxldCB0cmFpbGluZyA9IGZhbHNlO1xuXG4gIGNvbnN0IGNvbnRleHQgPSBnZXRDb250ZXh0KCdTTVVJOmljb246Y29udGV4dCcpO1xuPC9zY3JpcHQ+IiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBBTkNIT1I6ICdtZGMtbWVudS1zdXJmYWNlLS1hbmNob3InLFxuICAgIEFOSU1BVElOR19DTE9TRUQ6ICdtZGMtbWVudS1zdXJmYWNlLS1hbmltYXRpbmctY2xvc2VkJyxcbiAgICBBTklNQVRJTkdfT1BFTjogJ21kYy1tZW51LXN1cmZhY2UtLWFuaW1hdGluZy1vcGVuJyxcbiAgICBGSVhFRDogJ21kYy1tZW51LXN1cmZhY2UtLWZpeGVkJyxcbiAgICBPUEVOOiAnbWRjLW1lbnUtc3VyZmFjZS0tb3BlbicsXG4gICAgUk9PVDogJ21kYy1tZW51LXN1cmZhY2UnLFxufTtcbi8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xudmFyIHN0cmluZ3MgPSB7XG4gICAgQ0xPU0VEX0VWRU5UOiAnTURDTWVudVN1cmZhY2U6Y2xvc2VkJyxcbiAgICBPUEVORURfRVZFTlQ6ICdNRENNZW51U3VyZmFjZTpvcGVuZWQnLFxuICAgIEZPQ1VTQUJMRV9FTEVNRU5UUzogW1xuICAgICAgICAnYnV0dG9uOm5vdCg6ZGlzYWJsZWQpJywgJ1tocmVmXTpub3QoW2FyaWEtZGlzYWJsZWQ9XCJ0cnVlXCJdKScsICdpbnB1dDpub3QoOmRpc2FibGVkKScsXG4gICAgICAgICdzZWxlY3Q6bm90KDpkaXNhYmxlZCknLCAndGV4dGFyZWE6bm90KDpkaXNhYmxlZCknLCAnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4PVwiLTFcIl0pOm5vdChbYXJpYS1kaXNhYmxlZD1cInRydWVcIl0pJyxcbiAgICBdLmpvaW4oJywgJyksXG59O1xuLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbnZhciBudW1iZXJzID0ge1xuICAgIC8qKiBUb3RhbCBkdXJhdGlvbiBvZiBtZW51LXN1cmZhY2Ugb3BlbiBhbmltYXRpb24uICovXG4gICAgVFJBTlNJVElPTl9PUEVOX0RVUkFUSU9OOiAxMjAsXG4gICAgLyoqIFRvdGFsIGR1cmF0aW9uIG9mIG1lbnUtc3VyZmFjZSBjbG9zZSBhbmltYXRpb24uICovXG4gICAgVFJBTlNJVElPTl9DTE9TRV9EVVJBVElPTjogNzUsXG4gICAgLyoqIE1hcmdpbiBsZWZ0IHRvIHRoZSBlZGdlIG9mIHRoZSB2aWV3cG9ydCB3aGVuIG1lbnUtc3VyZmFjZSBpcyBhdCBtYXhpbXVtIHBvc3NpYmxlIGhlaWdodC4gKi9cbiAgICBNQVJHSU5fVE9fRURHRTogMzIsXG4gICAgLyoqIFJhdGlvIG9mIGFuY2hvciB3aWR0aCB0byBtZW51LXN1cmZhY2Ugd2lkdGggZm9yIHN3aXRjaGluZyBmcm9tIGNvcm5lciBwb3NpdGlvbmluZyB0byBjZW50ZXIgcG9zaXRpb25pbmcuICovXG4gICAgQU5DSE9SX1RPX01FTlVfU1VSRkFDRV9XSURUSF9SQVRJTzogMC42Nyxcbn07XG4vKipcbiAqIEVudW0gZm9yIGJpdHMgaW4gdGhlIHtAc2VlIENvcm5lcikgYml0bWFwLlxuICovXG52YXIgQ29ybmVyQml0O1xuKGZ1bmN0aW9uIChDb3JuZXJCaXQpIHtcbiAgICBDb3JuZXJCaXRbQ29ybmVyQml0W1wiQk9UVE9NXCJdID0gMV0gPSBcIkJPVFRPTVwiO1xuICAgIENvcm5lckJpdFtDb3JuZXJCaXRbXCJDRU5URVJcIl0gPSAyXSA9IFwiQ0VOVEVSXCI7XG4gICAgQ29ybmVyQml0W0Nvcm5lckJpdFtcIlJJR0hUXCJdID0gNF0gPSBcIlJJR0hUXCI7XG4gICAgQ29ybmVyQml0W0Nvcm5lckJpdFtcIkZMSVBfUlRMXCJdID0gOF0gPSBcIkZMSVBfUlRMXCI7XG59KShDb3JuZXJCaXQgfHwgKENvcm5lckJpdCA9IHt9KSk7XG4vKipcbiAqIEVudW0gZm9yIHJlcHJlc2VudGluZyBhbiBlbGVtZW50IGNvcm5lciBmb3IgcG9zaXRpb25pbmcgdGhlIG1lbnUtc3VyZmFjZS5cbiAqXG4gKiBUaGUgU1RBUlQgY29uc3RhbnRzIG1hcCB0byBMRUZUIGlmIGVsZW1lbnQgZGlyZWN0aW9uYWxpdHkgaXMgbGVmdFxuICogdG8gcmlnaHQgYW5kIFJJR0hUIGlmIHRoZSBkaXJlY3Rpb25hbGl0eSBpcyByaWdodCB0byBsZWZ0LlxuICogTGlrZXdpc2UgRU5EIG1hcHMgdG8gUklHSFQgb3IgTEVGVCBkZXBlbmRpbmcgb24gdGhlIGRpcmVjdGlvbmFsaXR5LlxuICovXG52YXIgQ29ybmVyO1xuKGZ1bmN0aW9uIChDb3JuZXIpIHtcbiAgICBDb3JuZXJbQ29ybmVyW1wiVE9QX0xFRlRcIl0gPSAwXSA9IFwiVE9QX0xFRlRcIjtcbiAgICBDb3JuZXJbQ29ybmVyW1wiVE9QX1JJR0hUXCJdID0gNF0gPSBcIlRPUF9SSUdIVFwiO1xuICAgIENvcm5lcltDb3JuZXJbXCJCT1RUT01fTEVGVFwiXSA9IDFdID0gXCJCT1RUT01fTEVGVFwiO1xuICAgIENvcm5lcltDb3JuZXJbXCJCT1RUT01fUklHSFRcIl0gPSA1XSA9IFwiQk9UVE9NX1JJR0hUXCI7XG4gICAgQ29ybmVyW0Nvcm5lcltcIlRPUF9TVEFSVFwiXSA9IDhdID0gXCJUT1BfU1RBUlRcIjtcbiAgICBDb3JuZXJbQ29ybmVyW1wiVE9QX0VORFwiXSA9IDEyXSA9IFwiVE9QX0VORFwiO1xuICAgIENvcm5lcltDb3JuZXJbXCJCT1RUT01fU1RBUlRcIl0gPSA5XSA9IFwiQk9UVE9NX1NUQVJUXCI7XG4gICAgQ29ybmVyW0Nvcm5lcltcIkJPVFRPTV9FTkRcIl0gPSAxM10gPSBcIkJPVFRPTV9FTkRcIjtcbn0pKENvcm5lciB8fCAoQ29ybmVyID0ge30pKTtcbmV4cG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnMsIENvcm5lckJpdCwgQ29ybmVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBMSVNUX0lURU1fQUNUSVZBVEVEX0NMQVNTOiAnbWRjLWxpc3QtaXRlbS0tYWN0aXZhdGVkJyxcbiAgICBMSVNUX0lURU1fQ0xBU1M6ICdtZGMtbGlzdC1pdGVtJyxcbiAgICBMSVNUX0lURU1fRElTQUJMRURfQ0xBU1M6ICdtZGMtbGlzdC1pdGVtLS1kaXNhYmxlZCcsXG4gICAgTElTVF9JVEVNX1NFTEVDVEVEX0NMQVNTOiAnbWRjLWxpc3QtaXRlbS0tc2VsZWN0ZWQnLFxuICAgIFJPT1Q6ICdtZGMtbGlzdCcsXG59O1xudmFyIHN0cmluZ3MgPSB7XG4gICAgQUNUSU9OX0VWRU5UOiAnTURDTGlzdDphY3Rpb24nLFxuICAgIEFSSUFfQ0hFQ0tFRDogJ2FyaWEtY2hlY2tlZCcsXG4gICAgQVJJQV9DSEVDS0VEX0NIRUNLQk9YX1NFTEVDVE9SOiAnW3JvbGU9XCJjaGVja2JveFwiXVthcmlhLWNoZWNrZWQ9XCJ0cnVlXCJdJyxcbiAgICBBUklBX0NIRUNLRURfUkFESU9fU0VMRUNUT1I6ICdbcm9sZT1cInJhZGlvXCJdW2FyaWEtY2hlY2tlZD1cInRydWVcIl0nLFxuICAgIEFSSUFfQ1VSUkVOVDogJ2FyaWEtY3VycmVudCcsXG4gICAgQVJJQV9ESVNBQkxFRDogJ2FyaWEtZGlzYWJsZWQnLFxuICAgIEFSSUFfT1JJRU5UQVRJT046ICdhcmlhLW9yaWVudGF0aW9uJyxcbiAgICBBUklBX09SSUVOVEFUSU9OX0hPUklaT05UQUw6ICdob3Jpem9udGFsJyxcbiAgICBBUklBX1JPTEVfQ0hFQ0tCT1hfU0VMRUNUT1I6ICdbcm9sZT1cImNoZWNrYm94XCJdJyxcbiAgICBBUklBX1NFTEVDVEVEOiAnYXJpYS1zZWxlY3RlZCcsXG4gICAgQ0hFQ0tCT1hfUkFESU9fU0VMRUNUT1I6ICdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06bm90KDpkaXNhYmxlZCksIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpub3QoOmRpc2FibGVkKScsXG4gICAgQ0hFQ0tCT1hfU0VMRUNUT1I6ICdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06bm90KDpkaXNhYmxlZCknLFxuICAgIENISUxEX0VMRU1FTlRTX1RPX1RPR0dMRV9UQUJJTkRFWDogXCJcXG4gICAgLlwiICsgY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1MgKyBcIiBidXR0b246bm90KDpkaXNhYmxlZCksXFxuICAgIC5cIiArIGNzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTICsgXCIgYVxcbiAgXCIsXG4gICAgRk9DVVNBQkxFX0NISUxEX0VMRU1FTlRTOiBcIlxcbiAgICAuXCIgKyBjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTUyArIFwiIGJ1dHRvbjpub3QoOmRpc2FibGVkKSxcXG4gICAgLlwiICsgY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1MgKyBcIiBhLFxcbiAgICAuXCIgKyBjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTUyArIFwiIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06bm90KDpkaXNhYmxlZCksXFxuICAgIC5cIiArIGNzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTICsgXCIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpub3QoOmRpc2FibGVkKVxcbiAgXCIsXG4gICAgUkFESU9fU0VMRUNUT1I6ICdpbnB1dFt0eXBlPVwicmFkaW9cIl06bm90KDpkaXNhYmxlZCknLFxufTtcbnZhciBudW1iZXJzID0ge1xuICAgIFVOU0VUX0lOREVYOiAtMSxcbn07XG5leHBvcnQgeyBzdHJpbmdzLCBjc3NDbGFzc2VzLCBudW1iZXJzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3NlcywgbnVtYmVycywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBFTEVNRU5UU19LRVlfQUxMT1dFRF9JTiA9IFsnaW5wdXQnLCAnYnV0dG9uJywgJ3RleHRhcmVhJywgJ3NlbGVjdCddO1xuZnVuY3Rpb24gaXNOdW1iZXJBcnJheShzZWxlY3RlZEluZGV4KSB7XG4gICAgcmV0dXJuIHNlbGVjdGVkSW5kZXggaW5zdGFuY2VvZiBBcnJheTtcbn1cbnZhciBNRENMaXN0Rm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENMaXN0Rm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENMaXN0Rm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ0xpc3RGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMud3JhcEZvY3VzXyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5pc1ZlcnRpY2FsXyA9IHRydWU7XG4gICAgICAgIF90aGlzLmlzU2luZ2xlU2VsZWN0aW9uTGlzdF8gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuc2VsZWN0ZWRJbmRleF8gPSBudW1iZXJzLlVOU0VUX0lOREVYO1xuICAgICAgICBfdGhpcy5mb2N1c2VkSXRlbUluZGV4XyA9IG51bWJlcnMuVU5TRVRfSU5ERVg7XG4gICAgICAgIF90aGlzLnVzZUFjdGl2YXRlZENsYXNzXyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5hcmlhQ3VycmVudEF0dHJWYWx1ZV8gPSBudWxsO1xuICAgICAgICBfdGhpcy5pc0NoZWNrYm94TGlzdF8gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaXNSYWRpb0xpc3RfID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0xpc3RGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTGlzdEZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENMaXN0Rm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVycztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0xpc3RGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzRm9yRWxlbWVudEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZm9jdXNJdGVtQXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgICAgICAgICBnZXRGb2N1c2VkRWxlbWVudEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICAgICAgICAgICAgICAgIGdldExpc3RJdGVtQ291bnQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gICAgICAgICAgICAgICAgaGFzQ2hlY2tib3hBdEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBoYXNSYWRpb0F0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGlzQ2hlY2tib3hDaGVja2VkQXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgaXNGb2N1c0luc2lkZUxpc3Q6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGlzUm9vdEZvY3VzZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeUFjdGlvbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzRm9yRWxlbWVudEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0Q2hlY2tlZENoZWNrYm94T3JSYWRpb0F0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXRUYWJJbmRleEZvckxpc3RJdGVtQ2hpbGRyZW46IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5sYXlvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmdldExpc3RJdGVtQ291bnQoKSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmhhc0NoZWNrYm94QXRJbmRleCgwKSkge1xuICAgICAgICAgICAgdGhpcy5pc0NoZWNrYm94TGlzdF8gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYWRhcHRlcl8uaGFzUmFkaW9BdEluZGV4KDApKSB7XG4gICAgICAgICAgICB0aGlzLmlzUmFkaW9MaXN0XyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByaXZhdGUgd3JhcEZvY3VzXyB2YXJpYWJsZS5cbiAgICAgKi9cbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0V3JhcEZvY3VzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMud3JhcEZvY3VzXyA9IHZhbHVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgaXNWZXJ0aWNhbF8gcHJpdmF0ZSB2YXJpYWJsZS5cbiAgICAgKi9cbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0VmVydGljYWxPcmllbnRhdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmlzVmVydGljYWxfID0gdmFsdWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBpc1NpbmdsZVNlbGVjdGlvbkxpc3RfIHByaXZhdGUgdmFyaWFibGUuXG4gICAgICovXG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFNpbmdsZVNlbGVjdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmlzU2luZ2xlU2VsZWN0aW9uTGlzdF8gPSB2YWx1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHVzZUFjdGl2YXRlZENsYXNzXyBwcml2YXRlIHZhcmlhYmxlLlxuICAgICAqL1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRVc2VBY3RpdmF0ZWRDbGFzcyA9IGZ1bmN0aW9uICh1c2VBY3RpdmF0ZWQpIHtcbiAgICAgICAgdGhpcy51c2VBY3RpdmF0ZWRDbGFzc18gPSB1c2VBY3RpdmF0ZWQ7XG4gICAgfTtcbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0U2VsZWN0ZWRJbmRleCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJbmRleF87XG4gICAgfTtcbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0U2VsZWN0ZWRJbmRleCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNJbmRleFZhbGlkXyhpbmRleCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0NoZWNrYm94TGlzdF8pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q2hlY2tib3hBdEluZGV4XyhpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1JhZGlvTGlzdF8pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UmFkaW9BdEluZGV4XyhpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFNpbmdsZVNlbGVjdGlvbkF0SW5kZXhfKGluZGV4KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogRm9jdXMgaW4gaGFuZGxlciBmb3IgdGhlIGxpc3QgaXRlbXMuXG4gICAgICovXG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUZvY3VzSW4gPSBmdW5jdGlvbiAoXywgbGlzdEl0ZW1JbmRleCkge1xuICAgICAgICBpZiAobGlzdEl0ZW1JbmRleCA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldFRhYkluZGV4Rm9yTGlzdEl0ZW1DaGlsZHJlbihsaXN0SXRlbUluZGV4LCAnMCcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBGb2N1cyBvdXQgaGFuZGxlciBmb3IgdGhlIGxpc3QgaXRlbXMuXG4gICAgICovXG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUZvY3VzT3V0ID0gZnVuY3Rpb24gKF8sIGxpc3RJdGVtSW5kZXgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGxpc3RJdGVtSW5kZXggPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRUYWJJbmRleEZvckxpc3RJdGVtQ2hpbGRyZW4obGlzdEl0ZW1JbmRleCwgJy0xJyk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJldHdlZW4gRm9jdXNvdXQgJiBGb2N1c2luIHNvbWUgYnJvd3NlcnMgZG8gbm90IGhhdmUgZm9jdXMgb24gYW55IGVsZW1lbnQuIFNldHRpbmcgYSBkZWxheSB0byB3YWl0IHRpbGwgdGhlIGZvY3VzXG4gICAgICAgICAqIGlzIG1vdmVkIHRvIG5leHQgZWxlbWVudC5cbiAgICAgICAgICovXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFfdGhpcy5hZGFwdGVyXy5pc0ZvY3VzSW5zaWRlTGlzdCgpKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0VGFiaW5kZXhUb0ZpcnN0U2VsZWN0ZWRJdGVtXygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEtleSBoYW5kbGVyIGZvciB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlS2V5ZG93biA9IGZ1bmN0aW9uIChldnQsIGlzUm9vdExpc3RJdGVtLCBsaXN0SXRlbUluZGV4KSB7XG4gICAgICAgIHZhciBpc0Fycm93TGVmdCA9IGV2dC5rZXkgPT09ICdBcnJvd0xlZnQnIHx8IGV2dC5rZXlDb2RlID09PSAzNztcbiAgICAgICAgdmFyIGlzQXJyb3dVcCA9IGV2dC5rZXkgPT09ICdBcnJvd1VwJyB8fCBldnQua2V5Q29kZSA9PT0gMzg7XG4gICAgICAgIHZhciBpc0Fycm93UmlnaHQgPSBldnQua2V5ID09PSAnQXJyb3dSaWdodCcgfHwgZXZ0LmtleUNvZGUgPT09IDM5O1xuICAgICAgICB2YXIgaXNBcnJvd0Rvd24gPSBldnQua2V5ID09PSAnQXJyb3dEb3duJyB8fCBldnQua2V5Q29kZSA9PT0gNDA7XG4gICAgICAgIHZhciBpc0hvbWUgPSBldnQua2V5ID09PSAnSG9tZScgfHwgZXZ0LmtleUNvZGUgPT09IDM2O1xuICAgICAgICB2YXIgaXNFbmQgPSBldnQua2V5ID09PSAnRW5kJyB8fCBldnQua2V5Q29kZSA9PT0gMzU7XG4gICAgICAgIHZhciBpc0VudGVyID0gZXZ0LmtleSA9PT0gJ0VudGVyJyB8fCBldnQua2V5Q29kZSA9PT0gMTM7XG4gICAgICAgIHZhciBpc1NwYWNlID0gZXZ0LmtleSA9PT0gJ1NwYWNlJyB8fCBldnQua2V5Q29kZSA9PT0gMzI7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzUm9vdEZvY3VzZWQoKSkge1xuICAgICAgICAgICAgaWYgKGlzQXJyb3dVcCB8fCBpc0VuZCkge1xuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNMYXN0RWxlbWVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNBcnJvd0Rvd24gfHwgaXNIb21lKSB7XG4gICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0ZpcnN0RWxlbWVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjdXJyZW50SW5kZXggPSB0aGlzLmFkYXB0ZXJfLmdldEZvY3VzZWRFbGVtZW50SW5kZXgoKTtcbiAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IGxpc3RJdGVtSW5kZXg7XG4gICAgICAgICAgICBpZiAoY3VycmVudEluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgZXZlbnQgZG9lc24ndCBoYXZlIGEgbWRjLWxpc3QtaXRlbSBhbmNlc3RvciBmcm9tIHRoZVxuICAgICAgICAgICAgICAgIC8vIGN1cnJlbnQgbGlzdCAobm90IGZyb20gYSBzdWJsaXN0KSwgcmV0dXJuIGVhcmx5LlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgbmV4dEluZGV4O1xuICAgICAgICBpZiAoKHRoaXMuaXNWZXJ0aWNhbF8gJiYgaXNBcnJvd0Rvd24pIHx8ICghdGhpcy5pc1ZlcnRpY2FsXyAmJiBpc0Fycm93UmlnaHQpKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0RXZlbnRfKGV2dCk7XG4gICAgICAgICAgICBuZXh0SW5kZXggPSB0aGlzLmZvY3VzTmV4dEVsZW1lbnQoY3VycmVudEluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgodGhpcy5pc1ZlcnRpY2FsXyAmJiBpc0Fycm93VXApIHx8ICghdGhpcy5pc1ZlcnRpY2FsXyAmJiBpc0Fycm93TGVmdCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJldmVudERlZmF1bHRFdmVudF8oZXZ0KTtcbiAgICAgICAgICAgIG5leHRJbmRleCA9IHRoaXMuZm9jdXNQcmV2RWxlbWVudChjdXJyZW50SW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzSG9tZSkge1xuICAgICAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdEV2ZW50XyhldnQpO1xuICAgICAgICAgICAgbmV4dEluZGV4ID0gdGhpcy5mb2N1c0ZpcnN0RWxlbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzRW5kKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0RXZlbnRfKGV2dCk7XG4gICAgICAgICAgICBuZXh0SW5kZXggPSB0aGlzLmZvY3VzTGFzdEVsZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0VudGVyIHx8IGlzU3BhY2UpIHtcbiAgICAgICAgICAgIGlmIChpc1Jvb3RMaXN0SXRlbSkge1xuICAgICAgICAgICAgICAgIC8vIFJldHVybiBlYXJseSBpZiBlbnRlciBrZXkgaXMgcHJlc3NlZCBvbiBhbmNob3IgZWxlbWVudCB3aGljaCB0cmlnZ2VycyBzeW50aGV0aWMgTW91c2VFdmVudCBldmVudC5cbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZXZ0LnRhcmdldDtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC50YWdOYW1lID09PSAnQScgJiYgaXNFbnRlcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucHJldmVudERlZmF1bHRFdmVudF8oZXZ0KTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NlbGVjdGFibGVMaXN0XygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRJbmRleE9uQWN0aW9uXyhjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeUFjdGlvbihjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9jdXNlZEl0ZW1JbmRleF8gPSBjdXJyZW50SW5kZXg7XG4gICAgICAgIGlmIChuZXh0SW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRUYWJpbmRleEF0SW5kZXhfKG5leHRJbmRleCk7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWRJdGVtSW5kZXhfID0gbmV4dEluZGV4O1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDbGljayBoYW5kbGVyIGZvciB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoaW5kZXgsIHRvZ2dsZUNoZWNrYm94KSB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gbnVtYmVycy5VTlNFVF9JTkRFWCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzU2VsZWN0YWJsZUxpc3RfKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRJbmRleE9uQWN0aW9uXyhpbmRleCwgdG9nZ2xlQ2hlY2tib3gpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5QWN0aW9uKGluZGV4KTtcbiAgICAgICAgdGhpcy5zZXRUYWJpbmRleEF0SW5kZXhfKGluZGV4KTtcbiAgICAgICAgdGhpcy5mb2N1c2VkSXRlbUluZGV4XyA9IGluZGV4O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRm9jdXNlcyB0aGUgbmV4dCBlbGVtZW50IG9uIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5mb2N1c05leHRFbGVtZW50ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHZhciBjb3VudCA9IHRoaXMuYWRhcHRlcl8uZ2V0TGlzdEl0ZW1Db3VudCgpO1xuICAgICAgICB2YXIgbmV4dEluZGV4ID0gaW5kZXggKyAxO1xuICAgICAgICBpZiAobmV4dEluZGV4ID49IGNvdW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy53cmFwRm9jdXNfKSB7XG4gICAgICAgICAgICAgICAgbmV4dEluZGV4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFJldHVybiBlYXJseSBiZWNhdXNlIGxhc3QgaXRlbSBpcyBhbHJlYWR5IGZvY3VzZWQuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZm9jdXNJdGVtQXRJbmRleChuZXh0SW5kZXgpO1xuICAgICAgICByZXR1cm4gbmV4dEluZGV4O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRm9jdXNlcyB0aGUgcHJldmlvdXMgZWxlbWVudCBvbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuZm9jdXNQcmV2RWxlbWVudCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB2YXIgcHJldkluZGV4ID0gaW5kZXggLSAxO1xuICAgICAgICBpZiAocHJldkluZGV4IDwgMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMud3JhcEZvY3VzXykge1xuICAgICAgICAgICAgICAgIHByZXZJbmRleCA9IHRoaXMuYWRhcHRlcl8uZ2V0TGlzdEl0ZW1Db3VudCgpIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFJldHVybiBlYXJseSBiZWNhdXNlIGZpcnN0IGl0ZW0gaXMgYWxyZWFkeSBmb2N1c2VkLlxuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmZvY3VzSXRlbUF0SW5kZXgocHJldkluZGV4KTtcbiAgICAgICAgcmV0dXJuIHByZXZJbmRleDtcbiAgICB9O1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5mb2N1c0ZpcnN0RWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5mb2N1c0l0ZW1BdEluZGV4KDApO1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9O1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5mb2N1c0xhc3RFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbGFzdEluZGV4ID0gdGhpcy5hZGFwdGVyXy5nZXRMaXN0SXRlbUNvdW50KCkgLSAxO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmZvY3VzSXRlbUF0SW5kZXgobGFzdEluZGV4KTtcbiAgICAgICAgcmV0dXJuIGxhc3RJbmRleDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBpdGVtSW5kZXggSW5kZXggb2YgdGhlIGxpc3QgaXRlbVxuICAgICAqIEBwYXJhbSBpc0VuYWJsZWQgU2V0cyB0aGUgbGlzdCBpdGVtIHRvIGVuYWJsZWQgb3IgZGlzYWJsZWQuXG4gICAgICovXG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLnNldEVuYWJsZWQgPSBmdW5jdGlvbiAoaXRlbUluZGV4LCBpc0VuYWJsZWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzSW5kZXhWYWxpZF8oaXRlbUluZGV4KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0VuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3NGb3JFbGVtZW50SW5kZXgoaXRlbUluZGV4LCBjc3NDbGFzc2VzLkxJU1RfSVRFTV9ESVNBQkxFRF9DTEFTUyk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleChpdGVtSW5kZXgsIHN0cmluZ3MuQVJJQV9ESVNBQkxFRCwgJ2ZhbHNlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzRm9yRWxlbWVudEluZGV4KGl0ZW1JbmRleCwgY3NzQ2xhc3Nlcy5MSVNUX0lURU1fRElTQUJMRURfQ0xBU1MpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaXRlbUluZGV4LCBzdHJpbmdzLkFSSUFfRElTQUJMRUQsICd0cnVlJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEVuc3VyZXMgdGhhdCBwcmV2ZW50RGVmYXVsdCBpcyBvbmx5IGNhbGxlZCBpZiB0aGUgY29udGFpbmluZyBlbGVtZW50IGRvZXNuJ3RcbiAgICAgKiBjb25zdW1lIHRoZSBldmVudCwgYW5kIGl0IHdpbGwgY2F1c2UgYW4gdW5pbnRlbmRlZCBzY3JvbGwuXG4gICAgICovXG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLnByZXZlbnREZWZhdWx0RXZlbnRfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZ0LnRhcmdldDtcbiAgICAgICAgdmFyIHRhZ05hbWUgPSAoXCJcIiArIHRhcmdldC50YWdOYW1lKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoRUxFTUVOVFNfS0VZX0FMTE9XRURfSU4uaW5kZXhPZih0YWdOYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0U2luZ2xlU2VsZWN0aW9uQXRJbmRleF8gPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleF8gPT09IGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNlbGVjdGVkQ2xhc3NOYW1lID0gY3NzQ2xhc3Nlcy5MSVNUX0lURU1fU0VMRUNURURfQ0xBU1M7XG4gICAgICAgIGlmICh0aGlzLnVzZUFjdGl2YXRlZENsYXNzXykge1xuICAgICAgICAgICAgc2VsZWN0ZWRDbGFzc05hbWUgPSBjc3NDbGFzc2VzLkxJU1RfSVRFTV9BQ1RJVkFURURfQ0xBU1M7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleF8gIT09IG51bWJlcnMuVU5TRVRfSU5ERVgpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3NGb3JFbGVtZW50SW5kZXgodGhpcy5zZWxlY3RlZEluZGV4Xywgc2VsZWN0ZWRDbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3NGb3JFbGVtZW50SW5kZXgoaW5kZXgsIHNlbGVjdGVkQ2xhc3NOYW1lKTtcbiAgICAgICAgdGhpcy5zZXRBcmlhRm9yU2luZ2xlU2VsZWN0aW9uQXRJbmRleF8oaW5kZXgpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXhfID0gaW5kZXg7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIGFyaWEgYXR0cmlidXRlIGZvciBzaW5nbGUgc2VsZWN0aW9uIGF0IGdpdmVuIGluZGV4LlxuICAgICAqL1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRBcmlhRm9yU2luZ2xlU2VsZWN0aW9uQXRJbmRleF8gPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgLy8gRGV0ZWN0IHRoZSBwcmVzZW5jZSBvZiBhcmlhLWN1cnJlbnQgYW5kIGdldCB0aGUgdmFsdWUgb25seSBkdXJpbmcgbGlzdCBpbml0aWFsaXphdGlvbiB3aGVuIGl0IGlzIGluIHVuc2V0IHN0YXRlLlxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4XyA9PT0gbnVtYmVycy5VTlNFVF9JTkRFWCkge1xuICAgICAgICAgICAgdGhpcy5hcmlhQ3VycmVudEF0dHJWYWx1ZV8gPVxuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uZ2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KGluZGV4LCBzdHJpbmdzLkFSSUFfQ1VSUkVOVCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlzQXJpYUN1cnJlbnQgPSB0aGlzLmFyaWFDdXJyZW50QXR0clZhbHVlXyAhPT0gbnVsbDtcbiAgICAgICAgdmFyIGFyaWFBdHRyaWJ1dGUgPSBpc0FyaWFDdXJyZW50ID8gc3RyaW5ncy5BUklBX0NVUlJFTlQgOiBzdHJpbmdzLkFSSUFfU0VMRUNURUQ7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXhfICE9PSBudW1iZXJzLlVOU0VUX0lOREVYKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleCh0aGlzLnNlbGVjdGVkSW5kZXhfLCBhcmlhQXR0cmlidXRlLCAnZmFsc2UnKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYXJpYUF0dHJpYnV0ZVZhbHVlID0gaXNBcmlhQ3VycmVudCA/IHRoaXMuYXJpYUN1cnJlbnRBdHRyVmFsdWVfIDogJ3RydWUnO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleChpbmRleCwgYXJpYUF0dHJpYnV0ZSwgYXJpYUF0dHJpYnV0ZVZhbHVlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgcmFkaW8gYXQgZ2l2ZSBpbmRleC4gUmFkaW8gZG9lc24ndCBjaGFuZ2UgdGhlIGNoZWNrZWQgc3RhdGUgaWYgaXQgaXMgYWxyZWFkeSBjaGVja2VkLlxuICAgICAqL1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRSYWRpb0F0SW5kZXhfID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0Q2hlY2tlZENoZWNrYm94T3JSYWRpb0F0SW5kZXgoaW5kZXgsIHRydWUpO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4XyAhPT0gbnVtYmVycy5VTlNFVF9JTkRFWCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgodGhpcy5zZWxlY3RlZEluZGV4Xywgc3RyaW5ncy5BUklBX0NIRUNLRUQsICdmYWxzZScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KGluZGV4LCBzdHJpbmdzLkFSSUFfQ0hFQ0tFRCwgJ3RydWUnKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4XyA9IGluZGV4O1xuICAgIH07XG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLnNldENoZWNrYm94QXRJbmRleF8gPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFkYXB0ZXJfLmdldExpc3RJdGVtQ291bnQoKTsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoaW5kZXguaW5kZXhPZihpKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgaXNDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0Q2hlY2tlZENoZWNrYm94T3JSYWRpb0F0SW5kZXgoaSwgaXNDaGVja2VkKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KGksIHN0cmluZ3MuQVJJQV9DSEVDS0VELCBpc0NoZWNrZWQgPyAndHJ1ZScgOiAnZmFsc2UnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXhfID0gaW5kZXg7XG4gICAgfTtcbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0VGFiaW5kZXhBdEluZGV4XyA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICBpZiAodGhpcy5mb2N1c2VkSXRlbUluZGV4XyA9PT0gbnVtYmVycy5VTlNFVF9JTkRFWCAmJiBpbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgLy8gSWYgbm8gbGlzdCBpdGVtIHdhcyBzZWxlY3RlZCBzZXQgZmlyc3QgbGlzdCBpdGVtJ3MgdGFiaW5kZXggdG8gLTEuXG4gICAgICAgICAgICAvLyBHZW5lcmFsbHksIHRhYmluZGV4IGlzIHNldCB0byAwIG9uIGZpcnN0IGxpc3QgaXRlbSBvZiBsaXN0IHRoYXQgaGFzIG5vIHByZXNlbGVjdGVkIGl0ZW1zLlxuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoMCwgJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5mb2N1c2VkSXRlbUluZGV4XyA+PSAwICYmIHRoaXMuZm9jdXNlZEl0ZW1JbmRleF8gIT09IGluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleCh0aGlzLmZvY3VzZWRJdGVtSW5kZXhfLCAndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleChpbmRleCwgJ3RhYmluZGV4JywgJzAnKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gUmV0dXJuIHRydWUgaWYgaXQgaXMgc2luZ2xlIHNlbGVjdGluIGxpc3QsIGNoZWNrYm94IGxpc3Qgb3IgcmFkaW8gbGlzdC5cbiAgICAgKi9cbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuaXNTZWxlY3RhYmxlTGlzdF8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzU2luZ2xlU2VsZWN0aW9uTGlzdF8gfHwgdGhpcy5pc0NoZWNrYm94TGlzdF8gfHwgdGhpcy5pc1JhZGlvTGlzdF87XG4gICAgfTtcbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0VGFiaW5kZXhUb0ZpcnN0U2VsZWN0ZWRJdGVtXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRhcmdldEluZGV4ID0gMDtcbiAgICAgICAgaWYgKHRoaXMuaXNTZWxlY3RhYmxlTGlzdF8oKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnNlbGVjdGVkSW5kZXhfID09PSAnbnVtYmVyJyAmJiB0aGlzLnNlbGVjdGVkSW5kZXhfICE9PSBudW1iZXJzLlVOU0VUX0lOREVYKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0SW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXhfO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNOdW1iZXJBcnJheSh0aGlzLnNlbGVjdGVkSW5kZXhfKSAmJiB0aGlzLnNlbGVjdGVkSW5kZXhfLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleF8ucmVkdWNlKGZ1bmN0aW9uIChjdXJyZW50SW5kZXgsIG1pbkluZGV4KSB7IHJldHVybiBNYXRoLm1pbihjdXJyZW50SW5kZXgsIG1pbkluZGV4KTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRUYWJpbmRleEF0SW5kZXhfKHRhcmdldEluZGV4KTtcbiAgICB9O1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5pc0luZGV4VmFsaWRfID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChpbmRleCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNDaGVja2JveExpc3RfKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNRENMaXN0Rm91bmRhdGlvbjogQXJyYXkgb2YgaW5kZXggaXMgb25seSBzdXBwb3J0ZWQgZm9yIGNoZWNrYm94IGJhc2VkIGxpc3QnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpbmRleC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleC5zb21lKGZ1bmN0aW9uIChpKSB7IHJldHVybiBfdGhpcy5pc0luZGV4SW5SYW5nZV8oaSk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBpbmRleCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ2hlY2tib3hMaXN0Xykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTURDTGlzdEZvdW5kYXRpb246IEV4cGVjdGVkIGFycmF5IG9mIGluZGV4IGZvciBjaGVja2JveCBiYXNlZCBsaXN0IGJ1dCBnb3QgbnVtYmVyOiAnICsgaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNJbmRleEluUmFuZ2VfKGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLmlzSW5kZXhJblJhbmdlXyA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB2YXIgbGlzdFNpemUgPSB0aGlzLmFkYXB0ZXJfLmdldExpc3RJdGVtQ291bnQoKTtcbiAgICAgICAgcmV0dXJuIGluZGV4ID49IDAgJiYgaW5kZXggPCBsaXN0U2l6ZTtcbiAgICB9O1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRTZWxlY3RlZEluZGV4T25BY3Rpb25fID0gZnVuY3Rpb24gKGluZGV4LCB0b2dnbGVDaGVja2JveCkge1xuICAgICAgICBpZiAodG9nZ2xlQ2hlY2tib3ggPT09IHZvaWQgMCkgeyB0b2dnbGVDaGVja2JveCA9IHRydWU7IH1cbiAgICAgICAgaWYgKHRoaXMuaXNDaGVja2JveExpc3RfKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUNoZWNrYm94QXRJbmRleF8oaW5kZXgsIHRvZ2dsZUNoZWNrYm94KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRJbmRleChpbmRleCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS50b2dnbGVDaGVja2JveEF0SW5kZXhfID0gZnVuY3Rpb24gKGluZGV4LCB0b2dnbGVDaGVja2JveCkge1xuICAgICAgICB2YXIgaXNDaGVja2VkID0gdGhpcy5hZGFwdGVyXy5pc0NoZWNrYm94Q2hlY2tlZEF0SW5kZXgoaW5kZXgpO1xuICAgICAgICBpZiAodG9nZ2xlQ2hlY2tib3gpIHtcbiAgICAgICAgICAgIGlzQ2hlY2tlZCA9ICFpc0NoZWNrZWQ7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldENoZWNrZWRDaGVja2JveE9yUmFkaW9BdEluZGV4KGluZGV4LCBpc0NoZWNrZWQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KGluZGV4LCBzdHJpbmdzLkFSSUFfQ0hFQ0tFRCwgaXNDaGVja2VkID8gJ3RydWUnIDogJ2ZhbHNlJyk7XG4gICAgICAgIC8vIElmIG5vbmUgb2YgdGhlIGNoZWNrYm94IGl0ZW1zIGFyZSBzZWxlY3RlZCBhbmQgc2VsZWN0ZWRJbmRleCBpcyBub3QgaW5pdGlhbGl6ZWQgdGhlbiBwcm92aWRlIGEgZGVmYXVsdCB2YWx1ZS5cbiAgICAgICAgdmFyIHNlbGVjdGVkSW5kZXhlcyA9IHRoaXMuc2VsZWN0ZWRJbmRleF8gPT09IG51bWJlcnMuVU5TRVRfSU5ERVggPyBbXSA6IHRoaXMuc2VsZWN0ZWRJbmRleF8uc2xpY2UoKTtcbiAgICAgICAgaWYgKGlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgc2VsZWN0ZWRJbmRleGVzLnB1c2goaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0ZWRJbmRleGVzID0gc2VsZWN0ZWRJbmRleGVzLmZpbHRlcihmdW5jdGlvbiAoaSkgeyByZXR1cm4gaSAhPT0gaW5kZXg7IH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleF8gPSBzZWxlY3RlZEluZGV4ZXM7XG4gICAgfTtcbiAgICByZXR1cm4gTURDTGlzdEZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ0xpc3RGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDTGlzdEZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0NvbXBvbmVudCB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBjbG9zZXN0LCBtYXRjaGVzIH0gZnJvbSAnQG1hdGVyaWFsL2RvbS9wb255ZmlsbCc7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgTURDTGlzdEZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xudmFyIE1EQ0xpc3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDTGlzdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENMaXN0KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENMaXN0LnByb3RvdHlwZSwgXCJ2ZXJ0aWNhbFwiLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldFZlcnRpY2FsT3JpZW50YXRpb24odmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTGlzdC5wcm90b3R5cGUsIFwibGlzdEVsZW1lbnRzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gW10uc2xpY2UuY2FsbCh0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIgKyBjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTUykpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTGlzdC5wcm90b3R5cGUsIFwid3JhcEZvY3VzXCIsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0V3JhcEZvY3VzKHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0xpc3QucHJvdG90eXBlLCBcInNpbmdsZVNlbGVjdGlvblwiLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKGlzU2luZ2xlU2VsZWN0aW9uTGlzdCkge1xuICAgICAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRTaW5nbGVTZWxlY3Rpb24oaXNTaW5nbGVTZWxlY3Rpb25MaXN0KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0xpc3QucHJvdG90eXBlLCBcInNlbGVjdGVkSW5kZXhcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb25fLmdldFNlbGVjdGVkSW5kZXgoKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0U2VsZWN0ZWRJbmRleChpbmRleCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0xpc3QuYXR0YWNoVG8gPSBmdW5jdGlvbiAocm9vdCkge1xuICAgICAgICByZXR1cm4gbmV3IE1EQ0xpc3Qocm9vdCk7XG4gICAgfTtcbiAgICBNRENMaXN0LnByb3RvdHlwZS5pbml0aWFsU3luY1dpdGhET00gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2tfID0gdGhpcy5oYW5kbGVDbGlja0V2ZW50Xy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUtleWRvd25fID0gdGhpcy5oYW5kbGVLZXlkb3duRXZlbnRfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZm9jdXNJbkV2ZW50TGlzdGVuZXJfID0gdGhpcy5oYW5kbGVGb2N1c0luRXZlbnRfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZm9jdXNPdXRFdmVudExpc3RlbmVyXyA9IHRoaXMuaGFuZGxlRm9jdXNPdXRFdmVudF8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5saXN0ZW4oJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd25fKTtcbiAgICAgICAgdGhpcy5saXN0ZW4oJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGlja18pO1xuICAgICAgICB0aGlzLmxpc3RlbignZm9jdXNpbicsIHRoaXMuZm9jdXNJbkV2ZW50TGlzdGVuZXJfKTtcbiAgICAgICAgdGhpcy5saXN0ZW4oJ2ZvY3Vzb3V0JywgdGhpcy5mb2N1c091dEV2ZW50TGlzdGVuZXJfKTtcbiAgICAgICAgdGhpcy5sYXlvdXQoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplTGlzdFR5cGUoKTtcbiAgICB9O1xuICAgIE1EQ0xpc3QucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudW5saXN0ZW4oJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd25fKTtcbiAgICAgICAgdGhpcy51bmxpc3RlbignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrXyk7XG4gICAgICAgIHRoaXMudW5saXN0ZW4oJ2ZvY3VzaW4nLCB0aGlzLmZvY3VzSW5FdmVudExpc3RlbmVyXyk7XG4gICAgICAgIHRoaXMudW5saXN0ZW4oJ2ZvY3Vzb3V0JywgdGhpcy5mb2N1c091dEV2ZW50TGlzdGVuZXJfKTtcbiAgICB9O1xuICAgIE1EQ0xpc3QucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRpcmVjdGlvbiA9IHRoaXMucm9vdF8uZ2V0QXR0cmlidXRlKHN0cmluZ3MuQVJJQV9PUklFTlRBVElPTik7XG4gICAgICAgIHRoaXMudmVydGljYWwgPSBkaXJlY3Rpb24gIT09IHN0cmluZ3MuQVJJQV9PUklFTlRBVElPTl9IT1JJWk9OVEFMO1xuICAgICAgICAvLyBMaXN0IGl0ZW1zIG5lZWQgdG8gaGF2ZSBhdCBsZWFzdCB0YWJpbmRleD0tMSB0byBiZSBmb2N1c2FibGUuXG4gICAgICAgIFtdLnNsaWNlLmNhbGwodGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yQWxsKCcubWRjLWxpc3QtaXRlbTpub3QoW3RhYmluZGV4XSknKSlcbiAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gQ2hpbGQgYnV0dG9uL2EgZWxlbWVudHMgYXJlIG5vdCB0YWJiYWJsZSB1bnRpbCB0aGUgbGlzdCBpdGVtIGlzIGZvY3VzZWQuXG4gICAgICAgIFtdLnNsaWNlLmNhbGwodGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yQWxsKHN0cmluZ3MuRk9DVVNBQkxFX0NISUxEX0VMRU1FTlRTKSlcbiAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gZWwuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpOyB9KTtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5sYXlvdXQoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgc2VsZWN0ZWRJbmRleCB2YWx1ZSBiYXNlZCBvbiBwcmUtc2VsZWN0ZWQgY2hlY2tib3ggbGlzdCBpdGVtcywgc2luZ2xlIHNlbGVjdGlvbiBvciByYWRpby5cbiAgICAgKi9cbiAgICBNRENMaXN0LnByb3RvdHlwZS5pbml0aWFsaXplTGlzdFR5cGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBjaGVja2JveExpc3RJdGVtcyA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvckFsbChzdHJpbmdzLkFSSUFfUk9MRV9DSEVDS0JPWF9TRUxFQ1RPUik7XG4gICAgICAgIHZhciBzaW5nbGVTZWxlY3RlZExpc3RJdGVtID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKFwiXFxuICAgICAgLlwiICsgY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQUNUSVZBVEVEX0NMQVNTICsgXCIsXFxuICAgICAgLlwiICsgY3NzQ2xhc3Nlcy5MSVNUX0lURU1fU0VMRUNURURfQ0xBU1MgKyBcIlxcbiAgICBcIik7XG4gICAgICAgIHZhciByYWRpb1NlbGVjdGVkTGlzdEl0ZW0gPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5BUklBX0NIRUNLRURfUkFESU9fU0VMRUNUT1IpO1xuICAgICAgICBpZiAoY2hlY2tib3hMaXN0SXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgcHJlc2VsZWN0ZWRJdGVtcyA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvckFsbChzdHJpbmdzLkFSSUFfQ0hFQ0tFRF9DSEVDS0JPWF9TRUxFQ1RPUik7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPVxuICAgICAgICAgICAgICAgIFtdLm1hcC5jYWxsKHByZXNlbGVjdGVkSXRlbXMsIGZ1bmN0aW9uIChsaXN0SXRlbSkgeyByZXR1cm4gX3RoaXMubGlzdEVsZW1lbnRzLmluZGV4T2YobGlzdEl0ZW0pOyB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzaW5nbGVTZWxlY3RlZExpc3RJdGVtKSB7XG4gICAgICAgICAgICBpZiAoc2luZ2xlU2VsZWN0ZWRMaXN0SXRlbS5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQUNUSVZBVEVEX0NMQVNTKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0VXNlQWN0aXZhdGVkQ2xhc3ModHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNpbmdsZVNlbGVjdGlvbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLmxpc3RFbGVtZW50cy5pbmRleE9mKHNpbmdsZVNlbGVjdGVkTGlzdEl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJhZGlvU2VsZWN0ZWRMaXN0SXRlbSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5saXN0RWxlbWVudHMuaW5kZXhPZihyYWRpb1NlbGVjdGVkTGlzdEl0ZW0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBsaXN0IGl0ZW0gYXQgaXRlbUluZGV4IHRvIHRoZSBkZXNpcmVkIGlzRW5hYmxlZCBzdGF0ZS5cbiAgICAgKiBAcGFyYW0gaXRlbUluZGV4IEluZGV4IG9mIHRoZSBsaXN0IGl0ZW1cbiAgICAgKiBAcGFyYW0gaXNFbmFibGVkIFNldHMgdGhlIGxpc3QgaXRlbSB0byBlbmFibGVkIG9yIGRpc2FibGVkLlxuICAgICAqL1xuICAgIE1EQ0xpc3QucHJvdG90eXBlLnNldEVuYWJsZWQgPSBmdW5jdGlvbiAoaXRlbUluZGV4LCBpc0VuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRFbmFibGVkKGl0ZW1JbmRleCwgaXNFbmFibGVkKTtcbiAgICB9O1xuICAgIE1EQ0xpc3QucHJvdG90eXBlLmdldERlZmF1bHRGb3VuZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBETyBOT1QgSU5MSU5FIHRoaXMgdmFyaWFibGUuIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCBmb3VuZGF0aW9ucyB0YWtlIGEgUGFydGlhbDxNRENGb29BZGFwdGVyPi5cbiAgICAgICAgLy8gVG8gZW5zdXJlIHdlIGRvbid0IGFjY2lkZW50YWxseSBvbWl0IGFueSBtZXRob2RzLCB3ZSBuZWVkIGEgc2VwYXJhdGUsIHN0cm9uZ2x5IHR5cGVkIGFkYXB0ZXIgdmFyaWFibGUuXG4gICAgICAgIHZhciBhZGFwdGVyID0ge1xuICAgICAgICAgICAgYWRkQ2xhc3NGb3JFbGVtZW50SW5kZXg6IGZ1bmN0aW9uIChpbmRleCwgY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBfdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb2N1c0l0ZW1BdEluZGV4OiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IF90aGlzLmxpc3RFbGVtZW50c1tpbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXg6IGZ1bmN0aW9uIChpbmRleCwgYXR0cikgeyByZXR1cm4gX3RoaXMubGlzdEVsZW1lbnRzW2luZGV4XS5nZXRBdHRyaWJ1dGUoYXR0cik7IH0sXG4gICAgICAgICAgICBnZXRGb2N1c2VkRWxlbWVudEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5saXN0RWxlbWVudHMuaW5kZXhPZihkb2N1bWVudC5hY3RpdmVFbGVtZW50KTsgfSxcbiAgICAgICAgICAgIGdldExpc3RJdGVtQ291bnQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmxpc3RFbGVtZW50cy5sZW5ndGg7IH0sXG4gICAgICAgICAgICBoYXNDaGVja2JveEF0SW5kZXg6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBsaXN0SXRlbSA9IF90aGlzLmxpc3RFbGVtZW50c1tpbmRleF07XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcihzdHJpbmdzLkNIRUNLQk9YX1NFTEVDVE9SKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYXNSYWRpb0F0SW5kZXg6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBsaXN0SXRlbSA9IF90aGlzLmxpc3RFbGVtZW50c1tpbmRleF07XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcihzdHJpbmdzLlJBRElPX1NFTEVDVE9SKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc0NoZWNrYm94Q2hlY2tlZEF0SW5kZXg6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBsaXN0SXRlbSA9IF90aGlzLmxpc3RFbGVtZW50c1tpbmRleF07XG4gICAgICAgICAgICAgICAgdmFyIHRvZ2dsZUVsID0gbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcihzdHJpbmdzLkNIRUNLQk9YX1NFTEVDVE9SKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9nZ2xlRWwuY2hlY2tlZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc0ZvY3VzSW5zaWRlTGlzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5yb290Xy5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc1Jvb3RGb2N1c2VkOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBfdGhpcy5yb290XzsgfSxcbiAgICAgICAgICAgIG5vdGlmeUFjdGlvbjogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZW1pdChzdHJpbmdzLkFDVElPTl9FVkVOVCwgeyBpbmRleDogaW5kZXggfSwgLyoqIHNob3VsZEJ1YmJsZSAqLyB0cnVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW1vdmVDbGFzc0ZvckVsZW1lbnRJbmRleDogZnVuY3Rpb24gKGluZGV4LCBjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IF90aGlzLmxpc3RFbGVtZW50c1tpbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleDogZnVuY3Rpb24gKGluZGV4LCBhdHRyLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gX3RoaXMubGlzdEVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldENoZWNrZWRDaGVja2JveE9yUmFkaW9BdEluZGV4OiBmdW5jdGlvbiAoaW5kZXgsIGlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIHZhciBsaXN0SXRlbSA9IF90aGlzLmxpc3RFbGVtZW50c1tpbmRleF07XG4gICAgICAgICAgICAgICAgdmFyIHRvZ2dsZUVsID0gbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcihzdHJpbmdzLkNIRUNLQk9YX1JBRElPX1NFTEVDVE9SKTtcbiAgICAgICAgICAgICAgICB0b2dnbGVFbC5jaGVja2VkID0gaXNDaGVja2VkO1xuICAgICAgICAgICAgICAgIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgICAgICAgICAgICAgIGV2ZW50LmluaXRFdmVudCgnY2hhbmdlJywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdG9nZ2xlRWwuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0VGFiSW5kZXhGb3JMaXN0SXRlbUNoaWxkcmVuOiBmdW5jdGlvbiAobGlzdEl0ZW1JbmRleCwgdGFiSW5kZXhWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gX3RoaXMubGlzdEVsZW1lbnRzW2xpc3RJdGVtSW5kZXhdO1xuICAgICAgICAgICAgICAgIHZhciBsaXN0SXRlbUNoaWxkcmVuID0gW10uc2xpY2UuY2FsbChlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc3RyaW5ncy5DSElMRF9FTEVNRU5UU19UT19UT0dHTEVfVEFCSU5ERVgpKTtcbiAgICAgICAgICAgICAgICBsaXN0SXRlbUNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7IHJldHVybiBlbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgdGFiSW5kZXhWYWx1ZSk7IH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBNRENMaXN0Rm91bmRhdGlvbihhZGFwdGVyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVzZWQgdG8gZmlndXJlIG91dCB3aGljaCBsaXN0IGl0ZW0gdGhpcyBldmVudCBpcyB0YXJnZXR0aW5nLiBPciByZXR1cm5zIC0xIGlmXG4gICAgICogdGhlcmUgaXMgbm8gbGlzdCBpdGVtXG4gICAgICovXG4gICAgTURDTGlzdC5wcm90b3R5cGUuZ2V0TGlzdEl0ZW1JbmRleF8gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBldmVudFRhcmdldCA9IGV2dC50YXJnZXQ7XG4gICAgICAgIHZhciBuZWFyZXN0UGFyZW50ID0gY2xvc2VzdChldmVudFRhcmdldCwgXCIuXCIgKyBjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTUyArIFwiLCAuXCIgKyBjc3NDbGFzc2VzLlJPT1QpO1xuICAgICAgICAvLyBHZXQgdGhlIGluZGV4IG9mIHRoZSBlbGVtZW50IGlmIGl0IGlzIGEgbGlzdCBpdGVtLlxuICAgICAgICBpZiAobmVhcmVzdFBhcmVudCAmJiBtYXRjaGVzKG5lYXJlc3RQYXJlbnQsIFwiLlwiICsgY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1MpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saXN0RWxlbWVudHMuaW5kZXhPZihuZWFyZXN0UGFyZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIGZpZ3VyZSBvdXQgd2hpY2ggZWxlbWVudCB3YXMgY2xpY2tlZCBiZWZvcmUgc2VuZGluZyB0aGUgZXZlbnQgdG8gdGhlIGZvdW5kYXRpb24uXG4gICAgICovXG4gICAgTURDTGlzdC5wcm90b3R5cGUuaGFuZGxlRm9jdXNJbkV2ZW50XyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRMaXN0SXRlbUluZGV4XyhldnQpO1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmhhbmRsZUZvY3VzSW4oZXZ0LCBpbmRleCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIGZpZ3VyZSBvdXQgd2hpY2ggZWxlbWVudCB3YXMgY2xpY2tlZCBiZWZvcmUgc2VuZGluZyB0aGUgZXZlbnQgdG8gdGhlIGZvdW5kYXRpb24uXG4gICAgICovXG4gICAgTURDTGlzdC5wcm90b3R5cGUuaGFuZGxlRm9jdXNPdXRFdmVudF8gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0TGlzdEl0ZW1JbmRleF8oZXZ0KTtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVGb2N1c091dChldnQsIGluZGV4KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVzZWQgdG8gZmlndXJlIG91dCB3aGljaCBlbGVtZW50IHdhcyBmb2N1c2VkIHdoZW4ga2V5ZG93biBldmVudCBvY2N1cnJlZCBiZWZvcmUgc2VuZGluZyB0aGUgZXZlbnQgdG8gdGhlXG4gICAgICogZm91bmRhdGlvbi5cbiAgICAgKi9cbiAgICBNRENMaXN0LnByb3RvdHlwZS5oYW5kbGVLZXlkb3duRXZlbnRfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldExpc3RJdGVtSW5kZXhfKGV2dCk7XG4gICAgICAgIHZhciB0YXJnZXQgPSBldnQudGFyZ2V0O1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmhhbmRsZUtleWRvd24oZXZ0LCB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTKSwgaW5kZXgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXNlZCB0byBmaWd1cmUgb3V0IHdoaWNoIGVsZW1lbnQgd2FzIGNsaWNrZWQgYmVmb3JlIHNlbmRpbmcgdGhlIGV2ZW50IHRvIHRoZSBmb3VuZGF0aW9uLlxuICAgICAqL1xuICAgIE1EQ0xpc3QucHJvdG90eXBlLmhhbmRsZUNsaWNrRXZlbnRfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldExpc3RJdGVtSW5kZXhfKGV2dCk7XG4gICAgICAgIHZhciB0YXJnZXQgPSBldnQudGFyZ2V0O1xuICAgICAgICAvLyBUb2dnbGUgdGhlIGNoZWNrYm94IG9ubHkgaWYgaXQncyBub3QgdGhlIHRhcmdldCBvZiB0aGUgZXZlbnQsIG9yIHRoZSBjaGVja2JveCB3aWxsIGhhdmUgMiBjaGFuZ2UgZXZlbnRzLlxuICAgICAgICB2YXIgdG9nZ2xlQ2hlY2tib3ggPSAhbWF0Y2hlcyh0YXJnZXQsIHN0cmluZ3MuQ0hFQ0tCT1hfUkFESU9fU0VMRUNUT1IpO1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmhhbmRsZUNsaWNrKGluZGV4LCB0b2dnbGVDaGVja2JveCk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDTGlzdDtcbn0oTURDQ29tcG9uZW50KSk7XG5leHBvcnQgeyBNRENMaXN0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgQ29ybmVyLCBDb3JuZXJCaXQsIGNzc0NsYXNzZXMsIG51bWJlcnMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5pc09wZW5fID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmlzUXVpY2tPcGVuXyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5pc0hvaXN0ZWRFbGVtZW50XyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5pc0ZpeGVkUG9zaXRpb25fID0gZmFsc2U7XG4gICAgICAgIF90aGlzLm9wZW5BbmltYXRpb25FbmRUaW1lcklkXyA9IDA7XG4gICAgICAgIF90aGlzLmNsb3NlQW5pbWF0aW9uRW5kVGltZXJJZF8gPSAwO1xuICAgICAgICBfdGhpcy5hbmltYXRpb25SZXF1ZXN0SWRfID0gMDtcbiAgICAgICAgX3RoaXMuYW5jaG9yQ29ybmVyXyA9IENvcm5lci5UT1BfU1RBUlQ7XG4gICAgICAgIF90aGlzLmFuY2hvck1hcmdpbl8gPSB7IHRvcDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMCwgbGVmdDogMCB9O1xuICAgICAgICBfdGhpcy5wb3NpdGlvbl8gPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLCBcIkNvcm5lclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIENvcm5lcjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAc2VlIHtAbGluayBNRENNZW51U3VyZmFjZUFkYXB0ZXJ9IGZvciB0eXBpbmcgaW5mb3JtYXRpb24gb24gcGFyYW1ldGVycyBhbmQgcmV0dXJuIHR5cGVzLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgaGFzQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGhhc0FuY2hvcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgaXNFbGVtZW50SW5Db250YWluZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGlzRm9jdXNlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgaXNSdGw6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGdldElubmVyRGltZW5zaW9uczogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgaGVpZ2h0OiAwLCB3aWR0aDogMCB9KTsgfSxcbiAgICAgICAgICAgICAgICBnZXRBbmNob3JEaW1lbnNpb25zOiBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICAgICAgICAgIGdldFdpbmRvd0RpbWVuc2lvbnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IGhlaWdodDogMCwgd2lkdGg6IDAgfSk7IH0sXG4gICAgICAgICAgICAgICAgZ2V0Qm9keURpbWVuc2lvbnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IGhlaWdodDogMCwgd2lkdGg6IDAgfSk7IH0sXG4gICAgICAgICAgICAgICAgZ2V0V2luZG93U2Nyb2xsOiBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyB4OiAwLCB5OiAwIH0pOyB9LFxuICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0TWF4SGVpZ2h0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0VHJhbnNmb3JtT3JpZ2luOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2F2ZUZvY3VzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVzdG9yZUZvY3VzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5Q2xvc2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlPcGVuOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3NlcywgUk9PVCA9IF9hLlJPT1QsIE9QRU4gPSBfYS5PUEVOO1xuICAgICAgICBpZiAoIXRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoUk9PVCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihST09UICsgXCIgY2xhc3MgcmVxdWlyZWQgaW4gcm9vdCBlbGVtZW50LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhPUEVOKSkge1xuICAgICAgICAgICAgdGhpcy5pc09wZW5fID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5vcGVuQW5pbWF0aW9uRW5kVGltZXJJZF8pO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5jbG9zZUFuaW1hdGlvbkVuZFRpbWVySWRfKTtcbiAgICAgICAgLy8gQ2FuY2VsIGFueSBjdXJyZW50bHkgcnVubmluZyBhbmltYXRpb25zLlxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvblJlcXVlc3RJZF8pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNvcm5lciBEZWZhdWx0IGFuY2hvciBjb3JuZXIgYWxpZ25tZW50IG9mIHRvcC1sZWZ0IG1lbnUgc3VyZmFjZSBjb3JuZXIuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRBbmNob3JDb3JuZXIgPSBmdW5jdGlvbiAoY29ybmVyKSB7XG4gICAgICAgIHRoaXMuYW5jaG9yQ29ybmVyXyA9IGNvcm5lcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBtYXJnaW4gU2V0IG9mIG1hcmdpbiB2YWx1ZXMgZnJvbSBhbmNob3IuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRBbmNob3JNYXJnaW4gPSBmdW5jdGlvbiAobWFyZ2luKSB7XG4gICAgICAgIHRoaXMuYW5jaG9yTWFyZ2luXy50b3AgPSBtYXJnaW4udG9wIHx8IDA7XG4gICAgICAgIHRoaXMuYW5jaG9yTWFyZ2luXy5yaWdodCA9IG1hcmdpbi5yaWdodCB8fCAwO1xuICAgICAgICB0aGlzLmFuY2hvck1hcmdpbl8uYm90dG9tID0gbWFyZ2luLmJvdHRvbSB8fCAwO1xuICAgICAgICB0aGlzLmFuY2hvck1hcmdpbl8ubGVmdCA9IG1hcmdpbi5sZWZ0IHx8IDA7XG4gICAgfTtcbiAgICAvKiogVXNlZCB0byBpbmRpY2F0ZSBpZiB0aGUgbWVudS1zdXJmYWNlIGlzIGhvaXN0ZWQgdG8gdGhlIGJvZHkuICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRJc0hvaXN0ZWQgPSBmdW5jdGlvbiAoaXNIb2lzdGVkKSB7XG4gICAgICAgIHRoaXMuaXNIb2lzdGVkRWxlbWVudF8gPSBpc0hvaXN0ZWQ7XG4gICAgfTtcbiAgICAvKiogVXNlZCB0byBzZXQgdGhlIG1lbnUtc3VyZmFjZSBjYWxjdWxhdGlvbnMgYmFzZWQgb24gYSBmaXhlZCBwb3NpdGlvbiBtZW51LiAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0Rml4ZWRQb3NpdGlvbiA9IGZ1bmN0aW9uIChpc0ZpeGVkUG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5pc0ZpeGVkUG9zaXRpb25fID0gaXNGaXhlZFBvc2l0aW9uO1xuICAgIH07XG4gICAgLyoqIFNldHMgdGhlIG1lbnUtc3VyZmFjZSBwb3NpdGlvbiBvbiB0aGUgcGFnZS4gKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLnNldEFic29sdXRlUG9zaXRpb24gPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uXy54ID0gdGhpcy5pc0Zpbml0ZV8oeCkgPyB4IDogMDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbl8ueSA9IHRoaXMuaXNGaW5pdGVfKHkpID8geSA6IDA7XG4gICAgfTtcbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLnNldFF1aWNrT3BlbiA9IGZ1bmN0aW9uIChxdWlja09wZW4pIHtcbiAgICAgICAgdGhpcy5pc1F1aWNrT3Blbl8gPSBxdWlja09wZW47XG4gICAgfTtcbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmlzT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNPcGVuXztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE9wZW4gdGhlIG1lbnUgc3VyZmFjZS5cbiAgICAgKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2F2ZUZvY3VzKCk7XG4gICAgICAgIGlmICghdGhpcy5pc1F1aWNrT3Blbl8pIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQU5JTUFUSU5HX09QRU4pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uUmVxdWVzdElkXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5PUEVOKTtcbiAgICAgICAgICAgIF90aGlzLmRpbWVuc2lvbnNfID0gX3RoaXMuYWRhcHRlcl8uZ2V0SW5uZXJEaW1lbnNpb25zKCk7XG4gICAgICAgICAgICBfdGhpcy5hdXRvUG9zaXRpb25fKCk7XG4gICAgICAgICAgICBpZiAoX3RoaXMuaXNRdWlja09wZW5fKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ubm90aWZ5T3BlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMub3BlbkFuaW1hdGlvbkVuZFRpbWVySWRfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm9wZW5BbmltYXRpb25FbmRUaW1lcklkXyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkFOSU1BVElOR19PUEVOKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ubm90aWZ5T3BlbigpO1xuICAgICAgICAgICAgICAgIH0sIG51bWJlcnMuVFJBTlNJVElPTl9PUEVOX0RVUkFUSU9OKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaXNPcGVuXyA9IHRydWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDbG9zZXMgdGhlIG1lbnUgc3VyZmFjZS5cbiAgICAgKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKHNraXBSZXN0b3JlRm9jdXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHNraXBSZXN0b3JlRm9jdXMgPT09IHZvaWQgMCkgeyBza2lwUmVzdG9yZUZvY3VzID0gZmFsc2U7IH1cbiAgICAgICAgaWYgKCF0aGlzLmlzUXVpY2tPcGVuXykge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BTklNQVRJTkdfQ0xPU0VEKTtcbiAgICAgICAgfVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLmNzc0NsYXNzZXMuT1BFTik7XG4gICAgICAgICAgICBpZiAoX3RoaXMuaXNRdWlja09wZW5fKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ubm90aWZ5Q2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLmNsb3NlQW5pbWF0aW9uRW5kVGltZXJJZF8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2xvc2VBbmltYXRpb25FbmRUaW1lcklkXyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkFOSU1BVElOR19DTE9TRUQpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5ub3RpZnlDbG9zZSgpO1xuICAgICAgICAgICAgICAgIH0sIG51bWJlcnMuVFJBTlNJVElPTl9DTE9TRV9EVVJBVElPTik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmlzT3Blbl8gPSBmYWxzZTtcbiAgICAgICAgaWYgKCFza2lwUmVzdG9yZUZvY3VzKSB7XG4gICAgICAgICAgICB0aGlzLm1heWJlUmVzdG9yZUZvY3VzXygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKiogSGFuZGxlIGNsaWNrcyBhbmQgY2xvc2UgaWYgbm90IHdpdGhpbiBtZW51LXN1cmZhY2UgZWxlbWVudC4gKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUJvZHlDbGljayA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIGVsID0gZXZ0LnRhcmdldDtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNFbGVtZW50SW5Db250YWluZXIoZWwpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH07XG4gICAgLyoqIEhhbmRsZSBrZXlzIHRoYXQgY2xvc2UgdGhlIHN1cmZhY2UuICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVLZXlkb3duID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIga2V5Q29kZSA9IGV2dC5rZXlDb2RlLCBrZXkgPSBldnQua2V5O1xuICAgICAgICB2YXIgaXNFc2NhcGUgPSBrZXkgPT09ICdFc2NhcGUnIHx8IGtleUNvZGUgPT09IDI3O1xuICAgICAgICBpZiAoaXNFc2NhcGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5hdXRvUG9zaXRpb25fID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIC8vIENvbXB1dGUgbWVhc3VyZW1lbnRzIGZvciBhdXRvcG9zaXRpb24gbWV0aG9kcyByZXVzZS5cbiAgICAgICAgdGhpcy5tZWFzdXJlbWVudHNfID0gdGhpcy5nZXRBdXRvTGF5b3V0TWVhc3VyZW1lbnRzXygpO1xuICAgICAgICB2YXIgY29ybmVyID0gdGhpcy5nZXRPcmlnaW5Db3JuZXJfKCk7XG4gICAgICAgIHZhciBtYXhNZW51U3VyZmFjZUhlaWdodCA9IHRoaXMuZ2V0TWVudVN1cmZhY2VNYXhIZWlnaHRfKGNvcm5lcik7XG4gICAgICAgIHZhciB2ZXJ0aWNhbEFsaWdubWVudCA9IHRoaXMuaGFzQml0Xyhjb3JuZXIsIENvcm5lckJpdC5CT1RUT00pID8gJ2JvdHRvbScgOiAndG9wJztcbiAgICAgICAgdmFyIGhvcml6b250YWxBbGlnbm1lbnQgPSB0aGlzLmhhc0JpdF8oY29ybmVyLCBDb3JuZXJCaXQuUklHSFQpID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICAgICAgdmFyIGhvcml6b250YWxPZmZzZXQgPSB0aGlzLmdldEhvcml6b250YWxPcmlnaW5PZmZzZXRfKGNvcm5lcik7XG4gICAgICAgIHZhciB2ZXJ0aWNhbE9mZnNldCA9IHRoaXMuZ2V0VmVydGljYWxPcmlnaW5PZmZzZXRfKGNvcm5lcik7XG4gICAgICAgIHZhciBfYiA9IHRoaXMubWVhc3VyZW1lbnRzXywgYW5jaG9yU2l6ZSA9IF9iLmFuY2hvclNpemUsIHN1cmZhY2VTaXplID0gX2Iuc3VyZmFjZVNpemU7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IChfYSA9IHt9LFxuICAgICAgICAgICAgX2FbaG9yaXpvbnRhbEFsaWdubWVudF0gPSBob3Jpem9udGFsT2Zmc2V0LFxuICAgICAgICAgICAgX2FbdmVydGljYWxBbGlnbm1lbnRdID0gdmVydGljYWxPZmZzZXQsXG4gICAgICAgICAgICBfYSk7XG4gICAgICAgIC8vIENlbnRlciBhbGlnbiB3aGVuIGFuY2hvciB3aWR0aCBpcyBjb21wYXJhYmxlIG9yIGdyZWF0ZXIgdGhhbiBtZW51IHN1cmZhY2UsIG90aGVyd2lzZSBrZWVwIGNvcm5lci5cbiAgICAgICAgaWYgKGFuY2hvclNpemUud2lkdGggLyBzdXJmYWNlU2l6ZS53aWR0aCA+IG51bWJlcnMuQU5DSE9SX1RPX01FTlVfU1VSRkFDRV9XSURUSF9SQVRJTykge1xuICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudCA9ICdjZW50ZXInO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBtZW51LXN1cmZhY2UgaGFzIGJlZW4gaG9pc3RlZCB0byB0aGUgYm9keSwgaXQncyBubyBsb25nZXIgcmVsYXRpdmUgdG8gdGhlIGFuY2hvciBlbGVtZW50XG4gICAgICAgIGlmICh0aGlzLmlzSG9pc3RlZEVsZW1lbnRfIHx8IHRoaXMuaXNGaXhlZFBvc2l0aW9uXykge1xuICAgICAgICAgICAgdGhpcy5hZGp1c3RQb3NpdGlvbkZvckhvaXN0ZWRFbGVtZW50Xyhwb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRUcmFuc2Zvcm1PcmlnaW4oaG9yaXpvbnRhbEFsaWdubWVudCArIFwiIFwiICsgdmVydGljYWxBbGlnbm1lbnQpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRNYXhIZWlnaHQobWF4TWVudVN1cmZhY2VIZWlnaHQgPyBtYXhNZW51U3VyZmFjZUhlaWdodCArICdweCcgOiAnJyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIE1lYXN1cmVtZW50cyB1c2VkIHRvIHBvc2l0aW9uIG1lbnUgc3VyZmFjZSBwb3B1cC5cbiAgICAgKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmdldEF1dG9MYXlvdXRNZWFzdXJlbWVudHNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYW5jaG9yUmVjdCA9IHRoaXMuYWRhcHRlcl8uZ2V0QW5jaG9yRGltZW5zaW9ucygpO1xuICAgICAgICB2YXIgYm9keVNpemUgPSB0aGlzLmFkYXB0ZXJfLmdldEJvZHlEaW1lbnNpb25zKCk7XG4gICAgICAgIHZhciB2aWV3cG9ydFNpemUgPSB0aGlzLmFkYXB0ZXJfLmdldFdpbmRvd0RpbWVuc2lvbnMoKTtcbiAgICAgICAgdmFyIHdpbmRvd1Njcm9sbCA9IHRoaXMuYWRhcHRlcl8uZ2V0V2luZG93U2Nyb2xsKCk7XG4gICAgICAgIGlmICghYW5jaG9yUmVjdCkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIFBvc2l0aW9uYWwgcHJvcGVydGllcyBhcmUgbW9yZSByZWFkYWJsZSB3aGVuIHRoZXkncmUgZ3JvdXBlZCB0b2dldGhlclxuICAgICAgICAgICAgYW5jaG9yUmVjdCA9IHtcbiAgICAgICAgICAgICAgICB0b3A6IHRoaXMucG9zaXRpb25fLnksXG4gICAgICAgICAgICAgICAgcmlnaHQ6IHRoaXMucG9zaXRpb25fLngsXG4gICAgICAgICAgICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uXy55LFxuICAgICAgICAgICAgICAgIGxlZnQ6IHRoaXMucG9zaXRpb25fLngsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFuY2hvclNpemU6IGFuY2hvclJlY3QsXG4gICAgICAgICAgICBib2R5U2l6ZTogYm9keVNpemUsXG4gICAgICAgICAgICBzdXJmYWNlU2l6ZTogdGhpcy5kaW1lbnNpb25zXyxcbiAgICAgICAgICAgIHZpZXdwb3J0RGlzdGFuY2U6IHtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgUG9zaXRpb25hbCBwcm9wZXJ0aWVzIGFyZSBtb3JlIHJlYWRhYmxlIHdoZW4gdGhleSdyZSBncm91cGVkIHRvZ2V0aGVyXG4gICAgICAgICAgICAgICAgdG9wOiBhbmNob3JSZWN0LnRvcCxcbiAgICAgICAgICAgICAgICByaWdodDogdmlld3BvcnRTaXplLndpZHRoIC0gYW5jaG9yUmVjdC5yaWdodCxcbiAgICAgICAgICAgICAgICBib3R0b206IHZpZXdwb3J0U2l6ZS5oZWlnaHQgLSBhbmNob3JSZWN0LmJvdHRvbSxcbiAgICAgICAgICAgICAgICBsZWZ0OiBhbmNob3JSZWN0LmxlZnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmlld3BvcnRTaXplOiB2aWV3cG9ydFNpemUsXG4gICAgICAgICAgICB3aW5kb3dTY3JvbGw6IHdpbmRvd1Njcm9sbCxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBjb3JuZXIgb2YgdGhlIGFuY2hvciBmcm9tIHdoaWNoIHRvIGFuaW1hdGUgYW5kIHBvc2l0aW9uIHRoZSBtZW51IHN1cmZhY2UuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRPcmlnaW5Db3JuZXJfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBEZWZhdWx0czogb3BlbiBmcm9tIHRoZSB0b3AgbGVmdC5cbiAgICAgICAgdmFyIGNvcm5lciA9IENvcm5lci5UT1BfTEVGVDtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5tZWFzdXJlbWVudHNfLCB2aWV3cG9ydERpc3RhbmNlID0gX2Eudmlld3BvcnREaXN0YW5jZSwgYW5jaG9yU2l6ZSA9IF9hLmFuY2hvclNpemUsIHN1cmZhY2VTaXplID0gX2Euc3VyZmFjZVNpemU7XG4gICAgICAgIHZhciBpc0JvdHRvbUFsaWduZWQgPSB0aGlzLmhhc0JpdF8odGhpcy5hbmNob3JDb3JuZXJfLCBDb3JuZXJCaXQuQk9UVE9NKTtcbiAgICAgICAgdmFyIGF2YWlsYWJsZVRvcCA9IGlzQm90dG9tQWxpZ25lZCA/IHZpZXdwb3J0RGlzdGFuY2UudG9wICsgYW5jaG9yU2l6ZS5oZWlnaHQgKyB0aGlzLmFuY2hvck1hcmdpbl8uYm90dG9tXG4gICAgICAgICAgICA6IHZpZXdwb3J0RGlzdGFuY2UudG9wICsgdGhpcy5hbmNob3JNYXJnaW5fLnRvcDtcbiAgICAgICAgdmFyIGF2YWlsYWJsZUJvdHRvbSA9IGlzQm90dG9tQWxpZ25lZCA/IHZpZXdwb3J0RGlzdGFuY2UuYm90dG9tIC0gdGhpcy5hbmNob3JNYXJnaW5fLmJvdHRvbVxuICAgICAgICAgICAgOiB2aWV3cG9ydERpc3RhbmNlLmJvdHRvbSArIGFuY2hvclNpemUuaGVpZ2h0IC0gdGhpcy5hbmNob3JNYXJnaW5fLnRvcDtcbiAgICAgICAgdmFyIHRvcE92ZXJmbG93ID0gc3VyZmFjZVNpemUuaGVpZ2h0IC0gYXZhaWxhYmxlVG9wO1xuICAgICAgICB2YXIgYm90dG9tT3ZlcmZsb3cgPSBzdXJmYWNlU2l6ZS5oZWlnaHQgLSBhdmFpbGFibGVCb3R0b207XG4gICAgICAgIGlmIChib3R0b21PdmVyZmxvdyA+IDAgJiYgdG9wT3ZlcmZsb3cgPCBib3R0b21PdmVyZmxvdykge1xuICAgICAgICAgICAgY29ybmVyID0gdGhpcy5zZXRCaXRfKGNvcm5lciwgQ29ybmVyQml0LkJPVFRPTSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlzUnRsID0gdGhpcy5hZGFwdGVyXy5pc1J0bCgpO1xuICAgICAgICB2YXIgaXNGbGlwUnRsID0gdGhpcy5oYXNCaXRfKHRoaXMuYW5jaG9yQ29ybmVyXywgQ29ybmVyQml0LkZMSVBfUlRMKTtcbiAgICAgICAgdmFyIGF2b2lkSG9yaXpvbnRhbE92ZXJsYXAgPSB0aGlzLmhhc0JpdF8odGhpcy5hbmNob3JDb3JuZXJfLCBDb3JuZXJCaXQuUklHSFQpO1xuICAgICAgICB2YXIgaXNBbGlnbmVkUmlnaHQgPSAoYXZvaWRIb3Jpem9udGFsT3ZlcmxhcCAmJiAhaXNSdGwpIHx8XG4gICAgICAgICAgICAoIWF2b2lkSG9yaXpvbnRhbE92ZXJsYXAgJiYgaXNGbGlwUnRsICYmIGlzUnRsKTtcbiAgICAgICAgdmFyIGF2YWlsYWJsZUxlZnQgPSBpc0FsaWduZWRSaWdodCA/IHZpZXdwb3J0RGlzdGFuY2UubGVmdCArIGFuY2hvclNpemUud2lkdGggKyB0aGlzLmFuY2hvck1hcmdpbl8ucmlnaHQgOlxuICAgICAgICAgICAgdmlld3BvcnREaXN0YW5jZS5sZWZ0ICsgdGhpcy5hbmNob3JNYXJnaW5fLmxlZnQ7XG4gICAgICAgIHZhciBhdmFpbGFibGVSaWdodCA9IGlzQWxpZ25lZFJpZ2h0ID8gdmlld3BvcnREaXN0YW5jZS5yaWdodCAtIHRoaXMuYW5jaG9yTWFyZ2luXy5yaWdodCA6XG4gICAgICAgICAgICB2aWV3cG9ydERpc3RhbmNlLnJpZ2h0ICsgYW5jaG9yU2l6ZS53aWR0aCAtIHRoaXMuYW5jaG9yTWFyZ2luXy5sZWZ0O1xuICAgICAgICB2YXIgbGVmdE92ZXJmbG93ID0gc3VyZmFjZVNpemUud2lkdGggLSBhdmFpbGFibGVMZWZ0O1xuICAgICAgICB2YXIgcmlnaHRPdmVyZmxvdyA9IHN1cmZhY2VTaXplLndpZHRoIC0gYXZhaWxhYmxlUmlnaHQ7XG4gICAgICAgIGlmICgobGVmdE92ZXJmbG93IDwgMCAmJiBpc0FsaWduZWRSaWdodCAmJiBpc1J0bCkgfHxcbiAgICAgICAgICAgIChhdm9pZEhvcml6b250YWxPdmVybGFwICYmICFpc0FsaWduZWRSaWdodCAmJiBsZWZ0T3ZlcmZsb3cgPCAwKSB8fFxuICAgICAgICAgICAgKHJpZ2h0T3ZlcmZsb3cgPiAwICYmIGxlZnRPdmVyZmxvdyA8IHJpZ2h0T3ZlcmZsb3cpKSB7XG4gICAgICAgICAgICBjb3JuZXIgPSB0aGlzLnNldEJpdF8oY29ybmVyLCBDb3JuZXJCaXQuUklHSFQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3JuZXI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gY29ybmVyIE9yaWdpbiBjb3JuZXIgb2YgdGhlIG1lbnUgc3VyZmFjZS5cbiAgICAgKiBAcmV0dXJuIE1heGltdW0gaGVpZ2h0IG9mIHRoZSBtZW51IHN1cmZhY2UsIGJhc2VkIG9uIGF2YWlsYWJsZSBzcGFjZS4gMCBpbmRpY2F0ZXMgc2hvdWxkIG5vdCBiZSBzZXQuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRNZW51U3VyZmFjZU1heEhlaWdodF8gPSBmdW5jdGlvbiAoY29ybmVyKSB7XG4gICAgICAgIHZhciB2aWV3cG9ydERpc3RhbmNlID0gdGhpcy5tZWFzdXJlbWVudHNfLnZpZXdwb3J0RGlzdGFuY2U7XG4gICAgICAgIHZhciBtYXhIZWlnaHQgPSAwO1xuICAgICAgICB2YXIgaXNCb3R0b21BbGlnbmVkID0gdGhpcy5oYXNCaXRfKGNvcm5lciwgQ29ybmVyQml0LkJPVFRPTSk7XG4gICAgICAgIHZhciBpc0JvdHRvbUFuY2hvcmVkID0gdGhpcy5oYXNCaXRfKHRoaXMuYW5jaG9yQ29ybmVyXywgQ29ybmVyQml0LkJPVFRPTSk7XG4gICAgICAgIHZhciBNQVJHSU5fVE9fRURHRSA9IE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5udW1iZXJzLk1BUkdJTl9UT19FREdFO1xuICAgICAgICAvLyBXaGVuIG1heGltdW0gaGVpZ2h0IGlzIG5vdCBzcGVjaWZpZWQsIGl0IGlzIGhhbmRsZWQgZnJvbSBDU1MuXG4gICAgICAgIGlmIChpc0JvdHRvbUFsaWduZWQpIHtcbiAgICAgICAgICAgIG1heEhlaWdodCA9IHZpZXdwb3J0RGlzdGFuY2UudG9wICsgdGhpcy5hbmNob3JNYXJnaW5fLnRvcCAtIE1BUkdJTl9UT19FREdFO1xuICAgICAgICAgICAgaWYgKCFpc0JvdHRvbUFuY2hvcmVkKSB7XG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0ICs9IHRoaXMubWVhc3VyZW1lbnRzXy5hbmNob3JTaXplLmhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1heEhlaWdodCA9XG4gICAgICAgICAgICAgICAgdmlld3BvcnREaXN0YW5jZS5ib3R0b20gLSB0aGlzLmFuY2hvck1hcmdpbl8uYm90dG9tICsgdGhpcy5tZWFzdXJlbWVudHNfLmFuY2hvclNpemUuaGVpZ2h0IC0gTUFSR0lOX1RPX0VER0U7XG4gICAgICAgICAgICBpZiAoaXNCb3R0b21BbmNob3JlZCkge1xuICAgICAgICAgICAgICAgIG1heEhlaWdodCAtPSB0aGlzLm1lYXN1cmVtZW50c18uYW5jaG9yU2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heEhlaWdodDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBjb3JuZXIgT3JpZ2luIGNvcm5lciBvZiB0aGUgbWVudSBzdXJmYWNlLlxuICAgICAqIEByZXR1cm4gSG9yaXpvbnRhbCBvZmZzZXQgb2YgbWVudSBzdXJmYWNlIG9yaWdpbiBjb3JuZXIgZnJvbSBjb3JyZXNwb25kaW5nIGFuY2hvciBjb3JuZXIuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRIb3Jpem9udGFsT3JpZ2luT2Zmc2V0XyA9IGZ1bmN0aW9uIChjb3JuZXIpIHtcbiAgICAgICAgdmFyIGFuY2hvclNpemUgPSB0aGlzLm1lYXN1cmVtZW50c18uYW5jaG9yU2l6ZTtcbiAgICAgICAgLy8gaXNSaWdodEFsaWduZWQgY29ycmVzcG9uZHMgdG8gdXNpbmcgdGhlICdyaWdodCcgcHJvcGVydHkgb24gdGhlIHN1cmZhY2UuXG4gICAgICAgIHZhciBpc1JpZ2h0QWxpZ25lZCA9IHRoaXMuaGFzQml0Xyhjb3JuZXIsIENvcm5lckJpdC5SSUdIVCk7XG4gICAgICAgIHZhciBhdm9pZEhvcml6b250YWxPdmVybGFwID0gdGhpcy5oYXNCaXRfKHRoaXMuYW5jaG9yQ29ybmVyXywgQ29ybmVyQml0LlJJR0hUKTtcbiAgICAgICAgaWYgKGlzUmlnaHRBbGlnbmVkKSB7XG4gICAgICAgICAgICB2YXIgcmlnaHRPZmZzZXQgPSBhdm9pZEhvcml6b250YWxPdmVybGFwID8gYW5jaG9yU2l6ZS53aWR0aCAtIHRoaXMuYW5jaG9yTWFyZ2luXy5sZWZ0IDogdGhpcy5hbmNob3JNYXJnaW5fLnJpZ2h0O1xuICAgICAgICAgICAgLy8gRm9yIGhvaXN0ZWQgb3IgZml4ZWQgZWxlbWVudHMsIGFkanVzdCB0aGUgb2Zmc2V0IGJ5IHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdmlld3BvcnQgd2lkdGggYW5kIGJvZHkgd2lkdGggc29cbiAgICAgICAgICAgIC8vIHdoZW4gd2UgY2FsY3VsYXRlIHRoZSByaWdodCB2YWx1ZSAoYGFkanVzdFBvc2l0aW9uRm9ySG9pc3RlZEVsZW1lbnRfYCkgYmFzZWQgb24gdGhlIGVsZW1lbnQgcG9zaXRpb24sXG4gICAgICAgICAgICAvLyB0aGUgcmlnaHQgcHJvcGVydHkgaXMgY29ycmVjdC5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzSG9pc3RlZEVsZW1lbnRfIHx8IHRoaXMuaXNGaXhlZFBvc2l0aW9uXykge1xuICAgICAgICAgICAgICAgIHJldHVybiByaWdodE9mZnNldCAtICh0aGlzLm1lYXN1cmVtZW50c18udmlld3BvcnRTaXplLndpZHRoIC0gdGhpcy5tZWFzdXJlbWVudHNfLmJvZHlTaXplLndpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByaWdodE9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXZvaWRIb3Jpem9udGFsT3ZlcmxhcCA/IGFuY2hvclNpemUud2lkdGggLSB0aGlzLmFuY2hvck1hcmdpbl8ucmlnaHQgOiB0aGlzLmFuY2hvck1hcmdpbl8ubGVmdDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBjb3JuZXIgT3JpZ2luIGNvcm5lciBvZiB0aGUgbWVudSBzdXJmYWNlLlxuICAgICAqIEByZXR1cm4gVmVydGljYWwgb2Zmc2V0IG9mIG1lbnUgc3VyZmFjZSBvcmlnaW4gY29ybmVyIGZyb20gY29ycmVzcG9uZGluZyBhbmNob3IgY29ybmVyLlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0VmVydGljYWxPcmlnaW5PZmZzZXRfID0gZnVuY3Rpb24gKGNvcm5lcikge1xuICAgICAgICB2YXIgYW5jaG9yU2l6ZSA9IHRoaXMubWVhc3VyZW1lbnRzXy5hbmNob3JTaXplO1xuICAgICAgICB2YXIgaXNCb3R0b21BbGlnbmVkID0gdGhpcy5oYXNCaXRfKGNvcm5lciwgQ29ybmVyQml0LkJPVFRPTSk7XG4gICAgICAgIHZhciBhdm9pZFZlcnRpY2FsT3ZlcmxhcCA9IHRoaXMuaGFzQml0Xyh0aGlzLmFuY2hvckNvcm5lcl8sIENvcm5lckJpdC5CT1RUT00pO1xuICAgICAgICB2YXIgeSA9IDA7XG4gICAgICAgIGlmIChpc0JvdHRvbUFsaWduZWQpIHtcbiAgICAgICAgICAgIHkgPSBhdm9pZFZlcnRpY2FsT3ZlcmxhcCA/IGFuY2hvclNpemUuaGVpZ2h0IC0gdGhpcy5hbmNob3JNYXJnaW5fLnRvcCA6IC10aGlzLmFuY2hvck1hcmdpbl8uYm90dG9tO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgeSA9IGF2b2lkVmVydGljYWxPdmVybGFwID8gKGFuY2hvclNpemUuaGVpZ2h0ICsgdGhpcy5hbmNob3JNYXJnaW5fLmJvdHRvbSkgOiB0aGlzLmFuY2hvck1hcmdpbl8udG9wO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB5O1xuICAgIH07XG4gICAgLyoqIENhbGN1bGF0ZXMgdGhlIG9mZnNldHMgZm9yIHBvc2l0aW9uaW5nIHRoZSBtZW51LXN1cmZhY2Ugd2hlbiB0aGUgbWVudS1zdXJmYWNlIGhhcyBiZWVuIGhvaXN0ZWQgdG8gdGhlIGJvZHkuICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5hZGp1c3RQb3NpdGlvbkZvckhvaXN0ZWRFbGVtZW50XyA9IGZ1bmN0aW9uIChwb3NpdGlvbikge1xuICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgdmFyIF9iID0gdGhpcy5tZWFzdXJlbWVudHNfLCB3aW5kb3dTY3JvbGwgPSBfYi53aW5kb3dTY3JvbGwsIHZpZXdwb3J0RGlzdGFuY2UgPSBfYi52aWV3cG9ydERpc3RhbmNlO1xuICAgICAgICB2YXIgcHJvcHMgPSBPYmplY3Qua2V5cyhwb3NpdGlvbik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBwcm9wc18xID0gdHNsaWJfMS5fX3ZhbHVlcyhwcm9wcyksIHByb3BzXzFfMSA9IHByb3BzXzEubmV4dCgpOyAhcHJvcHNfMV8xLmRvbmU7IHByb3BzXzFfMSA9IHByb3BzXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3AgPSBwcm9wc18xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gcG9zaXRpb25bcHJvcF0gfHwgMDtcbiAgICAgICAgICAgICAgICAvLyBIb2lzdGVkIHN1cmZhY2VzIG5lZWQgdG8gaGF2ZSB0aGUgYW5jaG9yIGVsZW1lbnRzIGxvY2F0aW9uIG9uIHRoZSBwYWdlIGFkZGVkIHRvIHRoZVxuICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uIHByb3BlcnRpZXMgZm9yIHByb3BlciBhbGlnbm1lbnQgb24gdGhlIGJvZHkuXG4gICAgICAgICAgICAgICAgdmFsdWUgKz0gdmlld3BvcnREaXN0YW5jZVtwcm9wXTtcbiAgICAgICAgICAgICAgICAvLyBTdXJmYWNlcyB0aGF0IGFyZSBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQgbmVlZCB0byBoYXZlIGFkZGl0aW9uYWwgY2FsY3VsYXRpb25zIGZvciBzY3JvbGxcbiAgICAgICAgICAgICAgICAvLyBhbmQgYm90dG9tIHBvc2l0aW9uaW5nLlxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0ZpeGVkUG9zaXRpb25fKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSAndG9wJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gd2luZG93U2Nyb2xsLnk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvcCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIC09IHdpbmRvd1Njcm9sbC55O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb3AgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gd2luZG93U2Nyb2xsLng7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7IC8vIHByb3AgPT09ICdyaWdodCdcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIC09IHdpbmRvd1Njcm9sbC54O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBvc2l0aW9uW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc18xXzEgJiYgIXByb3BzXzFfMS5kb25lICYmIChfYSA9IHByb3BzXzEucmV0dXJuKSkgX2EuY2FsbChwcm9wc18xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhlIGxhc3QgZm9jdXNlZCBlbGVtZW50IHdoZW4gdGhlIG1lbnUgc3VyZmFjZSB3YXMgb3BlbmVkIHNob3VsZCByZWdhaW4gZm9jdXMsIGlmIHRoZSB1c2VyIGlzXG4gICAgICogZm9jdXNlZCBvbiBvciB3aXRoaW4gdGhlIG1lbnUgc3VyZmFjZSB3aGVuIGl0IGlzIGNsb3NlZC5cbiAgICAgKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLm1heWJlUmVzdG9yZUZvY3VzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlzUm9vdEZvY3VzZWQgPSB0aGlzLmFkYXB0ZXJfLmlzRm9jdXNlZCgpO1xuICAgICAgICB2YXIgY2hpbGRIYXNGb2N1cyA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgdGhpcy5hZGFwdGVyXy5pc0VsZW1lbnRJbkNvbnRhaW5lcihkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgICAgICAgaWYgKGlzUm9vdEZvY3VzZWQgfHwgY2hpbGRIYXNGb2N1cykge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZXN0b3JlRm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5oYXNCaXRfID0gZnVuY3Rpb24gKGNvcm5lciwgYml0KSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKGNvcm5lciAmIGJpdCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYml0d2lzZVxuICAgIH07XG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRCaXRfID0gZnVuY3Rpb24gKGNvcm5lciwgYml0KSB7XG4gICAgICAgIHJldHVybiBjb3JuZXIgfCBiaXQ7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYml0d2lzZVxuICAgIH07XG4gICAgLyoqXG4gICAgICogaXNGaW5pdGUgdGhhdCBkb2Vzbid0IGZvcmNlIGNvbnZlcnNpb24gdG8gbnVtYmVyIHR5cGUuXG4gICAgICogRXF1aXZhbGVudCB0byBOdW1iZXIuaXNGaW5pdGUgaW4gRVMyMDE1LCB3aGljaCBpcyBub3Qgc3VwcG9ydGVkIGluIElFLlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuaXNGaW5pdGVfID0gZnVuY3Rpb24gKG51bSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIG51bSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUobnVtKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENNZW51U3VyZmFjZUZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgY2FjaGVkQ3NzVHJhbnNmb3JtUHJvcGVydHlOYW1lXztcbi8qKlxuICogUmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgY29ycmVjdCB0cmFuc2Zvcm0gcHJvcGVydHkgdG8gdXNlIG9uIHRoZSBjdXJyZW50IGJyb3dzZXIuXG4gKi9cbmZ1bmN0aW9uIGdldFRyYW5zZm9ybVByb3BlcnR5TmFtZShnbG9iYWxPYmosIGZvcmNlUmVmcmVzaCkge1xuICAgIGlmIChmb3JjZVJlZnJlc2ggPT09IHZvaWQgMCkgeyBmb3JjZVJlZnJlc2ggPSBmYWxzZTsgfVxuICAgIGlmIChjYWNoZWRDc3NUcmFuc2Zvcm1Qcm9wZXJ0eU5hbWVfID09PSB1bmRlZmluZWQgfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIHZhciBlbCA9IGdsb2JhbE9iai5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FjaGVkQ3NzVHJhbnNmb3JtUHJvcGVydHlOYW1lXyA9ICd0cmFuc2Zvcm0nIGluIGVsLnN0eWxlID8gJ3RyYW5zZm9ybScgOiAnd2Via2l0VHJhbnNmb3JtJztcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZENzc1RyYW5zZm9ybVByb3BlcnR5TmFtZV87XG59XG5leHBvcnQgeyBnZXRUcmFuc2Zvcm1Qcm9wZXJ0eU5hbWUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWwuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDQ29tcG9uZW50IH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xudmFyIE1EQ01lbnVTdXJmYWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ01lbnVTdXJmYWNlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ01lbnVTdXJmYWNlKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE1EQ01lbnVTdXJmYWNlLmF0dGFjaFRvID0gZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNRENNZW51U3VyZmFjZShyb290KTtcbiAgICB9O1xuICAgIE1EQ01lbnVTdXJmYWNlLnByb3RvdHlwZS5pbml0aWFsU3luY1dpdGhET00gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBwYXJlbnRFbCA9IHRoaXMucm9vdF8ucGFyZW50RWxlbWVudDtcbiAgICAgICAgdGhpcy5hbmNob3JFbGVtZW50ID0gcGFyZW50RWwgJiYgcGFyZW50RWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzZXMuQU5DSE9SKSA/IHBhcmVudEVsIDogbnVsbDtcbiAgICAgICAgaWYgKHRoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzZXMuRklYRUQpKSB7XG4gICAgICAgICAgICB0aGlzLnNldEZpeGVkUG9zaXRpb24odHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVLZXlkb3duXyA9IGZ1bmN0aW9uIChldnQpIHsgcmV0dXJuIF90aGlzLmZvdW5kYXRpb25fLmhhbmRsZUtleWRvd24oZXZ0KTsgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVCb2R5Q2xpY2tfID0gZnVuY3Rpb24gKGV2dCkgeyByZXR1cm4gX3RoaXMuZm91bmRhdGlvbl8uaGFuZGxlQm9keUNsaWNrKGV2dCk7IH07XG4gICAgICAgIHRoaXMucmVnaXN0ZXJCb2R5Q2xpY2tMaXN0ZW5lcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3RoaXMuaGFuZGxlQm9keUNsaWNrXyk7IH07XG4gICAgICAgIHRoaXMuZGVyZWdpc3RlckJvZHlDbGlja0xpc3RlbmVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfdGhpcy5oYW5kbGVCb2R5Q2xpY2tfKTsgfTtcbiAgICAgICAgdGhpcy5saXN0ZW4oJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd25fKTtcbiAgICAgICAgdGhpcy5saXN0ZW4oc3RyaW5ncy5PUEVORURfRVZFTlQsIHRoaXMucmVnaXN0ZXJCb2R5Q2xpY2tMaXN0ZW5lcl8pO1xuICAgICAgICB0aGlzLmxpc3RlbihzdHJpbmdzLkNMT1NFRF9FVkVOVCwgdGhpcy5kZXJlZ2lzdGVyQm9keUNsaWNrTGlzdGVuZXJfKTtcbiAgICB9O1xuICAgIE1EQ01lbnVTdXJmYWNlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnVubGlzdGVuKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlkb3duXyk7XG4gICAgICAgIHRoaXMudW5saXN0ZW4oc3RyaW5ncy5PUEVORURfRVZFTlQsIHRoaXMucmVnaXN0ZXJCb2R5Q2xpY2tMaXN0ZW5lcl8pO1xuICAgICAgICB0aGlzLnVubGlzdGVuKHN0cmluZ3MuQ0xPU0VEX0VWRU5ULCB0aGlzLmRlcmVnaXN0ZXJCb2R5Q2xpY2tMaXN0ZW5lcl8pO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIE1EQ01lbnVTdXJmYWNlLnByb3RvdHlwZS5pc09wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb25fLmlzT3BlbigpO1xuICAgIH07XG4gICAgTURDTWVudVN1cmZhY2UucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8ub3BlbigpO1xuICAgIH07XG4gICAgTURDTWVudVN1cmZhY2UucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKHNraXBSZXN0b3JlRm9jdXMpIHtcbiAgICAgICAgaWYgKHNraXBSZXN0b3JlRm9jdXMgPT09IHZvaWQgMCkgeyBza2lwUmVzdG9yZUZvY3VzID0gZmFsc2U7IH1cbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5jbG9zZShza2lwUmVzdG9yZUZvY3VzKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENNZW51U3VyZmFjZS5wcm90b3R5cGUsIFwicXVpY2tPcGVuXCIsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAocXVpY2tPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldFF1aWNrT3BlbihxdWlja09wZW4pO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBtZW51LXN1cmZhY2UgZnJvbSBpdCdzIGN1cnJlbnQgbG9jYXRpb24gYW5kIGFwcGVuZHMgaXQgdG8gdGhlXG4gICAgICogYm9keSB0byBvdmVyY29tZSBhbnkgb3ZlcmZsb3c6aGlkZGVuIGlzc3Vlcy5cbiAgICAgKi9cbiAgICBNRENNZW51U3VyZmFjZS5wcm90b3R5cGUuaG9pc3RNZW51VG9Cb2R5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucm9vdF8pO1xuICAgICAgICB0aGlzLnNldElzSG9pc3RlZCh0cnVlKTtcbiAgICB9O1xuICAgIC8qKiBTZXRzIHRoZSBmb3VuZGF0aW9uIHRvIHVzZSBwYWdlIG9mZnNldHMgZm9yIGFuIHBvc2l0aW9uaW5nIHdoZW4gdGhlIG1lbnUgaXMgaG9pc3RlZCB0byB0aGUgYm9keS4gKi9cbiAgICBNRENNZW51U3VyZmFjZS5wcm90b3R5cGUuc2V0SXNIb2lzdGVkID0gZnVuY3Rpb24gKGlzSG9pc3RlZCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldElzSG9pc3RlZChpc0hvaXN0ZWQpO1xuICAgIH07XG4gICAgLyoqIFNldHMgdGhlIGVsZW1lbnQgdGhhdCB0aGUgbWVudS1zdXJmYWNlIGlzIGFuY2hvcmVkIHRvLiAqL1xuICAgIE1EQ01lbnVTdXJmYWNlLnByb3RvdHlwZS5zZXRNZW51U3VyZmFjZUFuY2hvckVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB0aGlzLmFuY2hvckVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH07XG4gICAgLyoqIFNldHMgdGhlIG1lbnUtc3VyZmFjZSB0byBwb3NpdGlvbjogZml4ZWQuICovXG4gICAgTURDTWVudVN1cmZhY2UucHJvdG90eXBlLnNldEZpeGVkUG9zaXRpb24gPSBmdW5jdGlvbiAoaXNGaXhlZCkge1xuICAgICAgICBpZiAoaXNGaXhlZCkge1xuICAgICAgICAgICAgdGhpcy5yb290Xy5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzZXMuRklYRUQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNzc0NsYXNzZXMuRklYRUQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0Rml4ZWRQb3NpdGlvbihpc0ZpeGVkKTtcbiAgICB9O1xuICAgIC8qKiBTZXRzIHRoZSBhYnNvbHV0ZSB4L3kgcG9zaXRpb24gdG8gcG9zaXRpb24gYmFzZWQgb24uIFJlcXVpcmVzIHRoZSBtZW51IHRvIGJlIGhvaXN0ZWQuICovXG4gICAgTURDTWVudVN1cmZhY2UucHJvdG90eXBlLnNldEFic29sdXRlUG9zaXRpb24gPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldEFic29sdXRlUG9zaXRpb24oeCwgeSk7XG4gICAgICAgIHRoaXMuc2V0SXNIb2lzdGVkKHRydWUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNvcm5lciBEZWZhdWx0IGFuY2hvciBjb3JuZXIgYWxpZ25tZW50IG9mIHRvcC1sZWZ0IHN1cmZhY2UgY29ybmVyLlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlLnByb3RvdHlwZS5zZXRBbmNob3JDb3JuZXIgPSBmdW5jdGlvbiAoY29ybmVyKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0QW5jaG9yQ29ybmVyKGNvcm5lcik7XG4gICAgfTtcbiAgICBNRENNZW51U3VyZmFjZS5wcm90b3R5cGUuc2V0QW5jaG9yTWFyZ2luID0gZnVuY3Rpb24gKG1hcmdpbikge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldEFuY2hvck1hcmdpbihtYXJnaW4pO1xuICAgIH07XG4gICAgTURDTWVudVN1cmZhY2UucHJvdG90eXBlLmdldERlZmF1bHRGb3VuZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBETyBOT1QgSU5MSU5FIHRoaXMgdmFyaWFibGUuIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCBmb3VuZGF0aW9ucyB0YWtlIGEgUGFydGlhbDxNRENGb29BZGFwdGVyPi5cbiAgICAgICAgLy8gVG8gZW5zdXJlIHdlIGRvbid0IGFjY2lkZW50YWxseSBvbWl0IGFueSBtZXRob2RzLCB3ZSBuZWVkIGEgc2VwYXJhdGUsIHN0cm9uZ2x5IHR5cGVkIGFkYXB0ZXIgdmFyaWFibGUuXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgIHZhciBhZGFwdGVyID0ge1xuICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIF90aGlzLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICBoYXNDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICBoYXNBbmNob3I6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICEhX3RoaXMuYW5jaG9yRWxlbWVudDsgfSxcbiAgICAgICAgICAgIG5vdGlmeUNsb3NlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5lbWl0KE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5zdHJpbmdzLkNMT1NFRF9FVkVOVCwge30pOyB9LFxuICAgICAgICAgICAgbm90aWZ5T3BlbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZW1pdChNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uc3RyaW5ncy5PUEVORURfRVZFTlQsIHt9KTsgfSxcbiAgICAgICAgICAgIGlzRWxlbWVudEluQ29udGFpbmVyOiBmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIF90aGlzLnJvb3RfLmNvbnRhaW5zKGVsKTsgfSxcbiAgICAgICAgICAgIGlzUnRsOiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRDb21wdXRlZFN0eWxlKF90aGlzLnJvb3RfKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXJlY3Rpb24nKSA9PT0gJ3J0bCc7IH0sXG4gICAgICAgICAgICBzZXRUcmFuc2Zvcm1PcmlnaW46IGZ1bmN0aW9uIChvcmlnaW4pIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcGVydHlOYW1lID0gdXRpbC5nZXRUcmFuc2Zvcm1Qcm9wZXJ0eU5hbWUod2luZG93KSArIFwiLW9yaWdpblwiO1xuICAgICAgICAgICAgICAgIF90aGlzLnJvb3RfLnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5TmFtZSwgb3JpZ2luKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc0ZvY3VzZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IF90aGlzLnJvb3RfOyB9LFxuICAgICAgICAgICAgc2F2ZUZvY3VzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucHJldmlvdXNGb2N1c18gPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3RvcmVGb2N1czogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5yb290Xy5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMucHJldmlvdXNGb2N1c18gJiYgX3RoaXMucHJldmlvdXNGb2N1c18uZm9jdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnByZXZpb3VzRm9jdXNfLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0SW5uZXJEaW1lbnNpb25zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgd2lkdGg6IF90aGlzLnJvb3RfLm9mZnNldFdpZHRoLCBoZWlnaHQ6IF90aGlzLnJvb3RfLm9mZnNldEhlaWdodCB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldEFuY2hvckRpbWVuc2lvbnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmFuY2hvckVsZW1lbnQgPyBfdGhpcy5hbmNob3JFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogbnVsbDsgfSxcbiAgICAgICAgICAgIGdldFdpbmRvd0RpbWVuc2lvbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0Qm9keURpbWVuc2lvbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB3aWR0aDogZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgaGVpZ2h0OiBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldFdpbmRvd1Njcm9sbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHg6IHdpbmRvdy5wYWdlWE9mZnNldCwgeTogd2luZG93LnBhZ2VZT2Zmc2V0IH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0UG9zaXRpb246IGZ1bmN0aW9uIChwb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIF90aGlzLnJvb3RfLnN0eWxlLmxlZnQgPSAnbGVmdCcgaW4gcG9zaXRpb24gPyBwb3NpdGlvbi5sZWZ0ICsgXCJweFwiIDogJyc7XG4gICAgICAgICAgICAgICAgX3RoaXMucm9vdF8uc3R5bGUucmlnaHQgPSAncmlnaHQnIGluIHBvc2l0aW9uID8gcG9zaXRpb24ucmlnaHQgKyBcInB4XCIgOiAnJztcbiAgICAgICAgICAgICAgICBfdGhpcy5yb290Xy5zdHlsZS50b3AgPSAndG9wJyBpbiBwb3NpdGlvbiA/IHBvc2l0aW9uLnRvcCArIFwicHhcIiA6ICcnO1xuICAgICAgICAgICAgICAgIF90aGlzLnJvb3RfLnN0eWxlLmJvdHRvbSA9ICdib3R0b20nIGluIHBvc2l0aW9uID8gcG9zaXRpb24uYm90dG9tICsgXCJweFwiIDogJyc7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0TWF4SGVpZ2h0OiBmdW5jdGlvbiAoaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucm9vdF8uc3R5bGUubWF4SGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgcmV0dXJuIG5ldyBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24oYWRhcHRlcik7XG4gICAgfTtcbiAgICByZXR1cm4gTURDTWVudVN1cmZhY2U7XG59KE1EQ0NvbXBvbmVudCkpO1xuZXhwb3J0IHsgTURDTWVudVN1cmZhY2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBjc3NDbGFzc2VzID0ge1xuICAgIE1FTlVfU0VMRUNURURfTElTVF9JVEVNOiAnbWRjLW1lbnUtaXRlbS0tc2VsZWN0ZWQnLFxuICAgIE1FTlVfU0VMRUNUSU9OX0dST1VQOiAnbWRjLW1lbnVfX3NlbGVjdGlvbi1ncm91cCcsXG4gICAgUk9PVDogJ21kYy1tZW51Jyxcbn07XG52YXIgc3RyaW5ncyA9IHtcbiAgICBBUklBX0NIRUNLRURfQVRUUjogJ2FyaWEtY2hlY2tlZCcsXG4gICAgQVJJQV9ESVNBQkxFRF9BVFRSOiAnYXJpYS1kaXNhYmxlZCcsXG4gICAgQ0hFQ0tCT1hfU0VMRUNUT1I6ICdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nLFxuICAgIExJU1RfU0VMRUNUT1I6ICcubWRjLWxpc3QnLFxuICAgIFNFTEVDVEVEX0VWRU5UOiAnTURDTWVudTpzZWxlY3RlZCcsXG59O1xudmFyIG51bWJlcnMgPSB7XG4gICAgRk9DVVNfUk9PVF9JTkRFWDogLTEsXG59O1xudmFyIERlZmF1bHRGb2N1c1N0YXRlO1xuKGZ1bmN0aW9uIChEZWZhdWx0Rm9jdXNTdGF0ZSkge1xuICAgIERlZmF1bHRGb2N1c1N0YXRlW0RlZmF1bHRGb2N1c1N0YXRlW1wiTk9ORVwiXSA9IDBdID0gXCJOT05FXCI7XG4gICAgRGVmYXVsdEZvY3VzU3RhdGVbRGVmYXVsdEZvY3VzU3RhdGVbXCJMSVNUX1JPT1RcIl0gPSAxXSA9IFwiTElTVF9ST09UXCI7XG4gICAgRGVmYXVsdEZvY3VzU3RhdGVbRGVmYXVsdEZvY3VzU3RhdGVbXCJGSVJTVF9JVEVNXCJdID0gMl0gPSBcIkZJUlNUX0lURU1cIjtcbiAgICBEZWZhdWx0Rm9jdXNTdGF0ZVtEZWZhdWx0Rm9jdXNTdGF0ZVtcIkxBU1RfSVRFTVwiXSA9IDNdID0gXCJMQVNUX0lURU1cIjtcbn0pKERlZmF1bHRGb2N1c1N0YXRlIHx8IChEZWZhdWx0Rm9jdXNTdGF0ZSA9IHt9KSk7XG5leHBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzLCBEZWZhdWx0Rm9jdXNTdGF0ZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMgYXMgbGlzdENzc0NsYXNzZXMgfSBmcm9tICdAbWF0ZXJpYWwvbGlzdC9jb25zdGFudHMnO1xuaW1wb3J0IHsgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL21lbnUtc3VyZmFjZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIERlZmF1bHRGb2N1c1N0YXRlLCBudW1iZXJzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIE1EQ01lbnVGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ01lbnVGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ01lbnVGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgTURDTWVudUZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5jbG9zZUFuaW1hdGlvbkVuZFRpbWVySWRfID0gMDtcbiAgICAgICAgX3RoaXMuZGVmYXVsdEZvY3VzU3RhdGVfID0gRGVmYXVsdEZvY3VzU3RhdGUuTElTVF9ST09UO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENNZW51Rm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ01lbnVGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTWVudUZvdW5kYXRpb24sIFwibnVtYmVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlcnM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENNZW51Rm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAc2VlIHtAbGluayBNRENNZW51QWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm4gdHlwZXMuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzVG9FbGVtZW50QXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzRnJvbUVsZW1lbnRBdEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgYWRkQXR0cmlidXRlVG9FbGVtZW50QXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUF0dHJpYnV0ZUZyb21FbGVtZW50QXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGVsZW1lbnRDb250YWluc0NsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBjbG9zZVN1cmZhY2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBnZXRFbGVtZW50SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIC0xOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeVNlbGVjdGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZ2V0TWVudUl0ZW1Db3VudDogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgICAgICAgICBmb2N1c0l0ZW1BdEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZm9jdXNMaXN0Um9vdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldFNlbGVjdGVkU2libGluZ09mSXRlbUF0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIC0xOyB9LFxuICAgICAgICAgICAgICAgIGlzU2VsZWN0YWJsZUl0ZW1BdEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENNZW51Rm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VBbmltYXRpb25FbmRUaW1lcklkXykge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xvc2VBbmltYXRpb25FbmRUaW1lcklkXyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5jbG9zZVN1cmZhY2UoKTtcbiAgICB9O1xuICAgIE1EQ01lbnVGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVLZXlkb3duID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIga2V5ID0gZXZ0LmtleSwga2V5Q29kZSA9IGV2dC5rZXlDb2RlO1xuICAgICAgICB2YXIgaXNUYWIgPSBrZXkgPT09ICdUYWInIHx8IGtleUNvZGUgPT09IDk7XG4gICAgICAgIGlmIChpc1RhYikge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5jbG9zZVN1cmZhY2UoLyoqIHNraXBSZXN0b3JlRm9jdXMgKi8gdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ01lbnVGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVJdGVtQWN0aW9uID0gZnVuY3Rpb24gKGxpc3RJdGVtKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuYWRhcHRlcl8uZ2V0RWxlbWVudEluZGV4KGxpc3RJdGVtKTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5U2VsZWN0ZWQoeyBpbmRleDogaW5kZXggfSk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uY2xvc2VTdXJmYWNlKCk7XG4gICAgICAgIC8vIFdhaXQgZm9yIHRoZSBtZW51IHRvIGNsb3NlIGJlZm9yZSBhZGRpbmcvcmVtb3ZpbmcgY2xhc3NlcyB0aGF0IGFmZmVjdCBzdHlsZXMuXG4gICAgICAgIHRoaXMuY2xvc2VBbmltYXRpb25FbmRUaW1lcklkXyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gUmVjb21wdXRlIHRoZSBpbmRleCBpbiBjYXNlIHRoZSBtZW51IGNvbnRlbnRzIGhhdmUgY2hhbmdlZC5cbiAgICAgICAgICAgIHZhciByZWNvbXB1dGVkSW5kZXggPSBfdGhpcy5hZGFwdGVyXy5nZXRFbGVtZW50SW5kZXgobGlzdEl0ZW0pO1xuICAgICAgICAgICAgaWYgKF90aGlzLmFkYXB0ZXJfLmlzU2VsZWN0YWJsZUl0ZW1BdEluZGV4KHJlY29tcHV0ZWRJbmRleCkpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTZWxlY3RlZEluZGV4KHJlY29tcHV0ZWRJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5udW1iZXJzLlRSQU5TSVRJT05fQ0xPU0VfRFVSQVRJT04pO1xuICAgIH07XG4gICAgTURDTWVudUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZU1lbnVTdXJmYWNlT3BlbmVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuZGVmYXVsdEZvY3VzU3RhdGVfKSB7XG4gICAgICAgICAgICBjYXNlIERlZmF1bHRGb2N1c1N0YXRlLkZJUlNUX0lURU06XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5mb2N1c0l0ZW1BdEluZGV4KDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEZWZhdWx0Rm9jdXNTdGF0ZS5MQVNUX0lURU06XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5mb2N1c0l0ZW1BdEluZGV4KHRoaXMuYWRhcHRlcl8uZ2V0TWVudUl0ZW1Db3VudCgpIC0gMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERlZmF1bHRGb2N1c1N0YXRlLk5PTkU6XG4gICAgICAgICAgICAgICAgLy8gRG8gbm90aGluZy5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5mb2N1c0xpc3RSb290KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgZGVmYXVsdCBmb2N1cyBzdGF0ZSB3aGVyZSB0aGUgbWVudSBzaG91bGQgZm9jdXMgZXZlcnkgdGltZSB3aGVuIG1lbnVcbiAgICAgKiBpcyBvcGVuZWQuIEZvY3VzZXMgdGhlIGxpc3Qgcm9vdCAoYERlZmF1bHRGb2N1c1N0YXRlLkxJU1RfUk9PVGApIGVsZW1lbnQgYnlcbiAgICAgKiBkZWZhdWx0LlxuICAgICAqL1xuICAgIE1EQ01lbnVGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXREZWZhdWx0Rm9jdXNTdGF0ZSA9IGZ1bmN0aW9uIChmb2N1c1N0YXRlKSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdEZvY3VzU3RhdGVfID0gZm9jdXNTdGF0ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNlbGVjdHMgdGhlIGxpc3QgaXRlbSBhdCBgaW5kZXhgIHdpdGhpbiB0aGUgbWVudS5cbiAgICAgKiBAcGFyYW0gaW5kZXggSW5kZXggb2YgbGlzdCBpdGVtIHdpdGhpbiB0aGUgbWVudS5cbiAgICAgKi9cbiAgICBNRENNZW51Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0U2VsZWN0ZWRJbmRleCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB0aGlzLnZhbGlkYXRlZEluZGV4XyhpbmRleCk7XG4gICAgICAgIGlmICghdGhpcy5hZGFwdGVyXy5pc1NlbGVjdGFibGVJdGVtQXRJbmRleChpbmRleCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTURDTWVudUZvdW5kYXRpb246IE5vIHNlbGVjdGlvbiBncm91cCBhdCBzcGVjaWZpZWQgaW5kZXguJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByZXZTZWxlY3RlZEluZGV4ID0gdGhpcy5hZGFwdGVyXy5nZXRTZWxlY3RlZFNpYmxpbmdPZkl0ZW1BdEluZGV4KGluZGV4KTtcbiAgICAgICAgaWYgKHByZXZTZWxlY3RlZEluZGV4ID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQXR0cmlidXRlRnJvbUVsZW1lbnRBdEluZGV4KHByZXZTZWxlY3RlZEluZGV4LCBzdHJpbmdzLkFSSUFfQ0hFQ0tFRF9BVFRSKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3NGcm9tRWxlbWVudEF0SW5kZXgocHJldlNlbGVjdGVkSW5kZXgsIGNzc0NsYXNzZXMuTUVOVV9TRUxFQ1RFRF9MSVNUX0lURU0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3NUb0VsZW1lbnRBdEluZGV4KGluZGV4LCBjc3NDbGFzc2VzLk1FTlVfU0VMRUNURURfTElTVF9JVEVNKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRBdHRyaWJ1dGVUb0VsZW1lbnRBdEluZGV4KGluZGV4LCBzdHJpbmdzLkFSSUFfQ0hFQ0tFRF9BVFRSLCAndHJ1ZScpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZW5hYmxlZCBzdGF0ZSB0byBpc0VuYWJsZWQgZm9yIHRoZSBtZW51IGl0ZW0gYXQgdGhlIGdpdmVuIGluZGV4LlxuICAgICAqIEBwYXJhbSBpbmRleCBJbmRleCBvZiB0aGUgbWVudSBpdGVtXG4gICAgICogQHBhcmFtIGlzRW5hYmxlZCBUaGUgZGVzaXJlZCBlbmFibGVkIHN0YXRlIG9mIHRoZSBtZW51IGl0ZW0uXG4gICAgICovXG4gICAgTURDTWVudUZvdW5kYXRpb24ucHJvdG90eXBlLnNldEVuYWJsZWQgPSBmdW5jdGlvbiAoaW5kZXgsIGlzRW5hYmxlZCkge1xuICAgICAgICB0aGlzLnZhbGlkYXRlZEluZGV4XyhpbmRleCk7XG4gICAgICAgIGlmIChpc0VuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3NGcm9tRWxlbWVudEF0SW5kZXgoaW5kZXgsIGxpc3RDc3NDbGFzc2VzLkxJU1RfSVRFTV9ESVNBQkxFRF9DTEFTUyk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZEF0dHJpYnV0ZVRvRWxlbWVudEF0SW5kZXgoaW5kZXgsIHN0cmluZ3MuQVJJQV9ESVNBQkxFRF9BVFRSLCAnZmFsc2UnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3NUb0VsZW1lbnRBdEluZGV4KGluZGV4LCBsaXN0Q3NzQ2xhc3Nlcy5MSVNUX0lURU1fRElTQUJMRURfQ0xBU1MpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRBdHRyaWJ1dGVUb0VsZW1lbnRBdEluZGV4KGluZGV4LCBzdHJpbmdzLkFSSUFfRElTQUJMRURfQVRUUiwgJ3RydWUnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDTWVudUZvdW5kYXRpb24ucHJvdG90eXBlLnZhbGlkYXRlZEluZGV4XyA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB2YXIgbWVudVNpemUgPSB0aGlzLmFkYXB0ZXJfLmdldE1lbnVJdGVtQ291bnQoKTtcbiAgICAgICAgdmFyIGlzSW5kZXhJblJhbmdlID0gaW5kZXggPj0gMCAmJiBpbmRleCA8IG1lbnVTaXplO1xuICAgICAgICBpZiAoIWlzSW5kZXhJblJhbmdlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01EQ01lbnVGb3VuZGF0aW9uOiBObyBsaXN0IGl0ZW0gYXQgc3BlY2lmaWVkIGluZGV4LicpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTURDTWVudUZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ01lbnVGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDTWVudUZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0NvbXBvbmVudCB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBjbG9zZXN0IH0gZnJvbSAnQG1hdGVyaWFsL2RvbS9wb255ZmlsbCc7XG5pbXBvcnQgeyBNRENMaXN0IH0gZnJvbSAnQG1hdGVyaWFsL2xpc3QvY29tcG9uZW50JztcbmltcG9ydCB7IE1EQ0xpc3RGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2xpc3QvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBNRENNZW51U3VyZmFjZSB9IGZyb20gJ0BtYXRlcmlhbC9tZW51LXN1cmZhY2UvY29tcG9uZW50JztcbmltcG9ydCB7IE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9tZW51LXN1cmZhY2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgTURDTWVudUZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xudmFyIE1EQ01lbnUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDTWVudSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENNZW51KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE1EQ01lbnUuYXR0YWNoVG8gPSBmdW5jdGlvbiAocm9vdCkge1xuICAgICAgICByZXR1cm4gbmV3IE1EQ01lbnUocm9vdCk7XG4gICAgfTtcbiAgICBNRENNZW51LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKG1lbnVTdXJmYWNlRmFjdG9yeSwgbGlzdEZhY3RvcnkpIHtcbiAgICAgICAgaWYgKG1lbnVTdXJmYWNlRmFjdG9yeSA9PT0gdm9pZCAwKSB7IG1lbnVTdXJmYWNlRmFjdG9yeSA9IGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gbmV3IE1EQ01lbnVTdXJmYWNlKGVsKTsgfTsgfVxuICAgICAgICBpZiAobGlzdEZhY3RvcnkgPT09IHZvaWQgMCkgeyBsaXN0RmFjdG9yeSA9IGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gbmV3IE1EQ0xpc3QoZWwpOyB9OyB9XG4gICAgICAgIHRoaXMubWVudVN1cmZhY2VGYWN0b3J5XyA9IG1lbnVTdXJmYWNlRmFjdG9yeTtcbiAgICAgICAgdGhpcy5saXN0RmFjdG9yeV8gPSBsaXN0RmFjdG9yeTtcbiAgICB9O1xuICAgIE1EQ01lbnUucHJvdG90eXBlLmluaXRpYWxTeW5jV2l0aERPTSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5tZW51U3VyZmFjZV8gPSB0aGlzLm1lbnVTdXJmYWNlRmFjdG9yeV8odGhpcy5yb290Xyk7XG4gICAgICAgIHZhciBsaXN0ID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuTElTVF9TRUxFQ1RPUik7XG4gICAgICAgIGlmIChsaXN0KSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RfID0gdGhpcy5saXN0RmFjdG9yeV8obGlzdCk7XG4gICAgICAgICAgICB0aGlzLmxpc3RfLndyYXBGb2N1cyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RfID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUtleWRvd25fID0gZnVuY3Rpb24gKGV2dCkgeyByZXR1cm4gX3RoaXMuZm91bmRhdGlvbl8uaGFuZGxlS2V5ZG93bihldnQpOyB9O1xuICAgICAgICB0aGlzLmhhbmRsZUl0ZW1BY3Rpb25fID0gZnVuY3Rpb24gKGV2dCkgeyByZXR1cm4gX3RoaXMuZm91bmRhdGlvbl8uaGFuZGxlSXRlbUFjdGlvbihfdGhpcy5pdGVtc1tldnQuZGV0YWlsLmluZGV4XSk7IH07XG4gICAgICAgIHRoaXMuaGFuZGxlTWVudVN1cmZhY2VPcGVuZWRfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZm91bmRhdGlvbl8uaGFuZGxlTWVudVN1cmZhY2VPcGVuZWQoKTsgfTtcbiAgICAgICAgdGhpcy5tZW51U3VyZmFjZV8ubGlzdGVuKE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5zdHJpbmdzLk9QRU5FRF9FVkVOVCwgdGhpcy5oYW5kbGVNZW51U3VyZmFjZU9wZW5lZF8pO1xuICAgICAgICB0aGlzLmxpc3Rlbigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5ZG93bl8pO1xuICAgICAgICB0aGlzLmxpc3RlbihNRENMaXN0Rm91bmRhdGlvbi5zdHJpbmdzLkFDVElPTl9FVkVOVCwgdGhpcy5oYW5kbGVJdGVtQWN0aW9uXyk7XG4gICAgfTtcbiAgICBNRENNZW51LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5saXN0Xykge1xuICAgICAgICAgICAgdGhpcy5saXN0Xy5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tZW51U3VyZmFjZV8uZGVzdHJveSgpO1xuICAgICAgICB0aGlzLm1lbnVTdXJmYWNlXy51bmxpc3RlbihNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uc3RyaW5ncy5PUEVORURfRVZFTlQsIHRoaXMuaGFuZGxlTWVudVN1cmZhY2VPcGVuZWRfKTtcbiAgICAgICAgdGhpcy51bmxpc3Rlbigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5ZG93bl8pO1xuICAgICAgICB0aGlzLnVubGlzdGVuKE1EQ0xpc3RGb3VuZGF0aW9uLnN0cmluZ3MuQUNUSU9OX0VWRU5ULCB0aGlzLmhhbmRsZUl0ZW1BY3Rpb25fKTtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTWVudS5wcm90b3R5cGUsIFwib3BlblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWVudVN1cmZhY2VfLmlzT3BlbigpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZW51U3VyZmFjZV8ub3BlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZW51U3VyZmFjZV8uY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ01lbnUucHJvdG90eXBlLCBcIndyYXBGb2N1c1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlzdF8gPyB0aGlzLmxpc3RfLndyYXBGb2N1cyA6IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGlzdF8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RfLndyYXBGb2N1cyA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTWVudS5wcm90b3R5cGUsIFwiaXRlbXNcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJuIHRoZSBpdGVtcyB3aXRoaW4gdGhlIG1lbnUuIE5vdGUgdGhhdCB0aGlzIG9ubHkgY29udGFpbnMgdGhlIHNldCBvZiBlbGVtZW50cyB3aXRoaW5cbiAgICAgICAgICogdGhlIGl0ZW1zIGNvbnRhaW5lciB0aGF0IGFyZSBwcm9wZXIgbGlzdCBpdGVtcywgYW5kIG5vdCBzdXBwbGVtZW50YWwgLyBwcmVzZW50YXRpb25hbCBET01cbiAgICAgICAgICogZWxlbWVudHMuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RfID8gdGhpcy5saXN0Xy5saXN0RWxlbWVudHMgOiBbXTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ01lbnUucHJvdG90eXBlLCBcInF1aWNrT3BlblwiLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKHF1aWNrT3Blbikge1xuICAgICAgICAgICAgdGhpcy5tZW51U3VyZmFjZV8ucXVpY2tPcGVuID0gcXVpY2tPcGVuO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBTZXRzIGRlZmF1bHQgZm9jdXMgc3RhdGUgd2hlcmUgdGhlIG1lbnUgc2hvdWxkIGZvY3VzIGV2ZXJ5IHRpbWUgd2hlbiBtZW51XG4gICAgICogaXMgb3BlbmVkLiBGb2N1c2VzIHRoZSBsaXN0IHJvb3QgKGBEZWZhdWx0Rm9jdXNTdGF0ZS5MSVNUX1JPT1RgKSBlbGVtZW50IGJ5XG4gICAgICogZGVmYXVsdC5cbiAgICAgKiBAcGFyYW0gZm9jdXNTdGF0ZSBEZWZhdWx0IGZvY3VzIHN0YXRlLlxuICAgICAqL1xuICAgIE1EQ01lbnUucHJvdG90eXBlLnNldERlZmF1bHRGb2N1c1N0YXRlID0gZnVuY3Rpb24gKGZvY3VzU3RhdGUpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXREZWZhdWx0Rm9jdXNTdGF0ZShmb2N1c1N0YXRlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBjb3JuZXIgRGVmYXVsdCBhbmNob3IgY29ybmVyIGFsaWdubWVudCBvZiB0b3AtbGVmdCBtZW51IGNvcm5lci5cbiAgICAgKi9cbiAgICBNRENNZW51LnByb3RvdHlwZS5zZXRBbmNob3JDb3JuZXIgPSBmdW5jdGlvbiAoY29ybmVyKSB7XG4gICAgICAgIHRoaXMubWVudVN1cmZhY2VfLnNldEFuY2hvckNvcm5lcihjb3JuZXIpO1xuICAgIH07XG4gICAgTURDTWVudS5wcm90b3R5cGUuc2V0QW5jaG9yTWFyZ2luID0gZnVuY3Rpb24gKG1hcmdpbikge1xuICAgICAgICB0aGlzLm1lbnVTdXJmYWNlXy5zZXRBbmNob3JNYXJnaW4obWFyZ2luKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGxpc3QgaXRlbSBhcyB0aGUgc2VsZWN0ZWQgcm93IGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gICAgICogQHBhcmFtIGluZGV4IEluZGV4IG9mIGxpc3QgaXRlbSB3aXRoaW4gbWVudS5cbiAgICAgKi9cbiAgICBNRENNZW51LnByb3RvdHlwZS5zZXRTZWxlY3RlZEluZGV4ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0U2VsZWN0ZWRJbmRleChpbmRleCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBlbmFibGVkIHN0YXRlIHRvIGlzRW5hYmxlZCBmb3IgdGhlIG1lbnUgaXRlbSBhdCB0aGUgZ2l2ZW4gaW5kZXguXG4gICAgICogQHBhcmFtIGluZGV4IEluZGV4IG9mIHRoZSBtZW51IGl0ZW1cbiAgICAgKiBAcGFyYW0gaXNFbmFibGVkIFRoZSBkZXNpcmVkIGVuYWJsZWQgc3RhdGUgb2YgdGhlIG1lbnUgaXRlbS5cbiAgICAgKi9cbiAgICBNRENNZW51LnByb3RvdHlwZS5zZXRFbmFibGVkID0gZnVuY3Rpb24gKGluZGV4LCBpc0VuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRFbmFibGVkKGluZGV4LCBpc0VuYWJsZWQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiBUaGUgaXRlbSB3aXRoaW4gdGhlIG1lbnUgYXQgdGhlIGluZGV4IHNwZWNpZmllZC5cbiAgICAgKi9cbiAgICBNRENNZW51LnByb3RvdHlwZS5nZXRPcHRpb25CeUluZGV4ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgICAgIGlmIChpbmRleCA8IGl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNbaW5kZXhdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ01lbnUucHJvdG90eXBlLnNldEZpeGVkUG9zaXRpb24gPSBmdW5jdGlvbiAoaXNGaXhlZCkge1xuICAgICAgICB0aGlzLm1lbnVTdXJmYWNlXy5zZXRGaXhlZFBvc2l0aW9uKGlzRml4ZWQpO1xuICAgIH07XG4gICAgTURDTWVudS5wcm90b3R5cGUuaG9pc3RNZW51VG9Cb2R5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm1lbnVTdXJmYWNlXy5ob2lzdE1lbnVUb0JvZHkoKTtcbiAgICB9O1xuICAgIE1EQ01lbnUucHJvdG90eXBlLnNldElzSG9pc3RlZCA9IGZ1bmN0aW9uIChpc0hvaXN0ZWQpIHtcbiAgICAgICAgdGhpcy5tZW51U3VyZmFjZV8uc2V0SXNIb2lzdGVkKGlzSG9pc3RlZCk7XG4gICAgfTtcbiAgICBNRENNZW51LnByb3RvdHlwZS5zZXRBYnNvbHV0ZVBvc2l0aW9uID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgdGhpcy5tZW51U3VyZmFjZV8uc2V0QWJzb2x1dGVQb3NpdGlvbih4LCB5KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGVsZW1lbnQgdGhhdCB0aGUgbWVudS1zdXJmYWNlIGlzIGFuY2hvcmVkIHRvLlxuICAgICAqL1xuICAgIE1EQ01lbnUucHJvdG90eXBlLnNldEFuY2hvckVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB0aGlzLm1lbnVTdXJmYWNlXy5hbmNob3JFbGVtZW50ID0gZWxlbWVudDtcbiAgICB9O1xuICAgIE1EQ01lbnUucHJvdG90eXBlLmdldERlZmF1bHRGb3VuZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBETyBOT1QgSU5MSU5FIHRoaXMgdmFyaWFibGUuIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCBmb3VuZGF0aW9ucyB0YWtlIGEgUGFydGlhbDxNRENGb29BZGFwdGVyPi5cbiAgICAgICAgLy8gVG8gZW5zdXJlIHdlIGRvbid0IGFjY2lkZW50YWxseSBvbWl0IGFueSBtZXRob2RzLCB3ZSBuZWVkIGEgc2VwYXJhdGUsIHN0cm9uZ2x5IHR5cGVkIGFkYXB0ZXIgdmFyaWFibGUuXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgIHZhciBhZGFwdGVyID0ge1xuICAgICAgICAgICAgYWRkQ2xhc3NUb0VsZW1lbnRBdEluZGV4OiBmdW5jdGlvbiAoaW5kZXgsIGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBsaXN0ID0gX3RoaXMuaXRlbXM7XG4gICAgICAgICAgICAgICAgbGlzdFtpbmRleF0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzRnJvbUVsZW1lbnRBdEluZGV4OiBmdW5jdGlvbiAoaW5kZXgsIGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBsaXN0ID0gX3RoaXMuaXRlbXM7XG4gICAgICAgICAgICAgICAgbGlzdFtpbmRleF0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZEF0dHJpYnV0ZVRvRWxlbWVudEF0SW5kZXg6IGZ1bmN0aW9uIChpbmRleCwgYXR0ciwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdCA9IF90aGlzLml0ZW1zO1xuICAgICAgICAgICAgICAgIGxpc3RbaW5kZXhdLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVtb3ZlQXR0cmlidXRlRnJvbUVsZW1lbnRBdEluZGV4OiBmdW5jdGlvbiAoaW5kZXgsIGF0dHIpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdCA9IF90aGlzLml0ZW1zO1xuICAgICAgICAgICAgICAgIGxpc3RbaW5kZXhdLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbGVtZW50Q29udGFpbnNDbGFzczogZnVuY3Rpb24gKGVsZW1lbnQsIGNsYXNzTmFtZSkgeyByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIGNsb3NlU3VyZmFjZTogZnVuY3Rpb24gKHNraXBSZXN0b3JlRm9jdXMpIHsgcmV0dXJuIF90aGlzLm1lbnVTdXJmYWNlXy5jbG9zZShza2lwUmVzdG9yZUZvY3VzKTsgfSxcbiAgICAgICAgICAgIGdldEVsZW1lbnRJbmRleDogZnVuY3Rpb24gKGVsZW1lbnQpIHsgcmV0dXJuIF90aGlzLml0ZW1zLmluZGV4T2YoZWxlbWVudCk7IH0sXG4gICAgICAgICAgICBub3RpZnlTZWxlY3RlZDogZnVuY3Rpb24gKGV2dERhdGEpIHsgcmV0dXJuIF90aGlzLmVtaXQoc3RyaW5ncy5TRUxFQ1RFRF9FVkVOVCwge1xuICAgICAgICAgICAgICAgIGluZGV4OiBldnREYXRhLmluZGV4LFxuICAgICAgICAgICAgICAgIGl0ZW06IF90aGlzLml0ZW1zW2V2dERhdGEuaW5kZXhdLFxuICAgICAgICAgICAgfSk7IH0sXG4gICAgICAgICAgICBnZXRNZW51SXRlbUNvdW50OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5pdGVtcy5sZW5ndGg7IH0sXG4gICAgICAgICAgICBmb2N1c0l0ZW1BdEluZGV4OiBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIF90aGlzLml0ZW1zW2luZGV4XS5mb2N1cygpOyB9LFxuICAgICAgICAgICAgZm9jdXNMaXN0Um9vdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihzdHJpbmdzLkxJU1RfU0VMRUNUT1IpLmZvY3VzKCk7IH0sXG4gICAgICAgICAgICBpc1NlbGVjdGFibGVJdGVtQXRJbmRleDogZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiAhIWNsb3Nlc3QoX3RoaXMuaXRlbXNbaW5kZXhdLCBcIi5cIiArIGNzc0NsYXNzZXMuTUVOVV9TRUxFQ1RJT05fR1JPVVApOyB9LFxuICAgICAgICAgICAgZ2V0U2VsZWN0ZWRTaWJsaW5nT2ZJdGVtQXRJbmRleDogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGlvbkdyb3VwRWwgPSBjbG9zZXN0KF90aGlzLml0ZW1zW2luZGV4XSwgXCIuXCIgKyBjc3NDbGFzc2VzLk1FTlVfU0VMRUNUSU9OX0dST1VQKTtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWRJdGVtRWwgPSBzZWxlY3Rpb25Hcm91cEVsLnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBjc3NDbGFzc2VzLk1FTlVfU0VMRUNURURfTElTVF9JVEVNKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRJdGVtRWwgPyBfdGhpcy5pdGVtcy5pbmRleE9mKHNlbGVjdGVkSXRlbUVsKSA6IC0xO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgcmV0dXJuIG5ldyBNRENNZW51Rm91bmRhdGlvbihhZGFwdGVyKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENNZW51O1xufShNRENDb21wb25lbnQpKTtcbmV4cG9ydCB7IE1EQ01lbnUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudC5qcy5tYXAiLCI8ZGl2XG4gIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgdXNlOmZvcndhcmRFdmVudHNcbiAgY2xhc3M9XCJcbiAgICBtZGMtbWVudS1zdXJmYWNlXG4gICAge2NsYXNzTmFtZX1cbiAgICB7Zml4ZWQgPyAnbWRjLW1lbnUtc3VyZmFjZS0tZml4ZWQnIDogJyd9XG4gICAge2lzU3RhdGljID8gJ21kYy1tZW51LXN1cmZhY2UtLW9wZW4nIDogJyd9XG4gICAge2lzU3RhdGljID8gJ3NtdWktbWVudS1zdXJmYWNlLS1zdGF0aWMnIDogJyd9XG4gIFwiXG4gIG9uOk1EQ01lbnVTdXJmYWNlOmNsb3NlZD17dXBkYXRlT3Blbn0gb246TURDTWVudVN1cmZhY2U6b3BlbmVkPXt1cGRhdGVPcGVufVxuICB7Li4uZXhjbHVkZSgkJHByb3BzLCBbJ3VzZScsICdjbGFzcycsICdzdGF0aWMnLCAnYW5jaG9yJywgJ2ZpeGVkJywgJ29wZW4nLCAncXVpY2tPcGVuJywgJ2FuY2hvckVsZW1lbnQnLCAnYW5jaG9yQ29ybmVyJywgJ2VsZW1lbnQnXSl9XG4+PHNsb3Q+PC9zbG90PjwvZGl2PlxuXG48c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgaW1wb3J0IHtDb3JuZXIsIENvcm5lckJpdH0gZnJvbSAnQG1hdGVyaWFsL21lbnUtc3VyZmFjZSc7XG5cbiAgZXhwb3J0IHtDb3JuZXIsIENvcm5lckJpdH07XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHtNRENNZW51U3VyZmFjZX0gZnJvbSAnQG1hdGVyaWFsL21lbnUtc3VyZmFjZSc7XG4gIGltcG9ydCB7b25Nb3VudCwgb25EZXN0cm95LCBnZXRDb250ZXh0LCBzZXRDb250ZXh0fSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQge2N1cnJlbnRfY29tcG9uZW50fSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQge2ZvcndhcmRFdmVudHNCdWlsZGVyfSBmcm9tICdAc211aS9jb21tb24vZm9yd2FyZEV2ZW50cy5qcyc7XG4gIGltcG9ydCB7ZXhjbHVkZX0gZnJvbSAnQHNtdWkvY29tbW9uL2V4Y2x1ZGUuanMnO1xuICBpbXBvcnQge3VzZUFjdGlvbnN9IGZyb20gJ0BzbXVpL2NvbW1vbi91c2VBY3Rpb25zLmpzJztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoY3VycmVudF9jb21wb25lbnQsIFsnTURDTWVudVN1cmZhY2U6Y2xvc2VkJywgJ01EQ01lbnVTdXJmYWNlOm9wZW5lZCddKTtcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gIGV4cG9ydCB7Y2xhc3NOYW1lIGFzIGNsYXNzfTtcbiAgbGV0IGlzU3RhdGljID0gZmFsc2U7XG4gIGV4cG9ydCB7aXNTdGF0aWMgYXMgc3RhdGljfTtcbiAgZXhwb3J0IGxldCBhbmNob3IgPSB0cnVlO1xuICBleHBvcnQgbGV0IGZpeGVkID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgb3BlbiA9IGlzU3RhdGljO1xuICBleHBvcnQgbGV0IHF1aWNrT3BlbiA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGFuY2hvckVsZW1lbnQgPSBudWxsO1xuICBleHBvcnQgbGV0IGFuY2hvckNvcm5lciA9IG51bGw7XG5cbiAgZXhwb3J0IGxldCBlbGVtZW50ID0gdW5kZWZpbmVkOyAvLyBUaGlzIGlzIGV4cG9ydGVkIGJlY2F1c2UgTWVudSBuZWVkcyBpdC5cbiAgbGV0IG1lbnVTdXJmYWNlO1xuICBsZXQgaW5zdGFudGlhdGUgPSBnZXRDb250ZXh0KCdTTVVJOm1lbnUtc3VyZmFjZTppbnN0YW50aWF0ZScpO1xuICBsZXQgZ2V0SW5zdGFuY2UgPSBnZXRDb250ZXh0KCdTTVVJOm1lbnUtc3VyZmFjZTpnZXRJbnN0YW5jZScpO1xuXG4gIHNldENvbnRleHQoJ1NNVUk6bGlzdDpyb2xlJywgJ21lbnUnKTtcbiAgc2V0Q29udGV4dCgnU01VSTpsaXN0Oml0ZW06cm9sZScsICdtZW51aXRlbScpO1xuXG4gICQ6IGlmIChlbGVtZW50ICYmIGFuY2hvciAmJiAhZWxlbWVudC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnbWRjLW1lbnUtc3VyZmFjZS0tYW5jaG9yJykpIHtcbiAgICBlbGVtZW50LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnbWRjLW1lbnUtc3VyZmFjZS0tYW5jaG9yJyk7XG4gICAgYW5jaG9yRWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgfVxuXG4gICQ6IGlmIChtZW51U3VyZmFjZSAmJiBtZW51U3VyZmFjZS5pc09wZW4oKSAhPT0gb3Blbikge1xuICAgIGlmIChvcGVuKSB7XG4gICAgICBtZW51U3VyZmFjZS5vcGVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbnVTdXJmYWNlLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgJDogaWYgKG1lbnVTdXJmYWNlICYmIG1lbnVTdXJmYWNlLnF1aWNrT3BlbiAhPT0gcXVpY2tPcGVuKSB7XG4gICAgbWVudVN1cmZhY2UucXVpY2tPcGVuID0gcXVpY2tPcGVuO1xuICB9XG5cbiAgJDogaWYgKG1lbnVTdXJmYWNlICYmIG1lbnVTdXJmYWNlLmFuY2hvckVsZW1lbnQgIT09IGFuY2hvckVsZW1lbnQpIHtcbiAgICBtZW51U3VyZmFjZS5hbmNob3JFbGVtZW50ID0gYW5jaG9yRWxlbWVudDtcbiAgfVxuXG4gIGxldCBvbGRGaXhlZCA9IG51bGw7XG4gICQ6IGlmIChtZW51U3VyZmFjZSAmJiBvbGRGaXhlZCAhPT0gZml4ZWQpIHtcbiAgICBtZW51U3VyZmFjZS5zZXRGaXhlZFBvc2l0aW9uKGZpeGVkKTtcbiAgICBvbGRGaXhlZCA9IGZpeGVkO1xuICB9XG5cbiAgJDogaWYgKG1lbnVTdXJmYWNlICYmIGFuY2hvckNvcm5lciAhPSBudWxsKSB7XG4gICAgaWYgKENvcm5lci5oYXNPd25Qcm9wZXJ0eShhbmNob3JDb3JuZXIpKSB7XG4gICAgICBtZW51U3VyZmFjZS5zZXRBbmNob3JDb3JuZXIoQ29ybmVyW2FuY2hvckNvcm5lcl0pO1xuICAgIH0gZWxzZSBpZiAoQ29ybmVyQml0Lmhhc093blByb3BlcnR5KGFuY2hvckNvcm5lcikpIHtcbiAgICAgIG1lbnVTdXJmYWNlLnNldEFuY2hvckNvcm5lcihDb3JuZXJbYW5jaG9yQ29ybmVyXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbnVTdXJmYWNlLnNldEFuY2hvckNvcm5lcihhbmNob3JDb3JuZXIpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91bnQoYXN5bmMgKCkgPT4ge1xuICAgIGlmIChpbnN0YW50aWF0ZSAhPT0gZmFsc2UpIHtcbiAgICAgIG1lbnVTdXJmYWNlID0gbmV3IE1EQ01lbnVTdXJmYWNlKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZW51U3VyZmFjZSA9IGF3YWl0IGdldEluc3RhbmNlKCk7XG4gICAgfVxuICB9KTtcblxuICBvbkRlc3Ryb3koKCkgPT4ge1xuICAgIGlmIChhbmNob3IpIHtcbiAgICAgIGVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ21kYy1tZW51LXN1cmZhY2UtLWFuY2hvcicpO1xuICAgIH1cbiAgICBsZXQgaXNIb2lzdGVkID0gZmFsc2U7XG4gICAgaWYgKG1lbnVTdXJmYWNlKSB7XG4gICAgICBpc0hvaXN0ZWQgPSBtZW51U3VyZmFjZS5mb3VuZGF0aW9uXy5pc0hvaXN0ZWRFbGVtZW50XztcbiAgICB9XG4gICAgaWYgKGluc3RhbnRpYXRlICE9PSBmYWxzZSkge1xuICAgICAgbWVudVN1cmZhY2UuZGVzdHJveSgpO1xuICAgIH1cbiAgICBpZiAoaXNIb2lzdGVkKSB7XG4gICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiB1cGRhdGVPcGVuKCkge1xuICAgIGlmIChtZW51U3VyZmFjZSkge1xuICAgICAgaWYgKGlzU3RhdGljKSB7XG4gICAgICAgIG9wZW4gPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3BlbiA9IG1lbnVTdXJmYWNlLmlzT3BlbigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRPcGVuKHZhbHVlKSB7XG4gICAgb3BlbiA9IHZhbHVlO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldEFuY2hvckNvcm5lciguLi5hcmdzKSB7XG4gICAgcmV0dXJuIG1lbnVTdXJmYWNlLnNldEFuY2hvckNvcm5lciguLi5hcmdzKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRBbmNob3JNYXJnaW4oLi4uYXJncykge1xuICAgIHJldHVybiBtZW51U3VyZmFjZS5zZXRBbmNob3JNYXJnaW4oLi4uYXJncyk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gc2V0Rml4ZWRQb3NpdGlvbihpc0ZpeGVkLCAuLi5hcmdzKSB7XG4gICAgZml4ZWQgPSBpc0ZpeGVkO1xuICAgIHJldHVybiBtZW51U3VyZmFjZS5zZXRGaXhlZFBvc2l0aW9uKGlzRml4ZWQsIC4uLmFyZ3MpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldEFic29sdXRlUG9zaXRpb24oLi4uYXJncykge1xuICAgIHJldHVybiBtZW51U3VyZmFjZS5zZXRBYnNvbHV0ZVBvc2l0aW9uKC4uLmFyZ3MpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldE1lbnVTdXJmYWNlQW5jaG9yRWxlbWVudCguLi5hcmdzKSB7XG4gICAgcmV0dXJuIG1lbnVTdXJmYWNlLnNldE1lbnVTdXJmYWNlQW5jaG9yRWxlbWVudCguLi5hcmdzKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBob2lzdE1lbnVUb0JvZHkoLi4uYXJncykge1xuICAgIHJldHVybiBtZW51U3VyZmFjZS5ob2lzdE1lbnVUb0JvZHkoLi4uYXJncyk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gc2V0SXNIb2lzdGVkKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbWVudVN1cmZhY2Uuc2V0SXNIb2lzdGVkKC4uLmFyZ3MpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRGb3VuZGF0aW9uKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbWVudVN1cmZhY2UuZ2V0RGVmYXVsdEZvdW5kYXRpb24oLi4uYXJncyk7XG4gIH1cbjwvc2NyaXB0PiIsIjxNZW51U3VyZmFjZVxuICBiaW5kOmVsZW1lbnRcbiAgdXNlPXtbZm9yd2FyZEV2ZW50cywgLi4udXNlXX1cbiAgY2xhc3M9XCJtZGMtbWVudSB7Y2xhc3NOYW1lfVwiXG4gIG9uOk1EQ01lbnU6c2VsZWN0ZWQ9e3VwZGF0ZU9wZW59XG4gIG9uOk1EQ01lbnVTdXJmYWNlOmNsb3NlZD17dXBkYXRlT3Blbn0gb246TURDTWVudVN1cmZhY2U6b3BlbmVkPXt1cGRhdGVPcGVufVxuICB7Li4uZXhjbHVkZSgkJHByb3BzLCBbJ3VzZScsICdjbGFzcycsICd3cmFwRm9jdXMnXSl9XG4+PHNsb3Q+PC9zbG90PjwvTWVudVN1cmZhY2U+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7TURDTWVudX0gZnJvbSAnQG1hdGVyaWFsL21lbnUnO1xuICBpbXBvcnQge29uTW91bnQsIG9uRGVzdHJveSwgZ2V0Q29udGV4dCwgc2V0Q29udGV4dH0gZnJvbSAnc3ZlbHRlJztcbiAgaW1wb3J0IHtjdXJyZW50X2NvbXBvbmVudH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHtmb3J3YXJkRXZlbnRzQnVpbGRlcn0gZnJvbSAnQHNtdWkvY29tbW9uL2ZvcndhcmRFdmVudHMuanMnO1xuICBpbXBvcnQge2V4Y2x1ZGV9IGZyb20gJ0BzbXVpL2NvbW1vbi9leGNsdWRlLmpzJztcbiAgaW1wb3J0IHt1c2VBY3Rpb25zfSBmcm9tICdAc211aS9jb21tb24vdXNlQWN0aW9ucy5qcyc7XG4gIGltcG9ydCBNZW51U3VyZmFjZSwge0Nvcm5lciwgQ29ybmVyQml0fSBmcm9tICdAc211aS9tZW51LXN1cmZhY2UvTWVudVN1cmZhY2Uuc3ZlbHRlJztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoY3VycmVudF9jb21wb25lbnQsIFsnTURDTWVudTpzZWxlY3RlZCcsICdNRENNZW51U3VyZmFjZTpjbG9zZWQnLCAnTURDTWVudVN1cmZhY2U6b3BlbmVkJ10pO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG4gIGxldCBjbGFzc05hbWUgPSAnJztcbiAgZXhwb3J0IHtjbGFzc05hbWUgYXMgY2xhc3N9O1xuICBsZXQgaXNTdGF0aWMgPSBmYWxzZTtcbiAgZXhwb3J0IHtpc1N0YXRpYyBhcyBzdGF0aWN9OyAvLyBQdXJwb3NlbHkgb21pdHRlZCBmcm9tIHRoZSBleGNsdWRlIGNhbGwgYWJvdmUuXG4gIGV4cG9ydCBsZXQgb3BlbiA9IGlzU3RhdGljOyAvLyBQdXJwb3NlbHkgb21pdHRlZCBmcm9tIHRoZSBleGNsdWRlIGNhbGwgYWJvdmUuXG4gIGV4cG9ydCBsZXQgcXVpY2tPcGVuID0gZmFsc2U7IC8vIFB1cnBvc2VseSBvbWl0dGVkIGZyb20gdGhlIGV4Y2x1ZGUgY2FsbCBhYm92ZS5cbiAgZXhwb3J0IGxldCBhbmNob3JDb3JuZXIgPSBudWxsOyAvLyBQdXJwb3NlbHkgb21pdHRlZCBmcm9tIHRoZSBleGNsdWRlIGNhbGwgYWJvdmUuXG4gIGV4cG9ydCBsZXQgd3JhcEZvY3VzID0gZmFsc2U7XG5cbiAgbGV0IGVsZW1lbnQ7XG4gIGxldCBtZW51O1xuICBsZXQgaW5zdGFudGlhdGUgPSBnZXRDb250ZXh0KCdTTVVJOm1lbnU6aW5zdGFudGlhdGUnKTtcbiAgbGV0IGdldEluc3RhbmNlID0gZ2V0Q29udGV4dCgnU01VSTptZW51OmdldEluc3RhbmNlJyk7XG4gIGxldCBtZW51U3VyZmFjZVByb21pc2VSZXNvbHZlO1xuICBsZXQgbWVudVN1cmZhY2VQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBtZW51U3VyZmFjZVByb21pc2VSZXNvbHZlID0gcmVzb2x2ZSk7XG4gIGxldCBsaXN0UHJvbWlzZVJlc29sdmU7XG4gIGxldCBsaXN0UHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gbGlzdFByb21pc2VSZXNvbHZlID0gcmVzb2x2ZSk7XG5cbiAgc2V0Q29udGV4dCgnU01VSTptZW51LXN1cmZhY2U6aW5zdGFudGlhdGUnLCBmYWxzZSk7XG4gIHNldENvbnRleHQoJ1NNVUk6bWVudS1zdXJmYWNlOmdldEluc3RhbmNlJywgZ2V0TWVudVN1cmZhY2VJbnN0YW5jZVByb21pc2UpO1xuICBzZXRDb250ZXh0KCdTTVVJOmxpc3Q6aW5zdGFudGlhdGUnLCBmYWxzZSk7XG4gIHNldENvbnRleHQoJ1NNVUk6bGlzdDpnZXRJbnN0YW5jZScsIGdldExpc3RJbnN0YW5jZVByb21pc2UpO1xuXG4gICQ6IGlmIChtZW51ICYmIG1lbnUub3BlbiAhPT0gb3Blbikge1xuICAgIGlmIChpc1N0YXRpYykge1xuICAgICAgb3BlbiA9IHRydWU7XG4gICAgfVxuICAgIG1lbnUub3BlbiA9IG9wZW47XG4gIH1cblxuICAkOiBpZiAobWVudSAmJiBtZW51LndyYXBGb2N1cyAhPT0gd3JhcEZvY3VzKSB7XG4gICAgbWVudS53cmFwRm9jdXMgPSB3cmFwRm9jdXM7XG4gIH1cblxuICAkOiBpZiAobWVudSkge1xuICAgIG1lbnUucXVpY2tPcGVuID0gcXVpY2tPcGVuO1xuICB9XG5cbiAgJDogaWYgKG1lbnUgJiYgYW5jaG9yQ29ybmVyICE9IG51bGwpIHtcbiAgICBpZiAoQ29ybmVyLmhhc093blByb3BlcnR5KGFuY2hvckNvcm5lcikpIHtcbiAgICAgIG1lbnUuc2V0QW5jaG9yQ29ybmVyKENvcm5lclthbmNob3JDb3JuZXJdKTtcbiAgICB9IGVsc2UgaWYgKENvcm5lckJpdC5oYXNPd25Qcm9wZXJ0eShhbmNob3JDb3JuZXIpKSB7XG4gICAgICBtZW51LnNldEFuY2hvckNvcm5lcihDb3JuZXJbYW5jaG9yQ29ybmVyXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbnUuc2V0QW5jaG9yQ29ybmVyKGFuY2hvckNvcm5lcik7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VudChhc3luYyAoKSA9PiB7XG4gICAgaWYgKGluc3RhbnRpYXRlICE9PSBmYWxzZSkge1xuICAgICAgbWVudSA9IG5ldyBNRENNZW51KGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZW51ID0gYXdhaXQgZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG4gICAgbWVudVN1cmZhY2VQcm9taXNlUmVzb2x2ZShtZW51Lm1lbnVTdXJmYWNlXyk7XG4gICAgbGlzdFByb21pc2VSZXNvbHZlKG1lbnUubGlzdF8pO1xuICB9KTtcblxuICBvbkRlc3Ryb3koKCkgPT4ge1xuICAgIGlmIChpbnN0YW50aWF0ZSAhPT0gZmFsc2UpIHtcbiAgICAgIG1lbnUgJiYgbWVudS5kZXN0cm95KCk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBnZXRNZW51U3VyZmFjZUluc3RhbmNlUHJvbWlzZSgpIHtcbiAgICByZXR1cm4gbWVudVN1cmZhY2VQcm9taXNlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TGlzdEluc3RhbmNlUHJvbWlzZSgpIHtcbiAgICByZXR1cm4gbGlzdFByb21pc2U7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVPcGVuKCkge1xuICAgIG9wZW4gPSBtZW51Lm9wZW47XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gc2V0T3Blbih2YWx1ZSkge1xuICAgIG9wZW4gPSB2YWx1ZTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtcygpIHtcbiAgICByZXR1cm4gbWVudS5pdGVtcztcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0Rm9jdXNTdGF0ZSguLi5hcmdzKSB7XG4gICAgcmV0dXJuIG1lbnUuc2V0RGVmYXVsdEZvY3VzU3RhdGUoLi4uYXJncyk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gc2V0QW5jaG9yQ29ybmVyKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbWVudS5zZXRBbmNob3JDb3JuZXIoLi4uYXJncyk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gc2V0QW5jaG9yTWFyZ2luKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbWVudS5zZXRBbmNob3JNYXJnaW4oLi4uYXJncyk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gc2V0U2VsZWN0ZWRJbmRleCguLi5hcmdzKSB7XG4gICAgcmV0dXJuIG1lbnUuc2V0U2VsZWN0ZWRJbmRleCguLi5hcmdzKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRFbmFibGVkKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbWVudS5zZXRFbmFibGVkKC4uLmFyZ3MpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldE9wdGlvbkJ5SW5kZXgoLi4uYXJncykge1xuICAgIHJldHVybiBtZW51LmdldE9wdGlvbkJ5SW5kZXgoLi4uYXJncyk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gc2V0Rml4ZWRQb3NpdGlvbiguLi5hcmdzKSB7XG4gICAgcmV0dXJuIG1lbnUuc2V0Rml4ZWRQb3NpdGlvbiguLi5hcmdzKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBob2lzdE1lbnVUb0JvZHkoLi4uYXJncykge1xuICAgIHJldHVybiBtZW51LmhvaXN0TWVudVRvQm9keSguLi5hcmdzKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRJc0hvaXN0ZWQoLi4uYXJncykge1xuICAgIHJldHVybiBtZW51LnNldElzSG9pc3RlZCguLi5hcmdzKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRBYnNvbHV0ZVBvc2l0aW9uKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbWVudS5zZXRBYnNvbHV0ZVBvc2l0aW9uKC4uLmFyZ3MpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldEFuY2hvckVsZW1lbnQoLi4uYXJncykge1xuICAgIHJldHVybiBtZW51LnNldEFuY2hvckVsZW1lbnQoLi4uYXJncyk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdEZvdW5kYXRpb24oLi4uYXJncykge1xuICAgIHJldHVybiBtZW51LmdldERlZmF1bHRGb3VuZGF0aW9uKC4uLmFyZ3MpO1xuICB9XG48L3NjcmlwdD4iLCI8c3ZlbHRlOmNvbXBvbmVudFxuICB0aGlzPXtjb21wb25lbnR9XG4gIHVzZT17W2ZvcndhcmRFdmVudHMsIC4uLnVzZV19XG4gIGNsYXNzPVwie3NtdWlDbGFzc30ge2NsYXNzTmFtZX1cIlxuICB7Li4uZXhjbHVkZSgkJHByb3BzLCBbJ3VzZScsICdjbGFzcycsICdjb21wb25lbnQnLCAnZm9yd2FyZEV2ZW50cyddKX1cbj48c2xvdD48L3Nsb3Q+PC9zdmVsdGU6Y29tcG9uZW50PlxuXG48c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgZXhwb3J0IGNvbnN0IGludGVybmFscyA9IHtcbiAgICBjb21wb25lbnQ6IG51bGwsXG4gICAgc211aUNsYXNzOiBudWxsLFxuICAgIGNvbnRleHRzOiB7fVxuICB9O1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7c2V0Q29udGV4dH0gZnJvbSAnc3ZlbHRlJztcbiAgaW1wb3J0IHtjdXJyZW50X2NvbXBvbmVudH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHtmb3J3YXJkRXZlbnRzQnVpbGRlcn0gZnJvbSAnLi9mb3J3YXJkRXZlbnRzLmpzJztcbiAgaW1wb3J0IHtleGNsdWRlfSBmcm9tICcuL2V4Y2x1ZGUuanMnO1xuICBpbXBvcnQge3VzZUFjdGlvbnN9IGZyb20gJy4vdXNlQWN0aW9ucy5qcyc7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBleHBvcnQge2NsYXNzTmFtZSBhcyBjbGFzc307XG4gIGV4cG9ydCBsZXQgY29tcG9uZW50ID0gaW50ZXJuYWxzLmNvbXBvbmVudDtcbiAgbGV0IHNtdWlGb3J3YXJkRXZlbnRzID0gW107XG4gIGV4cG9ydCB7c211aUZvcndhcmRFdmVudHMgYXMgZm9yd2FyZEV2ZW50c307XG5cbiAgY29uc3Qgc211aUNsYXNzID0gaW50ZXJuYWxzLmNsYXNzO1xuICBjb25zdCBjb250ZXh0cyA9IGludGVybmFscy5jb250ZXh0cztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoY3VycmVudF9jb21wb25lbnQsIHNtdWlGb3J3YXJkRXZlbnRzKTtcblxuICBmb3IgKGxldCBjb250ZXh0IGluIGNvbnRleHRzKSB7XG4gICAgaWYgKGNvbnRleHRzLmhhc093blByb3BlcnR5KGNvbnRleHQpKSB7XG4gICAgICBzZXRDb250ZXh0KGNvbnRleHQsIGNvbnRleHRzW2NvbnRleHRdKTtcbiAgICB9XG4gIH1cbjwvc2NyaXB0PiIsImltcG9ydCBDbGFzc0FkZGVyLCB7aW50ZXJuYWxzfSBmcm9tICcuL0NsYXNzQWRkZXIuc3ZlbHRlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzQWRkZXJCdWlsZGVyKHByb3BzKSB7XG4gIGZ1bmN0aW9uIENvbXBvbmVudCguLi5hcmdzKSB7XG4gICAgT2JqZWN0LmFzc2lnbihpbnRlcm5hbHMsIHByb3BzKTtcbiAgICByZXR1cm4gbmV3IENsYXNzQWRkZXIoLi4uYXJncyk7XG4gIH1cblxuICBDb21wb25lbnQucHJvdG90eXBlID0gQ2xhc3NBZGRlcjtcblxuICAvLyBTU1Igc3VwcG9ydFxuICBpZiAoQ2xhc3NBZGRlci4kJHJlbmRlcikge1xuICAgIENvbXBvbmVudC4kJHJlbmRlciA9ICguLi5hcmdzKSA9PiBPYmplY3QuYXNzaWduKGludGVybmFscywgcHJvcHMpICYmIENsYXNzQWRkZXIuJCRyZW5kZXIoLi4uYXJncyk7XG4gIH1cbiAgaWYgKENsYXNzQWRkZXIucmVuZGVyKSB7XG4gICAgQ29tcG9uZW50LnJlbmRlciA9ICguLi5hcmdzKSA9PiBPYmplY3QuYXNzaWduKGludGVybmFscywgcHJvcHMpICYmIENsYXNzQWRkZXIucmVuZGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIENvbXBvbmVudDtcbn0iLCI8c3BhblxuICB1c2U6dXNlQWN0aW9ucz17dXNlfVxuICB1c2U6Zm9yd2FyZEV2ZW50c1xuICB7Li4uZXhjbHVkZSgkJHByb3BzLCBbJ3VzZSddKX1cbj48c2xvdD48L3Nsb3Q+PC9zcGFuPlxuXG48c2NyaXB0PlxuICBpbXBvcnQge2N1cnJlbnRfY29tcG9uZW50fSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQge2ZvcndhcmRFdmVudHNCdWlsZGVyfSBmcm9tICcuL2ZvcndhcmRFdmVudHMuanMnO1xuICBpbXBvcnQge2V4Y2x1ZGV9IGZyb20gJy4vZXhjbHVkZS5qcyc7XG4gIGltcG9ydCB7dXNlQWN0aW9uc30gZnJvbSAnLi91c2VBY3Rpb25zLmpzJztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoY3VycmVudF9jb21wb25lbnQpO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG48L3NjcmlwdD4iLCJpbXBvcnQge2NsYXNzQWRkZXJCdWlsZGVyfSBmcm9tICdAc211aS9jb21tb24vY2xhc3NBZGRlckJ1aWxkZXIuanMnO1xuaW1wb3J0IFNwYW4gZnJvbSAnQHNtdWkvY29tbW9uL1NwYW4uc3ZlbHRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3NBZGRlckJ1aWxkZXIoe1xuICBjbGFzczogJ21kYy1saXN0LWl0ZW1fX2dyYXBoaWMnLFxuICBjb21wb25lbnQ6IFNwYW4sXG4gIGNvbnRleHRzOiB7fVxufSk7IiwiaW1wb3J0IHtjbGFzc0FkZGVyQnVpbGRlcn0gZnJvbSAnQHNtdWkvY29tbW9uL2NsYXNzQWRkZXJCdWlsZGVyLmpzJztcbmltcG9ydCBHcmFwaGljIGZyb20gJ0BzbXVpL2xpc3QvR3JhcGhpYy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzQWRkZXJCdWlsZGVyKHtcbiAgY2xhc3M6ICdtZGMtbWVudV9fc2VsZWN0aW9uLWdyb3VwLWljb24nLFxuICBjb21wb25lbnQ6IEdyYXBoaWMsXG4gIGNvbnRleHRzOiB7fVxufSk7IiwieyNpZiBuYXZ9XG4gIDxuYXZcbiAgICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gICAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgICB1c2U6Zm9yd2FyZEV2ZW50c1xuICAgIGNsYXNzPVwiXG4gICAgICBtZGMtbGlzdFxuICAgICAge2NsYXNzTmFtZX1cbiAgICAgIHtub25JbnRlcmFjdGl2ZSA/ICdtZGMtbGlzdC0tbm9uLWludGVyYWN0aXZlJyA6ICcnfVxuICAgICAge2RlbnNlID8gJ21kYy1saXN0LS1kZW5zZScgOiAnJ31cbiAgICAgIHthdmF0YXJMaXN0ID8gJ21kYy1saXN0LS1hdmF0YXItbGlzdCcgOiAnJ31cbiAgICAgIHt0d29MaW5lID8gJ21kYy1saXN0LS10d28tbGluZScgOiAnJ31cbiAgICAgIHsodGhyZWVMaW5lICYmICF0d29MaW5lKSA/ICdzbXVpLWxpc3QtLXRocmVlLWxpbmUnIDogJyd9XG4gICAgXCJcbiAgICBvbjpNRENMaXN0OmFjdGlvbj17aGFuZGxlQWN0aW9ufVxuICAgIHsuLi5wcm9wc31cbiAgPjxzbG90Pjwvc2xvdD48L25hdj5cbns6ZWxzZX1cbiAgPHVsXG4gICAgYmluZDp0aGlzPXtlbGVtZW50fVxuICAgIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gICAgdXNlOmZvcndhcmRFdmVudHNcbiAgICBjbGFzcz1cIlxuICAgICAgbWRjLWxpc3RcbiAgICAgIHtjbGFzc05hbWV9XG4gICAgICB7bm9uSW50ZXJhY3RpdmUgPyAnbWRjLWxpc3QtLW5vbi1pbnRlcmFjdGl2ZScgOiAnJ31cbiAgICAgIHtkZW5zZSA/ICdtZGMtbGlzdC0tZGVuc2UnIDogJyd9XG4gICAgICB7YXZhdGFyTGlzdCA/ICdtZGMtbGlzdC0tYXZhdGFyLWxpc3QnIDogJyd9XG4gICAgICB7dHdvTGluZSA/ICdtZGMtbGlzdC0tdHdvLWxpbmUnIDogJyd9XG4gICAgICB7KHRocmVlTGluZSAmJiAhdHdvTGluZSkgPyAnc211aS1saXN0LS10aHJlZS1saW5lJyA6ICcnfVxuICAgIFwiXG4gICAge3JvbGV9XG4gICAgb246TURDTGlzdDphY3Rpb249e2hhbmRsZUFjdGlvbn1cbiAgICB7Li4ucHJvcHN9XG4gID48c2xvdD48L3Nsb3Q+PC91bD5cbnsvaWZ9XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7TURDTGlzdH0gZnJvbSAnQG1hdGVyaWFsL2xpc3QnO1xuICBpbXBvcnQge29uTW91bnQsIG9uRGVzdHJveSwgZ2V0Q29udGV4dCwgc2V0Q29udGV4dH0gZnJvbSAnc3ZlbHRlJztcbiAgaW1wb3J0IHtjdXJyZW50X2NvbXBvbmVudH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHtmb3J3YXJkRXZlbnRzQnVpbGRlcn0gZnJvbSAnQHNtdWkvY29tbW9uL2ZvcndhcmRFdmVudHMuanMnO1xuICBpbXBvcnQge2V4Y2x1ZGV9IGZyb20gJ0BzbXVpL2NvbW1vbi9leGNsdWRlLmpzJztcbiAgaW1wb3J0IHt1c2VBY3Rpb25zfSBmcm9tICdAc211aS9jb21tb24vdXNlQWN0aW9ucy5qcyc7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGN1cnJlbnRfY29tcG9uZW50LCBbJ01EQ0xpc3Q6YWN0aW9uJ10pO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG4gIGxldCBjbGFzc05hbWUgPSAnJztcbiAgZXhwb3J0IHtjbGFzc05hbWUgYXMgY2xhc3N9O1xuICBleHBvcnQgbGV0IG5vbkludGVyYWN0aXZlID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgZGVuc2UgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBhdmF0YXJMaXN0ID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgdHdvTGluZSA9IGZhbHNlO1xuICBleHBvcnQgbGV0IHRocmVlTGluZSA9IGZhbHNlO1xuICBleHBvcnQgbGV0IHZlcnRpY2FsID0gdHJ1ZTtcbiAgZXhwb3J0IGxldCB3cmFwRm9jdXMgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBzaW5nbGVTZWxlY3Rpb24gPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBzZWxlY3RlZEluZGV4ID0gbnVsbDtcbiAgZXhwb3J0IGxldCByYWRpb2xpc3QgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBjaGVja2xpc3QgPSBmYWxzZTtcblxuICAkOiBwcm9wcyA9IGV4Y2x1ZGUoJCRwcm9wcywgWyd1c2UnLCAnY2xhc3MnLCAnbm9uSW50ZXJhY3RpdmUnLCAnZGVuc2UnLCAnYXZhdGFyTGlzdCcsICd0d29MaW5lJywgJ3RocmVlTGluZScsICd2ZXJ0aWNhbCcsICd3cmFwRm9jdXMnLCAnc2luZ2xlU2VsZWN0aW9uJywgJ3NlbGVjdGVkSW5kZXgnLCAncmFkaW9saXN0JywgJ2NoZWNrbGlzdCddKTtcblxuICBsZXQgZWxlbWVudDtcbiAgbGV0IGxpc3Q7XG4gIGxldCByb2xlID0gZ2V0Q29udGV4dCgnU01VSTpsaXN0OnJvbGUnKTtcbiAgbGV0IG5hdiA9IGdldENvbnRleHQoJ1NNVUk6bGlzdDpuYXYnKTtcbiAgbGV0IGluc3RhbnRpYXRlID0gZ2V0Q29udGV4dCgnU01VSTpsaXN0Omluc3RhbnRpYXRlJyk7XG4gIGxldCBnZXRJbnN0YW5jZSA9IGdldENvbnRleHQoJ1NNVUk6bGlzdDpnZXRJbnN0YW5jZScpO1xuICBsZXQgYWRkTGF5b3V0TGlzdGVuZXIgPSBnZXRDb250ZXh0KCdTTVVJOmFkZExheW91dExpc3RlbmVyJyk7XG4gIGxldCByZW1vdmVMYXlvdXRMaXN0ZW5lcjtcblxuICBzZXRDb250ZXh0KCdTTVVJOmxpc3Q6bm9uSW50ZXJhY3RpdmUnLCBub25JbnRlcmFjdGl2ZSk7XG5cbiAgaWYgKCFyb2xlKSB7XG4gICAgaWYgKHNpbmdsZVNlbGVjdGlvbikge1xuICAgICAgcm9sZSA9ICdsaXN0Ym94JztcbiAgICAgIHNldENvbnRleHQoJ1NNVUk6bGlzdDppdGVtOnJvbGUnLCAnb3B0aW9uJyk7XG4gICAgfSBlbHNlIGlmIChyYWRpb2xpc3QpIHtcbiAgICAgIHJvbGUgPSAncmFkaW9ncm91cCc7XG4gICAgICBzZXRDb250ZXh0KCdTTVVJOmxpc3Q6aXRlbTpyb2xlJywgJ3JhZGlvJyk7XG4gICAgfSBlbHNlIGlmIChjaGVja2xpc3QpIHtcbiAgICAgIHJvbGUgPSAnZ3JvdXAnO1xuICAgICAgc2V0Q29udGV4dCgnU01VSTpsaXN0Oml0ZW06cm9sZScsICdjaGVja2JveCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICByb2xlID0gJ2xpc3QnO1xuICAgICAgc2V0Q29udGV4dCgnU01VSTpsaXN0Oml0ZW06cm9sZScsIHVuZGVmaW5lZCk7XG4gICAgfVxuICB9XG5cbiAgJDogaWYgKGxpc3QgJiYgbGlzdC52ZXJ0aWNhbCAhPT0gdmVydGljYWwpIHtcbiAgICBsaXN0LnZlcnRpY2FsID0gdmVydGljYWw7XG4gIH1cblxuICAkOiBpZiAobGlzdCAmJiBsaXN0LndyYXBGb2N1cyAhPT0gd3JhcEZvY3VzKSB7XG4gICAgbGlzdC53cmFwRm9jdXMgPSB3cmFwRm9jdXM7XG4gIH1cblxuICAkOiBpZiAobGlzdCAmJiBsaXN0LnNpbmdsZVNlbGVjdGlvbiAhPT0gc2luZ2xlU2VsZWN0aW9uKSB7XG4gICAgbGlzdC5zaW5nbGVTZWxlY3Rpb24gPSBzaW5nbGVTZWxlY3Rpb247XG4gIH1cblxuICAkOiBpZiAobGlzdCAmJiBzaW5nbGVTZWxlY3Rpb24gJiYgbGlzdC5zZWxlY3RlZEluZGV4ICE9PSBzZWxlY3RlZEluZGV4KSB7XG4gICAgbGlzdC5zZWxlY3RlZEluZGV4ID0gc2VsZWN0ZWRJbmRleDtcbiAgfVxuXG4gIGlmIChhZGRMYXlvdXRMaXN0ZW5lcikge1xuICAgIHJlbW92ZUxheW91dExpc3RlbmVyID0gYWRkTGF5b3V0TGlzdGVuZXIobGF5b3V0KTtcbiAgfVxuXG4gIG9uTW91bnQoYXN5bmMgKCkgPT4ge1xuICAgIGlmIChpbnN0YW50aWF0ZSAhPT0gZmFsc2UpIHtcbiAgICAgIGxpc3QgPSBuZXcgTURDTGlzdChlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdCA9IGF3YWl0IGdldEluc3RhbmNlKCk7XG4gICAgfVxuICAgIGlmIChzaW5nbGVTZWxlY3Rpb24pIHtcbiAgICAgIGxpc3QuaW5pdGlhbGl6ZUxpc3RUeXBlKCk7XG4gICAgICBzZWxlY3RlZEluZGV4ID0gbGlzdC5zZWxlY3RlZEluZGV4O1xuICAgIH1cbiAgfSk7XG5cbiAgb25EZXN0cm95KCgpID0+IHtcbiAgICBpZiAoaW5zdGFudGlhdGUgIT09IGZhbHNlKSB7XG4gICAgICBsaXN0ICYmIGxpc3QuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGlmIChyZW1vdmVMYXlvdXRMaXN0ZW5lcikge1xuICAgICAgcmVtb3ZlTGF5b3V0TGlzdGVuZXIoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUFjdGlvbihlKSB7XG4gICAgaWYgKGxpc3QgJiYgbGlzdC5saXN0RWxlbWVudHNbZS5kZXRhaWwuaW5kZXhdLmNsYXNzTGlzdC5jb250YWlucygnbWRjLWxpc3QtaXRlbS0tZGlzYWJsZWQnKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbGlzdC5zZWxlY3RlZEluZGV4ID0gc2VsZWN0ZWRJbmRleDtcbiAgICB9IGVsc2UgaWYgKGxpc3QgJiYgbGlzdC5zZWxlY3RlZEluZGV4ID09PSBlLmRldGFpbC5pbmRleCkge1xuICAgICAgc2VsZWN0ZWRJbmRleCA9IGUuZGV0YWlsLmluZGV4O1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBsYXlvdXQoLi4uYXJncykge1xuICAgIHJldHVybiBsaXN0LmxheW91dCguLi5hcmdzKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRFbmFibGVkKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbGlzdC5zZXRFbmFibGVkKC4uLmFyZ3MpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRGb3VuZGF0aW9uKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbGlzdC5nZXREZWZhdWx0Rm91bmRhdGlvbiguLi5hcmdzKTtcbiAgfVxuPC9zY3JpcHQ+IiwieyNpZiBuYXYgJiYgaHJlZn1cbiAgPGFcbiAgICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gICAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgICB1c2U6Zm9yd2FyZEV2ZW50c1xuICAgIGNsYXNzPVwiXG4gICAgICBtZGMtbGlzdC1pdGVtXG4gICAgICB7Y2xhc3NOYW1lfVxuICAgICAge2FjdGl2YXRlZCA/ICdtZGMtbGlzdC1pdGVtLS1hY3RpdmF0ZWQnIDogJyd9XG4gICAgICB7c2VsZWN0ZWQgPyAnbWRjLWxpc3QtaXRlbS0tc2VsZWN0ZWQnIDogJyd9XG4gICAgICB7ZGlzYWJsZWQgPyAnbWRjLWxpc3QtaXRlbS0tZGlzYWJsZWQnIDogJyd9XG4gICAgXCJcbiAgICB1c2U6UmlwcGxlPXtbcmlwcGxlLCB7dW5ib3VuZGVkOiBmYWxzZSwgY29sb3J9XX1cbiAgICB7aHJlZn1cbiAgICB7Li4uKGFjdGl2YXRlZCA/IHsnYXJpYS1jdXJyZW50JzogJ3BhZ2UnfSA6IHt9KX1cbiAgICB7dGFiaW5kZXh9XG4gICAgb246Y2xpY2s9e2FjdGlvbn1cbiAgICBvbjprZXlkb3duPXtoYW5kbGVLZXlkb3dufVxuICAgIHsuLi5wcm9wc31cbiAgPjxzbG90Pjwvc2xvdD48L2E+XG57OmVsc2UgaWYgbmF2ICYmICFocmVmfVxuICA8c3BhblxuICAgIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgICB1c2U6dXNlQWN0aW9ucz17dXNlfVxuICAgIHVzZTpmb3J3YXJkRXZlbnRzXG4gICAgY2xhc3M9XCJcbiAgICAgIG1kYy1saXN0LWl0ZW1cbiAgICAgIHtjbGFzc05hbWV9XG4gICAgICB7YWN0aXZhdGVkID8gJ21kYy1saXN0LWl0ZW0tLWFjdGl2YXRlZCcgOiAnJ31cbiAgICAgIHtzZWxlY3RlZCA/ICdtZGMtbGlzdC1pdGVtLS1zZWxlY3RlZCcgOiAnJ31cbiAgICAgIHtkaXNhYmxlZCA/ICdtZGMtbGlzdC1pdGVtLS1kaXNhYmxlZCcgOiAnJ31cbiAgICBcIlxuICAgIHVzZTpSaXBwbGU9e1tyaXBwbGUsIHt1bmJvdW5kZWQ6IGZhbHNlLCBjb2xvcn1dfVxuICAgIHsuLi4oYWN0aXZhdGVkID8geydhcmlhLWN1cnJlbnQnOiAncGFnZSd9IDoge30pfVxuICAgIHt0YWJpbmRleH1cbiAgICBvbjpjbGljaz17YWN0aW9ufVxuICAgIG9uOmtleWRvd249e2hhbmRsZUtleWRvd259XG4gICAgey4uLnByb3BzfVxuICA+PHNsb3Q+PC9zbG90Pjwvc3Bhbj5cbns6ZWxzZX1cbiAgPGxpXG4gICAgYmluZDp0aGlzPXtlbGVtZW50fVxuICAgIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gICAgdXNlOmZvcndhcmRFdmVudHNcbiAgICBjbGFzcz1cIlxuICAgICAgbWRjLWxpc3QtaXRlbVxuICAgICAge2NsYXNzTmFtZX1cbiAgICAgIHthY3RpdmF0ZWQgPyAnbWRjLWxpc3QtaXRlbS0tYWN0aXZhdGVkJyA6ICcnfVxuICAgICAge3NlbGVjdGVkID8gJ21kYy1saXN0LWl0ZW0tLXNlbGVjdGVkJyA6ICcnfVxuICAgICAge2Rpc2FibGVkID8gJ21kYy1saXN0LWl0ZW0tLWRpc2FibGVkJyA6ICcnfVxuICAgICAgeyhyb2xlID09PSAnbWVudWl0ZW0nICYmIHNlbGVjdGVkKSA/ICdtZGMtbWVudS1pdGVtLS1zZWxlY3RlZCcgOiAnJ31cbiAgICBcIlxuICAgIHVzZTpSaXBwbGU9e1tyaXBwbGUsIHt1bmJvdW5kZWQ6IGZhbHNlLCBjb2xvcn1dfVxuICAgIHtyb2xlfVxuICAgIHsuLi4ocm9sZSA9PT0gJ29wdGlvbicgPyB7J2FyaWEtc2VsZWN0ZWQnOiAoc2VsZWN0ZWQgPyAndHJ1ZScgOiAnZmFsc2UnKX0gOiB7fSl9XG4gICAgey4uLigocm9sZSA9PT0gJ3JhZGlvJyB8fCByb2xlID09PSAnY2hlY2tib3gnKSA/IHsnYXJpYS1jaGVja2VkJzogKGNoZWNrZWQgPyAndHJ1ZScgOiAnZmFsc2UnKX0gOiB7fSl9XG4gICAge3RhYmluZGV4fVxuICAgIG9uOmNsaWNrPXthY3Rpb259XG4gICAgb246a2V5ZG93bj17aGFuZGxlS2V5ZG93bn1cbiAgICB7Li4ucHJvcHN9XG4gID48c2xvdD48L3Nsb3Q+PC9saT5cbnsvaWZ9XG5cbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICBsZXQgY291bnRlciA9IDA7XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHtvbk1vdW50LCBvbkRlc3Ryb3ksIGdldENvbnRleHQsIHNldENvbnRleHQsIGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcn0gZnJvbSAnc3ZlbHRlJztcbiAgaW1wb3J0IHtjdXJyZW50X2NvbXBvbmVudH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHtmb3J3YXJkRXZlbnRzQnVpbGRlcn0gZnJvbSAnQHNtdWkvY29tbW9uL2ZvcndhcmRFdmVudHMuanMnO1xuICBpbXBvcnQge2V4Y2x1ZGV9IGZyb20gJ0BzbXVpL2NvbW1vbi9leGNsdWRlLmpzJztcbiAgaW1wb3J0IHt1c2VBY3Rpb25zfSBmcm9tICdAc211aS9jb21tb24vdXNlQWN0aW9ucy5qcyc7XG4gIGltcG9ydCBSaXBwbGUgZnJvbSAnQHNtdWkvcmlwcGxlL2JhcmUuanMnO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCk7XG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihjdXJyZW50X2NvbXBvbmVudCk7XG4gIGxldCBjaGVja2VkID0gZmFsc2U7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBleHBvcnQge2NsYXNzTmFtZSBhcyBjbGFzc307XG4gIGV4cG9ydCBsZXQgcmlwcGxlID0gdHJ1ZTtcbiAgZXhwb3J0IGxldCBjb2xvciA9IG51bGw7XG4gIGV4cG9ydCBsZXQgbm9uSW50ZXJhY3RpdmUgPSBnZXRDb250ZXh0KCdTTVVJOmxpc3Q6bm9uSW50ZXJhY3RpdmUnKTtcbiAgZXhwb3J0IGxldCBhY3RpdmF0ZWQgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCByb2xlID0gZ2V0Q29udGV4dCgnU01VSTpsaXN0Oml0ZW06cm9sZScpO1xuICBleHBvcnQgbGV0IHNlbGVjdGVkID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgZGlzYWJsZWQgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCB0YWJpbmRleCA9ICFub25JbnRlcmFjdGl2ZSAmJiAhZGlzYWJsZWQgJiYgKHNlbGVjdGVkIHx8IGNoZWNrZWQpICYmICcwJyB8fCAnLTEnO1xuICBleHBvcnQgbGV0IGhyZWYgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBpbnB1dElkID0gJ1NNVUktZm9ybS1maWVsZC1saXN0LScrKGNvdW50ZXIrKyk7XG5cbiAgJDogcHJvcHMgPSBleGNsdWRlKCQkcHJvcHMsIFsndXNlJywgJ2NsYXNzJywgJ3JpcHBsZScsICdjb2xvcicsICdub25JbnRlcmFjdGl2ZScsICdhY3RpdmF0ZWQnLCAnc2VsZWN0ZWQnLCAnZGlzYWJsZWQnLCAndGFiaW5kZXgnLCAnaHJlZicsICdpbnB1dElkJ10pO1xuXG4gIGxldCBlbGVtZW50O1xuICBsZXQgYWRkVGFiaW5kZXhJZk5vSXRlbXNTZWxlY3RlZFJhZjtcbiAgbGV0IG5hdiA9IGdldENvbnRleHQoJ1NNVUk6bGlzdDppdGVtOm5hdicpO1xuXG4gIHNldENvbnRleHQoJ1NNVUk6Z2VuZXJpYzppbnB1dDpwcm9wcycsIHtpZDogaW5wdXRJZH0pO1xuICBzZXRDb250ZXh0KCdTTVVJOmdlbmVyaWM6aW5wdXQ6c2V0Q2hlY2tlZCcsIHNldENoZWNrZWQpO1xuXG4gIG9uTW91bnQoKCkgPT4ge1xuICAgIC8vIFRhYmluZGV4IG5lZWRzIHRvIGJlICcwJyBpZiB0aGlzIGlzIHRoZSBmaXJzdCBub24tZGlzYWJsZWQgbGlzdCBpdGVtLCBhbmRcbiAgICAvLyBubyBvdGhlciBpdGVtIGlzIHNlbGVjdGVkLlxuXG4gICAgaWYgKCFzZWxlY3RlZCAmJiAhbm9uSW50ZXJhY3RpdmUpIHtcbiAgICAgIGxldCBmaXJzdCA9IHRydWU7XG4gICAgICBsZXQgZWwgPSBlbGVtZW50O1xuICAgICAgd2hpbGUgKGVsLnByZXZpb3VzU2libGluZykge1xuICAgICAgICBlbCA9IGVsLnByZXZpb3VzU2libGluZztcbiAgICAgICAgaWYgKGVsLm5vZGVUeXBlID09PSAxICYmIGVsLmNsYXNzTGlzdC5jb250YWlucygnbWRjLWxpc3QtaXRlbScpICYmICFlbC5jbGFzc0xpc3QuY29udGFpbnMoJ21kYy1saXN0LWl0ZW0tLWRpc2FibGVkJykpIHtcbiAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZmlyc3QpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBmaXJzdCwgc28gbm93IHNldCB1cCBhIGNoZWNrIHRoYXQgbm8gb3RoZXIgaXRlbXMgYXJlXG4gICAgICAgIC8vIHNlbGVjdGVkLlxuICAgICAgICBhZGRUYWJpbmRleElmTm9JdGVtc1NlbGVjdGVkUmFmID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhZGRUYWJpbmRleElmTm9JdGVtc1NlbGVjdGVkKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIG9uRGVzdHJveSgoKSA9PiB7XG4gICAgaWYgKGFkZFRhYmluZGV4SWZOb0l0ZW1zU2VsZWN0ZWRSYWYpIHtcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShhZGRUYWJpbmRleElmTm9JdGVtc1NlbGVjdGVkUmFmKTtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGFkZFRhYmluZGV4SWZOb0l0ZW1zU2VsZWN0ZWQoKSB7XG4gICAgLy8gTG9vayB0aHJvdWdoIG5leHQgc2libGluZ3MgdG8gc2VlIGlmIG5vbmUgb2YgdGhlbSBhcmUgc2VsZWN0ZWQuXG4gICAgbGV0IG5vbmVTZWxlY3RlZCA9IHRydWU7XG4gICAgbGV0IGVsID0gZWxlbWVudDtcbiAgICB3aGlsZSAoZWwubmV4dFNpYmxpbmcpIHtcbiAgICAgIGVsID0gZWwubmV4dFNpYmxpbmc7XG4gICAgICBpZiAoZWwubm9kZVR5cGUgPT09IDEgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZGMtbGlzdC1pdGVtJykgJiYgZWwuYXR0cmlidXRlc1sndGFiaW5kZXgnXSAmJiBlbC5hdHRyaWJ1dGVzWyd0YWJpbmRleCddLnZhbHVlID09PSAnMCcpIHtcbiAgICAgICAgbm9uZVNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobm9uZVNlbGVjdGVkKSB7XG4gICAgICAvLyBUaGlzIGlzIHRoZSBmaXJzdCBlbGVtZW50LCBhbmQgbm8gb3RoZXIgZWxlbWVudCBpcyBzZWxlY3RlZCwgc28gdGhlXG4gICAgICAvLyB0YWJpbmRleCBzaG91bGQgYmUgJzAnLlxuICAgICAgdGFiaW5kZXggPSAnMCc7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWN0aW9uKGUpIHtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGF0Y2goJ1NNVUk6YWN0aW9uJywgZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlS2V5ZG93bihlKSB7XG4gICAgY29uc3QgaXNFbnRlciA9IGUua2V5ID09PSAnRW50ZXInIHx8IGUua2V5Q29kZSA9PT0gMTM7XG4gICAgY29uc3QgaXNTcGFjZSA9IGUua2V5ID09PSAnU3BhY2UnIHx8IGUua2V5Q29kZSA9PT0gMzI7XG4gICAgaWYgKGlzRW50ZXIgfHwgaXNTcGFjZSkge1xuICAgICAgYWN0aW9uKGUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldENoZWNrZWQoaXNDaGVja2VkKSB7XG4gICAgY2hlY2tlZCA9IGlzQ2hlY2tlZDtcbiAgICB0YWJpbmRleCA9ICFub25JbnRlcmFjdGl2ZSAmJiAhZGlzYWJsZWQgJiYgKHNlbGVjdGVkIHx8IGNoZWNrZWQpICYmICcwJyB8fCAnLTEnO1xuICB9XG48L3NjcmlwdD4iLCJpbXBvcnQge2NsYXNzQWRkZXJCdWlsZGVyfSBmcm9tICdAc211aS9jb21tb24vY2xhc3NBZGRlckJ1aWxkZXIuanMnO1xuaW1wb3J0IFNwYW4gZnJvbSAnQHNtdWkvY29tbW9uL1NwYW4uc3ZlbHRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3NBZGRlckJ1aWxkZXIoe1xuICBjbGFzczogJ21kYy1saXN0LWl0ZW1fX3RleHQnLFxuICBjb21wb25lbnQ6IFNwYW4sXG4gIGNvbnRleHRzOiB7fVxufSk7IiwiaW1wb3J0IHtjbGFzc0FkZGVyQnVpbGRlcn0gZnJvbSAnQHNtdWkvY29tbW9uL2NsYXNzQWRkZXJCdWlsZGVyLmpzJztcbmltcG9ydCBTcGFuIGZyb20gJ0BzbXVpL2NvbW1vbi9TcGFuLnN2ZWx0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzQWRkZXJCdWlsZGVyKHtcbiAgY2xhc3M6ICdtZGMtbGlzdC1pdGVtX19wcmltYXJ5LXRleHQnLFxuICBjb21wb25lbnQ6IFNwYW4sXG4gIGNvbnRleHRzOiB7fVxufSk7IiwiaW1wb3J0IHtjbGFzc0FkZGVyQnVpbGRlcn0gZnJvbSAnQHNtdWkvY29tbW9uL2NsYXNzQWRkZXJCdWlsZGVyLmpzJztcbmltcG9ydCBTcGFuIGZyb20gJ0BzbXVpL2NvbW1vbi9TcGFuLnN2ZWx0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzQWRkZXJCdWlsZGVyKHtcbiAgY2xhc3M6ICdtZGMtbGlzdC1pdGVtX19zZWNvbmRhcnktdGV4dCcsXG4gIGNvbXBvbmVudDogU3BhbixcbiAgY29udGV4dHM6IHt9XG59KTsiLCJpbXBvcnQge2NsYXNzQWRkZXJCdWlsZGVyfSBmcm9tICdAc211aS9jb21tb24vY2xhc3NBZGRlckJ1aWxkZXIuanMnO1xuaW1wb3J0IFNwYW4gZnJvbSAnQHNtdWkvY29tbW9uL1NwYW4uc3ZlbHRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3NBZGRlckJ1aWxkZXIoe1xuICBjbGFzczogJ21kYy1saXN0LWl0ZW1fX21ldGEnLFxuICBjb21wb25lbnQ6IFNwYW4sXG4gIGNvbnRleHRzOiB7fVxufSk7IiwiPGRpdlxuICB1c2U6dXNlQWN0aW9ucz17dXNlfVxuICB1c2U6Zm9yd2FyZEV2ZW50c1xuICB7Li4uZXhjbHVkZSgkJHByb3BzLCBbJ3VzZSddKX1cbj48c2xvdD48L3Nsb3Q+PC9kaXY+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7Y3VycmVudF9jb21wb25lbnR9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7Zm9yd2FyZEV2ZW50c0J1aWxkZXJ9IGZyb20gJy4vZm9yd2FyZEV2ZW50cy5qcyc7XG4gIGltcG9ydCB7ZXhjbHVkZX0gZnJvbSAnLi9leGNsdWRlLmpzJztcbiAgaW1wb3J0IHt1c2VBY3Rpb25zfSBmcm9tICcuL3VzZUFjdGlvbnMuanMnO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihjdXJyZW50X2NvbXBvbmVudCk7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbjwvc2NyaXB0PiIsImltcG9ydCB7Y2xhc3NBZGRlckJ1aWxkZXJ9IGZyb20gJ0BzbXVpL2NvbW1vbi9jbGFzc0FkZGVyQnVpbGRlci5qcyc7XG5pbXBvcnQgRGl2IGZyb20gJ0BzbXVpL2NvbW1vbi9EaXYuc3ZlbHRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3NBZGRlckJ1aWxkZXIoe1xuICBjbGFzczogJ21kYy1saXN0LWdyb3VwJyxcbiAgY29tcG9uZW50OiBEaXYsXG4gIGNvbnRleHRzOiB7fVxufSk7IiwiPGgzXG4gIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gIHVzZTpmb3J3YXJkRXZlbnRzXG4gIHsuLi5leGNsdWRlKCQkcHJvcHMsIFsndXNlJ10pfVxuPjxzbG90Pjwvc2xvdD48L2gzPlxuXG48c2NyaXB0PlxuICBpbXBvcnQge2N1cnJlbnRfY29tcG9uZW50fSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQge2ZvcndhcmRFdmVudHNCdWlsZGVyfSBmcm9tICcuL2ZvcndhcmRFdmVudHMuanMnO1xuICBpbXBvcnQge2V4Y2x1ZGV9IGZyb20gJy4vZXhjbHVkZS5qcyc7XG4gIGltcG9ydCB7dXNlQWN0aW9uc30gZnJvbSAnLi91c2VBY3Rpb25zLmpzJztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoY3VycmVudF9jb21wb25lbnQpO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG48L3NjcmlwdD4iLCJpbXBvcnQge2NsYXNzQWRkZXJCdWlsZGVyfSBmcm9tICdAc211aS9jb21tb24vY2xhc3NBZGRlckJ1aWxkZXIuanMnO1xuaW1wb3J0IEgzIGZyb20gJ0BzbXVpL2NvbW1vbi9IMy5zdmVsdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzc0FkZGVyQnVpbGRlcih7XG4gIGNsYXNzOiAnbWRjLWxpc3QtZ3JvdXBfX3N1YmhlYWRlcicsXG4gIGNvbXBvbmVudDogSDMsXG4gIGNvbnRleHRzOiB7fVxufSk7IiwieyNpZiBncm91cCB8fCBuYXZ9XG4gIDxoclxuICAgIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gICAgdXNlOmZvcndhcmRFdmVudHNcbiAgICBjbGFzcz1cIlxuICAgICAgbWRjLWxpc3QtZGl2aWRlclxuICAgICAge2NsYXNzTmFtZX1cbiAgICAgIHtwYWRkZWQgPyAnbWRjLWxpc3QtZGl2aWRlci0tcGFkZGVkJyA6ICcnfVxuICAgICAge2luc2V0ID8gJ21kYy1saXN0LWRpdmlkZXItLWluc2V0JyA6ICcnfVxuICAgIFwiXG4gICAgey4uLnByb3BzfVxuICAvPlxuezplbHNlfVxuICA8bGlcbiAgICB1c2U6dXNlQWN0aW9ucz17dXNlfVxuICAgIHVzZTpmb3J3YXJkRXZlbnRzXG4gICAgY2xhc3M9XCJcbiAgICAgIG1kYy1saXN0LWRpdmlkZXJcbiAgICAgIHtjbGFzc05hbWV9XG4gICAgICB7cGFkZGVkID8gJ21kYy1saXN0LWRpdmlkZXItLXBhZGRlZCcgOiAnJ31cbiAgICAgIHtpbnNldCA/ICdtZGMtbGlzdC1kaXZpZGVyLS1pbnNldCcgOiAnJ31cbiAgICBcIlxuICAgIHJvbGU9XCJzZXBhcmF0b3JcIlxuICAgIHsuLi5wcm9wc31cbiAgPjwvbGk+XG57L2lmfVxuXG48c2NyaXB0PlxuICBpbXBvcnQge2N1cnJlbnRfY29tcG9uZW50fSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQge2ZvcndhcmRFdmVudHNCdWlsZGVyfSBmcm9tICdAc211aS9jb21tb24vZm9yd2FyZEV2ZW50cy5qcyc7XG4gIGltcG9ydCB7ZXhjbHVkZX0gZnJvbSAnQHNtdWkvY29tbW9uL2V4Y2x1ZGUuanMnO1xuICBpbXBvcnQge3VzZUFjdGlvbnN9IGZyb20gJ0BzbXVpL2NvbW1vbi91c2VBY3Rpb25zLmpzJztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoY3VycmVudF9jb21wb25lbnQpO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG4gIGxldCBjbGFzc05hbWUgPSAnJztcbiAgZXhwb3J0IHtjbGFzc05hbWUgYXMgY2xhc3N9O1xuICBleHBvcnQgbGV0IGdyb3VwID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgbmF2ID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgcGFkZGVkID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgaW5zZXQgPSBmYWxzZTtcblxuICAkOiBwcm9wcyA9IGV4Y2x1ZGUoJCRwcm9wcywgWyd1c2UnLCAnY2xhc3MnLCAnZ3JvdXAnLCAnbmF2JywgJ3BhZGRlZCcsICdpbnNldCddKTtcbjwvc2NyaXB0PiIsIjxzY3JpcHQ+XHJcbiAgaW1wb3J0IEJ1dHRvbiwgeyBHcm91cCwgR3JvdXBJdGVtLCBMYWJlbCwgSWNvbiB9IGZyb20gXCJAc211aS9idXR0b25cIjtcclxuICBpbXBvcnQgTWVudSBmcm9tIFwiQHNtdWkvbWVudVwiO1xyXG4gIGltcG9ydCBMaXN0LCB7IEl0ZW0sIFNlcGFyYXRvciwgVGV4dCB9IGZyb20gXCJAc211aS9saXN0XCI7XHJcbiAgaW1wb3J0IFBhZ2UgZnJvbSBcIi4vUGFnZS5zdmVsdGVcIjtcclxuICBpbXBvcnQgRXhhbXBsZSBmcm9tIFwiLi9FeGFtcGxlLnN2ZWx0ZVwiO1xyXG5cclxuICBsZXQgY2xpY2tlZCA9IDA7XHJcbiAgbGV0IG1lbnU7XHJcbiAgbGV0IG1lbnUyO1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuICAqIDpnbG9iYWwoLm15Q2xhc3MpIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAqIDpnbG9iYWwoLm1kYy1idXR0b24sIC5zbXVpLWJ1dHRvbl9fZ3JvdXApIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNGVtO1xyXG4gIH1cclxuXHJcbiAgKiA6Z2xvYmFsKC5zbXVpLWJ1dHRvbl9fZ3JvdXAgLm1kYy1idXR0b24pIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG5cclxuPFBhZ2U+XHJcbiAgPHNwYW4gc2xvdD1cImhlYWRlclwiPkJ1dHRvbjwvc3Bhbj5cclxuICA8c3BhbiBzbG90PVwiZGVzY3JpcHRpb25cIj5cclxuICAgIEJ1dHRvbnMgYWxsb3cgdXNlcnMgdG8gdGFrZSBhY3Rpb25zLCBhbmQgbWFrZSBjaG9pY2VzLCB3aXRoIGEgc2luZ2xlIHRhcC5cclxuICA8L3NwYW4+XHJcbiAgPHNwYW4gc2xvdD1cImltcG9ydFwiPlxyXG4gICAgaW1wb3J0IFJhZGlvIGZyb20gXCJAc211aS9yYWRpb1wiO1xyXG4gICAgPGJyIC8+XHJcbiAgICBpbXBvcnQgRm9ybUZpZWxkIGZyb20gXCJAc211aS9mb3JtLWZpZWxkXCI7XHJcbiAgPC9zcGFuPlxyXG4gIDxkaXYgc2xvdD1cImNvbnRlbnRcIj5cclxuICAgIDxFeGFtcGxlPlxyXG4gICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCI+Q29udGFpbmVkIEJ1dHRvbnM8L3NwYW4+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInVuZWxldmF0ZWRcIj5cclxuICAgICAgICAgIDxMYWJlbD5QUklNQVJZPC9MYWJlbD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9XHJcbiAgICAgICAgICB2YXJpYW50PVwidW5lbGV2YXRlZFwiPlxyXG4gICAgICAgICAgPExhYmVsPlNFQ09OREFSWTwvTGFiZWw+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJyYWlzZWRcIj5cclxuICAgICAgICAgIDxMYWJlbD5SQUlTRUQ8L0xhYmVsPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJyYWlzZWRcIj5cclxuICAgICAgICAgIDxMYWJlbD5SQUlTRUQ8L0xhYmVsPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwidW5lbGV2YXRlZFwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgPExhYmVsPkRpc2FibGVkPC9MYWJlbD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0V4YW1wbGU+XHJcbiAgICA8RXhhbXBsZT5cclxuICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiPk91dGxpbmVkIEJ1dHRvbnM8L3NwYW4+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcbiAgICAgICAgICA8TGFiZWw+T3V0bGluZWQ8L0xhYmVsPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgPExhYmVsPk91dGxpbmVkPC9MYWJlbD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cIm91dGxpbmVkXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICA8TGFiZWw+RGlzYWJsZWQ8L0xhYmVsPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRXhhbXBsZT5cclxuICAgIDxFeGFtcGxlPlxyXG4gICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCI+VGV4dCBCdXR0b25zPC9zcGFuPlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PlxyXG4gICAgICAgICAgPExhYmVsPkRlZmF1bHQ8L0xhYmVsPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PlxyXG4gICAgICAgICAgPExhYmVsPkRlZmF1bHQ8L0xhYmVsPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSBkaXNhYmxlZD5cclxuICAgICAgICAgIDxMYWJlbD5EaXNhYmxlZDwvTGFiZWw+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9FeGFtcGxlPlxyXG4gICAgPEV4YW1wbGU+XHJcbiAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5CdXR0b25zIHdpdGggaWNvbnM8L3NwYW4+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInVuZWxldmF0ZWRcIj5cclxuICAgICAgICAgIDxMYWJlbD5VbmVsZXZhdGVkPC9MYWJlbD5cclxuICAgICAgICAgIDxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5mYXZvcml0ZTwvSWNvbj5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInVuZWxldmF0ZWRcIj5cclxuICAgICAgICAgIDxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5mYXZvcml0ZTwvSWNvbj5cclxuICAgICAgICAgIDxMYWJlbD5VbmVsZXZhdGVkPC9MYWJlbD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInJhaXNlZFwiPlxyXG4gICAgICAgICAgPExhYmVsPlJhaXNlZDwvTGFiZWw+XHJcbiAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGU8L0ljb24+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJyYWlzZWRcIj5cclxuICAgICAgICAgIDxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5mYXZvcml0ZTwvSWNvbj5cclxuICAgICAgICAgIDxMYWJlbD5SYWlzZWQ8L0xhYmVsPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgIDxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5mYXZvcml0ZTwvSWNvbj5cclxuICAgICAgICAgIDxMYWJlbD5PdXRsaW5lZDwvTGFiZWw+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgPExhYmVsPk91dGxpbmVkPC9MYWJlbD5cclxuICAgICAgICAgIDxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5mYXZvcml0ZTwvSWNvbj5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30+XHJcbiAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGU8L0ljb24+XHJcbiAgICAgICAgICA8TGFiZWw+TGVhZGluZyBJY29uPC9MYWJlbD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30+XHJcbiAgICAgICAgICA8TGFiZWw+VHJhaWxpbmcgSWNvbjwvTGFiZWw+XHJcbiAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGU8L0ljb24+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30+XHJcbiAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGU8L0ljb24+XHJcbiAgICAgICAgICA8TGFiZWw+TGVhZGluZyBJY29uPC9MYWJlbD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfT5cclxuICAgICAgICAgIDxMYWJlbD5UcmFpbGluZyBJY29uPC9MYWJlbD5cclxuICAgICAgICAgIDxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5mYXZvcml0ZTwvSWNvbj5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0V4YW1wbGU+XHJcbiAgICA8RXhhbXBsZT5cclxuICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiPlZhcmlhdGlvbnM8L3NwYW4+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gcmlwcGxlPXtmYWxzZX0+XHJcbiAgICAgICAgICA8TGFiZWw+Tm8gUmlwcGxlPC9MYWJlbD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSByaXBwbGU9e2ZhbHNlfT5cclxuICAgICAgICAgIDxMYWJlbD5ObyBSaXBwbGU8L0xhYmVsPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSBkZW5zZT5cclxuICAgICAgICAgIDxMYWJlbD5EZW5zZTwvTGFiZWw+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gZGVuc2U+XHJcbiAgICAgICAgICA8TGFiZWw+RGVuc2U8L0xhYmVsPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSBjbGFzcz1cIm15Q2xhc3NcIj5cclxuICAgICAgICAgIDxMYWJlbD5XaXRoIGEgQ2xhc3M8L0xhYmVsPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IGNsYXNzPVwibXlDbGFzc1wiPlxyXG4gICAgICAgICAgPExhYmVsPldpdGggYSBDbGFzczwvTGFiZWw+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9FeGFtcGxlPlxyXG4gICAgPEV4YW1wbGU+XHJcbiAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5CdXR0b24gZ3JvdXBzPC9zcGFuPlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8R3JvdXAgdmFyaWFudD1cInVuZWxldmF0ZWRcIj5cclxuICAgICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInVuZWxldmF0ZWRcIj5cclxuICAgICAgICAgICAgPExhYmVsPk9uZTwvTGFiZWw+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInVuZWxldmF0ZWRcIj5cclxuICAgICAgICAgICAgPExhYmVsPlR3bzwvTGFiZWw+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInVuZWxldmF0ZWRcIj5cclxuICAgICAgICAgICAgPExhYmVsPlRocmVlPC9MYWJlbD5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvR3JvdXA+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8R3JvdXAgdmFyaWFudD1cInJhaXNlZFwiPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwicmFpc2VkXCI+XHJcbiAgICAgICAgICAgIDxMYWJlbD5PbmU8L0xhYmVsPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJyYWlzZWRcIj5cclxuICAgICAgICAgICAgPExhYmVsPlR3bzwvTGFiZWw+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInJhaXNlZFwiPlxyXG4gICAgICAgICAgICA8TGFiZWw+VGhyZWU8L0xhYmVsPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Hcm91cD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxHcm91cCB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcbiAgICAgICAgICAgIDxMYWJlbD5PbmU8L0xhYmVsPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgICA8TGFiZWw+VHdvPC9MYWJlbD5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgICAgPExhYmVsPlRocmVlPC9MYWJlbD5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvR3JvdXA+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8R3JvdXA+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PlxyXG4gICAgICAgICAgICA8TGFiZWw+T25lPC9MYWJlbD5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfT5cclxuICAgICAgICAgICAgPExhYmVsPlR3bzwvTGFiZWw+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30+XHJcbiAgICAgICAgICAgIDxMYWJlbD5UaHJlZTwvTGFiZWw+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0dyb3VwPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRXhhbXBsZT5cclxuICAgIDxFeGFtcGxlPlxyXG4gICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCI+QmxvY2sgYnV0dG9uPC9zcGFuPlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJ2ZXJ0aWNhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwidW5lbGV2YXRlZFwiIGNsYXNzPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICA8TGFiZWw+QkxPQ0sgQlVUVE9OPC9MYWJlbD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cInZlcnRpY2FsXCIgY2xhc3M9XCJtci04IG1iLTggdy1mdWxsXCI+XHJcbiAgICAgICAgPEdyb3VwIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHN0eWxlPVwiZGlzcGxheTogZmxleDtcIj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK31cclxuICAgICAgICAgICAgdmFyaWFudD1cInVuZWxldmF0ZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBzdHlsZT1cImZsZXgtZ3JvdzogMztcIj5cclxuICAgICAgICAgICAgPExhYmVsPlByaW1hcnk8L0xhYmVsPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJ1bmVsZXZhdGVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICBzdHlsZT1cImZsZXgtZ3JvdzogMTtcIj5cclxuICAgICAgICAgICAgPExhYmVsPlNlY29uZGFyeTwvTGFiZWw+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK31cclxuICAgICAgICAgICAgdmFyaWFudD1cInVuZWxldmF0ZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgIHN0eWxlPVwiZmxleC1ncm93OiAxO1wiPlxyXG4gICAgICAgICAgICA8TGFiZWw+U2Vjb25kYXJ5PC9MYWJlbD5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvR3JvdXA+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9FeGFtcGxlPlxyXG4gICAgPEV4YW1wbGU+XHJcbiAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5TcGxpdCBidXR0b25zIHVzaW5nIGEgYnV0dG9uIGdyb3VwPC9zcGFuPlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8R3JvdXAgdmFyaWFudD1cInJhaXNlZFwiPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwicmFpc2VkXCI+XHJcbiAgICAgICAgICAgIDxMYWJlbD5EbyB0aGUgdGhpbmc8L0xhYmVsPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8ZGl2IHVzZTpHcm91cEl0ZW0+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBvbjpjbGljaz17KCkgPT4gbWVudS5zZXRPcGVuKHRydWUpfVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJyYWlzZWRcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPVwicGFkZGluZzogMDsgbWluLXdpZHRoOiAzNnB4O1wiPlxyXG4gICAgICAgICAgICAgIDxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBzdHlsZT1cIm1hcmdpbjogMDtcIj5cclxuICAgICAgICAgICAgICAgIGFycm93X2Ryb3BfZG93blxyXG4gICAgICAgICAgICAgIDwvSWNvbj5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxNZW51IGJpbmQ6dGhpcz17bWVudX0gYW5jaG9yQ29ybmVyPVwiVE9QX0xFRlRcIj5cclxuICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgIDxJdGVtIG9uOlNNVUk6YWN0aW9uPXsoKSA9PiBjbGlja2VkKyt9PlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dD5UaGluZyAxPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgICAgICAgPEl0ZW0gb246U01VSTphY3Rpb249eygpID0+IGNsaWNrZWQrK30+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0PlRoaW5nIDI8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICAgICAgICA8U2VwYXJhdG9yIC8+XHJcbiAgICAgICAgICAgICAgICA8SXRlbSBvbjpTTVVJOmFjdGlvbj17KCkgPT4gY2xpY2tlZCsrfT5cclxuICAgICAgICAgICAgICAgICAgPFRleHQ+VGhpbmcgMzwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvR3JvdXA+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8R3JvdXAgdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgICA8TGFiZWw+RG8gdGhlIHRoaW5nPC9MYWJlbD5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiB1c2U6R3JvdXBJdGVtPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgb246Y2xpY2s9eygpID0+IG1lbnUyLnNldE9wZW4odHJ1ZSl9XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICBzdHlsZT1cInBhZGRpbmc6IDA7IG1pbi13aWR0aDogMzZweDtcIj5cclxuICAgICAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgc3R5bGU9XCJtYXJnaW46IDA7XCI+XHJcbiAgICAgICAgICAgICAgICBhcnJvd19kcm9wX2Rvd25cclxuICAgICAgICAgICAgICA8L0ljb24+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8TWVudSBiaW5kOnRoaXM9e21lbnUyfSBhbmNob3JDb3JuZXI9XCJUT1BfTEVGVFwiPlxyXG4gICAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAgPEl0ZW0gb246U01VSTphY3Rpb249eygpID0+IGNsaWNrZWQrK30+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0PlRoaW5nIDE8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICAgICAgICA8SXRlbSBvbjpTTVVJOmFjdGlvbj17KCkgPT4gY2xpY2tlZCsrfT5cclxuICAgICAgICAgICAgICAgICAgPFRleHQ+VGhpbmcgMjwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgICAgICAgIDxTZXBhcmF0b3IgLz5cclxuICAgICAgICAgICAgICAgIDxJdGVtIG9uOlNNVUk6YWN0aW9uPXsoKSA9PiBjbGlja2VkKyt9PlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dD5UaGluZyAzPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Hcm91cD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0V4YW1wbGU+XHJcbiAgPC9kaXY+XHJcbjwvUGFnZT5cclxuIl0sIm5hbWVzIjpbImdldENvbnRleHQiLCJzZXRDb250ZXh0IiwiZXhjbHVkZSIsImNzc0NsYXNzZXMiLCJzdHJpbmdzIiwibnVtYmVycyIsInRzbGliXzEuX19leHRlbmRzIiwidHNsaWJfMS5fX2Fzc2lnbiIsIk1EQ0ZvdW5kYXRpb24iLCJjbG9zZXN0IiwibWF0Y2hlcyIsIk1EQ0NvbXBvbmVudCIsInRzbGliXzEuX192YWx1ZXMiLCJ1dGlsLmdldFRyYW5zZm9ybVByb3BlcnR5TmFtZSIsImxpc3RDc3NDbGFzc2VzIiwib25Nb3VudCIsIm9uRGVzdHJveSIsImZvcndhcmRFdmVudHNCdWlsZGVyIiwiY3VycmVudF9jb21wb25lbnQiLCJjcmVhdGVFdmVudERpc3BhdGNoZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7T0FVYSxHQUFHO2NBQ1YsU0FBUyxHQUFHLEVBQUU7T0FFUCxNQUFNLEdBQUcsSUFBSTtPQUNiLEtBQUssR0FBRyxTQUFTO09BQ2pCLE9BQU8sR0FBRyxNQUFNO09BQ2hCLEtBQUssR0FBRyxLQUFLO09BQ2IsSUFBSSxHQUFHLElBQUk7T0FDWCxNQUFNLEdBQUcsT0FBTztnQkFDdkIsYUFBYSxHQUFHLEtBQUs7S0FHckIsT0FBTyxHQUFHQSxnQkFBVSxDQUFDLHFCQUFxQjtDQVM5Q0MsZ0JBQVUsQ0FBQyxvQkFBb0IsRUFBRSxRQUFRO0NBQ3pDQSxnQkFBVSxDQUFDLG1CQUFtQixFQUFFLFFBQVE7Ozs7Ozs7Ozs7S0FSckMsY0FBYyxHQUFJLE9BQU8sS0FBSyxlQUFlLElBQUssUUFBUSxFQUFFLFNBQVM7O0tBRXJFLEtBQUssR0FBR0Msb0JBQU8sQ0FBQyxPQUFPO0VBQUcsS0FBSztFQUFFLE9BQU87RUFBRSxRQUFRO0VBQUUsT0FBTztFQUFFLFNBQVM7RUFBRSxPQUFP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

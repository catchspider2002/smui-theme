import { J as getContext, S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, y as setContext, x as assign, K as exclude_internal_props, v as empty, p as insert_dev, F as group_outros, b as transition_out, G as check_outros, t as transition_in, m as detach_dev, c as create_slot, f as element, j as claim_element, k as children, L as set_attributes, o as add_location, g as get_slot_context, a as get_slot_changes, C as get_spread_update, M as is_function, N as current_component, O as onMount, P as onDestroy, Q as listen_dev, R as run_all, T as binding_callbacks, U as bind, z as create_component, A as claim_component, B as mount_component, D as get_spread_object, V as add_flush_callback, E as destroy_component, W as createEventDispatcher, n as noop, h as text, l as claim_text, X as attr_dev, q as append_dev, u as space, w as claim_space } from './index.87d576c5.js';
import { s as styleInject, M as MDCRipple, e as exclude, f as forwardEventsBuilder, u as useActions, _ as __extends, a as __assign, b as MDCFoundation, c as closest, m as matches, d as MDCComponent, g as __values } from './prefixFilter.c923f47e.js';
import Page from './Page.2977f182.js';
import Example from './Example.a498943d.js';

var css = ".mdc-typography--headline6{font-size:1.25rem;line-height:2rem;letter-spacing:.0125em}.mdc-typography--headline6,.mdc-typography--subtitle2{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-weight:500;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle2{font-size:.875rem;line-height:1.375rem;letter-spacing:.0071428571em}.mdc-typography--body2{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit}:root{--primary-100:#ebf8ff;--primary-200:#bee3f8;--primary-300:#90cdf4;--primary-400:#63b3ed;--primary-500:#4299e1;--primary-600:#3182ce;--primary-700:#2b6cb0;--primary-800:#2c5282;--primary-900:#2a4365;--secondary-100:#fff5f5;--secondary-200:#fed7d7;--secondary-300:#feb2b2;--secondary-400:#fc8181;--secondary-500:#f56565;--secondary-600:#e53e3e;--secondary-700:#c53030;--secondary-800:#9b2c2c;--secondary-900:#742a2a;--primary-color:var(--primary-700);--secondary-color:var(--secondary-700);--primary-font-color:#fff;--secondary-font-color:#fff;--disabled-button-bg-color:#e0e0e0;--font-color:#212121;--other-font-color:#000;--bg-color:#fff;--bg-layer-color:#f5f5f5;--bg-card-color:#fff;--enabled-color:#757575;--disabled-color:#bdbdbd;--switch-toggle-color:#fafafa;--switch-track-color:#4d4d4d;--font-family:\"Montserrat\",sans-serif;--filter:invert(0%);--alert-default-bg-color:var(--primary-200);--alert-solid-bg-color:var(--primary-700);--alert-solid-text-color:\"text-white\";--alert-outline-bg-color:var(--primary-100);--alert-outline-border-color:var(--primary-400);--alert-outline-border-color2:var(--primary-600);--alert-outline-text-color:var(--primary-800)}[data-theme=dark]{--primary-color:var(--primary-400);--secondary-color:var(--secondary-400);--primary-font-color:#000;--secondary-font-color:#000;--disabled-button-bg-color:#1f1f1f;--font-color:#dedede;--other-font-color:#fff;--bg-color:#121212;--bg-layer-color:#333;--bg-card-color:#424242;--enabled-color:#b3b3b3;--disabled-color:#4d4d4d;--switch-toggle-color:#b3b3b3;--switch-track-color:#fff;--filter:invert(100%)}body{--mdc-theme-primary:var(--primary-color);--mdc-theme-secondary:var(--secondary-color);--mdc-theme-on-primary:var(--primary-font-color);--mdc-theme-on-secondary:var(--secondary-font-color);--mdc-text-field-ink-color:var(--other-font-color);--mdc-theme-text-primary-on-background:var(--font-color);--mdc-theme-surface:transparent;--duration:0.5s;--timing:ease;background-color:var(--bg-color);color:var(--font-color);-webkit-transition:color var(--duration) var(--timing),background-color var(--duration) var(--timing);transition:color var(--duration) var(--timing),background-color var(--duration) var(--timing);font-family:var(--font-family)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:var(--disabled-button-bg-color)}.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--disabled-color)}.mdc-select:not(.mdc-select--disabled) .mdc-select__native-control,.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text,.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--other-font-color)}.mdc-select:not(.mdc-select--disabled) .mdc-select__native-control option{color:#000}.mdc-select--with-leading-icon:not(.mdc-select--disabled) .mdc-select__icon{color:var(--enabled-color);opacity:1}.mdc-select__dropdown-icon{-webkit-filter:var(--filter);filter:var(--filter)}.mdc-select--invalid .mdc-select__dropdown-icon{-webkit-filter:invert(0);filter:invert(0)}.mdc-switch--disabled{opacity:.5}.mdc-card__action--icon:not(:disabled){color:var(--enabled-color)}.flex-1-0-auto{-webkit-box-flex:1;flex:1 0 auto}.mdc-button{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.0892857143em;text-decoration:none;text-transform:uppercase;padding:0 8px;display:-webkit-inline-box;display:inline-flex;position:relative;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;box-sizing:border-box;min-width:64px;height:36px;border:none;outline:none;line-height:inherit;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none;overflow:hidden;vertical-align:middle;border-radius:4px}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{background-color:transparent;color:var(--disabled-color);cursor:default;pointer-events:none}.mdc-button.mdc-button--dense{border-radius:4px}.mdc-button:not(:disabled){background-color:transparent}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}.mdc-button .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button .mdc-button__icon{margin-left:8px;margin-right:0}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary,#6200ee)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}.mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button__label+.mdc-button__icon{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--outlined .mdc-button__icon,.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon{margin-left:-4px;margin-right:8px}.mdc-button--outlined .mdc-button__icon[dir=rtl],.mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--outlined .mdc-button__icon,[dir=rtl] .mdc-button--raised .mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__icon{margin-left:8px;margin-right:-4px}.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0,0,0,.12);color:var(--disabled-color)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee}@supports not (-ms-ime-align:auto){.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-primary,#6200ee)}}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary,#fff)}.mdc-button--raised{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);-webkit-transition:box-shadow .28s cubic-bezier(.4,0,.2,1);transition:box-shadow .28s cubic-bezier(.4,0,.2,1)}.mdc-button--raised:focus,.mdc-button--raised:hover{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mdc-button--outlined{border-style:solid;padding:0 15px;border-width:1px}.mdc-button--outlined:disabled{border-color:var(--disabled-color)}.mdc-button--outlined:not(:disabled){border-color:#6200ee;border-color:var(--mdc-theme-primary,#6200ee)}.mdc-button--dense{height:32px;font-size:.8125rem}@-webkit-keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@-webkit-keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@-webkit-keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-button:after,.mdc-button:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-button:before{-webkit-transition:opacity 15ms linear,background-color 15ms linear;transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-button:after,.mdc-button:before{top:-50%;left:-50%;width:200%;height:200%;background-color:#6200ee}@supports not (-ms-ime-align:auto){.mdc-button:after,.mdc-button:before{background-color:var(--mdc-theme-primary,#6200ee)}}.mdc-button:hover:before{opacity:.04}.mdc-button:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.mdc-button:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.mdc-button:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.mdc-button--raised:after,.mdc-button--raised:before,.mdc-button--unelevated:after,.mdc-button--unelevated:before{background-color:#fff}@supports not (-ms-ime-align:auto){.mdc-button--raised:after,.mdc-button--raised:before,.mdc-button--unelevated:after,.mdc-button--unelevated:before{background-color:var(--mdc-theme-on-primary,#fff)}}.mdc-button--raised:hover:before,.mdc-button--unelevated:hover:before{opacity:.08}.mdc-button--raised:not(.mdc-ripple-upgraded):focus:before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}.mdc-button--raised:not(.mdc-ripple-upgraded):after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active:after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}.smui-button--color-secondary:not(:disabled){color:#018786;color:var(--mdc-theme-secondary,#018786)}.smui-button--color-secondary.mdc-button--raised:not(:disabled),.smui-button--color-secondary.mdc-button--unelevated:not(:disabled){background-color:#018786}@supports not (-ms-ime-align:auto){.smui-button--color-secondary.mdc-button--raised:not(:disabled),.smui-button--color-secondary.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-secondary,#018786)}}.smui-button--color-secondary.mdc-button--raised:not(:disabled),.smui-button--color-secondary.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-secondary,#fff)}.smui-button--color-secondary.mdc-button--outlined:not(:disabled){border-color:#018786;border-color:var(--mdc-theme-secondary,#018786)}.smui-button--color-secondary:after,.smui-button--color-secondary:before{background-color:#018786}@supports not (-ms-ime-align:auto){.smui-button--color-secondary:after,.smui-button--color-secondary:before{background-color:var(--mdc-theme-secondary,#018786)}}.smui-button--color-secondary:hover:before{opacity:.04}.smui-button--color-secondary:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.smui-button--color-secondary:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.smui-button--color-secondary:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.smui-button--color-secondary.mdc-button--raised:after,.smui-button--color-secondary.mdc-button--raised:before,.smui-button--color-secondary.mdc-button--unelevated:after,.smui-button--color-secondary.mdc-button--unelevated:before{background-color:#fff}@supports not (-ms-ime-align:auto){.smui-button--color-secondary.mdc-button--raised:after,.smui-button--color-secondary.mdc-button--raised:before,.smui-button--color-secondary.mdc-button--unelevated:after,.smui-button--color-secondary.mdc-button--unelevated:before{background-color:var(--mdc-theme-on-secondary,#fff)}}.smui-button--color-secondary.mdc-button--raised:hover:before,.smui-button--color-secondary.mdc-button--unelevated:hover:before{opacity:.08}.smui-button--color-secondary.mdc-button--raised:not(.mdc-ripple-upgraded):focus:before,.smui-button--color-secondary.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}.smui-button--color-secondary.mdc-button--raised:not(.mdc-ripple-upgraded):after,.smui-button--color-secondary.mdc-button--unelevated:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.smui-button--color-secondary.mdc-button--raised:not(.mdc-ripple-upgraded):active:after,.smui-button--color-secondary.mdc-button--unelevated:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}.smui-button__group{display:-webkit-inline-box;display:inline-flex}.smui-button__group>.mdc-button:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.smui-button__group>.mdc-button:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.smui-button__group.smui-button__group--raised{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.smui-button__group>.mdc-button--raised,.smui-button__group>.mdc-button--raised:active,.smui-button__group>.mdc-button--raised:disabled,.smui-button__group>.mdc-button--raised:focus,.smui-button__group>.mdc-button--raised:hover{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.smui-button__group>.mdc-button--outlined:not(:last-child){border-right-width:0}";
styleInject(css);

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
    __extends(MDCListFoundation, _super);
    function MDCListFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCListFoundation.defaultAdapter, adapter)) || this;
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
        var nearestParent = closest(eventTarget, "." + cssClasses$1.LIST_ITEM_CLASS + ", ." + cssClasses$1.ROOT);
        // Get the index of the element if it is a list item.
        if (nearestParent && matches(nearestParent, "." + cssClasses$1.LIST_ITEM_CLASS)) {
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
        var toggleCheckbox = !matches(target, strings$1.CHECKBOX_RADIO_SELECTOR);
        this.foundation_.handleClick(index, toggleCheckbox);
    };
    return MDCList;
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
    __extends(MDCMenuFoundation, _super);
    function MDCMenuFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCMenuFoundation.defaultAdapter, adapter)) || this;
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
            isSelectableItemAtIndex: function (index) { return !!closest(_this.items[index], "." + cssClasses$2.MENU_SELECTION_GROUP); },
            getSelectedSiblingOfItemAtIndex: function (index) {
                var selectionGroupEl = closest(_this.items[index], "." + cssClasses$2.MENU_SELECTION_GROUP);
                var selectedItemEl = selectionGroupEl.querySelector("." + cssClasses$2.MENU_SELECTED_LIST_ITEM);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uUGFnZS5iMmZlYWM4Yi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL3JpcHBsZS9SaXBwbGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNtdWkvYnV0dG9uL0J1dHRvbi5zdmVsdGUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNtdWkvYnV0dG9uL0dyb3VwLnN2ZWx0ZSIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS9idXR0b24vR3JvdXBJdGVtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9MYWJlbC5zdmVsdGUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL0ljb24uc3ZlbHRlIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9tZW51LXN1cmZhY2UvY29uc3RhbnRzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9saXN0L2NvbnN0YW50cy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbGlzdC9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9saXN0L2NvbXBvbmVudC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbWVudS1zdXJmYWNlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL21lbnUtc3VyZmFjZS91dGlsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9tZW51LXN1cmZhY2UvY29tcG9uZW50LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9tZW51L2NvbnN0YW50cy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbWVudS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9tZW51L2NvbXBvbmVudC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS9tZW51LXN1cmZhY2UvTWVudVN1cmZhY2Uuc3ZlbHRlIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL21lbnUvTWVudS5zdmVsdGUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL0NsYXNzQWRkZXIuc3ZlbHRlIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9jbGFzc0FkZGVyQnVpbGRlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vU3Bhbi5zdmVsdGUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNtdWkvbGlzdC9HcmFwaGljLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL21lbnUvU2VsZWN0aW9uR3JvdXBJY29uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL2xpc3QvTGlzdC5zdmVsdGUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNtdWkvbGlzdC9JdGVtLnN2ZWx0ZSIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS9saXN0L1RleHQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNtdWkvbGlzdC9QcmltYXJ5VGV4dC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS9saXN0L1NlY29uZGFyeVRleHQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNtdWkvbGlzdC9NZXRhLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9EaXYuc3ZlbHRlIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL2xpc3QvR3JvdXAuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL0gzLnN2ZWx0ZSIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS9saXN0L1N1YmhlYWRlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS9saXN0L1NlcGFyYXRvci5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL0J1dHRvblBhZ2Uuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TURDUmlwcGxlfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlJztcbmltcG9ydCB7Z2V0Q29udGV4dH0gZnJvbSAnc3ZlbHRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmlwcGxlKG5vZGUsIFtyaXBwbGUsIHByb3BzID0ge3VuYm91bmRlZDogZmFsc2UsIGNvbG9yOiBudWxsfV0pIHtcbiAgbGV0IGluc3RhbmNlID0gbnVsbDtcbiAgbGV0IGFkZExheW91dExpc3RlbmVyID0gZ2V0Q29udGV4dCgnU01VSTphZGRMYXlvdXRMaXN0ZW5lcicpO1xuICBsZXQgcmVtb3ZlTGF5b3V0TGlzdGVuZXI7XG5cbiAgZnVuY3Rpb24gaGFuZGxlUHJvcHMocmlwcGxlLCBwcm9wcykge1xuICAgIGlmIChyaXBwbGUgJiYgIWluc3RhbmNlKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBNRENSaXBwbGUobm9kZSk7XG4gICAgfSBlbHNlIGlmIChpbnN0YW5jZSAmJiAhcmlwcGxlKSB7XG4gICAgICBpbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICBpbnN0YW5jZSA9IG51bGw7XG4gICAgfVxuICAgIGlmIChyaXBwbGUpIHtcbiAgICAgIGluc3RhbmNlLnVuYm91bmRlZCA9ICEhcHJvcHMudW5ib3VuZGVkO1xuICAgICAgc3dpdGNoIChwcm9wcy5jb2xvcikge1xuICAgICAgICBjYXNlICdzdXJmYWNlJzpcbiAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ21kYy1yaXBwbGUtc3VyZmFjZScpO1xuICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnbWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5Jyk7XG4gICAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdtZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudCcpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY2FzZSAncHJpbWFyeSc6XG4gICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdtZGMtcmlwcGxlLXN1cmZhY2UnKTtcbiAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ21kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeScpO1xuICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnbWRjLXJpcHBsZS1zdXJmYWNlLS1hY2NlbnQnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNhc2UgJ3NlY29uZGFyeSc6XG4gICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdtZGMtcmlwcGxlLXN1cmZhY2UnKTtcbiAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ21kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeScpO1xuICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnbWRjLXJpcHBsZS1zdXJmYWNlLS1hY2NlbnQnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnbWRjLXJpcHBsZS1zdXJmYWNlJyk7XG4gICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdtZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnknKTtcbiAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ21kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50Jyk7XG4gIH1cblxuICBpZiAocmlwcGxlKSB7XG4gICAgaGFuZGxlUHJvcHMocmlwcGxlLCBwcm9wcyk7XG4gIH1cblxuICBpZiAoYWRkTGF5b3V0TGlzdGVuZXIpIHtcbiAgICByZW1vdmVMYXlvdXRMaXN0ZW5lciA9IGFkZExheW91dExpc3RlbmVyKGxheW91dCk7XG4gIH1cblxuICBmdW5jdGlvbiBsYXlvdXQoKSB7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICBpbnN0YW5jZS5sYXlvdXQoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVwZGF0ZShbcmlwcGxlLCBwcm9wcyA9IHt1bmJvdW5kZWQ6IGZhbHNlLCBjb2xvcjogbnVsbH1dKSB7XG4gICAgICBoYW5kbGVQcm9wcyhyaXBwbGUsIHByb3BzKTtcbiAgICB9LFxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICBpbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICAgIGluc3RhbmNlID0gbnVsbDtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdtZGMtcmlwcGxlLXN1cmZhY2UnKTtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdtZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnknKTtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdtZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVtb3ZlTGF5b3V0TGlzdGVuZXIpIHtcbiAgICAgICAgcmVtb3ZlTGF5b3V0TGlzdGVuZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCJ7I2lmIGhyZWZ9XG4gIDxhXG4gICAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgICB1c2U6Zm9yd2FyZEV2ZW50c1xuICAgIGNsYXNzPVwiXG4gICAgICBtZGMtYnV0dG9uXG4gICAgICB7Y2xhc3NOYW1lfVxuICAgICAge3ZhcmlhbnQgPT09ICdyYWlzZWQnID8gJ21kYy1idXR0b24tLXJhaXNlZCcgOiAnJ31cbiAgICAgIHt2YXJpYW50ID09PSAndW5lbGV2YXRlZCcgPyAnbWRjLWJ1dHRvbi0tdW5lbGV2YXRlZCcgOiAnJ31cbiAgICAgIHt2YXJpYW50ID09PSAnb3V0bGluZWQnID8gJ21kYy1idXR0b24tLW91dGxpbmVkJyA6ICcnfVxuICAgICAge2RlbnNlID8gJ21kYy1idXR0b24tLWRlbnNlJyA6ICcnfVxuICAgICAge2NvbG9yID09PSAnc2Vjb25kYXJ5JyA/ICdzbXVpLWJ1dHRvbi0tY29sb3Itc2Vjb25kYXJ5JyA6ICcnfVxuICAgICAge2NvbnRleHQgPT09ICdjYXJkOmFjdGlvbicgPyAnbWRjLWNhcmRfX2FjdGlvbicgOiAnJ31cbiAgICAgIHtjb250ZXh0ID09PSAnY2FyZDphY3Rpb24nID8gJ21kYy1jYXJkX19hY3Rpb24tLWJ1dHRvbicgOiAnJ31cbiAgICAgIHtjb250ZXh0ID09PSAnZGlhbG9nOmFjdGlvbicgPyAnbWRjLWRpYWxvZ19fYnV0dG9uJyA6ICcnfVxuICAgICAge2NvbnRleHQgPT09ICd0b3AtYXBwLWJhcjpuYXZpZ2F0aW9uJyA/ICdtZGMtdG9wLWFwcC1iYXJfX25hdmlnYXRpb24taWNvbicgOiAnJ31cbiAgICAgIHtjb250ZXh0ID09PSAndG9wLWFwcC1iYXI6YWN0aW9uJyA/ICdtZGMtdG9wLWFwcC1iYXJfX2FjdGlvbi1pdGVtJyA6ICcnfVxuICAgICAge2NvbnRleHQgPT09ICdzbmFja2JhcicgPyAnbWRjLXNuYWNrYmFyX19hY3Rpb24nIDogJyd9XG4gICAgXCJcbiAgICB1c2U6UmlwcGxlPXtbcmlwcGxlLCB7dW5ib3VuZGVkOiBmYWxzZX1dfVxuICAgIHtocmVmfVxuICAgIHsuLi5hY3Rpb25Qcm9wfVxuICAgIHsuLi5kZWZhdWx0UHJvcH1cbiAgICB7Li4ucHJvcHN9XG4gID48c2xvdD48L3Nsb3Q+PC9hPlxuezplbHNlfVxuICA8YnV0dG9uXG4gICAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgICB1c2U6Zm9yd2FyZEV2ZW50c1xuICAgIGNsYXNzPVwiXG4gICAgICBtZGMtYnV0dG9uXG4gICAgICB7Y2xhc3NOYW1lfVxuICAgICAge3ZhcmlhbnQgPT09ICdyYWlzZWQnID8gJ21kYy1idXR0b24tLXJhaXNlZCcgOiAnJ31cbiAgICAgIHt2YXJpYW50ID09PSAndW5lbGV2YXRlZCcgPyAnbWRjLWJ1dHRvbi0tdW5lbGV2YXRlZCcgOiAnJ31cbiAgICAgIHt2YXJpYW50ID09PSAnb3V0bGluZWQnID8gJ21kYy1idXR0b24tLW91dGxpbmVkJyA6ICcnfVxuICAgICAge2RlbnNlID8gJ21kYy1idXR0b24tLWRlbnNlJyA6ICcnfVxuICAgICAge2NvbG9yID09PSAnc2Vjb25kYXJ5JyA/ICdzbXVpLWJ1dHRvbi0tY29sb3Itc2Vjb25kYXJ5JyA6ICcnfVxuICAgICAge2NvbnRleHQgPT09ICdjYXJkOmFjdGlvbicgPyAnbWRjLWNhcmRfX2FjdGlvbicgOiAnJ31cbiAgICAgIHtjb250ZXh0ID09PSAnY2FyZDphY3Rpb24nID8gJ21kYy1jYXJkX19hY3Rpb24tLWJ1dHRvbicgOiAnJ31cbiAgICAgIHtjb250ZXh0ID09PSAnZGlhbG9nOmFjdGlvbicgPyAnbWRjLWRpYWxvZ19fYnV0dG9uJyA6ICcnfVxuICAgICAge2NvbnRleHQgPT09ICd0b3AtYXBwLWJhcjpuYXZpZ2F0aW9uJyA/ICdtZGMtdG9wLWFwcC1iYXJfX25hdmlnYXRpb24taWNvbicgOiAnJ31cbiAgICAgIHtjb250ZXh0ID09PSAndG9wLWFwcC1iYXI6YWN0aW9uJyA/ICdtZGMtdG9wLWFwcC1iYXJfX2FjdGlvbi1pdGVtJyA6ICcnfVxuICAgICAge2NvbnRleHQgPT09ICdzbmFja2JhcicgPyAnbWRjLXNuYWNrYmFyX19hY3Rpb24nIDogJyd9XG4gICAgXCJcbiAgICB1c2U6UmlwcGxlPXtbcmlwcGxlLCB7dW5ib3VuZGVkOiBmYWxzZX1dfVxuICAgIHsuLi5hY3Rpb25Qcm9wfVxuICAgIHsuLi5kZWZhdWx0UHJvcH1cbiAgICB7Li4ucHJvcHN9XG4gID48c2xvdD48L3Nsb3Q+PC9idXR0b24+XG57L2lmfVxuXG48c2NyaXB0PlxuICBpbXBvcnQge3NldENvbnRleHQsIGdldENvbnRleHR9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7Y3VycmVudF9jb21wb25lbnR9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7Zm9yd2FyZEV2ZW50c0J1aWxkZXJ9IGZyb20gJ0BzbXVpL2NvbW1vbi9mb3J3YXJkRXZlbnRzLmpzJztcbiAgaW1wb3J0IHtleGNsdWRlfSBmcm9tICdAc211aS9jb21tb24vZXhjbHVkZS5qcyc7XG4gIGltcG9ydCB7dXNlQWN0aW9uc30gZnJvbSAnQHNtdWkvY29tbW9uL3VzZUFjdGlvbnMuanMnO1xuICBpbXBvcnQgUmlwcGxlIGZyb20gJ0BzbXVpL3JpcHBsZS9iYXJlLmpzJztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoY3VycmVudF9jb21wb25lbnQpO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG4gIGxldCBjbGFzc05hbWUgPSAnJztcbiAgZXhwb3J0IHtjbGFzc05hbWUgYXMgY2xhc3N9O1xuICBleHBvcnQgbGV0IHJpcHBsZSA9IHRydWU7XG4gIGV4cG9ydCBsZXQgY29sb3IgPSAncHJpbWFyeSc7XG4gIGV4cG9ydCBsZXQgdmFyaWFudCA9ICd0ZXh0JztcbiAgZXhwb3J0IGxldCBkZW5zZSA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGhyZWYgPSBudWxsO1xuICBleHBvcnQgbGV0IGFjdGlvbiA9ICdjbG9zZSc7XG4gIGxldCBkZWZhdWx0QWN0aW9uID0gZmFsc2U7XG4gIGV4cG9ydCB7ZGVmYXVsdEFjdGlvbiBhcyBkZWZhdWx0fTtcblxuICBsZXQgY29udGV4dCA9IGdldENvbnRleHQoJ1NNVUk6YnV0dG9uOmNvbnRleHQnKTtcblxuICAkOiBkaWFsb2dFeGNsdWRlcyA9IChjb250ZXh0ID09PSAnZGlhbG9nOmFjdGlvbicpID8gWydhY3Rpb24nLCAnZGVmYXVsdCddIDogW107XG5cbiAgJDogcHJvcHMgPSBleGNsdWRlKCQkcHJvcHMsIFsndXNlJywgJ2NsYXNzJywgJ3JpcHBsZScsICdjb2xvcicsICd2YXJpYW50JywgJ2RlbnNlJywgJ2hyZWYnLCAuLi5kaWFsb2dFeGNsdWRlc10pO1xuXG4gICQ6IGFjdGlvblByb3AgPSAoY29udGV4dCA9PT0gJ2RpYWxvZzphY3Rpb24nICYmIGFjdGlvbiAhPT0gbnVsbCkgPyB7J2RhdGEtbWRjLWRpYWxvZy1hY3Rpb24nOiBhY3Rpb259IDoge307XG4gICQ6IGRlZmF1bHRQcm9wID0gKGNvbnRleHQgPT09ICdkaWFsb2c6YWN0aW9uJyAmJiBkZWZhdWx0QWN0aW9uKSA/IHsnZGF0YS1tZGMtZGlhbG9nLWJ1dHRvbi1kZWZhdWx0JzogJyd9IDoge307XG5cbiAgc2V0Q29udGV4dCgnU01VSTpsYWJlbDpjb250ZXh0JywgJ2J1dHRvbicpO1xuICBzZXRDb250ZXh0KCdTTVVJOmljb246Y29udGV4dCcsICdidXR0b24nKTtcbjwvc2NyaXB0PiIsIjxkaXZcbiAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgdXNlOmZvcndhcmRFdmVudHNcbiAgY2xhc3M9XCJcbiAgICBzbXVpLWJ1dHRvbl9fZ3JvdXBcbiAgICB7Y2xhc3NOYW1lfVxuICAgIHt2YXJpYW50ID09PSAncmFpc2VkJyA/ICdzbXVpLWJ1dHRvbl9fZ3JvdXAtLXJhaXNlZCcgOiAnJ31cbiAgXCJcbiAgey4uLmV4Y2x1ZGUoJCRwcm9wcywgWyd1c2UnLCAnY2xhc3MnLCAndmFyaWFudCddKX1cbj48c2xvdD48L3Nsb3Q+PC9kaXY+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7c2V0Q29udGV4dCwgZ2V0Q29udGV4dH0gZnJvbSAnc3ZlbHRlJztcbiAgaW1wb3J0IHtjdXJyZW50X2NvbXBvbmVudH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHtmb3J3YXJkRXZlbnRzQnVpbGRlcn0gZnJvbSAnQHNtdWkvY29tbW9uL2ZvcndhcmRFdmVudHMuanMnO1xuICBpbXBvcnQge2V4Y2x1ZGV9IGZyb20gJ0BzbXVpL2NvbW1vbi9leGNsdWRlLmpzJztcbiAgaW1wb3J0IHt1c2VBY3Rpb25zfSBmcm9tICdAc211aS9jb21tb24vdXNlQWN0aW9ucy5qcyc7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGN1cnJlbnRfY29tcG9uZW50KTtcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gIGV4cG9ydCB7Y2xhc3NOYW1lIGFzIGNsYXNzfTtcbiAgZXhwb3J0IGxldCB2YXJpYW50ID0gJ3RleHQnO1xuPC9zY3JpcHQ+IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3JvdXBJdGVtKG5vZGUpIHtcbiAgbm9kZS5jbGFzc0xpc3QuYWRkKCdzbXVpLWJ1dHRvbl9fZ3JvdXAtaXRlbScpO1xuXG4gIHJldHVybiB7XG4gICAgZGVzdHJveSgpIHtcbiAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnc211aS1idXR0b25fX2dyb3VwLWl0ZW0nKTtcbiAgICB9XG4gIH1cbn0iLCI8c3BhblxuICB1c2U6dXNlQWN0aW9ucz17dXNlfVxuICB1c2U6Zm9yd2FyZEV2ZW50c1xuICBjbGFzcz1cIlxuICAgIHtjbGFzc05hbWV9XG4gICAge2NvbnRleHQgPT09ICdidXR0b24nID8gJ21kYy1idXR0b25fX2xhYmVsJyA6ICcnfVxuICAgIHtjb250ZXh0ID09PSAnZmFiJyA/ICdtZGMtZmFiX19sYWJlbCcgOiAnJ31cbiAgICB7Y29udGV4dCA9PT0gJ2NoaXAnID8gJ21kYy1jaGlwX190ZXh0JyA6ICcnfVxuICAgIHtjb250ZXh0ID09PSAndGFiJyA/ICdtZGMtdGFiX190ZXh0LWxhYmVsJyA6ICcnfVxuICAgIHtjb250ZXh0ID09PSAnaW1hZ2UtbGlzdCcgPyAnbWRjLWltYWdlLWxpc3RfX2xhYmVsJyA6ICcnfVxuICAgIHtjb250ZXh0ID09PSAnc25hY2tiYXInID8gJ21kYy1zbmFja2Jhcl9fbGFiZWwnIDogJyd9XG4gIFwiXG4gIHsuLi4oKGNvbnRleHQgPT09ICdzbmFja2JhcicpID8ge3JvbGU6ICdzdGF0dXMnLCAnYXJpYS1saXZlJzogJ3BvbGl0ZSd9IDoge30pfVxuICB7Li4uZXhjbHVkZSgkJHByb3BzLCBbJ3VzZScsICdjbGFzcyddKX1cbj48c2xvdD48L3Nsb3Q+PC9zcGFuPlxuXG48c2NyaXB0PlxuICBpbXBvcnQge2dldENvbnRleHR9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7Y3VycmVudF9jb21wb25lbnR9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7Zm9yd2FyZEV2ZW50c0J1aWxkZXJ9IGZyb20gJy4vZm9yd2FyZEV2ZW50cy5qcyc7XG4gIGltcG9ydCB7ZXhjbHVkZX0gZnJvbSAnLi9leGNsdWRlLmpzJztcbiAgaW1wb3J0IHt1c2VBY3Rpb25zfSBmcm9tICcuL3VzZUFjdGlvbnMuanMnO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihjdXJyZW50X2NvbXBvbmVudCk7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBleHBvcnQge2NsYXNzTmFtZSBhcyBjbGFzc307XG5cbiAgY29uc3QgY29udGV4dCA9IGdldENvbnRleHQoJ1NNVUk6bGFiZWw6Y29udGV4dCcpO1xuPC9zY3JpcHQ+IiwiPGlcbiAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgdXNlOmZvcndhcmRFdmVudHNcbiAgY2xhc3M9XCJcbiAgICB7Y2xhc3NOYW1lfVxuICAgIHtjb250ZXh0ID09PSAnYnV0dG9uJyA/ICdtZGMtYnV0dG9uX19pY29uJyA6ICcnfVxuICAgIHtjb250ZXh0ID09PSAnZmFiJyA/ICdtZGMtZmFiX19pY29uJyA6ICcnfVxuICAgIHtjb250ZXh0ID09PSAnaWNvbi1idXR0b24nID8gJ21kYy1pY29uLWJ1dHRvbl9faWNvbicgOiAnJ31cbiAgICB7KGNvbnRleHQgPT09ICdpY29uLWJ1dHRvbicgJiYgb24pID8gJ21kYy1pY29uLWJ1dHRvbl9faWNvbi0tb24nIDogJyd9XG4gICAge2NvbnRleHQgPT09ICdjaGlwJyA/ICdtZGMtY2hpcF9faWNvbicgOiAnJ31cbiAgICB7KGNvbnRleHQgPT09ICdjaGlwJyAmJiBsZWFkaW5nKSA/ICdtZGMtY2hpcF9faWNvbi0tbGVhZGluZycgOiAnJ31cbiAgICB7KGNvbnRleHQgPT09ICdjaGlwJyAmJiBsZWFkaW5nSGlkZGVuKSA/ICdtZGMtY2hpcF9faWNvbi0tbGVhZGluZy1oaWRkZW4nIDogJyd9XG4gICAgeyhjb250ZXh0ID09PSAnY2hpcCcgJiYgdHJhaWxpbmcpID8gJ21kYy1jaGlwX19pY29uLS10cmFpbGluZycgOiAnJ31cbiAgICB7Y29udGV4dCA9PT0gJ3RhYicgPyAnbWRjLXRhYl9faWNvbicgOiAnJ31cbiAgXCJcbiAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgey4uLmV4Y2x1ZGUoJCRwcm9wcywgWyd1c2UnLCAnY2xhc3MnLCAnb24nLCAnbGVhZGluZycsICdsZWFkaW5nSGlkZGVuJywgJ3RyYWlsaW5nJ10pfVxuPjxzbG90Pjwvc2xvdD48L2k+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7Z2V0Q29udGV4dH0gZnJvbSAnc3ZlbHRlJztcbiAgaW1wb3J0IHtjdXJyZW50X2NvbXBvbmVudH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHtmb3J3YXJkRXZlbnRzQnVpbGRlcn0gZnJvbSAnLi9mb3J3YXJkRXZlbnRzLmpzJztcbiAgaW1wb3J0IHtleGNsdWRlfSBmcm9tICcuL2V4Y2x1ZGUuanMnO1xuICBpbXBvcnQge3VzZUFjdGlvbnN9IGZyb20gJy4vdXNlQWN0aW9ucy5qcyc7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGN1cnJlbnRfY29tcG9uZW50KTtcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gIGV4cG9ydCB7Y2xhc3NOYW1lIGFzIGNsYXNzfTtcbiAgZXhwb3J0IGxldCBvbiA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGxlYWRpbmcgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBsZWFkaW5nSGlkZGVuID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgdHJhaWxpbmcgPSBmYWxzZTtcblxuICBjb25zdCBjb250ZXh0ID0gZ2V0Q29udGV4dCgnU01VSTppY29uOmNvbnRleHQnKTtcbjwvc2NyaXB0PiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgQU5DSE9SOiAnbWRjLW1lbnUtc3VyZmFjZS0tYW5jaG9yJyxcbiAgICBBTklNQVRJTkdfQ0xPU0VEOiAnbWRjLW1lbnUtc3VyZmFjZS0tYW5pbWF0aW5nLWNsb3NlZCcsXG4gICAgQU5JTUFUSU5HX09QRU46ICdtZGMtbWVudS1zdXJmYWNlLS1hbmltYXRpbmctb3BlbicsXG4gICAgRklYRUQ6ICdtZGMtbWVudS1zdXJmYWNlLS1maXhlZCcsXG4gICAgT1BFTjogJ21kYy1tZW51LXN1cmZhY2UtLW9wZW4nLFxuICAgIFJPT1Q6ICdtZGMtbWVudS1zdXJmYWNlJyxcbn07XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbnZhciBzdHJpbmdzID0ge1xuICAgIENMT1NFRF9FVkVOVDogJ01EQ01lbnVTdXJmYWNlOmNsb3NlZCcsXG4gICAgT1BFTkVEX0VWRU5UOiAnTURDTWVudVN1cmZhY2U6b3BlbmVkJyxcbiAgICBGT0NVU0FCTEVfRUxFTUVOVFM6IFtcbiAgICAgICAgJ2J1dHRvbjpub3QoOmRpc2FibGVkKScsICdbaHJlZl06bm90KFthcmlhLWRpc2FibGVkPVwidHJ1ZVwiXSknLCAnaW5wdXQ6bm90KDpkaXNhYmxlZCknLFxuICAgICAgICAnc2VsZWN0Om5vdCg6ZGlzYWJsZWQpJywgJ3RleHRhcmVhOm5vdCg6ZGlzYWJsZWQpJywgJ1t0YWJpbmRleF06bm90KFt0YWJpbmRleD1cIi0xXCJdKTpub3QoW2FyaWEtZGlzYWJsZWQ9XCJ0cnVlXCJdKScsXG4gICAgXS5qb2luKCcsICcpLFxufTtcbi8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG52YXIgbnVtYmVycyA9IHtcbiAgICAvKiogVG90YWwgZHVyYXRpb24gb2YgbWVudS1zdXJmYWNlIG9wZW4gYW5pbWF0aW9uLiAqL1xuICAgIFRSQU5TSVRJT05fT1BFTl9EVVJBVElPTjogMTIwLFxuICAgIC8qKiBUb3RhbCBkdXJhdGlvbiBvZiBtZW51LXN1cmZhY2UgY2xvc2UgYW5pbWF0aW9uLiAqL1xuICAgIFRSQU5TSVRJT05fQ0xPU0VfRFVSQVRJT046IDc1LFxuICAgIC8qKiBNYXJnaW4gbGVmdCB0byB0aGUgZWRnZSBvZiB0aGUgdmlld3BvcnQgd2hlbiBtZW51LXN1cmZhY2UgaXMgYXQgbWF4aW11bSBwb3NzaWJsZSBoZWlnaHQuICovXG4gICAgTUFSR0lOX1RPX0VER0U6IDMyLFxuICAgIC8qKiBSYXRpbyBvZiBhbmNob3Igd2lkdGggdG8gbWVudS1zdXJmYWNlIHdpZHRoIGZvciBzd2l0Y2hpbmcgZnJvbSBjb3JuZXIgcG9zaXRpb25pbmcgdG8gY2VudGVyIHBvc2l0aW9uaW5nLiAqL1xuICAgIEFOQ0hPUl9UT19NRU5VX1NVUkZBQ0VfV0lEVEhfUkFUSU86IDAuNjcsXG59O1xuLyoqXG4gKiBFbnVtIGZvciBiaXRzIGluIHRoZSB7QHNlZSBDb3JuZXIpIGJpdG1hcC5cbiAqL1xudmFyIENvcm5lckJpdDtcbihmdW5jdGlvbiAoQ29ybmVyQml0KSB7XG4gICAgQ29ybmVyQml0W0Nvcm5lckJpdFtcIkJPVFRPTVwiXSA9IDFdID0gXCJCT1RUT01cIjtcbiAgICBDb3JuZXJCaXRbQ29ybmVyQml0W1wiQ0VOVEVSXCJdID0gMl0gPSBcIkNFTlRFUlwiO1xuICAgIENvcm5lckJpdFtDb3JuZXJCaXRbXCJSSUdIVFwiXSA9IDRdID0gXCJSSUdIVFwiO1xuICAgIENvcm5lckJpdFtDb3JuZXJCaXRbXCJGTElQX1JUTFwiXSA9IDhdID0gXCJGTElQX1JUTFwiO1xufSkoQ29ybmVyQml0IHx8IChDb3JuZXJCaXQgPSB7fSkpO1xuLyoqXG4gKiBFbnVtIGZvciByZXByZXNlbnRpbmcgYW4gZWxlbWVudCBjb3JuZXIgZm9yIHBvc2l0aW9uaW5nIHRoZSBtZW51LXN1cmZhY2UuXG4gKlxuICogVGhlIFNUQVJUIGNvbnN0YW50cyBtYXAgdG8gTEVGVCBpZiBlbGVtZW50IGRpcmVjdGlvbmFsaXR5IGlzIGxlZnRcbiAqIHRvIHJpZ2h0IGFuZCBSSUdIVCBpZiB0aGUgZGlyZWN0aW9uYWxpdHkgaXMgcmlnaHQgdG8gbGVmdC5cbiAqIExpa2V3aXNlIEVORCBtYXBzIHRvIFJJR0hUIG9yIExFRlQgZGVwZW5kaW5nIG9uIHRoZSBkaXJlY3Rpb25hbGl0eS5cbiAqL1xudmFyIENvcm5lcjtcbihmdW5jdGlvbiAoQ29ybmVyKSB7XG4gICAgQ29ybmVyW0Nvcm5lcltcIlRPUF9MRUZUXCJdID0gMF0gPSBcIlRPUF9MRUZUXCI7XG4gICAgQ29ybmVyW0Nvcm5lcltcIlRPUF9SSUdIVFwiXSA9IDRdID0gXCJUT1BfUklHSFRcIjtcbiAgICBDb3JuZXJbQ29ybmVyW1wiQk9UVE9NX0xFRlRcIl0gPSAxXSA9IFwiQk9UVE9NX0xFRlRcIjtcbiAgICBDb3JuZXJbQ29ybmVyW1wiQk9UVE9NX1JJR0hUXCJdID0gNV0gPSBcIkJPVFRPTV9SSUdIVFwiO1xuICAgIENvcm5lcltDb3JuZXJbXCJUT1BfU1RBUlRcIl0gPSA4XSA9IFwiVE9QX1NUQVJUXCI7XG4gICAgQ29ybmVyW0Nvcm5lcltcIlRPUF9FTkRcIl0gPSAxMl0gPSBcIlRPUF9FTkRcIjtcbiAgICBDb3JuZXJbQ29ybmVyW1wiQk9UVE9NX1NUQVJUXCJdID0gOV0gPSBcIkJPVFRPTV9TVEFSVFwiO1xuICAgIENvcm5lcltDb3JuZXJbXCJCT1RUT01fRU5EXCJdID0gMTNdID0gXCJCT1RUT01fRU5EXCI7XG59KShDb3JuZXIgfHwgKENvcm5lciA9IHt9KSk7XG5leHBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzLCBDb3JuZXJCaXQsIENvcm5lciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgTElTVF9JVEVNX0FDVElWQVRFRF9DTEFTUzogJ21kYy1saXN0LWl0ZW0tLWFjdGl2YXRlZCcsXG4gICAgTElTVF9JVEVNX0NMQVNTOiAnbWRjLWxpc3QtaXRlbScsXG4gICAgTElTVF9JVEVNX0RJU0FCTEVEX0NMQVNTOiAnbWRjLWxpc3QtaXRlbS0tZGlzYWJsZWQnLFxuICAgIExJU1RfSVRFTV9TRUxFQ1RFRF9DTEFTUzogJ21kYy1saXN0LWl0ZW0tLXNlbGVjdGVkJyxcbiAgICBST09UOiAnbWRjLWxpc3QnLFxufTtcbnZhciBzdHJpbmdzID0ge1xuICAgIEFDVElPTl9FVkVOVDogJ01EQ0xpc3Q6YWN0aW9uJyxcbiAgICBBUklBX0NIRUNLRUQ6ICdhcmlhLWNoZWNrZWQnLFxuICAgIEFSSUFfQ0hFQ0tFRF9DSEVDS0JPWF9TRUxFQ1RPUjogJ1tyb2xlPVwiY2hlY2tib3hcIl1bYXJpYS1jaGVja2VkPVwidHJ1ZVwiXScsXG4gICAgQVJJQV9DSEVDS0VEX1JBRElPX1NFTEVDVE9SOiAnW3JvbGU9XCJyYWRpb1wiXVthcmlhLWNoZWNrZWQ9XCJ0cnVlXCJdJyxcbiAgICBBUklBX0NVUlJFTlQ6ICdhcmlhLWN1cnJlbnQnLFxuICAgIEFSSUFfRElTQUJMRUQ6ICdhcmlhLWRpc2FibGVkJyxcbiAgICBBUklBX09SSUVOVEFUSU9OOiAnYXJpYS1vcmllbnRhdGlvbicsXG4gICAgQVJJQV9PUklFTlRBVElPTl9IT1JJWk9OVEFMOiAnaG9yaXpvbnRhbCcsXG4gICAgQVJJQV9ST0xFX0NIRUNLQk9YX1NFTEVDVE9SOiAnW3JvbGU9XCJjaGVja2JveFwiXScsXG4gICAgQVJJQV9TRUxFQ1RFRDogJ2FyaWEtc2VsZWN0ZWQnLFxuICAgIENIRUNLQk9YX1JBRElPX1NFTEVDVE9SOiAnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6ZGlzYWJsZWQpLCBpbnB1dFt0eXBlPVwicmFkaW9cIl06bm90KDpkaXNhYmxlZCknLFxuICAgIENIRUNLQk9YX1NFTEVDVE9SOiAnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6ZGlzYWJsZWQpJyxcbiAgICBDSElMRF9FTEVNRU5UU19UT19UT0dHTEVfVEFCSU5ERVg6IFwiXFxuICAgIC5cIiArIGNzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTICsgXCIgYnV0dG9uOm5vdCg6ZGlzYWJsZWQpLFxcbiAgICAuXCIgKyBjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTUyArIFwiIGFcXG4gIFwiLFxuICAgIEZPQ1VTQUJMRV9DSElMRF9FTEVNRU5UUzogXCJcXG4gICAgLlwiICsgY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1MgKyBcIiBidXR0b246bm90KDpkaXNhYmxlZCksXFxuICAgIC5cIiArIGNzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTICsgXCIgYSxcXG4gICAgLlwiICsgY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1MgKyBcIiBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOm5vdCg6ZGlzYWJsZWQpLFxcbiAgICAuXCIgKyBjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTUyArIFwiIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06bm90KDpkaXNhYmxlZClcXG4gIFwiLFxuICAgIFJBRElPX1NFTEVDVE9SOiAnaW5wdXRbdHlwZT1cInJhZGlvXCJdOm5vdCg6ZGlzYWJsZWQpJyxcbn07XG52YXIgbnVtYmVycyA9IHtcbiAgICBVTlNFVF9JTkRFWDogLTEsXG59O1xuZXhwb3J0IHsgc3RyaW5ncywgY3NzQ2xhc3NlcywgbnVtYmVycyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIG51bWJlcnMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgRUxFTUVOVFNfS0VZX0FMTE9XRURfSU4gPSBbJ2lucHV0JywgJ2J1dHRvbicsICd0ZXh0YXJlYScsICdzZWxlY3QnXTtcbmZ1bmN0aW9uIGlzTnVtYmVyQXJyYXkoc2VsZWN0ZWRJbmRleCkge1xuICAgIHJldHVybiBzZWxlY3RlZEluZGV4IGluc3RhbmNlb2YgQXJyYXk7XG59XG52YXIgTURDTGlzdEZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDTGlzdEZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDTGlzdEZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBNRENMaXN0Rm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLndyYXBGb2N1c18gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaXNWZXJ0aWNhbF8gPSB0cnVlO1xuICAgICAgICBfdGhpcy5pc1NpbmdsZVNlbGVjdGlvbkxpc3RfID0gZmFsc2U7XG4gICAgICAgIF90aGlzLnNlbGVjdGVkSW5kZXhfID0gbnVtYmVycy5VTlNFVF9JTkRFWDtcbiAgICAgICAgX3RoaXMuZm9jdXNlZEl0ZW1JbmRleF8gPSBudW1iZXJzLlVOU0VUX0lOREVYO1xuICAgICAgICBfdGhpcy51c2VBY3RpdmF0ZWRDbGFzc18gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuYXJpYUN1cnJlbnRBdHRyVmFsdWVfID0gbnVsbDtcbiAgICAgICAgX3RoaXMuaXNDaGVja2JveExpc3RfID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmlzUmFkaW9MaXN0XyA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENMaXN0Rm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0xpc3RGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTGlzdEZvdW5kYXRpb24sIFwibnVtYmVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlcnM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENMaXN0Rm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzc0ZvckVsZW1lbnRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGZvY3VzSXRlbUF0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBnZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgICAgICAgICAgZ2V0Rm9jdXNlZEVsZW1lbnRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgICAgICAgICBnZXRMaXN0SXRlbUNvdW50OiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICAgICAgICAgICAgICAgIGhhc0NoZWNrYm94QXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgaGFzUmFkaW9BdEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBpc0NoZWNrYm94Q2hlY2tlZEF0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGlzRm9jdXNJbnNpZGVMaXN0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBpc1Jvb3RGb2N1c2VkOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlBY3Rpb246IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzc0ZvckVsZW1lbnRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldENoZWNrZWRDaGVja2JveE9yUmFkaW9BdEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0VGFiSW5kZXhGb3JMaXN0SXRlbUNoaWxkcmVuOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUubGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5nZXRMaXN0SXRlbUNvdW50KCkgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5oYXNDaGVja2JveEF0SW5kZXgoMCkpIHtcbiAgICAgICAgICAgIHRoaXMuaXNDaGVja2JveExpc3RfID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmFkYXB0ZXJfLmhhc1JhZGlvQXRJbmRleCgwKSkge1xuICAgICAgICAgICAgdGhpcy5pc1JhZGlvTGlzdF8gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcml2YXRlIHdyYXBGb2N1c18gdmFyaWFibGUuXG4gICAgICovXG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFdyYXBGb2N1cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLndyYXBGb2N1c18gPSB2YWx1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGlzVmVydGljYWxfIHByaXZhdGUgdmFyaWFibGUuXG4gICAgICovXG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFZlcnRpY2FsT3JpZW50YXRpb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5pc1ZlcnRpY2FsXyA9IHZhbHVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgaXNTaW5nbGVTZWxlY3Rpb25MaXN0XyBwcml2YXRlIHZhcmlhYmxlLlxuICAgICAqL1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRTaW5nbGVTZWxlY3Rpb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5pc1NpbmdsZVNlbGVjdGlvbkxpc3RfID0gdmFsdWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB1c2VBY3RpdmF0ZWRDbGFzc18gcHJpdmF0ZSB2YXJpYWJsZS5cbiAgICAgKi9cbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0VXNlQWN0aXZhdGVkQ2xhc3MgPSBmdW5jdGlvbiAodXNlQWN0aXZhdGVkKSB7XG4gICAgICAgIHRoaXMudXNlQWN0aXZhdGVkQ2xhc3NfID0gdXNlQWN0aXZhdGVkO1xuICAgIH07XG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLmdldFNlbGVjdGVkSW5kZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSW5kZXhfO1xuICAgIH07XG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFNlbGVjdGVkSW5kZXggPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzSW5kZXhWYWxpZF8oaW5kZXgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNDaGVja2JveExpc3RfKSB7XG4gICAgICAgICAgICB0aGlzLnNldENoZWNrYm94QXRJbmRleF8oaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNSYWRpb0xpc3RfKSB7XG4gICAgICAgICAgICB0aGlzLnNldFJhZGlvQXRJbmRleF8oaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTaW5nbGVTZWxlY3Rpb25BdEluZGV4XyhpbmRleCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEZvY3VzIGluIGhhbmRsZXIgZm9yIHRoZSBsaXN0IGl0ZW1zLlxuICAgICAqL1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVGb2N1c0luID0gZnVuY3Rpb24gKF8sIGxpc3RJdGVtSW5kZXgpIHtcbiAgICAgICAgaWYgKGxpc3RJdGVtSW5kZXggPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRUYWJJbmRleEZvckxpc3RJdGVtQ2hpbGRyZW4obGlzdEl0ZW1JbmRleCwgJzAnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogRm9jdXMgb3V0IGhhbmRsZXIgZm9yIHRoZSBsaXN0IGl0ZW1zLlxuICAgICAqL1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVGb2N1c091dCA9IGZ1bmN0aW9uIChfLCBsaXN0SXRlbUluZGV4KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChsaXN0SXRlbUluZGV4ID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0VGFiSW5kZXhGb3JMaXN0SXRlbUNoaWxkcmVuKGxpc3RJdGVtSW5kZXgsICctMScpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCZXR3ZWVuIEZvY3Vzb3V0ICYgRm9jdXNpbiBzb21lIGJyb3dzZXJzIGRvIG5vdCBoYXZlIGZvY3VzIG9uIGFueSBlbGVtZW50LiBTZXR0aW5nIGEgZGVsYXkgdG8gd2FpdCB0aWxsIHRoZSBmb2N1c1xuICAgICAgICAgKiBpcyBtb3ZlZCB0byBuZXh0IGVsZW1lbnQuXG4gICAgICAgICAqL1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghX3RoaXMuYWRhcHRlcl8uaXNGb2N1c0luc2lkZUxpc3QoKSkge1xuICAgICAgICAgICAgICAgIF90aGlzLnNldFRhYmluZGV4VG9GaXJzdFNlbGVjdGVkSXRlbV8oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBLZXkgaGFuZGxlciBmb3IgdGhlIGxpc3QuXG4gICAgICovXG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUtleWRvd24gPSBmdW5jdGlvbiAoZXZ0LCBpc1Jvb3RMaXN0SXRlbSwgbGlzdEl0ZW1JbmRleCkge1xuICAgICAgICB2YXIgaXNBcnJvd0xlZnQgPSBldnQua2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBldnQua2V5Q29kZSA9PT0gMzc7XG4gICAgICAgIHZhciBpc0Fycm93VXAgPSBldnQua2V5ID09PSAnQXJyb3dVcCcgfHwgZXZ0LmtleUNvZGUgPT09IDM4O1xuICAgICAgICB2YXIgaXNBcnJvd1JpZ2h0ID0gZXZ0LmtleSA9PT0gJ0Fycm93UmlnaHQnIHx8IGV2dC5rZXlDb2RlID09PSAzOTtcbiAgICAgICAgdmFyIGlzQXJyb3dEb3duID0gZXZ0LmtleSA9PT0gJ0Fycm93RG93bicgfHwgZXZ0LmtleUNvZGUgPT09IDQwO1xuICAgICAgICB2YXIgaXNIb21lID0gZXZ0LmtleSA9PT0gJ0hvbWUnIHx8IGV2dC5rZXlDb2RlID09PSAzNjtcbiAgICAgICAgdmFyIGlzRW5kID0gZXZ0LmtleSA9PT0gJ0VuZCcgfHwgZXZ0LmtleUNvZGUgPT09IDM1O1xuICAgICAgICB2YXIgaXNFbnRlciA9IGV2dC5rZXkgPT09ICdFbnRlcicgfHwgZXZ0LmtleUNvZGUgPT09IDEzO1xuICAgICAgICB2YXIgaXNTcGFjZSA9IGV2dC5rZXkgPT09ICdTcGFjZScgfHwgZXZ0LmtleUNvZGUgPT09IDMyO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1Jvb3RGb2N1c2VkKCkpIHtcbiAgICAgICAgICAgIGlmIChpc0Fycm93VXAgfHwgaXNFbmQpIHtcbiAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzTGFzdEVsZW1lbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzQXJyb3dEb3duIHx8IGlzSG9tZSkge1xuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNGaXJzdEVsZW1lbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gdGhpcy5hZGFwdGVyXy5nZXRGb2N1c2VkRWxlbWVudEluZGV4KCk7XG4gICAgICAgIGlmIChjdXJyZW50SW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXggPSBsaXN0SXRlbUluZGV4O1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGV2ZW50IGRvZXNuJ3QgaGF2ZSBhIG1kYy1saXN0LWl0ZW0gYW5jZXN0b3IgZnJvbSB0aGVcbiAgICAgICAgICAgICAgICAvLyBjdXJyZW50IGxpc3QgKG5vdCBmcm9tIGEgc3VibGlzdCksIHJldHVybiBlYXJseS5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5leHRJbmRleDtcbiAgICAgICAgaWYgKCh0aGlzLmlzVmVydGljYWxfICYmIGlzQXJyb3dEb3duKSB8fCAoIXRoaXMuaXNWZXJ0aWNhbF8gJiYgaXNBcnJvd1JpZ2h0KSkge1xuICAgICAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdEV2ZW50XyhldnQpO1xuICAgICAgICAgICAgbmV4dEluZGV4ID0gdGhpcy5mb2N1c05leHRFbGVtZW50KGN1cnJlbnRJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKHRoaXMuaXNWZXJ0aWNhbF8gJiYgaXNBcnJvd1VwKSB8fCAoIXRoaXMuaXNWZXJ0aWNhbF8gJiYgaXNBcnJvd0xlZnQpKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0RXZlbnRfKGV2dCk7XG4gICAgICAgICAgICBuZXh0SW5kZXggPSB0aGlzLmZvY3VzUHJldkVsZW1lbnQoY3VycmVudEluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0hvbWUpIHtcbiAgICAgICAgICAgIHRoaXMucHJldmVudERlZmF1bHRFdmVudF8oZXZ0KTtcbiAgICAgICAgICAgIG5leHRJbmRleCA9IHRoaXMuZm9jdXNGaXJzdEVsZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0VuZCkge1xuICAgICAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdEV2ZW50XyhldnQpO1xuICAgICAgICAgICAgbmV4dEluZGV4ID0gdGhpcy5mb2N1c0xhc3RFbGVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNFbnRlciB8fCBpc1NwYWNlKSB7XG4gICAgICAgICAgICBpZiAoaXNSb290TGlzdEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gZWFybHkgaWYgZW50ZXIga2V5IGlzIHByZXNzZWQgb24gYW5jaG9yIGVsZW1lbnQgd2hpY2ggdHJpZ2dlcnMgc3ludGhldGljIE1vdXNlRXZlbnQgZXZlbnQuXG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGV2dC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQudGFnTmFtZSA9PT0gJ0EnICYmIGlzRW50ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0RXZlbnRfKGV2dCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTZWxlY3RhYmxlTGlzdF8oKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFNlbGVjdGVkSW5kZXhPbkFjdGlvbl8oY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlBY3Rpb24oY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvY3VzZWRJdGVtSW5kZXhfID0gY3VycmVudEluZGV4O1xuICAgICAgICBpZiAobmV4dEluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VGFiaW5kZXhBdEluZGV4XyhuZXh0SW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5mb2N1c2VkSXRlbUluZGV4XyA9IG5leHRJbmRleDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2xpY2sgaGFuZGxlciBmb3IgdGhlIGxpc3QuXG4gICAgICovXG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGluZGV4LCB0b2dnbGVDaGVja2JveCkge1xuICAgICAgICBpZiAoaW5kZXggPT09IG51bWJlcnMuVU5TRVRfSU5ERVgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc1NlbGVjdGFibGVMaXN0XygpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFNlbGVjdGVkSW5kZXhPbkFjdGlvbl8oaW5kZXgsIHRvZ2dsZUNoZWNrYm94KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeUFjdGlvbihpbmRleCk7XG4gICAgICAgIHRoaXMuc2V0VGFiaW5kZXhBdEluZGV4XyhpbmRleCk7XG4gICAgICAgIHRoaXMuZm9jdXNlZEl0ZW1JbmRleF8gPSBpbmRleDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEZvY3VzZXMgdGhlIG5leHQgZWxlbWVudCBvbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuZm9jdXNOZXh0RWxlbWVudCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB2YXIgY291bnQgPSB0aGlzLmFkYXB0ZXJfLmdldExpc3RJdGVtQ291bnQoKTtcbiAgICAgICAgdmFyIG5leHRJbmRleCA9IGluZGV4ICsgMTtcbiAgICAgICAgaWYgKG5leHRJbmRleCA+PSBjb3VudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMud3JhcEZvY3VzXykge1xuICAgICAgICAgICAgICAgIG5leHRJbmRleCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gZWFybHkgYmVjYXVzZSBsYXN0IGl0ZW0gaXMgYWxyZWFkeSBmb2N1c2VkLlxuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmZvY3VzSXRlbUF0SW5kZXgobmV4dEluZGV4KTtcbiAgICAgICAgcmV0dXJuIG5leHRJbmRleDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEZvY3VzZXMgdGhlIHByZXZpb3VzIGVsZW1lbnQgb24gdGhlIGxpc3QuXG4gICAgICovXG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLmZvY3VzUHJldkVsZW1lbnQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdmFyIHByZXZJbmRleCA9IGluZGV4IC0gMTtcbiAgICAgICAgaWYgKHByZXZJbmRleCA8IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLndyYXBGb2N1c18pIHtcbiAgICAgICAgICAgICAgICBwcmV2SW5kZXggPSB0aGlzLmFkYXB0ZXJfLmdldExpc3RJdGVtQ291bnQoKSAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gZWFybHkgYmVjYXVzZSBmaXJzdCBpdGVtIGlzIGFscmVhZHkgZm9jdXNlZC5cbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5mb2N1c0l0ZW1BdEluZGV4KHByZXZJbmRleCk7XG4gICAgICAgIHJldHVybiBwcmV2SW5kZXg7XG4gICAgfTtcbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuZm9jdXNGaXJzdEVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZm9jdXNJdGVtQXRJbmRleCgwKTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfTtcbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuZm9jdXNMYXN0RWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGxhc3RJbmRleCA9IHRoaXMuYWRhcHRlcl8uZ2V0TGlzdEl0ZW1Db3VudCgpIC0gMTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5mb2N1c0l0ZW1BdEluZGV4KGxhc3RJbmRleCk7XG4gICAgICAgIHJldHVybiBsYXN0SW5kZXg7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gaXRlbUluZGV4IEluZGV4IG9mIHRoZSBsaXN0IGl0ZW1cbiAgICAgKiBAcGFyYW0gaXNFbmFibGVkIFNldHMgdGhlIGxpc3QgaXRlbSB0byBlbmFibGVkIG9yIGRpc2FibGVkLlxuICAgICAqL1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRFbmFibGVkID0gZnVuY3Rpb24gKGl0ZW1JbmRleCwgaXNFbmFibGVkKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0luZGV4VmFsaWRfKGl0ZW1JbmRleCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNFbmFibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzRm9yRWxlbWVudEluZGV4KGl0ZW1JbmRleCwgY3NzQ2xhc3Nlcy5MSVNUX0lURU1fRElTQUJMRURfQ0xBU1MpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaXRlbUluZGV4LCBzdHJpbmdzLkFSSUFfRElTQUJMRUQsICdmYWxzZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzc0ZvckVsZW1lbnRJbmRleChpdGVtSW5kZXgsIGNzc0NsYXNzZXMuTElTVF9JVEVNX0RJU0FCTEVEX0NMQVNTKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KGl0ZW1JbmRleCwgc3RyaW5ncy5BUklBX0RJU0FCTEVELCAndHJ1ZScpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBFbnN1cmVzIHRoYXQgcHJldmVudERlZmF1bHQgaXMgb25seSBjYWxsZWQgaWYgdGhlIGNvbnRhaW5pbmcgZWxlbWVudCBkb2Vzbid0XG4gICAgICogY29uc3VtZSB0aGUgZXZlbnQsIGFuZCBpdCB3aWxsIGNhdXNlIGFuIHVuaW50ZW5kZWQgc2Nyb2xsLlxuICAgICAqL1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5wcmV2ZW50RGVmYXVsdEV2ZW50XyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGV2dC50YXJnZXQ7XG4gICAgICAgIHZhciB0YWdOYW1lID0gKFwiXCIgKyB0YXJnZXQudGFnTmFtZSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKEVMRU1FTlRTX0tFWV9BTExPV0VEX0lOLmluZGV4T2YodGFnTmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFNpbmdsZVNlbGVjdGlvbkF0SW5kZXhfID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXhfID09PSBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzZWxlY3RlZENsYXNzTmFtZSA9IGNzc0NsYXNzZXMuTElTVF9JVEVNX1NFTEVDVEVEX0NMQVNTO1xuICAgICAgICBpZiAodGhpcy51c2VBY3RpdmF0ZWRDbGFzc18pIHtcbiAgICAgICAgICAgIHNlbGVjdGVkQ2xhc3NOYW1lID0gY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQUNUSVZBVEVEX0NMQVNTO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXhfICE9PSBudW1iZXJzLlVOU0VUX0lOREVYKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzRm9yRWxlbWVudEluZGV4KHRoaXMuc2VsZWN0ZWRJbmRleF8sIHNlbGVjdGVkQ2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzRm9yRWxlbWVudEluZGV4KGluZGV4LCBzZWxlY3RlZENsYXNzTmFtZSk7XG4gICAgICAgIHRoaXMuc2V0QXJpYUZvclNpbmdsZVNlbGVjdGlvbkF0SW5kZXhfKGluZGV4KTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4XyA9IGluZGV4O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyBhcmlhIGF0dHJpYnV0ZSBmb3Igc2luZ2xlIHNlbGVjdGlvbiBhdCBnaXZlbiBpbmRleC5cbiAgICAgKi9cbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0QXJpYUZvclNpbmdsZVNlbGVjdGlvbkF0SW5kZXhfID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIC8vIERldGVjdCB0aGUgcHJlc2VuY2Ugb2YgYXJpYS1jdXJyZW50IGFuZCBnZXQgdGhlIHZhbHVlIG9ubHkgZHVyaW5nIGxpc3QgaW5pdGlhbGl6YXRpb24gd2hlbiBpdCBpcyBpbiB1bnNldCBzdGF0ZS5cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleF8gPT09IG51bWJlcnMuVU5TRVRfSU5ERVgpIHtcbiAgICAgICAgICAgIHRoaXMuYXJpYUN1cnJlbnRBdHRyVmFsdWVfID1cbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmdldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleChpbmRleCwgc3RyaW5ncy5BUklBX0NVUlJFTlQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc0FyaWFDdXJyZW50ID0gdGhpcy5hcmlhQ3VycmVudEF0dHJWYWx1ZV8gIT09IG51bGw7XG4gICAgICAgIHZhciBhcmlhQXR0cmlidXRlID0gaXNBcmlhQ3VycmVudCA/IHN0cmluZ3MuQVJJQV9DVVJSRU5UIDogc3RyaW5ncy5BUklBX1NFTEVDVEVEO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4XyAhPT0gbnVtYmVycy5VTlNFVF9JTkRFWCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgodGhpcy5zZWxlY3RlZEluZGV4XywgYXJpYUF0dHJpYnV0ZSwgJ2ZhbHNlJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFyaWFBdHRyaWJ1dGVWYWx1ZSA9IGlzQXJpYUN1cnJlbnQgPyB0aGlzLmFyaWFDdXJyZW50QXR0clZhbHVlXyA6ICd0cnVlJztcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaW5kZXgsIGFyaWFBdHRyaWJ1dGUsIGFyaWFBdHRyaWJ1dGVWYWx1ZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUb2dnbGVzIHJhZGlvIGF0IGdpdmUgaW5kZXguIFJhZGlvIGRvZXNuJ3QgY2hhbmdlIHRoZSBjaGVja2VkIHN0YXRlIGlmIGl0IGlzIGFscmVhZHkgY2hlY2tlZC5cbiAgICAgKi9cbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0UmFkaW9BdEluZGV4XyA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldENoZWNrZWRDaGVja2JveE9yUmFkaW9BdEluZGV4KGluZGV4LCB0cnVlKTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleF8gIT09IG51bWJlcnMuVU5TRVRfSU5ERVgpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KHRoaXMuc2VsZWN0ZWRJbmRleF8sIHN0cmluZ3MuQVJJQV9DSEVDS0VELCAnZmFsc2UnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleChpbmRleCwgc3RyaW5ncy5BUklBX0NIRUNLRUQsICd0cnVlJyk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleF8gPSBpbmRleDtcbiAgICB9O1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRDaGVja2JveEF0SW5kZXhfID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hZGFwdGVyXy5nZXRMaXN0SXRlbUNvdW50KCk7IGkrKykge1xuICAgICAgICAgICAgdmFyIGlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGluZGV4LmluZGV4T2YoaSkgPj0gMCkge1xuICAgICAgICAgICAgICAgIGlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldENoZWNrZWRDaGVja2JveE9yUmFkaW9BdEluZGV4KGksIGlzQ2hlY2tlZCk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleChpLCBzdHJpbmdzLkFSSUFfQ0hFQ0tFRCwgaXNDaGVja2VkID8gJ3RydWUnIDogJ2ZhbHNlJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4XyA9IGluZGV4O1xuICAgIH07XG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFRhYmluZGV4QXRJbmRleF8gPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZEl0ZW1JbmRleF8gPT09IG51bWJlcnMuVU5TRVRfSU5ERVggJiYgaW5kZXggIT09IDApIHtcbiAgICAgICAgICAgIC8vIElmIG5vIGxpc3QgaXRlbSB3YXMgc2VsZWN0ZWQgc2V0IGZpcnN0IGxpc3QgaXRlbSdzIHRhYmluZGV4IHRvIC0xLlxuICAgICAgICAgICAgLy8gR2VuZXJhbGx5LCB0YWJpbmRleCBpcyBzZXQgdG8gMCBvbiBmaXJzdCBsaXN0IGl0ZW0gb2YgbGlzdCB0aGF0IGhhcyBubyBwcmVzZWxlY3RlZCBpdGVtcy5cbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KDAsICd0YWJpbmRleCcsICctMScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZm9jdXNlZEl0ZW1JbmRleF8gPj0gMCAmJiB0aGlzLmZvY3VzZWRJdGVtSW5kZXhfICE9PSBpbmRleCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgodGhpcy5mb2N1c2VkSXRlbUluZGV4XywgJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaW5kZXgsICd0YWJpbmRleCcsICcwJyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIFJldHVybiB0cnVlIGlmIGl0IGlzIHNpbmdsZSBzZWxlY3RpbiBsaXN0LCBjaGVja2JveCBsaXN0IG9yIHJhZGlvIGxpc3QuXG4gICAgICovXG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLmlzU2VsZWN0YWJsZUxpc3RfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1NpbmdsZVNlbGVjdGlvbkxpc3RfIHx8IHRoaXMuaXNDaGVja2JveExpc3RfIHx8IHRoaXMuaXNSYWRpb0xpc3RfO1xuICAgIH07XG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFRhYmluZGV4VG9GaXJzdFNlbGVjdGVkSXRlbV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0YXJnZXRJbmRleCA9IDA7XG4gICAgICAgIGlmICh0aGlzLmlzU2VsZWN0YWJsZUxpc3RfKCkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5zZWxlY3RlZEluZGV4XyA9PT0gJ251bWJlcicgJiYgdGhpcy5zZWxlY3RlZEluZGV4XyAhPT0gbnVtYmVycy5VTlNFVF9JTkRFWCkge1xuICAgICAgICAgICAgICAgIHRhcmdldEluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4XztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzTnVtYmVyQXJyYXkodGhpcy5zZWxlY3RlZEluZGV4XykgJiYgdGhpcy5zZWxlY3RlZEluZGV4Xy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0SW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXhfLnJlZHVjZShmdW5jdGlvbiAoY3VycmVudEluZGV4LCBtaW5JbmRleCkgeyByZXR1cm4gTWF0aC5taW4oY3VycmVudEluZGV4LCBtaW5JbmRleCk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0VGFiaW5kZXhBdEluZGV4Xyh0YXJnZXRJbmRleCk7XG4gICAgfTtcbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuaXNJbmRleFZhbGlkXyA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoaW5kZXggaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQ2hlY2tib3hMaXN0Xykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTURDTGlzdEZvdW5kYXRpb246IEFycmF5IG9mIGluZGV4IGlzIG9ubHkgc3VwcG9ydGVkIGZvciBjaGVja2JveCBiYXNlZCBsaXN0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5kZXgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXguc29tZShmdW5jdGlvbiAoaSkgeyByZXR1cm4gX3RoaXMuaXNJbmRleEluUmFuZ2VfKGkpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgaW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0NoZWNrYm94TGlzdF8pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01EQ0xpc3RGb3VuZGF0aW9uOiBFeHBlY3RlZCBhcnJheSBvZiBpbmRleCBmb3IgY2hlY2tib3ggYmFzZWQgbGlzdCBidXQgZ290IG51bWJlcjogJyArIGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzSW5kZXhJblJhbmdlXyhpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5pc0luZGV4SW5SYW5nZV8gPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdmFyIGxpc3RTaXplID0gdGhpcy5hZGFwdGVyXy5nZXRMaXN0SXRlbUNvdW50KCk7XG4gICAgICAgIHJldHVybiBpbmRleCA+PSAwICYmIGluZGV4IDwgbGlzdFNpemU7XG4gICAgfTtcbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0U2VsZWN0ZWRJbmRleE9uQWN0aW9uXyA9IGZ1bmN0aW9uIChpbmRleCwgdG9nZ2xlQ2hlY2tib3gpIHtcbiAgICAgICAgaWYgKHRvZ2dsZUNoZWNrYm94ID09PSB2b2lkIDApIHsgdG9nZ2xlQ2hlY2tib3ggPSB0cnVlOyB9XG4gICAgICAgIGlmICh0aGlzLmlzQ2hlY2tib3hMaXN0Xykge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVDaGVja2JveEF0SW5kZXhfKGluZGV4LCB0b2dnbGVDaGVja2JveCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFNlbGVjdGVkSW5kZXgoaW5kZXgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUudG9nZ2xlQ2hlY2tib3hBdEluZGV4XyA9IGZ1bmN0aW9uIChpbmRleCwgdG9nZ2xlQ2hlY2tib3gpIHtcbiAgICAgICAgdmFyIGlzQ2hlY2tlZCA9IHRoaXMuYWRhcHRlcl8uaXNDaGVja2JveENoZWNrZWRBdEluZGV4KGluZGV4KTtcbiAgICAgICAgaWYgKHRvZ2dsZUNoZWNrYm94KSB7XG4gICAgICAgICAgICBpc0NoZWNrZWQgPSAhaXNDaGVja2VkO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRDaGVja2VkQ2hlY2tib3hPclJhZGlvQXRJbmRleChpbmRleCwgaXNDaGVja2VkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleChpbmRleCwgc3RyaW5ncy5BUklBX0NIRUNLRUQsIGlzQ2hlY2tlZCA/ICd0cnVlJyA6ICdmYWxzZScpO1xuICAgICAgICAvLyBJZiBub25lIG9mIHRoZSBjaGVja2JveCBpdGVtcyBhcmUgc2VsZWN0ZWQgYW5kIHNlbGVjdGVkSW5kZXggaXMgbm90IGluaXRpYWxpemVkIHRoZW4gcHJvdmlkZSBhIGRlZmF1bHQgdmFsdWUuXG4gICAgICAgIHZhciBzZWxlY3RlZEluZGV4ZXMgPSB0aGlzLnNlbGVjdGVkSW5kZXhfID09PSBudW1iZXJzLlVOU0VUX0lOREVYID8gW10gOiB0aGlzLnNlbGVjdGVkSW5kZXhfLnNsaWNlKCk7XG4gICAgICAgIGlmIChpc0NoZWNrZWQpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkSW5kZXhlcy5wdXNoKGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdGVkSW5kZXhlcyA9IHNlbGVjdGVkSW5kZXhlcy5maWx0ZXIoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGkgIT09IGluZGV4OyB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXhfID0gc2VsZWN0ZWRJbmRleGVzO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ0xpc3RGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENMaXN0Rm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0xpc3RGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENDb21wb25lbnQgfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgY2xvc2VzdCwgbWF0Y2hlcyB9IGZyb20gJ0BtYXRlcmlhbC9kb20vcG9ueWZpbGwnO1xuaW1wb3J0IHsgY3NzQ2xhc3Nlcywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IE1EQ0xpc3RGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uJztcbnZhciBNRENMaXN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ0xpc3QsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDTGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTGlzdC5wcm90b3R5cGUsIFwidmVydGljYWxcIiwge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRWZXJ0aWNhbE9yaWVudGF0aW9uKHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0xpc3QucHJvdG90eXBlLCBcImxpc3RFbGVtZW50c1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwodGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiICsgY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1MpKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0xpc3QucHJvdG90eXBlLCBcIndyYXBGb2N1c1wiLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldFdyYXBGb2N1cyh2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENMaXN0LnByb3RvdHlwZSwgXCJzaW5nbGVTZWxlY3Rpb25cIiwge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChpc1NpbmdsZVNlbGVjdGlvbkxpc3QpIHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0U2luZ2xlU2VsZWN0aW9uKGlzU2luZ2xlU2VsZWN0aW9uTGlzdCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENMaXN0LnByb3RvdHlwZSwgXCJzZWxlY3RlZEluZGV4XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uXy5nZXRTZWxlY3RlZEluZGV4KCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldFNlbGVjdGVkSW5kZXgoaW5kZXgpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENMaXN0LmF0dGFjaFRvID0gZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNRENMaXN0KHJvb3QpO1xuICAgIH07XG4gICAgTURDTGlzdC5wcm90b3R5cGUuaW5pdGlhbFN5bmNXaXRoRE9NID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrXyA9IHRoaXMuaGFuZGxlQ2xpY2tFdmVudF8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVLZXlkb3duXyA9IHRoaXMuaGFuZGxlS2V5ZG93bkV2ZW50Xy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmZvY3VzSW5FdmVudExpc3RlbmVyXyA9IHRoaXMuaGFuZGxlRm9jdXNJbkV2ZW50Xy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmZvY3VzT3V0RXZlbnRMaXN0ZW5lcl8gPSB0aGlzLmhhbmRsZUZvY3VzT3V0RXZlbnRfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubGlzdGVuKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlkb3duXyk7XG4gICAgICAgIHRoaXMubGlzdGVuKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2tfKTtcbiAgICAgICAgdGhpcy5saXN0ZW4oJ2ZvY3VzaW4nLCB0aGlzLmZvY3VzSW5FdmVudExpc3RlbmVyXyk7XG4gICAgICAgIHRoaXMubGlzdGVuKCdmb2N1c291dCcsIHRoaXMuZm9jdXNPdXRFdmVudExpc3RlbmVyXyk7XG4gICAgICAgIHRoaXMubGF5b3V0KCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUxpc3RUeXBlKCk7XG4gICAgfTtcbiAgICBNRENMaXN0LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnVubGlzdGVuKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlkb3duXyk7XG4gICAgICAgIHRoaXMudW5saXN0ZW4oJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGlja18pO1xuICAgICAgICB0aGlzLnVubGlzdGVuKCdmb2N1c2luJywgdGhpcy5mb2N1c0luRXZlbnRMaXN0ZW5lcl8pO1xuICAgICAgICB0aGlzLnVubGlzdGVuKCdmb2N1c291dCcsIHRoaXMuZm9jdXNPdXRFdmVudExpc3RlbmVyXyk7XG4gICAgfTtcbiAgICBNRENMaXN0LnByb3RvdHlwZS5sYXlvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSB0aGlzLnJvb3RfLmdldEF0dHJpYnV0ZShzdHJpbmdzLkFSSUFfT1JJRU5UQVRJT04pO1xuICAgICAgICB0aGlzLnZlcnRpY2FsID0gZGlyZWN0aW9uICE9PSBzdHJpbmdzLkFSSUFfT1JJRU5UQVRJT05fSE9SSVpPTlRBTDtcbiAgICAgICAgLy8gTGlzdCBpdGVtcyBuZWVkIHRvIGhhdmUgYXQgbGVhc3QgdGFiaW5kZXg9LTEgdG8gYmUgZm9jdXNhYmxlLlxuICAgICAgICBbXS5zbGljZS5jYWxsKHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvckFsbCgnLm1kYy1saXN0LWl0ZW06bm90KFt0YWJpbmRleF0pJykpXG4gICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIENoaWxkIGJ1dHRvbi9hIGVsZW1lbnRzIGFyZSBub3QgdGFiYmFibGUgdW50aWwgdGhlIGxpc3QgaXRlbSBpcyBmb2N1c2VkLlxuICAgICAgICBbXS5zbGljZS5jYWxsKHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvckFsbChzdHJpbmdzLkZPQ1VTQUJMRV9DSElMRF9FTEVNRU5UUykpXG4gICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGVsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTsgfSk7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8ubGF5b3V0KCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIHNlbGVjdGVkSW5kZXggdmFsdWUgYmFzZWQgb24gcHJlLXNlbGVjdGVkIGNoZWNrYm94IGxpc3QgaXRlbXMsIHNpbmdsZSBzZWxlY3Rpb24gb3IgcmFkaW8uXG4gICAgICovXG4gICAgTURDTGlzdC5wcm90b3R5cGUuaW5pdGlhbGl6ZUxpc3RUeXBlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgY2hlY2tib3hMaXN0SXRlbXMgPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3JBbGwoc3RyaW5ncy5BUklBX1JPTEVfQ0hFQ0tCT1hfU0VMRUNUT1IpO1xuICAgICAgICB2YXIgc2luZ2xlU2VsZWN0ZWRMaXN0SXRlbSA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihcIlxcbiAgICAgIC5cIiArIGNzc0NsYXNzZXMuTElTVF9JVEVNX0FDVElWQVRFRF9DTEFTUyArIFwiLFxcbiAgICAgIC5cIiArIGNzc0NsYXNzZXMuTElTVF9JVEVNX1NFTEVDVEVEX0NMQVNTICsgXCJcXG4gICAgXCIpO1xuICAgICAgICB2YXIgcmFkaW9TZWxlY3RlZExpc3RJdGVtID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuQVJJQV9DSEVDS0VEX1JBRElPX1NFTEVDVE9SKTtcbiAgICAgICAgaWYgKGNoZWNrYm94TGlzdEl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHByZXNlbGVjdGVkSXRlbXMgPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3JBbGwoc3RyaW5ncy5BUklBX0NIRUNLRURfQ0hFQ0tCT1hfU0VMRUNUT1IpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID1cbiAgICAgICAgICAgICAgICBbXS5tYXAuY2FsbChwcmVzZWxlY3RlZEl0ZW1zLCBmdW5jdGlvbiAobGlzdEl0ZW0pIHsgcmV0dXJuIF90aGlzLmxpc3RFbGVtZW50cy5pbmRleE9mKGxpc3RJdGVtKTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2luZ2xlU2VsZWN0ZWRMaXN0SXRlbSkge1xuICAgICAgICAgICAgaWYgKHNpbmdsZVNlbGVjdGVkTGlzdEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzZXMuTElTVF9JVEVNX0FDVElWQVRFRF9DTEFTUykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldFVzZUFjdGl2YXRlZENsYXNzKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zaW5nbGVTZWxlY3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5saXN0RWxlbWVudHMuaW5kZXhPZihzaW5nbGVTZWxlY3RlZExpc3RJdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyYWRpb1NlbGVjdGVkTGlzdEl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMubGlzdEVsZW1lbnRzLmluZGV4T2YocmFkaW9TZWxlY3RlZExpc3RJdGVtKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgbGlzdCBpdGVtIGF0IGl0ZW1JbmRleCB0byB0aGUgZGVzaXJlZCBpc0VuYWJsZWQgc3RhdGUuXG4gICAgICogQHBhcmFtIGl0ZW1JbmRleCBJbmRleCBvZiB0aGUgbGlzdCBpdGVtXG4gICAgICogQHBhcmFtIGlzRW5hYmxlZCBTZXRzIHRoZSBsaXN0IGl0ZW0gdG8gZW5hYmxlZCBvciBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICBNRENMaXN0LnByb3RvdHlwZS5zZXRFbmFibGVkID0gZnVuY3Rpb24gKGl0ZW1JbmRleCwgaXNFbmFibGVkKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0RW5hYmxlZChpdGVtSW5kZXgsIGlzRW5hYmxlZCk7XG4gICAgfTtcbiAgICBNRENMaXN0LnByb3RvdHlwZS5nZXREZWZhdWx0Rm91bmRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gRE8gTk9UIElOTElORSB0aGlzIHZhcmlhYmxlLiBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgZm91bmRhdGlvbnMgdGFrZSBhIFBhcnRpYWw8TURDRm9vQWRhcHRlcj4uXG4gICAgICAgIC8vIFRvIGVuc3VyZSB3ZSBkb24ndCBhY2NpZGVudGFsbHkgb21pdCBhbnkgbWV0aG9kcywgd2UgbmVlZCBhIHNlcGFyYXRlLCBzdHJvbmdseSB0eXBlZCBhZGFwdGVyIHZhcmlhYmxlLlxuICAgICAgICB2YXIgYWRhcHRlciA9IHtcbiAgICAgICAgICAgIGFkZENsYXNzRm9yRWxlbWVudEluZGV4OiBmdW5jdGlvbiAoaW5kZXgsIGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gX3RoaXMubGlzdEVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9jdXNJdGVtQXRJbmRleDogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBfdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4OiBmdW5jdGlvbiAoaW5kZXgsIGF0dHIpIHsgcmV0dXJuIF90aGlzLmxpc3RFbGVtZW50c1tpbmRleF0uZ2V0QXR0cmlidXRlKGF0dHIpOyB9LFxuICAgICAgICAgICAgZ2V0Rm9jdXNlZEVsZW1lbnRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMubGlzdEVsZW1lbnRzLmluZGV4T2YoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7IH0sXG4gICAgICAgICAgICBnZXRMaXN0SXRlbUNvdW50OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5saXN0RWxlbWVudHMubGVuZ3RoOyB9LFxuICAgICAgICAgICAgaGFzQ2hlY2tib3hBdEluZGV4OiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdEl0ZW0gPSBfdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHJldHVybiAhIWxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5DSEVDS0JPWF9TRUxFQ1RPUik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGFzUmFkaW9BdEluZGV4OiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdEl0ZW0gPSBfdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHJldHVybiAhIWxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5SQURJT19TRUxFQ1RPUik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNDaGVja2JveENoZWNrZWRBdEluZGV4OiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdEl0ZW0gPSBfdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHZhciB0b2dnbGVFbCA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5DSEVDS0JPWF9TRUxFQ1RPUik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvZ2dsZUVsLmNoZWNrZWQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNGb2N1c0luc2lkZUxpc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMucm9vdF8uY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNSb290Rm9jdXNlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gX3RoaXMucm9vdF87IH0sXG4gICAgICAgICAgICBub3RpZnlBY3Rpb246IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoc3RyaW5ncy5BQ1RJT05fRVZFTlQsIHsgaW5kZXg6IGluZGV4IH0sIC8qKiBzaG91bGRCdWJibGUgKi8gdHJ1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3NGb3JFbGVtZW50SW5kZXg6IGZ1bmN0aW9uIChpbmRleCwgY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBfdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXg6IGZ1bmN0aW9uIChpbmRleCwgYXR0ciwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IF90aGlzLmxpc3RFbGVtZW50c1tpbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRDaGVja2VkQ2hlY2tib3hPclJhZGlvQXRJbmRleDogZnVuY3Rpb24gKGluZGV4LCBpc0NoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdEl0ZW0gPSBfdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHZhciB0b2dnbGVFbCA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5DSEVDS0JPWF9SQURJT19TRUxFQ1RPUik7XG4gICAgICAgICAgICAgICAgdG9nZ2xlRWwuY2hlY2tlZCA9IGlzQ2hlY2tlZDtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICAgICAgICAgICAgICBldmVudC5pbml0RXZlbnQoJ2NoYW5nZScsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIHRvZ2dsZUVsLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldFRhYkluZGV4Rm9yTGlzdEl0ZW1DaGlsZHJlbjogZnVuY3Rpb24gKGxpc3RJdGVtSW5kZXgsIHRhYkluZGV4VmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IF90aGlzLmxpc3RFbGVtZW50c1tsaXN0SXRlbUluZGV4XTtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdEl0ZW1DaGlsZHJlbiA9IFtdLnNsaWNlLmNhbGwoZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHN0cmluZ3MuQ0hJTERfRUxFTUVOVFNfVE9fVE9HR0xFX1RBQklOREVYKSk7XG4gICAgICAgICAgICAgICAgbGlzdEl0ZW1DaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gZWwuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIHRhYkluZGV4VmFsdWUpOyB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgTURDTGlzdEZvdW5kYXRpb24oYWRhcHRlcik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIGZpZ3VyZSBvdXQgd2hpY2ggbGlzdCBpdGVtIHRoaXMgZXZlbnQgaXMgdGFyZ2V0dGluZy4gT3IgcmV0dXJucyAtMSBpZlxuICAgICAqIHRoZXJlIGlzIG5vIGxpc3QgaXRlbVxuICAgICAqL1xuICAgIE1EQ0xpc3QucHJvdG90eXBlLmdldExpc3RJdGVtSW5kZXhfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgZXZlbnRUYXJnZXQgPSBldnQudGFyZ2V0O1xuICAgICAgICB2YXIgbmVhcmVzdFBhcmVudCA9IGNsb3Nlc3QoZXZlbnRUYXJnZXQsIFwiLlwiICsgY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1MgKyBcIiwgLlwiICsgY3NzQ2xhc3Nlcy5ST09UKTtcbiAgICAgICAgLy8gR2V0IHRoZSBpbmRleCBvZiB0aGUgZWxlbWVudCBpZiBpdCBpcyBhIGxpc3QgaXRlbS5cbiAgICAgICAgaWYgKG5lYXJlc3RQYXJlbnQgJiYgbWF0Y2hlcyhuZWFyZXN0UGFyZW50LCBcIi5cIiArIGNzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlzdEVsZW1lbnRzLmluZGV4T2YobmVhcmVzdFBhcmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXNlZCB0byBmaWd1cmUgb3V0IHdoaWNoIGVsZW1lbnQgd2FzIGNsaWNrZWQgYmVmb3JlIHNlbmRpbmcgdGhlIGV2ZW50IHRvIHRoZSBmb3VuZGF0aW9uLlxuICAgICAqL1xuICAgIE1EQ0xpc3QucHJvdG90eXBlLmhhbmRsZUZvY3VzSW5FdmVudF8gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0TGlzdEl0ZW1JbmRleF8oZXZ0KTtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVGb2N1c0luKGV2dCwgaW5kZXgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXNlZCB0byBmaWd1cmUgb3V0IHdoaWNoIGVsZW1lbnQgd2FzIGNsaWNrZWQgYmVmb3JlIHNlbmRpbmcgdGhlIGV2ZW50IHRvIHRoZSBmb3VuZGF0aW9uLlxuICAgICAqL1xuICAgIE1EQ0xpc3QucHJvdG90eXBlLmhhbmRsZUZvY3VzT3V0RXZlbnRfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldExpc3RJdGVtSW5kZXhfKGV2dCk7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uaGFuZGxlRm9jdXNPdXQoZXZ0LCBpbmRleCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIGZpZ3VyZSBvdXQgd2hpY2ggZWxlbWVudCB3YXMgZm9jdXNlZCB3aGVuIGtleWRvd24gZXZlbnQgb2NjdXJyZWQgYmVmb3JlIHNlbmRpbmcgdGhlIGV2ZW50IHRvIHRoZVxuICAgICAqIGZvdW5kYXRpb24uXG4gICAgICovXG4gICAgTURDTGlzdC5wcm90b3R5cGUuaGFuZGxlS2V5ZG93bkV2ZW50XyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRMaXN0SXRlbUluZGV4XyhldnQpO1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZ0LnRhcmdldDtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVLZXlkb3duKGV2dCwgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTUyksIGluZGV4KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVzZWQgdG8gZmlndXJlIG91dCB3aGljaCBlbGVtZW50IHdhcyBjbGlja2VkIGJlZm9yZSBzZW5kaW5nIHRoZSBldmVudCB0byB0aGUgZm91bmRhdGlvbi5cbiAgICAgKi9cbiAgICBNRENMaXN0LnByb3RvdHlwZS5oYW5kbGVDbGlja0V2ZW50XyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRMaXN0SXRlbUluZGV4XyhldnQpO1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZ0LnRhcmdldDtcbiAgICAgICAgLy8gVG9nZ2xlIHRoZSBjaGVja2JveCBvbmx5IGlmIGl0J3Mgbm90IHRoZSB0YXJnZXQgb2YgdGhlIGV2ZW50LCBvciB0aGUgY2hlY2tib3ggd2lsbCBoYXZlIDIgY2hhbmdlIGV2ZW50cy5cbiAgICAgICAgdmFyIHRvZ2dsZUNoZWNrYm94ID0gIW1hdGNoZXModGFyZ2V0LCBzdHJpbmdzLkNIRUNLQk9YX1JBRElPX1NFTEVDVE9SKTtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVDbGljayhpbmRleCwgdG9nZ2xlQ2hlY2tib3gpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ0xpc3Q7XG59KE1EQ0NvbXBvbmVudCkpO1xuZXhwb3J0IHsgTURDTGlzdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IENvcm5lciwgQ29ybmVyQml0LCBjc3NDbGFzc2VzLCBudW1iZXJzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENNZW51U3VyZmFjZUZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuaXNPcGVuXyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5pc1F1aWNrT3Blbl8gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaXNIb2lzdGVkRWxlbWVudF8gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaXNGaXhlZFBvc2l0aW9uXyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5vcGVuQW5pbWF0aW9uRW5kVGltZXJJZF8gPSAwO1xuICAgICAgICBfdGhpcy5jbG9zZUFuaW1hdGlvbkVuZFRpbWVySWRfID0gMDtcbiAgICAgICAgX3RoaXMuYW5pbWF0aW9uUmVxdWVzdElkXyA9IDA7XG4gICAgICAgIF90aGlzLmFuY2hvckNvcm5lcl8gPSBDb3JuZXIuVE9QX1NUQVJUO1xuICAgICAgICBfdGhpcy5hbmNob3JNYXJnaW5fID0geyB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDAsIGxlZnQ6IDAgfTtcbiAgICAgICAgX3RoaXMucG9zaXRpb25fID0geyB4OiAwLCB5OiAwIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVycztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbiwgXCJDb3JuZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBDb3JuZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENNZW51U3VyZmFjZUZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHNlZSB7QGxpbmsgTURDTWVudVN1cmZhY2VBZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVybiB0eXBlcy5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBoYXNBbmNob3I6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGlzRWxlbWVudEluQ29udGFpbmVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBpc0ZvY3VzZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGlzUnRsOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBnZXRJbm5lckRpbWVuc2lvbnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IGhlaWdodDogMCwgd2lkdGg6IDAgfSk7IH0sXG4gICAgICAgICAgICAgICAgZ2V0QW5jaG9yRGltZW5zaW9uczogZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgICAgICAgICBnZXRXaW5kb3dEaW1lbnNpb25zOiBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyBoZWlnaHQ6IDAsIHdpZHRoOiAwIH0pOyB9LFxuICAgICAgICAgICAgICAgIGdldEJvZHlEaW1lbnNpb25zOiBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyBoZWlnaHQ6IDAsIHdpZHRoOiAwIH0pOyB9LFxuICAgICAgICAgICAgICAgIGdldFdpbmRvd1Njcm9sbDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgeDogMCwgeTogMCB9KTsgfSxcbiAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldE1heEhlaWdodDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldFRyYW5zZm9ybU9yaWdpbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNhdmVGb2N1czogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlc3RvcmVGb2N1czogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeUNsb3NlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5T3BlbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLmNzc0NsYXNzZXMsIFJPT1QgPSBfYS5ST09ULCBPUEVOID0gX2EuT1BFTjtcbiAgICAgICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKFJPT1QpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoUk9PVCArIFwiIGNsYXNzIHJlcXVpcmVkIGluIHJvb3QgZWxlbWVudC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoT1BFTikpIHtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuXyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMub3BlbkFuaW1hdGlvbkVuZFRpbWVySWRfKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xvc2VBbmltYXRpb25FbmRUaW1lcklkXyk7XG4gICAgICAgIC8vIENhbmNlbCBhbnkgY3VycmVudGx5IHJ1bm5pbmcgYW5pbWF0aW9ucy5cbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25SZXF1ZXN0SWRfKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBjb3JuZXIgRGVmYXVsdCBhbmNob3IgY29ybmVyIGFsaWdubWVudCBvZiB0b3AtbGVmdCBtZW51IHN1cmZhY2UgY29ybmVyLlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0QW5jaG9yQ29ybmVyID0gZnVuY3Rpb24gKGNvcm5lcikge1xuICAgICAgICB0aGlzLmFuY2hvckNvcm5lcl8gPSBjb3JuZXI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gbWFyZ2luIFNldCBvZiBtYXJnaW4gdmFsdWVzIGZyb20gYW5jaG9yLlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0QW5jaG9yTWFyZ2luID0gZnVuY3Rpb24gKG1hcmdpbikge1xuICAgICAgICB0aGlzLmFuY2hvck1hcmdpbl8udG9wID0gbWFyZ2luLnRvcCB8fCAwO1xuICAgICAgICB0aGlzLmFuY2hvck1hcmdpbl8ucmlnaHQgPSBtYXJnaW4ucmlnaHQgfHwgMDtcbiAgICAgICAgdGhpcy5hbmNob3JNYXJnaW5fLmJvdHRvbSA9IG1hcmdpbi5ib3R0b20gfHwgMDtcbiAgICAgICAgdGhpcy5hbmNob3JNYXJnaW5fLmxlZnQgPSBtYXJnaW4ubGVmdCB8fCAwO1xuICAgIH07XG4gICAgLyoqIFVzZWQgdG8gaW5kaWNhdGUgaWYgdGhlIG1lbnUtc3VyZmFjZSBpcyBob2lzdGVkIHRvIHRoZSBib2R5LiAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0SXNIb2lzdGVkID0gZnVuY3Rpb24gKGlzSG9pc3RlZCkge1xuICAgICAgICB0aGlzLmlzSG9pc3RlZEVsZW1lbnRfID0gaXNIb2lzdGVkO1xuICAgIH07XG4gICAgLyoqIFVzZWQgdG8gc2V0IHRoZSBtZW51LXN1cmZhY2UgY2FsY3VsYXRpb25zIGJhc2VkIG9uIGEgZml4ZWQgcG9zaXRpb24gbWVudS4gKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLnNldEZpeGVkUG9zaXRpb24gPSBmdW5jdGlvbiAoaXNGaXhlZFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuaXNGaXhlZFBvc2l0aW9uXyA9IGlzRml4ZWRQb3NpdGlvbjtcbiAgICB9O1xuICAgIC8qKiBTZXRzIHRoZSBtZW51LXN1cmZhY2UgcG9zaXRpb24gb24gdGhlIHBhZ2UuICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRBYnNvbHV0ZVBvc2l0aW9uID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbl8ueCA9IHRoaXMuaXNGaW5pdGVfKHgpID8geCA6IDA7XG4gICAgICAgIHRoaXMucG9zaXRpb25fLnkgPSB0aGlzLmlzRmluaXRlXyh5KSA/IHkgOiAwO1xuICAgIH07XG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRRdWlja09wZW4gPSBmdW5jdGlvbiAocXVpY2tPcGVuKSB7XG4gICAgICAgIHRoaXMuaXNRdWlja09wZW5fID0gcXVpY2tPcGVuO1xuICAgIH07XG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5pc09wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzT3Blbl87XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBPcGVuIHRoZSBtZW51IHN1cmZhY2UuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNhdmVGb2N1cygpO1xuICAgICAgICBpZiAoIXRoaXMuaXNRdWlja09wZW5fKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkFOSU1BVElOR19PUEVOKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFuaW1hdGlvblJlcXVlc3RJZF8gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLmNzc0NsYXNzZXMuT1BFTik7XG4gICAgICAgICAgICBfdGhpcy5kaW1lbnNpb25zXyA9IF90aGlzLmFkYXB0ZXJfLmdldElubmVyRGltZW5zaW9ucygpO1xuICAgICAgICAgICAgX3RoaXMuYXV0b1Bvc2l0aW9uXygpO1xuICAgICAgICAgICAgaWYgKF90aGlzLmlzUXVpY2tPcGVuXykge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLm5vdGlmeU9wZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLm9wZW5BbmltYXRpb25FbmRUaW1lcklkXyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5vcGVuQW5pbWF0aW9uRW5kVGltZXJJZF8gPSAwO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BTklNQVRJTkdfT1BFTik7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLm5vdGlmeU9wZW4oKTtcbiAgICAgICAgICAgICAgICB9LCBudW1iZXJzLlRSQU5TSVRJT05fT1BFTl9EVVJBVElPTik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmlzT3Blbl8gPSB0cnVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2xvc2VzIHRoZSBtZW51IHN1cmZhY2UuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChza2lwUmVzdG9yZUZvY3VzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChza2lwUmVzdG9yZUZvY3VzID09PSB2b2lkIDApIHsgc2tpcFJlc3RvcmVGb2N1cyA9IGZhbHNlOyB9XG4gICAgICAgIGlmICghdGhpcy5pc1F1aWNrT3Blbl8pIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQU5JTUFUSU5HX0NMT1NFRCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5jc3NDbGFzc2VzLk9QRU4pO1xuICAgICAgICAgICAgaWYgKF90aGlzLmlzUXVpY2tPcGVuXykge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLm5vdGlmeUNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jbG9zZUFuaW1hdGlvbkVuZFRpbWVySWRfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNsb3NlQW5pbWF0aW9uRW5kVGltZXJJZF8gPSAwO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BTklNQVRJTkdfQ0xPU0VEKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ubm90aWZ5Q2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9LCBudW1iZXJzLlRSQU5TSVRJT05fQ0xPU0VfRFVSQVRJT04pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pc09wZW5fID0gZmFsc2U7XG4gICAgICAgIGlmICghc2tpcFJlc3RvcmVGb2N1cykge1xuICAgICAgICAgICAgdGhpcy5tYXliZVJlc3RvcmVGb2N1c18oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqIEhhbmRsZSBjbGlja3MgYW5kIGNsb3NlIGlmIG5vdCB3aXRoaW4gbWVudS1zdXJmYWNlIGVsZW1lbnQuICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVCb2R5Q2xpY2sgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBlbCA9IGV2dC50YXJnZXQ7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzRWxlbWVudEluQ29udGFpbmVyKGVsKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9O1xuICAgIC8qKiBIYW5kbGUga2V5cyB0aGF0IGNsb3NlIHRoZSBzdXJmYWNlLiAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlS2V5ZG93biA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIGtleUNvZGUgPSBldnQua2V5Q29kZSwga2V5ID0gZXZ0LmtleTtcbiAgICAgICAgdmFyIGlzRXNjYXBlID0ga2V5ID09PSAnRXNjYXBlJyB8fCBrZXlDb2RlID09PSAyNztcbiAgICAgICAgaWYgKGlzRXNjYXBlKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuYXV0b1Bvc2l0aW9uXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBDb21wdXRlIG1lYXN1cmVtZW50cyBmb3IgYXV0b3Bvc2l0aW9uIG1ldGhvZHMgcmV1c2UuXG4gICAgICAgIHRoaXMubWVhc3VyZW1lbnRzXyA9IHRoaXMuZ2V0QXV0b0xheW91dE1lYXN1cmVtZW50c18oKTtcbiAgICAgICAgdmFyIGNvcm5lciA9IHRoaXMuZ2V0T3JpZ2luQ29ybmVyXygpO1xuICAgICAgICB2YXIgbWF4TWVudVN1cmZhY2VIZWlnaHQgPSB0aGlzLmdldE1lbnVTdXJmYWNlTWF4SGVpZ2h0Xyhjb3JuZXIpO1xuICAgICAgICB2YXIgdmVydGljYWxBbGlnbm1lbnQgPSB0aGlzLmhhc0JpdF8oY29ybmVyLCBDb3JuZXJCaXQuQk9UVE9NKSA/ICdib3R0b20nIDogJ3RvcCc7XG4gICAgICAgIHZhciBob3Jpem9udGFsQWxpZ25tZW50ID0gdGhpcy5oYXNCaXRfKGNvcm5lciwgQ29ybmVyQml0LlJJR0hUKSA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgICAgIHZhciBob3Jpem9udGFsT2Zmc2V0ID0gdGhpcy5nZXRIb3Jpem9udGFsT3JpZ2luT2Zmc2V0Xyhjb3JuZXIpO1xuICAgICAgICB2YXIgdmVydGljYWxPZmZzZXQgPSB0aGlzLmdldFZlcnRpY2FsT3JpZ2luT2Zmc2V0Xyhjb3JuZXIpO1xuICAgICAgICB2YXIgX2IgPSB0aGlzLm1lYXN1cmVtZW50c18sIGFuY2hvclNpemUgPSBfYi5hbmNob3JTaXplLCBzdXJmYWNlU2l6ZSA9IF9iLnN1cmZhY2VTaXplO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSAoX2EgPSB7fSxcbiAgICAgICAgICAgIF9hW2hvcml6b250YWxBbGlnbm1lbnRdID0gaG9yaXpvbnRhbE9mZnNldCxcbiAgICAgICAgICAgIF9hW3ZlcnRpY2FsQWxpZ25tZW50XSA9IHZlcnRpY2FsT2Zmc2V0LFxuICAgICAgICAgICAgX2EpO1xuICAgICAgICAvLyBDZW50ZXIgYWxpZ24gd2hlbiBhbmNob3Igd2lkdGggaXMgY29tcGFyYWJsZSBvciBncmVhdGVyIHRoYW4gbWVudSBzdXJmYWNlLCBvdGhlcndpc2Uga2VlcCBjb3JuZXIuXG4gICAgICAgIGlmIChhbmNob3JTaXplLndpZHRoIC8gc3VyZmFjZVNpemUud2lkdGggPiBudW1iZXJzLkFOQ0hPUl9UT19NRU5VX1NVUkZBQ0VfV0lEVEhfUkFUSU8pIHtcbiAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQgPSAnY2VudGVyJztcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgbWVudS1zdXJmYWNlIGhhcyBiZWVuIGhvaXN0ZWQgdG8gdGhlIGJvZHksIGl0J3Mgbm8gbG9uZ2VyIHJlbGF0aXZlIHRvIHRoZSBhbmNob3IgZWxlbWVudFxuICAgICAgICBpZiAodGhpcy5pc0hvaXN0ZWRFbGVtZW50XyB8fCB0aGlzLmlzRml4ZWRQb3NpdGlvbl8pIHtcbiAgICAgICAgICAgIHRoaXMuYWRqdXN0UG9zaXRpb25Gb3JIb2lzdGVkRWxlbWVudF8ocG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0VHJhbnNmb3JtT3JpZ2luKGhvcml6b250YWxBbGlnbm1lbnQgKyBcIiBcIiArIHZlcnRpY2FsQWxpZ25tZW50KTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0TWF4SGVpZ2h0KG1heE1lbnVTdXJmYWNlSGVpZ2h0ID8gbWF4TWVudVN1cmZhY2VIZWlnaHQgKyAncHgnIDogJycpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiBNZWFzdXJlbWVudHMgdXNlZCB0byBwb3NpdGlvbiBtZW51IHN1cmZhY2UgcG9wdXAuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRBdXRvTGF5b3V0TWVhc3VyZW1lbnRzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFuY2hvclJlY3QgPSB0aGlzLmFkYXB0ZXJfLmdldEFuY2hvckRpbWVuc2lvbnMoKTtcbiAgICAgICAgdmFyIGJvZHlTaXplID0gdGhpcy5hZGFwdGVyXy5nZXRCb2R5RGltZW5zaW9ucygpO1xuICAgICAgICB2YXIgdmlld3BvcnRTaXplID0gdGhpcy5hZGFwdGVyXy5nZXRXaW5kb3dEaW1lbnNpb25zKCk7XG4gICAgICAgIHZhciB3aW5kb3dTY3JvbGwgPSB0aGlzLmFkYXB0ZXJfLmdldFdpbmRvd1Njcm9sbCgpO1xuICAgICAgICBpZiAoIWFuY2hvclJlY3QpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBQb3NpdGlvbmFsIHByb3BlcnRpZXMgYXJlIG1vcmUgcmVhZGFibGUgd2hlbiB0aGV5J3JlIGdyb3VwZWQgdG9nZXRoZXJcbiAgICAgICAgICAgIGFuY2hvclJlY3QgPSB7XG4gICAgICAgICAgICAgICAgdG9wOiB0aGlzLnBvc2l0aW9uXy55LFxuICAgICAgICAgICAgICAgIHJpZ2h0OiB0aGlzLnBvc2l0aW9uXy54LFxuICAgICAgICAgICAgICAgIGJvdHRvbTogdGhpcy5wb3NpdGlvbl8ueSxcbiAgICAgICAgICAgICAgICBsZWZ0OiB0aGlzLnBvc2l0aW9uXy54LFxuICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhbmNob3JTaXplOiBhbmNob3JSZWN0LFxuICAgICAgICAgICAgYm9keVNpemU6IGJvZHlTaXplLFxuICAgICAgICAgICAgc3VyZmFjZVNpemU6IHRoaXMuZGltZW5zaW9uc18sXG4gICAgICAgICAgICB2aWV3cG9ydERpc3RhbmNlOiB7XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIFBvc2l0aW9uYWwgcHJvcGVydGllcyBhcmUgbW9yZSByZWFkYWJsZSB3aGVuIHRoZXkncmUgZ3JvdXBlZCB0b2dldGhlclxuICAgICAgICAgICAgICAgIHRvcDogYW5jaG9yUmVjdC50b3AsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IHZpZXdwb3J0U2l6ZS53aWR0aCAtIGFuY2hvclJlY3QucmlnaHQsXG4gICAgICAgICAgICAgICAgYm90dG9tOiB2aWV3cG9ydFNpemUuaGVpZ2h0IC0gYW5jaG9yUmVjdC5ib3R0b20sXG4gICAgICAgICAgICAgICAgbGVmdDogYW5jaG9yUmVjdC5sZWZ0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZpZXdwb3J0U2l6ZTogdmlld3BvcnRTaXplLFxuICAgICAgICAgICAgd2luZG93U2Nyb2xsOiB3aW5kb3dTY3JvbGwsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgY29ybmVyIG9mIHRoZSBhbmNob3IgZnJvbSB3aGljaCB0byBhbmltYXRlIGFuZCBwb3NpdGlvbiB0aGUgbWVudSBzdXJmYWNlLlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0T3JpZ2luQ29ybmVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gRGVmYXVsdHM6IG9wZW4gZnJvbSB0aGUgdG9wIGxlZnQuXG4gICAgICAgIHZhciBjb3JuZXIgPSBDb3JuZXIuVE9QX0xFRlQ7XG4gICAgICAgIHZhciBfYSA9IHRoaXMubWVhc3VyZW1lbnRzXywgdmlld3BvcnREaXN0YW5jZSA9IF9hLnZpZXdwb3J0RGlzdGFuY2UsIGFuY2hvclNpemUgPSBfYS5hbmNob3JTaXplLCBzdXJmYWNlU2l6ZSA9IF9hLnN1cmZhY2VTaXplO1xuICAgICAgICB2YXIgaXNCb3R0b21BbGlnbmVkID0gdGhpcy5oYXNCaXRfKHRoaXMuYW5jaG9yQ29ybmVyXywgQ29ybmVyQml0LkJPVFRPTSk7XG4gICAgICAgIHZhciBhdmFpbGFibGVUb3AgPSBpc0JvdHRvbUFsaWduZWQgPyB2aWV3cG9ydERpc3RhbmNlLnRvcCArIGFuY2hvclNpemUuaGVpZ2h0ICsgdGhpcy5hbmNob3JNYXJnaW5fLmJvdHRvbVxuICAgICAgICAgICAgOiB2aWV3cG9ydERpc3RhbmNlLnRvcCArIHRoaXMuYW5jaG9yTWFyZ2luXy50b3A7XG4gICAgICAgIHZhciBhdmFpbGFibGVCb3R0b20gPSBpc0JvdHRvbUFsaWduZWQgPyB2aWV3cG9ydERpc3RhbmNlLmJvdHRvbSAtIHRoaXMuYW5jaG9yTWFyZ2luXy5ib3R0b21cbiAgICAgICAgICAgIDogdmlld3BvcnREaXN0YW5jZS5ib3R0b20gKyBhbmNob3JTaXplLmhlaWdodCAtIHRoaXMuYW5jaG9yTWFyZ2luXy50b3A7XG4gICAgICAgIHZhciB0b3BPdmVyZmxvdyA9IHN1cmZhY2VTaXplLmhlaWdodCAtIGF2YWlsYWJsZVRvcDtcbiAgICAgICAgdmFyIGJvdHRvbU92ZXJmbG93ID0gc3VyZmFjZVNpemUuaGVpZ2h0IC0gYXZhaWxhYmxlQm90dG9tO1xuICAgICAgICBpZiAoYm90dG9tT3ZlcmZsb3cgPiAwICYmIHRvcE92ZXJmbG93IDwgYm90dG9tT3ZlcmZsb3cpIHtcbiAgICAgICAgICAgIGNvcm5lciA9IHRoaXMuc2V0Qml0Xyhjb3JuZXIsIENvcm5lckJpdC5CT1RUT00pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc1J0bCA9IHRoaXMuYWRhcHRlcl8uaXNSdGwoKTtcbiAgICAgICAgdmFyIGlzRmxpcFJ0bCA9IHRoaXMuaGFzQml0Xyh0aGlzLmFuY2hvckNvcm5lcl8sIENvcm5lckJpdC5GTElQX1JUTCk7XG4gICAgICAgIHZhciBhdm9pZEhvcml6b250YWxPdmVybGFwID0gdGhpcy5oYXNCaXRfKHRoaXMuYW5jaG9yQ29ybmVyXywgQ29ybmVyQml0LlJJR0hUKTtcbiAgICAgICAgdmFyIGlzQWxpZ25lZFJpZ2h0ID0gKGF2b2lkSG9yaXpvbnRhbE92ZXJsYXAgJiYgIWlzUnRsKSB8fFxuICAgICAgICAgICAgKCFhdm9pZEhvcml6b250YWxPdmVybGFwICYmIGlzRmxpcFJ0bCAmJiBpc1J0bCk7XG4gICAgICAgIHZhciBhdmFpbGFibGVMZWZ0ID0gaXNBbGlnbmVkUmlnaHQgPyB2aWV3cG9ydERpc3RhbmNlLmxlZnQgKyBhbmNob3JTaXplLndpZHRoICsgdGhpcy5hbmNob3JNYXJnaW5fLnJpZ2h0IDpcbiAgICAgICAgICAgIHZpZXdwb3J0RGlzdGFuY2UubGVmdCArIHRoaXMuYW5jaG9yTWFyZ2luXy5sZWZ0O1xuICAgICAgICB2YXIgYXZhaWxhYmxlUmlnaHQgPSBpc0FsaWduZWRSaWdodCA/IHZpZXdwb3J0RGlzdGFuY2UucmlnaHQgLSB0aGlzLmFuY2hvck1hcmdpbl8ucmlnaHQgOlxuICAgICAgICAgICAgdmlld3BvcnREaXN0YW5jZS5yaWdodCArIGFuY2hvclNpemUud2lkdGggLSB0aGlzLmFuY2hvck1hcmdpbl8ubGVmdDtcbiAgICAgICAgdmFyIGxlZnRPdmVyZmxvdyA9IHN1cmZhY2VTaXplLndpZHRoIC0gYXZhaWxhYmxlTGVmdDtcbiAgICAgICAgdmFyIHJpZ2h0T3ZlcmZsb3cgPSBzdXJmYWNlU2l6ZS53aWR0aCAtIGF2YWlsYWJsZVJpZ2h0O1xuICAgICAgICBpZiAoKGxlZnRPdmVyZmxvdyA8IDAgJiYgaXNBbGlnbmVkUmlnaHQgJiYgaXNSdGwpIHx8XG4gICAgICAgICAgICAoYXZvaWRIb3Jpem9udGFsT3ZlcmxhcCAmJiAhaXNBbGlnbmVkUmlnaHQgJiYgbGVmdE92ZXJmbG93IDwgMCkgfHxcbiAgICAgICAgICAgIChyaWdodE92ZXJmbG93ID4gMCAmJiBsZWZ0T3ZlcmZsb3cgPCByaWdodE92ZXJmbG93KSkge1xuICAgICAgICAgICAgY29ybmVyID0gdGhpcy5zZXRCaXRfKGNvcm5lciwgQ29ybmVyQml0LlJJR0hUKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29ybmVyO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNvcm5lciBPcmlnaW4gY29ybmVyIG9mIHRoZSBtZW51IHN1cmZhY2UuXG4gICAgICogQHJldHVybiBNYXhpbXVtIGhlaWdodCBvZiB0aGUgbWVudSBzdXJmYWNlLCBiYXNlZCBvbiBhdmFpbGFibGUgc3BhY2UuIDAgaW5kaWNhdGVzIHNob3VsZCBub3QgYmUgc2V0LlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0TWVudVN1cmZhY2VNYXhIZWlnaHRfID0gZnVuY3Rpb24gKGNvcm5lcikge1xuICAgICAgICB2YXIgdmlld3BvcnREaXN0YW5jZSA9IHRoaXMubWVhc3VyZW1lbnRzXy52aWV3cG9ydERpc3RhbmNlO1xuICAgICAgICB2YXIgbWF4SGVpZ2h0ID0gMDtcbiAgICAgICAgdmFyIGlzQm90dG9tQWxpZ25lZCA9IHRoaXMuaGFzQml0Xyhjb3JuZXIsIENvcm5lckJpdC5CT1RUT00pO1xuICAgICAgICB2YXIgaXNCb3R0b21BbmNob3JlZCA9IHRoaXMuaGFzQml0Xyh0aGlzLmFuY2hvckNvcm5lcl8sIENvcm5lckJpdC5CT1RUT00pO1xuICAgICAgICB2YXIgTUFSR0lOX1RPX0VER0UgPSBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ubnVtYmVycy5NQVJHSU5fVE9fRURHRTtcbiAgICAgICAgLy8gV2hlbiBtYXhpbXVtIGhlaWdodCBpcyBub3Qgc3BlY2lmaWVkLCBpdCBpcyBoYW5kbGVkIGZyb20gQ1NTLlxuICAgICAgICBpZiAoaXNCb3R0b21BbGlnbmVkKSB7XG4gICAgICAgICAgICBtYXhIZWlnaHQgPSB2aWV3cG9ydERpc3RhbmNlLnRvcCArIHRoaXMuYW5jaG9yTWFyZ2luXy50b3AgLSBNQVJHSU5fVE9fRURHRTtcbiAgICAgICAgICAgIGlmICghaXNCb3R0b21BbmNob3JlZCkge1xuICAgICAgICAgICAgICAgIG1heEhlaWdodCArPSB0aGlzLm1lYXN1cmVtZW50c18uYW5jaG9yU2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtYXhIZWlnaHQgPVxuICAgICAgICAgICAgICAgIHZpZXdwb3J0RGlzdGFuY2UuYm90dG9tIC0gdGhpcy5hbmNob3JNYXJnaW5fLmJvdHRvbSArIHRoaXMubWVhc3VyZW1lbnRzXy5hbmNob3JTaXplLmhlaWdodCAtIE1BUkdJTl9UT19FREdFO1xuICAgICAgICAgICAgaWYgKGlzQm90dG9tQW5jaG9yZWQpIHtcbiAgICAgICAgICAgICAgICBtYXhIZWlnaHQgLT0gdGhpcy5tZWFzdXJlbWVudHNfLmFuY2hvclNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXhIZWlnaHQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gY29ybmVyIE9yaWdpbiBjb3JuZXIgb2YgdGhlIG1lbnUgc3VyZmFjZS5cbiAgICAgKiBAcmV0dXJuIEhvcml6b250YWwgb2Zmc2V0IG9mIG1lbnUgc3VyZmFjZSBvcmlnaW4gY29ybmVyIGZyb20gY29ycmVzcG9uZGluZyBhbmNob3IgY29ybmVyLlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0SG9yaXpvbnRhbE9yaWdpbk9mZnNldF8gPSBmdW5jdGlvbiAoY29ybmVyKSB7XG4gICAgICAgIHZhciBhbmNob3JTaXplID0gdGhpcy5tZWFzdXJlbWVudHNfLmFuY2hvclNpemU7XG4gICAgICAgIC8vIGlzUmlnaHRBbGlnbmVkIGNvcnJlc3BvbmRzIHRvIHVzaW5nIHRoZSAncmlnaHQnIHByb3BlcnR5IG9uIHRoZSBzdXJmYWNlLlxuICAgICAgICB2YXIgaXNSaWdodEFsaWduZWQgPSB0aGlzLmhhc0JpdF8oY29ybmVyLCBDb3JuZXJCaXQuUklHSFQpO1xuICAgICAgICB2YXIgYXZvaWRIb3Jpem9udGFsT3ZlcmxhcCA9IHRoaXMuaGFzQml0Xyh0aGlzLmFuY2hvckNvcm5lcl8sIENvcm5lckJpdC5SSUdIVCk7XG4gICAgICAgIGlmIChpc1JpZ2h0QWxpZ25lZCkge1xuICAgICAgICAgICAgdmFyIHJpZ2h0T2Zmc2V0ID0gYXZvaWRIb3Jpem9udGFsT3ZlcmxhcCA/IGFuY2hvclNpemUud2lkdGggLSB0aGlzLmFuY2hvck1hcmdpbl8ubGVmdCA6IHRoaXMuYW5jaG9yTWFyZ2luXy5yaWdodDtcbiAgICAgICAgICAgIC8vIEZvciBob2lzdGVkIG9yIGZpeGVkIGVsZW1lbnRzLCBhZGp1c3QgdGhlIG9mZnNldCBieSB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHZpZXdwb3J0IHdpZHRoIGFuZCBib2R5IHdpZHRoIHNvXG4gICAgICAgICAgICAvLyB3aGVuIHdlIGNhbGN1bGF0ZSB0aGUgcmlnaHQgdmFsdWUgKGBhZGp1c3RQb3NpdGlvbkZvckhvaXN0ZWRFbGVtZW50X2ApIGJhc2VkIG9uIHRoZSBlbGVtZW50IHBvc2l0aW9uLFxuICAgICAgICAgICAgLy8gdGhlIHJpZ2h0IHByb3BlcnR5IGlzIGNvcnJlY3QuXG4gICAgICAgICAgICBpZiAodGhpcy5pc0hvaXN0ZWRFbGVtZW50XyB8fCB0aGlzLmlzRml4ZWRQb3NpdGlvbl8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmlnaHRPZmZzZXQgLSAodGhpcy5tZWFzdXJlbWVudHNfLnZpZXdwb3J0U2l6ZS53aWR0aCAtIHRoaXMubWVhc3VyZW1lbnRzXy5ib2R5U2l6ZS53aWR0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmlnaHRPZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF2b2lkSG9yaXpvbnRhbE92ZXJsYXAgPyBhbmNob3JTaXplLndpZHRoIC0gdGhpcy5hbmNob3JNYXJnaW5fLnJpZ2h0IDogdGhpcy5hbmNob3JNYXJnaW5fLmxlZnQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gY29ybmVyIE9yaWdpbiBjb3JuZXIgb2YgdGhlIG1lbnUgc3VyZmFjZS5cbiAgICAgKiBAcmV0dXJuIFZlcnRpY2FsIG9mZnNldCBvZiBtZW51IHN1cmZhY2Ugb3JpZ2luIGNvcm5lciBmcm9tIGNvcnJlc3BvbmRpbmcgYW5jaG9yIGNvcm5lci5cbiAgICAgKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmdldFZlcnRpY2FsT3JpZ2luT2Zmc2V0XyA9IGZ1bmN0aW9uIChjb3JuZXIpIHtcbiAgICAgICAgdmFyIGFuY2hvclNpemUgPSB0aGlzLm1lYXN1cmVtZW50c18uYW5jaG9yU2l6ZTtcbiAgICAgICAgdmFyIGlzQm90dG9tQWxpZ25lZCA9IHRoaXMuaGFzQml0Xyhjb3JuZXIsIENvcm5lckJpdC5CT1RUT00pO1xuICAgICAgICB2YXIgYXZvaWRWZXJ0aWNhbE92ZXJsYXAgPSB0aGlzLmhhc0JpdF8odGhpcy5hbmNob3JDb3JuZXJfLCBDb3JuZXJCaXQuQk9UVE9NKTtcbiAgICAgICAgdmFyIHkgPSAwO1xuICAgICAgICBpZiAoaXNCb3R0b21BbGlnbmVkKSB7XG4gICAgICAgICAgICB5ID0gYXZvaWRWZXJ0aWNhbE92ZXJsYXAgPyBhbmNob3JTaXplLmhlaWdodCAtIHRoaXMuYW5jaG9yTWFyZ2luXy50b3AgOiAtdGhpcy5hbmNob3JNYXJnaW5fLmJvdHRvbTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHkgPSBhdm9pZFZlcnRpY2FsT3ZlcmxhcCA/IChhbmNob3JTaXplLmhlaWdodCArIHRoaXMuYW5jaG9yTWFyZ2luXy5ib3R0b20pIDogdGhpcy5hbmNob3JNYXJnaW5fLnRvcDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geTtcbiAgICB9O1xuICAgIC8qKiBDYWxjdWxhdGVzIHRoZSBvZmZzZXRzIGZvciBwb3NpdGlvbmluZyB0aGUgbWVudS1zdXJmYWNlIHdoZW4gdGhlIG1lbnUtc3VyZmFjZSBoYXMgYmVlbiBob2lzdGVkIHRvIHRoZSBib2R5LiAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuYWRqdXN0UG9zaXRpb25Gb3JIb2lzdGVkRWxlbWVudF8gPSBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgIHZhciBfYiA9IHRoaXMubWVhc3VyZW1lbnRzXywgd2luZG93U2Nyb2xsID0gX2Iud2luZG93U2Nyb2xsLCB2aWV3cG9ydERpc3RhbmNlID0gX2Iudmlld3BvcnREaXN0YW5jZTtcbiAgICAgICAgdmFyIHByb3BzID0gT2JqZWN0LmtleXMocG9zaXRpb24pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgcHJvcHNfMSA9IHRzbGliXzEuX192YWx1ZXMocHJvcHMpLCBwcm9wc18xXzEgPSBwcm9wc18xLm5leHQoKTsgIXByb3BzXzFfMS5kb25lOyBwcm9wc18xXzEgPSBwcm9wc18xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wID0gcHJvcHNfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHBvc2l0aW9uW3Byb3BdIHx8IDA7XG4gICAgICAgICAgICAgICAgLy8gSG9pc3RlZCBzdXJmYWNlcyBuZWVkIHRvIGhhdmUgdGhlIGFuY2hvciBlbGVtZW50cyBsb2NhdGlvbiBvbiB0aGUgcGFnZSBhZGRlZCB0byB0aGVcbiAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbiBwcm9wZXJ0aWVzIGZvciBwcm9wZXIgYWxpZ25tZW50IG9uIHRoZSBib2R5LlxuICAgICAgICAgICAgICAgIHZhbHVlICs9IHZpZXdwb3J0RGlzdGFuY2VbcHJvcF07XG4gICAgICAgICAgICAgICAgLy8gU3VyZmFjZXMgdGhhdCBhcmUgYWJzb2x1dGVseSBwb3NpdGlvbmVkIG5lZWQgdG8gaGF2ZSBhZGRpdGlvbmFsIGNhbGN1bGF0aW9ucyBmb3Igc2Nyb2xsXG4gICAgICAgICAgICAgICAgLy8gYW5kIGJvdHRvbSBwb3NpdGlvbmluZy5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNGaXhlZFBvc2l0aW9uXykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICs9IHdpbmRvd1Njcm9sbC55O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb3AgPT09ICdib3R0b20nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAtPSB3aW5kb3dTY3JvbGwueTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9wID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICs9IHdpbmRvd1Njcm9sbC54O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgeyAvLyBwcm9wID09PSAncmlnaHQnXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAtPSB3aW5kb3dTY3JvbGwueDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwb3NpdGlvbltwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNfMV8xICYmICFwcm9wc18xXzEuZG9uZSAmJiAoX2EgPSBwcm9wc18xLnJldHVybikpIF9hLmNhbGwocHJvcHNfMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRoZSBsYXN0IGZvY3VzZWQgZWxlbWVudCB3aGVuIHRoZSBtZW51IHN1cmZhY2Ugd2FzIG9wZW5lZCBzaG91bGQgcmVnYWluIGZvY3VzLCBpZiB0aGUgdXNlciBpc1xuICAgICAqIGZvY3VzZWQgb24gb3Igd2l0aGluIHRoZSBtZW51IHN1cmZhY2Ugd2hlbiBpdCBpcyBjbG9zZWQuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5tYXliZVJlc3RvcmVGb2N1c18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpc1Jvb3RGb2N1c2VkID0gdGhpcy5hZGFwdGVyXy5pc0ZvY3VzZWQoKTtcbiAgICAgICAgdmFyIGNoaWxkSGFzRm9jdXMgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIHRoaXMuYWRhcHRlcl8uaXNFbGVtZW50SW5Db250YWluZXIoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgICAgIGlmIChpc1Jvb3RGb2N1c2VkIHx8IGNoaWxkSGFzRm9jdXMpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVzdG9yZUZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuaGFzQml0XyA9IGZ1bmN0aW9uIChjb3JuZXIsIGJpdCkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbihjb3JuZXIgJiBiaXQpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWJpdHdpc2VcbiAgICB9O1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0Qml0XyA9IGZ1bmN0aW9uIChjb3JuZXIsIGJpdCkge1xuICAgICAgICByZXR1cm4gY29ybmVyIHwgYml0OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWJpdHdpc2VcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIGlzRmluaXRlIHRoYXQgZG9lc24ndCBmb3JjZSBjb252ZXJzaW9uIHRvIG51bWJlciB0eXBlLlxuICAgICAqIEVxdWl2YWxlbnQgdG8gTnVtYmVyLmlzRmluaXRlIGluIEVTMjAxNSwgd2hpY2ggaXMgbm90IHN1cHBvcnRlZCBpbiBJRS5cbiAgICAgKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmlzRmluaXRlXyA9IGZ1bmN0aW9uIChudW0pIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBudW0gPT09ICdudW1iZXInICYmIGlzRmluaXRlKG51bSk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENNZW51U3VyZmFjZUZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIGNhY2hlZENzc1RyYW5zZm9ybVByb3BlcnR5TmFtZV87XG4vKipcbiAqIFJldHVybnMgdGhlIG5hbWUgb2YgdGhlIGNvcnJlY3QgdHJhbnNmb3JtIHByb3BlcnR5IHRvIHVzZSBvbiB0aGUgY3VycmVudCBicm93c2VyLlxuICovXG5mdW5jdGlvbiBnZXRUcmFuc2Zvcm1Qcm9wZXJ0eU5hbWUoZ2xvYmFsT2JqLCBmb3JjZVJlZnJlc2gpIHtcbiAgICBpZiAoZm9yY2VSZWZyZXNoID09PSB2b2lkIDApIHsgZm9yY2VSZWZyZXNoID0gZmFsc2U7IH1cbiAgICBpZiAoY2FjaGVkQ3NzVHJhbnNmb3JtUHJvcGVydHlOYW1lXyA9PT0gdW5kZWZpbmVkIHx8IGZvcmNlUmVmcmVzaCkge1xuICAgICAgICB2YXIgZWwgPSBnbG9iYWxPYmouZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhY2hlZENzc1RyYW5zZm9ybVByb3BlcnR5TmFtZV8gPSAndHJhbnNmb3JtJyBpbiBlbC5zdHlsZSA/ICd0cmFuc2Zvcm0nIDogJ3dlYmtpdFRyYW5zZm9ybSc7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWRDc3NUcmFuc2Zvcm1Qcm9wZXJ0eU5hbWVfO1xufVxuZXhwb3J0IHsgZ2V0VHJhbnNmb3JtUHJvcGVydHlOYW1lIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0NvbXBvbmVudCB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJztcbnZhciBNRENNZW51U3VyZmFjZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENNZW51U3VyZmFjZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENNZW51U3VyZmFjZSgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBNRENNZW51U3VyZmFjZS5hdHRhY2hUbyA9IGZ1bmN0aW9uIChyb290KSB7XG4gICAgICAgIHJldHVybiBuZXcgTURDTWVudVN1cmZhY2Uocm9vdCk7XG4gICAgfTtcbiAgICBNRENNZW51U3VyZmFjZS5wcm90b3R5cGUuaW5pdGlhbFN5bmNXaXRoRE9NID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcGFyZW50RWwgPSB0aGlzLnJvb3RfLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHRoaXMuYW5jaG9yRWxlbWVudCA9IHBhcmVudEVsICYmIHBhcmVudEVsLmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzc2VzLkFOQ0hPUikgPyBwYXJlbnRFbCA6IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnJvb3RfLmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzc2VzLkZJWEVEKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRGaXhlZFBvc2l0aW9uKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlS2V5ZG93bl8gPSBmdW5jdGlvbiAoZXZ0KSB7IHJldHVybiBfdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVLZXlkb3duKGV2dCk7IH07XG4gICAgICAgIHRoaXMuaGFuZGxlQm9keUNsaWNrXyA9IGZ1bmN0aW9uIChldnQpIHsgcmV0dXJuIF90aGlzLmZvdW5kYXRpb25fLmhhbmRsZUJvZHlDbGljayhldnQpOyB9O1xuICAgICAgICB0aGlzLnJlZ2lzdGVyQm9keUNsaWNrTGlzdGVuZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF90aGlzLmhhbmRsZUJvZHlDbGlja18pOyB9O1xuICAgICAgICB0aGlzLmRlcmVnaXN0ZXJCb2R5Q2xpY2tMaXN0ZW5lcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3RoaXMuaGFuZGxlQm9keUNsaWNrXyk7IH07XG4gICAgICAgIHRoaXMubGlzdGVuKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlkb3duXyk7XG4gICAgICAgIHRoaXMubGlzdGVuKHN0cmluZ3MuT1BFTkVEX0VWRU5ULCB0aGlzLnJlZ2lzdGVyQm9keUNsaWNrTGlzdGVuZXJfKTtcbiAgICAgICAgdGhpcy5saXN0ZW4oc3RyaW5ncy5DTE9TRURfRVZFTlQsIHRoaXMuZGVyZWdpc3RlckJvZHlDbGlja0xpc3RlbmVyXyk7XG4gICAgfTtcbiAgICBNRENNZW51U3VyZmFjZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy51bmxpc3Rlbigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5ZG93bl8pO1xuICAgICAgICB0aGlzLnVubGlzdGVuKHN0cmluZ3MuT1BFTkVEX0VWRU5ULCB0aGlzLnJlZ2lzdGVyQm9keUNsaWNrTGlzdGVuZXJfKTtcbiAgICAgICAgdGhpcy51bmxpc3RlbihzdHJpbmdzLkNMT1NFRF9FVkVOVCwgdGhpcy5kZXJlZ2lzdGVyQm9keUNsaWNrTGlzdGVuZXJfKTtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBNRENNZW51U3VyZmFjZS5wcm90b3R5cGUuaXNPcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uXy5pc09wZW4oKTtcbiAgICB9O1xuICAgIE1EQ01lbnVTdXJmYWNlLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLm9wZW4oKTtcbiAgICB9O1xuICAgIE1EQ01lbnVTdXJmYWNlLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChza2lwUmVzdG9yZUZvY3VzKSB7XG4gICAgICAgIGlmIChza2lwUmVzdG9yZUZvY3VzID09PSB2b2lkIDApIHsgc2tpcFJlc3RvcmVGb2N1cyA9IGZhbHNlOyB9XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uY2xvc2Uoc2tpcFJlc3RvcmVGb2N1cyk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTWVudVN1cmZhY2UucHJvdG90eXBlLCBcInF1aWNrT3BlblwiLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKHF1aWNrT3Blbikge1xuICAgICAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRRdWlja09wZW4ocXVpY2tPcGVuKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgbWVudS1zdXJmYWNlIGZyb20gaXQncyBjdXJyZW50IGxvY2F0aW9uIGFuZCBhcHBlbmRzIGl0IHRvIHRoZVxuICAgICAqIGJvZHkgdG8gb3ZlcmNvbWUgYW55IG92ZXJmbG93OmhpZGRlbiBpc3N1ZXMuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2UucHJvdG90eXBlLmhvaXN0TWVudVRvQm9keSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnJvb3RfKTtcbiAgICAgICAgdGhpcy5zZXRJc0hvaXN0ZWQodHJ1ZSk7XG4gICAgfTtcbiAgICAvKiogU2V0cyB0aGUgZm91bmRhdGlvbiB0byB1c2UgcGFnZSBvZmZzZXRzIGZvciBhbiBwb3NpdGlvbmluZyB3aGVuIHRoZSBtZW51IGlzIGhvaXN0ZWQgdG8gdGhlIGJvZHkuICovXG4gICAgTURDTWVudVN1cmZhY2UucHJvdG90eXBlLnNldElzSG9pc3RlZCA9IGZ1bmN0aW9uIChpc0hvaXN0ZWQpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRJc0hvaXN0ZWQoaXNIb2lzdGVkKTtcbiAgICB9O1xuICAgIC8qKiBTZXRzIHRoZSBlbGVtZW50IHRoYXQgdGhlIG1lbnUtc3VyZmFjZSBpcyBhbmNob3JlZCB0by4gKi9cbiAgICBNRENNZW51U3VyZmFjZS5wcm90b3R5cGUuc2V0TWVudVN1cmZhY2VBbmNob3JFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5hbmNob3JFbGVtZW50ID0gZWxlbWVudDtcbiAgICB9O1xuICAgIC8qKiBTZXRzIHRoZSBtZW51LXN1cmZhY2UgdG8gcG9zaXRpb246IGZpeGVkLiAqL1xuICAgIE1EQ01lbnVTdXJmYWNlLnByb3RvdHlwZS5zZXRGaXhlZFBvc2l0aW9uID0gZnVuY3Rpb24gKGlzRml4ZWQpIHtcbiAgICAgICAgaWYgKGlzRml4ZWQpIHtcbiAgICAgICAgICAgIHRoaXMucm9vdF8uY2xhc3NMaXN0LmFkZChjc3NDbGFzc2VzLkZJWEVEKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjc3NDbGFzc2VzLkZJWEVEKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldEZpeGVkUG9zaXRpb24oaXNGaXhlZCk7XG4gICAgfTtcbiAgICAvKiogU2V0cyB0aGUgYWJzb2x1dGUgeC95IHBvc2l0aW9uIHRvIHBvc2l0aW9uIGJhc2VkIG9uLiBSZXF1aXJlcyB0aGUgbWVudSB0byBiZSBob2lzdGVkLiAqL1xuICAgIE1EQ01lbnVTdXJmYWNlLnByb3RvdHlwZS5zZXRBYnNvbHV0ZVBvc2l0aW9uID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRBYnNvbHV0ZVBvc2l0aW9uKHgsIHkpO1xuICAgICAgICB0aGlzLnNldElzSG9pc3RlZCh0cnVlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBjb3JuZXIgRGVmYXVsdCBhbmNob3IgY29ybmVyIGFsaWdubWVudCBvZiB0b3AtbGVmdCBzdXJmYWNlIGNvcm5lci5cbiAgICAgKi9cbiAgICBNRENNZW51U3VyZmFjZS5wcm90b3R5cGUuc2V0QW5jaG9yQ29ybmVyID0gZnVuY3Rpb24gKGNvcm5lcikge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldEFuY2hvckNvcm5lcihjb3JuZXIpO1xuICAgIH07XG4gICAgTURDTWVudVN1cmZhY2UucHJvdG90eXBlLnNldEFuY2hvck1hcmdpbiA9IGZ1bmN0aW9uIChtYXJnaW4pIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRBbmNob3JNYXJnaW4obWFyZ2luKTtcbiAgICB9O1xuICAgIE1EQ01lbnVTdXJmYWNlLnByb3RvdHlwZS5nZXREZWZhdWx0Rm91bmRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gRE8gTk9UIElOTElORSB0aGlzIHZhcmlhYmxlLiBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgZm91bmRhdGlvbnMgdGFrZSBhIFBhcnRpYWw8TURDRm9vQWRhcHRlcj4uXG4gICAgICAgIC8vIFRvIGVuc3VyZSB3ZSBkb24ndCBhY2NpZGVudGFsbHkgb21pdCBhbnkgbWV0aG9kcywgd2UgbmVlZCBhIHNlcGFyYXRlLCBzdHJvbmdseSB0eXBlZCBhZGFwdGVyIHZhcmlhYmxlLlxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICB2YXIgYWRhcHRlciA9IHtcbiAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290Xy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgaGFzQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIF90aGlzLnJvb3RfLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgaGFzQW5jaG9yOiBmdW5jdGlvbiAoKSB7IHJldHVybiAhIV90aGlzLmFuY2hvckVsZW1lbnQ7IH0sXG4gICAgICAgICAgICBub3RpZnlDbG9zZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZW1pdChNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uc3RyaW5ncy5DTE9TRURfRVZFTlQsIHt9KTsgfSxcbiAgICAgICAgICAgIG5vdGlmeU9wZW46IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmVtaXQoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnN0cmluZ3MuT1BFTkVEX0VWRU5ULCB7fSk7IH0sXG4gICAgICAgICAgICBpc0VsZW1lbnRJbkNvbnRhaW5lcjogZnVuY3Rpb24gKGVsKSB7IHJldHVybiBfdGhpcy5yb290Xy5jb250YWlucyhlbCk7IH0sXG4gICAgICAgICAgICBpc1J0bDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZShfdGhpcy5yb290XykuZ2V0UHJvcGVydHlWYWx1ZSgnZGlyZWN0aW9uJykgPT09ICdydGwnOyB9LFxuICAgICAgICAgICAgc2V0VHJhbnNmb3JtT3JpZ2luOiBmdW5jdGlvbiAob3JpZ2luKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3BlcnR5TmFtZSA9IHV0aWwuZ2V0VHJhbnNmb3JtUHJvcGVydHlOYW1lKHdpbmRvdykgKyBcIi1vcmlnaW5cIjtcbiAgICAgICAgICAgICAgICBfdGhpcy5yb290Xy5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wZXJ0eU5hbWUsIG9yaWdpbik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNGb2N1c2VkOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBfdGhpcy5yb290XzsgfSxcbiAgICAgICAgICAgIHNhdmVGb2N1czogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnByZXZpb3VzRm9jdXNfID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXN0b3JlRm9jdXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMucm9vdF8uY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLnByZXZpb3VzRm9jdXNfICYmIF90aGlzLnByZXZpb3VzRm9jdXNfLmZvY3VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5wcmV2aW91c0ZvY3VzXy5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldElubmVyRGltZW5zaW9uczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHdpZHRoOiBfdGhpcy5yb290Xy5vZmZzZXRXaWR0aCwgaGVpZ2h0OiBfdGhpcy5yb290Xy5vZmZzZXRIZWlnaHQgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRBbmNob3JEaW1lbnNpb25zOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5hbmNob3JFbGVtZW50ID8gX3RoaXMuYW5jaG9yRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IG51bGw7IH0sXG4gICAgICAgICAgICBnZXRXaW5kb3dEaW1lbnNpb25zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldEJvZHlEaW1lbnNpb25zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgd2lkdGg6IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGhlaWdodDogZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRXaW5kb3dTY3JvbGw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB4OiB3aW5kb3cucGFnZVhPZmZzZXQsIHk6IHdpbmRvdy5wYWdlWU9mZnNldCB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldFBvc2l0aW9uOiBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yb290Xy5zdHlsZS5sZWZ0ID0gJ2xlZnQnIGluIHBvc2l0aW9uID8gcG9zaXRpb24ubGVmdCArIFwicHhcIiA6ICcnO1xuICAgICAgICAgICAgICAgIF90aGlzLnJvb3RfLnN0eWxlLnJpZ2h0ID0gJ3JpZ2h0JyBpbiBwb3NpdGlvbiA/IHBvc2l0aW9uLnJpZ2h0ICsgXCJweFwiIDogJyc7XG4gICAgICAgICAgICAgICAgX3RoaXMucm9vdF8uc3R5bGUudG9wID0gJ3RvcCcgaW4gcG9zaXRpb24gPyBwb3NpdGlvbi50b3AgKyBcInB4XCIgOiAnJztcbiAgICAgICAgICAgICAgICBfdGhpcy5yb290Xy5zdHlsZS5ib3R0b20gPSAnYm90dG9tJyBpbiBwb3NpdGlvbiA/IHBvc2l0aW9uLmJvdHRvbSArIFwicHhcIiA6ICcnO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldE1heEhlaWdodDogZnVuY3Rpb24gKGhlaWdodCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnJvb3RfLnN0eWxlLm1heEhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIHJldHVybiBuZXcgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uKGFkYXB0ZXIpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ01lbnVTdXJmYWNlO1xufShNRENDb21wb25lbnQpKTtcbmV4cG9ydCB7IE1EQ01lbnVTdXJmYWNlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBNRU5VX1NFTEVDVEVEX0xJU1RfSVRFTTogJ21kYy1tZW51LWl0ZW0tLXNlbGVjdGVkJyxcbiAgICBNRU5VX1NFTEVDVElPTl9HUk9VUDogJ21kYy1tZW51X19zZWxlY3Rpb24tZ3JvdXAnLFxuICAgIFJPT1Q6ICdtZGMtbWVudScsXG59O1xudmFyIHN0cmluZ3MgPSB7XG4gICAgQVJJQV9DSEVDS0VEX0FUVFI6ICdhcmlhLWNoZWNrZWQnLFxuICAgIEFSSUFfRElTQUJMRURfQVRUUjogJ2FyaWEtZGlzYWJsZWQnLFxuICAgIENIRUNLQk9YX1NFTEVDVE9SOiAnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyxcbiAgICBMSVNUX1NFTEVDVE9SOiAnLm1kYy1saXN0JyxcbiAgICBTRUxFQ1RFRF9FVkVOVDogJ01EQ01lbnU6c2VsZWN0ZWQnLFxufTtcbnZhciBudW1iZXJzID0ge1xuICAgIEZPQ1VTX1JPT1RfSU5ERVg6IC0xLFxufTtcbnZhciBEZWZhdWx0Rm9jdXNTdGF0ZTtcbihmdW5jdGlvbiAoRGVmYXVsdEZvY3VzU3RhdGUpIHtcbiAgICBEZWZhdWx0Rm9jdXNTdGF0ZVtEZWZhdWx0Rm9jdXNTdGF0ZVtcIk5PTkVcIl0gPSAwXSA9IFwiTk9ORVwiO1xuICAgIERlZmF1bHRGb2N1c1N0YXRlW0RlZmF1bHRGb2N1c1N0YXRlW1wiTElTVF9ST09UXCJdID0gMV0gPSBcIkxJU1RfUk9PVFwiO1xuICAgIERlZmF1bHRGb2N1c1N0YXRlW0RlZmF1bHRGb2N1c1N0YXRlW1wiRklSU1RfSVRFTVwiXSA9IDJdID0gXCJGSVJTVF9JVEVNXCI7XG4gICAgRGVmYXVsdEZvY3VzU3RhdGVbRGVmYXVsdEZvY3VzU3RhdGVbXCJMQVNUX0lURU1cIl0gPSAzXSA9IFwiTEFTVF9JVEVNXCI7XG59KShEZWZhdWx0Rm9jdXNTdGF0ZSB8fCAoRGVmYXVsdEZvY3VzU3RhdGUgPSB7fSkpO1xuZXhwb3J0IHsgY3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVycywgRGVmYXVsdEZvY3VzU3RhdGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzIGFzIGxpc3RDc3NDbGFzc2VzIH0gZnJvbSAnQG1hdGVyaWFsL2xpc3QvY29uc3RhbnRzJztcbmltcG9ydCB7IE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9tZW51LXN1cmZhY2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBEZWZhdWx0Rm9jdXNTdGF0ZSwgbnVtYmVycywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBNRENNZW51Rm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENNZW51Rm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENNZW51Rm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ01lbnVGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuY2xvc2VBbmltYXRpb25FbmRUaW1lcklkXyA9IDA7XG4gICAgICAgIF90aGlzLmRlZmF1bHRGb2N1c1N0YXRlXyA9IERlZmF1bHRGb2N1c1N0YXRlLkxJU1RfUk9PVDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTWVudUZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENNZW51Rm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ01lbnVGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTWVudUZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHNlZSB7QGxpbmsgTURDTWVudUFkYXB0ZXJ9IGZvciB0eXBpbmcgaW5mb3JtYXRpb24gb24gcGFyYW1ldGVycyBhbmQgcmV0dXJuIHR5cGVzLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzc1RvRWxlbWVudEF0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzc0Zyb21FbGVtZW50QXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGFkZEF0dHJpYnV0ZVRvRWxlbWVudEF0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVBdHRyaWJ1dGVGcm9tRWxlbWVudEF0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBlbGVtZW50Q29udGFpbnNDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgY2xvc2VTdXJmYWNlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZ2V0RWxlbWVudEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiAtMTsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlTZWxlY3RlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldE1lbnVJdGVtQ291bnQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gICAgICAgICAgICAgICAgZm9jdXNJdGVtQXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGZvY3VzTGlzdFJvb3Q6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBnZXRTZWxlY3RlZFNpYmxpbmdPZkl0ZW1BdEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiAtMTsgfSxcbiAgICAgICAgICAgICAgICBpc1NlbGVjdGFibGVJdGVtQXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDTWVudUZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNsb3NlQW5pbWF0aW9uRW5kVGltZXJJZF8pIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsb3NlQW5pbWF0aW9uRW5kVGltZXJJZF8pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uY2xvc2VTdXJmYWNlKCk7XG4gICAgfTtcbiAgICBNRENNZW51Rm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlS2V5ZG93biA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIGtleSA9IGV2dC5rZXksIGtleUNvZGUgPSBldnQua2V5Q29kZTtcbiAgICAgICAgdmFyIGlzVGFiID0ga2V5ID09PSAnVGFiJyB8fCBrZXlDb2RlID09PSA5O1xuICAgICAgICBpZiAoaXNUYWIpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uY2xvc2VTdXJmYWNlKC8qKiBza2lwUmVzdG9yZUZvY3VzICovIHRydWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENNZW51Rm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlSXRlbUFjdGlvbiA9IGZ1bmN0aW9uIChsaXN0SXRlbSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmFkYXB0ZXJfLmdldEVsZW1lbnRJbmRleChsaXN0SXRlbSk7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeVNlbGVjdGVkKHsgaW5kZXg6IGluZGV4IH0pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmNsb3NlU3VyZmFjZSgpO1xuICAgICAgICAvLyBXYWl0IGZvciB0aGUgbWVudSB0byBjbG9zZSBiZWZvcmUgYWRkaW5nL3JlbW92aW5nIGNsYXNzZXMgdGhhdCBhZmZlY3Qgc3R5bGVzLlxuICAgICAgICB0aGlzLmNsb3NlQW5pbWF0aW9uRW5kVGltZXJJZF8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFJlY29tcHV0ZSB0aGUgaW5kZXggaW4gY2FzZSB0aGUgbWVudSBjb250ZW50cyBoYXZlIGNoYW5nZWQuXG4gICAgICAgICAgICB2YXIgcmVjb21wdXRlZEluZGV4ID0gX3RoaXMuYWRhcHRlcl8uZ2V0RWxlbWVudEluZGV4KGxpc3RJdGVtKTtcbiAgICAgICAgICAgIGlmIChfdGhpcy5hZGFwdGVyXy5pc1NlbGVjdGFibGVJdGVtQXRJbmRleChyZWNvbXB1dGVkSW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U2VsZWN0ZWRJbmRleChyZWNvbXB1dGVkSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ubnVtYmVycy5UUkFOU0lUSU9OX0NMT1NFX0RVUkFUSU9OKTtcbiAgICB9O1xuICAgIE1EQ01lbnVGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVNZW51U3VyZmFjZU9wZW5lZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmRlZmF1bHRGb2N1c1N0YXRlXykge1xuICAgICAgICAgICAgY2FzZSBEZWZhdWx0Rm9jdXNTdGF0ZS5GSVJTVF9JVEVNOlxuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uZm9jdXNJdGVtQXRJbmRleCgwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGVmYXVsdEZvY3VzU3RhdGUuTEFTVF9JVEVNOlxuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uZm9jdXNJdGVtQXRJbmRleCh0aGlzLmFkYXB0ZXJfLmdldE1lbnVJdGVtQ291bnQoKSAtIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEZWZhdWx0Rm9jdXNTdGF0ZS5OT05FOlxuICAgICAgICAgICAgICAgIC8vIERvIG5vdGhpbmcuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uZm9jdXNMaXN0Um9vdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIGRlZmF1bHQgZm9jdXMgc3RhdGUgd2hlcmUgdGhlIG1lbnUgc2hvdWxkIGZvY3VzIGV2ZXJ5IHRpbWUgd2hlbiBtZW51XG4gICAgICogaXMgb3BlbmVkLiBGb2N1c2VzIHRoZSBsaXN0IHJvb3QgKGBEZWZhdWx0Rm9jdXNTdGF0ZS5MSVNUX1JPT1RgKSBlbGVtZW50IGJ5XG4gICAgICogZGVmYXVsdC5cbiAgICAgKi9cbiAgICBNRENNZW51Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0RGVmYXVsdEZvY3VzU3RhdGUgPSBmdW5jdGlvbiAoZm9jdXNTdGF0ZSkge1xuICAgICAgICB0aGlzLmRlZmF1bHRGb2N1c1N0YXRlXyA9IGZvY3VzU3RhdGU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZWxlY3RzIHRoZSBsaXN0IGl0ZW0gYXQgYGluZGV4YCB3aXRoaW4gdGhlIG1lbnUuXG4gICAgICogQHBhcmFtIGluZGV4IEluZGV4IG9mIGxpc3QgaXRlbSB3aXRoaW4gdGhlIG1lbnUuXG4gICAgICovXG4gICAgTURDTWVudUZvdW5kYXRpb24ucHJvdG90eXBlLnNldFNlbGVjdGVkSW5kZXggPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0ZWRJbmRleF8oaW5kZXgpO1xuICAgICAgICBpZiAoIXRoaXMuYWRhcHRlcl8uaXNTZWxlY3RhYmxlSXRlbUF0SW5kZXgoaW5kZXgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01EQ01lbnVGb3VuZGF0aW9uOiBObyBzZWxlY3Rpb24gZ3JvdXAgYXQgc3BlY2lmaWVkIGluZGV4LicpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcmV2U2VsZWN0ZWRJbmRleCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2VsZWN0ZWRTaWJsaW5nT2ZJdGVtQXRJbmRleChpbmRleCk7XG4gICAgICAgIGlmIChwcmV2U2VsZWN0ZWRJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUF0dHJpYnV0ZUZyb21FbGVtZW50QXRJbmRleChwcmV2U2VsZWN0ZWRJbmRleCwgc3RyaW5ncy5BUklBX0NIRUNLRURfQVRUUik7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzRnJvbUVsZW1lbnRBdEluZGV4KHByZXZTZWxlY3RlZEluZGV4LCBjc3NDbGFzc2VzLk1FTlVfU0VMRUNURURfTElTVF9JVEVNKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzVG9FbGVtZW50QXRJbmRleChpbmRleCwgY3NzQ2xhc3Nlcy5NRU5VX1NFTEVDVEVEX0xJU1RfSVRFTSk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQXR0cmlidXRlVG9FbGVtZW50QXRJbmRleChpbmRleCwgc3RyaW5ncy5BUklBX0NIRUNLRURfQVRUUiwgJ3RydWUnKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGVuYWJsZWQgc3RhdGUgdG8gaXNFbmFibGVkIGZvciB0aGUgbWVudSBpdGVtIGF0IHRoZSBnaXZlbiBpbmRleC5cbiAgICAgKiBAcGFyYW0gaW5kZXggSW5kZXggb2YgdGhlIG1lbnUgaXRlbVxuICAgICAqIEBwYXJhbSBpc0VuYWJsZWQgVGhlIGRlc2lyZWQgZW5hYmxlZCBzdGF0ZSBvZiB0aGUgbWVudSBpdGVtLlxuICAgICAqL1xuICAgIE1EQ01lbnVGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRFbmFibGVkID0gZnVuY3Rpb24gKGluZGV4LCBpc0VuYWJsZWQpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0ZWRJbmRleF8oaW5kZXgpO1xuICAgICAgICBpZiAoaXNFbmFibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzRnJvbUVsZW1lbnRBdEluZGV4KGluZGV4LCBsaXN0Q3NzQ2xhc3Nlcy5MSVNUX0lURU1fRElTQUJMRURfQ0xBU1MpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRBdHRyaWJ1dGVUb0VsZW1lbnRBdEluZGV4KGluZGV4LCBzdHJpbmdzLkFSSUFfRElTQUJMRURfQVRUUiwgJ2ZhbHNlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzVG9FbGVtZW50QXRJbmRleChpbmRleCwgbGlzdENzc0NsYXNzZXMuTElTVF9JVEVNX0RJU0FCTEVEX0NMQVNTKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQXR0cmlidXRlVG9FbGVtZW50QXRJbmRleChpbmRleCwgc3RyaW5ncy5BUklBX0RJU0FCTEVEX0FUVFIsICd0cnVlJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ01lbnVGb3VuZGF0aW9uLnByb3RvdHlwZS52YWxpZGF0ZWRJbmRleF8gPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdmFyIG1lbnVTaXplID0gdGhpcy5hZGFwdGVyXy5nZXRNZW51SXRlbUNvdW50KCk7XG4gICAgICAgIHZhciBpc0luZGV4SW5SYW5nZSA9IGluZGV4ID49IDAgJiYgaW5kZXggPCBtZW51U2l6ZTtcbiAgICAgICAgaWYgKCFpc0luZGV4SW5SYW5nZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNRENNZW51Rm91bmRhdGlvbjogTm8gbGlzdCBpdGVtIGF0IHNwZWNpZmllZCBpbmRleC4nKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ01lbnVGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENNZW51Rm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ01lbnVGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENDb21wb25lbnQgfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgY2xvc2VzdCB9IGZyb20gJ0BtYXRlcmlhbC9kb20vcG9ueWZpbGwnO1xuaW1wb3J0IHsgTURDTGlzdCB9IGZyb20gJ0BtYXRlcmlhbC9saXN0L2NvbXBvbmVudCc7XG5pbXBvcnQgeyBNRENMaXN0Rm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9saXN0L2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgTURDTWVudVN1cmZhY2UgfSBmcm9tICdAbWF0ZXJpYWwvbWVudS1zdXJmYWNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvbWVudS1zdXJmYWNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3Nlcywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IE1EQ01lbnVGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uJztcbnZhciBNRENNZW51ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ01lbnUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDTWVudSgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBNRENNZW51LmF0dGFjaFRvID0gZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNRENNZW51KHJvb3QpO1xuICAgIH07XG4gICAgTURDTWVudS5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChtZW51U3VyZmFjZUZhY3RvcnksIGxpc3RGYWN0b3J5KSB7XG4gICAgICAgIGlmIChtZW51U3VyZmFjZUZhY3RvcnkgPT09IHZvaWQgMCkgeyBtZW51U3VyZmFjZUZhY3RvcnkgPSBmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIG5ldyBNRENNZW51U3VyZmFjZShlbCk7IH07IH1cbiAgICAgICAgaWYgKGxpc3RGYWN0b3J5ID09PSB2b2lkIDApIHsgbGlzdEZhY3RvcnkgPSBmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIG5ldyBNRENMaXN0KGVsKTsgfTsgfVxuICAgICAgICB0aGlzLm1lbnVTdXJmYWNlRmFjdG9yeV8gPSBtZW51U3VyZmFjZUZhY3Rvcnk7XG4gICAgICAgIHRoaXMubGlzdEZhY3RvcnlfID0gbGlzdEZhY3Rvcnk7XG4gICAgfTtcbiAgICBNRENNZW51LnByb3RvdHlwZS5pbml0aWFsU3luY1dpdGhET00gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMubWVudVN1cmZhY2VfID0gdGhpcy5tZW51U3VyZmFjZUZhY3RvcnlfKHRoaXMucm9vdF8pO1xuICAgICAgICB2YXIgbGlzdCA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihzdHJpbmdzLkxJU1RfU0VMRUNUT1IpO1xuICAgICAgICBpZiAobGlzdCkge1xuICAgICAgICAgICAgdGhpcy5saXN0XyA9IHRoaXMubGlzdEZhY3RvcnlfKGxpc3QpO1xuICAgICAgICAgICAgdGhpcy5saXN0Xy53cmFwRm9jdXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5saXN0XyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVLZXlkb3duXyA9IGZ1bmN0aW9uIChldnQpIHsgcmV0dXJuIF90aGlzLmZvdW5kYXRpb25fLmhhbmRsZUtleWRvd24oZXZ0KTsgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVJdGVtQWN0aW9uXyA9IGZ1bmN0aW9uIChldnQpIHsgcmV0dXJuIF90aGlzLmZvdW5kYXRpb25fLmhhbmRsZUl0ZW1BY3Rpb24oX3RoaXMuaXRlbXNbZXZ0LmRldGFpbC5pbmRleF0pOyB9O1xuICAgICAgICB0aGlzLmhhbmRsZU1lbnVTdXJmYWNlT3BlbmVkXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmZvdW5kYXRpb25fLmhhbmRsZU1lbnVTdXJmYWNlT3BlbmVkKCk7IH07XG4gICAgICAgIHRoaXMubWVudVN1cmZhY2VfLmxpc3RlbihNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uc3RyaW5ncy5PUEVORURfRVZFTlQsIHRoaXMuaGFuZGxlTWVudVN1cmZhY2VPcGVuZWRfKTtcbiAgICAgICAgdGhpcy5saXN0ZW4oJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd25fKTtcbiAgICAgICAgdGhpcy5saXN0ZW4oTURDTGlzdEZvdW5kYXRpb24uc3RyaW5ncy5BQ1RJT05fRVZFTlQsIHRoaXMuaGFuZGxlSXRlbUFjdGlvbl8pO1xuICAgIH07XG4gICAgTURDTWVudS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMubGlzdF8pIHtcbiAgICAgICAgICAgIHRoaXMubGlzdF8uZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWVudVN1cmZhY2VfLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5tZW51U3VyZmFjZV8udW5saXN0ZW4oTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnN0cmluZ3MuT1BFTkVEX0VWRU5ULCB0aGlzLmhhbmRsZU1lbnVTdXJmYWNlT3BlbmVkXyk7XG4gICAgICAgIHRoaXMudW5saXN0ZW4oJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd25fKTtcbiAgICAgICAgdGhpcy51bmxpc3RlbihNRENMaXN0Rm91bmRhdGlvbi5zdHJpbmdzLkFDVElPTl9FVkVOVCwgdGhpcy5oYW5kbGVJdGVtQWN0aW9uXyk7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ01lbnUucHJvdG90eXBlLCBcIm9wZW5cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1lbnVTdXJmYWNlXy5pc09wZW4oKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWVudVN1cmZhY2VfLm9wZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubWVudVN1cmZhY2VfLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENNZW51LnByb3RvdHlwZSwgXCJ3cmFwRm9jdXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RfID8gdGhpcy5saXN0Xy53cmFwRm9jdXMgOiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RfKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0Xy53cmFwRm9jdXMgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ01lbnUucHJvdG90eXBlLCBcIml0ZW1zXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybiB0aGUgaXRlbXMgd2l0aGluIHRoZSBtZW51LiBOb3RlIHRoYXQgdGhpcyBvbmx5IGNvbnRhaW5zIHRoZSBzZXQgb2YgZWxlbWVudHMgd2l0aGluXG4gICAgICAgICAqIHRoZSBpdGVtcyBjb250YWluZXIgdGhhdCBhcmUgcHJvcGVyIGxpc3QgaXRlbXMsIGFuZCBub3Qgc3VwcGxlbWVudGFsIC8gcHJlc2VudGF0aW9uYWwgRE9NXG4gICAgICAgICAqIGVsZW1lbnRzLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saXN0XyA/IHRoaXMubGlzdF8ubGlzdEVsZW1lbnRzIDogW107XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENNZW51LnByb3RvdHlwZSwgXCJxdWlja09wZW5cIiwge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChxdWlja09wZW4pIHtcbiAgICAgICAgICAgIHRoaXMubWVudVN1cmZhY2VfLnF1aWNrT3BlbiA9IHF1aWNrT3BlbjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogU2V0cyBkZWZhdWx0IGZvY3VzIHN0YXRlIHdoZXJlIHRoZSBtZW51IHNob3VsZCBmb2N1cyBldmVyeSB0aW1lIHdoZW4gbWVudVxuICAgICAqIGlzIG9wZW5lZC4gRm9jdXNlcyB0aGUgbGlzdCByb290IChgRGVmYXVsdEZvY3VzU3RhdGUuTElTVF9ST09UYCkgZWxlbWVudCBieVxuICAgICAqIGRlZmF1bHQuXG4gICAgICogQHBhcmFtIGZvY3VzU3RhdGUgRGVmYXVsdCBmb2N1cyBzdGF0ZS5cbiAgICAgKi9cbiAgICBNRENNZW51LnByb3RvdHlwZS5zZXREZWZhdWx0Rm9jdXNTdGF0ZSA9IGZ1bmN0aW9uIChmb2N1c1N0YXRlKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0RGVmYXVsdEZvY3VzU3RhdGUoZm9jdXNTdGF0ZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gY29ybmVyIERlZmF1bHQgYW5jaG9yIGNvcm5lciBhbGlnbm1lbnQgb2YgdG9wLWxlZnQgbWVudSBjb3JuZXIuXG4gICAgICovXG4gICAgTURDTWVudS5wcm90b3R5cGUuc2V0QW5jaG9yQ29ybmVyID0gZnVuY3Rpb24gKGNvcm5lcikge1xuICAgICAgICB0aGlzLm1lbnVTdXJmYWNlXy5zZXRBbmNob3JDb3JuZXIoY29ybmVyKTtcbiAgICB9O1xuICAgIE1EQ01lbnUucHJvdG90eXBlLnNldEFuY2hvck1hcmdpbiA9IGZ1bmN0aW9uIChtYXJnaW4pIHtcbiAgICAgICAgdGhpcy5tZW51U3VyZmFjZV8uc2V0QW5jaG9yTWFyZ2luKG1hcmdpbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBsaXN0IGl0ZW0gYXMgdGhlIHNlbGVjdGVkIHJvdyBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgICAqIEBwYXJhbSBpbmRleCBJbmRleCBvZiBsaXN0IGl0ZW0gd2l0aGluIG1lbnUuXG4gICAgICovXG4gICAgTURDTWVudS5wcm90b3R5cGUuc2V0U2VsZWN0ZWRJbmRleCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldFNlbGVjdGVkSW5kZXgoaW5kZXgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZW5hYmxlZCBzdGF0ZSB0byBpc0VuYWJsZWQgZm9yIHRoZSBtZW51IGl0ZW0gYXQgdGhlIGdpdmVuIGluZGV4LlxuICAgICAqIEBwYXJhbSBpbmRleCBJbmRleCBvZiB0aGUgbWVudSBpdGVtXG4gICAgICogQHBhcmFtIGlzRW5hYmxlZCBUaGUgZGVzaXJlZCBlbmFibGVkIHN0YXRlIG9mIHRoZSBtZW51IGl0ZW0uXG4gICAgICovXG4gICAgTURDTWVudS5wcm90b3R5cGUuc2V0RW5hYmxlZCA9IGZ1bmN0aW9uIChpbmRleCwgaXNFbmFibGVkKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0RW5hYmxlZChpbmRleCwgaXNFbmFibGVkKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gVGhlIGl0ZW0gd2l0aGluIHRoZSBtZW51IGF0IHRoZSBpbmRleCBzcGVjaWZpZWQuXG4gICAgICovXG4gICAgTURDTWVudS5wcm90b3R5cGUuZ2V0T3B0aW9uQnlJbmRleCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgICAgICBpZiAoaW5kZXggPCBpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1zW2luZGV4XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENNZW51LnByb3RvdHlwZS5zZXRGaXhlZFBvc2l0aW9uID0gZnVuY3Rpb24gKGlzRml4ZWQpIHtcbiAgICAgICAgdGhpcy5tZW51U3VyZmFjZV8uc2V0Rml4ZWRQb3NpdGlvbihpc0ZpeGVkKTtcbiAgICB9O1xuICAgIE1EQ01lbnUucHJvdG90eXBlLmhvaXN0TWVudVRvQm9keSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5tZW51U3VyZmFjZV8uaG9pc3RNZW51VG9Cb2R5KCk7XG4gICAgfTtcbiAgICBNRENNZW51LnByb3RvdHlwZS5zZXRJc0hvaXN0ZWQgPSBmdW5jdGlvbiAoaXNIb2lzdGVkKSB7XG4gICAgICAgIHRoaXMubWVudVN1cmZhY2VfLnNldElzSG9pc3RlZChpc0hvaXN0ZWQpO1xuICAgIH07XG4gICAgTURDTWVudS5wcm90b3R5cGUuc2V0QWJzb2x1dGVQb3NpdGlvbiA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHRoaXMubWVudVN1cmZhY2VfLnNldEFic29sdXRlUG9zaXRpb24oeCwgeSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBlbGVtZW50IHRoYXQgdGhlIG1lbnUtc3VyZmFjZSBpcyBhbmNob3JlZCB0by5cbiAgICAgKi9cbiAgICBNRENNZW51LnByb3RvdHlwZS5zZXRBbmNob3JFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5tZW51U3VyZmFjZV8uYW5jaG9yRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfTtcbiAgICBNRENNZW51LnByb3RvdHlwZS5nZXREZWZhdWx0Rm91bmRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gRE8gTk9UIElOTElORSB0aGlzIHZhcmlhYmxlLiBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgZm91bmRhdGlvbnMgdGFrZSBhIFBhcnRpYWw8TURDRm9vQWRhcHRlcj4uXG4gICAgICAgIC8vIFRvIGVuc3VyZSB3ZSBkb24ndCBhY2NpZGVudGFsbHkgb21pdCBhbnkgbWV0aG9kcywgd2UgbmVlZCBhIHNlcGFyYXRlLCBzdHJvbmdseSB0eXBlZCBhZGFwdGVyIHZhcmlhYmxlLlxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICB2YXIgYWRhcHRlciA9IHtcbiAgICAgICAgICAgIGFkZENsYXNzVG9FbGVtZW50QXRJbmRleDogZnVuY3Rpb24gKGluZGV4LCBjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdCA9IF90aGlzLml0ZW1zO1xuICAgICAgICAgICAgICAgIGxpc3RbaW5kZXhdLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW1vdmVDbGFzc0Zyb21FbGVtZW50QXRJbmRleDogZnVuY3Rpb24gKGluZGV4LCBjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdCA9IF90aGlzLml0ZW1zO1xuICAgICAgICAgICAgICAgIGxpc3RbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGRBdHRyaWJ1dGVUb0VsZW1lbnRBdEluZGV4OiBmdW5jdGlvbiAoaW5kZXgsIGF0dHIsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpc3QgPSBfdGhpcy5pdGVtcztcbiAgICAgICAgICAgICAgICBsaXN0W2luZGV4XS5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbW92ZUF0dHJpYnV0ZUZyb21FbGVtZW50QXRJbmRleDogZnVuY3Rpb24gKGluZGV4LCBhdHRyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpc3QgPSBfdGhpcy5pdGVtcztcbiAgICAgICAgICAgICAgICBsaXN0W2luZGV4XS5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZWxlbWVudENvbnRhaW5zQ2xhc3M6IGZ1bmN0aW9uIChlbGVtZW50LCBjbGFzc05hbWUpIHsgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICBjbG9zZVN1cmZhY2U6IGZ1bmN0aW9uIChza2lwUmVzdG9yZUZvY3VzKSB7IHJldHVybiBfdGhpcy5tZW51U3VyZmFjZV8uY2xvc2Uoc2tpcFJlc3RvcmVGb2N1cyk7IH0sXG4gICAgICAgICAgICBnZXRFbGVtZW50SW5kZXg6IGZ1bmN0aW9uIChlbGVtZW50KSB7IHJldHVybiBfdGhpcy5pdGVtcy5pbmRleE9mKGVsZW1lbnQpOyB9LFxuICAgICAgICAgICAgbm90aWZ5U2VsZWN0ZWQ6IGZ1bmN0aW9uIChldnREYXRhKSB7IHJldHVybiBfdGhpcy5lbWl0KHN0cmluZ3MuU0VMRUNURURfRVZFTlQsIHtcbiAgICAgICAgICAgICAgICBpbmRleDogZXZ0RGF0YS5pbmRleCxcbiAgICAgICAgICAgICAgICBpdGVtOiBfdGhpcy5pdGVtc1tldnREYXRhLmluZGV4XSxcbiAgICAgICAgICAgIH0pOyB9LFxuICAgICAgICAgICAgZ2V0TWVudUl0ZW1Db3VudDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaXRlbXMubGVuZ3RoOyB9LFxuICAgICAgICAgICAgZm9jdXNJdGVtQXRJbmRleDogZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBfdGhpcy5pdGVtc1tpbmRleF0uZm9jdXMoKTsgfSxcbiAgICAgICAgICAgIGZvY3VzTGlzdFJvb3Q6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5MSVNUX1NFTEVDVE9SKS5mb2N1cygpOyB9LFxuICAgICAgICAgICAgaXNTZWxlY3RhYmxlSXRlbUF0SW5kZXg6IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gISFjbG9zZXN0KF90aGlzLml0ZW1zW2luZGV4XSwgXCIuXCIgKyBjc3NDbGFzc2VzLk1FTlVfU0VMRUNUSU9OX0dST1VQKTsgfSxcbiAgICAgICAgICAgIGdldFNlbGVjdGVkU2libGluZ09mSXRlbUF0SW5kZXg6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3Rpb25Hcm91cEVsID0gY2xvc2VzdChfdGhpcy5pdGVtc1tpbmRleF0sIFwiLlwiICsgY3NzQ2xhc3Nlcy5NRU5VX1NFTEVDVElPTl9HUk9VUCk7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkSXRlbUVsID0gc2VsZWN0aW9uR3JvdXBFbC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgY3NzQ2xhc3Nlcy5NRU5VX1NFTEVDVEVEX0xJU1RfSVRFTSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkSXRlbUVsID8gX3RoaXMuaXRlbXMuaW5kZXhPZihzZWxlY3RlZEl0ZW1FbCkgOiAtMTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIHJldHVybiBuZXcgTURDTWVudUZvdW5kYXRpb24oYWRhcHRlcik7XG4gICAgfTtcbiAgICByZXR1cm4gTURDTWVudTtcbn0oTURDQ29tcG9uZW50KSk7XG5leHBvcnQgeyBNRENNZW51IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnQuanMubWFwIiwiPGRpdlxuICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gIHVzZTpmb3J3YXJkRXZlbnRzXG4gIGNsYXNzPVwiXG4gICAgbWRjLW1lbnUtc3VyZmFjZVxuICAgIHtjbGFzc05hbWV9XG4gICAge2ZpeGVkID8gJ21kYy1tZW51LXN1cmZhY2UtLWZpeGVkJyA6ICcnfVxuICAgIHtpc1N0YXRpYyA/ICdtZGMtbWVudS1zdXJmYWNlLS1vcGVuJyA6ICcnfVxuICAgIHtpc1N0YXRpYyA/ICdzbXVpLW1lbnUtc3VyZmFjZS0tc3RhdGljJyA6ICcnfVxuICBcIlxuICBvbjpNRENNZW51U3VyZmFjZTpjbG9zZWQ9e3VwZGF0ZU9wZW59IG9uOk1EQ01lbnVTdXJmYWNlOm9wZW5lZD17dXBkYXRlT3Blbn1cbiAgey4uLmV4Y2x1ZGUoJCRwcm9wcywgWyd1c2UnLCAnY2xhc3MnLCAnc3RhdGljJywgJ2FuY2hvcicsICdmaXhlZCcsICdvcGVuJywgJ3F1aWNrT3BlbicsICdhbmNob3JFbGVtZW50JywgJ2FuY2hvckNvcm5lcicsICdlbGVtZW50J10pfVxuPjxzbG90Pjwvc2xvdD48L2Rpdj5cblxuPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG4gIGltcG9ydCB7Q29ybmVyLCBDb3JuZXJCaXR9IGZyb20gJ0BtYXRlcmlhbC9tZW51LXN1cmZhY2UnO1xuXG4gIGV4cG9ydCB7Q29ybmVyLCBDb3JuZXJCaXR9O1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7TURDTWVudVN1cmZhY2V9IGZyb20gJ0BtYXRlcmlhbC9tZW51LXN1cmZhY2UnO1xuICBpbXBvcnQge29uTW91bnQsIG9uRGVzdHJveSwgZ2V0Q29udGV4dCwgc2V0Q29udGV4dH0gZnJvbSAnc3ZlbHRlJztcbiAgaW1wb3J0IHtjdXJyZW50X2NvbXBvbmVudH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHtmb3J3YXJkRXZlbnRzQnVpbGRlcn0gZnJvbSAnQHNtdWkvY29tbW9uL2ZvcndhcmRFdmVudHMuanMnO1xuICBpbXBvcnQge2V4Y2x1ZGV9IGZyb20gJ0BzbXVpL2NvbW1vbi9leGNsdWRlLmpzJztcbiAgaW1wb3J0IHt1c2VBY3Rpb25zfSBmcm9tICdAc211aS9jb21tb24vdXNlQWN0aW9ucy5qcyc7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGN1cnJlbnRfY29tcG9uZW50LCBbJ01EQ01lbnVTdXJmYWNlOmNsb3NlZCcsICdNRENNZW51U3VyZmFjZTpvcGVuZWQnXSk7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBleHBvcnQge2NsYXNzTmFtZSBhcyBjbGFzc307XG4gIGxldCBpc1N0YXRpYyA9IGZhbHNlO1xuICBleHBvcnQge2lzU3RhdGljIGFzIHN0YXRpY307XG4gIGV4cG9ydCBsZXQgYW5jaG9yID0gdHJ1ZTtcbiAgZXhwb3J0IGxldCBmaXhlZCA9IGZhbHNlO1xuICBleHBvcnQgbGV0IG9wZW4gPSBpc1N0YXRpYztcbiAgZXhwb3J0IGxldCBxdWlja09wZW4gPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBhbmNob3JFbGVtZW50ID0gbnVsbDtcbiAgZXhwb3J0IGxldCBhbmNob3JDb3JuZXIgPSBudWxsO1xuXG4gIGV4cG9ydCBsZXQgZWxlbWVudCA9IHVuZGVmaW5lZDsgLy8gVGhpcyBpcyBleHBvcnRlZCBiZWNhdXNlIE1lbnUgbmVlZHMgaXQuXG4gIGxldCBtZW51U3VyZmFjZTtcbiAgbGV0IGluc3RhbnRpYXRlID0gZ2V0Q29udGV4dCgnU01VSTptZW51LXN1cmZhY2U6aW5zdGFudGlhdGUnKTtcbiAgbGV0IGdldEluc3RhbmNlID0gZ2V0Q29udGV4dCgnU01VSTptZW51LXN1cmZhY2U6Z2V0SW5zdGFuY2UnKTtcblxuICBzZXRDb250ZXh0KCdTTVVJOmxpc3Q6cm9sZScsICdtZW51Jyk7XG4gIHNldENvbnRleHQoJ1NNVUk6bGlzdDppdGVtOnJvbGUnLCAnbWVudWl0ZW0nKTtcblxuICAkOiBpZiAoZWxlbWVudCAmJiBhbmNob3IgJiYgIWVsZW1lbnQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ21kYy1tZW51LXN1cmZhY2UtLWFuY2hvcicpKSB7XG4gICAgZWxlbWVudC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ21kYy1tZW51LXN1cmZhY2UtLWFuY2hvcicpO1xuICAgIGFuY2hvckVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gIH1cblxuICAkOiBpZiAobWVudVN1cmZhY2UgJiYgbWVudVN1cmZhY2UuaXNPcGVuKCkgIT09IG9wZW4pIHtcbiAgICBpZiAob3Blbikge1xuICAgICAgbWVudVN1cmZhY2Uub3BlbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZW51U3VyZmFjZS5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gICQ6IGlmIChtZW51U3VyZmFjZSAmJiBtZW51U3VyZmFjZS5xdWlja09wZW4gIT09IHF1aWNrT3Blbikge1xuICAgIG1lbnVTdXJmYWNlLnF1aWNrT3BlbiA9IHF1aWNrT3BlbjtcbiAgfVxuXG4gICQ6IGlmIChtZW51U3VyZmFjZSAmJiBtZW51U3VyZmFjZS5hbmNob3JFbGVtZW50ICE9PSBhbmNob3JFbGVtZW50KSB7XG4gICAgbWVudVN1cmZhY2UuYW5jaG9yRWxlbWVudCA9IGFuY2hvckVsZW1lbnQ7XG4gIH1cblxuICBsZXQgb2xkRml4ZWQgPSBudWxsO1xuICAkOiBpZiAobWVudVN1cmZhY2UgJiYgb2xkRml4ZWQgIT09IGZpeGVkKSB7XG4gICAgbWVudVN1cmZhY2Uuc2V0Rml4ZWRQb3NpdGlvbihmaXhlZCk7XG4gICAgb2xkRml4ZWQgPSBmaXhlZDtcbiAgfVxuXG4gICQ6IGlmIChtZW51U3VyZmFjZSAmJiBhbmNob3JDb3JuZXIgIT0gbnVsbCkge1xuICAgIGlmIChDb3JuZXIuaGFzT3duUHJvcGVydHkoYW5jaG9yQ29ybmVyKSkge1xuICAgICAgbWVudVN1cmZhY2Uuc2V0QW5jaG9yQ29ybmVyKENvcm5lclthbmNob3JDb3JuZXJdKTtcbiAgICB9IGVsc2UgaWYgKENvcm5lckJpdC5oYXNPd25Qcm9wZXJ0eShhbmNob3JDb3JuZXIpKSB7XG4gICAgICBtZW51U3VyZmFjZS5zZXRBbmNob3JDb3JuZXIoQ29ybmVyW2FuY2hvckNvcm5lcl0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZW51U3VyZmFjZS5zZXRBbmNob3JDb3JuZXIoYW5jaG9yQ29ybmVyKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdW50KGFzeW5jICgpID0+IHtcbiAgICBpZiAoaW5zdGFudGlhdGUgIT09IGZhbHNlKSB7XG4gICAgICBtZW51U3VyZmFjZSA9IG5ldyBNRENNZW51U3VyZmFjZShlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVudVN1cmZhY2UgPSBhd2FpdCBnZXRJbnN0YW5jZSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgb25EZXN0cm95KCgpID0+IHtcbiAgICBpZiAoYW5jaG9yKSB7XG4gICAgICBlbGVtZW50ICYmIGVsZW1lbnQucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdtZGMtbWVudS1zdXJmYWNlLS1hbmNob3InKTtcbiAgICB9XG4gICAgbGV0IGlzSG9pc3RlZCA9IGZhbHNlO1xuICAgIGlmIChtZW51U3VyZmFjZSkge1xuICAgICAgaXNIb2lzdGVkID0gbWVudVN1cmZhY2UuZm91bmRhdGlvbl8uaXNIb2lzdGVkRWxlbWVudF87XG4gICAgfVxuICAgIGlmIChpbnN0YW50aWF0ZSAhPT0gZmFsc2UpIHtcbiAgICAgIG1lbnVTdXJmYWNlLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgaWYgKGlzSG9pc3RlZCkge1xuICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlT3BlbigpIHtcbiAgICBpZiAobWVudVN1cmZhY2UpIHtcbiAgICAgIGlmIChpc1N0YXRpYykge1xuICAgICAgICBvcGVuID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wZW4gPSBtZW51U3VyZmFjZS5pc09wZW4oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gc2V0T3Blbih2YWx1ZSkge1xuICAgIG9wZW4gPSB2YWx1ZTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRBbmNob3JDb3JuZXIoLi4uYXJncykge1xuICAgIHJldHVybiBtZW51U3VyZmFjZS5zZXRBbmNob3JDb3JuZXIoLi4uYXJncyk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gc2V0QW5jaG9yTWFyZ2luKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbWVudVN1cmZhY2Uuc2V0QW5jaG9yTWFyZ2luKC4uLmFyZ3MpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldEZpeGVkUG9zaXRpb24oaXNGaXhlZCwgLi4uYXJncykge1xuICAgIGZpeGVkID0gaXNGaXhlZDtcbiAgICByZXR1cm4gbWVudVN1cmZhY2Uuc2V0Rml4ZWRQb3NpdGlvbihpc0ZpeGVkLCAuLi5hcmdzKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRBYnNvbHV0ZVBvc2l0aW9uKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbWVudVN1cmZhY2Uuc2V0QWJzb2x1dGVQb3NpdGlvbiguLi5hcmdzKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRNZW51U3VyZmFjZUFuY2hvckVsZW1lbnQoLi4uYXJncykge1xuICAgIHJldHVybiBtZW51U3VyZmFjZS5zZXRNZW51U3VyZmFjZUFuY2hvckVsZW1lbnQoLi4uYXJncyk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gaG9pc3RNZW51VG9Cb2R5KC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbWVudVN1cmZhY2UuaG9pc3RNZW51VG9Cb2R5KC4uLmFyZ3MpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldElzSG9pc3RlZCguLi5hcmdzKSB7XG4gICAgcmV0dXJuIG1lbnVTdXJmYWNlLnNldElzSG9pc3RlZCguLi5hcmdzKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0Rm91bmRhdGlvbiguLi5hcmdzKSB7XG4gICAgcmV0dXJuIG1lbnVTdXJmYWNlLmdldERlZmF1bHRGb3VuZGF0aW9uKC4uLmFyZ3MpO1xuICB9XG48L3NjcmlwdD4iLCI8TWVudVN1cmZhY2VcbiAgYmluZDplbGVtZW50XG4gIHVzZT17W2ZvcndhcmRFdmVudHMsIC4uLnVzZV19XG4gIGNsYXNzPVwibWRjLW1lbnUge2NsYXNzTmFtZX1cIlxuICBvbjpNRENNZW51OnNlbGVjdGVkPXt1cGRhdGVPcGVufVxuICBvbjpNRENNZW51U3VyZmFjZTpjbG9zZWQ9e3VwZGF0ZU9wZW59IG9uOk1EQ01lbnVTdXJmYWNlOm9wZW5lZD17dXBkYXRlT3Blbn1cbiAgey4uLmV4Y2x1ZGUoJCRwcm9wcywgWyd1c2UnLCAnY2xhc3MnLCAnd3JhcEZvY3VzJ10pfVxuPjxzbG90Pjwvc2xvdD48L01lbnVTdXJmYWNlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQge01EQ01lbnV9IGZyb20gJ0BtYXRlcmlhbC9tZW51JztcbiAgaW1wb3J0IHtvbk1vdW50LCBvbkRlc3Ryb3ksIGdldENvbnRleHQsIHNldENvbnRleHR9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7Y3VycmVudF9jb21wb25lbnR9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7Zm9yd2FyZEV2ZW50c0J1aWxkZXJ9IGZyb20gJ0BzbXVpL2NvbW1vbi9mb3J3YXJkRXZlbnRzLmpzJztcbiAgaW1wb3J0IHtleGNsdWRlfSBmcm9tICdAc211aS9jb21tb24vZXhjbHVkZS5qcyc7XG4gIGltcG9ydCB7dXNlQWN0aW9uc30gZnJvbSAnQHNtdWkvY29tbW9uL3VzZUFjdGlvbnMuanMnO1xuICBpbXBvcnQgTWVudVN1cmZhY2UsIHtDb3JuZXIsIENvcm5lckJpdH0gZnJvbSAnQHNtdWkvbWVudS1zdXJmYWNlL01lbnVTdXJmYWNlLnN2ZWx0ZSc7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGN1cnJlbnRfY29tcG9uZW50LCBbJ01EQ01lbnU6c2VsZWN0ZWQnLCAnTURDTWVudVN1cmZhY2U6Y2xvc2VkJywgJ01EQ01lbnVTdXJmYWNlOm9wZW5lZCddKTtcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gIGV4cG9ydCB7Y2xhc3NOYW1lIGFzIGNsYXNzfTtcbiAgbGV0IGlzU3RhdGljID0gZmFsc2U7XG4gIGV4cG9ydCB7aXNTdGF0aWMgYXMgc3RhdGljfTsgLy8gUHVycG9zZWx5IG9taXR0ZWQgZnJvbSB0aGUgZXhjbHVkZSBjYWxsIGFib3ZlLlxuICBleHBvcnQgbGV0IG9wZW4gPSBpc1N0YXRpYzsgLy8gUHVycG9zZWx5IG9taXR0ZWQgZnJvbSB0aGUgZXhjbHVkZSBjYWxsIGFib3ZlLlxuICBleHBvcnQgbGV0IHF1aWNrT3BlbiA9IGZhbHNlOyAvLyBQdXJwb3NlbHkgb21pdHRlZCBmcm9tIHRoZSBleGNsdWRlIGNhbGwgYWJvdmUuXG4gIGV4cG9ydCBsZXQgYW5jaG9yQ29ybmVyID0gbnVsbDsgLy8gUHVycG9zZWx5IG9taXR0ZWQgZnJvbSB0aGUgZXhjbHVkZSBjYWxsIGFib3ZlLlxuICBleHBvcnQgbGV0IHdyYXBGb2N1cyA9IGZhbHNlO1xuXG4gIGxldCBlbGVtZW50O1xuICBsZXQgbWVudTtcbiAgbGV0IGluc3RhbnRpYXRlID0gZ2V0Q29udGV4dCgnU01VSTptZW51Omluc3RhbnRpYXRlJyk7XG4gIGxldCBnZXRJbnN0YW5jZSA9IGdldENvbnRleHQoJ1NNVUk6bWVudTpnZXRJbnN0YW5jZScpO1xuICBsZXQgbWVudVN1cmZhY2VQcm9taXNlUmVzb2x2ZTtcbiAgbGV0IG1lbnVTdXJmYWNlUHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gbWVudVN1cmZhY2VQcm9taXNlUmVzb2x2ZSA9IHJlc29sdmUpO1xuICBsZXQgbGlzdFByb21pc2VSZXNvbHZlO1xuICBsZXQgbGlzdFByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IGxpc3RQcm9taXNlUmVzb2x2ZSA9IHJlc29sdmUpO1xuXG4gIHNldENvbnRleHQoJ1NNVUk6bWVudS1zdXJmYWNlOmluc3RhbnRpYXRlJywgZmFsc2UpO1xuICBzZXRDb250ZXh0KCdTTVVJOm1lbnUtc3VyZmFjZTpnZXRJbnN0YW5jZScsIGdldE1lbnVTdXJmYWNlSW5zdGFuY2VQcm9taXNlKTtcbiAgc2V0Q29udGV4dCgnU01VSTpsaXN0Omluc3RhbnRpYXRlJywgZmFsc2UpO1xuICBzZXRDb250ZXh0KCdTTVVJOmxpc3Q6Z2V0SW5zdGFuY2UnLCBnZXRMaXN0SW5zdGFuY2VQcm9taXNlKTtcblxuICAkOiBpZiAobWVudSAmJiBtZW51Lm9wZW4gIT09IG9wZW4pIHtcbiAgICBpZiAoaXNTdGF0aWMpIHtcbiAgICAgIG9wZW4gPSB0cnVlO1xuICAgIH1cbiAgICBtZW51Lm9wZW4gPSBvcGVuO1xuICB9XG5cbiAgJDogaWYgKG1lbnUgJiYgbWVudS53cmFwRm9jdXMgIT09IHdyYXBGb2N1cykge1xuICAgIG1lbnUud3JhcEZvY3VzID0gd3JhcEZvY3VzO1xuICB9XG5cbiAgJDogaWYgKG1lbnUpIHtcbiAgICBtZW51LnF1aWNrT3BlbiA9IHF1aWNrT3BlbjtcbiAgfVxuXG4gICQ6IGlmIChtZW51ICYmIGFuY2hvckNvcm5lciAhPSBudWxsKSB7XG4gICAgaWYgKENvcm5lci5oYXNPd25Qcm9wZXJ0eShhbmNob3JDb3JuZXIpKSB7XG4gICAgICBtZW51LnNldEFuY2hvckNvcm5lcihDb3JuZXJbYW5jaG9yQ29ybmVyXSk7XG4gICAgfSBlbHNlIGlmIChDb3JuZXJCaXQuaGFzT3duUHJvcGVydHkoYW5jaG9yQ29ybmVyKSkge1xuICAgICAgbWVudS5zZXRBbmNob3JDb3JuZXIoQ29ybmVyW2FuY2hvckNvcm5lcl0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZW51LnNldEFuY2hvckNvcm5lcihhbmNob3JDb3JuZXIpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91bnQoYXN5bmMgKCkgPT4ge1xuICAgIGlmIChpbnN0YW50aWF0ZSAhPT0gZmFsc2UpIHtcbiAgICAgIG1lbnUgPSBuZXcgTURDTWVudShlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVudSA9IGF3YWl0IGdldEluc3RhbmNlKCk7XG4gICAgfVxuICAgIG1lbnVTdXJmYWNlUHJvbWlzZVJlc29sdmUobWVudS5tZW51U3VyZmFjZV8pO1xuICAgIGxpc3RQcm9taXNlUmVzb2x2ZShtZW51Lmxpc3RfKTtcbiAgfSk7XG5cbiAgb25EZXN0cm95KCgpID0+IHtcbiAgICBpZiAoaW5zdGFudGlhdGUgIT09IGZhbHNlKSB7XG4gICAgICBtZW51ICYmIG1lbnUuZGVzdHJveSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gZ2V0TWVudVN1cmZhY2VJbnN0YW5jZVByb21pc2UoKSB7XG4gICAgcmV0dXJuIG1lbnVTdXJmYWNlUHJvbWlzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldExpc3RJbnN0YW5jZVByb21pc2UoKSB7XG4gICAgcmV0dXJuIGxpc3RQcm9taXNlO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlT3BlbigpIHtcbiAgICBvcGVuID0gbWVudS5vcGVuO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldE9wZW4odmFsdWUpIHtcbiAgICBvcGVuID0gdmFsdWU7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0SXRlbXMoKSB7XG4gICAgcmV0dXJuIG1lbnUuaXRlbXM7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdEZvY3VzU3RhdGUoLi4uYXJncykge1xuICAgIHJldHVybiBtZW51LnNldERlZmF1bHRGb2N1c1N0YXRlKC4uLmFyZ3MpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldEFuY2hvckNvcm5lciguLi5hcmdzKSB7XG4gICAgcmV0dXJuIG1lbnUuc2V0QW5jaG9yQ29ybmVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldEFuY2hvck1hcmdpbiguLi5hcmdzKSB7XG4gICAgcmV0dXJuIG1lbnUuc2V0QW5jaG9yTWFyZ2luKC4uLmFyZ3MpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldFNlbGVjdGVkSW5kZXgoLi4uYXJncykge1xuICAgIHJldHVybiBtZW51LnNldFNlbGVjdGVkSW5kZXgoLi4uYXJncyk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gc2V0RW5hYmxlZCguLi5hcmdzKSB7XG4gICAgcmV0dXJuIG1lbnUuc2V0RW5hYmxlZCguLi5hcmdzKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRPcHRpb25CeUluZGV4KC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbWVudS5nZXRPcHRpb25CeUluZGV4KC4uLmFyZ3MpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldEZpeGVkUG9zaXRpb24oLi4uYXJncykge1xuICAgIHJldHVybiBtZW51LnNldEZpeGVkUG9zaXRpb24oLi4uYXJncyk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gaG9pc3RNZW51VG9Cb2R5KC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbWVudS5ob2lzdE1lbnVUb0JvZHkoLi4uYXJncyk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gc2V0SXNIb2lzdGVkKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbWVudS5zZXRJc0hvaXN0ZWQoLi4uYXJncyk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gc2V0QWJzb2x1dGVQb3NpdGlvbiguLi5hcmdzKSB7XG4gICAgcmV0dXJuIG1lbnUuc2V0QWJzb2x1dGVQb3NpdGlvbiguLi5hcmdzKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRBbmNob3JFbGVtZW50KC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbWVudS5zZXRBbmNob3JFbGVtZW50KC4uLmFyZ3MpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRGb3VuZGF0aW9uKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbWVudS5nZXREZWZhdWx0Rm91bmRhdGlvbiguLi5hcmdzKTtcbiAgfVxuPC9zY3JpcHQ+IiwiPHN2ZWx0ZTpjb21wb25lbnRcbiAgdGhpcz17Y29tcG9uZW50fVxuICB1c2U9e1tmb3J3YXJkRXZlbnRzLCAuLi51c2VdfVxuICBjbGFzcz1cIntzbXVpQ2xhc3N9IHtjbGFzc05hbWV9XCJcbiAgey4uLmV4Y2x1ZGUoJCRwcm9wcywgWyd1c2UnLCAnY2xhc3MnLCAnY29tcG9uZW50JywgJ2ZvcndhcmRFdmVudHMnXSl9XG4+PHNsb3Q+PC9zbG90Pjwvc3ZlbHRlOmNvbXBvbmVudD5cblxuPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG4gIGV4cG9ydCBjb25zdCBpbnRlcm5hbHMgPSB7XG4gICAgY29tcG9uZW50OiBudWxsLFxuICAgIHNtdWlDbGFzczogbnVsbCxcbiAgICBjb250ZXh0czoge31cbiAgfTtcbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICBpbXBvcnQge3NldENvbnRleHR9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7Y3VycmVudF9jb21wb25lbnR9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7Zm9yd2FyZEV2ZW50c0J1aWxkZXJ9IGZyb20gJy4vZm9yd2FyZEV2ZW50cy5qcyc7XG4gIGltcG9ydCB7ZXhjbHVkZX0gZnJvbSAnLi9leGNsdWRlLmpzJztcbiAgaW1wb3J0IHt1c2VBY3Rpb25zfSBmcm9tICcuL3VzZUFjdGlvbnMuanMnO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG4gIGxldCBjbGFzc05hbWUgPSAnJztcbiAgZXhwb3J0IHtjbGFzc05hbWUgYXMgY2xhc3N9O1xuICBleHBvcnQgbGV0IGNvbXBvbmVudCA9IGludGVybmFscy5jb21wb25lbnQ7XG4gIGxldCBzbXVpRm9yd2FyZEV2ZW50cyA9IFtdO1xuICBleHBvcnQge3NtdWlGb3J3YXJkRXZlbnRzIGFzIGZvcndhcmRFdmVudHN9O1xuXG4gIGNvbnN0IHNtdWlDbGFzcyA9IGludGVybmFscy5jbGFzcztcbiAgY29uc3QgY29udGV4dHMgPSBpbnRlcm5hbHMuY29udGV4dHM7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGN1cnJlbnRfY29tcG9uZW50LCBzbXVpRm9yd2FyZEV2ZW50cyk7XG5cbiAgZm9yIChsZXQgY29udGV4dCBpbiBjb250ZXh0cykge1xuICAgIGlmIChjb250ZXh0cy5oYXNPd25Qcm9wZXJ0eShjb250ZXh0KSkge1xuICAgICAgc2V0Q29udGV4dChjb250ZXh0LCBjb250ZXh0c1tjb250ZXh0XSk7XG4gICAgfVxuICB9XG48L3NjcmlwdD4iLCJpbXBvcnQgQ2xhc3NBZGRlciwge2ludGVybmFsc30gZnJvbSAnLi9DbGFzc0FkZGVyLnN2ZWx0ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc0FkZGVyQnVpbGRlcihwcm9wcykge1xuICBmdW5jdGlvbiBDb21wb25lbnQoLi4uYXJncykge1xuICAgIE9iamVjdC5hc3NpZ24oaW50ZXJuYWxzLCBwcm9wcyk7XG4gICAgcmV0dXJuIG5ldyBDbGFzc0FkZGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgQ29tcG9uZW50LnByb3RvdHlwZSA9IENsYXNzQWRkZXI7XG5cbiAgLy8gU1NSIHN1cHBvcnRcbiAgaWYgKENsYXNzQWRkZXIuJCRyZW5kZXIpIHtcbiAgICBDb21wb25lbnQuJCRyZW5kZXIgPSAoLi4uYXJncykgPT4gT2JqZWN0LmFzc2lnbihpbnRlcm5hbHMsIHByb3BzKSAmJiBDbGFzc0FkZGVyLiQkcmVuZGVyKC4uLmFyZ3MpO1xuICB9XG4gIGlmIChDbGFzc0FkZGVyLnJlbmRlcikge1xuICAgIENvbXBvbmVudC5yZW5kZXIgPSAoLi4uYXJncykgPT4gT2JqZWN0LmFzc2lnbihpbnRlcm5hbHMsIHByb3BzKSAmJiBDbGFzc0FkZGVyLnJlbmRlciguLi5hcmdzKTtcbiAgfVxuXG4gIHJldHVybiBDb21wb25lbnQ7XG59IiwiPHNwYW5cbiAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgdXNlOmZvcndhcmRFdmVudHNcbiAgey4uLmV4Y2x1ZGUoJCRwcm9wcywgWyd1c2UnXSl9XG4+PHNsb3Q+PC9zbG90Pjwvc3Bhbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHtjdXJyZW50X2NvbXBvbmVudH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHtmb3J3YXJkRXZlbnRzQnVpbGRlcn0gZnJvbSAnLi9mb3J3YXJkRXZlbnRzLmpzJztcbiAgaW1wb3J0IHtleGNsdWRlfSBmcm9tICcuL2V4Y2x1ZGUuanMnO1xuICBpbXBvcnQge3VzZUFjdGlvbnN9IGZyb20gJy4vdXNlQWN0aW9ucy5qcyc7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGN1cnJlbnRfY29tcG9uZW50KTtcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuPC9zY3JpcHQ+IiwiaW1wb3J0IHtjbGFzc0FkZGVyQnVpbGRlcn0gZnJvbSAnQHNtdWkvY29tbW9uL2NsYXNzQWRkZXJCdWlsZGVyLmpzJztcbmltcG9ydCBTcGFuIGZyb20gJ0BzbXVpL2NvbW1vbi9TcGFuLnN2ZWx0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzQWRkZXJCdWlsZGVyKHtcbiAgY2xhc3M6ICdtZGMtbGlzdC1pdGVtX19ncmFwaGljJyxcbiAgY29tcG9uZW50OiBTcGFuLFxuICBjb250ZXh0czoge31cbn0pOyIsImltcG9ydCB7Y2xhc3NBZGRlckJ1aWxkZXJ9IGZyb20gJ0BzbXVpL2NvbW1vbi9jbGFzc0FkZGVyQnVpbGRlci5qcyc7XG5pbXBvcnQgR3JhcGhpYyBmcm9tICdAc211aS9saXN0L0dyYXBoaWMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzc0FkZGVyQnVpbGRlcih7XG4gIGNsYXNzOiAnbWRjLW1lbnVfX3NlbGVjdGlvbi1ncm91cC1pY29uJyxcbiAgY29tcG9uZW50OiBHcmFwaGljLFxuICBjb250ZXh0czoge31cbn0pOyIsInsjaWYgbmF2fVxuICA8bmF2XG4gICAgYmluZDp0aGlzPXtlbGVtZW50fVxuICAgIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gICAgdXNlOmZvcndhcmRFdmVudHNcbiAgICBjbGFzcz1cIlxuICAgICAgbWRjLWxpc3RcbiAgICAgIHtjbGFzc05hbWV9XG4gICAgICB7bm9uSW50ZXJhY3RpdmUgPyAnbWRjLWxpc3QtLW5vbi1pbnRlcmFjdGl2ZScgOiAnJ31cbiAgICAgIHtkZW5zZSA/ICdtZGMtbGlzdC0tZGVuc2UnIDogJyd9XG4gICAgICB7YXZhdGFyTGlzdCA/ICdtZGMtbGlzdC0tYXZhdGFyLWxpc3QnIDogJyd9XG4gICAgICB7dHdvTGluZSA/ICdtZGMtbGlzdC0tdHdvLWxpbmUnIDogJyd9XG4gICAgICB7KHRocmVlTGluZSAmJiAhdHdvTGluZSkgPyAnc211aS1saXN0LS10aHJlZS1saW5lJyA6ICcnfVxuICAgIFwiXG4gICAgb246TURDTGlzdDphY3Rpb249e2hhbmRsZUFjdGlvbn1cbiAgICB7Li4ucHJvcHN9XG4gID48c2xvdD48L3Nsb3Q+PC9uYXY+XG57OmVsc2V9XG4gIDx1bFxuICAgIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgICB1c2U6dXNlQWN0aW9ucz17dXNlfVxuICAgIHVzZTpmb3J3YXJkRXZlbnRzXG4gICAgY2xhc3M9XCJcbiAgICAgIG1kYy1saXN0XG4gICAgICB7Y2xhc3NOYW1lfVxuICAgICAge25vbkludGVyYWN0aXZlID8gJ21kYy1saXN0LS1ub24taW50ZXJhY3RpdmUnIDogJyd9XG4gICAgICB7ZGVuc2UgPyAnbWRjLWxpc3QtLWRlbnNlJyA6ICcnfVxuICAgICAge2F2YXRhckxpc3QgPyAnbWRjLWxpc3QtLWF2YXRhci1saXN0JyA6ICcnfVxuICAgICAge3R3b0xpbmUgPyAnbWRjLWxpc3QtLXR3by1saW5lJyA6ICcnfVxuICAgICAgeyh0aHJlZUxpbmUgJiYgIXR3b0xpbmUpID8gJ3NtdWktbGlzdC0tdGhyZWUtbGluZScgOiAnJ31cbiAgICBcIlxuICAgIHtyb2xlfVxuICAgIG9uOk1EQ0xpc3Q6YWN0aW9uPXtoYW5kbGVBY3Rpb259XG4gICAgey4uLnByb3BzfVxuICA+PHNsb3Q+PC9zbG90PjwvdWw+XG57L2lmfVxuXG48c2NyaXB0PlxuICBpbXBvcnQge01EQ0xpc3R9IGZyb20gJ0BtYXRlcmlhbC9saXN0JztcbiAgaW1wb3J0IHtvbk1vdW50LCBvbkRlc3Ryb3ksIGdldENvbnRleHQsIHNldENvbnRleHR9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7Y3VycmVudF9jb21wb25lbnR9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7Zm9yd2FyZEV2ZW50c0J1aWxkZXJ9IGZyb20gJ0BzbXVpL2NvbW1vbi9mb3J3YXJkRXZlbnRzLmpzJztcbiAgaW1wb3J0IHtleGNsdWRlfSBmcm9tICdAc211aS9jb21tb24vZXhjbHVkZS5qcyc7XG4gIGltcG9ydCB7dXNlQWN0aW9uc30gZnJvbSAnQHNtdWkvY29tbW9uL3VzZUFjdGlvbnMuanMnO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihjdXJyZW50X2NvbXBvbmVudCwgWydNRENMaXN0OmFjdGlvbiddKTtcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gIGV4cG9ydCB7Y2xhc3NOYW1lIGFzIGNsYXNzfTtcbiAgZXhwb3J0IGxldCBub25JbnRlcmFjdGl2ZSA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGRlbnNlID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgYXZhdGFyTGlzdCA9IGZhbHNlO1xuICBleHBvcnQgbGV0IHR3b0xpbmUgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCB0aHJlZUxpbmUgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCB2ZXJ0aWNhbCA9IHRydWU7XG4gIGV4cG9ydCBsZXQgd3JhcEZvY3VzID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgc2luZ2xlU2VsZWN0aW9uID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgc2VsZWN0ZWRJbmRleCA9IG51bGw7XG4gIGV4cG9ydCBsZXQgcmFkaW9saXN0ID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgY2hlY2tsaXN0ID0gZmFsc2U7XG5cbiAgJDogcHJvcHMgPSBleGNsdWRlKCQkcHJvcHMsIFsndXNlJywgJ2NsYXNzJywgJ25vbkludGVyYWN0aXZlJywgJ2RlbnNlJywgJ2F2YXRhckxpc3QnLCAndHdvTGluZScsICd0aHJlZUxpbmUnLCAndmVydGljYWwnLCAnd3JhcEZvY3VzJywgJ3NpbmdsZVNlbGVjdGlvbicsICdzZWxlY3RlZEluZGV4JywgJ3JhZGlvbGlzdCcsICdjaGVja2xpc3QnXSk7XG5cbiAgbGV0IGVsZW1lbnQ7XG4gIGxldCBsaXN0O1xuICBsZXQgcm9sZSA9IGdldENvbnRleHQoJ1NNVUk6bGlzdDpyb2xlJyk7XG4gIGxldCBuYXYgPSBnZXRDb250ZXh0KCdTTVVJOmxpc3Q6bmF2Jyk7XG4gIGxldCBpbnN0YW50aWF0ZSA9IGdldENvbnRleHQoJ1NNVUk6bGlzdDppbnN0YW50aWF0ZScpO1xuICBsZXQgZ2V0SW5zdGFuY2UgPSBnZXRDb250ZXh0KCdTTVVJOmxpc3Q6Z2V0SW5zdGFuY2UnKTtcbiAgbGV0IGFkZExheW91dExpc3RlbmVyID0gZ2V0Q29udGV4dCgnU01VSTphZGRMYXlvdXRMaXN0ZW5lcicpO1xuICBsZXQgcmVtb3ZlTGF5b3V0TGlzdGVuZXI7XG5cbiAgc2V0Q29udGV4dCgnU01VSTpsaXN0Om5vbkludGVyYWN0aXZlJywgbm9uSW50ZXJhY3RpdmUpO1xuXG4gIGlmICghcm9sZSkge1xuICAgIGlmIChzaW5nbGVTZWxlY3Rpb24pIHtcbiAgICAgIHJvbGUgPSAnbGlzdGJveCc7XG4gICAgICBzZXRDb250ZXh0KCdTTVVJOmxpc3Q6aXRlbTpyb2xlJywgJ29wdGlvbicpO1xuICAgIH0gZWxzZSBpZiAocmFkaW9saXN0KSB7XG4gICAgICByb2xlID0gJ3JhZGlvZ3JvdXAnO1xuICAgICAgc2V0Q29udGV4dCgnU01VSTpsaXN0Oml0ZW06cm9sZScsICdyYWRpbycpO1xuICAgIH0gZWxzZSBpZiAoY2hlY2tsaXN0KSB7XG4gICAgICByb2xlID0gJ2dyb3VwJztcbiAgICAgIHNldENvbnRleHQoJ1NNVUk6bGlzdDppdGVtOnJvbGUnLCAnY2hlY2tib3gnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm9sZSA9ICdsaXN0JztcbiAgICAgIHNldENvbnRleHQoJ1NNVUk6bGlzdDppdGVtOnJvbGUnLCB1bmRlZmluZWQpO1xuICAgIH1cbiAgfVxuXG4gICQ6IGlmIChsaXN0ICYmIGxpc3QudmVydGljYWwgIT09IHZlcnRpY2FsKSB7XG4gICAgbGlzdC52ZXJ0aWNhbCA9IHZlcnRpY2FsO1xuICB9XG5cbiAgJDogaWYgKGxpc3QgJiYgbGlzdC53cmFwRm9jdXMgIT09IHdyYXBGb2N1cykge1xuICAgIGxpc3Qud3JhcEZvY3VzID0gd3JhcEZvY3VzO1xuICB9XG5cbiAgJDogaWYgKGxpc3QgJiYgbGlzdC5zaW5nbGVTZWxlY3Rpb24gIT09IHNpbmdsZVNlbGVjdGlvbikge1xuICAgIGxpc3Quc2luZ2xlU2VsZWN0aW9uID0gc2luZ2xlU2VsZWN0aW9uO1xuICB9XG5cbiAgJDogaWYgKGxpc3QgJiYgc2luZ2xlU2VsZWN0aW9uICYmIGxpc3Quc2VsZWN0ZWRJbmRleCAhPT0gc2VsZWN0ZWRJbmRleCkge1xuICAgIGxpc3Quc2VsZWN0ZWRJbmRleCA9IHNlbGVjdGVkSW5kZXg7XG4gIH1cblxuICBpZiAoYWRkTGF5b3V0TGlzdGVuZXIpIHtcbiAgICByZW1vdmVMYXlvdXRMaXN0ZW5lciA9IGFkZExheW91dExpc3RlbmVyKGxheW91dCk7XG4gIH1cblxuICBvbk1vdW50KGFzeW5jICgpID0+IHtcbiAgICBpZiAoaW5zdGFudGlhdGUgIT09IGZhbHNlKSB7XG4gICAgICBsaXN0ID0gbmV3IE1EQ0xpc3QoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3QgPSBhd2FpdCBnZXRJbnN0YW5jZSgpO1xuICAgIH1cbiAgICBpZiAoc2luZ2xlU2VsZWN0aW9uKSB7XG4gICAgICBsaXN0LmluaXRpYWxpemVMaXN0VHlwZSgpO1xuICAgICAgc2VsZWN0ZWRJbmRleCA9IGxpc3Quc2VsZWN0ZWRJbmRleDtcbiAgICB9XG4gIH0pO1xuXG4gIG9uRGVzdHJveSgoKSA9PiB7XG4gICAgaWYgKGluc3RhbnRpYXRlICE9PSBmYWxzZSkge1xuICAgICAgbGlzdCAmJiBsaXN0LmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBpZiAocmVtb3ZlTGF5b3V0TGlzdGVuZXIpIHtcbiAgICAgIHJlbW92ZUxheW91dExpc3RlbmVyKCk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBoYW5kbGVBY3Rpb24oZSkge1xuICAgIGlmIChsaXN0ICYmIGxpc3QubGlzdEVsZW1lbnRzW2UuZGV0YWlsLmluZGV4XS5jbGFzc0xpc3QuY29udGFpbnMoJ21kYy1saXN0LWl0ZW0tLWRpc2FibGVkJykpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGxpc3Quc2VsZWN0ZWRJbmRleCA9IHNlbGVjdGVkSW5kZXg7XG4gICAgfSBlbHNlIGlmIChsaXN0ICYmIGxpc3Quc2VsZWN0ZWRJbmRleCA9PT0gZS5kZXRhaWwuaW5kZXgpIHtcbiAgICAgIHNlbGVjdGVkSW5kZXggPSBlLmRldGFpbC5pbmRleDtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gbGF5b3V0KC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbGlzdC5sYXlvdXQoLi4uYXJncyk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gc2V0RW5hYmxlZCguLi5hcmdzKSB7XG4gICAgcmV0dXJuIGxpc3Quc2V0RW5hYmxlZCguLi5hcmdzKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0Rm91bmRhdGlvbiguLi5hcmdzKSB7XG4gICAgcmV0dXJuIGxpc3QuZ2V0RGVmYXVsdEZvdW5kYXRpb24oLi4uYXJncyk7XG4gIH1cbjwvc2NyaXB0PiIsInsjaWYgbmF2ICYmIGhyZWZ9XG4gIDxhXG4gICAgYmluZDp0aGlzPXtlbGVtZW50fVxuICAgIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gICAgdXNlOmZvcndhcmRFdmVudHNcbiAgICBjbGFzcz1cIlxuICAgICAgbWRjLWxpc3QtaXRlbVxuICAgICAge2NsYXNzTmFtZX1cbiAgICAgIHthY3RpdmF0ZWQgPyAnbWRjLWxpc3QtaXRlbS0tYWN0aXZhdGVkJyA6ICcnfVxuICAgICAge3NlbGVjdGVkID8gJ21kYy1saXN0LWl0ZW0tLXNlbGVjdGVkJyA6ICcnfVxuICAgICAge2Rpc2FibGVkID8gJ21kYy1saXN0LWl0ZW0tLWRpc2FibGVkJyA6ICcnfVxuICAgIFwiXG4gICAgdXNlOlJpcHBsZT17W3JpcHBsZSwge3VuYm91bmRlZDogZmFsc2UsIGNvbG9yfV19XG4gICAge2hyZWZ9XG4gICAgey4uLihhY3RpdmF0ZWQgPyB7J2FyaWEtY3VycmVudCc6ICdwYWdlJ30gOiB7fSl9XG4gICAge3RhYmluZGV4fVxuICAgIG9uOmNsaWNrPXthY3Rpb259XG4gICAgb246a2V5ZG93bj17aGFuZGxlS2V5ZG93bn1cbiAgICB7Li4ucHJvcHN9XG4gID48c2xvdD48L3Nsb3Q+PC9hPlxuezplbHNlIGlmIG5hdiAmJiAhaHJlZn1cbiAgPHNwYW5cbiAgICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gICAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgICB1c2U6Zm9yd2FyZEV2ZW50c1xuICAgIGNsYXNzPVwiXG4gICAgICBtZGMtbGlzdC1pdGVtXG4gICAgICB7Y2xhc3NOYW1lfVxuICAgICAge2FjdGl2YXRlZCA/ICdtZGMtbGlzdC1pdGVtLS1hY3RpdmF0ZWQnIDogJyd9XG4gICAgICB7c2VsZWN0ZWQgPyAnbWRjLWxpc3QtaXRlbS0tc2VsZWN0ZWQnIDogJyd9XG4gICAgICB7ZGlzYWJsZWQgPyAnbWRjLWxpc3QtaXRlbS0tZGlzYWJsZWQnIDogJyd9XG4gICAgXCJcbiAgICB1c2U6UmlwcGxlPXtbcmlwcGxlLCB7dW5ib3VuZGVkOiBmYWxzZSwgY29sb3J9XX1cbiAgICB7Li4uKGFjdGl2YXRlZCA/IHsnYXJpYS1jdXJyZW50JzogJ3BhZ2UnfSA6IHt9KX1cbiAgICB7dGFiaW5kZXh9XG4gICAgb246Y2xpY2s9e2FjdGlvbn1cbiAgICBvbjprZXlkb3duPXtoYW5kbGVLZXlkb3dufVxuICAgIHsuLi5wcm9wc31cbiAgPjxzbG90Pjwvc2xvdD48L3NwYW4+XG57OmVsc2V9XG4gIDxsaVxuICAgIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgICB1c2U6dXNlQWN0aW9ucz17dXNlfVxuICAgIHVzZTpmb3J3YXJkRXZlbnRzXG4gICAgY2xhc3M9XCJcbiAgICAgIG1kYy1saXN0LWl0ZW1cbiAgICAgIHtjbGFzc05hbWV9XG4gICAgICB7YWN0aXZhdGVkID8gJ21kYy1saXN0LWl0ZW0tLWFjdGl2YXRlZCcgOiAnJ31cbiAgICAgIHtzZWxlY3RlZCA/ICdtZGMtbGlzdC1pdGVtLS1zZWxlY3RlZCcgOiAnJ31cbiAgICAgIHtkaXNhYmxlZCA/ICdtZGMtbGlzdC1pdGVtLS1kaXNhYmxlZCcgOiAnJ31cbiAgICAgIHsocm9sZSA9PT0gJ21lbnVpdGVtJyAmJiBzZWxlY3RlZCkgPyAnbWRjLW1lbnUtaXRlbS0tc2VsZWN0ZWQnIDogJyd9XG4gICAgXCJcbiAgICB1c2U6UmlwcGxlPXtbcmlwcGxlLCB7dW5ib3VuZGVkOiBmYWxzZSwgY29sb3J9XX1cbiAgICB7cm9sZX1cbiAgICB7Li4uKHJvbGUgPT09ICdvcHRpb24nID8geydhcmlhLXNlbGVjdGVkJzogKHNlbGVjdGVkID8gJ3RydWUnIDogJ2ZhbHNlJyl9IDoge30pfVxuICAgIHsuLi4oKHJvbGUgPT09ICdyYWRpbycgfHwgcm9sZSA9PT0gJ2NoZWNrYm94JykgPyB7J2FyaWEtY2hlY2tlZCc6IChjaGVja2VkID8gJ3RydWUnIDogJ2ZhbHNlJyl9IDoge30pfVxuICAgIHt0YWJpbmRleH1cbiAgICBvbjpjbGljaz17YWN0aW9ufVxuICAgIG9uOmtleWRvd249e2hhbmRsZUtleWRvd259XG4gICAgey4uLnByb3BzfVxuICA+PHNsb3Q+PC9zbG90PjwvbGk+XG57L2lmfVxuXG48c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgbGV0IGNvdW50ZXIgPSAwO1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7b25Nb3VudCwgb25EZXN0cm95LCBnZXRDb250ZXh0LCBzZXRDb250ZXh0LCBjcmVhdGVFdmVudERpc3BhdGNoZXJ9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7Y3VycmVudF9jb21wb25lbnR9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7Zm9yd2FyZEV2ZW50c0J1aWxkZXJ9IGZyb20gJ0BzbXVpL2NvbW1vbi9mb3J3YXJkRXZlbnRzLmpzJztcbiAgaW1wb3J0IHtleGNsdWRlfSBmcm9tICdAc211aS9jb21tb24vZXhjbHVkZS5qcyc7XG4gIGltcG9ydCB7dXNlQWN0aW9uc30gZnJvbSAnQHNtdWkvY29tbW9uL3VzZUFjdGlvbnMuanMnO1xuICBpbXBvcnQgUmlwcGxlIGZyb20gJ0BzbXVpL3JpcHBsZS9iYXJlLmpzJztcblxuICBjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoY3VycmVudF9jb21wb25lbnQpO1xuICBsZXQgY2hlY2tlZCA9IGZhbHNlO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG4gIGxldCBjbGFzc05hbWUgPSAnJztcbiAgZXhwb3J0IHtjbGFzc05hbWUgYXMgY2xhc3N9O1xuICBleHBvcnQgbGV0IHJpcHBsZSA9IHRydWU7XG4gIGV4cG9ydCBsZXQgY29sb3IgPSBudWxsO1xuICBleHBvcnQgbGV0IG5vbkludGVyYWN0aXZlID0gZ2V0Q29udGV4dCgnU01VSTpsaXN0Om5vbkludGVyYWN0aXZlJyk7XG4gIGV4cG9ydCBsZXQgYWN0aXZhdGVkID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgcm9sZSA9IGdldENvbnRleHQoJ1NNVUk6bGlzdDppdGVtOnJvbGUnKTtcbiAgZXhwb3J0IGxldCBzZWxlY3RlZCA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGRpc2FibGVkID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgdGFiaW5kZXggPSAhbm9uSW50ZXJhY3RpdmUgJiYgIWRpc2FibGVkICYmIChzZWxlY3RlZCB8fCBjaGVja2VkKSAmJiAnMCcgfHwgJy0xJztcbiAgZXhwb3J0IGxldCBocmVmID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgaW5wdXRJZCA9ICdTTVVJLWZvcm0tZmllbGQtbGlzdC0nKyhjb3VudGVyKyspO1xuXG4gICQ6IHByb3BzID0gZXhjbHVkZSgkJHByb3BzLCBbJ3VzZScsICdjbGFzcycsICdyaXBwbGUnLCAnY29sb3InLCAnbm9uSW50ZXJhY3RpdmUnLCAnYWN0aXZhdGVkJywgJ3NlbGVjdGVkJywgJ2Rpc2FibGVkJywgJ3RhYmluZGV4JywgJ2hyZWYnLCAnaW5wdXRJZCddKTtcblxuICBsZXQgZWxlbWVudDtcbiAgbGV0IGFkZFRhYmluZGV4SWZOb0l0ZW1zU2VsZWN0ZWRSYWY7XG4gIGxldCBuYXYgPSBnZXRDb250ZXh0KCdTTVVJOmxpc3Q6aXRlbTpuYXYnKTtcblxuICBzZXRDb250ZXh0KCdTTVVJOmdlbmVyaWM6aW5wdXQ6cHJvcHMnLCB7aWQ6IGlucHV0SWR9KTtcbiAgc2V0Q29udGV4dCgnU01VSTpnZW5lcmljOmlucHV0OnNldENoZWNrZWQnLCBzZXRDaGVja2VkKTtcblxuICBvbk1vdW50KCgpID0+IHtcbiAgICAvLyBUYWJpbmRleCBuZWVkcyB0byBiZSAnMCcgaWYgdGhpcyBpcyB0aGUgZmlyc3Qgbm9uLWRpc2FibGVkIGxpc3QgaXRlbSwgYW5kXG4gICAgLy8gbm8gb3RoZXIgaXRlbSBpcyBzZWxlY3RlZC5cblxuICAgIGlmICghc2VsZWN0ZWQgJiYgIW5vbkludGVyYWN0aXZlKSB7XG4gICAgICBsZXQgZmlyc3QgPSB0cnVlO1xuICAgICAgbGV0IGVsID0gZWxlbWVudDtcbiAgICAgIHdoaWxlIChlbC5wcmV2aW91c1NpYmxpbmcpIHtcbiAgICAgICAgZWwgPSBlbC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIGlmIChlbC5ub2RlVHlwZSA9PT0gMSAmJiBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ21kYy1saXN0LWl0ZW0nKSAmJiAhZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZGMtbGlzdC1pdGVtLS1kaXNhYmxlZCcpKSB7XG4gICAgICAgICAgZmlyc3QgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGZpcnN0KSB7XG4gICAgICAgIC8vIFRoaXMgaXMgZmlyc3QsIHNvIG5vdyBzZXQgdXAgYSBjaGVjayB0aGF0IG5vIG90aGVyIGl0ZW1zIGFyZVxuICAgICAgICAvLyBzZWxlY3RlZC5cbiAgICAgICAgYWRkVGFiaW5kZXhJZk5vSXRlbXNTZWxlY3RlZFJhZiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYWRkVGFiaW5kZXhJZk5vSXRlbXNTZWxlY3RlZCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBvbkRlc3Ryb3koKCkgPT4ge1xuICAgIGlmIChhZGRUYWJpbmRleElmTm9JdGVtc1NlbGVjdGVkUmFmKSB7XG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoYWRkVGFiaW5kZXhJZk5vSXRlbXNTZWxlY3RlZFJhZik7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBhZGRUYWJpbmRleElmTm9JdGVtc1NlbGVjdGVkKCkge1xuICAgIC8vIExvb2sgdGhyb3VnaCBuZXh0IHNpYmxpbmdzIHRvIHNlZSBpZiBub25lIG9mIHRoZW0gYXJlIHNlbGVjdGVkLlxuICAgIGxldCBub25lU2VsZWN0ZWQgPSB0cnVlO1xuICAgIGxldCBlbCA9IGVsZW1lbnQ7XG4gICAgd2hpbGUgKGVsLm5leHRTaWJsaW5nKSB7XG4gICAgICBlbCA9IGVsLm5leHRTaWJsaW5nO1xuICAgICAgaWYgKGVsLm5vZGVUeXBlID09PSAxICYmIGVsLmNsYXNzTGlzdC5jb250YWlucygnbWRjLWxpc3QtaXRlbScpICYmIGVsLmF0dHJpYnV0ZXNbJ3RhYmluZGV4J10gJiYgZWwuYXR0cmlidXRlc1sndGFiaW5kZXgnXS52YWx1ZSA9PT0gJzAnKSB7XG4gICAgICAgIG5vbmVTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG5vbmVTZWxlY3RlZCkge1xuICAgICAgLy8gVGhpcyBpcyB0aGUgZmlyc3QgZWxlbWVudCwgYW5kIG5vIG90aGVyIGVsZW1lbnQgaXMgc2VsZWN0ZWQsIHNvIHRoZVxuICAgICAgLy8gdGFiaW5kZXggc2hvdWxkIGJlICcwJy5cbiAgICAgIHRhYmluZGV4ID0gJzAnO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFjdGlvbihlKSB7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BhdGNoKCdTTVVJOmFjdGlvbicsIGUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUtleWRvd24oZSkge1xuICAgIGNvbnN0IGlzRW50ZXIgPSBlLmtleSA9PT0gJ0VudGVyJyB8fCBlLmtleUNvZGUgPT09IDEzO1xuICAgIGNvbnN0IGlzU3BhY2UgPSBlLmtleSA9PT0gJ1NwYWNlJyB8fCBlLmtleUNvZGUgPT09IDMyO1xuICAgIGlmIChpc0VudGVyIHx8IGlzU3BhY2UpIHtcbiAgICAgIGFjdGlvbihlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRDaGVja2VkKGlzQ2hlY2tlZCkge1xuICAgIGNoZWNrZWQgPSBpc0NoZWNrZWQ7XG4gICAgdGFiaW5kZXggPSAhbm9uSW50ZXJhY3RpdmUgJiYgIWRpc2FibGVkICYmIChzZWxlY3RlZCB8fCBjaGVja2VkKSAmJiAnMCcgfHwgJy0xJztcbiAgfVxuPC9zY3JpcHQ+IiwiaW1wb3J0IHtjbGFzc0FkZGVyQnVpbGRlcn0gZnJvbSAnQHNtdWkvY29tbW9uL2NsYXNzQWRkZXJCdWlsZGVyLmpzJztcbmltcG9ydCBTcGFuIGZyb20gJ0BzbXVpL2NvbW1vbi9TcGFuLnN2ZWx0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzQWRkZXJCdWlsZGVyKHtcbiAgY2xhc3M6ICdtZGMtbGlzdC1pdGVtX190ZXh0JyxcbiAgY29tcG9uZW50OiBTcGFuLFxuICBjb250ZXh0czoge31cbn0pOyIsImltcG9ydCB7Y2xhc3NBZGRlckJ1aWxkZXJ9IGZyb20gJ0BzbXVpL2NvbW1vbi9jbGFzc0FkZGVyQnVpbGRlci5qcyc7XG5pbXBvcnQgU3BhbiBmcm9tICdAc211aS9jb21tb24vU3Bhbi5zdmVsdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzc0FkZGVyQnVpbGRlcih7XG4gIGNsYXNzOiAnbWRjLWxpc3QtaXRlbV9fcHJpbWFyeS10ZXh0JyxcbiAgY29tcG9uZW50OiBTcGFuLFxuICBjb250ZXh0czoge31cbn0pOyIsImltcG9ydCB7Y2xhc3NBZGRlckJ1aWxkZXJ9IGZyb20gJ0BzbXVpL2NvbW1vbi9jbGFzc0FkZGVyQnVpbGRlci5qcyc7XG5pbXBvcnQgU3BhbiBmcm9tICdAc211aS9jb21tb24vU3Bhbi5zdmVsdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzc0FkZGVyQnVpbGRlcih7XG4gIGNsYXNzOiAnbWRjLWxpc3QtaXRlbV9fc2Vjb25kYXJ5LXRleHQnLFxuICBjb21wb25lbnQ6IFNwYW4sXG4gIGNvbnRleHRzOiB7fVxufSk7IiwiaW1wb3J0IHtjbGFzc0FkZGVyQnVpbGRlcn0gZnJvbSAnQHNtdWkvY29tbW9uL2NsYXNzQWRkZXJCdWlsZGVyLmpzJztcbmltcG9ydCBTcGFuIGZyb20gJ0BzbXVpL2NvbW1vbi9TcGFuLnN2ZWx0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzQWRkZXJCdWlsZGVyKHtcbiAgY2xhc3M6ICdtZGMtbGlzdC1pdGVtX19tZXRhJyxcbiAgY29tcG9uZW50OiBTcGFuLFxuICBjb250ZXh0czoge31cbn0pOyIsIjxkaXZcbiAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgdXNlOmZvcndhcmRFdmVudHNcbiAgey4uLmV4Y2x1ZGUoJCRwcm9wcywgWyd1c2UnXSl9XG4+PHNsb3Q+PC9zbG90PjwvZGl2PlxuXG48c2NyaXB0PlxuICBpbXBvcnQge2N1cnJlbnRfY29tcG9uZW50fSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQge2ZvcndhcmRFdmVudHNCdWlsZGVyfSBmcm9tICcuL2ZvcndhcmRFdmVudHMuanMnO1xuICBpbXBvcnQge2V4Y2x1ZGV9IGZyb20gJy4vZXhjbHVkZS5qcyc7XG4gIGltcG9ydCB7dXNlQWN0aW9uc30gZnJvbSAnLi91c2VBY3Rpb25zLmpzJztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoY3VycmVudF9jb21wb25lbnQpO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG48L3NjcmlwdD4iLCJpbXBvcnQge2NsYXNzQWRkZXJCdWlsZGVyfSBmcm9tICdAc211aS9jb21tb24vY2xhc3NBZGRlckJ1aWxkZXIuanMnO1xuaW1wb3J0IERpdiBmcm9tICdAc211aS9jb21tb24vRGl2LnN2ZWx0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzQWRkZXJCdWlsZGVyKHtcbiAgY2xhc3M6ICdtZGMtbGlzdC1ncm91cCcsXG4gIGNvbXBvbmVudDogRGl2LFxuICBjb250ZXh0czoge31cbn0pOyIsIjxoM1xuICB1c2U6dXNlQWN0aW9ucz17dXNlfVxuICB1c2U6Zm9yd2FyZEV2ZW50c1xuICB7Li4uZXhjbHVkZSgkJHByb3BzLCBbJ3VzZSddKX1cbj48c2xvdD48L3Nsb3Q+PC9oMz5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHtjdXJyZW50X2NvbXBvbmVudH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHtmb3J3YXJkRXZlbnRzQnVpbGRlcn0gZnJvbSAnLi9mb3J3YXJkRXZlbnRzLmpzJztcbiAgaW1wb3J0IHtleGNsdWRlfSBmcm9tICcuL2V4Y2x1ZGUuanMnO1xuICBpbXBvcnQge3VzZUFjdGlvbnN9IGZyb20gJy4vdXNlQWN0aW9ucy5qcyc7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGN1cnJlbnRfY29tcG9uZW50KTtcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuPC9zY3JpcHQ+IiwiaW1wb3J0IHtjbGFzc0FkZGVyQnVpbGRlcn0gZnJvbSAnQHNtdWkvY29tbW9uL2NsYXNzQWRkZXJCdWlsZGVyLmpzJztcbmltcG9ydCBIMyBmcm9tICdAc211aS9jb21tb24vSDMuc3ZlbHRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3NBZGRlckJ1aWxkZXIoe1xuICBjbGFzczogJ21kYy1saXN0LWdyb3VwX19zdWJoZWFkZXInLFxuICBjb21wb25lbnQ6IEgzLFxuICBjb250ZXh0czoge31cbn0pOyIsInsjaWYgZ3JvdXAgfHwgbmF2fVxuICA8aHJcbiAgICB1c2U6dXNlQWN0aW9ucz17dXNlfVxuICAgIHVzZTpmb3J3YXJkRXZlbnRzXG4gICAgY2xhc3M9XCJcbiAgICAgIG1kYy1saXN0LWRpdmlkZXJcbiAgICAgIHtjbGFzc05hbWV9XG4gICAgICB7cGFkZGVkID8gJ21kYy1saXN0LWRpdmlkZXItLXBhZGRlZCcgOiAnJ31cbiAgICAgIHtpbnNldCA/ICdtZGMtbGlzdC1kaXZpZGVyLS1pbnNldCcgOiAnJ31cbiAgICBcIlxuICAgIHsuLi5wcm9wc31cbiAgLz5cbns6ZWxzZX1cbiAgPGxpXG4gICAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgICB1c2U6Zm9yd2FyZEV2ZW50c1xuICAgIGNsYXNzPVwiXG4gICAgICBtZGMtbGlzdC1kaXZpZGVyXG4gICAgICB7Y2xhc3NOYW1lfVxuICAgICAge3BhZGRlZCA/ICdtZGMtbGlzdC1kaXZpZGVyLS1wYWRkZWQnIDogJyd9XG4gICAgICB7aW5zZXQgPyAnbWRjLWxpc3QtZGl2aWRlci0taW5zZXQnIDogJyd9XG4gICAgXCJcbiAgICByb2xlPVwic2VwYXJhdG9yXCJcbiAgICB7Li4ucHJvcHN9XG4gID48L2xpPlxuey9pZn1cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHtjdXJyZW50X2NvbXBvbmVudH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHtmb3J3YXJkRXZlbnRzQnVpbGRlcn0gZnJvbSAnQHNtdWkvY29tbW9uL2ZvcndhcmRFdmVudHMuanMnO1xuICBpbXBvcnQge2V4Y2x1ZGV9IGZyb20gJ0BzbXVpL2NvbW1vbi9leGNsdWRlLmpzJztcbiAgaW1wb3J0IHt1c2VBY3Rpb25zfSBmcm9tICdAc211aS9jb21tb24vdXNlQWN0aW9ucy5qcyc7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGN1cnJlbnRfY29tcG9uZW50KTtcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gIGV4cG9ydCB7Y2xhc3NOYW1lIGFzIGNsYXNzfTtcbiAgZXhwb3J0IGxldCBncm91cCA9IGZhbHNlO1xuICBleHBvcnQgbGV0IG5hdiA9IGZhbHNlO1xuICBleHBvcnQgbGV0IHBhZGRlZCA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGluc2V0ID0gZmFsc2U7XG5cbiAgJDogcHJvcHMgPSBleGNsdWRlKCQkcHJvcHMsIFsndXNlJywgJ2NsYXNzJywgJ2dyb3VwJywgJ25hdicsICdwYWRkZWQnLCAnaW5zZXQnXSk7XG48L3NjcmlwdD4iLCI8c2NyaXB0PlxyXG4gIGltcG9ydCBCdXR0b24sIHsgR3JvdXAsIEdyb3VwSXRlbSwgTGFiZWwsIEljb24gfSBmcm9tIFwiQHNtdWkvYnV0dG9uXCI7XHJcbiAgaW1wb3J0IE1lbnUgZnJvbSBcIkBzbXVpL21lbnVcIjtcclxuICBpbXBvcnQgTGlzdCwgeyBJdGVtLCBTZXBhcmF0b3IsIFRleHQgfSBmcm9tIFwiQHNtdWkvbGlzdFwiO1xyXG4gIGltcG9ydCBQYWdlIGZyb20gXCIuL1BhZ2Uuc3ZlbHRlXCI7XHJcbiAgaW1wb3J0IEV4YW1wbGUgZnJvbSBcIi4vRXhhbXBsZS5zdmVsdGVcIjtcclxuXHJcbiAgbGV0IGNsaWNrZWQgPSAwO1xyXG4gIGxldCBtZW51O1xyXG4gIGxldCBtZW51MjtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgKiA6Z2xvYmFsKC5teUNsYXNzKSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgKiA6Z2xvYmFsKC5tZGMtYnV0dG9uLCAuc211aS1idXR0b25fX2dyb3VwKSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjRlbTtcclxuICB9XHJcblxyXG4gICogOmdsb2JhbCguc211aS1idXR0b25fX2dyb3VwIC5tZGMtYnV0dG9uKSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuPC9zdHlsZT5cclxuXHJcbjxQYWdlPlxyXG4gIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5CdXR0b248L3NwYW4+XHJcbiAgPHNwYW4gc2xvdD1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICBCdXR0b25zIGFsbG93IHVzZXJzIHRvIHRha2UgYWN0aW9ucywgYW5kIG1ha2UgY2hvaWNlcywgd2l0aCBhIHNpbmdsZSB0YXAuXHJcbiAgPC9zcGFuPlxyXG4gIDxzcGFuIHNsb3Q9XCJpbXBvcnRcIj5cclxuICAgIGltcG9ydCBSYWRpbyBmcm9tIFwiQHNtdWkvcmFkaW9cIjtcclxuICAgIDxiciAvPlxyXG4gICAgaW1wb3J0IEZvcm1GaWVsZCBmcm9tIFwiQHNtdWkvZm9ybS1maWVsZFwiO1xyXG4gIDwvc3Bhbj5cclxuICA8ZGl2IHNsb3Q9XCJjb250ZW50XCI+XHJcbiAgICA8RXhhbXBsZT5cclxuICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiPkNvbnRhaW5lZCBCdXR0b25zPC9zcGFuPlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJ1bmVsZXZhdGVkXCI+XHJcbiAgICAgICAgICA8TGFiZWw+UFJJTUFSWTwvTGFiZWw+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfVxyXG4gICAgICAgICAgdmFyaWFudD1cInVuZWxldmF0ZWRcIj5cclxuICAgICAgICAgIDxMYWJlbD5TRUNPTkRBUlk8L0xhYmVsPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwicmFpc2VkXCI+XHJcbiAgICAgICAgICA8TGFiZWw+UkFJU0VEPC9MYWJlbD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwicmFpc2VkXCI+XHJcbiAgICAgICAgICA8TGFiZWw+UkFJU0VEPC9MYWJlbD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInVuZWxldmF0ZWRcIiBkaXNhYmxlZD5cclxuICAgICAgICAgIDxMYWJlbD5EaXNhYmxlZDwvTGFiZWw+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9FeGFtcGxlPlxyXG4gICAgPEV4YW1wbGU+XHJcbiAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5PdXRsaW5lZCBCdXR0b25zPC9zcGFuPlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgPExhYmVsPk91dGxpbmVkPC9MYWJlbD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgIDxMYWJlbD5PdXRsaW5lZDwvTGFiZWw+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgPExhYmVsPkRpc2FibGVkPC9MYWJlbD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0V4YW1wbGU+XHJcbiAgICA8RXhhbXBsZT5cclxuICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiPlRleHQgQnV0dG9uczwvc3Bhbj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfT5cclxuICAgICAgICAgIDxMYWJlbD5EZWZhdWx0PC9MYWJlbD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfT5cclxuICAgICAgICAgIDxMYWJlbD5EZWZhdWx0PC9MYWJlbD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gZGlzYWJsZWQ+XHJcbiAgICAgICAgICA8TGFiZWw+RGlzYWJsZWQ8L0xhYmVsPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRXhhbXBsZT5cclxuICAgIDxFeGFtcGxlPlxyXG4gICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCI+QnV0dG9ucyB3aXRoIGljb25zPC9zcGFuPlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJ1bmVsZXZhdGVkXCI+XHJcbiAgICAgICAgICA8TGFiZWw+VW5lbGV2YXRlZDwvTGFiZWw+XHJcbiAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGU8L0ljb24+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJ1bmVsZXZhdGVkXCI+XHJcbiAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGU8L0ljb24+XHJcbiAgICAgICAgICA8TGFiZWw+VW5lbGV2YXRlZDwvTGFiZWw+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJyYWlzZWRcIj5cclxuICAgICAgICAgIDxMYWJlbD5SYWlzZWQ8L0xhYmVsPlxyXG4gICAgICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmZhdm9yaXRlPC9JY29uPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwicmFpc2VkXCI+XHJcbiAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGU8L0ljb24+XHJcbiAgICAgICAgICA8TGFiZWw+UmFpc2VkPC9MYWJlbD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcbiAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGU8L0ljb24+XHJcbiAgICAgICAgICA8TGFiZWw+T3V0bGluZWQ8L0xhYmVsPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgIDxMYWJlbD5PdXRsaW5lZDwvTGFiZWw+XHJcbiAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGU8L0ljb24+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PlxyXG4gICAgICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmZhdm9yaXRlPC9JY29uPlxyXG4gICAgICAgICAgPExhYmVsPkxlYWRpbmcgSWNvbjwvTGFiZWw+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PlxyXG4gICAgICAgICAgPExhYmVsPlRyYWlsaW5nIEljb248L0xhYmVsPlxyXG4gICAgICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmZhdm9yaXRlPC9JY29uPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PlxyXG4gICAgICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmZhdm9yaXRlPC9JY29uPlxyXG4gICAgICAgICAgPExhYmVsPkxlYWRpbmcgSWNvbjwvTGFiZWw+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30+XHJcbiAgICAgICAgICA8TGFiZWw+VHJhaWxpbmcgSWNvbjwvTGFiZWw+XHJcbiAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGU8L0ljb24+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9FeGFtcGxlPlxyXG4gICAgPEV4YW1wbGU+XHJcbiAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5WYXJpYXRpb25zPC9zcGFuPlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHJpcHBsZT17ZmFsc2V9PlxyXG4gICAgICAgICAgPExhYmVsPk5vIFJpcHBsZTwvTGFiZWw+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gcmlwcGxlPXtmYWxzZX0+XHJcbiAgICAgICAgICA8TGFiZWw+Tm8gUmlwcGxlPC9MYWJlbD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gZGVuc2U+XHJcbiAgICAgICAgICA8TGFiZWw+RGVuc2U8L0xhYmVsPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IGRlbnNlPlxyXG4gICAgICAgICAgPExhYmVsPkRlbnNlPC9MYWJlbD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gY2xhc3M9XCJteUNsYXNzXCI+XHJcbiAgICAgICAgICA8TGFiZWw+V2l0aCBhIENsYXNzPC9MYWJlbD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc2xvdD1cImhvcml6b250YWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSBjbGFzcz1cIm15Q2xhc3NcIj5cclxuICAgICAgICAgIDxMYWJlbD5XaXRoIGEgQ2xhc3M8L0xhYmVsPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRXhhbXBsZT5cclxuICAgIDxFeGFtcGxlPlxyXG4gICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCI+QnV0dG9uIGdyb3Vwczwvc3Bhbj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEdyb3VwIHZhcmlhbnQ9XCJ1bmVsZXZhdGVkXCI+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJ1bmVsZXZhdGVkXCI+XHJcbiAgICAgICAgICAgIDxMYWJlbD5PbmU8L0xhYmVsPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJ1bmVsZXZhdGVkXCI+XHJcbiAgICAgICAgICAgIDxMYWJlbD5Ud288L0xhYmVsPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJ1bmVsZXZhdGVkXCI+XHJcbiAgICAgICAgICAgIDxMYWJlbD5UaHJlZTwvTGFiZWw+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0dyb3VwPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEdyb3VwIHZhcmlhbnQ9XCJyYWlzZWRcIj5cclxuICAgICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInJhaXNlZFwiPlxyXG4gICAgICAgICAgICA8TGFiZWw+T25lPC9MYWJlbD5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwicmFpc2VkXCI+XHJcbiAgICAgICAgICAgIDxMYWJlbD5Ud288L0xhYmVsPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJyYWlzZWRcIj5cclxuICAgICAgICAgICAgPExhYmVsPlRocmVlPC9MYWJlbD5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvR3JvdXA+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJob3Jpem9udGFsXCIgY2xhc3M9XCJtci04IG1iLThcIj5cclxuICAgICAgICA8R3JvdXAgdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgICA8TGFiZWw+T25lPC9MYWJlbD5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgICAgPExhYmVsPlR3bzwvTGFiZWw+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcbiAgICAgICAgICAgIDxMYWJlbD5UaHJlZTwvTGFiZWw+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0dyb3VwPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEdyb3VwPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfT5cclxuICAgICAgICAgICAgPExhYmVsPk9uZTwvTGFiZWw+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30+XHJcbiAgICAgICAgICAgIDxMYWJlbD5Ud288L0xhYmVsPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PlxyXG4gICAgICAgICAgICA8TGFiZWw+VGhyZWU8L0xhYmVsPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Hcm91cD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0V4YW1wbGU+XHJcbiAgICA8RXhhbXBsZT5cclxuICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiPkJsb2NrIGJ1dHRvbjwvc3Bhbj5cclxuICAgICAgPGRpdiBzbG90PVwidmVydGljYWxcIiBjbGFzcz1cIm1yLTggbWItOFwiPlxyXG4gICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInVuZWxldmF0ZWRcIiBjbGFzcz1cInctZnVsbFwiPlxyXG4gICAgICAgICAgPExhYmVsPkJMT0NLIEJVVFRPTjwvTGFiZWw+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHNsb3Q9XCJ2ZXJ0aWNhbFwiIGNsYXNzPVwibXItOCBtYi04IHctZnVsbFwiPlxyXG4gICAgICAgIDxHcm91cCB2YXJpYW50PVwib3V0bGluZWRcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7XCI+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJ1bmVsZXZhdGVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgc3R5bGU9XCJmbGV4LWdyb3c6IDM7XCI+XHJcbiAgICAgICAgICAgIDxMYWJlbD5QcmltYXJ5PC9MYWJlbD5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfVxyXG4gICAgICAgICAgICB2YXJpYW50PVwidW5lbGV2YXRlZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgc3R5bGU9XCJmbGV4LWdyb3c6IDE7XCI+XHJcbiAgICAgICAgICAgIDxMYWJlbD5TZWNvbmRhcnk8L0xhYmVsPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJ1bmVsZXZhdGVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICBzdHlsZT1cImZsZXgtZ3JvdzogMTtcIj5cclxuICAgICAgICAgICAgPExhYmVsPlNlY29uZGFyeTwvTGFiZWw+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0dyb3VwPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRXhhbXBsZT5cclxuICAgIDxFeGFtcGxlPlxyXG4gICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCI+U3BsaXQgYnV0dG9ucyB1c2luZyBhIGJ1dHRvbiBncm91cDwvc3Bhbj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEdyb3VwIHZhcmlhbnQ9XCJyYWlzZWRcIj5cclxuICAgICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInJhaXNlZFwiPlxyXG4gICAgICAgICAgICA8TGFiZWw+RG8gdGhlIHRoaW5nPC9MYWJlbD5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiB1c2U6R3JvdXBJdGVtPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgb246Y2xpY2s9eygpID0+IG1lbnUuc2V0T3Blbih0cnVlKX1cclxuICAgICAgICAgICAgICB2YXJpYW50PVwicmFpc2VkXCJcclxuICAgICAgICAgICAgICBzdHlsZT1cInBhZGRpbmc6IDA7IG1pbi13aWR0aDogMzZweDtcIj5cclxuICAgICAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgc3R5bGU9XCJtYXJnaW46IDA7XCI+XHJcbiAgICAgICAgICAgICAgICBhcnJvd19kcm9wX2Rvd25cclxuICAgICAgICAgICAgICA8L0ljb24+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8TWVudSBiaW5kOnRoaXM9e21lbnV9IGFuY2hvckNvcm5lcj1cIlRPUF9MRUZUXCI+XHJcbiAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICA8SXRlbSBvbjpTTVVJOmFjdGlvbj17KCkgPT4gY2xpY2tlZCsrfT5cclxuICAgICAgICAgICAgICAgICAgPFRleHQ+VGhpbmcgMTwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgICAgICAgIDxJdGVtIG9uOlNNVUk6YWN0aW9uPXsoKSA9PiBjbGlja2VkKyt9PlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dD5UaGluZyAyPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgICAgICAgPFNlcGFyYXRvciAvPlxyXG4gICAgICAgICAgICAgICAgPEl0ZW0gb246U01VSTphY3Rpb249eygpID0+IGNsaWNrZWQrK30+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0PlRoaW5nIDM8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0dyb3VwPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzbG90PVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibXItOCBtYi04XCI+XHJcbiAgICAgICAgPEdyb3VwIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgICAgPExhYmVsPkRvIHRoZSB0aGluZzwvTGFiZWw+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxkaXYgdXNlOkdyb3VwSXRlbT5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiBtZW51Mi5zZXRPcGVuKHRydWUpfVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9XCJwYWRkaW5nOiAwOyBtaW4td2lkdGg6IDM2cHg7XCI+XHJcbiAgICAgICAgICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIHN0eWxlPVwibWFyZ2luOiAwO1wiPlxyXG4gICAgICAgICAgICAgICAgYXJyb3dfZHJvcF9kb3duXHJcbiAgICAgICAgICAgICAgPC9JY29uPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPE1lbnUgYmluZDp0aGlzPXttZW51Mn0gYW5jaG9yQ29ybmVyPVwiVE9QX0xFRlRcIj5cclxuICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgIDxJdGVtIG9uOlNNVUk6YWN0aW9uPXsoKSA9PiBjbGlja2VkKyt9PlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dD5UaGluZyAxPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgICAgICAgPEl0ZW0gb246U01VSTphY3Rpb249eygpID0+IGNsaWNrZWQrK30+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0PlRoaW5nIDI8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICAgICAgICA8U2VwYXJhdG9yIC8+XHJcbiAgICAgICAgICAgICAgICA8SXRlbSBvbjpTTVVJOmFjdGlvbj17KCkgPT4gY2xpY2tlZCsrfT5cclxuICAgICAgICAgICAgICAgICAgPFRleHQ+VGhpbmcgMzwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvR3JvdXA+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9FeGFtcGxlPlxyXG4gIDwvZGl2PlxyXG48L1BhZ2U+XHJcbiJdLCJuYW1lcyI6WyJjc3NDbGFzc2VzIiwic3RyaW5ncyIsIm51bWJlcnMiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsInRzbGliXzEuX19hc3NpZ24iLCJ0c2xpYl8xLl9fdmFsdWVzIiwidXRpbC5nZXRU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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFFeEIsaUJBQUcsS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQ1QxRSxPQUFPLEdBQUcsQ0FBQztLQUNYLElBQUk7S0FDSixLQUFLOzZDQStCcUIsT0FBTzsrQ0FPYixPQUFPOytDQU1ELE9BQU87K0NBS1csT0FBTzsrQ0FLekIsT0FBTzsrQ0FRUCxPQUFPOytDQUtXLE9BQU87K0NBS3pCLE9BQU87K0NBUVAsT0FBTzsrQ0FLVyxPQUFPO2dEQUt6QixPQUFPO2dEQVFQLE9BQU87Z0RBTVAsT0FBTztnREFNUCxPQUFPO2dEQU1QLE9BQU87Z0RBTVAsT0FBTztnREFNUCxPQUFPO2dEQU1QLE9BQU87Z0RBTVAsT0FBTztnREFNVyxPQUFPO2dEQU1QLE9BQU87Z0RBU3pCLE9BQU87Z0RBS1csT0FBTztnREFLekIsT0FBTztnREFLVyxPQUFPO2dEQUt6QixPQUFPO2dEQUtXLE9BQU87Z0RBU3ZCLE9BQU87Z0RBR1AsT0FBTztnREFHUCxPQUFPO2dEQU9QLE9BQU87Z0RBR1AsT0FBTztnREFHUCxPQUFPO2dEQU9QLE9BQU87Z0RBR1AsT0FBTztnREFHUCxPQUFPO2dEQU9QLE9BQU87Z0RBR1AsT0FBTztnREFHUCxPQUFPO2dEQVNULE9BQU87Z0RBT1gsT0FBTztnREFPUCxPQUFPO2dEQU9QLE9BQU87Z0RBYUQsT0FBTztnQ0FLWCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7bURBU0gsT0FBTztxREFHUCxPQUFPO3FEQUlQLE9BQU87Ozs7Ozs7O2dEQVVqQixPQUFPO2dDQUtYLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSTtxREFTSixPQUFPO3FEQUdQLE9BQU87cURBSVAsT0FBTzs7OzttQkFUdEIsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=

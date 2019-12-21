import { n as noop, s as safe_not_equal, S as SvelteComponentDev, i as init, d as dispatch_dev, c as create_slot, a as assign, o as onMount, e as onDestroy, f as exclude_internal_props, g as element, h as claim_element, j as children, k as detach_dev, m as set_attributes, p as add_location, q as insert_dev, r as get_slot_context, t as get_slot_changes, u as get_spread_update, v as is_function, w as transition_in, x as transition_out, y as current_component, z as binding_callbacks, A as setContext, B as afterUpdate, C as listen_dev, D as run_all, E as getContext, F as empty, G as group_outros, H as check_outros, I as validate_store, J as component_subscribe, K as globals, L as bind, M as create_component, N as claim_component, O as mount_component, P as destroy_component, Q as space, R as claim_space, T as attr_dev, U as append_dev, V as add_flush_callback, W as update_keyed_each, X as text, Y as claim_text, Z as outro_and_destroy_block, _ as set_data_dev, $ as get_spread_object } from './index.400f9120.js';
import { s as styleInject, _ as __extends, a as __assign, M as MDCFoundation, b as MDCComponent, c as MDCRipple, e as exclude, u as useActions, f as forwardEventsBuilder } from './useActions.e52a8e30.js';
import { c as classAdderBuilder, D as Div, S as Span, M as MDCListFoundation, a as MDCList, R as Ripple, L as List, I as Item, T as Text } from './index.d1a4e99c.js';

const subscriber_queue = [];
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = noop) {
    let stop;
    const subscribers = [];
    function set(new_value) {
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (stop) { // store is ready
                const run_queue = !subscriber_queue.length;
                for (let i = 0; i < subscribers.length; i += 1) {
                    const s = subscribers[i];
                    s[1]();
                    subscriber_queue.push(s, value);
                }
                if (run_queue) {
                    for (let i = 0; i < subscriber_queue.length; i += 2) {
                        subscriber_queue[i][0](subscriber_queue[i + 1]);
                    }
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = noop) {
        const subscriber = [run, invalidate];
        subscribers.push(subscriber);
        if (subscribers.length === 1) {
            stop = start(set) || noop;
        }
        run(value);
        return () => {
            const index = subscribers.indexOf(subscriber);
            if (index !== -1) {
                subscribers.splice(index, 1);
            }
            if (subscribers.length === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}

const CONTEXT_KEY = {};

const preload = () => ({});

var css = ".mdc-typography--headline6{font-size:1.25rem;line-height:2rem;letter-spacing:.0125em}.mdc-typography--headline6,.mdc-typography--subtitle2{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-weight:500;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle2{font-size:.875rem;line-height:1.375rem;letter-spacing:.0071428571em}.mdc-typography--body2{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit}:root{--primary-100:#ebf8ff;--primary-200:#bee3f8;--primary-300:#90cdf4;--primary-400:#63b3ed;--primary-500:#4299e1;--primary-600:#3182ce;--primary-700:#2b6cb0;--primary-800:#2c5282;--primary-900:#2a4365;--secondary-100:#fff5f5;--secondary-200:#fed7d7;--secondary-300:#feb2b2;--secondary-400:#fc8181;--secondary-500:#f56565;--secondary-600:#e53e3e;--secondary-700:#c53030;--secondary-800:#9b2c2c;--secondary-900:#742a2a;--primary-color:var(--primary-700);--secondary-color:var(--secondary-700);--primary-font-color:#fff;--secondary-font-color:#fff;--disabled-button-bg-color:#e0e0e0;--font-color:#212121;--other-font-color:#000;--bg-color:#fff;--bg-layer-color:#f5f5f5;--bg-card-color:#fff;--enabled-color:#757575;--disabled-color:#bdbdbd;--switch-toggle-color:#fafafa;--switch-track-color:#4d4d4d;--font-family:\"Montserrat\",sans-serif;--filter:invert(0%);--alert-default-bg-color:var(--primary-200);--alert-solid-bg-color:var(--primary-700);--alert-solid-text-color:\"text-white\";--alert-outline-bg-color:var(--primary-100);--alert-outline-border-color:var(--primary-400);--alert-outline-border-color2:var(--primary-600);--alert-outline-text-color:var(--primary-800)}[data-theme=dark]{--primary-color:var(--primary-400);--secondary-color:var(--secondary-400);--primary-font-color:#000;--secondary-font-color:#000;--disabled-button-bg-color:#1f1f1f;--font-color:#dedede;--other-font-color:#fff;--bg-color:#121212;--bg-layer-color:#333;--bg-card-color:#424242;--enabled-color:#b3b3b3;--disabled-color:#4d4d4d;--switch-toggle-color:#b3b3b3;--switch-track-color:#fff;--filter:invert(100%)}body{--mdc-theme-primary:var(--primary-color);--mdc-theme-secondary:var(--secondary-color);--mdc-theme-on-primary:var(--primary-font-color);--mdc-theme-on-secondary:var(--secondary-font-color);--mdc-text-field-ink-color:var(--other-font-color);--mdc-theme-text-primary-on-background:var(--font-color);--mdc-theme-surface:transparent;--duration:0.5s;--timing:ease;background-color:var(--bg-color);color:var(--font-color);-webkit-transition:color var(--duration) var(--timing),background-color var(--duration) var(--timing);transition:color var(--duration) var(--timing),background-color var(--duration) var(--timing);font-family:var(--font-family)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:var(--disabled-button-bg-color)}.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--disabled-color)}.mdc-select:not(.mdc-select--disabled) .mdc-select__native-control,.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text,.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--other-font-color)}.mdc-select:not(.mdc-select--disabled) .mdc-select__native-control option{color:#000}.mdc-select--with-leading-icon:not(.mdc-select--disabled) .mdc-select__icon{color:var(--enabled-color);opacity:1}.mdc-select__dropdown-icon{-webkit-filter:var(--filter);filter:var(--filter)}.mdc-select--invalid .mdc-select__dropdown-icon{-webkit-filter:invert(0);filter:invert(0)}.mdc-switch--disabled{opacity:.5}.mdc-card__action--icon:not(:disabled){color:var(--enabled-color)}.flex-1-0-auto{-webkit-box-flex:1;flex:1 0 auto}:root{--mdc-theme-primary:#6200ee;--mdc-theme-secondary:#018786;--mdc-theme-background:#fff;--mdc-theme-surface:#fff;--mdc-theme-error:#b71c1c;--mdc-theme-on-primary:#fff;--mdc-theme-on-secondary:#fff;--mdc-theme-on-surface:#000;--mdc-theme-on-error:#fff;--mdc-theme-text-primary-on-background:rgba(0,0,0,0.87);--mdc-theme-text-secondary-on-background:rgba(0,0,0,0.54);--mdc-theme-text-hint-on-background:rgba(0,0,0,0.38);--mdc-theme-text-disabled-on-background:rgba(0,0,0,0.38);--mdc-theme-text-icon-on-background:rgba(0,0,0,0.38);--mdc-theme-text-primary-on-light:rgba(0,0,0,0.87);--mdc-theme-text-secondary-on-light:rgba(0,0,0,0.54);--mdc-theme-text-hint-on-light:rgba(0,0,0,0.38);--mdc-theme-text-disabled-on-light:rgba(0,0,0,0.38);--mdc-theme-text-icon-on-light:rgba(0,0,0,0.38);--mdc-theme-text-primary-on-dark:#fff;--mdc-theme-text-secondary-on-dark:hsla(0,0%,100%,0.7);--mdc-theme-text-hint-on-dark:hsla(0,0%,100%,0.5);--mdc-theme-text-disabled-on-dark:hsla(0,0%,100%,0.5);--mdc-theme-text-icon-on-dark:hsla(0,0%,100%,0.5)}.mdc-theme--primary{color:#6200ee!important;color:var(--mdc-theme-primary,#6200ee)!important}.mdc-theme--on-secondary{color:#fff!important;color:var(--mdc-theme-on-secondary,#fff)!important}.mdc-theme--secondary-bg{background-color:#018786!important;background-color:var(--mdc-theme-secondary,#018786)!important}.mdc-top-app-bar{background-color:#6200ee;background-color:var(--mdc-theme-primary,#6200ee);color:#fff;display:-webkit-box;display:flex;position:fixed;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:justify;justify-content:space-between;box-sizing:border-box;width:100%;z-index:4}.mdc-top-app-bar .mdc-top-app-bar__action-item,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-primary,#fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item:after,.mdc-top-app-bar .mdc-top-app-bar__action-item:before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:before{background-color:#fff}@supports not (-ms-ime-align:auto){.mdc-top-app-bar .mdc-top-app-bar__action-item:after,.mdc-top-app-bar .mdc-top-app-bar__action-item:before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:before{background-color:var(--mdc-theme-on-primary,#fff)}}.mdc-top-app-bar .mdc-top-app-bar__action-item:hover:before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover:before{opacity:.08}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus:before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active:after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}.mdc-top-app-bar__section{display:-webkit-inline-box;display:inline-flex;-webkit-box-flex:1;flex:1 1 auto;-webkit-box-align:center;align-items:center;min-width:0;padding:8px 12px;z-index:1}.mdc-top-app-bar__section--align-start{-webkit-box-pack:start;justify-content:flex-start;-webkit-box-ordinal-group:0;order:-1}.mdc-top-app-bar__section--align-end{-webkit-box-pack:end;justify-content:flex-end;-webkit-box-ordinal-group:2;order:1}.mdc-top-app-bar--short-collapsed{border-radius:0 0 24px 0}.mdc-top-app-bar--short-collapsed[dir=rtl],[dir=rtl] .mdc-top-app-bar--short-collapsed{border-radius:0 0 0 24px}.mdc-top-app-bar--short{top:0;right:auto;left:0;width:100%;-webkit-transition:width .25s cubic-bezier(.4,0,.2,1);transition:width .25s cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short[dir=rtl],[dir=rtl] .mdc-top-app-bar--short{right:0;left:auto}.mdc-top-app-bar--short .mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short-collapsed{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);width:56px;-webkit-transition:width .3s cubic-bezier(.4,0,.2,1);transition:width .3s cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item{-webkit-transition:padding .15s cubic-bezier(.4,0,.2,1);transition:padding .15s cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--dense .mdc-top-app-bar__section{padding:0 4px}.mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,.mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon{align-self:flex-start}.mdc-top-app-bar--fixed{-webkit-transition:box-shadow .2s linear;transition:box-shadow .2s linear}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section{padding:0 12px}@media (max-width:599px){.mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short{-webkit-transition:width .2s cubic-bezier(.4,0,.2,1);transition:width .2s cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed{-webkit-transition:width .25s cubic-bezier(.4,0,.2,1);transition:width .25s cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl],[dir=rtl] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:12px;padding-right:0}}.smui-top-app-bar--static{position:static}.smui-top-app-bar--color-secondary{background-color:#018786;background-color:var(--mdc-theme-secondary,#018786);color:#fff}.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-secondary,#fff)}.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:after,.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:before,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:after,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:before{background-color:#fff}@supports not (-ms-ime-align:auto){.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:after,.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:before,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:after,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:before{background-color:var(--mdc-theme-on-secondary,#fff)}}.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:hover:before,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:hover:before{opacity:.08}.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus:before,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):after,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active:after,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}.mdc-top-app-bar.demo-top-app-bar{background-color:#fff;background-color:var(--mdc-theme-surface,#fff);color:rgba(0,0,0,.87);box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);z-index:7}.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__action-item,.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__navigation-icon{color:#000;color:var(--mdc-theme-on-surface,#000)}.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__action-item:after,.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__action-item:before,.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__navigation-icon:after,.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__navigation-icon:before{background-color:#000}@supports not (-ms-ime-align:auto){.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__action-item:after,.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__action-item:before,.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__navigation-icon:after,.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__navigation-icon:before{background-color:var(--mdc-theme-on-surface,#000)}}.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__action-item:hover:before,.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__navigation-icon:hover:before{opacity:.04}.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus:before,.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):after,.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active:after,.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}html{height:100vh;width:100vw;position:fixed}app,body{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:100%}.drawer-container,app,body{display:-webkit-box;display:flex}.drawer-container{-webkit-box-flex:1;flex-grow:1;height:1000}.demo-drawer,.demo-main-content{overflow:auto;height:100%}.demo-drawer.demo-drawer-adjust{padding-bottom:64px}.demo-app-content{-webkit-box-flex:1;flex:auto;position:relative;width:0;flex-grow:1}.demo-main-content{overflow:auto;display:-webkit-box;display:flex}.demo-main-content section{padding:16px;width:100%;box-sizing:border-box}.demo-main-content section:after{height:32px;display:block;content:\" \"}section>div{margin:1em 0 .6em}.status{max-width:100%;font-size:.9em;word-break:break-word;white-space:normal}";
styleInject(css);

var css$1 = ".mdc-typography--headline6{font-size:1.25rem;line-height:2rem;letter-spacing:.0125em}.mdc-typography--headline6,.mdc-typography--subtitle2{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-weight:500;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle2{font-size:.875rem;line-height:1.375rem;letter-spacing:.0071428571em}.mdc-typography--body2{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit}:root{--primary-100:#ebf8ff;--primary-200:#bee3f8;--primary-300:#90cdf4;--primary-400:#63b3ed;--primary-500:#4299e1;--primary-600:#3182ce;--primary-700:#2b6cb0;--primary-800:#2c5282;--primary-900:#2a4365;--secondary-100:#fff5f5;--secondary-200:#fed7d7;--secondary-300:#feb2b2;--secondary-400:#fc8181;--secondary-500:#f56565;--secondary-600:#e53e3e;--secondary-700:#c53030;--secondary-800:#9b2c2c;--secondary-900:#742a2a;--primary-color:var(--primary-700);--secondary-color:var(--secondary-700);--primary-font-color:#fff;--secondary-font-color:#fff;--disabled-button-bg-color:#e0e0e0;--font-color:#212121;--other-font-color:#000;--bg-color:#fff;--bg-layer-color:#f5f5f5;--bg-card-color:#fff;--enabled-color:#757575;--disabled-color:#bdbdbd;--switch-toggle-color:#fafafa;--switch-track-color:#4d4d4d;--font-family:\"Montserrat\",sans-serif;--filter:invert(0%);--alert-default-bg-color:var(--primary-200);--alert-solid-bg-color:var(--primary-700);--alert-solid-text-color:\"text-white\";--alert-outline-bg-color:var(--primary-100);--alert-outline-border-color:var(--primary-400);--alert-outline-border-color2:var(--primary-600);--alert-outline-text-color:var(--primary-800)}[data-theme=dark]{--primary-color:var(--primary-400);--secondary-color:var(--secondary-400);--primary-font-color:#000;--secondary-font-color:#000;--disabled-button-bg-color:#1f1f1f;--font-color:#dedede;--other-font-color:#fff;--bg-color:#121212;--bg-layer-color:#333;--bg-card-color:#424242;--enabled-color:#b3b3b3;--disabled-color:#4d4d4d;--switch-toggle-color:#b3b3b3;--switch-track-color:#fff;--filter:invert(100%)}body{--mdc-theme-primary:var(--primary-color);--mdc-theme-secondary:var(--secondary-color);--mdc-theme-on-primary:var(--primary-font-color);--mdc-theme-on-secondary:var(--secondary-font-color);--mdc-text-field-ink-color:var(--other-font-color);--mdc-theme-text-primary-on-background:var(--font-color);--mdc-theme-surface:transparent;--duration:0.5s;--timing:ease;background-color:var(--bg-color);color:var(--font-color);-webkit-transition:color var(--duration) var(--timing),background-color var(--duration) var(--timing);transition:color var(--duration) var(--timing),background-color var(--duration) var(--timing);font-family:var(--font-family)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:var(--disabled-button-bg-color)}.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--disabled-color)}.mdc-select:not(.mdc-select--disabled) .mdc-select__native-control,.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text,.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--other-font-color)}.mdc-select:not(.mdc-select--disabled) .mdc-select__native-control option{color:#000}.mdc-select--with-leading-icon:not(.mdc-select--disabled) .mdc-select__icon{color:var(--enabled-color);opacity:1}.mdc-select__dropdown-icon{-webkit-filter:var(--filter);filter:var(--filter)}.mdc-select--invalid .mdc-select__dropdown-icon{-webkit-filter:invert(0);filter:invert(0)}.mdc-switch--disabled{opacity:.5}.mdc-card__action--icon:not(:disabled){color:var(--enabled-color)}.flex-1-0-auto{-webkit-box-flex:1;flex:1 0 auto}.mdc-top-app-bar{background-color:#6200ee;background-color:var(--mdc-theme-primary,#6200ee);color:#fff;display:-webkit-box;display:flex;position:fixed;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:justify;justify-content:space-between;box-sizing:border-box;width:100%;z-index:4}.mdc-top-app-bar .mdc-top-app-bar__action-item,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-primary,#fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item:after,.mdc-top-app-bar .mdc-top-app-bar__action-item:before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:before{background-color:#fff}@supports not (-ms-ime-align:auto){.mdc-top-app-bar .mdc-top-app-bar__action-item:after,.mdc-top-app-bar .mdc-top-app-bar__action-item:before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:before{background-color:var(--mdc-theme-on-primary,#fff)}}.mdc-top-app-bar .mdc-top-app-bar__action-item:hover:before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover:before{opacity:.08}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus:before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active:after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}.mdc-top-app-bar__section{display:-webkit-inline-box;display:inline-flex;-webkit-box-flex:1;flex:1 1 auto;-webkit-box-align:center;align-items:center;min-width:0;padding:8px 12px;z-index:1}.mdc-top-app-bar__section--align-start{-webkit-box-pack:start;justify-content:flex-start;-webkit-box-ordinal-group:0;order:-1}.mdc-top-app-bar__section--align-end{-webkit-box-pack:end;justify-content:flex-end;-webkit-box-ordinal-group:2;order:1}.mdc-top-app-bar--short-collapsed{border-radius:0 0 24px 0}.mdc-top-app-bar--short-collapsed[dir=rtl],[dir=rtl] .mdc-top-app-bar--short-collapsed{border-radius:0 0 0 24px}.mdc-top-app-bar--short{top:0;right:auto;left:0;width:100%;-webkit-transition:width .25s cubic-bezier(.4,0,.2,1);transition:width .25s cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short[dir=rtl],[dir=rtl] .mdc-top-app-bar--short{right:0;left:auto}.mdc-top-app-bar--short .mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short-collapsed{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);width:56px;-webkit-transition:width .3s cubic-bezier(.4,0,.2,1);transition:width .3s cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item{-webkit-transition:padding .15s cubic-bezier(.4,0,.2,1);transition:padding .15s cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--dense .mdc-top-app-bar__section{padding:0 4px}.mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,.mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon{align-self:flex-start}.mdc-top-app-bar--fixed{-webkit-transition:box-shadow .2s linear;transition:box-shadow .2s linear}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section{padding:0 12px}@media (max-width:599px){.mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short{-webkit-transition:width .2s cubic-bezier(.4,0,.2,1);transition:width .2s cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed{-webkit-transition:width .25s cubic-bezier(.4,0,.2,1);transition:width .25s cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl],[dir=rtl] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:12px;padding-right:0}}.smui-top-app-bar--static{position:static}.smui-top-app-bar--color-secondary{background-color:#018786;background-color:var(--mdc-theme-secondary,#018786);color:#fff}.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-secondary,#fff)}.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:after,.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:before,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:after,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:before{background-color:#fff}@supports not (-ms-ime-align:auto){.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:after,.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:before,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:after,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:before{background-color:var(--mdc-theme-on-secondary,#fff)}}.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:hover:before,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:hover:before{opacity:.08}.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus:before,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):after,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active:after,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}";
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
    FIXED_CLASS: 'mdc-top-app-bar--fixed',
    FIXED_SCROLLED_CLASS: 'mdc-top-app-bar--fixed-scrolled',
    SHORT_CLASS: 'mdc-top-app-bar--short',
    SHORT_COLLAPSED_CLASS: 'mdc-top-app-bar--short-collapsed',
    SHORT_HAS_ACTION_ITEM_CLASS: 'mdc-top-app-bar--short-has-action-item',
};
var numbers = {
    DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
    MAX_TOP_APP_BAR_HEIGHT: 128,
};
var strings = {
    ACTION_ITEM_SELECTOR: '.mdc-top-app-bar__action-item',
    NAVIGATION_EVENT: 'MDCTopAppBar:nav',
    NAVIGATION_ICON_SELECTOR: '.mdc-top-app-bar__navigation-icon',
    ROOT_SELECTOR: '.mdc-top-app-bar',
    TITLE_SELECTOR: '.mdc-top-app-bar__title',
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
var MDCTopAppBarBaseFoundation = /** @class */ (function (_super) {
    __extends(MDCTopAppBarBaseFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */
    function MDCTopAppBarBaseFoundation(adapter) {
        return _super.call(this, __assign({}, MDCTopAppBarBaseFoundation.defaultAdapter, adapter)) || this;
    }
    Object.defineProperty(MDCTopAppBarBaseFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTopAppBarBaseFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTopAppBarBaseFoundation, "numbers", {
        get: function () {
            return numbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTopAppBarBaseFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTopAppBarAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                setStyle: function () { return undefined; },
                getTopAppBarHeight: function () { return 0; },
                notifyNavigationIconClicked: function () { return undefined; },
                getViewportScrollY: function () { return 0; },
                getTotalActionItems: function () { return 0; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    /** Other variants of TopAppBar foundation overrides this method */
    MDCTopAppBarBaseFoundation.prototype.handleTargetScroll = function () { }; // tslint:disable-line:no-empty
    /** Other variants of TopAppBar foundation overrides this method */
    MDCTopAppBarBaseFoundation.prototype.handleWindowResize = function () { }; // tslint:disable-line:no-empty
    MDCTopAppBarBaseFoundation.prototype.handleNavigationClick = function () {
        this.adapter_.notifyNavigationIconClicked();
    };
    return MDCTopAppBarBaseFoundation;
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
var INITIAL_VALUE = 0;
var MDCTopAppBarFoundation = /** @class */ (function (_super) {
    __extends(MDCTopAppBarFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */
    function MDCTopAppBarFoundation(adapter) {
        var _this = _super.call(this, adapter) || this;
        /**
         * Indicates if the top app bar was docked in the previous scroll handler iteration.
         */
        _this.wasDocked_ = true;
        /**
         * Indicates if the top app bar is docked in the fully shown position.
         */
        _this.isDockedShowing_ = true;
        /**
         * Variable for current scroll position of the top app bar
         */
        _this.currentAppBarOffsetTop_ = 0;
        /**
         * Used to prevent the top app bar from being scrolled out of view during resize events
         */
        _this.isCurrentlyBeingResized_ = false;
        /**
         * The timeout that's used to throttle the resize events
         */
        _this.resizeThrottleId_ = INITIAL_VALUE;
        /**
         * The timeout that's used to debounce toggling the isCurrentlyBeingResized_ variable after a resize
         */
        _this.resizeDebounceId_ = INITIAL_VALUE;
        _this.lastScrollPosition_ = _this.adapter_.getViewportScrollY();
        _this.topAppBarHeight_ = _this.adapter_.getTopAppBarHeight();
        return _this;
    }
    MDCTopAppBarFoundation.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.adapter_.setStyle('top', '');
    };
    /**
     * Scroll handler for the default scroll behavior of the top app bar.
     * @override
     */
    MDCTopAppBarFoundation.prototype.handleTargetScroll = function () {
        var currentScrollPosition = Math.max(this.adapter_.getViewportScrollY(), 0);
        var diff = currentScrollPosition - this.lastScrollPosition_;
        this.lastScrollPosition_ = currentScrollPosition;
        // If the window is being resized the lastScrollPosition_ needs to be updated but the
        // current scroll of the top app bar should stay in the same position.
        if (!this.isCurrentlyBeingResized_) {
            this.currentAppBarOffsetTop_ -= diff;
            if (this.currentAppBarOffsetTop_ > 0) {
                this.currentAppBarOffsetTop_ = 0;
            }
            else if (Math.abs(this.currentAppBarOffsetTop_) > this.topAppBarHeight_) {
                this.currentAppBarOffsetTop_ = -this.topAppBarHeight_;
            }
            this.moveTopAppBar_();
        }
    };
    /**
     * Top app bar resize handler that throttle/debounce functions that execute updates.
     * @override
     */
    MDCTopAppBarFoundation.prototype.handleWindowResize = function () {
        var _this = this;
        // Throttle resize events 10 p/s
        if (!this.resizeThrottleId_) {
            this.resizeThrottleId_ = setTimeout(function () {
                _this.resizeThrottleId_ = INITIAL_VALUE;
                _this.throttledResizeHandler_();
            }, numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
        }
        this.isCurrentlyBeingResized_ = true;
        if (this.resizeDebounceId_) {
            clearTimeout(this.resizeDebounceId_);
        }
        this.resizeDebounceId_ = setTimeout(function () {
            _this.handleTargetScroll();
            _this.isCurrentlyBeingResized_ = false;
            _this.resizeDebounceId_ = INITIAL_VALUE;
        }, numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
    };
    /**
     * Function to determine if the DOM needs to update.
     */
    MDCTopAppBarFoundation.prototype.checkForUpdate_ = function () {
        var offscreenBoundaryTop = -this.topAppBarHeight_;
        var hasAnyPixelsOffscreen = this.currentAppBarOffsetTop_ < 0;
        var hasAnyPixelsOnscreen = this.currentAppBarOffsetTop_ > offscreenBoundaryTop;
        var partiallyShowing = hasAnyPixelsOffscreen && hasAnyPixelsOnscreen;
        // If it's partially showing, it can't be docked.
        if (partiallyShowing) {
            this.wasDocked_ = false;
        }
        else {
            // Not previously docked and not partially showing, it's now docked.
            if (!this.wasDocked_) {
                this.wasDocked_ = true;
                return true;
            }
            else if (this.isDockedShowing_ !== hasAnyPixelsOnscreen) {
                this.isDockedShowing_ = hasAnyPixelsOnscreen;
                return true;
            }
        }
        return partiallyShowing;
    };
    /**
     * Function to move the top app bar if needed.
     */
    MDCTopAppBarFoundation.prototype.moveTopAppBar_ = function () {
        if (this.checkForUpdate_()) {
            // Once the top app bar is fully hidden we use the max potential top app bar height as our offset
            // so the top app bar doesn't show if the window resizes and the new height > the old height.
            var offset = this.currentAppBarOffsetTop_;
            if (Math.abs(offset) >= this.topAppBarHeight_) {
                offset = -numbers.MAX_TOP_APP_BAR_HEIGHT;
            }
            this.adapter_.setStyle('top', offset + 'px');
        }
    };
    /**
     * Throttled function that updates the top app bar scrolled values if the
     * top app bar height changes.
     */
    MDCTopAppBarFoundation.prototype.throttledResizeHandler_ = function () {
        var currentHeight = this.adapter_.getTopAppBarHeight();
        if (this.topAppBarHeight_ !== currentHeight) {
            this.wasDocked_ = false;
            // Since the top app bar has a different height depending on the screen width, this
            // will ensure that the top app bar remains in the correct location if
            // completely hidden and a resize makes the top app bar a different height.
            this.currentAppBarOffsetTop_ -= this.topAppBarHeight_ - currentHeight;
            this.topAppBarHeight_ = currentHeight;
        }
        this.handleTargetScroll();
    };
    return MDCTopAppBarFoundation;
}(MDCTopAppBarBaseFoundation));
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
var MDCFixedTopAppBarFoundation = /** @class */ (function (_super) {
    __extends(MDCFixedTopAppBarFoundation, _super);
    function MDCFixedTopAppBarFoundation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * State variable for the previous scroll iteration top app bar state
         */
        _this.wasScrolled_ = false;
        return _this;
    }
    /**
     * Scroll handler for applying/removing the modifier class on the fixed top app bar.
     * @override
     */
    MDCFixedTopAppBarFoundation.prototype.handleTargetScroll = function () {
        var currentScroll = this.adapter_.getViewportScrollY();
        if (currentScroll <= 0) {
            if (this.wasScrolled_) {
                this.adapter_.removeClass(cssClasses.FIXED_SCROLLED_CLASS);
                this.wasScrolled_ = false;
            }
        }
        else {
            if (!this.wasScrolled_) {
                this.adapter_.addClass(cssClasses.FIXED_SCROLLED_CLASS);
                this.wasScrolled_ = true;
            }
        }
    };
    return MDCFixedTopAppBarFoundation;
}(MDCTopAppBarFoundation));
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
var MDCShortTopAppBarFoundation = /** @class */ (function (_super) {
    __extends(MDCShortTopAppBarFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */
    function MDCShortTopAppBarFoundation(adapter) {
        var _this = _super.call(this, adapter) || this;
        _this.isCollapsed_ = false;
        _this.isAlwaysCollapsed_ = false;
        return _this;
    }
    Object.defineProperty(MDCShortTopAppBarFoundation.prototype, "isCollapsed", {
        // Public visibility for backward compatibility.
        get: function () {
            return this.isCollapsed_;
        },
        enumerable: true,
        configurable: true
    });
    MDCShortTopAppBarFoundation.prototype.init = function () {
        _super.prototype.init.call(this);
        if (this.adapter_.getTotalActionItems() > 0) {
            this.adapter_.addClass(cssClasses.SHORT_HAS_ACTION_ITEM_CLASS);
        }
        // If initialized with SHORT_COLLAPSED_CLASS, the bar should always be collapsed
        this.setAlwaysCollapsed(this.adapter_.hasClass(cssClasses.SHORT_COLLAPSED_CLASS));
    };
    /**
     * Set if the short top app bar should always be collapsed.
     *
     * @param value When `true`, bar will always be collapsed. When `false`, bar may collapse or expand based on scroll.
     */
    MDCShortTopAppBarFoundation.prototype.setAlwaysCollapsed = function (value) {
        this.isAlwaysCollapsed_ = !!value;
        if (this.isAlwaysCollapsed_) {
            this.collapse_();
        }
        else {
            // let maybeCollapseBar_ determine if the bar should be collapsed
            this.maybeCollapseBar_();
        }
    };
    MDCShortTopAppBarFoundation.prototype.getAlwaysCollapsed = function () {
        return this.isAlwaysCollapsed_;
    };
    /**
     * Scroll handler for applying/removing the collapsed modifier class on the short top app bar.
     * @override
     */
    MDCShortTopAppBarFoundation.prototype.handleTargetScroll = function () {
        this.maybeCollapseBar_();
    };
    MDCShortTopAppBarFoundation.prototype.maybeCollapseBar_ = function () {
        if (this.isAlwaysCollapsed_) {
            return;
        }
        var currentScroll = this.adapter_.getViewportScrollY();
        if (currentScroll <= 0) {
            if (this.isCollapsed_) {
                this.uncollapse_();
            }
        }
        else {
            if (!this.isCollapsed_) {
                this.collapse_();
            }
        }
    };
    MDCShortTopAppBarFoundation.prototype.uncollapse_ = function () {
        this.adapter_.removeClass(cssClasses.SHORT_COLLAPSED_CLASS);
        this.isCollapsed_ = false;
    };
    MDCShortTopAppBarFoundation.prototype.collapse_ = function () {
        this.adapter_.addClass(cssClasses.SHORT_COLLAPSED_CLASS);
        this.isCollapsed_ = true;
    };
    return MDCShortTopAppBarFoundation;
}(MDCTopAppBarBaseFoundation));
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
var MDCTopAppBar = /** @class */ (function (_super) {
    __extends(MDCTopAppBar, _super);
    function MDCTopAppBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTopAppBar.attachTo = function (root) {
        return new MDCTopAppBar(root);
    };
    MDCTopAppBar.prototype.initialize = function (rippleFactory) {
        if (rippleFactory === void 0) { rippleFactory = function (el) { return MDCRipple.attachTo(el); }; }
        this.navIcon_ = this.root_.querySelector(strings.NAVIGATION_ICON_SELECTOR);
        // Get all icons in the toolbar and instantiate the ripples
        var icons = [].slice.call(this.root_.querySelectorAll(strings.ACTION_ITEM_SELECTOR));
        if (this.navIcon_) {
            icons.push(this.navIcon_);
        }
        this.iconRipples_ = icons.map(function (icon) {
            var ripple = rippleFactory(icon);
            ripple.unbounded = true;
            return ripple;
        });
        this.scrollTarget_ = window;
    };
    MDCTopAppBar.prototype.initialSyncWithDOM = function () {
        this.handleNavigationClick_ = this.foundation_.handleNavigationClick.bind(this.foundation_);
        this.handleWindowResize_ = this.foundation_.handleWindowResize.bind(this.foundation_);
        this.handleTargetScroll_ = this.foundation_.handleTargetScroll.bind(this.foundation_);
        this.scrollTarget_.addEventListener('scroll', this.handleTargetScroll_);
        if (this.navIcon_) {
            this.navIcon_.addEventListener('click', this.handleNavigationClick_);
        }
        var isFixed = this.root_.classList.contains(cssClasses.FIXED_CLASS);
        var isShort = this.root_.classList.contains(cssClasses.SHORT_CLASS);
        if (!isShort && !isFixed) {
            window.addEventListener('resize', this.handleWindowResize_);
        }
    };
    MDCTopAppBar.prototype.destroy = function () {
        this.iconRipples_.forEach(function (iconRipple) { return iconRipple.destroy(); });
        this.scrollTarget_.removeEventListener('scroll', this.handleTargetScroll_);
        if (this.navIcon_) {
            this.navIcon_.removeEventListener('click', this.handleNavigationClick_);
        }
        var isFixed = this.root_.classList.contains(cssClasses.FIXED_CLASS);
        var isShort = this.root_.classList.contains(cssClasses.SHORT_CLASS);
        if (!isShort && !isFixed) {
            window.removeEventListener('resize', this.handleWindowResize_);
        }
        _super.prototype.destroy.call(this);
    };
    MDCTopAppBar.prototype.setScrollTarget = function (target) {
        // Remove scroll handler from the previous scroll target
        this.scrollTarget_.removeEventListener('scroll', this.handleTargetScroll_);
        this.scrollTarget_ = target;
        // Initialize scroll handler on the new scroll target
        this.handleTargetScroll_ =
            this.foundation_.handleTargetScroll.bind(this.foundation_);
        this.scrollTarget_.addEventListener('scroll', this.handleTargetScroll_);
    };
    MDCTopAppBar.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            setStyle: function (property, value) { return _this.root_.style.setProperty(property, value); },
            getTopAppBarHeight: function () { return _this.root_.clientHeight; },
            notifyNavigationIconClicked: function () { return _this.emit(strings.NAVIGATION_EVENT, {}); },
            getViewportScrollY: function () {
                var win = _this.scrollTarget_;
                var el = _this.scrollTarget_;
                return win.pageYOffset !== undefined ? win.pageYOffset : el.scrollTop;
            },
            getTotalActionItems: function () { return _this.root_.querySelectorAll(strings.ACTION_ITEM_SELECTOR).length; },
        };
        // tslint:enable:object-literal-sort-keys
        var foundation;
        if (this.root_.classList.contains(cssClasses.SHORT_CLASS)) {
            foundation = new MDCShortTopAppBarFoundation(adapter);
        }
        else if (this.root_.classList.contains(cssClasses.FIXED_CLASS)) {
            foundation = new MDCFixedTopAppBarFoundation(adapter);
        }
        else {
            foundation = new MDCTopAppBarFoundation(adapter);
        }
        return foundation;
    };
    return MDCTopAppBar;
}(MDCComponent));
//# sourceMappingURL=component.js.map

/* node_modules\@smui\top-app-bar\TopAppBar.svelte generated by Svelte v3.16.4 */
const file = "node_modules\\@smui\\top-app-bar\\TopAppBar.svelte";

function create_fragment(ctx) {
	let header;
	let useActions_action;
	let forwardEvents_action;
	let current;
	const default_slot_template = /*$$slots*/ ctx[12].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[11], null);

	let header_levels = [
		{
			class: "\n    mdc-top-app-bar\n    " + /*className*/ ctx[1] + "\n    " + (/*variant*/ ctx[2] === "short"
			? "mdc-top-app-bar--short"
			: "") + "\n    " + (/*collapsed*/ ctx[4]
			? "mdc-top-app-bar--short-collapsed"
			: "") + "\n    " + (/*variant*/ ctx[2] === "fixed"
			? "mdc-top-app-bar--fixed"
			: "") + "\n    " + (/*variant*/ ctx[2] === "static"
			? "smui-top-app-bar--static"
			: "") + "\n    " + (/*color*/ ctx[3] === "secondary"
			? "smui-top-app-bar--color-secondary"
			: "") + "\n    " + (/*prominent*/ ctx[5] ? "mdc-top-app-bar--prominent" : "") + "\n    " + (/*dense*/ ctx[6] ? "mdc-top-app-bar--dense" : "") + "\n  "
		},
		exclude(/*$$props*/ ctx[9], ["use", "class", "variant", "color", "collapsed", "prominent", "dense"])
	];

	let header_data = {};

	for (let i = 0; i < header_levels.length; i += 1) {
		header_data = assign(header_data, header_levels[i]);
	}

	const block = {
		c: function create() {
			header = element("header");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			header = claim_element(nodes, "HEADER", { class: true });
			var header_nodes = children(header);
			if (default_slot) default_slot.l(header_nodes);
			header_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(header, header_data);
			add_location(header, file, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, header, anchor);

			if (default_slot) {
				default_slot.m(header, null);
			}

			/*header_binding*/ ctx[13](header);
			useActions_action = useActions.call(null, header, /*use*/ ctx[0]) || ({});
			forwardEvents_action = /*forwardEvents*/ ctx[8].call(null, header) || ({});
			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot && default_slot.p && dirty[0] & /*$$scope*/ 2048) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[11], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[11], dirty, null));
			}

			set_attributes(header, get_spread_update(header_levels, [
				dirty[0] & /*className, variant, collapsed, color, prominent, dense*/ 126 && ({
					class: "\n    mdc-top-app-bar\n    " + /*className*/ ctx[1] + "\n    " + (/*variant*/ ctx[2] === "short"
					? "mdc-top-app-bar--short"
					: "") + "\n    " + (/*collapsed*/ ctx[4]
					? "mdc-top-app-bar--short-collapsed"
					: "") + "\n    " + (/*variant*/ ctx[2] === "fixed"
					? "mdc-top-app-bar--fixed"
					: "") + "\n    " + (/*variant*/ ctx[2] === "static"
					? "smui-top-app-bar--static"
					: "") + "\n    " + (/*color*/ ctx[3] === "secondary"
					? "smui-top-app-bar--color-secondary"
					: "") + "\n    " + (/*prominent*/ ctx[5] ? "mdc-top-app-bar--prominent" : "") + "\n    " + (/*dense*/ ctx[6] ? "mdc-top-app-bar--dense" : "") + "\n  "
				}),
				dirty[0] & /*$$props*/ 512 && exclude(/*$$props*/ ctx[9], ["use", "class", "variant", "color", "collapsed", "prominent", "dense"])
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
			if (detaching) detach_dev(header);
			if (default_slot) default_slot.d(detaching);
			/*header_binding*/ ctx[13](null);
			if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
			if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
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
	const forwardEvents = forwardEventsBuilder(current_component, ["MDCList:action"]);
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { variant = "standard" } = $$props;
	let { color = "primary" } = $$props;
	let { collapsed = false } = $$props;
	let { prominent = false } = $$props;
	let { dense = false } = $$props;
	let element;
	let topAppBar;

	onMount(() => {
		topAppBar = new MDCTopAppBar(element);
	});

	onDestroy(() => {
		topAppBar && topAppBar.destroy();
	});

	let { $$slots = {}, $$scope } = $$props;

	function header_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(7, element = $$value);
		});
	}

	$$self.$set = $$new_props => {
		$$invalidate(9, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("variant" in $$new_props) $$invalidate(2, variant = $$new_props.variant);
		if ("color" in $$new_props) $$invalidate(3, color = $$new_props.color);
		if ("collapsed" in $$new_props) $$invalidate(4, collapsed = $$new_props.collapsed);
		if ("prominent" in $$new_props) $$invalidate(5, prominent = $$new_props.prominent);
		if ("dense" in $$new_props) $$invalidate(6, dense = $$new_props.dense);
		if ("$$scope" in $$new_props) $$invalidate(11, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => {
		return {
			use,
			className,
			variant,
			color,
			collapsed,
			prominent,
			dense,
			element,
			topAppBar
		};
	};

	$$self.$inject_state = $$new_props => {
		$$invalidate(9, $$props = assign(assign({}, $$props), $$new_props));
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("variant" in $$props) $$invalidate(2, variant = $$new_props.variant);
		if ("color" in $$props) $$invalidate(3, color = $$new_props.color);
		if ("collapsed" in $$props) $$invalidate(4, collapsed = $$new_props.collapsed);
		if ("prominent" in $$props) $$invalidate(5, prominent = $$new_props.prominent);
		if ("dense" in $$props) $$invalidate(6, dense = $$new_props.dense);
		if ("element" in $$props) $$invalidate(7, element = $$new_props.element);
		if ("topAppBar" in $$props) topAppBar = $$new_props.topAppBar;
	};

	$$props = exclude_internal_props($$props);

	return [
		use,
		className,
		variant,
		color,
		collapsed,
		prominent,
		dense,
		element,
		forwardEvents,
		$$props,
		topAppBar,
		$$scope,
		$$slots,
		header_binding
	];
}

class TopAppBar extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			use: 0,
			class: 1,
			variant: 2,
			color: 3,
			collapsed: 4,
			prominent: 5,
			dense: 6
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "TopAppBar",
			options,
			id: create_fragment.name
		});
	}

	get use() {
		throw new Error("<TopAppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<TopAppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<TopAppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<TopAppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get variant() {
		throw new Error("<TopAppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set variant(value) {
		throw new Error("<TopAppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get color() {
		throw new Error("<TopAppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set color(value) {
		throw new Error("<TopAppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get collapsed() {
		throw new Error("<TopAppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set collapsed(value) {
		throw new Error("<TopAppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get prominent() {
		throw new Error("<TopAppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set prominent(value) {
		throw new Error("<TopAppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get dense() {
		throw new Error("<TopAppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set dense(value) {
		throw new Error("<TopAppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

var Row = classAdderBuilder({
  class: 'mdc-top-app-bar__row',
  component: Div,
  contexts: {}
});

/* node_modules\@smui\top-app-bar\Section.svelte generated by Svelte v3.16.4 */
const file$1 = "node_modules\\@smui\\top-app-bar\\Section.svelte";

function create_fragment$1(ctx) {
	let section;
	let useActions_action;
	let forwardEvents_action;
	let current;
	const default_slot_template = /*$$slots*/ ctx[7].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);

	let section_levels = [
		{
			class: "\n    mdc-top-app-bar__section\n    " + /*className*/ ctx[1] + "\n    " + (/*align*/ ctx[2] === "start"
			? "mdc-top-app-bar__section--align-start"
			: "") + "\n    " + (/*align*/ ctx[2] === "end"
			? "mdc-top-app-bar__section--align-end"
			: "") + "\n  "
		},
		/*toolbar*/ ctx[3] ? { role: "toolbar" } : {},
		exclude(/*$$props*/ ctx[5], ["use", "class", "align", "toolbar"])
	];

	let section_data = {};

	for (let i = 0; i < section_levels.length; i += 1) {
		section_data = assign(section_data, section_levels[i]);
	}

	const block = {
		c: function create() {
			section = element("section");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			if (default_slot) default_slot.l(section_nodes);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(section, section_data);
			add_location(section, file$1, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);

			if (default_slot) {
				default_slot.m(section, null);
			}

			useActions_action = useActions.call(null, section, /*use*/ ctx[0]) || ({});
			forwardEvents_action = /*forwardEvents*/ ctx[4].call(null, section) || ({});
			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot && default_slot.p && dirty[0] & /*$$scope*/ 64) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[6], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[6], dirty, null));
			}

			set_attributes(section, get_spread_update(section_levels, [
				dirty[0] & /*className, align*/ 6 && ({
					class: "\n    mdc-top-app-bar__section\n    " + /*className*/ ctx[1] + "\n    " + (/*align*/ ctx[2] === "start"
					? "mdc-top-app-bar__section--align-start"
					: "") + "\n    " + (/*align*/ ctx[2] === "end"
					? "mdc-top-app-bar__section--align-end"
					: "") + "\n  "
				}),
				dirty[0] & /*toolbar*/ 8 && (/*toolbar*/ ctx[3] ? { role: "toolbar" } : {}),
				dirty[0] & /*$$props*/ 32 && exclude(/*$$props*/ ctx[5], ["use", "class", "align", "toolbar"])
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
			if (detaching) detach_dev(section);
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
	const forwardEvents = forwardEventsBuilder(current_component, ["MDCList:action"]);
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { align = "start" } = $$props;
	let { toolbar = false } = $$props;

	setContext("SMUI:icon-button:context", toolbar
	? "top-app-bar:action"
	: "top-app-bar:navigation");

	setContext("SMUI:button:context", toolbar
	? "top-app-bar:action"
	: "top-app-bar:navigation");

	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$new_props => {
		$$invalidate(5, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("align" in $$new_props) $$invalidate(2, align = $$new_props.align);
		if ("toolbar" in $$new_props) $$invalidate(3, toolbar = $$new_props.toolbar);
		if ("$$scope" in $$new_props) $$invalidate(6, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => {
		return { use, className, align, toolbar };
	};

	$$self.$inject_state = $$new_props => {
		$$invalidate(5, $$props = assign(assign({}, $$props), $$new_props));
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("align" in $$props) $$invalidate(2, align = $$new_props.align);
		if ("toolbar" in $$props) $$invalidate(3, toolbar = $$new_props.toolbar);
	};

	$$props = exclude_internal_props($$props);
	return [use, className, align, toolbar, forwardEvents, $$props, $$scope, $$slots];
}

class Section extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { use: 0, class: 1, align: 2, toolbar: 3 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Section",
			options,
			id: create_fragment$1.name
		});
	}

	get use() {
		throw new Error("<Section>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Section>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<Section>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<Section>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get align() {
		throw new Error("<Section>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set align(value) {
		throw new Error("<Section>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get toolbar() {
		throw new Error("<Section>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set toolbar(value) {
		throw new Error("<Section>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

var Title = classAdderBuilder({
  class: 'mdc-top-app-bar__title',
  component: Span,
  contexts: {}
});

var css$2 = ".mdc-typography--headline6{font-size:1.25rem;line-height:2rem;letter-spacing:.0125em}.mdc-typography--headline6,.mdc-typography--subtitle2{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-weight:500;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle2{font-size:.875rem;line-height:1.375rem;letter-spacing:.0071428571em}.mdc-typography--body2{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit}:root{--primary-100:#ebf8ff;--primary-200:#bee3f8;--primary-300:#90cdf4;--primary-400:#63b3ed;--primary-500:#4299e1;--primary-600:#3182ce;--primary-700:#2b6cb0;--primary-800:#2c5282;--primary-900:#2a4365;--secondary-100:#fff5f5;--secondary-200:#fed7d7;--secondary-300:#feb2b2;--secondary-400:#fc8181;--secondary-500:#f56565;--secondary-600:#e53e3e;--secondary-700:#c53030;--secondary-800:#9b2c2c;--secondary-900:#742a2a;--primary-color:var(--primary-700);--secondary-color:var(--secondary-700);--primary-font-color:#fff;--secondary-font-color:#fff;--disabled-button-bg-color:#e0e0e0;--font-color:#212121;--other-font-color:#000;--bg-color:#fff;--bg-layer-color:#f5f5f5;--bg-card-color:#fff;--enabled-color:#757575;--disabled-color:#bdbdbd;--switch-toggle-color:#fafafa;--switch-track-color:#4d4d4d;--font-family:\"Montserrat\",sans-serif;--filter:invert(0%);--alert-default-bg-color:var(--primary-200);--alert-solid-bg-color:var(--primary-700);--alert-solid-text-color:\"text-white\";--alert-outline-bg-color:var(--primary-100);--alert-outline-border-color:var(--primary-400);--alert-outline-border-color2:var(--primary-600);--alert-outline-text-color:var(--primary-800)}[data-theme=dark]{--primary-color:var(--primary-400);--secondary-color:var(--secondary-400);--primary-font-color:#000;--secondary-font-color:#000;--disabled-button-bg-color:#1f1f1f;--font-color:#dedede;--other-font-color:#fff;--bg-color:#121212;--bg-layer-color:#333;--bg-card-color:#424242;--enabled-color:#b3b3b3;--disabled-color:#4d4d4d;--switch-toggle-color:#b3b3b3;--switch-track-color:#fff;--filter:invert(100%)}body{--mdc-theme-primary:var(--primary-color);--mdc-theme-secondary:var(--secondary-color);--mdc-theme-on-primary:var(--primary-font-color);--mdc-theme-on-secondary:var(--secondary-font-color);--mdc-text-field-ink-color:var(--other-font-color);--mdc-theme-text-primary-on-background:var(--font-color);--mdc-theme-surface:transparent;--duration:0.5s;--timing:ease;background-color:var(--bg-color);color:var(--font-color);-webkit-transition:color var(--duration) var(--timing),background-color var(--duration) var(--timing);transition:color var(--duration) var(--timing),background-color var(--duration) var(--timing);font-family:var(--font-family)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:var(--disabled-button-bg-color)}.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--disabled-color)}.mdc-select:not(.mdc-select--disabled) .mdc-select__native-control,.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text,.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--other-font-color)}.mdc-select:not(.mdc-select--disabled) .mdc-select__native-control option{color:#000}.mdc-select--with-leading-icon:not(.mdc-select--disabled) .mdc-select__icon{color:var(--enabled-color);opacity:1}.mdc-select__dropdown-icon{-webkit-filter:var(--filter);filter:var(--filter)}.mdc-select--invalid .mdc-select__dropdown-icon{-webkit-filter:invert(0);filter:invert(0)}.mdc-switch--disabled{opacity:.5}.mdc-card__action--icon:not(:disabled){color:var(--enabled-color)}.flex-1-0-auto{-webkit-box-flex:1;flex:1 0 auto}.mdc-drawer{background-color:#fff;border-radius:0 0 0 0;z-index:6;width:256px;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;flex-shrink:0;box-sizing:border-box;height:100%;border-right:1px solid;border-color:rgba(0,0,0,.12);overflow:hidden;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1)}.mdc-drawer .mdc-list-item{color:rgba(0,0,0,.87)}.mdc-drawer .mdc-list-item--activated{color:rgba(98,0,238,.87)}.mdc-drawer[dir=rtl],[dir=rtl] .mdc-drawer{border-radius:0 0 0 0}.mdc-drawer .mdc-list-item{border-radius:4px}.mdc-drawer[dir=rtl],[dir=rtl] .mdc-drawer{border-right-width:0;border-left-width:1px;border-right-style:none;border-left-style:solid}.mdc-drawer .mdc-list-item{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.375rem;font-weight:500;letter-spacing:.0071428571em;text-decoration:inherit;text-transform:inherit;height:40px;margin:8px;padding:0 8px}.mdc-drawer .mdc-list-item:first-child{margin-top:2px}.mdc-drawer .mdc-list-item:last-child{margin-bottom:0}.mdc-drawer .mdc-list-divider{margin:3px 0 4px}.mdc-drawer .mdc-list-item__text{pointer-events:none}.mdc-drawer--dismissible{left:0;right:auto;display:none;position:absolute}.mdc-drawer--dismissible[dir=rtl],[dir=rtl] .mdc-drawer--dismissible{left:auto;right:0}.mdc-drawer--modal{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);left:0;right:auto;display:none;position:fixed}.mdc-drawer--modal[dir=rtl],[dir=rtl] .mdc-drawer--modal{left:auto;right:0}";
styleInject(css$2);

var candidateSelectors = [
  'input',
  'select',
  'textarea',
  'a[href]',
  'button',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
];
var candidateSelector = candidateSelectors.join(',');

var matches = typeof Element === 'undefined'
  ? function () {}
  : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

function tabbable(el, options) {
  options = options || {};

  var regularTabbables = [];
  var orderedTabbables = [];

  var candidates = el.querySelectorAll(candidateSelector);

  if (options.includeContainer) {
    if (matches.call(el, candidateSelector)) {
      candidates = Array.prototype.slice.apply(candidates);
      candidates.unshift(el);
    }
  }

  var i, candidate, candidateTabindex;
  for (i = 0; i < candidates.length; i++) {
    candidate = candidates[i];

    if (!isNodeMatchingSelectorTabbable(candidate)) continue;

    candidateTabindex = getTabindex(candidate);
    if (candidateTabindex === 0) {
      regularTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        node: candidate,
      });
    }
  }

  var tabbableNodes = orderedTabbables
    .sort(sortOrderedTabbables)
    .map(function(a) { return a.node })
    .concat(regularTabbables);

  return tabbableNodes;
}

tabbable.isTabbable = isTabbable;
tabbable.isFocusable = isFocusable;

function isNodeMatchingSelectorTabbable(node) {
  if (
    !isNodeMatchingSelectorFocusable(node)
    || isNonTabbableRadio(node)
    || getTabindex(node) < 0
  ) {
    return false;
  }
  return true;
}

function isTabbable(node) {
  if (!node) throw new Error('No node provided');
  if (matches.call(node, candidateSelector) === false) return false;
  return isNodeMatchingSelectorTabbable(node);
}

function isNodeMatchingSelectorFocusable(node) {
  if (
    node.disabled
    || isHiddenInput(node)
    || isHidden(node)
  ) {
    return false;
  }
  return true;
}

var focusableCandidateSelector = candidateSelectors.concat('iframe').join(',');
function isFocusable(node) {
  if (!node) throw new Error('No node provided');
  if (matches.call(node, focusableCandidateSelector) === false) return false;
  return isNodeMatchingSelectorFocusable(node);
}

function getTabindex(node) {
  var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);
  if (!isNaN(tabindexAttr)) return tabindexAttr;
  // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // so if they don't have a tabindex attribute specifically set, assume it's 0.
  if (isContentEditable(node)) return 0;
  return node.tabIndex;
}

function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
}

function isContentEditable(node) {
  return node.contentEditable === 'true';
}

function isInput(node) {
  return node.tagName === 'INPUT';
}

function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
}

function isRadio(node) {
  return isInput(node) && node.type === 'radio';
}

function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
}

function getCheckedRadio(nodes) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked) {
      return nodes[i];
    }
  }
}

function isTabbableRadio(node) {
  if (!node.name) return true;
  // This won't account for the edge case where you have radio groups with the same
  // in separate forms on the same page.
  var radioSet = node.ownerDocument.querySelectorAll('input[type="radio"][name="' + node.name + '"]');
  var checked = getCheckedRadio(radioSet);
  return !checked || checked === node;
}

function isHidden(node) {
  // offsetParent being null will allow detecting cases where an element is invisible or inside an invisible element,
  // as long as the element does not use position: fixed. For them, their visibility has to be checked directly as well.
  return node.offsetParent === null || getComputedStyle(node).visibility === 'hidden';
}

var tabbable_1 = tabbable;

var immutable = extend;

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {};

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }

    return target
}

var activeFocusDelay;

var activeFocusTraps = (function() {
  var trapQueue = [];
  return {
    activateTrap: function(trap) {
      if (trapQueue.length > 0) {
        var activeTrap = trapQueue[trapQueue.length - 1];
        if (activeTrap !== trap) {
          activeTrap.pause();
        }
      }

      var trapIndex = trapQueue.indexOf(trap);
      if (trapIndex === -1) {
        trapQueue.push(trap);
      } else {
        // move this existing trap to the front of the queue
        trapQueue.splice(trapIndex, 1);
        trapQueue.push(trap);
      }
    },

    deactivateTrap: function(trap) {
      var trapIndex = trapQueue.indexOf(trap);
      if (trapIndex !== -1) {
        trapQueue.splice(trapIndex, 1);
      }

      if (trapQueue.length > 0) {
        trapQueue[trapQueue.length - 1].unpause();
      }
    }
  };
})();

function focusTrap(element, userOptions) {
  var doc = document;
  var container =
    typeof element === 'string' ? doc.querySelector(element) : element;

  var config = immutable(
    {
      returnFocusOnDeactivate: true,
      escapeDeactivates: true
    },
    userOptions
  );

  var state = {
    firstTabbableNode: null,
    lastTabbableNode: null,
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false
  };

  var trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause
  };

  return trap;

  function activate(activateOptions) {
    if (state.active) return;

    updateTabbableNodes();

    state.active = true;
    state.paused = false;
    state.nodeFocusedBeforeActivation = doc.activeElement;

    var onActivate =
      activateOptions && activateOptions.onActivate
        ? activateOptions.onActivate
        : config.onActivate;
    if (onActivate) {
      onActivate();
    }

    addListeners();
    return trap;
  }

  function deactivate(deactivateOptions) {
    if (!state.active) return;

    clearTimeout(activeFocusDelay);

    removeListeners();
    state.active = false;
    state.paused = false;

    activeFocusTraps.deactivateTrap(trap);

    var onDeactivate =
      deactivateOptions && deactivateOptions.onDeactivate !== undefined
        ? deactivateOptions.onDeactivate
        : config.onDeactivate;
    if (onDeactivate) {
      onDeactivate();
    }

    var returnFocus =
      deactivateOptions && deactivateOptions.returnFocus !== undefined
        ? deactivateOptions.returnFocus
        : config.returnFocusOnDeactivate;
    if (returnFocus) {
      delay(function() {
        tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
      });
    }

    return trap;
  }

  function pause() {
    if (state.paused || !state.active) return;
    state.paused = true;
    removeListeners();
  }

  function unpause() {
    if (!state.paused || !state.active) return;
    state.paused = false;
    updateTabbableNodes();
    addListeners();
  }

  function addListeners() {
    if (!state.active) return;

    // There can be only one listening focus trap at a time
    activeFocusTraps.activateTrap(trap);

    // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.
    activeFocusDelay = delay(function() {
      tryFocus(getInitialFocusNode());
    });

    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('touchstart', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('click', checkClick, {
      capture: true,
      passive: false
    });
    doc.addEventListener('keydown', checkKey, {
      capture: true,
      passive: false
    });

    return trap;
  }

  function removeListeners() {
    if (!state.active) return;

    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);

    return trap;
  }

  function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    var node = optionValue;
    if (!optionValue) {
      return null;
    }
    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue);
      if (!node) {
        throw new Error('`' + optionName + '` refers to no known node');
      }
    }
    if (typeof optionValue === 'function') {
      node = optionValue();
      if (!node) {
        throw new Error('`' + optionName + '` did not return a node');
      }
    }
    return node;
  }

  function getInitialFocusNode() {
    var node;
    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (container.contains(doc.activeElement)) {
      node = doc.activeElement;
    } else {
      node = state.firstTabbableNode || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error(
        'Your focus-trap needs to have at least one focusable element'
      );
    }

    return node;
  }

  function getReturnFocusNode(previousActiveElement) {
    var node = getNodeForOption('setReturnFocus');
    return node ? node : previousActiveElement;
  }

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.
  function checkPointerDown(e) {
    if (container.contains(e.target)) return;
    if (config.clickOutsideDeactivates) {
      deactivate({
        returnFocus: !tabbable_1.isFocusable(e.target)
      });
      return;
    }
    // This is needed for mobile devices.
    // (If we'll only let `click` events through,
    // then on mobile they will be blocked anyways if `touchstart` is blocked.)
    if (config.allowOutsideClick && config.allowOutsideClick(e)) {
      return;
    }
    e.preventDefault();
  }

  // In case focus escapes the trap for some strange reason, pull it back in.
  function checkFocusIn(e) {
    // In Firefox when you Tab out of an iframe the Document is briefly focused.
    if (container.contains(e.target) || e.target instanceof Document) {
      return;
    }
    e.stopImmediatePropagation();
    tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
  }

  function checkKey(e) {
    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      e.preventDefault();
      deactivate();
      return;
    }
    if (isTabEvent(e)) {
      checkTab(e);
      return;
    }
  }

  // Hijack Tab events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.
  function checkTab(e) {
    updateTabbableNodes();
    if (e.shiftKey && e.target === state.firstTabbableNode) {
      e.preventDefault();
      tryFocus(state.lastTabbableNode);
      return;
    }
    if (!e.shiftKey && e.target === state.lastTabbableNode) {
      e.preventDefault();
      tryFocus(state.firstTabbableNode);
      return;
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) return;
    if (container.contains(e.target)) return;
    if (config.allowOutsideClick && config.allowOutsideClick(e)) {
      return;
    }
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function updateTabbableNodes() {
    var tabbableNodes = tabbable_1(container);
    state.firstTabbableNode = tabbableNodes[0] || getInitialFocusNode();
    state.lastTabbableNode =
      tabbableNodes[tabbableNodes.length - 1] || getInitialFocusNode();
  }

  function tryFocus(node) {
    if (node === doc.activeElement) return;
    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }
    node.focus();
    state.mostRecentlyFocusedNode = node;
    if (isSelectableInput(node)) {
      node.select();
    }
  }
}

function isSelectableInput(node) {
  return (
    node.tagName &&
    node.tagName.toLowerCase() === 'input' &&
    typeof node.select === 'function'
  );
}

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}

function isTabEvent(e) {
  return e.key === 'Tab' || e.keyCode === 9;
}

function delay(fn) {
  return setTimeout(fn, 0);
}

var focusTrap_1 = focusTrap;

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
function createFocusTrapInstance(surfaceEl, focusTrapFactory) {
    if (focusTrapFactory === void 0) { focusTrapFactory = focusTrap_1; }
    return focusTrapFactory(surfaceEl, {
        clickOutsideDeactivates: true,
        escapeDeactivates: false,
        initialFocus: undefined,
        returnFocusOnDeactivate: false,
    });
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
var cssClasses$1 = {
    ANIMATE: 'mdc-drawer--animate',
    CLOSING: 'mdc-drawer--closing',
    DISMISSIBLE: 'mdc-drawer--dismissible',
    MODAL: 'mdc-drawer--modal',
    OPEN: 'mdc-drawer--open',
    OPENING: 'mdc-drawer--opening',
    ROOT: 'mdc-drawer',
};
var strings$1 = {
    APP_CONTENT_SELECTOR: '.mdc-drawer-app-content',
    CLOSE_EVENT: 'MDCDrawer:closed',
    OPEN_EVENT: 'MDCDrawer:opened',
    SCRIM_SELECTOR: '.mdc-drawer-scrim',
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
var MDCDismissibleDrawerFoundation = /** @class */ (function (_super) {
    __extends(MDCDismissibleDrawerFoundation, _super);
    function MDCDismissibleDrawerFoundation(adapter) {
        var _this = _super.call(this, __assign({}, MDCDismissibleDrawerFoundation.defaultAdapter, adapter)) || this;
        _this.animationFrame_ = 0;
        _this.animationTimer_ = 0;
        return _this;
    }
    Object.defineProperty(MDCDismissibleDrawerFoundation, "strings", {
        get: function () {
            return strings$1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCDismissibleDrawerFoundation, "cssClasses", {
        get: function () {
            return cssClasses$1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCDismissibleDrawerFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                elementHasClass: function () { return false; },
                notifyClose: function () { return undefined; },
                notifyOpen: function () { return undefined; },
                saveFocus: function () { return undefined; },
                restoreFocus: function () { return undefined; },
                focusActiveNavigationItem: function () { return undefined; },
                trapFocus: function () { return undefined; },
                releaseFocus: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCDismissibleDrawerFoundation.prototype.destroy = function () {
        if (this.animationFrame_) {
            cancelAnimationFrame(this.animationFrame_);
        }
        if (this.animationTimer_) {
            clearTimeout(this.animationTimer_);
        }
    };
    /**
     * Opens the drawer from the closed state.
     */
    MDCDismissibleDrawerFoundation.prototype.open = function () {
        var _this = this;
        if (this.isOpen() || this.isOpening() || this.isClosing()) {
            return;
        }
        this.adapter_.addClass(cssClasses$1.OPEN);
        this.adapter_.addClass(cssClasses$1.ANIMATE);
        // Wait a frame once display is no longer "none", to establish basis for animation
        this.runNextAnimationFrame_(function () {
            _this.adapter_.addClass(cssClasses$1.OPENING);
        });
        this.adapter_.saveFocus();
    };
    /**
     * Closes the drawer from the open state.
     */
    MDCDismissibleDrawerFoundation.prototype.close = function () {
        if (!this.isOpen() || this.isOpening() || this.isClosing()) {
            return;
        }
        this.adapter_.addClass(cssClasses$1.CLOSING);
    };
    /**
     * Returns true if the drawer is in the open position.
     * @return true if drawer is in open state.
     */
    MDCDismissibleDrawerFoundation.prototype.isOpen = function () {
        return this.adapter_.hasClass(cssClasses$1.OPEN);
    };
    /**
     * Returns true if the drawer is animating open.
     * @return true if drawer is animating open.
     */
    MDCDismissibleDrawerFoundation.prototype.isOpening = function () {
        return this.adapter_.hasClass(cssClasses$1.OPENING) || this.adapter_.hasClass(cssClasses$1.ANIMATE);
    };
    /**
     * Returns true if the drawer is animating closed.
     * @return true if drawer is animating closed.
     */
    MDCDismissibleDrawerFoundation.prototype.isClosing = function () {
        return this.adapter_.hasClass(cssClasses$1.CLOSING);
    };
    /**
     * Keydown handler to close drawer when key is escape.
     */
    MDCDismissibleDrawerFoundation.prototype.handleKeydown = function (evt) {
        var keyCode = evt.keyCode, key = evt.key;
        var isEscape = key === 'Escape' || keyCode === 27;
        if (isEscape) {
            this.close();
        }
    };
    /**
     * Handles the `transitionend` event when the drawer finishes opening/closing.
     */
    MDCDismissibleDrawerFoundation.prototype.handleTransitionEnd = function (evt) {
        var OPENING = cssClasses$1.OPENING, CLOSING = cssClasses$1.CLOSING, OPEN = cssClasses$1.OPEN, ANIMATE = cssClasses$1.ANIMATE, ROOT = cssClasses$1.ROOT;
        // In Edge, transitionend on ripple pseudo-elements yields a target without classList, so check for Element first.
        var isRootElement = this.isElement_(evt.target) && this.adapter_.elementHasClass(evt.target, ROOT);
        if (!isRootElement) {
            return;
        }
        if (this.isClosing()) {
            this.adapter_.removeClass(OPEN);
            this.closed_();
            this.adapter_.restoreFocus();
            this.adapter_.notifyClose();
        }
        else {
            this.adapter_.focusActiveNavigationItem();
            this.opened_();
            this.adapter_.notifyOpen();
        }
        this.adapter_.removeClass(ANIMATE);
        this.adapter_.removeClass(OPENING);
        this.adapter_.removeClass(CLOSING);
    };
    /**
     * Extension point for when drawer finishes open animation.
     */
    MDCDismissibleDrawerFoundation.prototype.opened_ = function () { }; // tslint:disable-line:no-empty
    /**
     * Extension point for when drawer finishes close animation.
     */
    MDCDismissibleDrawerFoundation.prototype.closed_ = function () { }; // tslint:disable-line:no-empty
    /**
     * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
     */
    MDCDismissibleDrawerFoundation.prototype.runNextAnimationFrame_ = function (callback) {
        var _this = this;
        cancelAnimationFrame(this.animationFrame_);
        this.animationFrame_ = requestAnimationFrame(function () {
            _this.animationFrame_ = 0;
            clearTimeout(_this.animationTimer_);
            _this.animationTimer_ = setTimeout(callback, 0);
        });
    };
    MDCDismissibleDrawerFoundation.prototype.isElement_ = function (element) {
        // In Edge, transitionend on ripple pseudo-elements yields a target without classList.
        return Boolean(element.classList);
    };
    return MDCDismissibleDrawerFoundation;
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
/* istanbul ignore next: subclass is not a branch statement */
var MDCModalDrawerFoundation = /** @class */ (function (_super) {
    __extends(MDCModalDrawerFoundation, _super);
    function MDCModalDrawerFoundation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Handles click event on scrim.
     */
    MDCModalDrawerFoundation.prototype.handleScrimClick = function () {
        this.close();
    };
    /**
     * Called when drawer finishes open animation.
     */
    MDCModalDrawerFoundation.prototype.opened_ = function () {
        this.adapter_.trapFocus();
    };
    /**
     * Called when drawer finishes close animation.
     */
    MDCModalDrawerFoundation.prototype.closed_ = function () {
        this.adapter_.releaseFocus();
    };
    return MDCModalDrawerFoundation;
}(MDCDismissibleDrawerFoundation));
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
var cssClasses$2 = MDCDismissibleDrawerFoundation.cssClasses, strings$2 = MDCDismissibleDrawerFoundation.strings;
/**
 * @events `MDCDrawer:closed {}` Emits when the navigation drawer has closed.
 * @events `MDCDrawer:opened {}` Emits when the navigation drawer has opened.
 */
var MDCDrawer = /** @class */ (function (_super) {
    __extends(MDCDrawer, _super);
    function MDCDrawer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCDrawer.attachTo = function (root) {
        return new MDCDrawer(root);
    };
    Object.defineProperty(MDCDrawer.prototype, "open", {
        /**
         * @return boolean Proxies to the foundation's `open`/`close` methods.
         * Also returns true if drawer is in the open position.
         */
        get: function () {
            return this.foundation_.isOpen();
        },
        /**
         * Toggles the drawer open and closed.
         */
        set: function (isOpen) {
            if (isOpen) {
                this.foundation_.open();
            }
            else {
                this.foundation_.close();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCDrawer.prototype, "list", {
        get: function () {
            return this.list_;
        },
        enumerable: true,
        configurable: true
    });
    MDCDrawer.prototype.initialize = function (focusTrapFactory, listFactory) {
        if (focusTrapFactory === void 0) { focusTrapFactory = focusTrap_1; }
        if (listFactory === void 0) { listFactory = function (el) { return new MDCList(el); }; }
        var listEl = this.root_.querySelector("." + MDCListFoundation.cssClasses.ROOT);
        if (listEl) {
            this.list_ = listFactory(listEl);
            this.list_.wrapFocus = true;
        }
        this.focusTrapFactory_ = focusTrapFactory;
    };
    MDCDrawer.prototype.initialSyncWithDOM = function () {
        var _this = this;
        var MODAL = cssClasses$2.MODAL;
        var SCRIM_SELECTOR = strings$2.SCRIM_SELECTOR;
        this.scrim_ = this.root_.parentNode.querySelector(SCRIM_SELECTOR);
        if (this.scrim_ && this.root_.classList.contains(MODAL)) {
            this.handleScrimClick_ = function () { return _this.foundation_.handleScrimClick(); };
            this.scrim_.addEventListener('click', this.handleScrimClick_);
            this.focusTrap_ = createFocusTrapInstance(this.root_, this.focusTrapFactory_);
        }
        this.handleKeydown_ = function (evt) { return _this.foundation_.handleKeydown(evt); };
        this.handleTransitionEnd_ = function (evt) { return _this.foundation_.handleTransitionEnd(evt); };
        this.listen('keydown', this.handleKeydown_);
        this.listen('transitionend', this.handleTransitionEnd_);
    };
    MDCDrawer.prototype.destroy = function () {
        this.unlisten('keydown', this.handleKeydown_);
        this.unlisten('transitionend', this.handleTransitionEnd_);
        if (this.list_) {
            this.list_.destroy();
        }
        var MODAL = cssClasses$2.MODAL;
        if (this.scrim_ && this.handleScrimClick_ && this.root_.classList.contains(MODAL)) {
            this.scrim_.removeEventListener('click', this.handleScrimClick_);
            // Ensure drawer is closed to hide scrim and release focus
            this.open = false;
        }
    };
    MDCDrawer.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            elementHasClass: function (element, className) { return element.classList.contains(className); },
            saveFocus: function () { return _this.previousFocus_ = document.activeElement; },
            restoreFocus: function () {
                var previousFocus = _this.previousFocus_;
                if (previousFocus && previousFocus.focus && _this.root_.contains(document.activeElement)) {
                    previousFocus.focus();
                }
            },
            focusActiveNavigationItem: function () {
                var activeNavItemEl = _this.root_.querySelector("." + MDCListFoundation.cssClasses.LIST_ITEM_ACTIVATED_CLASS);
                if (activeNavItemEl) {
                    activeNavItemEl.focus();
                }
            },
            notifyClose: function () { return _this.emit(strings$2.CLOSE_EVENT, {}, true /* shouldBubble */); },
            notifyOpen: function () { return _this.emit(strings$2.OPEN_EVENT, {}, true /* shouldBubble */); },
            trapFocus: function () { return _this.focusTrap_.activate(); },
            releaseFocus: function () { return _this.focusTrap_.deactivate(); },
        };
        // tslint:enable:object-literal-sort-keys
        var DISMISSIBLE = cssClasses$2.DISMISSIBLE, MODAL = cssClasses$2.MODAL;
        if (this.root_.classList.contains(DISMISSIBLE)) {
            return new MDCDismissibleDrawerFoundation(adapter);
        }
        else if (this.root_.classList.contains(MODAL)) {
            return new MDCModalDrawerFoundation(adapter);
        }
        else {
            throw new Error("MDCDrawer: Failed to instantiate component. Supported variants are " + DISMISSIBLE + " and " + MODAL + ".");
        }
    };
    return MDCDrawer;
}(MDCComponent));
//# sourceMappingURL=component.js.map

/* node_modules\@smui\drawer\Drawer.svelte generated by Svelte v3.16.4 */
const file$2 = "node_modules\\@smui\\drawer\\Drawer.svelte";

function create_fragment$2(ctx) {
	let aside;
	let useActions_action;
	let forwardEvents_action;
	let current;
	let dispose;
	const default_slot_template = /*$$slots*/ ctx[14].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[13], null);

	let aside_levels = [
		{
			class: "\n    mdc-drawer\n    " + /*className*/ ctx[1] + "\n    " + (/*variant*/ ctx[2] === "dismissible"
			? "mdc-drawer--dismissible"
			: "") + "\n    " + (/*variant*/ ctx[2] === "modal"
			? "mdc-drawer--modal"
			: "") + "\n  "
		},
		exclude(/*$$props*/ ctx[6], ["use", "class", "variant", "open"])
	];

	let aside_data = {};

	for (let i = 0; i < aside_levels.length; i += 1) {
		aside_data = assign(aside_data, aside_levels[i]);
	}

	const block = {
		c: function create() {
			aside = element("aside");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			aside = claim_element(nodes, "ASIDE", { class: true });
			var aside_nodes = children(aside);
			if (default_slot) default_slot.l(aside_nodes);
			aside_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(aside, aside_data);
			add_location(aside, file$2, 0, 0, 0);

			dispose = [
				listen_dev(aside, "MDCDrawer:opened", /*updateOpen*/ ctx[5], false, false, false),
				listen_dev(aside, "MDCDrawer:closed", /*updateOpen*/ ctx[5], false, false, false)
			];
		},
		m: function mount(target, anchor) {
			insert_dev(target, aside, anchor);

			if (default_slot) {
				default_slot.m(aside, null);
			}

			/*aside_binding*/ ctx[15](aside);
			useActions_action = useActions.call(null, aside, /*use*/ ctx[0]) || ({});
			forwardEvents_action = /*forwardEvents*/ ctx[4].call(null, aside) || ({});
			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot && default_slot.p && dirty[0] & /*$$scope*/ 8192) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[13], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[13], dirty, null));
			}

			set_attributes(aside, get_spread_update(aside_levels, [
				dirty[0] & /*className, variant*/ 6 && ({
					class: "\n    mdc-drawer\n    " + /*className*/ ctx[1] + "\n    " + (/*variant*/ ctx[2] === "dismissible"
					? "mdc-drawer--dismissible"
					: "") + "\n    " + (/*variant*/ ctx[2] === "modal"
					? "mdc-drawer--modal"
					: "") + "\n  "
				}),
				dirty[0] & /*$$props*/ 64 && exclude(/*$$props*/ ctx[6], ["use", "class", "variant", "open"])
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
			if (detaching) detach_dev(aside);
			if (default_slot) default_slot.d(detaching);
			/*aside_binding*/ ctx[15](null);
			if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
			if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
			run_all(dispose);
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
	const forwardEvents = forwardEventsBuilder(current_component, ["MDCDrawer:opened", "MDCDrawer:closed"]);
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { variant = null } = $$props;
	let { open = false } = $$props;
	let element;
	let drawer;
	let listPromiseResolve;
	let listPromise = new Promise(resolve => listPromiseResolve = resolve);
	setContext("SMUI:list:nav", true);
	setContext("SMUI:list:item:nav", true);

	if (variant === "dismissible" || variant === "modal") {
		setContext("SMUI:list:instantiate", false);
		setContext("SMUI:list:getInstance", getListInstancePromise);
	}

	onMount(() => {
		if (variant === "dismissible" || variant === "modal") {
			$$invalidate(9, drawer = new MDCDrawer(element));
			listPromiseResolve(drawer.list_);
		}
	});

	onDestroy(() => {
		drawer && drawer.destroy();
	});

	afterUpdate(() => {
		if (drawer && !(variant === "dismissible" || variant === "modal")) {
			drawer.destroy();
			$$invalidate(9, drawer = undefined);
		} else if (!drawer && (variant === "dismissible" || variant === "modal")) {
			$$invalidate(9, drawer = new MDCDrawer(element));
			listPromiseResolve(drawer.list_);
		}
	});

	function getListInstancePromise() {
		return listPromise;
	}

	function updateOpen() {
		$$invalidate(7, open = drawer.open);
	}

	function setOpen(value) {
		$$invalidate(7, open = value);
	}

	let { $$slots = {}, $$scope } = $$props;

	function aside_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(3, element = $$value);
		});
	}

	$$self.$set = $$new_props => {
		$$invalidate(6, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("variant" in $$new_props) $$invalidate(2, variant = $$new_props.variant);
		if ("open" in $$new_props) $$invalidate(7, open = $$new_props.open);
		if ("$$scope" in $$new_props) $$invalidate(13, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => {
		return {
			use,
			className,
			variant,
			open,
			element,
			drawer,
			listPromiseResolve,
			listPromise
		};
	};

	$$self.$inject_state = $$new_props => {
		$$invalidate(6, $$props = assign(assign({}, $$props), $$new_props));
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("variant" in $$props) $$invalidate(2, variant = $$new_props.variant);
		if ("open" in $$props) $$invalidate(7, open = $$new_props.open);
		if ("element" in $$props) $$invalidate(3, element = $$new_props.element);
		if ("drawer" in $$props) $$invalidate(9, drawer = $$new_props.drawer);
		if ("listPromiseResolve" in $$props) listPromiseResolve = $$new_props.listPromiseResolve;
		if ("listPromise" in $$props) listPromise = $$new_props.listPromise;
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*drawer, open*/ 640) {
			 if (drawer && drawer.open !== open) {
				$$invalidate(9, drawer.open = open, drawer);
			}
		}
	};

	$$props = exclude_internal_props($$props);

	return [
		use,
		className,
		variant,
		element,
		forwardEvents,
		updateOpen,
		$$props,
		open,
		setOpen,
		drawer,
		listPromiseResolve,
		listPromise,
		getListInstancePromise,
		$$scope,
		$$slots,
		aside_binding
	];
}

class Drawer extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$2, create_fragment$2, safe_not_equal, {
			use: 0,
			class: 1,
			variant: 2,
			open: 7,
			setOpen: 8
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Drawer",
			options,
			id: create_fragment$2.name
		});
	}

	get use() {
		throw new Error("<Drawer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Drawer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<Drawer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<Drawer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get variant() {
		throw new Error("<Drawer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set variant(value) {
		throw new Error("<Drawer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get open() {
		throw new Error("<Drawer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set open(value) {
		throw new Error("<Drawer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get setOpen() {
		return this.$$.ctx[8];
	}

	set setOpen(value) {
		throw new Error("<Drawer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

var AppContent = classAdderBuilder({
  class: 'mdc-drawer-app-content',
  component: Div,
  contexts: {}
});

var Content = classAdderBuilder({
  class: 'mdc-drawer__content',
  component: Div,
  contexts: {}
});

classAdderBuilder({
  class: 'mdc-drawer__header',
  component: Div,
  contexts: {}
});

/* node_modules\@smui\common\H1.svelte generated by Svelte v3.16.4 */
const file$3 = "node_modules\\@smui\\common\\H1.svelte";

function create_fragment$3(ctx) {
	let h1;
	let useActions_action;
	let forwardEvents_action;
	let current;
	const default_slot_template = /*$$slots*/ ctx[4].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);
	let h1_levels = [exclude(/*$$props*/ ctx[2], ["use"])];
	let h1_data = {};

	for (let i = 0; i < h1_levels.length; i += 1) {
		h1_data = assign(h1_data, h1_levels[i]);
	}

	const block = {
		c: function create() {
			h1 = element("h1");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			if (default_slot) default_slot.l(h1_nodes);
			h1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(h1, h1_data);
			add_location(h1, file$3, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);

			if (default_slot) {
				default_slot.m(h1, null);
			}

			useActions_action = useActions.call(null, h1, /*use*/ ctx[0]) || ({});
			forwardEvents_action = /*forwardEvents*/ ctx[1].call(null, h1) || ({});
			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot && default_slot.p && dirty[0] & /*$$scope*/ 8) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[3], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[3], dirty, null));
			}

			set_attributes(h1, get_spread_update(h1_levels, [dirty[0] & /*$$props*/ 4 && exclude(/*$$props*/ ctx[2], ["use"])]));
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
			if (detaching) detach_dev(h1);
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

class H1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$3, create_fragment$3, safe_not_equal, { use: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "H1",
			options,
			id: create_fragment$3.name
		});
	}

	get use() {
		throw new Error("<H1>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<H1>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

classAdderBuilder({
  class: 'mdc-drawer__title',
  component: H1,
  contexts: {}
});

/* node_modules\@smui\common\H2.svelte generated by Svelte v3.16.4 */
const file$4 = "node_modules\\@smui\\common\\H2.svelte";

function create_fragment$4(ctx) {
	let h2;
	let useActions_action;
	let forwardEvents_action;
	let current;
	const default_slot_template = /*$$slots*/ ctx[4].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);
	let h2_levels = [exclude(/*$$props*/ ctx[2], ["use"])];
	let h2_data = {};

	for (let i = 0; i < h2_levels.length; i += 1) {
		h2_data = assign(h2_data, h2_levels[i]);
	}

	const block = {
		c: function create() {
			h2 = element("h2");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			h2 = claim_element(nodes, "H2", {});
			var h2_nodes = children(h2);
			if (default_slot) default_slot.l(h2_nodes);
			h2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(h2, h2_data);
			add_location(h2, file$4, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h2, anchor);

			if (default_slot) {
				default_slot.m(h2, null);
			}

			useActions_action = useActions.call(null, h2, /*use*/ ctx[0]) || ({});
			forwardEvents_action = /*forwardEvents*/ ctx[1].call(null, h2) || ({});
			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot && default_slot.p && dirty[0] & /*$$scope*/ 8) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[3], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[3], dirty, null));
			}

			set_attributes(h2, get_spread_update(h2_levels, [dirty[0] & /*$$props*/ 4 && exclude(/*$$props*/ ctx[2], ["use"])]));
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
			if (detaching) detach_dev(h2);
			if (default_slot) default_slot.d(detaching);
			if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
			if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
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

class H2 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$4, create_fragment$4, safe_not_equal, { use: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "H2",
			options,
			id: create_fragment$4.name
		});
	}

	get use() {
		throw new Error("<H2>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<H2>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

classAdderBuilder({
  class: 'mdc-drawer__subtitle',
  component: H2,
  contexts: {}
});

var Scrim = classAdderBuilder({
  class: 'mdc-drawer-scrim',
  component: Div,
  contexts: {}
});

var css$3 = ".mdc-typography--headline6{font-size:1.25rem;line-height:2rem;letter-spacing:.0125em}.mdc-typography--headline6,.mdc-typography--subtitle2{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-weight:500;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle2{font-size:.875rem;line-height:1.375rem;letter-spacing:.0071428571em}.mdc-typography--body2{font-family:var(--font-family);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit}:root{--primary-100:#ebf8ff;--primary-200:#bee3f8;--primary-300:#90cdf4;--primary-400:#63b3ed;--primary-500:#4299e1;--primary-600:#3182ce;--primary-700:#2b6cb0;--primary-800:#2c5282;--primary-900:#2a4365;--secondary-100:#fff5f5;--secondary-200:#fed7d7;--secondary-300:#feb2b2;--secondary-400:#fc8181;--secondary-500:#f56565;--secondary-600:#e53e3e;--secondary-700:#c53030;--secondary-800:#9b2c2c;--secondary-900:#742a2a;--primary-color:var(--primary-700);--secondary-color:var(--secondary-700);--primary-font-color:#fff;--secondary-font-color:#fff;--disabled-button-bg-color:#e0e0e0;--font-color:#212121;--other-font-color:#000;--bg-color:#fff;--bg-layer-color:#f5f5f5;--bg-card-color:#fff;--enabled-color:#757575;--disabled-color:#bdbdbd;--switch-toggle-color:#fafafa;--switch-track-color:#4d4d4d;--font-family:\"Montserrat\",sans-serif;--filter:invert(0%);--alert-default-bg-color:var(--primary-200);--alert-solid-bg-color:var(--primary-700);--alert-solid-text-color:\"text-white\";--alert-outline-bg-color:var(--primary-100);--alert-outline-border-color:var(--primary-400);--alert-outline-border-color2:var(--primary-600);--alert-outline-text-color:var(--primary-800)}[data-theme=dark]{--primary-color:var(--primary-400);--secondary-color:var(--secondary-400);--primary-font-color:#000;--secondary-font-color:#000;--disabled-button-bg-color:#1f1f1f;--font-color:#dedede;--other-font-color:#fff;--bg-color:#121212;--bg-layer-color:#333;--bg-card-color:#424242;--enabled-color:#b3b3b3;--disabled-color:#4d4d4d;--switch-toggle-color:#b3b3b3;--switch-track-color:#fff;--filter:invert(100%)}body{--mdc-theme-primary:var(--primary-color);--mdc-theme-secondary:var(--secondary-color);--mdc-theme-on-primary:var(--primary-font-color);--mdc-theme-on-secondary:var(--secondary-font-color);--mdc-text-field-ink-color:var(--other-font-color);--mdc-theme-text-primary-on-background:var(--font-color);--mdc-theme-surface:transparent;--duration:0.5s;--timing:ease;background-color:var(--bg-color);color:var(--font-color);-webkit-transition:color var(--duration) var(--timing),background-color var(--duration) var(--timing);transition:color var(--duration) var(--timing),background-color var(--duration) var(--timing);font-family:var(--font-family)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:var(--disabled-button-bg-color)}.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--disabled-color)}.mdc-select:not(.mdc-select--disabled) .mdc-select__native-control,.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text,.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--other-font-color)}.mdc-select:not(.mdc-select--disabled) .mdc-select__native-control option{color:#000}.mdc-select--with-leading-icon:not(.mdc-select--disabled) .mdc-select__icon{color:var(--enabled-color);opacity:1}.mdc-select__dropdown-icon{-webkit-filter:var(--filter);filter:var(--filter)}.mdc-select--invalid .mdc-select__dropdown-icon{-webkit-filter:invert(0);filter:invert(0)}.mdc-switch--disabled{opacity:.5}.mdc-card__action--icon:not(:disabled){color:var(--enabled-color)}.flex-1-0-auto{-webkit-box-flex:1;flex:1 0 auto}.mdc-icon-button{width:48px;height:48px;padding:12px;font-size:24px;display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mdc-icon-button img,.mdc-icon-button svg{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38));cursor:default;pointer-events:none}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button--on .mdc-icon-button__icon,.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}@-webkit-keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@-webkit-keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@-webkit-keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-icon-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-icon-button:after,.mdc-icon-button:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-icon-button:before{-webkit-transition:opacity 15ms linear,background-color 15ms linear;transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-icon-button:after,.mdc-icon-button:before{top:0;left:0;width:100%;height:100%;background-color:#000}.mdc-icon-button:hover:before{opacity:.04}.mdc-icon-button:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.mdc-icon-button:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.mdc-icon-button:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}";
styleInject(css$3);

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
    ICON_BUTTON_ON: 'mdc-icon-button--on',
    ROOT: 'mdc-icon-button',
};
var strings$3 = {
    ARIA_PRESSED: 'aria-pressed',
    CHANGE_EVENT: 'MDCIconButtonToggle:change',
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
var MDCIconButtonToggleFoundation = /** @class */ (function (_super) {
    __extends(MDCIconButtonToggleFoundation, _super);
    function MDCIconButtonToggleFoundation(adapter) {
        return _super.call(this, __assign({}, MDCIconButtonToggleFoundation.defaultAdapter, adapter)) || this;
    }
    Object.defineProperty(MDCIconButtonToggleFoundation, "cssClasses", {
        get: function () {
            return cssClasses$3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCIconButtonToggleFoundation, "strings", {
        get: function () {
            return strings$3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCIconButtonToggleFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                hasClass: function () { return false; },
                notifyChange: function () { return undefined; },
                removeClass: function () { return undefined; },
                setAttr: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCIconButtonToggleFoundation.prototype.init = function () {
        this.adapter_.setAttr(strings$3.ARIA_PRESSED, "" + this.isOn());
    };
    MDCIconButtonToggleFoundation.prototype.handleClick = function () {
        this.toggle();
        this.adapter_.notifyChange({ isOn: this.isOn() });
    };
    MDCIconButtonToggleFoundation.prototype.isOn = function () {
        return this.adapter_.hasClass(cssClasses$3.ICON_BUTTON_ON);
    };
    MDCIconButtonToggleFoundation.prototype.toggle = function (isOn) {
        if (isOn === void 0) { isOn = !this.isOn(); }
        if (isOn) {
            this.adapter_.addClass(cssClasses$3.ICON_BUTTON_ON);
        }
        else {
            this.adapter_.removeClass(cssClasses$3.ICON_BUTTON_ON);
        }
        this.adapter_.setAttr(strings$3.ARIA_PRESSED, "" + isOn);
    };
    return MDCIconButtonToggleFoundation;
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
var strings$4 = MDCIconButtonToggleFoundation.strings;
var MDCIconButtonToggle = /** @class */ (function (_super) {
    __extends(MDCIconButtonToggle, _super);
    function MDCIconButtonToggle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ripple_ = _this.createRipple_();
        return _this;
    }
    MDCIconButtonToggle.attachTo = function (root) {
        return new MDCIconButtonToggle(root);
    };
    MDCIconButtonToggle.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleClick_ = function () { return _this.foundation_.handleClick(); };
        this.listen('click', this.handleClick_);
    };
    MDCIconButtonToggle.prototype.destroy = function () {
        this.unlisten('click', this.handleClick_);
        this.ripple_.destroy();
        _super.prototype.destroy.call(this);
    };
    MDCIconButtonToggle.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            notifyChange: function (evtData) { return _this.emit(strings$4.CHANGE_EVENT, evtData); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            setAttr: function (attrName, attrValue) { return _this.root_.setAttribute(attrName, attrValue); },
        };
        return new MDCIconButtonToggleFoundation(adapter);
    };
    Object.defineProperty(MDCIconButtonToggle.prototype, "ripple", {
        get: function () {
            return this.ripple_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCIconButtonToggle.prototype, "on", {
        get: function () {
            return this.foundation_.isOn();
        },
        set: function (isOn) {
            this.foundation_.toggle(isOn);
        },
        enumerable: true,
        configurable: true
    });
    MDCIconButtonToggle.prototype.createRipple_ = function () {
        var ripple = new MDCRipple(this.root_);
        ripple.unbounded = true;
        return ripple;
    };
    return MDCIconButtonToggle;
}(MDCComponent));
//# sourceMappingURL=component.js.map

/* node_modules\@smui\icon-button\IconButton.svelte generated by Svelte v3.16.4 */
const file$5 = "node_modules\\@smui\\icon-button\\IconButton.svelte";

// (23:0) {:else}
function create_else_block(ctx) {
	let button;
	let useActions_action;
	let forwardEvents_action;
	let Ripple_action;
	let current;
	let dispose;
	const default_slot_template = /*$$slots*/ ctx[16].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[15], null);

	let button_levels = [
		{
			class: "\n      mdc-icon-button\n      " + /*className*/ ctx[2] + "\n      " + (/*pressed*/ ctx[0] ? "mdc-icon-button--on" : "") + "\n      " + (/*context*/ ctx[10] === "card:action"
			? "mdc-card__action"
			: "") + "\n      " + (/*context*/ ctx[10] === "card:action"
			? "mdc-card__action--icon"
			: "") + "\n      " + (/*context*/ ctx[10] === "top-app-bar:navigation"
			? "mdc-top-app-bar__navigation-icon"
			: "") + "\n      " + (/*context*/ ctx[10] === "top-app-bar:action"
			? "mdc-top-app-bar__action-item"
			: "") + "\n      " + (/*context*/ ctx[10] === "snackbar"
			? "mdc-snackbar__dismiss"
			: "") + "\n    "
		},
		{ "aria-hidden": "true" },
		{ "aria-pressed": /*pressed*/ ctx[0] },
		/*props*/ ctx[8]
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
			button = claim_element(nodes, "BUTTON", {
				class: true,
				"aria-hidden": true,
				"aria-pressed": true
			});

			var button_nodes = children(button);
			if (default_slot) default_slot.l(button_nodes);
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(button, button_data);
			add_location(button, file$5, 23, 2, 763);
			dispose = listen_dev(button, "MDCIconButtonToggle:change", /*handleChange*/ ctx[11], false, false, false);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);

			if (default_slot) {
				default_slot.m(button, null);
			}

			/*button_binding*/ ctx[18](button);
			useActions_action = useActions.call(null, button, /*use*/ ctx[1]) || ({});
			forwardEvents_action = /*forwardEvents*/ ctx[9].call(null, button) || ({});

			Ripple_action = Ripple.call(null, button, [
				/*ripple*/ ctx[3] && !/*toggle*/ ctx[5],
				{ unbounded: true, color: /*color*/ ctx[4] }
			]) || ({});

			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot && default_slot.p && dirty[0] & /*$$scope*/ 32768) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[15], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[15], dirty, null));
			}

			set_attributes(button, get_spread_update(button_levels, [
				dirty[0] & /*className, pressed, context*/ 1029 && ({
					class: "\n      mdc-icon-button\n      " + /*className*/ ctx[2] + "\n      " + (/*pressed*/ ctx[0] ? "mdc-icon-button--on" : "") + "\n      " + (/*context*/ ctx[10] === "card:action"
					? "mdc-card__action"
					: "") + "\n      " + (/*context*/ ctx[10] === "card:action"
					? "mdc-card__action--icon"
					: "") + "\n      " + (/*context*/ ctx[10] === "top-app-bar:navigation"
					? "mdc-top-app-bar__navigation-icon"
					: "") + "\n      " + (/*context*/ ctx[10] === "top-app-bar:action"
					? "mdc-top-app-bar__action-item"
					: "") + "\n      " + (/*context*/ ctx[10] === "snackbar"
					? "mdc-snackbar__dismiss"
					: "") + "\n    "
				}),
				{ "aria-hidden": "true" },
				dirty[0] & /*pressed*/ 1 && ({ "aria-pressed": /*pressed*/ ctx[0] }),
				dirty[0] & /*props*/ 256 && /*props*/ ctx[8]
			]));

			if (is_function(useActions_action.update) && dirty[0] & /*use*/ 2) useActions_action.update.call(null, /*use*/ ctx[1]);

			if (is_function(Ripple_action.update) && dirty[0] & /*ripple, toggle, color*/ 56) Ripple_action.update.call(null, [
				/*ripple*/ ctx[3] && !/*toggle*/ ctx[5],
				{ unbounded: true, color: /*color*/ ctx[4] }
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
			if (detaching) detach_dev(button);
			if (default_slot) default_slot.d(detaching);
			/*button_binding*/ ctx[18](null);
			if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
			if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
			if (Ripple_action && is_function(Ripple_action.destroy)) Ripple_action.destroy();
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(23:0) {:else}",
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
	let dispose;
	const default_slot_template = /*$$slots*/ ctx[16].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[15], null);

	let a_levels = [
		{
			class: "\n      mdc-icon-button\n      " + /*className*/ ctx[2] + "\n      " + (/*pressed*/ ctx[0] ? "mdc-icon-button--on" : "") + "\n      " + (/*context*/ ctx[10] === "card:action"
			? "mdc-card__action"
			: "") + "\n      " + (/*context*/ ctx[10] === "card:action"
			? "mdc-card__action--icon"
			: "") + "\n      " + (/*context*/ ctx[10] === "top-app-bar:navigation"
			? "mdc-top-app-bar__navigation-icon"
			: "") + "\n      " + (/*context*/ ctx[10] === "top-app-bar:action"
			? "mdc-top-app-bar__action-item"
			: "") + "\n      " + (/*context*/ ctx[10] === "snackbar"
			? "mdc-snackbar__dismiss"
			: "") + "\n    "
		},
		{ "aria-hidden": "true" },
		{ "aria-pressed": /*pressed*/ ctx[0] },
		{ href: /*href*/ ctx[6] },
		/*props*/ ctx[8]
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
			a = claim_element(nodes, "A", {
				class: true,
				"aria-hidden": true,
				"aria-pressed": true,
				href: true
			});

			var a_nodes = children(a);
			if (default_slot) default_slot.l(a_nodes);
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(a, a_data);
			add_location(a, file$5, 1, 2, 13);
			dispose = listen_dev(a, "MDCIconButtonToggle:change", /*handleChange*/ ctx[11], false, false, false);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);

			if (default_slot) {
				default_slot.m(a, null);
			}

			/*a_binding*/ ctx[17](a);
			useActions_action = useActions.call(null, a, /*use*/ ctx[1]) || ({});
			forwardEvents_action = /*forwardEvents*/ ctx[9].call(null, a) || ({});

			Ripple_action = Ripple.call(null, a, [
				/*ripple*/ ctx[3] && !/*toggle*/ ctx[5],
				{ unbounded: true, color: /*color*/ ctx[4] }
			]) || ({});

			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot && default_slot.p && dirty[0] & /*$$scope*/ 32768) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[15], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[15], dirty, null));
			}

			set_attributes(a, get_spread_update(a_levels, [
				dirty[0] & /*className, pressed, context*/ 1029 && ({
					class: "\n      mdc-icon-button\n      " + /*className*/ ctx[2] + "\n      " + (/*pressed*/ ctx[0] ? "mdc-icon-button--on" : "") + "\n      " + (/*context*/ ctx[10] === "card:action"
					? "mdc-card__action"
					: "") + "\n      " + (/*context*/ ctx[10] === "card:action"
					? "mdc-card__action--icon"
					: "") + "\n      " + (/*context*/ ctx[10] === "top-app-bar:navigation"
					? "mdc-top-app-bar__navigation-icon"
					: "") + "\n      " + (/*context*/ ctx[10] === "top-app-bar:action"
					? "mdc-top-app-bar__action-item"
					: "") + "\n      " + (/*context*/ ctx[10] === "snackbar"
					? "mdc-snackbar__dismiss"
					: "") + "\n    "
				}),
				{ "aria-hidden": "true" },
				dirty[0] & /*pressed*/ 1 && ({ "aria-pressed": /*pressed*/ ctx[0] }),
				dirty[0] & /*href*/ 64 && ({ href: /*href*/ ctx[6] }),
				dirty[0] & /*props*/ 256 && /*props*/ ctx[8]
			]));

			if (is_function(useActions_action.update) && dirty[0] & /*use*/ 2) useActions_action.update.call(null, /*use*/ ctx[1]);

			if (is_function(Ripple_action.update) && dirty[0] & /*ripple, toggle, color*/ 56) Ripple_action.update.call(null, [
				/*ripple*/ ctx[3] && !/*toggle*/ ctx[5],
				{ unbounded: true, color: /*color*/ ctx[4] }
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
			if (detaching) detach_dev(a);
			if (default_slot) default_slot.d(detaching);
			/*a_binding*/ ctx[17](null);
			if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
			if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
			if (Ripple_action && is_function(Ripple_action.destroy)) Ripple_action.destroy();
			dispose();
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

function create_fragment$5(ctx) {
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
		id: create_fragment$5.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$5($$self, $$props, $$invalidate) {
	const forwardEvents = forwardEventsBuilder(current_component, ["MDCIconButtonToggle:change"]);
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { ripple = true } = $$props;
	let { color = null } = $$props;
	let { toggle = false } = $$props;
	let { pressed = false } = $$props;
	let { href = null } = $$props;
	let element;
	let toggleButton;
	let context = getContext("SMUI:icon-button:context");
	setContext("SMUI:icon:context", "icon-button");
	let oldToggle = null;

	onDestroy(() => {
		toggleButton && toggleButton.destroy();
	});

	function handleChange(e) {
		$$invalidate(0, pressed = e.detail.isOn);
	}

	let { $$slots = {}, $$scope } = $$props;

	function a_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(7, element = $$value);
		});
	}

	function button_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(7, element = $$value);
		});
	}

	$$self.$set = $$new_props => {
		$$invalidate(14, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ("use" in $$new_props) $$invalidate(1, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(2, className = $$new_props.class);
		if ("ripple" in $$new_props) $$invalidate(3, ripple = $$new_props.ripple);
		if ("color" in $$new_props) $$invalidate(4, color = $$new_props.color);
		if ("toggle" in $$new_props) $$invalidate(5, toggle = $$new_props.toggle);
		if ("pressed" in $$new_props) $$invalidate(0, pressed = $$new_props.pressed);
		if ("href" in $$new_props) $$invalidate(6, href = $$new_props.href);
		if ("$$scope" in $$new_props) $$invalidate(15, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => {
		return {
			use,
			className,
			ripple,
			color,
			toggle,
			pressed,
			href,
			element,
			toggleButton,
			context,
			oldToggle,
			props
		};
	};

	$$self.$inject_state = $$new_props => {
		$$invalidate(14, $$props = assign(assign({}, $$props), $$new_props));
		if ("use" in $$props) $$invalidate(1, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(2, className = $$new_props.className);
		if ("ripple" in $$props) $$invalidate(3, ripple = $$new_props.ripple);
		if ("color" in $$props) $$invalidate(4, color = $$new_props.color);
		if ("toggle" in $$props) $$invalidate(5, toggle = $$new_props.toggle);
		if ("pressed" in $$props) $$invalidate(0, pressed = $$new_props.pressed);
		if ("href" in $$props) $$invalidate(6, href = $$new_props.href);
		if ("element" in $$props) $$invalidate(7, element = $$new_props.element);
		if ("toggleButton" in $$props) $$invalidate(12, toggleButton = $$new_props.toggleButton);
		if ("context" in $$props) $$invalidate(10, context = $$new_props.context);
		if ("oldToggle" in $$props) $$invalidate(13, oldToggle = $$new_props.oldToggle);
		if ("props" in $$props) $$invalidate(8, props = $$new_props.props);
	};

	let props;

	$$self.$$.update = () => {
		 $$invalidate(8, props = exclude($$props, ["use", "class", "ripple", "color", "toggle", "pressed", "href"]));

		if ($$self.$$.dirty[0] & /*element, toggle, oldToggle, ripple, toggleButton, pressed*/ 12457) {
			 if (element && toggle !== oldToggle) {
				if (toggle) {
					$$invalidate(12, toggleButton = new MDCIconButtonToggle(element));

					if (!ripple) {
						toggleButton.ripple.destroy();
					}

					$$invalidate(12, toggleButton.on = pressed, toggleButton);
				} else if (oldToggle) {
					toggleButton && toggleButton.destroy();
					$$invalidate(12, toggleButton = null);
				}

				$$invalidate(13, oldToggle = toggle);
			}
		}

		if ($$self.$$.dirty[0] & /*toggleButton, pressed*/ 4097) {
			 if (toggleButton && toggleButton.on !== pressed) {
				$$invalidate(12, toggleButton.on = pressed, toggleButton);
			}
		}
	};

	$$props = exclude_internal_props($$props);

	return [
		pressed,
		use,
		className,
		ripple,
		color,
		toggle,
		href,
		element,
		props,
		forwardEvents,
		context,
		handleChange,
		toggleButton,
		oldToggle,
		$$props,
		$$scope,
		$$slots,
		a_binding,
		button_binding
	];
}

class IconButton extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$5, create_fragment$5, safe_not_equal, {
			use: 1,
			class: 2,
			ripple: 3,
			color: 4,
			toggle: 5,
			pressed: 0,
			href: 6
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "IconButton",
			options,
			id: create_fragment$5.name
		});
	}

	get use() {
		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get ripple() {
		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set ripple(value) {
		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get color() {
		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set color(value) {
		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get toggle() {
		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set toggle(value) {
		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get pressed() {
		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set pressed(value) {
		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get href() {
		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set href(value) {
		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* node_modules\@smui\common\A.svelte generated by Svelte v3.16.4 */
const file$6 = "node_modules\\@smui\\common\\A.svelte";

function create_fragment$6(ctx) {
	let a;
	let useActions_action;
	let forwardEvents_action;
	let current;
	const default_slot_template = /*$$slots*/ ctx[5].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[4], null);
	let a_levels = [{ href: /*href*/ ctx[1] }, exclude(/*$$props*/ ctx[3], ["use", "href"])];
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
			a = claim_element(nodes, "A", { href: true });
			var a_nodes = children(a);
			if (default_slot) default_slot.l(a_nodes);
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(a, a_data);
			add_location(a, file$6, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);

			if (default_slot) {
				default_slot.m(a, null);
			}

			useActions_action = useActions.call(null, a, /*use*/ ctx[0]) || ({});
			forwardEvents_action = /*forwardEvents*/ ctx[2].call(null, a) || ({});
			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot && default_slot.p && dirty[0] & /*$$scope*/ 16) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[4], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[4], dirty, null));
			}

			set_attributes(a, get_spread_update(a_levels, [
				dirty[0] & /*href*/ 2 && ({ href: /*href*/ ctx[1] }),
				dirty[0] & /*$$props*/ 8 && exclude(/*$$props*/ ctx[3], ["use", "href"])
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
			if (detaching) detach_dev(a);
			if (default_slot) default_slot.d(detaching);
			if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
			if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
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

function instance$6($$self, $$props, $$invalidate) {
	const forwardEvents = forwardEventsBuilder(current_component);
	let { use = [] } = $$props;
	let { href = "javascript:void(0);" } = $$props;
	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$new_props => {
		$$invalidate(3, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("href" in $$new_props) $$invalidate(1, href = $$new_props.href);
		if ("$$scope" in $$new_props) $$invalidate(4, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => {
		return { use, href };
	};

	$$self.$inject_state = $$new_props => {
		$$invalidate(3, $$props = assign(assign({}, $$props), $$new_props));
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("href" in $$props) $$invalidate(1, href = $$new_props.href);
	};

	$$props = exclude_internal_props($$props);
	return [use, href, forwardEvents, $$props, $$scope, $$slots];
}

class A extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$6, create_fragment$6, safe_not_equal, { use: 0, href: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "A",
			options,
			id: create_fragment$6.name
		});
	}

	get use() {
		throw new Error("<A>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<A>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get href() {
		throw new Error("<A>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set href(value) {
		throw new Error("<A>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src\routes\_layout.svelte generated by Svelte v3.16.4 */

const { window: window_1 } = globals;
const file$7 = "src\\routes\\_layout.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[16] = list[i];
	child_ctx[17] = list;
	child_ctx[18] = i;
	return child_ctx;
}

// (55:0) {:else}
function create_else_block$1(ctx) {
	let t0;
	let div;
	let updating_open;
	let t1;
	let t2;
	let current;

	const topappbar = new TopAppBar({
			props: {
				variant: "static",
				class: "demo-top-app-bar",
				$$slots: { default: [create_default_slot_6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	function drawer_open_binding(value) {
		/*drawer_open_binding*/ ctx[13].call(null, value);
	}

	let drawer_props = {
		variant: /*miniWindow*/ ctx[1] ? "modal" : null,
		class: "demo-drawer mdc-theme--secondary-bg " + (/*miniWindow*/ ctx[1] ? "demo-drawer-adjust" : ""),
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	};

	if (/*drawerOpen*/ ctx[2] !== void 0) {
		drawer_props.open = /*drawerOpen*/ ctx[2];
	}

	const drawer = new Drawer({ props: drawer_props, $$inline: true });
	binding_callbacks.push(() => bind(drawer, "open", drawer_open_binding));
	let if_block = /*miniWindow*/ ctx[1] && create_if_block_1(ctx);

	const appcontent = new AppContent({
			props: {
				class: "demo-app-content",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(topappbar.$$.fragment);
			t0 = space();
			div = element("div");
			create_component(drawer.$$.fragment);
			t1 = space();
			if (if_block) if_block.c();
			t2 = space();
			create_component(appcontent.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			claim_component(topappbar.$$.fragment, nodes);
			t0 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(drawer.$$.fragment, div_nodes);
			t1 = claim_space(div_nodes);
			if (if_block) if_block.l(div_nodes);
			t2 = claim_space(div_nodes);
			claim_component(appcontent.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "drawer-container");
			add_location(div, file$7, 91, 2, 2619);
		},
		m: function mount(target, anchor) {
			mount_component(topappbar, target, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);
			mount_component(drawer, div, null);
			append_dev(div, t1);
			if (if_block) if_block.m(div, null);
			append_dev(div, t2);
			mount_component(appcontent, div, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const topappbar_changes = {};

			if (dirty[0] & /*$$scope, miniWindow, drawerOpen*/ 32774) {
				topappbar_changes.$$scope = { dirty, ctx };
			}

			topappbar.$set(topappbar_changes);
			const drawer_changes = {};
			if (dirty[0] & /*miniWindow*/ 2) drawer_changes.variant = /*miniWindow*/ ctx[1] ? "modal" : null;
			if (dirty[0] & /*miniWindow*/ 2) drawer_changes.class = "demo-drawer mdc-theme--secondary-bg " + (/*miniWindow*/ ctx[1] ? "demo-drawer-adjust" : "");

			if (dirty[0] & /*$$scope, sections, $page*/ 32792) {
				drawer_changes.$$scope = { dirty, ctx };
			}

			if (!updating_open && dirty[0] & /*drawerOpen*/ 4) {
				updating_open = true;
				drawer_changes.open = /*drawerOpen*/ ctx[2];
				add_flush_callback(() => updating_open = false);
			}

			drawer.$set(drawer_changes);

			if (/*miniWindow*/ ctx[1]) {
				if (!if_block) {
					if_block = create_if_block_1(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(div, t2);
				} else {
					transition_in(if_block, 1);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}

			const appcontent_changes = {};

			if (dirty[0] & /*$$scope, mainContent*/ 32769) {
				appcontent_changes.$$scope = { dirty, ctx };
			}

			appcontent.$set(appcontent_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(topappbar.$$.fragment, local);
			transition_in(drawer.$$.fragment, local);
			transition_in(if_block);
			transition_in(appcontent.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(topappbar.$$.fragment, local);
			transition_out(drawer.$$.fragment, local);
			transition_out(if_block);
			transition_out(appcontent.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(topappbar, detaching);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div);
			destroy_component(drawer);
			if (if_block) if_block.d();
			destroy_component(appcontent);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block$1.name,
		type: "else",
		source: "(55:0) {:else}",
		ctx
	});

	return block;
}

// (53:0) {#if iframe}
function create_if_block$1(ctx) {
	let current;
	const default_slot_template = /*$$slots*/ ctx[9].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[15], null);

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
			if (default_slot && default_slot.p && dirty[0] & /*$$scope*/ 32768) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[15], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[15], dirty, null));
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
		id: create_if_block$1.name,
		type: "if",
		source: "(53:0) {#if iframe}",
		ctx
	});

	return block;
}

// (59:8) {#if miniWindow}
function create_if_block_2(ctx) {
	let current;

	const iconbutton = new IconButton({
			props: {
				class: "material-icons",
				$$slots: { default: [create_default_slot_10] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	iconbutton.$on("click", /*click_handler*/ ctx[10]);

	const block = {
		c: function create() {
			create_component(iconbutton.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(iconbutton.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(iconbutton, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const iconbutton_changes = {};

			if (dirty[0] & /*$$scope*/ 32768) {
				iconbutton_changes.$$scope = { dirty, ctx };
			}

			iconbutton.$set(iconbutton_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(iconbutton.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(iconbutton.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(iconbutton, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2.name,
		type: "if",
		source: "(59:8) {#if miniWindow}",
		ctx
	});

	return block;
}

// (60:10) <IconButton              class="material-icons"              on:click={() => (drawerOpen = !drawerOpen)}>
function create_default_slot_10(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("menu");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "menu");
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
		source: "(60:10) <IconButton              class=\\\"material-icons\\\"              on:click={() => (drawerOpen = !drawerOpen)}>",
		ctx
	});

	return block;
}

// (66:8) <Title            component={A}            href="/"            class="mdc-theme--primary"            style={miniWindow ? 'padding-left: 0;' : ''}>
function create_default_slot_9(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Svelte Material UI");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Svelte Material UI");
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
		id: create_default_slot_9.name,
		type: "slot",
		source: "(66:8) <Title            component={A}            href=\\\"/\\\"            class=\\\"mdc-theme--primary\\\"            style={miniWindow ? 'padding-left: 0;' : ''}>",
		ctx
	});

	return block;
}

// (58:6) <Section>
function create_default_slot_8(ctx) {
	let t;
	let current;
	let if_block = /*miniWindow*/ ctx[1] && create_if_block_2(ctx);

	const title = new Title({
			props: {
				component: A,
				href: "/",
				class: "mdc-theme--primary",
				style: /*miniWindow*/ ctx[1] ? "padding-left: 0;" : "",
				$$slots: { default: [create_default_slot_9] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			t = space();
			create_component(title.$$.fragment);
		},
		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			t = claim_space(nodes);
			claim_component(title.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, t, anchor);
			mount_component(title, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (/*miniWindow*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);
					transition_in(if_block, 1);
				} else {
					if_block = create_if_block_2(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(t.parentNode, t);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}

			const title_changes = {};
			if (dirty[0] & /*miniWindow*/ 2) title_changes.style = /*miniWindow*/ ctx[1] ? "padding-left: 0;" : "";

			if (dirty[0] & /*$$scope*/ 32768) {
				title_changes.$$scope = { dirty, ctx };
			}

			title.$set(title_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			transition_in(title.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			transition_out(title.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(t);
			destroy_component(title, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_8.name,
		type: "slot",
		source: "(58:6) <Section>",
		ctx
	});

	return block;
}

// (57:4) <Row>
function create_default_slot_7(ctx) {
	let current;

	const section = new Section({
			props: {
				$$slots: { default: [create_default_slot_8] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(section.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(section.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(section, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const section_changes = {};

			if (dirty[0] & /*$$scope, miniWindow, drawerOpen*/ 32774) {
				section_changes.$$scope = { dirty, ctx };
			}

			section.$set(section_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(section.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(section.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(section, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_7.name,
		type: "slot",
		source: "(57:4) <Row>",
		ctx
	});

	return block;
}

// (56:2) <TopAppBar variant="static" class="demo-top-app-bar">
function create_default_slot_6(ctx) {
	let current;

	const row = new Row({
			props: {
				$$slots: { default: [create_default_slot_7] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(row.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(row.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(row, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const row_changes = {};

			if (dirty[0] & /*$$scope, miniWindow, drawerOpen*/ 32774) {
				row_changes.$$scope = { dirty, ctx };
			}

			row.$set(row_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(row.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(row.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(row, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_6.name,
		type: "slot",
		source: "(56:2) <TopAppBar variant=\\\"static\\\" class=\\\"demo-top-app-bar\\\">",
		ctx
	});

	return block;
}

// (107:14) <Text class="mdc-theme--on-secondary">
function create_default_slot_5(ctx) {
	let t_value = /*section*/ ctx[16].name + "";
	let t;

	const block = {
		c: function create() {
			t = text(t_value);
		},
		l: function claim(nodes) {
			t = claim_text(nodes, t_value);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*sections*/ 8 && t_value !== (t_value = /*section*/ ctx[16].name + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_5.name,
		type: "slot",
		source: "(107:14) <Text class=\\\"mdc-theme--on-secondary\\\">",
		ctx
	});

	return block;
}

// (100:12) <Item                bind:this={section.component}                href={'route' in section ? section.route : section.shortcut}                on:click={() => pickSection(section)}                activated={'route' in section && section.route === $page.path}                title={section.name}                style={section.indent ? 'margin-left: ' + section.indent * 25 + 'px;' : ''}>
function create_default_slot_4(ctx) {
	let t;
	let current;

	const text_1 = new Text({
			props: {
				class: "mdc-theme--on-secondary",
				$$slots: { default: [create_default_slot_5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(text_1.$$.fragment);
			t = space();
		},
		l: function claim(nodes) {
			claim_component(text_1.$$.fragment, nodes);
			t = claim_space(nodes);
		},
		m: function mount(target, anchor) {
			mount_component(text_1, target, anchor);
			insert_dev(target, t, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const text_1_changes = {};

			if (dirty[0] & /*$$scope, sections*/ 32776) {
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
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_4.name,
		type: "slot",
		source: "(100:12) <Item                bind:this={section.component}                href={'route' in section ? section.route : section.shortcut}                on:click={() => pickSection(section)}                activated={'route' in section && section.route === $page.path}                title={section.name}                style={section.indent ? 'margin-left: ' + section.indent * 25 + 'px;' : ''}>",
		ctx
	});

	return block;
}

// (99:10) {#each sections as section (section.name)}
function create_each_block(key_1, ctx) {
	let first;
	let section = /*section*/ ctx[16];
	let current;
	const assign_item = () => /*item_binding*/ ctx[11](item, section);
	const unassign_item = () => /*item_binding*/ ctx[11](null, section);

	function click_handler_1(...args) {
		return /*click_handler_1*/ ctx[12](/*section*/ ctx[16], ...args);
	}

	let item_props = {
		href: "route" in /*section*/ ctx[16]
		? /*section*/ ctx[16].route
		: /*section*/ ctx[16].shortcut,
		activated: "route" in /*section*/ ctx[16] && /*section*/ ctx[16].route === /*$page*/ ctx[4].path,
		title: /*section*/ ctx[16].name,
		style: /*section*/ ctx[16].indent
		? "margin-left: " + /*section*/ ctx[16].indent * 25 + "px;"
		: "",
		$$slots: { default: [create_default_slot_4] },
		$$scope: { ctx }
	};

	const item = new Item({ props: item_props, $$inline: true });
	assign_item();
	item.$on("click", click_handler_1);

	const block = {
		key: key_1,
		first: null,
		c: function create() {
			first = empty();
			create_component(item.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			first = empty();
			claim_component(item.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			this.first = first;
		},
		m: function mount(target, anchor) {
			insert_dev(target, first, anchor);
			mount_component(item, target, anchor);
			current = true;
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;

			if (section !== /*section*/ ctx[16]) {
				unassign_item();
				section = /*section*/ ctx[16];
				assign_item();
			}

			const item_changes = {};

			if (dirty[0] & /*sections*/ 8) item_changes.href = "route" in /*section*/ ctx[16]
			? /*section*/ ctx[16].route
			: /*section*/ ctx[16].shortcut;

			if (dirty[0] & /*sections, $page*/ 24) item_changes.activated = "route" in /*section*/ ctx[16] && /*section*/ ctx[16].route === /*$page*/ ctx[4].path;
			if (dirty[0] & /*sections*/ 8) item_changes.title = /*section*/ ctx[16].name;

			if (dirty[0] & /*sections*/ 8) item_changes.style = /*section*/ ctx[16].indent
			? "margin-left: " + /*section*/ ctx[16].indent * 25 + "px;"
			: "";

			if (dirty[0] & /*$$scope, sections*/ 32776) {
				item_changes.$$scope = { dirty, ctx };
			}

			item.$set(item_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(item.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(item.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(first);
			unassign_item();
			destroy_component(item, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(99:10) {#each sections as section (section.name)}",
		ctx
	});

	return block;
}

// (98:8) <List>
function create_default_slot_3(ctx) {
	let each_blocks = [];
	let each_1_lookup = new Map();
	let each_1_anchor;
	let current;
	let each_value = /*sections*/ ctx[3];
	const get_key = ctx => /*section*/ ctx[16].name;

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	const block = {
		c: function create() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const each_value = /*sections*/ ctx[3];
			group_outros();
			each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block, each_1_anchor, get_each_context);
			check_outros();
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d(detaching);
			}

			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3.name,
		type: "slot",
		source: "(98:8) <List>",
		ctx
	});

	return block;
}

// (97:6) <Content>
function create_default_slot_2(ctx) {
	let current;

	const list = new List({
			props: {
				$$slots: { default: [create_default_slot_3] },
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

			if (dirty[0] & /*$$scope, sections, $page*/ 32792) {
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
		id: create_default_slot_2.name,
		type: "slot",
		source: "(97:6) <Content>",
		ctx
	});

	return block;
}

// (93:4) <Drawer        variant={miniWindow ? 'modal' : null}        bind:open={drawerOpen}        class="demo-drawer mdc-theme--secondary-bg {miniWindow ? 'demo-drawer-adjust' : ''}">
function create_default_slot_1(ctx) {
	let current;

	const content = new Content({
			props: {
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(content.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(content.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(content, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const content_changes = {};

			if (dirty[0] & /*$$scope, sections, $page*/ 32792) {
				content_changes.$$scope = { dirty, ctx };
			}

			content.$set(content_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(content.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(content.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(content, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1.name,
		type: "slot",
		source: "(93:4) <Drawer        variant={miniWindow ? 'modal' : null}        bind:open={drawerOpen}        class=\\\"demo-drawer mdc-theme--secondary-bg {miniWindow ? 'demo-drawer-adjust' : ''}\\\">",
		ctx
	});

	return block;
}

// (114:4) {#if miniWindow}
function create_if_block_1(ctx) {
	let current;
	const scrim = new Scrim({ $$inline: true });

	const block = {
		c: function create() {
			create_component(scrim.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(scrim.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(scrim, target, anchor);
			current = true;
		},
		i: function intro(local) {
			if (current) return;
			transition_in(scrim.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(scrim.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(scrim, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(114:4) {#if miniWindow}",
		ctx
	});

	return block;
}

// (117:4) <AppContent class="demo-app-content">
function create_default_slot(ctx) {
	let main;
	let current;
	const default_slot_template = /*$$slots*/ ctx[9].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[15], null);

	const block = {
		c: function create() {
			main = element("main");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			main = claim_element(nodes, "MAIN", { class: true });
			var main_nodes = children(main);
			if (default_slot) default_slot.l(main_nodes);
			main_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(main, "class", "demo-main-content");
			add_location(main, file$7, 117, 6, 3584);
		},
		m: function mount(target, anchor) {
			insert_dev(target, main, anchor);

			if (default_slot) {
				default_slot.m(main, null);
			}

			/*main_binding*/ ctx[14](main);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot && default_slot.p && dirty[0] & /*$$scope*/ 32768) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[15], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[15], dirty, null));
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
			if (detaching) detach_dev(main);
			if (default_slot) default_slot.d(detaching);
			/*main_binding*/ ctx[14](null);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(117:4) <AppContent class=\\\"demo-app-content\\\">",
		ctx
	});

	return block;
}

function create_fragment$7(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	let dispose;
	const if_block_creators = [create_if_block$1, create_else_block$1];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*iframe*/ ctx[6]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const block = {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			dispose = listen_dev(window_1, "resize", /*setMiniWindow*/ ctx[8], false, false, false);
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
			dispose();
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
	let $page;
	const { page } = stores$1();
	validate_store(page, "page");
	component_subscribe($$self, page, value => $$invalidate(4, $page = value));
	const iframe = $page.path.startsWith("/demo/top-app-bar-iframe");
	let mainContent;
	let miniWindow = false;
	let drawerOpen = false;

	const sections = [
		{
			name: "Buttons",
			route: "/ComponentPages/ButtonPage",
			indent: 0
		},
		{
			name: "Checkbox",
			route: "/ComponentPages/CheckboxPage",
			indent: 0
		}
	];

	onMount(setMiniWindow);

	function pickSection(section) {
		$$invalidate(2, drawerOpen = false);
		$$invalidate(0, mainContent.scrollTop = 0, mainContent);
		sections.forEach(section => section.component.$set({ activated: false }));
		section.component.$set({ activated: true });
	}

	function setMiniWindow() {
		$$invalidate(1, miniWindow = window.innerWidth < 720);
	}

	let { $$slots = {}, $$scope } = $$props;
	const click_handler = () => $$invalidate(2, drawerOpen = !drawerOpen);

	function item_binding($$value, section) {
		if (section.component === $$value) return;

		binding_callbacks[$$value ? "unshift" : "push"](() => {
			section.component = $$value;
			$$invalidate(16, section);
		});
	}

	const click_handler_1 = section => pickSection(section);

	function drawer_open_binding(value) {
		drawerOpen = value;
		$$invalidate(2, drawerOpen);
	}

	function main_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(0, mainContent = $$value);
		});
	}

	$$self.$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(15, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("mainContent" in $$props) $$invalidate(0, mainContent = $$props.mainContent);
		if ("miniWindow" in $$props) $$invalidate(1, miniWindow = $$props.miniWindow);
		if ("drawerOpen" in $$props) $$invalidate(2, drawerOpen = $$props.drawerOpen);
		if ("$page" in $$props) page.set($page = $$props.$page);
	};

	return [
		mainContent,
		miniWindow,
		drawerOpen,
		sections,
		$page,
		page,
		iframe,
		pickSection,
		setMiniWindow,
		$$slots,
		click_handler,
		item_binding,
		click_handler_1,
		drawer_open_binding,
		main_binding,
		$$scope
	];
}

class Layout extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$7, create_fragment$7, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Layout",
			options,
			id: create_fragment$7.name
		});
	}
}

/* src\node_modules\@sapper\internal\error.svelte generated by Svelte v3.16.4 */

const { Error: Error_1 } = globals;
const file$8 = "src\\node_modules\\@sapper\\internal\\error.svelte";

// (10:0) {#if "development" === 'development'}
function create_if_block$2(ctx) {
	let pre;
	let t_value = /*error*/ ctx[0].stack + "";
	let t;

	const block = {
		c: function create() {
			pre = element("pre");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			pre = claim_element(nodes, "PRE", {});
			var pre_nodes = children(pre);
			t = claim_text(pre_nodes, t_value);
			pre_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(pre, file$8, 10, 1, 141);
		},
		m: function mount(target, anchor) {
			insert_dev(target, pre, anchor);
			append_dev(pre, t);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*error*/ 1 && t_value !== (t_value = /*error*/ ctx[0].stack + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(pre);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$2.name,
		type: "if",
		source: "(10:0) {#if \\\"development\\\" === 'development'}",
		ctx
	});

	return block;
}

function create_fragment$8(ctx) {
	let h1;
	let t0;
	let t1;
	let p;
	let t2_value = /*error*/ ctx[0].message + "";
	let t2;
	let t3;
	let if_block_anchor;
	let if_block =  create_if_block$2(ctx);

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text(/*status*/ ctx[1]);
			t1 = space();
			p = element("p");
			t2 = text(t2_value);
			t3 = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, /*status*/ ctx[1]);
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, t2_value);
			p_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file$8, 5, 0, 59);
			add_location(p, file$8, 7, 0, 78);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, p, anchor);
			append_dev(p, t2);
			insert_dev(target, t3, anchor);
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*status*/ 2) set_data_dev(t0, /*status*/ ctx[1]);
			if (dirty[0] & /*error*/ 1 && t2_value !== (t2_value = /*error*/ ctx[0].message + "")) set_data_dev(t2, t2_value);
			if_block.p(ctx, dirty);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(p);
			if (detaching) detach_dev(t3);
			if (if_block) if_block.d(detaching);
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
	let { error } = $$props;
	let { status } = $$props;
	const writable_props = ["error", "status"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Error> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ("error" in $$props) $$invalidate(0, error = $$props.error);
		if ("status" in $$props) $$invalidate(1, status = $$props.status);
	};

	$$self.$capture_state = () => {
		return { error, status };
	};

	$$self.$inject_state = $$props => {
		if ("error" in $$props) $$invalidate(0, error = $$props.error);
		if ("status" in $$props) $$invalidate(1, status = $$props.status);
	};

	return [error, status];
}

class Error$1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$8, create_fragment$8, safe_not_equal, { error: 0, status: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Error",
			options,
			id: create_fragment$8.name
		});

		const { ctx } = this.$$;
		const props = options.props || ({});

		if (/*error*/ ctx[0] === undefined && !("error" in props)) {
			console.warn("<Error> was created without expected prop 'error'");
		}

		if (/*status*/ ctx[1] === undefined && !("status" in props)) {
			console.warn("<Error> was created without expected prop 'status'");
		}
	}

	get error() {
		throw new Error_1("<Error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set error(value) {
		throw new Error_1("<Error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get status() {
		throw new Error_1("<Error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set status(value) {
		throw new Error_1("<Error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src\node_modules\@sapper\internal\App.svelte generated by Svelte v3.16.4 */

const { Error: Error_1$1 } = globals;

// (21:1) {:else}
function create_else_block$2(ctx) {
	let switch_instance_anchor;
	let current;
	const switch_instance_spread_levels = [/*level1*/ ctx[4].props];
	var switch_value = /*level1*/ ctx[4].component;

	function switch_props(ctx) {
		let switch_instance_props = {};

		for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
			switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
		}

		return {
			props: switch_instance_props,
			$$inline: true
		};
	}

	if (switch_value) {
		var switch_instance = new switch_value(switch_props());
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
			const switch_instance_changes = (dirty[0] & /*level1*/ 16)
			? get_spread_update(switch_instance_spread_levels, [get_spread_object(/*level1*/ ctx[4].props)])
			: {};

			if (switch_value !== (switch_value = /*level1*/ ctx[4].component)) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props());
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
		id: create_else_block$2.name,
		type: "else",
		source: "(21:1) {:else}",
		ctx
	});

	return block;
}

// (19:1) {#if error}
function create_if_block$3(ctx) {
	let current;

	const error_1 = new Error$1({
			props: {
				error: /*error*/ ctx[0],
				status: /*status*/ ctx[1]
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(error_1.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(error_1.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(error_1, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const error_1_changes = {};
			if (dirty[0] & /*error*/ 1) error_1_changes.error = /*error*/ ctx[0];
			if (dirty[0] & /*status*/ 2) error_1_changes.status = /*status*/ ctx[1];
			error_1.$set(error_1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(error_1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(error_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(error_1, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$3.name,
		type: "if",
		source: "(19:1) {#if error}",
		ctx
	});

	return block;
}

// (18:0) <Layout segment="{segments[0]}" {...level0.props}>
function create_default_slot$1(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block$3, create_else_block$2];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*error*/ ctx[0]) return 0;
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
		id: create_default_slot$1.name,
		type: "slot",
		source: "(18:0) <Layout segment=\\\"{segments[0]}\\\" {...level0.props}>",
		ctx
	});

	return block;
}

function create_fragment$9(ctx) {
	let current;
	const layout_spread_levels = [{ segment: /*segments*/ ctx[2][0] }, /*level0*/ ctx[3].props];

	let layout_props = {
		$$slots: { default: [create_default_slot$1] },
		$$scope: { ctx }
	};

	for (let i = 0; i < layout_spread_levels.length; i += 1) {
		layout_props = assign(layout_props, layout_spread_levels[i]);
	}

	const layout = new Layout({ props: layout_props, $$inline: true });

	const block = {
		c: function create() {
			create_component(layout.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(layout.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(layout, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const layout_changes = (dirty[0] & /*segments, level0*/ 12)
			? get_spread_update(layout_spread_levels, [
					dirty[0] & /*segments*/ 4 && ({ segment: /*segments*/ ctx[2][0] }),
					dirty[0] & /*level0*/ 8 && get_spread_object(/*level0*/ ctx[3].props)
				])
			: {};

			if (dirty[0] & /*$$scope, error, status, level1*/ 83) {
				layout_changes.$$scope = { dirty, ctx };
			}

			layout.$set(layout_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(layout.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(layout.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(layout, detaching);
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

function instance$9($$self, $$props, $$invalidate) {
	let { stores } = $$props;
	let { error } = $$props;
	let { status } = $$props;
	let { segments } = $$props;
	let { level0 } = $$props;
	let { level1 = null } = $$props;
	setContext(CONTEXT_KEY, stores);
	const writable_props = ["stores", "error", "status", "segments", "level0", "level1"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<App> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ("stores" in $$props) $$invalidate(5, stores = $$props.stores);
		if ("error" in $$props) $$invalidate(0, error = $$props.error);
		if ("status" in $$props) $$invalidate(1, status = $$props.status);
		if ("segments" in $$props) $$invalidate(2, segments = $$props.segments);
		if ("level0" in $$props) $$invalidate(3, level0 = $$props.level0);
		if ("level1" in $$props) $$invalidate(4, level1 = $$props.level1);
	};

	$$self.$capture_state = () => {
		return {
			stores,
			error,
			status,
			segments,
			level0,
			level1
		};
	};

	$$self.$inject_state = $$props => {
		if ("stores" in $$props) $$invalidate(5, stores = $$props.stores);
		if ("error" in $$props) $$invalidate(0, error = $$props.error);
		if ("status" in $$props) $$invalidate(1, status = $$props.status);
		if ("segments" in $$props) $$invalidate(2, segments = $$props.segments);
		if ("level0" in $$props) $$invalidate(3, level0 = $$props.level0);
		if ("level1" in $$props) $$invalidate(4, level1 = $$props.level1);
	};

	return [error, status, segments, level0, level1, stores];
}

class App extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$9, create_fragment$9, safe_not_equal, {
			stores: 5,
			error: 0,
			status: 1,
			segments: 2,
			level0: 3,
			level1: 4
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "App",
			options,
			id: create_fragment$9.name
		});

		const { ctx } = this.$$;
		const props = options.props || ({});

		if (/*stores*/ ctx[5] === undefined && !("stores" in props)) {
			console.warn("<App> was created without expected prop 'stores'");
		}

		if (/*error*/ ctx[0] === undefined && !("error" in props)) {
			console.warn("<App> was created without expected prop 'error'");
		}

		if (/*status*/ ctx[1] === undefined && !("status" in props)) {
			console.warn("<App> was created without expected prop 'status'");
		}

		if (/*segments*/ ctx[2] === undefined && !("segments" in props)) {
			console.warn("<App> was created without expected prop 'segments'");
		}

		if (/*level0*/ ctx[3] === undefined && !("level0" in props)) {
			console.warn("<App> was created without expected prop 'level0'");
		}
	}

	get stores() {
		throw new Error_1$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set stores(value) {
		throw new Error_1$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get error() {
		throw new Error_1$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set error(value) {
		throw new Error_1$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get status() {
		throw new Error_1$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set status(value) {
		throw new Error_1$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get segments() {
		throw new Error_1$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set segments(value) {
		throw new Error_1$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get level0() {
		throw new Error_1$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set level0(value) {
		throw new Error_1$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get level1() {
		throw new Error_1$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set level1(value) {
		throw new Error_1$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

// This file is generated by Sapper — do not edit it!

const ignore = [];

const components = [
	{
		js: () => import('./index.1533a0a6.js'),
		css: []
	},
	{
		js: () => import('./CheckboxPage.c8156243.js'),
		css: ["CheckboxPage.c8156243.css"]
	},
	{
		js: () => import('./ButtonPage.9aa58e5c.js'),
		css: ["ButtonPage.9aa58e5c.css"]
	},
	{
		js: () => import('./Example.ec778167.js'),
		css: []
	},
	{
		js: () => import('./Page.1f0ccc90.js'),
		css: []
	}
];

const routes = [
	{
		// index.svelte
		pattern: /^\/$/,
		parts: [
			{ i: 0 }
		]
	},

	{
		// ComponentPages/CheckboxPage.svelte
		pattern: /^\/ComponentPages\/CheckboxPage\/?$/,
		parts: [
			null,
			{ i: 1 }
		]
	},

	{
		// ComponentPages/ButtonPage.svelte
		pattern: /^\/ComponentPages\/ButtonPage\/?$/,
		parts: [
			null,
			{ i: 2 }
		]
	},

	{
		// ComponentPages/Example.svelte
		pattern: /^\/ComponentPages\/Example\/?$/,
		parts: [
			null,
			{ i: 3 }
		]
	},

	{
		// ComponentPages/Page.svelte
		pattern: /^\/ComponentPages\/Page\/?$/,
		parts: [
			null,
			{ i: 4 }
		]
	}
];

if (typeof window !== 'undefined') {
	import('./sapper-dev-client.89e34bae.js').then(client => {
		client.connect(10000);
	});
}

function goto(href, opts = { replaceState: false }) {
	const target = select_target(new URL(href, document.baseURI));

	if (target) {
		_history[opts.replaceState ? 'replaceState' : 'pushState']({ id: cid }, '', href);
		return navigate(target, null).then(() => {});
	}

	location.href = href;
	return new Promise(f => {}); // never resolves
}

const initial_data = typeof __SAPPER__ !== 'undefined' && __SAPPER__;

let ready = false;
let root_component;
let current_token;
let root_preloaded;
let current_branch = [];
let current_query = '{}';

const stores = {
	page: writable({}),
	preloading: writable(null),
	session: writable(initial_data && initial_data.session)
};

let $session;
let session_dirty;

stores.session.subscribe(async value => {
	$session = value;

	if (!ready) return;
	session_dirty = true;

	const target = select_target(new URL(location.href));

	const token = current_token = {};
	const { redirect, props, branch } = await hydrate_target(target);
	if (token !== current_token) return; // a secondary navigation happened while we were loading

	await render(redirect, branch, props, target.page);
});

let prefetching


 = null;
function set_prefetching(href, promise) {
	prefetching = { href, promise };
}

let target;
function set_target(element) {
	target = element;
}

let uid = 1;
function set_uid(n) {
	uid = n;
}

let cid;
function set_cid(n) {
	cid = n;
}

const _history = typeof history !== 'undefined' ? history : {
	pushState: (state, title, href) => {},
	replaceState: (state, title, href) => {},
	scrollRestoration: ''
};

const scroll_history = {};

function extract_query(search) {
	const query = Object.create(null);
	if (search.length > 0) {
		search.slice(1).split('&').forEach(searchParam => {
			let [, key, value = ''] = /([^=]*)(?:=(.*))?/.exec(decodeURIComponent(searchParam.replace(/\+/g, ' ')));
			if (typeof query[key] === 'string') query[key] = [query[key]];
			if (typeof query[key] === 'object') (query[key] ).push(value);
			else query[key] = value;
		});
	}
	return query;
}

function select_target(url) {
	if (url.origin !== location.origin) return null;
	if (!url.pathname.startsWith(initial_data.baseUrl)) return null;

	let path = url.pathname.slice(initial_data.baseUrl.length);

	if (path === '') {
		path = '/';
	}

	// avoid accidental clashes between server routes and page routes
	if (ignore.some(pattern => pattern.test(path))) return;

	for (let i = 0; i < routes.length; i += 1) {
		const route = routes[i];

		const match = route.pattern.exec(path);

		if (match) {
			const query = extract_query(url.search);
			const part = route.parts[route.parts.length - 1];
			const params = part.params ? part.params(match) : {};

			const page = { host: location.host, path, query, params };

			return { href: url.href, route, match, page };
		}
	}
}

function handle_error(url) {
	const { host, pathname, search } = location;
	const { session, preloaded, status, error } = initial_data;

	if (!root_preloaded) {
		root_preloaded = preloaded && preloaded[0];
	}

	const props = {
		error,
		status,
		session,
		level0: {
			props: root_preloaded
		},
		level1: {
			props: {
				status,
				error
			},
			component: Error$1
		},
		segments: preloaded

	};
	const query = extract_query(search);
	render(null, [], props, { host, path: pathname, query, params: {} });
}

function scroll_state() {
	return {
		x: pageXOffset,
		y: pageYOffset
	};
}

async function navigate(target, id, noscroll, hash) {
	if (id) {
		// popstate or initial navigation
		cid = id;
	} else {
		const current_scroll = scroll_state();

		// clicked on a link. preserve scroll state
		scroll_history[cid] = current_scroll;

		id = cid = ++uid;
		scroll_history[cid] = noscroll ? current_scroll : { x: 0, y: 0 };
	}

	cid = id;

	if (root_component) stores.preloading.set(true);

	const loaded = prefetching && prefetching.href === target.href ?
		prefetching.promise :
		hydrate_target(target);

	prefetching = null;

	const token = current_token = {};
	const { redirect, props, branch } = await loaded;
	if (token !== current_token) return; // a secondary navigation happened while we were loading

	await render(redirect, branch, props, target.page);
	if (document.activeElement) document.activeElement.blur();

	if (!noscroll) {
		let scroll = scroll_history[id];

		if (hash) {
			// scroll is an element id (from a hash), we need to compute y.
			const deep_linked = document.getElementById(hash.slice(1));

			if (deep_linked) {
				scroll = {
					x: 0,
					y: deep_linked.getBoundingClientRect().top
				};
			}
		}

		scroll_history[cid] = scroll;
		if (scroll) scrollTo(scroll.x, scroll.y);
	}
}

async function render(redirect, branch, props, page) {
	if (redirect) return goto(redirect.location, { replaceState: true });

	stores.page.set(page);
	stores.preloading.set(false);

	if (root_component) {
		root_component.$set(props);
	} else {
		props.stores = {
			page: { subscribe: stores.page.subscribe },
			preloading: { subscribe: stores.preloading.subscribe },
			session: stores.session
		};
		props.level0 = {
			props: await root_preloaded
		};

		// first load — remove SSR'd <head> contents
		const start = document.querySelector('#sapper-head-start');
		const end = document.querySelector('#sapper-head-end');

		if (start && end) {
			while (start.nextSibling !== end) detach(start.nextSibling);
			detach(start);
			detach(end);
		}

		root_component = new App({
			target,
			props,
			hydrate: true
		});
	}

	current_branch = branch;
	current_query = JSON.stringify(page.query);
	ready = true;
	session_dirty = false;
}

function part_changed(i, segment, match, stringified_query) {
	// TODO only check query string changes for preload functions
	// that do in fact depend on it (using static analysis or
	// runtime instrumentation)
	if (stringified_query !== current_query) return true;

	const previous = current_branch[i];

	if (!previous) return false;
	if (segment !== previous.segment) return true;
	if (previous.match) {
		if (JSON.stringify(previous.match.slice(1, i + 2)) !== JSON.stringify(match.slice(1, i + 2))) {
			return true;
		}
	}
}

async function hydrate_target(target)



 {
	const { route, page } = target;
	const segments = page.path.split('/').filter(Boolean);

	let redirect = null;

	const props = { error: null, status: 200, segments: [segments[0]] };

	const preload_context = {
		fetch: (url, opts) => fetch(url, opts),
		redirect: (statusCode, location) => {
			if (redirect && (redirect.statusCode !== statusCode || redirect.location !== location)) {
				throw new Error(`Conflicting redirects`);
			}
			redirect = { statusCode, location };
		},
		error: (status, error) => {
			props.error = typeof error === 'string' ? new Error(error) : error;
			props.status = status;
		}
	};

	if (!root_preloaded) {
		root_preloaded = initial_data.preloaded[0] || preload.call(preload_context, {
			host: page.host,
			path: page.path,
			query: page.query,
			params: {}
		}, $session);
	}

	let branch;
	let l = 1;

	try {
		const stringified_query = JSON.stringify(page.query);
		const match = route.pattern.exec(page.path);

		let segment_dirty = false;

		branch = await Promise.all(route.parts.map(async (part, i) => {
			const segment = segments[i];

			if (part_changed(i, segment, match, stringified_query)) segment_dirty = true;

			props.segments[l] = segments[i + 1]; // TODO make this less confusing
			if (!part) return { segment };

			const j = l++;

			if (!session_dirty && !segment_dirty && current_branch[i] && current_branch[i].part === part.i) {
				return current_branch[i];
			}

			segment_dirty = false;

			const { default: component, preload } = await load_component(components[part.i]);

			let preloaded;
			if (ready || !initial_data.preloaded[i + 1]) {
				preloaded = preload
					? await preload.call(preload_context, {
						host: page.host,
						path: page.path,
						query: page.query,
						params: part.params ? part.params(target.match) : {}
					}, $session)
					: {};
			} else {
				preloaded = initial_data.preloaded[i + 1];
			}

			return (props[`level${j}`] = { component, props: preloaded, segment, match, part: part.i });
		}));
	} catch (error) {
		props.error = error;
		props.status = 500;
		branch = [];
	}

	return { redirect, props, branch };
}

function load_css(chunk) {
	const href = `client/${chunk}`;
	if (document.querySelector(`link[href="${href}"]`)) return;

	return new Promise((fulfil, reject) => {
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = href;

		link.onload = () => fulfil();
		link.onerror = reject;

		document.head.appendChild(link);
	});
}

function load_component(component)


 {
	// TODO this is temporary — once placeholders are
	// always rewritten, scratch the ternary
	const promises = (typeof component.css === 'string' ? [] : component.css.map(load_css));
	promises.unshift(component.js());
	return Promise.all(promises).then(values => values[0]);
}

function detach(node) {
	node.parentNode.removeChild(node);
}

function prefetch(href) {
	const target = select_target(new URL(href, document.baseURI));

	if (target) {
		if (!prefetching || href !== prefetching.href) {
			set_prefetching(href, hydrate_target(target));
		}

		return prefetching.promise;
	}
}

function start(opts

) {
	if ('scrollRestoration' in _history) {
		_history.scrollRestoration = 'manual';
	}

	set_target(opts.target);

	addEventListener('click', handle_click);
	addEventListener('popstate', handle_popstate);

	// prefetch
	addEventListener('touchstart', trigger_prefetch);
	addEventListener('mousemove', handle_mousemove);

	return Promise.resolve().then(() => {
		const { hash, href } = location;

		_history.replaceState({ id: uid }, '', href);

		const url = new URL(location.href);

		if (initial_data.error) return handle_error();

		const target = select_target(url);
		if (target) return navigate(target, uid, true, hash);
	});
}

let mousemove_timeout;

function handle_mousemove(event) {
	clearTimeout(mousemove_timeout);
	mousemove_timeout = setTimeout(() => {
		trigger_prefetch(event);
	}, 20);
}

function trigger_prefetch(event) {
	const a = find_anchor(event.target);
	if (!a || a.rel !== 'prefetch') return;

	prefetch(a.href);
}

function handle_click(event) {
	// Adapted from https://github.com/visionmedia/page.js
	// MIT license https://github.com/visionmedia/page.js#license
	if (which(event) !== 1) return;
	if (event.metaKey || event.ctrlKey || event.shiftKey) return;
	if (event.defaultPrevented) return;

	const a = find_anchor(event.target);
	if (!a) return;

	if (!a.href) return;

	// check if link is inside an svg
	// in this case, both href and target are always inside an object
	const svg = typeof a.href === 'object' && a.href.constructor.name === 'SVGAnimatedString';
	const href = String(svg ? (a).href.baseVal : a.href);

	if (href === location.href) {
		if (!location.hash) event.preventDefault();
		return;
	}

	// Ignore if tag has
	// 1. 'download' attribute
	// 2. rel='external' attribute
	if (a.hasAttribute('download') || a.getAttribute('rel') === 'external') return;

	// Ignore if <a> has a target
	if (svg ? (a).target.baseVal : a.target) return;

	const url = new URL(href);

	// Don't handle hash changes
	if (url.pathname === location.pathname && url.search === location.search) return;

	const target = select_target(url);
	if (target) {
		const noscroll = a.hasAttribute('sapper-noscroll');
		navigate(target, null, noscroll, url.hash);
		event.preventDefault();
		_history.pushState({ id: cid }, '', url.href);
	}
}

function which(event) {
	return event.which === null ? event.button : event.which;
}

function find_anchor(node) {
	while (node && node.nodeName.toUpperCase() !== 'A') node = node.parentNode; // SVG <a> elements have a lowercase name
	return node;
}

function handle_popstate(event) {
	scroll_history[cid] = scroll_state();

	if (event.state) {
		const url = new URL(location.href);
		const target = select_target(url);
		if (target) {
			navigate(target, event.state.id);
		} else {
			location.href = location.href;
		}
	} else {
		// hashchange
		set_uid(uid + 1);
		set_cid(uid);
		_history.replaceState({ id: cid }, '', location.href);
	}
}

const stores$1 = () => getContext(CONTEXT_KEY);

start({
	target: document.querySelector('#sapper')
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LjQ2MTY3ZDk3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL3N0b3JlL2luZGV4Lm1qcyIsIi4uLy4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9pbnRlcm5hbC9zaGFyZWQubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90b3AtYXBwLWJhci9jb25zdGFudHMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RvcC1hcHAtYmFyL2ZvdW5kYXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RvcC1hcHAtYmFyL3N0YW5kYXJkL2ZvdW5kYXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RvcC1hcHAtYmFyL2ZpeGVkL2ZvdW5kYXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RvcC1hcHAtYmFyL3Nob3J0L2ZvdW5kYXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RvcC1hcHAtYmFyL2NvbXBvbmVudC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS90b3AtYXBwLWJhci9Ub3BBcHBCYXIuc3ZlbHRlIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL3RvcC1hcHAtYmFyL1Jvdy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS90b3AtYXBwLWJhci9TZWN0aW9uLnN2ZWx0ZSIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS90b3AtYXBwLWJhci9UaXRsZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy90YWJiYWJsZS9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZm9jdXMtdHJhcC9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZHJhd2VyL3V0aWwuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RyYXdlci9jb25zdGFudHMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RyYXdlci9kaXNtaXNzaWJsZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kcmF3ZXIvbW9kYWwvZm91bmRhdGlvbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZHJhd2VyL2NvbXBvbmVudC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS9kcmF3ZXIvRHJhd2VyLnN2ZWx0ZSIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS9kcmF3ZXIvQXBwQ29udGVudC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS9kcmF3ZXIvQ29udGVudC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac211aS9kcmF3ZXIvSGVhZGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9IMS5zdmVsdGUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNtdWkvZHJhd2VyL1RpdGxlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9IMi5zdmVsdGUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNtdWkvZHJhd2VyL1N1YnRpdGxlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzbXVpL2RyYXdlci9TY3JpbS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvaWNvbi1idXR0b24vY29uc3RhbnRzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9pY29uLWJ1dHRvbi9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9pY29uLWJ1dHRvbi9jb21wb25lbnQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNtdWkvaWNvbi1idXR0b24vSWNvbkJ1dHRvbi5zdmVsdGUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL0Euc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9fbGF5b3V0LnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9pbnRlcm5hbC9lcnJvci5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvbm9kZV9tb2R1bGVzL0BzYXBwZXIvaW50ZXJuYWwvQXBwLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9pbnRlcm5hbC9tYW5pZmVzdC1jbGllbnQubWpzIiwiLi4vLi4vLi4vc3JjL25vZGVfbW9kdWxlcy9Ac2FwcGVyL2FwcC5tanMiLCIuLi8uLi8uLi9zcmMvY2xpZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNhZmVfbm90X2VxdWFsLCBub29wLCBydW5fYWxsLCBpc19mdW5jdGlvbiB9IGZyb20gJy4uL2ludGVybmFsJztcbmV4cG9ydCB7IGdldF9zdG9yZV92YWx1ZSBhcyBnZXQgfSBmcm9tICcuLi9pbnRlcm5hbCc7XG5cbmNvbnN0IHN1YnNjcmliZXJfcXVldWUgPSBbXTtcbi8qKlxuICogQ3JlYXRlcyBhIGBSZWFkYWJsZWAgc3RvcmUgdGhhdCBhbGxvd3MgcmVhZGluZyBieSBzdWJzY3JpcHRpb24uXG4gKiBAcGFyYW0gdmFsdWUgaW5pdGlhbCB2YWx1ZVxuICogQHBhcmFtIHtTdGFydFN0b3BOb3RpZmllcn1zdGFydCBzdGFydCBhbmQgc3RvcCBub3RpZmljYXRpb25zIGZvciBzdWJzY3JpcHRpb25zXG4gKi9cbmZ1bmN0aW9uIHJlYWRhYmxlKHZhbHVlLCBzdGFydCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHN1YnNjcmliZTogd3JpdGFibGUodmFsdWUsIHN0YXJ0KS5zdWJzY3JpYmUsXG4gICAgfTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgYFdyaXRhYmxlYCBzdG9yZSB0aGF0IGFsbG93cyBib3RoIHVwZGF0aW5nIGFuZCByZWFkaW5nIGJ5IHN1YnNjcmlwdGlvbi5cbiAqIEBwYXJhbSB7Kj19dmFsdWUgaW5pdGlhbCB2YWx1ZVxuICogQHBhcmFtIHtTdGFydFN0b3BOb3RpZmllcj19c3RhcnQgc3RhcnQgYW5kIHN0b3Agbm90aWZpY2F0aW9ucyBmb3Igc3Vic2NyaXB0aW9uc1xuICovXG5mdW5jdGlvbiB3cml0YWJsZSh2YWx1ZSwgc3RhcnQgPSBub29wKSB7XG4gICAgbGV0IHN0b3A7XG4gICAgY29uc3Qgc3Vic2NyaWJlcnMgPSBbXTtcbiAgICBmdW5jdGlvbiBzZXQobmV3X3ZhbHVlKSB7XG4gICAgICAgIGlmIChzYWZlX25vdF9lcXVhbCh2YWx1ZSwgbmV3X3ZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSBuZXdfdmFsdWU7XG4gICAgICAgICAgICBpZiAoc3RvcCkgeyAvLyBzdG9yZSBpcyByZWFkeVxuICAgICAgICAgICAgICAgIGNvbnN0IHJ1bl9xdWV1ZSA9ICFzdWJzY3JpYmVyX3F1ZXVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHMgPSBzdWJzY3JpYmVyc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgc1sxXSgpO1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyX3F1ZXVlLnB1c2gocywgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocnVuX3F1ZXVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Vic2NyaWJlcl9xdWV1ZS5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlcl9xdWV1ZVtpXVswXShzdWJzY3JpYmVyX3F1ZXVlW2kgKyAxXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlcl9xdWV1ZS5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGUoZm4pIHtcbiAgICAgICAgc2V0KGZuKHZhbHVlKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN1YnNjcmliZShydW4sIGludmFsaWRhdGUgPSBub29wKSB7XG4gICAgICAgIGNvbnN0IHN1YnNjcmliZXIgPSBbcnVuLCBpbnZhbGlkYXRlXTtcbiAgICAgICAgc3Vic2NyaWJlcnMucHVzaChzdWJzY3JpYmVyKTtcbiAgICAgICAgaWYgKHN1YnNjcmliZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgc3RvcCA9IHN0YXJ0KHNldCkgfHwgbm9vcDtcbiAgICAgICAgfVxuICAgICAgICBydW4odmFsdWUpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzdWJzY3JpYmVycy5pbmRleE9mKHN1YnNjcmliZXIpO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3Vic2NyaWJlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc3RvcCgpO1xuICAgICAgICAgICAgICAgIHN0b3AgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4geyBzZXQsIHVwZGF0ZSwgc3Vic2NyaWJlIH07XG59XG5mdW5jdGlvbiBkZXJpdmVkKHN0b3JlcywgZm4sIGluaXRpYWxfdmFsdWUpIHtcbiAgICBjb25zdCBzaW5nbGUgPSAhQXJyYXkuaXNBcnJheShzdG9yZXMpO1xuICAgIGNvbnN0IHN0b3Jlc19hcnJheSA9IHNpbmdsZVxuICAgICAgICA/IFtzdG9yZXNdXG4gICAgICAgIDogc3RvcmVzO1xuICAgIGNvbnN0IGF1dG8gPSBmbi5sZW5ndGggPCAyO1xuICAgIHJldHVybiByZWFkYWJsZShpbml0aWFsX3ZhbHVlLCAoc2V0KSA9PiB7XG4gICAgICAgIGxldCBpbml0ZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gW107XG4gICAgICAgIGxldCBwZW5kaW5nID0gMDtcbiAgICAgICAgbGV0IGNsZWFudXAgPSBub29wO1xuICAgICAgICBjb25zdCBzeW5jID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHBlbmRpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmbihzaW5nbGUgPyB2YWx1ZXNbMF0gOiB2YWx1ZXMsIHNldCk7XG4gICAgICAgICAgICBpZiAoYXV0bykge1xuICAgICAgICAgICAgICAgIHNldChyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xlYW51cCA9IGlzX2Z1bmN0aW9uKHJlc3VsdCkgPyByZXN1bHQgOiBub29wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB1bnN1YnNjcmliZXJzID0gc3RvcmVzX2FycmF5Lm1hcCgoc3RvcmUsIGkpID0+IHN0b3JlLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZhbHVlc1tpXSA9IHZhbHVlO1xuICAgICAgICAgICAgcGVuZGluZyAmPSB+KDEgPDwgaSk7XG4gICAgICAgICAgICBpZiAoaW5pdGVkKSB7XG4gICAgICAgICAgICAgICAgc3luYygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBwZW5kaW5nIHw9ICgxIDw8IGkpO1xuICAgICAgICB9KSk7XG4gICAgICAgIGluaXRlZCA9IHRydWU7XG4gICAgICAgIHN5bmMoKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgICAgICBydW5fYWxsKHVuc3Vic2NyaWJlcnMpO1xuICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICB9O1xuICAgIH0pO1xufVxuXG5leHBvcnQgeyBkZXJpdmVkLCByZWFkYWJsZSwgd3JpdGFibGUgfTtcbiIsImltcG9ydCB7IHdyaXRhYmxlIH0gZnJvbSAnc3ZlbHRlL3N0b3JlJztcblxuZXhwb3J0IGNvbnN0IENPTlRFWFRfS0VZID0ge307XG5cbmV4cG9ydCBjb25zdCBwcmVsb2FkID0gKCkgPT4gKHt9KTsiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBjc3NDbGFzc2VzID0ge1xuICAgIEZJWEVEX0NMQVNTOiAnbWRjLXRvcC1hcHAtYmFyLS1maXhlZCcsXG4gICAgRklYRURfU0NST0xMRURfQ0xBU1M6ICdtZGMtdG9wLWFwcC1iYXItLWZpeGVkLXNjcm9sbGVkJyxcbiAgICBTSE9SVF9DTEFTUzogJ21kYy10b3AtYXBwLWJhci0tc2hvcnQnLFxuICAgIFNIT1JUX0NPTExBUFNFRF9DTEFTUzogJ21kYy10b3AtYXBwLWJhci0tc2hvcnQtY29sbGFwc2VkJyxcbiAgICBTSE9SVF9IQVNfQUNUSU9OX0lURU1fQ0xBU1M6ICdtZGMtdG9wLWFwcC1iYXItLXNob3J0LWhhcy1hY3Rpb24taXRlbScsXG59O1xudmFyIG51bWJlcnMgPSB7XG4gICAgREVCT1VOQ0VfVEhST1RUTEVfUkVTSVpFX1RJTUVfTVM6IDEwMCxcbiAgICBNQVhfVE9QX0FQUF9CQVJfSEVJR0hUOiAxMjgsXG59O1xudmFyIHN0cmluZ3MgPSB7XG4gICAgQUNUSU9OX0lURU1fU0VMRUNUT1I6ICcubWRjLXRvcC1hcHAtYmFyX19hY3Rpb24taXRlbScsXG4gICAgTkFWSUdBVElPTl9FVkVOVDogJ01EQ1RvcEFwcEJhcjpuYXYnLFxuICAgIE5BVklHQVRJT05fSUNPTl9TRUxFQ1RPUjogJy5tZGMtdG9wLWFwcC1iYXJfX25hdmlnYXRpb24taWNvbicsXG4gICAgUk9PVF9TRUxFQ1RPUjogJy5tZGMtdG9wLWFwcC1iYXInLFxuICAgIFRJVExFX1NFTEVDVE9SOiAnLm1kYy10b3AtYXBwLWJhcl9fdGl0bGUnLFxufTtcbmV4cG9ydCB7IGNzc0NsYXNzZXMsIG51bWJlcnMsIHN0cmluZ3MgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBudW1iZXJzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIE1EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBvcHRpb25hbCBhcmd1bWVudCBpcyBub3QgYSBicmFuY2ggc3RhdGVtZW50ICovXG4gICAgZnVuY3Rpb24gTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2VlIHtAbGluayBNRENUb3BBcHBCYXJBZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVybiB0eXBlcy5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBzZXRTdHlsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldFRvcEFwcEJhckhlaWdodDogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlOYXZpZ2F0aW9uSWNvbkNsaWNrZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBnZXRWaWV3cG9ydFNjcm9sbFk6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gICAgICAgICAgICAgICAgZ2V0VG90YWxBY3Rpb25JdGVtczogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKiogT3RoZXIgdmFyaWFudHMgb2YgVG9wQXBwQmFyIGZvdW5kYXRpb24gb3ZlcnJpZGVzIHRoaXMgbWV0aG9kICovXG4gICAgTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZVRhcmdldFNjcm9sbCA9IGZ1bmN0aW9uICgpIHsgfTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1lbXB0eVxuICAgIC8qKiBPdGhlciB2YXJpYW50cyBvZiBUb3BBcHBCYXIgZm91bmRhdGlvbiBvdmVycmlkZXMgdGhpcyBtZXRob2QgKi9cbiAgICBNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlV2luZG93UmVzaXplID0gZnVuY3Rpb24gKCkgeyB9OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWVtcHR5XG4gICAgTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZU5hdmlnYXRpb25DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlOYXZpZ2F0aW9uSWNvbkNsaWNrZWQoKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgbnVtYmVycyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbiB9IGZyb20gJy4uL2ZvdW5kYXRpb24nO1xudmFyIElOSVRJQUxfVkFMVUUgPSAwO1xudmFyIE1EQ1RvcEFwcEJhckZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDVG9wQXBwQmFyRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogb3B0aW9uYWwgYXJndW1lbnQgaXMgbm90IGEgYnJhbmNoIHN0YXRlbWVudCAqL1xuICAgIGZ1bmN0aW9uIE1EQ1RvcEFwcEJhckZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBhZGFwdGVyKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogSW5kaWNhdGVzIGlmIHRoZSB0b3AgYXBwIGJhciB3YXMgZG9ja2VkIGluIHRoZSBwcmV2aW91cyBzY3JvbGwgaGFuZGxlciBpdGVyYXRpb24uXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy53YXNEb2NrZWRfID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluZGljYXRlcyBpZiB0aGUgdG9wIGFwcCBiYXIgaXMgZG9ja2VkIGluIHRoZSBmdWxseSBzaG93biBwb3NpdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLmlzRG9ja2VkU2hvd2luZ18gPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVmFyaWFibGUgZm9yIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSB0b3AgYXBwIGJhclxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuY3VycmVudEFwcEJhck9mZnNldFRvcF8gPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogVXNlZCB0byBwcmV2ZW50IHRoZSB0b3AgYXBwIGJhciBmcm9tIGJlaW5nIHNjcm9sbGVkIG91dCBvZiB2aWV3IGR1cmluZyByZXNpemUgZXZlbnRzXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5pc0N1cnJlbnRseUJlaW5nUmVzaXplZF8gPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0aW1lb3V0IHRoYXQncyB1c2VkIHRvIHRocm90dGxlIHRoZSByZXNpemUgZXZlbnRzXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5yZXNpemVUaHJvdHRsZUlkXyA9IElOSVRJQUxfVkFMVUU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdGltZW91dCB0aGF0J3MgdXNlZCB0byBkZWJvdW5jZSB0b2dnbGluZyB0aGUgaXNDdXJyZW50bHlCZWluZ1Jlc2l6ZWRfIHZhcmlhYmxlIGFmdGVyIGEgcmVzaXplXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5yZXNpemVEZWJvdW5jZUlkXyA9IElOSVRJQUxfVkFMVUU7XG4gICAgICAgIF90aGlzLmxhc3RTY3JvbGxQb3NpdGlvbl8gPSBfdGhpcy5hZGFwdGVyXy5nZXRWaWV3cG9ydFNjcm9sbFkoKTtcbiAgICAgICAgX3RoaXMudG9wQXBwQmFySGVpZ2h0XyA9IF90aGlzLmFkYXB0ZXJfLmdldFRvcEFwcEJhckhlaWdodCgpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE1EQ1RvcEFwcEJhckZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldFN0eWxlKCd0b3AnLCAnJyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTY3JvbGwgaGFuZGxlciBmb3IgdGhlIGRlZmF1bHQgc2Nyb2xsIGJlaGF2aW9yIG9mIHRoZSB0b3AgYXBwIGJhci5cbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBNRENUb3BBcHBCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVUYXJnZXRTY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjdXJyZW50U2Nyb2xsUG9zaXRpb24gPSBNYXRoLm1heCh0aGlzLmFkYXB0ZXJfLmdldFZpZXdwb3J0U2Nyb2xsWSgpLCAwKTtcbiAgICAgICAgdmFyIGRpZmYgPSBjdXJyZW50U2Nyb2xsUG9zaXRpb24gLSB0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbl87XG4gICAgICAgIHRoaXMubGFzdFNjcm9sbFBvc2l0aW9uXyA9IGN1cnJlbnRTY3JvbGxQb3NpdGlvbjtcbiAgICAgICAgLy8gSWYgdGhlIHdpbmRvdyBpcyBiZWluZyByZXNpemVkIHRoZSBsYXN0U2Nyb2xsUG9zaXRpb25fIG5lZWRzIHRvIGJlIHVwZGF0ZWQgYnV0IHRoZVxuICAgICAgICAvLyBjdXJyZW50IHNjcm9sbCBvZiB0aGUgdG9wIGFwcCBiYXIgc2hvdWxkIHN0YXkgaW4gdGhlIHNhbWUgcG9zaXRpb24uXG4gICAgICAgIGlmICghdGhpcy5pc0N1cnJlbnRseUJlaW5nUmVzaXplZF8pIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFwcEJhck9mZnNldFRvcF8gLT0gZGlmZjtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRBcHBCYXJPZmZzZXRUb3BfID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFwcEJhck9mZnNldFRvcF8gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnModGhpcy5jdXJyZW50QXBwQmFyT2Zmc2V0VG9wXykgPiB0aGlzLnRvcEFwcEJhckhlaWdodF8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBcHBCYXJPZmZzZXRUb3BfID0gLXRoaXMudG9wQXBwQmFySGVpZ2h0XztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubW92ZVRvcEFwcEJhcl8oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogVG9wIGFwcCBiYXIgcmVzaXplIGhhbmRsZXIgdGhhdCB0aHJvdHRsZS9kZWJvdW5jZSBmdW5jdGlvbnMgdGhhdCBleGVjdXRlIHVwZGF0ZXMuXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgTURDVG9wQXBwQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlV2luZG93UmVzaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBUaHJvdHRsZSByZXNpemUgZXZlbnRzIDEwIHAvc1xuICAgICAgICBpZiAoIXRoaXMucmVzaXplVGhyb3R0bGVJZF8pIHtcbiAgICAgICAgICAgIHRoaXMucmVzaXplVGhyb3R0bGVJZF8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXNpemVUaHJvdHRsZUlkXyA9IElOSVRJQUxfVkFMVUU7XG4gICAgICAgICAgICAgICAgX3RoaXMudGhyb3R0bGVkUmVzaXplSGFuZGxlcl8oKTtcbiAgICAgICAgICAgIH0sIG51bWJlcnMuREVCT1VOQ0VfVEhST1RUTEVfUkVTSVpFX1RJTUVfTVMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNDdXJyZW50bHlCZWluZ1Jlc2l6ZWRfID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMucmVzaXplRGVib3VuY2VJZF8pIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZURlYm91bmNlSWRfKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc2l6ZURlYm91bmNlSWRfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5oYW5kbGVUYXJnZXRTY3JvbGwoKTtcbiAgICAgICAgICAgIF90aGlzLmlzQ3VycmVudGx5QmVpbmdSZXNpemVkXyA9IGZhbHNlO1xuICAgICAgICAgICAgX3RoaXMucmVzaXplRGVib3VuY2VJZF8gPSBJTklUSUFMX1ZBTFVFO1xuICAgICAgICB9LCBudW1iZXJzLkRFQk9VTkNFX1RIUk9UVExFX1JFU0laRV9USU1FX01TKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRvIGRldGVybWluZSBpZiB0aGUgRE9NIG5lZWRzIHRvIHVwZGF0ZS5cbiAgICAgKi9cbiAgICBNRENUb3BBcHBCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5jaGVja0ZvclVwZGF0ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvZmZzY3JlZW5Cb3VuZGFyeVRvcCA9IC10aGlzLnRvcEFwcEJhckhlaWdodF87XG4gICAgICAgIHZhciBoYXNBbnlQaXhlbHNPZmZzY3JlZW4gPSB0aGlzLmN1cnJlbnRBcHBCYXJPZmZzZXRUb3BfIDwgMDtcbiAgICAgICAgdmFyIGhhc0FueVBpeGVsc09uc2NyZWVuID0gdGhpcy5jdXJyZW50QXBwQmFyT2Zmc2V0VG9wXyA+IG9mZnNjcmVlbkJvdW5kYXJ5VG9wO1xuICAgICAgICB2YXIgcGFydGlhbGx5U2hvd2luZyA9IGhhc0FueVBpeGVsc09mZnNjcmVlbiAmJiBoYXNBbnlQaXhlbHNPbnNjcmVlbjtcbiAgICAgICAgLy8gSWYgaXQncyBwYXJ0aWFsbHkgc2hvd2luZywgaXQgY2FuJ3QgYmUgZG9ja2VkLlxuICAgICAgICBpZiAocGFydGlhbGx5U2hvd2luZykge1xuICAgICAgICAgICAgdGhpcy53YXNEb2NrZWRfID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBOb3QgcHJldmlvdXNseSBkb2NrZWQgYW5kIG5vdCBwYXJ0aWFsbHkgc2hvd2luZywgaXQncyBub3cgZG9ja2VkLlxuICAgICAgICAgICAgaWYgKCF0aGlzLndhc0RvY2tlZF8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLndhc0RvY2tlZF8gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc0RvY2tlZFNob3dpbmdfICE9PSBoYXNBbnlQaXhlbHNPbnNjcmVlbikge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNEb2NrZWRTaG93aW5nXyA9IGhhc0FueVBpeGVsc09uc2NyZWVuO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJ0aWFsbHlTaG93aW5nO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdG8gbW92ZSB0aGUgdG9wIGFwcCBiYXIgaWYgbmVlZGVkLlxuICAgICAqL1xuICAgIE1EQ1RvcEFwcEJhckZvdW5kYXRpb24ucHJvdG90eXBlLm1vdmVUb3BBcHBCYXJfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jaGVja0ZvclVwZGF0ZV8oKSkge1xuICAgICAgICAgICAgLy8gT25jZSB0aGUgdG9wIGFwcCBiYXIgaXMgZnVsbHkgaGlkZGVuIHdlIHVzZSB0aGUgbWF4IHBvdGVudGlhbCB0b3AgYXBwIGJhciBoZWlnaHQgYXMgb3VyIG9mZnNldFxuICAgICAgICAgICAgLy8gc28gdGhlIHRvcCBhcHAgYmFyIGRvZXNuJ3Qgc2hvdyBpZiB0aGUgd2luZG93IHJlc2l6ZXMgYW5kIHRoZSBuZXcgaGVpZ2h0ID4gdGhlIG9sZCBoZWlnaHQuXG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gdGhpcy5jdXJyZW50QXBwQmFyT2Zmc2V0VG9wXztcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhvZmZzZXQpID49IHRoaXMudG9wQXBwQmFySGVpZ2h0Xykge1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IC1udW1iZXJzLk1BWF9UT1BfQVBQX0JBUl9IRUlHSFQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldFN0eWxlKCd0b3AnLCBvZmZzZXQgKyAncHgnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhyb3R0bGVkIGZ1bmN0aW9uIHRoYXQgdXBkYXRlcyB0aGUgdG9wIGFwcCBiYXIgc2Nyb2xsZWQgdmFsdWVzIGlmIHRoZVxuICAgICAqIHRvcCBhcHAgYmFyIGhlaWdodCBjaGFuZ2VzLlxuICAgICAqL1xuICAgIE1EQ1RvcEFwcEJhckZvdW5kYXRpb24ucHJvdG90eXBlLnRocm90dGxlZFJlc2l6ZUhhbmRsZXJfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY3VycmVudEhlaWdodCA9IHRoaXMuYWRhcHRlcl8uZ2V0VG9wQXBwQmFySGVpZ2h0KCk7XG4gICAgICAgIGlmICh0aGlzLnRvcEFwcEJhckhlaWdodF8gIT09IGN1cnJlbnRIZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMud2FzRG9ja2VkXyA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gU2luY2UgdGhlIHRvcCBhcHAgYmFyIGhhcyBhIGRpZmZlcmVudCBoZWlnaHQgZGVwZW5kaW5nIG9uIHRoZSBzY3JlZW4gd2lkdGgsIHRoaXNcbiAgICAgICAgICAgIC8vIHdpbGwgZW5zdXJlIHRoYXQgdGhlIHRvcCBhcHAgYmFyIHJlbWFpbnMgaW4gdGhlIGNvcnJlY3QgbG9jYXRpb24gaWZcbiAgICAgICAgICAgIC8vIGNvbXBsZXRlbHkgaGlkZGVuIGFuZCBhIHJlc2l6ZSBtYWtlcyB0aGUgdG9wIGFwcCBiYXIgYSBkaWZmZXJlbnQgaGVpZ2h0LlxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QXBwQmFyT2Zmc2V0VG9wXyAtPSB0aGlzLnRvcEFwcEJhckhlaWdodF8gLSBjdXJyZW50SGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy50b3BBcHBCYXJIZWlnaHRfID0gY3VycmVudEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZVRhcmdldFNjcm9sbCgpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ1RvcEFwcEJhckZvdW5kYXRpb247XG59KE1EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENUb3BBcHBCYXJGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDVG9wQXBwQmFyRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgY3NzQ2xhc3NlcyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBNRENUb3BBcHBCYXJGb3VuZGF0aW9uIH0gZnJvbSAnLi4vc3RhbmRhcmQvZm91bmRhdGlvbic7XG52YXIgTURDRml4ZWRUb3BBcHBCYXJGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ0ZpeGVkVG9wQXBwQmFyRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENGaXhlZFRvcEFwcEJhckZvdW5kYXRpb24oKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogU3RhdGUgdmFyaWFibGUgZm9yIHRoZSBwcmV2aW91cyBzY3JvbGwgaXRlcmF0aW9uIHRvcCBhcHAgYmFyIHN0YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy53YXNTY3JvbGxlZF8gPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgaGFuZGxlciBmb3IgYXBwbHlpbmcvcmVtb3ZpbmcgdGhlIG1vZGlmaWVyIGNsYXNzIG9uIHRoZSBmaXhlZCB0b3AgYXBwIGJhci5cbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBNRENGaXhlZFRvcEFwcEJhckZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZVRhcmdldFNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRTY3JvbGwgPSB0aGlzLmFkYXB0ZXJfLmdldFZpZXdwb3J0U2Nyb2xsWSgpO1xuICAgICAgICBpZiAoY3VycmVudFNjcm9sbCA8PSAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy53YXNTY3JvbGxlZF8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuRklYRURfU0NST0xMRURfQ0xBU1MpO1xuICAgICAgICAgICAgICAgIHRoaXMud2FzU2Nyb2xsZWRfID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMud2FzU2Nyb2xsZWRfKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkZJWEVEX1NDUk9MTEVEX0NMQVNTKTtcbiAgICAgICAgICAgICAgICB0aGlzLndhc1Njcm9sbGVkXyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNRENGaXhlZFRvcEFwcEJhckZvdW5kYXRpb247XG59KE1EQ1RvcEFwcEJhckZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ0ZpeGVkVG9wQXBwQmFyRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ZpeGVkVG9wQXBwQmFyRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgY3NzQ2xhc3NlcyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbiB9IGZyb20gJy4uL2ZvdW5kYXRpb24nO1xudmFyIE1EQ1Nob3J0VG9wQXBwQmFyRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENTaG9ydFRvcEFwcEJhckZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IG9wdGlvbmFsIGFyZ3VtZW50IGlzIG5vdCBhIGJyYW5jaCBzdGF0ZW1lbnQgKi9cbiAgICBmdW5jdGlvbiBNRENTaG9ydFRvcEFwcEJhckZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBhZGFwdGVyKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5pc0NvbGxhcHNlZF8gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaXNBbHdheXNDb2xsYXBzZWRfID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1Nob3J0VG9wQXBwQmFyRm91bmRhdGlvbi5wcm90b3R5cGUsIFwiaXNDb2xsYXBzZWRcIiwge1xuICAgICAgICAvLyBQdWJsaWMgdmlzaWJpbGl0eSBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc0NvbGxhcHNlZF87XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ1Nob3J0VG9wQXBwQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5pbml0LmNhbGwodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmdldFRvdGFsQWN0aW9uSXRlbXMoKSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5TSE9SVF9IQVNfQUNUSU9OX0lURU1fQ0xBU1MpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGluaXRpYWxpemVkIHdpdGggU0hPUlRfQ09MTEFQU0VEX0NMQVNTLCB0aGUgYmFyIHNob3VsZCBhbHdheXMgYmUgY29sbGFwc2VkXG4gICAgICAgIHRoaXMuc2V0QWx3YXlzQ29sbGFwc2VkKHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5TSE9SVF9DT0xMQVBTRURfQ0xBU1MpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldCBpZiB0aGUgc2hvcnQgdG9wIGFwcCBiYXIgc2hvdWxkIGFsd2F5cyBiZSBjb2xsYXBzZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWUgV2hlbiBgdHJ1ZWAsIGJhciB3aWxsIGFsd2F5cyBiZSBjb2xsYXBzZWQuIFdoZW4gYGZhbHNlYCwgYmFyIG1heSBjb2xsYXBzZSBvciBleHBhbmQgYmFzZWQgb24gc2Nyb2xsLlxuICAgICAqL1xuICAgIE1EQ1Nob3J0VG9wQXBwQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0QWx3YXlzQ29sbGFwc2VkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaXNBbHdheXNDb2xsYXBzZWRfID0gISF2YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuaXNBbHdheXNDb2xsYXBzZWRfKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlXygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gbGV0IG1heWJlQ29sbGFwc2VCYXJfIGRldGVybWluZSBpZiB0aGUgYmFyIHNob3VsZCBiZSBjb2xsYXBzZWRcbiAgICAgICAgICAgIHRoaXMubWF5YmVDb2xsYXBzZUJhcl8oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDU2hvcnRUb3BBcHBCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRBbHdheXNDb2xsYXBzZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQWx3YXlzQ29sbGFwc2VkXztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNjcm9sbCBoYW5kbGVyIGZvciBhcHBseWluZy9yZW1vdmluZyB0aGUgY29sbGFwc2VkIG1vZGlmaWVyIGNsYXNzIG9uIHRoZSBzaG9ydCB0b3AgYXBwIGJhci5cbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBNRENTaG9ydFRvcEFwcEJhckZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZVRhcmdldFNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5tYXliZUNvbGxhcHNlQmFyXygpO1xuICAgIH07XG4gICAgTURDU2hvcnRUb3BBcHBCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5tYXliZUNvbGxhcHNlQmFyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBbHdheXNDb2xsYXBzZWRfKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGN1cnJlbnRTY3JvbGwgPSB0aGlzLmFkYXB0ZXJfLmdldFZpZXdwb3J0U2Nyb2xsWSgpO1xuICAgICAgICBpZiAoY3VycmVudFNjcm9sbCA8PSAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0NvbGxhcHNlZF8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuY29sbGFwc2VfKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNDb2xsYXBzZWRfKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZV8oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDU2hvcnRUb3BBcHBCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS51bmNvbGxhcHNlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLlNIT1JUX0NPTExBUFNFRF9DTEFTUyk7XG4gICAgICAgIHRoaXMuaXNDb2xsYXBzZWRfID0gZmFsc2U7XG4gICAgfTtcbiAgICBNRENTaG9ydFRvcEFwcEJhckZvdW5kYXRpb24ucHJvdG90eXBlLmNvbGxhcHNlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLlNIT1JUX0NPTExBUFNFRF9DTEFTUyk7XG4gICAgICAgIHRoaXMuaXNDb2xsYXBzZWRfID0gdHJ1ZTtcbiAgICB9O1xuICAgIHJldHVybiBNRENTaG9ydFRvcEFwcEJhckZvdW5kYXRpb247XG59KE1EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENTaG9ydFRvcEFwcEJhckZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENTaG9ydFRvcEFwcEJhckZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0NvbXBvbmVudCB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBNRENSaXBwbGUgfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgTURDRml4ZWRUb3BBcHBCYXJGb3VuZGF0aW9uIH0gZnJvbSAnLi9maXhlZC9mb3VuZGF0aW9uJztcbmltcG9ydCB7IE1EQ1Nob3J0VG9wQXBwQmFyRm91bmRhdGlvbiB9IGZyb20gJy4vc2hvcnQvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBNRENUb3BBcHBCYXJGb3VuZGF0aW9uIH0gZnJvbSAnLi9zdGFuZGFyZC9mb3VuZGF0aW9uJztcbnZhciBNRENUb3BBcHBCYXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDVG9wQXBwQmFyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1RvcEFwcEJhcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBNRENUb3BBcHBCYXIuYXR0YWNoVG8gPSBmdW5jdGlvbiAocm9vdCkge1xuICAgICAgICByZXR1cm4gbmV3IE1EQ1RvcEFwcEJhcihyb290KTtcbiAgICB9O1xuICAgIE1EQ1RvcEFwcEJhci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChyaXBwbGVGYWN0b3J5KSB7XG4gICAgICAgIGlmIChyaXBwbGVGYWN0b3J5ID09PSB2b2lkIDApIHsgcmlwcGxlRmFjdG9yeSA9IGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gTURDUmlwcGxlLmF0dGFjaFRvKGVsKTsgfTsgfVxuICAgICAgICB0aGlzLm5hdkljb25fID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuTkFWSUdBVElPTl9JQ09OX1NFTEVDVE9SKTtcbiAgICAgICAgLy8gR2V0IGFsbCBpY29ucyBpbiB0aGUgdG9vbGJhciBhbmQgaW5zdGFudGlhdGUgdGhlIHJpcHBsZXNcbiAgICAgICAgdmFyIGljb25zID0gW10uc2xpY2UuY2FsbCh0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3JBbGwoc3RyaW5ncy5BQ1RJT05fSVRFTV9TRUxFQ1RPUikpO1xuICAgICAgICBpZiAodGhpcy5uYXZJY29uXykge1xuICAgICAgICAgICAgaWNvbnMucHVzaCh0aGlzLm5hdkljb25fKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmljb25SaXBwbGVzXyA9IGljb25zLm1hcChmdW5jdGlvbiAoaWNvbikge1xuICAgICAgICAgICAgdmFyIHJpcHBsZSA9IHJpcHBsZUZhY3RvcnkoaWNvbik7XG4gICAgICAgICAgICByaXBwbGUudW5ib3VuZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiByaXBwbGU7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNjcm9sbFRhcmdldF8gPSB3aW5kb3c7XG4gICAgfTtcbiAgICBNRENUb3BBcHBCYXIucHJvdG90eXBlLmluaXRpYWxTeW5jV2l0aERPTSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVOYXZpZ2F0aW9uQ2xpY2tfID0gdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVOYXZpZ2F0aW9uQ2xpY2suYmluZCh0aGlzLmZvdW5kYXRpb25fKTtcbiAgICAgICAgdGhpcy5oYW5kbGVXaW5kb3dSZXNpemVfID0gdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVXaW5kb3dSZXNpemUuYmluZCh0aGlzLmZvdW5kYXRpb25fKTtcbiAgICAgICAgdGhpcy5oYW5kbGVUYXJnZXRTY3JvbGxfID0gdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVUYXJnZXRTY3JvbGwuYmluZCh0aGlzLmZvdW5kYXRpb25fKTtcbiAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXRfLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlVGFyZ2V0U2Nyb2xsXyk7XG4gICAgICAgIGlmICh0aGlzLm5hdkljb25fKSB7XG4gICAgICAgICAgICB0aGlzLm5hdkljb25fLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVOYXZpZ2F0aW9uQ2xpY2tfKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaXNGaXhlZCA9IHRoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzZXMuRklYRURfQ0xBU1MpO1xuICAgICAgICB2YXIgaXNTaG9ydCA9IHRoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzZXMuU0hPUlRfQ0xBU1MpO1xuICAgICAgICBpZiAoIWlzU2hvcnQgJiYgIWlzRml4ZWQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZV8pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENUb3BBcHBCYXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaWNvblJpcHBsZXNfLmZvckVhY2goZnVuY3Rpb24gKGljb25SaXBwbGUpIHsgcmV0dXJuIGljb25SaXBwbGUuZGVzdHJveSgpOyB9KTtcbiAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlVGFyZ2V0U2Nyb2xsXyk7XG4gICAgICAgIGlmICh0aGlzLm5hdkljb25fKSB7XG4gICAgICAgICAgICB0aGlzLm5hdkljb25fLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVOYXZpZ2F0aW9uQ2xpY2tfKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaXNGaXhlZCA9IHRoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzZXMuRklYRURfQ0xBU1MpO1xuICAgICAgICB2YXIgaXNTaG9ydCA9IHRoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzZXMuU0hPUlRfQ0xBU1MpO1xuICAgICAgICBpZiAoIWlzU2hvcnQgJiYgIWlzRml4ZWQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZV8pO1xuICAgICAgICB9XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgTURDVG9wQXBwQmFyLnByb3RvdHlwZS5zZXRTY3JvbGxUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIC8vIFJlbW92ZSBzY3JvbGwgaGFuZGxlciBmcm9tIHRoZSBwcmV2aW91cyBzY3JvbGwgdGFyZ2V0XG4gICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVRhcmdldFNjcm9sbF8pO1xuICAgICAgICB0aGlzLnNjcm9sbFRhcmdldF8gPSB0YXJnZXQ7XG4gICAgICAgIC8vIEluaXRpYWxpemUgc2Nyb2xsIGhhbmRsZXIgb24gdGhlIG5ldyBzY3JvbGwgdGFyZ2V0XG4gICAgICAgIHRoaXMuaGFuZGxlVGFyZ2V0U2Nyb2xsXyA9XG4gICAgICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmhhbmRsZVRhcmdldFNjcm9sbC5iaW5kKHRoaXMuZm91bmRhdGlvbl8pO1xuICAgICAgICB0aGlzLnNjcm9sbFRhcmdldF8uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVUYXJnZXRTY3JvbGxfKTtcbiAgICB9O1xuICAgIE1EQ1RvcEFwcEJhci5wcm90b3R5cGUuZ2V0RGVmYXVsdEZvdW5kYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIERPIE5PVCBJTkxJTkUgdGhpcyB2YXJpYWJsZS4gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGZvdW5kYXRpb25zIHRha2UgYSBQYXJ0aWFsPE1EQ0Zvb0FkYXB0ZXI+LlxuICAgICAgICAvLyBUbyBlbnN1cmUgd2UgZG9uJ3QgYWNjaWRlbnRhbGx5IG9taXQgYW55IG1ldGhvZHMsIHdlIG5lZWQgYSBzZXBhcmF0ZSwgc3Ryb25nbHkgdHlwZWQgYWRhcHRlciB2YXJpYWJsZS5cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgdmFyIGFkYXB0ZXIgPSB7XG4gICAgICAgICAgICBoYXNDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIF90aGlzLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIHNldFN0eWxlOiBmdW5jdGlvbiAocHJvcGVydHksIHZhbHVlKSB7IHJldHVybiBfdGhpcy5yb290Xy5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgdmFsdWUpOyB9LFxuICAgICAgICAgICAgZ2V0VG9wQXBwQmFySGVpZ2h0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5yb290Xy5jbGllbnRIZWlnaHQ7IH0sXG4gICAgICAgICAgICBub3RpZnlOYXZpZ2F0aW9uSWNvbkNsaWNrZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmVtaXQoc3RyaW5ncy5OQVZJR0FUSU9OX0VWRU5ULCB7fSk7IH0sXG4gICAgICAgICAgICBnZXRWaWV3cG9ydFNjcm9sbFk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgd2luID0gX3RoaXMuc2Nyb2xsVGFyZ2V0XztcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSBfdGhpcy5zY3JvbGxUYXJnZXRfO1xuICAgICAgICAgICAgICAgIHJldHVybiB3aW4ucGFnZVlPZmZzZXQgIT09IHVuZGVmaW5lZCA/IHdpbi5wYWdlWU9mZnNldCA6IGVsLnNjcm9sbFRvcDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRUb3RhbEFjdGlvbkl0ZW1zOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yQWxsKHN0cmluZ3MuQUNUSU9OX0lURU1fU0VMRUNUT1IpLmxlbmd0aDsgfSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgdmFyIGZvdW5kYXRpb247XG4gICAgICAgIGlmICh0aGlzLnJvb3RfLmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzc2VzLlNIT1JUX0NMQVNTKSkge1xuICAgICAgICAgICAgZm91bmRhdGlvbiA9IG5ldyBNRENTaG9ydFRvcEFwcEJhckZvdW5kYXRpb24oYWRhcHRlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5yb290Xy5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3Nlcy5GSVhFRF9DTEFTUykpIHtcbiAgICAgICAgICAgIGZvdW5kYXRpb24gPSBuZXcgTURDRml4ZWRUb3BBcHBCYXJGb3VuZGF0aW9uKGFkYXB0ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm91bmRhdGlvbiA9IG5ldyBNRENUb3BBcHBCYXJGb3VuZGF0aW9uKGFkYXB0ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3VuZGF0aW9uO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ1RvcEFwcEJhcjtcbn0oTURDQ29tcG9uZW50KSk7XG5leHBvcnQgeyBNRENUb3BBcHBCYXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudC5qcy5tYXAiLCI8aGVhZGVyXG4gIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgdXNlOmZvcndhcmRFdmVudHNcbiAgY2xhc3M9XCJcbiAgICBtZGMtdG9wLWFwcC1iYXJcbiAgICB7Y2xhc3NOYW1lfVxuICAgIHt2YXJpYW50ID09PSAnc2hvcnQnID8gJ21kYy10b3AtYXBwLWJhci0tc2hvcnQnIDogJyd9XG4gICAge2NvbGxhcHNlZCA/ICdtZGMtdG9wLWFwcC1iYXItLXNob3J0LWNvbGxhcHNlZCcgOiAnJ31cbiAgICB7dmFyaWFudCA9PT0gJ2ZpeGVkJyA/ICdtZGMtdG9wLWFwcC1iYXItLWZpeGVkJyA6ICcnfVxuICAgIHt2YXJpYW50ID09PSAnc3RhdGljJyA/ICdzbXVpLXRvcC1hcHAtYmFyLS1zdGF0aWMnIDogJyd9XG4gICAge2NvbG9yID09PSAnc2Vjb25kYXJ5JyA/ICdzbXVpLXRvcC1hcHAtYmFyLS1jb2xvci1zZWNvbmRhcnknIDogJyd9XG4gICAge3Byb21pbmVudCA/ICdtZGMtdG9wLWFwcC1iYXItLXByb21pbmVudCcgOiAnJ31cbiAgICB7ZGVuc2UgPyAnbWRjLXRvcC1hcHAtYmFyLS1kZW5zZScgOiAnJ31cbiAgXCJcbiAgey4uLmV4Y2x1ZGUoJCRwcm9wcywgWyd1c2UnLCAnY2xhc3MnLCAndmFyaWFudCcsICdjb2xvcicsICdjb2xsYXBzZWQnLCAncHJvbWluZW50JywgJ2RlbnNlJ10pfVxuPjxzbG90Pjwvc2xvdD48L2hlYWRlcj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHtNRENUb3BBcHBCYXJ9IGZyb20gJ0BtYXRlcmlhbC90b3AtYXBwLWJhcic7XG4gIGltcG9ydCB7b25Nb3VudCwgb25EZXN0cm95fSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQge2N1cnJlbnRfY29tcG9uZW50fSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQge2ZvcndhcmRFdmVudHNCdWlsZGVyfSBmcm9tICdAc211aS9jb21tb24vZm9yd2FyZEV2ZW50cy5qcyc7XG4gIGltcG9ydCB7ZXhjbHVkZX0gZnJvbSAnQHNtdWkvY29tbW9uL2V4Y2x1ZGUuanMnO1xuICBpbXBvcnQge3VzZUFjdGlvbnN9IGZyb20gJ0BzbXVpL2NvbW1vbi91c2VBY3Rpb25zLmpzJztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoY3VycmVudF9jb21wb25lbnQsIFsnTURDTGlzdDphY3Rpb24nXSk7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBleHBvcnQge2NsYXNzTmFtZSBhcyBjbGFzc307XG4gIGV4cG9ydCBsZXQgdmFyaWFudCA9ICdzdGFuZGFyZCc7XG4gIGV4cG9ydCBsZXQgY29sb3IgPSAncHJpbWFyeSc7XG4gIGV4cG9ydCBsZXQgY29sbGFwc2VkID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgcHJvbWluZW50ID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgZGVuc2UgPSBmYWxzZTtcblxuICBsZXQgZWxlbWVudDtcbiAgbGV0IHRvcEFwcEJhcjtcblxuICBvbk1vdW50KCgpID0+IHtcbiAgICB0b3BBcHBCYXIgPSBuZXcgTURDVG9wQXBwQmFyKGVsZW1lbnQpO1xuICB9KTtcblxuICBvbkRlc3Ryb3koKCkgPT4ge1xuICAgIHRvcEFwcEJhciAmJiB0b3BBcHBCYXIuZGVzdHJveSgpO1xuICB9KTtcbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHtjbGFzc0FkZGVyQnVpbGRlcn0gZnJvbSAnQHNtdWkvY29tbW9uL2NsYXNzQWRkZXJCdWlsZGVyLmpzJztcbmltcG9ydCBEaXYgZnJvbSAnQHNtdWkvY29tbW9uL0Rpdi5zdmVsdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzc0FkZGVyQnVpbGRlcih7XG4gIGNsYXNzOiAnbWRjLXRvcC1hcHAtYmFyX19yb3cnLFxuICBjb21wb25lbnQ6IERpdixcbiAgY29udGV4dHM6IHt9XG59KTsiLCI8c2VjdGlvblxuICB1c2U6dXNlQWN0aW9ucz17dXNlfVxuICB1c2U6Zm9yd2FyZEV2ZW50c1xuICBjbGFzcz1cIlxuICAgIG1kYy10b3AtYXBwLWJhcl9fc2VjdGlvblxuICAgIHtjbGFzc05hbWV9XG4gICAge2FsaWduID09PSAnc3RhcnQnID8gJ21kYy10b3AtYXBwLWJhcl9fc2VjdGlvbi0tYWxpZ24tc3RhcnQnIDogJyd9XG4gICAge2FsaWduID09PSAnZW5kJyA/ICdtZGMtdG9wLWFwcC1iYXJfX3NlY3Rpb24tLWFsaWduLWVuZCcgOiAnJ31cbiAgXCJcbiAgey4uLih0b29sYmFyID8ge3JvbGU6ICd0b29sYmFyJ30gOiB7fSl9XG4gIHsuLi5leGNsdWRlKCQkcHJvcHMsIFsndXNlJywgJ2NsYXNzJywgJ2FsaWduJywgJ3Rvb2xiYXInXSl9XG4+PHNsb3Q+PC9zbG90Pjwvc2VjdGlvbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHtzZXRDb250ZXh0fSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQge2N1cnJlbnRfY29tcG9uZW50fSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQge2ZvcndhcmRFdmVudHNCdWlsZGVyfSBmcm9tICdAc211aS9jb21tb24vZm9yd2FyZEV2ZW50cy5qcyc7XG4gIGltcG9ydCB7ZXhjbHVkZX0gZnJvbSAnQHNtdWkvY29tbW9uL2V4Y2x1ZGUuanMnO1xuICBpbXBvcnQge3VzZUFjdGlvbnN9IGZyb20gJ0BzbXVpL2NvbW1vbi91c2VBY3Rpb25zLmpzJztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoY3VycmVudF9jb21wb25lbnQsIFsnTURDTGlzdDphY3Rpb24nXSk7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBleHBvcnQge2NsYXNzTmFtZSBhcyBjbGFzc307XG4gIGV4cG9ydCBsZXQgYWxpZ24gPSAnc3RhcnQnO1xuICBleHBvcnQgbGV0IHRvb2xiYXIgPSBmYWxzZTtcblxuICBzZXRDb250ZXh0KCdTTVVJOmljb24tYnV0dG9uOmNvbnRleHQnLCB0b29sYmFyID8gJ3RvcC1hcHAtYmFyOmFjdGlvbicgOiAndG9wLWFwcC1iYXI6bmF2aWdhdGlvbicpO1xuICBzZXRDb250ZXh0KCdTTVVJOmJ1dHRvbjpjb250ZXh0JywgdG9vbGJhciA/ICd0b3AtYXBwLWJhcjphY3Rpb24nIDogJ3RvcC1hcHAtYmFyOm5hdmlnYXRpb24nKTtcbjwvc2NyaXB0PiIsImltcG9ydCB7Y2xhc3NBZGRlckJ1aWxkZXJ9IGZyb20gJ0BzbXVpL2NvbW1vbi9jbGFzc0FkZGVyQnVpbGRlci5qcyc7XG5pbXBvcnQgU3BhbiBmcm9tICdAc211aS9jb21tb24vU3Bhbi5zdmVsdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzc0FkZGVyQnVpbGRlcih7XG4gIGNsYXNzOiAnbWRjLXRvcC1hcHAtYmFyX190aXRsZScsXG4gIGNvbXBvbmVudDogU3BhbixcbiAgY29udGV4dHM6IHt9XG59KTsiLCJ2YXIgY2FuZGlkYXRlU2VsZWN0b3JzID0gW1xuICAnaW5wdXQnLFxuICAnc2VsZWN0JyxcbiAgJ3RleHRhcmVhJyxcbiAgJ2FbaHJlZl0nLFxuICAnYnV0dG9uJyxcbiAgJ1t0YWJpbmRleF0nLFxuICAnYXVkaW9bY29udHJvbHNdJyxcbiAgJ3ZpZGVvW2NvbnRyb2xzXScsXG4gICdbY29udGVudGVkaXRhYmxlXTpub3QoW2NvbnRlbnRlZGl0YWJsZT1cImZhbHNlXCJdKScsXG5dO1xudmFyIGNhbmRpZGF0ZVNlbGVjdG9yID0gY2FuZGlkYXRlU2VsZWN0b3JzLmpvaW4oJywnKTtcblxudmFyIG1hdGNoZXMgPSB0eXBlb2YgRWxlbWVudCA9PT0gJ3VuZGVmaW5lZCdcbiAgPyBmdW5jdGlvbiAoKSB7fVxuICA6IEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgfHwgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xuXG5mdW5jdGlvbiB0YWJiYWJsZShlbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgcmVndWxhclRhYmJhYmxlcyA9IFtdO1xuICB2YXIgb3JkZXJlZFRhYmJhYmxlcyA9IFtdO1xuXG4gIHZhciBjYW5kaWRhdGVzID0gZWwucXVlcnlTZWxlY3RvckFsbChjYW5kaWRhdGVTZWxlY3Rvcik7XG5cbiAgaWYgKG9wdGlvbnMuaW5jbHVkZUNvbnRhaW5lcikge1xuICAgIGlmIChtYXRjaGVzLmNhbGwoZWwsIGNhbmRpZGF0ZVNlbGVjdG9yKSkge1xuICAgICAgY2FuZGlkYXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShjYW5kaWRhdGVzKTtcbiAgICAgIGNhbmRpZGF0ZXMudW5zaGlmdChlbCk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGksIGNhbmRpZGF0ZSwgY2FuZGlkYXRlVGFiaW5kZXg7XG4gIGZvciAoaSA9IDA7IGkgPCBjYW5kaWRhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2FuZGlkYXRlID0gY2FuZGlkYXRlc1tpXTtcblxuICAgIGlmICghaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlKGNhbmRpZGF0ZSkpIGNvbnRpbnVlO1xuXG4gICAgY2FuZGlkYXRlVGFiaW5kZXggPSBnZXRUYWJpbmRleChjYW5kaWRhdGUpO1xuICAgIGlmIChjYW5kaWRhdGVUYWJpbmRleCA9PT0gMCkge1xuICAgICAgcmVndWxhclRhYmJhYmxlcy5wdXNoKGNhbmRpZGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9yZGVyZWRUYWJiYWJsZXMucHVzaCh7XG4gICAgICAgIGRvY3VtZW50T3JkZXI6IGksXG4gICAgICAgIHRhYkluZGV4OiBjYW5kaWRhdGVUYWJpbmRleCxcbiAgICAgICAgbm9kZTogY2FuZGlkYXRlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHRhYmJhYmxlTm9kZXMgPSBvcmRlcmVkVGFiYmFibGVzXG4gICAgLnNvcnQoc29ydE9yZGVyZWRUYWJiYWJsZXMpXG4gICAgLm1hcChmdW5jdGlvbihhKSB7IHJldHVybiBhLm5vZGUgfSlcbiAgICAuY29uY2F0KHJlZ3VsYXJUYWJiYWJsZXMpO1xuXG4gIHJldHVybiB0YWJiYWJsZU5vZGVzO1xufVxuXG50YWJiYWJsZS5pc1RhYmJhYmxlID0gaXNUYWJiYWJsZTtcbnRhYmJhYmxlLmlzRm9jdXNhYmxlID0gaXNGb2N1c2FibGU7XG5cbmZ1bmN0aW9uIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZShub2RlKSB7XG4gIGlmIChcbiAgICAhaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShub2RlKVxuICAgIHx8IGlzTm9uVGFiYmFibGVSYWRpbyhub2RlKVxuICAgIHx8IGdldFRhYmluZGV4KG5vZGUpIDwgMFxuICApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGlzVGFiYmFibGUobm9kZSkge1xuICBpZiAoIW5vZGUpIHRocm93IG5ldyBFcnJvcignTm8gbm9kZSBwcm92aWRlZCcpO1xuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsIGNhbmRpZGF0ZVNlbGVjdG9yKSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZShub2RlKTtcbn1cblxuZnVuY3Rpb24gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShub2RlKSB7XG4gIGlmIChcbiAgICBub2RlLmRpc2FibGVkXG4gICAgfHwgaXNIaWRkZW5JbnB1dChub2RlKVxuICAgIHx8IGlzSGlkZGVuKG5vZGUpXG4gICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxudmFyIGZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yID0gY2FuZGlkYXRlU2VsZWN0b3JzLmNvbmNhdCgnaWZyYW1lJykuam9pbignLCcpO1xuZnVuY3Rpb24gaXNGb2N1c2FibGUobm9kZSkge1xuICBpZiAoIW5vZGUpIHRocm93IG5ldyBFcnJvcignTm8gbm9kZSBwcm92aWRlZCcpO1xuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsIGZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yKSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUobm9kZSk7XG59XG5cbmZ1bmN0aW9uIGdldFRhYmluZGV4KG5vZGUpIHtcbiAgdmFyIHRhYmluZGV4QXR0ciA9IHBhcnNlSW50KG5vZGUuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpLCAxMCk7XG4gIGlmICghaXNOYU4odGFiaW5kZXhBdHRyKSkgcmV0dXJuIHRhYmluZGV4QXR0cjtcbiAgLy8gQnJvd3NlcnMgZG8gbm90IHJldHVybiBgdGFiSW5kZXhgIGNvcnJlY3RseSBmb3IgY29udGVudEVkaXRhYmxlIG5vZGVzO1xuICAvLyBzbyBpZiB0aGV5IGRvbid0IGhhdmUgYSB0YWJpbmRleCBhdHRyaWJ1dGUgc3BlY2lmaWNhbGx5IHNldCwgYXNzdW1lIGl0J3MgMC5cbiAgaWYgKGlzQ29udGVudEVkaXRhYmxlKG5vZGUpKSByZXR1cm4gMDtcbiAgcmV0dXJuIG5vZGUudGFiSW5kZXg7XG59XG5cbmZ1bmN0aW9uIHNvcnRPcmRlcmVkVGFiYmFibGVzKGEsIGIpIHtcbiAgcmV0dXJuIGEudGFiSW5kZXggPT09IGIudGFiSW5kZXggPyBhLmRvY3VtZW50T3JkZXIgLSBiLmRvY3VtZW50T3JkZXIgOiBhLnRhYkluZGV4IC0gYi50YWJJbmRleDtcbn1cblxuZnVuY3Rpb24gaXNDb250ZW50RWRpdGFibGUobm9kZSkge1xuICByZXR1cm4gbm9kZS5jb250ZW50RWRpdGFibGUgPT09ICd0cnVlJztcbn1cblxuZnVuY3Rpb24gaXNJbnB1dChub2RlKSB7XG4gIHJldHVybiBub2RlLnRhZ05hbWUgPT09ICdJTlBVVCc7XG59XG5cbmZ1bmN0aW9uIGlzSGlkZGVuSW5wdXQobm9kZSkge1xuICByZXR1cm4gaXNJbnB1dChub2RlKSAmJiBub2RlLnR5cGUgPT09ICdoaWRkZW4nO1xufVxuXG5mdW5jdGlvbiBpc1JhZGlvKG5vZGUpIHtcbiAgcmV0dXJuIGlzSW5wdXQobm9kZSkgJiYgbm9kZS50eXBlID09PSAncmFkaW8nO1xufVxuXG5mdW5jdGlvbiBpc05vblRhYmJhYmxlUmFkaW8obm9kZSkge1xuICByZXR1cm4gaXNSYWRpbyhub2RlKSAmJiAhaXNUYWJiYWJsZVJhZGlvKG5vZGUpO1xufVxuXG5mdW5jdGlvbiBnZXRDaGVja2VkUmFkaW8obm9kZXMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChub2Rlc1tpXS5jaGVja2VkKSB7XG4gICAgICByZXR1cm4gbm9kZXNbaV07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzVGFiYmFibGVSYWRpbyhub2RlKSB7XG4gIGlmICghbm9kZS5uYW1lKSByZXR1cm4gdHJ1ZTtcbiAgLy8gVGhpcyB3b24ndCBhY2NvdW50IGZvciB0aGUgZWRnZSBjYXNlIHdoZXJlIHlvdSBoYXZlIHJhZGlvIGdyb3VwcyB3aXRoIHRoZSBzYW1lXG4gIC8vIGluIHNlcGFyYXRlIGZvcm1zIG9uIHRoZSBzYW1lIHBhZ2UuXG4gIHZhciByYWRpb1NldCA9IG5vZGUub3duZXJEb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cIicgKyBub2RlLm5hbWUgKyAnXCJdJyk7XG4gIHZhciBjaGVja2VkID0gZ2V0Q2hlY2tlZFJhZGlvKHJhZGlvU2V0KTtcbiAgcmV0dXJuICFjaGVja2VkIHx8IGNoZWNrZWQgPT09IG5vZGU7XG59XG5cbmZ1bmN0aW9uIGlzSGlkZGVuKG5vZGUpIHtcbiAgLy8gb2Zmc2V0UGFyZW50IGJlaW5nIG51bGwgd2lsbCBhbGxvdyBkZXRlY3RpbmcgY2FzZXMgd2hlcmUgYW4gZWxlbWVudCBpcyBpbnZpc2libGUgb3IgaW5zaWRlIGFuIGludmlzaWJsZSBlbGVtZW50LFxuICAvLyBhcyBsb25nIGFzIHRoZSBlbGVtZW50IGRvZXMgbm90IHVzZSBwb3NpdGlvbjogZml4ZWQuIEZvciB0aGVtLCB0aGVpciB2aXNpYmlsaXR5IGhhcyB0byBiZSBjaGVja2VkIGRpcmVjdGx5IGFzIHdlbGwuXG4gIHJldHVybiBub2RlLm9mZnNldFBhcmVudCA9PT0gbnVsbCB8fCBnZXRDb21wdXRlZFN0eWxlKG5vZGUpLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRhYmJhYmxlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBleHRlbmRcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gZXh0ZW5kKCkge1xuICAgIHZhciB0YXJnZXQgPSB7fVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXVxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRcbn1cbiIsInZhciB0YWJiYWJsZSA9IHJlcXVpcmUoJ3RhYmJhYmxlJyk7XG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpO1xuXG52YXIgYWN0aXZlRm9jdXNEZWxheTtcblxudmFyIGFjdGl2ZUZvY3VzVHJhcHMgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB0cmFwUXVldWUgPSBbXTtcbiAgcmV0dXJuIHtcbiAgICBhY3RpdmF0ZVRyYXA6IGZ1bmN0aW9uKHRyYXApIHtcbiAgICAgIGlmICh0cmFwUXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgYWN0aXZlVHJhcCA9IHRyYXBRdWV1ZVt0cmFwUXVldWUubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmIChhY3RpdmVUcmFwICE9PSB0cmFwKSB7XG4gICAgICAgICAgYWN0aXZlVHJhcC5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB0cmFwSW5kZXggPSB0cmFwUXVldWUuaW5kZXhPZih0cmFwKTtcbiAgICAgIGlmICh0cmFwSW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRyYXBRdWV1ZS5wdXNoKHRyYXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbW92ZSB0aGlzIGV4aXN0aW5nIHRyYXAgdG8gdGhlIGZyb250IG9mIHRoZSBxdWV1ZVxuICAgICAgICB0cmFwUXVldWUuc3BsaWNlKHRyYXBJbmRleCwgMSk7XG4gICAgICAgIHRyYXBRdWV1ZS5wdXNoKHRyYXApO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBkZWFjdGl2YXRlVHJhcDogZnVuY3Rpb24odHJhcCkge1xuICAgICAgdmFyIHRyYXBJbmRleCA9IHRyYXBRdWV1ZS5pbmRleE9mKHRyYXApO1xuICAgICAgaWYgKHRyYXBJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdHJhcFF1ZXVlLnNwbGljZSh0cmFwSW5kZXgsIDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHJhcFF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdHJhcFF1ZXVlW3RyYXBRdWV1ZS5sZW5ndGggLSAxXS51bnBhdXNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufSkoKTtcblxuZnVuY3Rpb24gZm9jdXNUcmFwKGVsZW1lbnQsIHVzZXJPcHRpb25zKSB7XG4gIHZhciBkb2MgPSBkb2N1bWVudDtcbiAgdmFyIGNvbnRhaW5lciA9XG4gICAgdHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnID8gZG9jLnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCkgOiBlbGVtZW50O1xuXG4gIHZhciBjb25maWcgPSB4dGVuZChcbiAgICB7XG4gICAgICByZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZTogdHJ1ZSxcbiAgICAgIGVzY2FwZURlYWN0aXZhdGVzOiB0cnVlXG4gICAgfSxcbiAgICB1c2VyT3B0aW9uc1xuICApO1xuXG4gIHZhciBzdGF0ZSA9IHtcbiAgICBmaXJzdFRhYmJhYmxlTm9kZTogbnVsbCxcbiAgICBsYXN0VGFiYmFibGVOb2RlOiBudWxsLFxuICAgIG5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbjogbnVsbCxcbiAgICBtb3N0UmVjZW50bHlGb2N1c2VkTm9kZTogbnVsbCxcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIHBhdXNlZDogZmFsc2VcbiAgfTtcblxuICB2YXIgdHJhcCA9IHtcbiAgICBhY3RpdmF0ZTogYWN0aXZhdGUsXG4gICAgZGVhY3RpdmF0ZTogZGVhY3RpdmF0ZSxcbiAgICBwYXVzZTogcGF1c2UsXG4gICAgdW5wYXVzZTogdW5wYXVzZVxuICB9O1xuXG4gIHJldHVybiB0cmFwO1xuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKGFjdGl2YXRlT3B0aW9ucykge1xuICAgIGlmIChzdGF0ZS5hY3RpdmUpIHJldHVybjtcblxuICAgIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKTtcblxuICAgIHN0YXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgc3RhdGUucGF1c2VkID0gZmFsc2U7XG4gICAgc3RhdGUubm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uID0gZG9jLmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICB2YXIgb25BY3RpdmF0ZSA9XG4gICAgICBhY3RpdmF0ZU9wdGlvbnMgJiYgYWN0aXZhdGVPcHRpb25zLm9uQWN0aXZhdGVcbiAgICAgICAgPyBhY3RpdmF0ZU9wdGlvbnMub25BY3RpdmF0ZVxuICAgICAgICA6IGNvbmZpZy5vbkFjdGl2YXRlO1xuICAgIGlmIChvbkFjdGl2YXRlKSB7XG4gICAgICBvbkFjdGl2YXRlKCk7XG4gICAgfVxuXG4gICAgYWRkTGlzdGVuZXJzKCk7XG4gICAgcmV0dXJuIHRyYXA7XG4gIH1cblxuICBmdW5jdGlvbiBkZWFjdGl2YXRlKGRlYWN0aXZhdGVPcHRpb25zKSB7XG4gICAgaWYgKCFzdGF0ZS5hY3RpdmUpIHJldHVybjtcblxuICAgIGNsZWFyVGltZW91dChhY3RpdmVGb2N1c0RlbGF5KTtcblxuICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICAgIHN0YXRlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuXG4gICAgYWN0aXZlRm9jdXNUcmFwcy5kZWFjdGl2YXRlVHJhcCh0cmFwKTtcblxuICAgIHZhciBvbkRlYWN0aXZhdGUgPVxuICAgICAgZGVhY3RpdmF0ZU9wdGlvbnMgJiYgZGVhY3RpdmF0ZU9wdGlvbnMub25EZWFjdGl2YXRlICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBkZWFjdGl2YXRlT3B0aW9ucy5vbkRlYWN0aXZhdGVcbiAgICAgICAgOiBjb25maWcub25EZWFjdGl2YXRlO1xuICAgIGlmIChvbkRlYWN0aXZhdGUpIHtcbiAgICAgIG9uRGVhY3RpdmF0ZSgpO1xuICAgIH1cblxuICAgIHZhciByZXR1cm5Gb2N1cyA9XG4gICAgICBkZWFjdGl2YXRlT3B0aW9ucyAmJiBkZWFjdGl2YXRlT3B0aW9ucy5yZXR1cm5Gb2N1cyAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gZGVhY3RpdmF0ZU9wdGlvbnMucmV0dXJuRm9jdXNcbiAgICAgICAgOiBjb25maWcucmV0dXJuRm9jdXNPbkRlYWN0aXZhdGU7XG4gICAgaWYgKHJldHVybkZvY3VzKSB7XG4gICAgICBkZWxheShmdW5jdGlvbigpIHtcbiAgICAgICAgdHJ5Rm9jdXMoZ2V0UmV0dXJuRm9jdXNOb2RlKHN0YXRlLm5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbikpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRyYXA7XG4gIH1cblxuICBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICBpZiAoc3RhdGUucGF1c2VkIHx8ICFzdGF0ZS5hY3RpdmUpIHJldHVybjtcbiAgICBzdGF0ZS5wYXVzZWQgPSB0cnVlO1xuICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gdW5wYXVzZSgpIHtcbiAgICBpZiAoIXN0YXRlLnBhdXNlZCB8fCAhc3RhdGUuYWN0aXZlKSByZXR1cm47XG4gICAgc3RhdGUucGF1c2VkID0gZmFsc2U7XG4gICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgIGFkZExpc3RlbmVycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuICAgIGlmICghc3RhdGUuYWN0aXZlKSByZXR1cm47XG5cbiAgICAvLyBUaGVyZSBjYW4gYmUgb25seSBvbmUgbGlzdGVuaW5nIGZvY3VzIHRyYXAgYXQgYSB0aW1lXG4gICAgYWN0aXZlRm9jdXNUcmFwcy5hY3RpdmF0ZVRyYXAodHJhcCk7XG5cbiAgICAvLyBEZWxheSBlbnN1cmVzIHRoYXQgdGhlIGZvY3VzZWQgZWxlbWVudCBkb2Vzbid0IGNhcHR1cmUgdGhlIGV2ZW50XG4gICAgLy8gdGhhdCBjYXVzZWQgdGhlIGZvY3VzIHRyYXAgYWN0aXZhdGlvbi5cbiAgICBhY3RpdmVGb2N1c0RlbGF5ID0gZGVsYXkoZnVuY3Rpb24oKSB7XG4gICAgICB0cnlGb2N1cyhnZXRJbml0aWFsRm9jdXNOb2RlKCkpO1xuICAgIH0pO1xuXG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBjaGVja0ZvY3VzSW4sIHRydWUpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjaGVja1BvaW50ZXJEb3duLCB7XG4gICAgICBjYXB0dXJlOiB0cnVlLFxuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9KTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNoZWNrUG9pbnRlckRvd24sIHtcbiAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrQ2xpY2ssIHtcbiAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2hlY2tLZXksIHtcbiAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRyYXA7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKCFzdGF0ZS5hY3RpdmUpIHJldHVybjtcblxuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgY2hlY2tGb2N1c0luLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2hlY2tQb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjaGVja1BvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0NsaWNrLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNoZWNrS2V5LCB0cnVlKTtcblxuICAgIHJldHVybiB0cmFwO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Tm9kZUZvck9wdGlvbihvcHRpb25OYW1lKSB7XG4gICAgdmFyIG9wdGlvblZhbHVlID0gY29uZmlnW29wdGlvbk5hbWVdO1xuICAgIHZhciBub2RlID0gb3B0aW9uVmFsdWU7XG4gICAgaWYgKCFvcHRpb25WYWx1ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9uVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBub2RlID0gZG9jLnF1ZXJ5U2VsZWN0b3Iob3B0aW9uVmFsdWUpO1xuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYCcgKyBvcHRpb25OYW1lICsgJ2AgcmVmZXJzIHRvIG5vIGtub3duIG5vZGUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25WYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbm9kZSA9IG9wdGlvblZhbHVlKCk7XG4gICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdgJyArIG9wdGlvbk5hbWUgKyAnYCBkaWQgbm90IHJldHVybiBhIG5vZGUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJbml0aWFsRm9jdXNOb2RlKCkge1xuICAgIHZhciBub2RlO1xuICAgIGlmIChnZXROb2RlRm9yT3B0aW9uKCdpbml0aWFsRm9jdXMnKSAhPT0gbnVsbCkge1xuICAgICAgbm9kZSA9IGdldE5vZGVGb3JPcHRpb24oJ2luaXRpYWxGb2N1cycpO1xuICAgIH0gZWxzZSBpZiAoY29udGFpbmVyLmNvbnRhaW5zKGRvYy5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgbm9kZSA9IGRvYy5hY3RpdmVFbGVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlID0gc3RhdGUuZmlyc3RUYWJiYWJsZU5vZGUgfHwgZ2V0Tm9kZUZvck9wdGlvbignZmFsbGJhY2tGb2N1cycpO1xuICAgIH1cblxuICAgIGlmICghbm9kZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnWW91ciBmb2N1cy10cmFwIG5lZWRzIHRvIGhhdmUgYXQgbGVhc3Qgb25lIGZvY3VzYWJsZSBlbGVtZW50J1xuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFJldHVybkZvY3VzTm9kZShwcmV2aW91c0FjdGl2ZUVsZW1lbnQpIHtcbiAgICB2YXIgbm9kZSA9IGdldE5vZGVGb3JPcHRpb24oJ3NldFJldHVybkZvY3VzJyk7XG4gICAgcmV0dXJuIG5vZGUgPyBub2RlIDogcHJldmlvdXNBY3RpdmVFbGVtZW50O1xuICB9XG5cbiAgLy8gVGhpcyBuZWVkcyB0byBiZSBkb25lIG9uIG1vdXNlZG93biBhbmQgdG91Y2hzdGFydCBpbnN0ZWFkIG9mIGNsaWNrXG4gIC8vIHNvIHRoYXQgaXQgcHJlY2VkZXMgdGhlIGZvY3VzIGV2ZW50LlxuICBmdW5jdGlvbiBjaGVja1BvaW50ZXJEb3duKGUpIHtcbiAgICBpZiAoY29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSkgcmV0dXJuO1xuICAgIGlmIChjb25maWcuY2xpY2tPdXRzaWRlRGVhY3RpdmF0ZXMpIHtcbiAgICAgIGRlYWN0aXZhdGUoe1xuICAgICAgICByZXR1cm5Gb2N1czogIXRhYmJhYmxlLmlzRm9jdXNhYmxlKGUudGFyZ2V0KVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFRoaXMgaXMgbmVlZGVkIGZvciBtb2JpbGUgZGV2aWNlcy5cbiAgICAvLyAoSWYgd2UnbGwgb25seSBsZXQgYGNsaWNrYCBldmVudHMgdGhyb3VnaCxcbiAgICAvLyB0aGVuIG9uIG1vYmlsZSB0aGV5IHdpbGwgYmUgYmxvY2tlZCBhbnl3YXlzIGlmIGB0b3VjaHN0YXJ0YCBpcyBibG9ja2VkLilcbiAgICBpZiAoY29uZmlnLmFsbG93T3V0c2lkZUNsaWNrICYmIGNvbmZpZy5hbGxvd091dHNpZGVDbGljayhlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICAvLyBJbiBjYXNlIGZvY3VzIGVzY2FwZXMgdGhlIHRyYXAgZm9yIHNvbWUgc3RyYW5nZSByZWFzb24sIHB1bGwgaXQgYmFjayBpbi5cbiAgZnVuY3Rpb24gY2hlY2tGb2N1c0luKGUpIHtcbiAgICAvLyBJbiBGaXJlZm94IHdoZW4geW91IFRhYiBvdXQgb2YgYW4gaWZyYW1lIHRoZSBEb2N1bWVudCBpcyBicmllZmx5IGZvY3VzZWQuXG4gICAgaWYgKGNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkgfHwgZS50YXJnZXQgaW5zdGFuY2VvZiBEb2N1bWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIHRyeUZvY3VzKHN0YXRlLm1vc3RSZWNlbnRseUZvY3VzZWROb2RlIHx8IGdldEluaXRpYWxGb2N1c05vZGUoKSk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0tleShlKSB7XG4gICAgaWYgKGNvbmZpZy5lc2NhcGVEZWFjdGl2YXRlcyAhPT0gZmFsc2UgJiYgaXNFc2NhcGVFdmVudChlKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZGVhY3RpdmF0ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXNUYWJFdmVudChlKSkge1xuICAgICAgY2hlY2tUYWIoZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgLy8gSGlqYWNrIFRhYiBldmVudHMgb24gdGhlIGZpcnN0IGFuZCBsYXN0IGZvY3VzYWJsZSBub2RlcyBvZiB0aGUgdHJhcCxcbiAgLy8gaW4gb3JkZXIgdG8gcHJldmVudCBmb2N1cyBmcm9tIGVzY2FwaW5nLiBJZiBpdCBlc2NhcGVzIGZvciBldmVuIGFcbiAgLy8gbW9tZW50IGl0IGNhbiBlbmQgdXAgc2Nyb2xsaW5nIHRoZSBwYWdlIGFuZCBjYXVzaW5nIGNvbmZ1c2lvbiBzbyB3ZVxuICAvLyBraW5kIG9mIG5lZWQgdG8gY2FwdHVyZSB0aGUgYWN0aW9uIGF0IHRoZSBrZXlkb3duIHBoYXNlLlxuICBmdW5jdGlvbiBjaGVja1RhYihlKSB7XG4gICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgIGlmIChlLnNoaWZ0S2V5ICYmIGUudGFyZ2V0ID09PSBzdGF0ZS5maXJzdFRhYmJhYmxlTm9kZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdHJ5Rm9jdXMoc3RhdGUubGFzdFRhYmJhYmxlTm9kZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghZS5zaGlmdEtleSAmJiBlLnRhcmdldCA9PT0gc3RhdGUubGFzdFRhYmJhYmxlTm9kZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdHJ5Rm9jdXMoc3RhdGUuZmlyc3RUYWJiYWJsZU5vZGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrQ2xpY2soZSkge1xuICAgIGlmIChjb25maWcuY2xpY2tPdXRzaWRlRGVhY3RpdmF0ZXMpIHJldHVybjtcbiAgICBpZiAoY29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSkgcmV0dXJuO1xuICAgIGlmIChjb25maWcuYWxsb3dPdXRzaWRlQ2xpY2sgJiYgY29uZmlnLmFsbG93T3V0c2lkZUNsaWNrKGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlVGFiYmFibGVOb2RlcygpIHtcbiAgICB2YXIgdGFiYmFibGVOb2RlcyA9IHRhYmJhYmxlKGNvbnRhaW5lcik7XG4gICAgc3RhdGUuZmlyc3RUYWJiYWJsZU5vZGUgPSB0YWJiYWJsZU5vZGVzWzBdIHx8IGdldEluaXRpYWxGb2N1c05vZGUoKTtcbiAgICBzdGF0ZS5sYXN0VGFiYmFibGVOb2RlID1cbiAgICAgIHRhYmJhYmxlTm9kZXNbdGFiYmFibGVOb2Rlcy5sZW5ndGggLSAxXSB8fCBnZXRJbml0aWFsRm9jdXNOb2RlKCk7XG4gIH1cblxuICBmdW5jdGlvbiB0cnlGb2N1cyhub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IGRvYy5hY3RpdmVFbGVtZW50KSByZXR1cm47XG4gICAgaWYgKCFub2RlIHx8ICFub2RlLmZvY3VzKSB7XG4gICAgICB0cnlGb2N1cyhnZXRJbml0aWFsRm9jdXNOb2RlKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBub2RlLmZvY3VzKCk7XG4gICAgc3RhdGUubW9zdFJlY2VudGx5Rm9jdXNlZE5vZGUgPSBub2RlO1xuICAgIGlmIChpc1NlbGVjdGFibGVJbnB1dChub2RlKSkge1xuICAgICAgbm9kZS5zZWxlY3QoKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNTZWxlY3RhYmxlSW5wdXQobm9kZSkge1xuICByZXR1cm4gKFxuICAgIG5vZGUudGFnTmFtZSAmJlxuICAgIG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnICYmXG4gICAgdHlwZW9mIG5vZGUuc2VsZWN0ID09PSAnZnVuY3Rpb24nXG4gICk7XG59XG5cbmZ1bmN0aW9uIGlzRXNjYXBlRXZlbnQoZSkge1xuICByZXR1cm4gZS5rZXkgPT09ICdFc2NhcGUnIHx8IGUua2V5ID09PSAnRXNjJyB8fCBlLmtleUNvZGUgPT09IDI3O1xufVxuXG5mdW5jdGlvbiBpc1RhYkV2ZW50KGUpIHtcbiAgcmV0dXJuIGUua2V5ID09PSAnVGFiJyB8fCBlLmtleUNvZGUgPT09IDk7XG59XG5cbmZ1bmN0aW9uIGRlbGF5KGZuKSB7XG4gIHJldHVybiBzZXRUaW1lb3V0KGZuLCAwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmb2N1c1RyYXA7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCB7IGRlZmF1bHQgYXMgY3JlYXRlRm9jdXNUcmFwIH0gZnJvbSAnZm9jdXMtdHJhcCc7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9jdXNUcmFwSW5zdGFuY2Uoc3VyZmFjZUVsLCBmb2N1c1RyYXBGYWN0b3J5KSB7XG4gICAgaWYgKGZvY3VzVHJhcEZhY3RvcnkgPT09IHZvaWQgMCkgeyBmb2N1c1RyYXBGYWN0b3J5ID0gY3JlYXRlRm9jdXNUcmFwOyB9XG4gICAgcmV0dXJuIGZvY3VzVHJhcEZhY3Rvcnkoc3VyZmFjZUVsLCB7XG4gICAgICAgIGNsaWNrT3V0c2lkZURlYWN0aXZhdGVzOiB0cnVlLFxuICAgICAgICBlc2NhcGVEZWFjdGl2YXRlczogZmFsc2UsXG4gICAgICAgIGluaXRpYWxGb2N1czogdW5kZWZpbmVkLFxuICAgICAgICByZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZTogZmFsc2UsXG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgQU5JTUFURTogJ21kYy1kcmF3ZXItLWFuaW1hdGUnLFxuICAgIENMT1NJTkc6ICdtZGMtZHJhd2VyLS1jbG9zaW5nJyxcbiAgICBESVNNSVNTSUJMRTogJ21kYy1kcmF3ZXItLWRpc21pc3NpYmxlJyxcbiAgICBNT0RBTDogJ21kYy1kcmF3ZXItLW1vZGFsJyxcbiAgICBPUEVOOiAnbWRjLWRyYXdlci0tb3BlbicsXG4gICAgT1BFTklORzogJ21kYy1kcmF3ZXItLW9wZW5pbmcnLFxuICAgIFJPT1Q6ICdtZGMtZHJhd2VyJyxcbn07XG52YXIgc3RyaW5ncyA9IHtcbiAgICBBUFBfQ09OVEVOVF9TRUxFQ1RPUjogJy5tZGMtZHJhd2VyLWFwcC1jb250ZW50JyxcbiAgICBDTE9TRV9FVkVOVDogJ01EQ0RyYXdlcjpjbG9zZWQnLFxuICAgIE9QRU5fRVZFTlQ6ICdNRENEcmF3ZXI6b3BlbmVkJyxcbiAgICBTQ1JJTV9TRUxFQ1RPUjogJy5tZGMtZHJhd2VyLXNjcmltJyxcbn07XG5leHBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3Nlcywgc3RyaW5ncyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG52YXIgTURDRGlzbWlzc2libGVEcmF3ZXJGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5hbmltYXRpb25GcmFtZV8gPSAwO1xuICAgICAgICBfdGhpcy5hbmltYXRpb25UaW1lcl8gPSAwO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBoYXNDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgZWxlbWVudEhhc0NsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlDbG9zZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeU9wZW46IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzYXZlRm9jdXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZXN0b3JlRm9jdXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBmb2N1c0FjdGl2ZU5hdmlnYXRpb25JdGVtOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgdHJhcEZvY3VzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVsZWFzZUZvY3VzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDRGlzbWlzc2libGVEcmF3ZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5hbmltYXRpb25GcmFtZV8pIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWVfKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb25UaW1lcl8pIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFuaW1hdGlvblRpbWVyXyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE9wZW5zIHRoZSBkcmF3ZXIgZnJvbSB0aGUgY2xvc2VkIHN0YXRlLlxuICAgICAqL1xuICAgIE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbi5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKCkgfHwgdGhpcy5pc09wZW5pbmcoKSB8fCB0aGlzLmlzQ2xvc2luZygpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLk9QRU4pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuQU5JTUFURSk7XG4gICAgICAgIC8vIFdhaXQgYSBmcmFtZSBvbmNlIGRpc3BsYXkgaXMgbm8gbG9uZ2VyIFwibm9uZVwiLCB0byBlc3RhYmxpc2ggYmFzaXMgZm9yIGFuaW1hdGlvblxuICAgICAgICB0aGlzLnJ1bk5leHRBbmltYXRpb25GcmFtZV8oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5PUEVOSU5HKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2F2ZUZvY3VzKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDbG9zZXMgdGhlIGRyYXdlciBmcm9tIHRoZSBvcGVuIHN0YXRlLlxuICAgICAqL1xuICAgIE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc09wZW4oKSB8fCB0aGlzLmlzT3BlbmluZygpIHx8IHRoaXMuaXNDbG9zaW5nKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuQ0xPU0lORyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGRyYXdlciBpcyBpbiB0aGUgb3BlbiBwb3NpdGlvbi5cbiAgICAgKiBAcmV0dXJuIHRydWUgaWYgZHJhd2VyIGlzIGluIG9wZW4gc3RhdGUuXG4gICAgICovXG4gICAgTURDRGlzbWlzc2libGVEcmF3ZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5pc09wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuT1BFTik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGRyYXdlciBpcyBhbmltYXRpbmcgb3Blbi5cbiAgICAgKiBAcmV0dXJuIHRydWUgaWYgZHJhd2VyIGlzIGFuaW1hdGluZyBvcGVuLlxuICAgICAqL1xuICAgIE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbi5wcm90b3R5cGUuaXNPcGVuaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLk9QRU5JTkcpIHx8IHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5BTklNQVRFKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZHJhd2VyIGlzIGFuaW1hdGluZyBjbG9zZWQuXG4gICAgICogQHJldHVybiB0cnVlIGlmIGRyYXdlciBpcyBhbmltYXRpbmcgY2xvc2VkLlxuICAgICAqL1xuICAgIE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbi5wcm90b3R5cGUuaXNDbG9zaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLkNMT1NJTkcpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogS2V5ZG93biBoYW5kbGVyIHRvIGNsb3NlIGRyYXdlciB3aGVuIGtleSBpcyBlc2NhcGUuXG4gICAgICovXG4gICAgTURDRGlzbWlzc2libGVEcmF3ZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVLZXlkb3duID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIga2V5Q29kZSA9IGV2dC5rZXlDb2RlLCBrZXkgPSBldnQua2V5O1xuICAgICAgICB2YXIgaXNFc2NhcGUgPSBrZXkgPT09ICdFc2NhcGUnIHx8IGtleUNvZGUgPT09IDI3O1xuICAgICAgICBpZiAoaXNFc2NhcGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgYHRyYW5zaXRpb25lbmRgIGV2ZW50IHdoZW4gdGhlIGRyYXdlciBmaW5pc2hlcyBvcGVuaW5nL2Nsb3NpbmcuXG4gICAgICovXG4gICAgTURDRGlzbWlzc2libGVEcmF3ZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgT1BFTklORyA9IGNzc0NsYXNzZXMuT1BFTklORywgQ0xPU0lORyA9IGNzc0NsYXNzZXMuQ0xPU0lORywgT1BFTiA9IGNzc0NsYXNzZXMuT1BFTiwgQU5JTUFURSA9IGNzc0NsYXNzZXMuQU5JTUFURSwgUk9PVCA9IGNzc0NsYXNzZXMuUk9PVDtcbiAgICAgICAgLy8gSW4gRWRnZSwgdHJhbnNpdGlvbmVuZCBvbiByaXBwbGUgcHNldWRvLWVsZW1lbnRzIHlpZWxkcyBhIHRhcmdldCB3aXRob3V0IGNsYXNzTGlzdCwgc28gY2hlY2sgZm9yIEVsZW1lbnQgZmlyc3QuXG4gICAgICAgIHZhciBpc1Jvb3RFbGVtZW50ID0gdGhpcy5pc0VsZW1lbnRfKGV2dC50YXJnZXQpICYmIHRoaXMuYWRhcHRlcl8uZWxlbWVudEhhc0NsYXNzKGV2dC50YXJnZXQsIFJPT1QpO1xuICAgICAgICBpZiAoIWlzUm9vdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0Nsb3NpbmcoKSkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhPUEVOKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VkXygpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZXN0b3JlRm9jdXMoKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5Q2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uZm9jdXNBY3RpdmVOYXZpZ2F0aW9uSXRlbSgpO1xuICAgICAgICAgICAgdGhpcy5vcGVuZWRfKCk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeU9wZW4oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEFOSU1BVEUpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE9QRU5JTkcpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKENMT1NJTkcpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRXh0ZW5zaW9uIHBvaW50IGZvciB3aGVuIGRyYXdlciBmaW5pc2hlcyBvcGVuIGFuaW1hdGlvbi5cbiAgICAgKi9cbiAgICBNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb24ucHJvdG90eXBlLm9wZW5lZF8gPSBmdW5jdGlvbiAoKSB7IH07IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tZW1wdHlcbiAgICAvKipcbiAgICAgKiBFeHRlbnNpb24gcG9pbnQgZm9yIHdoZW4gZHJhd2VyIGZpbmlzaGVzIGNsb3NlIGFuaW1hdGlvbi5cbiAgICAgKi9cbiAgICBNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb24ucHJvdG90eXBlLmNsb3NlZF8gPSBmdW5jdGlvbiAoKSB7IH07IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tZW1wdHlcbiAgICAvKipcbiAgICAgKiBSdW5zIHRoZSBnaXZlbiBsb2dpYyBvbiB0aGUgbmV4dCBhbmltYXRpb24gZnJhbWUsIHVzaW5nIHNldFRpbWVvdXQgdG8gZmFjdG9yIGluIEZpcmVmb3ggcmVmbG93IGJlaGF2aW9yLlxuICAgICAqL1xuICAgIE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbi5wcm90b3R5cGUucnVuTmV4dEFuaW1hdGlvbkZyYW1lXyA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbkZyYW1lXyk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVfID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmFuaW1hdGlvbkZyYW1lXyA9IDA7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMuYW5pbWF0aW9uVGltZXJfKTtcbiAgICAgICAgICAgIF90aGlzLmFuaW1hdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoY2FsbGJhY2ssIDApO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbi5wcm90b3R5cGUuaXNFbGVtZW50XyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIC8vIEluIEVkZ2UsIHRyYW5zaXRpb25lbmQgb24gcmlwcGxlIHBzZXVkby1lbGVtZW50cyB5aWVsZHMgYSB0YXJnZXQgd2l0aG91dCBjbGFzc0xpc3QuXG4gICAgICAgIHJldHVybiBCb29sZWFuKGVsZW1lbnQuY2xhc3NMaXN0KTtcbiAgICB9O1xuICAgIHJldHVybiBNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRGlzbWlzc2libGVEcmF3ZXJGb3VuZGF0aW9uIH0gZnJvbSAnLi4vZGlzbWlzc2libGUvZm91bmRhdGlvbic7XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogc3ViY2xhc3MgaXMgbm90IGEgYnJhbmNoIHN0YXRlbWVudCAqL1xudmFyIE1EQ01vZGFsRHJhd2VyRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENNb2RhbERyYXdlckZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDTW9kYWxEcmF3ZXJGb3VuZGF0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgY2xpY2sgZXZlbnQgb24gc2NyaW0uXG4gICAgICovXG4gICAgTURDTW9kYWxEcmF3ZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVTY3JpbUNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiBkcmF3ZXIgZmluaXNoZXMgb3BlbiBhbmltYXRpb24uXG4gICAgICovXG4gICAgTURDTW9kYWxEcmF3ZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5vcGVuZWRfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnRyYXBGb2N1cygpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gZHJhd2VyIGZpbmlzaGVzIGNsb3NlIGFuaW1hdGlvbi5cbiAgICAgKi9cbiAgICBNRENNb2RhbERyYXdlckZvdW5kYXRpb24ucHJvdG90eXBlLmNsb3NlZF8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVsZWFzZUZvY3VzKCk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDTW9kYWxEcmF3ZXJGb3VuZGF0aW9uO1xufShNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ01vZGFsRHJhd2VyRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ01vZGFsRHJhd2VyRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDQ29tcG9uZW50IH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IE1EQ0xpc3QgfSBmcm9tICdAbWF0ZXJpYWwvbGlzdC9jb21wb25lbnQnO1xuaW1wb3J0IHsgTURDTGlzdEZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvbGlzdC9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgY3JlYXRlRm9jdXNUcmFwIH0gZnJvbSAnZm9jdXMtdHJhcCc7XG5pbXBvcnQgeyBNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb24gfSBmcm9tICcuL2Rpc21pc3NpYmxlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgTURDTW9kYWxEcmF3ZXJGb3VuZGF0aW9uIH0gZnJvbSAnLi9tb2RhbC9mb3VuZGF0aW9uJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJztcbnZhciBjc3NDbGFzc2VzID0gTURDRGlzbWlzc2libGVEcmF3ZXJGb3VuZGF0aW9uLmNzc0NsYXNzZXMsIHN0cmluZ3MgPSBNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb24uc3RyaW5ncztcbi8qKlxuICogQGV2ZW50cyBgTURDRHJhd2VyOmNsb3NlZCB7fWAgRW1pdHMgd2hlbiB0aGUgbmF2aWdhdGlvbiBkcmF3ZXIgaGFzIGNsb3NlZC5cbiAqIEBldmVudHMgYE1EQ0RyYXdlcjpvcGVuZWQge31gIEVtaXRzIHdoZW4gdGhlIG5hdmlnYXRpb24gZHJhd2VyIGhhcyBvcGVuZWQuXG4gKi9cbnZhciBNRENEcmF3ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDRHJhd2VyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ0RyYXdlcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBNRENEcmF3ZXIuYXR0YWNoVG8gPSBmdW5jdGlvbiAocm9vdCkge1xuICAgICAgICByZXR1cm4gbmV3IE1EQ0RyYXdlcihyb290KTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENEcmF3ZXIucHJvdG90eXBlLCBcIm9wZW5cIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiBib29sZWFuIFByb3hpZXMgdG8gdGhlIGZvdW5kYXRpb24ncyBgb3BlbmAvYGNsb3NlYCBtZXRob2RzLlxuICAgICAgICAgKiBBbHNvIHJldHVybnMgdHJ1ZSBpZiBkcmF3ZXIgaXMgaW4gdGhlIG9wZW4gcG9zaXRpb24uXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb25fLmlzT3BlbigpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogVG9nZ2xlcyB0aGUgZHJhd2VyIG9wZW4gYW5kIGNsb3NlZC5cbiAgICAgICAgICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGlzT3Blbikge1xuICAgICAgICAgICAgaWYgKGlzT3Blbikge1xuICAgICAgICAgICAgICAgIHRoaXMuZm91bmRhdGlvbl8ub3BlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRHJhd2VyLnByb3RvdHlwZSwgXCJsaXN0XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saXN0XztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDRHJhd2VyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKGZvY3VzVHJhcEZhY3RvcnksIGxpc3RGYWN0b3J5KSB7XG4gICAgICAgIGlmIChmb2N1c1RyYXBGYWN0b3J5ID09PSB2b2lkIDApIHsgZm9jdXNUcmFwRmFjdG9yeSA9IGNyZWF0ZUZvY3VzVHJhcDsgfVxuICAgICAgICBpZiAobGlzdEZhY3RvcnkgPT09IHZvaWQgMCkgeyBsaXN0RmFjdG9yeSA9IGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gbmV3IE1EQ0xpc3QoZWwpOyB9OyB9XG4gICAgICAgIHZhciBsaXN0RWwgPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBNRENMaXN0Rm91bmRhdGlvbi5jc3NDbGFzc2VzLlJPT1QpO1xuICAgICAgICBpZiAobGlzdEVsKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RfID0gbGlzdEZhY3RvcnkobGlzdEVsKTtcbiAgICAgICAgICAgIHRoaXMubGlzdF8ud3JhcEZvY3VzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvY3VzVHJhcEZhY3RvcnlfID0gZm9jdXNUcmFwRmFjdG9yeTtcbiAgICB9O1xuICAgIE1EQ0RyYXdlci5wcm90b3R5cGUuaW5pdGlhbFN5bmNXaXRoRE9NID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgTU9EQUwgPSBjc3NDbGFzc2VzLk1PREFMO1xuICAgICAgICB2YXIgU0NSSU1fU0VMRUNUT1IgPSBzdHJpbmdzLlNDUklNX1NFTEVDVE9SO1xuICAgICAgICB0aGlzLnNjcmltXyA9IHRoaXMucm9vdF8ucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFNDUklNX1NFTEVDVE9SKTtcbiAgICAgICAgaWYgKHRoaXMuc2NyaW1fICYmIHRoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKE1PREFMKSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVTY3JpbUNsaWNrXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmZvdW5kYXRpb25fLmhhbmRsZVNjcmltQ2xpY2soKTsgfTtcbiAgICAgICAgICAgIHRoaXMuc2NyaW1fLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVTY3JpbUNsaWNrXyk7XG4gICAgICAgICAgICB0aGlzLmZvY3VzVHJhcF8gPSB1dGlsLmNyZWF0ZUZvY3VzVHJhcEluc3RhbmNlKHRoaXMucm9vdF8sIHRoaXMuZm9jdXNUcmFwRmFjdG9yeV8pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlS2V5ZG93bl8gPSBmdW5jdGlvbiAoZXZ0KSB7IHJldHVybiBfdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVLZXlkb3duKGV2dCk7IH07XG4gICAgICAgIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZF8gPSBmdW5jdGlvbiAoZXZ0KSB7IHJldHVybiBfdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVUcmFuc2l0aW9uRW5kKGV2dCk7IH07XG4gICAgICAgIHRoaXMubGlzdGVuKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlkb3duXyk7XG4gICAgICAgIHRoaXMubGlzdGVuKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5oYW5kbGVUcmFuc2l0aW9uRW5kXyk7XG4gICAgfTtcbiAgICBNRENEcmF3ZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudW5saXN0ZW4oJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd25fKTtcbiAgICAgICAgdGhpcy51bmxpc3RlbigndHJhbnNpdGlvbmVuZCcsIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZF8pO1xuICAgICAgICBpZiAodGhpcy5saXN0Xykge1xuICAgICAgICAgICAgdGhpcy5saXN0Xy5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIE1PREFMID0gY3NzQ2xhc3Nlcy5NT0RBTDtcbiAgICAgICAgaWYgKHRoaXMuc2NyaW1fICYmIHRoaXMuaGFuZGxlU2NyaW1DbGlja18gJiYgdGhpcy5yb290Xy5jbGFzc0xpc3QuY29udGFpbnMoTU9EQUwpKSB7XG4gICAgICAgICAgICB0aGlzLnNjcmltXy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlU2NyaW1DbGlja18pO1xuICAgICAgICAgICAgLy8gRW5zdXJlIGRyYXdlciBpcyBjbG9zZWQgdG8gaGlkZSBzY3JpbSBhbmQgcmVsZWFzZSBmb2N1c1xuICAgICAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ0RyYXdlci5wcm90b3R5cGUuZ2V0RGVmYXVsdEZvdW5kYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIERPIE5PVCBJTkxJTkUgdGhpcyB2YXJpYWJsZS4gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGZvdW5kYXRpb25zIHRha2UgYSBQYXJ0aWFsPE1EQ0Zvb0FkYXB0ZXI+LlxuICAgICAgICAvLyBUbyBlbnN1cmUgd2UgZG9uJ3QgYWNjaWRlbnRhbGx5IG9taXQgYW55IG1ldGhvZHMsIHdlIG5lZWQgYSBzZXBhcmF0ZSwgc3Ryb25nbHkgdHlwZWQgYWRhcHRlciB2YXJpYWJsZS5cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgdmFyIGFkYXB0ZXIgPSB7XG4gICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIF90aGlzLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290Xy5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIGVsZW1lbnRIYXNDbGFzczogZnVuY3Rpb24gKGVsZW1lbnQsIGNsYXNzTmFtZSkgeyByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIHNhdmVGb2N1czogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucHJldmlvdXNGb2N1c18gPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50OyB9LFxuICAgICAgICAgICAgcmVzdG9yZUZvY3VzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzRm9jdXMgPSBfdGhpcy5wcmV2aW91c0ZvY3VzXztcbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNGb2N1cyAmJiBwcmV2aW91c0ZvY3VzLmZvY3VzICYmIF90aGlzLnJvb3RfLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzRm9jdXMuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9jdXNBY3RpdmVOYXZpZ2F0aW9uSXRlbTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBhY3RpdmVOYXZJdGVtRWwgPSBfdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKFwiLlwiICsgTURDTGlzdEZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQUNUSVZBVEVEX0NMQVNTKTtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aXZlTmF2SXRlbUVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZU5hdkl0ZW1FbC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub3RpZnlDbG9zZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZW1pdChzdHJpbmdzLkNMT1NFX0VWRU5ULCB7fSwgdHJ1ZSAvKiBzaG91bGRCdWJibGUgKi8pOyB9LFxuICAgICAgICAgICAgbm90aWZ5T3BlbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZW1pdChzdHJpbmdzLk9QRU5fRVZFTlQsIHt9LCB0cnVlIC8qIHNob3VsZEJ1YmJsZSAqLyk7IH0sXG4gICAgICAgICAgICB0cmFwRm9jdXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmZvY3VzVHJhcF8uYWN0aXZhdGUoKTsgfSxcbiAgICAgICAgICAgIHJlbGVhc2VGb2N1czogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZm9jdXNUcmFwXy5kZWFjdGl2YXRlKCk7IH0sXG4gICAgICAgIH07XG4gICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIHZhciBESVNNSVNTSUJMRSA9IGNzc0NsYXNzZXMuRElTTUlTU0lCTEUsIE1PREFMID0gY3NzQ2xhc3Nlcy5NT0RBTDtcbiAgICAgICAgaWYgKHRoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKERJU01JU1NJQkxFKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb24oYWRhcHRlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5yb290Xy5jbGFzc0xpc3QuY29udGFpbnMoTU9EQUwpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1EQ01vZGFsRHJhd2VyRm91bmRhdGlvbihhZGFwdGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1EQ0RyYXdlcjogRmFpbGVkIHRvIGluc3RhbnRpYXRlIGNvbXBvbmVudC4gU3VwcG9ydGVkIHZhcmlhbnRzIGFyZSBcIiArIERJU01JU1NJQkxFICsgXCIgYW5kIFwiICsgTU9EQUwgKyBcIi5cIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNRENEcmF3ZXI7XG59KE1EQ0NvbXBvbmVudCkpO1xuZXhwb3J0IHsgTURDRHJhd2VyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnQuanMubWFwIiwiPGFzaWRlXG4gIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgdXNlOmZvcndhcmRFdmVudHNcbiAgY2xhc3M9XCJcbiAgICBtZGMtZHJhd2VyXG4gICAge2NsYXNzTmFtZX1cbiAgICB7dmFyaWFudCA9PT0gJ2Rpc21pc3NpYmxlJyA/ICdtZGMtZHJhd2VyLS1kaXNtaXNzaWJsZScgOiAnJ31cbiAgICB7dmFyaWFudCA9PT0gJ21vZGFsJyA/ICdtZGMtZHJhd2VyLS1tb2RhbCcgOiAnJ31cbiAgXCJcbiAgb246TURDRHJhd2VyOm9wZW5lZD17dXBkYXRlT3Blbn0gb246TURDRHJhd2VyOmNsb3NlZD17dXBkYXRlT3Blbn1cbiAgey4uLmV4Y2x1ZGUoJCRwcm9wcywgWyd1c2UnLCAnY2xhc3MnLCAndmFyaWFudCcsICdvcGVuJ10pfVxuPjxzbG90Pjwvc2xvdD48L2FzaWRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQge01EQ0RyYXdlcn0gZnJvbSBcIkBtYXRlcmlhbC9kcmF3ZXJcIjtcbiAgaW1wb3J0IHtvbk1vdW50LCBvbkRlc3Ryb3ksIGFmdGVyVXBkYXRlLCBzZXRDb250ZXh0fSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQge2N1cnJlbnRfY29tcG9uZW50fSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQge2ZvcndhcmRFdmVudHNCdWlsZGVyfSBmcm9tICdAc211aS9jb21tb24vZm9yd2FyZEV2ZW50cy5qcyc7XG4gIGltcG9ydCB7ZXhjbHVkZX0gZnJvbSAnQHNtdWkvY29tbW9uL2V4Y2x1ZGUuanMnO1xuICBpbXBvcnQge3VzZUFjdGlvbnN9IGZyb20gJ0BzbXVpL2NvbW1vbi91c2VBY3Rpb25zLmpzJztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoY3VycmVudF9jb21wb25lbnQsIFsnTURDRHJhd2VyOm9wZW5lZCcsICdNRENEcmF3ZXI6Y2xvc2VkJ10pO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG4gIGxldCBjbGFzc05hbWUgPSAnJztcbiAgZXhwb3J0IHtjbGFzc05hbWUgYXMgY2xhc3N9O1xuICBleHBvcnQgbGV0IHZhcmlhbnQgPSBudWxsO1xuICBleHBvcnQgbGV0IG9wZW4gPSBmYWxzZTtcblxuICBsZXQgZWxlbWVudDtcbiAgbGV0IGRyYXdlcjtcbiAgbGV0IGxpc3RQcm9taXNlUmVzb2x2ZTtcbiAgbGV0IGxpc3RQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBsaXN0UHJvbWlzZVJlc29sdmUgPSByZXNvbHZlKTtcblxuICBzZXRDb250ZXh0KCdTTVVJOmxpc3Q6bmF2JywgdHJ1ZSk7XG4gIHNldENvbnRleHQoJ1NNVUk6bGlzdDppdGVtOm5hdicsIHRydWUpO1xuXG4gIGlmICh2YXJpYW50ID09PSAnZGlzbWlzc2libGUnIHx8IHZhcmlhbnQgPT09ICdtb2RhbCcpIHtcbiAgICBzZXRDb250ZXh0KCdTTVVJOmxpc3Q6aW5zdGFudGlhdGUnLCBmYWxzZSk7XG4gICAgc2V0Q29udGV4dCgnU01VSTpsaXN0OmdldEluc3RhbmNlJywgZ2V0TGlzdEluc3RhbmNlUHJvbWlzZSk7XG4gIH1cblxuICAkOiBpZiAoZHJhd2VyICYmIGRyYXdlci5vcGVuICE9PSBvcGVuKSB7XG4gICAgZHJhd2VyLm9wZW4gPSBvcGVuO1xuICB9XG5cbiAgb25Nb3VudCgoKSA9PiB7XG4gICAgaWYgKHZhcmlhbnQgPT09ICdkaXNtaXNzaWJsZScgfHwgdmFyaWFudCA9PT0gJ21vZGFsJykge1xuICAgICAgZHJhd2VyID0gbmV3IE1EQ0RyYXdlcihlbGVtZW50KTtcbiAgICAgIGxpc3RQcm9taXNlUmVzb2x2ZShkcmF3ZXIubGlzdF8pO1xuICAgIH1cbiAgfSk7XG5cbiAgb25EZXN0cm95KCgpID0+IHtcbiAgICBkcmF3ZXIgJiYgZHJhd2VyLmRlc3Ryb3koKTtcbiAgfSk7XG5cbiAgYWZ0ZXJVcGRhdGUoKCkgPT4ge1xuICAgIGlmIChkcmF3ZXIgJiYgISh2YXJpYW50ID09PSAnZGlzbWlzc2libGUnIHx8IHZhcmlhbnQgPT09ICdtb2RhbCcpKSB7XG4gICAgICBkcmF3ZXIuZGVzdHJveSgpO1xuICAgICAgZHJhd2VyID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSBpZiAoIWRyYXdlciAmJiAodmFyaWFudCA9PT0gJ2Rpc21pc3NpYmxlJyB8fCB2YXJpYW50ID09PSAnbW9kYWwnKSkge1xuICAgICAgZHJhd2VyID0gbmV3IE1EQ0RyYXdlcihlbGVtZW50KTtcbiAgICAgIGxpc3RQcm9taXNlUmVzb2x2ZShkcmF3ZXIubGlzdF8pO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gZ2V0TGlzdEluc3RhbmNlUHJvbWlzZSgpIHtcbiAgICByZXR1cm4gbGlzdFByb21pc2U7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVPcGVuKCkge1xuICAgIG9wZW4gPSBkcmF3ZXIub3BlbjtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRPcGVuKHZhbHVlKSB7XG4gICAgb3BlbiA9IHZhbHVlO1xuICB9XG48L3NjcmlwdD4iLCJpbXBvcnQge2NsYXNzQWRkZXJCdWlsZGVyfSBmcm9tICdAc211aS9jb21tb24vY2xhc3NBZGRlckJ1aWxkZXIuanMnO1xuaW1wb3J0IERpdiBmcm9tICdAc211aS9jb21tb24vRGl2LnN2ZWx0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzQWRkZXJCdWlsZGVyKHtcbiAgY2xhc3M6ICdtZGMtZHJhd2VyLWFwcC1jb250ZW50JyxcbiAgY29tcG9uZW50OiBEaXYsXG4gIGNvbnRleHRzOiB7fVxufSk7IiwiaW1wb3J0IHtjbGFzc0FkZGVyQnVpbGRlcn0gZnJvbSAnQHNtdWkvY29tbW9uL2NsYXNzQWRkZXJCdWlsZGVyLmpzJztcbmltcG9ydCBEaXYgZnJvbSAnQHNtdWkvY29tbW9uL0Rpdi5zdmVsdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzc0FkZGVyQnVpbGRlcih7XG4gIGNsYXNzOiAnbWRjLWRyYXdlcl9fY29udGVudCcsXG4gIGNvbXBvbmVudDogRGl2LFxuICBjb250ZXh0czoge31cbn0pOyIsImltcG9ydCB7Y2xhc3NBZGRlckJ1aWxkZXJ9IGZyb20gJ0BzbXVpL2NvbW1vbi9jbGFzc0FkZGVyQnVpbGRlci5qcyc7XG5pbXBvcnQgRGl2IGZyb20gJ0BzbXVpL2NvbW1vbi9EaXYuc3ZlbHRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3NBZGRlckJ1aWxkZXIoe1xuICBjbGFzczogJ21kYy1kcmF3ZXJfX2hlYWRlcicsXG4gIGNvbXBvbmVudDogRGl2LFxuICBjb250ZXh0czoge31cbn0pOyIsIjxoMVxuICB1c2U6dXNlQWN0aW9ucz17dXNlfVxuICB1c2U6Zm9yd2FyZEV2ZW50c1xuICB7Li4uZXhjbHVkZSgkJHByb3BzLCBbJ3VzZSddKX1cbj48c2xvdD48L3Nsb3Q+PC9oMT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHtjdXJyZW50X2NvbXBvbmVudH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHtmb3J3YXJkRXZlbnRzQnVpbGRlcn0gZnJvbSAnLi9mb3J3YXJkRXZlbnRzLmpzJztcbiAgaW1wb3J0IHtleGNsdWRlfSBmcm9tICcuL2V4Y2x1ZGUuanMnO1xuICBpbXBvcnQge3VzZUFjdGlvbnN9IGZyb20gJy4vdXNlQWN0aW9ucy5qcyc7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGN1cnJlbnRfY29tcG9uZW50KTtcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuPC9zY3JpcHQ+IiwiaW1wb3J0IHtjbGFzc0FkZGVyQnVpbGRlcn0gZnJvbSAnQHNtdWkvY29tbW9uL2NsYXNzQWRkZXJCdWlsZGVyLmpzJztcbmltcG9ydCBIMSBmcm9tICdAc211aS9jb21tb24vSDEuc3ZlbHRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3NBZGRlckJ1aWxkZXIoe1xuICBjbGFzczogJ21kYy1kcmF3ZXJfX3RpdGxlJyxcbiAgY29tcG9uZW50OiBIMSxcbiAgY29udGV4dHM6IHt9XG59KTsiLCI8aDJcbiAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgdXNlOmZvcndhcmRFdmVudHNcbiAgey4uLmV4Y2x1ZGUoJCRwcm9wcywgWyd1c2UnXSl9XG4+PHNsb3Q+PC9zbG90PjwvaDI+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7Y3VycmVudF9jb21wb25lbnR9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7Zm9yd2FyZEV2ZW50c0J1aWxkZXJ9IGZyb20gJy4vZm9yd2FyZEV2ZW50cy5qcyc7XG4gIGltcG9ydCB7ZXhjbHVkZX0gZnJvbSAnLi9leGNsdWRlLmpzJztcbiAgaW1wb3J0IHt1c2VBY3Rpb25zfSBmcm9tICcuL3VzZUFjdGlvbnMuanMnO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihjdXJyZW50X2NvbXBvbmVudCk7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbjwvc2NyaXB0PiIsImltcG9ydCB7Y2xhc3NBZGRlckJ1aWxkZXJ9IGZyb20gJ0BzbXVpL2NvbW1vbi9jbGFzc0FkZGVyQnVpbGRlci5qcyc7XG5pbXBvcnQgSDIgZnJvbSAnQHNtdWkvY29tbW9uL0gyLnN2ZWx0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzQWRkZXJCdWlsZGVyKHtcbiAgY2xhc3M6ICdtZGMtZHJhd2VyX19zdWJ0aXRsZScsXG4gIGNvbXBvbmVudDogSDIsXG4gIGNvbnRleHRzOiB7fVxufSk7IiwiaW1wb3J0IHtjbGFzc0FkZGVyQnVpbGRlcn0gZnJvbSAnQHNtdWkvY29tbW9uL2NsYXNzQWRkZXJCdWlsZGVyLmpzJztcbmltcG9ydCBEaXYgZnJvbSAnQHNtdWkvY29tbW9uL0Rpdi5zdmVsdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzc0FkZGVyQnVpbGRlcih7XG4gIGNsYXNzOiAnbWRjLWRyYXdlci1zY3JpbScsXG4gIGNvbXBvbmVudDogRGl2LFxuICBjb250ZXh0czoge31cbn0pOyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuZXhwb3J0IHZhciBjc3NDbGFzc2VzID0ge1xuICAgIElDT05fQlVUVE9OX09OOiAnbWRjLWljb24tYnV0dG9uLS1vbicsXG4gICAgUk9PVDogJ21kYy1pY29uLWJ1dHRvbicsXG59O1xuZXhwb3J0IHZhciBzdHJpbmdzID0ge1xuICAgIEFSSUFfUFJFU1NFRDogJ2FyaWEtcHJlc3NlZCcsXG4gICAgQ0hBTkdFX0VWRU5UOiAnTURDSWNvbkJ1dHRvblRvZ2dsZTpjaGFuZ2UnLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIE1EQ0ljb25CdXR0b25Ub2dnbGVGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ0ljb25CdXR0b25Ub2dnbGVGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ0ljb25CdXR0b25Ub2dnbGVGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ0ljb25CdXR0b25Ub2dnbGVGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ljb25CdXR0b25Ub2dnbGVGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDSWNvbkJ1dHRvblRvZ2dsZUZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENJY29uQnV0dG9uVG9nZ2xlRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlDaGFuZ2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldEF0dHI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0ljb25CdXR0b25Ub2dnbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoc3RyaW5ncy5BUklBX1BSRVNTRUQsIFwiXCIgKyB0aGlzLmlzT24oKSk7XG4gICAgfTtcbiAgICBNRENJY29uQnV0dG9uVG9nZ2xlRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5Q2hhbmdlKHsgaXNPbjogdGhpcy5pc09uKCkgfSk7XG4gICAgfTtcbiAgICBNRENJY29uQnV0dG9uVG9nZ2xlRm91bmRhdGlvbi5wcm90b3R5cGUuaXNPbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5JQ09OX0JVVFRPTl9PTik7XG4gICAgfTtcbiAgICBNRENJY29uQnV0dG9uVG9nZ2xlRm91bmRhdGlvbi5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24gKGlzT24pIHtcbiAgICAgICAgaWYgKGlzT24gPT09IHZvaWQgMCkgeyBpc09uID0gIXRoaXMuaXNPbigpOyB9XG4gICAgICAgIGlmIChpc09uKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuSUNPTl9CVVRUT05fT04pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLklDT05fQlVUVE9OX09OKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoc3RyaW5ncy5BUklBX1BSRVNTRUQsIFwiXCIgKyBpc09uKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENJY29uQnV0dG9uVG9nZ2xlRm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDSWNvbkJ1dHRvblRvZ2dsZUZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENJY29uQnV0dG9uVG9nZ2xlRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDQ29tcG9uZW50IH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IE1EQ1JpcHBsZSB9IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvY29tcG9uZW50JztcbmltcG9ydCB7IE1EQ0ljb25CdXR0b25Ub2dnbGVGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uJztcbnZhciBzdHJpbmdzID0gTURDSWNvbkJ1dHRvblRvZ2dsZUZvdW5kYXRpb24uc3RyaW5ncztcbnZhciBNRENJY29uQnV0dG9uVG9nZ2xlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ0ljb25CdXR0b25Ub2dnbGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDSWNvbkJ1dHRvblRvZ2dsZSgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnJpcHBsZV8gPSBfdGhpcy5jcmVhdGVSaXBwbGVfKCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTURDSWNvbkJ1dHRvblRvZ2dsZS5hdHRhY2hUbyA9IGZ1bmN0aW9uIChyb290KSB7XG4gICAgICAgIHJldHVybiBuZXcgTURDSWNvbkJ1dHRvblRvZ2dsZShyb290KTtcbiAgICB9O1xuICAgIE1EQ0ljb25CdXR0b25Ub2dnbGUucHJvdG90eXBlLmluaXRpYWxTeW5jV2l0aERPTSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5oYW5kbGVDbGlja18gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVDbGljaygpOyB9O1xuICAgICAgICB0aGlzLmxpc3RlbignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrXyk7XG4gICAgfTtcbiAgICBNRENJY29uQnV0dG9uVG9nZ2xlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnVubGlzdGVuKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2tfKTtcbiAgICAgICAgdGhpcy5yaXBwbGVfLmRlc3Ryb3koKTtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBNRENJY29uQnV0dG9uVG9nZ2xlLnByb3RvdHlwZS5nZXREZWZhdWx0Rm91bmRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gRE8gTk9UIElOTElORSB0aGlzIHZhcmlhYmxlLiBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgZm91bmRhdGlvbnMgdGFrZSBhIFBhcnRpYWw8TURDRm9vQWRhcHRlcj4uXG4gICAgICAgIC8vIFRvIGVuc3VyZSB3ZSBkb24ndCBhY2NpZGVudGFsbHkgb21pdCBhbnkgbWV0aG9kcywgd2UgbmVlZCBhIHNlcGFyYXRlLCBzdHJvbmdseSB0eXBlZCBhZGFwdGVyIHZhcmlhYmxlLlxuICAgICAgICB2YXIgYWRhcHRlciA9IHtcbiAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290Xy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICBoYXNDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICBub3RpZnlDaGFuZ2U6IGZ1bmN0aW9uIChldnREYXRhKSB7IHJldHVybiBfdGhpcy5lbWl0KHN0cmluZ3MuQ0hBTkdFX0VWRU5ULCBldnREYXRhKTsgfSxcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICBzZXRBdHRyOiBmdW5jdGlvbiAoYXR0ck5hbWUsIGF0dHJWYWx1ZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyVmFsdWUpOyB9LFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IE1EQ0ljb25CdXR0b25Ub2dnbGVGb3VuZGF0aW9uKGFkYXB0ZXIpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ljb25CdXR0b25Ub2dnbGUucHJvdG90eXBlLCBcInJpcHBsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmlwcGxlXztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ljb25CdXR0b25Ub2dnbGUucHJvdG90eXBlLCBcIm9uXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uXy5pc09uKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGlzT24pIHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRhdGlvbl8udG9nZ2xlKGlzT24pO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENJY29uQnV0dG9uVG9nZ2xlLnByb3RvdHlwZS5jcmVhdGVSaXBwbGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmlwcGxlID0gbmV3IE1EQ1JpcHBsZSh0aGlzLnJvb3RfKTtcbiAgICAgICAgcmlwcGxlLnVuYm91bmRlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiByaXBwbGU7XG4gICAgfTtcbiAgICByZXR1cm4gTURDSWNvbkJ1dHRvblRvZ2dsZTtcbn0oTURDQ29tcG9uZW50KSk7XG5leHBvcnQgeyBNRENJY29uQnV0dG9uVG9nZ2xlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnQuanMubWFwIiwieyNpZiBocmVmfVxuICA8YVxuICAgIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgICB1c2U6dXNlQWN0aW9ucz17dXNlfVxuICAgIHVzZTpmb3J3YXJkRXZlbnRzXG4gICAgY2xhc3M9XCJcbiAgICAgIG1kYy1pY29uLWJ1dHRvblxuICAgICAge2NsYXNzTmFtZX1cbiAgICAgIHtwcmVzc2VkID8gJ21kYy1pY29uLWJ1dHRvbi0tb24nIDogJyd9XG4gICAgICB7Y29udGV4dCA9PT0gJ2NhcmQ6YWN0aW9uJyA/ICdtZGMtY2FyZF9fYWN0aW9uJyA6ICcnfVxuICAgICAge2NvbnRleHQgPT09ICdjYXJkOmFjdGlvbicgPyAnbWRjLWNhcmRfX2FjdGlvbi0taWNvbicgOiAnJ31cbiAgICAgIHtjb250ZXh0ID09PSAndG9wLWFwcC1iYXI6bmF2aWdhdGlvbicgPyAnbWRjLXRvcC1hcHAtYmFyX19uYXZpZ2F0aW9uLWljb24nIDogJyd9XG4gICAgICB7Y29udGV4dCA9PT0gJ3RvcC1hcHAtYmFyOmFjdGlvbicgPyAnbWRjLXRvcC1hcHAtYmFyX19hY3Rpb24taXRlbScgOiAnJ31cbiAgICAgIHtjb250ZXh0ID09PSAnc25hY2tiYXInID8gJ21kYy1zbmFja2Jhcl9fZGlzbWlzcycgOiAnJ31cbiAgICBcIlxuICAgIHVzZTpSaXBwbGU9e1tyaXBwbGUgJiYgIXRvZ2dsZSwge3VuYm91bmRlZDogdHJ1ZSwgY29sb3J9XX1cbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGFyaWEtcHJlc3NlZD17cHJlc3NlZH1cbiAgICB7aHJlZn1cbiAgICBvbjpNRENJY29uQnV0dG9uVG9nZ2xlOmNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgIHsuLi5wcm9wc31cbiAgPjxzbG90Pjwvc2xvdD48L2E+XG57OmVsc2V9XG4gIDxidXR0b25cbiAgICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gICAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgICB1c2U6Zm9yd2FyZEV2ZW50c1xuICAgIGNsYXNzPVwiXG4gICAgICBtZGMtaWNvbi1idXR0b25cbiAgICAgIHtjbGFzc05hbWV9XG4gICAgICB7cHJlc3NlZCA/ICdtZGMtaWNvbi1idXR0b24tLW9uJyA6ICcnfVxuICAgICAge2NvbnRleHQgPT09ICdjYXJkOmFjdGlvbicgPyAnbWRjLWNhcmRfX2FjdGlvbicgOiAnJ31cbiAgICAgIHtjb250ZXh0ID09PSAnY2FyZDphY3Rpb24nID8gJ21kYy1jYXJkX19hY3Rpb24tLWljb24nIDogJyd9XG4gICAgICB7Y29udGV4dCA9PT0gJ3RvcC1hcHAtYmFyOm5hdmlnYXRpb24nID8gJ21kYy10b3AtYXBwLWJhcl9fbmF2aWdhdGlvbi1pY29uJyA6ICcnfVxuICAgICAge2NvbnRleHQgPT09ICd0b3AtYXBwLWJhcjphY3Rpb24nID8gJ21kYy10b3AtYXBwLWJhcl9fYWN0aW9uLWl0ZW0nIDogJyd9XG4gICAgICB7Y29udGV4dCA9PT0gJ3NuYWNrYmFyJyA/ICdtZGMtc25hY2tiYXJfX2Rpc21pc3MnIDogJyd9XG4gICAgXCJcbiAgICB1c2U6UmlwcGxlPXtbcmlwcGxlICYmICF0b2dnbGUsIHt1bmJvdW5kZWQ6IHRydWUsIGNvbG9yfV19XG4gICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICBhcmlhLXByZXNzZWQ9e3ByZXNzZWR9XG4gICAgb246TURDSWNvbkJ1dHRvblRvZ2dsZTpjaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICB7Li4ucHJvcHN9XG4gID48c2xvdD48L3Nsb3Q+PC9idXR0b24+XG57L2lmfVxuXG48c2NyaXB0PlxuICBpbXBvcnQge01EQ0ljb25CdXR0b25Ub2dnbGV9IGZyb20gJ0BtYXRlcmlhbC9pY29uLWJ1dHRvbic7XG4gIGltcG9ydCB7b25EZXN0cm95LCBnZXRDb250ZXh0LCBzZXRDb250ZXh0fSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQge2N1cnJlbnRfY29tcG9uZW50fSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQge2ZvcndhcmRFdmVudHNCdWlsZGVyfSBmcm9tICdAc211aS9jb21tb24vZm9yd2FyZEV2ZW50cy5qcyc7XG4gIGltcG9ydCB7ZXhjbHVkZX0gZnJvbSAnQHNtdWkvY29tbW9uL2V4Y2x1ZGUuanMnO1xuICBpbXBvcnQge3VzZUFjdGlvbnN9IGZyb20gJ0BzbXVpL2NvbW1vbi91c2VBY3Rpb25zLmpzJztcbiAgaW1wb3J0IFJpcHBsZSBmcm9tICdAc211aS9yaXBwbGUvYmFyZS5qcyc7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGN1cnJlbnRfY29tcG9uZW50LCBbJ01EQ0ljb25CdXR0b25Ub2dnbGU6Y2hhbmdlJ10pO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG4gIGxldCBjbGFzc05hbWUgPSAnJztcbiAgZXhwb3J0IHtjbGFzc05hbWUgYXMgY2xhc3N9O1xuICBleHBvcnQgbGV0IHJpcHBsZSA9IHRydWU7XG4gIGV4cG9ydCBsZXQgY29sb3IgPSBudWxsO1xuICBleHBvcnQgbGV0IHRvZ2dsZSA9IGZhbHNlO1xuICBleHBvcnQgbGV0IHByZXNzZWQgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBocmVmID0gbnVsbDtcblxuICAkOiBwcm9wcyA9IGV4Y2x1ZGUoJCRwcm9wcywgWyd1c2UnLCAnY2xhc3MnLCAncmlwcGxlJywgJ2NvbG9yJywgJ3RvZ2dsZScsICdwcmVzc2VkJywgJ2hyZWYnXSk7XG5cbiAgbGV0IGVsZW1lbnQ7XG4gIGxldCB0b2dnbGVCdXR0b247XG4gIGxldCBjb250ZXh0ID0gZ2V0Q29udGV4dCgnU01VSTppY29uLWJ1dHRvbjpjb250ZXh0Jyk7XG5cbiAgc2V0Q29udGV4dCgnU01VSTppY29uOmNvbnRleHQnLCAnaWNvbi1idXR0b24nKTtcblxuICBsZXQgb2xkVG9nZ2xlID0gbnVsbDtcbiAgJDogaWYgKGVsZW1lbnQgJiYgdG9nZ2xlICE9PSBvbGRUb2dnbGUpIHtcbiAgICBpZiAodG9nZ2xlKSB7XG4gICAgICB0b2dnbGVCdXR0b24gPSBuZXcgTURDSWNvbkJ1dHRvblRvZ2dsZShlbGVtZW50KTtcbiAgICAgIGlmICghcmlwcGxlKSB7XG4gICAgICAgIHRvZ2dsZUJ1dHRvbi5yaXBwbGUuZGVzdHJveSgpO1xuICAgICAgfVxuICAgICAgdG9nZ2xlQnV0dG9uLm9uID0gcHJlc3NlZDtcbiAgICB9IGVsc2UgaWYgKG9sZFRvZ2dsZSkge1xuICAgICAgdG9nZ2xlQnV0dG9uICYmIHRvZ2dsZUJ1dHRvbi5kZXN0cm95KCk7XG4gICAgICB0b2dnbGVCdXR0b24gPSBudWxsO1xuICAgIH1cbiAgICBvbGRUb2dnbGUgPSB0b2dnbGU7XG4gIH1cblxuICAkOiBpZiAodG9nZ2xlQnV0dG9uICYmIHRvZ2dsZUJ1dHRvbi5vbiAhPT0gcHJlc3NlZCkge1xuICAgIHRvZ2dsZUJ1dHRvbi5vbiA9IHByZXNzZWQ7XG4gIH1cblxuICBvbkRlc3Ryb3koKCkgPT4ge1xuICAgIHRvZ2dsZUJ1dHRvbiAmJiB0b2dnbGVCdXR0b24uZGVzdHJveSgpO1xuICB9KTtcblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIHByZXNzZWQgPSBlLmRldGFpbC5pc09uO1xuICB9XG48L3NjcmlwdD4iLCI8YVxuICB1c2U6dXNlQWN0aW9ucz17dXNlfVxuICB1c2U6Zm9yd2FyZEV2ZW50c1xuICB7aHJlZn1cbiAgey4uLmV4Y2x1ZGUoJCRwcm9wcywgWyd1c2UnLCAnaHJlZiddKX1cbj48c2xvdD48L3Nsb3Q+PC9hPlxuXG48c2NyaXB0PlxuICBpbXBvcnQge2N1cnJlbnRfY29tcG9uZW50fSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQge2ZvcndhcmRFdmVudHNCdWlsZGVyfSBmcm9tICcuL2ZvcndhcmRFdmVudHMuanMnO1xuICBpbXBvcnQge2V4Y2x1ZGV9IGZyb20gJy4vZXhjbHVkZS5qcyc7XG4gIGltcG9ydCB7dXNlQWN0aW9uc30gZnJvbSAnLi91c2VBY3Rpb25zLmpzJztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoY3VycmVudF9jb21wb25lbnQpO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG4gIGV4cG9ydCBsZXQgaHJlZiA9ICdqYXZhc2NyaXB0OnZvaWQoMCk7Jztcbjwvc2NyaXB0PiIsIjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gXCJzdmVsdGVcIjtcclxuICBpbXBvcnQgeyBzdG9yZXMgfSBmcm9tIFwiQHNhcHBlci9hcHBcIjtcclxuICAvLyAgIGltcG9ydCB7bWRpVHdpdHRlciwgbWRpR2l0aHViQ2lyY2xlfSBmcm9tICdAbWRpL2pzJztcclxuXHJcbiAgICBpbXBvcnQgJy4vX2FwcC5zY3NzJztcclxuXHJcbiAgaW1wb3J0IFRvcEFwcEJhciwgeyBSb3csIFNlY3Rpb24sIFRpdGxlIH0gZnJvbSBcIkBzbXVpL3RvcC1hcHAtYmFyXCI7XHJcbiAgaW1wb3J0IERyYXdlciwgeyBDb250ZW50LCBTY3JpbSwgQXBwQ29udGVudCB9IGZyb20gXCJAc211aS9kcmF3ZXJcIjtcclxuICBpbXBvcnQgQnV0dG9uIGZyb20gXCJAc211aS9idXR0b25cIjtcclxuICBpbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQHNtdWkvaWNvbi1idXR0b25cIjtcclxuICBpbXBvcnQgTGlzdCwgeyBJdGVtLCBUZXh0IH0gZnJvbSBcIkBzbXVpL2xpc3RcIjtcclxuICBpbXBvcnQgeyBMYWJlbCwgSWNvbiB9IGZyb20gXCJAc211aS9jb21tb25cIjtcclxuICBpbXBvcnQgQSBmcm9tIFwiQHNtdWkvY29tbW9uL0Euc3ZlbHRlXCI7XHJcblxyXG4gIGNvbnN0IHsgcGFnZSB9ID0gc3RvcmVzKCk7XHJcbiAgY29uc3QgaWZyYW1lID0gJHBhZ2UucGF0aC5zdGFydHNXaXRoKFwiL2RlbW8vdG9wLWFwcC1iYXItaWZyYW1lXCIpO1xyXG5cclxuICBsZXQgbWFpbkNvbnRlbnQ7XHJcbiAgbGV0IG1pbmlXaW5kb3cgPSBmYWxzZTtcclxuICBsZXQgZHJhd2VyT3BlbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdCBzZWN0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJCdXR0b25zXCIsXHJcbiAgICAgIHJvdXRlOiBcIi9Db21wb25lbnRQYWdlcy9CdXR0b25QYWdlXCIsXHJcbiAgICAgIGluZGVudDogMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJDaGVja2JveFwiLFxyXG4gICAgICByb3V0ZTogXCIvQ29tcG9uZW50UGFnZXMvQ2hlY2tib3hQYWdlXCIsXHJcbiAgICAgIGluZGVudDogMFxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIG9uTW91bnQoc2V0TWluaVdpbmRvdyk7XHJcblxyXG4gIGZ1bmN0aW9uIHBpY2tTZWN0aW9uKHNlY3Rpb24pIHtcclxuICAgIGRyYXdlck9wZW4gPSBmYWxzZTtcclxuICAgIG1haW5Db250ZW50LnNjcm9sbFRvcCA9IDA7XHJcblxyXG4gICAgLy8gU3ZlbHRlL1NhcHBlciBpcyBub3QgdXBkYXRlZCB0aGUgY29tcG9uZW50cyBjb3JyZWN0bHksIHNvIEkgbmVlZCB0aGlzLlxyXG4gICAgc2VjdGlvbnMuZm9yRWFjaChzZWN0aW9uID0+IHNlY3Rpb24uY29tcG9uZW50LiRzZXQoeyBhY3RpdmF0ZWQ6IGZhbHNlIH0pKTtcclxuICAgIHNlY3Rpb24uY29tcG9uZW50LiRzZXQoeyBhY3RpdmF0ZWQ6IHRydWUgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRNaW5pV2luZG93KCkge1xyXG4gICAgbWluaVdpbmRvdyA9IHdpbmRvdy5pbm5lcldpZHRoIDwgNzIwO1xyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3ZlbHRlOndpbmRvdyBvbjpyZXNpemU9e3NldE1pbmlXaW5kb3d9IC8+XHJcbnsjaWYgaWZyYW1lfVxyXG4gIDxzbG90IC8+XHJcbns6ZWxzZX1cclxuICA8VG9wQXBwQmFyIHZhcmlhbnQ9XCJzdGF0aWNcIiBjbGFzcz1cImRlbW8tdG9wLWFwcC1iYXJcIj5cclxuICAgIDxSb3c+XHJcbiAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgIHsjaWYgbWluaVdpbmRvd31cclxuICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIlxyXG4gICAgICAgICAgICBvbjpjbGljaz17KCkgPT4gKGRyYXdlck9wZW4gPSAhZHJhd2VyT3Blbil9PlxyXG4gICAgICAgICAgICBtZW51XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgey9pZn1cclxuICAgICAgICA8VGl0bGVcclxuICAgICAgICAgIGNvbXBvbmVudD17QX1cclxuICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICAgIGNsYXNzPVwibWRjLXRoZW1lLS1wcmltYXJ5XCJcclxuICAgICAgICAgIHN0eWxlPXttaW5pV2luZG93ID8gJ3BhZGRpbmctbGVmdDogMDsnIDogJyd9PlxyXG4gICAgICAgICAgU3ZlbHRlIE1hdGVyaWFsIFVJXHJcbiAgICAgICAgPC9UaXRsZT5cclxuICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICA8IS0tIDxTZWN0aW9uIGFsaWduPVwiZW5kXCIgdG9vbGJhcj5cclxuICAgICAgICA8SWNvbkJ1dHRvbiBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9TY2lBY3RpdmVcIj5cclxuICAgICAgICAgIDxJY29uPlxyXG4gICAgICAgICAgICA8c3ZnIHN0eWxlPVwid2lkdGg6MjRweDtoZWlnaHQ6MjRweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAwMDAwMFwiIGQ9XCJ7bWRpVHdpdHRlcn1cIiAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvSWNvbj5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPEljb25CdXR0b24gaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ocGVycmluL3N2ZWx0ZS1tYXRlcmlhbC11aVwiPlxyXG4gICAgICAgICAgPEljb24+XHJcbiAgICAgICAgICAgIDxzdmcgc3R5bGU9XCJ3aWR0aDoyNHB4O2hlaWdodDoyNHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDAwMDAwXCIgZD1cInttZGlHaXRodWJDaXJjbGV9XCIgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L0ljb24+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICA8L1NlY3Rpb24+IC0tPlxyXG4gICAgPC9Sb3c+XHJcbiAgPC9Ub3BBcHBCYXI+XHJcbiAgPGRpdiBjbGFzcz1cImRyYXdlci1jb250YWluZXJcIj5cclxuICAgIDxEcmF3ZXJcclxuICAgICAgdmFyaWFudD17bWluaVdpbmRvdyA/ICdtb2RhbCcgOiBudWxsfVxyXG4gICAgICBiaW5kOm9wZW49e2RyYXdlck9wZW59XHJcbiAgICAgIGNsYXNzPVwiZGVtby1kcmF3ZXIgbWRjLXRoZW1lLS1zZWNvbmRhcnktYmcge21pbmlXaW5kb3cgPyAnZGVtby1kcmF3ZXItYWRqdXN0JyA6ICcnfVwiPlxyXG4gICAgICA8Q29udGVudD5cclxuICAgICAgICA8TGlzdD5cclxuICAgICAgICAgIHsjZWFjaCBzZWN0aW9ucyBhcyBzZWN0aW9uIChzZWN0aW9uLm5hbWUpfVxyXG4gICAgICAgICAgICA8SXRlbVxyXG4gICAgICAgICAgICAgIGJpbmQ6dGhpcz17c2VjdGlvbi5jb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgaHJlZj17J3JvdXRlJyBpbiBzZWN0aW9uID8gc2VjdGlvbi5yb3V0ZSA6IHNlY3Rpb24uc2hvcnRjdXR9XHJcbiAgICAgICAgICAgICAgb246Y2xpY2s9eygpID0+IHBpY2tTZWN0aW9uKHNlY3Rpb24pfVxyXG4gICAgICAgICAgICAgIGFjdGl2YXRlZD17J3JvdXRlJyBpbiBzZWN0aW9uICYmIHNlY3Rpb24ucm91dGUgPT09ICRwYWdlLnBhdGh9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e3NlY3Rpb24ubmFtZX1cclxuICAgICAgICAgICAgICBzdHlsZT17c2VjdGlvbi5pbmRlbnQgPyAnbWFyZ2luLWxlZnQ6ICcgKyBzZWN0aW9uLmluZGVudCAqIDI1ICsgJ3B4OycgOiAnJ30+XHJcbiAgICAgICAgICAgICAgPFRleHQgY2xhc3M9XCJtZGMtdGhlbWUtLW9uLXNlY29uZGFyeVwiPntzZWN0aW9uLm5hbWV9PC9UZXh0PlxyXG4gICAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICB7L2VhY2h9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L0NvbnRlbnQ+XHJcbiAgICA8L0RyYXdlcj5cclxuXHJcbiAgICB7I2lmIG1pbmlXaW5kb3d9XHJcbiAgICAgIDxTY3JpbSAvPlxyXG4gICAgey9pZn1cclxuICAgIDxBcHBDb250ZW50IGNsYXNzPVwiZGVtby1hcHAtY29udGVudFwiPlxyXG4gICAgICA8bWFpbiBjbGFzcz1cImRlbW8tbWFpbi1jb250ZW50XCIgYmluZDp0aGlzPXttYWluQ29udGVudH0+XHJcbiAgICAgICAgPHNsb3QgLz5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9BcHBDb250ZW50PlxyXG4gIDwvZGl2PlxyXG57L2lmfVxyXG4iLCI8c2NyaXB0PlxuXHRleHBvcnQgbGV0IGVycm9yO1xuXHRleHBvcnQgbGV0IHN0YXR1cztcbjwvc2NyaXB0PlxuXG48aDE+e3N0YXR1c308L2gxPlxuXG48cD57ZXJyb3IubWVzc2FnZX08L3A+XG5cbnsjaWYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCd9XG5cdDxwcmU+e2Vycm9yLnN0YWNrfTwvcHJlPlxuey9pZn0iLCI8IS0tIFRoaXMgZmlsZSBpcyBnZW5lcmF0ZWQgYnkgU2FwcGVyIOKAlCBkbyBub3QgZWRpdCBpdCEgLS0+XG48c2NyaXB0PlxuXHRpbXBvcnQgeyBzZXRDb250ZXh0IH0gZnJvbSAnc3ZlbHRlJztcblx0aW1wb3J0IHsgQ09OVEVYVF9LRVkgfSBmcm9tICcuL3NoYXJlZCc7XG5cdGltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vcm91dGVzL19sYXlvdXQuc3ZlbHRlJztcblx0aW1wb3J0IEVycm9yIGZyb20gJy4vZXJyb3Iuc3ZlbHRlJztcblxuXHRleHBvcnQgbGV0IHN0b3Jlcztcblx0ZXhwb3J0IGxldCBlcnJvcjtcblx0ZXhwb3J0IGxldCBzdGF0dXM7XG5cdGV4cG9ydCBsZXQgc2VnbWVudHM7XG5cdGV4cG9ydCBsZXQgbGV2ZWwwO1xuXHRleHBvcnQgbGV0IGxldmVsMSA9IG51bGw7XG5cblx0c2V0Q29udGV4dChDT05URVhUX0tFWSwgc3RvcmVzKTtcbjwvc2NyaXB0PlxuXG48TGF5b3V0IHNlZ21lbnQ9XCJ7c2VnbWVudHNbMF19XCIgey4uLmxldmVsMC5wcm9wc30+XG5cdHsjaWYgZXJyb3J9XG5cdFx0PEVycm9yIHtlcnJvcn0ge3N0YXR1c30vPlxuXHR7OmVsc2V9XG5cdFx0PHN2ZWx0ZTpjb21wb25lbnQgdGhpcz1cIntsZXZlbDEuY29tcG9uZW50fVwiIHsuLi5sZXZlbDEucHJvcHN9Lz5cblx0ey9pZn1cbjwvTGF5b3V0PiIsIi8vIFRoaXMgZmlsZSBpcyBnZW5lcmF0ZWQgYnkgU2FwcGVyIOKAlCBkbyBub3QgZWRpdCBpdCFcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUm9vdCB9IGZyb20gJy4uLy4uLy4uL3JvdXRlcy9fbGF5b3V0LnN2ZWx0ZSc7XG5leHBvcnQgeyBwcmVsb2FkIGFzIHJvb3RfcHJlbG9hZCB9IGZyb20gJy4vc2hhcmVkJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2Vycm9yLnN2ZWx0ZSc7XG5cbmV4cG9ydCBjb25zdCBpZ25vcmUgPSBbXTtcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudHMgPSBbXG5cdHtcblx0XHRqczogKCkgPT4gaW1wb3J0KFwiLi4vLi4vLi4vcm91dGVzL2luZGV4LnN2ZWx0ZVwiKSxcblx0XHRjc3M6IFwiX19TQVBQRVJfQ1NTX1BMQUNFSE9MREVSOmluZGV4LnN2ZWx0ZV9fXCJcblx0fSxcblx0e1xuXHRcdGpzOiAoKSA9PiBpbXBvcnQoXCIuLi8uLi8uLi9yb3V0ZXMvQ29tcG9uZW50UGFnZXMvQ2hlY2tib3hQYWdlLnN2ZWx0ZVwiKSxcblx0XHRjc3M6IFwiX19TQVBQRVJfQ1NTX1BMQUNFSE9MREVSOkNvbXBvbmVudFBhZ2VzL0NoZWNrYm94UGFnZS5zdmVsdGVfX1wiXG5cdH0sXG5cdHtcblx0XHRqczogKCkgPT4gaW1wb3J0KFwiLi4vLi4vLi4vcm91dGVzL0NvbXBvbmVudFBhZ2VzL0J1dHRvblBhZ2Uuc3ZlbHRlXCIpLFxuXHRcdGNzczogXCJfX1NBUFBFUl9DU1NfUExBQ0VIT0xERVI6Q29tcG9uZW50UGFnZXMvQnV0dG9uUGFnZS5zdmVsdGVfX1wiXG5cdH0sXG5cdHtcblx0XHRqczogKCkgPT4gaW1wb3J0KFwiLi4vLi4vLi4vcm91dGVzL0NvbXBvbmVudFBhZ2VzL0V4YW1wbGUuc3ZlbHRlXCIpLFxuXHRcdGNzczogXCJfX1NBUFBFUl9DU1NfUExBQ0VIT0xERVI6Q29tcG9uZW50UGFnZXMvRXhhbXBsZS5zdmVsdGVfX1wiXG5cdH0sXG5cdHtcblx0XHRqczogKCkgPT4gaW1wb3J0KFwiLi4vLi4vLi4vcm91dGVzL0NvbXBvbmVudFBhZ2VzL1BhZ2Uuc3ZlbHRlXCIpLFxuXHRcdGNzczogXCJfX1NBUFBFUl9DU1NfUExBQ0VIT0xERVI6Q29tcG9uZW50UGFnZXMvUGFnZS5zdmVsdGVfX1wiXG5cdH1cbl07XG5cbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbXG5cdHtcblx0XHQvLyBpbmRleC5zdmVsdGVcblx0XHRwYXR0ZXJuOiAvXlxcLyQvLFxuXHRcdHBhcnRzOiBbXG5cdFx0XHR7IGk6IDAgfVxuXHRcdF1cblx0fSxcblxuXHR7XG5cdFx0Ly8gQ29tcG9uZW50UGFnZXMvQ2hlY2tib3hQYWdlLnN2ZWx0ZVxuXHRcdHBhdHRlcm46IC9eXFwvQ29tcG9uZW50UGFnZXNcXC9DaGVja2JveFBhZ2VcXC8/JC8sXG5cdFx0cGFydHM6IFtcblx0XHRcdG51bGwsXG5cdFx0XHR7IGk6IDEgfVxuXHRcdF1cblx0fSxcblxuXHR7XG5cdFx0Ly8gQ29tcG9uZW50UGFnZXMvQnV0dG9uUGFnZS5zdmVsdGVcblx0XHRwYXR0ZXJuOiAvXlxcL0NvbXBvbmVudFBhZ2VzXFwvQnV0dG9uUGFnZVxcLz8kLyxcblx0XHRwYXJ0czogW1xuXHRcdFx0bnVsbCxcblx0XHRcdHsgaTogMiB9XG5cdFx0XVxuXHR9LFxuXG5cdHtcblx0XHQvLyBDb21wb25lbnRQYWdlcy9FeGFtcGxlLnN2ZWx0ZVxuXHRcdHBhdHRlcm46IC9eXFwvQ29tcG9uZW50UGFnZXNcXC9FeGFtcGxlXFwvPyQvLFxuXHRcdHBhcnRzOiBbXG5cdFx0XHRudWxsLFxuXHRcdFx0eyBpOiAzIH1cblx0XHRdXG5cdH0sXG5cblx0e1xuXHRcdC8vIENvbXBvbmVudFBhZ2VzL1BhZ2Uuc3ZlbHRlXG5cdFx0cGF0dGVybjogL15cXC9Db21wb25lbnRQYWdlc1xcL1BhZ2VcXC8/JC8sXG5cdFx0cGFydHM6IFtcblx0XHRcdG51bGwsXG5cdFx0XHR7IGk6IDQgfVxuXHRcdF1cblx0fVxuXTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG5cdGltcG9ydChcIkM6L1VzZXJzL05hdmVlbi9PbmVEcml2ZS9KYXZhc2NyaXB0IExlYXJuaW5nL3NtdWktdGhlbWUvbm9kZV9tb2R1bGVzL3NhcHBlci9zYXBwZXItZGV2LWNsaWVudC5qc1wiKS50aGVuKGNsaWVudCA9PiB7XG5cdFx0Y2xpZW50LmNvbm5lY3QoMTAwMDApO1xuXHR9KTtcbn0iLCJpbXBvcnQgeyBnZXRDb250ZXh0IH0gZnJvbSAnc3ZlbHRlJztcbmltcG9ydCB7IENPTlRFWFRfS0VZIH0gZnJvbSAnLi9pbnRlcm5hbC9zaGFyZWQnO1xuaW1wb3J0IHsgd3JpdGFibGUgfSBmcm9tICdzdmVsdGUvc3RvcmUnO1xuaW1wb3J0IEFwcCBmcm9tICcuL2ludGVybmFsL0FwcC5zdmVsdGUnO1xuaW1wb3J0IHsgaWdub3JlLCByb3V0ZXMsIHJvb3RfcHJlbG9hZCwgY29tcG9uZW50cywgRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2ludGVybmFsL21hbmlmZXN0LWNsaWVudCc7XG5cbmZ1bmN0aW9uIGdvdG8oaHJlZiwgb3B0cyA9IHsgcmVwbGFjZVN0YXRlOiBmYWxzZSB9KSB7XG5cdGNvbnN0IHRhcmdldCA9IHNlbGVjdF90YXJnZXQobmV3IFVSTChocmVmLCBkb2N1bWVudC5iYXNlVVJJKSk7XG5cblx0aWYgKHRhcmdldCkge1xuXHRcdF9oaXN0b3J5W29wdHMucmVwbGFjZVN0YXRlID8gJ3JlcGxhY2VTdGF0ZScgOiAncHVzaFN0YXRlJ10oeyBpZDogY2lkIH0sICcnLCBocmVmKTtcblx0XHRyZXR1cm4gbmF2aWdhdGUodGFyZ2V0LCBudWxsKS50aGVuKCgpID0+IHt9KTtcblx0fVxuXG5cdGxvY2F0aW9uLmhyZWYgPSBocmVmO1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZiA9PiB7fSk7IC8vIG5ldmVyIHJlc29sdmVzXG59XG5cbmNvbnN0IGluaXRpYWxfZGF0YSA9IHR5cGVvZiBfX1NBUFBFUl9fICE9PSAndW5kZWZpbmVkJyAmJiBfX1NBUFBFUl9fO1xuXG5sZXQgcmVhZHkgPSBmYWxzZTtcbmxldCByb290X2NvbXBvbmVudDtcbmxldCBjdXJyZW50X3Rva2VuO1xubGV0IHJvb3RfcHJlbG9hZGVkO1xubGV0IGN1cnJlbnRfYnJhbmNoID0gW107XG5sZXQgY3VycmVudF9xdWVyeSA9ICd7fSc7XG5cbmNvbnN0IHN0b3JlcyA9IHtcblx0cGFnZTogd3JpdGFibGUoe30pLFxuXHRwcmVsb2FkaW5nOiB3cml0YWJsZShudWxsKSxcblx0c2Vzc2lvbjogd3JpdGFibGUoaW5pdGlhbF9kYXRhICYmIGluaXRpYWxfZGF0YS5zZXNzaW9uKVxufTtcblxubGV0ICRzZXNzaW9uO1xubGV0IHNlc3Npb25fZGlydHk7XG5cbnN0b3Jlcy5zZXNzaW9uLnN1YnNjcmliZShhc3luYyB2YWx1ZSA9PiB7XG5cdCRzZXNzaW9uID0gdmFsdWU7XG5cblx0aWYgKCFyZWFkeSkgcmV0dXJuO1xuXHRzZXNzaW9uX2RpcnR5ID0gdHJ1ZTtcblxuXHRjb25zdCB0YXJnZXQgPSBzZWxlY3RfdGFyZ2V0KG5ldyBVUkwobG9jYXRpb24uaHJlZikpO1xuXG5cdGNvbnN0IHRva2VuID0gY3VycmVudF90b2tlbiA9IHt9O1xuXHRjb25zdCB7IHJlZGlyZWN0LCBwcm9wcywgYnJhbmNoIH0gPSBhd2FpdCBoeWRyYXRlX3RhcmdldCh0YXJnZXQpO1xuXHRpZiAodG9rZW4gIT09IGN1cnJlbnRfdG9rZW4pIHJldHVybjsgLy8gYSBzZWNvbmRhcnkgbmF2aWdhdGlvbiBoYXBwZW5lZCB3aGlsZSB3ZSB3ZXJlIGxvYWRpbmdcblxuXHRhd2FpdCByZW5kZXIocmVkaXJlY3QsIGJyYW5jaCwgcHJvcHMsIHRhcmdldC5wYWdlKTtcbn0pO1xuXG5sZXQgcHJlZmV0Y2hpbmdcblxuXG4gPSBudWxsO1xuZnVuY3Rpb24gc2V0X3ByZWZldGNoaW5nKGhyZWYsIHByb21pc2UpIHtcblx0cHJlZmV0Y2hpbmcgPSB7IGhyZWYsIHByb21pc2UgfTtcbn1cblxubGV0IHRhcmdldDtcbmZ1bmN0aW9uIHNldF90YXJnZXQoZWxlbWVudCkge1xuXHR0YXJnZXQgPSBlbGVtZW50O1xufVxuXG5sZXQgdWlkID0gMTtcbmZ1bmN0aW9uIHNldF91aWQobikge1xuXHR1aWQgPSBuO1xufVxuXG5sZXQgY2lkO1xuZnVuY3Rpb24gc2V0X2NpZChuKSB7XG5cdGNpZCA9IG47XG59XG5cbmNvbnN0IF9oaXN0b3J5ID0gdHlwZW9mIGhpc3RvcnkgIT09ICd1bmRlZmluZWQnID8gaGlzdG9yeSA6IHtcblx0cHVzaFN0YXRlOiAoc3RhdGUsIHRpdGxlLCBocmVmKSA9PiB7fSxcblx0cmVwbGFjZVN0YXRlOiAoc3RhdGUsIHRpdGxlLCBocmVmKSA9PiB7fSxcblx0c2Nyb2xsUmVzdG9yYXRpb246ICcnXG59O1xuXG5jb25zdCBzY3JvbGxfaGlzdG9yeSA9IHt9O1xuXG5mdW5jdGlvbiBleHRyYWN0X3F1ZXJ5KHNlYXJjaCkge1xuXHRjb25zdCBxdWVyeSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdGlmIChzZWFyY2gubGVuZ3RoID4gMCkge1xuXHRcdHNlYXJjaC5zbGljZSgxKS5zcGxpdCgnJicpLmZvckVhY2goc2VhcmNoUGFyYW0gPT4ge1xuXHRcdFx0bGV0IFssIGtleSwgdmFsdWUgPSAnJ10gPSAvKFtePV0qKSg/Oj0oLiopKT8vLmV4ZWMoZGVjb2RlVVJJQ29tcG9uZW50KHNlYXJjaFBhcmFtLnJlcGxhY2UoL1xcKy9nLCAnICcpKSk7XG5cdFx0XHRpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICdzdHJpbmcnKSBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV1dO1xuXHRcdFx0aWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAnb2JqZWN0JykgKHF1ZXJ5W2tleV0gKS5wdXNoKHZhbHVlKTtcblx0XHRcdGVsc2UgcXVlcnlba2V5XSA9IHZhbHVlO1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiBxdWVyeTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0X3RhcmdldCh1cmwpIHtcblx0aWYgKHVybC5vcmlnaW4gIT09IGxvY2F0aW9uLm9yaWdpbikgcmV0dXJuIG51bGw7XG5cdGlmICghdXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoaW5pdGlhbF9kYXRhLmJhc2VVcmwpKSByZXR1cm4gbnVsbDtcblxuXHRsZXQgcGF0aCA9IHVybC5wYXRobmFtZS5zbGljZShpbml0aWFsX2RhdGEuYmFzZVVybC5sZW5ndGgpO1xuXG5cdGlmIChwYXRoID09PSAnJykge1xuXHRcdHBhdGggPSAnLyc7XG5cdH1cblxuXHQvLyBhdm9pZCBhY2NpZGVudGFsIGNsYXNoZXMgYmV0d2VlbiBzZXJ2ZXIgcm91dGVzIGFuZCBwYWdlIHJvdXRlc1xuXHRpZiAoaWdub3JlLnNvbWUocGF0dGVybiA9PiBwYXR0ZXJuLnRlc3QocGF0aCkpKSByZXR1cm47XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZXMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRjb25zdCByb3V0ZSA9IHJvdXRlc1tpXTtcblxuXHRcdGNvbnN0IG1hdGNoID0gcm91dGUucGF0dGVybi5leGVjKHBhdGgpO1xuXG5cdFx0aWYgKG1hdGNoKSB7XG5cdFx0XHRjb25zdCBxdWVyeSA9IGV4dHJhY3RfcXVlcnkodXJsLnNlYXJjaCk7XG5cdFx0XHRjb25zdCBwYXJ0ID0gcm91dGUucGFydHNbcm91dGUucGFydHMubGVuZ3RoIC0gMV07XG5cdFx0XHRjb25zdCBwYXJhbXMgPSBwYXJ0LnBhcmFtcyA/IHBhcnQucGFyYW1zKG1hdGNoKSA6IHt9O1xuXG5cdFx0XHRjb25zdCBwYWdlID0geyBob3N0OiBsb2NhdGlvbi5ob3N0LCBwYXRoLCBxdWVyeSwgcGFyYW1zIH07XG5cblx0XHRcdHJldHVybiB7IGhyZWY6IHVybC5ocmVmLCByb3V0ZSwgbWF0Y2gsIHBhZ2UgfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlX2Vycm9yKHVybCkge1xuXHRjb25zdCB7IGhvc3QsIHBhdGhuYW1lLCBzZWFyY2ggfSA9IGxvY2F0aW9uO1xuXHRjb25zdCB7IHNlc3Npb24sIHByZWxvYWRlZCwgc3RhdHVzLCBlcnJvciB9ID0gaW5pdGlhbF9kYXRhO1xuXG5cdGlmICghcm9vdF9wcmVsb2FkZWQpIHtcblx0XHRyb290X3ByZWxvYWRlZCA9IHByZWxvYWRlZCAmJiBwcmVsb2FkZWRbMF07XG5cdH1cblxuXHRjb25zdCBwcm9wcyA9IHtcblx0XHRlcnJvcixcblx0XHRzdGF0dXMsXG5cdFx0c2Vzc2lvbixcblx0XHRsZXZlbDA6IHtcblx0XHRcdHByb3BzOiByb290X3ByZWxvYWRlZFxuXHRcdH0sXG5cdFx0bGV2ZWwxOiB7XG5cdFx0XHRwcm9wczoge1xuXHRcdFx0XHRzdGF0dXMsXG5cdFx0XHRcdGVycm9yXG5cdFx0XHR9LFxuXHRcdFx0Y29tcG9uZW50OiBFcnJvckNvbXBvbmVudFxuXHRcdH0sXG5cdFx0c2VnbWVudHM6IHByZWxvYWRlZFxuXG5cdH07XG5cdGNvbnN0IHF1ZXJ5ID0gZXh0cmFjdF9xdWVyeShzZWFyY2gpO1xuXHRyZW5kZXIobnVsbCwgW10sIHByb3BzLCB7IGhvc3QsIHBhdGg6IHBhdGhuYW1lLCBxdWVyeSwgcGFyYW1zOiB7fSB9KTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsX3N0YXRlKCkge1xuXHRyZXR1cm4ge1xuXHRcdHg6IHBhZ2VYT2Zmc2V0LFxuXHRcdHk6IHBhZ2VZT2Zmc2V0XG5cdH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG5hdmlnYXRlKHRhcmdldCwgaWQsIG5vc2Nyb2xsLCBoYXNoKSB7XG5cdGlmIChpZCkge1xuXHRcdC8vIHBvcHN0YXRlIG9yIGluaXRpYWwgbmF2aWdhdGlvblxuXHRcdGNpZCA9IGlkO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnN0IGN1cnJlbnRfc2Nyb2xsID0gc2Nyb2xsX3N0YXRlKCk7XG5cblx0XHQvLyBjbGlja2VkIG9uIGEgbGluay4gcHJlc2VydmUgc2Nyb2xsIHN0YXRlXG5cdFx0c2Nyb2xsX2hpc3RvcnlbY2lkXSA9IGN1cnJlbnRfc2Nyb2xsO1xuXG5cdFx0aWQgPSBjaWQgPSArK3VpZDtcblx0XHRzY3JvbGxfaGlzdG9yeVtjaWRdID0gbm9zY3JvbGwgPyBjdXJyZW50X3Njcm9sbCA6IHsgeDogMCwgeTogMCB9O1xuXHR9XG5cblx0Y2lkID0gaWQ7XG5cblx0aWYgKHJvb3RfY29tcG9uZW50KSBzdG9yZXMucHJlbG9hZGluZy5zZXQodHJ1ZSk7XG5cblx0Y29uc3QgbG9hZGVkID0gcHJlZmV0Y2hpbmcgJiYgcHJlZmV0Y2hpbmcuaHJlZiA9PT0gdGFyZ2V0LmhyZWYgP1xuXHRcdHByZWZldGNoaW5nLnByb21pc2UgOlxuXHRcdGh5ZHJhdGVfdGFyZ2V0KHRhcmdldCk7XG5cblx0cHJlZmV0Y2hpbmcgPSBudWxsO1xuXG5cdGNvbnN0IHRva2VuID0gY3VycmVudF90b2tlbiA9IHt9O1xuXHRjb25zdCB7IHJlZGlyZWN0LCBwcm9wcywgYnJhbmNoIH0gPSBhd2FpdCBsb2FkZWQ7XG5cdGlmICh0b2tlbiAhPT0gY3VycmVudF90b2tlbikgcmV0dXJuOyAvLyBhIHNlY29uZGFyeSBuYXZpZ2F0aW9uIGhhcHBlbmVkIHdoaWxlIHdlIHdlcmUgbG9hZGluZ1xuXG5cdGF3YWl0IHJlbmRlcihyZWRpcmVjdCwgYnJhbmNoLCBwcm9wcywgdGFyZ2V0LnBhZ2UpO1xuXHRpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG5cblx0aWYgKCFub3Njcm9sbCkge1xuXHRcdGxldCBzY3JvbGwgPSBzY3JvbGxfaGlzdG9yeVtpZF07XG5cblx0XHRpZiAoaGFzaCkge1xuXHRcdFx0Ly8gc2Nyb2xsIGlzIGFuIGVsZW1lbnQgaWQgKGZyb20gYSBoYXNoKSwgd2UgbmVlZCB0byBjb21wdXRlIHkuXG5cdFx0XHRjb25zdCBkZWVwX2xpbmtlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2guc2xpY2UoMSkpO1xuXG5cdFx0XHRpZiAoZGVlcF9saW5rZWQpIHtcblx0XHRcdFx0c2Nyb2xsID0ge1xuXHRcdFx0XHRcdHg6IDAsXG5cdFx0XHRcdFx0eTogZGVlcF9saW5rZWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0c2Nyb2xsX2hpc3RvcnlbY2lkXSA9IHNjcm9sbDtcblx0XHRpZiAoc2Nyb2xsKSBzY3JvbGxUbyhzY3JvbGwueCwgc2Nyb2xsLnkpO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlcihyZWRpcmVjdCwgYnJhbmNoLCBwcm9wcywgcGFnZSkge1xuXHRpZiAocmVkaXJlY3QpIHJldHVybiBnb3RvKHJlZGlyZWN0LmxvY2F0aW9uLCB7IHJlcGxhY2VTdGF0ZTogdHJ1ZSB9KTtcblxuXHRzdG9yZXMucGFnZS5zZXQocGFnZSk7XG5cdHN0b3Jlcy5wcmVsb2FkaW5nLnNldChmYWxzZSk7XG5cblx0aWYgKHJvb3RfY29tcG9uZW50KSB7XG5cdFx0cm9vdF9jb21wb25lbnQuJHNldChwcm9wcyk7XG5cdH0gZWxzZSB7XG5cdFx0cHJvcHMuc3RvcmVzID0ge1xuXHRcdFx0cGFnZTogeyBzdWJzY3JpYmU6IHN0b3Jlcy5wYWdlLnN1YnNjcmliZSB9LFxuXHRcdFx0cHJlbG9hZGluZzogeyBzdWJzY3JpYmU6IHN0b3Jlcy5wcmVsb2FkaW5nLnN1YnNjcmliZSB9LFxuXHRcdFx0c2Vzc2lvbjogc3RvcmVzLnNlc3Npb25cblx0XHR9O1xuXHRcdHByb3BzLmxldmVsMCA9IHtcblx0XHRcdHByb3BzOiBhd2FpdCByb290X3ByZWxvYWRlZFxuXHRcdH07XG5cblx0XHQvLyBmaXJzdCBsb2FkIOKAlCByZW1vdmUgU1NSJ2QgPGhlYWQ+IGNvbnRlbnRzXG5cdFx0Y29uc3Qgc3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2FwcGVyLWhlYWQtc3RhcnQnKTtcblx0XHRjb25zdCBlbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2FwcGVyLWhlYWQtZW5kJyk7XG5cblx0XHRpZiAoc3RhcnQgJiYgZW5kKSB7XG5cdFx0XHR3aGlsZSAoc3RhcnQubmV4dFNpYmxpbmcgIT09IGVuZCkgZGV0YWNoKHN0YXJ0Lm5leHRTaWJsaW5nKTtcblx0XHRcdGRldGFjaChzdGFydCk7XG5cdFx0XHRkZXRhY2goZW5kKTtcblx0XHR9XG5cblx0XHRyb290X2NvbXBvbmVudCA9IG5ldyBBcHAoe1xuXHRcdFx0dGFyZ2V0LFxuXHRcdFx0cHJvcHMsXG5cdFx0XHRoeWRyYXRlOiB0cnVlXG5cdFx0fSk7XG5cdH1cblxuXHRjdXJyZW50X2JyYW5jaCA9IGJyYW5jaDtcblx0Y3VycmVudF9xdWVyeSA9IEpTT04uc3RyaW5naWZ5KHBhZ2UucXVlcnkpO1xuXHRyZWFkeSA9IHRydWU7XG5cdHNlc3Npb25fZGlydHkgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcGFydF9jaGFuZ2VkKGksIHNlZ21lbnQsIG1hdGNoLCBzdHJpbmdpZmllZF9xdWVyeSkge1xuXHQvLyBUT0RPIG9ubHkgY2hlY2sgcXVlcnkgc3RyaW5nIGNoYW5nZXMgZm9yIHByZWxvYWQgZnVuY3Rpb25zXG5cdC8vIHRoYXQgZG8gaW4gZmFjdCBkZXBlbmQgb24gaXQgKHVzaW5nIHN0YXRpYyBhbmFseXNpcyBvclxuXHQvLyBydW50aW1lIGluc3RydW1lbnRhdGlvbilcblx0aWYgKHN0cmluZ2lmaWVkX3F1ZXJ5ICE9PSBjdXJyZW50X3F1ZXJ5KSByZXR1cm4gdHJ1ZTtcblxuXHRjb25zdCBwcmV2aW91cyA9IGN1cnJlbnRfYnJhbmNoW2ldO1xuXG5cdGlmICghcHJldmlvdXMpIHJldHVybiBmYWxzZTtcblx0aWYgKHNlZ21lbnQgIT09IHByZXZpb3VzLnNlZ21lbnQpIHJldHVybiB0cnVlO1xuXHRpZiAocHJldmlvdXMubWF0Y2gpIHtcblx0XHRpZiAoSlNPTi5zdHJpbmdpZnkocHJldmlvdXMubWF0Y2guc2xpY2UoMSwgaSArIDIpKSAhPT0gSlNPTi5zdHJpbmdpZnkobWF0Y2guc2xpY2UoMSwgaSArIDIpKSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGh5ZHJhdGVfdGFyZ2V0KHRhcmdldClcblxuXG5cbiB7XG5cdGNvbnN0IHsgcm91dGUsIHBhZ2UgfSA9IHRhcmdldDtcblx0Y29uc3Qgc2VnbWVudHMgPSBwYWdlLnBhdGguc3BsaXQoJy8nKS5maWx0ZXIoQm9vbGVhbik7XG5cblx0bGV0IHJlZGlyZWN0ID0gbnVsbDtcblxuXHRjb25zdCBwcm9wcyA9IHsgZXJyb3I6IG51bGwsIHN0YXR1czogMjAwLCBzZWdtZW50czogW3NlZ21lbnRzWzBdXSB9O1xuXG5cdGNvbnN0IHByZWxvYWRfY29udGV4dCA9IHtcblx0XHRmZXRjaDogKHVybCwgb3B0cykgPT4gZmV0Y2godXJsLCBvcHRzKSxcblx0XHRyZWRpcmVjdDogKHN0YXR1c0NvZGUsIGxvY2F0aW9uKSA9PiB7XG5cdFx0XHRpZiAocmVkaXJlY3QgJiYgKHJlZGlyZWN0LnN0YXR1c0NvZGUgIT09IHN0YXR1c0NvZGUgfHwgcmVkaXJlY3QubG9jYXRpb24gIT09IGxvY2F0aW9uKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYENvbmZsaWN0aW5nIHJlZGlyZWN0c2ApO1xuXHRcdFx0fVxuXHRcdFx0cmVkaXJlY3QgPSB7IHN0YXR1c0NvZGUsIGxvY2F0aW9uIH07XG5cdFx0fSxcblx0XHRlcnJvcjogKHN0YXR1cywgZXJyb3IpID0+IHtcblx0XHRcdHByb3BzLmVycm9yID0gdHlwZW9mIGVycm9yID09PSAnc3RyaW5nJyA/IG5ldyBFcnJvcihlcnJvcikgOiBlcnJvcjtcblx0XHRcdHByb3BzLnN0YXR1cyA9IHN0YXR1cztcblx0XHR9XG5cdH07XG5cblx0aWYgKCFyb290X3ByZWxvYWRlZCkge1xuXHRcdHJvb3RfcHJlbG9hZGVkID0gaW5pdGlhbF9kYXRhLnByZWxvYWRlZFswXSB8fCByb290X3ByZWxvYWQuY2FsbChwcmVsb2FkX2NvbnRleHQsIHtcblx0XHRcdGhvc3Q6IHBhZ2UuaG9zdCxcblx0XHRcdHBhdGg6IHBhZ2UucGF0aCxcblx0XHRcdHF1ZXJ5OiBwYWdlLnF1ZXJ5LFxuXHRcdFx0cGFyYW1zOiB7fVxuXHRcdH0sICRzZXNzaW9uKTtcblx0fVxuXG5cdGxldCBicmFuY2g7XG5cdGxldCBsID0gMTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHN0cmluZ2lmaWVkX3F1ZXJ5ID0gSlNPTi5zdHJpbmdpZnkocGFnZS5xdWVyeSk7XG5cdFx0Y29uc3QgbWF0Y2ggPSByb3V0ZS5wYXR0ZXJuLmV4ZWMocGFnZS5wYXRoKTtcblxuXHRcdGxldCBzZWdtZW50X2RpcnR5ID0gZmFsc2U7XG5cblx0XHRicmFuY2ggPSBhd2FpdCBQcm9taXNlLmFsbChyb3V0ZS5wYXJ0cy5tYXAoYXN5bmMgKHBhcnQsIGkpID0+IHtcblx0XHRcdGNvbnN0IHNlZ21lbnQgPSBzZWdtZW50c1tpXTtcblxuXHRcdFx0aWYgKHBhcnRfY2hhbmdlZChpLCBzZWdtZW50LCBtYXRjaCwgc3RyaW5naWZpZWRfcXVlcnkpKSBzZWdtZW50X2RpcnR5ID0gdHJ1ZTtcblxuXHRcdFx0cHJvcHMuc2VnbWVudHNbbF0gPSBzZWdtZW50c1tpICsgMV07IC8vIFRPRE8gbWFrZSB0aGlzIGxlc3MgY29uZnVzaW5nXG5cdFx0XHRpZiAoIXBhcnQpIHJldHVybiB7IHNlZ21lbnQgfTtcblxuXHRcdFx0Y29uc3QgaiA9IGwrKztcblxuXHRcdFx0aWYgKCFzZXNzaW9uX2RpcnR5ICYmICFzZWdtZW50X2RpcnR5ICYmIGN1cnJlbnRfYnJhbmNoW2ldICYmIGN1cnJlbnRfYnJhbmNoW2ldLnBhcnQgPT09IHBhcnQuaSkge1xuXHRcdFx0XHRyZXR1cm4gY3VycmVudF9icmFuY2hbaV07XG5cdFx0XHR9XG5cblx0XHRcdHNlZ21lbnRfZGlydHkgPSBmYWxzZTtcblxuXHRcdFx0Y29uc3QgeyBkZWZhdWx0OiBjb21wb25lbnQsIHByZWxvYWQgfSA9IGF3YWl0IGxvYWRfY29tcG9uZW50KGNvbXBvbmVudHNbcGFydC5pXSk7XG5cblx0XHRcdGxldCBwcmVsb2FkZWQ7XG5cdFx0XHRpZiAocmVhZHkgfHwgIWluaXRpYWxfZGF0YS5wcmVsb2FkZWRbaSArIDFdKSB7XG5cdFx0XHRcdHByZWxvYWRlZCA9IHByZWxvYWRcblx0XHRcdFx0XHQ/IGF3YWl0IHByZWxvYWQuY2FsbChwcmVsb2FkX2NvbnRleHQsIHtcblx0XHRcdFx0XHRcdGhvc3Q6IHBhZ2UuaG9zdCxcblx0XHRcdFx0XHRcdHBhdGg6IHBhZ2UucGF0aCxcblx0XHRcdFx0XHRcdHF1ZXJ5OiBwYWdlLnF1ZXJ5LFxuXHRcdFx0XHRcdFx0cGFyYW1zOiBwYXJ0LnBhcmFtcyA/IHBhcnQucGFyYW1zKHRhcmdldC5tYXRjaCkgOiB7fVxuXHRcdFx0XHRcdH0sICRzZXNzaW9uKVxuXHRcdFx0XHRcdDoge307XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwcmVsb2FkZWQgPSBpbml0aWFsX2RhdGEucHJlbG9hZGVkW2kgKyAxXTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIChwcm9wc1tgbGV2ZWwke2p9YF0gPSB7IGNvbXBvbmVudCwgcHJvcHM6IHByZWxvYWRlZCwgc2VnbWVudCwgbWF0Y2gsIHBhcnQ6IHBhcnQuaSB9KTtcblx0XHR9KSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cHJvcHMuZXJyb3IgPSBlcnJvcjtcblx0XHRwcm9wcy5zdGF0dXMgPSA1MDA7XG5cdFx0YnJhbmNoID0gW107XG5cdH1cblxuXHRyZXR1cm4geyByZWRpcmVjdCwgcHJvcHMsIGJyYW5jaCB9O1xufVxuXG5mdW5jdGlvbiBsb2FkX2NzcyhjaHVuaykge1xuXHRjb25zdCBocmVmID0gYGNsaWVudC8ke2NodW5rfWA7XG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW2hyZWY9XCIke2hyZWZ9XCJdYCkpIHJldHVybjtcblxuXHRyZXR1cm4gbmV3IFByb21pc2UoKGZ1bGZpbCwgcmVqZWN0KSA9PiB7XG5cdFx0Y29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcblx0XHRsaW5rLnJlbCA9ICdzdHlsZXNoZWV0Jztcblx0XHRsaW5rLmhyZWYgPSBocmVmO1xuXG5cdFx0bGluay5vbmxvYWQgPSAoKSA9PiBmdWxmaWwoKTtcblx0XHRsaW5rLm9uZXJyb3IgPSByZWplY3Q7XG5cblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gbG9hZF9jb21wb25lbnQoY29tcG9uZW50KVxuXG5cbiB7XG5cdC8vIFRPRE8gdGhpcyBpcyB0ZW1wb3Jhcnkg4oCUIG9uY2UgcGxhY2Vob2xkZXJzIGFyZVxuXHQvLyBhbHdheXMgcmV3cml0dGVuLCBzY3JhdGNoIHRoZSB0ZXJuYXJ5XG5cdGNvbnN0IHByb21pc2VzID0gKHR5cGVvZiBjb21wb25lbnQuY3NzID09PSAnc3RyaW5nJyA/IFtdIDogY29tcG9uZW50LmNzcy5tYXAobG9hZF9jc3MpKTtcblx0cHJvbWlzZXMudW5zaGlmdChjb21wb25lbnQuanMoKSk7XG5cdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbih2YWx1ZXMgPT4gdmFsdWVzWzBdKTtcbn1cblxuZnVuY3Rpb24gZGV0YWNoKG5vZGUpIHtcblx0bm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChocmVmKSB7XG5cdGNvbnN0IHRhcmdldCA9IHNlbGVjdF90YXJnZXQobmV3IFVSTChocmVmLCBkb2N1bWVudC5iYXNlVVJJKSk7XG5cblx0aWYgKHRhcmdldCkge1xuXHRcdGlmICghcHJlZmV0Y2hpbmcgfHwgaHJlZiAhPT0gcHJlZmV0Y2hpbmcuaHJlZikge1xuXHRcdFx0c2V0X3ByZWZldGNoaW5nKGhyZWYsIGh5ZHJhdGVfdGFyZ2V0KHRhcmdldCkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBwcmVmZXRjaGluZy5wcm9taXNlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHN0YXJ0KG9wdHNcblxuKSB7XG5cdGlmICgnc2Nyb2xsUmVzdG9yYXRpb24nIGluIF9oaXN0b3J5KSB7XG5cdFx0X2hpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJztcblx0fVxuXG5cdHNldF90YXJnZXQob3B0cy50YXJnZXQpO1xuXG5cdGFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlX2NsaWNrKTtcblx0YWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBoYW5kbGVfcG9wc3RhdGUpO1xuXG5cdC8vIHByZWZldGNoXG5cdGFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0cmlnZ2VyX3ByZWZldGNoKTtcblx0YWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlX21vdXNlbW92ZSk7XG5cblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdGNvbnN0IHsgaGFzaCwgaHJlZiB9ID0gbG9jYXRpb247XG5cblx0XHRfaGlzdG9yeS5yZXBsYWNlU3RhdGUoeyBpZDogdWlkIH0sICcnLCBocmVmKTtcblxuXHRcdGNvbnN0IHVybCA9IG5ldyBVUkwobG9jYXRpb24uaHJlZik7XG5cblx0XHRpZiAoaW5pdGlhbF9kYXRhLmVycm9yKSByZXR1cm4gaGFuZGxlX2Vycm9yKCk7XG5cblx0XHRjb25zdCB0YXJnZXQgPSBzZWxlY3RfdGFyZ2V0KHVybCk7XG5cdFx0aWYgKHRhcmdldCkgcmV0dXJuIG5hdmlnYXRlKHRhcmdldCwgdWlkLCB0cnVlLCBoYXNoKTtcblx0fSk7XG59XG5cbmxldCBtb3VzZW1vdmVfdGltZW91dDtcblxuZnVuY3Rpb24gaGFuZGxlX21vdXNlbW92ZShldmVudCkge1xuXHRjbGVhclRpbWVvdXQobW91c2Vtb3ZlX3RpbWVvdXQpO1xuXHRtb3VzZW1vdmVfdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdHRyaWdnZXJfcHJlZmV0Y2goZXZlbnQpO1xuXHR9LCAyMCk7XG59XG5cbmZ1bmN0aW9uIHRyaWdnZXJfcHJlZmV0Y2goZXZlbnQpIHtcblx0Y29uc3QgYSA9IGZpbmRfYW5jaG9yKGV2ZW50LnRhcmdldCk7XG5cdGlmICghYSB8fCBhLnJlbCAhPT0gJ3ByZWZldGNoJykgcmV0dXJuO1xuXG5cdHByZWZldGNoKGEuaHJlZik7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZV9jbGljayhldmVudCkge1xuXHQvLyBBZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3Zpc2lvbm1lZGlhL3BhZ2UuanNcblx0Ly8gTUlUIGxpY2Vuc2UgaHR0cHM6Ly9naXRodWIuY29tL3Zpc2lvbm1lZGlhL3BhZ2UuanMjbGljZW5zZVxuXHRpZiAod2hpY2goZXZlbnQpICE9PSAxKSByZXR1cm47XG5cdGlmIChldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpIHJldHVybjtcblx0aWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHJldHVybjtcblxuXHRjb25zdCBhID0gZmluZF9hbmNob3IoZXZlbnQudGFyZ2V0KTtcblx0aWYgKCFhKSByZXR1cm47XG5cblx0aWYgKCFhLmhyZWYpIHJldHVybjtcblxuXHQvLyBjaGVjayBpZiBsaW5rIGlzIGluc2lkZSBhbiBzdmdcblx0Ly8gaW4gdGhpcyBjYXNlLCBib3RoIGhyZWYgYW5kIHRhcmdldCBhcmUgYWx3YXlzIGluc2lkZSBhbiBvYmplY3Rcblx0Y29uc3Qgc3ZnID0gdHlwZW9mIGEuaHJlZiA9PT0gJ29iamVjdCcgJiYgYS5ocmVmLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdTVkdBbmltYXRlZFN0cmluZyc7XG5cdGNvbnN0IGhyZWYgPSBTdHJpbmcoc3ZnID8gKGEpLmhyZWYuYmFzZVZhbCA6IGEuaHJlZik7XG5cblx0aWYgKGhyZWYgPT09IGxvY2F0aW9uLmhyZWYpIHtcblx0XHRpZiAoIWxvY2F0aW9uLmhhc2gpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gSWdub3JlIGlmIHRhZyBoYXNcblx0Ly8gMS4gJ2Rvd25sb2FkJyBhdHRyaWJ1dGVcblx0Ly8gMi4gcmVsPSdleHRlcm5hbCcgYXR0cmlidXRlXG5cdGlmIChhLmhhc0F0dHJpYnV0ZSgnZG93bmxvYWQnKSB8fCBhLmdldEF0dHJpYnV0ZSgncmVsJykgPT09ICdleHRlcm5hbCcpIHJldHVybjtcblxuXHQvLyBJZ25vcmUgaWYgPGE+IGhhcyBhIHRhcmdldFxuXHRpZiAoc3ZnID8gKGEpLnRhcmdldC5iYXNlVmFsIDogYS50YXJnZXQpIHJldHVybjtcblxuXHRjb25zdCB1cmwgPSBuZXcgVVJMKGhyZWYpO1xuXG5cdC8vIERvbid0IGhhbmRsZSBoYXNoIGNoYW5nZXNcblx0aWYgKHVybC5wYXRobmFtZSA9PT0gbG9jYXRpb24ucGF0aG5hbWUgJiYgdXJsLnNlYXJjaCA9PT0gbG9jYXRpb24uc2VhcmNoKSByZXR1cm47XG5cblx0Y29uc3QgdGFyZ2V0ID0gc2VsZWN0X3RhcmdldCh1cmwpO1xuXHRpZiAodGFyZ2V0KSB7XG5cdFx0Y29uc3Qgbm9zY3JvbGwgPSBhLmhhc0F0dHJpYnV0ZSgnc2FwcGVyLW5vc2Nyb2xsJyk7XG5cdFx0bmF2aWdhdGUodGFyZ2V0LCBudWxsLCBub3Njcm9sbCwgdXJsLmhhc2gpO1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0X2hpc3RvcnkucHVzaFN0YXRlKHsgaWQ6IGNpZCB9LCAnJywgdXJsLmhyZWYpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHdoaWNoKGV2ZW50KSB7XG5cdHJldHVybiBldmVudC53aGljaCA9PT0gbnVsbCA/IGV2ZW50LmJ1dHRvbiA6IGV2ZW50LndoaWNoO1xufVxuXG5mdW5jdGlvbiBmaW5kX2FuY2hvcihub2RlKSB7XG5cdHdoaWxlIChub2RlICYmIG5vZGUubm9kZU5hbWUudG9VcHBlckNhc2UoKSAhPT0gJ0EnKSBub2RlID0gbm9kZS5wYXJlbnROb2RlOyAvLyBTVkcgPGE+IGVsZW1lbnRzIGhhdmUgYSBsb3dlcmNhc2UgbmFtZVxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlX3BvcHN0YXRlKGV2ZW50KSB7XG5cdHNjcm9sbF9oaXN0b3J5W2NpZF0gPSBzY3JvbGxfc3RhdGUoKTtcblxuXHRpZiAoZXZlbnQuc3RhdGUpIHtcblx0XHRjb25zdCB1cmwgPSBuZXcgVVJMKGxvY2F0aW9uLmhyZWYpO1xuXHRcdGNvbnN0IHRhcmdldCA9IHNlbGVjdF90YXJnZXQodXJsKTtcblx0XHRpZiAodGFyZ2V0KSB7XG5cdFx0XHRuYXZpZ2F0ZSh0YXJnZXQsIGV2ZW50LnN0YXRlLmlkKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLmhyZWY7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdC8vIGhhc2hjaGFuZ2Vcblx0XHRzZXRfdWlkKHVpZCArIDEpO1xuXHRcdHNldF9jaWQodWlkKTtcblx0XHRfaGlzdG9yeS5yZXBsYWNlU3RhdGUoeyBpZDogY2lkIH0sICcnLCBsb2NhdGlvbi5ocmVmKTtcblx0fVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaFJvdXRlcyhwYXRobmFtZXMpIHtcblx0cmV0dXJuIHJvdXRlc1xuXHRcdC5maWx0ZXIocGF0aG5hbWVzXG5cdFx0XHQ/IHJvdXRlID0+IHBhdGhuYW1lcy5zb21lKHBhdGhuYW1lID0+IHJvdXRlLnBhdHRlcm4udGVzdChwYXRobmFtZSkpXG5cdFx0XHQ6ICgpID0+IHRydWVcblx0XHQpXG5cdFx0LnJlZHVjZSgocHJvbWlzZSwgcm91dGUpID0+IHByb21pc2UudGhlbigoKSA9PiB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocm91dGUucGFydHMubWFwKHBhcnQgPT4gcGFydCAmJiBsb2FkX2NvbXBvbmVudChjb21wb25lbnRzW3BhcnQuaV0pKSk7XG5cdFx0fSksIFByb21pc2UucmVzb2x2ZSgpKTtcbn1cblxuY29uc3Qgc3RvcmVzJDEgPSAoKSA9PiBnZXRDb250ZXh0KENPTlRFWFRfS0VZKTtcblxuZXhwb3J0IHsgZ290bywgcHJlZmV0Y2gsIHByZWZldGNoUm91dGVzLCBzdGFydCwgc3RvcmVzJDEgYXMgc3RvcmVzIH07XG4iLCJpbXBvcnQgKiBhcyBzYXBwZXIgZnJvbSAnQHNhcHBlci9hcHAnO1xuXG5zYXBwZXIuc3RhcnQoe1xuXHR0YXJnZXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYXBwZXInKVxufSk7Il0sIm5hbWVzIjpbInRzbGliXzEuX19leHRlbmRzIiwidHNsaWJfMS5fX2Fzc2lnbiIsInh0ZW5kIiwidGFiYmFibGUiLCJjcmVhdGVGb2N1c1RyYXAiLCJjc3NDbGFzc2VzIiwic3RyaW5ncyIsInV0aWwuY3JlYXRlRm9jdXNUcmFwSW5zdGFuY2UiLCJzdG9yZXMiLCJFcnJvckNvbXBvbmVudCIsInJvb3RfcHJlbG9hZCIsInNhcHBlci5zdGFydCJdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE1BQU0sZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0FBQzVCLEFBVUE7Ozs7O0FBS0EsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssR0FBRyxJQUFJLEVBQUU7SUFDbkMsSUFBSSxJQUFJLENBQUM7SUFDVCxNQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDdkIsU0FBUyxHQUFHLENBQUMsU0FBUyxFQUFFO1FBQ3BCLElBQUksY0FBYyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsRUFBRTtZQUNsQyxLQUFL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

import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, m as space, u as create_component, p as claim_space, v as claim_component, j as insert_dev, w as mount_component, n as noop, z as transition_in, A as transition_out, f as detach_dev, B as destroy_component } from './index.53a8c4d3.js';
import './prefixFilter.3b210855.js';
import ButtonPage from './ButtonPage.2e90424f.js';
import './Page.5fa10484.js';
import './Example.562cccfe.js';
import CheckboxPage from './CheckboxPage.1b8e088b.js';

/* src\routes\index.svelte generated by Svelte v3.16.4 */

function create_fragment(ctx) {
	let t0;
	let t1;
	let current;
	const buttonpage = new ButtonPage({ $$inline: true });
	const checkboxpage = new CheckboxPage({ $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			create_component(buttonpage.$$.fragment);
			t1 = space();
			create_component(checkboxpage.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			claim_component(buttonpage.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(checkboxpage.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Sapper project template";
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			mount_component(buttonpage, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(checkboxpage, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(buttonpage.$$.fragment, local);
			transition_in(checkboxpage.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(buttonpage.$$.fragment, local);
			transition_out(checkboxpage.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			destroy_component(buttonpage, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(checkboxpage, detaching);
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

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZDE1NDYxNjguanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9

import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, c as create_slot, g as element, Q as space, h as claim_element, j as children, k as detach_dev, R as claim_space, T as attr_dev, p as add_location, q as insert_dev, r as get_slot_context, t as get_slot_changes, w as transition_in, x as transition_out } from './index.400f9120.js';

/* src\routes\Example.svelte generated by Svelte v3.16.4 */

const file = "src\\routes\\Example.svelte";
const get_vertical_slot_changes = dirty => ({});
const get_vertical_slot_context = ctx => ({});
const get_horizontal_slot_changes = dirty => ({});
const get_horizontal_slot_context = ctx => ({});
const get_header_slot_changes = dirty => ({});
const get_header_slot_context = ctx => ({});

function create_fragment(ctx) {
	let div0;
	let t0;
	let div1;
	let t1;
	let div2;
	let current;
	const header_slot_template = /*$$slots*/ ctx[1].header;
	const header_slot = create_slot(header_slot_template, ctx, /*$$scope*/ ctx[0], get_header_slot_context);
	const horizontal_slot_template = /*$$slots*/ ctx[1].horizontal;
	const horizontal_slot = create_slot(horizontal_slot_template, ctx, /*$$scope*/ ctx[0], get_horizontal_slot_context);
	const vertical_slot_template = /*$$slots*/ ctx[1].vertical;
	const vertical_slot = create_slot(vertical_slot_template, ctx, /*$$scope*/ ctx[0], get_vertical_slot_context);

	const block = {
		c: function create() {
			div0 = element("div");
			if (header_slot) header_slot.c();
			t0 = space();
			div1 = element("div");
			if (horizontal_slot) horizontal_slot.c();
			t1 = space();
			div2 = element("div");
			if (vertical_slot) vertical_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			if (header_slot) header_slot.l(div0_nodes);
			div0_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			if (horizontal_slot) horizontal_slot.l(div1_nodes);
			div1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			if (vertical_slot) vertical_slot.l(div2_nodes);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "text-base font-semibold py-4");
			add_location(div0, file, 0, 0, 0);
			attr_dev(div1, "class", "flex flex-wrap flex-row");
			add_location(div1, file, 3, 0, 78);
			attr_dev(div2, "class", "flex flex-wrap flex-col");
			add_location(div2, file, 6, 0, 155);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);

			if (header_slot) {
				header_slot.m(div0, null);
			}

			insert_dev(target, t0, anchor);
			insert_dev(target, div1, anchor);

			if (horizontal_slot) {
				horizontal_slot.m(div1, null);
			}

			insert_dev(target, t1, anchor);
			insert_dev(target, div2, anchor);

			if (vertical_slot) {
				vertical_slot.m(div2, null);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (header_slot && header_slot.p && dirty[0] & /*$$scope*/ 1) {
				header_slot.p(get_slot_context(header_slot_template, ctx, /*$$scope*/ ctx[0], get_header_slot_context), get_slot_changes(header_slot_template, /*$$scope*/ ctx[0], dirty, get_header_slot_changes));
			}

			if (horizontal_slot && horizontal_slot.p && dirty[0] & /*$$scope*/ 1) {
				horizontal_slot.p(get_slot_context(horizontal_slot_template, ctx, /*$$scope*/ ctx[0], get_horizontal_slot_context), get_slot_changes(horizontal_slot_template, /*$$scope*/ ctx[0], dirty, get_horizontal_slot_changes));
			}

			if (vertical_slot && vertical_slot.p && dirty[0] & /*$$scope*/ 1) {
				vertical_slot.p(get_slot_context(vertical_slot_template, ctx, /*$$scope*/ ctx[0], get_vertical_slot_context), get_slot_changes(vertical_slot_template, /*$$scope*/ ctx[0], dirty, get_vertical_slot_changes));
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(header_slot, local);
			transition_in(horizontal_slot, local);
			transition_in(vertical_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(header_slot, local);
			transition_out(horizontal_slot, local);
			transition_out(vertical_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			if (header_slot) header_slot.d(detaching);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div1);
			if (horizontal_slot) horizontal_slot.d(detaching);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(div2);
			if (vertical_slot) vertical_slot.d(detaching);
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
	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(0, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		
	};

	return [$$scope, $$slots];
}

class Example extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Example",
			options,
			id: create_fragment.name
		});
	}
}

export default Example;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhhbXBsZS42NGYyNWMwYS5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=

import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, c as create_slot, f as element, u as space, h as text, j as claim_element, k as children, m as detach_dev, w as claim_space, l as claim_text, X as attr_dev, o as add_location, p as insert_dev, q as append_dev, g as get_slot_context, a as get_slot_changes, t as transition_in, b as transition_out } from './index.ff9f59d2.js';

/* src\routes\Page.svelte generated by Svelte v3.16.4 */

const file = "src\\routes\\Page.svelte";
const get_content_slot_changes = dirty => ({});
const get_content_slot_context = ctx => ({});
const get_import_slot_changes = dirty => ({});
const get_import_slot_context = ctx => ({});
const get_description_slot_changes = dirty => ({});
const get_description_slot_context = ctx => ({});
const get_header_slot_changes = dirty => ({});
const get_header_slot_context = ctx => ({});

function create_fragment(ctx) {
	let div0;
	let t0;
	let div1;
	let t1;
	let div2;
	let t2;
	let t3;
	let div3;
	let t4;
	let t5;
	let div4;
	let t6;
	let t7;
	let div5;
	let t8;
	let current;
	const header_slot_template = /*$$slots*/ ctx[1].header;
	const header_slot = create_slot(header_slot_template, ctx, /*$$scope*/ ctx[0], get_header_slot_context);
	const description_slot_template = /*$$slots*/ ctx[1].description;
	const description_slot = create_slot(description_slot_template, ctx, /*$$scope*/ ctx[0], get_description_slot_context);
	const import_slot_template = /*$$slots*/ ctx[1].import;
	const import_slot = create_slot(import_slot_template, ctx, /*$$scope*/ ctx[0], get_import_slot_context);
	const content_slot_template = /*$$slots*/ ctx[1].content;
	const content_slot = create_slot(content_slot_template, ctx, /*$$scope*/ ctx[0], get_content_slot_context);

	const block = {
		c: function create() {
			div0 = element("div");
			if (header_slot) header_slot.c();
			t0 = space();
			div1 = element("div");
			if (description_slot) description_slot.c();
			t1 = space();
			div2 = element("div");
			t2 = text("Import");
			t3 = space();
			div3 = element("div");
			if (import_slot) import_slot.c();
			t4 = space();
			if (content_slot) content_slot.c();
			t5 = space();
			div4 = element("div");
			t6 = text("Props");
			t7 = space();
			div5 = element("div");
			t8 = text("Property Description Type Default (Ant Design)");
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
			if (description_slot) description_slot.l(div1_nodes);
			div1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			t2 = claim_text(div2_nodes, "Import");
			div2_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			if (import_slot) import_slot.l(div3_nodes);
			div3_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			if (content_slot) content_slot.l(nodes);
			t5 = claim_space(nodes);
			div4 = claim_element(nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			t6 = claim_text(div4_nodes, "Props");
			div4_nodes.forEach(detach_dev);
			t7 = claim_space(nodes);
			div5 = claim_element(nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			t8 = claim_text(div5_nodes, "Property Description Type Default (Ant Design)");
			div5_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "text-2xl font-semibold py-4");
			add_location(div0, file, 0, 0, 0);
			attr_dev(div1, "class", "pb-4");
			add_location(div1, file, 3, 0, 77);
			attr_dev(div2, "class", "text-base font-semibold py-4");
			add_location(div2, file, 6, 0, 136);
			attr_dev(div3, "class", "bg-gray-800 text-gray-300 text-sm p-4");
			add_location(div3, file, 7, 0, 192);
			attr_dev(div4, "class", "text-base font-semibold py-4");
			add_location(div4, file, 11, 0, 304);
			attr_dev(div5, "class", "pb-2");
			add_location(div5, file, 12, 0, 359);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);

			if (header_slot) {
				header_slot.m(div0, null);
			}

			insert_dev(target, t0, anchor);
			insert_dev(target, div1, anchor);

			if (description_slot) {
				description_slot.m(div1, null);
			}

			insert_dev(target, t1, anchor);
			insert_dev(target, div2, anchor);
			append_dev(div2, t2);
			insert_dev(target, t3, anchor);
			insert_dev(target, div3, anchor);

			if (import_slot) {
				import_slot.m(div3, null);
			}

			insert_dev(target, t4, anchor);

			if (content_slot) {
				content_slot.m(target, anchor);
			}

			insert_dev(target, t5, anchor);
			insert_dev(target, div4, anchor);
			append_dev(div4, t6);
			insert_dev(target, t7, anchor);
			insert_dev(target, div5, anchor);
			append_dev(div5, t8);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (header_slot && header_slot.p && dirty[0] & /*$$scope*/ 1) {
				header_slot.p(get_slot_context(header_slot_template, ctx, /*$$scope*/ ctx[0], get_header_slot_context), get_slot_changes(header_slot_template, /*$$scope*/ ctx[0], dirty, get_header_slot_changes));
			}

			if (description_slot && description_slot.p && dirty[0] & /*$$scope*/ 1) {
				description_slot.p(get_slot_context(description_slot_template, ctx, /*$$scope*/ ctx[0], get_description_slot_context), get_slot_changes(description_slot_template, /*$$scope*/ ctx[0], dirty, get_description_slot_changes));
			}

			if (import_slot && import_slot.p && dirty[0] & /*$$scope*/ 1) {
				import_slot.p(get_slot_context(import_slot_template, ctx, /*$$scope*/ ctx[0], get_import_slot_context), get_slot_changes(import_slot_template, /*$$scope*/ ctx[0], dirty, get_import_slot_changes));
			}

			if (content_slot && content_slot.p && dirty[0] & /*$$scope*/ 1) {
				content_slot.p(get_slot_context(content_slot_template, ctx, /*$$scope*/ ctx[0], get_content_slot_context), get_slot_changes(content_slot_template, /*$$scope*/ ctx[0], dirty, get_content_slot_changes));
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(header_slot, local);
			transition_in(description_slot, local);
			transition_in(import_slot, local);
			transition_in(content_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(header_slot, local);
			transition_out(description_slot, local);
			transition_out(import_slot, local);
			transition_out(content_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			if (header_slot) header_slot.d(detaching);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div1);
			if (description_slot) description_slot.d(detaching);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(div2);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(div3);
			if (import_slot) import_slot.d(detaching);
			if (detaching) detach_dev(t4);
			if (content_slot) content_slot.d(detaching);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(div4);
			if (detaching) detach_dev(t7);
			if (detaching) detach_dev(div5);
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

class Page extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Page",
			options,
			id: create_fragment.name
		});
	}
}

export default Page;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZS40NjVmZTcwYS5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

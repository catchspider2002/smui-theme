import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, X as text, Y as claim_text, q as insert_dev, n as noop, k as detach_dev } from './index.400f9120.js';

/* src\routes\index.svelte generated by Svelte v3.16.4 */

function create_fragment(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("\nTest Page");
			this.h();
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "\nTest Page");
			this.h();
		},
		h: function hydrate() {
			document.title = "Sapper project template";
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMTUzM2EwYTYuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=

<script>
	export let name;
	import Test from "./Test.svelte"
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<Test/>
<h1>Hello {name}!</h1>

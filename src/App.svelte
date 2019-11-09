<script>
  export let name;
  import Card from "./Card.svelte";
  import Checkbox from "./Checkbox.svelte";
  import Test from "./Test.svelte";
  import Textfield from "./Textfield.svelte";
  import Tabs from "./Tabs.svelte";
  import ButtonComponents from "./ButtonComponents.svelte";
</script>

<style>
  .bg {
    background-color: rgb(105, 105, 105);
  }
</style>

<div class="bg">
  <Tabs/>
</div>

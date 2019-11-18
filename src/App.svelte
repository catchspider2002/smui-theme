<script>
  export let name;
  import Card from "./Card.svelte";
  import Checkbox from "./Checkbox.svelte";
  import Test from "./Test.svelte";
  import Textfield from "./Textfield.svelte";
  import Tabs from "./Tabs.svelte";
  import ButtonComponents from "./ButtonComponents.svelte";
  import Dashboard from "./Dashboard.svelte";
  import Fab from "./Fab.svelte";
  import Timeline from "./Timeline.svelte";
</script>

<style>
  .fontster {
    background: #222428;
    font-family: "IBM Plex Sans", sans-serif;
  }
</style>

<div class="bg-gray-200 fontster">
  <Dashboard />
  <!-- <Chart /> -->
  <!-- <Timeline /> -->
</div>

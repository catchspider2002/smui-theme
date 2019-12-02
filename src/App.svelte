<script>
  // export let name;
  import { onMount, afterUpdate } from "svelte";
  import IconButton, { Icon } from "@smui/icon-button";

  import Card from "./Card.svelte";
  import Checkbox from "./Checkbox.svelte";
  import Test from "./Test.svelte";
  import Textfield from "./Textfield.svelte";
  import Tabs from "./Tabs.svelte";
  import Dashboard from "./Dashboard.svelte";
  import Fab from "./Fab.svelte";
  import Timeline from "./Timeline.svelte";

  import ButtonPage from "./ComponentPage/ButtonPage.svelte";
  import AlertPage from "./ComponentPage/AlertPage.svelte";
  import SwitchPage from "./ComponentPage/SwitchPage.svelte";
  import CheckboxPage from "./ComponentPage/CheckboxPage.svelte";
  import RadioPage from "./ComponentPage/RadioPage.svelte";
  import SliderPage from "./ComponentPage/SliderPage.svelte";

  let initialOff, currentTheme;

  const checkTheme = () => {
    currentTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
    initialOff = currentTheme === "dark" ? false : true;
  };

  onMount(checkTheme);

  const switchTheme = () => {
    currentTheme = initialOff ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
  };
</script>

<style>
  .fontster {
    font-family: "Montserrat", sans-serif;
  }
</style>

<div class="fontster p-4">
  <div style="display: flex; align-items: center;">
    <IconButton
      toggle
      bind:pressed={initialOff}
      on:click={switchTheme}
      title="Enable {currentTheme} mode">
      <Icon class="material-icons text-yellow-600" on>brightness_2</Icon>
      <Icon class="material-icons text-yellow-400">wb_sunny</Icon>
    </IconButton>
  </div>
  <SliderPage/>
  <SwitchPage />
  <CheckboxPage />
  <RadioPage />
  <!-- <ButtonPage />
  <AlertPage /> -->
  <!-- <Dashboard /> -->
  <!-- <Timeline /> -->
</div>
Select Textfield Text fields allow users to input, edit, and select text. 
 Textarea

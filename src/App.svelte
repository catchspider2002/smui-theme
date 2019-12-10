<script>
  // export let name;
  import { onMount, afterUpdate } from "svelte";
  import IconButton, { Icon } from "@smui/icon-button";

  import Card from "./Card.svelte";
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
  import SelectPage from "./ComponentPage/SelectPage.svelte";
  import TextfieldPage from "./ComponentPage/TextfieldPage.svelte";
  import TextareaPage from "./ComponentPage/TextareaPage.svelte";
  import TablePage from "./ComponentPage/TablePage.svelte";

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
  .themeButton {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }
</style>

<div class="p-4">
  <div class="themeButton">
    <IconButton
      toggle
      bind:pressed={initialOff}
      on:click={switchTheme}
      title="Enable {currentTheme} mode">
      <Icon class="material-icons text-yellow-600" on>brightness_2</Icon>
      <Icon class="material-icons text-yellow-400">wb_sunny</Icon>
    </IconButton>
  </div>
  <Card />
  <TablePage />
  <TextareaPage />
  <TextfieldPage />
  <AlertPage />
  <ButtonPage />
  <SelectPage />
  <SliderPage />
  <SwitchPage />
  <CheckboxPage />
  <RadioPage />
  <!-- <Dashboard /> -->
  <!-- <Timeline /> -->
</div>

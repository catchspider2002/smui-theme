<script>
  import ChartLine from "./ChartLine.svelte";

  import Select, { Option } from "@smui/select";
  import Icon from "@smui/select/icon/index";
  import HelperText from "@smui/select/helper-text/index";

  let fruits = ["Yesterday", "Today", "Tomorrow"];

  let valueStandard = "";
  let valueStandardHelperText = "";
  let valueStandardEnhanced = "Today";
  let valueStandardLeadingIcon = "";
  let valueStandardInvalid = "";
  let valueFilled = "";
  let valueFilledHelperText = "";
  let valueFilledEnhanced = "";
  let valueFilledLeadingIcon = "";
  let valueFilledInvalid = "";
  let valueOutlined = "";
  let valueOutlinedHelperText = "";
  let valueOutlinedEnhanced = "";
  let valueOutlinedLeadingIcon = "";
  let valueOutlinedInvalid = "";
  let valueShapedFilled = "";
  let valueShapedFilledHelperText = "";
  let valueShapedFilledEnhanced = "";
  let valueShapedFilledLeadingIcon = "";
  let valueShapedFilledInvalid = "";
  let valueShapedOutlined = "";
  let valueShapedOutlinedHelperText = "";
  let valueShapedOutlinedEnhanced = "";
  let valueShapedOutlinedLeadingIcon = "";
  let valueShapedOutlinedInvalid = "";
</script>

<style>
  .margins {
    margin: 18px 0 24px;
  }

  .columns {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .columns > * {
    margin-left: 12px;
  }
  .columns > *:first-child {
    margin-left: 0;
  }

  * :global(select, .demo-select-width) {
    min-width: 200px;
  }

  * :global(.shaped) {
    border-radius: 16px 16px 0 0;
  }

  * :global(.shaped-outlined .mdc-text-field__input) {
    padding-left: 32px;
    padding-right: 0;
  }
  *
    :global(.shaped-outlined
      .mdc-notched-outline
      .mdc-notched-outline__leading) {
    border-radius: 28px 0 0 28px;
    width: 28px;
  }
  *
    :global(.shaped-outlined
      .mdc-notched-outline
      .mdc-notched-outline__trailing) {
    border-radius: 0 28px 28px 0;
  }
  * :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__notch) {
    max-width: calc(100% - 28px * 2);
  }
  * :global(.shaped-outlined + .mdc-text-field-helper-line) {
    padding-left: 32px;
    padding-right: 28px;
  }
</style>

<!-- <Select
  enhanced
  bind:value={valueStandardEnhanced}
  class="demo-select-width"
  menu$class="demo-select-width">
  <Option value="" />
  {#each fruits as fruit}
    <Option value={fruit} selected={valueStandardEnhanced === fruit}>
      {fruit}
    </Option>
  {/each}
</Select> -->

<div class="bg-gray-400 w-full h-64 flex flex-wrap text-center px-2">
  <div class="bg-gray-400 flex w-full lg:flex-1"> 
		<div class="bg-gray-200 w-1/2 m-2 border-t-4 border-green-400 rounded">First quarter</div>
		<div class="bg-gray-200 w-1/2 m-2 border-t-4 border-red-500 rounded">Second quarter</div>
	</div>  
  <div class="bg-gray-400 flex w-full lg:flex-1"> 
		<div class="bg-gray-200 flex-1 m-2 border-t-4 border-blue-400 rounded">Third quarter</div>
		<div class="bg-gray-200 flex-1 m-2 border-t-4 border-purple-400 rounded">Last quarter</div>
	</div>
</div>
<div class="bg-gray-400 w-full h-64 flex flex-wrap text-center px-2">
  <div class="bg-gray-200 w-full lg:flex-1 m-2 rounded">
  <ChartLine/>
  </div>
  <div class="bg-gray-200 w-full lg:flex-1 m-2 rounded">Second third</div>
  <div class="bg-gray-200 w-full lg:flex-1 m-2 rounded">Third third</div>
</div>
<div class="bg-gray-400 w-full h-64 flex flex-wrap text-center px-2">
  <div class="bg-gray-200 w-full lg:flex-1 m-2 rounded">First half</div>
  <div class="bg-gray-200 w-full lg:flex-1 m-2 rounded">Second half</div>
</div>
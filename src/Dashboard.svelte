<script>
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

<div class="bg-gray-400 w-full h-48 flex justify-center text-center content-around pt-2 px-1">
  <div class="bg-gray-200 w-1/4 mx-2 mt-2">First quarter</div>
  <div class="bg-gray-300 w-1/4 mx-2 mt-2">Second quarter</div>
  <div class="bg-gray-200 w-1/4 mx-2 mt-2">Third quarter</div>
  <div class="bg-gray-200 w-1/4 mx-2 mt-2">Last quarter</div>
</div>
<div class="bg-gray-400 w-full h-48 flex justify-center text-center content-around pt-2 px-1">
  <div class="bg-gray-200 w-1/3 sm:w-full mx-2 mt-2">First third</div>
  <div class="bg-gray-300 w-1/3 sm:w-full mx-2 mt-2">Second third</div>
  <div class="bg-gray-200 w-1/3 sm:w-full mx-2 mt-2">Last third</div>
</div>
<div class="bg-gray-400 w-full h-48 flex justify-center text-center content-around pt-2 px-1">
  <div class="bg-gray-200 w-1/2 mx-2 mt-2">First half</div>
  <div class="bg-gray-300 w-1/2 mx-2 mt-2">Second half</div>
</div>

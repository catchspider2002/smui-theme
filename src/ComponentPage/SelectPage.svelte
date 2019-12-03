<script>
  import Select, { Option } from "@smui/select";
  import Icon from "@smui/select/icon/index";
  import HelperText from "@smui/select/helper-text/index";
  import Example from "./Example.svelte";

  let fruits = ["Apple", "Orange", "Banana", "Mango"];

  let valuePrefilled = "Orange";
  let valuePrefilledEnhanced = "Orange";
  let valueStandard = "";
  let valueStandardHelperText = "";
  let valueStandardEnhanced = "";
  let valueStandardLeadingIcon = "";
  let valueStandardInvalid = "";
  let valueStandardDisabled = "Orange";
  let valueFilled = "";
  let valueFilledHelperText = "";
  let valueFilledEnhanced = "";
  let valueFilledLeadingIcon = "";
  let valueFilledInvalid = "";
  let valueFilledDisabled = "Orange";
  let valueOutlined = "";
  let valueOutlinedHelperText = "";
  let valueOutlinedEnhanced = "";
  let valueOutlinedLeadingIcon = "";
  let valueOutlinedInvalid = "";
  let valueOutlinedDisabled = "";
  let valueShapedFilled = "";
  let valueShapedFilledHelperText = "";
  let valueShapedFilledEnhanced = "";
  let valueShapedFilledLeadingIcon = "";
  let valueShapedFilledDisabled = "";
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

<div class="text-2xl font-semibold py-4">Select</div>
<div class="pb-4">
  Select components are used for collecting user provided information from a
  list of options.
</div>
<div class="text-base font-semibold py-4">Import</div>
<div class="bg-gray-800 text-gray-300 text-sm p-4">
  import Switch from "@smui/switch";
  <br />
  import FormField from "@smui/form-field";
</div>
<Example>
  <span slot="header">Usage</span>
  <div slot="example">
    <div class="flex items-center content-between flex-wrap">
      <div class="pr-8 pb-8 flex-auto">
        <Select bind:value={valuePrefilled} label="Native Input">
          <Option value="" />
          {#each fruits as fruit}
            <Option value={fruit} selected={valuePrefilled === fruit}>
              {fruit}
            </Option>
          {/each}
        </Select>
      </div>
      <div class="p-4 flex-auto">
        <Select
          enhanced
          bind:value={valuePrefilledEnhanced}
          label="Enhanced Input"
          class="demo-select-width"
          menu$class="demo-select-width">
          <Option value="" />
          {#each fruits as fruit}
            <Option value={fruit} selected={valuePrefilledEnhanced === fruit}>
              {fruit}
            </Option>
          {/each}
        </Select>
      </div>
    </div>
  </div>
</Example>
<!-- <div class="text-base font-semibold py-4">Usage</div> -->
<div class="text-base font-semibold py-4">Standard</div>
<div class="pb-2">
  <Select bind:value={valueStandard} label="Fruit">
    <Option value="" />
    {#each fruits as fruit}
      <Option value={fruit} selected={valueStandard === fruit}>{fruit}</Option>
    {/each}
  </Select>
</div>
<div class="pb-2">
  <Select bind:value={valueStandardHelperText} label="With Helper Text">
    <Option value="" />
    {#each fruits as fruit}
      <Option value={fruit} selected={valueStandardHelperText === fruit}>
        {fruit}
      </Option>
    {/each}
  </Select>
  <HelperText>Helper text.</HelperText>
</div>
<div class="pb-2">
  <Select
    enhanced
    bind:value={valueStandardEnhanced}
    label="Enhanced"
    class="demo-select-width"
    menu$class="demo-select-width">
    <Option value="" />
    {#each fruits as fruit}
      <Option value={fruit} selected={valueStandardEnhanced === fruit}>
        {fruit}
      </Option>
    {/each}
  </Select>
</div>
<div class="pb-2">
  <Select
    withLeadingIcon
    bind:value={valueStandardLeadingIcon}
    label="Leading Icon"
    class="demo-select-width"
    menu$class="demo-select-width">
    <span slot="icon">
      <Icon class="material-icons">event</Icon>
    </span>
    <Option value="" />
    {#each fruits as fruit}
      <Option value={fruit} selected={valueStandardLeadingIcon === fruit}>
        {fruit}
      </Option>
    {/each}
  </Select>
</div>
<div class="pb-2">
  <Select invalid bind:value={valueStandardInvalid} label="Invalid">
    <Option value="" />
    {#each fruits as fruit}
      <Option value={fruit} selected={valueStandardInvalid === fruit}>
        {fruit}
      </Option>
    {/each}
  </Select>
</div>
<div class="pb-2">
  <Select bind:value={valueStandardDisabled} disabled label="Disabled">
    <Option value="" />
    {#each fruits as fruit}
      <Option value={fruit} selected={valueStandardDisabled === fruit}>
        {fruit}
      </Option>
    {/each}
  </Select>
</div>
<div class="text-base font-semibold py-4">Filled</div>
<div class="pb-2">
  <Select variant="filled" bind:value={valueFilled} label="Fruit">
    <Option value="" />
    {#each fruits as fruit}
      <Option value={fruit} selected={valueFilled === fruit}>{fruit}</Option>
    {/each}
  </Select>
</div>
<div class="pb-2">
  <Select
    variant="filled"
    bind:value={valueFilledHelperText}
    label="With Helper Text">
    <Option value="" />
    {#each fruits as fruit}
      <Option value={fruit} selected={valueFilledHelperText === fruit}>
        {fruit}
      </Option>
    {/each}
  </Select>
  <HelperText>Helper text.</HelperText>
</div>
<div class="pb-2">
  <Select
    variant="filled"
    enhanced
    bind:value={valueFilledEnhanced}
    label="Enhanced"
    class="demo-select-width"
    menu$class="demo-select-width">
    <Option value="" />
    {#each fruits as fruit}
      <Option value={fruit} selected={valueFilledEnhanced === fruit}>
        {fruit}
      </Option>
    {/each}
  </Select>
</div>
<div class="pb-2">
  <Select
    variant="filled"
    withLeadingIcon
    bind:value={valueFilledLeadingIcon}
    label="Leading Icon"
    class="demo-select-width"
    menu$class="demo-select-width">
    <span slot="icon">
      <Icon class="material-icons">event</Icon>
    </span>
    <Option value="" />
    {#each fruits as fruit}
      <Option value={fruit} selected={valueFilledLeadingIcon === fruit}>
        {fruit}
      </Option>
    {/each}
  </Select>
</div>
<div class="pb-2">
  <Select
    variant="filled"
    invalid
    bind:value={valueFilledInvalid}
    label="Invalid">
    <Option value="" />
    {#each fruits as fruit}
      <Option value={fruit} selected={valueFilledInvalid === fruit}>
        {fruit}
      </Option>
    {/each}
  </Select>
</div>
<div class="pb-2">
  <Select
    variant="filled"
    bind:value={valueFilledDisabled}
    disabled
    label="Disabled">
    <Option value="" />
    {#each fruits as fruit}
      <Option value={fruit} selected={valueFilledDisabled === fruit}>
        {fruit}
      </Option>
    {/each}
  </Select>
</div>
<div class="text-base font-semibold py-4">Outlined</div>
<div class="pb-2">
  <Select variant="outlined" bind:value={valueOutlined} label="Fruit">
    <Option value="" />
    {#each fruits as fruit}
      <Option value={fruit} selected={valueOutlined === fruit}>{fruit}</Option>
    {/each}
  </Select>
</div>
<div class="pb-2">
  <Select
    variant="outlined"
    bind:value={valueOutlinedHelperText}
    label="With Helper Text">
    <Option value="" />
    {#each fruits as fruit}
      <Option value={fruit} selected={valueOutlinedHelperText === fruit}>
        {fruit}
      </Option>
    {/each}
  </Select>
  <HelperText>Helper text.</HelperText>
</div>
<div class="pb-2">
  <Select
    variant="outlined"
    enhanced
    bind:value={valueOutlinedEnhanced}
    label="Enhanced"
    class="demo-select-width"
    menu$class="demo-select-width">
    <Option value="" />
    {#each fruits as fruit}
      <Option value={fruit} selected={valueOutlinedEnhanced === fruit}>
        {fruit}
      </Option>
    {/each}
  </Select>
</div>
<div class="pb-2">
  <Select
    variant="outlined"
    withLeadingIcon
    bind:value={valueOutlinedLeadingIcon}
    label="Leading Icon"
    class="demo-select-width"
    menu$class="demo-select-width">
    <span slot="icon">
      <Icon class="material-icons">event</Icon>
    </span>
    <Option value="" />
    {#each fruits as fruit}
      <Option value={fruit} selected={valueOutlinedLeadingIcon === fruit}>
        {fruit}
      </Option>
    {/each}
  </Select>
</div>
<div class="pb-2">
  <Select
    variant="outlined"
    invalid
    bind:value={valueOutlinedInvalid}
    label="Invalid">
    <Option value="" />
    {#each fruits as fruit}
      <Option value={fruit} selected={valueOutlinedInvalid === fruit}>
        {fruit}
      </Option>
    {/each}
  </Select>
</div>
<div class="pb-2">
  <Select
    variant="outlined"
    bind:value={valueOutlinedDisabled}
    disabled
    label="Disabled">
    <Option value="" />
    {#each fruits as fruit}
      <Option value={fruit} selected={valueOutlinedDisabled === fruit}>
        {fruit}
      </Option>
    {/each}
  </Select>
</div>
<div class="pb-2" />
<div class="text-base font-semibold py-4">Props</div>
<div class="pb-2">Property Description Type Default (Ant Design)</div>

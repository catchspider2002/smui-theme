<script>
  import Select, { Option } from "@smui/select";
  import Icon from "@smui/select/icon/index";
  import HelperText from "@smui/select/helper-text/index";
  import Page from "./Page.svelte";
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
  * :global(select, .demo-select-width) {
    min-width: 200px;
  }
</style>

<Page>
  <span slot="header">Select</span>
  <span slot="description">
    Select components are used for collecting user provided information from a
    list of options.
  </span>
  <span slot="import">
    import Select, {Option} from "@smui/select";
    <br />
    import Icon from "@smui/select/icon/index";
    <br />
    import HelperText from "@smui/select/helper-text/index";
  </span>
  <div slot="content">
    <Example>
      <span slot="header">Usage1</span>
      <div slot="horizontal" class="mr-8 mb-8">
        <Select bind:value={valuePrefilled} label="Native Input">
          <Option value="" />
          {#each fruits as fruit}
            <Option value={fruit} selected={valuePrefilled === fruit}>
              {fruit}
            </Option>
          {/each}
        </Select>
      </div>
      <div slot="horizontal" class="mb-8">
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
    </Example>
    <Example>
      <span slot="header">Standard</span>
      <div slot="horizontal" class="mr-8 mb-8">
        <Select bind:value={valueStandard} label="Fruit">
          <Option value="" />
          {#each fruits as fruit}
            <Option value={fruit} selected={valueStandard === fruit}>
              {fruit}
            </Option>
          {/each}
        </Select>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
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
      <div slot="horizontal" class="mr-8 mb-8">
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
      <div slot="horizontal" class="mr-8 mb-8">
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
      <div slot="horizontal" class="mr-8 mb-8">
        <Select invalid bind:value={valueStandardInvalid} label="Invalid">
          <Option value="" />
          {#each fruits as fruit}
            <Option value={fruit} selected={valueStandardInvalid === fruit}>
              {fruit}
            </Option>
          {/each}
        </Select>
      </div>
      <div slot="horizontal" class="mb-8">
        <Select bind:value={valueStandardDisabled} disabled label="Disabled">
          <Option value="" />
          {#each fruits as fruit}
            <Option value={fruit} selected={valueStandardDisabled === fruit}>
              {fruit}
            </Option>
          {/each}
        </Select>
      </div>
    </Example>
    <Example>
      <span slot="header">Filled</span>
      <div slot="horizontal" class="mr-8 mb-8">
        <Select variant="filled" bind:value={valueFilled} label="Fruit">
          <Option value="" />
          {#each fruits as fruit}
            <Option value={fruit} selected={valueFilled === fruit}>
              {fruit}
            </Option>
          {/each}
        </Select>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
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
      <div slot="horizontal" class="mr-8 mb-8">
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
      <div slot="horizontal" class="mr-8 mb-8">
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
      <div slot="horizontal" class="mr-8 mb-8">
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
      <div slot="horizontal" class="mb-8">
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
    </Example>
    <Example>
      <span slot="header">Outlined</span>
      <div slot="horizontal" class="mr-8 mb-8">
        <Select variant="outlined" bind:value={valueOutlined} label="Fruit">
          <Option value="" />
          {#each fruits as fruit}
            <Option value={fruit} selected={valueOutlined === fruit}>
              {fruit}
            </Option>
          {/each}
        </Select>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
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
      <div slot="horizontal" class="mr-8 mb-8">
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
      <div slot="horizontal" class="mr-8 mb-8">
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
      <div slot="horizontal" class="mr-8 mb-8">
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
      <div slot="horizontal" class="mb-8">
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
    </Example>
  </div>
</Page>

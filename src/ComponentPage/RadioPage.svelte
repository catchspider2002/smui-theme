<script>
  import Radio from "@smui/radio";
  import FormField from "@smui/form-field";
  import Page from "./Page.svelte";
  import Example from "./Example.svelte";

  let selected1 = "Checked";
  let selected2 = "Checked";
  let selected3 = "Disabled_Checked";
  let selected4 = "Disabled_Checked";
  let selected5 = "RightLabel";
</script>

<style>
  * :global(.mdc-form-field) {
    color: var(--font-color);
  }
</style>

<Page>
  <span slot="header">Radio</span>
  <span slot="description">
    Radio button allows the user to select one option from a set while seeing
    all available options.
  </span>
  <span slot="import">
    import Radio from "@smui/radio";
    <br />
    import FormField from "@smui/form-field";
  </span>
  <div slot="content">
    <Example>
      <span slot="header">Usage</span>

      <div slot="horizontal" class="mr-8 mb-8">
        <FormField>
          <Radio bind:group={selected1} value="Checked" />
          <span slot="label">Checked</span>
        </FormField>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <FormField>
          <Radio bind:group={selected2} value="Unchecked" />
          <span slot="label">Unchecked</span>
        </FormField>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <FormField>
          <Radio bind:group={selected3} disabled value="Disabled_Checked" />
          <span slot="label">Disabled Checked</span>
        </FormField>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <FormField>
          <Radio bind:group={selected4} disabled value="Disabled_Unchecked" />
          <span slot="label">Disabled Unchecked</span>
        </FormField>
      </div>
    </Example>

    <Example>
      <span slot="header">Usage</span>
      <div slot="horizontal" class="mr-8 mb-8">
        <FormField>
          <Radio bind:group={selected5} value="RightLabel" />
          <span slot="label">Right label</span>
        </FormField>
      </div>

      <div slot="horizontal" class="mr-8 mb-8">
        <FormField align="end">
          <Radio bind:group={selected5} value="LeftLabel" />
          <span slot="label">Left label</span>
        </FormField>
      </div>
    </Example>
  </div>
</Page>

<script>
  import Switch from "@smui/switch";
  import FormField from "@smui/form-field";
  import Page from "./Page.svelte";
  import Example from "./Example.svelte";

  let selected1 = true;
  let selected2 = false;
  let selected3 = true;
  let selected4 = false;
  let selected5 = false;
  let selected6 = false;
</script>

<style>
  * :global(.mdc-form-field) {
    color: var(--font-color);
  }

  /* *
    :global(.mdc-switch.mdc-switch--checked
      .mdc-switch__thumb, .mdc-switch.mdc-switch--checked .mdc-switch__track) {
    background-color: var(--mdc-theme-primary);
    border-color: var(--mdc-theme-primary);
  } */
</style>

<Page>
  <span slot="header">Switch</span>
  <span slot="description">
    Switch toggles the state of a single setting on or off.
  </span>
  <span slot="import">
    import Switch from "@smui/switch";
    <br />
    import FormField from "@smui/form-field";
  </span>
  <div slot="content">
    <Example>
      <span slot="header">Usage</span>

      <div slot="horizontal" class="mr-8 mb-8">
        <FormField>
          <Switch bind:checked={selected1} />
          <span slot="label">Checked</span>
        </FormField>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <FormField>
          <Switch bind:checked={selected2} />
          <span slot="label">Unchecked</span>
        </FormField>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <FormField>
          <Switch bind:checked={selected3} disabled />
          <span slot="label">Disabled Checked</span>
        </FormField>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <FormField>
          <Switch bind:checked={selected4} disabled />
          <span slot="label">Disabled Unchecked</span>
        </FormField>
      </div>
    </Example>
    <Example>
      <span slot="header">Labels</span>

      <div slot="horizontal" class="mr-8 mb-8">
        <FormField>
          <Switch bind:checked={selected5} />
          <span slot="label">Right label</span>
        </FormField>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <FormField align="end">
          <Switch bind:checked={selected6} />
          <span slot="label">Left label</span>
        </FormField>
      </div>
    </Example>
  </div>
</Page>

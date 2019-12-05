<script>
  import Checkbox from "@smui/checkbox";
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

<Page>
  <span slot="header">Checkbox</span>
  <span slot="description">
    Checkbox allows the user to select one or more items from a set.
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
          <Checkbox bind:checked={selected1} />
          <span slot="label">Checked</span>
        </FormField>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <FormField>
          <Checkbox bind:checked={selected2} />
          <span slot="label">Unchecked</span>
        </FormField>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <FormField>
          <Checkbox bind:checked={selected3} disabled />
          <span slot="label">Disabled Checked</span>
        </FormField>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <FormField>
          <Checkbox bind:checked={selected4} disabled />
          <span slot="label">Disabled Unchecked</span>
        </FormField>
      </div>
    </Example>
    <Example>
      <span slot="header">Labels</span>

      <div slot="horizontal" class="mr-8 mb-8">
        <FormField>
          <Checkbox bind:checked={selected5} />
          <span slot="label">Right label</span>
        </FormField>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <FormField align="end">
          <Checkbox bind:checked={selected6} />
          <span slot="label">Left label</span>
        </FormField>
      </div>
    </Example>
  </div>
</Page>

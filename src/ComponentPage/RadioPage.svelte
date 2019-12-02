<script>
  import Radio from "@smui/radio";
  import FormField from "@smui/form-field";

  let selected1 = "Checked";
  let selected2 = "Checked";
  let selected3 = "Disabled_Checked";
  let selected4 = "Disabled_Checked";
  let selected5 = "RightLabel";
</script>

<div class="text-2xl font-semibold py-4">Radio</div>
<div class="pb-4">
  Radio button allows the user to select one option from a set while seeing all
  available options.
</div>
<div class="text-base font-semibold py-4">Import</div>
<div class="bg-gray-800 text-gray-300 text-sm p-4">
  import Radio from "@smui/radio";
  <br />
  import FormField from "@smui/form-field";
</div>
<div class="text-base font-semibold py-4">Usage</div>
<div class="pb-2">
  <FormField>
    <Radio bind:group={selected1} value="Checked" />
    <span slot="label">Checked</span>
  </FormField>
</div>
<div class="pb-2">
  <FormField>
    <Radio bind:group={selected2} value="Unchecked" />
    <span slot="label">Unchecked</span>
  </FormField>
</div>
<div class="pb-2">
  <FormField>
    <Radio bind:group={selected3} disabled value="Disabled_Checked" />
    <span slot="label">Disabled Checked</span>
  </FormField>
</div>
<div class="pb-2">
  <FormField>
    <Radio bind:group={selected4} disabled value="Disabled_Unchecked" />
    <span slot="label">Disabled Unchecked</span>
  </FormField>
</div>
<div class="text-base font-semibold py-4">Labels</div>
<div class="pb-2">
  <FormField>
    <Radio bind:group={selected5} value="RightLabel" />
    <span slot="label">Right label</span>
  </FormField>
</div>
<div class="pb-2">
  <FormField align="end">
    <Radio bind:group={selected5} value="LeftLabel" />
    <span slot="label">Left label</span>
  </FormField>
</div>
<div class="text-base font-semibold py-4">Props</div>
<div class="pb-2">Property Description Type Default (Ant Design)</div>

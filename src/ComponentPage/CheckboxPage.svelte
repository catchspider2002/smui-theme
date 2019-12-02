<script>
  import Checkbox from "@smui/checkbox";
  import FormField from "@smui/form-field";

  let selected1 = true;
  let selected2 = false;
  let selected3 = true;
  let selected4 = false;
  let selected5 = false;
  let selected6 = false;
</script>

<!-- Checkbox -->
<div class="text-2xl font-semibold py-4">Checkbox</div>
<div class="pb-4">
  Checkbox allows the user to select one or more items from a set.
</div>
<div class="text-base font-semibold py-4">Import</div>
<div class="bg-gray-800 text-gray-300 text-sm p-4">
  import Checkbox from "@smui/checkbox";
  <br />
  import FormField from "@smui/form-field";
</div>
<div class="text-base font-semibold py-4">Usage</div>
<div class="pb-2">
  <FormField>
    <Checkbox bind:checked={selected1} />
    <span slot="label">Checked</span>
  </FormField>
</div>
<div class="pb-2">
  <FormField>
    <Checkbox bind:checked={selected2} />
    <span slot="label">Unchecked</span>
  </FormField>
</div>
<div class="pb-2">
  <FormField>
    <Checkbox bind:checked={selected3} disabled />
    <span slot="label">Disabled Checked</span>
  </FormField>
</div>
<div class="pb-2">
  <FormField>
    <Checkbox bind:checked={selected4} disabled />
    <span slot="label">Disabled Unchecked</span>
  </FormField>
</div>
<div class="text-base font-semibold py-4">Labels</div>
<div class="pb-2">
  <FormField>
    <Checkbox bind:checked={selected5} />
    <span slot="label">Right label</span>
  </FormField>
</div>
<div class="pb-2">
  <FormField align="end">
    <Checkbox bind:checked={selected6} />
    <span slot="label">Left label</span>
  </FormField>
</div>
<div class="text-base font-semibold py-4">Props</div>
<div class="pb-2">Property Description Type Default (Ant Design)</div>



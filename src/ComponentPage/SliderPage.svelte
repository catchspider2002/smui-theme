<script>
  import Slider from "@smui/slider";
  import FormField from "@smui/form-field";
  let value = 50;
  let value2 = 0;
  let value3 = 0;
</script>

<div class="text-2xl font-semibold py-4">Slider</div>
<div class="pb-4">
  Sliders allow users to make selections from a range of values.
</div>
<div class="text-base font-semibold py-4">Import</div>
<div class="bg-gray-800 text-gray-300 text-sm p-4">
  import Switch from "@smui/switch";
  <br />
  import FormField from "@smui/form-field";
</div>
<div class="text-base font-semibold py-4">Usage</div>
<div class="pb-2">

  <!-- <FormField align="end" style="display: flex;">
    <Slider bind:value />
    <span
      class="block"
      slot="label"
      style="padding-right: 12px; width: max-content;">
      Amount of Wonder
    </span>
  </FormField> -->

  <div class="flex">
    <span class="block" style="padding-right: 12px; width: max-content;">
      Amount of Wonder
    </span>
    <Slider bind:value />
  </div>
</div>
<div class="text-base font-semibold py-4">Discrete with min/max/step</div>
<div class="pb-2">
  <Slider bind:value={value2} min={-10} max={10} step={2} discrete />
</div>
<div class="text-base font-semibold py-4">Non Discrete with min/max/step</div>
<div class="pb-2">
  <Slider bind:value={value2} min={-10} max={10} step={2} />
</div>
<div class="text-base font-semibold py-4">
  Discrete with min/max/step and tick marks:
</div>
<div class="pb-2">
  <Slider
    bind:value={value3}
    min={-10}
    max={10}
    step={2}
    discrete
    displayMarkers />
</div>
<div class="text-base font-semibold py-4">Props</div>
<div class="pb-2">Property Description Type Default (Ant Design)</div>

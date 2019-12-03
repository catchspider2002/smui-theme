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
  <div class="flex items-center py-2">
    <div class="flex-1-0-auto pr-4">Continuous Slider</div>
    <Slider class="flex-auto" bind:value />
  </div>
  <div class="flex items-center py-2">
    <div class="flex-1-0-auto pr-4">Discrete Slider</div>
    <Slider bind:value={value2} min={-10} max={10} step={2} discrete />
  </div>
  <div class="flex items-center py-2">
    <div class="flex-1-0-auto pr-4">Discrete with tick marks</div>
    <Slider
      bind:value={value3}
      min={-10}
      max={10}
      step={2}
      discrete
      displayMarkers />
  </div>
  <div class="flex items-center py-2">
    <div class="flex-1-0-auto pr-4">Disabled</div>
    <Slider class="flex-auto" bind:value disabled />
  </div>
</div>
<div class="text-base font-semibold py-4">Props</div>
<div class="pb-2">Property Description Type Default (Ant Design)</div>

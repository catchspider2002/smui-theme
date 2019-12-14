<script>
  import Slider from "@smui/slider";
  import FormField from "@smui/form-field";
  import Page from "./Page.svelte";
  import Example from "./Example.svelte";

  let value = 50;
  let value2 = 0;
  let value3 = 0;
  let value4 = 50;
</script>

<style>
  * :global(.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track) {
    background-color: var(--mdc-theme-primary);
  }

  * :global(.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb) {
    fill: var(--mdc-theme-primary);
    stroke: var(--mdc-theme-primary);
  }

  *
    :global(.mdc-slider:not(.mdc-slider--disabled)
      .mdc-slider__focus-ring, .mdc-slider:not(.mdc-slider--disabled)
      .mdc-slider__pin) {
    background-color: var(--mdc-theme-primary);
  }

  *
    :global(.mdc-slider:not(.mdc-slider--disabled)
      .mdc-slider__track-marker-container:after, .mdc-slider:not(.mdc-slider--disabled)
      .mdc-slider__track-marker:after) {
    background-color: var(--mdc-theme-primary);
  }
</style>

<Page>
  <span slot="header">Slider</span>
  <span slot="description">
    Sliders allow users to make selections from a range of values.
  </span>
  <span slot="import">
    import Select from "@smui/select";
    <br />
    import Icon from "@smui/select/icon/index";
    <br />
    import HelperText from "@smui/select/helper-text/index";
  </span>
  <div slot="content">
    <Example>
      <span slot="header">Usage</span>
      <div slot="vertical" class="mr-8 mb-8">
        <div class="flex items-center py-2">
          <div class="flex-1-0-auto pr-4">Continuous Slider</div>
          <Slider class="flex-auto" bind:value />
        </div>
      </div>
      <div slot="vertical" class="mr-8 mb-8">
        <div class="flex items-center py-2">
          <div class="flex-1-0-auto pr-4">Discrete Slider</div>
          <Slider bind:value={value2} min={-10} max={10} step={2} discrete />
        </div>
      </div>
      <div slot="vertical" class="mr-8 mb-8">
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
      </div>
      <div slot="vertical" class="mr-8 mb-8">
        <div class="flex items-center py-2">
          <div class="flex-1-0-auto pr-4">Disabled</div>
          <Slider class="flex-auto" bind:value={value4} disabled />
        </div>
      </div>
    </Example>
  </div>
</Page>

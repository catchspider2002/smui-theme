<script>
  import Textfield, { Input, Textarea } from "@smui/textfield";
  import Icon from "@smui/textfield/icon/index";
  import HelperText from "@smui/textfield/helper-text/index";
  import CharacterCounter from "@smui/textfield/character-counter/index";
  import { Icon as CommonIcon } from "@smui/common";
  import FloatingLabel from "@smui/floating-label";
  import LineRipple from "@smui/line-ripple";
  import NotchedOutline from "@smui/notched-outline";
  import Page from "./Page.svelte";
  import Example from "./Example.svelte";

  let valueTextarea = "";
  let valueTextareaCharCount = "";
  let valueFullwidthTextarea = "";
</script>

<style>
  * :global(select, .demo-select-width) {
    min-width: 200px;
  }
</style>

<Page>
  <span slot="header">Text area</span>
  <span slot="description">
    Text area components are used for collecting large amounts of textual data.
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
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield
          textarea
          bind:value={valueTextarea}
          label="Label"
          input$aria-controls="helper-text-textarea"
          input$aria-describedby="helper-text-textarea" />
        <HelperText id="helper-text-textarea">Helper Text</HelperText>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield
          textarea
          input$maxlength="100"
          bind:value={valueTextareaCharCount}
          label="Label">
          <CharacterCounter>0 / 100</CharacterCounter>
        </Textfield>
      </div>
    </Example>
    <Example>
      <span slot="header">Full width</span>
      <div slot="horizontal" class="mb-8 w-full">
        <Textfield
          fullwidth
          textarea
          bind:value={valueFullwidthTextarea}
          label="Label"
          input$aria-controls="helper-text-fullwidth-textarea"
          input$aria-describedby="helper-text-fullwidth-textarea" />
        <HelperText id="helper-text-fullwidth-textarea">Helper Text</HelperText>
      </div>
    </Example>
  </div>
</Page>

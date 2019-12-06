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

  let valueClickable = "rt";
  let dirtyClickable = false;
  let invalidClickable = false;
  let valueStandardA = "";
  let valueStandardB = "";
  let valueStandardC = "";
  let valueStandardD = "";
  let valueFilledA = "";
  let valueFilledB = "";
  let valueFilledC = "";
  let valueFilledD = "";
  let valueOutlinedA = "";
  let valueOutlinedB = "";
  let valueOutlinedC = "";
  let valueOutlinedD = "";
  let valueDenseA = "";
  let valueDenseB = "";
  let valueDenseC = "";
  let valueDenseIconA = "";
  let valueDenseIconB = "";
  let valueDenseIconC = "";
  let valueNoLabelA = "";
  let valueNoLabelB = "";
  let valueNoLabelC = "";
  let valuePersistentA = "";
  let valuePersistentB = "";
  let valuePersistentC = "";
  let valueCharCountA = "";
  let valueCharCountB = "";
  let valueCharCountC = "";
  let valueIconsA = "";
  let valueIconsB = "";
  let valueIconsC = "";
  let valueTextarea = "";
  let valueTextareaCharCount = "";
  let valueFullwidth = "";
  let valueFullwidthTextarea = "";
  let valueElementsLabel = "";
  let valueTypeNumber = 0;
  let valueTypeDate = "";
  let valueTypeFiles = [];
  let valueManualA = "";
  let valueManualB = "";
  let valueManualC = "";
  let valueManualD = "";

  function clickableHandler() {
    alert(`Sending to ${valueClickable}!`);
    valueClickable = "";
    dirtyClickable = false;
  }
</script>

<style>
  * :global(select, .demo-select-width) {
    min-width: 200px;
  }
</style>

<Page>
  <span slot="header">Text field</span>
  <span slot="description">
    Text field allows users to input, edit, and select text.
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
          type="email"
          withTrailingIcon={valueClickable !== ''}
          bind:dirty={dirtyClickable}
          bind:invalid={invalidClickable}
          updateInvalid
          bind:value={valueClickable}
          label="To"
          style="min-width: 250px;"
          input$autocomplete="email">
          {#if valueClickable !== '' && dirtyClickable && !invalidClickable}
            <Icon
              class="material-icons"
              role="button"
              on:click={clickableHandler}>
              send
            </Icon>
          {/if}
        </Textfield>
        <HelperText validationMsg>That's not a valid email address.</HelperText>
      </div>
    </Example>
    <Example>
      <span slot="header">Standard</span>
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield
          bind:value={valueStandardA}
          label="Label"
          input$aria-controls="helper-text-standard-a"
          input$aria-describedby="helper-text-standard-a" />
        <HelperText id="helper-text-standard-a">Helper Text</HelperText>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield
          withLeadingIcon
          bind:value={valueStandardB}
          label="Leading Icon"
          input$aria-controls="helper-text-standard-b"
          input$aria-describedby="helper-text-standard-b">
          <Icon class="material-icons">event</Icon>
        </Textfield>
        <HelperText id="helper-text-standard-b">Helper Text</HelperText>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield
          withTrailingIcon
          bind:value={valueStandardC}
          label="Trailing Icon"
          input$aria-controls="helper-text-standard-c"
          input$aria-describedby="helper-text-standard-c">
          <Icon class="material-icons">delete</Icon>
        </Textfield>
        <HelperText id="helper-text-standard-c">Helper Text</HelperText>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield
          withLeadingIcon
          withTrailingIcon
          bind:value={valueIconsA}
          label="Both icons">
          <Icon class="material-icons">event</Icon>
          <Icon class="material-icons">delete</Icon>
        </Textfield>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield
          invalid
          bind:value={valueStandardD}
          label="Invalid"
          input$aria-controls="helper-text-standard-d"
          input$aria-describedby="helper-text-standard-d" />
        <HelperText id="helper-text-standard-d">Helper Text</HelperText>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield
          disabled
          value=""
          label="Disabled"
          input$aria-controls="helper-text-disabled-a"
          input$aria-describedby="helper-text-disabled-a" />
        <HelperText id="helper-text-disabled-a">Helper Text</HelperText>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield
          bind:value={valueCharCountA}
          label="Character Count"
          input$maxlength="18"
          input$aria-controls="helper-text-char-count-a"
          input$aria-describedby="helper-text-char-count-a" />
        <HelperText id="helper-text-char-count-a">
          Helper Text
          <span slot="character-counter">
            <CharacterCounter>0 / 18</CharacterCounter>
          </span>
        </HelperText>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield
          bind:value={valuePersistentA}
          label="Persistent helper text"
          input$aria-controls="helper-text-persistent-a"
          input$aria-describedby="helper-text-persistent-a" />
        <HelperText id="helper-text-persistent-a" persistent>
          Helper Text
        </HelperText>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield
          dense
          bind:value={valueDenseA}
          label="Dense"
          input$aria-controls="helper-text-dense-a"
          input$aria-describedby="helper-text-dense-a" />
        <HelperText id="helper-text-dense-a">Helper Text</HelperText>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield
          dense
          withLeadingIcon
          bind:value={valueDenseIconA}
          label="Dense with icon"
          input$aria-controls="helper-text-dense-icon-a"
          input$aria-describedby="helper-text-dense-icon-a">
          <Icon class="material-icons">event</Icon>
        </Textfield>
        <HelperText id="helper-text-dense-icon-a">Helper Text</HelperText>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield bind:value={valueNoLabelA} />
      </div>
    </Example>
    <Example>
      <span slot="header">Filled</span>
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield
          variant="filled"
          bind:value={valueFilledA}
          label="Label"
          input$aria-controls="helper-text-filled-a"
          input$aria-describedby="helper-text-filled-a" />
        <HelperText id="helper-text-filled-a">Helper Text</HelperText>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield
          withLeadingIcon
          variant="filled"
          bind:value={valueFilledB}
          label="Leading Icon"
          input$aria-controls="helper-text-filled-b"
          input$aria-describedby="helper-text-filled-b">
          <Icon class="material-icons">event</Icon>
        </Textfield>
        <HelperText id="helper-text-filled-b">Helper Text</HelperText>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield
          withTrailingIcon
          variant="filled"
          bind:value={valueFilledC}
          label="Trailing Icon"
          input$aria-controls="helper-text-filled-c"
          input$aria-describedby="helper-text-filled-c">
          <Icon class="material-icons">delete</Icon>
        </Textfield>
        <HelperText id="helper-text-filled-c">Helper Text</HelperText>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield
          variant="filled"
          withLeadingIcon
          withTrailingIcon
          bind:value={valueIconsB}
          label="Both icons">
          <Icon class="material-icons">event</Icon>
          <Icon class="material-icons">delete</Icon>
        </Textfield>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield
          invalid
          variant="filled"
          bind:value={valueFilledD}
          label="Invalid"
          input$aria-controls="helper-text-filled-d"
          input$aria-describedby="helper-text-filled-d" />
        <HelperText id="helper-text-filled-d">Helper Text</HelperText>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield
          variant="filled"
          disabled
          value=""
          label="Disabled"
          input$aria-controls="helper-text-disabled-b"
          input$aria-describedby="helper-text-disabled-b" />
        <HelperText id="helper-text-disabled-b">Helper Text</HelperText>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield
          variant="filled"
          bind:value={valueCharCountB}
          label="Character Count"
          input$maxlength="18"
          input$aria-controls="helper-text-char-count-b"
          input$aria-describedby="helper-text-char-count-b" />
        <HelperText id="helper-text-char-count-b">
          Helper Text
          <span slot="character-counter">
            <CharacterCounter>0 / 18</CharacterCounter>
          </span>
        </HelperText>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield
          variant="filled"
          bind:value={valuePersistentB}
          label="Persistent helper text"
          input$aria-controls="helper-text-persistent-b"
          input$aria-describedby="helper-text-persistent-b" />
        <HelperText id="helper-text-persistent-b" persistent>
          Helper Text
        </HelperText>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield
          variant="filled"
          dense
          bind:value={valueDenseB}
          label="Dense"
          input$aria-controls="helper-text-dense-b"
          input$aria-describedby="helper-text-dense-b" />
        <HelperText id="helper-text-dense-b">Helper Text</HelperText>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield
          variant="filled"
          dense
          withLeadingIcon
          bind:value={valueDenseIconB}
          label="Dense with icon"
          input$aria-controls="helper-text-dense-icon-b"
          input$aria-describedby="helper-text-dense-icon-b">
          <Icon class="material-icons">event</Icon>
        </Textfield>
        <HelperText id="helper-text-dense-icon-b">Helper Text</HelperText>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield variant="filled" bind:value={valueNoLabelB} />
      </div>
    </Example>
    <Example>
      <span slot="header">Outlined</span>
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield
          variant="outlined"
          bind:value={valueOutlinedA}
          label="Label"
          input$aria-controls="helper-text-outlined-a"
          input$aria-describedby="helper-text-outlined-a" />
        <HelperText id="helper-text-outlined-a">Helper Text</HelperText>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield
          variant="outlined"
          withLeadingIcon
          bind:value={valueOutlinedB}
          label="Leading Icon"
          input$aria-controls="helper-text-outlined-b"
          input$aria-describedby="helper-text-outlined-b">
          <Icon class="material-icons">event</Icon>
        </Textfield>
        <HelperText id="helper-text-outlined-b">Helper Text</HelperText>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield
          variant="outlined"
          withTrailingIcon
          bind:value={valueOutlinedC}
          label="Trailing Icon"
          input$aria-controls="helper-text-outlined-c"
          input$aria-describedby="helper-text-outlined-c">
          <Icon class="material-icons">delete</Icon>
        </Textfield>
        <HelperText id="helper-text-outlined-c">Helper Text</HelperText>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield
          variant="outlined"
          withLeadingIcon
          withTrailingIcon
          bind:value={valueIconsC}
          label="Both icons">
          <Icon class="material-icons">event</Icon>
          <Icon class="material-icons">delete</Icon>
        </Textfield>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield
          invalid
          variant="outlined"
          bind:value={valueOutlinedD}
          label="Invalid"
          input$aria-controls="helper-text-outlined-c"
          input$aria-describedby="helper-text-outlined-c" />
        <HelperText id="helper-text-outlined-c">Helper Text</HelperText>
      </div>
      <div slot="horizontal" class="mb-8">
        <Textfield
          variant="outlined"
          disabled
          value=""
          label="Disabled"
          input$aria-controls="helper-text-disabled-c"
          input$aria-describedby="helper-text-disabled-c" />
        <HelperText id="helper-text-disabled-c">Helper Text</HelperText>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield
          variant="outlined"
          bind:value={valueCharCountC}
          label="Character Count"
          input$maxlength="18"
          input$aria-controls="helper-text-char-count-c"
          input$aria-describedby="helper-text-char-count-c" />
        <HelperText id="helper-text-char-count-c">
          Helper Text
          <span slot="character-counter">
            <CharacterCounter>0 / 18</CharacterCounter>
          </span>
        </HelperText>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield
          variant="outlined"
          bind:value={valuePersistentC}
          label="Persistent helper text"
          input$aria-controls="helper-text-persistent-c"
          input$aria-describedby="helper-text-persistent-c" />
        <HelperText id="helper-text-persistent-c" persistent>
          Helper Text
        </HelperText>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield
          variant="outlined"
          dense
          bind:value={valueDenseC}
          label="Dense"
          input$aria-controls="helper-text-dense-c"
          input$aria-describedby="helper-text-dense-c" />
        <HelperText id="helper-text-dense-c">Helper Text</HelperText>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield
          variant="outlined"
          dense
          withLeadingIcon
          bind:value={valueDenseIconC}
          label="Dense with icon"
          input$aria-controls="helper-text-dense-icon-c"
          input$aria-describedby="helper-text-dense-icon-c">
          <Icon class="material-icons">event</Icon>
        </Textfield>
        <HelperText id="helper-text-dense-icon-c">Helper Text</HelperText>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Textfield variant="outlined" bind:value={valueNoLabelC} />
      </div>
    </Example>
  </div>
</Page>

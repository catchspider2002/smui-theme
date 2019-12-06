<script>
  import IconButton, { Icon } from "@smui/icon-button";
  import Alert from "../Templates/Organisms/Molecules/Atoms/Alert.svelte";
  import Page from "./Page.svelte";
  import Example from "./Example.svelte";
</script>

<Page>
  <span slot="header">Alert</span>
  <span slot="description">
    Alerts are used to communicate a state that affects a system, feature or
    page.
  </span>
  <span slot="import">
    import Icon from "@smui/select/icon/index";
    <br />
    import HelperText from "@smui/select/helper-text/index";
  </span>
  <div slot="content">
    <Example>
      <span slot="header">Usage</span>
      <div slot="vertical" class="mb-8">
        <Alert>
          <Icon class="material-icons pl-4 py-1">check_circle</Icon>
          <span slot="description">Description for alert</span>
        </Alert>
      </div>
    </Example>
    <Example>
      <span slot="header">Solid</span>
      <div slot="vertical" class="mb-8">
        <Alert variant="solid">
          <Icon class="material-icons pl-4 py-1">check_circle</Icon>
          <span slot="description">Description for alert</span>
        </Alert>
      </div>
    </Example>
    <Example>
      <span slot="header">Outline</span>
      <div slot="vertical" class="mb-8">
        <Alert variant="outline" title="Alert Title">
          <Icon class="material-icons pl-4 py-1">check_circle</Icon>
          <span slot="description">Description for alert</span>
        </Alert>
      </div>
    </Example>
    <Example>
      <span slot="header">Top Border</span>
      <div slot="vertical" class="mb-8">
        <Alert variant="solid" border="top">
          <Icon class="material-icons pl-4 py-1">check_circle</Icon>
          <span slot="description">Description for alert</span>
        </Alert>
      </div>
    </Example>
    <Example>
      <span slot="header">Left Border</span>
      <div slot="vertical" class="mb-8">
        <Alert border="left">
          <span slot="description">Description for alert</span>
        </Alert>
      </div>
    </Example>
  </div>
</Page>

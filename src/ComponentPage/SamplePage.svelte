<script>
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
          <span slot="description">Description for alert</span>
        </Alert>
      </div>
    </Example>
  </div>
</Page>

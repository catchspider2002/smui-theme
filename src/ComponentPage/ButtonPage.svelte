<script>
  import Button, { Group, GroupItem, Label, Icon } from "@smui/button";
  import Menu from "@smui/menu";
  import List, { Item, Separator, Text } from "@smui/list";
  import Page from "./Page.svelte";
  import Example from "./Example.svelte";

  let clicked = 0;
  let menu;
  let menu2;
</script>

<style>
  * :global(.myClass) {
    text-decoration: underline !important;
  }

  * :global(.mdc-button, .smui-button__group) {
    margin-bottom: 0.4em;
  }

  * :global(.smui-button__group .mdc-button) {
    margin-bottom: 0;
  }
</style>

<Page>
  <span slot="header">Button</span>
  <span slot="description">
    Buttons allow users to take actions, and make choices, with a single tap.
  </span>
  <span slot="import">
    import Radio from "@smui/radio";
    <br />
    import FormField from "@smui/form-field";
  </span>
  <div slot="content">
    <Example>
      <span slot="header">Contained Buttons</span>
      <div slot="horizontal" class="mr-8 mb-8">
        <Button on:click={() => clicked++} variant="unelevated">
          <Label>PRIMARY</Label>
        </Button>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Button
          color="secondary"
          on:click={() => clicked++}
          variant="unelevated">
          <Label>SECONDARY</Label>
        </Button>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Button on:click={() => clicked++} variant="raised">
          <Label>RAISED</Label>
        </Button>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Button color="secondary" on:click={() => clicked++} variant="raised">
          <Label>RAISED</Label>
        </Button>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Button on:click={() => clicked++} variant="unelevated" disabled>
          <Label>Disabled</Label>
        </Button>
      </div>
    </Example>
    <Example>
      <span slot="header">Outlined Buttons</span>
      <div slot="horizontal" class="mr-8 mb-8">
        <Button on:click={() => clicked++} variant="outlined">
          <Label>Outlined</Label>
        </Button>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Button color="secondary" on:click={() => clicked++} variant="outlined">
          <Label>Outlined</Label>
        </Button>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Button on:click={() => clicked++} variant="outlined" disabled>
          <Label>Disabled</Label>
        </Button>
      </div>
    </Example>
    <Example>
      <span slot="header">Text Buttons</span>
      <div slot="horizontal" class="mr-8 mb-8">
        <Button on:click={() => clicked++}>
          <Label>Default</Label>
        </Button>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Button color="secondary" on:click={() => clicked++}>
          <Label>Default</Label>
        </Button>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Button on:click={() => clicked++} disabled>
          <Label>Disabled</Label>
        </Button>
      </div>
    </Example>
    <Example>
      <span slot="header">Buttons with icons</span>
      <div slot="horizontal" class="mr-8 mb-8">
        <Button on:click={() => clicked++} variant="unelevated">
          <Label>Unelevated</Label>
          <Icon class="material-icons">favorite</Icon>
        </Button>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Button on:click={() => clicked++} variant="unelevated">
          <Icon class="material-icons">favorite</Icon>
          <Label>Unelevated</Label>
        </Button>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Button on:click={() => clicked++} variant="raised">
          <Label>Raised</Label>
          <Icon class="material-icons">favorite</Icon>
        </Button>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Button on:click={() => clicked++} variant="raised">
          <Icon class="material-icons">favorite</Icon>
          <Label>Raised</Label>
        </Button>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Button on:click={() => clicked++} variant="outlined">
          <Icon class="material-icons">favorite</Icon>
          <Label>Outlined</Label>
        </Button>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Button on:click={() => clicked++} variant="outlined">
          <Label>Outlined</Label>
          <Icon class="material-icons">favorite</Icon>
        </Button>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Button on:click={() => clicked++}>
          <Icon class="material-icons">favorite</Icon>
          <Label>Leading Icon</Label>
        </Button>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Button on:click={() => clicked++}>
          <Label>Trailing Icon</Label>
          <Icon class="material-icons">favorite</Icon>
        </Button>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Button color="secondary" on:click={() => clicked++}>
          <Icon class="material-icons">favorite</Icon>
          <Label>Leading Icon</Label>
        </Button>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Button color="secondary" on:click={() => clicked++}>
          <Label>Trailing Icon</Label>
          <Icon class="material-icons">favorite</Icon>
        </Button>
      </div>
    </Example>
    <Example>
      <span slot="header">Variations</span>
      <div slot="horizontal" class="mr-8 mb-8">
        <Button on:click={() => clicked++} ripple={false}>
          <Label>No Ripple</Label>
        </Button>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Button color="secondary" on:click={() => clicked++} ripple={false}>
          <Label>No Ripple</Label>
        </Button>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Button on:click={() => clicked++} dense>
          <Label>Dense</Label>
        </Button>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Button color="secondary" on:click={() => clicked++} dense>
          <Label>Dense</Label>
        </Button>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Button on:click={() => clicked++} class="myClass">
          <Label>With a Class</Label>
        </Button>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Button color="secondary" on:click={() => clicked++} class="myClass">
          <Label>With a Class</Label>
        </Button>
      </div>
    </Example>
    <Example>
      <span slot="header">Button groups</span>
      <div slot="horizontal" class="mr-8 mb-8">
        <Group variant="unelevated">
          <Button on:click={() => clicked++} variant="unelevated">
            <Label>One</Label>
          </Button>
          <Button on:click={() => clicked++} variant="unelevated">
            <Label>Two</Label>
          </Button>
          <Button on:click={() => clicked++} variant="unelevated">
            <Label>Three</Label>
          </Button>
        </Group>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Group variant="raised">
          <Button on:click={() => clicked++} variant="raised">
            <Label>One</Label>
          </Button>
          <Button on:click={() => clicked++} variant="raised">
            <Label>Two</Label>
          </Button>
          <Button on:click={() => clicked++} variant="raised">
            <Label>Three</Label>
          </Button>
        </Group>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Group variant="outlined">
          <Button on:click={() => clicked++} variant="outlined">
            <Label>One</Label>
          </Button>
          <Button on:click={() => clicked++} variant="outlined">
            <Label>Two</Label>
          </Button>
          <Button on:click={() => clicked++} variant="outlined">
            <Label>Three</Label>
          </Button>
        </Group>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Group>
          <Button on:click={() => clicked++}>
            <Label>One</Label>
          </Button>
          <Button on:click={() => clicked++}>
            <Label>Two</Label>
          </Button>
          <Button on:click={() => clicked++}>
            <Label>Three</Label>
          </Button>
        </Group>
      </div>
    </Example>
    <Example>
      <span slot="header">Block button</span>
      <div slot="vertical" class="mr-8 mb-8">
        <Button on:click={() => clicked++} variant="unelevated" class="w-full">
          <Label>BLOCK BUTTON</Label>
        </Button>
      </div>
      <div slot="vertical" class="mr-8 mb-8 w-full">
        <Group variant="outlined" style="display: flex;">
          <Button
            on:click={() => clicked++}
            variant="unelevated"
            color="primary"
            style="flex-grow: 3;">
            <Label>Primary</Label>
          </Button>
          <Button
            on:click={() => clicked++}
            variant="unelevated"
            color="secondary"
            style="flex-grow: 1;">
            <Label>Secondary</Label>
          </Button>
          <Button
            on:click={() => clicked++}
            variant="unelevated"
            color="secondary"
            style="flex-grow: 1;">
            <Label>Secondary</Label>
          </Button>
        </Group>
      </div>
    </Example>
    <Example>
      <span slot="header">Split buttons using a button group</span>
      <div slot="horizontal" class="mr-8 mb-8">
        <Group variant="raised">
          <Button on:click={() => clicked++} variant="raised">
            <Label>Do the thing</Label>
          </Button>
          <div use:GroupItem>
            <Button
              on:click={() => menu.setOpen(true)}
              variant="raised"
              style="padding: 0; min-width: 36px;">
              <Icon class="material-icons" style="margin: 0;">
                arrow_drop_down
              </Icon>
            </Button>
            <Menu bind:this={menu} anchorCorner="TOP_LEFT">
              <List>
                <Item on:SMUI:action={() => clicked++}>
                  <Text>Thing 1</Text>
                </Item>
                <Item on:SMUI:action={() => clicked++}>
                  <Text>Thing 2</Text>
                </Item>
                <Separator />
                <Item on:SMUI:action={() => clicked++}>
                  <Text>Thing 3</Text>
                </Item>
              </List>
            </Menu>
          </div>
        </Group>
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Group variant="outlined">
          <Button on:click={() => clicked++} variant="outlined">
            <Label>Do the thing</Label>
          </Button>
          <div use:GroupItem>
            <Button
              on:click={() => menu2.setOpen(true)}
              variant="outlined"
              style="padding: 0; min-width: 36px;">
              <Icon class="material-icons" style="margin: 0;">
                arrow_drop_down
              </Icon>
            </Button>
            <Menu bind:this={menu2} anchorCorner="TOP_LEFT">
              <List>
                <Item on:SMUI:action={() => clicked++}>
                  <Text>Thing 1</Text>
                </Item>
                <Item on:SMUI:action={() => clicked++}>
                  <Text>Thing 2</Text>
                </Item>
                <Separator />
                <Item on:SMUI:action={() => clicked++}>
                  <Text>Thing 3</Text>
                </Item>
              </List>
            </Menu>
          </div>
        </Group>
      </div>
    </Example>
  </div>
</Page>

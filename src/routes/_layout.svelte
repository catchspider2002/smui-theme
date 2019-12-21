<script>
  import { onMount } from "svelte";
  import { stores } from "@sapper/app";
  //   import {mdiTwitter, mdiGithubCircle} from '@mdi/js';

    import './_app.scss';

  import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
  import Drawer, { Content, Scrim, AppContent } from "@smui/drawer";
  import Button from "@smui/button";
  import IconButton from "@smui/icon-button";
  import List, { Item, Text } from "@smui/list";
  import { Label, Icon } from "@smui/common";
  import A from "@smui/common/A.svelte";

  const { page } = stores();
  const iframe = $page.path.startsWith("/demo/top-app-bar-iframe");

  let mainContent;
  let miniWindow = false;
  let drawerOpen = false;

  const sections = [
    {
      name: "Buttons",
      route: "/ComponentPages/ButtonPage",
      indent: 0
    },
    {
      name: "Checkbox",
      route: "/ComponentPages/CheckboxPage",
      indent: 0
    }
  ];

  onMount(setMiniWindow);

  function pickSection(section) {
    drawerOpen = false;
    mainContent.scrollTop = 0;

    // Svelte/Sapper is not updated the components correctly, so I need this.
    sections.forEach(section => section.component.$set({ activated: false }));
    section.component.$set({ activated: true });
  }

  function setMiniWindow() {
    miniWindow = window.innerWidth < 720;
  }
</script>

<svelte:window on:resize={setMiniWindow} />
{#if iframe}
  <slot />
{:else}
  <TopAppBar variant="static" class="demo-top-app-bar">
    <Row>
      <Section>
        {#if miniWindow}
          <IconButton
            class="material-icons"
            on:click={() => (drawerOpen = !drawerOpen)}>
            menu
          </IconButton>
        {/if}
        <Title
          component={A}
          href="/"
          class="mdc-theme--primary"
          style={miniWindow ? 'padding-left: 0;' : ''}>
          Svelte Material UI
        </Title>
      </Section>
      <!-- <Section align="end" toolbar>
        <IconButton href="https://twitter.com/SciActive">
          <Icon>
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="#000000" d="{mdiTwitter}" />
            </svg>
          </Icon>
        </IconButton>
        <IconButton href="https://github.com/hperrin/svelte-material-ui">
          <Icon>
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="#000000" d="{mdiGithubCircle}" />
            </svg>
          </Icon>
        </IconButton>
      </Section> -->
    </Row>
  </TopAppBar>
  <div class="drawer-container">
    <Drawer
      variant={miniWindow ? 'modal' : null}
      bind:open={drawerOpen}
      class="demo-drawer mdc-theme--secondary-bg {miniWindow ? 'demo-drawer-adjust' : ''}">
      <Content>
        <List>
          {#each sections as section (section.name)}
            <Item
              bind:this={section.component}
              href={'route' in section ? section.route : section.shortcut}
              on:click={() => pickSection(section)}
              activated={'route' in section && section.route === $page.path}
              title={section.name}
              style={section.indent ? 'margin-left: ' + section.indent * 25 + 'px;' : ''}>
              <Text class="mdc-theme--on-secondary">{section.name}</Text>
            </Item>
          {/each}
        </List>
      </Content>
    </Drawer>

    {#if miniWindow}
      <Scrim />
    {/if}
    <AppContent class="demo-app-content">
      <main class="demo-main-content" bind:this={mainContent}>
        <slot />
      </main>
    </AppContent>
  </div>
{/if}

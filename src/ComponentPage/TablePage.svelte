<script>
  import DataTable, { Head, Body, Row, Cell } from "@smui/data-table";
  import Checkbox from "@smui/checkbox";
  import IconButton, { Icon } from "@smui/icon-button";
  import Page from "./Page.svelte";
  import Example from "./Example.svelte";

  $: selectedPrice = selected.reduce(
    (total, option) => option.price + total,
    0
  );
  let options = [
    {
      name: "Broom",
      description: "A wooden handled broom.",
      price: 15
    },
    {
      name: "Dust Pan",
      description: "A plastic dust pan.",
      price: 8
    },
    {
      name: "Mop",
      description: "A strong, durable mop.",
      price: 18
    },
    {
      name: "Bucket",
      description: "A metal bucket.",
      price: 13
    }
  ];
  let selected = [options[2]];
</script>

<style>
  * :global(.mdc-data-table__cell, .mdc-data-table__header-cell) {
    color: var(--font-color);
  }
</style>

<Page>
  <span slot="header">Table</span>
  <span slot="description">
    Tables display information in a grid-like format of rows and columns. They
    organize information in a way that’s easy to scan, so that users can look
    for patterns and insights.
  </span>
  <span slot="import">
    import Icon from "@smui/select/icon/index";
    <br />
    import HelperText from "@smui/select/helper-text/index";
  </span>
  <div slot="content">
    <Example>
      <span slot="header">Simple Table</span>
      <div slot="vertical" class="mb-8">
        <DataTable table$aria-label="People list">
          <Head>
            <Row>
              <Cell>Name</Cell>
              <Cell>Favorite Color</Cell>
              <Cell>Favorite Number</Cell>
            </Row>
          </Head>
          <Body>
            <Row>
              <Cell>Steve</Cell>
              <Cell>Red</Cell>
              <Cell numeric>45</Cell>
            </Row>
            <Row>
              <Cell>Sharon</Cell>
              <Cell>Purple</Cell>
              <Cell numeric>5</Cell>
            </Row>
            <Row>
              <Cell>Rodney</Cell>
              <Cell>Orange</Cell>
              <Cell numeric>32</Cell>
            </Row>
            <Row>
              <Cell>Mack</Cell>
              <Cell>Blue</Cell>
              <Cell numeric>12</Cell>
            </Row>
          </Body>
        </DataTable>
      </div>
    </Example>
    <Example>
      <span slot="header">Table with actions</span>
      <div slot="vertical" class="mb-8">
        <DataTable table$aria-label="People list">
          <Head>
            <Row>
              <Cell>Name</Cell>
              <Cell>Email</Cell>
              <Cell class="text-right">Actions</Cell>
            </Row>
          </Head>
          <Body>
            <Row>
              <Cell>Steve</Cell>
              <Cell>steve@hotmail.com</Cell>
              <Cell class="text-right">
                <IconButton class="material-icons">edit</IconButton>
                <IconButton class="material-icons">delete</IconButton>
              </Cell>
            </Row>
            <Row>
              <Cell>Sharon</Cell>
              <Cell>sharon@gmail.com</Cell>
              <Cell class="text-right">
                <IconButton class="material-icons">edit</IconButton>
                <IconButton class="material-icons">delete</IconButton>
              </Cell>
            </Row>
            <Row>
              <Cell>Rodney</Cell>
              <Cell>rodney@yahoo.com</Cell>
              <Cell class="text-right">
                <IconButton class="material-icons">edit</IconButton>
                <IconButton class="material-icons">delete</IconButton>
              </Cell>
            </Row>
            <Row>
              <Cell>Mack</Cell>
              <Cell>mack@amazon.com</Cell>
              <Cell class="text-right">
                <IconButton class="material-icons">edit</IconButton>
                <IconButton class="material-icons">delete</IconButton>
              </Cell>
            </Row>
          </Body>
        </DataTable>
      </div>
    </Example>
    <Example>
      <span slot="header">Multiple Selection</span>
      <div slot="vertical" class="mb-8">
        <DataTable>
          <Head>
            <Row>
              <Cell checkbox>
                <Checkbox />
              </Cell>
              <Cell>Name</Cell>
              <Cell>Description</Cell>
              <Cell>Price</Cell>
            </Row>
          </Head>
          <Body>
            {#each options as option (option.name)}
              <Row>
                <Cell checkbox>
                  <Checkbox
                    bind:group={selected}
                    value={option}
                    valueKey={option.name} />
                </Cell>
                <Cell>{option.name}</Cell>
                <Cell>{option.description}</Cell>
                <Cell numeric>{option.price}</Cell>
              </Row>
            {/each}
          </Body>
        </DataTable>
      </div>
    </Example>
    <Example>
      <span slot="header">Full width</span>
      <div slot="vertical" class="mb-8 w-full">
        <DataTable table$aria-label="People list" class="w-full">
          <Head>
            <Row>
              <Cell>Name</Cell>
              <Cell>Email</Cell>
              <Cell>Position</Cell>
              <Cell>Year of joining</Cell>
              <Cell class="text-right">Actions</Cell>
            </Row>
          </Head>
          <Body>
            <Row>
              <Cell>Steve</Cell>
              <Cell>steve@hotmail.com</Cell>
              <Cell>Back-end Developer</Cell>
              <Cell>2013</Cell>
              <Cell class="text-right">
                <IconButton class="material-icons">edit</IconButton>
                <IconButton class="material-icons">delete</IconButton>
              </Cell>
            </Row>
            <Row>
              <Cell>Sharon</Cell>
              <Cell>sharon@gmail.com</Cell>
              <Cell>Full stack Developer</Cell>
              <Cell>2018</Cell>
              <Cell class="text-right">
                <IconButton class="material-icons">edit</IconButton>
                <IconButton class="material-icons">delete</IconButton>
              </Cell>
            </Row>
            <Row>
              <Cell>Rodney</Cell>
              <Cell>rodney@yahoo.com</Cell>
              <Cell>UX Designer</Cell>
              <Cell>2015</Cell>
              <Cell class="text-right">
                <IconButton class="material-icons">edit</IconButton>
                <IconButton class="material-icons">delete</IconButton>
              </Cell>
            </Row>
            <Row>
              <Cell>Mack</Cell>
              <Cell>mack@amazon.com</Cell>
              <Cell>Front-end Developer</Cell>
              <Cell>2018</Cell>
              <Cell class="text-right">
                <IconButton class="material-icons">edit</IconButton>
                <IconButton class="material-icons">delete</IconButton>
              </Cell>
            </Row>
          </Body>
        </DataTable>
      </div>
    </Example>
  </div>
</Page>

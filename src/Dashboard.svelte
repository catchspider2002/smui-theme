<script>
  import ChartBar from "./Templates/Organisms/Molecules/Atoms/ChartBar.svelte";
  import ChartBarStacked from "./Templates/Organisms/Molecules/Atoms/ChartBarStacked.svelte";
  import ChartLine from "./Templates/Organisms/Molecules/Atoms/ChartLine.svelte";
  import ChartArea from "./Templates/Organisms/Molecules/Atoms/ChartArea.svelte";
  import ChartDonut from "./Templates/Organisms/Molecules/Atoms/ChartDonut.svelte";
  import ChartPie from "./Templates/Organisms/Molecules/Atoms/ChartPie.svelte";

  // import Timeline from "./Timeline.svelte";
  import Chart from "chart.js";
</script>

<style>

</style>

<div class="bg-gray-400 w-full h-64 flex flex-wrap text-center px-2">
  <div class="bg-gray-400 flex w-full lg:flex-1">
    <div class="bg-gray-200 w-1/2 m-2 border-t-4 border-green-400 rounded">
      <ChartBarStacked />
    </div>
    <div class="bg-gray-200 w-1/2 m-2 border-t-4 border-red-500 rounded">
      <ChartDonut />
    </div>
  </div>
  <div class="bg-gray-400 flex w-full lg:flex-1">
    <div class="bg-gray-700 flex-1 m-2 border-t-4 border-blue-400 rounded">
      <ChartBar />
    </div>
    <div class="bg-gray-200 flex-1 m-2 border-t-4 border-purple-400 rounded">
      Last quarter
    </div>
  </div>
</div>
<div class="bg-gray-400 w-full h-64 flex flex-wrap text-center px-2">
  <div class="bg-gray-200 w-full lg:flex-1 m-2 rounded">
    <ChartLine />
  </div>
  <div class="bg-gray-200 w-full lg:flex-1 m-2 rounded">
    <ChartPie />
  </div>
  <div class="bg-gray-200 w-full lg:flex-1 m-2 rounded">
    <ChartArea />
  </div>
</div>
<div class="bg-gray-400 w-full h-64 flex flex-wrap text-center px-2">
  <div class="bg-gray-200 w-full lg:flex-1 m-2 rounded">First half</div>
  <div class="bg-gray-200 w-full lg:flex-1 m-2 rounded">Second half</div>
</div>

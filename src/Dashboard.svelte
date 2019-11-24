<script>
  // import ChartBar from "./Templates/Organisms/Molecules/Atoms/ChartBar.svelte";
  import ChartBarStacked from "./Templates/Organisms/Molecules/Atoms/ChartBarStacked.svelte";
  import ChartBarGrouped from "./Templates/Organisms/Molecules/Atoms/ChartBarGrouped.svelte";
  import ChartLine from "./Templates/Organisms/Molecules/Atoms/ChartLine.svelte";
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
    <div class="bg-gray-200 w-1/2 m-2 border-t-4 border-red-500 rounded" />
  </div>
  <div class="bg-gray-400 flex w-full lg:flex-1">
    <div class="bg-gray-200 flex-1 m-2 border-t-4 border-blue-400 rounded">
      <ChartBarGrouped />
    </div>
    <div class="bg-gray-200 flex-1 m-2 border-t-4 border-purple-400 rounded" />
  </div>
</div>
<div class="bg-gray-400 w-full h-64 flex flex-wrap text-center px-2">
  <div class="bg-green-600 w-full lg:flex-1 m-2 rounded">
    <ChartLine
      type="line"
      hideYGrid="true"
      hideYLabel="true"
      hideLegend="true"
      lineColor="white"
      pointColor="rgb(56, 161, 105)"
      backgroundColor="rgba(255, 255, 255, 0.2)"
      labelColor="white"
      gridColor="#2d3748"
      lineArea="true"
      lineCurve="true"/>
  </div>
  <div class="bg-gray-800 w-full lg:flex-1 m-2 rounded">
    <ChartLine
      type="horizontalBar"
      lineColor="rgb(56, 161, 105)"
      pointColor="#2d3748"
      backgroundColor="rgba(56, 161, 105, 0.2)"
      labelColor="lightblue"
      gridColor="#000" />
  </div>
  <div class="bg-gray-100 w-full lg:flex-1 m-2 rounded">
    <ChartLine
      type="line"
      hideYGrid="true"
      hideYLabel="true"
      hideXLabel="true"
      hideLegend="true"
      lineColor="rgb(56, 161, 105)"
      pointColor="white"
      backgroundColor="rgba(56, 161, 105, 0.2)"
      labelColor="rgb(56, 161, 105)"
      gridColor="transparent" />
  </div>
</div>
<div class="bg-gray-400 w-full h-64 flex flex-wrap text-center px-2">
  <div class="bg-gray-800 w-full lg:flex-1 m-2 rounded">
    <ChartPie
      type="pie"
      hideXGrid="true"
      hideYGrid="true"
      hideYLabel="true"
      hideXLabel="true"
      lineColor="rgb(56, 161, 105)"
      borderColor="#2d3748"
      backgroundColor="rgba(56, 161, 105, 0.2)"
      labelColor="lightblue"
      gridColor="#000" />
  </div>
  <div class="bg-gray-100 w-full lg:flex-1 m-2 rounded">
    <ChartPie
      type="pie"
      hideXGrid="true"
      hideYGrid="true"
      hideYLabel="true"
      hideXLabel="true"
      lineColor="rgb(56, 161, 105)"
      borderColor="white"
      backgroundColor="rgba(56, 161, 105, 0.2)"
      labelColor="rgb(56, 161, 105)"
      gridColor="transparent" />
  </div>
</div>
<div class="bg-gray-400 w-full h-64 flex flex-wrap text-center px-2">
  <div class="bg-gray-800 w-full lg:flex-1 m-2 rounded">
    <ChartPie
      type="doughnut"
      hideXGrid="true"
      hideYGrid="true"
      hideYLabel="true"
      hideXLabel="true"
      lineColor="rgb(56, 161, 105)"
      borderColor="#2d3748"
      backgroundColor="rgba(56, 161, 105, 0.2)"
      labelColor="lightblue"
      gridColor="#000" />
  </div>
  <div class="bg-gray-100 w-full lg:flex-1 m-2 rounded">
    <ChartPie
      type="doughnut"
      hideXGrid="true"
      hideYGrid="true"
      hideYLabel="true"
      hideXLabel="true"
      lineColor="rgb(56, 161, 105)"
      borderColor="white"
      backgroundColor="rgba(56, 161, 105, 0.2)"
      labelColor="rgb(56, 161, 105)"
      gridColor="transparent" />
  </div>
</div>
<div class="bg-gray-400 w-full h-64 flex flex-wrap text-center px-2">
  <div class="bg-green-600 w-full lg:flex-1 m-2 rounded">
    <ChartLine
      type="bar"
      hideYGrid="true"
      hideYLabel="true"
      hideLegend="true"
      lineColor="white"
      pointColor="white"
      labelColor="white"
      gridColor="#2d3748" />
  </div>
  <div class="bg-gray-800 w-full lg:flex-1 m-2 rounded">
    <ChartLine
      type="bar"
      lineColor="#51C572"
      pointColor="lightblue"
      labelColor="lightblue"
      gridColor="#000" />
  </div>
  <div class="bg-gray-100 w-full lg:flex-1 m-2 rounded">
    <ChartLine
      type="bar"
      hideYGrid="true"
      hideYLabel="true"
      hideXLabel="true"
      hideLegend="true"
      lineColor="#51c572"
      pointColor="blue"
      labelColor="blue"
      gridColor="transparent" />
  </div>
</div>

<script>
  import ChartLine from "./Templates/Organisms/Molecules/Atoms/ChartLine.svelte";

  // import Timeline from "./Timeline.svelte";
  import Chart from "chart.js";
</script>

<style>

</style>

<div class="bg-gray-400 w-full h-64 flex flex-wrap text-center px-2">
  <div class="bg-gray-400 flex w-full lg:flex-1">
    <div class="bg-gray-200 w-1/2 m-2 border-t-4 border-green-400 rounded" />
    <div class="bg-gray-200 w-1/2 m-2 border-t-4 border-red-500 rounded">
      <ChartLine
        type="bar"
        barType="stacked"
        beginYZero={true}
        showLegend={true}
        background="dark" />
    </div>
  </div>
  <div class="bg-gray-400 flex w-full lg:flex-1">
    <div class="bg-gray-200 flex-1 m-2 border-t-4 border-blue-400 rounded">

      <ChartLine
        type="bar"
        barType="grouped"
        barPercent="60"
        beginYZero={true}
        showLegend="true"
        background="dark" />
    </div>
    <div class="bg-gray-200 flex-1 m-2 border-t-4 border-purple-400 rounded" />
  </div>
</div>
<div class="bg-gray-400 w-full h-64 flex flex-wrap text-center px-2">
  <div class="bg-green-600 w-full lg:flex-1 m-2 rounded">
    <ChartLine
      type="line"
      lineColor="white"
      pointColor="rgb(56, 161, 105)"
      backgroundColor="rgba(255, 255, 255, 0.2)"
      labelColor="white"
      gridColor="#2d3748"
      lineArea={true}
      lineCurve={true} />
  </div>
  <div class="bg-gray-800 w-full lg:flex-1 m-2 rounded">
    <ChartLine
      type="line"
      beginYZero={true}
      showXLabel={true}
      lineColor="rgb(56, 161, 105)"
      pointColor="#2d3748"
      backgroundColor="rgba(56, 161, 105, 0.2)"
      labelColor="lightblue"
      gridColor="#000" />
  </div>
  <div class="bg-gray-100 w-full lg:flex-1 m-2 rounded">
    <ChartLine
      type="line"
      lineColor="rgb(56, 161, 105)"
      pointColor="white"
      backgroundColor="rgba(56, 161, 105, 0.2)"
      labelColor="rgb(56, 161, 105)"
      gridColor="transparent" />
  </div>
</div>
<div class="bg-gray-400 w-full h-64 flex flex-wrap text-center px-2">
  <div class="bg-gray-800 w-full lg:flex-1 m-2 rounded">
    <ChartLine
      type="pie"
      showLegend={true}
      lineColor="rgb(56, 161, 105)"
      borderColor="#2d3748"
      backgroundColor="rgba(56, 161, 105, 0.2)"
      labelColor="lightblue"
      gridColor="#000" />
  </div>
  <div class="bg-gray-100 w-full lg:flex-1 m-2 rounded">
    <ChartLine
      type="pie"
      showLegend={true}
      lineColor="rgb(56, 161, 105)"
      borderColor="white"
      backgroundColor="rgba(56, 161, 105, 0.2)"
      labelColor="rgb(56, 161, 105)"
      gridColor="transparent" />
  </div>
</div>
<div class="bg-gray-400 w-full h-64 flex flex-wrap text-center px-2">
  <div class="bg-gray-800 w-full lg:flex-1 m-2 rounded">
    <ChartLine
      type="doughnut"
      showLegend={true}
      donutPercent="80"
      lineColor="rgb(56, 161, 105)"
      borderColor="#2d3748"
      backgroundColor="rgba(56, 161, 105, 0.2)"
      labelColor="lightblue"
      gridColor="#000" />
  </div>
  <div class="bg-gray-100 w-full lg:flex-1 m-2 rounded">
    <ChartLine
      type="doughnut"
      showLegend={true}
      lineColor="rgb(56, 161, 105)"
      borderColor="white"
      backgroundColor="rgba(56, 161, 105, 0.2)"
      labelColor="rgb(56, 161, 105)"
      gridColor="transparent" />
  </div>
</div>
<div class="bg-gray-400 w-full h-64 flex flex-wrap text-center px-2">
  <div class="bg-purple-600 w-full lg:flex-1 m-2 rounded">
    <ChartLine
      type="bar"
      background="green"
      beginYZero={true}
      lineColor="white"
      pointColor="white"
      labelColor="white"
      gridColor="#2d3748" />
  </div>
  <div class="bg-gray-800 w-full lg:flex-1 m-2 rounded">
    <ChartLine type="bar" background="dark" beginYZero={true} />
  </div>
  <div class="bg-gray-100 w-full lg:flex-1 m-2 rounded">
    <ChartLine type="bar" background="light" beginYZero={true} />
  </div>
</div>

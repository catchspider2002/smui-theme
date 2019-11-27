<script>
  import ChartLine from "./Templates/Organisms/Molecules/Atoms/ChartLine.svelte";

  // import Timeline from "./Timeline.sveltef<<";
  import Chart from "chart.js";
</script>

<style>
  .bg-dark-grad {
    background-image: linear-gradient(to right, #3182ce, #2b6cb0);
  }
  .bg-light-grad {
    background-image: linear-gradient(to right, #ed64a6, #d53f8c);
  }
</style>

<div class="bg-gray-400 w-full h-64 flex flex-wrap text-center px-2">
  <div class="bg-gray-400 flex w-full lg:flex-1">
    <div class="bg-gray-200 w-1/2 m-2 border-t-4 border-green-400 rounded" />
    <div class="bg-gray-800 w-1/2 m-2 border-t-4 border-red-500 rounded">
      <ChartLine
        type="bar"
        barType="stacked"
        beginYZero={true}
        showXLabel={true}
        showYLabel={true}
        showXGrid={true}
        showYGrid={true}
        showLegend={true} />
    </div>
  </div>
  <div class="bg-gray-400 flex w-full lg:flex-1">
    <div class="bg-gray-800 flex-1 m-2 border-t-4 border-blue-400 rounded">
      <ChartLine
        type="bar"
        barType="grouped"
        barPercent="60"
        beginYZero={true}
        showXLabel={true}
        showYLabel={true}
        showXGrid={true}
        showYGrid={true}
        showLegend="true" />
    </div>
    <div class="bg-gray-200 flex-1 m-2 border-t-4 border-purple-400 rounded" />
  </div>
</div>
<div class="bg-gray-400 w-full h-64 flex flex-wrap text-center px-2">
  <div class="bg-gray-800 w-full lg:flex-1 m-2 rounded">
    <ChartLine
      type="line"
      lineColor="#38A169"
      beginYZero={true}
      showXLabel={true}
      showYLabel={true}
      showXGrid={true}
      showYGrid={true} />
  </div>
  <div class="bg-gray-100 w-full lg:flex-1 m-2 rounded">
    <ChartLine
      type="line"
      lineColor="#38A169"
      showXLabel={true}
      showYLabel={true}
      showXGrid={true}
      showYGrid={true}
      lineArea={true} />
  </div>
  <div class="bg-dark-grad w-full lg:flex-1 m-2 rounded">
    <ChartLine
      type="line"
      lineColor="#ffffff"
      showXLabel={true}
      showYLabel={true}
      showXGrid={true}
      showYGrid={true}
      lineCurve={true} />
  </div>
</div>
<div class="bg-gray-400 w-full h-64 flex flex-wrap text-center px-2">
  <div class="bg-gray-800 w-full lg:flex-1 m-2 rounded">
    <ChartLine type="pie" showLegend={true} />
  </div>
  <div class="bg-gray-100 w-full lg:flex-1 m-2 rounded">
    <ChartLine type="pie" showLegend={true} />
  </div>
</div>
<div class="bg-gray-400 w-full h-64 flex flex-wrap text-center px-2">
  <div class="bg-gray-800 w-full lg:flex-1 m-2 rounded">
    <ChartLine type="doughnut" showLegend={true} donutPercent="80" />
  </div>
  <div class="bg-gray-100 w-full lg:flex-1 m-2 rounded">
    <ChartLine type="doughnut" showLegend={true} />
  </div>
</div>
<div class="bg-gray-400 w-full h-64 flex flex-wrap text-center px-2">
  <div class="bg-light-grad w-full lg:flex-1 m-2 rounded">
    <ChartLine
      type="bar"
      beginYZero={true}
      lineColor="#ffffff"
      showXLabel={true}
      showYLabel={true}
      showXGrid={true}
      showYGrid={true} />
  </div>
  <div class="bg-gray-800 w-full lg:flex-1 m-2 rounded">
    <ChartLine
      type="bar"
      lineColor="#38a169"
      showXLabel={true}
      showYLabel={true}
      showXGrid={true}
      showYGrid={true}
      beginYZero={true} />
  </div>
  <div class="bg-gray-100 w-full lg:flex-1 m-2 rounded">
    <ChartLine
      type="bar"
      lineColor="#38a169"
      showXLabel={true}
      showYLabel={true}
      beginYZero={true} />
  </div>
</div>

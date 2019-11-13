<script>
  import ChartBar from "./ChartBar.svelte";
  import ChartLine from "./ChartLine.svelte";

  import Timeline from "./Timeline.svelte";
  import Chart from "chart.js";
</script>

<style>

</style>

<div class="bg-gray-400 w-full h-64 flex flex-wrap text-center px-2">
  <div class="bg-gray-400 flex w-full lg:flex-1">
    <div class="bg-gray-200 w-1/2 m-2 border-t-4 border-green-400 rounded">
      Firster quarter
    </div>
    <div class="w-1/2 m-2 border-t-4 border-red-500 rounded">
      Second quarter
    </div>
  </div>
  <div class="bg-gray-400 flex w-full lg:flex-1">
    <div class="bg-gray-200 flex-1 m-2 border-t-4 border-blue-400 rounded">
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
  <div class="bg-gray-200 w-full lg:flex-1 m-2 rounded">Second third</div>
  <div class="bg-gray-200 w-full lg:flex-1 m-2 rounded">Third third</div>
</div>
<div class="bg-gray-400 w-full h-64 flex flex-wrap text-center px-2">
  <div class="bg-gray-200 w-full lg:flex-1 m-2 rounded">First half</div>
  <div class="bg-gray-200 w-full lg:flex-1 m-2 rounded">Second half</div>
</div>

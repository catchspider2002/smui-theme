<script>
  import { onMount } from "svelte";
  import { Chart } from "frappe-charts/dist/frappe-charts.esm.js";
  // import css
  import "frappe-charts/dist/frappe-charts.min.css";

  const data = {
    labels: [
      "12am-3am",
      "3am-6pm",
      "6am-9am",
      "9am-12am",
      "12pm-3pm",
      "3pm-6pm"
    ],
    datasets: [
      {
        name: "Some Data",
        type: "bar",
        values: [71, 40, 30, 35, 52, 4]
      },
      {
        name: "Another Set",
        type: "bar",
        values: [25, 40, 10, 15, 17, 14]
      }
    ]
  };

  let el;

  onMount(() => {
    const chart = new Chart(el, {
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
        datasets: [{ name: "DS 1", values: [18, 40, 30, 35, 8, 52, 17, 4] }]
      },
      title: "5. Area",
      type: "line",
      colors: ["green", "#4caf50"],
      height: 150,
      isNavigable: 0,
      valuesOverPoints: 0,
      barOptions: {
        stacked: 0
      },
      lineOptions: {
        dotSize: 4,
        hideLine: 0,
        hideDots: 1,
        heatline: 0,
        regionFill: 1
      },
      axisOptions: {
        yAxisMode: "span",
        xAxisMode: "span",
        xIsSeries: 0
      },
      maxLegendPoints: 20,
      maxSlices: 10,
      barOptions: { height: 20, depth: 2 },
      discreteDomains: 0
    });

    // var el = document.querySelector(".frappe-chart.line-chart").setAttribute("transform", "translate(0,0)");;
  });
</script>

<div bind:this={el} class="chart" />

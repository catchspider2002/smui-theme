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
      title: "My Awesome Chart",
      data: data,
      isNavigable: true,
      type: "bar", // or 'bar', 'line', 'scatter', 'pie', 'percentage', 'axis-mixed', 'donut'
      height: 350,
      valuesOverPoints: 0,
      // colors: ["#7cd6fd", "#743ee2"],
      colors: [
        "red",
        "green",
        "blue",
        "grey",
        "orange",
        "yellow",
        "violet",
        "light-green",
        "purple",
        "magenta",
        "light-grey",
        "dark-grey"
      ],
      lineOptions: {
        dotSize: 4,
        hideLine: 0,
        hideDots: 1,
        heatline: 0,
        regionFill: 1,
        spline: 1
      }
    });
  });
</script>

<div bind:this={el} class="chart" />

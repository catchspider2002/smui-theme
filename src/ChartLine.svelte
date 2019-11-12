<script>
  import { onMount } from "svelte";
  import { Chart } from "frappe-charts/dist/frappe-charts.esm.js";
  // import css
  import "frappe-charts/dist/frappe-charts.min.css";

  let el;

  onMount(() => {
    const chart = new Chart(el, {
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

        datasets: [
          {
            name: "Clics en Botón de Experimento",
            chartType: "line",
            values: [239, 355, 300, 331, 380, 200, 240]
          }
        ]
      },

      //   title: "Clics por día",
      type: "line", // or 'bar', 'line', 'pie', 'percentage'
      isNavigable: 1,
        height: 500,
      colors: ["#E00034", "light-blue"],

      tooltipOptions: {
        formatTooltipX: d => (d + "").toUpperCase(),
        formatTooltipY: d => d + " clics"
      },
      axisOptions: {
        yAxisMode: "tick",
        xAxisMode: "tick"
      },
      lineOptions: {
        dotSize: 10 // default: 4
      }
    });

    // var el = document.querySelector(".frappe-chart.line-chart").setAttribute("transform", "translate(0,0)");;
  });
</script>

<div bind:this={el} class="chart w-1/3" />

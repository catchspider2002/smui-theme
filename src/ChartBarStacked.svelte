<script>
  import { onMount, afterUpdate } from "svelte";

  function createStackedBarChart() {
    // Chart.defaults.global.animationSteps = 50;
    // Chart.defaults.global.responsive = true;
    var ctx = document.getElementById("stackedBarChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["December", "January", "February", "March", "April", "May"],
        datasets: [
          {
            label: "Talk",
            backgroundColor: "lightblue",
            data: [664, 691, 636, 662, 686, 668]
          },
          {
            label: "Hold",
            backgroundColor: "lightgreen",
            data: [106, 131, 156, 184, 186, 142]
          },
          {
            label: "Wrap",
            backgroundColor: "yellow",
            data: [200, 188, 166, 125, 112, 122]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "Stacked Bars"
        },
        tooltips: {
          mode: "label"
        },
        scales: {
          xAxes: [
            {
              stacked: true
            }
          ],
          yAxes: [
            {
              stacked: true
            }
          ]
        }
      }
    });
  }

  afterUpdate(createStackedBarChart);
</script>

<canvas id="stackedBarChart" width="3" height="1" />

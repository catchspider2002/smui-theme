<script>
  import { onMount, afterUpdate } from "svelte";

  function createStackedBarChart() {
    var ctx = document.getElementById("stackedBarChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["December", "January", "February", "March", "April", "May"],
        datasets: [
          {
            label: "New Clients",
            backgroundColor: "#9f7aea",
            data: [664, 691, 636, 662, 686, 668]
          },
          {
            label: "Retained Clients",
            backgroundColor: "#f56565",
            data: [106, 131, 156, 184, 186, 142]
          }
        ]
      },
      options: {
        legend: {
          display: true,
          labels: {
            fontColor: "blue"
          }
        },
        title: {
          display: false,
          text: "Client Retention"
        },
        tooltips: {
          mode: "label"
        },
        scales: {
          xAxes: [
            {
              display: false,
              stacked: true
            }
          ],
          yAxes: [
            {
              stacked: true
            }
          ]
        },
        animationSteps: 100,
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  afterUpdate(createStackedBarChart);
</script>

<canvas id="stackedBarChart" width="1" height="1" />

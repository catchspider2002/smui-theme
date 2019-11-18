<script>
  import { onMount, afterUpdate } from "svelte";

  function createLineChart() {
    // Chart.defaults.global.animationSteps = 50;
    // Chart.defaults.global.responsive = true;
    var ctx = document.getElementById("lineChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            lineTension: 0,
            fill: false,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        segmentShowStroke: true,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        percentageInnerCutout: 50,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: true,
        animateScale: false,
        responsive: true,
        maintainAspectRatio: true,
        showScale: true,
        animateScale: true,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                // fontColor: "red",
                // fontFamily: "'IBM Plex Sans', sans-serif"
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                // fontColor: "red",
                // fontFamily: "'IBM Plex Sans', sans-serif"
                display: false
              }
            }
          ]
        },
        legend: {
          labels: {
            // This more specific font property overrides the global property
            // fontColor: "red",
            fontFamily: "'IBM Plex Sans', sans-serif"
          }
        }
      }
    });
    Chart.defaults.global.defaultFontColor = "red";
    Chart.defaults.global.defaultFontFamily = "'IBM Plex Sans', sans-serif";
  }

  afterUpdate(createLineChart);
</script>

<canvas id="lineChart" width="3" height="1" />

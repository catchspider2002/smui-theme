<script>
  import { onMount, afterUpdate } from "svelte";
  export let hideXGrid, hideYGrid, hideXLabel, hideYLabel, hideLegend;
  export let lineColor, pointColor, labelColor, gridColor;
  let chartId = "random" + Math.floor(Math.random() * 100 + 1);

  function createLineChart() {
    var ctx = document.getElementById(chartId).getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3, 4],
            lineTension: 0,
            fill: false,
            backgroundColor: "green",
            borderColor: lineColor,
            borderWidth: 3,
            pointRadius: 3,
            pointBackgroundColor: pointColor
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
        maintainAspectRatio: false,
        showScale: true,
        animateScale: true,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontColor: labelColor,
                display: hideYLabel ? false : true
              },
              gridLines: {
                display: hideYGrid ? false : true,
                color: gridColor
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                fontColor: labelColor,
                display: hideXLabel ? false : true
              },
              gridLines: {
                display: hideXGrid ? false : true,
                color: gridColor,
                zeroLineColor: gridColor
              }
            }
          ]
        },
        legend: {
          labels: {
            fontColor: labelColor,
            display: hideLegend ? false : true
          },
          display: false
        }
      }
    });
    Chart.defaults.global.defaultFontColor = "purple";
    Chart.defaults.global.defaultFontFamily = "'Varela Round', sans-serif";

  }

  afterUpdate(createLineChart);
</script>

<canvas id={chartId} width="1" height="1" />

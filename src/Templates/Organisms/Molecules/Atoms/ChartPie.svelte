<script>
  import { onMount, afterUpdate } from "svelte";
  export let type = "pie",
    hideXGrid,
    hideYGrid,
    hideXLabel,
    hideYLabel,
    hideLegend;
  export let lineColor, borderColor, backgroundColor, labelColor, gridColor;
  let chartId = "random" + Math.floor(Math.random() * 10000 + 1);

  function createPieChart() {
    var ctx = document.getElementById(chartId).getContext("2d");
    var myChart = new Chart(ctx, {
      type: type,
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "#38a169",
              "#e53e3e",
              "#d69e2e",
              "#319795",
              "#3182ce",
              "#805ad5"
            ],
            borderColor: borderColor,
            borderWidth: 3
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
        // cutoutPercentage: 90,
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
  }

  afterUpdate(createPieChart);
</script>

<canvas id={chartId} width="1" height="1" />

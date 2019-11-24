<script>
  import { onMount, afterUpdate } from "svelte";
  export let type, hideXGrid, hideYGrid, hideXLabel, hideYLabel, hideLegend;
  export let lineColor, pointColor, backgroundColor, labelColor, gridColor;

  export let lineArea, lineCurve;
  let chartId = "random" + Math.floor(Math.random() * 10000 + 1);

  let dataset = [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3, 4],
      lineTension: lineCurve? 0.4 : 0,
      fill: lineArea ? true : false,
      backgroundColor: backgroundColor,
      borderColor: lineColor,
      borderWidth: 3,
      pointRadius: 4,
      pointBackgroundColor: pointColor
    }
  ];

  if (type == "bar" || type == "horizontalBar") {
    dataset = [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3, 4],
        backgroundColor: lineColor,
        barPercentage: 0.3
      }
    ];
  }

  function createLineChart() {
    var ctx = document.getElementById(chartId).getContext("2d");
    var myChart = new Chart(ctx, {
      type: type,
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: dataset
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
                beginAtZero: true,
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

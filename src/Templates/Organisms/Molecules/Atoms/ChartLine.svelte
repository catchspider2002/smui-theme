<script>
  import { onMount, afterUpdate } from "svelte";
  export let type,
    showXGrid,
    showYGrid,
    showXLabel,
    showYLabel,
    showLegend,
    beginXZero,
    beginYZero,
    barType,
    donutPercent = type == "doughnut" ? 50 : 0,
    barPercent = 30;
  export let background,
    lineColor,
    pointColor,
    backgroundColor,
    labelColor,
    gridColor,
    borderColor;

  let themeColor = "#805ad5"; // purple-600

  if (background == "dark") {
    lineColor = themeColor;
    pointColor = "lightblue";
    labelColor = "red";
    gridColor = "#000";
  } else if (background == "light") {
    lineColor = themeColor;
    pointColor = "blue";
    labelColor = "blue";
    gridColor = "transparent";
  }

  export let lineArea, lineCurve;
  let chartId = "random" + Math.floor(Math.random() * 10000 + 1);

  let dataset = [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3, 4],
      lineTension: lineCurve ? 0.4 : 0,
      fill: lineArea,
      backgroundColor: backgroundColor,
      borderColor: lineColor,
      borderWidth: 3,
      pointRadius: 4,
      pointBackgroundColor: pointColor
    }
  ];

  if (type == "bar" || type == "horizontalBar") {
    if (barType == "stacked" || barType == "grouped") {
      dataset = [
        {
          label: "New Clients",
          backgroundColor: "#9f7aea",
          data: [664, 691, 636, 662, 686, 668, 622],
          barPercentage: barPercent / 100
        },
        {
          label: "Retained Clients",
          backgroundColor: "#f56565",
          data: [106, 131, 156, 184, 186, 142, 124],
          barPercentage: barPercent / 100
        }
      ];
    } else {
      dataset = [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3, 4],
          backgroundColor: lineColor,
          barPercentage: barPercent / 100
        }
      ];
    }
  } else if (type == "pie" || type == "doughnut") {
    dataset = [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3, 5],
        backgroundColor: [
          "#38a169",
          "#e53e3e",
          "#d69e2e",
          "#319795",
          "#3182ce",
          "#805ad5",
          "#d000d5"
        ],
        borderColor: borderColor,
        borderWidth: 3
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
        cutoutPercentage: donutPercent,
        scales: {
          yAxes: [
            {
              stacked: barType == "stacked",
              ticks: {
                beginAtZero: beginYZero,
                fontColor: labelColor,
                display: showYLabel
              },
              gridLines: {
                display: showYGrid,
                color: gridColor
              }
            }
          ],
          xAxes: [
            {
              stacked: barType == "stacked",
              ticks: {
                beginAtZero: beginXZero,
                fontColor: labelColor,
                display: showXLabel
              },
              gridLines: {
                display: showXGrid,
                color: gridColor,
                zeroLineColor: gridColor
              }
            }
          ]
        },
        legend: {
          labels: {
            fontColor: labelColor,
            display: showLegend
          },
          display: showLegend
        },
        tooltips: {
          mode: barType == "stacked" ? "index" : "nearest"
        }
      }
    });
    Chart.defaults.global.defaultFontColor = "purple";
    Chart.defaults.global.defaultFontFamily = "'Varela Round', sans-serif";
  }

  afterUpdate(createLineChart);
</script>

<canvas id={chartId} width="1" height="1" />

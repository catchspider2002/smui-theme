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
    lineColor, // hex
    pointColor, // hex
    labelColor, // hex
    gridColor, // hex
    // Line
    lineArea = false,
    lineCurve = false,
    pointRadius = 4,
    lineThickness = 3,
    // Bar
    barType,
    barPercent = 30,
    // Donut
    donutPercent = type == "doughnut" ? 50 : 0,
    //  Pie
    pieSpacing = 3;

  let chartId = "random" + Math.floor(Math.random() * 10000 + 1),
    backgroundColor;

  // let themeColor = "#805ad5"; // purple-600
  // let themeColor = hexToHSL("38a169", 1);

  function createLineChart() {
    backgroundColor =
      backgroundColor ||
      getComputedStyle(document.getElementById(chartId).parentElement)
        .backgroundColor;

    if (!labelColor) {
      if (RGBLuminance(backgroundColor) > 0.5) labelColor = "#000000";
      else labelColor = "#FFFFFF";
    }

    gridColor = gridColor || hexToHSL(labelColor, 0.1);
    let newLabelColor = hexToHSL(labelColor, 0.9);
    pointColor = pointColor || backgroundColor;

    let dataset = [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3, 4],
        lineTension: lineCurve ? 0.4 : 0,
        fill: lineArea,
        backgroundColor: hexToHSL(lineColor, 0.2),
        borderColor: hexToHSL(lineColor, 1),
        borderWidth: lineThickness,
        pointRadius: pointRadius,
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
            backgroundColor: hexToHSL(lineColor, 1),
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
          borderColor: backgroundColor,
          borderWidth: pieSpacing
        }
      ];
    }

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
                fontColor: newLabelColor,
                display: showYLabel
              },
              gridLines: {
                display: true,
                color: showYGrid ? gridColor : backgroundColor,
                zeroLineColor: showYGrid ? gridColor : backgroundColor
              }
            }
          ],
          xAxes: [
            {
              stacked: barType == "stacked",
              ticks: {
                beginAtZero: beginXZero,
                fontColor: newLabelColor,
                display: showXLabel
              },
              gridLines: {
                display: true,
                color: showXGrid ? gridColor : backgroundColor,
                zeroLineColor: showXGrid ? gridColor : backgroundColor
              }
            }
          ]
        },
        legend: {
          labels: {
            fontColor: newLabelColor,
            display: showLegend
          },
          display: showLegend
        },
        tooltips: {
          mode: barType == "stacked" ? "index" : "nearest"
        }
      }
    });
    Chart.defaults.global.defaultFontFamily = "'Varela Round', sans-serif";
  }

  afterUpdate(createLineChart);

  const hexToHSL = (hex, percent) => {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      let r = parseInt(result[1], 16);
      let g = parseInt(result[2], 16);
      let b = parseInt(result[3], 16);
      (r /= 255), (g /= 255), (b /= 255);
      var max = Math.max(r, g, b),
        min = Math.min(r, g, b);
      var h,
        s,
        l = (max + min) / 2;
      if (max == min) {
        h = s = 0; // achromatic
      } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }
      var HSL =
        "hsla(" +
        Math.round(h * 360) +
        "," +
        Math.round(s * 100) +
        "%," +
        Math.round(l * 100) +
        "%," +
        percent +
        ")";
      return HSL;
    }
  };

  const RGBToHex = rgb => {
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    // Turn "rgb(r,g,b)" into [r,g,b]
    rgb = rgb
      .substr(4)
      .split(")")[0]
      .split(sep);

    let r = (+rgb[0]).toString(16),
      g = (+rgb[1]).toString(16),
      b = (+rgb[2]).toString(16);

    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;

    return "#" + r + g + b;
  };

  const RGBLuminance = rgb => {
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    rgb = rgb
      .substr(4)
      .split(")")[0]
      .split(sep);
    //sRGB Luma
    let luminance = (rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722) / 255;
    return luminance;
  };
</script>

<canvas id={chartId} width="1" height="1" />

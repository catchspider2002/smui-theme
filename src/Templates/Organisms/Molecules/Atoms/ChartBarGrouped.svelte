<script>
  import { onMount, afterUpdate } from "svelte";

  function createGroupedBarChart() {
    var ctx = document.getElementById("groupedBarChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Absence of OB",
          "Closeness",
          "Credibility",
          "Heritage",
          "M Disclosure",
          "Provenance",
          "Reliability",
          "Transparency"
        ],
        datasets: [
          {
            label: "American Express",
            backgroundColor: "pink",
            borderColor: "red",
            borderWidth: 1,
            data: [3, 5, 6, 7, 3, 5, 6, 7]
          },
          {
            label: "Mastercard",
            backgroundColor: "lightblue",
            borderColor: "blue",
            borderWidth: 1,
            data: [4, 7, 3, 6, 10, 7, 4, 6]
          },
          {
            label: "Visa",
            backgroundColor: "yellow",
            borderColor: "orange",
            borderWidth: 1,
            data: [6, 9, 7, 3, 10, 7, 4, 6]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: "top"
        },
        title: {
          display: true,
          text: "Chart.js Bar Chart"
        },
        scales: {
          yAxes: [
            {
              // stacked: true,
              ticks: {
                beginAtZero: true
              }
            }
          ],
          xAxes: [
            {
              // stacked: true
            }
          ]
        }
      }
    });
  }

  afterUpdate(createGroupedBarChart);
</script>

<canvas id="groupedBarChart" width="1" height="1" />

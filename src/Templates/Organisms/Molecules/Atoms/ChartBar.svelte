<script>
  import { onMount, afterUpdate } from "svelte";

  function createBarChart() {
    var ctx = document.getElementById("barChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: "white",
            borderColor: "white",
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }

  afterUpdate(createBarChart);
</script>

<canvas id="barChart" width="3" height="1" />

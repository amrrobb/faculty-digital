<script>
import { Pie, mixins } from "vue-chartjs";

export default {
  extends: Pie,
  mixins: [mixins.reactiveProp],  
  props: ['chartData', 'options'],
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient2 = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);

    this.gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
    this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
    this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

    this.gradient2.addColorStop(0, "rgba(0, 231, 255, 0.9)");
    this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
    this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)");
    this.renderChart(
      {
        labels: this.chartData.labels,
        datasets: [
          {
            backgroundColor: [
              this.gradient,
              this.gradient2,
              "#A239EA",
              "#F35588",
              "#A3F7BF",
              "#FFF591",
              "#F0D9E7",
              "#FF94CC",
            ],
            data: this.chartData.data,
          },
        ],
      },
      { responsive: true, maintainAspectRatio: false }
    );
  },
};
</script>
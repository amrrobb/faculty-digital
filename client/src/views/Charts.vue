<template>
  <div style="margin-left: 25%; margin-right: 25%; height: 100vh;" >
      <div v-if="dataReports" class="d-flex justify-content-center">
        <div class="w-100">
          <h3 class="text-center">Chart for Sales and Expenses</h3>
          <area-chart class="board-chart" style="width: 50vw;" :chartData="dataReports" />
        </div>
      </div>

      <div v-if="dataExpenses" class="d-flex justify-content-center mt-5">
        <div class="w-100">
          <h3 class="text-center">Chart for Expenses by Category</h3>
          <pie-chart class="board-chart" style="width: 50vw;" :chartData="dataExpenses" />
        </div>
      </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import AreaChart from '../components/AreaChart.vue'
import PieChart from '../components/PieChart.vue'
export default {
    name: "Charts",
    components: {
      AreaChart,
      PieChart
    },
        computed: {
        ...mapState(['reports', 'expenses']),
    },
    data () {
      return {
        dataReports: null,
        dataExpenses: null
      }
    },
    watch: {
      reports (newVal) {
        if (newVal) {
          let labels = []
          let totalSales = []
          let totalExpenses = []
          let reversed = [...this.reports].reverse()
          
          reversed.forEach(element => {
              labels.push(new Date(element.month).toLocaleString('default', { month: 'short'}))
              totalSales.push(element.totalSales)
              totalExpenses.push(element.totalExpenses)
          })
    
          this.dataReports = {
              labels,
              totalSales,
              totalExpenses
          }
        }
          
      },
      expenses (newVal) {
        if (newVal) {
          let labels = []
          let data = []
          let others = {}

          this.expenses.forEach(element => {
              if (element.category != 'others') {
                labels.push(element.category)
                data.push(element.totalExpenses)
              } else {
                others = element
              }
          })
          labels = [...labels, others.category]
          data = [...data, others.totalExpenses]

          this.dataExpenses = {labels, data}
        }
      }
    },
    methods: {
        ...mapActions(['fetchReports', 'fetchExpenses']),
    },
    created() {
        this.fetchReports()
        this.fetchExpenses()
    }
}
</script>

<style>

</style>
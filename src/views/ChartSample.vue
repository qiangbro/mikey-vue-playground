<template>
    <v-chart :options="polar"/>
</template>

<script>


  import ECharts from 'vue-echarts' // refers to components/ECharts.vue in webpack
  import 'echarts/lib/chart/line'
  import 'echarts/lib/component/polar'

  // register component to use

  export default {
    components: {
      'v-chart': ECharts
    },
    data() {
      let data = []

      for (let i = 0; i <= 360; i++) {
        let t = i / 180 * Math.PI
        let r = Math.sin(2 * t) * Math.cos(2 * t)
        data.push([r, i])
      }

      return {
        polar: {
          title: {
            text: '极坐标双数值轴'
          },
          legend: {
            data: ['line']
          },
          polar: {
            center: ['50%', '54%']
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          angleAxis: {
            type: 'value',
            startAngle: 0
          },
          radiusAxis: {
            min: 0
          },
          series: [
            {
              coordinateSystem: 'polar',
              name: 'line',
              type: 'line',
              showSymbol: false,
              data: data
            }
          ],
          animationDuration: 2000,
        },
      };
    },
  }
</script>

<style scoped>

</style>
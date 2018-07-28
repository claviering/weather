<template>
  <div class="rainChart">
    <ve-line :tooltip-visible="false" :legend-visible="false" :data="chartData" height="200px" width="200px" :textStyle="{color: '#FFF'}"></ve-line>
  </div>
</template>

<script>
import VeLine from 'v-charts/lib/line.common'
export default {
  components: { VeLine },
  data () {
    return {
      chartData: {
        columns: ['time', 'Pre'],
        rows: [
          { 'time': '9:00', 'Pre': 10},
          { 'time': '10:00', 'Pre': 0},
          { 'time': '11:00', 'Pre': 5},
          { 'time': '12:00', 'Pre': 30}
        ]
      }
    }
  }
}
</script>

<style scoped>
.rainChart{
    position: absolute;
    bottom: -40px;
    right: 0;
}
</style>

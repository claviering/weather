<template>
    <div class="main">
      <apphead></apphead>
      <temperature></temperature>
      <leftSideBox></leftSideBox>
      <rightSideBox></rightSideBox>
      <chart></chart>
    </div>
</template>

<script>
import apphead from './../apphead/apphead.vue'
import temperature from './../temperature/temperature.vue'
import leftSideBox from './../leftSideBox/leftSideBox.vue'
import rightSideBox from  './../rightSideBox/rightSideBox.vue'
import chart from './../chart/chart.vue'
export default{
  data: function () {
    return {
    }
  },
  components: {
    'apphead': apphead,
    'temperature': temperature,
    'leftSideBox': leftSideBox,
    'rightSideBox': rightSideBox,
    'chart': chart
  }
} 
</script>

<style scoped>

.main{
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url('./../../../static/img/backbround.jpg');
  background-size: 300%;
  background-repeat: no-repeat;
}

</style>

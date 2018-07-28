<template>
    <div class="comHead">
        <div class="head_more" v-on:click="showLeft">
            <span class="icon-more"></span>
        </div>
        <div class="head_title">
            <div>{{title}}</div>
        </div>
        <div class="head_add" v-on:click="showRight">
            <span class="icon-add"></span>
        </div>
    </div>
</template>

<script>
export default{
  data () {
    return {
      title: 'Guang Zhou'
    }
  },
  methods: {
    showLeft: function () {
        this.$store.commit('changeLeftSideShow')
    },
    showRight: function () {
        this.$store.commit('changeRightSideShow')
        if (this.$store.state.leftSideShow) {
          this.$store.commit('changeLeftSideShow')
        }
    }
  }
}
</script>

<style scoped>
@import './dis/style.css';
    .comHead{
        margin: 0 0 0 0;
        padding: 0px;
        width: 100%;
        height: 8%;
        display: flex;
        align-items: center;
        position: relative;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-bottom-color: rgb(235,235,235);
        color: white;
    }
    .head_more{
        position: absolute;
        left: 5%;
    }
    .head_title{
        width: 100%;
        text-align: center;
    }
    .head_add{
        position: absolute;
        right: 7%;
    }
</style>

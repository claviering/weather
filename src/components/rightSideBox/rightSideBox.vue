<template>
    <transition name="rightSide">
      <div class="rightSideBox" v-if="rightSideShow">
            <b-input-group prepend="">
                <b-input-group-append>
                    <b-btn v-on:click="hideRightSide" variant="info">Back</b-btn>
                </b-input-group-append>
                <b-form-input placeholder="Enter the City or ZIP code"></b-form-input>
                <b-input-group-append>
                    <b-btn variant="info">Search</b-btn>
                </b-input-group-append>
            </b-input-group>
      </div>
    </transition>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

export default {
  computed: {
    rightSideShow: function () {
      return this.$store.state.rightSideShow
    }
  },
  methods: {
    hideRightSide: function () {
        this.$store.commit('changeRightSideShow')
    }
  }
}
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.css';
@import 'bootstrap-vue/dist/bootstrap-vue.css';
.rightSideBox{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    background-color: white;
}
.rightSide-enter, .rightSide-leave-to{
    right: -100%;
    top: 0px;
}
.rightSide-enter-active, .rightSide-leave-active{
    transition: right 1s;
}
.rightSide-enter-to, .rightSide-leave{
    right: 0%;
    top: 0px;
}
</style>

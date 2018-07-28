<template>
    <transition name="goRight">
        <div class="leftSideBox" v-show="leftSideShow">
            <div class="leftSideImg">
                <img src="./th.jpg">
            </div>
            <div class="leftSideInfo">
               <p>Sign In/ Sign Up</p>
            </div>
            <div class="leftSideInfo">
               <p>Edit Locations</p>
            </div>
            <div class="leftSideInfo">
               <p>Guang Zhou</p>
            </div>
            <div class="leftSideInfo">
               <p>Setting</p>
            </div>
            <div class="leftSideInfo">
               <p>Send feedback</p>
            </div>
        </div>
    </transition>
</template>

<script>
export default{
  computed: {
    leftSideShow: function () {
      return this.$store.state.leftSideShow 
    }
  }
}
</script>

<style scoped lang="css">
.leftSideBox{
    height: 91%;
    width: 40%;
    background-color: rgb(35,33,33);
    z-index: 100;
    position: absolute;
}
.leftSideImg{
    padding-left: 10px;
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    display: flex;
    justify-content: center;
}
.leftSideImg img{
    width: 130px;
    height: 130px;
}
.leftSideInfo{
    text-align: center;
    border-bottom-width: 1px;
    border-bottom-style: solid;
}
.leftSideInfo p{
    color: white;
}
.goRight-enter, .goRight-leave-to{
    left: -40%;
}
.goRight-enter-active, .goRight-leave-active{
    transition: left 0.5s;
}
.goRight-enter-to, .goRight-leave{
    left: 0%;
}
</style>

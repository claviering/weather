<template>
    <div class="temper">
        <div class="weather">
            <span class="icon-cloud-logo"></span>
            <span class="spanText">Cloudy</span>
        </div>
        <div class="maxTemp">
            <span class="icon-top"></span>
            <span class="spanText">33</span>
            <span class="icon-down"></span>
            <span class="spanText">26</span>
        </div>
        <div class="nowTemp">
            <span class="spanText">33</span>
            <div class="zore">&#176</div>
        </div>
    </div>
</template>

<script>
export default{
} 
</script>

<style scoped>
@import './dis/style.css';
.temper{
    width: 40%;
    height: 30%;
    position: absolute;
    bottom: 10px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.spanText{
    display: flex;
    width: 20%;
    height: 100%;
    line-height: 100%;
}
.weather{
    height: 10%;
    width: 100%;
    display: flex;
    padding-left: 10%;
    padding-bottom: 5%;
}
.maxTemp{
    height: 10%;
    width: 100%;
    display: flex;
    padding-left: 10%;
    margin-top: 5%;
}
.nowTemp{
    height: 50%;
    font-size: 8em;
    font-weight: 100;
    margin-bottom: -10%;
}
.nowTemp span{
    line-height: 80%;
    padding-left: 5%;
    position: relative;
}
.zore{
    position: absolute;
    height: 30%;
    left: 90%;
    top: 19%;
    display: inline-block;
}
.icon-cloud-logo{
    padding-right: 5%;
}
</style>

<template>
<div class="wrap">
    <div class="bg-color"></div>
    <ul class="clear-fix">
        <li>
            <img src="/static/images/banner_1.png" alt="">
            西江区域
        </li>
        <li>
            <img src="/static/images/banner_2.png" alt="">
            珠三角区域
        </li>
        <li>
            <img src="/static/images/banner_3.png" alt="">
            航运企业
        </li>
        <li>
            <img src="/static/images/banner_4.png" alt="">
            码头调度信息
        </li>
        <li>
            <img src="/static/images/banner_5.png" alt="">
            费用信息
        </li>
    </ul>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrap{
    position: absolute;
    width: 100%;
    height: 86px;    
    bottom: 0;
}
.bg-color{
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #3D6FAA;
    opacity: 0.7;
    /* bottom: 85px; */
    z-index: 2;
}
.wrap ul{
    position: absolute;    
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 100;   
    width: 1200px; 

}
.wrap ul li img{
    display: inline-block;
    vertical-align: middle;
    margin-right: 20px;
}
.wrap ul li{
    cursor: pointer;
    height: 86px;
    line-height: 86px;
    width: 238px;
    text-align: center;
    float: left;
    list-style: none;
    color: #FFF;
    font-size: 18px;
    border-left:1px solid;    
    border-color: rgba(255, 255, 255, 0.2)
}
.wrap ul li:last-child{
    border-right:1px solid;  
    border-color: rgba(255, 255, 255, 0.2)
}
</style>


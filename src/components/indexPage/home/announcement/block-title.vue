<template>
    <div class="title">
        <img :src="`/static/images/${logoType}-icon.jpg`" alt="">
        <div class="more-btn">
            <router-link to="sb">
                <img src="/static/images/more_icon.png" alt="" class="more-btn-icon"> 更多
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ["logoType","moreLink"]
}
</script>

<style>
.title{
    width: 100%;
    height: 34px;
    line-height: 34px;
    margin-bottom: 10px;
}
.more-btn{
    float: right;
    color: #909090;
    font-size: 14px;    
}
</style>

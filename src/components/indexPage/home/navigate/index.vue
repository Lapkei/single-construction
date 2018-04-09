<template>
    <BG bg-color="blue" width-limit='false' >
        <div class="title-img">
            <img src="/static/images/navigate.png" alt="">
        </div>
        <div class="map-block">
            <iframe src="" frameborder="0">

            </iframe>
        </div>
    </BG>
</template>

<script>
import BG from '../../common/label-bg'
export default {
    components:{
        BG
    }
}
</script>

<style scoped>
.title-img{
    width: 382px;
    margin:0 auto;
}
.map-block{
    width: 1200px;
    height: 500px;
    margin: 0 auto;
}
.map-block iframe{
    width: 100%;
    height: 100%;
}
</style>


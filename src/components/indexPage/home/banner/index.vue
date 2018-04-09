<template>
    <div class="wrap">
        <el-carousel :interval="3000" :height="bannerHeight" arrow="hover" indicator-position="none">
            <el-carousel-item v-for="item in bannerPic">
            <img :src="item" alt="" style="width:100%;height:100%" >
            </el-carousel-item>
        </el-carousel>
        <bannerNav></bannerNav>
    </div>
    
</template>

<script>
import bannerNav from './bannerNav'
export default {
    components:{
        bannerNav
    },
    data: function(){
        return {
            bannerPic: ['/static/images/banner1.png','/static/images/banner1.png','/static/images/banner1.png'],
            bannerHeight: '0px'
        }
    },
    mounted: function(){
        this.bannerHeight = parseInt(window.innerWidth * ( 470/1366 )) + "px";            
    }

}
</script>
<style scoped>
.wrap{    
    position: relative;
}
</style>

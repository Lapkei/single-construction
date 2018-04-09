<template>
    <BG bg-color="blue">
        <blockTitle title="航运统计" more="更多统计" more-link="hh"></blockTitle>
        <div class="iframe-wrap">
            <iframe src="" frameborder="0"></iframe>
        </div>
        <div class="iframe-wrap">
            <iframe src="" frameborder="0"></iframe>
        </div>
    </BG>
</template>

<script>
import BG from '../../common/label-bg'
import blockTitle from '../../common/home-block-title'
export default {
    components: { BG,blockTitle }
}
</script>

<style scoped>
.iframe-wrap{
    float: left;
    width: 570px;
    height: 280px;
    background-color: #FFF;
}
.iframe-wrap:last-child{
    margin-left: 20px;
}
.iframe-wrap iframe{
    width: 100%;
    height: 100%;
}
</style>



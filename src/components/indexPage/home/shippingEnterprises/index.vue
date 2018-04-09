<template>
    <BG bg-color="grey">
        <blockTitle title="航运企业" more="更多企业" more-link="hh" ></blockTitle>
        <div class="label-block" :class="{ 'margin-left': index != 0 }" v-for="(item,index) in labelData">
            <labels :logo-src="item.logoSrc" :h1="item.h1" :h2="item.h2" ></labels>      
        </div>
           
    </BG>
</template>

<script>
import BG from '../../common/label-bg'
import blockTitle from '../../common/home-block-title'
import labels from './label'
export default {
    components: { 
        BG,blockTitle,labels
    },
    data: function(){
        return {
            labelData: [
                {
                    logoSrc: "qy1.png",
                    h1: "广东粤电航运有限公司",
                    h2: "普货运输企业/ 干散货运输"
                },
                {
                    logoSrc: "qy2.png",
                    h1: "广州港集团有限公司",
                    h2: "普货运输企业/ 干散货运输"
                },
                {
                    logoSrc: "qy1.png",
                    h1: "广东粤电航运有限公司",
                    h2: "普货运输企业/ 干散货运输"
                },
                {
                    logoSrc: "qy2.png",
                    h1: "广州港集团有限公司",
                    h2: "普货运输企业/ 干散货运输"
                },
            ]
        }
    }
}
</script>

<style scoped>
.margin-left{
    margin-left:20px
}
.label-block{
    float: left;
}
</style>


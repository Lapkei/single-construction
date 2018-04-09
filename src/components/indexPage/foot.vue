<template>
    <div class="foot">
        <ul class="clear-fix">
            <li v-for="item in quickNav">
                <span v-if="item.click" @click="item.click">
                    {{item.name}}
                </span>
                <router-link v-else :to="item.link"  >
                    {{item.name}}
                </router-link>
            </li>
        </ul>
        <div class="text-center">
            <span class="sponsor">
                主办单位：广东省交通厅
            </span>
            <span>
                粤ICP备05052393号-7
            </span>
        </div>
        <div class="text-center">技术支持单位：广州数字方舟信息技术股份有限公司</div>
        <div class="text-center">推荐浏览器版本：Chrome、360浏览器</div>
    </div>
</template>

<script>
import { addFavorite } from './common/tool'
export default {
    data: function(){
        return  {
            quickNav:[
                {
                    name: '意见反馈',
                    link: 'as'
                },
                {
                    name: '相关下载',
                    link: 'as'
                },
                {
                    name: '联系我们',
                    link: 'as'
                },
                {
                    name: '加入收藏',                    
                    click: this.addStars
                },
            ]
        }
    },
    methods: {
        addStars: function(){            
            let result = addFavorite()
            if( result ){
                this.$message({
                    title: '加入收藏失败',                    
                    message: '抱歉，您所使用的浏览器无法完成此操作，请使用CTRL+D完成收藏',
                    type: 'warning'
                });
            }
        }
    }
}
</script>

<style scoped>
.foot{
    background-color: #424242;
    padding: 30px 0;
    color: #cccccc;
}
ul li{
    list-style: none;
    font-size: 14px;
    padding: 0 27px;
    border-right: 1px solid #808080;
    float: left;
}
ul li:last-child{
    border-right: 1px solid transparent;
}
ul{
    width: 446px;
    margin:0 auto;
}
.sponsor{
    margin-right: 40px;
}
.text-center{
    text-align: center;
    font-size: 14px;
    margin-top: 10px;
}
li span{
    cursor: pointer;
}
</style>

<template>
    <div class="top-wrap clear-fix" >
        <div class="top-middle-wrap">
            <div class="left">
                <span class="ur-address">
                    <iframe allowtransparency="true" frameborder="0" width="317" height="20" scrolling="no" src="//tianqi.2345.com/plugin/widget/index.htm?s=3&z=1&t=1&v=0&d=1&bd=0&k=&f=0080ff&ltf=0080ff&htf=0080ff&q=1&e=1&a=1&c=54511&w=317&h=28&align=center"></iframe>
                </span>
                <!-- <iframe allowtransparency="true" frameborder="0" width="317" height="18" scrolling="no" src="//tianqi.2345.com/plugin/widget/index.htm?s=3&z=1&t=1&v=0&d=1&bd=0&k=&f=0080ff&ltf=0080ff&htf=0080ff&q=1&e=1&a=1&c=54511&w=317&h=28&align=center"></iframe> -->
            </div>
            <div class="right">
                <span class="right-add-stars" @click="addStars">
                    加入收藏
                </span> 
                <span @click="setHomePage">
                    设为首页
                </span>       
            </div>
        </div>
    </div>
</template>
<script>
import { addFavorite,SetHome } from './common/tool'
export default {
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
        },
        setHomePage: function(){            
            let result = SetHome(this)
            if( result ){
                this.$message({
                    title: '设为首页失败',                    
                    message: '抱歉，您所使用的浏览器无法完成此操作，请手动设置首页。',
                    type: 'warning'
                });
            }
        }
    }
}
</script>
<style scoped>
.top-wrap{    
    width: 100%;
    padding: 8px 0;
    color: #2385DB;
    font-size: 12px;
    background-color: #F7FAFC;
}
.top-middle-wrap{
    width: 1160px;
    margin:0 auto;
}
.ur-address{
    margin-right: 14px;
}
.left{
    float:left;
}
.right{
    float:right;
}
.right-add-stars{
    margin-right: 39px
}
.right span{
    cursor: pointer;
}
</style>



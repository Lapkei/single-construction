<template>
    <div>
        <div class="block">
            <div class="title">
                {{title}}
            </div>   
            <div style="float:right">
                <router-link :to="moreLink||''" class="right-btn" :class="{ 'hide': !more }" >
                    {{more}}
                </router-link>            
            </div>         
        </div>
    </div>
</template>

<script>
export default {
    props: ['title','more','moreLink'],
    mounted: function(){        
    }

}
</script>

<style scoped>
.title{
    font-size: 24px;
    color: #398EDD;
    position: absolute;    
    left:-22px;
    letter-spacing: 1.2px;
    padding-left: 20px;
    border-left: 4px solid #398EDD;
}
.block{
    width: 100%;
    height: 32px;
    position: relative;
    margin-bottom: 18px;
}
.right-btn{
    display: inline-block;
    position: absolute;
    right: 0;
    z-index: 100;
    margin-top: 2px;    
    width: 90px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    background-color: #49AEEB;
    font-size: 14px;
    color: #ffffff;
    border-radius: 28px;
}
.hide{
    display: none;
}
.right-btn-wrap{
    display: block;
}
</style>

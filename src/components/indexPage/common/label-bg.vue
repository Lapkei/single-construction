<template>

    <div class="bg" :class="{ 'blue': bgColor == 'blue' , 'grey': bgColor == 'grey' }" >        
        <div class="clear-fix" :class="{ 'block-wrap' : widthLimitFlag }" :style="style" >
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    // props: 
    //      bgColor[string] : blue || grey   
    //      widthLimit[boolean] : true/false  是否使用宽度为1162px的div层
    //      width[string]:  自定义宽度
    props: ['bgColor','widthLimit','width'],  
    data: function(){
        return {
            widthLimitFlag : true,            
            style: {
                width: '',
                margin: '0 auto'
            }
        }
    },
    mounted: function(){
        // this.widthLimit = this.widthLimit == 'false' ? false : true;
        if( this.widthLimit == 'false' ){
            this.widthLimitFlag = false;
        }else{
            this.widthLimitFlag = true;    
        }     
        this.style.width = (this.width || "" ) + "px";
    }
}
</script>

<style scoped>
.bg{    
    padding: 24px 83px 30px;    
}
.blue{
    background-color: #EDF6FA;
}
.grey{
    background-color: #F9F9F9;
}
.block-wrap{
    width:1162px;
    margin:0 auto;
}
</style>


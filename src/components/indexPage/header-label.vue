<template>
    <div class="wrap">
        <div class="wrap-middle">            
            <img class="logo" src="/static/images/LOGO.png" width="382" alt="">            
            <div class="right-search-block">
                <div>
                    <ul class="clear-fix">
                        <li v-for="(item,index) in searchLabelData" :class="{ 'right-search-label-select': changeLabel == index }" @click="clickLabel(index)" >
                            {{item}}
                            <div class="triangle"></div>
                        </li>          
                    </ul>
                </div>
                <div class="input-button-block" >
                    <img src="/static/images/search-button.png" alt="" class="search-icon">
                    <input type="text" class="search-input" placeholder="请输入船名、MMSI、IMO、呼号" >
                    <div class="btn-group clear-fix">
                        <div class="search-block-btn"><img src="/static/images/userIcon.png" style="display: inline-block; vertical-align: middle;margin-right:4px" width="28px" alt=""><span>登录</span></div><div class="search-block-btn">注册</div>    
                    </div>                        
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data: function(){
      return {
          searchLabelData: ["船舶档案","物流跟踪","航线信息","管理规定"],
          changeLabel: 0
      }
  },
  methods:{
      clickLabel: function(index){
          this.changeLabel = index;
      }
  }
}
</script>
<style scoped>
.wrap{
    height: 104px;    
    width: 100%;    
    background-color: #EDF6FA;
}
.wrap-middle{
    width: 1200px;    
    height: 100%;
    position: relative;
    margin: 0 auto;
}
.logo{
    position: absolute;
    top: 0;
    bottom: 0;
    left:0;
    right: 0;
    margin:auto 0;
}
.right-search-block{
    position: absolute;
    top: 0;
    bottom: 0;    
    right: 0;
    margin:auto 0;
    height: 62px;
}
.search-input{
    width: 250px;
    height: 34px;
    border-width: 1px;
    padding-left: 20px;
    padding-right: 38px;
    border-color: #8EC0ED;
    border-top-style: solid;
    border-left-style: solid;    
}
.input-button-block{
    position: relative;
    width: 440px;
}
.search-icon{
    position: absolute;
    top: 10px;
    left: 284px;
    cursor: pointer;
}
.search-input::-webkit-input-placeholder{
    color:#4089DC;
    font-size: 12px;
}
.search-input::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color:#4089DC;
    font-size: 12px;
}
.search-input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:#4089DC;
    font-size: 12px;
}
.search-input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
    color:#4089DC;
    font-size: 12px;
}
.search-block-btn{
    display: inline-block;
    padding: 0 9px;
    height: 36px;
    line-height: 36px;
    background-color: #8EC0ED;
    font-size: 14px;
    color: #FFF;
    cursor: pointer;
    float:left;
}
.btn-group{
    position: absolute;
    width: 126px;
    top:0;
    left:310px
}
.right-search-block ul li{
    list-style: none;
    font-size: 12px;
    color: #357FCC;
    float:left;
    margin-right: 16px;
    cursor: pointer;
    position: relative;
    padding: 0 3px;
    background-color: transparent;
    transition-duration: 0.4s;
}
.right-search-block ul li:hover,.right-search-block ul .right-search-label-select{
    background-color: #8EC0ED;
    color: #FFF;
}

.right-search-block ul li:hover .triangle,.right-search-label-select .triangle{
    border-top-color: #8EC0ED;
}
.right-search-block ul{
    margin-bottom: 10px;
}
.triangle{
    width: 0;
    height: 0;            
    border-top: 8px solid transparent;
    transition-duration: 0.4s;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    position: absolute;
    left:0;
    right:0;
    margin: 0 auto;
}
</style>


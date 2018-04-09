<template>
    <div class="wrap">
        <div class="middle-wrap">
            <ul class="clear-fix">               
                <li v-for="(nav,index) in navBarData" :class="{ 'nav-select': index == navFlag  }" @click="selectNav(index,nav.router)" >
                    <span :class="{ 'small-font-size': nav.img }">
                        {{nav.name}}
                    </span>
                    <img :src="nav.img" alt="" class="nav-icon" v-show="nav.img" >
                    <div class="level-2-menu">                        
                        <div class="level-2-menu-item"  v-for="(key,keyName) in nav.level2List" @click="routerGo(key.router,$event)">
                            {{key.name}}
                            <div class="level-3-menu" v-show="key.level3List != false" >
                                <div class="level-3-menu-item" v-for="list3Name in key.level3List" @click="routerGo(list3Name.router,$event)">
                                    {{list3Name.name}}
                                </div>                                                              
                            </div> 
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data: function(){
        return{
            navFlag : 0,
            navBarData: [
                // 当 level2List 为false时代表该栏没有 二级菜单
                // 无论一级二级三级的菜单定义均以 [{ name: 名称 , router: 路由 , level2List/level3List: false || {  } }]
                {                    
                    name : "首页",
                    router: "/home",                   
                    level2List: false
                },
                {
                    name : "航行保障",  
                    router: "",                    
                    level2List:[
                        {
                            name:"航道信息服务",
                            router: "",
                            level3List: false
                        },
                        {
                            name:"水上交通通告",
                            router: "",
                            level3List: false
                        }
                    ]                    
                },
                {
                    name : "企业信息",
                    router: "",
                    level2List:[
                        {
                            name:"航运企业",
                            router: "",
                            level3List: false
                        },
                        {
                            name:"港口码头",
                            router: "",
                            level3List: false
                        },
                        {
                            name:"船代/货代",
                            router: "",
                            level3List: false
                        },
                        {
                            name:"其他航运企业",                            
                            router: "",
                            // level3List: [
                            //     {
                            //         name: "A",
                            //         router: "",
                            //     }
                            // ]
                        }
                    ] 
                },
                {
                    name : "运输信息",
                    level2List:[
                        {
                            name:"船舶档案",
                            router: "",
                            level3List: false
                        },
                        {
                            name:"大宗散货运输",
                            router: "",
                            level3List: false
                        },
                        {
                            name:"江海联运",
                            router: "",
                            level3List: false
                        },
                        {
                            name:"费用信息",
                            router: "",
                            level3List: false
                        }
                    ]    
                },
                {
                    name : "物流信息",
                    level2List:[
                        {
                            name:"船舶位置",
                            router: "",
                            level3List: false
                        },
                        {
                            name:"物流跟踪",
                            router: "",
                            level3List: false
                        },
                        {
                            name:"航线船期",
                            router: "",
                            level3List: false
                        },
                        {
                            name:"码头调度信息",
                            router: "",
                            level3List: false
                        }
                    ]
                },
                {
                    name : "法律法规",
                    level2List:false
                },
                {
                    name : "航运统计",
                    img: "/static/images/nav-icon1.png",
                    level2List:false
                },
                {
                    name : "视频信息",
                    img: "/static/images/nav-icon2.png",
                    level2List:false
                }
            ]
        }
    },   
    methods: {
        selectNav: function(index,router){
            this.navFlag = index;            
            this.router.push(router)
        },
        routerGo: function(path,event){
            event.cancelBubble = true;
            this.router.push(path)
        }
    } 
}
</script>
<style scoped>
.wrap{
    width: 100%;
    height: 58px;
    background-color: #4096EE;
}
.middle-wrap{
    margin:0 auto;
    width: 1200px;
    height: 100%;
}
.middle-wrap  ul{
    height: 100%;    
}
.middle-wrap li{
    list-style: none;
    float: left;
    width: 150px;
    height: 58px;
    line-height: 58px;
    color: #FFF;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    position: relative;
    transition-duration: 0.3s;
}
.middle-wrap li:hover,.middle-wrap .nav-select{
    background-color: #3084DA;    
}
.middle-wrap li:hover .level-2-menu-item{
    height: 40px;
}
.level-2-menu{
    position: absolute;
    z-index: 300;
    width: 100%;
}
.level-2-menu-item{
    width: 100%;
    height: 0px;
    line-height: 40px;
    background-color: #2F86DF;
    font-size: 16px;
    transition-duration: 0.3s;
    position: relative;
    overflow: hidden;
}
.level-2-menu-item:hover{
    background-color: #2674C4;
    overflow:visible;
}
.level-2-menu-item:hover .level-3-menu-item{
    height: 40px;
}
.level-2-menu-item .level-3-menu{
    position: absolute;    
    width: 100%;
    top:0;
    left: 100%;
}
.level-2-menu-item .level-3-menu-item{
    width: 100%;
    height: 0px;
    background-color: #2674C4;
    overflow: hidden;
    transition-duration: 0.3s;
}
.small-font-size{
    font-size: 14px;
}
.nav-icon{
    display: inline-block;
    vertical-align: middle;
}
</style>


<template>
    <div>
        <div class="block"> 
            <slot></slot>           
            <div class="content">
                <ul>
                    <li v-for="item in textData">
                        <router-link :to="`/${item.id}`">
                            <div class="text-title">
                                {{item.text}}
                            </div>
                            <div class="date">
                                {{item.date}}
                            </div>
                        </router-link>
                    </li>           
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            textData : [
                {
                    text: "广东省珠海航道局关于赤粉水道莲溪大桥航段禁止通",
                    date: '2017-5-4',
                    id: '123'
                },
                {
                    text: "关于吴川市江心岛大桥桥涵标建成启用的航道通告",
                    date: '2017-5-4',
                    id: '123'
                },
                {
                    text: "关于取消对拟通过连山干井子滑坡河段普通货船实关于取消对拟通过连山干井子滑坡河段普通货船实",
                    date: '2017-5-4',
                    id: '123'
                },
                {
                    text: "关于吴川市江心岛大桥桥涵标建成启用的航道通告",
                    date: '2017-5-4',
                    id: '123'
                },
                {
                    text: "关于吴川市江心岛大桥桥涵标建成启用的航道通告",
                    date: '2017-5-4',
                    id: '123'
                }
            ]
        }
    }
}
</script>

<style scoped>
.block{
    padding: 10px 20px 20px;
    background-color: #ffffff;
}
li{
    list-style: none;
    color: #646464;
    font-size: 16px;
    letter-spacing: 0.8px;
    margin-bottom: 12px;
}
li:last-child{
    margin-bottom: 0px;
}
li:after{
    content: "";
    line-height: 0;
    clear: both;
    visibility: hidden;
    display: block;
}
.text-title{
    float: left;
    width: 420px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.date{
    float: right;
    width: 77px;
}
</style>

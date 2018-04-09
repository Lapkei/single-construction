<template>
    <div class="wrap">        
            <table cellspacing="0">    
                <thead>
                    <tr class="white-block">
                        <th v-for="item in title">{{item}}</th>
                    </tr>
                </thead>      
                <transition name="el-fade-in">       
                    <tbody v-show="show">
                        <tr v-for="(item,index) in tableData" :class="{ 'blue-block': index % 2 == 0 , 'white-block': index % 2 != 0 }" v-if="index < 5" >
                            <td>{{item.name}}</td>
                            <td>{{item.shippingEnt}}</td>
                            <td>{{item.netHeight}}</td>
                            <td :class="{ 'danger-color': item.status != '正常' }" >{{item.status}}</td>
                        </tr>             
                    </tbody>                    
                </transition> 
            </table>
         
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            title: ['桥梁名称','所属航道','最新净高值(m)','净高状态'],
            tableData:[
                {
                    name: '东新高速紫坭特大桥',
                    shippingEnt: '沙湾水道',
                    netHeight: 3.8,
                    status: '正常'
                },
                {
                    name: '东新高速紫坭特大桥',
                    shippingEnt: '沙湾水道',
                    netHeight: 3.8,
                    status: '正常'
                },
                {
                    name: '东新高速紫坭特大桥',
                    shippingEnt: '沙湾水道',
                    netHeight: 3.8,
                    status: '过高预警'
                },
                {
                    name: '东新高速紫坭特大桥',
                    shippingEnt: '沙湾水道',
                    netHeight: 3.8,
                    status: '正常'
                },
                {
                    name: '东新高速紫坭特大桥',
                    shippingEnt: '沙湾水道',
                    netHeight: 3.8,
                    status: '正常'
                },
                {
                    name: '东新高速紫坭特大桥',
                    shippingEnt: '沙湾水道',
                    netHeight: 3.8,
                    status: '过高预警'
                },
                {
                    name: '东新高速紫坭特大桥',
                    shippingEnt: '沙湾水道',
                    netHeight: 3.8,
                    status: '正常'
                },
                {
                    name: '东新高速紫坭特大桥',
                    shippingEnt: '沙湾水道',
                    netHeight: 3.8,
                    status: '正常'
                },
                {
                    name: '东新高速紫坭特大桥',
                    shippingEnt: '沙湾水道',
                    netHeight: 3.8,
                    status: '过高预警'
                },
            ],
            show: true
        }
    },
    mounted: function(){
        this.getTableData()
    },
    methods: {
        getTableData: function(){
            setInterval(()=>{
                this.show = false;
                setTimeout(()=>{
                    this.show = true
                },1000)
            },8000)
            
        }
    }
}
</script>

<style scoped>
.wrap{
    height: 230px;
    background-color: #ffffff;
}
table{
    width: 100%;
}
thead th{
    border-bottom: 1px solid #EDF6F7;
}
thead tr th:nth-child(1){
    width: 322px;
}
thead tr th:nth-child(2){
    width: 144px;
}
thead tr th:nth-child(3){
    width: 160px;
}
thead tr th:nth-child(4){
    width: 144px;
}
th{
    font-size: 16px;
    color: #333333;
    height: 41px;
    line-height: 41px;   
    font-weight: normal; 
}
td{
    text-align: center;
    height: 34px;
    line-height: 34px;
    color: #646464;
}
.footer-bg{
    width: 100%;
    height: 19px;
}
.blue-block{
    background-color: #EDF6FD;
}   
.white-block{
    background-color: #FFFFFF;
}
.danger-color{
    color: #F35A5A;
}
</style>


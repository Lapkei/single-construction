<template>
    <BG bg-color="grey" >        
        <div style="width:770px;" class="block">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="净高" name="first">
                    <zebraTable></zebraTable>
                </el-tab-pane>
                <el-tab-pane label="水情" name="second">

                </el-tab-pane>
                <el-tab-pane label="浅滩浅段" name="third">
                    
                </el-tab-pane>            
            </el-tabs>
            <div class="more-btn">
                <img src="/static/images/more_icon.png" alt="" class="more-btn-icon"> 更多
            </div>
        </div>
        <div style="width:370px;" class="block">
            <el-tabs @tab-click="handleClick">
                <el-tab-pane label="法律法规">
                    <div style="370px">
                        <law></law>
                    </div>
                </el-tab-pane>           
            </el-tabs>
            <div class="more-btn"> 
                <img src="/static/images/more_icon.png" alt="" class="more-btn-icon"> 更多
            </div>
        </div>        
    </BG>
</template>

<script>
import BG from '../../common/label-bg'
import zebraTable from '../../common/zebra-table'
import law from './law'
export default {
    components:{
        BG,zebraTable,law
    },
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        
      }
    }
}
</script>

<style scoped>
.block{
    position: relative;
    float: left;
}
.block:last-child{
    margin-left: 20px;
}
.more-btn{
    position: absolute;
    color: #909090;
    font-size: 14px;
    top:10px;
    right: 4px;
    cursor: pointer;
}
</style>


<template>
    <BG bg-color="grey"  width="1200">
        <h1>
            友情链接
        </h1>
        <div>
            <linkButton v-for="item in btnData" :link="item.link" :name="item.name" class="btn" ></linkButton>            
        </div>
    </BG>
</template>

<script>
import BG from '../../common/label-bg'
import linkButton from './linkButton'
export default {
    components: { BG,linkButton },
    data: function(){
        return  {
            btnData: [
                {
                    link: "ss",
                    name: "珠江航务管理局"
                },
                {
                    link: "ss",
                    name: "交通部海事局"
                },
                {
                    link: "ss",
                    name: "广东省交通运输厅"
                },
                {
                    link: "ss",
                    name: "广东省航道局"
                },
                {
                    link: "ss",
                    name: "广东海事局"
                },
                {
                    link: "ss",
                    name: "广西自治区交通厅"
                },
            ]
        }
    }
}
</script>

<style scoped>
h1{
    font-size: 16px;
    color: #333333;
    font-weight:560;
    margin-bottom: 16px;
}
.btn{
    margin-right:30px;
}
.btn:last-child{
    margin-right: 0;
}
</style>


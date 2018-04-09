<template>
    <router-link :to="link" class="router-link">
        <div class="btn" >
            {{name}}
        </div>
    </router-link>
</template>

<script>
export default {
    props: ["link","name"],

}
</script>

<style scoped>
.btn{
    width: 175px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.20);    
    background-color: #ffffff;
    color: #646464;
    font-size: 14px;
}
.router-link{
    float: left;
}
</style>

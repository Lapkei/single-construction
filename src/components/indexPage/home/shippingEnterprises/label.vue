<template>
    <div class="label">
        <div class="img-wrap">
            <img :src="`/static/images/${logoSrc}`" width="100" alt="">
        </div>
        <div class="title-wrap">
            <h1>{{h1}}</h1>
            <h2>{{h2}}</h2>
        </div>
    </div>
</template>

<script>
export default {
    props: ["logoSrc","h1","h2"]
}
</script>

<style scoped>
.label{
    width: 275px;
    height: 202px;
    background-color: #ffffff;
    /* float: left; */
    padding-top: 23px;
    border-bottom: 2px solid #368DEF;
    transition-duration: 0.35s;
    cursor: pointer;    
}
.label:hover{
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.1);
}
.img-wrap{
    text-align: center;
    margin-bottom: 10px;
}
.title-wrap{
    text-align: center;
}
.title-wrap h1,h2{
    padding: 0;
    margin: 0;
}
.title-wrap h1{
    font-size: 16px;
    color: #333333;
    margin-bottom: 10px;
    font-weight: normal;
}
.title-wrap h2{
    font-size: 14px;
    color: #646464;
    font-weight: normal;
}
</style>


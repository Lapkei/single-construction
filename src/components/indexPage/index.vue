<template>
  <div>
      <top></top>
      <headLabel></headLabel>
      <navbar></navbar>
      <transition name="el-fade-in">   
        <router-view></router-view> 
      </transition>
      <foot></foot>
  </div>
</template>
<script>
import '../../../static/css/common.css'
import top from './top'
import headLabel from './header-label'
import navbar from './nav-bar'
import foot from './foot'
export default {
  components: { top,headLabel,navbar,foot },
}
</script>
<style>
*,html,body{
    padding: 0;
    margin: 0;
}
</style>



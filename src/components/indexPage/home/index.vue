<template>
  <div>
        <!-- 聚焦图 -->
        <focus></focus>
        <!-- 航行参考图 -->
        <navigate></navigate>
        <!-- 净高 水情 浅滩 法律法规 -->
        <tableBlock></tableBlock>
        <!-- 通告 -->
        <announcement></announcement>
        <!-- 航运企业 -->
        <shippingEnterprises></shippingEnterprises>
        <!-- 航运统计 -->
        <shippingStatistics></shippingStatistics>
        <!-- 友情链接 -->
        <friendlyLink></friendlyLink>
  </div>
</template>

<script>
import focus from './banner'
import navigate from './navigate'
import tableBlock from './netHeight-waterLevel-bank&law'
import announcement from './announcement'
import shippingEnterprises from './shippingEnterprises'
import shippingStatistics from './shippingStatistics'
import friendlyLink from './friendlyLink'
export default {
    components:{
        focus,navigate,tableBlock,announcement,shippingEnterprises,shippingStatistics,friendlyLink
    }
}
</script>

<style>

</style>

<template>
    <BG bg-color="blue">
        <blockTitle title="通告"></blockTitle>        
        <div>
            <!-- 航行 -->
            <div class="left-block">
                <tableBlock>
                    <announcementBlockTitle logoType="navigate" more-link="/"></announcementBlockTitle>
                </tableBlock>
            </div>
            <!-- 航道 -->
            <div class="left-block">
                <tableBlock>
                    <announcementBlockTitle logoType="channel" more-link="/"></announcementBlockTitle>
                </tableBlock>
            </div>
        </div>
    </BG>
</template>

<script>
import BG from '../../common/label-bg'
import blockTitle from '../../common/home-block-title'
import tableBlock from '../../common/table-with-date'
import announcementBlockTitle from './block-title'
export default {
    components: {
        BG,blockTitle,tableBlock,announcementBlockTitle
    }
}
</script>

<style scoped>
.left-block{
    float: left;
    width: 570px;    
}
.left-block:first-child{
    margin-right: 20px;
}
</style>

<template>
    <div class='app'>
        <side-bar class='left'></side-bar>
        <router-view class='right'>
        </router-view>
    </div>
</template>

<script>
import SideBar from './SideBar.vue'
export default {
    components:{
        SideBar
    }
}
</script>
<style lang="scss" scoped>
.app{
    margin: 0;
    padding:0;
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.left{
    flex-grow: 0;
    width: 60px;
}
.right{
    flex-grow: 1;
    width: auto;
}
</style>

<template>
    <nav class='sidebar'>
        <router-link class="item" to="/"><img class='item-img' src='/img/home.png'></router-link>
        <router-link class="item" to="/test"><img class='item-img' src='/img/post.png'></router-link>
        <router-link class="item login-item" to="/login"><img class='item-img' src='/img/login.png'></router-link>
    </nav>
</template>

<script>
    export default {
        mounted() {
        }
    }
</script>
<style lang='scss' scoped>
.sidebar{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: #000000;
}
.item{
    margin: 10px 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
}
.item-img{
    width: 100%;
    height:100%;
    object-fit: cover;
    user-select: none;
}
.login-item{
    margin-top:auto;
}
</style>

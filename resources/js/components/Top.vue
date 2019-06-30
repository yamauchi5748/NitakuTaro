<template>
    <div class='top'>
        <router-link class="vote-link" to="/poll">Vote</router-link>
    </div>
</template>

<script>
    export default {

    }
</script>
<style lang='scss' scoped>
.top{
    display: flex;
    justify-content: center;
    align-items: center;
}
.vote-link{   
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border-radius: 75px;
    text-decoration: none;
    font-size: 45px;
    background-color: black;
    color: white;
    user-select: none;
}
</style>

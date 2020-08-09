<template>
    <div class="head">
        <ul>
            <router-link to="/home" tag="li">推荐</router-link>
            <router-link to="/infant" tag="li">母婴</router-link>
            <router-link to="/shoes" tag="li">鞋包饰品</router-link>
            <router-link to="/food" tag="li">饰品</router-link>
            <router-link to="/digital" tag="li">数码家电</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data () {
        return {
        
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{width: 100%;height: 50px;background: purple;}
li{float: left;width: 20%;line-height: 50px;text-align: center;color: #fff;}
</style>

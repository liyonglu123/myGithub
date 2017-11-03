<template>
    <div class="index">
        <p>我是跟组件哦!</p>
        <div class="tab">
            <router-link to="/Parent">父组件</router-link>
            <router-link to="/Children/one">子组件one</router-link>
            <router-link :to="{name: 'Two'}">子组件two</router-link>
            <!-- 使用参数的时候要使用 name  path会忽略掉参数 -->
            <!-- <router-link :to="{ name: 'Children', params: { id: 123}}">子组件1</router-link>
            <router-link :to="{ name: 'Children', params: { id: 456 }}">子组件2</router-link> -->
        </div>
        <!-- 路由匹配到的组件渲染到这里 -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'index',
    data () {
        return {

        }
    }
  
}
</script>

<style>

</style>

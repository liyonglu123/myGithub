<template>
    <div class="one">
        这是one组件；
        <button @click="commit">给two组件发送消息</button>
        <p>{{ message }}</p>
    </div>
</template>
<script>
import bus from './bus.js'
// import Vue from 'vue'
// var bus = new Vue()  
export default {
    name: "one",
    data () {
        return {
            message: ''
        }
    },
    methods: {
        commit () {
            bus.$emit('sendMessage',{
                msg: '这条消息来自one组件'
            }) 
        }
    },
    mounted  () {
        bus.$on('backMessage', (data) => {
            this.message = data.msg;
        })
        // bus.$on('backMessage', function(data){
        //      this.message = data.msg;
        // })
    }
  
}
</script>
<style>
</style>
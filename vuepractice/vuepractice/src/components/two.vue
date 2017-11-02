<template>
    <div @click="commit">
        <p>这是two组件<button @click="commit">给one组件发送信息</button></p>
        <p>{{ message }}</p>
    </div>
</template>
<script type="text/javascript">
import bus from './bus.js'
// import Vue from 'vue'
// var bus = new Vue()
export default {    
    name: 'two',
    data () {
        return {
            message: ''
        }
    },
    methods:{
        commit () {
            bus.$emit('backMessage',{
                msg: '这条信息来自于two'
            })
        }
    },
    mounted () {
        bus.$on('sendMessage', (data) => {
            this.message = data.msg;
        })
    }
}
</script>
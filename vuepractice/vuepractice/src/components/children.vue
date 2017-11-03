<template>
  <div class="children">
    <!-- <h1>儿子: 谢谢爸爸给的{{ money }}块钱</h1> -->
    <h1>{{$route.params.id}}</h1>

    <!-- 可以根据不同的id 展示不同的用户的信息 发送不同的请求 -->
    <p v-if="getMoney < 300 ">儿子：{{ getMoney }}太少了再点吧！</p>
    <p v-else>谢谢老爸！</p>
    <h1>{{ msg }}</h1>  
    <button @click="repay" v-if="getMoney > 300">点我有惊喜哦</button>
    <!-- 渲染子组件的子组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'children',
  data () {
    return {
      msg: '我是子组件本身的数据！',
      users: [
        {
          id: 123,
          name: "张三",
          age: 22
        },
        {
          id: 456,
          name: "李四",
          age: 25
        }
      ]
    }
  },
  props: {
    money: {
      type: Number,
      default: 0
    }
  },
  computed: {
    getMoney () {
      return this.money;
    }
  },
  methods: {
    repay () {
      // debugger
      this.$emit('tuihuan',this.getMoney - 300 );
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

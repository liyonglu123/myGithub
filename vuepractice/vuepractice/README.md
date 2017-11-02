# vuepractice

> vue zujiantognxin vuex

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).




### vue 组件之间的通信和vuex的使用

> Vue组件之间的通信
```
    个人认为Vue组件之间的通信主要归类为3种：
     父子组件之间的通信
     任意两个组件之间的通信
     最终的boss，Vuex-状态管理模式
```

父子之间的关于钱的故事是如何解决的呢？
场景一： 
 爸爸：儿子给你100块
大儿子: 爸爸给我100块

场景二： 
 爸爸：儿子给你100块
大儿子: 爸爸给我100块太少了可以再给我100吗？
爸爸： 你这孩子再给你100块
大儿子： 谢谢老爸

综合案例：
老爸给儿子零花钱，老爸通过props将钱给到儿子，儿子拿到后通过计算属性得到自己的零花钱，发现太少了，于是老爸多给了儿子，可是儿子只想要300块去steam上买个游戏，超过300块后，儿子就发送了一个自定义事件repay，将超过300块的钱还给老爸，老爸通过监听repay这个事件的回调里面拿到儿子还给他的钱。


> 任意两个组件之间的通信

但是实际当项目逐渐变大，组件之间的层级变多，很多时候非父子间的组件通信也就开始多了，这时候我们就需要另外一种通信方式，官方的叫法global bus。


vuex 中的循环的使用 
axios 的局部和全局使用  
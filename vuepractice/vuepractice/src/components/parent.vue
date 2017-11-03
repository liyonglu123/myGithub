 <template>
    <div class="parent">
        <button>{{count}}</button>
        <button>{{getCount}}</button>
        <button @click="addCount">加数字</button>
         <button @click="decCount">减数字</button>
         <p @click="changeCount">改变数字</p>
         <p>cart的数据模块</p>
         <p>物品名称：{{cartName}}</p>
         <p>物品数量：{{cartCount}}</p>
         <p>getters得到的数据</p>
         <p>物品名称：{{getName}}</p>
         <p>物品数量：{{getCounts}}</p>
         <p>actions的数据</p>
         <p @click="changeName({newName: '笔记本2代'})">改变名字</p>
         <p @click="changeCounts({newCount: 666})">改变数量</p>
         <p @click="changeNamea">改变名字</p>
         <p @click="changeCountsa">改变数量</p>
        <Row>
        <Col span="12">col-12</Col>
        <Col span="12">col-12</Col>
       </Row>
        <Row type="flex">
        <Col span="6" order="4">1 | order-4</Col>
        <Col span="6" order="3">2 | order-3</Col>
        <Col span="6" order="2">3 | order-2</Col>
        <Col span="6" order="1">4 | order-1</Col>
    </Row>
       
        <h1>爸爸：给你{{money}}块钱</h1>
        <Kid :money=" money" @tuihuan="tuihuan"></Kid>
        <button @click="add">那给你加100</button>
        <p v-if="back" @tuihuan="tuihuan">儿子：超过300我不要，还给你 {{ back }}元</p>
        <br>
        <One></One>
        <br>
        <br>
         <Two></Two>
    
         Correct usage:
<Page :current="1" :total="100"></Page>

<!-- <div class="list" style="height:100px;width:500px;background:red;">
    <ul v-for="item in getList" :key="item.count">
        <li>
            <label for="">{{item.name}}</label>
            <span>{{ item.count }}</span>

        </li>
    </ul>
</div> -->
<!-- <div class="list" style="height:100px;width:500px;background:red;">
    <p>地点为:{{getList.cnty}} : {{getList.city}}</p>
</div> -->
<div class="list" style="height:100px;width:500px;background:red;">
    <p>地点为:{{weather.cnty}} ---- {{weather.city}}</p>
</div>
 </div>
</template>

<script>
import Kid from "@/components/children"
import One from "@/components/one"
import Two from "@/components/two"
import { mapState, mapGetters, mapActions } from "Vuex";  
import { getWheather } from '@/api/index'
// import { createNamespacedHelpers } from 'vuex'// 创建命名空间辅助函数 可以使用再只有这个组件
// 存在的情况下
export default {
    name: "parent",
    data() {
        return {
            money: 100,
            back: 0,
            weather:{}
        }
    },
     computed: {
         ...mapState({
             count: state=> state.count,
             cartName: state => state.cart.name,
             cartCount: state => state.cart.count,
         }),
         ...mapGetters ([
           'getCount',  
           'getName',
           'getCounts',// 笔记本的数量
           'getList' //异步获取的数据 
        ]),
    },
    created (){
        this._getWheather();
    },
    mounted () {
        // debugger
        // this.getsSycnList();
    },
    methods: {
        _getWheather (){
            getWheather().then((res)=>{
                // debugger
                this.weather = res.HeWeather5[0].basic;
            })
        },
        ...mapActions({
            addCount: 'addCount',
            decCount: 'decCount',
            // cart 的模块的actions 在全局的命名空间上 如何想更高的封装可以使用 命名空间进行封装
            changeName: 'changeName',
            changeCounts: 'changeCounts',
            // getsSycnList: 'sycnList' //异步获取的额数据
        }
          ),
        changeCount (){
            // 两种方式实现 commit 提交
            this.addCount({step: 3});
            // this.addCount(3)
        },
        // cart 的模块的数据改变
        changeNamea (){
             this.changeName({newName: '步步高'});
        },
        changeCountsa (){
 this.changeCounts({newCount: 999});
        },
        // ...mapMutations ([
        //     'INCREMENT',
        //     'DECREMENT'
        // ]),
        // inc () {
        //     debugger

        // },
        // dec () {

        // },
        
        tuihuan (back) {
            // debugger
            //  子组件传过来的值
            this.back = back;
        },
        add () {
            this.money += 100;
        }
        
    },
  components: {
      Kid,
      One,
      Two
  }
}
</script>

<style>
</style>
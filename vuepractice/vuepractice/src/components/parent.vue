 <template>
    <div class="parent">
        <button>{{count}}</button>
        <button>{{getCount}}</button>
        <button @click="addCount">加数字</button>
         <button @click="decCount">减数字</button>
         <p @click="changeCount">改变数字</p>
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

 </div>
</template>

<script>
import Kid from "@/components/children"
import One from "@/components/one"
import Two from "@/components/two"
import { mapState, mapGetters, mapActions } from "Vuex";  
export default {
    name: "parent",
    data() {
        return {
            money: 100,
            back: 0
        }
    },
     computed: {
         ...mapState({
             count: state=> state.count
         }),
         ...mapGetters ([
           'getCount'  
        ]),
    },
    methods: {
        ...mapActions({
            addCount: 'ADD_COUNNT',
            decCount: 'DEC_COUNNT'
        }
          ),
        changeCount (){
            // 两种方式实现 commit 提交
            this.addCount({step: 3});
            // this.addCount(3)
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
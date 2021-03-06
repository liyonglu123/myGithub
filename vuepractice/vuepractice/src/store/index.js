import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import * as actions from './actions'
import cart from './modules/cart.js'
// import product from './modules/product'
import * as getters from './getters'
//  查看日志的 方便进行调试
import createLogger from 'vuex/dist/logger'
const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
//  下面是vuex的状态放进一个文件当中
// const ADD_COUNNT = 'ADD_COUNNT';
// const DEC_COUNNT = 'DEC_COUNNT';

// const state = {
//   count: 1
// };

// const mutations = {
//   [ADD_COUNNT](state,step) {
//     // debugger
//     !step ? (state.count++) : ( state.count+= step);
//   },
//   [DEC_COUNNT](state) {
//     state.count--;
//   }
// };
// const actions = {
//   // [ADD_COUNNT]({commit},step){ 
//     [ADD_COUNNT]({commit},{step}){  
//     // debugger
//     commit('ADD_COUNNT',step);  
// },  
// [DEC_COUNNT]({commit}){  
//   commit('DEC_COUNNT');  
// }, 
// };

// const getters = {  
//   getCount: state => {  
//       return state.count; 
//   },  
// }  
const store = new Vuex.Store({
  state,
  mutations,  
  actions,
  getters,
  modules: {
    cart
    // product
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default store

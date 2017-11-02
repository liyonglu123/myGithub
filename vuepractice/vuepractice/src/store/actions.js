import * as types from './mutations-types'
import axios from 'axios'
// const URL = "https://api.douban.com/v2/book/1220562";
const URL = "https://www.baidu.com/"
export const addCount = function({commit},{step}){
    // debugger
    commit(types.INCREMENT, step);
    // 结合axios 进行异步请求的处理


}
 // 结合axios 进行异步请求的处理
export const sycnList = function({commit}){
    // debugger
    axios.get(URL).then(data =>{
        debugger
        var res = data.data.tags;
        commit(types.SYCNLIST, res); 
    })  
   


}
export const decCount = function({commit},{step}){
    commit(types.DECREMENT, step);
}
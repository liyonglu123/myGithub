import * as types from './mutations-types'
import axios from 'axios'
// const URL = "https://api.douban.com/v2/book/1220562"; 可能是没有对象的key
// const URL = "https://www.baidu.com/"
// 天气的接口
const URL = "https://free-api.heweather.com/v5/now?city=beijing&key=452970d722e14415bd7ac7eb391b0e11"
export const addCount = function({commit},{step}){
    // debugger
    commit(types.INCREMENT, step);
    // 结合axios 进行异步请求的处理


}
 // 结合axios 进行异步请求的处理
export const sycnList = function({commit}){
    // debugger
    axios.get(URL).then(data =>{
        // debugger
        var res = data.data.HeWeather5[0].basic;
        // console.log(res)
        commit(types.SYCNLIST, res); 
    })  
   


}
export const decCount = function({commit},{step}){
    commit(types.DECREMENT, step);
}
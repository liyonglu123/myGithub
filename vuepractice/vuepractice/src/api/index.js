//  axios 请求的封装
import axios from 'axios';
export const getWheather = function(){
    // debugger
    const url = "https://free-api.heweather.com/v5/now?city=beijing&key=452970d722e14415bd7ac7eb391b0e11";
    const data = '';
    return axios.get(url,{}).then((res) => {
        return Promise.resolve(res.data);
    })
}
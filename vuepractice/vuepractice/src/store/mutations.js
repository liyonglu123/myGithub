import * as types from './mutations-types'
const mutations = {
     // 加1
    [types.INCREMENT](state,step) {
        // debugger
         !step ? (state.count++) : (state.count+=3)  
    },
    // 减1
    [types.DECREMENT](state) {
        state.count--
    }
}

export default mutations
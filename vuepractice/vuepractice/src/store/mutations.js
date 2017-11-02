import * as types from './mutations-types'
const mutations = {
     // 加1
     [types.INCREMENT](state) {
         debugger
        state.count++;
    },
    // 减1
    [types.DECREMENT](state) {
        debugger
        state.count--
    }
}

export default mutations
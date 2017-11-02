import * as types from './mutations-types'
export const addCount = function({commit},{step}){
    // debugger
    commit(types.INCREMENT, step);
}
export const decCount = function({commit},{step}){
    commit(types.DECREMENT, step);
}
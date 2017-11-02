//  cart 的模块的使用
const cart = {
    state: {
        name: '笔记本',
        count: 10
    },
    mutations: {
        changeName (state, newName){
            // debugger
            state.name = newName;
        },
        changeCounts(state, newCount){
            state.count = newCount;
        }
     },
     actions: {
        changeName({ state, commit, rootState },{newName}){
            // debugger
            commit('changeName', newName);
        },
        changeCounts({ state, commit, rootState },{newCount}){
            commit('changeCounts', newCount);
        }
     },
     getters: {
         getName: state =>{
             return state.name
         },
         getCounts: state =>{
            return state.count
        }
     }
}
export default cart 
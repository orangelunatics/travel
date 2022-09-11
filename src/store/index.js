import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    // mutations: mutations
    mutations,
    // 键值一样 可省略,
    // getters: {
    //     doubleCity(state) {
    //         return state.city + '' + state.city
    //     }
    // }
})
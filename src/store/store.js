import Vue from 'vue'
import Vuex from 'vuex'

import championshipModule from './modules/championshipModules'
import clubModule from './modules/clubModules'
import newsModule from './modules/newsModules'

Vue.use(Vuex);

export default new Vuex.Store({
   modules: {
       championshipModule,
       clubModule,
       newsModule
   }
})
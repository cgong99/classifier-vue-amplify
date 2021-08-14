import { createApp } from 'vue'
import App from './App.vue'
import VueApexCharts from "vue3-apexcharts"
//import store from './store.js'

const app = createApp(App)

app.use(VueApexCharts)

import {createStore} from 'vuex'

const store = createStore({
    state () {
        return {
          response: null,
          names: ['Pain', 'Exercise_diet', 'Refill', 'Medication', 'Covid', 'Referral','ER/Hospitalization']
        }
      },
  mutations: {
      updateResponse(state, response) {
            state.response = response
      }
  }
})

window.app = app

window.store = store
app.use(store)
app.mount('#app')


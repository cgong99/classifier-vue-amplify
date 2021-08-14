import {createStore} from 'vuex'

const store = createStore({
    state () {
        return {
          response: null
        }
      },
  mutations: {
      updateResponse(state, response) {
            state.response = response
      }
  }

})

export default store
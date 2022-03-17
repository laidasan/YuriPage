import { createStore } from 'vuex'
import { getProxy as getExampleProxy } from '../proxy/remote/example/Example.js'

const exampleProxy = getExampleProxy()
console.log(exampleProxy)

export default createStore({
  state: {
    test: 'samura test message'
  },
  mutations: {
  },
  actions: {
    async getExampleAjax () {
      return await exampleProxy.exampleGetAjax()
    }
  },
  modules: {
    home: {
      namespaced: true,
      state: {
        message: 'home message'
      },
      mutations: {
        updateMessage (state, message) {
          state.message = message
        }
      },
      actions: {
        homeAction ({ commit }, message) {
          commit('updateMessage', message)
        }
      }
    }
  }
})

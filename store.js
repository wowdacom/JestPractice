const Vue = require("vue")
const Vuex = require("vuex")
const uuid = require('uuidv4')

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    items: [],
    done: false
  },
  mutations: {
    reset(state) {
      state.items = []
    },

    record(state, item) {
      state.items.push(item)
    },

    completed(state, item) {
      let index = state.items.indexOf(item)
      state.items[index].done = true
    }
  },

  actions: {
    record({ commit }, text) {
      store.commit('record', { text, done: false, uuid: uuid() })
    }
  }
})

module.exports = store

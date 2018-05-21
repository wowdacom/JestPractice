const store = require('./store');
const Vue = require("vue")
const Vuex = require("vuex")

jest.mock('uuid/v4')
jest.useFakeTimers();

const uuidV4 = require('uuid/v4')


describe('shopping list store', ()=>{

  test('default', ()=>{
    expect(store.state.items).toEqual([])
  })

  describe('mutations', ()=>{
    test('#record adds passed value to items', () => {
      let mockEntry = {text: 'Milk', done: false}
      let state = { items: [] }
   
      store.commit('record', mockEntry)

      expect(store.state.items).toEqual([mockEntry])
    })

    test('#completed updates the `done` attribute', () => {
      let mockEntry = {text: 'Milk', done: true}
      let state = { items: [mockEntry] }

      store.replaceState(state);

      store.commit('completed', mockEntry);

      expect(store.state.items[0].done).toBeTruthy()
    })
  })
})

describe('actions', ()=>{

   beforeAll(()=>{
      store.commit('reset');
   })

   describe('#record', () =>{
     test('#record should prepare an object', () =>{
       uuidV4.mockImplementation(() => 23);

       store.dispatch('record', 'Hello')

       jest.runAllTimers();
       expect(store.state.items[0]).toEqual({text: 'Hello', done: false, uuid: 23})
     })
   })
})

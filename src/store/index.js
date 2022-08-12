import { ssrContextKey } from 'vue'
import { createStore } from 'vuex'

export default createStore({
  state: {
    products: null,
    product: null
  },
  getters: {
  },
  mutations: {
  },
  actions: {
   async products(context){
      fetch('https://vinyl2api.herokuapp.com/products') 
      .then(res => res.json())
      .then(data => context.state.products = data.results)
    },
   async product(context, id){
      fetch('https://vinyl2api.herokuapp.com/products/' + id)
      .then(res => res.json())
      .then(data => context.state.product = data.results[0])
    },

    getProduct: async (context, id) => {
      fetch('https://vinyl2api.herokuapp.com/products/' + id)
      .then(res => res.json())
      .then(data => {
        context.state.product = data.results
        console.log(data)
      })
    },
    
  },
  modules: {
  }
})

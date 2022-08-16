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
  //  async product(context, id){
  //     fetch('https://vinyl2api.herokuapp.com/products/' + id)
  //     .then(res => res.json())
  //     .then(data => context.state.product = data.results[0])
  //   },

    getProduct: async (context, id) => {
      fetch('https://vinyl2api.herokuapp.com/products/' + id)
      .then(res => res.json())
      .then(data => {
        context.state.product = data.results
        console.log(data)
      })
    },

      addProduct: async(context, payload) => {
        const {
          title,
          prodimg,
          quantity,
          price,
          genre,
          description
        } = payload;
        fetch("https://vinyl2api.herokuapp.com/products/", {
          method: "post",
          body: JSON.stringify({
            title: title,
            img: prodimg,
            quantity: quantity,
            price: price,
            genre:genre,
            product_description:description

          }),
          headers: {
            "content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,

          },

        })
        .then((res) => res.json())
        .then((data)=> {
          alert(data.msg);
          context.dispatch("products");
        });
      },

      // updates list
    updateProduct: async (context, product) => {
      // fetch("http://localhost:3000/products/" + product.id, {
      fetch("https://vinyl2api.herokuapp.com/products/" + product.id, {
          method: "PUT",
          body: JSON.stringify(product),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg);
          context.dispatch("products");
        });
    },
    // Deletes Item from db
    deleteProduct: async (context, id) => {
      // fetch("http://localhost:3000/products/" + id, {
      fetch("https://vinyl2api.herokuapp.com/products/" + id, {
          method: "DELETE",
          headers: {
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          context.dispatch("products")
        });

    },

      
    
    
  },
  modules: {
  }
})

<template>
  <div id="allproducts">
    <p>fdsd</p>
  </div>
  <div v-if="vinlys">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-12 col-lg-4 pt-5" v-for="vinly in vinlys" :key="vinly.product_id ">
          <div class="card" style="width: 15rem">
            <img :src="vinly.img" class="card-img-top img-fluid" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ vinly.title }}</h5>
              <p class="card-text">R {{ vinly.price }}</p>
              <router-link :to="{name: 'single', params: {id: vinly.product_id}}">

              <a href="#" class="btn btn-primary">Go somewhere</a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>No vinlys to display</div>
</template>

<script>
import Productscard from "../components/Productscard.vue";

export default {
  components: {
    Productscard,
  },
  mounted() {
    this.$store.dispatch("products");
   
  },
  computed: {
    vinlys() {
      return this.$store.state.products;
    },
  },
};
</script>

<style>
</style>
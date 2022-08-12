<template>
  <!-- <div id="allproducts">
    <p>fdsd</p>
  </div> -->
  <div v-if="vinlys">
    <div class="container">
      <div class="row">
        <div
          class="col-12 col-md-6 col-lg-4 pt-5 center"
          v-for="vinly in vinlys"
          :key="vinly.product_id"
        >
          <div class="card" style="width: 15rem">
            <img :src="vinly.img" class="card-img-top img-fluid" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ vinly.title }}</h5>
              <p class="card-text">R {{ vinly.price }}</p>
              <router-link
                :to="{ name: 'single', params: { id: vinly.product_id } }"
              >
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

<style scoped>
.container {
  padding: 60px 0 0 0;
}
.container .row .center {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (min-width: 767px) and (max-width: 769px) {
  .container {
    padding: 110px 0 0 0px;
  }
}
@media screen and (min-width: 800px) and (max-width: 1027px) {
  .container {
    padding: 170px 0 0 0px;
  }
}
</style>

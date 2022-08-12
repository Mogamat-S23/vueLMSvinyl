<template>
  <div id="singleprod" class="container mt-2 d-flex justify-content-center align-items-center">
    <div class="row" v-if="vinyl">
      <div class="col-md-12">
        <div class="card" style="max-width: 70vw;" id="rowidg">
        <div class="row" >
          <div class="col-md-6 col-12">
              <img :src="vinyl[0].img2" alt="" class="img-fluid" id="img"/>
          </div>
          <div class="col-md-6 col-12">
            <div class="card-body">
              <h1>{{ vinyl[0].title }}</h1>
              <!-- <h5 class="card-title">Card title</h5> -->
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <h2>R{{ vinyl[0].price }}</h2>
            </div>
            <p class="card-text">
              <button type="submit">Add to Cart</button>
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product_id"],
  mounted() {
    this.$store.dispatch("getProduct", this.$route.params.id);
    console.log();
  },
  computed: {
    vinyl() {
      return this.$store.state.product;
    },
  },
};
</script>

<style scoped>
/* #singleprod {
  min-height: 50vh;

} */
#img{
    padding: 10px;
    object-fit: cover;
    border-radius: 30px;
}
#rowidg{
    margin: 9rem 0 0 0;
}
.card-text{
  font-size: 20px;
}
</style>
<template>
  <div id="singleprod" class="container mt-2 d-flex justify-content-center align-items-center">
    <div class="row" v-if="vinyl">
      <div class="col-md-12">
        <div class="card" style="max-width: 70vw;" id="rowidg">
        <div class="row" >
          <div class="col-md-6 col-12">
              <img :src="vinyl[0].img2" alt="" class="img-fluid" id="img"/>
               <img :src="vinyl[0].img3" alt="" class="img-fluid" id="img"/>

          </div>

          <div class="col-md-6 col-12">
            <div class="card-body">
              <h1>{{ vinyl[0].title }}</h1>
              <!-- <h5 class="card-title">Card title</h5> -->
              <p class="card-text">
                {{vinyl[0].product_description}}
              
              </p>
              <h5>
                 Genre:{{vinyl[0].genre}}
              </h5>
              <h5>
                Quantity: {{vinyl[0].quantity}}
              </h5>
              <h2>R{{ vinyl[0].price }}</h2>
            <p class="card-text">
              <button class="button" type="submit"><span>Add to cart</span></button>
            </p>
            </div>
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
    height: 300px;
    width: 450px;
}
#rowidg{
    margin: 9rem 0 0 0;
}
.card-text{
  font-size: 20px;
}

.card-body{
    background-color: #f4c273;
    color: white;
    height: 450px;
    border: 3px solid black;
   
    /* margin-top: 50%; */
}

.card{

background-color: black;

}


.button {
  border-radius: 4px;
  background-color:  white;
  border: none;
  color: black;
  text-align: center;
  font-size: 13px;
  padding: 10px;
  width: 120px;
  transition: all 0.1s;
  cursor: pointer;
  /* margin: 5px; */
  height: 50px;
  /* margin-top: 20%; */
  margin: 2%;
  
}

.button:hover{
  background-color: black;
  color: white;
   transition: 0.2s;
   

}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.1s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}


</style>
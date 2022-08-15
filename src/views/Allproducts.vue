<template>
  <!-- <div id="allproducts">
    <p>fdsd</p>
  </div> -->
  <section id="background">
     <div v-if="vinlys">
    <div class="container">
      <div class="row">
        <div
          class="col-12 col-md-6 col-lg-4 pt-5 center"
          v-for="vinly in vinlys"
          :key="vinly.product_id"
        >
          <div class="card" style="width: 15rem">
          <div class="block">
                        <img :src="vinly.img" class="card-img-top img-fluid" alt="..." />
          </div>

            <div class="card-body">
              <h5 class="card-title">{{ vinly.title }}</h5>
              <p class="card-text">R{{ vinly.price }}.00</p>
              <router-link
                :to="{ name: 'single', params: { id: vinly.product_id } }"
              >
                <button class="button"><span>View</span></button>
                
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   <div v-else>No vinlys to display</div>
  </section>
  
   
 
  
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

#background {
  /* background: url('https://i.postimg.cc/TY36Fqrr/vinyl-101784-960-720.jpg'); */
  /* background-repeat: no-repeat;
  background-size: cover;
  background-position: center; */
  background-color: black;
  /* height: 255vh; */

  
}

.card{
  border: #f4c273;

  
}

.container {
  padding: 60px 0 0 0;
    position: relative;
  /* margin: 0 auto; */
  /* width: 225px !important; */
  width: fit-content;
  background: transparent;
  color: white;
  /* padding: 20px; */
  box-sizing: border-box;
  text-align: center;
  box-shadow: 0 1px 10px rgba(244, 194, 115, 0.9);
  overflow: hidden;
  border-radius:10px ;
  

 
  
  
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



.card-body{
  background-color: #f4c273;
  color: white;
  width: 240px;
  margin-left: -0.2%;
  border-radius: 3%;
  
}


.button {
  border-radius: 4px;
  background-color:  white;
  border: none;
  color: black;
  text-align: center;
  font-size: 13px;
  padding: 10px;
  width: 100px;
  transition: all 0.1s;
  cursor: pointer;
  /* margin: 5px; */
  height: 50px;
  /* margin-top: 20%; */
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

.block {
  border-radius: 50%;
  
}

.block:hover {
  animation-name: spin-the-vinyl;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes spin-the-vinyl {
  0%   { transform:rotate(0deg); }
  100% { transform:rotate(360deg); }
}
</style>

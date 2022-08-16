<template>
  <!-- <div id="allproducts">
    <p>fdsd</p>
  </div> -->
  <section id="background">
     <div v-if="vinlys">
    <div class="container">
      <div class="row height d-flex justify-content-center align-items-center">

              <div class="col-md-6">

                <div class="form">
                  <i class="fa fa-search"></i>
                  <input type="search" v-model="search" class="form-control form-input" placeholder="Search name...">
                 
                </div>
                
              </div>
              
            </div>
            <!-- <div class="col-md-3 mx-auto">
          <select class="form-select" v-model="category">
           
            <option value="All">Filter by Genre</option>
            <option value="Rock">Rock</option>
            <option value="Jazz">Jazz</option>
            <option value="Pop">Pop</option>
            <option value="Hip Hop">Hip-Hop</option>
           
          </select>
        </div> -->
        <div class="col-md-3 pt-1 mx-auto">
          <select class="form-select" id="price" @change="sortPrice">
            <option value="All">Sort By Price</option>
            <option value="asc">Lowest To Highest</option>
            <option value="desc">Highest to Lowest</option>
          </select>
        </div>


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

  data() {
    return {
      search:"",
      category: "All",
      asc: true
    };
  },

  methods: {
    sortPrice(){
      let up = document.getElementById("price").value
      if(up === "asc") {
        this.$store.state.products.sort((a, b) => {
          return a.price - b.price;
        });
      }
      else {
        this.$$store.state.products.sort((a, b) => {
          return b.price - a.price;
        });
      }
    },
  },
  mounted() {
    this.$store.dispatch("products");
  },
  computed: {
    products(){
      return this.$store.state.products?.filter((product) => {
        let isMatch = true;
        if(!product.name.toLowerCase().includes(this.search)){
          isMatch = false;
        }
        if (this.category !== 'All' && this.category !== product.category){
          isMatch = false;
        }
        return isMatch
      })
    },
    vinlys() {
      return this.$store.state.products;
    },
  },
};
</script>

<style scoped>
body{

    background: #d1d5db;
}

.form{

    position: relative;
    margin-top: 20px;
}

.form .fa-search{

    position: absolute;
    top:20px;
    left: 20px;
    color: #9ca3af;

}

.form span{

        position: absolute;
    right: 17px;
    top: 13px;
    padding: 2px;
    border-left: 1px solid #d1d5db;

}

.left-pan{
    padding-left: 7px;
}

.left-pan i{
   
   padding-left: 10px;
}

.form-input{

    height: 55px;
    text-indent: 33px;
    border-radius: 10px;
}

.form-input:focus{

    box-shadow: none;
    border:none;
}

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
  /* margin-left: -0.1%; */
  border-radius: 5%;
  
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

<template>
  <div class="container-fluid"></div>
  <div id="back1">
    <nav>
      <div>
        <h2><i class="bi bi-vinyl-fill"></i>{Admin}</h2>
      </div>
    </nav>
    <!-- <button onclick="" id="btnSubmit1">+ Add</button> -->
    <!-- <button onclick="" id="btnSubmit1"><a href="./index.html"></a>  Client Page </button> -->
    <button id="btnSubmit2"><a id="cl" href="./">Client Page</a></button>
  </div>

  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>title</th>
          <th>Genre</th>
          <th>Description</th>
          <th>Image</th>
          <th>price</th>
          <th>quantity</th>
         
          
          <th scoped="col">
            <!-- <a class="btn" data-bs-toggle="modal"  data-bs-target="#addnew">
             </a> -->
            <button id="btnSubmit1" class="btn" data-bs-toggle="modal"  data-bs-target="#addnew">
             + Add</button>
          </th>
          
         
          
        </tr>
      </thead>
      <tbody v-if="products">
            <tr v-for="product in products" :key="product.id">
              <td>{{ product.product_id }}</td>
              <td>{{ product.title }}</td>
            <td>{{ product.genre }}</td>
            <td>{{ product.product_description }}</td>
            <td><img :src="product.img" alt="" /></td>
            <td>R{{ product.price }}.00</td>
            <td>{{ product.quantity }}</td>
            <!-- update -->
              <!-- <td> 
                <a type="button" class="btn" 
                     data-bs-togal="modal"
                     :data-bs-target="'#update' + product.id">
                  </a>Edit</td> -->

          <td>
            <th scoped="col"> <button id="btnSubmit1" class="btn" data-bs-toggle="modal"  :data-bs-target="'#update'+ product.product_id">
             Edit</button></th>
             </td>
         
          <th>
             <td scoped='col'> 
            <button type="btn" class="btn" id="btnSubmit1"
          @click="$store.dispatch('deleteProduct', product_id)"
                    >Delete
                  </button>
             </td>


             </th>
             

           
           <updateModal :product="product"/>  
          </tr> 
      </tbody>
        <div v-else>No data</div>
    </table>
  </div>

  <createModal />
  
</template>


<script>
import createModal from "@/components/createModel.vue";
import updateModal from "@/components/updateModal.vue"
export default {
  components: {createModal, updateModal},
  mounted() {
    this.$store.dispatch("products");
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
}
</script>
    
<style>
*{
  margin: 0;
  padding: 0;
  /* overflow-y: hidden; */
}

/* body{
    overflow-x: hidden;
} */
table,
tr,
th,
td {
  border: 1px solid black;
  text-align: center;
  
}
table {
  text-align: center;
  margin-top: 2%;
}

#btnSubmit1 {
  background-color: black;
  color: white;
  border: 2px solid black !important;
  width: 120px;
  height: 40px;
  /* margin-top: -15%; */
  border-radius: 10%;
  /* margin-right: 1%; */
  /* margin-bottom: 1%; */
}

#btnSubmit1:hover {
  background-color: #f4c273 !important;
  color: white;
  border: 2px solid white !important;
}
/* .btn {
  background-color: black;
  color: white;
  border: 2px solid black !important;
  width: 120px;
  height: 40px;
  margin-top: -15%;
  border-radius: 10%; */
  /* margin-right: 1%;
  margin-bottom: 1%; */


/* .btn:hover {
  background-color: #f4c273 !important;
  color: white;
  border: 2px solid white !important;
} */

#btnSubmit2 {
  background-color: white;
  color: white;
  border: 2px solid black !important;
  width: 120px;
  height: 40px;
  margin-top: -15%;
  border-radius: 10%;
  /* margin-right: 40%; */
}

#btnSubmit2:hover {
  background-color: #f4c273 !important;
  color: white;
  border: 2px solid white !important;
}

a {
  color: white;
}

#cl {
  color: black;
}

a:hover {
  color: white;
}

#back1 {
  /* background-image: url("https://i.postimg.cc/RhZ8CXLv/Jqi-PCGwoz8r-Rpz-Bf-Mr8jip-Kz-Wwpabnthc0-L.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 30vh;
    border: 2px solid blue; */
  background: linear-gradient(rgba(0, 0, 0, 0.5), black),
    url("https://i.postimg.cc/RhZ8CXLv/Jqi-PCGwoz8r-Rpz-Bf-Mr8jip-Kz-Wwpabnthc0-L.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 30vh;
  padding-right: 3%;
}

h2 {
  font-size: 50px;
  color: white;
  align-items: center;
  align-content: center;
  /* margin-left: 40%; */
  /* margin-top: -10%; */
  padding-top: 5%;
}

/* #btnSubmit1 {
  background-color: white;
  color: black;
  border: 2px solid blue;
  width: 120px; */
  /* height: 40px;  */
  /* border-radius: 10%; */
  /* margin-top: -10%;
  margin-left: 80%;
}

#btnSubmit1:hover {
  background-color: royalblue;
  color: white;
} */
</style>
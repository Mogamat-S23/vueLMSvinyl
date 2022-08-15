<template>
  <div
    class="modal fade"
    id="addnew"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-12 mx-auto">
             <!-- name -->
              <div class="mb-3">
                <label for="addName" class="form-label">Product Name:</label>
                <input
                  class="form-control"
                  type="text"
                  v-model="title"
                  name="addtitle"
                  id="addtitle"
                  placeholder="Enter title Name:"
                  required
                />
              </div>
            <!-- image -->
              <div class="mb-3">
                <label for="addImage" class="form-label">Product Image</label>
                <input
                  class="form-control"
                  type="text"
                  name="addImage"
                  id="addImage"
                  v-model="prodimg"
                  placeholder="Add image url"
                />
              </div>
             <!-- quantity -->
              <div class="mb-3">
                <label for="addQuantity" class="form-label">Quantity</label>
                <input
                  class="form-control"
                  type="number"
                  name="addQuantity"
                  id="addQuantity"
                  v-model="quantity"
                  placeholder="Quantity"
                />
              </div>
              <!-- price -->
              <div class="mb-3">
                <label for="addPrice" class="form-label">Price</label>
                <input
                  class="form-control"
                  type="number"
                  name="addPrice"
                  id="addPrice"
                  v-model="price"
                  placeholder="Add Price"
                />
              </div>
              <div class="mb-3">
                <label for="addPrice" class="form-label">Genre</label>
                <input
                  class="form-control"
                  type="text"
                  name="addgenre"
                  id="addgenre"
                  v-model="genre"
                  placeholder="genre "
                />
              </div>
              <div class="mb-3">
                <label for="adddescription" class="form-label">Description</label>
                <input
                  class="form-control"
                  type="text"
                  name="adddescription"
                  id="addescription"
                  v-model="description"
                  placeholder="description"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="add"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>
export default {
  data() {
    return {
     
      prodimg: "https://i.postimg.cc/cJrnTLRQ/logo.png",
      quantity: 1,
      price: "",
      title: "",
      genre:"",
      description: ""
    };
  },
  methods: {
    add() {
      return this.$store.dispatch("addProduct", {
        title: this.title,
        prodimg: this.prodimg,
        quantity: this.quantity,
        price: this.price,
        genre: this.genre,
        description:this.description,
        
      });
    },
  },
};

</script>




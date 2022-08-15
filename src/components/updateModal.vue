<template>
  <div :id="'update'+product.product_id" class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Update Product</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
           <div class="modal-body">
          <div class="row">
            <div class="col-md-12 mx-auto">
             <!-- name -->
              <div class="mb-3">
                <label for="addName" class="form-label">Product Name:</label>
                <input
                  class="form-control"
                  type="text"
                  v-model="product.title"
                  name="addName"
                  id="addName"
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
                  id="addType"
                  v-model="product.prodimg"
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
                  v-model="product.quantity"
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
                  v-model="product.price"
                  placeholder="Add Price"
                />
              </div>
              <div class="mb-3">
                <label for="addPrice" class="form-label">Genre</label>
                <input
                  class="form-control"
                  type="text"
                  name="addPrice"
                  id="addPrice"
                  v-model="product.genre"
                  placeholder="genre Price"
                />
              </div>
              <div class="mb-3">
                <label for="addPrice" class="form-label">Description</label>
                <input
                  class="form-control"
                  type="text"
                  name="addPrice"
                  id="addPrice"
                  v-model="product.description"
                  placeholder="description"
                />
              </div>
            </div>
          </div>
        </div>``
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="update">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"],
  methods: {
    update() {
      return this.$store.dispatch("updateProduct", this.product)
    }
  }
}
</script>
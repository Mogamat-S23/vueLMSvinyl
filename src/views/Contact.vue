<template>
  <div id="background">
    <div class="container">
    
        <h2>
          Contact Us
        </h2>
        
        <div class="row">
          <div class="col-md-6">
          <form class=" w-75 form-wrapper" action="https://formspree.io/f/xknykjpb" method="post" target="_blank"> 
        <div class="row  pb-5">
          <div class="col-md-6">
            <input type="text" class="form-control" name="name" placeholder="First name" aria-label="First name">
          </div>
          <div class="col-md-6">
            <input type="text" class="form-control" name="surname" placeholder="Last name" aria-label="Last name">
          </div>
        </div>
        <div class="row  pb-5">
          <div class="col-md-6 w-100">
            <input type="text" class="form-control" name="email" placeholder="Email" aria-label="Email">
          </div>
          
        </div>
        <div class="row  pb-5">
          <div class="col">
            <div class="form-floating ">
              <textarea class="form-control"  name="message" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
              <label class="text-dark" for="floatingTextarea2">Comments</label>
            </div>
          </div>
        </div>
        <!-- submit button -->
        <!-- i am changing -->
        <div class="row my-2">
            <label class="col-md-6 sm-col-12 col-form-label-lg label-to-right"></label>
            <div class="col-8">
                <input type="submit" value="Submit"
                class="btn btn-outline-dark w-50" >
            </div>
           </div>
        
      </form>
      </div>
      <div id="info" class="col-md-6">
        
                <ul>
                    <li>
                        Call: +27(0)83 765 0954
                    </li>
                    <li>
                        Email: LMSvinyles@gmail.com
                    </li>
                    <li>
                        Address:
                    </li>
                    <li>
                        shop76, Somwhere place
                    </li>
                    <li>
                        98 Nowhere Avenue,
                    </li>
                    <li>Cape Town</li>
                </ul>
      </div>
        </div>
      
      
      
      </div>

  </div>
    
    
 
      
  
</template>

<script>
export default {

}
</script>

<style scoped>
 
 ul li {
  list-style: none;
 }

 form{
  text-align: center;
  align-content: center;
  margin-top: 20%;
 }

 
 input[type="submit"]{
  margin-top: -15%;
  background-color: #f4c273;
 }

 #background{
  background-color: black;
  color: white;
  height: 100vh;
 }

 h2{
  background-color: #f4c273;
  height: 60px;
  padding: 1%;
 }

 #info{
  margin-top: 10%;
 }
</style>
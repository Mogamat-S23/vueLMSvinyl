<template>
  <div id="background">
    <div class="container">
    <div id="heading">
      <h2>
          Contact Us
        </h2>
    </div>
        
        
          <div class="row d-flex flex-row justify-content-center">
          <div class="col-md-6 col-xl-6 col-sm-12 col-xm-12">
          <form class="w-75-xl w-100-md   form-wrapper" action="https://formspree.io/f/xknykjpb" method="post" target="_blank"> 
            <input type="text" class="form-control my-2" name="name" placeholder="First name" aria-label="First name">
            <input type="text" class="form-control my-2" name="surname" placeholder="Last name" aria-label="Last name">
            <input type="text" class="form-control my-2" name="email" placeholder="Email" aria-label="Email">
          
            <div class="form-floating ">
              <textarea class="form-control"  name="message" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
              <label class="text-dark" for="floatingTextarea2">Your message</label>
            </div>
      </form>
            <div class="mt-5 submitbtn">
            <label class="label-to-right"></label>
                <input type="submit" value="Submit"
                class="btn btn-outline-dark w-50" >

            </div>
          </div>
        <!-- submit button -->
        <!-- i am changing -->
        

      <div id="info" class="col-md-6 col-xl-6 col-sm-12 col-xm-12">
                <ul>
                    <li>
                       <span>Call:</span>  +27(0)83 765 0954
                    </li>
                    <li>
                      <span>Email:</span>   LMSvinyles@gmail.com
                    </li>
                    <li>
                       <span> Address:</span> 
                    </li>
                    <li>
                        shop76, Somwhere place
                    </li>
                    <li>
                        98 Nowhere Avenue,
                    </li>
                    <li>Cape Town</li>
                    <div class="vinyl">
                  <img id="vimg"  src="https://i.postimg.cc/59r1YJcL/1logo.png" alt="logo" >
                </div>
                </ul>
                
                
      </div>
      
        </div>
    </div>
  </div>
      
      
      
    
    
 
      
  
</template>

<script>
export default {};
</script>

<style scoped>
#heading {
  padding-top: 5%;
}
ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
}
ul li {
  list-style: none;
}

form {
  text-align: center;
  align-content: center;
  margin-top: 20%;
}

input[type="submit"] {
  margin-top: -15%;
  background-color: #f4c273;
  margin-right: 50%;
}

#background {
  background-color: black;
  color: white;
  height: 190vh;
}

h2 {
  background-color: #f4c273;
  height: 60px;
  padding: 1%;
  margin-top: 70px;
}

#info {
  margin-top: 10%;
}

span {
  font-weight: bolder;
  font-size: 20px;
}
.submitbtn{
  margin-top: 4rem !important;
}

.vinyl{  
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
  margin-top: 20%;
}
.vinyl img{
  /**Size**/
  width: 200px;
  height: 200px;
  /**Animation**/
  animation: play 10s 0s infinite;
  transform: rotate(0deg);
  animation-timing-function: linear;
  /**Vinyl**/
  box-shadow: 0 0 0 5px #333, 0 0 0 6px #1a1a1a, 0 0 0 7px #333, 0 0 0 8px #1a1a1a, 0 0 0 9px #333, 0 0 0 10px #1a1a1a, 0 0 0 11px #333, 0 0 0 12px #1a1a1a, 0 0 0 13px #333, 0 0 0 14px #1a1a1a, 0 0 0 15px #333, 0 0 0 16px #1a1a1a, 0 0 0 17px #333, 0 0 0 18px #1a1a1a, 0 0 0 19px #333, 0 0 0 20px #1a1a1a, 0 0 0 21px #333, 0 0 0 22px #1a1a1a, 0 0 0 23px #333, 0 0 0 24px #262626, 0 0 0 25px #333, 0 0 0 26px #1a1a1a, 0 0 0 27px #333, 0 0 0 28px #1a1a1a, 0 0 0 45px #333, 0 0 0 50px #1a1a1a;
  border-radius: 50%;
}

@keyframes play {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

#vimg{
  border-radius: 50%;
}
</style>
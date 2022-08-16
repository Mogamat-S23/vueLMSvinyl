<template>
  <div id="background">
    
   <div class="container">
    <div class="row">
      <div class="col-md-12">
         <h3 id="heading">
        Explore our wide range of vinyls
      </h3 >
      <h3>Enjoy the music experience.</h3>
      </div>
      
     
    </div>
    <!-- <div class="row">
      <div class="col-md-12">
        <button class="button"><a href="../views/About.vue"></a><span>About</span></button>
      </div>
    </div> -->
   </div>
  </div>
  <div id="back">
     <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2 id="heading1">
         <strong>  Welcome to LMS vinyls</strong>
        </h2>
        </div>
        

      </div>
      <div class="row">
        
          <p>We sell good qaulity records at affordable prices </p>

<p>
  Our shop in Nowhere avenue has a wide range of genres and our online store caters to all music lovers. As a buyer you will have loads of super cool new records to choose from and as a seller we offer competitive prices for all types of music.
  </p> 

<p> We also import new records and will do our best to source something for you if we don’t have it in stock.</p>

<p>Hope you enjoy your time in our virtual shop and feel free to drop in at our store in Nowhere avenue for a genuine record store experience. </p>

<p>  LMS is here for you. Tell all your friends!</p>

<p> </p>
        
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
    name: "Home"
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,100&display=swap');

  #background{
    background: url('https://i.postimg.cc/kXXFsGw6/ae372456f0c98abe31aa8e55372995b9.gif');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    
  }
  .container{
   
    height: 108vh;
    
  }

  #back{
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
  width: 100px;
  transition: all 0.1s;
  cursor: pointer;
  /* margin: 5px; */
  height: 50px;
  /* margin-top: 20%; */
}
#heading{
  /* margin-top: 20%; */
  font-family: 'Montserrat', sans-serif;
  font-weight:2000;
  color: black;
  padding-top: 275px;
}

h2{
  margin-bottom: 4%;
  margin-top: 15%;
  /* font-family: 'Montserrat', sans-serif; */
  font-size: 2rem;
  font-weight: bolder;
   color: #f4c273

}

p{
   font-family: 'Montserrat', sans-serif;
   color: white;
   font-family: bolder;
   font-size: 17px;
}
h3{
  color: black;
  font-weight: bolder;
  font-family: 'Montserrat', sans-serif;  

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
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}
  
</style>
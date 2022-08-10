<template>
  <div id="background">
    
   <div class="container">
    <div class="row">
      <div class="col-md-12">
         <h3 id="heading">
        Explore our wide range of vinyls
      </h3 >
      <h3>With Just a click of a button</h3>
      </div>
      
     
    </div>
    <div class="row">
      <div class="col-md-12">
        <button class="button"><span>Shop</span></button>
      </div>
    </div>
   </div>
  </div>
  <div id="back">
     <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h3 id="heading">
          Welcome to LMS vinyls
        </h3>
        </div>
        

      </div>
      <div class="row">
        
          <p>We buy and sell records and 7 inch singles. </p>

<p>
  Our shop in Linden carries a wide range of genres and our online store caters to all music lovers. As a buyer you will have loads of super cool pre owned and new records to choose from and as a seller we offer competitive prices for all types of music.
  </p> 

<p> We also import new records and will do our best to source something for you if we don’t have it in stock.</p>

<p>Hope you enjoy your time in our virtual shop and feel free to drop in at our store in Linden for a genuine record store experience. </p>

<p> Selling your records or buying lps for your collection. Record Mad is here for you.Tell all your friends!</p>

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
    background: url('https://i.postimg.cc/hjxrS3Gd/splatter-vinyl.gif');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    
  }
  .container{
   
    height: 100vh;
    
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
  margin-top: 20%;
  font-family: 'Montserrat', sans-serif;
  font-weight:bolder;
  color: white;
}
h3{
  color: white;
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
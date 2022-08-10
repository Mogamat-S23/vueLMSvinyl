<template>
    <div id="Footer">

        <div class="container">

            <div class="row">
                
                    <div class="col-md-4">
                        <h4>LMS</h4>
                        <i class="bi bi-instagram"></i>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-twitter"></i>
                    </div>
                     <div class="col-md-4">
                    <h4>pages</h4>
                <ul id="contact">
                    <li>
                        <a href="">Home</a>
                        
                    </li>
                    <li>
                        <a href="">Vinyls</a>

                    </li>
                    <li>
                        <a href="">About</a>

                    </li>
                    <li>
                        <a href="">Contatc</a>

                    </li>
                    <li>
                        <a href="">About</a>

                    </li>
                </ul>
            </div>

             <div class="col-md-4">
                <h4>Contact</h4>
                <ul>
                    <li id="call">
                        Call: <span> +27(0)83 765 0954</span>
                    </li>
                    <li id="call">
                        Email: <span>LMSvinyles@gmail.com</span> 
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
           

           
            <div id="hr" class="row">
                <div class="col-12">
                    <hr>
                    <strong>&copy;2022 LMS. All Right Reserved |</strong> Designed by Liam Engel & Mogamat Saleem Ariefdien
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
    ul li{
        list-style: none;
        
        
    }

     ul li a{
        color: #f4c273;
        
        
    }

    
     ul li a:hover{
        color: white;
        
        
    }

    span{
        color:#f4c273;
    }

    #contact {
        margin-right: 10%;
        
    }
    
  #Footer{
    background: url('https://i.postimg.cc/hPtvLQqJ/70667a.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    
    
    
  }

  .container{
    padding-top: 10%;
    
  }

  #hr{
    padding-top: 5%;
  }


</style>
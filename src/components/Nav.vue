<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/allproducts">Vinyles</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact Us</router-link> |
    <router-link to="/register">Register</router-link>  |
    <router-link to="/login">Login</router-link>
  </nav> -->
  <div class="container"></div>
  <header class="header top-0">
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn"
      ><span class="navicon"></span
    ></label>
    <ul class="menu">
      <li>
        <img
          id="logo"
          src="https://i.postimg.cc/7L5yddPz/logo4.png"
          alt="logo"
          style="width: 100px; height: 50x"
        />
      </li>
      <li class="nav-item">
        <router-link to="/"
          ><i class="bi bi-house-door-fill"></i> HOME</router-link
        >
      </li>
      <li class="nav-item">
        <router-link to="/allproducts"
          ><i class="bi bi-vinyl-fill"></i> VINYLS</router-link
        >
      </li>

      <li class="nav-item">
        <router-link to="/about"
          ><i class="bi bi-file-earmark-richtext-fill"></i> ABOUT</router-link
        >
      </li>
      <li class="nav-item">
        <router-link to="/contact"
          ><i class="bi bi-telephone-forward-fill"></i> CONTACT</router-link
        >
      </li>
      <li class="nav-item">
        <router-link to="/register"
          ><i class="bi bi-file-text-fill"></i>REGISTER</router-link
        >
      </li>
      <li class="nav-item">
        <router-link to="/login"
          ><i class="bi bi-door-open-fill"></i> LOGIN</router-link
        >
      </li> 
    </ul>
  </header>
</template>

<script>
export default {};
</script>

<style>
#logo {
  margin-right: 35px;
  width: 25px;
  height: 50px;
}

a {
  color: white;
}
/* header */
.header {
  background-color: black;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 3;
}
.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: black;
}
.header li a {
  display: block;
  padding: 20px 20px;
  /* border-right: 1px solid white; */
  text-decoration: none;
}
.header li a:hover,
.header .menu-btn:hover {
  background-color: #f4c273;
  color: white;
}
.header .logo {
  display: block;
  float: left;
  font-size: 2em;
  padding: 10px 20px;
  text-decoration: none;
}
/* menu */
.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height 0.2s ease-out;
}
/* menu icon */
.header .menu-icon {
  cursor: pointer;
  display: inline-block;
  /* float: right; */
  padding: 28px 20px;
  position: relative;
  user-select: none;
}
.header .menu-icon .navicon {
  background: #333;
  display: block;
  height: 2px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 18px;
}
.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: #333;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 100%;
}
.header .menu-icon .navicon:before {
  top: 5px;
}
.header .menu-icon .navicon:after {
  top: -5px;
}
/* menu btn */
.header .menu-btn {
  display: none;
}
.header .menu-btn:checked ~ .menu {
  max-height: 440px;
}
.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}
.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}
.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}
/* 48em = 768px */
@media (min-width: 48em) {
  .header li {
    float: left;
    margin: 0 0 0 0;
  }
  .header li a {
    padding: 20px 30px;
  }
  .header .menu {
    clear: none;
    /* float: right; */
    max-height: none;
  }
  .header .menu-icon {
    display: none;
  }
}
@media screen and (min-width: 1000px) and (max-width: 1027px) {
 #logo{
  margin: 0 810px 0 5px;
 }
}
</style>

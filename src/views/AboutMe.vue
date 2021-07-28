<template>
  <div class="aboutme">
    <h1>About Me</h1>
    <div class="mylinks">
      <ul>
      <li>Feel free to connect to me on my <font-awesome-icon :icon="['fab', 'linkedin']"/> <a href="https://www.linkedin.com/in/rwnewsom/" target="_blank" rel="noopener">LinkedIn Profile</a></li>
      <li>You can view the code for this site in my Portfolio-Vue repo at <font-awesome-icon :icon="['fab', 'github']"/> <a href="https://github.com/rwnewsom" target="_blank" rel="noopener">Github</a></li>      
    </ul>
      </div>

    <div class="hobbies">
          <h1>Some of My Hobbies</h1>
    
      <h2><font-awesome-icon icon="running" /> I enjoy running in the <a href="https://www.armytenmiler.com/" target="_blank" rel="noopener">Army Ten-miler.</a></h2>
    

    <h2> I try to read when time is available. Here are a few books from my library*: </h2>
    <h4>*that have cover art available on a public API</h4>
    <my-books />

    </div>
   
  </div>
</template>

<script>
 import MyBooks from '../components/MyBooks.vue'

 export default {
    name: 'AboutMe',

    components: {MyBooks},

}

</script>

<style>
a {
  font-weight: bold;
  color: #4A4E69;
 }

 @media only screen and (max-width: 600px) {


 }

 .mylinks {
  padding-top: 10px;
}

.mylinks ul li{
    padding: 10px 0px;
    list-style: none;
    font-weight: bold;
}
</style>

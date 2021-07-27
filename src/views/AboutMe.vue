<template>
  <div class="aboutme">
    <h1>About Me</h1>

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

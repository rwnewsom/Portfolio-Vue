<template>
<div class="aboutvue">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to my Vue.js App"/>
</div>
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'
export default {
    name: 'AboutVue',
    components: {
    HelloWorld
  }

}
</script>

<style>
img {
  padding-top: 3rem;
}

</style>
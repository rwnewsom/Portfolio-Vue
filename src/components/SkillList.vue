<template>
  <div class="skill-container">
    <div class="skill"><h2><font-awesome-icon :icon="['fab', 'html5']"/> HTML </h2></div>
    <div class="skill"><h2><font-awesome-icon :icon="['fab', 'css3']"/> CSS </h2></div>
    <div class="skill"><h2><font-awesome-icon :icon="['fab', 'vuejs']"/> Vue.js </h2></div>
    <div class="skill"><h2><font-awesome-icon :icon="['fab', 'bootstrap']"/> Bootstrap </h2></div>
    <div class="skill"><h2><font-awesome-icon :icon="['fa', 'microchip']"/> C# </h2></div>
    <div class="skill"><h2><font-awesome-icon :icon="['fab', 'js']"/> JavaScript </h2></div>
    <div class="skill"><h2><font-awesome-icon :icon="['fa', 'database']"/> SQL </h2></div>
    <div class="skill"><h2><font-awesome-icon :icon="['fa', 'vial']"/> Unit Testing (MS Test) </h2></div>
    <div class="skill"><h2><font-awesome-icon :icon="['fab', 'github']"/> Github </h2></div>
  </div>
</template>

<script>
export default {
    name: 'skill-list',
}
</script>

<style lang="scss">
.skill-container {
    display:flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    
}

.skill {
    border: 2px solid black;
    border-radius: 10px;
    width: 250px;
    height: 80px;
    margin: 20px;
    background-color: #F2E9E4;
    color: #4A4E69;
}

</style>
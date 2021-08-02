<template>
<div >
  <div class="welcome">
    <h2 >Welcome to my web site.  Please note it remains under construction!</h2>
    <h4>A partial list of technologies I work with is below, I look forward to improving my expertise in these domains as well as learning new ones. </h4>
  </div>
 <skill-list />
</div>  
</template>

<script>
import SkillList from '../components/SkillList.vue';

  export default {
    components: {SkillList}
  }
</script>

<style lang="scss">
img {
  padding-top: 3rem;
}

@media only screen and (max-width: 600px){
  .welcome{
    font-size: 100%;
    margin: 10px 5px;
    padding-left: 5px;
    padding-right: 5px;
  }
}

</style>

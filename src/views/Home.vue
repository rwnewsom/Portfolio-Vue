<template>
<div>
  <h2>Welcome to my web site.  Please note it remains under construction!</h2>
<h4>A partial list of technologies I work with is below, I look forward to improving my expertise in these domains as well as learning new one. </h4>
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
</style>

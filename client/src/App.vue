<template>
  <BaseHeader/>
    <main>
      <router-view :key="$route.name"/>
    </main>
  <BaseFooter/>
</template>


<script>
  import BaseHeader from "./components/base/BaseHeader.vue"
  import BaseFooter from "./components/base/BaseFooter.vue"

  export default {
    components: {
      BaseHeader,
      BaseFooter
    }
  }
</script>

<style>
  main {
      max-width: 100rem;
      margin: 3rem auto;
      margin-top: 5rem;
  }

  #app {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
  }
</style>

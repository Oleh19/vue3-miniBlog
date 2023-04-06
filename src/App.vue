<template>
  <NavBar></NavBar>
  <div class="app">
    <RouterView></RouterView>
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue';

  export default {
    components: { NavBar },
  };
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  .app {
    padding: 20px;
  }
</style>

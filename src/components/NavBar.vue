<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <RouterLink to="/posts">
        <MyButton>Posts </MyButton>
      </RouterLink>
      <RouterLink to="/about">
        <MyButton style="margin-left: 15px">About</MyButton>
      </RouterLink>
      <RouterLink to="/store">
        <MyButton style="margin-left: 15px">With store</MyButton>
      </RouterLink>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .navbar {
    height: 50px;
    background: rgb(214, 214, 214);
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
  }

  .navbar__btns {
    margin-left: auto;
  }
</style>

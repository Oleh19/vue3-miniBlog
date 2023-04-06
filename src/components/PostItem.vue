<template>
  <div class="post">
    <div>
      Title: <strong>{{ post.title }}</strong>
    </div>
    <div>
      Description: <strong>{{ post.body }}</strong>
    </div>

    <div class="post__btns">
      <MyButton @click="$router.push(`./posts/${post.id}`)">Open</MyButton>
      <MyButton @click="$emit('remove', post)">Delete</MyButton>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PostItem',
    props: {
      post: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style scoped>
  .post {
    padding: 15px;
    border: 3px solid teal;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .post__btns {
    display: flex;
  }
</style>

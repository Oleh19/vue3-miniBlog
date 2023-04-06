<template>
  <div v-if="posts.length > 0">
    <h3>Users list</h3>
    <TransitionGroup name="user-list">
      <PostItem
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
      />
    </TransitionGroup>
  </div>

  <h2
    v-else
    style="color: red"
  >
    Empty list
  </h2>
</template>

<script>
  export default {
    props: {
      posts: {
        type: Array,
        required: true,
      },
    },
  };
</script>

<style scoped>
  .user-list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .user-list-enter-active,
  .user-list-leave-active {
    transition: all 0.4s ease;
  }
  .user-list-enter-from,
  .user-list-leave-to {
    opacity: 0;
    transform: translateX(130px);
  }
  .user-list-move {
    transition: transform 0.4s ease;
  }
</style>

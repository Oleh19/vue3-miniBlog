<template>
  <div>
    <h1>Posts</h1>

    <MyInput
      v-model="searchQuery"
      placeholder="Search..."
      v-focus
    />

    <div class="app__btns">
      <MyButton @click="showDialog"> Add User</MyButton>
      <MySelect
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>

    <MyDialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />
    </MyDialog>

    <PostList
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />

    <div v-else>Loading...</div>
    <div
      v-intersection="loadMorePosts"
      class="observer"
    ></div>
  </div>
</template>

<script>
  import PostForm from '../components/PostForm.vue';
  import PostList from '../components/PostList.vue';
  import MyDialog from '../components/UI/MyDialog.vue';
  import axios from 'axios';

  export default {
    components: {
      PostForm,
      PostList,
      MyDialog,
    },

    data() {
      return {
        posts: [],
        dialogVisible: false,
        isPostsLoading: false,
        selectedSort: '',
        searchQuery: '',
        page: 1,
        totalPages: 0,
        limit: 10,
        sortOptions: [
          { value: 'title', name: 'Name' },
          { value: 'body', name: 'Description' },
        ],
      };
    },

    methods: {
      createPost(post) {
        this.posts.push(post);
        this.dialogVisible = false;
      },
      removePost(post) {
        this.posts = this.posts.filter((p) => p.id !== post.id);
      },
      showDialog() {
        this.dialogVisible = true;
      },
      async fetchPosts() {
        try {
          this.isPostsLoading = true;
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          });
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
          this.posts = response.data;
          this.isPostsLoading = false;
        } catch (e) {
          alert('error');
        }
      },
      async loadMorePosts() {
        try {
          this.page += 1;
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          });
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
          this.posts = [...this.posts, ...response.data];
          this.isPostsLoading = false;
        } catch (e) {
          alert('error');
        }
      },
    },

    mounted() {
      this.fetchPosts();
    },

    computed: {
      sortedPosts() {
        return [...this.posts].sort((post1, post2) => {
          return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]);
        });
      },
      sortedAndSearchedPosts() {
        return this.sortedPosts.filter((post) =>
          post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
  };
</script>

<style>
  .app__btns {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
  }

  .page__wrapper {
    display: flex;
    margin-top: 15px;
  }

  .page {
    border: 1px solid black;
    padding: 10px;
  }

  .current-page {
    border: 2px solid teal;
  }

  .observer {
    height: 30px;
    background: green;
  }
</style>

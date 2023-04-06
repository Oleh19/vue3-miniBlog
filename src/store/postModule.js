export const postModule = {
  state: () => ({
    posts: [],
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
  }),

  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((post1, post2) => {
        return post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]);
      });
    },

    sortedAndSearchedPosts(state, getters) {
      return getters.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },

  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },

    setLoading(state, bool) {
      state.isPostsLoading = bool;
    },

    setPage(state, page) {
      state.page = page;
    },

    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },

    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },

    setSelectedQuery(state, selectedQuery) {
      state.selectedQuery = selectedQuery;
    },
  },

  actions: {
    async fetchPosts({ state, commit }) {
      try {
        commit(setLoading, true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: state.page,
            _limit: state.limit,
          },
        });
        commit('totalPages', Math.ceil(response.headers['x-total-count'] / state.limit));
        commit('setProps', response.data);
        this.posts = response.data;
        commit('setLoading', false);
      } catch (e) {
        alert('error');
      }
    },
    async loadMorePosts() {
      try {
        commit('setPage', state.page + 1);
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: state.page,
            _limit: state.limit,
          },
        });
        commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / this.limit));
        commit('setPosts', [...state.posts, ...response.data]);
        commit('isPostsLoading', false);
      } catch (e) {
        alert('error');
      }
    },
  },

  namespace: true,
};

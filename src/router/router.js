import Main from '../pages/Main.vue';
import PostPage from '../pages/PostPage.vue';
import About from '../pages/About.vue';
import PostIdPage from '../pages/PostIdPage.vue';
import PostPageWithStore from '../pages/PostPageWithStore.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', component: Main }],
});

router.addRoute({ path: '/posts', component: PostPage });
router.addRoute({ path: '/about', component: About });
router.addRoute({ path: '/posts/:id', component: PostIdPage });
router.addRoute({ path: '/store', component: PostPageWithStore });

export default router;

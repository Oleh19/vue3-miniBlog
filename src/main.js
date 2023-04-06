import { createApp } from 'vue';
import App from './App.vue';
import components from './components/UI/index';
import router from './router/router';
import direcrives from './direcrives';
import store from './store';

const app = createApp(App);
components.forEach((component) => {
  app.component(component.name, component);
});

direcrives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.use(router).use(store).mount('#app');

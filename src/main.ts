import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './mock/index.ts'
import './mock/shop.ts'
import {router} from './router/router.ts'
import VueLazyLoad from 'vue3-lazy'
import {lazyPlugin} from '../plugin/lazyPlugin'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(VueLazyLoad,{
  loading: import("../assets/holder.webp")
});
app.use(lazyPlugin);
app.use(pinia);


app.mount('#app')

import Vue from 'vue'
import router from './router';
import App from './components/App';

const app = new Vue({
  router,
  components:{App},
  template:'<app></app>'
}).$mount('#app')

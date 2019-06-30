import Vue from 'vue';
import App from './components/App';
import router from './router';

const app = new Vue({
  data(){
    return{
      id:null
    }
  },
  router,
  components:{App},
  template:'<app></app>'
}).$mount('#app')

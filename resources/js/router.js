import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
//import Poll from "./components/Poll.vue";
export default new Router({
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/login",
            component: Login
        },
        {
            path: "/register",
            component: Register
        },
        /*
        {
            path: "/poll",
            component: Poll
        }
        */
    ]
});

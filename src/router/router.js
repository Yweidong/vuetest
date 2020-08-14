import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "@/components/Home";
import Test from "@/components/Test";



Vue.use(VueRouter);

const routes = [
    {
        path: "/home",
        component: Home


    },
    {
        path: "/test",
        component: Test
    }

]
var router = new VueRouter({
    routes
});
export default router
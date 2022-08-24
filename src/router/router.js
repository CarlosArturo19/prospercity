

import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import  ProductsPage from '../pages/ProductsPage';



const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/products', component: ProductsPage },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});


export default router;
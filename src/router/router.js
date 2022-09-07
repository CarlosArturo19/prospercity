

import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ProductsPage from '../pages/ProductsPage';
import ContactPage from '../pages/ContactPage';
import LoginPage from '../auth/pages/LoginPage';



const routes = [
    { path: '/', name: 'home', component: HomePage },
    { path: '/about', name: 'about', component: AboutPage },
    { path: '/products', name: 'products', component: ProductsPage },
    { path: '/contact', name: 'contact', component: ContactPage },
    { path: '/login', name: 'login', component: LoginPage },

];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});


export default router;
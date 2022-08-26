

import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ProductsPage from '../pages/ProductsPage';
import ContactPage from '../pages/ContactPage';



const routes = [
    { path: '/', name: 'home', component: HomePage },
    { path: '/about', name: 'about', component: AboutPage },
    { path: '/products', name: 'products', component: ProductsPage },
    { path: '/contact', name: 'contact', component: ContactPage },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});


export default router;
import Vue from "vue";
import Router from "vue-router"

// import Main from "../views/Main"
// import Features from "../views/Features"
// import Service from "../views/Service"
// import Contacts from "../views/Contacts"
// import Specifications from "../views/Specifications"

const routerOptions = [
    {
        path: '/',
        component: 'Main',
        meta: { title: 'Главная' },
    },
    {
        path: '/features',
        component: 'Features',
        meta: { title: 'Преимущества' },
    },
    {
        path: '/service',
        component: 'Service',
        meta: { title: 'Услуги' },
    },
    {
        path: '/contacts',
        component: 'Contacts',
        meta: { title: 'Контакты' },
    },
    {
        path: '/specifications',
        component: 'Specifications',
        meta: { title: 'Каталог' },
    }
]

const routes = routerOptions.map(route => {
    return {
        ...route,
        component: () => import(`../views/${route.component}.vue`)
    }
})

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes,
});
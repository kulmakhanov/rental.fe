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
    },
    {
        path: '/about',
        component: 'About'
    },
    {
        path: '/features',
        component: 'Features',
    },
    {
        path: '/service',
        component: 'Service',
    },
    {
        path: '/contacts',
        component: 'Contacts',
    },
    {
        path: '/specifications',
        component: 'Specifications',
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
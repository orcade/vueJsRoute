// api https://jsonplaceholder.typicode.com/albums
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/albums?userId=1


// 1. Define route components.
// These can be imported from other files

// files is loaded from js/components

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
    {path: '/', name: 'home', component: Users},
    {path: '/users', name: 'users', component: Users},
    {path: '/user/:id', name: 'user', component: User},
    {path: '/contact', name: 'contact', component: Contact},
    {path: '/meteo', name: 'meteo', component: Meteo}
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes // short for `routes: routes`
});

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
    router
}).$mount('#app');

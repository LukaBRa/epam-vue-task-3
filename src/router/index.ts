import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import MoviePage from "../views/MoviePage.vue";

const routes = [
    {
        path: "/",
        name: "homepage",
        component: HomePage
    },
    {
        path: "/movie/:id",
        name: "moviepage",
        component: MoviePage
    },
    {
        path: "/not-found",
        component: HomePage
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/"
    }
];

export default routes;
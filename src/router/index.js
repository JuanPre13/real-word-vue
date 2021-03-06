import { createRouter, createWebHistory } from "vue-router";
import EventList from "@/views/EventList.vue";
import EventDetails from "@/components/EventDetails.vue";
import About from "../views/About.vue";


const routes = [{
        path: "/",
        name: "EventList",
        props: true,
        component: EventList,
    },
    {
        path: "/event/:id",
        name: "EventDetails",
        props: true,
        component: EventDetails,
    },
    {
        path: "/about",
        name: "About",
        props: true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: About
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
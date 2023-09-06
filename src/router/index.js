import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home.vue";
import ref from "@/views/tutorial/ref/index.vue";
import bind from "@/views/tutorial/bind/index.vue";
import eventListener from "@/views/tutorial/eventListener/index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/ref",
      name: "ref",
      component: ref,
    },
    {
      path: "/bind",
      name: "bind",
      component: bind,
    },
    {
      path: "/eventListener",
      name: "eventListener",
      component: eventListener,
    },
  ],
});

export default router;

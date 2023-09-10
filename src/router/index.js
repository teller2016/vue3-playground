import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home.vue";
import ref from "@/views/tutorial/ref/index.vue";
import bind from "@/views/tutorial/bind/index.vue";
import eventListener from "@/views/tutorial/eventListener/index.vue";
import render from "@/views/tutorial/render/index.vue";
import lifeCycle from "@/views/tutorial/lifeCycle/index.vue";
import watch from "@/views/tutorial/watch/index.vue";
import component from "@/views/tutorial/component/index.vue";

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
    {
      path: "/render",
      name: "render",
      component: render,
    },
    {
      path: "/lifeCycle",
      name: "lifeCycle",
      component: lifeCycle,
    },
    {
      path: "/watch",
      name: "watch",
      component: watch,
    },
    {
      path: "/component",
      name: "component",
      component: component,
    },
  ],
});

export default router;

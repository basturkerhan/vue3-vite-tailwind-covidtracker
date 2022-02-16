import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "HomePage",
    route: "/",
    component: () => import("../views/Home.vue"),
  },
  {
    name: "CountryDetailsPage",
    route: "/details/:country/:symbol",
    component: () => import("../views/CountryDetails.vue"),
  },
  {
    name: "VaccinesPage",
    route: "/vaccines",
    component: () => import("../views/Vaccines.vue"),
  },
  {
    name: "VaccineDetailsPage",
    route: "/details/vaccine/:trimedName/:category",
    component: () => import("../views/VaccineDetails.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;

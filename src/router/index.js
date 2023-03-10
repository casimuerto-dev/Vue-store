import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path: "/products",
			name: "products",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/Products.vue"),
		},
		{
			path: "/details/:name",
			component: () => import("../views/ProductDetails.vue"),
		},
		{ path: "/cart", component: () => import("../views/Cart.vue") },
	],
});

export default router;

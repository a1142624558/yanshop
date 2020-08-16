import Home from "@/views/home/home.vue";
import Cart from "@/views/home/cart.vue";
export default [{
    path: "/",
    name: "/",
    component: Home,
  },
  {
    path: "/cart",
    name: "/cart",
    component: Cart,
    meta: {
      title: "购物车"
    }
  },
]

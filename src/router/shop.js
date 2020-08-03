import Home from "@/views/home/home.vue";
import Category from "@/views/home/category.vue";
import Index from "@/views/home/index.vue";
import Cart from "@/views/home/cart.vue";
import Me from "@/views/home/me.vue";

import goodsCate from "@/views/goods/cate.vue";
import goodsSearch from "@/views/goods/search.vue";

export default[{
    path:"/",
    name:"/",
    component:Home,
    redirect:"/index",
    children: [
        {
            path:"/categort",
            name:"/categort",
            component:Category,
            meta:{
                title:"分类"
            }
        },
        {
            path:"/index",
            name:"/index",
            component:Index,
            meta:{
                title:"首页"
            }
        },
        {
            path:"/cart",
            name:"/cart",
            component:Cart,
            meta:{
                title:"购物车"
            }
        },
        {
            path:"/me",
            name:"/me",
            component:Me,
            meta:{
                title:"个人中心"
            }
        },
    ],
    
},
{
    path:"/goods/cate/:cid",
    name:"goods_cate",
    component:goodsCate,
    meta:{
        title:"分类列表"
    }
},
{
    path:"/goods/search",
    name:"goods_search",
    component:goodsSearch,
    meta:{
        title:"商品搜索页面"
    }
},
]
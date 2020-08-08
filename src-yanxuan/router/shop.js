import Home from "@/views/home/home.vue";
import Category from "@/views/home/category.vue";
import Index from "@/views/home/index.vue";
import Cart from "@/views/home/cart.vue";
import Me from "@/views/home/me.vue";

import goodsCate from "@/views/goods/cate.vue";
import goodsSearch from "@/views/goods/search.vue";
import goodsDetail from "@/views/goods/detail.vue";
import Article from "@/views/article/article.vue";
import ArticleDetail from "@/views/article/detail.vue";
import Login from "@/views/login/login";

export default [{
    path: "/",
    name: "/",
    component: Home,
    redirect: "/index",
    children: [{
        path: "/categort",
        name: "/categort",
        component: Category,
        meta: {
          title: "分类"
        }
      },
      {
        path: "/index",
        name: "/index",
        component: Index,
        meta: {
          title: "首页"
        }
      },
      {
        path: "/cart",
        name: "/cart",
        component: Cart,
        meta: {
          title: "购物车"
        }
      },
      {
        path: "/me",
        name: "/me",
        component: Me,
        meta: {
          title: "个人中心"
        }
      },
    ],

  },
  {
    path: "/goods/cate/:cid",
    name: "goods_cate",
    component: goodsCate,
    meta: {
      title: "分类列表"
    }
  },

  {
    path: "/goods/search",
    name: "goods_search",
    component: goodsSearch,
    meta: {
      title: "商品搜索页面"
    }
  },
  {
    path: "/goods/detail/:id",
    name: "goods_detail",
    component: goodsDetail,
    meta: {
      title: "商品详情"
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      title: "用户登录"
    }
  },
  {
    path: "/article",
    name: "article",
    component: Article,
    meta: {
      title: "精选专题"
    }
  },
  {
    path: "/article/detail/:id",
    name: "article_detail",
    component: ArticleDetail,
    meta: {
      title: "专题文章详情"
    }
  },
]

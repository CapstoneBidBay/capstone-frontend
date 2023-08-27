import ENUM from '@/constants/enum.js'
import ManagerAllPage from '@/views/buyer/ManagerAllPage.vue'
import TestComponent from '@/views/TestComponent.vue'
import ComingSoonPage from '@/views/common/ComingSoonPage.vue'
import ProductDetailPage from '@/views/buyer/child-page/ProductDetailPage.vue'
import CreateAccountPage from '@/views/buyer/child-page/CreateAccountPage.vue'
import WishListPage from '@/views/buyer/child-page/WishListPage.vue'
const buyer_router = [
  {
    name: 'all-page-buyer',
    path: '/',
    component: ManagerAllPage,
    children: [
      {
        name: 'landing-page',
        path: '/test-components',
        component: TestComponent,
        meta: {
          requiresAuth: false,
          roles: [ENUM.BUYER.ROLE_ID],
        },
      },
      {
        name: 'wishlist',
        path: '/wishlist',
        component: WishListPage,
        meta: {
          requiresAuth: false,
          roles: [ENUM.BUYER.ROLE_ID],
        },
      },
      {
        name: 'product-detail',
        path: '/product-detail/:id',
        component: ProductDetailPage,
        meta: {
          requiresAuth: false,
          roles: [ENUM.BUYER.ROLE_ID],
        },
      },
      {
        name: 'sign-up',
        path: '/',
        component: CreateAccountPage,
        meta: {
          requiresAuth: false,
        },
      },
    ],
  },
  {
    name: 'not-found',
    path: '/:pathMatch(.*)*',
    component: ComingSoonPage,
    meta: {
      requiresAuth: false,
    },
  },
  {
    name: 'forbidden',
    path: '/forbidden',
    component: ComingSoonPage,
    meta: {
      requiresAuth: false,
    },
  },
]

export default buyer_router

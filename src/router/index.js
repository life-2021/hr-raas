import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },

  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "首页", icon: "dashboard" },
      },
    ],
  },

  {
    path: "/departments",
    component: Layout,
    children: [
      {
        path: "departments",
        name: "Departments",
        component: () => import("@/views/departments/index"),
        meta: { title: "组织架构", icon: "form" },
      },
    ],
  },
  {
    path: "/employee",
    component: Layout,
    children: [
      {
        path: "employees",
        name: "Employees",
        component: () => import("@/views/employees/index"),
        meta: { title: "员工", icon: "form" },
      },
    ],
  },
  {
    path: "/setting",
    component: Layout,
    children: [
      {
        path: "setting",
        name: "Setting",
        component: () => import("@/views/setting/index"),
        meta: { title: "公司设置", icon: "form" },
      },
    ],
  },
  {
    path: "/salarys",
    component: Layout,
    children: [
      {
        path: "salarys",
        name: "Salarys",
        component: () => import("@/views/salarys/index"),
        meta: { title: "工资", icon: "form" },
      },
    ],
  },
  {
    path: "/social",
    component: Layout,
    children: [
      {
        path: "social",
        name: "Social",
        component: () => import("@/views/social/index"),
        meta: { title: "社保", icon: "form" },
      },
    ],
  },
  {
    path: "/attendances",
    component: Layout,
    children: [
      {
        path: "attendances",
        name: "Attendances",
        component: () => import("@/views/attendances/index"),
        meta: { title: "考勤", icon: "form" },
      },
    ],
  },
  {
    path: "/approvals",
    component: Layout,
    children: [
      {
        path: "approvals",
        name: "Approvals",
        component: () => import("@/views/approvals/index"),
        meta: { title: "审批", icon: "form" },
      },
    ],
  },
  {
    path: "/permission",
    component: Layout,
    children: [
      {
        path: "permission",
        name: "Permission",
        component: () => import("@/views/permission/index"),
        meta: { title: "权限管理", icon: "form" },
      },
    ],
  },
];

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

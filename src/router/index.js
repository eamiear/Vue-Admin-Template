import Vue from 'vue'
import VueRouter from 'vue-router'
// import router from './map/' // 路由映射

// const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(VueRouter)

import Layout from '@/views/layout/Layout'

/**
 * icon : the icon show in the sidebar
 * hidden : if `hidden:true` will not show in the sidebar
 * redirect : if `redirect:noredirect` will no redirct in the levelbar
 * noDropdown : if `noDropdown:true` will has no submenu
 * meta : { role: ['admin'] }  will control the page role
 **/
export const constantRouterMap = [
  { path: '/login', component: require('@/views/login/index'), hidden: true },
  { path: '/authredirect', component: require('@/views/login/authredirect'), hidden: true },
  { path: '/404', component: require('@/views/errorPage/404'), hidden: true },
  { path: '/401', component: require('@/views/errorPage/401'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: '首页',
    hidden: true,
    children: [{ path: 'dashboard', component: require('@/views/dashboard/index') }]
  }
]

export const asyncRouterMap = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    name: '权限测试',
    icon: 'quanxian',
    meta: { role: ['admin'] },
    noDropdown: true,
    children: [{path: 'index', component: require('@/views/permission/index'), name: '权限测试页', meta: { role: ['admin'] }}]
  },
  {
    path: '/icon',
    component: Layout,
    icon: 'icons',
    noDropdown: true,
    children: [{ path: 'index', component: require('@/views/svg-icons/index'), name: 'icons' }]
  },
  {
    path: '/components',
    component: Layout,
    redirect: '/components/index',
    name: '组件',
    icon: 'zujian',
    children: [
      { path: 'index', component: require('@/views/components/index'), name: '介绍 ' },
      { path: 'tinymce', component: require('@/views/components/tinymce'), name: '富文本编辑器' },
      { path: 'markdown', component: require('@/views/components/markdown'), name: 'Markdown' },
      { path: 'jsoneditor', component: require('@/views/components/jsonEditor'), name: 'JSON编辑器' },
      { path: 'dndlist', component: require('@/views/components/dndList'), name: '列表拖拽' },
      { path: 'splitpane', component: require('@/views/components/splitpane'), name: 'SplitPane' },
      { path: 'avatarupload', component: require('@/views/components/avatarUpload'), name: '头像上传' },
      { path: 'dropzone', component: require('@/views/components/dropzone'), name: 'Dropzone' },
      { path: 'sticky', component: require('@/views/components/sticky'), name: 'Sticky' },
      { path: 'countto', component: require('@/views/components/countTo'), name: 'CountTo' }
    ]
  },
  {
    path: '/charts',
    component: Layout,
    redirect: '/charts/index',
    name: '图表',
    icon: 'tubiao',
    children: [
      { path: 'index', component: require('@/views/charts/index'), name: '介绍' },
      { path: 'keyboard', component: require('@/views/charts/keyboard'), name: '键盘图表' },
      { path: 'keyboard2', component: require('@/views/charts/keyboard2'), name: '键盘图表2' },
      { path: 'line', component: require('@/views/charts/line'), name: '折线图' },
      { path: 'mixchart', component: require('@/views/charts/mixChart'), name: '混合图表' }
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: 'noredirect',
    name: '综合实例',
    icon: 'zonghe',
    children: [
      {
        path: '/example/table',
        component: require('@/views/example/table/index'),
        redirect: '/example/table/table',
        name: 'Table',
        icon: 'table',
        children: [
          { path: 'dynamictable', component: require('@/views/example/table/dynamictable/index'), name: '动态table' },
          { path: 'dragtable', component: require('@/views/example/table/dragTable'), name: '拖拽table' },
          { path: 'inline_edit_table', component: require('@/views/example/table/inlineEditTable'), name: 'table内编辑' },
          { path: 'table', component: require('@/views/example/table/table'), name: '综合table' }
        ]
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new VueRouter({
  // mode: 'hash|history|abstract',
  // base: '/',
  // linkActiveClass: 'router-link-active',
  // scrollBehavior: fn
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})


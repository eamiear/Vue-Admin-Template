import Vue from 'vue'
import VueRouter from 'vue-router'
// import router from './map/' // 路由映射

// const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(VueRouter)

import Layout from '@/views/layout/Layout'

/**
 * vue-router: params of vue-router
 * path: path of the route
 * name: name of the router
 * redirect : if `redirect:noredirect` will no redirect in the levelbar
 * meta : { role: ['admin'] }  will control the page role
 * icon : the icon show in the sidebar using font-awesome
 * image: the image show in the sidebar using a picture for the icon, image has higher priority than icon
 * isHidden : if `hidden:true` will not show in the sidebar
 * labels: [{classes: 'bg-red', text: '5'}] will show on the right side of the sidebar
 * isSingle : `isSingle:true` means the item has not submenu
 **/
export const constantRouterMap = [
  { path: '/login', component: require('@/views/login/index'), isHidden: true },
  { path: '/404', component: require('@/views/errorPage/404'), isHidden: true },
  { path: '/401', component: require('@/views/errorPage/401'), isHidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: '首页',
    isHidden: true,
    children: [{ path: 'dashboard', component: require('@/views/dashboard/index') }]
  }
]

export const asyncRouterMap = [
  /*
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    name: '权限测试',
    icon: 'circle-o',
    meta: { role: ['admin'] },
    isSingle: true,
    children: [{path: 'index', component: require('@/views/permission/index'), name: '权限测试页', meta: { role: ['admin'] }}]
  },*/
/*  {
    path: '/icon',
    component: Layout,
    icon: 'circle-o',
    image: 'http://placehold.it/14x14',
    isSingle: true,
    labels: [{classes: 'bg-red', text: '15'}],
    children: [{ path: 'index', component: require('@/views/svg-icons/index'), name: 'icons' }]
  },*/
/*
  {
    path: '/components',
    component: Layout,
    redirect: '/components/index',
    name: '组件',
    icon: 'list-alt',
    children: [
      {path: 'index', component: require('@/views/components/index'), name: '介绍 ', icon: 'circle-o'},
      {path: 'tinymce', component: require('@/views/components/tinymce'), name: '富文本编辑器', icon: 'circle-o'},
      {path: 'markdown', component: require('@/views/components/markdown'), name: 'Markdown', icon: 'circle-o'},
      {path: 'jsoneditor', component: require('@/views/components/jsonEditor'), name: 'JSON编辑器', icon: 'circle-o'},
      {path: 'dndlist', component: require('@/views/components/dndList'), name: '列表拖拽', icon: 'circle-o'},
      { path: 'splitpane', component: require('@/views/components/splitpane'), name: 'SplitPane', icon: 'circle-o' },
      { path: 'avatarupload', component: require('@/views/components/avatarUpload'), name: '头像上传', icon: 'circle-o' },
      { path: 'dropzone', component: require('@/views/components/dropzone'), name: 'Dropzone', icon: 'circle-o' },
      { path: 'sticky', component: require('@/views/components/sticky'), name: 'Sticky', icon: 'circle-o' },
      { path: 'countto', component: require('@/views/components/countTo'), name: 'CountTo', icon: 'circle-o' }
    ]
  },*/
/*
  {
    path: '/charts',
    component: Layout,
    redirect: '/charts/index',
    name: '图表',
    icon: 'pie-chart',
    children: [
      { path: 'index', component: require('@/views/charts/index'), name: '介绍', icon: 'circle-o' },
      { path: 'keyboard', component: require('@/views/charts/keyboard'), name: '键盘图表', icon: 'circle-o' },
      { path: 'keyboard2', component: require('@/views/charts/keyboard2'), name: '键盘图表2', icon: 'circle-o' },
      { path: 'line', component: require('@/views/charts/line'), name: '折线图', icon: 'line-chart' },
      { path: 'mixchart', component: require('@/views/charts/mixChart'), name: '混合图表', icon: 'circle-o' }
    ]
  },*/
/*
  {
    path: '/example',
    component: Layout,
    redirect: 'noredirect',
    name: '综合实例',
    icon: 'gear',
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
  },*/

  { path: '*', redirect: '/404', isHidden: true }
]

export default new VueRouter({
  // mode: 'hash|history|abstract',
  // base: '/',
  // linkActiveClass: 'router-link-active',
  // scrollBehavior: fn
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})


<template>
    <el-menu class="sidebar-menu" mode="vertical" theme="dark" unique-opened :default-active="$route.path" :collapse="isCollapse">
      <sidebar-item :routes='permission_routers'></sidebar-item>
    </el-menu>
</template>
<style rel="stylesheet/scss" lang="scss">
    .el-menu.sidebar-menu{
        border-radius: 0;
    }
</style>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'permission_routers',
      'sidebar'
    ]),
    isCollapse () {
      return !this.sidebar.opened
    }
  }
}
</script>

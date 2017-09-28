<template>
    <section class="sidebar">
        <!--<div class="user-panel">
            <div class="pull-left image">
                <img src="http://placehold.it/160x160" class="img-circle" alt="User Image">
            </div>
            <div class="pull-left info">
                <p>User Name</p>
                <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
            </div>
        </div>
        &lt;!&ndash; search form &ndash;&gt;
        <form action="#" method="get" class="sidebar-form">
            <div class="input-group">
                <input type="text" name="q" class="form-control" placeholder="Search...">
                <span class="input-group-btn">
                  <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i></button>
                </span>
            </div>
        </form>-->
        <!-- /.search form -->
        <el-menu class="sidebar-menu" mode="vertical" unique-opened :default-active="$route.path" :collapse="isCollapse">
            <sidebar-item :routes='permission_routers'></sidebar-item>
        </el-menu>
    </section>

</template>
<style rel="stylesheet/scss" lang="scss">
    .el-menu.sidebar-menu{
        border-radius: 0;
    }
</style>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import { slimScroll } from '@/utils/plug'
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
  },
  props: {
    slimscroll: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    /* eslint-disable no-undef */
    if (this.slimscroll) {
      const $window = $(window)
      const $mainHeader = $('.main-header')
      slimScroll('.sidebar-menu', {
        height: ($window.outerHeight() - $mainHeader.outerHeight()) + 'px'
      })
      window.onresize = () => {
        return (() => {
          slimScroll('.sidebar-menu', {
            height: ($window.outerHeight() - $mainHeader.outerHeight()) + 'px'
          })
        })()
      }
    } else {
      setScrollbar()
      window.onresize = () => {
        return (() => {
          setScrollbar()
        })()
      }
    }
    function setScrollbar () {
      const body = document.body
      const mainHeader = document.querySelector('.main-header')
      let sidebarMenu = document.querySelector('.sidebar-menu')
      const neg = body.clientHeight - mainHeader.clientHeight
      sidebarMenu.style.height = neg + 'px'
      sidebarMenu.style.overflowY = 'auto'
    }
  }
}
</script>

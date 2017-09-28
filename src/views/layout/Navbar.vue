<template>
	<el-menu class="navbar" mode="horizontal">
		<breadcrumb></breadcrumb>
		<tabs-view></tabs-view>
	</el-menu>
</template>

<script>
import Breadcrumb from './Breadcrumb'
import TabsView from './TabsView'

export default {
  components: {
    Breadcrumb,
    TabsView
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .navbar {
    height: 50px;
    line-height: 50px;
    border-radius: 0 !important;
  }
</style>

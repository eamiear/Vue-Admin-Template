<template>
	<div class="app-wrapper wrapper" :class="{hideSidebar:!sidebar.opened}">
		<headers></headers>
		<sidebar class="sidebar-container"></sidebar>
		<section class="main-container">
			<navbar></navbar>
			<app-main></app-main>
		</section>
	</div>
	<!-- Site wrapper -->
	<!--<div class="wrapper">

		<headers></headers>

		&lt;!&ndash; Left side column. contains the sidebar &ndash;&gt;
		<aside class="main-sidebar">
			<section class="sidebar">
				<sidebar class="sidebar-container"></sidebar>
			</section>
			&lt;!&ndash; /.sidebar &ndash;&gt;
		</aside>
		&lt;!&ndash; Content Wrapper. Contains page content &ndash;&gt;
		<div class="content-wrapper" data-spy="scroll" data-offset-top="60" data-offset-bottom="200" data-target="#myScrollspy">
			&lt;!&ndash; Content Header (Page header) &ndash;&gt;
			<section class="content-header">
				&lt;!&ndash;<navbar></navbar>&ndash;&gt;
			</section>
			&lt;!&ndash; Main content &ndash;&gt;
			<section class="content">
				<navbar></navbar>
				<app-main></app-main>
			</section>
			&lt;!&ndash; /.content &ndash;&gt;
		</div>
		&lt;!&ndash; /.content-wrapper &ndash;&gt;

	</div>-->
	<!-- ./wrapper -->
</template>

<script>
import { Headers, Navbar, Sidebar, AppMain } from '@/views/layout'

export default {
  name: 'layout',
  components: {
    Headers,
    Navbar,
    Sidebar,
    AppMain
  },
  computed: {
    sidebar () {
      return this.$store.state.app.sidebar
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	@import "src/assets/styles/mixin.scss";
	.app-wrapper {
		@include clearfix;
		position: relative;
		height: 100%;
		width: 100%;
		&.hideSidebar {
			.sidebar-container{
				width:36px;
				overflow: inherit;
			}
			.main-container {
				margin-left: 36px;
			}
		}
		.sidebar-container,.main-container{
			margin-top:50px;
		}
		.sidebar-container {
			transition: width 0.28s ease-out;
			width: 230px;
			height: 100%;
			position: fixed;
			top: 0;
			bottom: 0;
			left: 0;
			z-index: 1001;
			overflow-y: auto;
 			&::-webkit-scrollbar {display:none}
		}
		.main-container {
			min-height: 100%;
			transition: margin-left 0.28s ease-out;
			margin-left: 230px;
		}
	}
</style>

<template>
	<section class="wrapper" :class="!sidebar.opened ? 'sidebar-collapse' : 'sidebar-open'">
		<headers></headers>
		<aside class="main-sidebar">
			<sidebar></sidebar>
		</aside>
		<section class="main-content content-wrapper">
			<navbar></navbar>
			<app-main></app-main>
		</section>
	</section>
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

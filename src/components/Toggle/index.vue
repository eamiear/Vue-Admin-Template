<template>
    <a href="#" @click="toggleClick" class="sidebar-toggle" :class="{'is-active':isActive}" role="button">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
    </a>
</template>

<script>
  export default {
    name: 'hamburger',
    props: {
      isActive: {
        type: Boolean,
        default: false
      },
      toggleClick: {
        type: Function,
        default: null
      }
    }
  }
</script>


<template>
  <img class="image" :src="source"/>
</template>

<style rel="stylesheet/scss" lang="scss">
  .image{
    width: 14px;
    height: 14px;
  }
</style>

<script>
  export default {
    name: 'image',
    props: {
      source: String,
      require: true
    }
  }
</script>

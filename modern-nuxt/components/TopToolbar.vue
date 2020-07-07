<template lang="html">
  <span class="toolbar">
    <nav class="main-nav">
      <nuxt-link to="/">archon</nuxt-link>
    </nav>
  </span>
</template>

<script>


export default {
  components: {
  }
}
</script>

<style lang="css">

  .toolbar {
    width: 100%;
    height: 64px;
    display: inline-block;
    position: fixed;
    top: 0;
    background: #1f2229;
  }

  .main-nav {
    display: inline-block;
    height: 100%;
    line-height: 32px;
    margin-left: 8px;
  }

  .main-nav a {
    font-size: 16px;
    vertical-align: center;
    height:64px;
    line-height: 64px;
    margin-right:16px;
  }

</style>

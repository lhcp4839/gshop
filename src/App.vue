<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-if="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>

import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus">
  @import url('http://at.alicdn.com/t/font_518606_6676bmcalnrhehfr.css')
  @import './static/css/reset.css'
  
</style>
/* 70 */
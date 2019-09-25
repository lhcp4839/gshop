<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-if="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    mounted () {
      this.getAddress()
      this.getUserInfo()
    },

    methods: {
      ...mapActions(['getAddress', 'getUserInfo'])
    },
    components: {
      FooterGuide
    }
  }
</script>

<style lang="stylus">
  @import url('http://at.alicdn.com/t/font_518606_6676bmcalnrhehfr.css')
  @import './static/css/reset.css'
  
</style>
/* 100 */
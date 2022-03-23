<template>
  <div class="home-page">
    <div class="blank" @click="goPage"></div>
  </div>
</template>

<style lang="stylus" scoped>
  .home-page {
    width: 100%;
    height: 100%;
    background-image: url("../images/bg.jpg")
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    position: relative;
    .blank {
      width: 100%;
      height: 20%;
      position: absolute;
      bottom: 0;
    }
  }
</style>

<script>
import bgImage from '@/images/bg.jpg'

export default {
  data () {
    return {
      bgImage
    }
  },
  methods: {
    goPage () {
      window.location.href="http://baidu.com";
    }
  }
}
</script>

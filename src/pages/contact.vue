<template>
  <div class="contact-page">
    <nav-head actived="contact"></nav-head>
    <div class="contact-info">
      <img class="map" :src="MapIcon" alt="icon">
      <div class="address">
        <p style="font-size: 24px;">天长市安江物流有限公司</p>
        <p>电话：180-1989-3888</p>
        <p>微信：wxid_2r2t0bap4qb922</p>
        <p>旧地址：安徽省天长市天康大道富华集团内</p>
        <p>新地址：安徽省天长市扬海驾校内</p>
      </div>
    </div>
    <div class="contact-info">
      <img class="icon" :src="Company_2" alt="icon">
      <img class="icon" :src="Company_1" alt="icon">
    </div>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import BottomBar from '@/components/BottomBar.vue'
import NavHead from '@/components/NavHead.vue'
import MapIcon from '@/images/map.jpg'
import Company_1 from '@/images/company_1.jpg'
import Company_2 from '@/images/company_2.jpg'
export default {
  components: {
    NavHead,
    BottomBar
  },
  data () {
    return {
      MapIcon,
      Company_1,
      Company_2
    }
  }
}
</script>

<style lang="stylus" scoped>
  .contact-page {
    width 100%
    height: 100%;
    position: relative;
    padding-top: 80px;
    .contact-info {
      display flex;
      justify-content: space-around;
      padding: 20px;
      max-width: 1400px;
      margin: 0 auto;
      .map {
        width: 530px;
        height: 400px;
      }
      .address {
        width: 530px;
        font-size 20px;
      }
      .icon {
        width: 530px;
        height: 530px;
      }
    }
  }
</style>
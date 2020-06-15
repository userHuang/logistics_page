<template>
  <div class="nav-component">
    <div class="logo">天长--广州 深圳专线</div>
    <div class="nav-list">
      <div class="item" :class="actived == item.type ? 'active' : ''" v-for="item in navDatas" :key="item.name" @click="linkPage(item)">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    actived: {
      type: String,
      default: 'home'
    }
  },
  data () {
    return {
      navDatas: [{
        name: '首页',
        type: 'home',
        link: '/'
      }, {
        name: '联系我们',
        type: 'contact',
        link: '/contact'
      }]
    }
  },
  methods: {
    linkPage (item) {
      this.$router.push({
        path: item.link
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .nav-component {
    width: 100%;
    position: fixed;
    display: block;
    left: 0;
    top: 0;
    z-index: 998;
    min-height: 5rem;
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    box-shadow: 0 2px 16px 0 rgba(0,0,0,0.14);

    .logo {
      width: 11.9375rem;
      display: flex;
      align-items: center;
      margin-left: 3%;
      height: 5rem;
      position: relative;
      color: #333;
      font-size: 20px;
    }

    .nav-list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      margin-right: 3%;
      height: 5rem;

      .item {
        width: 8.125rem;
        text-align: center;
        display: inline-block;
        position: relative;
        line-height: 5rem;
        color: #333;
        font-size: 24px;
        font-weight: 500;
        cursor: pointer;
        font-family: PingFangSC-Regular;

        &:hover{
          color: #FB841E;
        }

        &.active {
          color: #FB841E;
        }
      }
    }
  }
</style>
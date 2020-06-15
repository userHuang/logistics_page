<template>
  <div class="home-page">
    <nav-head actived="home"></nav-head>
    <div class="banner">
      <img :src="BannerIcon" alt="icon">
      <div class="contact">
        <div class="name">天长市安江物流有限公司</div>
        <div class="tel">找货车，联系电话：180-1989-3888</div>
      </div>
    </div>
    <div class="introduce">
      <div class="tab">集团简介</div>
      <div class="content">
        <p class="name">市内两家交通运输合作伙伴共同持股诚信务实的物流集团公司</p>
        <p>
          <span class="red">天长市润天物流有限公司</span>，位于天长市西城区经八路物流园内，成立于2015年，目前公司年营业额平均在<span class="red">1000万</span>以上，缴纳税款80万左右，公司拥有车辆数十辆，运输范围遍布全国。
        </p>
        <p>
          <span class="red">天长市安江物流有限公司</span>，位于天长市港口路，成立于2016年，目前公司年营业额在<span class="red">500万</span>左右，公司拥有车辆10余辆，运输范围遍布全国。
        </p>
      </div>

      <div class="tab">服务宗旨</div>
      <p class="target">以客户为中心、 以奋斗者为本、价值引领、诚信经营、持续发展</p>
      <p style="margin-top:20px;">三家公司长期为上海宝钢、安徽英发、天长康弘石油管材、秦轩科技大中型企业等提供运输、物流、产品材料配送等一体化服务。</p>

      <div class="tab">业务范围</div>
      <p class="name">优质服务运输团队，构建全国运输网络</p>
      <div class="team-content">
        <div class="item">
          <p class="tips">最大服务量</p>
          <div class="nums">
            <span class="num">500家</span>
            <span class="unit">企业</span>
          </div>
        </div>
        <div class="item">
          <p class="tips">辐射全国</p>
          <div class="nums">
            <span class="num">3903万</span>
            <span class="unit">公里</span>
          </div>
        </div>
        <div class="item">
          <p class="tips">最大运输网</p>
          <div class="nums">
            <span class="num">148个</span>
            <span class="unit">城市</span>
          </div>
        </div>
      </div>

      <div class="tab">团队介绍</div>
      <p class="name">为客户提供高品质的优质服务</p>
      <div class="team-introduce">
        <div class="item">
          <p class="title">周到服务市内同行业领先</p>
          <p>1.全国超过20个专向定点线路</p>
          <p>2.成为市内运输领域服务最优的公司</p>
        </div>
        <div class="item">
          <p class="title">强大的一体化总包能力</p>
          <p>最佳路线咨询规划+仓储服务+物流平台+交付实施+产品保障维护</p>
        </div>
        <div class="item">
          <p class="title">雄厚的运输能力</p>
          <p>1.在80多个城市建立运输合作伙伴关系</p>
          <p>2.年均运输保障投入500万元</p>
        </div>
        <div class="item">
          <p class="title">年轻化优秀服务团队</p>
          <p>100名驾驶员，35岁及以下占比85%</p>
        </div>
      </div>
    </div>
    <bottom-bar></bottom-bar>
  </div>
</template>

<style lang="stylus" scoped>
  .home-page {
    margin: 0 auto;
    .banner {
      width: 100%;
      position relative
      img {
        width: 100%;
        height 700px;
        object-fit: cover;
      }
      .contact {
        position: absolute;
        height: 100px;
        left: 100px;
        top: 115px;
        font-size: 28px;
        font-family: cursive;
        font-weight: bold;

        .tel {
          margin-top 10px;
        }
      }
    }
    .introduce {
      width: 80%;
      margin: 0 auto;
      margin-top: 20px;
      margin-bottom 30px;
      p {
        color: #847d7d;
      }
      .black {
        color #000;
      }
      .title {
        width: 500px;
        font-size: 30px;
        text-align: left;
        text-align: center;
        margin: 0 auto;
      }
      .tab {
        width 200px;
        height 40px;
        line-height 40px;
        font-size 24px;
        background red;
        color #FFF;
        padding-left 20px;
        margin-top 60px;
      }

      .content {
        .red {
          color red;
        }
      }

      .name {
        font-size 24px;
        font-weight: bold;
        color #000;
      }

      .team-content {
        display flex
        justify-content space-between
        align-items center
        padding-left: 30px
        padding-right: 30px
        .item {
          .tips {
            width 100px
            height 40px
            line-height 40px
            font-size 18px
            text-align center
            margin 0
            color #000
          }
          .nums {
            width 100px
            height 100px
            border-radius 100px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #55d4b6;
            color #ffffff;

            .num {
              font-size 18px;
              // color red;
              font-weight: bold;
            }
          }
        }
      }
      .team-introduce {
        display flex
        justify-content space-between
        .item {
          width 220px

          p {
            color: #847d7d;
          }

          .title {
            font-size 20px;
            width: 100%;
            text-align: left;
            color #000;
          }
        }
      }
      .target {
        font-size: 24px;
        color #000;
      }
    }
  }
</style>

<script>
import NavHead from '@/components/NavHead.vue'
import BottomBar from '@/components/BottomBar.vue'
import BannerIcon from '@/images/banner.jpg'

export default {
  components: {
    NavHead,
    BottomBar
  },

  data () {
    return {
      BannerIcon
    }
  }
}
</script>

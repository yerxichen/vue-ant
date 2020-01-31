<template>
  <div class="home">
    <div class="app-top-title">
      <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
      <!--      <van-divider />-->
    </div>
    <div class="app-content">
      <div style="width: 100%;height: 100%;overflow: auto">
        <router-view/>
      </div>
    </div>

    <van-tabbar
      v-model="active"
      active-color="#1296db"
      inactive-color="#707070">
      <van-tabbar-item v-for="(tabs,index) in tabsBottom" v-bind:key="index" :to="tabs.router">
        <span>{{tabs.text}}</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? tabs.activeIcon : tabs.inactiveIcon"
        >
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

  import { Toast } from 'vant'

  export default {
    name: 'home',
    data () {
      return {
        active: 0,
        items: 60,
        tabsBottom: [{
          text: '首页',
          router: '/',
          activeIcon: require('../assets/首页.png'),
          inactiveIcon: require('../assets/un首页.png'),
        }, {
          text: '坐标',
          router: '/listdemo',
          activeIcon: require('../assets/坐标.png'),
          inactiveIcon: require('../assets/un坐标.png'),
        }, {
          text: '我的',
          router: '/htmldemo',
          activeIcon: require('../assets/我的.png'),
          inactiveIcon: require('../assets/un我的.png'),
        }, {
          text: '设置',
          router: '/listdemo',
          activeIcon: require('../assets/设置.png'),
          inactiveIcon: require('../assets/un设置.png'),
        }]
      }
    },
    methods: {
      onClickLeft () {
        Toast('返回')
      },
      onClickRight () {
        Toast('按钮')
      }
    }
  }
</script>
<style scoped>
  .app-top-title {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0px 0px 4px #888888;
  }

  .app-content {
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 50px;
  }

  .van-divider {
    margin: 0px;
  }
</style>

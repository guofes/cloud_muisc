<template>
  <div class="lizi">
    vuex数据测试页面
    <div @click='onEvenuateSubmit'>热门搜索</div>
    <div @click='test_search'>搜索</div>
    <div @click='personalized'>推荐歌单</div>
  </div>
</template>
<script>
// import Httpservice from '@/services/HttpService.js'
export default {
  data() {
    return {
      // http: Httpservice.getAxios
    }
  },
  // created: {
  //   function() {
  //     // `this` 指向 vm 实例
  //     console.log('直接调用')
  //   }
  // },
  methods: {
    onEvenuateSubmit() {
      console.log('热门搜索')
      this.$http.hot().then(res => {
        console.log(res)
      })
    },
    test_search() {
      console.log('搜索')
      const val = { keywords: 'ad' }
      this.$http.search(val).then(res => {
        console.log(res)
      })
    },
    personalized() {
      console.log('推荐歌单')
      this.$http.personalized().then(res => {
        console.log(res)
      })
    },

    beforeRouteEnter(to, from, next) {
      personalized()
      // next(vm => {
      //   // vm.isShowPage = false
      //   vm.test_search()
      // })
    }
  }
}
</script>
<style  lang="scss" scoped>
</style>

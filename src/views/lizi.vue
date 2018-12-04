<template>
  <div class="lizi">
    vuex数据测试页面
    <button @click='onEvenuateSubmit'>提交</button>
    <button @click='test_search'>测试</button>
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
  methods: {
    onEvenuateSubmit() {
      console.log('aaa')
    },
    test_search() {
      console.log('dasd')
      this.$http.search().then(res => {
        console.log(res)
      })
    }

    // beforeRouteEnter(to, from, next) {
    //   next(vm => {
    //     // vm.isShowPage = false
    //     vm.test_search()
    //   })
    // }
  }
}
</script>
<style  lang="scss" scoped>
</style>

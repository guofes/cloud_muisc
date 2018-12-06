<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="banner in banners">
      <img :src="banner.imageUrl" alt=""></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'carousel',
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      banners: {},
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true
      }
    }
  },
  created: function() {
    console.log('dakjdhj')

    this.$http.banner().then(res => {
      this.banners = res.data.banners
      console.log(this.banners)
    })
  }
}
</script>
<style  lang="scss">
.swiper-slide {
  width: 100%;
  height: 130px;
  background-image: linear-gradient(to top, #fff 0%, #fff 40%, #d43c33 40%, #d43c33 100%);
  img {
    border-radius: 4px;
    width: 94%;
    margin: 0 3%;
  }
}
</style>
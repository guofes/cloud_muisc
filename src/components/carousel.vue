<template>
  <swiper :options="swiperOption">
    <swiper-slide>
      <img src="@/image/carousel/num1.jpg" alt=""></swiper-slide>
    <swiper-slide>
      <img src="@/image/carousel/num2.jpg" alt=""></swiper-slide>
    <swiper-slide>
      <img src="@/image/carousel/num3.jpg" alt=""></swiper-slide>
    <swiper-slide>
      <img src="@/image/carousel/num4.jpg" alt=""></swiper-slide>
    <swiper-slide>
      <img src="@/image/carousel/num5.jpg" alt=""></swiper-slide>
    <swiper-slide>
      <img src="@/image/carousel/num6.jpg" alt=""></swiper-slide>
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
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true
      }
    }
  }
}
</script>
<style  lang="scss">
.swiper-slide {
  width: 100%;
  height: 160px;
  background-image: linear-gradient(to top, #fff 0%, #fff 40%, #d43c33 40%, #d43c33 100%);
  img {
    border-radius: 4px;
    width: 94%;
    margin: 0 3%;
  }
}
</style>
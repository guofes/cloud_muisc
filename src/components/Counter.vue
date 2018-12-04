<template>
  <div id="app">
    Count is {{$store.state.count}}//使用
    <button @click="increment">+5</button>
    <button @click="decrement">-3</button>
  </div>
</template>
<script>
// 引入mapActions，很重要
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters([
    //与vuex中的getters关联
  ]),

  methods: mapActions([
    //与vuex中的actions关联
    'increment',
    'decrement'
  ])
}
</script>
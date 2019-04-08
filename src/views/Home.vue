<template>
  <div class="home">
    <img alt="Tea logo" src="../assets/tea1.jpg" height="150px">
    <!-- 无vuex的点餐单 -->
    <!-- <Menu/> -->
    <!-- vuex的点餐单 -->
  <Ordered/>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
import Ordered from '../components/Ordered'


export default {
  name: 'home',
  components: {
    Menu,
    Ordered
  }
}
</script>

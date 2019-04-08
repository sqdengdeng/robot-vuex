<template>
  <div class="about">
    <img alt="Tea logo" src="../assets/tea4.jpg" height="150px">
    <!-- 无vuex的点餐单 -->
    <Menu/>
    <!-- vuex的点餐单 -->
    <!-- <Ordered/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/Menu.vue";

export default {
  name: "home",
  components: {
    Menu
  }
};
</script>

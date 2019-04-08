<template></template>

<script>
// 创建一个 Counter 组件
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count() {
      return store.state.count;
    },
    doubleCount() {
      return store.getters.doubleCount;
    }
  },
  methods:{
      add(){
          this.store.dispatch('increment')
      }
  }
};

export default {};
</script>


<template>
  <div>
    <h1>请点茶：</h1>
    <ul id="detail" class="meun">
      <li v-for="item in all" :key="item.key">
        <Button
          :type="item.type"
          size="large"
          @click="addToOrder"
          :id="item.key + '  .............................................  ' + item.price"
        >{{ item.key }}
        </Button>
        <span>{{ item.price }}</span>
      </li>
    </ul>
    <div>
      <h1>我的茶：</h1>
      <h3 v-show="!count">
        <i>Please add some products to cart.</i>
        <br>
        <i>还没有点东西喝哟～.</i>
      </h3>
      <ul>
        <li v-for="item in value" :key="item.index">
          <h3>{{ item }}</h3>
        </li>
      </ul>
      <Button shape="circle" @click="payTheBill">结算</Button>
      <h3>Total:{{ total }}</h3>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  // 将模块的空间名称字符串作为第一个参数传递
  // computed: {
  //   ...mapState("order", ["all", "value", "total", "count"])
  // },
  computed: mapState({
    all:state => state.order.all,
    value:state => state.order.value,
    total:state => state.order.total,
    count:state => state.order.count,
  })
  ,
  methods: {
    ...mapActions("order", ["getAllProducts", "addNewOne", "pay", "initial"]),
    addToOrder(event) {
      var e = event.target;
      if (e.tagName == "SPAN") {
        e = event.target.parentNode;
      }
      this.addNewOne(e.id);
      var strArr = e.id.split("¥");
      // var p = parseFloat(strArr[1]);
      var p = Number(strArr[1])
      this.pay(p);
    },
    payTheBill() {
      this.$Message.info("您的账单为:" + this.total + "  ..结算完成！", 15);
      this.initial();
    }
  },
  created() {
    this.getAllProducts();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 20px 0 10px 0;
}
button {
  margin: 18px 35px;
}
.menu {
  display: flex;
  justify-content: center;
}
#detail{
  display: flex;
  flex-wrap: wrap;
  width: 700px;
  margin: 10px auto;
}
#detail li{
  list-style-type: none;
}
</style>

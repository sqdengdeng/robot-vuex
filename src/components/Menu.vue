// view 将state映射到视图
<template>
  <div>
    <h1>请点茶：</h1>
    <!-- <div class="meun">
      <Button type="info" size="large">红豆仙冰</Button>
      <Button type="success" size="large">珍珠奶茶</Button>
      <Button type="warning" size="large">香醇摩卡</Button>
      <Button type="error" size="large">至甄香芋</Button>
      <br><br/>
      <Button type="error" size="large">青柠莓莓</Button>
      <Button type="warning" size="large">樱桃李子</Button> 
      <Button type="success" size="large">熊猫果茶</Button>
      <Button type="info" size="large">橙满天下</Button>
    </div>-->
    <div>
      <ul id="detail" class="meun">
        <li v-for="item in tea" :key="item.key">
          <Button
            :type="item.type"
            size="large"
            @click="addToOrder"
            :id="item.key + '  .............................................  ' +item.price"
          >{{item.key}}</Button>
          <span>{{item.price}}</span>
        </li>
      </ul>
    </div>
    <div>
      <h1>已点：</h1>
      <h3 v-show="!count">
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
import { teaInfo } from '../api/teaInfo.js'
export default {
  name: "Menu",
  // state 驱动应用的数据源
  data() {
    return {
      tea: teaInfo,
      count: 0,
      value: [],
      total: 0
    };
  },
  // actions 响应在view上的 用户操作导致状态的变化
  methods: {
    addToOrder(event) {
      this.count++;
      var e = event.target;
      if (e.tagName == "SPAN") {
        e = event.target.parentNode;
      }
      this.value.push(e.id);
      // 计算total
      var strArr = e.id.split("¥");
      var p = parseFloat(strArr[1]);
      this.total += p;
    },

    payTheBill() {
      this.$Message.info(
        "您的账单为:" + this.total + "  ..结算完成！",
        15
      );
      this.total = 0;
      this.count = 0;
      this.value = [];
    }
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

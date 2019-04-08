<template>
  <div id="app">
    <div id="nav">
      <Menu mode="horizontal" active-name="1">
        <router-link to="/">
          <Menu-item name="1">
            Vuex
            <Icon type="ios-paper"></Icon>
          </Menu-item>
        </router-link>
        <router-link to="/about">
          <Menu-item name="2">
            <Icon type="ios-people"></Icon>pure Vue
          </Menu-item>
        </router-link>
      </Menu>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav > .ivu-menu {
  width: 500px;
  margin: 30px auto;
  font-size: 32px;
}
</style>

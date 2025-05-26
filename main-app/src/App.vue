<template>
  <div id="app">
    <div id="nav">
      <router-link to="/test-web/test">sub-vue1</router-link> |
      <router-link to="/test-web/testtwo">sub-testtwo</router-link> |
      <router-link to="/sub-vite/">sub-vite</router-link> |
      <router-link to="/sub-vite/son">sub-vite-son</router-link> |
    </div>
    <router-view />
    <!-- <div id="test-web"></div> -->
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

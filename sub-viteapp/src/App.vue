<template>
  <div id="app">
    vite子应用页面
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
}
</style>

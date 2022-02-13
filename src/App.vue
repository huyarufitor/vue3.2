<template>
  <!-- <div id="nav">
    <el-input v-model="input" placeholder="Please input" />
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div class="review-wrap"></div>
  <router-view />
</template>
<script lang="ts" setup>
// import { ref } from "vue";

// const input = ref("2212"); // 默认绑定的值
const boxwidth = "100px";
</script>

<style lang="scss">
.review-wrap {
  width: v-bind(boxwidth);
  height: 100px;
  background: #eee;
}
</style>

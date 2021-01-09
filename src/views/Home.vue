<template>
  <div class = "top-wrapper" >
    <top-nav/>
    <div class="banner">
      <h1 class = "title">Vue3UI组件库</h1>
      <h2 class = "subtitle">一个厉害的 UI 框架</h2>
      <p class="actions">
        <a href="https://github.com">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/Topnav.vue";
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'Home',
  components: {
    TopNav,
  },
});
</script>
<style lang="scss" scoped>
$green:#02bcb0;
$color:#026460;
.top-wrapper{
  background: linear-gradient(145deg, rgba(227,255,253,1) 0%, rgba(183,233,230,1) 100%);
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color:#28d1c9;
  .title{
    font-size:24px;
    color:$color;
  }
  .subtitle{
    font-size:16px;
    color:#197f7a;
  }
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: $green;
      color:#fff;
      display: inline-block;
      $h: 28px;
      padding:8px 24px;
      border-radius:4px;
    }
  }
}
</style>
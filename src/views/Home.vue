<template>
  <div class = "top-wrapper" >
    <top-nav/>
    <div class="banner">
      <h1>Vue3UI组件库</h1>
      <h2>一个厉害的 UI 框架</h2>
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
.top-wrapper{
  background: linear-gradient(145deg, rgba(227,255,253,1) 0%, rgba(183,233,230,1) 100%);
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>
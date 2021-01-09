<template>
  <div class="top-wrapper">
    <top-nav />
    <div class="banner">
      <h1 class="title">Vue3UI组件库</h1>
      <h2 class="subtitle">一个厉害的 UI 框架</h2>
      <p class="actions">
        <a href="https://github.com/yinhaiying/vue3-ts-ui">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <div class="intro">
    <div class="features">
      <div class="item">
        <svg class="icon">
          <use xlink:href="#icon-vue"></use>
        </svg>
        <div class="text">
          <p class="title">基于Vue3</p>
          <p class="desc">使用了最新的Vu3中的composition API</p>
        </div>
      </div>
      <div class="item">
        <svg class="icon">
          <use xlink:href="#icon-ts"></use>
        </svg>
        <div class="text">
          <p class="title">基于Typescript</p>
          <p class="desc">采用了Typescript书写，严格遵守Typescript书写规则</p>
        </div>
      </div>
      <div class="item">
        <svg class="icon">
          <use xlink:href="#icon-light"></use>
        </svg>
        <div class="text">
          <p class="title">规范性</p>
          <p class="desc">所有组件遵循统一的颜色，字体等样式规范</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/Topnav.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    TopNav,
  },
});
</script>
<style lang="scss" scoped>
$green: #02bcb0;
$color: #026460;
.top-wrapper {
  background: linear-gradient(
    145deg,
    rgba(227, 255, 253, 1) 0%,
    rgba(183, 233, 230, 1) 100%
  );
  clip-path: ellipse(80% 60% at 50% 40%);
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #28d1c9;
  .title {
    font-size: 24px;
    color: $color;
  }
  .subtitle {
    font-size: 16px;
    color: #197f7a;
  }
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: $green;
      color: #fff;
      display: inline-block;
      $h: 28px;
      padding: 8px 24px;
      border-radius: 4px;
    }
  }
}

.intro {
  .features {
    display:flex;
    flex-wrap: wrap;
    
    .item {
      display:flex;
      width:50%;
      justify-content: center;
      align-items:center;
      margin-top:40px;
      > svg {
        width: 64px;
        height: 64px;
      }
      .text{
        margin-left:30px;
        .title{
          font-size:24px;
        }
        .desc{
          font-size:16px;
          color:rgba(0,0,0,.65)
        }
      }
    }
  }
}
</style>

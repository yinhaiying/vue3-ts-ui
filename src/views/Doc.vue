<template>
  <div class="layout">
    <top-nav class="nav" toggleMenuButtonVisibility = "true"/>
    <div class="content">
      <aside v-if="menuVisible">
        <h2>Sea</h2>
        <ol>
          <li>
            <router-link to = "/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to = "/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to = "/doc/get-started">快速上手</router-link>
          </li>
        </ol>

        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import TopNav from "../components/Topnav.vue";
import { defineComponent, inject, Ref } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    TopNav,
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    return { menuVisible };
  },
});
</script>
<style lang="scss" scoped>
$aside-index: 10;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
    background: linear-gradient(
      145deg,
      rgba(227, 255, 253, 1) 0%,
      rgba(183, 233, 230, 1) 100%
    );
    z-index: 11;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 240px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
aside {

  width: 240px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: $aside-index;
  border-right:2px solid #F7F8FA;
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
    font-size:24px;
  }
  > ol {
    > li {
      > a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
      }
    }
  }
}
main {
  overflow: auto;
}

.router-link-active{
  background:#0366ff;
  background-color:rgba(3, 102, 255, 0.05);
  color:#0366ff;
  position:relative;
  &:after{
    position:absolute;
    content:"";
    width:2px;
    background:#0366ff;
    height:100%;
    right:-2px;
    top:0;
  }
}
</style>

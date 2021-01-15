<template>
  <div class="layout">
    <top-nav class="nav" toggleMenuButtonVisibility="true" />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>开发指南</h2>
        <div class="item">
          <h3>快速上手</h3>
          <ol>
            <li>
              <router-link to="/doc/install">安装</router-link>
            </li>
            <li>
              <router-link to="/doc/get-started">快速上手</router-link>
            </li>
          </ol>
        </div>
        <h2>组件列表</h2>
        <div class="item">
          <h3>通用</h3>
          <ol>
            <li>
              <router-link to="/doc/button">Button 按钮</router-link>
            </li>
          </ol>
        </div>
        <div class="item">
          <h3>布局</h3>
          <ol>
            <!-- <li>
              <router-link to="/doc/switch">Layout 布局</router-link>
            </li>
            <li>
              <router-link to="/doc/button">Divider 分割线</router-link>
            </li> -->
          </ol>
        </div>
        <div class="item">
          <h3>导航</h3>
          <ol>
            <!-- <li>
              <router-link to="/doc/switch">Pagination 分页</router-link>
            </li> -->
          </ol>
        </div>
        <div class="item">
          <h3>数据录入</h3>
          <ol>
            <li>
              <router-link to="/doc/switch">Switch 开关</router-link>
            </li>
          </ol>
        </div>
        <div class="item">
          <h3>数据展示</h3>
          <ol>
            <li>
              <router-link to="/doc/tabs">Tabs 组件</router-link>
            </li>
          </ol>
        </div>
        <div class="item">
          <h3>反馈</h3>
          <ol>
            <li>
              <router-link to="/doc/dialog">Dialog 弹窗</router-link>
            </li>
          </ol>
        </div>
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
    padding-left: 280px;
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
    padding: 30px 30px 70px;
    background: white;
    
  }
}
aside {
  box-sizing: border-box;
  width: 280px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 70px 0;
  height: 100%;
  z-index: $aside-index;
  border-right: 2px solid #f7f8fa;
  overflow-y: scroll;
  overflow-x:hidden;
  > h2 {
    margin: 0 24px;
    font-size: 20px;
    line-height: 56px;
    color: #333;
    letter-spacing: 0;
    border-bottom: 1px solid #f0f2f5;
  }
  .item {
    > h3 {
      padding-left: 48px;
      height: 56px;
      line-height: 56px;
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #aaa;
      letter-spacing: 0;
    }
    > ol {
      > li {
        height:40px;
        line-height:40px;
        > a {
          display: block;
          position: relative;
          padding-left: 63px;
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #666;
          letter-spacing: 0;
          text-decoration: none;
        }
      }
    }
  }
}
main {
  overflow: auto;
}

.router-link-active {
  background: #0366ff;
  background-color: rgba(3, 102, 255, 0.05);
  color: #0366ff;
  position: relative;
  &:after {
    position: absolute;
    content: "";
    width: 2px;
    background: #0366ff;
    height: 100%;
    right: -2px;
    top: 0;
  }
}
</style>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  background-color: #fff;
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #DDDEE0;
}
</style>
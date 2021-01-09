<template>
  <div class="topnav">
    <div class="logo" @click="onClick">
      <div class="logo-icon">
        <svg class="icon">
          <use xlink:href="#icon-sea"></use>
        </svg>
      </div>
      <div class="name">Sea.js</div>
    </div>
    <ul class="menu">
      <li>
        <router-link to="/doc/switch">文档</router-link>
      </li>
    </ul>
    <svg
      class="icon toggleAside"
      v-if="toggleMenuButtonVisibility"
      @click="toggleMenu"
    >
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, Ref } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "HelloWorld",
  props: {
    toggleMenuButtonVisibility: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    const toggleMenu = () => {
      if (menuVisible) {
        menuVisible.value = !menuVisible.value;
      }
    };
    const router = useRouter();
    const onClick = () => {
      router.push("/");
    };
    return { toggleMenu, onClick };
  },
});
</script>

<style lang="scss" scoped>
@keyframes circle {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.topnav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  color: #28d1c9;
  font-size: 16px;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    margin-left: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    // animation:circle 3s infinite linear;
    .logo-icon {
      > svg {
        width: 32px;
        height: 32px;
      }
    }
    .name {
      font-size: 24px;
      margin-left: 10px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    margin-right: 30px;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>

<template>
  <div class="page">
    <div class="sea-tabs-nav" ref="navRef">
      <div
        class="sea-tabs-nav-item"
        v-for="(title, index) in titles"
        :key="index"
        :class="{ active: activeIndex === index }"
        :disabled="disableds[index]"
        @click="handleChange(index)"
        :ref="
          (el) => {
            if (activeIndex === index) {
              activatedDom = el;
            }
          }
        "
      >
        <template v-if= "icons[index]">
          <sea-icon type="icon-menu" ></sea-icon>
        </template>
        <span>{{ title }}</span>
      </div>
      <div class="sea-tabs-nav-indicator" ref="indicatorRef"></div>
    </div>
    <div class="sea-tabs-content">
      <!-- <slot></slot> -->
      <component
        :is="currentComponent"
        :key="currentComponent.props.name"
      ></component>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  VNode,
  RendererNode,
  RendererElement,
  watchEffect,
} from "vue";
import TabPanel from "./Tab-Panel.vue";
export default defineComponent({
  name: "sea-tabs",
  components: {},
  props: {
    active: {
      type: String,
      require: true,
    },
    disabled: {
      type: Boolean,
      defualt: true,
    },
    icon: {
      type: String,
    },
  },
  emits: ["update:active"],
  setup(props, context) {
    let defaults: VNode<
      RendererNode,
      RendererElement,
      {
        [key: string]: any;
      }
    >[] = [];
    const activatedDom = ref<HTMLDivElement>();
    const indicatorRef = ref<HTMLDivElement>();
    const navRef = ref<HTMLDivElement>();
    // const activeIndex = ref(0);
    const titles = ref<string[]>([]);
    const disableds = ref<boolean[]>([]);
    const icons = ref<string[]>([]);

    const currentComponent = computed(() => {
      return defaults.find((tag) => {
        if (tag.props && tag.props.name === props.active) {
          return true;
        }
      });
    });
    const activeIndex = computed(() => {
      let result = 0;
      defaults.forEach((tag, index) => {
        if (tag.props && tag.props.name === props.active) {
          result = index;
        }
      });
      return result;
    });
    // 更新样式
    watchEffect(
      () => {
        const width = activatedDom.value?.getBoundingClientRect().width;
        const activatedDomLeft = activatedDom.value?.getBoundingClientRect()
          .left;
        const navLeft = navRef.value?.getBoundingClientRect().left;
        if (indicatorRef.value) {
          indicatorRef.value.style.width = width + "px";
          if (navLeft && activatedDomLeft) {
            indicatorRef.value.style.left = activatedDomLeft - navLeft + "px";
          }
        }
      },
      { flush: "post" }
    );
    if (context.slots.default) {
      defaults = context.slots.default();
      defaults.forEach((tag) => {
        if (tag.type !== TabPanel) {
          throw new Error("Tabs的子元素必须是TabPanel");
        }
      });
      // 获取nav
      titles.value = defaults.map((tag) => {
        return tag.props && tag.props.title;
      });
      disableds.value = defaults.map((tag) => {
        return tag.props && tag.props.disabled;
      });
      icons.value = defaults.map((tag) => {
        return tag.props && tag.props.icon;
      });
    }

    const handleChange = (index: number) => {
      context.emit("update:active", defaults[index]?.props?.name);
    };
    return {
      defaults,
      titles,
      disableds,
      icons,
      currentComponent,
      activeIndex,
      handleChange,
      activatedDom,
      indicatorRef,
      navRef,
    };
  },
});
</script>
<style lang="scss" scoped>
$color: #666;
$border-bottom: #d8dce6;
.sea-tabs {
  &-nav {
    display: flex;
    color: $color;
    position: relative;
    border-bottom: 1px solid $border-bottom;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      >svg{
        width:16px;
        height:16px;
      }
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        color: #3f89ff;
      }
      &.active {
        color: #0364ff;
      }
      &[disabled] {
        cursor: not-allowed !important;
        color: rgba(0, 0, 0, 0.2) !important;
        pointer-events: none;
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      background-color: #0364ff;
      height: 1px;
      bottom: -1px;
      box-sizing: border-box;
      z-index: 1;
    }
  }
  &-content {
    padding: 18px 0 0 8px;
  }
}
</style>

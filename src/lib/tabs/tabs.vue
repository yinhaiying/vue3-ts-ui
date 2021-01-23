<template>
  <div class="sea-tabs" :class="`sea-tabs-${type}`">
    <div class="sea-tabs-nav" ref="navRef" :style="style">
      <div class="sea-tabs-nav-item-wrapper" ref="itemWrapperRef">
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
          <template v-if="icons[index]">
            <sea-icon type="icon-menu"></sea-icon>
          </template>
          <span>{{ title }}</span>
        </div>
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
    type: {
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
    const itemWrapperRef = ref<HTMLDivElement>();
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
    const style = computed(() => {
      const { type } = props;
      if (type) {
        return {
          // "borderBottom":"1px solid red"
        };
      }
    });
    // 更新样式
    watchEffect(
      () => {
        const width = activatedDom.value?.getBoundingClientRect().width;
        const activatedDomLeft = activatedDom.value?.getBoundingClientRect()
          .left;
        const navLeft = navRef.value?.getBoundingClientRect().left;
        const navWidth = navRef.value?.getBoundingClientRect().width;
        const itemWrapperWidth = itemWrapperRef.value?.getBoundingClientRect()
          .width;
        if (indicatorRef.value && props.type !== "card") {
          indicatorRef.value.style.width = width + "px";
          if (navLeft && activatedDomLeft) {
            indicatorRef.value.style.left = activatedDomLeft - navLeft + "px";
          }
        } else if (indicatorRef.value && props.type === "card") {
          if (itemWrapperWidth && navWidth) {
            indicatorRef.value.style.left = itemWrapperWidth + "px";
            indicatorRef.value.style.width = navWidth - itemWrapperWidth + "px";
          }
        }
      },
      { flush: "post" }
    );
    // 获取tab-panel中的属性值
    const getTabPanelProp = (name: string) => {
      return defaults.map((tag) => {
        return tag.props && tag.props[name];
      });
    }
    if (context.slots.default) {
      defaults = context.slots.default();
      defaults.forEach((tag) => {
        if (tag.type !== TabPanel) {
          throw new Error("Tabs的子元素必须是TabPanel");
        }
      });
      // 获取nav
      titles.value = getTabPanelProp("title");
      disableds.value = getTabPanelProp("disabled");
      icons.value = getTabPanelProp("icon")
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
      itemWrapperRef,
      navRef,
      style,
    };
  },
});
</script>
<style lang="scss" scoped>
$color: #666;
$border-bottom: #d8dce6;
.sea-tabs {
  &.sea-tabs-card {
    .sea-tabs-nav {
      border: 1px solid transparent !important;
      position: relative;
      .sea-tabs-nav-indicator {
        position: absolute;
        background: #d9d9d9;
        height: 1px;
        border: none;
        bottom: 0;
      }
    }
    .sea-tabs-nav-item {
      border: 1px solid#d9d9d9;
      padding: 12px 16px 11px 16px;
      margin: 0;
      &.active {
        border-bottom: none;
      }
      &:not(:first-child) {
        border-left: none;
      }
    }
  }
  .sea-tabs-nav {
    display: flex;
    color: $color;
    position: relative;
    border-bottom: 1px solid $border-bottom;
    .sea-tabs-nav-item-wrapper {
      display: flex;
      align-items: center;
    }
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      > svg {
        width: 16px;
        height: 16px;
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

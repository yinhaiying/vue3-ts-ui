<template>
  <div class="page">
    <div class="sea-tabs-nav" ref="navRef">
      <div
        class="sea-tabs-nav-item"
        v-for="(title, index) in titles"
        :key="index"
        :class="{ active: activeIndex === index }"
        @click="handleChange(index)"
        :ref="
          (el) => {
            if (activeIndex === index) {
              activatedDom = el;
            }
          }
        "
      >
        {{ title }}
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
  onMounted,
  onUnmounted,
  onUpdated,
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

    const currentComponent = computed(() => {
      return defaults.find((tag, index) => {
        if (tag.props && tag.props.name === props.active) {
          return true;
        }
      });
    });
    const activeIndex = computed(() => {
      let result = 0;
      defaults.forEach((tag,index) => {
        if(tag.props && tag.props.name === props.active){
          result = index;
        }
      });
      return result;
    })
    // 更新样式
     watchEffect(() => {
      const width = activatedDom.value?.getBoundingClientRect().width;
      const activatedDomLeft = activatedDom.value?.getBoundingClientRect().left;
      const navLeft = navRef.value?.getBoundingClientRect().left;
      if (indicatorRef.value) {
        indicatorRef.value.style.width = width + "px";
        if (navLeft && activatedDomLeft) {
          indicatorRef.value.style.left = activatedDomLeft - navLeft + "px";
        }
      }
    },{flush:"post"});
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
    }

    const handleChange = (index: number) => {
      context.emit("update:active", defaults[index]?.props?.name);
    };
    return {
      defaults,
      titles,
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
$border-bottom:#D8DCE6;
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
    }
    &-indicator {
      position: absolute;
      left: 0;
      background-color: #0364ff;
      height: 1px;
      bottom: 0px;
      box-sizing: border-box;
      z-index: 1;
    }
  }
  &-content {
    padding: 18px 0 0 8px;
  }
}
</style>

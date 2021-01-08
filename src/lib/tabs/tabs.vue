<template>
  <div class="page">
    <div class="sea-tabs-nav">
      <div
        class="sea-tabs-nav-item"
        v-for="(title, index) in titles"
        :key="index"
      >
        {{ title }}
      </div>
    </div>
    <div class="sea-tabs-content">
      <!-- <slot></slot> -->
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TabPanel from "./tab-panel.vue";
export default defineComponent({
  name: "",
  components: {},
  props: {
    active: {
      type: String,
      require: true,
    },
  },
  setup(props, context) {
    let defaults;
    const titles = ref<string[]>([]);
    const currentComponent = ref();
    if (context.slots.default) {
      
      defaults = context.slots.default();
      defaults.forEach((tag) => {
        if (tag.type !== TabPanel) {
          throw new Error("Tabs的子元素必须是TabPanel");
        }
      });
      // 获取当前的组件
      currentComponent.value = defaults.find((tag) => {
        if (tag.props) {
          return tag.props.name === props.active;
        }
      });
      console.log("currentComponent:", currentComponent);
      // 获取nav
      titles.value = defaults.map((tag) => {
        return tag.props && tag.props.title;
      });
    }
    return {
      defaults,
      titles,
      currentComponent
    };
  },
});
</script>
<style lang="scss" scoped>
$color: #666;
$border-bottom: #666;
.sea-tabs {
  &-nav {
    display: flex;
    color: $color;
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
  }
}
</style>

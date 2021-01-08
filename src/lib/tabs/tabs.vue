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
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TabPanel from "./tab-panel.vue";
export default defineComponent({
  name: "",
  components: {},
  props: {},
  setup(props, context) {
    let defaults;
    let titles;
    if (context.slots.default) {
      defaults = context.slots.default();
      console.log("defaults:", defaults);
      defaults.forEach((tag) => {
        if (tag.type !== TabPanel) {
          throw new Error("Tabs的子元素必须是TabPanel");
        }
      });
      titles = defaults.map((tag) => {
        return tag.props && tag.props.title;
      });
    }
    return {
      defaults,
      titles,
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
      &:first-child{
        margin-left:0;
      }
      &:last-child{
        margin-right:0;
      }
      &:hover{
        color:#3f89ff;
      }
      &.active{
        color:#0364ff;
      }
    }
  }
}
</style>

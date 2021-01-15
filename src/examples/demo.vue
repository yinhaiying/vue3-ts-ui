<template>
    <div class="demo">
      <h2 class="demo-subtitle">{{component.__title}}</h2>
      <p class="demo-desc">{{component.__desc}}</p>
      <div class="demo-container">
        <div class="demo-component">
          <component :is = "component" />
        </div>
        <div class="demo-code" v-if="switch1DemoData.isShowCode">
          <pre class="language-html" v-html="switch1DemoData.html"></pre>
        </div>
        <div class="demo-actions">
          <span class="action copy" @click="switch1DemoData.handleCopy"
            >复制代码</span
          >
          <span
            class="action view"
            @click="switch1DemoData.viewCode"
            v-if="!switch1DemoData.isShowCode"
            >显示代码</span
          >
          <span class="action view" @click="viewCode" v-else>隐藏代码</span>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {useShowCode} from "@/hooks/useShowCode"
export default defineComponent({
  name: "",
  components: {},
  props: {
      component:Object
  },
  setup(props) {
      console.log("component:",props.component)
    const switch1DemoData = useShowCode(props.component?.__docs);
    console.log("switch1DemoData",switch1DemoData)
    return {
        switch1DemoData
    };
  },
});
</script>
<style lang="scss" scoped>
$border-color: #d9d9d9;
$font-family: Lato, "Helvetica Neue For Number", -apple-system,
  BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB",
  "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;

  .demo-title {
    font-size: 28px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    line-height: 40px;
    margin-bottom: 24px;
    margin-top: 8px;
    font-family: $font-family;
  }
  .demo {
    margin: 16px 0 32px;
    > h2 {
      font-size: 20px;
    }
    .demo-desc {
      margin: 8px 0px 24px 0px;
    }
    &-component {
      padding: 16px;
    }
    &-container {
      border: 1px solid $border-color;
      border-radius: 4px;
      .demo-actions {
        padding: 8px 16px;
        border-top: 1px solid $border-color;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-end;
        padding-right: 50px;
        align-items: center;
        height: 48px;
        .action {
          color: #45576e;
          font-size: 12px;
          cursor: pointer;
          &.copy {
            margin-right: 30px;
          }
        }
      }
      .demo-code {
        padding: 8px 16px;
        border-top: 1px dashed $border-color;
        > pre {
          line-height: 1.1;
          font-family: Consolas, "Courier New", Courier, monospace;
          margin: 0;
        }
      }
    }
  }

</style>


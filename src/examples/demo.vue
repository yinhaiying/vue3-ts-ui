<template>
    <div class="demo">
      <h2 class="demo-subtitle">{{component.__title}}</h2>
      <p class="demo-desc">{{component.__desc}}</p>
      <div class="demo-container">
        <div class="demo-component">
          <component :is = "component" />
        </div>
        <div class="demo-code" v-if="demoData.isShowCode">
          <pre class="language-html" v-html="demoData.html"></pre>
        </div>
        <div class="demo-actions" v-if = "demoData.isShowAction">
          <svg class="icon">
            <use xlink:href="#icon-copy"></use>
          </svg>
          <span class="action copy" @click="demoData.handleCopy">复制代码</span>
          <svg class="icon">
            <use xlink:href="#icon-left-right-arrow"></use>
          </svg>
          <span  class="action view" @click="demoData.viewCode" v-if="!demoData.isShowCode">显示代码</span>
          <span class="action view" @click="demoData.viewCode" v-else>隐藏代码</span>
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
      component:Object,
      isShowAction:{
        type:Boolean,
        default:true
      }
  },
  setup(props) {
    const demoData = useShowCode(props.component?.__docs,props.isShowAction);
    console.log("props.compoennt:",props.component);
    return {
        demoData
    };
  },
});
</script>
<style lang="scss" scoped>
$border-color: #d9d9d9;
  .demo {
    margin: 16px 0 32px;
    > h2 {
      font-size: 20px;
      color:rgba(0,0,0,.85)
    }
    .demo-desc {
      margin: 8px 0px 24px 0px;
      color:#666666;
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
        >svg{
          font-size:12px;
          margin-right:2px;
        }
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


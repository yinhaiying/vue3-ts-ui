<template>
  <div class="switch-demo">
    <h1>Switch组件示例</h1>
    <div class="demo">
      <h2 class = "demo-title">基础用法</h2>
      <p class = "demo-desc">用于控制两种状态的开关</p>
      <div class="demo-container">
        <div class="demo-component">
          <SwitchDemo1></SwitchDemo1>
        </div>
        <div class="demo-code" v-if = "isShowCode">
          <pre class = "language-html" v-html = "html"></pre>
        </div>
        <div class="demo-actions">
          <span class = "action copy">复制代码</span>  
          <span class = "action view" @click = "viewCode" v-if = "!isShowCode">显示代码</span>  
          <span class = "action view" @click = "viewCode" v-else>隐藏代码</span>  
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SwitchDemo1 from "../examples/switch/SwitchDemo1.vue"
import "prismjs";
import "prismjs/themes/prism.css";
const Prism = (window as any).Prism
export default defineComponent({
  name: "SwitchDemo",
  components: {
    SwitchDemo1
  },
  setup(){
    const switchDemo1Content = SwitchDemo1.__docs;
    const html = Prism.highlight(switchDemo1Content, Prism.languages.html, 'html');
    const isShowCode = ref(false);
    const viewCode = () => {
      console.log("111:",isShowCode.value)
      isShowCode.value = !isShowCode.value;
    }
    return {
      html,
      isShowCode,
      viewCode
    }
  }
});
</script>

<style lang="scss" scoped>
.switch-demo{
  padding:16px 48px 120px
}
$border-color: #d9d9d9;
.demo {
  margin: 16px 0 32px;
  >h2 {
    font-size: 20px;
  }
  .demo-desc{
    margin:8px 0px 24px 0px;
  }
  &-component {
    padding: 16px;
  }
  &-container{
    border: 1px solid $border-color;
    border-radius:4px;
    .demo-actions {
      padding: 8px 16px;
      border-top: 1px solid $border-color;
      box-sizing: border-box;
      display:flex;
      justify-content: flex-end;
      padding-right:50px;
      align-items: center;
      height:48px;
      .action{
        color:#45576e;
        font-size:12px;
        cursor:pointer;
        &.copy{
          margin-right:30px;
        }
      }
    }
    .demo-code {
      padding: 8px 16px;
      border-top: 1px dashed $border-color;
      >pre {
        line-height: 1.1;
        font-family: Consolas, 'Courier New', Courier, monospace;
        margin: 0;
      }
    }
  }

}
</style>

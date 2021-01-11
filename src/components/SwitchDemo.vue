<template>
  <div class="switch-demo">
    <h1>Switch组件示例</h1>
    <div class="demo">
      <h2>常规用法</h2>
      <div class="demo-component">
        <SwitchDemo1></SwitchDemo1>
      </div>
      <div class="demo-code">
        <pre>{{switchDemo1Content}}</pre>
      </div>
      <div class="demo-actions">
        <span class = "action copy">复制代码</span>  
        <span class = "action view">查看代码</span>  
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SwitchDemo1 from "../examples/switch/SwitchDemo1.vue"

export default defineComponent({
  name: "SwitchDemo",
  components: {
    SwitchDemo1
  },
  setup(){
    const switchDemo1Content = SwitchDemo1.__docs;
    return {
      switchDemo1Content
    }
  }
});
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
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
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>

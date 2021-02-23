<docs>
  <title>基础用法</title>
  <desc>
     使用type属性来指定对应的图标，也可以通过设置 spin 属性来实现动画旋转效果
  </desc>
</docs>
<template>
    <sea-button @click = "onClick" btnType = "primary">打开消息提示</sea-button>
</template>
<script lang="ts">
import { defineComponent,ref } from "vue";
import createMessage from "../../lib/message/main";
export default defineComponent({
  name: "sea-message-demo",
  components: {},
  setup(props,context) {
    const onClick = () => {
      console.log("打开消息提示：")
      createMessage({type:"info",message:"这是一条消息提示"})
    }
    return {
      onClick
    }
  },
});
</script>
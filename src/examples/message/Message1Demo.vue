<docs>
  <title>基础用法</title>
  <desc>
     使用type属性来指定对应的图标，也可以通过设置 spin 属性来实现动画旋转效果
  </desc>
</docs>
<template>
    <sea-button @click = "onClick" btnType = "primary">打开消息提示</sea-button>
    <sea-message :visibility = "visibility" type = "info">注意啦：这是一条普通信息</sea-message>
</template>
<script lang="ts">
import { defineComponent,ref } from "vue";
export default defineComponent({
  name: "sea-message-demo",
  components: {},
  setup(props,context) {
    const visibility = ref(false);
    const onClick = () => {
      visibility.value = !visibility.value;
    }
    return {
      visibility,
      onClick
    }
  },
});
</script>
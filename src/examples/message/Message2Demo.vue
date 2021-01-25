<docs>
  <title>不同状态</title>
  <desc>
     用来显示「成功、警告、消息、错误」类的操作反馈。
  </desc>
</docs>
<template>
    <sea-button @click = "onClick1" btnType = "info">普通消息</sea-button>
    <sea-button @click = "onClick2" btnType = "primary">成功消息</sea-button>
    <sea-button @click = "onClick3" btnType = "warning">警告消息</sea-button>
    <sea-button @click = "onClick4" btnType = "danger">错误消息</sea-button>
    <sea-message :visibility = "visibility1" type = "info">注意啦：这是一条普通信息</sea-message>
    <sea-message :visibility = "visibility2" type = "success">恭喜啦：这是一条成功信息</sea-message>
    <sea-message :visibility = "visibility3" type = "warning">小心啦：这是一条警告信息</sea-message>
    <sea-message :visibility = "visibility4" type = "error">错误啦：这是一条错误信息</sea-message>
</template>
<script lang="ts">
import { defineComponent,ref } from "vue";
export default defineComponent({
  name: "sea-message-demo",
  components: {},
  setup(props,context) {
    const visibility1 = ref(false);
    const visibility2 = ref(false);
    const visibility3 = ref(false);
    const visibility4 = ref(false);
    const onClick1 = () => {
      visibility1.value = !visibility1.value;
    }
    const onClick2 = () => {
      visibility2.value = !visibility2.value;
    }
    const onClick3 = () => {
      visibility3.value = !visibility3.value;
    }
    const onClick4 = () => {
      visibility4.value = !visibility4.value;
    }
    return {
      visibility1,
      visibility2,
      visibility3,
      visibility4,
      onClick1,
      onClick2,
      onClick3,
      onClick4,
    }
  },
});
</script>
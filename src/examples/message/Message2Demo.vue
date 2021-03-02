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
</template>
<script lang="ts">
import { defineComponent} from "vue";
import createMessage from "../../lib/message/main";
export default defineComponent({
  name: "sea-message-demo",
  components: {},
  setup() {
    const onClick1 = () => {
      createMessage({type:"info",message:"注意啦：这是一条普通信息"})
    }
    const onClick2 = () => {
      createMessage({type:"success",message:"恭喜啦：这是一条成功信息"})
    }
    const onClick3 = () => {
      createMessage({type:"warning",message:"小心啦：这是一条警告信息"})
    }
    const onClick4 = () => {
      createMessage({type:"error",message:"错误啦：这是一条错误信息"})
    }
    return {
      onClick1,
      onClick2,
      onClick3,
      onClick4,
    }
  },
});
</script>
<docs>
  <title>使用createMessage来创建Message</title>
  <desc>
     很多情况下，我们希望在方法中去创建Message。提供了createMessage方法来实现。
  </desc>
</docs>
<template>
    <sea-button @click = "onClick" btnType = "primary">createMessage</sea-button>
</template>
<script lang="ts">
import { defineComponent,ref } from "vue";
import createMessage from "../../lib/message/main";
export default defineComponent({
  name: "sea-message-demo",
  components: {},
  setup(props,context) {
    const onClick = () => {
      createMessage({type:"success",message:"成功提示"})
    }
    return {
      onClick
    }
  },
});
</script>
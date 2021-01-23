<docs>
  <title>自定义页脚</title>
  <desc>
     更复杂的例子，自定义了页脚的按钮，不需要默认确定取消按钮时，你可以通过v-slot:footer来自定义页脚按钮。
  </desc>
</docs>
<template>
  <div class="page">
  <sea-button btnType = "primary" @click = "onClick">点击打开弹窗</sea-button>
    <sea-dialog v-model:visibility="visibility">
      <div>
        <p>内容区域</p> 
      </div>
      <template v-slot:footer>
          <sea-button @click = "handleClose">上一步</sea-button>
          <sea-button @click = "handleClose" btnType = "primary">下一步</sea-button>
      </template>
    </sea-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const visibility = ref(false);
    const onClick = () => {
        visibility.value = true;
    };
    const handleClose = () => {
      visibility.value = false
    }
    return {
      visibility,
      onClick,
      handleClose
    };
  },
});
</script>


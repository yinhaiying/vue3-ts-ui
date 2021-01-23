<docs>
  <title>基础用法</title>
  <desc>
     Modal对话框最简单的用法
  </desc>
</docs>
<template>
  <div class="page">
  <sea-button btnType = "primary" @click = "onClick">点击打开弹窗</sea-button>
    <sea-dialog v-model:visibility="visibility">
      <div>
        这是一段文字
      </div>
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
    }
    return {
      visibility,
      onClick,
    };
  },
});
</script>

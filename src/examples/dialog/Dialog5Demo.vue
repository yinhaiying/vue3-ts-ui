<docs>
  <title>是否可以通过点击Modal来关闭弹窗</title>
  <desc>
     可以通过closeOnClickModal来控制是否是否可以通过点击Modal来关闭弹窗
  </desc>
</docs>
<template>
  <div class="page">
  <sea-button btnType = "primary" @click = "onClick">点击Modal无法关闭Dialog</sea-button>
  <sea-dialog v-model:visibility="visibility" :closeOnClickModal = closeOnClickModal>
    <div>
      <p>内容区域</p> 
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
    };
    const handleClose = () => {
      visibility.value = false
    }
    const closeOnClickModal = false;
    return {
      visibility,
      onClick,
      handleClose,
      closeOnClickModal
    };
  },
});
</script>


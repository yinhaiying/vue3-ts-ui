<docs>
  <title>是否显示关闭按钮</title>
  <desc>
     可以通过showCloase来控制是否显示关闭按钮
  </desc>
</docs>
<template>
  <div class="page">
  <sea-button btnType = "primary" @click = "onClick">不显示关闭按钮</sea-button>
  <sea-dialog v-model:visibility="visibility" :showClose = showClose>
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
    const showClose = false;
    return {
      visibility,
      onClick,
      handleClose,
      showClose
    };
  },
});
</script>


<docs>
  <title>Dialog距离顶部的距离</title>
  <desc>
     可以通过top来控制Dialog距离顶部的距离
  </desc>
</docs>
<template>
  <div class="page">
  <sea-button btnType = "primary" @click = "onClick">点击Modal无法关闭Dialog</sea-button>
  <sea-dialog v-model:visibility="visibility" top = "100px">
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
    return {
      visibility,
      onClick,
    };
  },
});
</script>


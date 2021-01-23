<docs>
  <title>自定义标题</title>
  <desc>
     可以通过v-slot:title来进行自定义标题设置
  </desc>
</docs>
<template>
  <div class="page">
  <sea-button btnType = "primary" @click = "onClick">点击打开弹窗</sea-button>
    <sea-dialog
      v-model:visibility="visibility">
      <template v-slot:title>
        <p>这是一个自定义标题</p>
      </template>
      <div>
        这是一行文字
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


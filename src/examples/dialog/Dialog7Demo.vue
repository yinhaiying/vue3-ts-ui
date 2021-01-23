<docs>
  <title>点击取消按钮和确定按钮之前的回调</title>
  <desc>
     可以通过设置beforeCancel和beforeOk函数来触发点击取消和确定按钮之前的回调函数，只有函数返回true才继续往下执行。
     通常可以用于提交前的校验。
  </desc>
</docs>
<template>
  <div class="page">
  <sea-button btnType = "primary" @click = "onClick">点击取消和确定按钮之前的校验</sea-button>
  <sea-dialog v-model:visibility="visibility" :closeOnClickModal = closeOnClickModal >
    <div>
      <p>内容区域</p> 
    </div>
      <template v-slot:footer>
        <sea-button @click = "handleCancel">取消</sea-button>
        <sea-button @click = "handleOk" btnType = "primary">确定</sea-button>
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
    const handleCancel = () => {
      return false;
    }
    const handleOK = () => {
      return false;
    }
    const closeOnClickModal = false;
    return {
      visibility,
      onClick,
      handleCancel,
      handleOK,
      closeOnClickModal
    };
  },
});
</script>


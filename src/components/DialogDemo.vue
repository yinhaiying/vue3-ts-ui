<template>
  <div class="page">
    <Dialog
      v-model:visibility="visibility"
      :close-on-click-modal="closeOnClickModal"
    >
      <template v-slot:title>
        <p>
          这是一个标题
        </p>
      </template>
      <div>
        <p>内容区域一</p> 
        <p>内容区域二</p> 
        <p>内容区域三</p> 
      </div>
      <template v-slot:footer>
          <button @click = "handleCancel">取消</button>
          <button @click = "handleOk">确认</button>
      </template>
    </Dialog>
    <button @click="toggle">toggle</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Dialog from "../lib/dialog/Dialog.vue";
export default defineComponent({
  name: "",
  components: {
    Dialog,
  },
  props: {},
  setup() {
    const visibility = ref(false);
    const closeOnClickModal = ref(true);
    const toggle = () => {
      visibility.value = !visibility.value;
    };

    const handleOk = () => {
      visibility.value = false;
    };
    const handleCancel = () => {
      visibility.value = false;
    };
    return {
      visibility,
      toggle,
      closeOnClickModal,
      handleOk,
      handleCancel,
    };
  },
});
</script>
<style lang="scss" scoped></style>

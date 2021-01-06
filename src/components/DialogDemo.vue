<template>
  <div class="page">
    <Dialog
      v-model:visibility="visibility"
      :close-on-click-modal="closeOnClickModal"
      :beforeOk = "beforeOk"
      :beforeCancel = "beforeCancel"
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
      <!-- <template v-slot:footer>
          <button @click = "handleCancel">取消</button>
          <button @click = "handleOk">确认</button>
      </template> -->
    </Dialog>
    <button @click="toggle">toggle</button>

    <h2>示例2:使用方法创建dialog</h2>
    <button @click = "showDialog">使用方法创建dialog</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Dialog from "../lib/dialog/Dialog.vue";
import {openDialog} from "../lib/dialog/openDialog"
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
    const beforeOk = () => {
      return true;
    }
    const beforeCancel = () => {
      return true;
    }
    const handleCancel = () => {
      visibility.value = false;
    };
    const showDialog = () => {
      openDialog({
        title: "提示111",
        content: "这是一个提示信息",
        beforeOk: () => {
          return true
        }
      })
    }
    return {
      visibility,
      toggle,
      closeOnClickModal,
      handleOk,
      handleCancel,
      showDialog,
      beforeOk,
      beforeCancel
    };
  },
});
</script>
<style lang="scss" scoped></style>

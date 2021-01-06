<template>
  <div class="page">
    <Dialog 
      v-model:visibility = "visibility" 
      :close-on-click-modal = "closeOnClickModal" @ok = "onOk" @cancel = "onCancel"></Dialog>
    <button @click = "toggle">toggle</button>
  </div>
</template>

<script lang='ts'>
import {defineComponent,ref} from 'vue'
import Dialog from "../lib/dialog/Dialog.vue"
export default defineComponent({
  name:'',
  components: {
      Dialog
  },
  props: {},
  setup(){
    const visibility = ref(false);
    const closeOnClickModal = ref(true);
    const toggle = () => {
      visibility.value = !visibility.value;
    }

    const onOk = () => {
       visibility.value = false;
    }
    const onCancel = () => {
      visibility.value = false;
    }
    return {
      visibility,
      toggle,
      closeOnClickModal,
      onOk,
      onCancel
    }
  }
})
</script>
<style lang="scss" scoped>
</style>
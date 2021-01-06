<template>
  <div class="page">
    <Dialog :visibility = "visibility"></Dialog>
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
    const toggle = () => {
      visibility.value = !visibility.value;
    }
    return {
      visibility,
      toggle
    }
  }
})
</script>
<style lang="scss" scoped>
</style>
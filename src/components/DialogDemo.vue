<template>
  <div class="page">
    <Dialog></Dialog>
  </div>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'
import Dialog from "../lib/dialog/Dialog.vue"
export default defineComponent({
  name:'',
  components: {
      Dialog
  },
  props: {},
  setup(){
    console.log('demo')
  }
})
</script>
<style lang="scss" scoped>
</style>
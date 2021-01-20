<template>
  <button>
      <slot></slot>
  </button>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'
export default defineComponent({
  name:'',
  components: {},
  props: {},
  setup(props){
    console.log('1')
  }
})
</script>
<style lang="scss" scoped>
</style>
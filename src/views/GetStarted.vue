<template>
  <article class="markdown-body" >
    <div  v-html = "content"></div>
  </article>
</template>

<script lang='ts'>
import {defineComponent,ref} from 'vue'
import getStarted from "../docs/get-started.md";
export default defineComponent({
  name:'',
  components: {},
  props: {},
  setup(){
      const content = ref("");
      content.value = getStarted;
      return {
        content
      }
  }
})
</script>
<style lang="scss" scoped>
</style>
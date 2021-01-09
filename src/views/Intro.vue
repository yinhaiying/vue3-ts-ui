<template>
  <article class="markdown-body" >
    <div  v-html = "content"></div>
  </article>
</template>

<script lang='ts'>
import {defineComponent,ref} from 'vue'
import intro from "../docs/intro.md";
export default defineComponent({
  name:'',
  components: {
  },
  props: {},
  setup(){
    const content = ref("");
    content.value = intro;
    return {
      content
    }
  }
})
</script>
<style lang="scss" scoped>
</style>
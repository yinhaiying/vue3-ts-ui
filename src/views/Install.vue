<template>
  <Markdown path = "install.md"></Markdown>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'
import Markdown from "../components/markdown.vue";
export default defineComponent({
  name:'',
  components: {
    Markdown
  },
  props: {},

})
</script>
<style lang="scss" scoped>
</style>
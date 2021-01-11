<template>
  <Markdown path = "intro.md"></Markdown>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'
import Markdown from "../components/markdown.vue";
export default defineComponent({
  name:'',
  components: {
    Markdown
  },
})
</script>
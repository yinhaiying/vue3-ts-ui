<template>
  <div class="demo-wrapper">
    <h1 class="demo-title">Tabs 标签页</h1>
    <demo :component="Tabs1Demo"></demo>
    <!-- <Markdown path = "icon.md"></Markdown> -->
  </div>
</template>
<script lang='ts'>

import {defineComponent} from 'vue'
import {ref} from "vue";
import Tabs1Demo from "@/examples/tabs/Tabs1Demo.vue";
import Demo from "@/examples/demo.vue";
export default defineComponent({
  name:'',
  props: {},
  components:{
    Demo
  },
  setup(){
      return {
        Tabs1Demo
      }
  }
})
</script>
<style lang="scss" scoped>
</style>
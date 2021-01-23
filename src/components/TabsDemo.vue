<template>
  <div class="demo-wrapper">
    <h1 class="demo-title">Tabs 标签页</h1>
    <demo :component="Tabs1Demo"></demo>
    <demo :component="Tabs2Demo"></demo>
    <demo :component="Tabs3Demo"></demo>
    <demo :component="Tabs4Demo"></demo>
    <Markdown path = "tabs.md"></Markdown>
  </div>
</template>
<script lang='ts'>

import {defineComponent} from 'vue'
import {ref} from "vue";
import Tabs1Demo from "@/examples/tabs/Tabs1Demo.vue";
import Tabs2Demo from "@/examples/tabs/Tabs2Demo.vue";
import Tabs3Demo from "@/examples/tabs/Tabs3Demo.vue";
import Tabs4Demo from "@/examples/tabs/Tabs4Demo.vue";
import Demo from "@/examples/demo.vue";
export default defineComponent({
  name:'',
  props: {},
  components:{
    Demo
  },
  setup(){
      return {
        Tabs1Demo,
        Tabs2Demo,
        Tabs3Demo,
        Tabs4Demo
      }
  }
})
</script>
<style lang="scss" scoped>
</style>
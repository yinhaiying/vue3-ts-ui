<template>
  <div class="tabs-demo">
    <h1>tabs示例一</h1>
      <tabs v-model:active = "active">
          <tab-panel title = "导航一111111" name = "sports">体育</tab-panel>
          <tab-panel title = "导航二" name = "news">新闻</tab-panel>
          <tab-panel title = "导航三" name = "music">音乐</tab-panel>
      </tabs>  
  </div>
</template>

<script lang='ts'>
import Tabs from "../lib/tabs/tabs.vue";
import TabPanel from "../lib/tabs/tab-panel.vue";
import {defineComponent} from 'vue'
import {ref} from "vue";
export default defineComponent({
  name:'',
  components: {
      Tabs,
      TabPanel
  },
  props: {},
  setup(){
      const active = ref("sports");
      return {
        active
      }
  }
})
</script>
<style lang="scss" scoped>
</style>
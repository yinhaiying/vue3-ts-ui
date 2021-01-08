<template>
  <div class="tabs-demo">
    <h1>tabs示例一</h1>
      <tabs>
          <tab-panel title = "导航一">体育</tab-panel>
          <tab-panel title = "导航二">新闻</tab-panel>
          <tab-panel title = "导航三">娱乐</tab-panel>
      </tabs>  
  </div>
</template>

<script lang='ts'>
import Tabs from "../lib/tabs/tabs.vue";
import TabPanel from "../lib/tabs/tab-panel.vue";
import {defineComponent} from 'vue'
export default defineComponent({
  name:'',
  components: {
      Tabs,
      TabPanel
  },
  props: {},
  setup(){
      console.log("tabs-demo");
  }
})
</script>
<style lang="scss" scoped>
</style>
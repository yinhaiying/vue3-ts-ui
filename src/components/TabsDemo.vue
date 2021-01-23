<template>
  <div class="tabs-demo">
    <h1>tabs示例一</h1>
      <sea-tabs v-model:active = "active">
          <sea-tab-panel title = "导航一111111" name = "sports">体育</sea-tab-panel>
          <sea-tab-panel title = "导航二" name = "news">新闻</sea-tab-panel>
          <sea-tab-panel title = "导航三" name = "music">音乐</sea-tab-panel>
      </sea-tabs>  
  </div>
</template>

<script lang='ts'>

import {defineComponent} from 'vue'
import {ref} from "vue";
export default defineComponent({
  name:'',
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
<docs>
  <title>选项卡样式</title>
  <desc>可以通过type设置选项卡样式</desc>
</docs>
<template>
    <sea-tabs v-model:active = "active" type = "card">
        <sea-tab-panel title = "导航一" name = "sports">体育</sea-tab-panel>
        <sea-tab-panel title = "导航二" name = "news" >新闻</sea-tab-panel>
        <sea-tab-panel title = "导航三" name = "music">音乐</sea-tab-panel>
    </sea-tabs> 
</template>

<script lang='ts'>
import {defineComponent,ref} from 'vue'
export default defineComponent({
  setup(){
      const active = ref("sports");
      return {
        active,
      }
  }
})
</script>
<style lang="scss" scoped>
</style>

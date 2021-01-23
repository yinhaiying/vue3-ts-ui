<docs>
  <title>禁用</title>
  <desc>禁用某一项</desc>
</docs>
<template>
    <sea-tabs v-model:active = "active">
        <sea-tab-panel title = "导航一" name = "sports">体育</sea-tab-panel>
        <sea-tab-panel title = "导航二" name = "news" disabled>新闻</sea-tab-panel>
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

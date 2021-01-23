<docs>
  <title>带图标的标签</title>
  <desc>可以自定义图标</desc>
</docs>
<template>
    <sea-tabs v-model:active = "active">
        <sea-tab-panel title = "导航一" name = "sports" icon = "menu">体育</sea-tab-panel>
        <sea-tab-panel title = "导航二" name = "news" >新闻</sea-tab-panel>
        <sea-tab-panel title = "导航三" name = "music" icon = "menu">音乐</sea-tab-panel>
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

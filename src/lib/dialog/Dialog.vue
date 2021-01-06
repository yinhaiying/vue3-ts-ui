<template>
<!-- 遮罩层 -->
  <div class="dialog-overlay"></div>
<!-- 内容区域 -->
  <div class="dialog-wrapper">
    <header>标题</header>
    <main>
      <p>内容一</p>
      <p>内容二</p>
    </main>
    <footer>
      <button>取消</button>
      <button>确认</button>
    </footer>
  </div>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'
export default defineComponent({
  name:'Dialog',
  components: {},
  props: {},
  setup(){
    console.log("111")
  }
})
</script>
<style lang="scss" scoped>
</style>
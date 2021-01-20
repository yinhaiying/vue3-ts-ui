<template>
  <div class="page">
      <h2>5种类型</h2>
      <span class = "divide"><sea-button @click = "onClick" size = "small" theme = "default">默认按钮</sea-button></span>
      <span class = "divide"><sea-button @click = "onClick" size = "small" theme = "primary">主要按钮</sea-button></span>
      <span class = "divide"><sea-button @click = "onClick" size = "small" theme = "dashed">虚线按钮</sea-button></span>
      <span class = "divide"><sea-button @click = "onClick" size = "small" theme = "text">文字按钮</sea-button></span>
      <span class = "divide"><sea-button @click = "onClick" size = "small" theme = "link">链接按钮</sea-button></span>
      <h2>四种状态</h2>
      <span class = "divide"><sea-button @click = "onClick" size = "small" theme = "info">信息按钮</sea-button></span>
      <span class = "divide"><sea-button @click = "onClick" size = "small" theme = "success">成功按钮</sea-button></span>
      <span class = "divide"><sea-button @click = "onClick" size = "small" theme = "danger">危险按钮</sea-button></span>
      <span class = "divide"><sea-button @click = "onClick" size = "small" theme = "warning">警告按钮</sea-button></span>
  </div>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'

export default defineComponent({
  name:'',
  props: {

  },
  setup(props){
    const onClick = () => {
      console.log("click");
    };
    return {
      onClick
    }
  }
})
</script>
<style lang="scss" scoped>
.divide{
  margin-right:30px;
}
</style>
<template>
  <div class="page">
    <sea-button @click = "onClick" size = "small" theme = "primary">按钮</sea-button>
    <Button @click = "onClick" size = "small" theme = "link">按钮</Button>
    <Button @click = "onClick" size = "small" theme = "text">按钮</Button>
    <Button @click = "onClick" size = "small" >按钮</Button>
  </div>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'
import Button from "@/lib/button/Button.vue";
export default defineComponent({
  name:'',
  components: {
    Button
  },
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
</style>
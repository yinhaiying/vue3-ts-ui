<template>
  <div class="page">
    <Button @click = "onClick" size = "small">按钮</Button>
  </div>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'
import Button from "@/lib/Button/Button.vue";
export default defineComponent({
  name:'',
  components: {
    Button
  },
  props: {},
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
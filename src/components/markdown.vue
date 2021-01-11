<template>
  <article class="markdown-body" >
    <div  v-html = "content"></div>
  </article>
</template>

<script lang='ts'>
import {defineComponent,onMounted,ref} from 'vue'
import getStarted from "../docs/get-started.md";
export default defineComponent({
  name:'',
  components: {},
  props: {
      path:{
          type:String,
          required:true
      }
  },
  setup(props){
      const content = ref<string>("");
      import(`@/docs/`+props.path).then((res) => {
            console.log("res:",res);
            content.value = res.default;
      })
      return {
        content
      }
  }
})
</script>
<style lang="scss" scoped>
</style>
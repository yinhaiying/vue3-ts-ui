<template>
  <div class="page">
    <div v-for = "(title,index) in titles" :key = "index">{{title}}</div>
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'
import TabPanel from "./tab-panel.vue"
export default defineComponent({
  name:'',
  components: {},
  props: {},
  setup(props,context){
    let defaults;
    let titles
    if(context.slots.default){
      defaults = context.slots.default();
      console.log("defaults:",defaults)
      defaults.forEach((tag) => {
       if(tag.type !== TabPanel){
         throw new Error("Tabs的子元素必须是TabPanel");
       }
      });
      titles = defaults.map((tag) => {
        return tag.props && tag.props.title;
      })
    }
    return {
      defaults,
      titles
    };
  }
})
</script>
<style lang="scss" scoped>
</style>
<template>
  <div class="page">
    <component :is = "defaults[0]" ></component>
    <component :is = "defaults[1]" ></component>
    <component :is = "defaults[2]" ></component>
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
    if(context.slots.default){
      let defaults = context.slots.default();
      const isTabPanel = defaults.forEach((tag) => {
       if(tag.type !== TabPanel){
         throw new Error("Tabs的子元素必须是TabPanel");
       }
      });
      console.log("isTabPanel:",isTabPanel);
    }
    return {
      defaults
    };
    
  }
})
</script>
<style lang="scss" scoped>
</style>
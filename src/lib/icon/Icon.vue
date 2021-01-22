<template>
    <svg class="icon" :class = "{spin:spin}">
      <use :xlink:href="`#${type}`"></use>
    </svg>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'
export default defineComponent({
  name:'sea-icon',
  components: {},
  props: {
    type:{
      type:String
    },
    spin:{
      type:Boolean,
      default:false
    }
  }
})
</script>
<style lang="scss" scoped>
@keyframes spin{
  0%{
    transform:rotate(0deg);
  }
  100%{
    transform:rotate(360deg);
  }
}
.icon{
  width:24px;
  height:24px;
  padding:.25em;
  &.spin{
    animation:spin 1s infinite linear;
  }
}
</style>
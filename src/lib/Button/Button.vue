<template>
    <button v-bind="$attrs" class = "sea-btn" :class = "btnClass">
      <svg class="icon-loading" v-if = "loading">
        <use :xlink:href="`#icon-loading`"></use>
      </svg>
      <svg class="icon" v-if = "icon && !loading">
        <use :xlink:href="`#${icon}`"></use>
      </svg>
      <span class = "content">
        <slot></slot>
      </span>
    </button>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
export default defineComponent({
  inheritAttrs: false,
  name: "sea-button",
  components: {},
  props: {
    btnType: {
      type: String,
      default: "default",
    },
    size:{
      type:String,
      default:"small"
    },
    disabled:{
      type:Boolean,
      default:false
    },
    icon:{
      type:String
    },
    iconPosition:{
      type:String,
      default:"left"
    },
    loading:{
      type:Boolean,
    },
    block:{
      type:Boolean,
    },
    round:{
      type:Boolean,
      default:false,
    }
  },
  setup(props) {
    const btnClass = computed(() => {
      const {btnType,round,size,disabled,icon,iconPosition,block} = props;
      const classList =[];
      btnType && classList.push(`sea-btn-${btnType}`);
      round && classList.push(`sea-btn-round`)
      size && classList.push(`sea-btn-${size}`);
      disabled && classList.push(`disabled`);
      icon && iconPosition && classList.push(`sea-icon-${iconPosition}`);
      block && classList.push(`sea-btn-block`);
      return classList.join(" ");
    })
    return {
      btnClass
    }
  },
});
</script>
<style lang="scss" scoped>
@import "./_button.scss";

</style>

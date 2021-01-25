<template>
  <Teleport to="body">
    
      <div class="sea-message" v-if = "visibility" :class = "classes">
        <sea-icon :type = "`icon-${type}`"></sea-icon>
        <slot></slot>
      </div>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent,ref ,computed} from "vue";
export default defineComponent({
  name: "sea-message",
  components: {},
  props: {
    visibility:Boolean,
    type:{
      type:String,
      default:"info"
    }
  },
  setup(props) {
    const classes = computed(() => {
      const classList = [];
      props.type && classList.push(`sea-message-${props.type}`);
      return classList.join(" ");
    });
    return {
      classes
    }
  },
});
</script>
<style lang="scss" scoped>
body{
  position:relative;
}
@mixin message-theme($background,$border-color){
  background:$background;
  border-color: $border-color;
}
.sea-message{
  position:fixed;
  left:50%;
  top:100px;
  transform:translateX(-50%);
  z-index:100;
  display:flex;
  align-items: center;
  border-radius: 4px;
  padding: 13px 37px 13px 24px;
  background:#fff;
  max-width: 684px;
  min-width:260px;
  box-sizing: border-box;
  &.sea-message-info{
    box-shadow:0 2px 8px rgba(0, 0, 0, 0.2);
  }
  &.sea-message-success{
    @include message-theme(#F2FBF2, #00AA00);
  }
  &.sea-message-warning{
    @include message-theme(#FFFDF2, #FFCC01);
  }
  &.sea-message-error{
    @include message-theme(#FFF4F4, #EE3333);
  }
}
</style>

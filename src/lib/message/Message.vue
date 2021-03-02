<template>
  <Teleport to="body" ref = "body1">
      <div class="sea-message" v-if = "visibility" :class = "classes" :style = "msgStyle">
        <Icon :type = "`icon-${type}`"></Icon>
        <slot></slot>
      </div>
  </Teleport>
</template>

<script lang="ts">
type MessageType = 'info' | 'success' | 'error' | 'warning';
import { defineComponent,ref,computed, PropType,onMounted,onUnmounted} from "vue";
import Icon from "../icon/Icon.vue";
export default defineComponent({
  name: "sea-message",
  components: {Icon},
  props: {
    type:{
      type:String as PropType<MessageType>,
      default:"info"
    },
    top:{
      type:[String ,Number],
      default:100
    },
    duration:{
      type:Number,
      default:3000
    }
  },
  setup(props) {
    const visibility = ref(true);
    let timer: number;
    const classes = computed(() => {
      const classList = [];
      props.type && classList.push(`sea-message-${props.type}`);
      return classList.join(" ");
    });

    const msgStyle = computed(() => {
      return {
        top:props.top + "px"
      }
    });
    onMounted(() => {
      if(visibility.value && props.duration){
        timer = setTimeout(() => {
          console.log("这里执行了吗")
          visibility.value = false;
        },props.duration)
      }
    });
    onUnmounted(() => {
      clearInterval(timer);
    })

    return {
      visibility,
      classes,
      msgStyle
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

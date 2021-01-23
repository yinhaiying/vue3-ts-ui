<template>
  <Teleport to="body">
    <template v-if="visibility">
      <!-- 遮罩层 -->
      <div class="dialog-overlay" @click="onClickModal"></div>
      <!-- 内容区域 -->
      <div class="dialog-wrapper" :style = "style">
        <div class="dailog-content">
          <header>
            <slot name="title">
              <span class="sea-dialog-title">
                {{ title }}
              </span>
            </slot>
            <span @click="handleClose" class = "icon-close" v-if = "showClose">
              <sea-icon type = "icon-close"></sea-icon>
            </span>
          </header>
          <main>
            <slot name="default"></slot>
          </main>
          <footer>
            <slot name="footer">
              <sea-button @click="handleCancel">取消</sea-button>
              <sea-button @click="handleOk" btnType = "primary">确认</sea-button>
            </slot>
          </footer>
        </div>
      </div>
    </template>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent, PropType,computed } from "vue";
type beforeFuncType = () => boolean;
export default defineComponent({
  name: "sea-dialog",
  components: {},
  props: {
    visibility: Boolean,
    closeOnClickModal: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: "标题",
    },
    showClose:{
      type:Boolean,
      default:true
    },
    top:{
      type:String,
    },
    beforeOk: {
      type: Function as PropType<beforeFuncType>,
      default: () => {
        return true;
      },
    },
    beforeCancel: {
      type: Function as PropType<beforeFuncType>,
      default: () => {
        return true;
      },
    },
  },
  setup(props, context) {
    const handleClose = () => {
      context.emit("update:visibility", false);
    };
    const onClickModal = () => {
      if (props.closeOnClickModal) {
        handleClose();
      }
    };
    const handleCancel = () => {
      if (props.beforeCancel && props.beforeCancel()) {
        handleClose();
      }
    };
    const handleOk = () => {
      if (props.beforeOk && props.beforeOk()) {
        handleClose();
      }
    };
    const style = computed(() => {
      if(props.top){
        return {
          transform: "translate(-50%, 0)",
          top:props.top
        }
      }
    })
    return {
      handleClose,
      onClickModal,
      handleCancel,
      handleOk,
      style
    };
  },
});
</script>
<style lang="scss" scoped>
$border-radius: 4px;
$border-color: #d9d9d9;
.dialog-overlay {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: 1000;
}

.dialog-wrapper {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  max-width:100vw;
  .dailog-content {
    background: white;
    border-radius: $border-radius;
    box-shadow: 0 0 3px fade_out(black, 0.5);
    min-width: 15em;
    max-width: 90%;
    width: 520px;
    margin:0 auto;
    & > header {
      padding: 12px 16px;
      border-bottom: 1px solid $border-color;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 20px;
      .icon-close{
        cursor: pointer;
      }
    }
    & > main {
      padding: 12px 16px;
      min-height:100px;
    }
    & > footer {
      border-top: 1px solid $border-color;
      padding: 12px 16px;
      text-align: right;
    }
  }
}
</style>

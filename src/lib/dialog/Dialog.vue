<template>
  <template v-if = "visibility">
    <!-- 遮罩层 -->
    <div class="dialog-overlay"></div>
    <!-- 内容区域 -->
    <div class="dialog-wrapper">
      <div class="dailog-content">
        <header>标题</header>
        <main>
          <p>内容一</p>
          <p>内容二</p>
        </main>
        <footer>
          <button>取消</button>
          <button>确认</button>
        </footer>
      </div>
    </div>
  </template>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Dialog",
  components: {},
  props: {
    visibility:Boolean
  },
  setup() {
    console.log("111");
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
  .dailog-content {
    background: white;
    border-radius: $border-radius;
    box-shadow: 0 0 3px fade_out(black, 0.5);
    min-width: 15em;
    max-width: 90%;
    width:520px;
    & > header {
      padding: 12px 16px;
      border-bottom: 1px solid $border-color;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 20px;
    }
    & > main {
      padding: 12px 16px;
    }
    & > footer {
      border-top: 1px solid $border-color;
      padding: 12px 16px;
      text-align: right;
    }
  }
}
</style>

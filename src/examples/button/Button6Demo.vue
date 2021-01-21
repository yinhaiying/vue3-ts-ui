<docs>
  <title>block按钮</title>
  <desc>
   block属性将使按钮适合其父宽度。
  </desc>
</docs>
<template>
  <div class="page">
    <div style = "margin-top:20px">
        <p class = "item">
              <sea-button @click = "onClick" size = "small" btnType = "primary" block>主要按钮</sea-button>
              <sea-button @click = "onClick" size = "small" btnType = "info" block>信息按钮</sea-button>
              <sea-button @click = "onClick" size = "small" btnType = "danger" block>危险按钮</sea-button>
              <sea-button @click = "onClick" size = "small" btnType = "success" block>成功按钮</sea-button>
              <sea-button @click = "onClick" size = "small" btnType = "warning" block>警告按钮</sea-button>
        </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
    .item{
        margin-bottom:20px;
    }
</style>
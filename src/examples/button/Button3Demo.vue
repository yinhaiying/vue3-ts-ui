<docs>
  <title>不可用状态</title>
  <desc>
    添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
  </desc>
</docs>
<template>
  <div class="page">
    <div style = "margin-top:20px">
        <p class = "item">
            <sea-button @click = "onClick" size = "small" btnType = "primary">主要按钮</sea-button>
            <sea-button @click = "onClick" size = "small" btnType = "primary" disabled>主要按钮</sea-button>
        </p>
        <p class = "item">
            <sea-button @click = "onClick" size = "small" btnType = "info">信息按钮</sea-button>
            <sea-button @click = "onClick" size = "small" btnType = "info" disabled>信息按钮</sea-button>
        </p>
        <p class = "item">
            <sea-button @click = "onClick" size = "small" btnType = "danger">危险按钮</sea-button>
            <sea-button @click = "onClick" size = "small" btnType = "danger" disabled>危险按钮</sea-button>
        </p>
        <p class = "item">
            <sea-button @click = "onClick" size = "small" btnType = "success" >成功按钮</sea-button>
            <sea-button @click = "onClick" size = "small" btnType = "success" disabled>成功按钮</sea-button>
        </p>
        <p class = "item">
            <sea-button @click = "onClick" size = "small" btnType = "warning">警告按钮</sea-button>
            <sea-button @click = "onClick" size = "small" btnType = "warning" disabled>警告按钮</sea-button>
        </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
    .item{
        margin-bottom:20px;
    }
</style>
<docs>
  <title>基础用法</title>
  <desc>
  按钮有五种类型：默认按钮、主按钮、虚线按钮、文字按钮和链接按钮。
  同时我们为按钮提供了四种状态：分别是信息按钮、危险按钮、成功按钮和警告按钮。
  </desc>
</docs>
<template>
  <div class="page">
    <div>
        <sea-button @click = "onClick" size = "small" btnType = "default">默认按钮</sea-button>
        <sea-button @click = "onClick" size = "small" btnType = "primary">主要按钮</sea-button>
        <sea-button @click = "onClick" size = "small" btnType = "dashed">虚线按钮</sea-button>
        <sea-button @click = "onClick" size = "small" btnType = "text">文字按钮</sea-button>
        <sea-button @click = "onClick" size = "small" btnType = "link">链接按钮</sea-button>
    </div>
    <div style = "margin-top:20px">
        <sea-button @click = "onClick" size = "small" btnType = "info">信息按钮</sea-button>
        <sea-button @click = "onClick" size = "small" btnType = "danger">危险按钮</sea-button>
        <sea-button @click = "onClick" size = "small" btnType = "success">成功按钮</sea-button>
        <sea-button @click = "onClick" size = "small" btnType = "warning">警告按钮</sea-button>
    </div>
  </div>
</template>
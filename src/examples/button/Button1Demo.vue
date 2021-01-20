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
    五种类型：
        <sea-button @click = "onClick" size = "small" theme = "default">默认按钮</sea-button>
        <sea-button @click = "onClick" size = "small" theme = "primary">主要按钮</sea-button>
        <sea-button @click = "onClick" size = "small" theme = "dashed">虚线按钮</sea-button>
        <sea-button @click = "onClick" size = "small" theme = "text">文字按钮</sea-button>
        <sea-button @click = "onClick" size = "small" theme = "link">链接按钮</sea-button>
    </div>
    <div style = "margin-top:20px">
    四种状态：
        <sea-button @click = "onClick" size = "small" theme = "info">信息按钮</sea-button>
        <sea-button @click = "onClick" size = "small" theme = "danger">危险按钮</sea-button>
        <sea-button @click = "onClick" size = "small" theme = "success">成功按钮</sea-button>
        <sea-button @click = "onClick" size = "small" theme = "warning">警告按钮</sea-button>
    </div>
  </div>
</template>
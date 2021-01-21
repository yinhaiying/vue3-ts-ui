<docs>
  <title>图标按钮</title>
  <desc>
   可以通过设置icon来设置带图标的按钮，增强辨识度（有文字）或节省空间（无文字）。设置iconPosition来设置图标的位置。
  </desc>
</docs>
<template>
  <div class="page">
    <div style = "margin-top:20px">
        <p class = "item">
            <sea-button @click = "onClick" size = "small" btnType = "primary" icon = "icon-download"></sea-button>
            <sea-button @click = "onClick" size = "small" btnType = "primary" icon = "icon-download">下载</sea-button>
            <sea-button @click = "onClick" size = "small" btnType = "primary" icon = "icon-search">搜索</sea-button>
        </p>
        <p class="item">
         <sea-button @click = "onClick" size = "small" btnType = "primary" icon = "icon-download" iconPosition = "right"></sea-button>
         <sea-button @click = "onClick" size = "small" btnType = "primary" icon = "icon-download" iconPosition = "right">下载</sea-button>
         <sea-button @click = "onClick" size = "small" btnType = "primary" icon = "icon-search" iconPosition = "right">搜索</sea-button>
        </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
    .item{
        margin-bottom:20px;
        vertical-align: top;
    }
</style>
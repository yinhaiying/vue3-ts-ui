<docs>
  <title>加载中状态</title>
  <desc>
   添加 loading 属性即可让按钮处于加载状态，
  </desc>
</docs>
<template>
  <div class="page">
    <div style = "margin-top:20px">
        <p class = "item">
            <sea-button @click = "onClick" size = "small" btnType = "primary" loading></sea-button>
            <sea-button @click = "onClick" size = "small" btnType = "primary" loading>下载中</sea-button>
            <sea-button @click = "onClick" size = "small" btnType = "primary" loading>搜索中</sea-button>
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
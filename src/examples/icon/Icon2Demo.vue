<docs>
  <title>图标列表</title>
  <desc>
     图标列表来自阿里iconfont图标库。
  </desc>
</docs>
<template>
    <ul class = "wrapper">
        <li>
            <sea-icon type = "icon-search"></sea-icon>
            <p>icon-search</p>
        </li>
        <li>
            <sea-icon type = "icon-sync" ></sea-icon>
            <p>icon-sync</p>
        </li>
        <li>
            <sea-icon type = "icon-search" ></sea-icon>
            <p>icon-search</p>
        </li>
        <li>
            <sea-icon type = "icon-download" ></sea-icon>
            <p>icon-download</p>
        </li>
        <li>
            <sea-icon type = "icon-left-right-arrow" ></sea-icon>
            <p>icon-left-right-arrow</p>
        </li>
        <li>
            <sea-icon type = "icon-copy" ></sea-icon>
            <p>icon-copy</p>
        </li>
        <li>
            <sea-icon type = "icon-menu"></sea-icon>
            <p>icon-menu</p>
        </li>
        <li>
            <sea-icon type = "icon-circle-add"></sea-icon>
            <p>icon-circle-add</p>
        </li>
        <li>
            <sea-icon type = "icon-zoomin"></sea-icon>
            <p>icon-zoomin</p>
        </li>
        <li>
            <sea-icon type = "icon-setting"></sea-icon>
            <p>icon-setting</p>
        </li>
        <li>
            <sea-icon type = "icon-home"></sea-icon>
            <p>icon-home</p>
        </li>
    </ul>
</template>
<style lang="scss" scoped>
.wrapper{
    display:inline-flex;
    flex-wrap: wrap;
    >li{
        width:17%;
        display:flex;
        flex-direction: column;
        align-items: center;
        padding:20px;
        justify-content: center;
        p{
            width:100%;
            text-align: center;
        }
        &:hover{
            background:#f2f7ff;
            cursor:pointer;
        }
    }
}
</style>
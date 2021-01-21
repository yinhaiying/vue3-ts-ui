<docs>
  <title>不同尺寸</title>
  <desc>
 Button 组件提供了三种尺寸，分别为small(默认尺寸)、medium和large。可以在不同场景下选择合适的按钮尺寸。
  </desc>
</docs>


<template>
  <div class="page">
      <sea-button @click = "onClick" size = "small" btnType = "primary">主要按钮</sea-button>
      <sea-button @click = "onClick" size = "medium" btnType = "primary">主要按钮</sea-button>
      <sea-button @click = "onClick" size = "large" btnType = "primary">主要按钮</sea-button>
  </div>
</template>

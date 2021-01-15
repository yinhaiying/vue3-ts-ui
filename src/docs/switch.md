## API

### Attributes

| 参数 | 说明 | 类型 | 可选值| 默认值|
| :-----| :----- | :----- |:----- |:----- |
| checked | 指定当前是否选中，可使用v-model:checked | boolean |false/true |false |
| disabled | 是否禁用 | boolean |false/true |false |
| active-color | switch打开时的背景颜色 | string |- |#0364ff |
| inactive-color | switch 关闭时的背景颜色 | string |- |#ccc |

### Events

| 参数 | 说明 | 回调参数 | 
| :-----| :----- | :----- |
| update:value | switch 状态发生变化时的回调函数 |新状态的值|

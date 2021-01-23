## API

### Tab Attributes

| 参数 | 说明 | 类型 | 可选值| 默认值|
| :-----| :----- | :----- |:----- |:----- |
| active | 当前激活 tab 面板的 name | string | - |- |
| type | 选项卡样式 | string |default/card |default |


### Tab-Panel Attributes

| 参数 | 说明 | 类型 | 可选值| 默认值|
| :-----| :----- | :----- |:----- |:----- |
| title | 每个tab的唯一标识 | string |- |- |
| disabled | 是否禁用当前tab项 | boolean |false/true |false |
| icon | 设置带图标的标签 | string |- |- |


### Events

| 参数 | 说明 | 回调参数 | 
| :-----| :----- | :----- |
| update:active | 切换面板时的回调函数 |新tab的name值|
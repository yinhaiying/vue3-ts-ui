## API

### Dialog Attributes

| 参数 | 说明 | 类型 | 可选值| 默认值|
| :-----| :----- | :----- |:----- |:----- |
| visibility | dialog是否可见 | boolean |true/false|false |
| title | 标题 | string or slot | - |标题 |
| closeOnClickModal | 是否可以通过点击modal关闭Dialog | boolean | true/false|true |
| show-close | 是否显示关闭按钮 | boolean | true/false|true |
| top | Dialog距离顶部的距离 | string | - | - |



### Events

| 参数 | 说明 | 回调参数 | 返回值|
| :-----| :----- | :----- |:-----|
| beforeCancel | 点击取消按钮之前的回调，只有返回true才会继续执行 |-|true/false|
| beforeOk | 点击确定按钮之前的回调，只有返回true，才会继续执行 |-|true/false|
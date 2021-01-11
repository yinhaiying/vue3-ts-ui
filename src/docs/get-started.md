# 快速上手
本节将介绍如何在项目中使用Element。


## 引用
**完整引入**<br/>
```javascript
import Vue from 'vue'; // 引入Vue
import 'sea-ui/dist/sea-ui.min.css'; // 引入组件的样式 
import SeaUi from 'sea-ui'; // 引入组件

Vue.use(SeaUi); // 使用组件
```

**按需引入**<br/>
- 方法一：可以通过下面的方式单独引入需要的组件
```javascript
import Button from 'sea-ui/dist/button';
```

- 方法二：也可以使用`babel-plugin-import`来进行按需引入
```javascript
import { Button } from 'sea-ui';
```
修改.babelrc文件
```javascript
{"plugins": [
  ["import", {
      "libraryName": "sea-ui",
      "libraryDirectory": "dist",
      "styleLibraryDirectory": "dist/style",
      "style": true
    }
  ]
]}
```
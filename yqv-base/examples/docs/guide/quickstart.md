### 快速上手

本节将介绍如何在项目中使用 Yqv-base。

### 引入 Yqv-base

你可以引入整个 Yqv-base，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Yqv-base。

### 完整引入

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import YqvBaseUi from 'yqv-base';
import 'yqv-base/lib/theme-chalk/css/index.css';
import App from './App.vue';

Vue.use(YqvBaseUi);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

以上代码便完成了 Yqv-base 的引入。需要注意的是，样式文件需要单独引入。

接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import { YqButton, YqIcon } from 'element-ui';
import App from './App.vue';

Vue.component(Button.name, YqButton);
Vue.component(Icon.name, YqIcon);
/* 或写为
 * Vue.use(YqButton)
 * Vue.use(YqIcon)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```

完整组件列表和引入方式（完整组件列表以 [components.json](https://github.com/ElemeFE/element/blob/master/components.json) 为准）

```
import Vue from 'vue';
import {''}
```

### 开始使用

至此，一个基于 Vue 和 Element 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。
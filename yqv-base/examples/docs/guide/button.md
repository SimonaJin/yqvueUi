### 按钮组件
常用的操作按钮。

### 基础用法
基础的按钮用法。

<demo-block>
:::slot source
<button-test1></button-test1>
:::

:::slot text
使用type、plain、round和circle属性来定义 Button 的样式。
:::

:::slot highlight
```html
	<yq-button type="info" @click="buttonClick">点击</yq-button>
	<yq-button type="primary" size="large" icon="tick">提交</yq-button>
	<yq-button type="success" size="normal">提交</yq-button>
	<yq-button type="warning" size="small">提交</yq-button>
	<yq-button type="danger" size="mini"  icon="comments" icon-position="right">提交</yq-button>
```
:::
</demo-block>

### 禁用状态
按钮不可用状态。

<demo-block>
:::slot text
你可以使用disabled属性来定义按钮是否可用，它接受一个Boolean值。
:::
</demo-block>

### API

参数 | 说明 | 类型 | 默认值
---|:--:|:--:|---:
type|类型，可选值为 primary info warning danger|string|default
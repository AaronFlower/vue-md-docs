---
category: Components
type: General
title: Button
subtitle: 按钮
---
按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

```html
<template>
    <t-button></t-button>
</template>
```

````javascript
import TButton from 'components/button'

export default {
    components: {
        TButton
    }
}
````

```css
button {
    color: red;
}
```
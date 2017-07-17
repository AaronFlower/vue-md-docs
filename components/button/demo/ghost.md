---
order: 0
title:
  zh-CN: Ghost 按钮
  en-US: Ghost Button
---

## zh-CN

可以将多个 `Button` 放入 `Button.Group` 的容器中---dd。

通过设置 `size` 为 `large` `small` 分别把按钮组合设为大、小尺寸。若不设置 `size`，则尺寸为中。

## en-US

Buttons can be grouped by placing multiple `Button` components into a `Button.Group`.

The `size` can be set to `large`, `small` or left unset resulting in a default size.

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


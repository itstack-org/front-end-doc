(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{443:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("p"),t._m(0),a("p"),t._v(" "),a("p",[t._v("[TOC]")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("前提是使用了"),a("a",{attrs:{href:"https://vue-loader.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-loader"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("整理摘自：https://vue-loader.vuejs.org/zh/guide/scoped-css.html")]),t._v(" "),t._m(2),t._v(" "),t._m(3),a("p",[t._v("转换结果：")]),t._v(" "),t._m(4),t._m(5),t._v(" "),a("p",[t._v("你可以在一个组件中同时使用有 scoped 和非 scoped 样式：")]),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),a("p",[t._v("上述代码将会编译成：")]),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_1-混用本地和全局样式"}},[this._v("1. 混用本地和全局样式")])]),s("li",[s("a",{attrs:{href:"#_2-子组件的根元素"}},[this._v("2. 子组件的根元素")])]),s("li",[s("a",{attrs:{href:"#_3-深度作用选择器"}},[this._v("3. 深度作用选择器")])]),s("li",[s("a",{attrs:{href:"#_4-动态生成的内容"}},[this._v("4.  动态生成的内容")])]),s("li",[s("a",{attrs:{href:"#_5-还有一些留意的"}},[this._v("5. 还有一些留意的")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"vue-scoped-css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-scoped-css","aria-hidden":"true"}},[this._v("#")]),this._v(" vue Scoped CSS")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当 "),s("code",[this._v("<style>")]),this._v(" 标签有 "),s("code",[this._v("scoped")]),this._v(" 属性时，它的 CSS 只作用于当前组件中的元素。这类似于 Shadow DOM 中的样式封装。它有一些注意事项，但不需要任何 polyfill。它通过使用 PostCSS 来实现以下转换：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("scoped")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token style language-css"}},[t._v("\n"),a("span",{attrs:{class:"token selector"}},[t._v(".example")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("color")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("example"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hi"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token style language-css"}},[t._v("\n"),a("span",{attrs:{class:"token selector"}},[t._v(".example[data-v-f3f3eg9]")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("color")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("example"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("data-v-f3f3eg9")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hi"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1-混用本地和全局样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-混用本地和全局样式","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 混用本地和全局样式")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token style language-css"}},[t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("/* 全局样式 */")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("scoped")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token style language-css"}},[t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("/* 本地样式 */")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2-子组件的根元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-子组件的根元素","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. 子组件的根元素")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("使用 "),s("code",[this._v("scoped")]),this._v(" 后，父组件的样式将不会渗透到子组件中。不过一个子组件的根节点会同时受其父组件的 scoped CSS 和子组件的 scoped CSS 的影响。这样设计是为了让父组件可以从布局的角度出发，调整其子组件根元素的样式。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_3-深度作用选择器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-深度作用选择器","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. 深度作用选择器")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果你希望 "),s("code",[this._v("scoped")]),this._v(" 样式中的一个选择器能够作用得“更深”，例如影响子组件，你可以使用 "),s("code",[this._v(">>>")]),this._v(" 操作符：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("scoped")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token style language-css"}},[t._v("\n"),a("span",{attrs:{class:"token selector"}},[t._v(".a >>> .b")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[t._v(".a[data-v-f3f3eg9] .b")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("有些像 Sass 之类的预处理器无法正确解析 "),a("code",[t._v(">>>")]),t._v("。这种情况下你可以使用 "),a("code",[t._v("/deep/")]),t._v(" 或 "),a("code",[t._v("::v-deep")]),t._v(" 操作符取而代之——两者都是 "),a("code",[t._v(">>>")]),t._v(" 的别名，同样可以正常工作。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_4-动态生成的内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-动态生成的内容","aria-hidden":"true"}},[this._v("#")]),this._v(" 4.  动态生成的内容")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("通过 "),s("code",[this._v("v-html")]),this._v(" 创建的 DOM 内容不受 scoped 样式影响，但是你仍然可以通过深度作用选择器来为他们设置样式。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_5-还有一些留意的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-还有一些留意的","aria-hidden":"true"}},[this._v("#")]),this._v(" 5. 还有一些留意的")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("strong",[t._v("Scoped 样式不能代替 class")]),t._v("。考虑到浏览器渲染各种 CSS 选择器的方式，当 "),a("code",[t._v("p { color: red }")]),t._v(" 是 scoped 时 (即与特性选择器组合使用时) 会慢很多倍。如果你使用 class 或者 id 取而代之，比如 "),a("code",[t._v(".example { color: red }")]),t._v("，性能影响就会消除。")]),t._v(" "),a("li",[a("strong",[t._v("在递归组件中小心使用后代选择器!")]),t._v(" 对选择器 "),a("code",[t._v(".a .b")]),t._v(" 中的 CSS 规则来说，如果匹配 "),a("code",[t._v(".a")]),t._v(" 的元素包含一个递归子组件，则所有的子组件中的 "),a("code",[t._v(".b")]),t._v(" 都将被这个规则匹配。")])])}],!1,null,null,null);e.options.__file="006-vue-scoped-css.md";s.default=e.exports}}]);
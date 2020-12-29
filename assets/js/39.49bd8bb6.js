(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{372:function(t,s,a){t.exports=a.p+"assets/img/021-eslint.a256eb6b.png"},428:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#_1-html元素有点击事件提示添加role属性"}},[t._v("1. html元素有点击事件提示添加role属性")])]),n("li",[n("a",{attrs:{href:"#_2-import-react组件报错"}},[t._v("2. import react组件报错")])])])]),n("p"),t._v(" "),n("p",[t._v("[TOC]")]),t._v(" "),n("h1",{attrs:{id:"react中eslint代码检查常见问题解决"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#react中eslint代码检查常见问题解决","aria-hidden":"true"}},[t._v("#")]),t._v(" react中eslint代码检查常见问题解决")]),t._v(" "),n("h2",{attrs:{id:"_1-html元素有点击事件提示添加role属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-html元素有点击事件提示添加role属性","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. html元素有点击事件提示添加role属性")]),t._v(" "),n("p",[t._v("当HTML元素中有点击事件的时候，eslint检查工具会提示要添加role属性来表示元素要表达的意思。")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[t._v("<div\n     onClick={() => {}}\n />\n")])])]),n("p",[t._v("解决办法是添加属性，并设置值"),n("code",[t._v("presentation")]),t._v("：")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[t._v('<div\n     role="presentation"\n     onClick={() => {}}\n />\n')])])]),n("p",[t._v("参考链接：https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md")]),t._v(" "),n("p",[t._v("role属性其他值：\n"),n("code",[t._v("button")]),t._v("、"),n("code",[t._v("link")]),t._v("、"),n("code",[t._v("checkbox")]),t._v("、"),n("code",[t._v("menuitem")]),t._v("、"),n("code",[t._v("menuitemcheckbox")]),t._v("、"),n("code",[t._v("menuitemradio")]),t._v("、"),n("code",[t._v("option")]),t._v("、"),n("code",[t._v("radio")]),t._v("、"),n("code",[t._v("searchbox")]),t._v("、"),n("code",[t._v("switch")]),t._v("、"),n("code",[t._v("textbox")])]),t._v(" "),n("h2",{attrs:{id:"_2-import-react组件报错"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-import-react组件报错","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. import react组件报错")]),t._v(" "),n("p",[n("img",{attrs:{src:a(372),alt:""}})]),t._v(" "),n("p",[t._v("如上图所示，在import引入一个react组件的时候，eslint的"),n("code",[t._v("import/no-unresolved")]),t._v("报错，")]),t._v(" "),n("p",[t._v("查看配置文件.eslintrc.js:")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("rules"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v("'import/no-unresolved'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ignore"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'^@/'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'^umi/'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("p",[t._v("并没有发现什么问题。")]),t._v(" "),n("p",[t._v("后经过网上查找资料：https://stackoverflow.com/questions/41769880/how-to-manually-add-a-path-to-be-resolved-in-eslintrc")]),t._v(" "),n("p",[t._v("在eslint配置文件中：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("settings"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v("'import/resolver'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" node"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" extensions"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'.ts'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'.tsx'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("p",[t._v("经过测试，在这里的"),n("code",[t._v("extensions")]),t._v("添加上"),n("code",[t._v(".jsx")]),t._v("即可：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("settings"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v("'import/resolver'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      node"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        extensions"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'.ts'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'.tsx'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'.jsx'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// paths: ['./src']")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("p",[t._v("或者直接把"),n("code",[t._v("import/resolver")]),t._v("规则注释掉(删除)。")])])}],e=a(0),o=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);o.options.__file="005-react中eslint代码检查常见问题解决.md";s.default=o.exports}}]);
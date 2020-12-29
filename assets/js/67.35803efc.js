(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{512:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("p"),t._m(0),a("p"),t._v(" "),a("p",[t._v("[TOC]")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Google浏览器开发者工具使用：")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Media_queries",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS媒体查询mdn"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.w3cschool.cn/cssref/css3-pr-mediaquery.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("w3c媒体查询"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("media满足CSS3规范的条件下，包含零个或多个表达式，这些表达式描述了媒体特征，最终会被解析为true或false。")]),t._v(" "),t._m(6),t._m(7),t._v(" "),a("p",[t._v("其中：")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("使用媒体查询来判断手机屏幕大小，根据屏幕大小的不同来做不同的布局。")]),t._v(" "),t._m(12),a("p",[t._v("根据选择器的优先级，优先级相同后面覆盖前面的，上面的样式就可以做到根据屏幕宽度的不同显示不同的背景色。")]),t._v(" "),a("p",[t._v("还可以把条件写的更严格一些，这样宽度不同就只能应用一种样式了。")]),t._v(" "),t._m(13),a("p",[t._v("国外一个响应式的网站：https://www.smashingmagazine.com/")]),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("根据不同的显示设备对应做出不同的样式显示，")]),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("http://getbootstrap.com/ 在bootstrap官网上就出现了mobile first 这个词，就是表示手机端开发优先。")]),t._v(" "),a("p",[t._v("推荐手机端有线开发，因为手机端用户多。")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),a("p",[t._v("这样当点击菜单按钮就会实现菜单的显示与隐藏，但这样不好，最好使用JS去切换样式：")]),t._v(" "),t._m(19),a("p",[t._v("这样JS操作的就是CSS类，")]),t._v(" "),t._m(20),t._v(" "),a("p",[t._v("他们的网站 手机访问跟PC电脑访问页面的网站不是同一个。手机一个网站、PC端一个网站")]),t._v(" "),t._m(21),t._v(" "),a("p",[t._v("如果做响应式，代码是很多了，需要做两套代码， 一般只有新闻类网站才是响应式的，因为简单、不复杂。")]),t._v(" "),t._m(22),t._v(" "),a("p",[t._v("历史原因：")]),t._v(" "),a("p",[t._v("最开始web都是给PC端看的， 诺基亚出来后，他有自己的专门语言来编写手机web，当iPhone出来的时候，手机看网页时，是把页面缩放(缩放比例：模拟980px，全世界网站页面宽度在980px左右)，把手机屏幕模拟成电脑端的宽度，当用户想要看内容的时候，自己点击屏幕放大页面浏览.")]),t._v(" "),a("p",[t._v("在chrome浏览器中，打开开发者工具，选择手机端，然后再控制台中输入：")]),t._v(" "),t._m(23),a("p",[t._v("就可以看见手机浏览器模拟了980px的屏幕宽度。可在HTML代码中放入如下代码，即可阻止浏览器缩放：")]),t._v(" "),t._m(24),a("p",[t._v("viewport 视口， 宽度等于设备宽度， 用户缩放：禁止， 初始缩放倍数： 1.0， 最大缩放倍数： 1.0，最小缩放倍数： 1.0")]),t._v(" "),t._m(25),t._v(" "),t._m(26)])},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#手机端页面的做法"}},[t._v("手机端页面的做法")])]),a("li",[a("a",{attrs:{href:"#media-query"}},[t._v("media query")])]),a("li",[a("a",{attrs:{href:"#使用服务来启动一个本地html"}},[t._v("使用服务来启动一个本地html")])]),a("li",[a("a",{attrs:{href:"#使用媒体查询来做手机适配"}},[t._v("使用媒体查询来做手机适配")])]),a("li",[a("a",{attrs:{href:"#响应式先做手机端还是先做pc端："}},[t._v("响应式先做手机端还是先做PC端：")]),a("ul",[a("li",[a("a",{attrs:{href:"#先做手机端叫：mobile-first"}},[t._v("先做手机端叫：mobile first")])]),a("li",[a("a",{attrs:{href:"#先做pc端叫：desktop-first"}},[t._v("先做PC端叫：desktop first")])])])]),a("li",[a("a",{attrs:{href:"#菜单显示与隐藏按钮实现响应式"}},[t._v("菜单显示与隐藏按钮实现响应式")])]),a("li",[a("a",{attrs:{href:"#淘宝、京东网站等网站手机端web跟pc端web是分开的两套网页"}},[t._v("淘宝、京东网站等网站手机端web跟PC端web是分开的两套网页")])]),a("li",[a("a",{attrs:{href:"#真正响应式网站是很少的"}},[t._v("真正响应式网站是很少的")])]),a("li",[a("a",{attrs:{href:"#meta-viewport-禁止设置缩放，解决手机端页面自动缩小页面"}},[t._v("meta viewport 禁止设置缩放，解决手机端页面自动缩小页面")])]),a("li",[a("a",{attrs:{href:"#手机端特点"}},[t._v("手机端特点")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"四、移动端页面-响应式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、移动端页面-响应式","aria-hidden":"true"}},[this._v("#")]),this._v(" 四、移动端页面(响应式)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[s("p",[this._v("模拟手机查看网页，")]),this._v(" "),s("p",[this._v("打开开发者工具 -> 左上角Toggle device toolbar，点击一下按钮。")]),this._v(" "),s("p",[this._v("就可以以手机形式浏览网页，在此页面的右上角有三个点，点击可出现一个菜单，选择"),s("code",[this._v("Add device type")]),this._v("可以选择设备类型，在出现的选项里可以选择实在手机浏览还是在桌面端浏览。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"手机端页面的做法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手机端页面的做法","aria-hidden":"true"}},[this._v("#")]),this._v(" 手机端页面的做法")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[t._v("学会 media query")]),t._v(" "),a("li",[t._v("学会要设计图（没图不做）\n"),a("ol",[a("li",[t._v("实在要做也行，丑可别怪我")])])]),t._v(" "),a("li",[t._v("学会隐藏元素")]),t._v(" "),a("li",[t._v("手机端要加一个 meta\n"),a("code",[t._v('<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">')])]),t._v(" "),a("li",[t._v("手机端的交互方式不一样\n"),a("ol",[a("li",[t._v("没有 hover")]),t._v(" "),a("li",[t._v("有 touch 事件")]),t._v(" "),a("li",[t._v("没有 resize")]),t._v(" "),a("li",[t._v("没有滚动条")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"media-query"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#media-query","aria-hidden":"true"}},[this._v("#")]),this._v(" media query")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- link元素中的CSS媒体查询 --\x3e")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("media")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(max-width: 800px)"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("example.css"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 样式表中的CSS媒体查询 --\x3e")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token style language-css"}},[t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("/*@media (min-width: 320px) and (max-width: 480px) */")]),t._v("\n"),a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token property"}},[t._v("max-width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 600px"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token selector"}},[t._v(".nav")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("display")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当媒体查询为true时，才会应用样式。当媒体查询为false是，"),s("code",[this._v("<link>")]),this._v(" 标签指向的样式表也会加载，但不会应用。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("code",[t._v("max-width: 600px")]),t._v(": 表示显示宽度0~600px都符合条件")]),t._v(" "),a("li",[a("code",[t._v("min-width: 320px")]),t._v(":表示显示宽度大于等于320像素都符合条件，0~319px不符合条件。")]),t._v(" "),a("li",[a("code",[t._v("(min-width: 320px) and (max-width: 480px)")]),t._v("：表示显示宽度大于等于320px并且小于等于480px才符合条件。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用服务来启动一个本地html"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用服务来启动一个本地html","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用服务来启动一个本地html")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[t._v("安装一个服务，这个服务用来启动本地HTML服务")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("~ npm i -g http-server\n\n/usr/local/bin/http-server -> /usr/local/lib/node_modules/http-server/bin/http-server\n/usr/local/bin/hs -> /usr/local/lib/node_modules/http-server/bin/http-server\n+ http-server@0.11.1\nupdated 3 packages in 8.379s\n")])])])]),t._v(" "),a("li",[a("p",[t._v("本地创建一个项目目录，里面新建一个HTML文件，写好代码后保存，终端打开这个项目目录，运行下面命令启动服务：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("~ http-server -c-1\n\nStarting up http-server, serving ./\nAvailable on:\n  http://127.0.0.1:8080\n  http://192.168.43.176:8080\nHit CTRL-C to stop the server\n")])])])]),t._v(" "),a("li",[a("p",[t._v("此时就可以在浏览器中输入"),a("code",[t._v("http://127.0.0.1:8080")]),t._v("来访问页面。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用媒体查询来做手机适配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用媒体查询来做手机适配","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用媒体查询来做手机适配")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token style language-css"}},[t._v("\n  \t"),a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token property"}},[t._v("max-width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 425px"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t\t"),a("span",{attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("background")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \t"),a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token property"}},[t._v("max-width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 375px"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t\t"),a("span",{attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("background")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" orange"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\t\n  \t"),a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token property"}},[t._v("max-width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 320px"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t\t"),a("span",{attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("background")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hello world</div\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token style language-css"}},[t._v("\n  \t"),a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token property"}},[t._v("min-width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 376px"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" and "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token property"}},[t._v("max-width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 425px"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t\t"),a("span",{attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("background")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \t"),a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token property"}},[t._v("min-width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 321px"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" and "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token property"}},[t._v("max-width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 375px"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t\t"),a("span",{attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("background")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" orange"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\t\n  \t"),a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token property"}},[t._v("max-width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 320px"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t\t"),a("span",{attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("background")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hello world</div\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"响应式先做手机端还是先做pc端："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应式先做手机端还是先做pc端：","aria-hidden":"true"}},[this._v("#")]),this._v(" 响应式先做手机端还是先做PC端：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"先做手机端叫：mobile-first"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#先做手机端叫：mobile-first","aria-hidden":"true"}},[this._v("#")]),this._v(" 先做手机端叫：mobile first")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"先做pc端叫：desktop-first"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#先做pc端叫：desktop-first","aria-hidden":"true"}},[this._v("#")]),this._v(" 先做PC端叫：desktop first")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"菜单显示与隐藏按钮实现响应式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#菜单显示与隐藏按钮实现响应式","aria-hidden":"true"}},[this._v("#")]),this._v(" 菜单显示与隐藏按钮实现响应式")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("menu"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("菜单"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("nav"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("标题1"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("标题2"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("标题3"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[t._v("\n    menu"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nav"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("display "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'block'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            nav"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("display "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'none'")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            nav"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("display "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'block'")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token style language-css"}},[t._v("\n    "),a("span",{attrs:{class:"token selector"}},[t._v("#nav.active")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("display")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("menu"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("菜单"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("nav"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("标题1"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("标题2"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("标题3"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[t._v("\n    menu"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        nav"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("classList"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toggle")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'active'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"淘宝、京东网站等网站手机端web跟pc端web是分开的两套网页"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#淘宝、京东网站等网站手机端web跟pc端web是分开的两套网页","aria-hidden":"true"}},[this._v("#")]),this._v(" 淘宝、京东网站等网站手机端web跟PC端web是分开的两套网页")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"真正响应式网站是很少的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#真正响应式网站是很少的","aria-hidden":"true"}},[this._v("#")]),this._v(" 真正响应式网站是很少的")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"meta-viewport-禁止设置缩放，解决手机端页面自动缩小页面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#meta-viewport-禁止设置缩放，解决手机端页面自动缩小页面","aria-hidden":"true"}},[this._v("#")]),this._v(" meta viewport 禁止设置缩放，解决手机端页面自动缩小页面")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[this._v("document"),s("span",{attrs:{class:"token punctuation"}},[this._v(".")]),this._v("documentElement"),s("span",{attrs:{class:"token punctuation"}},[this._v(".")]),this._v("clientWidth\n"),s("span",{attrs:{class:"token number"}},[this._v("980")]),this._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- meta:vp 然后按tab键，即可出来--\x3e")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"手机端特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手机端特点","aria-hidden":"true"}},[this._v("#")]),this._v(" 手机端特点")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[a("p",[t._v("没有 hover")])]),t._v(" "),a("li",[a("p",[t._v("有 touch 事件")]),t._v(" "),a("p",[t._v("两次touch事件，记录两次触摸的位置就可以知道向哪边滑动，有现成的封装库，jQuery .swipe,")]),t._v(" "),a("p",[t._v("不要去监听click事件很少，一般都是滑动事件")])]),t._v(" "),a("li",[a("p",[t._v("没有 resize")]),t._v(" "),a("p",[t._v("无法调整屏幕大小， 浏览器的宽度等于设备宽度。")])]),t._v(" "),a("li",[a("p",[t._v("没有滚动条")]),t._v(" "),a("p",[t._v("手机上会把网页的滚动条隐藏，只有在滑动的时候才会出现，只是做一个提示用。")]),t._v(" "),a("p",[t._v("外观差异巨大。")])]),t._v(" "),a("li",[a("p",[t._v("手机跟PC CSS基本没有区别")])]),t._v(" "),a("li",[a("p",[t._v("手机上没有IE浏览器，能用最新就用最新的技术。")])])])}],!1,null,null,null);e.options.__file="004-移动端页面(响应式).md";s.default=e.exports}}]);
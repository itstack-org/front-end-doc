(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{447:function(e,s,t){"use strict";t.r(s);var a=t(0),r=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"content"},[t("h2",{attrs:{id:"_1-项目介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-项目介绍","aria-hidden":"true"}},[e._v("#")]),e._v(" 1. 项目介绍")]),e._v(" "),t("p",[e._v("本项目是前端技术文档网站，使用的是"),t("code",[e._v("vuepress")]),e._v("的静态网站生成器。")]),e._v(" "),t("h2",{attrs:{id:"_2-环境搭建启动服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-环境搭建启动服务","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. 环境搭建启动服务")]),e._v(" "),t("p",[t("code",[e._v("vuepress")]),e._v("开发需要node8.0以上的版本。")]),e._v(" "),t("p",[e._v("如果没有安装node，可在node官网选择对应操作系统下载安装：https://nodejs.org/zh-cn/")]),e._v(" "),t("p",[e._v("如果你的node版本低，请把node版本升级到8.0以上。")]),e._v(" "),t("p",[e._v("如何升级node：https://segmentfault.com/a/1190000016956077")]),e._v(" "),t("h3",{attrs:{id:"_2-1-安装vuepress"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-安装vuepress","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.1 安装VuePress")]),e._v(" "),t("p",[e._v("全局安装，打开终端，输入如下命令：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("~ npm install -g vuepress@0.14.5 --registry=https://registry.npm.taobao.org/\n\nhttp fetch GET 200 https://registry.npm.taobao.org/caniuse-db/download/caniuse-db-1.0.30000909.tgz 3993ms\n/usr/local/bin/vuepress -> /usr/local/lib/node_modules/vuepress/bin/vuepress.js\n+ vuepress@0.14.5\nremoved 1 package and updated 13 packages in 68.944s\n")])])]),t("h3",{attrs:{id:"_2-2-启动一个服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-启动一个服务","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.2 启动一个服务")]),e._v(" "),t("p",[e._v("打开项目后，终端"),t("code",[e._v("vuepress dev .")]),e._v("：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("~ vuepress dev .\n\n WAIT  Extracting site metadata...\n DONE  [00:34:16] Build 94707d finished in 5175 ms!\n> VuePress dev server listening at http://localhost:8080/\n")])])]),t("h2",{attrs:{id:"_3-打包服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-打包服务","aria-hidden":"true"}},[e._v("#")]),e._v(" 3. 打包服务")]),e._v(" "),t("p",[e._v("首先在"),t("code",[e._v(".vuepress/config.js")]),e._v("文件里面修改仓库名字：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("module.exports = {\n    base: '/front-end-doc/',     // 仓库名字,用于github Pages 部署\n}\n")])])]),t("p",[e._v("如果是github Pages使用购买的域名，那么不需要设置这个参数，否则会出错。")]),e._v(" "),t("p",[e._v("然后在终端使用"),t("code",[e._v("vuepress build .")]),e._v("命令来生成最终项目：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("vuepress build .\n\nWAIT  Extracting site metadata...\n[23:28:24] Compiling Client\n[23:28:24] Compiling Server\n WAIT  Rendering static HTML...\n\n DONE  Success! Generated static files in .vuepress/dist.\n")])])]),t("p",[e._v("生成的最终文件在"),t("code",[e._v(".vuepress/dist")]),e._v("目录中，可把此文件部署到你自己的服务器上")]),e._v(" "),t("h3",{attrs:{id:"_3-1-部署到github-pages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-部署到github-pages","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.1 部署到GitHub Pages")]),e._v(" "),t("p",[e._v("部署到GitHub Pages上的命令写在了"),t("code",[e._v("deploy.sh")]),e._v("文件里面，文件里面需要修改仓库地址。")]),e._v(" "),t("p",[e._v("然后终端使用"),t("code",[e._v("bash deploy.sh")]),e._v("命令来执行脚本完成自动部署。")])])}],!1,null,null,null);r.options.__file="README.md";s.default=r.exports}}]);
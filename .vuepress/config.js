module.exports = {
    title: '前端知识',
    description: '一个总结前端知识的文档网站',
    head: [
        ["link", { rel: "icon", href: "/logo.png" }],   // 添加网站的icon图标
    ],
    // 如果github Pages绑定域名，则需要把base删除，否则域名访问会失败
    // base: '/front-end-doc/',     // 仓库名字,用于github Pages 部署,
    themeConfig: {
        logo: '/logo.png',
        // 导航栏设置
        nav: [
            { text: 'Home', link: '/' },                      // 根路径
            {
                text: 'CSS',
                items: [
                    { text: '基础', link: '/css/base/' },
                    { text: 'CSS深入浅出', link: '/css/depth/' },
                ],
            },
            { text: 'javascript', link: '/javascript/' },
            { text: 'dom', link: '/dom/' },
            { text: 'browser', link: '/browser/' },
            {
                text: '工具',
                items: [
                    {
                        text: 'JS打包工具',
                        items: [
                            {text: 'webpack', link: '/tool/bundle/webpack/'}
                        ]
                    },
                ],
            },
            {
                text: '前端框架',
                items: [
                    { text: 'react', link: '/framework/react/' },
                ],
            },
        ],
        // 侧边栏标题显示的层数
        sidebarDepth: 2,
        // 侧边栏设置
        sidebar: {
            '/javascript/': [
                '',
                {
                    title: 'JS代码执行机制和事件循环',
                    children: [
                        'jsHowWork/',
                        'jsHowWork/JS在浏览器中运行机制和事件循环',
                        'jsHowWork/JS代码在nodejs环境下执行机制和事件循环',
                        'jsHowWork/JS中异步方法',
                    ]
                },
                'regularExpression',
                '001-对象_构造函数_原型链',
                '002-this_call_apply_bind',
                '003-数据类型转换',
                '004-跨域',
                '005-Ajax',
                '006-函数',
                '007-作用域',
            ],
            '/tool/bundle/webpack/': [
                '',
            ],
            '/dom/': [
                '',
                '001-节点的类型',
                '002-节点的关系',
                '003-节点的操作',
                '004-动态集合NodeLIst-HTMLCollection',
                '005-Element',
                '006-Node',
                '007-Element对象',
                '008-document对象',
                '009-事件模型',
                '010-事件种类',
            ],
            '/framework/react/': [
                'react常用语法',
                'react代码片段',
                'react开发遇到的问题',
                '',
            ],
            '/browser/': [
                '',
                '001-URL相关操作',
            ],
            '/css/base/': [
                '',
                '001-Transitions-Transforms-Animation',
                '002-定位',
                '003-浏览器兼容',
                '004-normalize-reset',
            ],
            '/css/depth/': [
                '',
                '001-堆叠上下文',
                '002-icon全解',
                '003-移动端页面(响应式)',
                '004-Flex布局',
                '005-布局套路',
                '006-BFC',
            ],
        },
    },
    // markdown: {
    //     lineNumbers: true,          // 代码块显示行号
    // },
}
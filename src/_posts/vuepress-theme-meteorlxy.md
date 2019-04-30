---
category: 前端
tags:
  - Vuepress
date: 2019-04-28
title: 利用vuepress + vuepress-theme-meteorlxy 主题搭建博客!
vssue-title: 利用vuepress + vuepress-theme-meteorlxy 主题搭建博客
---
利用vuepress + vuepress-theme-meteorlxy 主题搭建博客


## 安装
创建一个新项目 `my-blog`
```SH
mkdir my-blog
cd my-blog
```

安装`vuepress`并`vuepress-theme-meteorlxy`记得添加next标签以安装1.x版本：
```SH
npm install vuepress@next vuepress-theme-meteorlxy@next
```

创建`src/_posts` 等 Vuepress 的目录和配置文件。项目的结构如下：
```SH
my-blog
├── src # 主文件夹
│   ├── .vuepress # 配置文件夹
│   │   ├── components # 自定义页面组件
│   │   ├── public # 放置静态文件，比如图片
│   │   ├── styles # 样式文件
│   │   └── config.js # vuepress 配置文件
│   ├── _posts # 文章文件夹
│   │   ├── xxx.md
│   │    ...
│   └── about # 自定义页面文件夹
│       ├── index.md
│       ...
└── package.json
```

::: tip
`src/index.md`或`src/README.md`不是必需品。此主题将为您自动添加主页。
:::


将`script`字段添加到`package.json`：
```SH
{
  "scripts": {
    "dev": "vuepress dev src",
    "build": "vuepress build src --dest dist"
  }
}
```


### 配置主题
Config Vuepress和这个主题 `src/.vuepress/config.js` ：
<details>
<summary>单击以展开示例配置</summary>
```SH
module.exports = {
    theme: 'meteorlxy',
    title: '❤GaoSir 的个人博客',
    description: 'GaoSir 的个人博客',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    head: [
        ['link', {
            rel: 'icon',
            href: '/images/favicon.ico'
        }]
    ],
    // 主题设置
    themeConfig: {
        // 主题语言
        lang: Object.assign(require('vuepress-theme-meteorlxy/lib/langs/zh-CN'), {
            prevPost: '上一篇文章',
            nextPost: '下一篇文章',
            notFound: '哎呀，页面跑丢了！'
        }),
        // 个人信息设置
        personalInfo: {
            nickname: 'GaoSir',
            description: '你若想要得到，就别只是期望。<br/> 人生短暂，经不起等待。',
            email: 'gaosir_801@163.com',
            location: '深圳',
            avatar: '/images/tx.jpg',
            sns: {
                github: {
                    account: 'Gaosirs',
                    link: 'https://github.com/gaosirs',
                }
            }
        },
        // 头部设置
        header: {
            background: {
                useGeo: true,
            },
            showTitle: true,
        },
        // 帖子的上次更新时间
        lastUpdated: true,
        // 导航栏设置
        nav: [{
                text: '首页',
                link: '/',
                exact: true
            },
            {
                text: '文章',
                link: '/posts/',
                exact: false
            },
            {
                text: '博客园',
                link: 'https://www.cnblogs.com/gaosirs',
                exact: false
            },
            {
                text: '关于我',
                link: '/about/',
                exact: false
            },
        ],
        // 评论设置
        comments: {
            platform: 'github',
            owner: 'xxx',
            repo: 'xxx',
            clientId: 'xxx',
            clientSecret: 'xxx',
            autoCreateIssue: process.env.NODE_ENV !== 'development'
        },
        // 分页配置
        pagination: {
            perPage: 5
        }
    }
}
```
</details>






运行`script`以生成您的博客网站：
```SH
# develop
npm run dev
# build
npm run build
```

### 写第一篇帖子   
```SH
---
category: hello
tags:
  - world
date: 2019-04-28
title: Hello, world
vssue-title: Hello, world
---

This is my first post.

The content above `more` is the excerpt, which will be displayed in the posts list.

The content below `more` will only be displayed when viewing this post, and will not be displayed in the posts list.
```



### 最终效果
![avatar](/Blog/images/details.png)


## 参考
* [https://vuepress-theme-meteorlxy.meteorlxy.cn/](https://vuepress-theme-meteorlxy.meteorlxy.cn/)
* [https://v1.vuepress.vuejs.org/zh/](https://v1.vuepress.vuejs.org/zh/)
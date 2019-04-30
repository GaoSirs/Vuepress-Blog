module.exports = {
    theme: 'meteorlxy',
    title: '❤GaoSir 的个人博客',
    description: 'GaoSir 的个人博客',
    base: '/Blog/',
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
            avatar: '/Blog/images/tx.jpg',
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
            owner: 'GaoSirs',
            repo: 'Vuepress-Blog',
            clientId: '02a7a5006e86d2573e7e',
            clientSecret: '245cc5034afc54d1d99a93051d9092c3465bf358',
            autoCreateIssue: process.env.NODE_ENV !== 'development'
        },

        // 分页配置
        pagination: {
            perPage: 5
        }
    }
}

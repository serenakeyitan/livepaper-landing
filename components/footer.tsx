import { Logo } from '@/components/logo'
import Link from 'next/link'

const links = [
    {
        group: '产品',
        items: [
            {
                title: '功能介绍',
                href: '#',
            },
            {
                title: '定价方案',
                href: '#',
            },
            {
                title: '更新日志',
                href: '#',
            },
            {
                title: 'API 文档',
                href: '#',
            },
        ],
    },
    {
        group: '资源',
        items: [
            {
                title: '使用指南',
                href: '#',
            },
            {
                title: '视频教程',
                href: '#',
            },
            {
                title: '博客',
                href: '#',
            },
            {
                title: '研究案例',
                href: '#',
            },
        ],
    },
    {
        group: '公司',
        items: [
            {
                title: '关于我们',
                href: '#',
            },
            {
                title: '联系我们',
                href: '#',
            },
            {
                title: '隐私政策',
                href: '#',
            },
            {
                title: '服务条款',
                href: '#',
            },
        ],
    },
]

export default function FooterSection() {
    return (
        <footer className="border-b bg-white pt-20 dark:bg-transparent">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-12 md:grid-cols-5">
                    <div className="md:col-span-2">
                        <Link
                            href="/"
                            aria-label="go home"
                            title="返回首页"
                            className="block size-fit">
                            <Logo />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:col-span-3">
                        {links.map((link, index) => (
                            <div
                                key={index}
                                className="space-y-4 text-sm">
                                <span className="block font-medium">{link.group}</span>
                                {link.items.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        title={item.title}
                                        className="text-muted-foreground hover:text-primary block duration-150">
                                        <span>{item.title}</span>
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 grid gap-8 border-t py-6 md:grid-cols-2">
                    <div className="space-y-4">
                        <span className="block text-sm font-medium">联系方式</span>
                        <div className="space-y-2 text-sm">
                            <div className="text-muted-foreground">
                                邮箱：<a href="mailto:support@kael.ai" className="hover:text-primary" title="发送邮件至 support@kael.ai">support@kael.ai</a>
                            </div>
                            <div className="flex items-center gap-4 text-muted-foreground">
                                <span>Twitter / 微信公众号</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-end justify-between gap-6 md:justify-end">
                        <span className="text-muted-foreground text-sm">© {new Date().getFullYear()} Kael, All rights reserved</span>
                        <div className="flex gap-4">
                            <Link
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="X/Twitter"
                                title="前往 Kael 的 Twitter"
                                className="text-muted-foreground hover:text-primary block">
                                <svg
                                    className="size-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

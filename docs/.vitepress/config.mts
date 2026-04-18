import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'XiaoYe API',
  description: '完美兼容所有主流 AI 编程助手',
  lang: 'zh-CN',
  themeConfig: {
    siteTitle: 'XiaoYe API',
    nav: [
      { text: '首页', link: '/' },
      { text: '获取 Key', link: 'https://ai.xiaoye.io', target: '_blank' }
    ],
    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: 'Windows', link: '/quickstart-windows' },
          { text: 'macOS / Linux', link: '/quickstart-mac' }
        ]
      },
      {
        text: 'CLI 工具 (终端)',
        items: [
          { text: 'Claude Code', link: '/claude-code' },
          { text: 'OpenCode', link: '/opencode' },
          { text: 'Aider', link: '/aider' }
        ]
      },
      {
        text: 'VS Code 插件',
        items: [
          { text: 'Cursor', link: '/cursor' },
          { text: 'Trae', link: '/trae' },
        ]
      },
      {
        text: '独立客户端',
        items: [
          { text: 'Cherry Studio', link: '/cherry-studio' },
          { text: 'Chatbox', link: '/chatbox' },
          { text: 'NextChat', link: '/nextchat' }
        ]
      },
      {
        text: 'Web 框架 & 知识库',
        items: [
          { text: 'LobeChat', link: '/lobechat' },
          { text: 'LibreChat', link: '/librechat' },
          { text: 'AnythingLLM', link: '/anythingllm' },
          { text: 'Dify', link: '/dify' },
          { text: 'FastGPT', link: '/fastgpt' }
        ]
      }
    ],
    outline: {
      level: [2, 3],
      label: '页面导航'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    search: {
      provider: 'local'
    },
    footer: {
      copyright: 'Copyright © 2024-present XiaoYe API'
    }
  }
})

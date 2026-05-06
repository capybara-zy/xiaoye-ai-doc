import { defineConfig } from 'vitepress'

const siteUrl = 'https://ai-doc.xiaoye.io'
const siteName = 'XiaoYe API'
const siteDescription = 'XiaoYe API 提供 OpenAI 兼容接口聚合管理，支持 Claude Code、Codex、Cursor、Trae、Cherry Studio、Dify、LobeChat 等主流 AI 编程助手和客户端。'

const pageDescriptions: Record<string, string> = {
  'index.md': siteDescription,
  'quickstart-windows.md': 'Windows 用户快速配置 XiaoYe API、Node.js、Git for Windows 与 Claude Code，完成 AI 编程助手接入。',
  'quickstart-mac.md': 'macOS 和 Linux 用户快速配置 XiaoYe API、Node.js 与常用 AI 编程工具，开箱接入 OpenAI 兼容接口。',
  'claude-code.md': 'Claude Code 接入 XiaoYe API 教程，包含安装、Anthropic Base URL、环境变量、settings.json、MCP 与常见问题。',
  'codex.md': 'OpenAI Codex CLI 接入 XiaoYe API 配置指南，包含 config.toml、gpt-5.5 默认模型、MCP、沙箱参数与 FAQ。',
  'opencode.md': 'OpenCode 接入 XiaoYe API 教程，配置自定义服务商、Claude/GPT 模型与 OpenAI 兼容 Base URL。',
  'aider.md': 'Aider 配置 XiaoYe API 指南，包含 OPENAI_API_KEY、OPENAI_API_BASE、.aider.conf.yml 与推荐模型。',
  'cursor.md': 'Cursor 接入 XiaoYe API 教程，覆盖 Claude Code 插件、环境变量、原生 Chat/Composer Base URL 与模型配置。',
  'trae.md': 'Trae 接入 XiaoYe API 教程，配置 Claude Code 官方插件、环境变量和常见连接问题。',
  'cherry-studio.md': 'Cherry Studio 配置 XiaoYe API 指南，接入 OpenAI 兼容接口、自定义模型与 API Key。',
  'chatbox.md': 'Chatbox 配置 XiaoYe API 指南，适用于桌面端、移动端和 Web 版的 OpenAI 兼容接口接入。',
  'nextchat.md': 'NextChat 配置 XiaoYe API 指南，支持 Web 与桌面客户端接入 OpenAI 兼容 Base URL。',
  'lobechat.md': 'LobeChat 接入 XiaoYe API 配置指南，包含在线版、Vercel 部署和 OpenAI 兼容接口设置。',
  'librechat.md': 'LibreChat 接入 XiaoYe API 配置指南，支持多用户、多模型聊天平台的 OpenAI 接口配置。',
  'anythingllm.md': 'AnythingLLM 配置 XiaoYe API 指南，适用于本地知识库、RAG 检索和多模型对话场景。',
  'dify.md': 'Dify 接入 XiaoYe API 教程，配置 OpenAI 兼容模型供应商，用于工作流、聊天机器人和知识库应用。',
  'fastgpt.md': 'FastGPT 接入 XiaoYe API 教程，配置 OpenAI 兼容模型和企业知识库问答场景。'
}

function pageUrl(page: string) {
  const route = page
    .replace(/(^|\/)index\.md$/, '$1')
    .replace(/\.md$/, '')
  return `${siteUrl}/${route}`.replace(/\/+$/, '/')
}

export default defineConfig({
  title: siteName,
  description: siteDescription,
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: siteUrl
  },
  head: [
    ['meta', { name: 'keywords', content: 'XiaoYe API,OpenAI API,Claude Code,Codex,Cursor,Trae,Cherry Studio,Dify,LobeChat,AI 编程助手,OpenAI 兼容接口' }],
    ['meta', { name: 'author', content: siteName }],
    ['meta', { name: 'robots', content: 'index,follow' }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }],
    ['meta', { property: 'og:site_name', content: siteName }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteName,
      url: siteUrl,
      description: siteDescription,
      inLanguage: 'zh-CN'
    })]
  ],
  transformPageData(pageData) {
    const description = pageDescriptions[pageData.relativePath]
    if (description) {
      pageData.description = description
    }
  },
  transformHead({ page, title, description }) {
    const url = pageUrl(page)
    return [
      ['link', { rel: 'canonical', href: url }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }]
    ]
  },
  themeConfig: {
    siteTitle: siteName,
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
          { text: 'Codex', link: '/codex' },
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

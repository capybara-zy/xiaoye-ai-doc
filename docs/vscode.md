# VS Code 插件总览

VS Code 是目前最流行的代码编辑器之一，通过安装 AI 插件可以获得强大的 AI 编程能力。本页面汇总了与XiaoYe API 兼容的主流 VS Code 插件。

## 插件对比

| 插件 | 特点 | 推荐指数 |
|------|------|----------|
| [Roo Code](/roo-code) | 功能全面，支持多种 AI 模型 | ⭐⭐⭐⭐⭐ |
| [Cline](/cline) | 自主执行任务，支持文件操作 | ⭐⭐⭐⭐⭐ |
| [Continue.dev](/continue) | 轻量级，代码补全出色 | ⭐⭐⭐⭐ |
| [CodeX](/codex) | 简洁易用，适合新手 | ⭐⭐⭐⭐ |

## 快速选择指南

- **想要功能最全面** → [Roo Code](/roo-code)
- **想要 AI 自主完成任务** → [Cline](/cline)
- **想要代码自动补全** → [Continue.dev](/continue)
- **刚入门 AI 编程** → [CodeX](/codex)

## 通用配置说明

所有插件均支持 OpenAI 兼容接口，通用配置参数：

| 参数 | 值 |
|------|-----|
| API Provider | OpenAI Compatible / OpenAI |
| Base URL | `https://ai.xiaoye.io/v1` |
| API Key | `sk-你的Key` |
| 推荐模型 | `claude-sonnet-4-6` |

::: tip
安装任意插件前，建议先完成 [Claude Code CLI 配置](/claude-code)，方便统一管理 Key。
:::

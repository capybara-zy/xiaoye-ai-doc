﻿# Windows 快速开始

本页面帮助 Windows 用户以最快速度完成环境搭建，开始使用XiaoYe API。

## 前置安装

### 1. 安装 Node.js

前往 [Node.js 官网](https://nodejs.org) 下载 LTS 版本（v18 或 v20+），安装时保持默认选项。

安装完毕后打开 PowerShell 验证：

```powershell
node --version   # 应显示 v18+ 或 v20+
npm --version
```

### 2. 安装 Git for Windows

::: warning ⚠️ 这一步是必须的！
Claude Code 等 CLI 工具在 Windows 上依赖 Git，不安装会导致无法正常运行。
:::

- 👉 **国内镜像（推荐，速度快）**：[Git-2.47.1-64-bit.exe（npmmirror 镜像）](https://registry.npmmirror.com/binary.html?path=git-for-windows/v2.47.1.windows.1/)
- 👉 **官方地址（备用）**：[https://git-scm.com/downloads/win](https://git-scm.com/downloads/win)

下载后运行安装程序，保持所有默认选项点击 Next 即可完成安装。

### 3. 获取 API Key

1. 前往 [XiaoYe API控制台](https://ai.xiaoye.io) 注册账号
2. 前往 **令牌页面** 点击「添加令牌」
3. 输入名称，分组选择 `cc5` 或 `cc7`（Claude 模型）/ `gpt`（GPT 模型）
4. 直接提交，复制生成的 Key（格式为 `sk-xxxx`）

## 推荐工具

| 工具 | 类型 | 推荐指数 |
|------|------|----------|
| Claude Code | 终端 CLI | ⭐⭐⭐⭐⭐ |
| Cursor | AI 编辑器 | ⭐⭐⭐⭐⭐ |
| Roo Code | VS Code 插件 | ⭐⭐⭐⭐ |
| Cherry Studio | 桌面客户端 | ⭐⭐⭐⭐ |

::: tip
💡 使用 VS Code / Cursor / Trae 插件前，请先完成下方 Claude Code CLI 安装与配置！插件依赖本地 CLI 运行。
:::

## Claude Code 极速配置（30 秒）

### 方式一：一键配置（推荐）

```powershell
# 1. 安装 Claude Code CLI
npm install -g @anthropic-ai/claude-code

# 2. 一键配置（安装好 CLI 后运行）
npx timesniper-api

# 3. 启动
claude
```

### 方式二：手动配置

找到配置文件 `C:\Users\你的用户名\.claude\settings.json`（没有就新建）

填入以下内容，将 `sk-你的Key` 替换为你的 API Key，保存：

```json
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "sk-你的Key",
    "ANTHROPIC_BASE_URL": "https://ai.xiaoye.io",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1"
  }
}
```

重新打开终端窗口，运行 `claude` 即可

::: info
✅ CLI 配置完成后，再去 [VS Code 插件教程](/roo-code) 或 [Cursor 教程](/cursor) 安装对应插件即可直接使用，无需在插件里重复配置 Key。
:::

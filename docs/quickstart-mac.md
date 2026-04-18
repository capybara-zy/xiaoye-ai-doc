# macOS / Linux 快速开始

本页面帮助 macOS 和 Linux 用户以最快速度完成环境搭建，开始使用XiaoYe API。

## 前置安装

### 1. 安装 Node.js

推荐使用 nvm 进行版本管理：

```bash
# 安装 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

# 安装 Node.js LTS
nvm install --lts
nvm use --lts

# 验证
node --version   # 应显示 v18+ 或 v20+
```

### 2. 获取 API Key

1. 前往 [XiaoYe API控制台](https://ai.xiaoye.io) 注册账号
2. 前往 **令牌页面** 点击「添加令牌」
3. 输入名称，按使用需求选择 **Claude** 或 **GPT** 对应分组
4. 直接提交，复制生成的 Key（格式为 `sk-xxxx`）

::: tip 📌 两种 Base URL，用对才不 404
- **Claude Code / VS Code 插件**（Anthropic 协议）：`https://ai.xiaoye.io` — **不要加 `/v1`**
- **其他 OpenAI 兼容客户端**（Chatbox / Cursor 原生 Chat / LobeChat 等）：`https://ai.xiaoye.io/v1`
:::

## 推荐工具

| 工具 | 类型 | 推荐指数 |
|------|------|----------|
| Claude Code | 终端 CLI | ⭐⭐⭐⭐⭐ |
| OpenCode | 终端 CLI | ⭐⭐⭐⭐ |
| Cursor | AI 编辑器 | ⭐⭐⭐⭐⭐ |
| Trae | AI 编辑器 | ⭐⭐⭐⭐ |
| Cherry Studio | 桌面客户端 | ⭐⭐⭐⭐ |
| Chatbox | 桌面/移动客户端 | ⭐⭐⭐⭐ |

## Claude Code 配置

### 1. 安装 CLI

```bash
npm install -g @anthropic-ai/claude-code
```

### 2. 写入配置

编辑 `~/.claude/settings.json`（没有就新建），填入以下内容：

```json
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "sk-你的Key",
    "ANTHROPIC_BASE_URL": "https://ai.xiaoye.io",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1"
  }
}
```

### 3. 启动

保存后重新打开终端，运行 `claude` 即可

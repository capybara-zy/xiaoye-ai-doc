# OpenCode 接入教程

OpenCode 是一款基于 Go 的开源免费命令行编程工具 (CLI)，核心优势在于打破模型限制——你可以同时接入 Claude、GPT、Gemini 等模型自由切换。内置基于 Bubble Tea 的流畅 TUI 体验和 LSP 代码智能。

## 前置条件

- 前往 [XiaoYe API控制台](https://ai.xiaoye.io) 注册并获取 API Key
- 安装 Node.js 18+ (npm 方式) 或 bash (脚本方式)

## 1. 安装

macOS / Linux：

```bash
curl -fsSL https://opencode.ai/install | bash
```

NPM 安装（全平台，推荐 Windows）：

```bash
npm i -g opencode-ai@latest
```

macOS Homebrew 桌面客户端：

```bash
brew install --cask opencode-desktop
```

## 2. API 配置

### 步骤 1：注册自定义服务商

安装后先不要启动 OpenCode，在终端执行：

```bash
opencode auth login
```

在服务商列表中选择 **other**（最下面，可搜索），然后：

- **Provider ID**：输入 `xiaoyeapi`（后续配置需一致）
- **API Key**：输入从 [XiaoYe API控制台](https://ai.xiaoye.io) 获取的 Key

### 步骤 2：修改配置文件

编辑 `~/.config/opencode/opencode.json`（Windows: `C:\Users\用户名\.config\opencode\opencode.json`）：

```json
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "xiaoyeapi": {
      "npm": "@ai-sdk/anthropic",
      "name": "XiaoYe API",
      "options": {
        "baseURL": "https://ai.xiaoye.io/v1"
      },
      "models": {
        "claude-opus-4-6": { "name": "claude opus 4.6" },
        "claude-sonnet-4-5": { "name": "claude-sonnet-4-5" }
      }
    },
    "xiaoyeapi-gpt": {
      "npm": "@ai-sdk/openai",
      "name": "XiaoYe API-GPT",
      "options": {
        "baseURL": "https://ai.xiaoye.io/v1",
        "apiKey": "sk-你的GPT分组Key"
      },
      "models": {
        "gpt-4o": { "name": "gpt-4o" }
      }
    }
  }
}
```

::: warning
- `"xiaoyeapi"` 必须和步骤 1 输入的 Provider ID 完全一致。
- `baseURL` 必须以 `/v1` 结尾。
- 想同时使用 GPT 模型需另建服务商条目。
:::

### 步骤 3：启动

重启终端后运行 `opencode`，输入 `/models` 选择模型即可。

## 使用技巧

- 利用会话管理保存和切换不同项目的对话
- 在 models 中配置多个模型，按需切换
- 善用 LSP 集成获取代码智能提示

## 常见问题与异常处理 (FAQ)

| 错误 | 原因 | 解决方案 |
|------|------|----------|
| 401 Unauthorized | API Key 错误或为空 | 前往 [XiaoYe API控制台](https://ai.xiaoye.io) 重新获取密钥 |
| 404 Not Found | 接口地址格式错误 | 确认 Base URL 是否为 `https://ai.xiaoye.io/v1` |
| 429 Too Many Requests | 请求频繁或额度耗尽 | 等待冷却或前往 [控制台](https://ai.xiaoye.io) 充值 |
| 连接超时 / Network Error | 网络或代理冲突 | 检查代理/VPN，确认 URL 无空格 |
| SSE 流式输出乱码 | 端点类型不匹配 | 将端点类型改为 OpenAI 或 OpenAI-Response |

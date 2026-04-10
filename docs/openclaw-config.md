# OpenClaw 配置模板

本页面提供各种场景下的 OpenClaw 配置模板，复制后按需修改即可。

## 基础模板

最简配置，适合大多数场景：

```json
{
  "apiKey": "sk-你的Key",
  "baseURL": "https://ai.xiaoye.io/v1",
  "model": "claude-sonnet-4-6"
}
```

## Claude 模型模板

使用 Claude 系列模型：

```json
{
  "apiKey": "sk-你的Key",
  "baseURL": "https://ai.xiaoye.io/v1",
  "model": "claude-sonnet-4-6",
  "maxTokens": 8192,
  "temperature": 0.7,
  "systemPrompt": "你是一个专业的编程助手。"
}
```

## GPT 模型模板

使用 GPT 系列模型：

```json
{
  "apiKey": "sk-你的Key",
  "baseURL": "https://ai.xiaoye.io/v1",
  "model": "gpt-4o",
  "maxTokens": 4096,
  "temperature": 0.5
}
```

## 多模型轮询模板

自动在多个模型间切换：

```json
{
  "apiKey": "sk-你的Key",
  "baseURL": "https://ai.xiaoye.io/v1",
  "autoConnect": true,
  "preferredModels": [
    "claude-sonnet-4-6",
    "claude-opus-4-5",
    "gpt-4o",
    "gpt-4o-mini"
  ],
  "fallbackEnabled": true
}
```

## 配置文件位置

| 系统 | 路径 |
|------|------|
| Windows | `C:\Users\用户名\.openclaw\config.json` |
| macOS | `~/.openclaw/config.json` |
| Linux | `~/.openclaw/config.json` |

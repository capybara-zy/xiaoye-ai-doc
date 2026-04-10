# OpenClaw（已跑通 · AI 自动接入）

本页面适用于已成功运行过 OpenClaw 的用户，介绍如何使用 AI 自动接入功能。

## AI 自动接入简介

OpenClaw 支持通过 AI 自动检测并配置最优接入方式，无需手动指定模型和参数。

## 启用自动接入

在配置文件中开启 `autoConnect` 选项：

```json
{
  "apiKey": "sk-你的Key",
  "baseURL": "https://ai.xiaoye.io/v1",
  "autoConnect": true,
  "preferredModels": [
    "claude-sonnet-4-6",
    "claude-opus-4-5",
    "gpt-4o"
  ]
}
```

## 自动接入工作原理

1. OpenClaw 启动时自动 ping 各模型端点
2. 根据响应速度和可用性自动选择最优模型
3. 在会话中动态切换，保证最佳体验

## 手动触发自动接入

在 OpenClaw 会话中运行：

```
/auto-connect
```

## 查看当前接入状态

```
/status
```

输出示例：

```
✅ 已连接：claude-sonnet-4-6
⚡ 延迟：142ms
🔗 端点：https://ai.xiaoye.io/v1
```

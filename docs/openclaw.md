# OpenClaw 配置指南（首次安装）

OpenClaw 是一款强大的终端 AI 编程工具，本页面面向首次安装的用户。

## 前置要求

- 已安装 Node.js v18+
- 已获取XiaoYe API Key（格式 `sk-xxxx`）

## 安装 OpenClaw

```bash
npm install -g openclaw
```

验证安装：

```bash
openclaw --version
```

## 首次配置

运行初始化向导：

```bash
openclaw init
```

按照提示依次输入：

1. **API Key**：填入你的 `sk-xxxx`
2. **Base URL**：填入 `https://ai.xiaoye.io/v1`
3. **默认模型**：推荐选择 `claude-sonnet-4-6`

## 启动

```bash
openclaw
```

::: tip
首次启动后，OpenClaw 会自动测试连接，显示 `✅ 连接成功` 表示配置正确。
:::

## 常见问题

**安装失败**

检查 Node.js 版本是否为 v18+：
```bash
node --version
```

**连接失败**

确认 Base URL 为 `https://ai.xiaoye.io/v1`（注意末尾有 `/v1`）。

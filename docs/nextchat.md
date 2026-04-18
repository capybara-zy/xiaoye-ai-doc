# NextChat 配置指南

NextChat（原 ChatGPT-Next-Web）是一款优秀的开源 AI 客户端，支持 Web 部署和桌面客户端。

## 下载 / 访问

- **桌面版**：前往 [NextChat GitHub](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web/releases) 下载
- **Web 版**：访问 [app.nextchat.dev](https://app.nextchat.dev)

## 配置XiaoYe API

1. 打开 NextChat
2. 点击左下角 **设置**（齿轮图标）
3. 找到 **API 设置** 部分
4. 填入以下信息：
   - **接口地址 (API Endpoint)**: `https://ai.xiaoye.io`
   - **API Key**: `sk-你的Key`
5. 点击 **保存**

## 选择模型

在设置中的 **自定义模型** 字段填入你需要的模型名，例如：

```
claude-opus-4-7,claude-opus-4-6,claude-sonnet-4-6,gpt-5.4,gpt-5.3-codex
```

保存后，在对话页面点击模型名称即可切换。

## 特色功能

- **面具（Mask）**：预设系统提示词，快速切换不同 AI 角色
- **插件**：支持联网搜索等扩展功能
- **同步**：支持 WebDAV、GitHub Gist 等方式同步配置
- **PWA**：Web 版可安装为本地应用

::: tip
NextChat 的接口地址不需要加 `/v1`，填入 `https://ai.xiaoye.io` 即可。
:::

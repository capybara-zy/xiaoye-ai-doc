# Chatbox 配置指南

Chatbox 是一款跨平台 AI 客户端，界面简洁易用，全端覆盖 Windows / macOS / Linux / iOS / Android / Web，国内用户使用广泛。

## 下载 / 访问

- **桌面版**：前往 [Chatbox 官网](https://chatboxai.app/zh) 下载 Windows / macOS / Linux 安装包
- **移动版**：在 App Store 或各大安卓应用市场搜索 **Chatbox AI**
- **网页版**：访问 [web.chatboxai.app](https://web.chatboxai.app) 免安装直接使用

## 配置XiaoYe API

1. 打开 Chatbox
2. 点击左下角 **设置**（齿轮图标）
3. 进入 **模型提供方** 设置
4. 在 **模型提供方** 下拉中选择 **添加自定义提供方**（或直接选择 **OpenAI API 兼容**）
5. 填入以下信息：
   - **名称**: `XiaoYe API`
   - **API 域名 / API Host**: `https://ai.xiaoye.io`
   - **API 路径 / API Path**: `/v1/chat/completions`（默认即可）
   - **API 密钥 / API Key**: `sk-你的Key`
6. 点击 **保存**

## 选择模型

1. 回到主界面，点击顶部模型选择下拉框
2. 在 **模型** 字段填入你需要使用的模型名，例如：
   - `claude-opus-4-7`
   - `claude-opus-4-6`
   - `claude-sonnet-4-6`
   - `gpt-5.4`
   - `gpt-5.3-codex`
3. 保存后即可开始对话

::: tip
如果下拉列表中没有看到对应模型，点击 **自定义模型** 手动添加模型名称即可。
:::

## 特色功能

- **多端同步**：桌面、移动、Web 登录同一账号可同步会话
- **图像理解**：在对话中直接上传图片交给视觉模型分析
- **文件与文档分析**：支持上传 PDF、Word、Excel、代码文件等进行总结与问答
- **联网搜索**：可接入搜索服务商（Bing / Tavily 等）让模型获取最新资讯
- **Artifacts 预览**：HTML / SVG / Mermaid 等内容可实时渲染预览
- **Prompt 搭子 / 模板**：保存常用提示词，一键复用
- **本地存储**：对话记录默认保存在本地，隐私可控

## 常见问题

- **提示 401 / Key 无效**：确认 API Key 正确，且 API 域名填写为 `https://ai.xiaoye.io`
- **模型无响应**：检查所选模型名是否与 XiaoYe API 支持的模型 ID 完全一致
- **移动端无法连接**：确认当前网络能正常访问 `ai.xiaoye.io`，必要时关闭代理或切换网络

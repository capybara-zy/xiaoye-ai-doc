# LobeChat 配置指南

LobeChat 是一款功能强大的开源 AI 聊天框架，支持多模态、插件扩展和知识库等高级功能。

## 部署方式

### 方式一：使用官方在线版

访问 [chat.lobehub.com](https://chat.lobehub.com)，无需部署直接使用。

### 方式二：一键部署到 Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/lobehub/lobe-chat)

### 方式三：Docker 部署

```bash
docker run -d -p 3210:3210 lobehub/lobe-chat
```

## 配置XiaoYe API

1. 打开 LobeChat
2. 点击左下角 **设置**（齿轮图标）
3. 进入 **语言模型** → **OpenAI**
4. 填入以下信息：
   - **API Key**: `sk-你的Key`
   - **API 代理地址**: `https://ai.xiaoye.io/v1`
5. 开启 **使用自定义端点**
6. 点击 **保存**

## 自定义模型列表

在 **模型列表** 中点击 **+** 添加自定义模型：

```
claude-sonnet-4-6
claude-opus-4-5
gpt-4o
gpt-4o-mini
```

## 特色功能

- **知识库**：上传文档，让 AI 基于你的资料回答
- **插件系统**：联网搜索、代码执行、图像生成等
- **多模态**：支持图片、文件输入
- **助手市场**：丰富的预设 AI 助手角色

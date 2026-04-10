# Dify 配置指南

Dify 是一款企业级 AI 应用开发平台，可以快速搭建 AI 工作流、聊天机器人和知识库应用。

## 部署方式

### Docker 快速部署

```bash
git clone https://github.com/langgenius/dify.git
cd dify/docker
docker compose up -d
```

访问 `http://localhost` 完成初始化设置。

### 使用官方云端版

访问 [cloud.dify.ai](https://cloud.dify.ai) 注册并直接使用。

## 配置XiaoYe API

1. 打开 Dify，进入 **设置** → **模型提供商**
2. 找到 **OpenAI-API-compatible** 或 **OpenAI**
3. 点击 **添加模型**
4. 填入以下信息：
   - **API Key**: `sk-你的Key`
   - **API Base URL**: `https://ai.xiaoye.io/v1`
   - **模型名称**: `claude-sonnet-4-6`
5. 点击 **保存**

## 创建应用

### 聊天机器人

1. 点击 **创建应用** → **聊天助手**
2. 在 **模型** 处选择刚配置的XiaoYe API
3. 配置系统提示词
4. 点击 **发布**

### 工作流

1. 点击 **创建应用** → **工作流**
2. 拖拽节点构建 AI 工作流
3. 在 LLM 节点中选择XiaoYe API
4. 测试并发布

## 知识库配置

1. 进入 **知识库** → **创建知识库**
2. 上传文档（PDF、Word、TXT 等）
3. 选择 Embedding 模型（可使用 `text-embedding-3-small`）
4. 在应用中关联知识库

## 特色功能

- **可视化工作流**：拖拽式构建复杂 AI 流程
- **知识库 RAG**：精准文档检索增强
- **API 发布**：一键将应用发布为 API
- **数据分析**：查看应用使用统计

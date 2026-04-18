# FastGPT 配置指南

FastGPT 是一款基于 RAG 的知识库问答平台，专注于企业知识管理和 AI 客服场景。

## 部署方式

### Docker Compose 快速部署

```bash
# 拉取 docker-compose 与初始化 SQL
mkdir fastgpt && cd fastgpt
curl -O https://raw.githubusercontent.com/labring/FastGPT/main/deploy/docker/docker-compose-pgvector.yml
curl -O https://raw.githubusercontent.com/labring/FastGPT/main/projects/app/data/config.json
mv docker-compose-pgvector.yml docker-compose.yml
```

编辑 `docker-compose.yml`，找到 `fastgpt` 服务的环境变量：

```yaml
OPENAI_BASE_URL: https://ai.xiaoye.io/v1
CHAT_API_KEY: sk-你的Key
```

启动：

```bash
docker compose up -d
```

访问 `http://localhost:3000`（默认账号 `root` / `1234`）。

::: tip
FastGPT 知识库的向量化需要 Embedding 模型，XiaoYe API 目前未提供，请在 `config.json` 中配置其他 Embedding 服务商。
:::

### 使用官方云端版

访问 [fastgpt.in](https://fastgpt.in) 注册使用。

## 配置XiaoYe API（云端版）

1. 进入 **账户设置** → **AI 模型**
2. 点击 **添加模型**
3. 选择 **OpenAI 兼容**
4. 填入：
   - **API Key**: `sk-你的Key`
   - **Base URL**: `https://ai.xiaoye.io/v1`
   - **模型名**: `claude-sonnet-4-6`
5. 保存

## 创建知识库

1. 进入 **知识库** → **新建知识库**
2. 填写名称，选择向量模型
3. 点击 **导入数据** 上传文档
4. 等待向量化完成

## 创建应用

1. 进入 **应用** → **新建应用**
2. 选择 **知识库 + 对话** 模板
3. 关联知识库
4. 选择 LLM 模型为XiaoYe API
5. 发布并获取 API 或分享链接

## 特色功能

- **精准 RAG**：多路召回 + 重排序，引用准确
- **工作流编排**：支持复杂的多步骤 AI 流程
- **对话日志**：完整记录所有用户对话

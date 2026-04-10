# AnythingLLM 配置指南

AnythingLLM 是一款强大的本地知识库 + AI 对话平台，支持文档上传、RAG 检索和多种 LLM 后端。

## 下载安装

前往 [AnythingLLM 官网](https://anythingllm.com) 下载桌面版，支持 Windows、macOS、Linux。

## 配置XiaoYe API

1. 打开 AnythingLLM
2. 进入 **设置** → **LLM 配置**
3. **LLM Provider** 选择 `Generic OpenAI`
4. 填入以下信息：
   - **Base URL**: `https://ai.xiaoye.io/v1`
   - **API Key**: `sk-你的Key`
   - **Chat Model**: `claude-sonnet-4-6`
   - **Token Context Window**: `8192`
5. 点击 **保存**

## 创建工作区并上传文档

1. 点击 **+ 新建工作区**
2. 进入工作区，点击 **上传文档**
3. 支持 PDF、Word、TXT、Markdown 等格式
4. 上传后点击 **移动到工作区**

## 开始对话

在工作区聊天框输入问题，AI 会基于你上传的文档进行回答。

## Docker 部署（服务端）

```bash
docker pull mintplexlabs/anythingllm
docker run -d -p 3001:3001 \
  -e OPENAI_API_KEY="sk-你的Key" \
  -e OPENAI_BASE_PATH="https://ai.xiaoye.io/v1" \
  mintplexlabs/anythingllm
```

## 特色功能

- **本地知识库**：上传文档后 AI 可以精准引用
- **多工作区**：按项目隔离不同知识库
- **私有部署**：数据完全在本地，保护隐私
- **多用户**：服务端版本支持团队共用

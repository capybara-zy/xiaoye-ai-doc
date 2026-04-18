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

export STORAGE_LOCATION=$HOME/anythingllm
mkdir -p $STORAGE_LOCATION && touch "$STORAGE_LOCATION/.env"

docker run -d -p 3001:3001 \
  --cap-add SYS_ADMIN \
  -v ${STORAGE_LOCATION}:/app/server/storage \
  -v ${STORAGE_LOCATION}/.env:/app/server/.env \
  --name anythingllm \
  mintplexlabs/anythingllm
```

容器启动后访问 `http://localhost:3001`，在 Web UI 的 **设置 → LLM Provider** 里按上面的参数配置即可（不要通过环境变量配 Key，AnythingLLM 的 OpenAI 兼容配置走数据库而非 ENV）。

## 特色功能

- **本地知识库**：上传文档后 AI 可以精准引用
- **多工作区**：按项目隔离不同知识库
- **私有部署**：数据完全在本地，保护隐私

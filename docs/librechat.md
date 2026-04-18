# LibreChat 配置指南

LibreChat 是一款功能丰富的开源 AI 聊天平台，支持多用户、多模型和丰富的扩展功能。

## 部署

### Docker 快速部署

```bash
# 克隆项目
git clone https://github.com/danny-avila/LibreChat.git
cd LibreChat

# 复制配置文件
cp .env.example .env

# 启动
docker compose up -d
```

## 配置XiaoYe API

编辑 `.env` 文件：

```bash
# OpenAI 配置
OPENAI_API_KEY=sk-你的Key
OPENAI_REVERSE_PROXY=https://ai.xiaoye.io/v1
```

或者在 `librechat.yaml` 中配置自定义端点：

```yaml
endpoints:
  custom:
    - name: "XiaoYe API"
      apiKey: "sk-你的Key"
      baseURL: "https://ai.xiaoye.io/v1"
      models:
        default:
          - claude-opus-4-7
          - claude-opus-4-6
          - claude-sonnet-4-6
          - gpt-5.4
          - gpt-5.3-codex
      titleConvo: true
      titleModel: "claude-sonnet-4-6"
```

## 重启服务

```bash
docker compose restart
```

## 访问

打开浏览器访问 `http://localhost:3080`，注册账号后即可使用。

## 特色功能

- **对话分享**：生成分享链接
- **插件**：支持联网搜索、代码解释器等
- **多模型切换**：在同一对话中切换不同模型

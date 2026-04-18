# Aider 配置指南

Aider 是一款基于终端的 AI 结对编程工具，可以直接修改你的代码仓库。

## 安装

```bash
pip install aider-chat
```

或使用 pipx（推荐）：

```bash
pipx install aider-chat
```

## 配置XiaoYe API

### 方式一：环境变量

```bash
# macOS / Linux
export OPENAI_API_KEY="sk-你的Key"
export OPENAI_API_BASE="https://ai.xiaoye.io/v1"

# Windows PowerShell
$env:OPENAI_API_KEY="sk-你的Key"
$env:OPENAI_API_BASE="https://ai.xiaoye.io/v1"
```

### 方式二：`.aider.conf.yml` 配置文件

在项目根目录创建 `.aider.conf.yml`：

```yaml
openai-api-key: sk-你的Key
openai-api-base: https://ai.xiaoye.io/v1
model: openai/claude-sonnet-4-6
```

## 启动

```bash
# 在你的代码目录中运行
aider --model openai/claude-sonnet-4-6

# 或使用环境变量时直接运行
aider
```

## 常用操作

| 命令 | 说明 |
|------|------|
| `/add 文件名` | 将文件加入编辑上下文 |
| `/drop 文件名` | 移除文件 |
| `/diff` | 查看本次修改 |
| `/undo` | 撤销上次修改 |
| `/commit` | 提交当前修改 |
| `/exit` | 退出 |

## 推荐模型

| 模型 | 适用场景 |
|------|----------|
| `claude-sonnet-4-6` | 日常编程，速度与质量均衡 |
| `claude-opus-4-7` | 复杂架构设计，质量优先 |
| `claude-opus-4-6` | 综合能力强，性价比高 |
| `gpt-5.4` | 通用编程任务 |
| `gpt-5.3-codex` | 代码专用优化版本 |

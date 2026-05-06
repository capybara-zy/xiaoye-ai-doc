# Codex 配置指南

Codex 是 OpenAI 推出的终端 AI 编程助手，可以在本地代码仓库中读取文件、提出修改、执行命令，并通过自然语言协助你完成开发任务。

## 前置条件

- 前往 [XiaoYe API控制台](https://ai.xiaoye.io) 注册并获取 API Key
- 安装 Node.js 18+
- 建议在 Git 仓库中使用，方便随时查看和回退变更
- Windows 用户建议使用 PowerShell、Windows Terminal 或 WSL

## 1. 安装 Codex CLI

```bash
npm install -g @openai/codex
codex --version
```

如需更新到最新版本：

```bash
npm i -g @openai/codex@latest
```

::: tip
官方安装包名是 `@openai/codex`，安装后命令为 `codex`。
:::

## 2. API 配置

Codex 使用 OpenAI 兼容接口时，Base URL 必须以 `/v1` 结尾。

### 方式一：写入 config.toml（推荐）

编辑 `~/.codex/config.toml`（Windows: `C:\Users\用户名\.codex\config.toml`）：

```toml
model = "gpt-5.5"
model_provider = "xiaoye"
model_reasoning_effort = "medium"

[model_providers.xiaoye]
name = "XiaoYe API"
base_url = "https://ai.xiaoye.io/v1"
env_key = "OPENAI_API_KEY"
wire_api = "responses"
```

然后配置环境变量。

Linux / macOS:

```bash
export OPENAI_API_KEY="sk-你的Key"
```

Windows (PowerShell):

```powershell
$env:OPENAI_API_KEY="sk-你的Key"
```

::: warning
- `base_url` 必须填写 `https://ai.xiaoye.io/v1`，这里需要带 `/v1`。
- `env_key` 填的是环境变量名称，不要把 API Key 直接写在 `env_key` 里。
- `model_provider` 和 `[model_providers.xiaoye]` 中的 `xiaoye` 必须保持一致。
- `openai`、`ollama`、`lmstudio` 是 Codex 内置服务商 ID，不要用这些名称创建自定义服务商。
:::

### 方式二：使用内置 OpenAI 服务商（可选）

如果你想沿用 Codex 默认的 `openai` 服务商，也可以只覆写内置服务商的 Base URL：

```toml
model = "gpt-5.5"
model_provider = "openai"
model_reasoning_effort = "medium"
openai_base_url = "https://ai.xiaoye.io/v1"
```

然后同样配置 `OPENAI_API_KEY`。

::: tip
自定义服务商用 `base_url`；覆写 Codex 内置 `openai` 服务商时用 `openai_base_url`。
:::

### 临时设置 API Key

Linux / macOS:

```bash
export OPENAI_API_KEY="sk-你的Key"
```

Windows (PowerShell):

```powershell
$env:OPENAI_API_KEY="sk-你的Key"
```

然后启动时可临时指定模型：

```bash
codex -m gpt-5.5
```

## 3. 启动与基础使用

```bash
cd your-project
codex
```

常见提问示例：

```text
> 帮我分析这个项目的架构
> 给登录接口补充参数校验
> 修复当前测试失败的问题
> 为 UserService 添加分页查询能力
```

## 4. 常用启动模式

| 命令 | 说明 |
|------|------|
| `codex` | 默认模式，适合先让 Codex 分析项目和提出建议 |
| `codex --sandbox workspace-write --ask-for-approval on-request` | 允许在工作区内写文件，必要时请求确认，适合日常开发 |
| `codex --sandbox read-only` | 只读模式，适合代码审查或先让 Codex 分析项目 |
| `codex --ask-for-approval never --sandbox workspace-write` | 尽量减少确认，适合可信项目中的自动化任务 |
| `codex -m gpt-5.5` | 临时指定模型 |
| `codex --help` | 查看当前版本支持的完整参数 |

::: warning
首次使用建议从默认模式或只读模式开始，确认 Codex 的修改方式符合预期后，再放宽沙箱和确认策略。`--full-auto` 已是兼容旧版本的参数，新配置优先使用 `--sandbox` 和 `--ask-for-approval`。
:::

## 5. 项目记忆文件 (AGENTS.md)

在项目根目录创建 `AGENTS.md`，Codex 会在工作时读取其中的项目约定：

```markdown
# 项目说明

- 前端：React + TypeScript
- 后端：Node.js + Express
- 包管理器：npm

# 开发约定

- 修改后运行 `npm test`
- 保持 ESLint 和 Prettier 通过
- API 响应统一使用 `{ code, data, message }`
```

适合写入的内容包括：项目结构、运行命令、测试命令、代码风格、禁止修改的文件、发布流程等。

## 6. MCP 配置（可选）

Codex 可以在 `~/.codex/config.toml` 中配置 MCP 服务器，用于连接文件系统、数据库、浏览器、内部文档等外部工具。

示例：

```toml
[mcp_servers.docs]
command = "npx"
args = ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/docs"]
```

配置完成后重启 Codex 生效。

## 推荐模型

| 模型 | 适用场景 |
|------|----------|
| `gpt-5.5` | 推荐默认模型，适合复杂代码任务和长上下文项目 |
| `gpt-5.4` | 稳定通用模型，适合专业开发和复杂任务 |
| `gpt-5.4-mini` | 更快、更省的轻量编码任务 |
| `gpt-5.3-codex` | 代码任务专用优化版本 |
| `claude-sonnet-4-6` | 日常编程，速度与质量均衡 |
| `claude-opus-4-7` | 复杂架构设计，质量优先 |

::: tip
模型是否可用以 XiaoYe API 控制台分组权限为准；如果启动时报 `model not found`，请先确认 Key 所属分组支持该模型。
:::

## 常见问题与异常处理 (FAQ)

| 错误 | 原因 | 解决方案 |
|------|------|----------|
| 401 Unauthorized | API Key 错误或环境变量未生效 | 重新设置 `OPENAI_API_KEY`，并确认 Key 来自 [XiaoYe API控制台](https://ai.xiaoye.io) |
| 404 Not Found | Base URL 格式错误 | 确认 Base URL 为 `https://ai.xiaoye.io/v1` |
| 429 Too Many Requests | 请求频繁或额度耗尽 | 等待冷却或前往 [控制台](https://ai.xiaoye.io) 充值 |
| model not found | 模型名称不正确或分组无权限 | 检查模型名，并确认 API Key 所属分组支持该模型 |
| 连接超时 / Network Error | 网络或代理冲突 | 检查代理/VPN，确认 URL 无空格 |
| 配置修改后未生效 | Codex 已经在运行或环境变量只在当前终端生效 | 重新打开终端并重启 `codex` |

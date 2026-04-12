# Claude Code 接入教程

Claude Code 是 Anthropic 推出的现代开发者 AI 编程助手，直接在终端中运行，能够理解整个代码库并通过自然语言命令帮助你更快地编码。

## 前置条件

- 前往 [XiaoYe API控制台](https://ai.xiaoye.io) 注册并获取 API Key
- 安装 Node.js 18+
- **Windows 用户** 必须先安装 Git for Windows（见下方）
- 4GB+ 可用内存 + 稳定网络

### 支持平台

| 平台 | 备注 |
|------|------|
| macOS 12+ | 推荐 |
| Ubuntu 20.04+ / Debian 11+ | 推荐 |
| Windows | 需额外安装 Git for Windows |

### Windows 用户：安装 Git for Windows（必须）

::: warning
⚠️ 跳过此步会导致 Claude Code 无法在 Windows 上运行！
:::

- 👉 **国内镜像（推荐，速度快）**：[Git-2.47.1-64-bit.exe（npmmirror 镜像）](https://registry.npmmirror.com/binary.html?path=git-for-windows/v2.47.1.windows.1/)
- 👉 **官方地址（备用）**：[https://git-scm.com/downloads/win](https://git-scm.com/downloads/win)

下载后运行安装程序，保持所有默认选项点击 Next 安装即可。安装完成后重启 PowerShell 继续。

## 1. 安装 Claude Code CLI（原版官方包）

```bash
npm install -g @anthropic-ai/claude-code
claude --version
```

::: warning
⚠️ 必须安装原版 `@anthropic-ai/claude-code`，勿使用第三方替代包。
:::

## 2. API 配置

### 方式一：一键配置（推荐）

安装好 CLI 后直接运行：

```bash
npx timesniper-api
```

按照提示输入 API Key 即可自动完成所有配置。

### 方式二：手动配置

编辑 `~/.claude/settings.json`（Windows: `C:\Users\用户名\.claude\settings.json`）：

```json
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "sk-你的Key",
    "ANTHROPIC_BASE_URL": "https://ai.xiaoye.io",
    "CLAUDE_CODE_MAX_OUTPUT_TOKENS": "64000",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1"
  },
  "permissions": { "allow": [], "deny": [] },
  "alwaysThinkingEnabled": false
}
```

### 方式三：环境变量

Linux / macOS:

```bash
export ANTHROPIC_BASE_URL="https://ai.xiaoye.io"
export ANTHROPIC_AUTH_TOKEN="sk-你的Key"
```

Windows (PowerShell):

```powershell
$env:ANTHROPIC_BASE_URL="https://ai.xiaoye.io"
$env:ANTHROPIC_AUTH_TOKEN="sk-你的Key"
```

### 跳过首次引导（必须）

在 `~/.claude.json` 中写入，避免因网络问题卡在引导页：

```json
{ "hasCompletedOnboarding": true }
```

## 3. 启动与基础使用

```bash
cd your-project
claude
```

```
> 帮我分析这个项目的架构
> 给 UserService 添加一个分页查询方法
> 修复 login 接口的参数校验问题
```

## 4. 常用命令

| 命令 | 说明 |
|------|------|
| `/compact` | 压缩上下文，避免 token 溢出 |
| `/model` | 查看和切换可用模型 |
| `/resume` | 恢复上一次对话 |
| `/clear` | 清除对话重新开始 |
| `claude --resume` | 启动时恢复上次对话 |

## 5. 高级技巧

### 项目记忆文件 (CLAUDE.md)

在项目根目录创建 `CLAUDE.md`，Claude 每次启动自动读取：

```markdown
# 项目架构
- 前端：React + TypeScript + Tailwind
- 后端：Node.js + Express + Prisma
# 编码标准
- 使用 ESLint + Prettier
- API 响应统一使用 { code, data, message } 格式
```

### MCP 配置 (.mcp.json)

在项目根目录创建 `.mcp.json` 连接外部工具：

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/project"]
    }
  }
}
```

### VS Code / Cursor / Trae 插件集成

::: tip
💡 CLI 配置完成后，再安装编辑器插件即可直接使用，无需重复填写 API Key。
:::

- **VS Code**： 在扩展商店搜索 Claude Code（Anthropic 发布），安装后插件自动读取本地 CLI 配置。
- **Cursor / Trae**： 参见对应教程，插件同样依赖本地 CLI。

👉 [Cursor 教程](/cursor) | [Trae 教程](/trae)

### 使用心得

- 先让 Claude 分析项目结构，再提具体需求
- 复杂任务拆分小步骤
- 善用 CLAUDE.md 提供项目上下文
- 定期 `/compact` 避免 token 溢出
- 对生成的代码做 review，不要盲目接受

## 常见问题与异常处理 (FAQ)

| 错误 | 原因 | 解决方案 |
|------|------|----------|
| 401 Unauthorized | API Key 错误或为空 | 前往 [XiaoYe API控制台](https://ai.xiaoye.io) 重新获取密钥 |
| 404 Not Found | 接口地址格式错误 | 确认 Base URL 是否为 `https://ai.xiaoye.io` |
| 429 Too Many Requests | 请求频繁或额度耗尽 | 等待冷却或前往 [控制台](https://ai.xiaoye.io) 充值 |
| 连接超时 / Network Error | 网络或代理冲突 | 检查代理/VPN，确认 URL 无空格 |
| SSE 流式输出乱码 | 端点类型不匹配 | 将端点类型改为 OpenAI 或 OpenAI-Response |
| Windows 启动报错 / 找不到命令 | 未安装 Git for Windows | 安装 [Git 国内镜像](https://registry.npmmirror.com/binary.html?path=git-for-windows/v2.47.1.windows.1/) 后重试 |

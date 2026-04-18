# Trae 接入教程

Trae 是字节跳动推出的 AI 原生代码编辑器，同样基于 VS Code 内核。在 Trae 中使用 Claude Code，需要安装 Claude Code 官方插件，操作流程与 VS Code / Cursor 完全一致。

## 前置条件

- 前往 [XiaoYe API控制台](https://ai.xiaoye.io) 获取 API Key
- 下载安装 [Trae](https://trae.ai)
- **Windows 用户** 必须先安装 [Git for Windows](/quickstart-windows#_2-安装-git-for-windows)

::: warning ⚡ Windows 用户：先安装 Git for Windows（必须）
⚠️ 跳过此步会导致 Claude Code 插件无法运行！请务必先完成。

- 👉 **国内镜像（推荐，速度快）**：[Git-2.47.1-64-bit.exe（npmmirror 镜像）](https://registry.npmmirror.com/binary.html?path=git-for-windows/v2.47.1.windows.1/)
- 👉 **官方地址（备用）**：[https://git-scm.com/downloads/win](https://git-scm.com/downloads/win)

下载后运行安装程序，保持所有默认选项，一路 Next 完成安装，然后重启 PowerShell。
:::

## Claude Code for Trae 配置流程（共 4 步）

### 第一步：安装 Claude Code CLI

打开终端（PowerShell / Terminal），运行：

```powershell
npm install -g @anthropic-ai/claude-code
```

::: warning
⚠️ 必须安装原版 `@anthropic-ai/claude-code`，这是 Anthropic 官方发布的包。
:::

验证安装：

```powershell
claude --version
```

### 第二步：配置 API Key

创建/编辑 `C:\Users\你的用户名\.claude\settings.json`（macOS/Linux: `~/.claude/settings.json`）：

```json
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "sk-你的Key",
    "ANTHROPIC_BASE_URL": "https://ai.xiaoye.io",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1"
  }
}
```

配置完成后，在终端运行 `claude`，确认可以正常对话，再继续下一步。

👉 详细说明请看 [Claude Code CLI 完整教程](/claude-code)

### 第三步：在 Trae 里安装 Claude Code 插件

1. 打开 Trae，按 `Ctrl+Shift+X` 打开扩展商店
2. 搜索 **Claude Code**
3. 找到发布者为 **Anthropic** 的官方插件，点击 **安装**
4. 安装完成后**重启 Trae**

### 第四步：打开插件 settings.json 配置环境变量

::: warning
⚠️ 这一步是关键！不配置此项插件会无法连接到国内 API。
:::

1. 重启后，左侧边栏点击 **Claude Code** 图标
2. 插件会提示登录，**不要登录**，点击插件界面右上角的 **设置**（齿轮）图标，会自动打开 `settings.json`
3. 在 `settings.json` 中加入以下内容（`sk-` 替换为你的真实 Key）：

```json
{
  "claude-code.environmentVariables": [
    {
      "name": "ANTHROPIC_AUTH_TOKEN",
      "value": "sk-你的Key"
    },
    {
      "name": "ANTHROPIC_API_KEY",
      "value": "sk-你的Key"
    },
    {
      "name": "ANTHROPIC_BASE_URL",
      "value": "https://ai.xiaoye.io"
    }
  ]
}
```

4. 保存文件（`Ctrl+S`），然后**重启 Trae**
5. 再次点击侧边栏 **Claude Code** 图标，即可正常使用 ✅

## 常见问题与异常处理 (FAQ)

| 错误 | 原因 | 解决方案 |
|------|------|----------|
| 插件提示登录 / 无法连接 | settings.json 未配置或未重启 | 完成第四步配置后重启 Trae |
| CLI 安装失败 | Node.js 未安装或版本过低 | 安装 Node.js 18+ |
| Windows 启动报错 | 未安装 Git for Windows | 安装 [Git 国内镜像](https://registry.npmmirror.com/binary.html?path=git-for-windows/v2.47.1.windows.1/) |
| 401 Unauthorized | API Key 错误 | 重新获取 API Key |
| 404 Not Found | Base URL 错误 | 检查 ANTHROPIC_BASE_URL 是否为 `https://ai.xiaoye.io` |
| 429 Too Many Requests | 额度耗尽 | 前往 [控制台](https://ai.xiaoye.io) 充值 |

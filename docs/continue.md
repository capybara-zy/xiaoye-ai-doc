# Continue.dev 配置指南

Continue.dev 是一款开源的 VS Code AI 代码助手，以强大的代码自动补全著称。

## 安装插件

1. 打开 VS Code
2. 按 `Ctrl+Shift+X` 打开拓展市场
3. 搜索 `Continue`
4. 点击安装

## 配置XiaoYe API

安装后，编辑配置文件 `~/.continue/config.json`（首次启动 Continue 会自动创建）：

```json
{
  "models": [
    {
      "title": "XiaoYe API - Claude Sonnet",
      "provider": "openai",
      "model": "claude-sonnet-4-6",
      "apiKey": "sk-你的Key",
      "apiBase": "https://ai.xiaoye.io/v1"
    },
    {
      "title": "XiaoYe API - GPT-4o",
      "provider": "openai",
      "model": "gpt-4o",
      "apiKey": "sk-你的Key",
      "apiBase": "https://ai.xiaoye.io/v1"
    }
  ],
  "tabAutocompleteModel": {
    "title": "自动补全",
    "provider": "openai",
    "model": "claude-sonnet-4-6",
    "apiKey": "sk-你的Key",
    "apiBase": "https://ai.xiaoye.io/v1"
  }
}
```

## 主要功能

- **Tab 自动补全**：输入代码时自动提示，按 Tab 接受
- **内联编辑**：选中代码按 `Ctrl+I` 直接修改
- **对话模式**：按 `Ctrl+L` 打开侧边栏对话
- **代码库问答**：向 AI 提问关于你项目的问题

## 开始使用

- 自动补全：正常写代码，AI 会自动在光标处给出建议
- 对话：按 `Ctrl+L` 打开 Continue 面板，开始提问

::: tip
在 `config.json` 中可以配置多个模型，在 Continue 界面顶部切换使用。
:::

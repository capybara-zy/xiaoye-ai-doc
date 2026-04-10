# Cline 配置指南

Cline 是一款强大的 VS Code AI 编程插件，支持自主执行任务、读写文件、运行命令等。

::: warning 前置条件
请先完成 [Claude Code CLI 配置](/claude-code)，再进行本教程。
:::

## 安装插件

1. 打开 VS Code
2. 点击左侧拓展图标（或按 `Ctrl+Shift+X`）
3. 搜索 `Cline`
4. 点击安装

## 配置 API

1. 安装完成后，点击左侧栏的 Cline 图标
2. 进入设置页面
3. **API Provider** 选择 `OpenAI Compatible`
4. 填入以下信息：
   - **Base URL**: `https://ai.xiaoye.io/v1`
   - **API Key**: `sk-你的Key`
   - **Model**: `claude-sonnet-4-6`
5. 点击 **Save**

## 主要功能

- **自主任务执行**：描述需求，Cline 自动读写文件、运行命令
- **代码生成**：根据需求生成完整功能代码
- **代码审查**：分析代码并提出改进建议
- **错误修复**：自动定位并修复 bug

## 开始使用

点击左侧 Cline 图标，在输入框中描述你的需求，Cline 会自动规划并执行任务。

::: tip
Cline 在执行文件操作或命令前会请求你的确认，确保安全可控。
:::

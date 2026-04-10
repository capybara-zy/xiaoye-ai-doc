# Windsurf 配置指南

Windsurf 是 Codeium 推出的 AI 代码编辑器，具备强大的 AI Flow 功能，支持多步骤自主任务执行。

## 下载安装

前往 [Windsurf 官网](https://codeium.com/windsurf) 下载并安装。

## 配置XiaoYe API

1. 打开 Windsurf
2. 进入 **Settings** → **Cascade**（或 **AI Settings**）
3. 选择 **Bring Your Own Key**（BYOK）模式
4. 填入以下信息：
   - **Provider**: `OpenAI Compatible`
   - **Base URL**: `https://ai.xiaoye.io/v1`
   - **API Key**: `sk-你的Key`
   - **Model**: `claude-sonnet-4-6`
5. 点击 **Save**

## 主要功能

- **Cascade**：AI 自主规划并执行多步骤任务
- **代码补全**：实时 AI 代码建议
- **内联编辑**：选中代码直接用 AI 修改
- **终端集成**：在终端中直接使用 AI

## 开始使用

- 按 `Ctrl+L` 打开 Cascade 面板
- 在输入框描述你的需求，AI 会自动规划并执行

::: tip
Cascade 模式下，Windsurf 可以自主读取文件、运行命令、修改代码，完成复杂的多步骤任务。
:::

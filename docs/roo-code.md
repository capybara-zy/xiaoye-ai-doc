# Roo Code（VS Code 插件）配置指南

Roo Code 是一款功能强大的 VS Code AI 编程插件，支持多种 AI 模型。

::: warning 前置条件
请先完成 [Claude Code CLI 配置](/claude-code)，再进行本教程。
:::

## 安装插件

1. 打开 VS Code
2. 点击左侧拓展图标，搜索 `Roo Code`
3. 点击安装

## 配置 API

1. 安装完成后，点击左侧栏的 Roo Code 图标
2. 点击 **Settings**
3. 将 **API Provider** 设置为 `OpenAI Compatible`
4. 填入以下信息：
   - **Base URL**: `https://ai.xiaoye.io/v1`
   - **API Key**: `sk-你的Key`
   - **Model**: `claude-sonnet-4-6`（或其他支持的模型）
5. 点击 **Save** 保存

## 开始使用

配置完成后，在 VS Code 中打开任意文件，就可以使用 Roo Code 的 AI 功能了。

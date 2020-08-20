## 基于nuxtjs实现realworld

### 通过GitHub自动部署时出现的问题

  * `personal access tokens` 生成的 `token` 不能保存到项目中并提交，否则 `GitHub` 会自动将刚生成的 `personal access token` 删除
  * `GitHub` 自动部署时执行的命令全部在 `/usr/bin` 目录下，如果只有部分在，可能 `actions` 会执行成功，但项目无法访问
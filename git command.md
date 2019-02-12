### github 拉去本地不存在的远程分支到本地

1.git fetch
2.git checkout -b 本地新分支名 origin/远程要拉取的分支名

### 添加 git command 快捷方式
git config --global alias.s status -> git s 就代表 git status 命令

### git 在一个分支上提交了多个commit，如何合并这些commit到一个新的干净的分支
首先切换到新的分支 git checkout -b '分支1'

然后 pull 那个多个commit的分支 git pull origin 多个commit的分支名

然后 切换到一个新的分支 git checkout -b '分支2'

然后在此基础上合并多个commit git merge --squash '分支1'
### 关于 git clone 

有时候克隆的文件太大，网速再差点事儿，我这小暴脾气...

所以，谷歌了个办法，就是先 clone 最近一次 commit 的代码，然后在下载全部：

git clone '地址' --depth 1

git pull --unshallow

### 关于 git log

git log : 查看相关提交的版本号

git log -p filename : 显示每次提交的 diff

git show commit-id filename : 只看某次提交的某个文件的变化

git show -s --pretty=row commit-id : 根据 commit-id 查看某次提交

git log --stat 显示每次提交的文件统计信息

git log --shortstat 只显示最后的修改添加移除统计

git log --name-only 显示提交之后已修改的文件清单

git log --name-status 显示新增、修改、删除的文件清单

git log --abbrev-commit 仅显示 SHA-1 的前几个字符，而不是所有的40个字符

git log --relative-date 使用较短的相对时间显示，例如 2 weeks ago

git log --graph 显示 ASCII 图形表示的分之合并信息

git log --pretty 使用其他格式显示历史提交信息，可用的选项包括 oneline，short，full，fuller 和 format（后跟指定格式）。

git log -(n) n 是数据，意为仅显示最近 n 条信息

git log --since,--after 仅显示指定时间之后的提交

git log --until,--before 仅显示指定时间之前的提交

git log --author 仅显示指定作者相关的提交

git log committer 仅显示指定提交者相关的提交

git log --grep 仅显示含指定关键字的提交

git log -S 仅显示添加或者移除了某个关键字的提交

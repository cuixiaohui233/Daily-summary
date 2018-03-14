# git checkout 命令详解
git congif --global -e 添加简写配置：

        [alias]
            st = status
            co = checkout
            br = branch
            mg = merge
            ci = commit
            md = commit --amend
            dt = difftool
            mt = mergetool
            last = log -1 HEAD
            cf = config
            line = log --oneline
            latest = for-each-ref --sort=-committerdate --format='%(committerdate:short) %(refname:short) [%(committername)]'

            ls = log --pretty=format:\"%C(yellow)%h %C(blue)%ad %C(red)%d %C(reset)%s %C(green)[%cn]\" --decorate --date=short
            hist = log --pretty=format:\"%C(yellow)%h %C(red)%d %C(reset)%s %C(green)[%an] %C(blue)%ad\" --topo-order --graph --date=short
            type = cat-file -t
            dump = cat-file -p

## 创建分支，切换分支也可以成为检出分支

创建新的分支：git branch dev

切换到新的分支：git checkout dev

简写：git checkout -b dev

## 关于 --HEAD

在我们切换分支和新建分支的时候，.git 中的 HEAD 起到了很大的作用，在我们切换分支的时候，HEAD 的指针会指向当前分支，然后对应的是当前分支的最洗一次提交的版本号码;

不行了，困......
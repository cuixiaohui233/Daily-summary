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

今日工作总结:<br />
关于redux:

为什么调用 dispatch 发起同步的 action 数据也不会及时更新呢？我哪里写错了?

还是这样，在开发一个新的功能的时候，一样要想好逻辑......

添加一个新的功能组件，需要拆分出来，要尽量做到解耦，不要一大堆写在一起......

代码逻辑要严谨......

感觉我现在脑子瓦特了...

明天的安排：

写完城市切换的组件... 赶紧收尾，争取上线...

主要有这几部分：

1.cityIndex 调整，我想应该不是 redux 的问题,是哪个报错的文件......

2.添加 hash 路由来显示当前城市......如果能有时间的话...

3.添加提示框的显示时间......

4.底部的tab页切换的时候，为什么要重新请求数据？需要优化......

5.当前城市还是存在 localstorage 中吧......
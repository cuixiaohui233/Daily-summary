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

今日总结：

城市切换组件总算写完了...

得出的结论：

在开始设计数据结构的时候一定要想好，还有逻辑，这两点这的很重要....

犯过的错：

在命名变量或者函数名时，或者组件的名字是，一定要注意语义化

在没搞清楚这个函数的作用前，千万不要自己去改造...

connect 的 第一个参数 mapStateToProps 是会订阅 store 里面的数值，但是也是在渲染组件时才会获取到最新的数据，也就是说，
在发起 action 后，render 里面获取数据是发生变化的

还有注意js 代码书写规范...

今天就总结这么多了, 老感觉自己要被辞退,要努力了！

这几天没更新总结...github虽然很空，但是每一天都特别充实，背单词代替刷微博，感觉做一件事就会停不下来，那就多刷刷单词吧！

工作上的总结：

js 里面强制使用 === ,这个时候就会有些漏网之鱼，凭着自己和别人值相同，就觉得自己是“同类(型)”的，这个时候一定要注意类型转换！

函数名字最好能直接体现函数内部做了什么，不用让人在去思考这里面的逻辑是什么样的...

代码规范和良好的编码习惯是很重要的！！！

下周工作计划：

开始使用antd-design来重构OP后台管理系统，需要注意按需加载以及每个组件中的具体方法...

还有...

我什么时候才能学会和弦切换啊！！！

今日份的总结...

这两天还是坚持背单词和读英文文章了，加油，继续努力！

还是那句话，不可以骄傲自大，也不可以妄自菲薄，相信你自己可以做的很好，也要明白要学的东西还多了去了...加油，一定能做到！下周也要好好干！/笑哭

木有啦！

这两天好懒...

也有一部分原因是回来太晚了...

想着要不搬家？？

好了，还是总结吧，今天主要用了antd的组件，怪不得我前老大不让用，确实封的太死，但是用作后天管理项目，也还可以吧，有方便的地方
也有好多坑...

觉得没学什么新的东西，时间不够...赶紧搬家，一定要找到合适的地方！！

先定个小目标，这周把 try catch、promise、async函数再好好看看，react-router的东西明天应该能用到，在复习一下,嗯。

接下来也要加油，背单词，看阅读，更github总结!

今日总结:
关于react-router的写法，可以声明一个数组，然后里面是应用的 route 信息，然后 map 这个数组，生成 Route,注意 Router 里面只能有一个 child
，写多个 Route 可以用 div 包一下，还有 Router 要在，react-router 中引入，但是 Link,Route等组件要在 react-router-dom 中引用。

还有react-router的 history，需要使用 createBrowserHistory 来创建。
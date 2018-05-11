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

Git diff:

1.比较工作区与暂存区

    git diff 不加参数默认比较工作区与暂存区

2.比较暂存区与最新本地版本库

    git diff —cached

3.比较工作区与最新本地版本库

    git diff HEAD 如果HEAD指向的是master分支，那么HEAD还可以切换成master

4. 比较工作区与指定commit-id的差异

　git diff commit-id  [<path>...] 
        
5.比较暂存区与指定commit-id的差异

　`git diff --cached [<commit-id>] [<path>...] `
 
6. 比较两个commit-id之间的差异

　`git diff [<commit-id>] [<commit-id>]`
 

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

关于react-router:

    switch组件必须紧跟着route才可以发挥作用

    switch会匹配到第一个符合路由的组件

    withRouter

关于package.json：

   1. package.json 里面的dependencies和devDependencies的区别

   在前端工程中，安装插件或库：

   添加 package到： dependencies

    npm install <package-name> --save 或 npm install <package-name>

    添加 package到： devDependencies

    npm install <package-name> --save-dev
    区别在于：
    dependencies中的依赖项是正常运行该包所需要的依赖项；
    devDependencies中的依赖项是开发的时候所需要的依赖项，比如一些进行单元测试之类的包；
    dependencies中，是生产环境所需要的库；
    devDependencies中，放的是你开发时候用到的库，比如测试库等等，在生产环境中是不需要的；
2 .^ 和 ~ 的区别

    指定版本：比如1.2.2，遵循“大版本.次要版本.小版本”的格式规定，安装时只安装指定版本。
    
    波浪号（tilde）+指定版本：比如~1.2.2，表示安装1.2.x的最新版本（不低于1.2.2），但是不安装1.3.x，也就是说安装时不改变大版本号和次要版本号。
    
    插入号（caret）+指定版本：比如ˆ1.2.2，表示安装1.x.x的最新版本（不低于1.2.2），但是不安装2.x.x，也就是说安装时不改变大版本号。需要注意的是，如果大版本号为0，则插入号的行为与波浪号相同，这是因为此时处于开发阶段，即使是次要版本号变动，也可能带来程序的不兼容。
    
    latest：安装最新版本。
    
关于变量命名：

    从this.props中取出来的东西需要用const生命；
    
    变量命名尽量语义化；
    
    一些常量可以放到config中；

用link标签实现shortcut icon


1、<link rel="shortcut icon " type="images/x-icon" href="./favicon.ico”>


其中favicon.ico需放在根目录下面（不提倡用这种方法，因为图片没有授权，违反了W3C标准，）


2、<link rel="shortcut icon " type="images/x-icon" href="http://www.jd.com/favicon.ico">


这里的favicon必须是16*16或者32*32的，必须是8位色或者24位色的，格式必须是png或者ico或者gif。

16*16/32*32 且 8位或24位色 且 png/ico/gif。

遇到的问题:

        1.批量修改数据，总是最后一个被修改，找不到原因，后来发现存储修改过数据的那个变量应该声明在循环里，脑子压塌+1

        2.在react中循环生成多个input，怎样给每一个input都加上解控时间呢？首先利用id给input加上ref属性，然后加上id属性，在input的onChange函数中获取ev.target.value,然后设置如下:

this.setState({

       卧槽。我忘了我咋写的了……明天补

})

        3.今天有个破东西……大爷的，复合类型是赋址复合类型是赋址复合类型是赋址……用Object.assign({}, data)是深拷贝……
        
        我来试试。

我是这一周简直太糟糕了，明天过后就回归正常生活吧分界线。

阻止浏览器长按图片弹出保存图片，css 方法：

pointer-events: none; 

ClassNames 库：

通过 npm install classnames 安装

作用：使 react 的 className 可以为多个经过判断的值

使用方法：

                <span
                        className={ClassNames({
                            'red': item.checkstatus == 'LEASE_CHECK_DISALLOW',
                            'green': item.checkstatus == 'LEASE_CHECK_REVIEWED'
                        })}>{LeaseCheckStatus[item.checkstatus]}
                 </span>
                 
                 
[更多教程](https://www.jianshu.com/p/9cf57787360d) 



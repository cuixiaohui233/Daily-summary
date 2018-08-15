### css 布局 --- grid 

还有这么多东西要学，每天都在搞什么卧槽！！就尼玛知道玩，你特么是小孩子啊!

### pm2 进程管理
安装：npm install -g pm2
配置文件：
    pm2.json:
    
      {
      "apps": [{
        "name": "chcs",// 进程的名字，相当于 pm2 start xxx.js --[name]
        "script": "production.js",// 要运行的程序的文件
        "cwd": "./",// 要运行的程序的路径
        "exec_mode": "fork",
        "max_memory_restart": "1G",
        "autorestart": true,
        "out_file": "./logs/pm2/app-out.log",
        "error_file": "./logs/pm2/app-err.log",
        "log_date_format": "YYYY-MM-DD HH:mm:ss.SSS",
        "node_args": [],
        "args": [],
        "env": {
          "NODE_ENV": "development"
        },
        "env_dev": {
          "NODE_ENV": "development"
        },
        "env_pro": {
          "NODE_ENV": "production"
        }
      }]
    }
    
运行文件：pm2 start pm2.json -env pro

结束进程：pm2 status 查看进程状态

pm2 stop 进程名 关闭进程

### sentry 报警机制
我擦不会搞,还懒...

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
### 基于第一个小全栈之总结

1.复制粘贴真的会死人。

2.总体结构设计！包括数据表的设计，一定要尽量想周到，这个真的重要

3.变量的名字给我搞昏了要，词穷啊!不对，英文单词穷！

4.做好日志管理和报错报警机制

5.可以分为线上环境和线下环境

6.认识了 pm2，一个 node 进程管理工具 
### node 写接口，连接数据

orm 模块：

    orm.connect : 连接到数据库
    
    db.define: 定义表结构
        var Person = db.define('person', {
          id:      {type: 'serial', key: true}, // 自增主键
          name:    {type: 'text'},
          surname: {type: 'text'},
          age:     {type: 'number'}
        }, {
          methods : {
            fullName: function() {
              return this.name + ' ' + this.surname;
            }
          }
        });
        
    Person.create: 创建 and 更新表
    
    Person.find({条件：键值对}, function): 查找表
    
    Person.all(function): 查找所有内容
    
    Person.find({}, 限制, function): 限制查找内容
    
    db.sync: 创建所有需要的表，但是不会替换表，只会生成没有创建过的表
    
    Person.find({条件}, function()
        Person.remove({条件}, function() {
            // 删除一条数据
        })
    })
    
    Person.find({查找条件}, function(err, person) {
        person[0].XXX = XXX;
        person[0].yyy = yyy;
        
        person.save(function(){
            // 更新数据
        })
    })


周末搞得数据库试试。

### Git 的报错

1.SSL certificate problem: Invalid certificate chain ：

    git config --global http.sslVerify false 解决

2.The requested URL returned error: 403 ：

    mac 下直接: vim .git/config 然后：
    
    修改

    [remote "origin"]
        url = https://github.com/wangz/example.git
    为：
    [remote "origin"]
        url = https://your name@github.com/wangz/example.git
### 写程序不仅要写代码，还要整处理错误的机制和代码运行日志

#### node 接口的日志模块 --- log4js

#### sentry 的报警机制

### mac小命令

Command+Shift+. 可以显示隐藏文件、文件夹，再按一次，恢复隐藏；

finder下使用Command+Shift+G 可以前往任何文件夹，包括隐藏文件夹。

### node 读写 Exsel 表格

>安装 
懒得写...
### node 写简单爬虫，node 是真的皮...

>用到的包

    express: Node 的框架
    
    superagent: Node 中非常方便的请求代理模块，相当于ajax
    
    cheerio: Node 中的 jQuery，实现了 jQuery 的核心功能
    
    url: Node 中用于解析和处理 URL 字符串
    
    async: Node 中的流程控制，处理异步编程
 
> 核心代码

[点击跳转到项目](https://github.com/cuixiaohui233/node-crawler)
    
### adb 调试 Android 的命令行工具---程序员的手机小精灵

>文档

https://blog.csdn.net/geanwen/article/details/80505178

https://www.jianshu.com/p/56fd03f1aaae

>问题

如果要循环模仿一个用户的事件，不会运行脚本
### 网站渗透

>关于网络安全的一个emmm...就是还有一种 web安全湿的职业...貌似是个神秘的组织 kkk

非法不非法我不知道，反正某Q上有黑色交易...搜索...

### 网站/手机APP抓包工具---charles 

>安装

[直接下载最新版](https://www.charlesproxy.com/download/) 建议右击打开新连接

>教程

[教程](https://www.jianshu.com/p/7a88617ce80b) 建议右击打开新连接

>益处

这下可以测试移动端/手机APP的请求地址了，可以可以，多谢老大...

### 皮这一下很开心

    //                            _ooOoo_
    //                           o8888888o
    //                           88" . "88
    //                           (| -_- |)
    //                            O\ = /O
    //                        ____/`---'\____
    //                      .   ' \\| |// `.
    //                       / \\||| : |||// \
    //                     / _||||| -:- |||||- \
    //                       | | \\\ - /// | |
    //                     | \_| ''\---/'' | |
    //                      \ .-\__ `-` ___/-. /
    //                   ___`. .' /--.--\ `. . __
    //                ."" '< `.___\_<|>_/___.' >'"".
    //               | | : `- \`.;`\ _ /`;.`/ - ` : | |
    //                 \ \ `-. \_ __\ /__ _/ .-` / /
    //         ======`-.____`-.___\_____/___.-`____.-'======
    //                            `=---='
    //
    //         .............................................
    //                  佛祖镇楼                  BUG辟易
    //             佛曰:
    //                  写字楼里写字间，写字间里程序员；
    //                  程序人员写程序，又拿程序换酒钱。
    //                  酒醒只在网上坐，酒醉还来网下眠；
    //                  酒醉酒醒日复日，网上网下年复年。
    //                  但愿老死电脑间，不愿鞠躬老板前；
    //                  奔驰宝马贵者趣，公交自行程序员。
    //                  别人笑我忒疯癫，我笑自己命太贱；
    //                  不见满街漂亮妹，哪个归得程序员？

### git checkout 命令详解
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

### 创建分支，切换分支也可以成为检出分支

创建新的分支：git branch dev

切换到新的分支：git checkout dev

简写：git checkout -b dev

### 关于 --HEAD

在我们切换分支和新建分支的时候，.git 中的 HEAD 起到了很大的作用，在我们切换分支的时候，HEAD 的指针会指向当前分支，然后对应的是当前分支的最洗一次提交的版本号码;

### 关于 git diff:

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

## 阻止浏览器长按图片弹出保存图片，css 方法：

pointer-events: none; 

## ClassNames 库：

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

antd 表单 在选择单个表单的值时简直不要太恶心，干


### 关于GC

GC是垃圾收集的意思，内存处理是编程人员容易出现问题的地方，忘记或者错误的内存回收会导致程序或系统的不稳定甚至崩溃，Java提供的GC功能可以自动监测对象是

否超过作用域从而达到自动回收内存的目的，Java语言没有提供释放已分配内存的显示操作方法。Java程序员不用担心内存管理，因为垃圾收集器会自动进行管理。要请

求垃圾收集，可以调用下面的方法之一：System.gc()或Runtime.getRuntime().gc()，但JVM可以屏蔽掉显示的垃圾回收调用。垃圾回收可以有效的防止内存泄

露，有效的使用可以使用的内存。垃圾回收器通常是作为一个单独的低优先级的线程运行，不可预知的情况下对内存堆中已经死亡的或者长时间没有使用的对象进行清除

和回收，程序员不能实时的调用垃圾回收器对某个对象或所有对象进行垃圾回收。

在Java诞生初期，垃圾回收是Java最大的亮点之一，因为服务器端的编程需要有效的防止内存泄露问题，然而时过境迁，如今Java的垃圾回收机制已经成为被诟病的东

西。移动智能终端用户通常觉得iOS的系统比Android系统有更好的用户体验，其中一个深层次的原因就在于Android系统中垃圾回收的不可预知性。

[相关链接](https://blog.csdn.net/hustwht/article/details/52109343)

## react 中关于对象池

开辟空间是需要一定代价的

如果引用释放而进入 gc，gc 会比较消耗性能和时间，如果内存抖动(大量的对象被创建又在短时间内马上被释放)而频繁 gc 则会影响用户体验

既然创建和销毁对象是很耗时的，所以要尽可能减少创建和销毁对象的次数

使用时候申请(getPooled)和释放(release)成对出现，使用一个对象后一定要释放还给池子(释放时候要对内部变量置空方便下次使用)

[相关链接](https://zhuanlan.zhihu.com/p/28697362)

## 关于reduce:

reduce 接受一个函数作为累加器，数据里的每一项从左到右开始缩减，最终计算为一个值。

作为一个高阶函数用作react-redux 的 compose,

对于空数组是不会执行函数的

语法：

数组.reducer(function(totle, currentVal, currentIndex, arr), initialValue)

参数：

|参数|描述|
|----|----|
|function(totle, currentVal, currentIndex, arr)|必须值，执行整个数组的函数。total：必须。初始值，或者计算过后的返回值  currentVal: 必须，当前元素 currentIndex: 可选，当前元素的索引 arr: 可选，当前元素所属的数组对象|
|initalValue|可选，传递给函数的初始值|

小栗子：

                var numbers = [15.5, 2.3, 1.1, 4.7];

                function getSum(total, num) {
                        return total + Math.round(num);
                }
                function myFunction(item) {
                        document.getElementById("demo").innerHTML = numbers.reduce(getSum, 0);
                }

reduceRight 也是同理，区别在于是从后往前计算

[更多栗子](https://www.w3cplus.com/javascript/array-part-8.html)

[更多栗子](https://github.com/zyh9/Small-example/blob/master/reduce%E5%B0%8F%E4%BE%8B%E5%AD%90.html)   (给颗小星星

## 利用css变量实现按钮的小效果

暂停动画：鼠标移动到按钮上光标会显示彩色渐变

原理：

追踪位置,获取鼠标的位置：

1.选择元素，等待，直到用户将鼠标移过它；

2.计算相对于元素的位置；

3.将坐标存在css变量中。

动画渐变：

原理：

css变量：

1.用span包裹文本，以避免显示在按钮上方；

2.将width和height初始化为0px,当用户划过（悬停）按钮上时，将其改为400px。不要忘了设置这种旋转以使其像风一样瞬间出现；

3.利用鼠标追踪鼠标位置；

4.在background属性上应用radial- gradient，使用closest-side circle。closest-side能覆盖整个页面。

不知道为什么我写的不行，先拖着，

[代码链接](https://github.com/cuixiaohui233/githubke-/blob/master/炫酷按钮.html)

[css变量相关学习资料](https://blog.csdn.net/u011043843/article/details/46480677)

## 关于react-router的问题

问题描述：点击按钮跳转后，滑动到底部，回到上一个页面，也随着滑动到底部。

问题原因：React Router 不维护 scroll position

解决办法：

1.使用[react-router-scrool](https://github.com/taion/react-router-scroll)

2.在 onUpdate 时，调用window.scroolTo,(之前用到过这个，谷歌浏览器可能有点问题，很奇怪，可以用定时器 setTimeout 包一下。

## 关于该死的Object.keys()

传入对象，返回属性值：

                let arr =  {name: '崔晓慧', age: '23',sex: '女'}
                console.log(Object.keys(arr));// ['name', 'age', 'sex']
                
                var obj1 = { 100: "a", 2: "b", 7: "c"};
                console.log(Object.keys(obj1)); // console: ["2", "7", "100"]

                var obj2 = Object.create({}, { getFoo : { value : function () { return this.foo } } });
                obj2.foo = 1;
                console.log(Object.keys(obj2)); // console: ["foo"]
                
传入字符串，返回索引：

                var str = 'ab1234';

数组 返回索引

                var arr = ["a", "b", "c"];
                console.log(Object.keys(arr)); // console: ["0", "1", "2"]
                console.log(Object.keys(obj));  //[0,1,2,3,4,5]

这种

                isHavePermission
                ? (client_type_value ? clientType.find(e => e.value == client_type_value).label : '')
                : <Select
                        value={client_type_value ? client_type_value : "点击选择"}
                        ref="clientTypeSelect"
                        onChange={this.clientTypeChange}
                        style={{
                        width: 150,
                        color:`${ client_type_value ? '#595959' : '#908c8c'} `,
                        fontSize: 15
                        }}
                        >
                        {cClientTypeOption}
                   </Select>

嵌套三目运算简直恶心死，又要被老大骂了...我能怎么办，我也很绝望啊 
                     
### 关于小程序的全屏显示：

这个玩意儿好像是新的API，呵呵呵，虽然我老的新的一个API都不会，但是万一，以后遇到了呢：

酱酱~就是

"navigationStyle":"custom"

另一个啥东西“超过距离，显示自定义的顶部效果是固定定位”，不是很懂，这个再说吧...

多挖点坑，万一能填上呢 [Smirk]

### node

### mobx

### redux-saga

### dva

### MongoDB

### HTTP协议

### 关于获取、下载二维码：

HTML部分：
  
    <div>
      <Button
        type="primary"
        onClick={(e)=> this.getQRcode(item.lease_id, item.end_date)}>
        {item.zorders.length != 0 && item.zorders[0].status == "ZORDER_STATUS_RETURN" ? "重新获取" : "获取二维码"}
      </Button>
      <a 
        ref={"down_" + item.lease_id} 
        className="svgDownload"
        download={"QRcode_" + item.lease_id}
      >
        <svg 
          ref={"svg_" + item.lease_id} 
          version="1.1"
          viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"
        >
          <path ref={"path_" + item.lease_id}/>
        </svg>
      </a>
    </div> 

点击按钮获取二维码，点击二维码下载图片

js 部分：

    就是请求接口然后设置 svg 的属性
    
### 关于 svg 标签，以及用到的 a 标签的 download 属性


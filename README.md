### 关于数据库表的定义
1.数据表和逻辑没关系，在定义的时候，首先确定主键，保证可以满足大多数情况，将所有可能出错的地方都需要考虑，例如以下这个案例：
 租赁订单表和买卖订单表都需要关联采购订单，这个采购订单首先需要一个自身的递增主键ID之后，还需要存储订单的ID来区分是哪个订单下的采购订单，这个时候就会出现的一个差错就是，存储的order_id有可能相同，所以这个数据需要一个辅助的add_type字段来区分出订单的来源，保证数据的唯一性。
2.数据表的其他字段，“物尽其用，不多余不重复，一个字段可以概括的就用一个字段”。
3.程序
### 请求数据浪费资源，还是查询数据表浪费资源？
### node 的orm 工具 --- orm2

定义数据类型

string VERCHAR

number FLOAT

integer INT

serial  自增主键

### 在 node 中通过 js 对象来映射数据库的sql语句以达到增删改查的功能的 orm 工具 --- Sequelize

[详情文档请见](https://github.com/sequelize/sequelize)

但是我整了半天也连不上，气死我了

### 查询是哪个网页跳到当前网页的 --- referrer

通过 document.referrer 来获取网页跳转源，但在react 的 react-router 中好像不适用，因为亲测获取不到。

### 《数据库原理》

#### 关系型数据库
 
事件之间存在着必然关系，介于关系之间的桥梁划分出多个表，是我理解的关系型数据库。

便于增删改查而互不影响。

关系数据库表的行代表的是实体的数据记录，列代表实体的每一个字段（或属性）。

主键：我理解的是用来区分数据唯一性的字段。

唯一键：

组合键：多个字段在一起证明记录之间的区分，是组合键。

### ipython --- 命令行预执行工具，相当于 goole 的控制台
### fab --- python 自动化运维工具（可执行 Python 脚本）

安装：
pip install fabric
 
然后编写一个简单的 .py 文件

fab 服务器的名字 要执行的方法

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
          age:    

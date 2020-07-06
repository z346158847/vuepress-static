(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{511:function(a,t,e){"use strict";e.r(t);var s=e(4),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),e("p",[a._v("用了快一年的服务器，期间学习下载了不少东西，有点乱了，决定将它初始化，顺便重新回顾一下Java开发环境的配置。打开"),e("a",{attrs:{href:"https://www.google.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("谷歌"),e("OutboundLink")],1),a._v("，搜索，开始踩坑。")]),a._v(" "),e("h2",{attrs:{id:"一-java安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-java安装"}},[a._v("#")]),a._v(" 一.Java安装")]),a._v(" "),e("h3",{attrs:{id:"_1-检查是否安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-检查是否安装"}},[a._v("#")]),a._v(" 1.检查是否安装")]),a._v(" "),e("p",[a._v("检查系统是否安装了JDK（有些会默认装openJDK），若无，忽略这步")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("[root@xxx ~]#java -version\n# 一般是openJDK\n[root@xxx ~]# rpm -qa | grep openjdk\n# 卸载openJDK\n[root@xxx ~]# rpm -e --nodeps java-1.6.0-openjdk-xxx\n")])])]),e("h3",{attrs:{id:"_2-下载java"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-下载java"}},[a._v("#")]),a._v(" 2.下载Java")]),a._v(" "),e("p",[a._v("找到 Oracle官网 -> Java -> JavaSE -> JavaSE8u211\n也就是这个网址 "),e("a",{attrs:{href:"https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("JavaSE8u211下载"),e("OutboundLink")],1)]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",[a._v("1772885836@qq.com/OracleTest1234")])]),a._v(" "),e("p",[a._v("这里顺便提一下 8u211 和 8u212的"),e("strong",[a._v("区别")]),a._v("\nJDK版本7u71以后，Java会在同一时间发布2个版本，其中：\n奇数版为BUG修正并全部通过检验的版本。\n偶数版包括奇数版，以及未被验证的BUG修复。推荐使用奇数版。\n"),e("img",{attrs:{src:"http://ww1.sinaimg.cn/large/007eIU54ly1g52nojhljpj30f008uq3c.jpg",alt:""}})]),a._v(" "),e("p",[a._v("注：2019/04/16以后下载Java8需要Oracle账户，我注册了一下，还是很简单的，需要验证邮箱，不想注册的话可以到微软或AWS上下载，贴上AWS的GitHub："),e("a",{attrs:{href:"https://github.com/frekele/oracle-java/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("AWS的GitHub的下载地址"),e("OutboundLink")],1),a._v("，不翻墙速度就...")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('[root@xxx ~]# wget "这里放你获取到的地址，因为需要登录所以地址不固定"\n# 这里采用wget方式下载 若为Oracale官网下载 我这里文件名为 jdk-8u211-linux-x64.rpm/Auxxxxxx  所以我这里修改了文件名\n[root@xxx ~]# mv jdk-8u211-linux-x64.rpm/Auxxxxxx    jdk-8u211-linux-x64.rpm\n# 采用yum方式安装\n[root@xxx ~]# yum -y localinstall jdk-8u211-linux-x64.rpm\n[root@xxx ~]# java -version\n[root@xxx ~]# java -version\njava version "1.8.0_211"\n# 设置jdk环境变量\n[root@xxx ~]# vi /etc/profile\n# 最后增加\nexport JAVA_HOME=/usr/java/default\nexport PATH=$PATH:$JAVA_HOME/bin\nexport CLASSPATH=.:$JAVA_HOME/jre/lib:$JAVA_HOME/lib:$JAVA_HOME/lib/tools.jar\n[root@xxx ~]# source /etc/profile\n')])])]),e("h3",{attrs:{id:"_3-测试java环境是否正常"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-测试java环境是否正常"}},[a._v("#")]),a._v(" 3.测试Java环境是否正常")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('[root@xxx ~]#vi hello.java\nclass hello {\npublic static void main(String[] args) {\n    System.out.println("helloWorld");\n\t}\n}\n[root@xxx ~]# javac hello.java\n[root@xxx ~]# java hello\n')])])]),e("h2",{attrs:{id:"二-mysql的安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-mysql的安装"}},[a._v("#")]),a._v(" 二.Mysql的安装")]),a._v(" "),e("p",[a._v("接下来是Mysql的安装，先说下，从Centos7开始，MariaDB成为yum源中默认的数据库安装包，搜索了一些文章后，MariaDB是Mysql的分支，综合了一下就安这个默认的吧（在我看来问题不大）。")]),a._v(" "),e("h3",{attrs:{id:"_1-检查mariadb是否安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-检查mariadb是否安装"}},[a._v("#")]),a._v(" 1.检查MariaDB是否安装")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("[root@xxx ~]#yum list installed | grep mariadb\nmariadb-libs.x86_64\n#若安装，卸载全部MariaDB相关\n[root@xxx ~]yum -y remove mariadb*\n")])])]),e("h3",{attrs:{id:"_2-下载mysql的yum源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-下载mysql的yum源"}},[a._v("#")]),a._v(" 2.下载Mysql的yum源")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('#进入下载的路径，一般都下载到这里\n[root@xxx ~]#cd /usr/local/src\n#wget下载\n[root@xxx ~]#wget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm\n#安装Mysql的yum源\n[root@xxx ~]#rpm -ivh mysql57-community-release-el7-11.noarch.rpm\n#检查Mysql的yum源是否安装成功\n[root@xxx ~]#yum repolist enabled | grep "mysql.*-community.*"\nmysql-connectors-xxxxxx\n# 查看Mysql版本\n[root@xxx ~]#yum repolist all | grep mysql\n')])])]),e("h3",{attrs:{id:"_3-安装mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装mysql"}},[a._v("#")]),a._v(" 3.安装Mysql")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("[root@xxx ~]#yum -y install mysql-community-server\n")])])]),e("h3",{attrs:{id:"_4-测试连接mysql服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-测试连接mysql服务"}},[a._v("#")]),a._v(" 4.测试连接Mysql服务")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("#先启动Mysql服务\n[root@xxx ~]#systemctl start mysqld\n#这个时候没有密码应该是进不去的\n[root@xxx ~]#mysql -u root\n#停止Mysql服务\n[root@xxx ~]#systemctl stop mysqld\n#以不检查权限的方式启动Mysql\n[root@xxx ~]#mysqld --user=root --skip-grant-tables &\n[root@xxx ~]#mysql -u root\n#注意 密码设置时 5.7默认需要 大小写 + 数字 + 特殊字符\nmysql>UPDATE mysql.user SET authentication_string=PASSWORD('你的密码') where USER='root';\n#刷新\nmysql>flush privileges;\n#退出\nmysql>exit;\n#设置完成就可以 登进数据库了\n[root@xxx ~]#mysql -u root -p\n")])])]),e("h3",{attrs:{id:"_5-防火墙相关设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-防火墙相关设置"}},[a._v("#")]),a._v(" 5.防火墙相关设置")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("#查看防火墙是否开启\n[root@xxx ~]#systemctl status firewalld\n#打开防火墙\n[root@xxx ~]#systemctl start firewalld\n#开放3306端口  此时可以顺便把常用的80、8080端口一并开启\n[root@xxx ~]#firewall-cmd --permanent --zone=public --add-port=3306/tcp\n[root@xxx ~]#firewall-cmd --permanent --zone=public --add-port=3306/udp\n[root@xxx ~]#firewall-cmd --reload\n#查看以开放端口\n[root@xxx ~]#firewall-cmd --list-ports\n#将Mysql服务加入防火墙\n[root@xxx ~]#firewall-cmd --zone=public --permanent --add-service=mysql\n#重启\n[root@xxx ~]#systemctl restart firewalld\n#加入开机启动\n[root@xxx ~]#systemctl enable mysqld\n")])])]),e("h3",{attrs:{id:"_6-设置远程访问（看情况选择）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-设置远程访问（看情况选择）"}},[a._v("#")]),a._v(" 6.设置远程访问（看情况选择）")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("#默认情况下 MySQL 是不允许远程连接的 允许任意主机通过 root 用户使用 密码连接到mysql服务器\nmysql>grant all privileges on *.* to root@\"%\" identified by '复杂密码';\n#刷新\nmysql>flush privileges;\n")])])]),e("h2",{attrs:{id:"三-tomcat安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-tomcat安装"}},[a._v("#")]),a._v(" 三.Tomcat安装")]),a._v(" "),e("h3",{attrs:{id:"_1-下载tomcat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载tomcat"}},[a._v("#")]),a._v(" 1.下载Tomcat")]),a._v(" "),e("p",[a._v("神奇的是只有7.0、9.0、8.5  没有8.0版本的下载地址\n下载tomcat linux安装包 "),e("a",{attrs:{href:"https://tomcat.apache.org/download-80.cgi",target:"_blank",rel:"noopener noreferrer"}},[a._v("Tomcat下载地址"),e("OutboundLink")],1),a._v(" "),e("img",{attrs:{src:"http://ww1.sinaimg.cn/large/007eIU54ly1g52pnv6nfxj30ia097js1.jpg",alt:""}})]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("#进入下载的路径\n[root@xxx ~]#cd /usr/local/src\n#wget下载\n[root@xxx ~]#wget https://mirrors.tuna.tsinghua.edu.cn/apache/tomcat/tomcat-8/v8.5.43/bin/apache-tomcat-8.5.43.tar.gz\n[root@xxx ~]#tar -zxvf  apache-tomcat-8.5.43.tar.gz\n[root@xxx ~]#cd apache-tomcat-8.5.43/bin\n")])])]),e("h3",{attrs:{id:"_2-启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动"}},[a._v("#")]),a._v(" 2.启动")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("[root@xxx ~]#./startup.sh\n")])])]),e("p",[a._v("记得开放8080端口")]),a._v(" "),e("h3",{attrs:{id:"_3-tomcat配置开机启动和service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-tomcat配置开机启动和service"}},[a._v("#")]),a._v(" 3.tomcat配置开机启动和service")]),a._v(" "),e("p",[a._v("1.先了解一下Centos7使用systemctl替换了service命令")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("查看服务\nsystemctl status name.service\n启动服务\nsystemctl start name.service\n停止服务\nsystemctl stop name.service\n重启服务\nsystemctl restart name.service\n增加开机启动\nsystemctl enable name.service\n删除开机启动\nsystemctl disable name.service\n")])])]),e("p",[a._v("2.tomcat增加启动参数，tomcat需要增加一个pid文件")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('[root@xxx ]#vim /usr/local/src/apache-tomcat-8.5.43/bin/setenv.sh\n#tomcat\nexport CATALINA_HOME=/usr/local/src/apache-tomcat-8.5.43\nexport CATALINA_BASE=/usr/local/src/apache-tomcat-8.5.43\n#add tomcat pid\nCATALINA_PID="$CATALINA_BASE/tomcat.pid"\n#add java opts\nJAVA_OPTS="-server -XX:PermSize=256M -XX:MaxPermSize=1024m -Xms512M -Xmx1024M -XX:MaxNewSize=256m"\n')])])]),e("p",[a._v("3.增加tomcat.service")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("[root@xxx]#vim /usr/lib/systemd/system/tomcat.service\n[Unit]\nDescription=Tomcat\nAfter=syslog.target network.target remote-fs.target nss-lookup.target\n[Service]\nType=forking\nPIDFile=/usr/local/src/apache-tomcat-8.5.43/tomcat.pid\nExecStart=/usr/local/src/apache-tomcat-8.5.43/bin/startup.sh\nExecReload=/bin/kill -s HUP $MAINPID\nExecStop=/bin/kill -s QUIT $MAINPID\nPrivateTmp=true\n[Install]\nWantedBy=multi-user.target\n")])])]),e("p",[a._v("4.使用tomcat.service")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("systemctl enable tomcat.service\n\nsystemctl start tomcat.service\n\nsystemctl stop tomcat.service\n\nsystemctl restart tomcat.service\n\n因为配置pid，在启动的时候会在tomcat的根目录下生产tomcat.pid文件，停止后删除\n")])])]),e("h3",{attrs:{id:"_4-优化tomcat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-优化tomcat"}},[a._v("#")]),a._v(" 4.优化tomcat")]),a._v(" "),e("p",[a._v("还发现个问题就是tomcat启动巨慢")]),a._v(" "),e("p",[a._v("通过查看tomcat日志发现")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("[root@xxx]#cat /usr/local/src/apache-tomcat-8.5.43/logs/catalina.out\n17-Jul-2019 12:56:11.644 WARNING [localhost-startStop-1] org.apache.catalina.util.SessionIdGeneratorBase.createSecureRandom Creation of SecureRandom instance for session ID generation using [SHA1PRNG] took [514,651] milliseconds.\n")])])]),e("p",[a._v("通过查找资料，原因在于就是通过随机数生成秘钥的时候卡住了，导致Tomcat启动慢或失败。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("#注意这个数字 只有137\n[root@xxx]#cat  /proc/sys/kernel/random/entropy_avail\n137\n")])])]),e("p",[a._v("解决方法有3种\n"),e("strong",[a._v("方法1：使用rngd 软件增大熵池 建议使用")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("grep  rdrand /proc/cpuinfo #需要cpu支持\nyum install rng-tools # 安装rngd服务（熵服务，增大熵池）\nsystemctl start rngd  # 启动服务\n")])])]),e("p",[e("strong",[a._v("方法2：java环境下修改配置文件")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("vim $JAVA_HOME/jre/lib/security/java.security\nsecurerandom.source=file:/dev/random\n改为\nsecurerandom.source=file:/dev/urandom\n")])])]),e("p",[e("strong",[a._v("方法3：可以通过配置JRE使用非阻塞的Entropy Source：")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('vim $TOMCAT_HOME/bin/catalina.sh\nif [[ "$JAVA_OPTS" !=*-Djava.security.egd=* ]]; then\n  JAVA_OPTS="$JAVA_OPTS -Djava.security.egd=file:/dev/urandom"\nfi\n##这个系统属性egd表示熵收集守护进程(entropy gathering daemon)\n')])])]),e("p",[a._v("我使用的方法一，之前需要几分钟，现在秒启动")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("#注意这个数字 变大为2983\n[root@xxx]#cat  /proc/sys/kernel/random/entropy_avail\n2983\n17-Jul-2019 13:27:39.902 INFO [main] org.apache.catalina.startup.Catalina.start Server startup in 1478 ms\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);
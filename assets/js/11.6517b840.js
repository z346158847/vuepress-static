(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{494:function(t,v,s){"use strict";s.r(v);var _=s(4),o=Object(_.a)({},(function(){var t=this,v=t.$createElement,s=t._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"一、查看日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、查看日志"}},[t._v("#")]),t._v(" 一、查看日志")]),t._v(" "),s("p",[t._v("spring-boot项目启动会生成 "),s("strong",[t._v("nohup.out")]),t._v(" 文件")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[t._v("cat nohup.out\ntail -f nohup.out"),s("br"),t._v("\nvim nohup.out")])]),t._v(" "),s("p",[s("em",[s("strong",[t._v("vim")])]),t._v(" 主要用于编辑配置文件")]),t._v(" "),s("ul",[s("li",[t._v("vim nohup.out")]),t._v(" "),s("li",[t._v("按G跳转到文件的末尾")]),t._v(" "),s("li",[t._v("从开头搜索，按/ +关键字搜索对应的记录，按n往下查询，按N往上查询")]),t._v(" "),s("li",[t._v("从结尾处搜索，按? +关键字搜索对应的记录，按n往上查询，按N往下查询")]),t._v(" "),s("li",[t._v("搜索后，打开别的文件发现也被高亮了，输入：nohlsearch或者：set nohlsearch，简写成noh和set-noh")])]),t._v(" "),s("p",[s("em",[s("strong",[t._v("tail -f")])]),t._v("  滚动查看")]),t._v(" "),s("ul",[s("li",[t._v("tail -f -n 200 nohup.out  查看最后200行")])]),t._v(" "),s("p",[s("em",[s("strong",[t._v("cat")])]),t._v(" 查看")]),t._v(" "),s("ul",[s("li",[t._v("cat nohup.out | grep 123456 搜索关键词")]),t._v(" "),s("li",[t._v("cat service.log | wc -l 日志输出了多少行")])]),t._v(" "),s("h1",{attrs:{id:"二、查进程和端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、查进程和端口"}},[t._v("#")]),t._v(" 二、查进程和端口")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[t._v("ps -ef |grep java\nkill -9 processId //杀掉某个进程")])]),t._v(" "),s("h1",{attrs:{id:"三、查看系统的状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、查看系统的状态"}},[t._v("#")]),t._v(" 三、查看系统的状态")]),t._v(" "),s("p",[t._v("TOP实时查看进程的状态")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[t._v("top")])]),t._v(" "),s("p",[t._v("查看内存使用状况")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[t._v("free")])])])}),[],!1,null,null,null);v.default=o.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{495:function(s,t,a){"use strict";a.r(t);var r=a(4),o=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"ssr介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssr介绍"}},[s._v("#")]),s._v(" SSR介绍")]),s._v(" "),a("p",[s._v("科学上网，懂的人都懂\nShadowSocksR则是原版ShadowSocks（SS）的一个衍生版本，相比原版而言，主要增加了混淆参数功能 。\n"),a("img",{attrs:{src:"http://img.zwjblog.top/FrAXDLLR8IvXQf7qrreiJ6SErlDz",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"shadowsocksr搭建流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shadowsocksr搭建流程"}},[s._v("#")]),s._v(" ShadowSocksR搭建流程")]),s._v(" "),a("p",[s._v("服务器，腾讯云，香港，抢占式实例")]),s._v(" "),a("h3",{attrs:{id:"_1-部署bbr服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-部署bbr服务"}},[s._v("#")]),s._v(" 1.部署BBR服务")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("//切换当前用户为root用户\nsudo -i\n// 下载bbr安装脚本\nwget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh\n// 给脚本加上可执行权限：\nchmod +x bbr.sh\n// 运行脚本  安装成功后自动重启服务器\n./bbr.sh\n// 查看内核版本，如果返回值有4.13或以上版本，表示成功\nuname -r\n")])])]),a("h3",{attrs:{id:"_2-安装ssr服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装ssr服务"}},[s._v("#")]),s._v(" 2.安装SSR服务")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("// 下载安装脚本\nwget --no-check-certificate -O shadowsocks-all.sh https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks-all.sh\n//为脚本加可执行权限\nchmod +x shadowsocks-all.sh\n//运行脚本\n./shadowsocks-all.sh 2>&1 | tee shadowsocks-all.log\n//根据脚本配置SSR\n\n//安装完成后会显示你所配置的ssr服务相关ip和账号信息，手动输入账号信息或一键导入即可使用。\n")])])]),a("h3",{attrs:{id:"_3-结果展示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-结果展示"}},[s._v("#")]),s._v(" 3.结果展示")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("Congratulations, ShadowsocksR server install completed!\nYour Server IP        :  129.226.49.161 \nYour Server Port      :  12661 \nYour Password         :  123456\nYour Protocol         :  auth_chain_b \nYour obfs             :  tls1.2_ticket_auth_compatible \nYour Encryption Method:  aes-192-cfb8 \n\nYour QR Code: (For ShadowsocksR Windows, Android clients only)\n ssr://MTI5LjIyNi40OS4xNjE6MTI2NjE6YXV0aF9jaGFpbl9iOmFlcy0xOTItY2ZiODp0bHMxLjJfdGlja2V0X2F1dGhfY29tcGF0aWJsZTpXbmRxTVRrNU5rQS8/b2Jmc3BhcmFtPQ== \nYour QR Code has been saved as a PNG file path:\n /root/shadowsocks_r_qr.png \n\nWelcome to visit: https://teddysun.com/486.html\nEnjoy it!\n")])])]),a("h2",{attrs:{id:"使用教程加谷歌插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用教程加谷歌插件"}},[s._v("#")]),s._v(" 使用教程加谷歌插件")]),s._v(" "),a("h3",{attrs:{id:"_1-下载安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载安装"}},[s._v("#")]),s._v(" 1. 下载安装")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/shadowsocksrr/shadowsocksr-csharp/releases/download/4.9.0/ShadowsocksR-win-4.9.0.zip",target:"_blank",rel:"noopener noreferrer"}},[s._v("SSR4.9下载"),a("OutboundLink")],1),s._v("\nSSR下载完成后，解压，然后后运行ShadowsocksR-dotnet2.0.exe（32位） 或 ShadowsocksR-dotnet4.0.exe（64位） 即可。\nSSR Windows客户端的运行，需要.net环境的支持，一般来说Win7以上系统可以直接运行。\n"),a("a",{attrs:{href:"https://www.microsoft.com/zh-cn/download/details.aspx?id=17718%22",target:"_blank",rel:"noopener noreferrer"}},[s._v(".net下载"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"_2-ssr客户端使用教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-ssr客户端使用教程"}},[s._v("#")]),s._v(" 2.SSR客户端使用教程")]),s._v(" "),a("p",[s._v("2.1 SSR成功运行后，系统任务栏会出现一个小飞机标志：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://img.zwjblog.top/FqQFMKsC8LJHpko3i-lHxI4QLa4w",alt:""}})]),s._v(" "),a("p",[s._v("2.2 我们需要先添加SSR服务器。复制好服务器生成的"),a("code",[s._v("ssr://链接")]),s._v("，右键点击小飞机——服务器——剪切板批量导入ssr")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://img.zwjblog.top/FhH5MYsEZ05u-LLT2-duKQL5xGRk",alt:""}})]),s._v(" "),a("p",[s._v("2.3 右键点击小飞机——服务器，找到你新导入的节点，代理模式改为"),a("code",[s._v("PAC模式")])]),s._v(" "),a("p",[s._v("2.4 系统代理模式\nSSR的代理模式，通过该项对流量进行（第一次分流见下文）。决定进入SSR客户端的流量是否走代理。默认为全局模式，下面我们分别介绍。")]),s._v(" "),a("ol",[a("li",[a("strong",[s._v("直连模式：")]),s._v(" 所有进入SSR的流量不走代理，相当于没有安装SSR。一般我们很少选择这一项。")]),s._v(" "),a("li",[a("strong",[s._v("PAC模式：")]),s._v(" 通过SSR目录中的pac.txt文件，判断进入SSR客户端的流量是否走代理。")]),s._v(" "),a("li",[a("strong",[s._v("全局模式：")]),s._v(" 所有进入SSR客户端的流量都走代理。")])]),s._v(" "),a("h3",{attrs:{id:"_3-谷歌插件switchyomega插件分流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-谷歌插件switchyomega插件分流"}},[s._v("#")]),s._v(" 3.谷歌插件SwitchyOmega插件分流")]),s._v(" "),a("ol",[a("li",[s._v("进入谷歌应用商店下载SwitchyOmega插件")]),s._v(" "),a("li",[s._v("将小飞机系统代理模式修改为直连模式")]),s._v(" "),a("li",[a("a",{attrs:{href:"http://wjzhang.lanzous.com/i50zgmd",target:"_blank",rel:"noopener noreferrer"}},[s._v("SwitchyOmega备份文件"),a("OutboundLink")],1),s._v("下载并解压\n"),a("img",{attrs:{src:"http://img.zwjblog.top/FqT4FstsaAEeF_MZziUH9prrsAYF",alt:""}}),s._v("\n导入/导出中从备份文件中恢复，注意端口需要与小飞机端口一致，默认1080")])]),s._v(" "),a("h3",{attrs:{id:"_4-机场分享"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-机场分享"}},[s._v("#")]),s._v(" 4.机场分享")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.xinjiecloud.co/auth/login",target:"_blank",rel:"noopener noreferrer"}},[s._v("心阶云"),a("OutboundLink")],1),s._v("\n暂时用的这个，89一年，以后有更好的再换")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("See More")]),s._v(" "),a("p",[s._v("https://sub.xinjie.eu.org/link/N7iSrNUFmUtfWOEZ?mu=1")])])])}),[],!1,null,null,null);t.default=o.exports}}]);
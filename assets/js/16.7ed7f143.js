(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{505:function(s,a,t){"use strict";t.r(a);var e=t(4),i=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"一、工具安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、工具安装"}},[s._v("#")]),s._v(" 一、工具安装")]),s._v(" "),t("h1",{attrs:{id:"二、生成ssh-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、生成ssh-key"}},[s._v("#")]),s._v(" 二、生成ssh key")]),s._v(" "),t("h2",{attrs:{id:"生成本机私钥公钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成本机私钥公钥"}},[s._v("#")]),s._v(" 生成本机私钥公钥")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[s._v('ssh-keygen -t rsa -C "your_email@example.com"')])]),s._v(" "),t("h2",{attrs:{id:"将ssh-key添加到github中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将ssh-key添加到github中"}},[s._v("#")]),s._v(" 将ssh key添加到GitHub中")]),s._v(" "),t("p",[s._v("GitHub中setting立的SSH新建一个添加进去")]),s._v(" "),t("h1",{attrs:{id:"三、创建本机用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、创建本机用户"}},[s._v("#")]),s._v(" 三、创建本机用户")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[s._v('git config --global user.email "you@example.com"\ngit config --global user.name "Your Name"')])]),s._v(" "),t("h1",{attrs:{id:"四、将代码提交到本地库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、将代码提交到本地库"}},[s._v("#")]),s._v(" 四、将代码提交到本地库")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[s._v('git add .\ngit commit -m "描述"')])]),s._v(" "),t("h1",{attrs:{id:"五、将代码提交到远程仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、将代码提交到远程仓库"}},[s._v("#")]),s._v(" 五、将代码提交到远程仓库")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git remote -v  //查看远程仓库地址\ngit remote add origin git@github.com:z346158847/vuepress.git  //添加远程仓库地址到origin\ngit clone git@github.com:z346158847/vuepress.git  //克隆仓库，注意加个yes \ngit pull origin master  //拉取代码 缩写 git pull\ngit push origin master  //推送代码 缩写 git push\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h1",{attrs:{id:"六、git中crlf与lf的转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、git中crlf与lf的转换"}},[s._v("#")]),s._v(" 六、Git中CRLF与LF的转换")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[s._v("git config --global core.autocrlf true   //解决")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// 提交时转换为LF，检出时转换为CRLF\ngit config --global core.autocrlf true   \n\n// 提交时转换为LF，检出时不转换\ngit config --global core.autocrlf input   \n\n// 提交检出均不转换\ngit config --global core.autocrlf false\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// 拒绝提交包含混合换行符的文件 （一般设置为true）\ngit config --global core.safecrlf true   \n\n// 允许提交包含混合换行符的文件\ngit config --global core.safecrlf false   \n\n// 提交包含混合换行符的文件时给出警告\ngit config --global core.safecrlf warn\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("这里面还踩过一个坑，我的.gitignore不生效了，清除缓存也不行")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git rm -r --cached .\ngit add .gitignore\ngit commit -m “update .gitignore”\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("最后原因是.gitignore换行符为CR,改为CRLF就可以了")])])}),[],!1,null,null,null);a.default=i.exports}}]);
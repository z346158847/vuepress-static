(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{508:function(s,t,a){"use strict";a.r(t);var e=a(4),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("一.字符串与数组之间的相互转换\n1、字符串转换为数组")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[s._v("str.split(','); // 以逗号,为拆分的字符串")])]),s._v(" "),a("p",[s._v("2、数组转换为字符串")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[s._v("arr.join(','); // 把数组项拼接成字符串，以逗号,分隔")])]),s._v(" "),a("p",[s._v("二.Json字符串转换为json对象\n1、使用eval")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[s._v("result = eval('(' + jsonstr + ')'); // jsonstr是json字符串")])]),s._v(" "),a("p",[s._v("2、使用JSON.parse()")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[s._v("result = JSON.parse(jsonstr); // jsonstr是json字符串")])]),s._v(" "),a("p",[s._v("eval和JSON.parse的区别：")]),s._v(" "),a("p",[s._v("eval 是javascript支持的方式，不需要严格的json格式的数据也可以转化")]),s._v(" "),a("p",[s._v("JSON.parse 是浏览器支持的转换方式，必须要标准的json格式才可以转换")]),s._v(" "),a("p",[s._v("三.遍历JSon数组并动态添加属性")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("for(let i =0;i<objNode.length;i++){\n    objNode[i]['label'] = labelShow\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);
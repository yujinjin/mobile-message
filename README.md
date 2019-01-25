## mobile-message
mobile-message是一个基于移动端的弹窗组件，默认提供info、success、warning、error、alert、confirm、multiple、vertical、bottomSheet、prompt，可自定义弹窗。它可以包含任何Html内容可以自定义弹窗的样式，也可以加入自定以的弹窗动画。

网上关于弹窗的组件也很多，就算是自己写代码也很少很简单。但mobile-message有一下3个不同的特点。
- 弹窗是单例模式，就是只有一个实例。这体现在当多个弹窗展示时只会显示最后一个弹窗的内容，比如：当前正在展示的是弹窗A，代码又调用了弹窗B，这个时候就会把弹窗A的内容变成弹窗B的内容，记住是变成而不是常规的先把弹窗A关掉然后再显示弹窗B。
- 一套简单的代码兼容10种弹窗模式，只是因为样式不一样，代码轻量，方便维护，容易扩展，可根据自己的业务需要自定义。
- 让弹窗弹层背后整个页面禁止滚动，而弹层自己的内容是可滚动的。这是最麻烦的处理，但看网上大多数都没做处理或者处理的不够完美。

## 运行项目
clone项目到本地，进入项目文件夹，安装依赖

```javascript
git clone https://github.com/yujinjin/mobile-message.git
cd mobile-message
npm install
```
运行demo，会自动打开浏览器地址运行
```javascript
npm run demo
```
编译打包项目
```javascript
npm run compile
```

## NPM
```javascript
npm install mobile-message
```
## 依赖
- VUE

## 使用
作为插件
```javascript
import Vue from 'vue'
import MobileMessage from 'mobile-message'
import 'mobile-message/dist/message.css'

// VUE use
Vue.use(MobileMessage);
// or with options
Vue.use(MobileMessage, {
    initCallback: null, // 初始化后的弹窗的回调函数（会传入当前弹窗的$body参数）
	isShowMask: false, // 是否显示弹层的遮罩层
	icon: "", // 内容消息的icon，默认提供：message-info,message-success,message-warning,message-error
	autoHide: true, // 点击遮罩层是否自动隐藏
	className: null, // 弹层的样式名称
	contents: null, // 弹窗的内容（支持HTML），如果为null或者''就不会展示
	title: null, // 弹窗的头部标题，如果为null或者''就不会展示
	height: 'inherit', // 弹层高度（默认'inherit'）
	buttons: [], //弹层的底部按钮列表[{className|label|callback}]，如果为null或者数组长度为0就不会展示
	scrollerData: {
		selectorScrollable: null // 指定标记的滚动元素，如果为null就指定默认元素，指定子元素或父元素皆可
	} // scroller事件对象数据，如果是false或null表示不绑定事件
});

```
作为JS 对象
```javascript
import MobileMessage from 'mobile-message'
import 'mobile-message/dist/message.css'

let message = MobileMessage.get({});
message(...);
message.success(...);
...
```
## 配置选项

名称 | 描述 | 默认值 | 可选项
---|---|---|---
`initCallback` | 是否显示去顶部图标初始化后的弹窗的回调函数（会传入当前弹窗的$body参数） | null | `Function`
`isShowMask` | 是否显示弹层的遮罩层 | false | `Boolean`
`icon` | 内容消息的icon，默认提供：message-icon-info,message-icon-success,message-icon-warning,message-icon-error | ` ` | `String`
`delay` | 窗口多少毫秒后自动关闭，为0时，不自动关闭 | 0 | `Number`
`autoHide` | 点击遮罩层是否自动隐藏 | true | `Boolean`
`className` | 弹层的样式名称，这个是定义在弹窗的'message-dialog'样式上 | null | `String`
`contents` | 弹窗的内容（支持HTML），如果为null或者''就不会展示 | null | `String`
`title` | 弹窗的头部标题，如果为null或者''就不会展示头部 | null | `String`
`height` |  弹层高度（默认'inherit'）| inherit | `String`
`buttons` | 弹层的底部按钮列表[{className,label,callback}]，如果为null或者数组长度为0就不会展示 | [] | `Array`
`scrollerData` |  scroller事件对象数据，如果是false或null表示不绑定事件 | `{selectorScrollable: null}` | `Object`

## API
###### 1. 默认
默认消息弹窗，默认只传入消息的内容一个参数即可、2秒之后自动隐藏、没有遮罩层、点击其他会自动关闭弹窗，如需调整自动隐藏时间需加入delay的配置选项。
```javascript
this.$message('messages')
// or other use
// this.$message.info("messages", callBackFun, {delay: 3000,...}); callBackFun: 可选,表示弹窗关闭时的回调函数，options：弹窗的配置选项
// or other use
// this.$message({
//	 type: "info",
//	 contents: "messages"
// });
```
示例：
```javascript
this.$message("世界上最幸福的爱，就是爱你的人，用你所希望的方式爱你，爱你所希望他爱你的优点，这个世界上有多少人互相爱是爱了，却爱得不是地方，爱得全不得当！");
```
![image](https://note.youdao.com/yws/public/resource/c0e1fc8be7095a7c3e89834d979f0ae0/xmlnote/110DBFFDF05D4F278C270421022766A9/5294)

###### 2. 成功
成功消息弹窗，默认只传入消息的内容一个参数即可、2秒之后自动隐藏、没有遮罩层、点击其他会自动关闭弹窗，如需调整自动隐藏时间需加入delay的配置选项。

```javascript
this.$message.success("messages", callBackFun, {delay: 3000,...}); // callBackFun: 可选,表示弹窗关闭时的回调函数，options：弹窗的配置选项
// or other use
// this.$message({
//	 type: "success",
//	 contents: "messages"
// });
```
示例：
```javascript
this.$message.success("人生就象弈棋， 一步失误， 全盘皆输，这是令人悲哀之事；而且人生还不如弈棋，不可能再来一局，也不能悔棋。");
```
![image](https://note.youdao.com/yws/public/resource/c0e1fc8be7095a7c3e89834d979f0ae0/xmlnote/1A8EF99C0A5D4ECFA70FCDF73CF9D1C9/5297)
###### 3. 警告
警告消息弹窗，默认只传入消息的内容一个参数、2秒之后自动隐藏、没有遮罩层、点击其他会自动关闭弹窗，如需调整自动隐藏时间需加入delay的配置选项。

```javascript
this.$message.warning("messages", callBackFun, {delay: 3000,...}); // callBackFun: 可选,表示弹窗关闭时的回调函数，options：弹窗的配置选项
// or other use
// this.$message({
//	 type: "warning",
//	 contents: "messages"
// });
```
示例：
```javascript
this.$message.warning("人生就象弈棋， 一步失误， 全盘皆输，这是令人悲哀之事；而且人生还不如弈棋，不可能再来一局，也不能悔棋。");
```
![image](https://note.youdao.com/yws/public/resource/c0e1fc8be7095a7c3e89834d979f0ae0/xmlnote/854D55F087834289A622E3004FA1AE73/5299)
###### 4. 错误
错误消息弹窗，默认只传入消息的内容一个参数即可、30秒之后自动隐藏、有遮罩层、点击其他会自动关闭弹窗，如需调整自动隐藏时间需加入delay的配置选项。

```javascript
this.$message.error("messages", callBackFun, {delay: 3000,...}); // callBackFun: 可选,表示弹窗关闭时的回调函数，options：弹窗的配置选项
// or other use
// this.$message({
//	 type: "error",
//	 contents: "messages"
// });
```
示例：
```javascript
this.$message.error("谁在锅炉旁以小火煨炖着时光，沸腾的回忆随爱情蒸发后退场。");
```
![image](https://note.youdao.com/yws/public/resource/c0e1fc8be7095a7c3e89834d979f0ae0/xmlnote/324343ED867144B7BBC01E66428A9156/5501)
###### 5. 提示
提示消息弹窗，默认只传入消息的内容一个参数即可、有遮罩层、点击其他是不会会自动关闭弹窗。

```javascript
this.$message.alert("messages", callBackFun, title, label); // callBackFun: 可选,表示点击弹窗底部按钮时的回调函数，title：可选,弹窗的标题，默认值是'提示'，label：可选,底部按钮文案
```
示例：
```javascript
this.$message.alert("故天将降大任于斯人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为，所以动心忍性，曾益其所不能。", function($body){
	console.info("您点击了确定按钮");
});
```
![image](https://note.youdao.com/yws/public/resource/c0e1fc8be7095a7c3e89834d979f0ae0/xmlnote/4AC4D6B5861A4719B7B2DF6BC6796B27/5303)
###### 6. 确认
确认消息弹窗，默认只传入消息的内容一个参数即可、有遮罩层、点击其他是不会会自动关闭弹窗、底部2个按钮‘取消’和‘确定’。callBackFun回调函数有result和$body2个参数，result是boolean值，表示点击的取消（false）、确定(true)

```javascript
this.$message.confirm("messages", callBackFun, buttons, title); // callBackFun: 可选,表示点击弹窗底部按钮时的回调函数，buttons：弹窗底部的按钮列表，默认是[{className: "cancel", label: "取消", callback: null}, {className: "ok", label: "确认", callback: null}]，title：可选,弹窗的标题，默认值是'提示'
```
示例：
```javascript
this.$message.confirm("夫学须志也，才须学也，非学无以广才，非志无以成学。", function(result, $body){
	console.info("您点击了" + (result ? '确定':'取消') + "按钮");
});
```
![image](https://note.youdao.com/yws/public/resource/c0e1fc8be7095a7c3e89834d979f0ae0/xmlnote/DF85EE3EDB9142CFAD1DDC839AF5F34A/5305)
###### 7. 多个按钮并排
消息弹窗底部多个按钮并排
```javascript
this.$message.multiple(contents, buttons, title, options); // contents: 消息的内容，buttons：底部按钮列表，title：可选，弹窗的标题，options：可选，弹窗配置选项
```
示例：
```javascript
this.$message.multiple("我认识的一个女生嫁去日本了，以为再也见不到她了，直到有一天我下载了一个种子", [{
	label: "现在升级",
	callback: function($body){
		console.info("您点击了‘现在升级’按钮, 本按钮点击返回值是false就不自动关闭弹窗");
		// 如果返回值是false就不自动关闭弹窗
		return false;
	}
}, {
	label: "下次再说",
	callback: function($body){
		console.info("您点击了‘下次再说’按钮！");
	}
}, {
	label: "不再提醒",
	callback: function($body){
		console.info("您点击了‘不再提醒’按钮！");
	}
}]);
```
![image](https://note.youdao.com/yws/public/resource/c0e1fc8be7095a7c3e89834d979f0ae0/xmlnote/5D1B77DF1AC04022B8E88A3DD61E659E/5307)

###### 8. 多个按钮竖排
消息弹窗底部多个按钮竖排
```javascript
this.$message.vertical(contents, buttons, title, options); // contents: 消息的内容，buttons：底部按钮列表，title：可选，弹窗的标题，options：可选，弹窗配置选项
```
示例：
```javascript
this.$message.vertical("开例会时候放了巨响的连环屁，然后大家都笑了，然后男领导也笑的崩屁了，接着就是女领导，，，，，最终食堂师傅被炒鱿鱼了", [{
	label: "现在升级",
	callback: function($body){
		console.info("您点击了‘现在升级’按钮, 本按钮点击返回值是false就不自动关闭弹窗");
		// 如果返回值是false就不自动关闭弹窗
		return false;
	}
}, {
	label: "下次再说",
	callback: function($body){
		console.info("您点击了‘下次再说’按钮！");
	}
}, {
	label: "不再提醒",
	callback: function($body){
		console.info("您点击了‘不再提醒’按钮！");
	}
}]);
```
![image](https://note.youdao.com/yws/public/resource/c0e1fc8be7095a7c3e89834d979f0ae0/xmlnote/94790CDF60C34181817D8C831CC01697/5309)


###### 9. 多个按钮底部
消息弹窗靠近底部展示
```javascript
this.$message.bottomSheet(contents, buttons, options); // contents: 消息的内容，buttons：底部按钮列表，options：可选，弹窗配置选项
```
示例：
```javascript
this.$message.bottomSheet("我是一个苦b的程序员，今晚加班到快通宵了，困得快睁不开眼了，女上司很关心，问我要不要吃宵夜。我没好气地说，宵夜就算了，能让我睡一觉就行了。女上司红着脸说了句讨厌", [{
	label: "现在升级",
	callback: function($body){
		console.info("您点击了‘现在升级’按钮, 本按钮点击返回值是false就不自动关闭弹窗");
		// 如果返回值是false就不自动关闭弹窗
		return false;
	}
}, {
	label: "下次再说",
	callback: function($body){
		console.info("您点击了‘下次再说’按钮！");
	}
}, {
	label: "不再提醒",
	callback: function($body){
		console.info("您点击了‘不再提醒’按钮！");
	}
}]);
```
![image](https://note.youdao.com/yws/public/resource/c0e1fc8be7095a7c3e89834d979f0ae0/xmlnote/3361C7085ED84F57BCDB5F6E8D24FCBD/5326)

###### 10. 输入内容确认
消息弹窗输入内容确认
```javascript
this.$message.prompt(title, callBackFun, labels, options); // title: 弹窗的头部标题，callBackFun：底部按钮点击后的回调函数，有result、value、$body3个参数，result是boolean值表示点击的取消（false）、确定(true)，value表示输入的实际值。options：可选，弹窗配置选项
```
示例：
```javascript
this.$message.prompt("请输入您的姓名", function(result, value, $body){
	console.info("您点击了" + (result ? '确定':'取消') + "按钮， 并且输入了内容是：" + value);
});
```
![image](https://note.youdao.com/yws/public/resource/c0e1fc8be7095a7c3e89834d979f0ae0/xmlnote/5145E8A7E79B4FF487B942D755B94384/5311)

###### 11. 自定义
自定义弹窗，本示例加入了动画以及滚动，具体看demo
```javascript
this.$message(options); // options：弹窗配置选项
```
示例：
```javascript
this.$message({
	className: "custome",
	isShowMask: true,
	autoHide: false,
	title: "协议须知",
	contents: "这是一个协...",
	buttons: [{
		className: "cancel",
		label: "我拒绝",
		callback: function($body){
			console.info($body)
		}
	}, {
		className: "ok",
		label: "我同意",
		callback: function($body){
			console.info($body)
		}
	}],
});
```
![image](https://note.youdao.com/yws/public/resource/c0e1fc8be7095a7c3e89834d979f0ae0/xmlnote/E5EBAF7FFA9247528CDF98BBB1DA7CD8/5313)

## 弹窗dom结构
为了了解弹窗dom结构，这里把弹窗的源码贴出来，方便样式定义。

```html
<div class="message fade" :class="{'mask': isShowMask, 'message-show': show}" ref="dialog" @click.stop.prevent="messageFadeClick">
	<div class="message-dialog" :class="className">
		<div class="message-content" v-bind:style="{height: height || 'inherit'}" @click.stop.prevent>
			<div class="message-header" v-if="title">
				<div class="message-title" v-html="title"></div>
			</div>
			<div class="message-body" ref="body" v-if="contents">
				<div class="message-body-content" v-html="dynamicContents"></div>
			</div>
			<div class="message-footer" v-if="buttons.length > 0">
				<div class="message-button" :class="buttonItem.className" v-for="(buttonItem, index) in buttons" :key="index" @click.stop.prevent="buttonClick(index, buttonItem);" v-html="buttonItem.label">{{buttonItem.label}}</div>
			</div>
		</div>
	</div>
</div>
```


## 最后
- 如果喜欢一定要 star哈!!!（谢谢!!）

- 如果有意见和问题 请在 lssues提出，我会在线解答。
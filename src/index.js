/**
 * 作者：yujinjin9@126.com
 * 时间：2018-03-26
 * 描述：弹窗插件
 */
import Message from './message.vue';

export default (function(){
	let ModalsConstructor = null;
	// 弹窗实例
	let [messageInstance, delayCloseTimerId] = [null, null];
	// 默认配置选项
	let defaults = {
		initCallback: null, //初始化后的回调方法
		autoHide: true, //点击遮罩层是否隐藏
		isShowMask: false, // 是否显示遮罩层
		icon: "", // 内容消息的icon，默认提供：info,success,warning,error
		delay: 0, // 窗口多少毫秒后自动关闭，为0时，不自动关闭
//		animated: true, // 是否添加动画
		className: null, // 弹窗样式
		contents: null, // 弹窗内容
		title: null, // 标题
		height: null, // 弹层高度
		buttons: [] // {className|label|callback}
	};
	// 关闭
	const onClose = function(callback){
		if(callback && typeof(callback) === "function") {
			var args = [];
			for(var i=1, j = arguments.length; i<j; i++){
				args.push(arguments[i]);
			}
			args.push(messageInstance.$refs.body);
			if(callback.apply(null, args) === false){
				//如果返回值是false就不自动关闭弹窗
				return;
			}
		}
		messageInstance.destroy();
		messageInstance.$el.parentNode.removeChild(messageInstance.$el)
		if(messageInstance) {
			messageInstance = null;
		}
		if(delayCloseTimerId) {
			clearTimeout(delayCloseTimerId);
			delayCloseTimerId = null;
		}
	}
	//创建实例
	const createInstance = function(options){
		messageInstance = new ModalsConstructor({
			el: document.createElement('div'),
			data: options
		});
		messageInstance.onClose = onClose;
		return messageInstance;
	}
	// 显示弹窗
	const showMessage = function(options) {
		let _options = Object.assign({}, defaults, options);
		if(!messageInstance) {
			messageInstance = createInstance(_options);
			document.body.appendChild(messageInstance.$el);
		} else {
			messageInstance.reset();
			for (let prop in _options) {
		        if (messageInstance.hasOwnProperty(prop)) {
		          	messageInstance[prop] = _options[prop];
		        }
		    }
		}
		messageInstance.init();
		if(delayCloseTimerId) {
			clearTimeout(delayCloseTimerId);
			delayCloseTimerId = null;
		}
		if (typeof (_options.delay) == "number" && _options.delay > 100) {
			delayCloseTimerId = setTimeout(()=>onClose(_options.onEscape), _options.delay);
		}
		return messageInstance;
	}
	
	// 初始化弹窗信息配置选项
	const initMessageOptions = function(contents, callBackFun, options, type){
		var _options = {};
		if(typeof(contents) === "object") {
			_options = Object.assign({}, contents);
		} else if(typeof(contents) === "string") {
			_options.contents = contents;
		}
		if(typeof(options) === "number"){
			_options.delay = options;
		} else if(typeof(options) === "object"){
			_options = Object.assign(_options, options);
		}
		if(!_options.className) {
			_options.className = type;
		}
		_options.scrollerData = true;
		if(!_options.icon) _options.icon = "message-icon-" + type;
		if(callBackFun) _options.onEscape = callBackFun;
		return _options;
	}
	
	// 弹窗对象
	const message = function(options){
		if(typeof(options) === "string"){
			return message.info(options);
		} else if(options.type && message[options.type]){
			return message[options.type](options);
		} else if(typeof(options) === "object") {
			return showMessage(options);
		}
	}
	
	Object.assign(message, {
		// 成功提示
		success: function(contents, callBackFun, options){
			let _options = initMessageOptions(contents || "成功了!", callBackFun, options, "success");
			if(!_options.delay){
				//默认2秒隐藏
				_options.delay = 2000;
			}
			return showMessage(_options);
		},
		// 信息提示
		info: function (contents, callBackFun, options) {
			let _options = initMessageOptions(contents, callBackFun, options, "info");
			if(!_options.delay){
				//默认2秒隐藏
				_options.delay = 2000;
			}
			return showMessage(_options);
		},
		// 警告提示
		warning: function (contents, callBackFun, options) {
			let _options = initMessageOptions(contents, callBackFun, options, "warning");
			if(!_options.delay){
				//默认2秒隐藏
				_options.delay = 2000;
			}
			return showMessage(_options);
		},
		// 错语提示
		error: function (contents, callBackFun, options) {
			let _options = initMessageOptions(contents || "出错了!", callBackFun, options, "error");
			if(!_options.delay){
				//默认3秒隐藏
				_options.delay = 30000;
			}
			return showMessage(_options);
		},
		// 确认提示
		alert: function (contents, callback, title, label) {
			let _options = {
				title: title || "提示",
				className: "alert",
				autoHide: false,
				isShowMask: true,
				scrollerData: true,
				buttons: [{
					className: "alert",
					label: label || "确认",
					callback: callback
				}]
			};
			if(typeof(contents) === "object") {
				_options = Object.assign(_options, contents);
			} else if(typeof(contents) === "string") {
				_options.contents = contents;
			}
			return showMessage(_options);
		},
		// 确认or取消提示
		confirm: function (contents, callback, buttons, title) {
			var _options = {
				title: title || "提示",
				className: "confirm",
				contents: contents,
				isShowMask: true,
				autoHide: false,
				scrollerData: true,
				buttons: [{
					className: "cancel",
					label: "取消",
					callback: function($body){
						callback(false, $body);
					}
				}, {
					className: "ok",
					label: "确认",
					callback: function($body){
						callback(true, $body);
					}
				}]
			};
			if(typeof(contents) === "object") {
				_options = Object.assign(_options, contents);
			} else if(typeof(contents) === "string") {
				_options.contents = contents;
			}
			if(buttons){
				_options.buttons = buttons;
			}
			return showMessage(_options);
		},
		
		// 提示输入框
		prompt(title, callBackFun, options) {
    		var _options = {
				title: title || "提示",
				className: "prompt",
				contents: "<input class='input-text' autocomplete='off' type='text' placeholder='请输入内容' />",
				isShowMask: true,
				autoHide: false,
//				scrollerData: true,
				buttons: [{
					className: "cancel",
					label: "取消",
					callback: function($body){
						if(callBackFun && typeof(callBackFun) === "function"){
							callBackFun(false, $body.querySelector("input[type='text']").value, $body);
						}
					}
				}, {
					className: "ok",
					label: "确认",
					callback: function($body){
						if(callBackFun && typeof(callBackFun) === "function"){
							callBackFun(true, $body.querySelector("input[type='text']").value, $body);
						}
					}
				}]
			};
			if(options && typeof(options) === "object") {
				_options = Object.assign(_options, options);
			}
			return showMessage(_options);
    	},
    	
		close(callback) {
			// 关闭弹窗
			onClose(callback);
		}
	});
	
	return {
		install(Vue, options) {
			if(options) {
				defaults = Object.assign(defaults, options);
			}
			ModalsConstructor = Vue.extend(Message);
			Vue.prototype.$message = message;
		}
	}
})()

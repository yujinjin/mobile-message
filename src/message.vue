<template>
	<div class="message fade" :class="{'mask': isShowMask, 'message-show': show}" ref="dialog" @click.stop.prevent="messageFadeClick">
		<div class="message-dialog" :class="className">
			<div class="message-content" v-bind:style="{height: height || 'inherit'}" @click.stop.prevent>
				<div class="message-header" v-if="title">
					<h4 class="message-title" v-html="title"></h4>
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
</template>
<script>
	module.exports = {
		data: function() {
			return {
				initCallback: null, // 初始化后的回调方法
				show: false, // 是否显示弹层
				isShowMask: false, // 是否显示遮罩层
				icon: "", // 内容消息的icon，默认提供：message-info,message-success,message-warning,message-error
				autoHide: true, //点击遮罩层是否隐藏
				// animated: true, //是否添加动画
				className: null,
				contents: null, //
				title: null, //标题
				height: null, //弹层高度
				buttons: [], //{className|label|callback}
				onClose: null, // 用户关闭后的方法
				scrollerData: {
					startPageY: 0, // touchstart 垂直位置
					startMaxScroll: 0, // touchstart 最大滚动垂直
					elScroll: null,
					selectorScrollable: null // 指定标记的滚动元素，如果为null就指定默认元素，指定子元素或父元素皆可
				} // scroller事件对象数据，如果是false或null表示不绑定事件
			}
		},
		computed: {
			dynamicContents(){
				if(this.icon) {
					return '<i class="' + this.icon + '"></i>' + this.contents;
				}
				return this.contents; 
			}
		},
		watch:{
			show(newVal) {
				if(newVal === true) {
					document.querySelector("html").classList.add("noscroll");
				} else {
					document.querySelector("html").classList.remove("noscroll");
				}
			}
		},
		mounted() {
			//this.init();
		},
		methods: {
			// 弹层数据初始化
			init: function() {
				this.show = true;
				this.$nextTick(() => {
					if(this.initCallback && typeof(this.initCallback) === "function") {
						this.initCallback(this.$refs.body);
					}
					if(!this.scrollerData) {
						return;
					}
					this.$refs.dialog.addEventListener("touchstart", this.noScroll);
					this.$refs.dialog.addEventListener("touchmove", this.noScroll);
					this.$refs.dialog.addEventListener("touchend", this.noScroll);
					if(this.scrollerData == true) {
						return;
					}
					if(this.scrollerData.selectorScrollable) {
						this.scrollerData.selectorScrollable = this.$refs.dialog.querySelector(this.scrollerData.selectorScrollable)
					}
					if(!this.scrollerData.selectorScrollable || this.scrollerData.selectorScrollable.length == 0){
						this.scrollerData.selectorScrollable = this.$refs.body;
					}
					
				});
			},
			
			// 重置弹窗，主要用于当前弹窗正在显示的时候又再显示了一个弹窗，目前的做法是在修改当前弹窗的属性，并显示
			reset(){
				if(this.show) {
					this.destroyEvent();
				}
			},
			
			/**
			 * 让浮层背后整个页面禁止滚动，2种方法来一起使用
			 * 1.通过CSS处理让页面的HTML不滚动，但在Safari等浏览器中还是可以滚动，所以再加上方法2
			 * 2.在浮层touchmove的时候，阻止默认事件达到避免滚动的问题。但这样如果浮层自己也有滚动，那么这种处理会让浮层里面自己的滚动行为也无法触发这样就得计算浮层滚动是否到了底部位置如果不能再滚动的话就阻止滚动事件
			 * 目前测试下来触发边缘位置时会有滚动情况
			 * @param {Event} e 事件的类型：'touchstart','touchmove','touchend'
			 */
			noScroll(e){
				if(this.scrollerData == true) {
					if(e.type === "touchmove") {
						e.preventDefault();
						e.stopPropagation();
					}
					return;
				}
				let events = e.touches[0] || e;
				if(e.type === "touchstart") {
					// 先求得是不是滚动元素或者滚动元素的子元素
					let elTarget = e.target, elScroll = null;
					let isParent = function(el, parentEl, stopEl){
						if(el.nodeName === "BODY" || el === stopEl) {
							return false;
						} else if(el === parentEl) {
							return true;
						} else {
							return isParent(el.parentNode, parentEl, stopEl);
						}
					}
					if(elTarget === this.scrollerData.selectorScrollable || isParent(e.target, this.scrollerData.selectorScrollable, this.$refs.dialog)) {
						elScroll = this.scrollerData.selectorScrollable;
					} else {
						return;
					}
					this.scrollerData.elScroll = elScroll;
					this.scrollerData.startPageY = events.pageY;
					this.scrollerData.startMaxScroll = elScroll.scrollHeight - elScroll.clientHeight;
				} else if(e.type === "touchmove") {
					if(this.scrollerData.startMaxScroll <= 0) {
						e.preventDefault();
					}
					let elScroll = this.scrollerData.elScroll;
					if(!elScroll) {
						console.info(elScroll)
						return;
					}
					// 移动距离
					let distanceY = events.pageY - this.scrollerData.startPageY;
					// 当前的滚动高度
            		let scrollTop = elScroll.scrollTop;
					// 上下边缘检测
		            if (distanceY > 0 && scrollTop == 0) {
		                // 往上滑，并且到头
		                // 禁止滚动的默认行为
		                e.preventDefault();
		                return;
		            }
		            // 下边缘检测
		            if (distanceY < 0 && (scrollTop + 1 >= this.scrollerData.startMaxScroll)) {
		                // 往下滑，并且到头
		                // 禁止滚动的默认行为
		                e.preventDefault();
		                return;
		            }
				} else if(e.type == "touchend") {
					this.scrollerData.startMaxScroll = 0;
				}
			},
			
			//按钮点击事件
			buttonClick: function(index, buttonItem) {
				if(buttonItem.callback && typeof(buttonItem.callback) === "function") {
					this.onClose(buttonItem.callback, this.$refs.body);
				}
			},

			//点击遮罩层是否隐藏
			messageFadeClick: function() {
				if(this.autoHide !== true) {
					return;
				}
				this.autoHide = false;
				if(this.onClose && typeof(this.onClose) === "function") {
					this.onClose();
				}
			},
			
			// 事件绑定销毁
			destroyEvent(){
				if(this.scrollerData && this.scrollerData.selectorScrollable) {
					this.scrollerData.selectorScrollable.removeEventListener("touchstart", this.noScroll);
					this.scrollerData.selectorScrollable.removeEventListener("touchmove", this.noScroll);
					this.scrollerData.selectorScrollable.removeEventListener("touchend", this.noScroll);
				}
				this.scrollerData = {
					startPageY: 0, // touchstart 垂直位置
					startMaxScroll: 0, // touchstart 最大滚动垂直
					elScroll: null,
					selectorScrollable: null // 指定标记的滚动元素，如果为null就指定默认元素，指定子元素或父元素皆可
				}
			},
			
			// destroy
			destroy: function() {
				this.initCallback = null;
				this.show = false;
				this.isShowMask = false;
				this.icon = "";
				this.autoHide = true;
//				this.animated = true;
				this.className = null;
				this.contents = null;
				this.title = null;
				this.height = null;
				this.buttons = [];
				this.destroyEvent();
			}
		},
		beforeDestroy(){
			this.destroy();
		}
	}
</script>
<style lang="less">
	/* === 弹层样式  (start) === */
	/* === messages === */
	@font-face {
	  	font-family: 'message-icon';
	  	src:  url('./fonts/message-icon.eot?rzltye');
	  	src:  url('./fonts/message-icon.eot?rzltye#iefix') format('embedded-opentype'),
		    url('./fonts/message-icon.ttf?rzltye') format('truetype'),
		    url('./fonts/message-icon.woff?rzltye') format('woff'),
		    url('./fonts/message-icon.svg?rzltye#message-icon') format('svg');
	  	font-weight: normal;
	  	font-style: normal;
	}
	
	[class^="message-icon-"], [class*=" message-icon-"] {
	  	font-family: 'message-icon' !important;
	  	speak: none;
	  	font-style: normal;
	  	font-weight: normal;
	  	font-variant: normal;
	  	text-transform: none;
	  	-webkit-font-smoothing: antialiased;
	  	-moz-osx-font-smoothing: grayscale;
	  	display: inline-block;
	  	vertical-align: baseline;
	  	margin-right: 5px;
	}
	
	.message-icon-error:before {
	  	content: "\f057";
	}
	.message-icon-success:before {
	  	content: "\f058";
	}
	.message-icon-info:before {
	  	content: "\f05a";
	}
	.message-icon-warning:before {
	  	content: "\f06a";
	}
	
	/* 让浮层背后整个页面禁止滚动CSS名称start */
	.noscroll, .noscroll body {
	    overflow: hidden;
	}
	
	.noscroll body {
	    position: relative;
	}
	/* 让浮层背后整个页面禁止滚动CSS名称end */
	
	.message {
		position: fixed;
		z-index: 999;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		visibility: hidden;
		display: table;
		
		&.mask {
			background-color: rgba(0, 0, 0, .6);
		}
		
		&.message-show {
			visibility: visible;
		}
		
		.message-dialog {
			display: table-cell;
			vertical-align: middle;
			
			/* 默认样式 */
			.message-content {
				max-width: 540px;
				margin: 0px auto;
				background-color: #fff;
				border-radius: 7px;
				transition: all .3s ease;
				box-sizing: border-box;
				.message-header h4 {
					font-size: 16px;
					font-weight: 300;
					color: #333;
					text-align: center;
					padding-top: 15px;
				}
				.message-body {
					position: relative;
					overflow: hidden;
					.message-body-content {
						padding: 10px 15px;
						color: #333;
					}
				}
				.message-footer {
					height: 42px;
					line-height: 42px;
					text-align: center;
					border-top: 1px solid #e4e4e4;
					font-size: 16px;
				}
			}
			
			/* 消息提示 */
			&.info .message-content,
			&.error .message-content,
			&.warning .message-content,
			&.success .message-content {
				box-shadow: none;
				color: #fff;
				font-size: 14px;
				width: auto;
				background: none;
				text-align: center;
				
				.message-body {
					padding: 10px 20px;
					box-sizing: border-box;
					background-color: rgba(0, 0, 0, .6);
					text-align: center;
					max-height: 250px;
					border-radius: 5px;
					display: inline-block;
					margin: 0 20px;
					
					.message-body-content {
						padding: 0;
						color: #fff;
						display: inline-block;
						text-align: initial;
					}
				}
			}
			/* 提示框,确认框默认样式 start */
			&.alert, &.confirm, &.prompt {
				.message-content {
					width: 270px;
					border-radius: 10px;
					
					.message-header h4 {
						font-size: 17px;
						font-weight: bold;
						color: #000;
						text-align: center;
					}
					
					.message-body {
						min-height: 60px;
						line-height: 25px;
						font-size: 15px;
					}
				}
			}
			/* 提示框,确认框默认样式 end */
			
			/* 提示框样式 start */
			&.alert .message-content .message-footer .message-button.alert {
				width: 100%;
				text-align: center;
				color: #09BB07;
			}
			/* 提示框样式 end */
			
			/* 确认框默认样式 start */
			&.confirm .message-content .message-footer, &.prompt .message-content .message-footer {
				color: #666;
				
				.message-button:first-child {
					border-right: 1px solid #e4e4e4;
					box-sizing: border-box;
				}
				
				.message-button {
					width: 50%;
					float: left;
				}
				
				.message-button.ok {
					color: #09BB07;
					font-weight: bold;
				}
			}
			
			&.prompt .message-content {
				.message-header h4 {
					font-size: 15px;
					font-weight: normal;
					color: #000;
				}
				
				.message-body .message-body-content input.input-text {
					border: none;
					outline-offset: 0;
				    outline-style: none;
				    outline-width: 0;
				    font-size: 14px;
	    			line-height: 25px;
	    			height: 25px;
				}
				
			}
			
			/* 确认框默认样式 end */
			
			/* 多个按钮横排样式 start*/
			&.multiple .message-content {
				width: 90%;
				max-width: 450px;
				
				.message-footer {
					color: #09BB07;
					display: flex;
					justify-content: space-between;
					
					.message-button {
						flex: 1;
					}
					
					.message-button:not(:last-child) {
						border-right: 1px solid #e4e4e4;
						box-sizing: border-box;
					}
				}
			}
			/* 多个按钮横排样式 end*/
			
			/* 多个按钮竖排 start*/
			&.vertical .message-content {
				width: 90%;
				max-width: 450px;
				
				.message-footer {
					color: #09BB07;
					height: auto;
					
					.message-button {
						width: 100%;
						height: 42px;
					}
					
					.message-button:not(:first-child) {
						border-top: 1px solid #e4e4e4;
						box-sizing: border-box;
					}
				}
			}
			/* 多个按钮竖排 end*/
			
			&.bottom-sheet {
				vertical-align: bottom;
				
				.message-content {
					width: 100%;
					max-width: 540px;
					border-radius: 0px;
					
					.message-footer {
						color: #09BB07;
						height: auto;
						
						.message-button {
							width: 100%;
							height: 42px;
						}
						
						.message-button:not(:first-child) {
							border-top: 1px solid #e4e4e4;
							box-sizing: border-box;
						}
					}
				}
			}
		}
	}
</style>
<template>
	<div class="view">
		<header class="navbar">
            <a class="icon-left"></a>
            <div class="center">Message消息弹窗</div>
            <a class="right-bar-text"></a>
	    </header>
		<div class="page content">
			<div class="button-panel">
				<button type="button" class="btn btn-default" @click.stop.prevent="info">默认</button>
				<button type="button" class="btn btn-default" @click.stop.prevent="success">成功</button>
				<button type="button" class="btn btn-default" @click.stop.prevent="warning">警告</button>
				<button type="button" class="btn btn-default" @click.stop.prevent="error">错误</button>
				<button type="button" class="btn btn-default" @click.stop.prevent="alert">提示</button>
				<button type="button" class="btn btn-default" @click.stop.prevent="confirm">确认</button>
				<button type="button" class="btn btn-default" @click.stop.prevent="multiple">多个按钮并排</button>
				<button type="button" class="btn btn-default" @click.stop.prevent="vertical">多个按钮竖排</button>
				<button type="button" class="btn btn-default" @click.stop.prevent="bottomSheet">多个按钮底部</button>
				<button type="button" class="btn btn-default" @click.stop.prevent="prompt">输入内容确认</button>
				<button type="button" class="btn btn-default" @click.stop.prevent="custome">自定义</button>
				<!--<button type="button" class="btn btn-default" @click.stop.prevent="loading">加载提示</button>
				<button type="button" class="btn btn-default" @click.stop.prevent="loading(true)">加载提示(白色背景)</button>
				<button type="button" class="btn btn-default" @click.stop.prevent="loading(true, true)">加载提示(白色背景点击刷新)</button>-->
			</div>
		</div>
	</div>
</template>
<script>
export default {
    data: function() {
        return {};
    },
    methods: {
    	info(){
    		this.$message("世界上最幸福的爱，就是爱你的人，用你所希望的方式爱你，爱你所希望他爱你的优点，这个世界上有多少人互相爱是爱了，却爱得不是地方，爱得全不得当！");
    		// or other use
    		// this.$message.info("世界上最幸福的爱，就是爱你的人，用你所希望的方式爱你，爱你所希望他爱你的优点，这个世界上有多少人互相爱是爱了，却爱得不是地方，爱得全不得当！");
    		
    		// or other use
    		//this.$message({
    		//	type: "info",
    		//	contents: "世界上最幸福的爱，就是爱你的人，用你所希望的方式爱你，爱你所希望他爱你的优点，这个世界上有多少人互相爱是爱了，却爱得不是地方，爱得全不得当！"
    		//});
    	},
    	success(){
    		this.$message.success("人生就象弈棋， 一步失误， 全盘皆输，这是令人悲哀之事；而且人生还不如弈棋，不可能再来一局，也不能悔棋。");
    		// or other use
    		//this.$message({
    		//	type: "success",
    		//	contents: "待我长发及腰，君应仗剑还朝。独孤九剑出，惊世风雷啸。我笑岁月不老，坐看凡尘静好。尘世犹嚣嚣，山河雾飘摇。一念剑破万里滔，掌中乾坤黯消。"
    		//});
    	},
    	warning(){
    		this.$message.warning("人生就象弈棋， 一步失误， 全盘皆输，这是令人悲哀之事；而且人生还不如弈棋，不可能再来一局，也不能悔棋。");
    		// or other use
    		//this.$message({
    		//	type: "warning",
    		//	contents: "人生就象弈棋， 一步失误， 全盘皆输，这是令人悲哀之事；而且人生还不如弈棋，不可能再来一局，也不能悔棋。"
    		//});
    	},
    	error(){
    		this.$message.error("谁在锅炉旁以小火煨炖着时光，沸腾的回忆随爱情蒸发后退场。");
    		// or other use
    		//this.$message({
    		//	type: "error",
    		//	contents: "谁在锅炉旁以小火煨炖着时光，沸腾的回忆随爱情蒸发后退场。"
    		//});
    	},
    	alert(){
    		this.$message.alert("故天将降大任于斯人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为，所以动心忍性，曾益其所不能。", function($body){
    			console.info("您点击了确定按钮");
    		});
    	},
    	confirm(){
    		this.$message.confirm("夫学须志也，才须学也，非学无以广才，非志无以成学。", function(result, $body){
    			console.info("您点击了" + (result ? '确定':'取消') + "按钮");
    		});
    	},
    	
    	multiple() {
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
    	},
    	
    	vertical(){
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
    	},
    	
    	bottomSheet(){
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
    	},
    	
    	prompt() {
    		this.$message.prompt("请输入您的姓名", function(result, value, $body){
    			console.info("您点击了" + (result ? '确定':'取消') + "按钮， 并且输入了内容是：" + value);
    		});
    	},
    	
    	custome(){
    		this.$message({
    			className: "custome",
    			isShowMask: true,
    			autoHide: false,
//  			scrollerData: false,
    			title: "协议须知",
    			contents: "这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书这是一个协议书",
    			buttons: [{
					className: "cancel",
					label: "我拒绝",
					callback: function($body){
						
					}
				}, {
					className: "ok",
					label: "我同意",
					callback: function($body){
						
					}
				}],
    		});
    	}
    }
}
</script>
<style lang="less">
	.view {
		margin: 0 auto;
	    width: 100%;
	    min-width: 320px;
	    max-width: 540px;
	    display: flex;
	    position: relative;
	    
		header {
			background: rgb(255, 255, 255);
			width: 100vw;
    		z-index: 999;
    		top: 0;
    		position: fixed;
		    right: 0;
		    left: 0;
		    height: 44px;
		    padding-right: 10px;
		    padding-left: 10px;
		    border-bottom: 0;
		    border-bottom: 1px solid #e6e4e4;
		    backface-visibility: hidden;
		    display: flex;
		    justify-content:space-between;
		    
		    .icon-left {
    			text-align: center;
    			width: 50px;
    			
		    	i.back {
		    		width: 12px;
				    height: 44px;
				    display: inline-block;
				    vertical-align: middle;
				    background-size: 100% auto;
				    background-position: center;
				    background-repeat: no-repeat;
				    font-style: normal;
				    position: relative;
		    		background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D'12'%20height%3D'20'%20viewBox%3D'0%200%2012%2020'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20d%3D'M.18261596%209.4221638c.0352203-.05148305.07573462-.10050698.1215468-.14631917L9.1425872.4374202c.5830904-.58309038%201.52656832-.5849888%202.11643872.00488163.5857864.58578644.591222%201.53009836.0048816%202.11643873L3.82594417%209.9967039l7.43188553%207.4318855c.5830904.5830904.5849888%201.5265683-.0048817%202.1164387-.5857864.5857865-1.5300983.591222-2.11643868.0048816L.2980849%2010.7114853c-.3526746-.3526746-.3939974-.89699-.11546894-1.2893215z'%20fill%3D'%23007aff'%20fill-rule%3D'evenodd'%2F%3E%3C%2Fsvg%3E");
		    	}
		    	
		    	.left-text {
		    		margin-left: 5px;
		    		line-height: 44px;
		    		color: #007aff;
		    		font-size: 15px;
		    		display: inline-block;
		    	}
		    }
		    
		    .center {
		    	text-align: center;
		    	line-height: 44px;
		    	font-size: 17px;
		    	color: #000;
		    	text-overflow: ellipsis;
		    }
		    
		    .right-bar-text {
		    	width: 50px;
		    }
		}
		
		.page {
			padding-top: 0px;
    		margin-top: 0px;
    		height: auto;
    		min-height: 100vh;
    		width: 100%;
    		margin-top: 45px;
    		min-height: calc(~'100vh - 45px');
    		height: 1000px;
    		
    		.button-panel {
    			padding: 15px 30px;
    			
    			.btn {
				    display: inline-block;
				    line-height: 1;
				    white-space: nowrap;
				    cursor: pointer;
				    background: #fff;
				    border: 1px solid #dcdfe6;
				    border-color: #dcdfe6;
				    color: #606266;
				    -webkit-appearance: none;
				    text-align: center;
				    box-sizing: border-box;
				    outline: none;
				    margin: 0;
				    transition: .1s;
				    font-weight: 500;
				    -moz-user-select: none;
				    -webkit-user-select: none;
				    -ms-user-select: none;
				    padding: 12px 20px;
				    font-size: 14px;
				    border-radius: 4px;
    			}
    			
    			.btn:focus, .btn:hover {
    				background: #fff;
				    border-color: #409eff;
				    color: #409eff;
    			}
    			
    			.btn-default {
    				margin: 5px;
    				width: 100%;
    			}
    		}
		}
	}
	
	.message-dialog.custome {
		transform: scale(0.7);
		opacity: 0;
		transition: all 0.3s;
		
		.message-content {
			max-height: 80%;
			width: 95%;
			/*display: flex;
			flex-direction: column;*/
			
			.message-body {
				max-height: 300px;
				overflow: auto !important;
			}
			
			.message-footer {
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
		}
	}
	
	.message.message-show {
		.message-dialog.custome {
			transform: scale(1);
			opacity: 1;
		}
	}
</style>
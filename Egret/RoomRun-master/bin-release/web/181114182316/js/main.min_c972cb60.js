var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);i.prototype=e.prototype,t.prototype=new i},__awaiter=this&&this.__awaiter||function(t,e,i,r){return new(i||(i=Promise))(function(n,o){function s(t){try{h(r.next(t))}catch(e){o(e)}}function a(t){try{h(r["throw"](t))}catch(e){o(e)}}function h(t){t.done?n(t.value):new i(function(e){e(t.value)}).then(s,a)}h((r=r.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function i(t){return function(e){return r([t,e])}}function r(i){if(n)throw new TypeError("Generator is already executing.");for(;h;)try{if(n=1,o&&(s=o[2&i[0]?"return":i[0]?"throw":"next"])&&!(s=s.call(o,i[1])).done)return s;switch(o=0,s&&(i=[0,s.value]),i[0]){case 0:case 1:s=i;break;case 4:return h.label++,{value:i[1],done:!1};case 5:h.label++,o=i[1],i=[0];continue;case 7:i=h.ops.pop(),h.trys.pop();continue;default:if(s=h.trys,!(s=s.length>0&&s[s.length-1])&&(6===i[0]||2===i[0])){h=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){h.label=i[1];break}if(6===i[0]&&h.label<s[1]){h.label=s[1],s=i;break}if(s&&h.label<s[2]){h.label=s[2],h.ops.push(i);break}s[2]&&h.ops.pop(),h.trys.pop();continue}i=e.call(t,h)}catch(r){i=[6,r],o=0}finally{n=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}var n,o,s,a,h={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:i(0),"throw":i(1),"return":i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a},CustomUI=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.prototype.Show=function(){},e}(eui.Component);__reflect(CustomUI.prototype,"CustomUI");var Role=function(t){function e(){var e=t.call(this)||this;return e.currFramesIndex=0,e.Body=new egret.Bitmap,e.Body=GameConst.createBitmapFromSheet("Role.FRAMES[0][0]","Sprites"),e.Body.anchorOffsetX=.5*e.Body.width,e.addChild(e.Body),e}return __extends(e,t),e.prototype.setState=function(t){this.state=t,this.state==e.STATE5?(this.isLoop=!1,this.Body.anchorOffsetY=0*this.Body.height):(this.isLoop=!0,this.Body.anchorOffsetY=1*this.Body.height),this.state==e.STATE3||this.state==e.STATE4?(this.currFrames=[],Math.random()>.5?this.currFrames.push(e.FRAMES[this.state][0]):this.currFrames.push(e.FRAMES[this.state][1])):this.currFrames=e.FRAMES[this.state],this.currFramesIndex=0,this.setBody()},e.prototype.setBody=function(){this.Body.texture=GameConst.getTextureFromSheet(this.currFrames[this.currFramesIndex],"Sprites"),this.Body.anchorOffsetX=.5*this.Body.width,this.state==e.STATE5?(this.isLoop=!1,this.Body.anchorOffsetY=0*this.Body.height):(this.isLoop=!0,this.Body.anchorOffsetY=1*this.Body.height)},e.prototype.run=function(){if(this.runFlag++,this.runFlag>4&&(this.runFlag=0),0==this.runFlag){var t=this.currFramesIndex+1;return t==this.currFrames.length&&(t=this.isLoop?0:this.currFramesIndex),t!=this.currFramesIndex&&(this.currFramesIndex=t,this.setBody()),!1}},e.prototype.play=function(){egret.startTick(this.run,this),this.runFlag=0},e.prototype.stop=function(){egret.stopTick(this.run,this)},e.STATE1=0,e.STATE2=1,e.STATE3=2,e.STATE4=3,e.STATE5=4,e.FRAMES=[["0020003","0020004","0020005","0020006","0020007"],["0020008"],["0020009","0020010"],["0020011","0020012"],["xue0001","xue0002","xue0003","xue0004","xue0005"]],e}(egret.Sprite);__reflect(Role.prototype,"Role");var Main=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this),GameConst.StageW=this.stage.stageWidth,GameConst.StageH=this.stage.stageHeight,console.info(GameConst.StageW,GameConst.StageH),egret.lifecycle.addLifecycleListener(function(t){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var e=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",e),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return[4,this.loadResource()];case 1:return i.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return t=i.sent(),[4,platform.login()];case 3:return i.sent(),[4,platform.getUserInfo()];case 4:return e=i.sent(),console.log(e),[4,platform.ShowshareMenu()];case 5:return i.sent(),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return i.trys.push([0,5,,6]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return i.sent(),[4,RES.getResByUrl("",function(){},this,RES.ResourceItem.TYPE_IMAGE)];case 2:return i.sent(),[4,this.loadTheme()];case 3:return i.sent(),[4,RES.loadGroup("preload",0,t)];case 4:return i.sent(),this.stage.removeChild(t),[3,6];case 5:return e=i.sent(),console.error(e),[3,6];case 6:return[2]}})})},e.prototype.loadTheme=function(){var t=this;return new Promise(function(e,i){var r=new eui.Theme("resource/default.thm.json",t.stage);r.addEventListener(eui.UIEvent.COMPLETE,function(){e()},t)})},e.prototype.createGameScene=function(){this.addChild(new GameApp);var t=document.querySelectorAll(".egret-player")[0]["egret-player"].canvas;t&&this.testGl(t)},e.prototype.testGl=function(t){var e=t.getContext("webgl");e.viewport(0,0,t.width,t.height),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);var i="\n                // 声明一个属性变量 a\n                attribute vec3 a;\n                void main(){\n                    // 顶点在作色器处理后的位置信息\n                    gl_Position = vec4(a, 1.0);\n                }    \n        ",r="\n                // 精度限定符, 最小精度为float\n                precision mediump float;\n                void main(){\n                    // 片段颜色\n                    gl_FragColor = vec4(1.0, 1.0, 0, 1.0);\n                }\n        ",n=e.createShader(e.VERTEX_SHADER),o=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(n,i),e.shaderSource(o,r),e.compileShader(n),e.compileShader(o);var s=e.createProgram();e.attachShader(s,n),e.attachShader(s,o),e.linkProgram(s),e.useProgram(s);var a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a);var h=[0,.5,0,-.5,-.5,0,.5,-.5,0];e.bufferData(e.ARRAY_BUFFER,new Float32Array(h),e.STATIC_DRAW);var c=e.getAttribLocation(s,"a");e.vertexAttribPointer(c,3,e.FLOAT,!1,0,0),e.enableVertexAttribArray(c),e.drawArrays(e.TRIANGLES,0,3)},e}(eui.UILayer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t.prototype.ShowshareMenu=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t.prototype.ShareMessage=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t.prototype.GetInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var ThemeAdapter=function(){function t(){}return t.prototype.getTheme=function(t,e,i,r){function n(t){e.call(r,t)}function o(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),i.call(r))}var s=this;"undefined"!=typeof generateEUI?egret.callLater(function(){e.call(r,generateEUI)},this):"undefined"!=typeof generateEUI2?RES.getResByUrl("resource/gameEui.json",function(t,i){window.JSONParseClass.setData(t),egret.callLater(function(){e.call(r,generateEUI2)},s)},this,RES.ResourceItem.TYPE_JSON):(RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),RES.getResByUrl(t,n,this,RES.ResourceItem.TYPE_TEXT))},t}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var g_ManagerEUI,GameApp=function(t){function e(){var e=t.call(this)||this;return e.addEventListener(egret.Event.ADDED_TO_STAGE,e.addStage,e),e}return __extends(e,t),e.prototype.addStage=function(){g_ManagerEUI=new ManagerEUI(this.stage),g_ManagerEUI.addChild(new HelloWorld)},e.prototype.goToMSTS=function(){var t=GameConst.CreateBitmapByName("xia_jpg");t.y=this.y+GameConst.StageH,t.height=this.y,this.stage.addChild(t),e.xia=t,GameControl.Instance.setStageHandler(this),GameControl.Instance.startGameHandler()},e.xia=new egret.DisplayObject,e}(egret.DisplayObjectContainer);__reflect(GameApp.prototype,"GameApp");var GameConst=function(){function t(){}return t.CreateBitmapByName=function(t){var e=RES.getRes(t),i=new egret.Bitmap(e);return i},t.createBitmapFromSheet=function(t,e){var i=RES.getRes(e+"_json."+t),r=new egret.Bitmap(i);return r},t.getTextureFromSheet=function(t,e){var i=RES.getRes(e+"_json."+t);return i},t.removeChild=function(t){t&&t.parent&&(t.parent.removeElement?t.parent.removeElement(t):t.parent.removeChild(t))},t}();__reflect(GameConst.prototype,"GameConst");var GameControl=function(t){function e(){var e=t.call(this)||this;return e.startGame=new StartGameLayer,e.gameScenes=new GameScenesLayer,e.overScenes=new GameOverLayer,e}return __extends(e,t),Object.defineProperty(e,"Instance",{get:function(){return e._instance||(e._instance=new e),e._instance},enumerable:!0,configurable:!0}),e.prototype.setStageHandler=function(t){this.currentStage=t,this.bgImg=GameConst.CreateBitmapByName("bg_jpg"),this.bgImg.width=GameConst.StageW,this.bgImg.height=GameConst.StageH,this.currentStage.addChild(this.bgImg)},e.prototype.startGameHandler=function(){this.gameScenes&&this.gameScenes.parent&&GameConst.removeChild(this.gameScenes),this.gameScenes&&this.overScenes.parent&&GameConst.removeChild(this.overScenes),this.currentStage.addChild(this.startGame),GameApp.xia.visible=!0},e.prototype.onGameScenesHandler=function(){this.startGame&&this.startGame.parent&&GameConst.removeChild(this.startGame),this.overScenes&&this.overScenes.parent&&GameConst.removeChild(this.overScenes),this.currentStage.addChild(this.gameScenes),GameApp.xia.visible=!1},e.prototype.showGameOverSceneHandler=function(){this.startGame&&this.startGame.parent&&GameConst.removeChild(this.startGame),this.gameScenes&&this.gameScenes.parent&&GameConst.removeChild(this.gameScenes),this.currentStage.addChild(this.overScenes),GameApp.xia.visible=!0},e.prototype.getGameOverDisplay=function(){return this.overScenes},e}(egret.Sprite);__reflect(GameControl.prototype,"GameControl");var MotionPoint=function(){function t(t,e){this.point=t,this.angle=e}return t}();__reflect(MotionPoint.prototype,"MotionPoint");var MotionStreak=function(){function t(t,e,i,r){this.fadeTime=200,this.minSeg=1,this.strokeW=64,this.strokeH=64,this.distance=64,this.texture=null,this.color="0xffffff",this.withNode=null,this.offSetPoints=new egret.Point(0,0),this.MaxNum=20,this.fadeMode=1,this.picePanel=null,this.points=new Array,this.nodes=new Array,this.lastPos=new egret.Point(0,0),this.withNode=t,this.texture=e,i&&(this.strokeW=i,this.strokeH=r),this.reset()}return t.prototype.reset=function(){this.points.splice(0,this.points.length),this.createNodes(20*this.MaxNum),this.timer1=new egret.Timer(16,0),this.timer1.stop(),this.timerFade=new egret.Timer(this.fadeTime,0),this.timerFade.stop(),this.withNode.parent&&(this.picePanel,this.picePanel=new egret.Sprite,this.withNode.parent.addChild(this.picePanel),this.picePanel.x=0,this.picePanel.y=0,this.lastPos.x=this.withNode.x+this.x-this.offSetPoints.x,this.lastPos.y=this.withNode.y+this.y-this.offSetPoints.y,this.withNode.parent.setChildIndex(this.picePanel,this.withNode.parent.getChildIndex(this.withNode)-1),this.timer1.addEventListener(egret.TimerEvent.TIMER,this._updateMaterial,this),this.timer1.addEventListener(egret.TimerEvent.TIMER,this._updateDrawMaterial,this),this.timer1.start(),this.timerFade.addEventListener(egret.TimerEvent.TIMER,this.reduce,this),this.timerFade.start())},t.prototype.destroy=function(){},t.prototype.setPosition=function(t,e){this.x=t,this.y=e},t.prototype._updateMaterial=function(){if(this.withNode&&this.picePanel){var t=this.withNode.x+this.x-this.offSetPoints.x,e=this.withNode.y+this.y-this.offSetPoints.y;this.picePanel.x=this.offSetPoints.x,this.picePanel.y=this.offSetPoints.y;var i=this.lastPos.x-t,r=this.lastPos.y-e,n=Math.sqrt(i*i+r*r),o=this.getAngle(new egret.Point(this.lastPos.x,this.lastPos.y),new egret.Point(t,e));if(n<this.distance)return;if(this.points.length<=this.nodes.length){if(this.points.push(new MotionPoint(new egret.Point(t,e),o)),1==this.fadeMode&&n>this.distance)for(var s=1;s<=Math.floor(n/this.distance);s++){var a=t+i*(s/Math.floor(n/this.distance)),h=e+r*(s/Math.floor(n/this.distance));this.points.push(new MotionPoint(new egret.Point(a,h),o))}}else this.points.pop();this.lastPos.x=t,this.lastPos.y=e}},t.prototype._updateDrawMaterial=function(){for(var t,e=this,i=function(){t=r.points[n];var i=r.nodes[n];try{i.anchorOffsetX=r.strokeW/2,i.anchorOffsetY=r.strokeH/2,i.x=t.point.x,i.y=t.point.y,i.rotation=t.angle,i.alpha=1/r.points.length*n,r.picePanel.addChild(i);r.fadeTime+r.fadeTime*(1/r.points.length)*n;egret.Tween.get(i).to({alpha:0},null).call(function(){e.picePanel.removeChild(i)},r)}catch(o){console.info(o,i)}},r=this,n=0;n<this.points.length;n++)i()},t.prototype.reduce=function(){this.points.length>this.MaxNum?this.points.splice(0,this.points.length-this.MaxNum):this.points.splice(0,1)},t.prototype.createNodes=function(t){for(var e=0;e<this.nodes.length;e++){this.nodes[e]}this.nodes.splice(0,this.nodes.length);for(var e=0;t>e;e++){var i=new egret.Sprite;this.nodes.push(i)}},t.prototype.getAngle=function(t,e){var i=e.x-t.x,r=e.y-t.y,n=0;return n=r>0&&i>0?Math.abs(Math.atan(r/i)*(180/Math.PI)):r>0&&0>=i?180-Math.abs(Math.atan(r/i)*(180/Math.PI)):0>=r&&0>=i?180+Math.abs(Math.atan(r/i)*(180/Math.PI)):360-Math.abs(Math.atan(r/i)*(180/Math.PI)),n+90},t}();__reflect(MotionStreak.prototype,"MotionStreak");var MyButton=function(t){function e(e,i){var r=t.call(this)||this;return r._shape=null,r.extData={},r._bg=GameConst.createBitmapFromSheet(e,"ui"),r.addChild(r._bg),r.title=GameConst.createBitmapFromSheet(i,"ui"),r.title.x=r._bg.width-r.title.width>>1,r.title.y=r._bg.height-r.title.height>>1,r.addChild(r.title),r}return __extends(e,t),e.prototype.setClick=function(t){this.touchEnabled=!0,this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClickEvent,this),this.onClick=t},e.prototype.onClickEvent=function(t){this.onClick(t)},e.prototype.setTitle=function(t){this.title=GameConst.CreateBitmapByName(t)},Object.defineProperty(e.prototype,"bg",{get:function(){return this._bg},set:function(t){this._bg=t},enumerable:!0,configurable:!0}),e.prototype.initCDGraphics=function(){var t=this._shape=new egret.Shape;t.x=this._bg.width/2,t.y=this._bg.height/2,this.addChild(t),this._bg.mask=t},e.prototype.startCD=function(){function t(i){return e(n),n+=6/r.extData.cd,n>360&&egret.stopTick(t,r),!1}function e(t){i.graphics.clear(),i.graphics.beginFill(65535,1),i.graphics.moveTo(0,0),i.graphics.lineTo(200,0),i.graphics.drawArc(0,0,200,0,t*Math.PI/180,-1==o),i.graphics.lineTo(0,0),i.graphics.endFill()}this._shape||this.initCDGraphics();var i=this._shape,r=this,n=0,o=1;egret.startTick(t,r)},e.prototype.fullFront=function(t){var e=new egret.Bitmap;e.texture=RES.getRes("$ui_json.btn_y"),e.scrollRect=new egret.Rectangle(0,0,this._bg.width,this._bg.height),e.x=0,e.y=0,t.addChild(e)},e}(egret.Sprite);__reflect(MyButton.prototype,"MyButton");var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Shake=function(){function t(){}return t.prototype.run=function(t,e,i){void 0===i&&(i=null),this.obj=t,this.initY=t.y,this.shakeNum=e,this.overFunc=i,egret.startTick(this.loop,this),this.num=0,this.flag=0},t.prototype.loop=function(){return 0==this.flag&&(this.obj.y<=this.initY?this.obj.y+=5:this.obj.y-=5,this.obj.y==this.initY&&(this.num++,this.num==this.shakeNum&&(egret.stopTick(this.loop,this),this.overFunc&&this.overFunc()))),this.flag++,2==this.flag&&(this.flag=0),!1},t}();__reflect(Shake.prototype,"Shake");var SpecialNumber=function(t){function e(){var e=t.call(this)||this;return e.gap=0,e}return __extends(e,t),e.prototype.setData=function(t){if(this.clear(),""!=t&&null!=t){for(var e=t.split(""),i=0,r=e.length,n=0;r>n;n++)try{var o=GameConst.createBitmapFromSheet(e[n],"ui");o&&(o.x=i,i+=o.width+this.gap,this.addChild(o))}catch(s){console.log(s)}this.anchorOffsetX=this.width/2}},e.prototype.clear=function(){for(;this.numChildren;)this.removeChildAt(0)},e}(egret.DisplayObjectContainer);__reflect(SpecialNumber.prototype,"SpecialNumber");var GameOverLayer=function(t){function e(){var e=t.call(this)||this;return e.init(),e}return __extends(e,t),e.prototype.init=function(){var t=GameConst.createBitmapFromSheet("bg_wenzi","ui");t.x=(GameConst.StageW-t.width)/2,this.addChild(t);var e=GameConst.createBitmapFromSheet("shibai","ui");e.x=(GameConst.StageW-e.width)/2,e.y=50,this.addChild(e);var i=GameConst.createBitmapFromSheet("fenshu","ui");this.addChild(i),i.x=120,i.y=238;var r=GameConst.createBitmapFromSheet("zuigaojilu","ui");r.x=290,r.y=238,this.addChild(r);var n=GameConst.createBitmapFromSheet("btn_y","ui");n.anchorOffsetX=n.width/2,n.anchorOffsetY=n.height/2,n.x=GameConst.StageW/2,n.y=GameConst.StageH/2-20,this.addChild(n);var o=GameConst.createBitmapFromSheet("btn_zaiwan","ui");o.x=(GameConst.StageW-o.width)/2,o.y=GameConst.StageH/2-35,o.touchEnabled=!0,this.addChild(o);var s=GameConst.createBitmapFromSheet("btn_b","ui");s.anchorOffsetX=s.width/2,s.anchorOffsetY=s.height/2,s.x=GameConst.StageW/2,s.y=GameConst.StageH/2+145,this.addChild(s);var a=GameConst.createBitmapFromSheet("btn_xuanya","ui");a.x=(GameConst.StageW-o.width)/2,a.y=GameConst.StageH/2+130,a.touchEnabled=!0,this.addChild(a),this.scoreNum=new SpecialNumber,this.scoreNum.x=138,this.scoreNum.y=283,this.addChild(this.scoreNum),this.maxScore=new SpecialNumber,this.maxScore.x=330,this.maxScore.y=283,this.addChild(this.maxScore),o.addEventListener(egret.TouchEvent.TOUCH_TAP,function(t){GameControl.Instance.onGameScenesHandler()},this),a.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){platform.ShareMessage()},this)},e.prototype.setGameOverDataHandler=function(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.scoreNum.setData(t.toString()),this.maxScore.setData(e.toString())},e}(egret.Sprite);__reflect(GameOverLayer.prototype,"GameOverLayer");var GameScenesLayer=function(t){function e(){var e=t.call(this)||this;return e.spaceArr=[50,70,90,110],e.init(),e}return __extends(e,t),e.prototype.init=function(){this.shake1=new Shake,this.shake2=new Shake;var t=new egret.Bitmap(RES.getRes("bg_jpg"));this.addChild(t),this.bg=RES.getRes("bg_qiang_png");var e=new egret.Bitmap(this.bg);e.mask=new egret.Rectangle(0,GameConst.StageH,GameConst.StageW,300),this.addChild(e),this.bgBitmaps=new Array,this.topContianer=new egret.Sprite,this.addChild(this.topContianer),this.topSprite=new egret.Sprite,this.topContianer.addChild(this.topSprite),this.topLine=new egret.Shape,this.topContianer.addChild(this.topLine),this.bottomContianer=new egret.Sprite,this.addChild(this.bottomContianer),this.bottomSprite=new egret.Sprite,this.bottomContianer.addChild(this.bottomSprite),this.bottomLine=new egret.Shape,this.bottomContianer.addChild(this.bottomLine),this.topRects=new Array,this.bottomRects=new Array,this.titleImg=GameConst.createBitmapFromSheet("bg_shangkuang","ui"),this.addChild(this.titleImg),this.scoreKuang=GameConst.createBitmapFromSheet("kuang","ui"),this.scoreKuang.x=5,this.addChild(this.scoreKuang),this.lvkuang=GameConst.createBitmapFromSheet("kuang","ui"),this.lvkuang.scaleX=-1,this.lvkuang.x=466,this.addChild(this.lvkuang),this.maxScore=GameConst.createBitmapFromSheet("fenshu","ui"),this.maxScore.x=40,this.maxScore.y=15,this.addChild(this.maxScore),this.currLV=GameConst.createBitmapFromSheet("guanqia","ui"),this.currLV.x=368,this.currLV.y=15,this.addChild(this.currLV),this.LvNum=new SpecialNumber,this.LvNum.x=393,this.LvNum.y=50,this.addChild(this.LvNum),this.recodeNum=new SpecialNumber,this.recodeNum.x=73,this.recodeNum.y=50,this.addChild(this.recodeNum),this.curretLevel=1,this.curretMaxScore=0,this.LvNum.setData(this.curretLevel.toString()),this.recodeNum.setData(this.curretMaxScore.toString()),this.role=new Role,this.addChild(this.role),this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addStage,this)},e.prototype.addStage=function(){this.dieNum=0,this.score=0,this.curretLevel=1,this.refreshScore(),this.initData(),this.start()},e.prototype.refreshScore=function(){this.LvNum.setData(this.curretLevel.toString()),this.recodeNum.setData(this.score.toString())},e.prototype.start=function(){this.touchEnabled=!0,this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this);var t=this;setTimeout(function(){t.shakeRun()},1500)},e.prototype.shakeRun=function(){this.shake1.run(this.topContianer,5,this.land.bind(this))},e.prototype.land=function(){var t=this;egret.Tween.get(this.topContianer).to({y:0},1e3).call(function(){t.landOver()})},e.prototype.landOver=function(){this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this),this.checkState(),this.shake2.run(this.bottomContianer,3,this.checkResult.bind(this))},e.prototype.checkState=function(){var t=this.getSpace();0==t?this.role.setState(Role.STATE5):t==this.spaceArr[2]?this.role.setState(Role.STATE4):t==this.spaceArr[0]?this.role.setState(Role.STATE3):t==this.spaceArr[1]&&this.role.setState(Role.STATE2),0==t&&this.setRolePos(this.rolePosIndex,-10,4)},e.prototype.checkResult=function(){var t=this.getSpace(),e=this;if(0==t){if(this.dieNum++,1==this.dieNum)return this.role.stop(),void setTimeout(function(){GameControl.Instance.getGameOverDisplay().setGameOverDataHandler(e.score,e.curretMaxScore),GameControl.Instance.showGameOverSceneHandler()},500)}else this.curretLevel++,this.score+=10,this.score>this.curretMaxScore&&(this.curretMaxScore=this.score),this.refreshScore();setTimeout(function(){e.refreshPoint()},1e3)},e.prototype.getSpace=function(){var t=this.topRects[this.rolePosIndex],e=this.bottomRects[this.rolePosIndex];return GameConst.StageH-t.height-e.height},e.prototype.refreshPoint=function(){this.initData(),this.start()},e.prototype.onClick=function(t){for(var e=this.bottomRects.length,i=0;e>i;i++){var r=this.bottomRects[i];if(t.stageX>r.x&&t.stageX<r.x+r.width){this.setRolePos(i);break}}},e.prototype.initData=function(){this.role.setState(Role.STATE1),this.role.play(),this.topRects.splice(0,this.topRects.length),this.bottomRects.splice(0,this.bottomRects.length);for(var t=150,e=!1,i=8,r=GameConst.StageW/i,n=0;i>n;n++){var o=t+10*Math.floor(8*Math.random());if(this.bottomRects.push(new egret.Rectangle(n*r,GameConst.StageH-o,r,o)),o=GameConst.StageH-o,Math.random()<.2||!e&&n==i-1){var s=Math.floor(Math.random()*this.spaceArr.length);o-=this.spaceArr[s],e=!0}this.topRects.push(new egret.Rectangle(n*r,0,r,o))}this.fullFront(this.topSprite,this.topRects),this.fullFront(this.bottomSprite,this.bottomRects,!0),this.drawLine(),this.topContianer.y=-200,this.setRolePos(3,17,0,!0)},e.prototype.setRolePos=function(t,e,i,r){void 0===e&&(e=17),void 0===i&&(i=0),void 0===r&&(r=!1),r||(this.rolePosIndex>t?t=this.rolePosIndex-1:this.rolePosIndex<t&&(t=this.rolePosIndex+1)),this.rolePosIndex=t;var n=this.bottomRects[t];this.role.x=n.x+n.width/2+i,this.role.y=n.y+e},e.prototype.drawLine=function(){var t=10;this.topLine.graphics.clear(),this.topLine.graphics.lineStyle(t,3401726),this.bottomLine.graphics.clear(),this.bottomLine.graphics.lineStyle(t,3401726),this.drawTopLine(t/2),this.drawBottomLine(t/2),this.topLine.graphics.endFill(),this.bottomLine.graphics.endFill()},e.prototype.drawTopLine=function(t){for(var e=this.topRects.length,i=0;e>i;i++){var r=this.topRects[i];0==i?(this.topLine.graphics.moveTo(r.x,r.height),this.topLine.graphics.lineTo(r.x+r.width,r.height)):(this.topLine.graphics.lineTo(r.x,r.height),this.topLine.graphics.lineTo(r.x+r.width,r.height))}},e.prototype.drawBottomLine=function(t){for(var e=this.bottomRects.length,i=0;e>i;i++){var r=this.bottomRects[i];0==i?(this.bottomLine.graphics.moveTo(r.x,r.y+t),this.bottomLine.graphics.lineTo(r.x+r.width,r.y+t)):(this.bottomLine.graphics.lineTo(r.x,r.y+t),this.bottomLine.graphics.lineTo(r.x+r.width,r.y+t))}},e.prototype.fullFront=function(t,e,i){void 0===i&&(i=!1),t.cacheAsBitmap=!1,this.clearBg(t);for(var r=e.length,n=0;r>n;n++){var o,s=e[n];this.bgBitmaps.length?o=this.bgBitmaps.pop():(o=new egret.Bitmap,o.texture=this.bg),s.width+=2,o.scrollRect=s,o.x=s.x,o.y=s.y,t.addChild(o)}},e.prototype.clearBg=function(t){for(;t.numChildren;){var e=t.getChildAt(0);e&&(t.removeChild(e),this.bgBitmaps.push(e))}},e}(egret.Sprite);__reflect(GameScenesLayer.prototype,"GameScenesLayer");var SkillContianer=function(t){function e(){var e=t.call(this)||this;return e.skillBnArr=new Array,e.init(),e}return __extends(e,t),e.prototype.init=function(){this.skillBnArr.splice(0,this.skillBnArr.length);for(var t=0;t<e.skillList.length;t++){var i=e.skillList[t],r=new MyButton("btn_y","btn_kaishi");this.addChild(r),r.x=GameConst.StageW-r.width-20,r.y=GameConst.StageH-200-100*t,r.setClick(this.onSkill),r.extData.idx=t,r.extData.cd=i.cd,this.skillBnArr.push(r)}},e.prototype.onSkill=function(t){var i=t.target.extData.idx;t.target.startCD(),console.info("onSkill:",e.skillList[i])},e.skillList=[{name:"金币双倍",skin:"btn_y",cd:1},{name:"能量大炮",skin:"btn_y",cd:5}],e}(egret.Sprite);__reflect(SkillContianer.prototype,"SkillContianer");var StartGameLayer=function(t){function e(){var e=t.call(this)||this;return e.init(),e}return __extends(e,t),e.prototype.init=function(){this.titleImage=GameConst.createBitmapFromSheet("logo_mishitaosheng","ui"),this.titleImage.x=51,this.titleImage.y=161,this.addChild(this.titleImage),this.startBtn=new MyButton("btn_y","btn_kaishi"),this.addChild(this.startBtn),this.startBtn.x=(GameConst.StageW-this.startBtn.width)/2,this.startBtn.y=GameConst.StageH/2-75,this.startBtn.setClick(this.onStartGameClick),this.moreBtn=new MyButton("btn_b","btn_gengduo"),this.moreBtn.x=(GameConst.StageW-this.startBtn.width)/2,this.moreBtn.y=GameConst.StageH/2+75,this.addChild(this.moreBtn),this.moreBtn.setClick(this.onMoreBtnClick);var t=new egret.TextField;t.width=GameConst.StageW,t.textAlign=egret.HorizontalAlign.CENTER,t.strokeColor=4210238,t.stroke=1,t.bold=!0,t.y=GameConst.StageH/2+250,t.text="Egret",this.addChild(t),this.skillContianer=new SkillContianer,this.addChild(this.skillContianer)},e.prototype.onStartGameClick=function(t){GameControl.Instance.onGameScenesHandler()},e.prototype.onMoreBtnClick=function(){console.log("更多游戏"),platform.GetInfo()},e}(egret.Sprite);__reflect(StartGameLayer.prototype,"StartGameLayer");var AssetAdapter=function(){function t(){}return t.prototype.getAsset=function(t,e,i){function r(r){e.call(i,r,t)}if(RES.hasRes(t)){var n=RES.getRes(t);n?r(n):RES.getResAsync(t,r,this)}else RES.getResByUrl(t,r,this,RES.ResourceItem.TYPE_IMAGE)},t}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var HelloWorld=function(t){function e(){var e=t.call(this)||this;return e.isDrage=!1,e.skinName="resource/assets/exml/helloPage.exml",e}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this),this.init()},e.prototype.init=function(){this.role=new Role,this.addChild(this.role),this.role.setState(Role.STATE1),this.role.x=200,this.role.y=300,this.role.play(),this.role.touchEnabled=!0,this.role.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.mouseDown,this),this.role.addEventListener(egret.TouchEvent.TOUCH_END,this.mouseUp,this)},e.prototype.mouseDown=function(t){console.log("Mouse Down."),this.isDrage=!0,this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseMove,this)},e.prototype.mouseMove=function(t){this.isDrage&&(console.log("moving now ! Mouse: [X:"+t.stageX+",Y:"+t.stageY+"]"),this.role.x=t.stageX,this.role.y=t.stageY)},e.prototype.mouseUp=function(t){console.log("Mouse Up."),this.isDrage=!1,this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseMove,this)},e}(eui.Component);__reflect(HelloWorld.prototype,"HelloWorld");var ManagerEUI=function(){function t(t){this.rootNode=new egret.Sprite,t.addChildAt(this.rootNode,0),this.layoutList=new Array}return t.prototype.getRootNode=function(){return this.rootNode},t.prototype.addChild=function(t,e){e&&e<this.layoutList.length?(this.layoutList.splice(e,1,t),this.rootNode.addChildAt(t,e)):(this.layoutList.push(t),this.rootNode.addChild(t))},t.prototype.removeChild=function(t){var e=this.layoutList.indexOf(t);e>=0?(this.layoutList.splice(e,1),this.rootNode.removeChild(t)):console.info("not exit at ManagerEUI:",t)},t.prototype.removeAll=function(){this.layoutList.splice(0,this.layoutList.length),this.rootNode.removeChildren()},t}();__reflect(ManagerEUI.prototype,"ManagerEUI");var page1=function(t){function e(){return t.call(this)||this}return __extends(e,t),e}(CustomUI);__reflect(page1.prototype,"page1");

import { CommonHandel, LoadHandel} from "./Define/CommonParam";
import { UIManager} from "./Manager/UIManager";
import { LoadManager } from "./Manager/LoadManager";
import { GameProto } from "./Net/protocols/GameProto";
import { WXManager } from "./Tool/wx/wxApi";
import { displaywxsub } from "./Tool/wx/displaywxsub";
import { MsEngine } from "./Net/protocols/MsEngine";
import { GAME_DEBUG, USE_MATCHVS, LOG_DEBUG } from "./Define/GameConfig";
import { LoginUI } from "./View/LoginUI";
import { Logger } from "./Tool/Logger";

/**
 * 常驻组件 从这里开始
 */
const {ccclass, property} = cc._decorator;

@ccclass
export class LocalNode extends cc.Component {
    /**
     *  数据域
     */
    @property({type:cc.Node,tooltip:"展示微信数据域"})
    displayView:cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //添加wx
        WXManager.Instance.loadWx();
        //MatchVs初始
        if(USE_MATCHVS){
            MsEngine.Instance;
        }
        //注册协议
        GameProto.Instance.registerProtocol();
        cc.debug.setDisplayStats(LOG_DEBUG);
    }

    start () {
        // 声明常驻根节点
        cc.game.addPersistRootNode(this.node);

        var that = this;
        LoadManager.Instance.preLoadRes(new LoadHandel(
            function(){

            },
            function(){
                that.enterFirstPage();
            }
        ));
        

    }

    async enterFirstPage(){
        var that = this;
        //
        await UIManager.Instance.openWindow('LoginUI');
        LoadManager.Instance.loadRes(new LoadHandel(
            function(completedCount,totalCount){
                let loginUI:LoginUI = UIManager.Instance.findComponent("LoginUI");
                if(loginUI){
                    loginUI.showProcess(Math.floor(completedCount*100/totalCount));
                }
            },
            function(){
                let loginUI:LoginUI = UIManager.Instance.findComponent("LoginUI");
                if(loginUI){
                    loginUI.showLogin();
                }

                Logger.info(cc.loader)
                that.activeThree();
            }
        ));
        
    }

    private activeThree(){
        this.node.getChildByName('threeNode').active = true;
    }
 
    /**
     * showDisplayView 数据域
     */
    public showDisplayView(){
        let _displaywxsub = this.displayView.getComponent("displaywxsub") as displaywxsub
        _displaywxsub.show();
    }
    public hideDisplayView(){
        let _displaywxsub = this.displayView.getComponent("displaywxsub") as displaywxsub
        _displaywxsub.hide();
    }

    // update (dt) {}

}

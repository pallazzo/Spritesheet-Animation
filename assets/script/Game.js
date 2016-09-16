cc.Class({
    extends: cc.Component,

    properties: {
        player:{
            default: null,
            type:cc.Node,
        },
    },

    // use this for initialization
    onLoad: function () {
        this.leftDown = false;
        this.rightDown = false;
        this.upDown = false;
        this.setInputControl();
    },
    setInputControl: function () {

        var self = this;
        
        // add keyboard event listener
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            
            onKeyPressed: function(keyCode, event) {
                

                switch(keyCode) {
                    case cc.KEY.a:
                        self.leftDown = true;
                        self.rightDown = false;
                        break;
                    case cc.KEY.d:
                        self.leftDown = false;
                        self.rightDown = true;
                        break;
                    case cc.KEY.w:
                        self.upDown = true;
                        self.leftDown = false;
                        self.rightDown = false;
                        break;    
                }
            },
            
            onKeyReleased: function(keyCode, event) {
                switch(keyCode) {
                    case cc.KEY.a:
                        self.leftDown = false;
                        break;
                    case cc.KEY.d:
                        self.rightDown = false;
                        break;
                    case cc.KEY.w:
                        self.upDown = false;
                        break;    
                }
            }
        }, self.node);
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        
        if(this.leftDown){
            this.player.getComponent('Player').walk(true);
        }else if(this.rightDown){
            this.player.getComponent('Player').walk(false);
        }else if(this.upDown){
            this.player.getComponent('Player').jump(); 
        }
        else{
            this.player.getComponent('Player').stopWalking(); 
        }

    },
});

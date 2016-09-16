cc.Class({
    extends: cc.Component,

    properties: {
        animation:{
            default: null,
            type:cc.Animation,
        },
        jumpDuration:0,
        jumpHeight:0,
    },

    // use this for initialization
    onLoad: function () {
        this.walking = false;
        this.jumping = false;
    },
    
    walk:function(left){
        if(!this.walking && !this.jumping){
            if(left){
                this.animation.play("man_walk_reverse"); 
            }else{
                this.animation.play("man_walk"); 
            }
           
           this.walking = true;
        }
         
    },
    stopWalking:function(){
        this.animation.play("man_idle");
        this.walking = false;
    },
    
    jump:function(){
        if(!this.jumping){
            this.walking = false;
            this.jumping = true;
            this.animation.play("man_jump");
            
            var jumpUp = cc.moveBy(this.jumpDuration, cc.p(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
            var jumpDown = cc.moveBy(this.jumpDuration, cc.p(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
            this.node.runAction(cc.sequence(jumpUp,jumpDown,cc.callFunc(this.onJumped, this)));
        }
        
    },
    onJumped:function(){
        this.jumping = false;
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

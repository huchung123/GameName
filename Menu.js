boil.Menu = function(){};

boil.Menu.prototype = {
    preload: function(){
        game.load.spritesheet('button', 'assets/images/start.png', 100, 58);
        game.load.image('background', 'assets/images/ok.png', 128, 58);

    },
    create: function(){
        game.add.sprite(0,0,'background')
        this.button = game.add.button(360, 400, 'button', this.actionOnClick, this, 1, 0, 1);
        
     console.log('You are in the Menu state');
    
    },
    actionOnClick: function() {
        changeState('Play');
        console.log('hi');
    },
    update: function(){
//        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
////            adam.x = adam.x + speed;
////            adam.animations.play('walk', 20, true);
////            adam.scale.setTo(0.7, 0.7);
//        }
//        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
////            adam.x = adam.x - speed;
////            adam.animations.play('walk', 20, true);
////            adam.scale.setTo(-0.7, 0.7);
//        }
//        else{
////            adam.animations.stop('walk');
////            adam.frame = 0;
//        }
//        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
////            adam.y = adam.y - speed;
////            if(adam.y < 400){
////                adam.y = 400;
//            }
//        }
//        else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
////            adam.y = adam.y + speed;
//        }
if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
            changeState('Play');
            }
        }
};
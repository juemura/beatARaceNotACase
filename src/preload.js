var preload = function(game){}

preload.prototype = {
	preload: function(){ 
        var loadingBar = this.add.sprite(160,240,"loading");
        loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);
		this.game.load.image("gametitle","assets/gametitle.png");
		this.game.load.image("play","assets/play.png");
		this.game.load.image("higher","assets/higher.png");
		this.game.load.image("lower","assets/lower.png");
		this.game.load.image("gameover","assets/gameover.png");
        
        this.game.load.image('player', 'assets/car.png');
        
        this.game.load.image('enemy', 'assets/lava.png');
        
        this.game.load.image('coin', 'assets/coin.png');
        
        this.game.load.image('wall', 'assets/wall.png');
	},
  	create: function(){
		this.game.state.start("GameTitle");
	}
}
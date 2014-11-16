function initSprite(x, y, imagepath, stage) {
	/*x and y to scale sprite in x and y direction*/
	
	var spriteImage = new Image();
	spriteImage.src = imagepath;
	
	var spriteSheet = new createjs.SpriteSheet({
		"images": [spriteImage],
		"frames": {"regX":0,"regY":0,"width": 64, "height": 64},
		/* {sequenceName: [firstFrame, lastFrame, NextSequenceName, Speed]}*/
		"animations": {"fire":[0,25, "fire",1]}
	});
	var sprite = new createjs.Sprite(spriteSheet, "fire");
	/*sprite.scaleX(x);
	sprite.scaleY(y);*/
	
	/*sprite.addEventListener("click", function(event) {
		sprite.gotoAndPlay("fire");
	});*/
    stage.addChild(sprite);
	stage.update();
}

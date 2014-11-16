function initSprite(x, y, spriteWidth, spriteHeight, numSprites, scaleX, scaleY, speed, imagepath, stage) {
	var sheet = new Image();
	sheet.src = imagepath;
	
	var spriteSheet = new createjs.SpriteSheet({
		images: [sheet],
		frames: {
			//regX: 	spriteWidth/2,
			//regY: 	spriteHeight/2,
			count: 	numSprites,
			width: 	spriteWidth,
			height: spriteHeight
		},
		/* {sequenceName: [firstFrame, lastFrame, NextSequenceName, Speed]}*/
	});


	/*createjs.Ticker.addEventListener("tick",function(){
		stage.update();
	 });*/
	
	/*Sprite(spriteSheet, frame/animation)*/
	sprite = new createjs.Sprite(spriteSheet, 1); //default isOff, frame 1
	sprite.setTransform(x, y);

	/*Scale Sprite*/
	sprite.scaleX = scaleX;
	sprite.scaleY = scaleY;
	
	stage.addChild(sprite);
	
	return sprite;
}

function changeFrame(sprite, isOn) {
	if (isOn) {
		sprite.gotoAndPlay(0);
	} else {
		sprite.gotoAndPlay(1);
	}
}
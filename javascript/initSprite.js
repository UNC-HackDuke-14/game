function initSprite(x, y, spriteWidth, spriteHeight, numSprites, scale, speed, clickFunction, imagepath, stage) {
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
		animations: {
			run: [0, numSprites, "run", speed]
		},
	});


	createjs.Ticker.addEventListener("tick",function(){
		stage.update();
	});
	
	/*Sprite(spriteSheet, frame/animation)*/
	sprite = new createjs.Sprite(spriteSheet, "run");
	sprite.setTransform(x, y);

	/*Scale Sprite*/	
	sprite.scaleX = spriteWidth * scale;
	sprite.scaleY = spriteHeight * scale;
	
	stage.addChild(sprite);
	
	/*Click Sprite for Event to Occur*/
	sprite.addEventListener("click", clickFunction);
	
	return sprite;
}
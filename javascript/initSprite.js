function initSprite(spriteWidth, spriteHeight, numSprites, imagepath, stage) {
	
	var sheet = new Image();
	sheet.src = imagepath;
	
	var spriteSheet = new createjs.SpriteSheet({
		images: [sheet],
		frames: {
			regX: 	spriteWidth/2,
			regY: 	spriteHeight/2,
			count: 	numSprites,
			width: 	spriteWidth,
			height: spriteHeight,
		},
		/* {sequenceName: [firstFrame, lastFrame, NextSequenceName, Speed]}*/
		animations: {
			run: [0, 7, "run", 1]
		}
	});
	
	/*Sprite(spriteSheet, frame/animation)*/
	sprite = new createjs.Sprite(spriteSheet, "run");

	/*Scale Sprite*/	
	/*sprite.scaleX = spriteWidth;
	sprite.scaleY = spriteHeight;*/
	
	/*Click Sprite for Event to Occur*/
	/*sprite.addEventListener("click", function(event) {
		sprite.gotoAndPlay("run");
	});*/
}
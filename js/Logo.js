/**
 * @author lufy
 */
function Logo(){
	base(this,LSprite,[]);
	this.init();
}
Logo.prototype.init = function(){
	var self = this,labelText;
	var bitmap = new LBitmap(new LBitmapData(dataList["logo"]));
	self.addChild(bitmap);
	self.addEventListener(LMouseEvent.MOUSE_UP, self.start);
	
	self.socialList = [];
	//self.social();
	
	labelText = new LTextField();
	labelText.font = "Bauhaus 93 100";
	//labelText.weight = "light";
	labelText.color = "white";
	labelText.scaleX = 3.0;
	labelText.scaleY = 3.0;
	labelText.x = 240;
	labelText.y = 220;
	labelText.text = "点击任意位置开始游戏";
	self.addChild(labelText);
};
Logo.prototype.start = function(event){
	var self = event.clickTarget;
	for(var i=0,l=self.socialList.length;i<l;i++){
		var obj = self.socialList[i];
		if(event.offsetX > obj.button.x && event.offsetX < obj.button.x + obj.button.getWidth() &&
			event.offsetY > obj.button.y && event.offsetY < obj.button.y + obj.button.getHeight()){
			share(obj.name);
			return;
		}
	}
	
	//MySoundPlayer.loadSound();
	//MySoundPlayer.playSound("background");
	gameStart();
};
/*Logo.prototype.social = function(){
	var self = this;
	var sina_btn = new LSprite();
	sina_btn.graphics.drawRect(1,"#006400",[0,0,50,50],true,"#ffffff");
	var sina_icon = new LBitmap(new LBitmapData(dataList["ico_sina"]));
	sina_icon.x = sina_icon.y = 17;
	sina_btn.addChild(sina_icon);
	self.addChild(sina_btn);
	
	var qq_btn = new LSprite();
	qq_btn.graphics.drawRect(1,"#006400",[0,0,50,50],true,"#ffffff");
	var qq_icon = new LBitmap(new LBitmapData(dataList["ico_qq"]));
	qq_icon.x = qq_icon.y = 17;
	qq_btn.addChild(qq_icon);
	qq_btn.x = 100;
	self.addChild(qq_btn);
	
	var facebook_btn = new LSprite();
	facebook_btn.graphics.drawRect(1,"#006400",[0,0,50,50],true,"#ffffff");
	var facebook_icon = new LBitmap(new LBitmapData(dataList["ico_facebook"]));
	facebook_icon.x = facebook_icon.y = 17;
	facebook_btn.addChild(facebook_icon);
	facebook_btn.x = 200;
	self.addChild(facebook_btn);
	
	var twitter_btn = new LSprite();
	twitter_btn.graphics.drawRect(1,"#006400",[0,0,50,50],true,"#ffffff");
	var twitter_icon = new LBitmap(new LBitmapData(dataList["ico_twitter"]));
	twitter_icon.x = twitter_icon.y = 17;
	twitter_btn.addChild(twitter_icon);
	twitter_btn.x = 300;
	self.addChild(twitter_btn);
	
	var ax = 20,ay = 370;
	self.socialList.push({name:"xlwb",button:sina_btn});
	sina_btn.x += ax;
	sina_btn.y += ay;
	self.socialList.push({name:"txwb",button:qq_btn});
	qq_btn.x += ax;
	qq_btn.y += ay;
	self.socialList.push({name:"facebook",button:facebook_btn});
	facebook_btn.x += ax;
	facebook_btn.y += ay;
	self.socialList.push({name:"twitter",button:twitter_btn});
	twitter_btn.x += ax;
	twitter_btn.y += ay;
};*/
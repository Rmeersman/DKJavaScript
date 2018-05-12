class levelT3 {
	constructor(){
		this.plateform = [];
		this.echelles = [];
		this.bonusList = [];
		this.color = 'yellow';
	}
	
	initLevel(){
		this.plateform.splice(0,this.plateform.length);
		tonneaux.splice(0,this.plateform.length);
		this.echelles.splice(0,this.plateform.length);
		dKong = new donkeyKong(canvas.width/25);
		this.loadPlateform();
		this.loadEchelle();
		this.loadBonus();
	}

	loadPlateform(){
		this.plateform.push(new Plateform(0,canvas.width/4.55,canvas.width-(canvas.width/5),canvas.width/4.55,this.color));
		this.plateform.push(new Plateform(0, canvas.height-canvas.height/120, canvas.height, canvas.height-canvas.height/120,this.color));
		this.plateform.push(new Plateform(0, canvas.height-canvas.height/20, canvas.width-canvas.width/1.1, canvas.height-canvas.height/20,this.color));
		this.plateform.push(new Plateform(0, canvas.height-canvas.height/5, canvas.width-canvas.width/1.1, canvas.height-canvas.height/5,this.color));
		this.plateform.push(new Plateform(0, canvas.height-canvas.height/2, canvas.width-canvas.width/1.1, canvas.height-canvas.height/2,this.color));
		this.plateform.push(new Plateform(canvas.width/4, canvas.height-canvas.height/2, canvas.width/2.25, canvas.height-canvas.height/2,this.color));
		this.plateform.push(new Plateform(canvas.width/4, canvas.height-canvas.height/8, canvas.width/2.25, canvas.height-canvas.height/8,this.color));
		this.plateform.push(new Plateform(canvas.width-canvas.width/2.8, canvas.height-canvas.height/20, canvas.width-canvas.width/2.8+(canvas.width/10), canvas.height-canvas.height/20,this.color));
		this.plateform.push(new Plateform(canvas.width-canvas.width/2.8+(canvas.width/10*1), canvas.height-canvas.height/20-(canvas.height/20),
										  canvas.width-canvas.width/2.8+(canvas.width/10*2), canvas.height-canvas.height/20-(canvas.height/20),this.color));
		this.plateform.push(new Plateform(canvas.width-canvas.width/2.8+(canvas.width/10*2), canvas.height-canvas.height/20-(canvas.height/20*2),
		                                  canvas.width-canvas.width/2.8+(canvas.width/10*3)+(canvas.width/8*4), canvas.height-canvas.height/20-(canvas.height/20*2),this.color));
		this.plateform.push(new Plateform(canvas.width-canvas.width/2.8+(canvas.width/10*1), canvas.height-canvas.height/20-(canvas.height/20*3),
										  canvas.width-canvas.width/2.8+(canvas.width/10*2), canvas.height-canvas.height/20-(canvas.height/20*3),this.color));
		this.plateform.push(new Plateform(canvas.width-canvas.width/2.8+(canvas.width/10*2), canvas.height-canvas.height/20-(canvas.height/20*4),
		                                  canvas.width-canvas.width/2.8+(canvas.width/10*3)+(canvas.width/8*4), canvas.height-canvas.height/20-(canvas.height/20*4),this.color));
		this.plateform.push(new Plateform(canvas.width-canvas.width/2.8+(canvas.width/10*1), canvas.height-canvas.height/20-(canvas.height/20*5),
										  canvas.width-canvas.width/2.8+(canvas.width/10*2), canvas.height-canvas.height/20-(canvas.height/20*5),this.color));
										  this.plateform.push(new Plateform(canvas.width-canvas.width/2.8+(canvas.width/10*1), canvas.height-canvas.height/20-(canvas.height/20*7),
										  canvas.width-canvas.width/2.8+(canvas.width/10*2), canvas.height-canvas.height/20-(canvas.height/20*7),this.color));
		////////////////////////////////////////////////////////////////////////////////////////////////
		this.plateform.push(new Plateform(canvas.width/8, canvas.height-canvas.height/2+(canvas.height/6.6666 * 0), canvas.width/8+(canvas.width/12), canvas.height-canvas.height/2+(canvas.height/6.6666 * 0),this.color,true,canvas.height-canvas.height/20,canvas.height-canvas.height/2));
		this.plateform.push(new Plateform(canvas.width/8, canvas.height-canvas.height/2+(canvas.height/6.6666 * 1), canvas.width/8+(canvas.width/12), canvas.height-canvas.height/2+(canvas.height/6.6666 * 1),this.color,true,canvas.height-canvas.height/20,canvas.height-canvas.height/2));
		this.plateform.push(new Plateform(canvas.width/8, canvas.height-canvas.height/2+(canvas.height/6.6666 * 2), canvas.width/8+(canvas.width/12), canvas.height-canvas.height/2+(canvas.height/6.6666 * 2),this.color,true,canvas.height-canvas.height/20,canvas.height-canvas.height/2));
		//////////////////////////////////////////////////////////////////////////////////////////////////
		this.plateform.push(new Plateform(canvas.width/2, canvas.height-canvas.height/2+(canvas.height/6.6666 * 0), canvas.width/2+(canvas.width/12), canvas.height-canvas.height/2+(canvas.height/6.6666 * 0),this.color,true,canvas.height-canvas.height/20,canvas.height-canvas.height/2));
		this.plateform.push(new Plateform(canvas.width/2, canvas.height-canvas.height/2+(canvas.height/6.6666 * 1), canvas.width/2+(canvas.width/12), canvas.height-canvas.height/2+(canvas.height/6.6666 * 1),this.color,true,canvas.height-canvas.height/20,canvas.height-canvas.height/2));
		this.plateform.push(new Plateform(canvas.width/2, canvas.height-canvas.height/2+(canvas.height/6.6666 * 2), canvas.width/2+(canvas.width/12), canvas.height-canvas.height/2+(canvas.height/6.6666 * 2),this.color,true,canvas.height-canvas.height/20,canvas.height-canvas.height/2));
	}
		
	loadEchelle(){
		//this.echelles.push(new Echelle(canvas.width-canvas.width/1.08,canvas.height-(canvas.height/4.9),canvas.width/5.35));
	}

	loadBonus(){
		this.bonusList.push(new bonus(canvas.width/1.1,canvas.height/1.6));
		this.bonusList.push(new bonus(canvas.width-canvas.width/1.1-(canvas.width/18)/2*2,canvas.height/1.6));
		this.bonusList.push(new bonus(canvas.width/2-(canvas.width/18)/2,canvas.height/1.9));
		this.bonusList.push(new bonus(canvas.width/10,canvas.height/2.5));
		this.bonusList.push(new bonus(canvas.width - canvas.width/10-(canvas.width/18)/2*2,canvas.height/2.5));
		this.bonusList.push(new bonus(canvas.width/2-(canvas.width/18)/2,canvas.height/4));
	}
}

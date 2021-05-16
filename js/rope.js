class rope{constructor(bodyA,pointB){
	var options={
		bodyA: bodyA,
		pointB: pointB,
		stiffness: 0.004,
		length: 10
	}
	this.rope = Constraint.create(options)
	World.add(world,this.rope)
	this.pointB = pointB;
	}
	attach(body){
		this.rope.bodyA = body;
	}
	fly(){
		this.rope.bodyA = null 
	}
	display(){
		if(this.rope.bodyA){
	
		var pointA = this.rope.bodyA.position;
		var pointB = this.pointB;
		line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}
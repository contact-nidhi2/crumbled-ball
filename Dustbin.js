class Dustbin{
        constructor(x,y){
            this.width=200;
            this.height=100;
            this.thick =20;
            this.base = Bodies.rectangle(x,y,this.width,this.thick,{isStatic :true});
            this.leftside = Bodies.rectangle(x-this.width/2,y-this.height/2+10,this.thick,this.height,{isStatic :true});
            this.rightside = Bodies.rectangle(x+this.width/2,y-this.height/2+10,this.thick,this.height,{isStatic :true}); 
            World.add(world,this.base);
            World.add(world,this.leftside);
            World.add(world,this.rightside);
      
      
        }
        display(){
         var pos =this.base.position;
          push();
         rectMode(CENTER);
         fill("red");
         rect(pos.x,pos.y,this.width,this.thick);
         rect(pos.x-this.width/2,pos.y-this.height/2+10,this.thick,this.height);
         rect(pos.x+this.width/2,pos.y-this.height/2+10,this.thick,this.height);
         pop();
        }
      
      }
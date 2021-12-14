"use strict"

class Ball{
  x:number = 250
  y:number = 250
  radius:number = 20
  dx:number = 10
  dy:number = 10

  constructor(x:number,y:number,radius:number,dx:number,dy:number){
      this.x = x
      this.y = y
      this.radius = radius
      this.dx = dx
      this.dy = dy
  }
}

let c=<HTMLCanvasElement>document.getElementById("myCanvas")
let ctx=<CanvasRenderingContext2D>c.getContext("2d")

let numberOfBalls = 2
let balls: Ball[] = []

//let x=c.width/2;
//let y=c.height-30;
//let dx=2;
//let dy=-2;
//let radius=10;

for(let j = 0;j<numberOfBalls;j++){
  balls.push(new Ball((Math.floor(Math.random()*501)), 
                      (Math.floor(Math.random()*501)), 
                      (Math.floor((Math.random()*50)+1)), 
                      (Math.floor((Math.random()*10)+1)), 
                      (Math.floor((Math.random()*10)+1))))
}


//requestAnimationFrame(cycle)
cycle()

function cycle(){
    ctx.fillStyle = "rgba(255,255,255,0.1)"
    ctx.fillRect(0,0,c.width,c.height); //Clears the canvas
      for (let i=0; i<balls.length; i++) {
      ctx.beginPath();
      ctx.arc(balls[i].x,balls[i].y,balls[i].radius,0,Math.PI*2)
      ctx.fillStyle = "black"
      ctx.fill()
      ctx.closePath()
      balls[i].x += balls[i].dx
      balls[i].y+= balls[i].dy

    if (balls[i].x<balls[i].radius||balls[i].x>c.width-balls[i].radius){
      balls[i].dx=-balls[i].dx
    }
    if (balls[i].y<balls[i].radius||balls[i].y>c.height-balls[i].radius){
      balls[i].dy=-balls[i].dy
    }
  
  }
  ctx.moveTo(balls[0].x, balls[0].y);
  ctx.lineTo(balls[1].x, balls[1].y);
  ctx.stroke()


    requestAnimationFrame(cycle) // calls the next frame (1/60th of a second later)

}
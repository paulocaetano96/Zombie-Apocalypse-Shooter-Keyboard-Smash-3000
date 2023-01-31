/** @type {HTMLCanvasElement} */

//Player class
//Used for the player character
class Player {
    constructor(x, y, width, height, hp, speedX, speedY, ctx, img, name, canvas){

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.hp = hp;
        this.speedX = 0;
        this.speedY = 0;
        this.ctx = ctx;
        this.img = img;
        this.name = name;
        this.canvas = canvas;
        
 

        

    }

    draw(){

        const playerImg = new Image();
        playerImg.src = this.img;
        this.ctx.drawImage(playerImg, this.x, this.y, this.width, this.height)
        
    }

    newPos(){


        if(this.x <= 0)this.x = 1;
        if(this.x >= this.canvas.width - this.width) this.x = canvas.width - this.width;
        if(this.y <= 0)this.y = 1;
        if(this.y >= this.canvas.height - this.height)this.y = canvas.height - this.height; 

        this.x += this.speedX;
        this.y += this.speedY;
        
         
      


    }

    shooting(){

    }

    top(){
        return this.y;
    }

    bottom(){
        return this.y + this.height;
    }

    left(){
        return this.x;
    }

    right(){
        return this.x + this.width;
    }

    crashWith(enemy){

        return !(
            this.bottom() < enemy.top() || this.top() > enemy.bottom() ||
            this.right() < enemy.left() || this.left() > enemy.right()
        );
    }
}

//Enemy class
//Used for the normal enemies
class Enemy {

    constructor(x, y, width, height, hp, ctx, img, shot, enemyType){

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.hp = hp;
        this.ctx = ctx;
        this.img = img;
        this.shot = shot;
        this.enemyType = enemyType;
       
        

    }

    draw(){

        const enemyImg = new Image();
        enemyImg.src = this.img;
        this.ctx.drawImage(enemyImg, this.x, this.y, this.width, this.height)


    }

    newPos(){

        if(player.x < this.x) this.x -=1;
        else this.x +=1;

        if(player.y < this.y) this.y -=1;
        else this.y +=1;
        
        
    }


    top(){
        return this.y;
    }

    bottom(){
        return this.y + this.height;
    }

    left(){
        return this.x;
    }

    right(){
        return this.x + this.width;
    }

    gotShot = () =>{

       
       return !(this.bottom() < this.shot.top() || this.top() > this.shot.bottom() || 
       this.right() < this.shot.left() || this.left() > this.shot.right())  
       
       
    }

    receiveDamage(){

        
        if(this.shot.shotFired)this.hp -= 5;
        this.shot.shotFired = false;
        console.log(this.hp)
        
        
       
    }

}

//Boss Class
//Used for the last special enemy
//Created a new class to be easier to understand when the boss will deploy on the game engine

class Boss extends Enemy {

    specialAttack(){

    }
    
    
}
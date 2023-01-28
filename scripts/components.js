/** @type {HTMLCanvasElement} */

//Player class
//Used for the player character
class Player {
    constructor(x, y, width, height, hp, speedX, speedY, ctx, img, name){

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.hp = hp;
        this.speedX = 5;
        this.speedY = 5;
        this.ctx = ctx;
        this.img = img;
        this.name = name;
 

        

    }

    draw(){

        const playerImg = new Image();
        playerImg.src = this.img;
        this.ctx.drawImage(playerImg, this.x, this.y, this.width, this.height)
        
    }

    newPos(){


        /* this.x += this.speedX;
        this.y += this.speedY;
         */
      


    }

    shooting(){

    }

    top(){
        return this.y;
    }

    bottom(){
        return this.y + this.h;
    }

    left(){
        return this.x;
    }

    right(){
        return this.x + this.w;
    }

    crashWith(){

    }
}

//Enemy class
//Used for the normal enemies
class Enemy {

    constructor(x, y, width, height, hp, ctx, img){

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.hp = hp;
        this.ctx = ctx;
        this.img = img;

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
        return this.y + this.h;
    }

    left(){
        return this.x;
    }

    right(){
        return this.x + this.w;
    }

    gotShot(){

    }


}

//Boss Class
//Used for the last special enemy
//Created a new class to be easier to understand when the boss will deploy on the game engine

class Boss extends Enemy {

    specialAttack(){

    }


}
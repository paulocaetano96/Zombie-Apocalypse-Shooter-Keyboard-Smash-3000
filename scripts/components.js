/** @type {HTMLCanvasElement} */

class Player {
    constructor(x, y, width, height, hp, speedX, speedY, ctx, img, name, mov){

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
        this.mov = mov;

        

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

    }

    newPos(){

        
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

class Boss extends Enemy {

    specialAttack(){

    }


}
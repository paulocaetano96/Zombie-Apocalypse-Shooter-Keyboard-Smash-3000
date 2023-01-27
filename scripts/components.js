/** @type {HTMLCanvasElement} */

class Player {
    constructor(x, y, width, height, hp, speedX, speedY, ctx, img, name){

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.hp = hp;
        this.speedX = speedX;
        this.speedY = speedY;
        this.ctx = ctx;
        this.img = img;
        this.name = name;

        

    }

    draw(){

    }

    newPos(){

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
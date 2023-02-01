/** @type {HTMLCanvasElement} */

//Player class
//Used for the player character
class Player {
    constructor(x, y, width, height, hp, speed, ctx, img, name, canvas){

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.hp = hp;
        this.speedX = 0;
        this.speedY = 0;
        this.speed = speed;
        this.ctx = ctx;
        this.img = img;
        this.name = name;
        this.canvas = canvas;
        this.initialHp = hp;
        
 

        

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

    healthBar(){
        this.ctx.fillStyle = 'Gray'
        this.ctx.fillRect(50, 15, this.initialHp + 20, 50)
        if((this.hp / this.initialHp) * 100 < 25) this.ctx.fillStyle = 'Red';
        else if((this.hp / this.initialHp) * 100 > 25 && (this.hp / this.initialHp) * 100 < 50) this.ctx.fillStyle = 'Orange';
        else if((this.hp / this.initialHp) * 100 >= 50 && (this.hp / this.initialHp) * 100 < 75) this.ctx.fillStyle = 'Yellow';
        else if((this.hp / this.initialHp) * 100 >= 75) this.ctx.fillStyle = 'Green';
        this.ctx.fillRect(60, 25, this.hp, 30)
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
        this.dx = 0;
        this.dy = 0;
        this.movLeft = null;
        this.movRight = null;
       
       
        

    }

    draw(){

        const enemyImg = new Image();
        enemyImg.src = this.img;
        if(this.movLeft)this.dy = 0;
        else if(this.movRight) this.dy = 52;
        this.ctx.drawImage(enemyImg, this.dx, this.dy, 40, 50, this.x, this.y, 50, 70);

    

    }

    newPos(){

        if(player.x < this.x) {
            this.x -=1;
            this.movLeft = true;
            this.movRight = false;
        } else{
            this.x +=1;
            this.movLeft = false;
            this.movRight = true;
        } 

        if(player.y < this.y) this.y -=1;
        else this.y +=1;

        if(player.x == this.x){
            this.movLeft = false;
            this.movRight = true;
        }
        
        
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

       
     /*   return !(this.bottom() < this.shot.top() || this.top() > this.shot.bottom() || 
       this.right() < this.shot.left() || this.left() > this.shot.right())  
        */
       
    }

    receiveDamage(){

        
        /* if(this.shot.shotFired)this.hp -= 5;
        this.shot.shotFired = false;
        console.log(this.hp) */
        this.hp -= 5;
        //console.log(this.hp)
        
        
       
    }

}

//Boss Class
//Used for the last special enemy
//Created a new class to be easier to understand when the boss will deploy on the game engine

class Boss extends Enemy {

    /* constructor(){
        super();
        
        this.startX = 0;
        this.startY = 0;
        this.setintervalId = null;
    } */

    draw(){

        const bossImg = new Image();
        bossImg.src = this.img;
        this.ctx.drawImage(bossImg, this.x, this.y, this.width, this.height)

    

    }

    update = () => {

        //this.setintervalId = setInterval(this.specialAttack, 4000);
        console.log('callback')
        this.update();
        

    }
    specialAttack(){

       
   /*  const attackImg = new Image();
    attackImg.src = this.img;
    if(this.movLeft)this.dy = 0;
    else if(this.movRight) this.dy = 52;
    this.ctx.drawImage(enemyImg, this.dx, this.dy, 40, 50, this.x, this.y, 50, 70); */
    
    this.ctx.drawImage(this.bullet, this.x, this.y, this.width, this.height) 
    
        

    }
    
    
}
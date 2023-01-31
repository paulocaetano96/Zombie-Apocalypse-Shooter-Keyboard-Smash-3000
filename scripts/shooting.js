/** @type {HTMLCanvasElement} */

class Shooting{
    constructor(x, y, player, canvas, img, speed, ctx, lastKey, index){

    this.x = x;
    this.y = y;
    this.height = 20;
    this.width = 20;
    this.player = player;
    this.canvas = canvas;
    this.ctx = ctx;
    this.img = img;
    this.speed = speed;
    this.intervalId = null;
    this.firstX = 0;
    this.firstY = 0;
    this.shotFired = false;
    this.lastKey = lastKey;
    this.bullet = new Image();
    this.bullet.src = this.img;
    this.countBullets = 0;
    this.index = index;

}

    firstShot(){

        this.x = this.player.x;
        this.y = this.player.y;
        //this.intervalId = setInterval(this.update, 10, lastKey)
        this.shotFired = true;
        console.log(this.index)
        
        
    }

  

    update = () => {

        this.draw();
        
        
    }

    draw() {

               
       if(this.shotFired) {

             this.ctx.drawImage(this.bullet, this.x, this.y, this.width, this.height) 

            switch(this.lastKey) {

                 case 'ArrowUp':
                     this.y -= 8;
                     break;

                 case 'ArrowDown':
                     this.y += 8;
                     break;

                case 'ArrowRight':
                     this.x += 8;
                     break;
                    
                case 'ArrowLeft':
                    this.x -= 8;
                    break; 
                
                case 'ArrowUpLeft':
                    this.x -= 8
                    this.y -= 8;
                    break;

                case 'ArrowUpRight':
                    this.x += 8;
                    this.y -= 8;
                    break;

                case 'ArrowDownLeft':
                    this.x -= 8;
                    this.y += 8;
                    break;
                    
                case 'ArrowDownRight':
                    this.x += 8;
                    this.y += 8;
                    break; 
                
        }


        }
        

    }

    shotEnd(){

        if(this.x >= this.canvas.width || this.x <= 0 || this.y >= this.canvas.width || this.y <= 0) {
            this.shotFired = false;
            //this.stopShot();
        }
       
        

      
    }

    crashWith(enemy){

        if(this.shotFired){
        return !(
            this.bottom() < enemy.top() || this.top() > enemy.bottom() ||
            this.right() < enemy.left() || this.left() > enemy.right()
        );}
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


    stopShot(){

        clearInterval(this.intervalId);
        console.log('SHOT STOP')
        //this.shotFired = false;
       
        
    }

}

class Reload {
    constructor(magazine, reloadTime, maxShots, ctx) {

        this.magazine = magazine
        this.reloadTime = reloadTime;
        this.maxShots = maxShots;
        this.countShots = 0;
        this.reload = false;
        this.ctx = ctx;

    }

    fireShot(){

        if(this.countShots >= this.magazine.length ){
            this.countShots = 0;
            this.reload = true;
            setTimeout(() => {this.reload = false}, 2000)
        } 

        if(!this.reload){
            this.magazine[this.countShots].firstShot();
            console.log(this.magazine[this.countShots])
            this.countShots ++;
        

        } 
    }


    reloading(){

        this.ctx.font = "bold 48px serif";
        this.ctx.fillStyle = 'Black';
        this.ctx.fillText(`${6 - this.countShots }`, 600, 50)
        if(this.reload){
            console.log('reloading')
            this.ctx.fillText('Reloading', 700, 50)
        }

        

    }


}
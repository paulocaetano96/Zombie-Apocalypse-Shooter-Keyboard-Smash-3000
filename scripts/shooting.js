/** @type {HTMLCanvasElement} */

class Shooting{
    constructor(x, y, player, canvas, img, speed, ctx, lastKey){

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

}

    firstShot(lastKey){

        this.x = this.player.x;
        this.y = this.player.y;
        this.intervalId = setInterval(this.update, 10, lastKey)
        this.shotFired = true;
        
    }

  

    update = (lastKey) => {

        this.draw(lastKey);
        
        
    }

    draw(lastKey) {

               
        if(this.shotFired) {

             this.ctx.drawImage(this.bullet, this.x, this.y, this.width, this.height) 

            switch(lastKey) {

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

        if(this.x >= this.canvas.width || this.x <= this.width || this.y >= this.canvas.width || this.y <= this.height) {
            this.shotFired = false;
            this.stopShot();
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


    stopShot(){

        clearInterval(this.intervalId);
        console.log('SHOT STOP')
        //this.shotFired = false;
       
        
    }

}

class Reload {
    constructor(reloadTime, maxShots) {

        this.shot = [];
        this.reloadTime = reloadTime;
        this.maxShots = maxShots;

    }

    fireShot


}
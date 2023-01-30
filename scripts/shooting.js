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

        

        const bullet = new Image();
        bullet.src = this.img;
        
if(this.shotFired) {
        switch(lastKey) {

            case 'ArrowUp':
               this.y -= 8;
               this.ctx.drawImage(bullet, this.x, this.y, this.width, this.height)
            

            
            break;

            case 'ArrowDown':
                this.y += 8;
                this.ctx.drawImage(bullet, this.x, this.y, this.width, this.height)
                break;

            case 'ArrowRight':
                this.x += 8;
                this.ctx.drawImage(bullet, this.x, this.y, this.width, this.height)
                break;
                    
            case 'ArrowLeft':
                this.x -= 8;
                this.ctx.drawImage(bullet, this.x, this.y, this.width, this.height)
                break; 
                
            case 'ArrowUpLeft':
                 this.x -= 8
                 this.y -= 8;

                 this.ctx.drawImage(bullet, this.x, this.y, this.width, this.height)
            break;

            case 'ArrowUpRight':
                this.x += 8;
                this.y -= 8;
                this.ctx.drawImage(bullet, this.x, this.y, this.width, this.height)
                break;

            case 'ArrowDownLeft':
                this.x -= 8;
                this.y += 8;
                this.ctx.drawImage(bullet, this.x, this.y, this.width, this.height)
                break;
                    
            case 'ArrowDownRight':
                this.x += 8;
                this.y += 8;
                this.ctx.drawImage(bullet, this.x, this.y, this.width, this.height)
                break; 
                
        }

        }
        
       

        

    



    }

    shotEnd(enemy){

        if(this.x >= this.canvas.width || this.x <= this.width || this.y >= this.canvas.width || this.y <= this.height) {
            this.stopShot();
        }
        //else if(this.x <= this.width) this.stopShot();
        //else if(this.y >= this.canvas.width) this.stopShot();
        //else if(this.y <= this.height) this.stopShot();
        //else if (!(this.bottom() < enemy.top() || this.top() > enemy.bottom() || 
        //this.right < enemy.left() || this.left > enemy.right())) this.stopShot();

      
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
        this.shotFired = false;
       
        
    }

}
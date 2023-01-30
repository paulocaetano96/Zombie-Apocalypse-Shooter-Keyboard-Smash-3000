/** @type {HTMLCanvasElement} */

class Shooting{
    constructor(x, y, player, canvas, img, speed, ctx){

    this.x = x;
    this.y = y;
    this.height = 10;
    this.width = 10;
    this.player = player;
    this.canvas = canvas;
    this.img = img;
    this.speed = speed;
    this.intervalId = null;
    this.firstX = 0;
    this.firstY = 0;

}

    firstShot(lastKey){

        this.x = this.player.x;
        this.y = this.player.y;
        this.intervalId = setInterval(this.update, 5, lastKey)
        
    }

  

    update = (lastKey) => {

        this.draw(lastKey);
      
        
    }

    draw = (lastKey) => {

        

        const bullet = new Image();
        bullet.src = this.img;
        

        switch(lastKey) {

            case 'ArrowUp':
               this.y -= 8;
               //ctx.drawImage(bullet, this.x, this.y, 50, 40)

            ctx.fillRect(this.x, this.y, 100, 100);
            break;

            case 'ArrowDown':
                this.y += 8;
                this.ctx.drawImage(bullet, this.x, this.y, 50, 40)
                break;

            case 'ArrowRight':
                this.x += 8;
                this.ctx.drawImage(bullet, this.x, this.y, 50, 40)
                break;
                    
            case 'ArrowLeft':
                this.x -= 8;
                this.ctx.drawImage(bullet, this.x, this.y, 50, 40)
                break; 
                
            case 'ArrowUpLeft':
                 this.x -= 8
                 this.y -= 8;

                 this.ctx.drawImage(bullet, this.x, this.y, 50, 40)
            break;

            case 'ArrowUpRight':
                this.x += 8;
                this.y -= 8;
                this.ctx.drawImage(bullet, this.x, this.y, 50, 40)
                break;

            case 'ArrowDownLeft':
                this.x -= 8;
                this.y += 8;
                this.ctx.drawImage(bullet, this.x, this.y, 50, 40)
                break;
                    
            case 'ArrowDownRight':
                this.x += 8;
                this.y += 8;
                this.ctx.drawImage(bullet, this.x, this.y, 50, 40)
                break; 
                
                

        }
        
       

        if(this.x >= this.canvas.width) this.stopShot();
        else if(this.x <= 0) this.stopShot();
        else if(this.y >= this.canvas.width) this.stopShot();
        else if(this.y <= 0) this.stopShot();

    



    }

    stopShot(){

        clearInterval(this.intervalId);
        
    }

}

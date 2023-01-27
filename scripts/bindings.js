document.addEventListener('keydown', (e) => {

    switch(e.code) {

        case 'ArrowLeft':
            player.x -= newGame.playerSpeed;
            break

        case 'ArrowRight':
            player.x += newGame.playerSpeed;
            break

        case 'ArrowUp':
            player.y -= newGame.playerSpeed;
            break

        case 'ArrowDown':
            player.y += newGame.playerSpeed;
            break

        
        
    }
})

document.addEventListener('keyup', () => {

    player.speedX = 0;
    player.speedY = 0;
})
document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('player');
    const gameContainer = document.getElementById('game-container');
    let playerX = 385;
    let playerY = 285;
    const speed = 3;

    const keys = {
        w: false,
        a: false,
        s: false,
        d: false
    };

    function movePlayer() {
        let dx = 0;
        let dy = 0;

        if (keys.w) dy -= speed;
        if (keys.s) dy += speed;
        if (keys.a) dx -= speed;
        if (keys.d) dx += speed;

        if (dx !== 0 && dy !== 0) {
            dx *= Math.SQRT1_2;
            dy *= Math.SQRT1_2;
        }

        const newX = playerX + dx;
        const newY = playerY + dy;

        // Keep the player within the game container
        const playerRect = player.getBoundingClientRect();
        const gameContainerRect = gameContainer.getBoundingClientRect();

        const minX = playerRect.width / 2;
        const maxX = gameContainerRect.width - playerRect.width / 2;
        const minY = playerRect.height / 2;
        const maxY = gameContainerRect.height - playerRect.height / 2;

        playerX = Math.max(minX, Math.min(newX, maxX));
        playerY = Math.max(minY, Math.min(newY, maxY));

        player.style.left = `${playerX}px`;
        player.style.top = `${playerY}px`;
    }

    document.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() in keys) {
            keys[e.key.toLowerCase()] = true;
        }
    });

    document.addEventListener('keyup', (e) => {
        if (e.key.toLowerCase() in keys) {
            keys[e.key.toLowerCase()] = false;
        }
    });

    function gameLoop() {
        movePlayer();
        requestAnimationFrame(gameLoop);
    }

    gameLoop();
});

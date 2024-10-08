document.addEventListener('keydown', function(event) {
    console.log(event.code); // Verifica qual tecla foi pressionada
    if (event.code === 'Space') {
        console.log('Space key pressed'); // Confirma que a tecla de espaço foi detectada
        jump();
    }
});

function jump() {
    const player = document.getElementById('player');
    if (!player.classList.contains('jump')) {
        console.log('Player is jumping'); // Confirma que a função de pulo foi chamada
        player.classList.add('jump');
        setTimeout(function() {
            player.classList.remove('jump');
            console.log('Player finished jumping'); // Confirma que o pulo terminou
        }, 500); // Tempo do pulo
    }
}

let isAlive = setInterval(function() {
    const player = document.getElementById('player');
    const obstacle = document.getElementById('obstacle');

    let playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue('bottom'));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));

    if (obstacleLeft < 50 && obstacleLeft > 0 && playerBottom < 50) {
        alert('Game Over!');
    }
}, 10);

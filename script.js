const playerOne = {
    score: 0,
    button: document.querySelector('#p1b'),
    display: document.querySelector('#playerOneDisplay')
}

const playerTwo = {
    score: 0,
    button: document.querySelector('#p2b'),
    display: document.querySelector('#playerTwoDisplay')
}

const resetButton = document.querySelector('#reset')
const winningScoreSelect = document.querySelector('#playTo')
let winningScore = 3
let isGameOver = false

function updateScores(player, opponent ){
    if (!isGameOver) {
        player.score += 1
        if (player.score === winningScore) {
            isGameOver = true
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.button.disabled = true
            opponent.button.disabled = true
        }
        player.display.textContent = player.score
    }
}

playerOne.button.addEventListener('click', function () {
    updateScores(playerOne, playerTwo)
})
playerTwo.button.addEventListener('click', function () {
    updateScores(playerTwo, playerOne)
})


resetButton.addEventListener('click', reset)

winningScoreSelect.addEventListener('change', function (){
    winningScore = parseInt(this.value)
    reset()
})

function reset() {
    isGameOver = false
    for(let player of [playerOne, playerTwo]){
        player.score = 0
        player.display.textContent = player.score
        player.display.classList.remove('has-text-success', 'has-text-danger')
        player.button.disabled = false
    }
}
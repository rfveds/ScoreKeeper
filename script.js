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
const usernameButton = document.querySelector('#usernames')
const usernamesForm = document.querySelector('#usernamesForm')
let winningScore = 3
let isGameOver = false

usernameButton.addEventListener('click', (e) =>{
    e.preventDefault()
    const p1NameInput = usernamesForm.elements.p1n.value
    const p2NameInput = usernamesForm.elements.p2n.value
    playerOne.button.innerHTML = `+1 ${p1NameInput}`
    playerTwo.button.innerHTML = `+1 ${p2NameInput}`
})

playerOne.button.addEventListener('click', function () {
    updateScores(playerOne, playerTwo)
})
playerTwo.button.addEventListener('click', function () {
    updateScores(playerTwo, playerOne)
})


resetButton.addEventListener('click', reset)

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    reset()
})

function reset() {
    isGameOver = false
    for (let player of [playerOne, playerTwo]) {
        player.score = 0
        player.display.textContent = player.score
        player.display.classList.remove('has-text-success', 'has-text-danger')
        player.button.disabled = false
        }
    playerOne.button.innerHTML = '+1 Player One'
    playerTwo.button.innerHTML = '+1 Player Two'
}

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1
        if (player.score === winningScore) {
            if (player.score - opponent.score > 2) {
                isGameOver = true
                player.display.classList.add('has-text-success')
                opponent.display.classList.add('has-text-danger')
                player.button.disabled = true
                opponent.button.disabled = true
            } else {
                winningScore++
            }
        }
        player.display.textContent = player.score
    }
}
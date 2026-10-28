const hPointEl = document.getElementById("hPoint-el")
const periodEl = document.getElementById("period-el")
const gPointEl = document.getElementById("gPoint-el")
let homePoints = 0
let period = 1
let guestPoints = 0

function restart() {
    hPointEl.textContent = 0
    periodEl.textContent = 1
    gPointEl.textContent = 0
    homePoints = 0
    period = 1
    guestPoints = 0
}

function addOneHome() {
    homePoints += 1
    hPointEl.textContent = homePoints
}

function addTwoHome() {
    homePoints += 2
    hPointEl.textContent = homePoints
}

function addThreeHome() {
    homePoints += 3
    hPointEl.textContent = homePoints
}

function addOneGuest() {
    guestPoints += 1
    gPointEl.textContent = guestPoints
}

function addTwoGuest() {
    guestPoints += 2
    gPointEl.textContent = guestPoints
}

function addThreeGuest() {
    guestPoints += 3
    gPointEl.textContent = guestPoints
}

function addOnePeriod() {
    period += 1
    periodEl.textContent = period
    if (period === 5) {
        restart()
    }
}

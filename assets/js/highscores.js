const storage = JSON.parse(localStorage.getItem('highscores'))
const scoresSection = document.getElementById('scores')
const scoresList = document.getElementById('scoresList')
const nullStorage = document.createElement('h1')

if(storage === null) {
    
    nullStorage.textContent = 'No one has stored their score. Be the first!'
    scoresSection.append(nullStorage)
} else {
    nullStorage.textContent = '' 
    for (var i = 0; i < storage.length; i++) {
        var li = document.createElement('li')
        li.textContent= 'Initials: ' + storage[i].initials + "Score: " + storage[i].score
        scoresList.append(li)
    }
}
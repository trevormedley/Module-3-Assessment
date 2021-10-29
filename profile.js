const colorButton = document.querySelector('#color')
const placeButton = document.querySelector('#place')
const ritualButton = document.querySelector('#ritual')

function showColor (event) {
    event.preventDefault();

    alert('Orange')
}

function showPlace (event) {
    event.preventDefault();

    alert('Any Lake Michigan Shoreline!!!')
}

function showRitual (event) {
    event.preventDefault();

    alert('Watching 48 hours of uninterrupted football on fall weekends.')
}

colorButton.addEventListener('click', showColor);
placeButton.addEventListener('click', showPlace);
ritualButton.addEventListener('click', showRitual);
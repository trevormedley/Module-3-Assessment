function giveRec (evt) {
	evt.preventDefault();

	const spotsArr = ['Tomato and Basil', 'McDonalds', 'Wendys', 'Arbys', 'Youngers Irish Tavern', 'The Office Pub', 'Main Street', 'Taco Bell', 'BonApetito', 'Romeo Family Restaurant', 'Art and Jakes']
	const randomIndex = Math.floor(Math.random()*spotsArr.length);
	const item = spotsArr[randomIndex];
	const newRec = document.createElement('h3')
	const spot = document.querySelector('#test')
	
	newRec.textContent = item;
	spot.appendChild(newRec)
}

const recButton = document.querySelector('#foodRec')

console.log('hello')

recButton.addEventListener('click', giveRec);
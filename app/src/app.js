console.log('Happy Hacking!');

const student = {
	name: 'Sifat Faysal Dipto',
	ID: 14,
	study: function (time) {
		console.log(time, 'at office');
	},
};

// getElementById
document.getElementById('#fish_section');
// getElementByClassName
document.getElementsByClassName('food_list');
// getElementByTagName
document.getElementsByTagName('div');

// css in javascript
const masterContainer = document.getElementById('content_section');
masterContainer.style.backgroundColor = '#1ab560';
masterContainer.style.marginBottom = '10px';
masterContainer.style.marginTop = '10px';
masterContainer.style.borderRadius = '10px';
masterContainer.style.padding = '10px';
masterContainer.style.color = 'white';
console.log(masterContainer);

// change text
const paragraphElement = document.querySelector('#content_section p');
paragraphElement.textContent = 'Lorem Replace by JS';

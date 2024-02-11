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
// Get the element with the id 'content_section'
const masterContainer = document.getElementById('content_section');

// Apply styles to the masterContainer element
masterContainer.style.backgroundColor = '#1ab560'; // Set background color
masterContainer.style.marginBottom = '10px'; // Set bottom margin
masterContainer.style.marginTop = '10px'; // Set top margin
masterContainer.style.borderRadius = '10px'; // Set border radius
masterContainer.style.padding = '10px'; // Set padding
masterContainer.style.color = 'white'; // Set text color

// Log the masterContainer element to the console
console.log(masterContainer);

// change text
// Get the <p> element inside the element with the id 'content_section' and update its text content
const paragraphElement = document.querySelector('#content_section p');
paragraphElement.textContent = 'Lorem Replace by JS';

// Get all <li> elements on the page
const liCollection = document.getElementsByTagName('li');

// Loop through each <li> element and log its inner text to the console
for (const li of liCollection) {
	console.log(li.innerText);
}

// Function to reset the background color to white
function resetColor() {
	document.body.style.backgroundColor = 'white';
}

// Get the element with the id 'body_purple' and assign click event handler
const makeBodyPurple = document.getElementById('body_purple');
makeBodyPurple.onclick = clickPurpleButton;

// Function to change the background color to purple when 'body_purple' is clicked
function clickPurpleButton() {
	document.body.style.backgroundColor = 'purple';
}

// Add a click event listener to the element with the id 'body_pink'
// Change the background color to pink when 'body_pink' is clicked
document.getElementById('body_pink').addEventListener('click', function () {
	document.body.style.backgroundColor = 'pink';
});

// Define a function to handle button clicks
function handleOnClick() {
	console.log('button clicked!'); // Log a message to the console
	const handlerStatus = document.getElementById('handler-status');
	handlerStatus.innerHTML = 'Clicked'; // Update the content of an element with ID 'handler-status'
}

// Add an event listener to an element with ID 'event-listener'
document.getElementById('event-listener').addEventListener('click', function () {
	const handlerStatus = document.getElementById('title-status');
	handlerStatus.innerHTML = 'text updated by listener button!'; // Update the content of an element with ID 'title-status'
});

// Add an event listener to an element with ID 'name-submit-btn'
document.getElementById('name-submit-btn').addEventListener('click', function () {
	const nameField = document.getElementById('name-field');
	const inputText = nameField.value;
	const p = document.getElementById('display-name');
	p.innerHTML = inputText; // Update the content of an element with ID 'display-name' to the value of the input field
	nameField.value = ''; // Clear the input field after submission
});


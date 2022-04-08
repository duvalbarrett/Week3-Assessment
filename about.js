console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form has been submitted');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


const catPic = document.querySelector('img');

catPic.addEventListener('mouseover', () => {
	alert(`You're as beautiful as this cat is`)
})



const randomArray = event => {
const randomElement = array[Math.floor(Math.random() * restaurants.length)];
}


const restaurantRecommender = document.querySelector('#random')

const restaurants = ['Ruth Chris', 'Steakhouse', 'Applebees', 'Sushi Bar' ]

restaurants.addEventListener('click', randomElement)


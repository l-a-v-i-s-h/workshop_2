const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.navbar');

function toggleMenu() {

navLinks.classList.toggle('open');

const isExpanded = navLinks.classList.contains('open');
menuButton.setAttribute('aria-expanded', isExpanded);
menuButton.innerHTML = isExpanded ? '✕' : '☰'; // X vs Hamburger
}

//submission handling
const contactForm = document.getElementById('contact-form')
const messageDiv = document.getElementById('form-message')

contactForm.addEventListener('submit', function(event){
	event.preventDefault()

	const nameInput = document.getElementById('name')
	const emailInput = document.getElementById('email')
	const descriptionInput = document.getElementById('description')

	if(nameInput === ''|| emailInput === '' || descriptionInput ===''){
		messageDiv.textContent = 'Please fill out all required fields.'
		messageDiv.style.color = 'red'
	}
	else{
		messageDiv.innerText = "Thank you for your message! I will be in touch shortly"
		messageDiv.style.color = '#46b4ac'
		contactForm.reset()
	}

})

menuButton.addEventListener("click", (e)=>{
	e.preventDefault();
	toggleMenu();
})
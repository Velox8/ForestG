document.addEventListener('DOMContentLoaded', function () {
	
	const burgerBtn = document.querySelector('.burger');

	const navBar = document.querySelector('.nav-mobile');
	const footerYear = document.querySelector('.footer-year');
	const navItem = document.querySelectorAll('.a');
	const menuItems = document.querySelectorAll('.nav-item');
	const scrollSpySections = document.querySelectorAll('.section');
	const faSolid = document.querySelector('.fa-tree');
	const userName = document.querySelector('#name');
	const email = document.querySelector('#email');
	const msgNew = document.querySelector('#msg');

	const showError = (input, msg) => {
		// argument input przechowyje inputa
		// argument msg przechowuje placeholder
		const formBox = input.parentElement;
		const errorMsg = formBox.querySelector('.error-text');
		
		formBox.classList.add('error');
		errorMsg.textContent = msg;
	};
	
	const clearError = (input) => {
		const formBox = input.parentElement;
		
		const errorMsg = formBox.querySelector('.error-text');
		formBox.classList.remove('error');
		errorMsg.textContent = 'Wszystkiego Najlepszego EMIL!!!!!';
	};
	
	const checkForm = (input) => {
		input.forEach((el) => {
			if (el.value === '') {
				showError(el, el.placeholder);
			} else {
				clearError(el);
			}
		});
	};



	
	const buttons = document.getElementsByClassName('contact-form-button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(e) {
    e.preventDefault();
    checkForm([userName, email, msgNew]);
  });
}
	function disableScroll(event) {
		event.preventDefault();
	}

	const handleScrollSpy = () => {
		const sections = [];

		scrollSpySections.forEach((section) => {
			if (window.scrollY <= section.offsetTop + section.offsetHeight - 100) { 				sections.push(section);

				const activeSection = document.querySelector(
					`[href*="${sections[0].id}"]`
				);

				menuItems.forEach((item) => item.classList.remove('active'));

				activeSection.classList.add('active');
			}

			if (
				window.innerHeight + window.scrollY >=
				document.body.offsetHeight - 200
			) {
				const lastSection = document.querySelector('a:last-of-type');

				menuItems.forEach((item) => item.classList.remove('active'));

				lastSection.classList.add('active');
			}
		});
	};

	window.addEventListener('scroll', handleScrollSpy);
	navBar.addEventListener('touchmove', disableScroll, { passive: false });
	navBar.addEventListener('wheel', disableScroll, { passive: false });
	

	const addActive = () => {
		navBar.classList.toggle('nav-mobile-active');
	};

	const removeA = () => {
		navBar.classList.remove('nav-mobile-active');
	};
	const handleCurrentYear = () => {
		const year = new Date().getFullYear();
		footerYear.innerText = year;
	};

	handleCurrentYear();

	faSolid.addEventListener('click', function () {
		window.location.href = 'index.html#home';
	});
	burgerBtn.addEventListener('click', addActive);
	navItem.forEach((item) => {
		item.addEventListener('click', removeA);
	});
});

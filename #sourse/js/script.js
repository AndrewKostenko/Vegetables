// IBG =============================================================
jQuery('.ibg').each(function () {
	var src = jQuery(this).find('img').attr('src');
	jQuery(this).css('background', 'url(' + src + ') center / cover no-repeat');
	jQuery(this).find('img').css('display', 'none');
});
// /IBG =============================================================

const burger = document.querySelector('.menu_burger');
const headerMenu = document.querySelector('.menu-header');
const categoriesTop = document.querySelector('.categories-intro_top');
const categoriesList = document.querySelector('.categories-intro_list');
const menuIntro = document.querySelector('.menu-intro_top');
const introItems = document.querySelector('.menu-intro_items');

document.documentElement.addEventListener('click', function (e) {

	let targetElement = e.target;

	if (targetElement.closest('.menu_burger')) {
		burger.classList.toggle('active');
		if (burger.classList.contains('active')) {
			headerMenu.classList.add('active');
			headerMenu.style.height = headerMenu.scrollHeight + 'px';
		} else {
			headerMenu.classList.remove('active');
			headerMenu.style.height = 0;
		}
	}

	if (!targetElement.closest('.header_bottom_inner')) {
		burger.classList.remove('active');
		headerMenu.classList.remove('active');
		headerMenu.style.height = 0;
	}

	if (targetElement.closest('.categories-intro_top')) {
		categoriesTop.classList.toggle('active');
		if (categoriesTop.classList.contains('active')) {
			categoriesList.style.height = categoriesList.scrollHeight + 'px';
		} else {
			categoriesList.style.height = 0;
		}
	}

	if (!targetElement.closest('.categories-intro')) {
		categoriesTop.classList.remove('active');
		categoriesList.style.height = 0;
	}

	if (targetElement.closest('.categories-intro_item')) {
		targetElement.classList.toggle('active');
		let categoriesCount = 0;

		for (let a = 0; a < categoriesList.children.length; a++) {
			if (categoriesList.children[a].classList.contains('active')) {
				categoriesCount += 1;
			}
		}
		if (categoriesCount == 0) {
			categoriesTop.innerHTML = 'All Categories';
		} else {
			categoriesTop.innerHTML = 'Selected: ' + categoriesCount;
		}
	}
	//===============================================
	if (window.innerWidth < 900) {
		if (targetElement.closest('.menu-intro_top')) {
			menuIntro.classList.toggle('active');

			if (menuIntro.classList.contains('active')) {
				introItems.classList.add('active');
				introItems.style.height = introItems.scrollHeight + 'px';
			} else {
				introItems.classList.remove('active');
				introItems.style.height = 0;
			}
		}
	}
	//===============================================


});

const languageList = document.querySelector('.language-header_list');

document.documentElement.addEventListener('click', function (e) {
	let targetElement = e.target;

	if (targetElement.closest('.language-header_top')) {
		let languageItem = targetElement.closest('.language-header_top').nextElementSibling;
		languageItem.classList.toggle('active');
	}
	if (targetElement.closest('.language-header_list')) {
		console.log(targetElement.closest('.language-header_list'));

		let languageTop = document.querySelector('.language-header_top');
		languageList.insertAdjacentElement('afterbegin', languageTop.querySelector('.language-header_item'));
		languageTop.insertAdjacentElement('afterbegin', targetElement.closest('.language-header_item'));
	}
})


const introTel = document.querySelector('.contacts-intro_img');

jQuery('.type_blocks').slick();

const featureFilter = document.querySelectorAll('[data-filter]');
const featureItems = document.querySelectorAll('.item-feature');

for (let a = 0; a < featureFilter.length; a++) {
	featureFilter[a].addEventListener('click', function () {
		let filterId = this.dataset.filter.slice(1);
		for (let a = 0; a < featureFilter.length; a++) {
			featureFilter[a].classList.remove('active')
		}
		this.classList.add('active');
		if (filterId != 'all') {
			for (let a = 0; a < featureItems.length; a++) {
				featureItems[a].style.display = 'block';
				if (featureItems[a].getAttribute('id') != filterId) {
					featureItems[a].style.display = 'none'
				}
			}
		} else if (filterId == 'all') {
			for (let a = 0; a < featureItems.length; a++) {
				featureItems[a].style.display = 'block';
			}
		}
	})
}



const footerRights = document.querySelector('.footer_rights');
const footerMain = document.querySelector('.footer_main');
const footerForm = document.querySelector('.footer_form');

window.addEventListener('resize', function () {
	let windowWidth = window.innerWidth;
	if (windowWidth < 900) {
		footerForm.insertAdjacentElement('beforeend', footerRights);
	} else {
		footerMain.insertAdjacentElement('beforeend', footerRights)
	}

})
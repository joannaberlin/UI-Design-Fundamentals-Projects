const get = (element) => document.getElementById(element);

let openBtn = get('menu-btn');
let nav = get('nav');
let exitBtn = get('exit-btn');

openBtn.addEventListener('click', () => {
	nav.classList.add('open-nav');
});

exitBtn.addEventListener('click', () => {
	nav.classList.remove('open-nav');
});

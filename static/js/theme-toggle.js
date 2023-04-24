
if (localStorage.getItem("themeStore") == 'dark'){document.body.classList.add('dark')}
else {document.body.classList.remove('dark')};

document.querySelector(".themeToggle").addEventListener
('click', () => {
	document.body.classList.toggle('dark');
	localStorage.setItem("themeStore", document.body.classList);
});
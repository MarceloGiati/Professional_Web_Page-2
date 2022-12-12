const themeSwitch = document.querySelector('.themeSwitch');
const body = document.querySelector('body');

themeSwitch.onclick = function() {
   body.classList.toggle('dark');
}
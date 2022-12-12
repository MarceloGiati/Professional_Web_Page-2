
// Now, we fix menu active class issue for mobile device //
function toggleMenu() {
  const navigation = document.querySelector('.navigation');
  const main = document.querySelector('.main');
  navigation.classList.remove('active');
  main.classList.remove('active');

}
const menuItems = document.querySelectorAll('li');
const sections = document.querySelectorAll('section');

const reset = () => {
  sections.forEach((section) => {
    section.style.display = 'none';
  });
}
reset();
sections[0].style.display = 'block';

menuItems[0].addEventListener('click', () => {
  reset();
  sections[0].style.display = 'block';
});

menuItems[1].addEventListener('click', () => {
  reset();
  sections[1].style.display = 'block';
});

menuItems[2].addEventListener('click', () => {
  reset();
  sections[2].style.display = 'block';
});

export { reset, menuItems, sections};

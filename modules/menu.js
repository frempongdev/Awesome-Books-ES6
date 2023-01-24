const menuItems = document.querySelectorAll('li');
const sections = document.querySelectorAll('section');

const reset = () => {
  sections.forEach((section) => {
    section.style.display = 'none';
  });
};
reset();
sections[0].style.display = 'block';

export { reset, menuItems, sections };

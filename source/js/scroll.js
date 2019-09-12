const links = document.querySelectorAll('.site-list__item');
const sections = document.querySelectorAll('.element-navigation');

function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
  links.forEach((link) => link.classList.remove('site-list__item--active'));
  links[index].classList.add('site-list__item--active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);

const anchors = document.querySelectorAll('a[href^="#"]');
for (let anchor of anchors) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView( {
      behavior: "smooth",
      block: "start"
    })
  })
} 

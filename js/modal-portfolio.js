const portfolioImage = document.getElementById('portfolioImage');

const modalOverlay = document.querySelector('.modal-overlay');




let selectedTd;
let elementObj = {};

portfolioImage.addEventListener('click', function(event) {
	let target = event.target;
	if (target.tagName == 'IMG') {
		showModalImage(target);
		elementObj.element = target;
	} 
});

/*portfolioImage.onclick = function(event) {
  let target = event.target;
	if (target.tagName == 'IMG') {
		showModalImage(target);
		return;
	} 
}*/

function showModalImage(node) {
	if (node.classList.contains('image-list__image--modal-hidden')) {
    node.classList.add('image-list__image--modal-show');
    node.classList.remove('image-list__image--modal-hidden');
    showModalOverlay();
  } else if (node.classList.contains('image-list__image--modal-show')) {
    node.classList.add('image-list__image--modal-hidden');
    node.classList.remove('image-list__image--modal-show');
    showModalOverlay();
  }
}

function showModalOverlay() {
	if (modalOverlay.classList.contains('modal-overlay--hidden')) {
    modalOverlay.classList.add('modal-overlay--show');
    modalOverlay.classList.remove('modal-overlay--hidden');
  } else {
		modalOverlay.classList.add('modal-overlay--hidden');
    modalOverlay.classList.remove('modal-overlay--show');
  }
}


modalOverlay.addEventListener('click', function() {
	showModalImage(elementObj.element);
	modalOverlay.classList.add('modal-overlay--hidden');
  modalOverlay.classList.remove('modal-overlay--show');
});


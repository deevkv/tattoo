window.onscroll = function showHeader() {
    const header = document.querySelector('.main-nav__wrapper');
    if(window.pageYOffset > 200){
        header.classList.add('header-fixed');
        console.log('good');
    } else{
        header.classList.remove('header-fixed');
        console.log('very good');
    }
}
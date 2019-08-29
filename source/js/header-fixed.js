window.addEventListener ('scroll', function() {
    const header = document.querySelector('.main-nav__wrapper');
    if(window.pageYOffset > 200){
        header.classList.add('header-fixed');
    } else{
        header.classList.remove('header-fixed');
    }
});



/*window.onscroll = function showHeader() {
    const header = document.querySelector('.main-nav__wrapper');
    if(window.pageYOffset > 200){
        header.classList.add('header-fixed');
    } else{
        header.classList.remove('header-fixed');
    }
}*/
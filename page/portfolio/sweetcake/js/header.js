;(function() {
    const nav = document.querySelector('.header__nav');
    const navContainer = nav.parentElement;
    const cancel = document.querySelector('.header__nav__cancel');
    // console.log(cancel)
    // console.log(navContainer)

    navContainer.addEventListener('click',(e) => {
        if(e.target.className.includes('cancel')) {
            nav.style.setProperty('transform','translateX(-100%)')
        }else {
            nav.style.setProperty('transform','translateX(0)')
        }
    })
})()
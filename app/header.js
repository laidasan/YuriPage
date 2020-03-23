(() => {
    const $header = document.querySelector('.header')
    const $headerNav = document.querySelector('.header__nav')
    const $menuItems = document.querySelectorAll('.header__nav__link').forEach ? Array.from(document.querySelectorAll('.header__nav__link')) : document.querySelectorAll('.header__nav__link')
    let isMobile = universal.isMobile(navigator.userAgent)
    let text = document.createTextNode('menu')
    text.type = 'text'
    const $menuItemsTranslate = [{}]
    const phoneWidth = 375

    function menuHandler(e) {
        const target = e.target
        let isHeader = target.matches ? target.matches('.header') : target.className.match('.header')
        if(isHeader) {
            console.log('menu open')
            e.preventDefault()
            $headerNav.classList.toggle('header__nav--open')
        }
    }

    function headerControl(e) {
        console.log('header__resize')
        if(window.innerWidth < phoneWidth){
            console.log('add eventlistener')
            $header.addEventListener('click',menuHandler)
            $header.appendChild(text)
        }else {
            console.log('none')
            $header.lastChild.textContent === 'menu' ? $header.removeChild(text) : ''
            $headerNav.classList.remove('header__nav--open')
        }
    }
    headerControl()
    window.addEventListener('resize',universal.throttle(headerControl) )
})()
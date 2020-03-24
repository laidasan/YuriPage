(() => {
    const $header = document.querySelector('.header')
    const $headerNav = document.querySelector('.header__nav')
    // const $menuItems = document.querySelectorAll('.header__nav__link').forEach ? Array.from(document.querySelectorAll('.header__nav__link')) : document.querySelectorAll('.header__nav__link')
    // let isMobile = universal.isMobile(navigator.userAgent)
    const $mainIntro = document.querySelector('.main-intro')
    const $spanMenu = document.createElement('span')
    $spanMenu.textContent = 'Menu'

    let text = document.createTextNode('menu')
    text.type = 'text'
    const phoneWidth = 375

    
    function menuHandler(e) {
        const target = e.target
        // let isHeader = target.matches ? target.matches('.header') : target.className.match('.header')
        let isMenu = target.matches ? target.matches('span') : target.className.match('span')
        if(isMenu) {
            console.log('menu open')
            e.preventDefault()
            $headerNav.classList.toggle('header__nav--open')
            $header.classList.toggle('u-color-white')
            $header.classList.toggle('u-color-black')
        }else {
            console.log(target)
        }
    }
    
    function headerInit() {
        if(window.innerWidth < phoneWidth){
            console.log('add eventlistener')
            $header.addEventListener('click',menuHandler)
            // $header.appendChild(text)
            $header.appendChild($spanMenu)
            $header.classList.add('u-color-white')
        }else {
            console.log('none')
            // $header.lastChild.textContent === 'menu' ? $header.removeChild(text) : ''
            console.log($header.lastChild)
            $header.lastChild.textContent === 'Menu' ? $header.removeChild($spanMenu) : console.log("doesn't remove span")
            $headerNav.classList.remove('header__nav--open')
        }
    }

    function headerScroll() {
        let windowTop = window.scrollY
        let IntroTop = $mainIntro.offsetTop
        if(windowTop > IntroTop - 40) {
            $header.style.setProperty('background','#222222')
            $header.style.setProperty('color','#fff')
        }else{
            $header.style.removeProperty('background')
            $header.style.removeProperty('color','#fff')
        }
    }

    function headerHandler(type) {
        switch (type) {
            case 'resize' :
                headerInit()
                break;
            case 'scroll' :
                headerScroll()
                break;
        }
    }




    function headerControl(e) {
        console.log('header control')
        e ? e = e['0']  : ''
        headerHandler(e.type)
    }
    headerInit()
    window.addEventListener('resize',universal.throttle(headerControl))
    window.addEventListener('scroll',universal.throttle(headerControl))
})()
(() => {
    const $header = document.querySelector('.header')
    const $headerNav = document.querySelector('.header__nav')
    const $menuItems = document.querySelectorAll('.header__nav__link').forEach ? Array.from(document.querySelectorAll('.header__nav__link')) : document.querySelectorAll('.header__nav__link')
    const $mainIntro = document.querySelector('.main-intro')
    const $spanMenu = document.createElement('span')
    $spanMenu.textContent = 'Menu'
    $spanMenu.setAttribute('name','Menu')

    let text = document.createTextNode('menu')
    text.type = 'text'
    const phoneWidth = 375

    
    function menuHandler(e) {
        console.log('menu click')
        const target = e.target
        // let isHeader = target.matches ? target.matches('.header') : target.className.match('.header')
        let isMenu = target.matches ? target.matches('span') : target.getAttribute('name') === 'Menu'
        //Trident IE browser的引擎
        let isTridentEdge = navigator.userAgent.includes('Trident') || navigator.userAgent.includes('Edge')
        console.log(navigator.userAgent)
        if(isMenu) {
            console.log('menu open')
            e.preventDefault()
            
            //IE edge支援toggle，低版IE沒有，edge外的IE都添加--openIE，而不是--open
            if($headerNav.classList.toggle) {
                if(isTridentEdge) {
                    $headerNav.classList.toggle('header__nav--openIE')
                    $header.classList.toggle('u-color-white')
                    $header.classList.toggle('u-color-black')
                }else {
                    $headerNav.classList.toggle('header__nav--open')
                    $header.classList.toggle('u-color-white')
                    $header.classList.toggle('u-color-black')
                }
            }else {
                let isOpen = $headerNav.className.includes('header__nav--openIE')
                $menuItems.forEach(item => {
                    item.style.setProperty('transition','all .3s cubic-bezier(.07,.17,.87,.31);')
                })
                if(isOpen) {
                    $headerNav.classList.remove('header__nav--openIE')
                    $header.classList.remove('u-color-white')
                    $header.classList.remove('u-color-black')
                }else {
                    $headerNav.classList.add('header__nav--openIE')
                    $header.classList.add('u-color-white')
                    $header.classList.add('u-color-black')
                }
            }
        }else {
            console.log('click fail')
            console.log('target',target)
            console.log('isMenu',isMenu)
        }
    }
    
    function headerInit() {
        if(window.innerWidth < phoneWidth){
            console.log('add eventlistener')
            $header.addEventListener('click',menuHandler)
            $header.appendChild($spanMenu)
            $header.classList.add('u-color-white')
        }else {
            console.log('none')
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
                console.log('resize')
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
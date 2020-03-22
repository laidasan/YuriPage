;(() => {
    // require('@babel/polyfill')
    const $scrollContainer = document.querySelector('.scrollContainer');
    let $mainPages = document.querySelectorAll('.main-page');
    $mainPages = $mainPages.forEach ? $mainPages : Array.from($mainPages);
    const $pageDirect = document.querySelector('.page-direct');
    let $pageDirectOptions = $pageDirect.querySelectorAll('a');
    $pageDirectOptions = $pageDirectOptions.forEach ? $pageDirectOptions : Array.from($pageDirectOptions);
    const $bigMobileWidth = 990
    console.log($pageDirectOptions)
    let lastpage = 0;
    let thispage = 0;
    let isScrolling = false;
    let isMouseWheelListener = false;
    let isMobile = false

    

    function scrollPage(e) {
        console.log(e.wheelDelta);   
        let viewup = e.wheelDelta > 0 ? true : false;
        let notebooStop = e.wheelDelta === 0 ? true : false;
        function directOptionStyle(pagenow,isup) {
            isup ? $pageDirectOptions[pagenow + 1].classList.remove('choose') : $pageDirectOptions[pagenow - 1].classList.remove('choose')
            $pageDirectOptions[pagenow].classList.add('choose')
        }



        if(viewup && !isScrolling && thispage !== 0 && !notebooStop) {
            console.log('viewup');
            isScrolling = true;
            thispage--;
            $mainPages.forEach((page) => {
                page.style.setProperty('transform',`translateY(-${100 * thispage}%)`);
            })
            directOptionStyle(thispage,viewup);
        }else if(!viewup && !isScrolling && thispage !== $mainPages.length - 1 && !notebooStop) {
            console.log('viewdown');
            isScrolling = true;
            thispage++;

            $mainPages.forEach((page) => {
                page.style.setProperty('transform',`translateY(-${100 * thispage}%)`)
            })
            // $mainPages.forEach ? $mainPages.forEach((page) => {
            //     page.style.setProperty('transform',`translateY(-${100 * thispage}%)`)
            // }) : Array.from($mainPages).forEach(page => {
            //     page.style.setProperty('transform',`translateY(-${100 * thispage}%)`)
            // })

            directOptionStyle(thispage,viewup);
        }
    }
    function pageDirectDesk(e) {
        let target = e.target;
        //ie 有matches，但方法名稱是msMatchesSelector
        let ismatch = target.matches ? target.matches('a') : target.msMatchesSelector('a')
        if(ismatch) {
            e.preventDefault();
            let nextpage = target.dataset['page'];
            console.log(nextpage)
            if(thispage === nextpage) {
                return;
            }
            if(!isScrolling) {
                isScrolling = true;
                $pageDirectOptions[thispage].classList.remove('choose');
                $pageDirectOptions[nextpage].classList.add('choose');
                $mainPages.forEach((page) => {
                    console.log('scroll');
                    page.style.setProperty('transform',`translateY(-${100 * parseInt(nextpage)}%)`)
                //     page.style.setProperty('transform',`translateY(-${100 * nextpage})%`);
                })
                thispage = nextpage;
            }

        }
    }

    
    function throttle(fn,cycle) {
        let timeout = null
        let looptime = cycle || 60
        return function() {
            let context = this
            let args = arguments
            if(!timeout) {
                timeout = setTimeout(() => {
                    fn.call(context,args)
                    timeout = null
                },looptime)
            }
        }
    }
    
    function pageDiretInit() {
        if(window.innerWidth >= $bigMobileWidth && !isMobile) {
            window.addEventListener('mousewheel',scrollPage)
            isMouseWheelListener = true
        }
    }


    function pageDirectControl(e) {
        console.log('resize')
        window.innerWidth < $bigMobileWidth && isMouseWheelListener ? 
            (() => {
                console.log('remove mousewheel listener')
                window.removeEventListener('mousewheel',scrollPage)
                isMouseWheelListener = false
                $mainPages.forEach(page => {
                    page.style.setProperty('transform','translateY(0)')
                })
            })() : ''
        window.innerWidth >= $bigMobileWidth && !isMouseWheelListener && !isMobile ? 
        (() => {
            console.log('add mousewheel listener')
            window.addEventListener('mousewheel',scrollPage)
            isMouseWheelListener = true
            $mainPages.forEach(page => {
                page.style.setProperty('transform','translateY(0)')
            })
            $pageDirectOptions.forEach(option => option.classList.remove('choose'))
            $pageDirectOptions[0].classList.add('choose')
            thispage = 0
            lastpage = 0
        })() : ''
    }



    if(window.onload) {
        console.log('window onload')
        const old = window.onload;
        window.onload = () => {
            console.log(old.then(result => {
                return new Promise((resolve,rejcet) => {
                    if(universal.isMobile(navigator.userAgent)) {
                        console.log('isMobile');
                        
                        // let pagesOffsetTop = [];
                        // $mainPages.forEach((page,index) => {
                        //     pagesOffsetTop.push(page.offsetTop);
                        // })
                        // window.addEventListener('touchmove',(e) => {
                        //     console.log($mainPages[1].offsetTop);
                        // })
                        $pageDirect.style.setProperty('display','none');
                        document.querySelector('.main').style.setProperty('overflow','auto');
                        isMouseWheelListener = false
                        isMobile = true

                    }else {
                        console.log(result)
                        $pageDirect.addEventListener('click',pageDirectDesk)

                        pageDiretInit();
                        // window.addEventListener('mousewheel',scrollPage);
                        
                        //new feature
                        window.addEventListener('resize',throttle(pageDirectControl))

                        $mainPages[0].addEventListener('transitionend',(e) => {
                            console.log('change isScrolling')
                            isScrolling = false;
                        })
                    }
                    resolve(result);
                })
            }))
        }
    }else {
        console.log('init onload')
        window.onload = universal['indexLading']().then(result => {
            return new Promise((resolve,reject) => {
                pageDiretInit();
                // window.addEventListener('mousewheel',scrollPage);
                        
                //new feature
                window.addEventListener('resize',throttle(pageDirectControl))

                $mainPages[0].addEventListener('transitionend',(e) => {
                    console.log('change isScrolling')
                    isScrolling = false;
                })
                resolve('loading sucess')
            })
        })
    }

})()
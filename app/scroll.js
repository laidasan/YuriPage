;(() => {
    const $scrollContainer = document.querySelector('.scrollContainer');
    const $mainPages = document.querySelectorAll('.main-page');
    const $pageDirect = document.querySelector('.page-direct');
    const $pageDirectOptions = $pageDirect.querySelectorAll('a');
    console.log($pageDirectOptions)
    let lastpage = 0;
    let thispage = 0;
    let isScrolling = false;
    

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
                page.style.setProperty('transform',`translateY(-${100 * thispage}%)`);
            })
            directOptionStyle(thispage,viewup);
        }
    }
    function pageDirectDesk(e) {
        let target = e.target;
        if(target.matches('a')) {
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
    function pageDirectMobile() {

    }




    if(window.onload) {
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

                    }else {
                        console.log(result)
                        $pageDirect.addEventListener('click',pageDirectDesk)
                        window.addEventListener('mousewheel',scrollPage);
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
        window.onload = universal['indexLading']().then(result => {
            return new Promise((resolve,reject) => {
                window.addEventListener('mousewheel',scrollPage);
                $mainPages[0].addEventListener('transitionend',(e) => {
                    console.log('change isScrolling')
                    isScrolling = false;
                })
            })
        })
    }

})()
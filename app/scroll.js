;(() => {
    const $scrollContainer = document.querySelector('.scrollContainer');
    const $mainPages = document.querySelectorAll('.main-page');
    const $pageDirect = document.querySelector('.page-direct');
    let lastpage = 0;
    let thispage = 0;
    let isScrolling = false;
    

    function scrollPage(e) {
        console.log(e.wheelDelta);   
        let viewup = e.wheelDelta > 0 ? true : false;
        let notebooStop = e.wheelDelta === 0 ? true : false;
        if(viewup && !isScrolling && thispage !== 0 && !notebooStop) {
            console.log('viewup');
            isScrolling = true;
            thispage--;
            $mainPages.forEach((page) => {
                page.style.setProperty('transform',`translateY(-${100 * thispage}%)`);
            })
        }else if(!viewup && !isScrolling && thispage !== $mainPages.length - 1 && !notebooStop) {
            console.log('viewdown');
            isScrolling = true;
            thispage++;
            $mainPages.forEach((page) => {
                page.style.setProperty('transform',`translateY(-${100 * thispage}%)`);
            })
        }
    }


    if(window.onload) {
        const old = window.onload;
        window.onload = () => {
            console.log(old.then(result => {
                return new Promise((resolve,rejcet) => {
                    window.addEventListener('mousewheel',scrollPage);
                    $mainPages[0].addEventListener('transitionend',(e) => {
                        console.log('change isScrolling')
                        isScrolling = false;
                    })
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
;(() => {
    // https://picsum.photos/600/600/?random=11
    const $imgshow_imgs = document.querySelectorAll('.imgshow__img')
    const $imgshow_imgBox = document.querySelectorAll('.imgshow__img-box')
    const $imgwrap = document.querySelector('.imgshow__img-wrap')
    const $imgshow_direct = document.querySelector('.imgshow__list')
    const $imgshow_directOption = $imgshow_direct.querySelectorAll('.imgshow__list__button')
    const $bodyContainer = document.querySelector('.body-container')

    // move img position method:
    // 1. move $imgwrap.scrollLeft
    // 2. move $imgshow_imgBox translateX

    
    //will use element property
    //offsetWidth
    //offsetLeft
    //scrollLeft



    //set img property src after image load
    $imgshow_imgs.forEach((img,index) => {
        let image = new Image()
        image.onload = () => {
            $imgshow_imgs[index].src = `https://picsum.photos/600/600/?random=${11+index}`
            imgScroll(0)
        }
        image.src = `https://picsum.photos/600/600/?random=${11+index}`
    })

    //scroll method
    function imgScroll(index) {
        let boxLeft = $imgshow_imgBox[index].offsetLeft - $bodyContainer.offsetLeft
        $imgwrap.scrollLeft = boxLeft - ($imgwrap.offsetWidth - $imgshow_imgBox[index].offsetWidth) / 2
        $imgshow_directOption.forEach((item) => {
            item.classList.remove('choose')
        })
        $imgshow_directOption[index].classList.add('choose')
    }


    function scrollHandler(e) {
        let target = e.target
        if(target.matches('.imgshow__list__button') || target.matches('.imgshow__img')) {
            let index = parseInt(target.dataset['index'])
            imgScroll(index)
        }else {
            return false
        }
    }

    $imgshow_direct.addEventListener('click',scrollHandler)
    $imgwrap.addEventListener('click',scrollHandler)



})()


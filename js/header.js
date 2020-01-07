(function() {
    const header = document.querySelector('.header');
    const body = document.querySelector('body');
    let headerBottom = header.offsetTop + header.clientHeight;
    function handleHeader(e) {
        let windowTop = window.scrollY;
        let windowBottom = window.scrollY + window.innerHeight;
        console.log(header)
        console.log(windowTop)
        console.log(document.documentElement)
        if(headerBottom < windowTop && windowTop !== 0) {
            header.style.setProperty('position','fixed')
            header.style.setProperty('top','0')
            header.style.setProperty('left','0')
            header.style.setProperty('right','0')
            body.style.setProperty('padding-top',`${headerBottom}px`);
        }else {
            header.style.setProperty('position','initial')
            body.style.setProperty('padding-top','0');
        }
    }
    window.addEventListener('scroll',handleHeader)
}())
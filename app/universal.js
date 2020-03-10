((obj) => {
    console.log(obj);
    this[obj.name] = obj;
    console.log(universal)
})({
    name: 'universal',
    onload: false,
    isMobile: (userAgent) => {
        const mobiles = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
        return mobiles.some(mobile => userAgent.match(mobile))
    }
})






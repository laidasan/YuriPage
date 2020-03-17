;((obj) => {
    // this[obj.name] = obj;
    window[obj.name] = obj
})({
    name: 'universal',
    onload: false,
    isMobile: function (userAgent) {
        const mobiles = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
        return mobiles.some(mobile => {return userAgent.match(mobile)})
    }
})






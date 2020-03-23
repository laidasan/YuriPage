;((obj) => {
    // this[obj.name] = obj;
    window[obj.name] = obj
})({
    name: 'universal',
    onload: false,
    // resizeHandlers = {},
    // onLoadTesk = {},
    isMobile: function (userAgent) {
        const mobiles = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
        return mobiles.some(mobile => {return userAgent.match(mobile)})
    },
    throttle: (fn,cycle) => {
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
})






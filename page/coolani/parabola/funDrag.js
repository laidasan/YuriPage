function funDrag(element) {
    let params = {
        left: 0,
        top: 0,
        currentX: 0,
        currentY: 0,
        moveFlag :false
    }
    params.left = element.offsetLeft
    params.top = element.offsetTop

    
    element.addEventListener('mousedown',e => {
        params.moveFlag = true
        params.left = e.target.offsetLeft
        params.top  = e.target.offsetTop
        params.currentX = e.clientX
        params.currentY = e.clientY
    })

    element.addEventListener('mouseup',e => {
        params.moveFlag = false
        params.left = e.target.offsetLeft
        params.top = e.target.offsetTop
    })

    element.addEventListener('mousemove',e => {
        if(!params.moveFlag) return

        let nowX = e.clientX , nowY = e.clientY
        let disX = nowX  - params.currentX , disY = nowY - params.currentY
        e.target.style.setProperty('left',`${params.left + disX}px`)
        e.target.style.setProperty('top',`${params.top + disY}px`)
    })

}
;(() => {
    const $input = document.querySelector('input[type="number"]')
    const $imgs = document.querySelectorAll('.img__Number')

    console.log($input,$imgs)

    function imgNum(e) {
        // let target = e.target
        let value = parseInt(e.target.value)
        if(value < 100) {
            value >= 10 ? value = `0${value}` : value = `00${value}`
        }
        
        let nmstr = value.split('')
        console.log(nmstr)
        $imgs.forEach( (img,index) => {
            img.className = 'img__Number'
            img.classList.add(`num${nmstr[index]}`)
        })

    }

    window.onload = function() {
        $input.addEventListener('change',e => imgNum(e))
    }
})()
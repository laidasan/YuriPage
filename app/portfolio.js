(() => {
    let $portfolios = document.querySelectorAll(".sample__wrap")
    $portfolios =  $portfolios.forEach ? $portfolios : Array.from($portfolios)


    $portfolios.forEach(portfolio => {
        portfolio.addEventListener('click',e => {
            let href = portfolio.querySelector('.sample__readmore')
            href.click()
        })
    })
})()
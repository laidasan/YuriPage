(function(){
    let ipsum_wrap = document.querySelectorAll('div.ipsum-wrap');
    let num = (ipsum_wrap.length % 2 == 0) ? 2 : 1;
    for(let i = 0;i < ipsum_wrap.length - num;i++) {
        ipsum_wrap[i].classList.add('ipsum__border-bottom')
    }
})();

function run() {
    console.log(x);
}
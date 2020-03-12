(function () {

    const logo = document.querySelector('.header__logo');
    function sayHi() {
        console.log('hi');

        // setTimeout(sayHi,1000);
        requestAnimationFrame(sayHi);
    }

    // requestAnimationFrame(sayHi);
    // setTimeout(sayHi,1000)

    let tick = false;
    let timer = null;
    function sayHiWindow() {
        console.log('Hi Windows');
        let args = arguments;
        let context = this;
        console.log(context);
        console.log(args);
        tick = false;
    }
    function resetTick() {
        
        //每一個cycle觸發一次，循環觸發(這裡舉例每250毫秒觸發一次)  => 節流throttle 
        // if(!tick){requestAnimationFrame(sayHiWindow)};
        if (!tick) setTimeout(sayHiWindow, 250);
        tick = true;


        //像是電器的開關一樣，收集訊號為一個，結束後才觸發 => 防抖Debounce
        // if(timer) {clearTimeout(timer)};
        // timer = setTimeout(sayHiWindow,1000);
    }
    function onScroll() {
        resetTick();
    }
    // window.addEventListener('scroll', onScroll);
   

    function denounce(){
        let timer;
    }


    //因為再function內再建立function時，裡面的function的this不等於外層function的this(這裡是event.currentTarget)，照規則this的話
    //．是否為當作建構式來new出一個物件
    //．是否為隱式指定
    //  例如:
    //  let obj = {
    //      name: 'Joe',
    //      fun: function(){this.name}
    //  }
    //  obj.fun();
    //  這時fun的this就是指向obj
    //．是否有直接指定this，比如說call()、apply()，或是bind();
    //  以上都不是的話，this就會指向全域物件(再Browser中是window)(嚴格模式下會丟出錯誤)
    //  舊的解決辦法就是，將this給存儲起來，就可以延續使用原本的this了
    //  ES6新的function使用方式 () => 則是this會綁定最初定義的this(最一開始建立this所指的對象)，比如說我們用call(obj)來呼叫函式，那麼this就會一直綁者obj
    // function logoClick(e) {
    //     var that = this;
    //     setTimeout(function () {
    //         console.log(that);
    //         console.log(this);
    //     }, 1000)
    // }
    // logo.addEventListener('click',logoClick)


})();
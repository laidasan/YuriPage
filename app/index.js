;(() => {
    // require('@babel/polyfill')
    const $welcomeStrs = ['Hi,I Am Yuri','Welcome To My Home',`Today is ${getToday(new Date().getDay())}`]
    const $bannerTitle = document.querySelector('.banner__title');
    const $bannerTitleStr = $bannerTitle.querySelector('span');
    const $bannerTitleCursor = $bannerTitle.querySelector('.banner__titleCursor');
    const $bannerTimeline = document.querySelector('.banner__timeline');
    const $imgSrcs = ['./img/indexpage/me.jpg']
    const $imgElements = document.querySelectorAll('img')
    console.log($imgElements)
    let $timers = [];
    
    let now = 0; let running = true;

    function createInterval(callback,looptime) {
        if(typeof callback === 'function') {
            // console.log('create');
            $timers.push(setInterval(() => {
                callback();
            },looptime))
        }else {
            return false;
        }
    }
    function getToday(num) {
        let today = '';
        switch (num) {
            case 0:
                today = 'Sunday';
                break;
            case 1:
                today = 'Monday';
                break;
            case 2:
                today = 'TuesDay';
                break;
            case 3:
                today = 'Wednesday';
                break;
            case 4:
                today = 'ThursDay';
                break;
            case 5:
                today = 'Friday';
                break;
            case 6:
                today = 'SaturDay';
                break;
        }
        return today;
    }

    function bannerTitleCursorAni() {
        $bannerTitleCursor.style.opacity === '0' ? $bannerTitleCursor.style.opacity = 1 : $bannerTitleCursor.style.opacity = 0;
    }

    function bannerTimeline() {
        let now = new Date();
        // $bannerTimeline.textContent = now.toUTCString().substring(0,now.toUTCString().length - 3);
        $bannerTimeline.textContent = now.toString().substring(0,now.toString().length - 17);
    }

    bannerTimeline();

    //titel write animation
    function bannerTitleAni() {
        if($bannerTitleStr.textContent !== $welcomeStrs[now] && running) {
            let str = $bannerTitleStr.textContent;
            let willAdd = $welcomeStrs[now].substring(0,str.length + 1);
            $bannerTitleStr.textContent = willAdd;

            if($bannerTitleStr.textContent === $welcomeStrs[now]){
                running = false;
                clearInterval($timers[2]);
                $timers.pop();
                setTimeout(() => {
                    // console.log('start');
                    // console.log($bannerTitleStr.textContent)
                    $bannerTitleStr.textContent = $welcomeStrs[now].substring(0,$bannerTitleStr.textContent.length - 1);
                    createInterval(bannerTitleAni,150);
                },3000)
             }
        }else {
            if($bannerTitleStr.textContent !== '') {
                let str = $bannerTitleStr.textContent;
                let willAdd = $welcomeStrs[now].substring(0,str.length - 1);
                $bannerTitleStr.textContent = willAdd;  
            }else {
                // console.log('change str');
                    running = true;
                    now = now + 1 > $welcomeStrs.length - 1 ? 0 : now + 1;
            }
        }
    }

    function loadingImage() {
        let img = new Image()
        img.onload = () => {
            img.alt = $imgElements[0].alt
            $imgElements[0].parentElement.replaceChild(img,$imgElements[0])
        }
        img.src = $imgSrcs[0]
    }
    loadingImage()

    //all of banner string animations
    function bannerStrAni() {
        createInterval(bannerTitleCursorAni,750);
        createInterval(bannerTimeline,1000);
        createInterval(bannerTitleAni,150);  // always finall
    }


    function loading() {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                document.querySelector('.loading').style.setProperty('display','none');
                resolve('loading sucess');
            },1500)
        })
    }

    universal['indexLoading'] = loading;

    // loading().then(result => {
    //     console.log(result);
    //     window.onload = () => {
    //         console.log('cool')
    //     }
    // })

    window.onload = loading().then(result => {
        return new Promise((resolve,reject) => {
            console.log(result);
            document.querySelector('.loading').style.setProperty('display','none');
            universal.onload = true;
            document.querySelector('main').classList.remove('u-display-none');
            bannerTimeline();
            bannerStrAni();
            resolve(result);
        })
    },err => {
        console.log(err);
    })
    
    // window.onload = () => {
    //     loading().then(onload => {
    //         return new Promise((resolve,reject) => {
    //             console.log(onload);
    //             document.querySelector('main').classList.remove('u-display-none');
    //             bannerTimeline();
    //             bannerStrAni();
    //             resolve('index prepared');
    //         })
    //     },err => {
    //         console.log(err);
    //     })


        // setTimeout(() => {
        //     document.querySelector('.loading').style.setProperty('display','none');
        //     universal.onload = true;
        //     document.querySelector('main').classList.remove('u-display-none');
        //     bannerTimeline();
        //     bannerStrAni();
        // },1500);

    // }
})()
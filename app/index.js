;(() => {
    const $welcomeStrs = ['Hi,I Am Yuri','Welcome To My Home',`Today is ${getToday(new Date().getDay())}`]
    const $bannerTitle = document.querySelector('.banner__title');
    const $bannerTitleStr = $bannerTitle.querySelector('span');
    const $bannerTitleCursor = $bannerTitle.querySelector('.banner__titleCursor');
    let $timers = [];
    let now = 0; let running = true;

    console.log(new Date().getDay());
    function createInterval(callback,looptime) {
        if(typeof callback === 'function') {
            console.log('create');
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

    function bannerTitleAni() {
        if($bannerTitleStr.textContent !== $welcomeStrs[now] && running) {
            let str = $bannerTitleStr.textContent;
            let willAdd = $welcomeStrs[now].substring(0,str.length + 1);
            $bannerTitleStr.textContent = willAdd;

            if($bannerTitleStr.textContent === $welcomeStrs[now]){
                running = false;
                clearInterval($timers[1]);
                $timers.pop();
                setTimeout(() => {
                    console.log('start');
                    console.log($bannerTitleStr.textContent)
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
                console.log('change str');
                    running = true;
                    now = now + 1 > $welcomeStrs.length - 1 ? 0 : now + 1;
            }
        }
    }
    function bannerStrAni() {
        createInterval(bannerTitleCursorAni,750);
        createInterval(bannerTitleAni,150);
    }



    window.onload = () => {
        bannerStrAni();
    }
})()
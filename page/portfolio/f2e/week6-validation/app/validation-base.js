(() => {
    const status = {};
    const $valid = document.querySelectorAll('[data-valid]');
    const $submit = document.querySelector('[type="submit"]');
    const form = document.querySelector('.form');
    $valid.forEach((ele) => {
        ele.addEventListener('input',(e) => {
            console.log('input')
            let checkname = `check${ele.name}`;             //組合check +  element name屬性的值
            if(checkname === 'checkPassword' || checkname === 'checkComfirmPassword') {
                let $passwrodContent = document.querySelector('input[name = Password]').value
                let $ComfirmPasswordContent = document.querySelector('input[name = ComfirmPassword]').value

                let PasswordResult = universal['checkPassword']($passwrodContent)
                let ComfirmPasswordResult = universal['checkComfirmPassword']($ComfirmPasswordContent)
                status['checkPassword'] = PasswordResult
                status['checkComfirmPassword'] = ComfirmPasswordResult
            }
            let result = universal[checkname](ele.value);   //把組合出來的checkname，用來呼叫對應的universal物件中的function(檢查格式正不正確)
            result ? ele.classList.remove('warn') : ele.classList.add('warn'); //符合格式就把remove class warn 反之 add class warn
            status[checkname] = result;                     //將結果存在status物件
            // let ary = [];                                   //取出所有的結果
            // for(let pro in status) {
            //     ary.push(status[pro]);
            // }

            // //如果取出的結果跟需要檢查的input數量一樣，而且都是true的話，移除submit按鈕的class warn 反之 add class warn
            // (ary.length === $valid.length && ary.every(val => val) ? $submit.classList.remove('warn') : $submit.classList.add('warn')); 
            checkSubmit(status) ? $submit.classList.remove('warn') : $submit.classList.add('warn');
        })
    })

    form.addEventListener('submit',(e) => {
        e.preventDefault();
        // return checkSubmit(status) ?  form.submit() : false; 
        

        //use server
        // return checkSubmit(status) && ($submit.dataset['step'] !== 'upload') ?  window.location.href = `http://127.0.0.1:5500/page/${$submit.dataset['next']}` : form.submit(); 

        //show only
        return checkSubmit(status) ? window.location.href = `../page/${$submit.dataset['next']}` : ''; 

    })

    function checkSubmit(status) {
        let ary = [];                    
        for(let pro in status) {
            ary.push(status[pro]);
        }
        return (ary.length === $valid.length && ary.every(val => val));
    }


})();
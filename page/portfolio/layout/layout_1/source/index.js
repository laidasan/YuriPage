; (function () {
    const whoImgBox = document.querySelectorAll('.who__img-box');
    const whoIntro = document.querySelector('.who__intro')
    const whoIntroTitle = whoIntro.querySelector('h4')
    const whoIntroArticle = whoIntro.querySelector('p')
    const bossVideoCancelBtn = document.querySelector('.boss-hiddenVideo__cancel')
    const bossVideo = document.querySelector('.boss-hiddenVideo')
    const bossVideoContain = document.querySelector('.boss-videoContain')
    const bossVideoIframe = bossVideo.querySelector('iframe');
    const whoIntorContent = {
        0: {
            title: '台灣每年丟棄食物的總儲量為180頓，這些被浪費的食物總量，原本可以是230,000名學童20年的營養午餐。' ,
            description: '這些被浪費的食物，不僅是個人資源浪費，也形成許多環境、經濟、 飢荒分配不均的問題，在無形中影響了我們的生活。 南機場的「分享冰箱」，讓吃不完的食物送到需要的人手中， 從珍惜食物開始，邀您加入共享行動，讓下一代從我們行為中看見榜樣， 看見值得學習、尊敬的榜樣'
        },
        1: {
            title: '不分身分別，需要的人都可以拿！食享冰箱是一個分享，我們把好的東西分享給人家，我們不是救濟，透過分享發現更多真正需要幫助的人。',
            description:'食享冰箱處理食物的方式、過程，為了確保共享冰箱中的每一份食物，都能保持原有的新鮮美味，每份食物最多只能在冰箱中放置36小時。唯有維護食物的品質讓企業安心、並解決民眾對於吃的疑慮，才能真正創造民眾對食物的需求，建立永續的供需平衡。'
        },
        2: {
            title: '方荷生，身為忠勤里里長，替社區弱勢里民爭取福利積極推動社區服務，為獨居長者及弱勢族群創辦各項福利服務。',
            description: '民國102年開辦「南機場幸福食物銀行」，募集民間企業資源，提供弱勢住戶物資，並倡導居民志願服務換取點數實踐社區貨幣的概念。為永續經營各項福利服務，在民國103年發起成立「社團法人臺北市臻佶祥社會服務協會」，民國105年9月5日更結合家樂福基金會開辦「書屋花甲」續食餐廳及「食享冰箱」，除提供青少年技藝學習外，更提倡與實踐食物不浪費不放棄的理念。'
        }
    }


    const btnProcess = document.querySelectorAll('.btn--howProcess');
    const slidebtns = document.querySelectorAll('.result__detail__direct__btn');
    const slideNavCircles = document.querySelectorAll('.result__detail__nav__circle');
    const slidenav = document.querySelector('.result__detail__nav');
    const resultDatas = document.querySelectorAll('.result__data');
    const mapTowns = document.querySelectorAll('.result__map__town');
    const resultCreateContainer = document.querySelector('.result-container--create')
    const resultCreates = document.querySelectorAll('.result__create');
    const newsImgs = document.querySelectorAll('.news__img');
    const resultDataImgDivs = document.querySelectorAll('.result__data__img')



    let lastOpen = null;
    let thisOpen = null;
    let slidelast = 0;
    let slidethis = 0;
    resultDatas.forEach((data) => {
        data.style.setProperty('transform', 'translateX(0%)');
    })

    function openimg(e) {
        lastOpen = thisOpen;
        thisOpen = e.currentTarget;
        if (lastOpen && lastOpen !== thisOpen) { lastOpen.classList.remove('open') }
        e.currentTarget.classList.toggle('open');


        whoIntroArticle.style.opacity = 0
        whoIntroTitle.style.opacity = 0

    }


    function chooseProcess(e) {
        e.preventDefault();
        btnProcess.forEach((btn) => {
            btn.classList.remove('choose');
        })
        e.currentTarget.classList.add('choose');
    }

    function resultSlide() {
        resultDatas.forEach((data) => {
            data.style.setProperty('transform', `translateX(-${slidethis * 100}%)`);
        })
        slideNavCircles.forEach((circle) => {
            circle.classList.remove('choose');
        })
        slideNavCircles[slidethis].classList.add('choose');

        mapTowns[slidelast].classList.toggle('choose');
        mapTowns[slidethis].classList.toggle('choose');
    }

    function slideBtnHandler(e) {
        e.preventDefault();
        const target = e.currentTarget;
        if ((target.matches('.detail__prev') && slidethis === 0) || (target.matches('.detail__next') && slidethis === resultDatas.length - 1)) { return };

        if (target.matches('.detail__prev')) {
            slidelast = slidethis;
            slidethis -= 1;
            console.log('slide prev');
            resultSlide();
        } else {
            slidelast = slidethis;
            slidethis += 1;
            console.log('slide next');
            resultSlide();
        }
    }

    function throttle(fn,cycle) {
        let timer;
        return function() {
            let context = this;
            let args = arguments;
            if(!timer) {
                timer = setTimeout(() => {
                    fn.apply(context,args);
                    timer = null;
                },cycle)
            }
        }
    }

    function resultCreateShow() {
        const windowBottom = window.scrollY + window.innerHeight;
        const createContainerTop = resultCreateContainer.offsetTop;
        if (windowBottom > createContainerTop && !resultCreates[0].matches('.show')) {
            console.log('show resultCreate');
            resultCreates.forEach((item) => {
                item.classList.add('show');
            })
        }
    }
    
    function resultCreateHandler(e,index,item) {
        let speed = 990;
        let timeouts;
        if(index === 0 && !timeouts) {
            return function () {
                setCreateTimeout();
            }(e,index,item);
        }else if (index === 1 && !timeouts) {
            return function () {
                setCreateTimeout();
            }(e,index,item);
        }
        
        function setCreateTimeout() {
            let resultCreateData = item.querySelector('.result__create__data'); 
            let content = parseInt(resultCreateData.textContent);
            let stop,step,result;
            switch (index) {
                case 0 :
                    stop = 8;
                    step = 1;
                    result = 8;
                break;
                case 1 :
                    stop = 38326;
                    step = 48;
                    result = 38326;
                break;
            }
            timeouts = setInterval(() => {
                content += step; 
                resultCreateData.textContent = content;
                if(content >= stop){
                    clearInterval(timeouts);
                    resultCreateData.textContent = result;
                }
            },1000 - speed * index);
        }
    }

    newsImgs.forEach((ele,index) => {
        ele.style.setProperty('background',`url('./img/news_${index + 1}.jpg') no-repeat center center / cover`)
    })

    whoImgBox.forEach((imgBox,index) => {
        imgBox.addEventListener('click', e => openimg(e,index));
        imgBox.addEventListener('transitionend',e => {
            whoIntroTitle.textContent = whoIntorContent[index].title
            whoIntroArticle.textContent = whoIntorContent[index].description
            whoIntroTitle.style.opacity = 1
            whoIntroArticle .style.opacity = 1
        })
    })
    btnProcess.forEach((btn) => {
        btn.addEventListener('click', chooseProcess);
    })
    slidebtns.forEach((btn) => {
        btn.addEventListener('click', slideBtnHandler);
    })
    slideNavCircles.forEach((circle, index) => {
        circle.addEventListener('click', function (e) {
            e.preventDefault();
            slidelast = slidethis;
            slidethis = index;
            resultSlide();
        })
        // handler = slideNavHandler(index);
        // circle.addEventListener('click',handler);
    })
    mapTowns.forEach((town,index) => {
        town.addEventListener('click',(e) => {
            slidelast = slidethis; 
            slidethis = index;
            resultSlide();
        })
    })


    window.addEventListener('scroll',throttle(resultCreateShow,500));
    resultCreates.forEach((item,index) => {
        item.addEventListener('transitionend',(e) => {
            resultCreateHandler(e,index,item);
        });
    })

    resultDataImgDivs.forEach((ele,index) => {
        ele.style.setProperty('background',`url("./img/town_${index}.jpg") no-repeat center center / cover`)
    })

    bossVideoCancelBtn.addEventListener('click',(e) => {
        bossVideo.style.setProperty('display','none')
        // bossVideoIframe.src = ''
        player.stopVideo()
    })
    bossVideoContain.addEventListener('click',(e) => {
        bossVideo.style.setProperty('display','block')
    })
    


})();
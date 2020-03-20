;((obj) => {
  let xhr = new XMLHttpRequest
  // const key = 'AIzaSyAGCKjsWJrF6dJAF6ZO2zC1-rFTyVGVpRw'
  // const playlistId = 'PLSzpJ8-nWWgEVJbTaaFDdZckOIP9K3PCe'   //LuLu
  const $playlistIDs = ['JmCEspVNo9E','J3ZA-zWXULg','EanoPOT6xBU','AR1nvf315yY','eMATXtRnKOM']
  const $iframes = document.querySelectorAll('iframe')
  const $howVideos = document.querySelectorAll('.how-video')
  const $howProcess = document.querySelector('.how__process')
  console.log($howProcess)
  // const $btnHowProcess = document.querySelectorAll(".btn--howProcess");
  // console.log($btnHowProcess)

  // UMrG2x-Lrd0  //里長
  let src = 'https://www.youtube.com/embed/'
  let videoQuery = '?&autoplay=1&controls=0&loop=1&mute=1&modestbranding=0&rel=0'
  // let videoIds = null;


  // xhr.open('Get', `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${playlistId}&key=${key}`)
  // xhr.open('Get', `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${$playlistIDs[0]}&key=${key}`)

  // function videoGet() {
  //   function sucess(data) {
  //     console.log('sucess')
  //     const responItems = JSON.parse(data).items
  //     videoIds = responItems.map((item => item.snippet.resourceId.videoId))
  //     // $iframes[0].setAttribute('src',`${src}${videoIds[0]}?&autoplay=1&controls=0&loop=1&playlist=${videoIds[0]}&mute=1&modestbranding=0&rel=0`)
  //     return videoIds;
  //   }
  //   return new Promise((resolve, reject) => {
  //     xhr.onload = () => {
  //       xhr.status >= 200 && xhr.status < 300 ? resolve(sucess(xhr.responseText)) : reject('videoGetFail')
  //     }
  //     xhr.send()
  //   })
  // }


  // window.onload = () => {
    // videoGet().then(result => {
    //   console.log('get video sucess', result)
    //   window ? window[obj.name] = obj : {};
    //   window[obj.name].videoIds = videoIds.map(id => id)
  
    //   // let $APIscript = document.createElement('script')
    //   // $APIscript.src = './source/youtubeapi.js'
    //   // document.body.append($APIscript)
    // }, err => {
    //   console.log(err)
    // })
  // }

  let lastclick = 0
  let thisclick = 0
  function processNext(e) {
    const target = e.target
    
    let isbtn = target.matches ? target.matches('.btn--howProcess') : target.className.includes('btn--howProcess')
    if(isbtn) {
      console.log('btn click')
      lastclick = thisclick;
      thisclick = e.target.dataset['index']
      $howVideos.forEach(video => {
        video.style.setProperty('transform',`translateX(-${thisclick * 100}%)`)
      })

      if(lastclick !== thisclick) {
        // console.log(index > lastclick ? 'next' : 'prev')
        // console.log('click')
        $iframes[lastclick].removeAttribute('src')
        $iframes[thisclick].src = `${src}${$playlistIDs[thisclick]}${videoQuery}&playlist=${$playlistIDs[thisclick]}`
      }
    }
  }


  window.onload = () => {
    $iframes[0].src = `${src}${$playlistIDs[0]}${videoQuery}&playlist=${$playlistIDs[0]}`
    $howProcess.addEventListener('click',processNext)


    let $APIscript = document.createElement('script')
    $APIscript.src = './source/youtubeapi.js'
    document.body.append($APIscript)
  }

})(
  {
    name: 'utility',
    videoIds:[],
  }
)


// 2. This code loads the IFrame Player API code asynchronously.
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
// let $bossVideoContainer = document.querySelector('.boss-hiddenVideo')
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// https://www.youtube.com/iframe_api

// const videoIds = this['utility'].videoIds
// console.log(this['utility'])
// let $players = Array.from(document.querySelectorAll('.player'))
// console.log($players)
// let $APIplayers = [];

let player;
function onYouTubeIframeAPIReady() {
    console.log('onYoutubeIframeAPIReady is ready')
    // $players.forEach((player,index) => {
    //     $APIplayers.push(new YT.Player(`${player.id}`),{
    //         height: 210,
    //         width: 450,
    //         vidoeId: videoIds[0],
    //         playerVars: {'autoplay': 1,'mute': 1,'controls': 0,'rel': 0,'loop': 1,'playlist': videoIds[0]},
    //         event: {
    //             'onReady': onPlayerReady,
    //             'onStateChange': onPlayerStateChange
    //         }
    //     })
    // })


    player = new YT.Player(`player`, {
        height: 315,
        width: 560,
        videoId: 'UMrG2x-Lrd0',
        // playerVars: {'autoplay': 1,'mute': 1,'controls': 0,'rel': 0,'loop': 1,'playlist': videoIds[0]},
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    })
}


function onPlayerReady(event) {
    console.log('video ready')
    let target = event.target;
    // target.playVideo();
}

function onPlayerStateChange(event) {
    console.log('video change')
}
function stopVideo() {
    player.stopVideo();
}

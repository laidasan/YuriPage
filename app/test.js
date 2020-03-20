;(() => {
    let xhr = new XMLHttpRequest
    const key = 'AIzaSyAGCKjsWJrF6dJAF6ZO2zC1-rFTyVGVpRw'
    const playlistId = 'PLSzpJ8-nWWgEVJbTaaFDdZckOIP9K3PCe'

    // https://www.googleapis.com/youtube/v3/videos
    // KHUuxA2ZBwc
    const videoID = 'KHUuxA2ZBwc'
    xhr.open('Get',`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${playlistId}&key=${key}`)
    // xhr.open('Get',`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoID}`)
    xhr.onload = () => {
        // if(xhr.status >= 200 && xhr.status < 300) {}

        function sucess(data) {
            console.log(JSON.parse(data))
            // console.log(JSON.parse(data).items[0].snippet)
            console.log('sucess')
        }

        xhr.status >= 200 && xhr.status < 300 ? sucess(xhr.responseText) : console.log('fail')
    }
    xhr.send();
})()
 const title = document.getElementById('title')
const progressBar = document.getElementById('progress')
const audio = document.getElementById('audio')
const timeStamp = document.getElementById('timespan')
const musicImage = document.getElementById('image')
const prev = document.getElementById('prev')
const playButton = document.getElementById('playButton')
const next = document.getElementById('next')

const songs = ['pronto','megatron','heart', ]
let songIndex = 2



function loadSong(song){
    title.innerText = song
    audio.src = `music/${song}.mp3`
    musicImage.src = `image/${song}.jpg`
}






prev.addEventListener('click', ()=>{

    songIndex -= 1
    if(songIndex < 0){
        songIndex = songs.length - 1 
     }
     loadSong(songs[songIndex])
     progressBar.value = 0

})

 next.addEventListener('click', ()=>{

    songIndex += 1
    if(songIndex > songs.length - 1){
        songIndex = 0     }
        loadSong(songs[songIndex])
        progressBar.value = 0

})


    playButton.addEventListener('click', () =>{
        if(playButton.textContent === "play"){
         console.log('button play clicked')
         audio.play()
        playButton.textContent = "pause"
        musicImage.style.animationPlayState = "running"
        }else if(playButton.textContent === "pause"){
            musicImage.style.animationPlayState = "paused"
            console.log('button pause clicked')
            audio.pause()
            playButton.textContent = "play"

        }

    })


    audio.addEventListener('timeupdate', () => {
        progressBar.value = (audio.currentTime / audio.duration) * 100

        let mins = Math.floor(audio.currentTime / 60);
        if(mins < audio.duration){
          mins = '0' + String(mins);
        }
      
        // Get Seconds
        let secs = Math.floor(audio.currentTime % 60);
        if(secs < audio.duration){
          secs = '0' + String(secs);
        }
      
        timeStamp.innerHTML = `${mins}:${secs}`;

    })
    progressBar.addEventListener('change', () => {
        audio.currentTime = (+progress.value * audio.duration) / 100

    })


    audio.addEventListener('ended', () =>{
        songIndex += 1
        if(songIndex > songs.length){
            songIndex = 0
        }
    })




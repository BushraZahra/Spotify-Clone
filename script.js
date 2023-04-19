console.log("Welcome to Spotify");
//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('musicone.mpeg');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');


let songs =[
    {songName: "La hasil-Sunny Khan Durrani", filePath: "musicone.mpeg", coverPath: ""},
    {songName: "GUL", filePath: "music2.mpeg", coverPath: ""}, 
    {songName: "TitleSong.mpeg", filePath: "", coverPath: ""},
    {songName: "", filePath: "", coverPath: ""},
    {songName: "", filePath: "", coverPath: ""},
    {songName: "", filePath: "", coverPath: ""}
]

//audioElement.play();
//Handle play /pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play(); 
        masterPlay.remove('bi bi-play-circle');
        masterPlay.add('bi bi-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause(); 
        masterPlay.remove('bi bi-pause-circle');
        masterPlay.add('bi bi-play-circle');
        gif.style.opacity = 0;

    }
})

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    //update seekbar

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
}) 
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songPlay')).forEach((element)=> {
        element.target.remove.svg('bi-pause-circle');
        element.target.add('bi-play-circle');

    })
   };


Array.from(document.getElementsByClassName('songPlay')).forEach((element)=> {
        element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.remove.svg('bi-play-circle');
        e.target.remove.svg('bi-pause-circle');
audioElement.src = `song/${songIndex+1}.mpeg`;
audioElement.currentTime = 0;
audioElement.play();
masterPlay.play();
masterPlay.remove('bi bi-play-circle');
masterPlay.add('bi bi-pause-circle');
    })
    
})
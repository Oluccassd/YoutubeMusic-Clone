const nomedamusica = document.getElementById('musicname')
const nomedoartista = document.getElementById('artistname')
const musica = document.getElementById('music')
const video = document.getElementById('video')
const playbutton = document.getElementById('play-music')
const previousbutton = document.getElementById('previous-music')
const nextbutton = document.getElementById('next-music')
const cover = document.getElementById('cover')
const progressodabarra = document.getElementById('progresso__da__barra')
const progress__bar = document.getElementById('progress__bar')
const botaodemusica = document.getElementById('Btn-Music')
const botaoReproduzirVideo = document.getElementById('botao-reproduzir-video');
const likes = document.getElementById('likeNumbers')
const like = document.getElementById('like')
const unlike = document.getElementById('deslike')

let musicatocando = false
let sooaudio = true
let index = 0 ;


const Musica1 = {
    nomemusica: 'Nome da musica',
    nomeartista: 'nome do artista',
    file: 'nome do arquivo ( tanto o mp3 quanto do mp4 precisam ser iguais ) ',
};
const Musica2 = {
    nomemusica: 'Nome da musica',
    nomeartista: 'nome do artista',
    file: 'nome do arquivo ( tanto o mp3 quanto do mp4 precisam ser iguais ) ',
};
const Musica3 = {
    nomemusica: 'Nome da musica',
    nomeartista: 'nome do artista',
    file: 'nome do arquivo ( tanto o mp3 quanto do mp4 precisam ser iguais ) ',
};
const playlist = [
    Musica1,
    Musica2,
    Musica3
];


function inicarmusicas() {
    nomedamusica.innerText = playlist[index].nomemusica;
    nomedoartista.innerText = playlist[index].nomeartista;
    cover.src = `./src/images/${playlist[index].file}.jfif`;
    musica.src = `./src/musicas/${playlist[index].file}.mp3`;
    video.src = `./src/videos/${playlist[index].file}.mp4`
}
function play(){
    playbutton.querySelector('.bi').classList.add('bi-pause-circle-fill')
    playbutton.querySelector('.bi').classList.remove('bi-play-circle-fill')
    musica.play();    
    musicatocando = true
}
function pause(){
    playbutton.querySelector('.bi').classList.add('bi-play-circle-fill')
    playbutton.querySelector('.bi').classList.remove('bi-pause-circle-fill')
    musica.pause();
    musicatocando = false
}
function PlayPause(){
    if (musicatocando === true) {
        pause();
    }
    else {
        play();
    }
}
function musicaanterior(){
    if(index === 0){
        index = playlist.length - 1;
    }
    else {
        index = index - 1;
    }
    inicarmusicas();
    play();
}
function proximamusica(){
    if(index === playlist.length - 1){
        index = 0;
    }
    else {
        index = index + 1;
    }
    inicarmusicas();
    play();
}
function atualizacaodaprogressodabarra(){
    const progresso = (musica.currentTime/musica.duration)*100 ;
    progressodabarra.style.setProperty('--progress', `${progresso}%`)
}
function pularpara(event) {
    const width = progress__bar.clientWidth;
    const progressoBarra = progress__bar.getBoundingClientRect().left;
    const posicaoDoClick = event.clientX - progressoBarra;
    const irPara = (posicaoDoClick / width) * musica.duration;
    musica.currentTime = irPara;
}

function hidevideo () {
    if(sooaudio === true) {
        video.style.setProperty('display', 'none')
    }
}
function hidecover() {
    if (sooaudio === false) {
        cover.style.setProperty('display', 'none')
    }
}
function showvideo() {
    sooaudio = false
    if(sooaudio === false) {
        video.style.setProperty('display', 'flex')
        hidecover();
        video.play();
    }
}
function showcover() {
    sooaudio = true 
    if(sooaudio === true) {
        cover.style.setProperty('display', 'flex')
        hidevideo();
    }
}

function syncvideoandaudio(){
    video.currentTime = musica.currentTime
}

let currentLikes = 0; // Inicializa o número de curtidas

function toggleLike() {
    // Verifica se o número de curtidas é par ou ímpar
    if (currentLikes % 2 === 0) {
        // Se for par, incrementa 1
        currentLikes += 1;
        like.querySelector('.bi').classList.remove('bi-hand-thumbs-up');
        like.querySelector('.bi').classList.add('bi-hand-thumbs-up-fill');
    } else {
        // Se for ímpar, decrementa 1
        currentLikes -= 1;
        like.querySelector('.bi').classList.remove('bi-hand-thumbs-up-fill');
        like.querySelector('.bi').classList.add('bi-hand-thumbs-up');
    }
    // Atualiza o texto exibido na página
    likes.innerText = currentLikes;
    let likestate = true
}

function toggledesLike (){


    if (currentLikes % 2 === 0) {
        currentLikes += 1;
        unlike.querySelector('.bi').classList.remove('bi-hand-thumbs-down');
        unlike.querySelector('.bi').classList.add('bi-hand-thumbs-down-fill');
    } else {
        currentLikes -= 1;
        unlike.querySelector('.bi').classList.remove('bi-hand-thumbs-down-fill');
        unlike.querySelector('.bi').classList.add('bi-hand-thumbs-down');
    }

    let likestate = false
}

function checklike (){
    if(likestate === true){
        like.querySelector('.bi').classList.add('bi-hand-thumbs-up-fill')
        unlike.querySelector('.bi').classList.remove('bi-hand-thumbs-down')
    } else {
        like.querySelector('.bi').classList.add('bi-hand-thumbs-down')
        unlike.querySelector('.bi').classList.remove('bi-hand-thumbs-up-fill')
    }
}

hidevideo();
inicarmusicas();


playbutton.addEventListener('click', PlayPause);
previousbutton.addEventListener('click', musicaanterior);
nextbutton.addEventListener('click', proximamusica);
musica.addEventListener('timeupdate', atualizacaodaprogressodabarra);
video.addEventListener('timeupdate', atualizacaodaprogressodabarra);
progress__bar.addEventListener('click', pularpara);
botaoReproduzirVideo.addEventListener('click', showvideo);
botaodemusica.addEventListener('click', showcover);
video.addEventListener('timeupdate', () => {
    syncvideoandaudio();
    atualizacaodaprogressodabarra();
});
like.addEventListener('click', toggleLike);
unlike.addEventListener('click', toggledesLike);


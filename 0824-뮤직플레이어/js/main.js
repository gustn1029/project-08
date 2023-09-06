const items = document.querySelectorAll('.cont');
const padding = 3;

const section = document.querySelector('.content-wrap');
const audio_list = ['Blizzards','Calm','Dusty_Road','Escape','Payday','Retreat','Seasonal','Vespers'];

for (let i = 0; i < items.length; i++) {
    
    items[i].style.transform = `rotate(${45 * i}deg) translateY(-100vh)`;
    items[i].children.item(0).children.item(0).style.background = `url(./img/member${i+1}.jpg) no-repeat center center/cover`;
    
    items[i].children.item(0).innerHTML += (`
    <audio src="./music/${audio_list[i]}.mp3"></audio>
    `);
    
    const audio = items[i].querySelector('audio');
    
    
    audio.load();
    audio.pause();
}

for (item of items) {
    const play = item.querySelector('.play');
    const pause = item.querySelector('.pause');
    const load = item.querySelector('.reset');
    const audio = item.querySelector('audio');
    const figure = item.querySelector('figure');

    play.addEventListener('click', ()=> {
        audio.play();
        figure.classList.add('on');
    });

    pause.addEventListener('click', ()=> {
        audio.play();
        figure.classList.remove('on');
    });

    load.addEventListener('click', ()=> {
        audio.load();
        audio.play();
        figure.classList.add('on');
    });
}

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let num = 0;
let oldItem = items[0];
let idx = 0;

function prev_func(){
    idx--;
    if(num === 0) {
        num = (items.length - 1);
    } else {
        num--;
    }
    
    change();
}

function next_func(){
    idx ++;
    if(num === (items.length - 1)) {
        num = 0;
    } else {
        num++;
    }
    
    change();
    
}

function change() {
    oldItem.querySelector('figure').classList.remove('on');
    oldItem.classList.remove('on');
    
    items[num].classList.add('on');

    oldItem = items[num];
    section.style.transform = `translate(-50%, -130%) rotate(${-45 * idx}deg)`
}


prev.addEventListener('click', prev_func);
next.addEventListener('click', next_func);
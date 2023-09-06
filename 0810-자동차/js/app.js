const container = document.getElementById('app');
const count = 7;

// template
function get_header(){
    const gnb_el = [];
    const txt_list = ['Silver White','Deep Yellow','Aqua Green','Sky Blue','Hot Pink', 'Red', 'Blue'];
    
    for (let i = 0; i < count; i++) {
        gnb_el.push(`<li><a href=#${i + 1}>${txt_list[i]}</a></li>`)
    };

    return `
        <header>
            <ul class="gnb">
                ${gnb_el.join('')}
            </ul>
        </header>
        `;
}

function get_cont_wrap(){
    const cont_list = [];

    for (let i = 0; i < count; i++) {
        cont_list.push(`box box${i+1}`);
    }
    
    const list = cont_list.map((data) => {
        return `<section class='${data}'></section>`;
    });

    return `<main class="slide_wrap">
                <div class="slide">
                    ${list.join('')}
                </div>
            </main>`;
}

const template = `
<h1 class='logo'><img src='./img/logo.png' /></h1>
${get_header()}
${get_cont_wrap()}
<figure class="circle">
    <img src='./img/circle1.png' />
</figure>
`;

container.innerHTML = template;

// style & event

// click-event
const menu_item = document.querySelectorAll('.gnb > li > a');
let oldItem = menu_item[0];
for (let i = 0; i < menu_item.length; i++) {
    menu_item[i].addEventListener('click', (e) =>{
        const val = e.target;
        
        oldItem.classList.remove('rotate');
        val.classList.add('rotate');
        
        oldItem = val;
    });
}

// hash-event
function move_slide() {

    const hash = location.hash;
    let idx = parseInt(hash.substring(1)) - 1;
    const slide_wrap = document.querySelector('.slide');
    const circle = document.querySelector('.circle');

    circle.style = `transform: translateY(-50%) translateX(50%) rotate(${60 * idx}deg);`

    slide_wrap.style.transform = `translateX(-${slide_wrap.clientWidth * idx}px)`;
    

}

// style
function cont_style() {
    const section = document.querySelectorAll('.box');
    const win_w = window.innerWidth;
    const win_h = document.documentElement.clientHeight;
    

    for (let i = 0; i <section.length; i++) {
        section[i].style = `background:url('./img/pic${i >= 5 ? i-1 : i+1}.jpg') center center / cover;  width: ${win_w}px; height: ${win_h}px`;

        menu_item[i].parentElement.style = `width: calc((100% / ${count}) - 1%)`;
    };
}

window.addEventListener('load', ()=> {
    cont_style();
    location.hash = '#box1';
    menu_item[0].classList.add('rotate');
});
window.addEventListener('resize', cont_style);

window.addEventListener('hashchange', move_slide);


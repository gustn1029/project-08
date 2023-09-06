$(document).ready(function(){

});

const gnb = document.querySelector('.gnb');
const s_nav = document.querySelector('.scrollNav');
const menu_item = s_nav.children;
const section = document.querySelector('section');
const box = document.querySelectorAll('.box');

function template() {
    
    const li_list = [];
    const scroll_list = [];
    const count = 5;
    const menu_txt = ['Home','Info','About','Community','Contact'];
    for (let i = 0; i < count; i++) {
        li_list.push(`
            <li><a href="#${i+1}">${menu_txt[i]}</a></li>
        `);
        scroll_list.push(`
        <li><span></span><em>Player${i+1}</em></li>
        `)
    }
    gnb.innerHTML = li_list.join('');
    s_nav.innerHTML = scroll_list.join('');

    s_nav.children.item(0).classList.add('on');


    
    console.log(box);
    const persent = 0;

    for (let i = 0; i < box.length; i++) {
        box[i].style.height = `${document.documentElement.clientHeight}px`;
        box[i].style.transform = `translate(-50%, -50%) translateZ(${-5000 * i}px)`;
        box[i].style.zIndex = 5 - i;
    }

    
}

template();

function translateZ() {
    let win_y = window.scrollY;
    let oldIdx = null;
    let oldbox = null;

    for (let i = 0; i < box.length; i++) {
        
        if(win_y <= box[i].clientHeight) {
            box[0].style.transform = `translate(-50%, -50%) translateZ(${win_y}px)`;
            box[0].classList.add('on');
        } else if((box[i].clientHeight * (i+1)) < win_y) {
            box[i].style.transform = `translate(-50%, -50%) translateZ(${(-5000 * i) + win_y}px)`;

        }

        if(oldIdx != null && oldIdx != menu_item[i < 4 ? i+1 : 4].classList.contains('on')) {
            oldIdx.classList.remove('on');
            oldbox.classList.remove('on');
            menu_item[i < 4 ? i+1 : 4].classList.remove('on');
            box[i < 4 ? i+1 : 4].classList.remove('on');
        }
        
        if(win_y >= 0 && win_y <= section.clientHeight) {
            menu_item[i].classList.remove('on');
            menu_item[0].classList.add('on');
            box[i].classList.remove('on');
            box[0].classList.add('on');
        }  else {
            menu_item[0].classList.remove('on');
            box[0].classList.remove('on');
            // menu_item[i].classList.remove('on');
            
            if(win_y >= i * 4600 && win_y <= (i+1) * 4600) {
                // menu_item[i].classList.remove('on');
                
                menu_item[i < 4 ? i+1 : 4].classList.add('on');
                box[i < 4 ? i+1 : 4].classList.add('on');
                
                console.log(box[i < 4 ? i+1 : 4].children.item(0));

                oldIdx = menu_item[i];
                oldbox = box[i];
                
                console.log(win_y);
            }
        } 
    }
}

window.addEventListener('scroll', translateZ);

for (let i = 0; i < menu_item.length; i++) {
    menu_item[i].addEventListener('click', (e) => {
        let y = window.scrollY;

        let val = e.target.parentElement
        const nodes = [...val.parentElement.children];

        const idx = nodes.indexOf(val);

        console.log(4600 * idx)
    });
}







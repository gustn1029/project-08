const items = document.querySelectorAll('article');
const aside = document.querySelector('.slide');

for(item of items) {
    item.children.item(0).addEventListener('mouseover', (e)=> {
        e.currentTarget.querySelector('video').play();
    });

    item.children.item(0).addEventListener('mouseleave', (e)=> {
        e.currentTarget.querySelector('video').pause();
    });

    item.children.item(0).addEventListener('click', (e)=> {
        
        const tit = e.currentTarget.querySelector('h3').textContent;
        const desc = e.currentTarget.querySelector('p').textContent;
        const src = e.currentTarget.querySelector('video').src;
        
        aside.classList.add('on');

        const aside_title = aside.querySelector('h3');
        const aside_desc = aside.querySelector('p');
        const aside_video = aside.querySelector('video');

        const close = aside.querySelector('.close');
        
        aside_title.textContent = tit;
        aside_desc.textContent = desc;
        aside_video.src = src;
        aside_video.play();

        close.addEventListener('click', ()=> {
            aside.classList.remove('on');
        })
    });
}

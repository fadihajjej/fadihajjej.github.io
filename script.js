//FADE
const fadeEL = document.querySelector('.fade');
let scrolled = false;
window.addEventListener('scroll' , () =>{
    if(!scrolled){
        fadeEL.style.opacity = '0.5';
        scrolled = true;
    }
   
});

//filters
const filtersEL = document.querySelector('.filters');
const projectEL1 = document.querySelector('.project:nth-child(1)');
const projectEL2 = document.querySelector('.project:nth-child(2)');
const projectEL3 = document.querySelector('.project:nth-child(3)');
const projectEL4 = document.querySelector('.project:nth-child(4)');
const projectEL5 = document.querySelector('.project:nth-child(5)');
const projectEL6 = document.querySelector('.project:nth-child(6)');

const htmlEL = document.querySelector('html')

filtersEL.addEventListener('click', (event)=>{

    fadeEL.style.opacity ='0'
    document.querySelector('.filter-btn--active').classList.remove('filter-btn--active');
    event.target.classList.add('filter-btn--active');

    htmlEL.style.setProperty('--default-opacity','0.4');
    htmlEL.style.setProperty('--hover-opacity','0.3');

    //grid organize
    const filterText = event.target.textContent;
    if(filterText === 'All'){
        projectEL1.style.opacity = '1';
        projectEL1.style.transform = 'scale(1)';
        projectEL2.style.opacity = '1';
        projectEL2.style.transform = 'scale(1)';
        projectEL3.style.opacity = '1';
        projectEL3.style.transform = 'scale(1)';
        projectEL4.style.opacity = '1';
        projectEL4.style.transform = 'scale(1)';
        projectEL5.style.opacity = '1';
        projectEL5.style.transform = 'scale(1)';
        projectEL6.style.opacity = '1';
        projectEL6.style.transform = 'scale(1)';
        
    }else if (filterText === '2D'){

        projectEL1.style.opacity = '0';
        projectEL1.style.transform = 'scale(0)';
        projectEL2.style.opacity = '0';
        projectEL2.style.transform = 'scale(0)';
        projectEL5.style.opacity = '0';
        projectEL5.style.transform = 'scale(0)';
        projectEL6.style.opacity = '0';
        projectEL6.style.transform = 'scale(0)';

        projectEL3.style.transform = 'translateX(-650px)';
        projectEL3.style.opacity = '1';

        projectEL4.style.transform = 'translate(325px,-502px)';
        projectEL4.style.opacity = '1';




    }else if (filterText === '3D'){
        projectEL1.style.opacity = '0';
        projectEL1.style.transform = 'scale(0)';
        projectEL2.style.opacity = '0';
        projectEL2.style.transform = 'scale(0)';
        projectEL3.style.opacity = '0';
        projectEL3.style.transform = 'scale(0)';
        projectEL4.style.opacity = '0';
        projectEL4.style.transform = 'scale(0)';

        projectEL5.style.transform = 'translate(-325px,-359px)';
        projectEL5.style.opacity = '1';
        projectEL6.style.transform = 'translate(-325px,-501px)';
        projectEL6.style.opacity = '1';

    }else if (filterText === 'GAMES'){
        projectEL3.style.opacity = '0';
        projectEL3.style.transform = 'scale(0)';
        projectEL4.style.opacity = '0';
        projectEL4.style.transform = 'scale(0)';
        projectEL5.style.opacity = '0';
        projectEL5.style.transform = 'scale(0)';
        projectEL6.style.opacity = '0';
        projectEL6.style.transform = 'scale(0)';

        projectEL1.style.opacity = '1';
        projectEL1.style.transform = 'scale(1)';
        projectEL2.style.opacity = '1';
        projectEL2.style.transform = 'scale(1)';
    }

});

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})
let tabs = document.querySelectorAll('.btn'),
 contents = document.querySelectorAll('.content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents.forEach((content) => {
            content.classList.remove('active');
        });

        tabs.forEach((tab) => {
            tab.classList.remove('active');
        });

        contents[index].classList.add('active');
    tabs[index].classList.add('active');
    
    }); 
});


gsap.from('.hero-container',{duration:1.5, opacity:0, ease:'bounce', delay: 1, stagger: 1})
 
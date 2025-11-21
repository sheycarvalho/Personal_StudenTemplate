// JavaScript for active nav li
const navItems = document.querySelectorAll('nav ul:not(.sidebar) li');

function handleNavItemClick() {
    navItems.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
}
navItems.forEach(item => item.addEventListener('click', handleNavItemClick
));
// end of Javascript for the active nav li


// JavaScript for the_pinks Carousel
document.addEventListener('DOMContentLoaded', function() {
    let nextDom = document.getElementById('next');
    let prevDom = document.getElementById('prev');
    let carouselDom = document.querySelector('.carousel');
    let SliderDom = document.querySelector('.carousel .list');
    let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

    if (!nextDom || !prevDom || !carouselDom || !SliderDom || !thumbnailBorderDom) {
        console.error('Carousel elements not found');
        return;
    }

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

    let timeRunning = 3000;
    let timeAutoNext = 7000;

    nextDom.addEventListener('click', function() {
        showSlider('next');
    });

    prevDom.addEventListener('click', function() {
        showSlider('prev');
    });

    let runTimeOut;
    let runNextAuto = setInterval(function() {
        nextDom.click();
    }, timeAutoNext);

    function showSlider(type) {
        let SliderItemsDom = document.querySelectorAll('.carousel .list .item');
        let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

        if (type === 'next') {
            SliderDom.appendChild(SliderItemsDom[0]);
            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            carouselDom.classList.add('next');
        } else {
            SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
            thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
            carouselDom.classList.add('prev');
        }

        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(function() {
            carouselDom.classList.remove('next');
            carouselDom.classList.remove('prev');
        }, timeRunning);

        clearInterval(runNextAuto);
        runNextAuto = setInterval(function() {
            nextDom.click();
        }, timeAutoNext);
    }

    // Add click event to thumbnails
    thumbnailItemsDom.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            // Calculate how many times to click to reach the desired item
            let SliderItemsDom = document.querySelectorAll('.carousel .list .item');
            let currentIndex = 0;
            
            // Find which slide is currently active (first in the list)
            for (let i = 0; i < SliderItemsDom.length; i++) {
                if (SliderItemsDom[i] === SliderDom.children[0]) {
                    currentIndex = i;
                    break;
                }
            }
            
            // Click next until we reach the desired index
            let clicksNeeded = (index - currentIndex + SliderItemsDom.length) % SliderItemsDom.length;
            for (let i = 0; i < clicksNeeded; i++) {
                showSlider('next');
            }
        });
    });
})();

// end of Javascript for the_pinks

// JavaScript for Shows and Series Carousel
let items = document.querySelectorAll('.slider .list2-slider .holder-slider'); 
let holderSlides = document.querySelectorAll('.holder-slider');
let infoSlides = document.querySelectorAll('.info-slider');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.card-slider .holder-slider');
let countItem = items.length;
let itemActive = 0;
let refreshInterval;

next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
};

prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
};

function showSlider(){
    holderSlides.forEach(slide => {
        slide.classList.remove('active-slider');
    });
    infoSlides.forEach(slide => {
        slide.classList.remove('active-slider');
    });

    items[itemActive].classList.add('active-slider');
    thumbnails[itemActive].classList.add('active-slider');
    holderSlides[itemActive].classList.add('active-slider');
    infoSlides[itemActive].classList.add('active-slider');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000);
}

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    });
});

refreshInterval = setInterval(() => {
    next.click();
}, 5000);

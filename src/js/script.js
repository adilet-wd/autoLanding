@@include('webpcss.js');
@@include('swiper-v7.4.1.js');
document.querySelectorAll(".tab-trigger").forEach((item) =>     
    item.addEventListener('click',function(e) {
        e.preventDefault();
        const id = item.getAttribute('href').replace("#" , "");

        document.querySelectorAll(".tab-trigger").forEach(
            (child) => child.classList.remove("active")
        );
        document.querySelectorAll(".tab").forEach(
            (child) => child.classList.remove("active")
        );     
        item.classList.add("active");
        document.getElementById(id).classList.add('active');  
    })
);
document.querySelector('.tab-trigger').click();

const swiper = new Swiper('.slider-main', {
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    },
    keyboard:{
        enabled: true,
        onlyInViewport: true,
    },
    mousewheel: {
        enabled: false,
    },
    hashNavigation: {
        watchState: true,
    },
    autoHeight: true,
    freeMode: {
        enabled: false,
    },
    grabCursor: false,
    slideToClickedSlide: true,
    centeredSlides: true,
    initialSlide: 1,
    slidesPerView: 3,
    autoplay: {
        delay: 1500,
        stopOnLastSlide: true,
        disableOnInteraction: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1.2,
            spaceBetween: 18,
        },
        320: {
            slidesPerView: 1.2,
            spaceBetween: 18,
        },
        480: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 22,
        },  
        992: {
            slidesPerView: 3,
            spaceBetween: 24,
        }
    },
    
});

function handleLink(event){
    console.log("click on link")
    event.preventDefault();
}
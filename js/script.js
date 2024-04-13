var swiper = new Swiper(".services-top", {
    slidesPerView: 4,
    spaceBetween: 50,
    grabCursor: true,
    loop: true,
    centerSlide: true,
    fade: true,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        570: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        950: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 32,
        }
    }
});

var swiper = new Swiper(".services-bottom", {
    slidesPerView: 4,
    spaceBetween: 50,
    grabCursor: true,
    freeMode: true,
    loop: true,
    centerSlide: true,
    fade: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        570: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        950: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 32,
        }
    }
});

var swiper = new Swiper(".resources-scroller", {
    slidesPerView: 5,
    grabCursor: true,
    freeMode: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        680: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        950: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 40,
        }
    }
  });

let copy = document.querySelector('.companies-logo__slide').cloneNode(true);
document.querySelector(".companies-logo").appendChild(copy);

const tabs = document.querySelectorAll('.stack-tab-bar__title');
const allImages = document.querySelectorAll('.stack-tab-items__images');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        tab.classList.add('active');

        allImages.forEach(image => {
            image.classList.remove('active');
        });
        allImages[index].classList.add('active');
    });
});

let hamburger = document.querySelector(".hamburger-menu");

hamburger.onclick = function() {
    let navBar = document.querySelector(".header-top__items");
    navBar.classList.toggle("active-bar");
}
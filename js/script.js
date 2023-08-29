let img_overlay = document.querySelectorAll(".images-overlay");
let burger = document.querySelector(".ham-burger");
let btn_click = document.querySelectorAll(".btn");
let anime = document.querySelectorAll(".anime-a");
let btn = document.querySelector(".buttons");
let ulnone = document.querySelector(".ul");
let nav = document.querySelector(".gotit");

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add("navbar-scrols");
    }
    else {
        nav.classList.remove("navbar-scrols");
    }
});

burger.addEventListener('click', () => {
    ulnone.classList.toggle("ul-none");
});

btn.addEventListener("click", (e) => {
    p_clicked = e.target;
    btn_click.forEach((curElem) => curElem.classList.remove("btn-port"));
    p_clicked.classList.toggle("btn-port");
    let btn_val = p_clicked.dataset.btnNum;
    let showimg = document.querySelectorAll(`.btn-data-${btn_val}`);
    img_overlay.forEach((curElem) => curElem.classList.add("port-notactive"));
    showimg.forEach((curclem) => curclem.classList.remove("port-notactive"));
});

var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },

    autoplay: {
        delay: 2500,
    },

    loop: true,
});

var forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]);
    }
};

window.addEventListener("scroll", () => {
    if (window.scrollY > 4200) {
        var max = -219.99078369140625;
        forEach(document.querySelectorAll('.progress'), function (index, value) {
            percent = value.getAttribute('data-progress');
            value.querySelector('.fill').setAttribute('style', 'stroke-dashoffset: ' + ((100 - percent) / 100) * max);
            value.querySelector('.value').innerHTML = percent + '%';
        });
    }
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        anime[0].classList.add("anime-c");
    }

    if (window.scrollY > 1050) {
        anime[1].classList.add("anime-c");
    }

    if (window.scrollY > 1700) {
        anime[2].classList.add("anime-c");
    }
});

var typed = new Typed('#element', {
    strings: ['A Full-Stack Developer', 'A Web Designer', 'A Programmer', 'A Android Developer', 'A Video Editor', 'A Freelancer'],
    typeSpeed: 70,
    backSpeed: 70,
    loop: true,
});
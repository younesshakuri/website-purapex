

// | بخش              | توضیح                                                             
// | ---------------- | ---------------------------------------------------------------    
// | Scroll Animation | `.animate-on-scroll` – فعال‌سازی انیمیشن هنگام ورود به viewport   
// | Mobile Menu      | دکمه‌ی همبرگر و باز/بسته کردن منو                                 
// | Dual Carousel    | هماهنگی متن و تصویر در اسلایدر                                    
// | SVG Wave         | ساخت موج متحرک                                                   
// | Image Hover      | تغییر پس‌زمینه هنگام هاور روی گزینه‌ها                             
// | FAQ Toggle       | باز/بسته شدن دستی پاسخ سوالات                                      
// | Form Validation  | بررسی پر بودن فرم درخواست                                         



// -------------------------Scroll Animation -------------------------------

const elements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, { threshold: 0.3 });



// -------------------------Mobile Menu -----------------------------------


elements.forEach(el => observer.observe(el));
document.getElementById('navbar-toggler').addEventListener('click', function () {
    document.querySelector('.header__menu').classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', function () {
  const toggler = document.getElementById('navbar-toggler');
  const menu = document.querySelector('.header__menu');

  toggler.addEventListener('click', function () {
    menu.classList.toggle('open');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const toggler = document.getElementById('navbar-toggler');
  const menu = document.querySelector('.header__menu');
  toggler.addEventListener('click', function () {
    menu.classList.toggle('open');
  });
});





// -------------------------Dual Carousel -----------------------------------

// --- هماهنگی دو اسلایدر ---
let imageCarouselEl = document.getElementById('imageCarousel');
let textCarouselEl = document.getElementById('textCarousel');

let imageCarousel = new bootstrap.Carousel(imageCarouselEl, {
    interval: 5000,
    ride: 'carousel'
});

let textCarousel = new bootstrap.Carousel(textCarouselEl, {
    interval: 5000,
    ride: 'carousel'
});

// هماهنگ کردن اسلاید عکس با متن + افزودن کلاس انیمیشن
imageCarouselEl.addEventListener('slide.bs.carousel', function (e) {
    textCarousel.to(e.to);

    // حذف کلاس انیمیشن قبلی از همه آیتم‌های عکس
    document.querySelectorAll('#imageCarousel .carousel-item').forEach(item => {
        item.classList.remove('animate-image');
    });

    // حذف کلاس انیمیشن از همه آیتم‌های متن
    document.querySelectorAll('#textCarousel .carousel-item').forEach(item => {
        item.classList.remove('animate-text');
    });

    // اعمال انیمیشن به اسلاید جدید (با کمی تأخیر)
    setTimeout(() => {
        e.relatedTarget.classList.add('animate-image');

        // پیدا کردن آیتم متن متناظر و افزودن انیمیشن
        const textItems = textCarouselEl.querySelectorAll('.carousel-item');
        if (textItems[e.to]) {
            textItems[e.to].classList.add('animate-text');
        }
    }, 50);
});

// اگر کاربر مستقیم اسلاید متن را تغییر دهد هم عکس هماهنگ شود
textCarouselEl.addEventListener('slide.bs.carousel', function (e) {
    imageCarousel.to(e.to);
});



// ---------------------svg------------------------------------

// const wavePath = document.getElementById("wavePath");

// function generateWavePath(tick) {
//     const amplitude = 20;
//     const frequency = 0.04;
//     let path = "M 0 0 ";

//     for (let x = 0; x <= 100; x++) {
//         const y = amplitude * Math.sin((x * frequency + tick) * Math.PI) + 50;
//         path += `L ${x} ${y} `;
//     }

//     path += "L 100 100 L 0 100 Z";
//     return path;
// }

// let tick = 0;

// function animateWave() {
//     wavePath.setAttribute("d", generateWavePath(tick));
//     tick += 0.03;
//     requestAnimationFrame(animateWave);
// }

// animateWave();


// --------------------image hover------------------------------------



function changeBgColor(url) {
    const section = document.querySelector('#right-column');
    section.style.backgroundImage = `url(${url})`;
}


// ------------------Faq Toggle------------------------------------


function toggleContent(element) {
    const box = element.closest(".toggle-box");
    box.classList.toggle("open");
}

// ---------------------Request---------------------------------

(() => {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');
    forms.forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  })();
// کد JS برای تغییر موقعیت بخش فهرست در هنگام اسکرول
var sidebar = document.querySelector('.sidebar');
var sidebarTop = sidebar.getBoundingClientRect().top;

window.addEventListener('scroll', function() {
    var scrollPos = window.scrollY || window.pageYOffset;

    if (scrollPos > sidebarTop) {
        sidebar.style.position = 'fixed';
        sidebar.style.top = '0';
    } else {
        sidebar.style.position = 'static';
    }
});

// کد JS برای اضافه کردن انیمیشن برای بخش فهرست
var sidebarLinks = document.querySelectorAll('.sidebar li a');

sidebarLinks.forEach(function(link) {
    link.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#ccc';
    });

    link.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
    });
});

// کد JS برای نمایش و عدم نمایش بخش تبلیغات در هنگام اسکرول
var advertisement = document.querySelector('.advertisement');
var advertisementTop = advertisement.getBoundingClientRect().top;
var windowHeight = window.innerHeight;

window.addEventListener('scroll', function() {
    var scrollPos = window.scrollY || window.pageYOffset;

    if (scrollPos + windowHeight > advertisementTop) {
        advertisement.style.display = 'none';
    } else {
        advertisement.style.display = '';
    }
});

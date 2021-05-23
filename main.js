const navbar = document.querySelector('nav.navbar');
const navlink = document.querySelectorAll('.nav-link');
const navbrand = document.querySelector('.navbar-brand');
const navtoggler = document.querySelector('.navbar-toggler-icon');

document.onscroll = function () {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      navbar.style.backgroundColor = '#fafafa';
      navlink.forEach(function (item) {
         item.style.color = '#090b3b';
      });
      navbrand.style.color = '#090b3b';
      navtoggler.style.filter = 'invert(1)';
   } else {
      navbar.style.backgroundColor = 'transparent';
      navlink.forEach(function (item) {
         item.style.color = '#fafafa';
      });
      navbrand.style.color = '#fafafa';
      navtoggler.style.filter = 'invert(0)';
   }
}


// Smooth Scroll
$('.nav-link').on('click', function (ev) {
   // Ambil Isi Href
   let tujuan = $(this).attr('href')

   // Ambil Element Tujuan
   let elementTujuan = $(tujuan);

   $('html, body').animate({
      scrollTop: elementTujuan.offset().top - 30
   })
})
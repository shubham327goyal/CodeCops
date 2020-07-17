const navSlide = () => {
  const complain= document.querySelector('.complain');
  const nav = document.querySelector('.vita');
  const navLinks = document.querySelectorAll('.vita li');

  //toggle nav
  complain.addEventListener('click', () => {
    nav.classList.toggle('vita-active');

    ///animate lines
    navLinks.forEach((link, index) => {
       if(link.style.animation) {
         link.style.animation = ''
       }else{
         link.style.animation = 'navLinkFade 0.5s ease forwards ${index/5  + 1.5}s';
       }
   });
  });
}

navSlide();

// Scroll down button
function scrollDown(element) {  
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': element.offsetTop
    });
  }
  
  
  const btns = document.querySelectorAll('.js-btn');
  const sections = document.querySelectorAll('.js-section');

  const conbtn = document.querySelectorAll('.contact-link');
  const form = document.querySelectorAll('.contact-form');
  
  btns[0].addEventListener('click', () => {
    scrollDown(sections[0]);
});

    conbtn[0].addEventListener('click', () => {
        scrollDown(form[0]);
  });

 
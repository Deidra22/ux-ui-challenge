function scrollIt(element) {  
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': element.offsetTop
    });
  }
  
  
  const btns = document.querySelectorAll('.js-btn');
  const sections = document.querySelectorAll('.js-section');
  
  btns[0].addEventListener('click', () => {
    scrollIt(sections[0]);
  });
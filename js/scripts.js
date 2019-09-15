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

// Slide In 
// function debounce(func, wait = 20, immediate = true){
//     let timeout;
//     return function(){
//         const context = this, args = arguments;
//         const later = function(){
//             timeout = null;
//             if(!immediate) func.apply(context.args);
//         };
//         const callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if(callNow) func.apply(context.args);
//     };
// };


//   const sliderDivs = document.querySelectorAll('.slide-in');
//   function checkSlide(e){
//     console.log(window.scrollY);
//       sliderDivs.forEach(slideDiv =>{
//         const slideInAt = (window.scrollY + window.innerHeight) - slideDiv.height / 2;
//         console.log(slideInAt);
//       });
//   }

//   window.addEventListener('scroll', debounce(checkSlide));

 
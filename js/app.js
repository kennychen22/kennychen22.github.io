let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');


// $('#myid').one('click',
// $('window').one()

window.addEventListener('DOMContentLoaded', function splash() {

  // Remove the listener from the element the first time the listener is run:
  window.removeEventListener('DOMContentLoaded', splash);
  
  setTimeout(function first_timeout() {
    logoSpan.forEach(function first_span(span, idx) {
      setTimeout(function first_active() {
        span.classList.add('active');
      }, (idx+1) * 400)
    });


    // setTimeout(() => {
    //   logoSpan.forEach((span, idx) => {
    //     setTimeout(() => {
    //       span.classList.remove('active');
    //       span.classList.add('fade');
    //     }, (idx+1)*50)
    //   })
    // }, 2000);

    setTimeout(function last_timeout(){
      intro.style.top = '-100vh';
    }, 2300)
  })
})

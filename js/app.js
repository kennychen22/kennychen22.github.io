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




// // Background scrolling
// // https://codepen.io/daveredfern/pen/zBGBJV
// $(window).scroll(function() {
//
//   // selectors
//   var $window = $(window),
//       $body = $('body'),
//       $panel = $('.panel');
//
//   // Change 33% earlier than scroll position so colour is there when you arrive.
//   var scroll = $window.scrollTop() + ($window.height() / 3);
//
//   $panel.each(function () {
//     var $this = $(this);
//
//     // if position is within range of this panel.
//     // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
//     // Remember we set the scroll to 33% earlier in scroll var.
//     if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
//
//       // Remove all classes on body with color-
//       $body.removeClass(function (index, css) {
//         return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
//       });
//
//       // Add class of currently active div
//       $body.addClass('color-' + $(this).data('color'));
//     }
//   });
//
// }).scroll();


const colors = ['', 'lightCyan', 'darkSkyBlue', 'aquamarine', 'electricBlue']

const sections = [...document.getElementsByTagName('section')]

window.addEventListener('scroll', function () {

  const scrollFromTop = window.pageYOffset

  for (let i = 0; sections.length > i; i++) {

    if (scrollFromTop <= sections[i].offsetTop) {
      document.body.className = colors[i]
      break
    }

  }

})

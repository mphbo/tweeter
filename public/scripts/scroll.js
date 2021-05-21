//when a user scrolls an icon shows up at the bottom, when clicked sends user to the top of the page

$(document).ready(() => {

  $(window).on('scroll', function() {
    $('body').append(`
      <a id="scrollToTop" href="#top"><i class="fas fa-chevron-up"></i></a>
    `);
    this.off();
  });
  $('#scrollToTop i').on('click', function() {
    console.log('working');
  });

})
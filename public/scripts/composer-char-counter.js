// console.log('hello file');

$(document).ready(() => {
  // console.log('taterbeans');
  let text = $("textarea#tweet-text").on('input', function() {
    let counter = (140 - text.val().length);
    console.log(counter);

    let char = text.next().children().last();
    char.html(counter)

    if (counter < 0) {
      char.css('color', 'red');
    }

    if (counter >= 0) {
      char.css('color', '#545149');
    }



  });

  $(window).on('scroll', function() {
    $('body').append(`
      <a href="" id="scrollToTop"><i class="fas fa-chevron-up"></i></a>
    `)
    this.off();
  })

  $('#scrollToTop i').on('click', function() {
    console.log('working');
  })
});

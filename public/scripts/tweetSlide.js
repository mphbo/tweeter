//Stretch work to show/hide the new tweet box when button is clicked depending on screen size.

let newTweetDisplay = $('.new-tweet');
$('document').ready(() => {
  console.log($(window).width());
  if ($(window).width() <= 768) {
    $('.new-tweet').css('display', 'block');
  } else {
    let hidden = true;
    $('.flex').on('click', () => {
      console.log('it working')
      if (!hidden) {
        $('.new-tweet').css('display', 'none');
        hidden = true;
      } else {
        $('.new-tweet').css('display', 'block')
        if ($(window).width() >= '1024px') {
          $('main.container').css('margin-top', '200px');
        }
        hidden = false;
      }
    });
  }
  
});
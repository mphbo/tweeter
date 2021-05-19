const arrow = $('.flex');
let newTweetDisplay = $('.new-tweet')
$('document').ready(() => {
  let hidden = false
   $('.flex').on('click', () => {
   console.log('it working')
   if (!hidden) {
     $('.new-tweet').css('display', 'none');
     hidden = true;
   } else {
     $('.new-tweet').css('display', 'block')
     hidden = false;
   }
  })
})
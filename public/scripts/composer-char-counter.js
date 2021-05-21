//logic to dynamically change the character counter underneath the form to make a new tweet. Changes red when there are too many characters.

$(document).ready(() => {
  // console.log('taterbeans');
  let text = $("textarea#tweet-text").on('input', function() {
    let counter = (140 - text.val().length);
    console.log(counter);

    let char = text.next().children().last();
    char.html(counter);

    if (counter < 0) {
      char.css('color', 'red');
    }

    if (counter >= 0) {
      char.css('color', '#545149');
    }



  });
});

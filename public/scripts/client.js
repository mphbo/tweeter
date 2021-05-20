
//function to escape cross site scripting
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};


//create dynamic tweets as html with template literals
const createTweetElement = tweet => {
  const name = tweet.user.name;
  const handle = tweet.user.handle;
  const text = tweet.content.text;
  const date = timeago.format(tweet.created_at);
  const $tweet = `
  <article class="tweet">
    <header>
      <div>
        <i class="fas fa-user"></i>
        <p class="name">${escape(name)}</p>
      </div>
      <p class="username">${escape(handle)}</p>
    </header>
    <p class="tweetContent">${escape(text)}</p>
    <footer>
      <p class="daysOld">${escape(date)}</p>
      <div>
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </div>
    </footer>
  </article>
  `;
  return $tweet;
}


//loop through all tweets from backend and apply the above function to each and then render them on index
const renderTweets = tweets => {
  const existingTweets = $('.tweets-container')
  for (const tweet of tweets) {
    existingTweets.prepend(createTweetElement(tweet));
  }
}




//where function calls take place and the form submit listener/ajax call lives
$('document').ready(function () {
  //Initial tweet load
  const loadTweets = function() {
    $.ajax('/tweets', {method: 'GET'})
    .then(function(tweets) {
      // console.log(data);
      renderTweets(tweets);
    })
  }
  loadTweets();

  
  let isError = false;
  

  //form listener that throws errors to user if characters exceed 140 or text area is empty
  $("form").submit(function (event) {
    event.preventDefault();
    
    let formData = {
      text: $('#tweet-text').val()
    };

    if (formData.text.length > 140) {
      $('#tweet-text').addClass('error')
      if (!isError) {
        $('#tweetButton').after(`<p id="error">Too many characters!<i class="fas fa-level-up-alt"></i></p>`)
        isError = true;
      } else {
        isError = false;
      }
    }
    if (formData.text.length === 0) {
      $('#tweet-text').addClass('error');
      if (!isError) {
        $('#tweetButton').after(`<p id="error">Please add characters!<i class="fas fa-level-up-alt"></i></p>`)
        isError = true;
      } else {
        isError = false;
      }
    }
    if (formData.text.length > 0 && formData.text.length <= 140) {
      $('#error').remove();
      $('#tweet-text').removeClass('error')

      //ajax post sends new tweet to backend
      $.ajax({
       type: "POST",
       url: "/tweets",
       data: formData,
      //  encode: true,
      })
      .done((event) => {

        //after post is finsished tweets are removed from page and then replaced with all of them plus the new content (tweet) prepended to the page.
        $('.tweets-container').html('');
        $.get('/tweets', function(theData, status) {
          renderTweets(theData);
      })
     })
     .fail((err) => {
       console.log('this is the error:', err);
     })
    }

  });
});
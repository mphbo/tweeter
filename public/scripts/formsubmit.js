// const renderTweets = require('./client')

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

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

const renderTweets = tweets => {
  const existingTweets = $('.tweets-container')
  for (const tweet of tweets) {
    existingTweets.prepend(createTweetElement(tweet));
  }
}



$.ajax('/tweets', {method: 'GET'})
      .then(function (tweets) {
        // console.log('Success: ', tweets)
      renderTweets(tweets);
      })




$('document').ready(() => {
  const loadTweets = function() {
    $.ajax('/tweets', {method: 'GET'})
    .then(function(tweets) {
      // console.log(data);
      renderTweets(tweets);
    })
  }
  loadTweets();
  
})


$('document').ready(function () {
  let isError = false;
  
  $("form").submit(function (event) {
    event.preventDefault();
    
    let formData = {
      text: $('#tweet-text').val()
    };
    // console.log(formData);
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
      // console.log('hey')
      $('#error').remove();
      $('#tweet-text').removeClass('error')
      const loadTweets = function() {
        $.ajax('/tweets', {method: 'GET'})
        .then(function(tweets) {
          // console.log(data);
          renderTweets(tweets);
        })
      }
      console.log(formData);
      $.ajax({
       type: "POST",
       url: "/tweets",
       data: formData,
      //  encode: true,
      })
      .done((event) => {
        console.log('Event:',event)
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
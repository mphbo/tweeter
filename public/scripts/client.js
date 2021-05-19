/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// const data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": "https://i.imgur.com/73hZDYK.png"
//       ,
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": "https://i.imgur.com/nlhLi3I.png",
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   }
// ]


// const createTweetElement = tweet => {
//   const name = tweet.user.name;
//   const handle = tweet.user.handle;
//   const text = tweet.content.text;
//   const date = timeago.format(tweet.created_at);
//   const $tweet = `
//   <article class="tweet">
//     <header>
//       <div>
//         <i class="fas fa-user"></i>
//         <p class="name">${name}</p>
//       </div>
//       <p class="username">${handle}</p>
//     </header>
//     <p class="tweetContent">${text}</p>
//     <footer>
//       <p class="daysOld">${date}</p>
//       <div>
//         <i class="fas fa-flag"></i>
//         <i class="fas fa-retweet"></i>
//         <i class="fas fa-heart"></i>
//       </div>
//     </footer>
//   </article>
//   `;
//   return $tweet;
// }

// const renderTweets = tweets => {
//   const existingTweets = $('.tweets-container')
//   for (const tweet of tweets) {
//     existingTweets.prepend(createTweetElement(tweet));
//   }
// }


// $('document').ready(() => {
//   const loadTweets = function() {
//     $.get('/tweets', function(data, status) {
//       console.log(data);
//       renderTweets(data);
//     })
//   }
//   loadTweets();

// })


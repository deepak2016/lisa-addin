(function () {
  'use strict';

  angular.module('officeAddin')
    .service('dataService', ['$q', '$http', dataService])

  /**
   * Custom Angular service.
   */
  function dataService($q, $http) {

    // public signature of the service
    return {
      analyseContent: analyseContent,
      getCannedMessages: getCannedMessages,
      getQuotes: getQuotes,
      getTabs: getTabs
    };

    /** *********************************************************** */

    function getCannedMessages() {
      return [
        { title: 'Application for leave', content: 'Hi, Kindly grant me leave for the weekend of [insert date here] as I will be traveling for [insert place here].\n\n\nYour assistance in this regard is highly appreciated.' },
        { title: 'OOF today', content: "I'm feeling sick today as I'm down with cold and fever. Will try to work from home later in the evening." },
        {title: 'Sorry for the inconvenience', content:"I’m really sorry. We made a mistake in your order. We are going to fix it immediately, but it takes approximately 2 days. We will give you a cashback of Rs500/- to make up our errors."},
        { title: 'Sign in trouble?', content : 'Hello ' +
        '' +

        'Thank you for letting us know about the sign-in problem. Our technical team has fixed the issue for you.' +
        '(Adjust this part to better suit your company’s service). You may now sign-in after correction has been made on your account. Here’s how to do so:' +
        'Open (your website)' +
        'Type your username and password' +
        'Answer the security question' +
        'If you still have any problems, please call our Customer Service Center at (your office number). We are here for you Monday through Friday from 8 AM until 5 PM.' +
        'We are really sorry for the inconvenience. Everything should be working smoothly now!' +
        'Sincerely'
        },
        {title: 'Refund Status', content :'We are sorry to hear that you did not enjoy your experience with us. As we truly value each of our customer’s happiness, we will gladly review your request for refund of (Your company’s product or service).' +
        'However, please keep in mind that refund requests usually take (Put number of days) to process. We promise you though, we’ll keep you updated once we investigate your case.' +
        'If the request is approved, you can expect the refund to be completed within (Put number of days).' +
        'If there are any other problems, please do not hesitate to let me know. I would gladly provide you with further assistance'
        }
      ];
    }

    function getQuotes() {
      return  [{message:'Life is about making an impact, not making an income', author: 'Kevin Kruse'},
{message: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
{message: 'Strive not to be a success, but rather to be of value', author: 'Albert Einstein'},
{message: 'Two roads diverged in a wood, and IóI took the one less traveled by, And that has made all the difference ', author: 'Robert Frost'},
{message: 'I attribute my success to this: I never gave or took any excuse', author: 'Florence Nightingale'},
{message: 'You miss  % of the shots you don\'t take', author: 'Wayne Gretzky'},
{message: 'The most difficult thing is the decision to act, the rest is merely tenacity', author: 'Amelia Earhart'},
{message: 'Every strike brings me closer to the next home run', author: 'Babe Ruth'},
{message: 'Definiteness of purpose is the starting point of all achievement', author: 'W Clement Stone'},
{message: 'Life isn\'t about getting and having, it\'s about giving and being', author: 'Kevin Kruse'},
{message: 'Life is what happens to you while you\'re busy making other plans', author: 'John Lennon'},
{message: 'We become what we think about', author: 'Earl Nightingale'},
{message: 'Life is  % what happens to me and % of how I react to it', author: 'Charles Swindoll'},
{message: 'The most common way people give up their power is by thinking they don\'t have any', author: 'Alice Walker'},
{message: 'The mind is everything What you think you become ', author: 'Buddha'},
{message: 'The best time to plant a tree was  years ago The second best time is now', author: 'Chinese Proverb'},
{message: 'An unexamined life is not worth living', author: 'Socrates'},
{message: 'Eighty percent of success is showing up', author: 'Woody Allen'},
{message: 'Your time is limited, so don\'t waste it living someone else\'s life', author: 'Steve Jobs'},
{message: 'Winning isn\'t everything, but wanting to win is', author: 'Vince Lombardi'},
{message: 'I am not a product of my circumstances I am a product of my decisions', author: 'Stephen Covey'},
{message: 'Every child is an artist  The problem is how to remain an artist once he grows up', author: 'Pablo Picasso'},
{message: 'You can never cross the ocean until you have the courage to lose sight of the shore', author: 'Christopher Columbus'},
{message: 'I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel', author: 'Maya Angelou'},
{message: 'Either you run the day, or the day runs you', author: 'Jim Rohn'},
{message: 'Whether you think you can or you think you can\'t, you\'re right', author: 'Henry Ford'},
{message: 'The two most important days in your life are the day you are born and the day you find out why', author: 'Mark Twain'},
{message: 'Whatever you can do, or dream you can, begin it  Boldness has genius, power and magic in it', author: 'Johann Wolfgang von Goethe'},
{message: 'The best revenge is massive success', author: 'Frank Sinatra'},
{message: 'People often say that motivation doesn\'t last Well, neither does bathing  That\'s why we recommend it daily', author: 'Zig Ziglar'},
{message: 'Life shrinks or expands in proportion to one\'s courage', author: 'Anais Nin'},
{message: 'If you hear a voice within you say ìyou cannot paint,î then by all means paint and that voice will be silenced', author: 'Vincent Van Gogh'},
{message: 'There is only one way to avoid criticism: do nothing, say nothing, and be nothing', author: 'Aristotle'},
{message: 'Ask and it will be given to you; search, and you will find; knock and the door will be opened for you', author: 'Jesus'},
{message: 'The only person you are destined to become is the person you decide to be', author: 'Ralph Waldo Emerson'},
{message: 'Go confidently in the direction of your dreams  Live the life you have imagined', author: 'Henry David Thoreau'},
{message: 'When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me', author: 'Erma Bombeck'},
{message: 'Few things can help an individual more than to place responsibility on him, and to let him know that you trust him ', author: 'Booker T Washington'},
{message: 'Certain things catch your eye, but pursue only those that capture the heart', author: ' Ancient Indian Proverb'},
{message: 'Believe you can and you\'re halfway there', author: 'Theodore Roosevelt'},
{message: 'Everything you\'ve ever wanted is on the other side of fear', author: 'George Addair'},
{message: 'We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light', author: 'Plato'},
{message: 'Teach thy tongue to say, "I do not know," and thous shalt progress', author: 'Maimonides'},
{message: 'Start where you are Use what you have  Do what you can', author: 'Arthur Ashe'},
{message: 'When I was  years old, my mother always told me that happiness was the key to life  When I went to school, they asked me what I wanted to be when I grew up  I wrote down \'happy\'.  They told me I didn\'t understand the assignment, and I told them they didn\'t understand life', author: 'John Lennon'},
{message: 'Fall seven times and stand up eight', author: 'Japanese Proverb'},
{message: 'When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us', author: 'Helen Keller'},
{message: 'Everything has beauty, but not everyone can see', author: 'Confucius'},
{message: 'How wonderful it is that nobody need wait a single moment before starting to improve the world', author: 'Anne Frank'},
{message: 'When I let go of what I am, I become what I might be', author: 'Lao Tzu'},
{message: 'Life is not measured by the number of breaths we take, but by the moments that take our breath away', author: 'Maya Angelou'},
{message: 'Happiness is not something readymade  It comes from your own actions', author: 'Dalai Lama'},
{message: 'If the wind will not serve, take to the oars', author: 'Latin Proverb'},
{message: 'You can\'t fall if you don\'t climb  But there\'s no joy in living your whole life on the ground', author: 'Unknown'},
{message: 'We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained', author: 'Marie Curie'},
{message: 'Too many of us are not living our dreams because we are living our fears', author: 'Les Brown'},
{message: 'Challenges are what make life interesting and overcoming them is what makes life meaningful', author: 'Joshua J Marine'},
{message: 'If you want to lift yourself up, lift up someone else', author: 'Booker T Washington'},
{message: 'I have been impressed with the urgency of doing Knowing is not enough; we must apply Being willing is not enough; we must do', author: 'Leonardo da Vinci'},
{message: 'Limitations live only in our minds  But if we use our imaginations, our possibilities become limitless', author: 'Jamie Paolinetti'},
{message: 'You take your life in your own hands, and what happens? A terrible thing, no one to blame', author: 'Erica Jong'},
{message: 'What\'s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do', author: 'Bob Dylan'},
{message: 'I didn\'t fail the test I just found   ways to do it wrong', author: 'Benjamin Franklin'},
{message: 'In order to succeed, your desire for success should be greater than your fear of failure', author: 'Bill Cosby'},
{message: 'A person who never made a mistake never tried anything new', author: ' Albert Einstein'},
{message: 'The person who says it cannot be done should not interrupt the person who is doing it', author: 'Chinese Proverb'},
{message: 'There are no traffic jams along the extra mile', author: 'Roger Staubach'},
{message: 'It is never too late to be what you might have been', author: 'George Eliot'},
{message: 'You become what you believe', author: 'Oprah Winfrey'},
{message: 'I would rather die of passion than of boredom', author: 'Vincent van Gogh'},
{message: 'A truly rich man is one whose children run into his arms when his hands are empty', author: 'Unknown'},
{message: 'It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings ', author: 'Ann Landers'},
{message: 'If you want your children to turn out well, spend twice as much time with them, and half as much money', author: 'Abigail Van Buren'},
{message: 'Build your own dreams, or someone else will hire you to build theirs', author: 'Farrah Gray'},
{message: 'Remember that not getting what you want is sometimes a wonderful stroke of luck', author: 'Dalai Lama'},
{message: 'You can\'t use up creativity  The more you use, the more you have', author: 'Maya Angelou'},
{message: 'Dream big and dare to fail', author: 'Norman Vaughan'},
{message: 'Our lives begin to end the day we become silent about things that matter', author: 'Martin Luther King Jr'},
{message: 'Do what you can, where you are, with what you have', author: 'Teddy Roosevelt'},
{message: 'If you do what you\'ve always done, you\'ll get what you\'ve always gotten', author: 'Tony Robbins'},
{message: 'Dreaming, after all, is a form of planning', author: 'Gloria Steinem'},
{message: 'Remember no one can make you feel inferior without your consent', author: 'Eleanor Roosevelt'},
{message: 'Life is what we make it, always has been, always will be', author: 'Grandma Moses'},
{message: 'The question isn\'t who is going to let me; it\'s who is going to stop me', author: 'Ayn Rand'},
{message: 'When everything seems to be going against you, remember that the airplane takes off against the wind, not with it', author: 'Henry Ford'},
{message: 'It\'s not the years in your life that count It\'s the life in your years', author: 'Abraham Lincoln'},
{message: 'Change your thoughts and you change your world', author: 'Norman Vincent Peale'},
{message: 'Either write something worth reading or do something worth writing', author: 'Benjamin Franklin'},
{message: 'Nothing is impossible, the word itself says, ìI\'m possible!î', author: 'Audrey Hepburn'},
{message: 'Limitations live only in our minds  But if we use our imaginations, our possibilities become limitless', author: 'Jamie Paolinetti'},
{message: 'You take your life in your own hands, and what happens? A terrible thing, no one to blame', author: 'Erica Jong'},
{message: 'What\'s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do', author: 'Bob Dylan'},
{message: 'I didn\'t fail the test I just found   ways to do it wrong', author: 'Benjamin Franklin'},
{message: 'In order to succeed, your desire for success should be greater than your fear of failure', author: 'Bill Cosby'},
{message: 'A person who never made a mistake never tried anything new', author: ' Albert Einstein'},
{message: 'The person who says it cannot be done should not interrupt the person who is doing it', author: 'Chinese Proverb'},
{message: 'There are no traffic jams along the extra mile', author: 'Roger Staubach'},
{message: 'It is never too late to be what you might have been', author: 'George Eliot'},
{message: 'You become what you believe', author: 'Oprah Winfrey'},
{message: 'I would rather die of passion than of boredom', author: 'Vincent van Gogh'},
{message: 'A truly rich man is one whose children run into his arms when his hands are empty', author: 'Unknown'},
{message: 'It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings ', author: 'Ann Landers'},
{message: 'If you want your children to turn out well, spend twice as much time with them, and half as much money', author: 'Abigail Van Buren'},
{message: 'Build your own dreams, or someone else will hire you to build theirs', author: 'Farrah Gray'},
{message: 'Education costs money  But then so does ignorance', author: 'Sir Claus Moser'},
{message: 'It does not matter how slowly you go as long as you do not stop', author: 'Confucius'},
{message: 'Remember that not getting what you want is sometimes a wonderful stroke of luck', author: 'Dalai Lama'},
{message: 'You can\'t use up creativity  The more you use, the more you have', author: 'Maya Angelou'},
{message: 'Dream big and dare to fail', author: 'Norman Vaughan'},
{message: 'Our lives begin to end the day we become silent about things that matter', author: 'Martin Luther King Jr'},
{message: 'Do what you can, where you are, with what you have', author: 'Teddy Roosevelt'},
{message: 'If you do what you\'ve always done, you\'ll get what you\'ve always gotten', author: 'Tony Robbins'},
{message: 'Dreaming, after all, is a form of planning', author: 'Gloria Steinem'},
{message: 'Remember no one can make you feel inferior without your consent', author: 'Eleanor Roosevelt'},
{message: 'Life is what we make it, always has been, always will be', author: 'Grandma Moses'},
{message: 'The question isn\'t who is going to let me; it\'s who is going to stop me', author: 'Ayn Rand'},
{message: 'When everything seems to be going against you, remember that the airplane takes off against the wind, not with it', author: 'Henry Ford'},
{message: 'It\'s not the years in your life that count It\'s the life in your years', author: 'Abraham Lincoln'},
{message: 'Change your thoughts and you change your world', author: 'Norman Vincent Peale'},
{message: 'Either write something worth reading or do something worth writing', author: 'Benjamin Franklin'},
      {message: 'Nothing is impossible, the word itself says, ìI\'m possible!î', author: 'Audrey Hepburn'}];
    }

    function getTabs() {
      return [
        { title: 'Unified', icon: 'Brightness', content: 'unified' },
        { title: 'Canned', icon: 'Mail', content: 'canned' },
        { title: 'Analyse', icon: 'Mail', content: 'analyse' },
        { title: 'Quotes', icon: 'Message', content: 'quotes' },
        { title: 'Emoji', icon: 'Emoji', content: 'emoji' },
        { title: 'TLDR', icon: 'PreviewLink', content: 'tldr' },
      ];
    }

    function analyseContent(content) {
      var deferred = $q.defer();
      $http({
        method: 'POST',
        url: 'https://watson-api-explorer.mybluemix.net/alchemy-api/calls/text/TextGetEmotion?apikey=8d3ed7d77f71c7db6bb11e5f44ada2268569afc7&text=' + content + '&outputMode=json'
        // url: 'https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment',
        // headers: {
        //   'Ocp-Apim-Subscription-Key': '89dace7b092540ecaf2d366010e00edc',
        //   'Content-Type': 'application/json',
        //   'Accept': 'application/json'
        // },
        // data: {
        //   "documents": [
        //     {
        //       "language": "en",
        //       "id": new Date().getTime(),
        //       "text": content
        //     }
        //   ]
        // }
      }).then(function (xhr) {
        console.log(xhr);
        var emotions = xhr.data.docEmotions;
        console.log(emotions);
        var score = 0;
        var emotion;
        for (var i = 0; i < 5; i++) {
          var value = emotions[Object.keys(emotions)[i]];
          if (value > score) {
            score = value;
            emotion = Object.keys(emotions)[i];
          }
        }
        console.log(score, emotion);

        // deferred.resolve(xhr.data.documents[0].score * 100);
        deferred.resolve({emotion:emotion, score: Math.ceil(score*100)});
      }, function (xhr) {
        console.log("error");
        deferred.reject(xhr);
      });
      return deferred.promise;
    }

  }
})();

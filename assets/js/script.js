
// variable

const tweetSubmit = document.getElementById('form');
const tweetList = document.getElementById('tweet-list');
// events
tweetEvents();
function tweetEvents() {


    tweetSubmit.addEventListener('submit', newTweet);

    tweetList.addEventListener('click', removeTweet);

    document.addEventListener('DOMContentLoaded', localStorageOnload);
}



// functions
function newTweet() {

    const tweet = document.getElementById('tweet').value;



    if (tweet.length === 0) {
        const p = document.createElement('p');
        p.style.color = 'red';
        p.style.textAlign = 'center';
        p.style.fontSize = '2rem';
        p.textContent = 'Where is your tweet?';

        tweetSubmit.insertBefore(p, document.querySelector('.form-group'));

        setTimeout(() => {
            p.remove();
        }, 1000);

    } else {
        // create and <li> tag
        const li = document.createElement('li');

        li.classList = 'list-group-item';

        // create an <a> tag
        const removeBtn = document.createElement('a');
        removeBtn.classList = 'remove-tweet';
        removeBtn.textContent = 'X';

        li.textContent = tweet;

        li.appendChild(removeBtn);
        tweetList.appendChild(li);


        addTweetToLocalStorage(tweet);
    }






    this.reset();
}

function removeTweet(e) {

    if (e.target.classList.contains('remove-tweet')) {
        e.target.parentElement.remove()
    }

    removeTweetLocalstorage(e.target.parentElement.textContent);
}

function addTweetToLocalStorage(tweet) {
    const tweets = getTweetToLocalStorage();

    tweets.push(tweet);

    localStorage.setItem('tweet', JSON.stringify(tweets));
}


// add the tweet to the local storage
function getTweetToLocalStorage() {

    let tweet;

    if (localStorage.getItem('tweet') === null) {
        tweet = [];
    } else {
        tweet = JSON.parse(localStorage.getItem('tweet'));
    }

    return tweet;
}



function localStorageOnload() {
    const tweets = getTweetToLocalStorage();

    tweets.forEach(tweet => {


        // create and <li> tag
        const li = document.createElement('li');
        li.classList = 'list-group-item';
        // create an <a> tag
        const removeBtn = document.createElement('a');
        removeBtn.classList = 'remove-tweet';
        removeBtn.textContent = 'X';

        li.textContent = tweet;

        li.appendChild(removeBtn);
        tweetList.appendChild(li);


    });
}


function removeTweetLocalstorage(tweet) {
    const tweets = getTweetToLocalStorage();

    const tweetDelete = tweet.substring(0, tweet.length - 1);

    tweets.forEach((tweet, index) => {
        if (tweetDelete === tweet) {
            tweets.splice(index, 1);
        }
    });

    localStorage.setItem('tweet', JSON.stringify(tweets));

}






























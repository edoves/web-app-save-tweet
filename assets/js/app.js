//variables
const tweetList = document.querySelector('#tweet-list');

// Event Listeners


eventListener();
function eventListener() {
    document.querySelector('#form').addEventListener('submit', newTweet);

    tweetList.addEventListener('click', removeTweet);

    document.addEventListener('DOMContentLoaded', localStorageOnLoad);
}



// functions
function newTweet() {

    const tweet = document.querySelector('#tweet').value;

    const li = document.createElement('li');
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';

    li.textContent = tweet;

    li.appendChild(removeBtn);
    //Append to the dom
    tweetList.appendChild(li);

    addTweetLocalStorage(tweet);

    this.reset();

}


function removeTweet(e) {
    // e.preventDefault;
    const removetarget = e.target.classList.contains('remove-tweet');
    if (removetarget) {
        e.target.parentElement.remove();
    }

    // console.log(e.target.parentElement.textContent = '');
    removeTweetLocalstorage(e.target.parentElement.textContent);
}


function addTweetLocalStorage(tweet) {
    const tweets = getTweetsFromStorage();

    tweets.push(tweet);

    localStorage.setItem('tweets', JSON.stringify(tweets));
}


function getTweetsFromStorage() {
    let tweets;
    const tweetsLS = localStorage.getItem('tweets');
    if (tweetsLS === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(tweetsLS);
    }

    return tweets;
}


function localStorageOnLoad() {
    const tweets = getTweetsFromStorage();

    tweets.forEach((tweet) => {
        const li = document.createElement('li');
        const removeBtn = document.createElement('a');
        removeBtn.classList = 'remove-tweet';
        removeBtn.textContent = 'X';

        li.textContent = tweet;

        li.appendChild(removeBtn);
        //Append to the dom
        tweetList.appendChild(li);
    });
}


function removeTweetLocalstorage(tweet) {
    let tweets = getTweetsFromStorage();
    // console.log(tweets)

    const tweetDelete = tweet.substring(0, tweet.length - 1);


    tweets.forEach((tweetLS, index) => {
        if (tweetDelete === tweetLS) {
            tweets.splice(index, 1);
        }
    });

    localStorage.setItem('tweets', JSON.stringify(tweets));
}







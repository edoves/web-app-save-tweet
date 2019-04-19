

class Tweet_Project {

    constructor() {
        this.tweetList = document.querySelector('#tweet-list');
        this.newTweetItem = document.querySelector('#form');

    }

    newTweet() {

        const tweetList = document.querySelector('#tweet-list');
        // Grab the new tweet
        const tweet = document.querySelector('#tweet').value;


        // Create new <li> tag
        const li = document.createElement('li');


        // Create remove button
        const removeBtn = document.createElement('a');
        removeBtn.classList = 'remove-tweet';
        removeBtn.textContent = 'X';

        li.textContent = tweet;



        li.appendChild(removeBtn);
        // console.log(li);

        //   this.tweetList
        tweetList.appendChild(li);


        this.reset();

    }

    removeTweet(e) {

        const removeTarget = e.target.classList.contains('remove-tweet');
        if (removeTarget) {
            e.target.parentElement.remove()

        }
    }


    tweetEvent() {
        this.newTweetItem.addEventListener('submit', this.newTweet);

        this.tweetList.addEventListener('click', this.removeTweet);

    }


}
const tweet = new Tweet_Project();

tweet.tweetEvent();


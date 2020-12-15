
function Tweet(tweet){
    tweetNew = tweet.split(" ")
    let newTweets = []

    for (let i=0;i<tweetNew.length;i++){
        tweets = tweetNew[i]
        if (tweets.indexOf('#') == 0){
            newTweets.push(tweets.slice(1))
            };
            }; 
    return newTweets   
};
console.log(Tweet("У меня #лучшая девочка и зовут ее  "))
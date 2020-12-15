/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {   
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

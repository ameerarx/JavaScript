/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    let massage = tweet.toString()
    for (let i=0; i<massage.length; i++){
        if (i =='#'){
            return massage
        }
        else {
            massage.split(' ')
        }
    }

};

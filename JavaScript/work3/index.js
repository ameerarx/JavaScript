/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    let myObj = new Object();

    for (i=0;i<hashtags.length;i++){
       
        myObj[hashtags[i].toLowerCase()]=i
    }
    return Object.keys(myObj).join(", ")

};

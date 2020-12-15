/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval)  
{
    var min = (minutes + interval) % 60;
    var hrs = (hours + Math.floor((minutes + interval)/60)) % 24;
    return ((hrs / 10 >= 1) ? hrs : "0" + hrs) + ":" + ((min / 10 >= 1) ? min : "0" + min);}
  

function Dope (hashtags){let myObj = new Object();

    for (i=0;i<hashtags.length;i++){
       
        myObj[hashtags[i].toLowerCase()]=i
    }
    return Object.keys(myObj).join(", ")};
console.log(Dope(['web', 'coursera', 'JavaScript', 'Coursera', 'script', 'programming']))
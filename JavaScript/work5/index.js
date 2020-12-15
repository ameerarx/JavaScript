// Телефонная книга
var phone_book = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var commandNew = command.split(" ")
    var commandName = commandNew[0]
    
    if (commandName === 'ADD') {
               
        return addContact(command)
    
    }
    if (commandName === 'REMOVE_PHONE'){
        return removeContact(command)
    }
    if (commandName === 'SHOW'){
        return show()
    }
    function addContact(){
        var name  = commandNew[1]
        var values = commandNew[2].split(",")
        if (phone_book.hasOwnProperty(name)){
            var value = phone_book[name].split(", ")
            var newValue = value.concat(values).join(", ")
            phone_book[name]=newValue
            return;
        }
       
        phone_book[name]=values.join(", ")            
    }

    function removeContact(){
        var remove = commandNew[1]
        var copy ={}
        for (var name in phone_book){
        copy[name]=phone_book[name]
                      }
        for (var name in phone_book){
        if(phone_book[name]==remove){
            delete phone_book[name]
    }
    else if (phone_book[name].split(", ").indexOf(remove)!=-1){
        var newArray = phone_book[name].split(", ")
        for (var i=0; i<newArray.length; i++)
        {
            if(newArray[i] == remove){
                newArray.splice(i,1)
            }
        }
        phone_book[name]=newArray.join(", ")
    }
}
return JSON.stringify(phone_book)===JSON.stringify(copy) ? false:true
    }

function show(){
   a = []
   for (var neww in phone_book){
    var name = neww+": "+phone_book[neww]
    a.push(name)
    
        }
    return a.sort()   
}}
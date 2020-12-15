function Name(hash){
let massiveNew = []
for (let k = 0;k<hash.length;k++){
    massiveNew.push(hash[k].toLowerCase())
}
  for (let i = 0;i<massiveNew.length;i++){  
      console.log(i)
      console.log(massiveNew[i])      
      for(let j = i+1;j<massiveNew.length;j++){
        console.log(j)
        console.log(massiveNew[j])
        if(massiveNew[i]===massiveNew[j]){
            massiveNew.splice(j,1)
           }
       
        
    }}

    
}
console.log(Name(['web','web','web','coursera', 'JavaScript', 'Coursera', 'script', 'programming',"Script"]))
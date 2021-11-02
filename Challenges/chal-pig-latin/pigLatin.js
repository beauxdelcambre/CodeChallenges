// Write your solution below:
//CLARIFICATION:
//given a string full of words seperated by spaces
// ex: "a sentence with words in it"
// if word starts with bcdfghjklmnpqrstvwxyz, then i will remove the first letter from the front, then add that letter to the end, then add "ay"
//do that with every word individually 
// if word starts with aeiou then just add "yay" to the end of the word 

//psuedocode
//write a function which takes in a string 
//break the string into an array/list, removing the spaces
//loop through the array/list
    //if it starts with a consonant 
        //take the first letter off
        //add the first letter to the end 
        //add "ay" to the end
    //othrwise
        //add "yay" to the end
//turn the list back into a string addding back in the spaces i removed
//return the string 

function pigLatin(string){
    let stringIntoList = string.split(' ')
    let consonants = "bcdfghjklmnpqrstvwxyz"
    //console.log(stringIntoList)
    for (let i = 0; i < stringIntoList.length; i++){
        // console.log(stringIntoList[i])
        console.log(stringIntoList[i][0])
        if(consonants.includes(stringIntoList[i][0])){
           stringIntoList[i] = stringIntoList[i].slice(1) + stringIntoList[i][0] + "ay"
        //    console.log(fixedWord) 
        }else {
            stringIntoList[i] = stringIntoList[i] + "yay"
           
        }
        // console.log(stringIntoList)
    }
    let result = stringIntoList.join(' ')
    
    return result
}

console.log(pigLatin("break this string into pieces"))



// function translatePigLatain(str){
//     let firstVowel = str.search(/[aeiou]/);
    
//     return firstVowel === 0 ? str + "yay" : str.substr(firstVowel) + str.substr(0, firstVowel) + "ay";
// }

// console.log(translatePigLatain("Sorry but does this work or no"))



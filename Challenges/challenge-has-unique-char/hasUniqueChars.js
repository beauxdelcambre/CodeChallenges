// Write your code below
// let char = "Hello World"
function hasUniqueChars(char) {
    for(let i = 0; i < char.length; i++)
        for(let j = i + 1; j < char.length - 1; j++)
            if (char[i] === char[j]){

                return false;
                
                
            

            }
            return true;
}
console.log(hasUniqueChars("hello"))
console.log(hasUniqueChars("hola"))
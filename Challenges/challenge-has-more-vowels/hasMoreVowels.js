const vowels = ['a', 'e', 'i', 'o', 'u']

function hasMoreVowels(word){
  for(let i = 0; i < vowels.length; i++) {
    if(vowels.includes(word[i])) {
      counts++;
    }
  }
  return true
}
console.log()
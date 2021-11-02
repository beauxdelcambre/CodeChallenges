// Write your solution below:
const removeDup = string => {

    return string

      .split('')
      .filter(function(item, position, self) {
        return self.indexOf(item) === position;
      })
      .join('');
  }
  
  console.log(removeDup('helloworld'));
  console.log(removeDup('iwanttoclimbamountain'));
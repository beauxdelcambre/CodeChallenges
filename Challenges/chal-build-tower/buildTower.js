function towerBuilder(floors) {

    let space = "";
    let star = "";
    let result = [];

    for (let i = 1; i <= floors; i++) {
      space = (" ").repeat(floors - i);
      star = ("*").repeat((2 * i) - 1);
      result.push(space + star + space);
    }
    return result;
  }
  console.log(towerBuilder(6));
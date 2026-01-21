function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	 let result = "";

  for (let i = 0; i < 7; i++) {
    let [sym, val] = obj[i];

    // Handle subtractive cases correctly
    if (i === 0 || i === 1) { // M, D → use C (900, 400)
      let [smallSym, smallVal] = obj[2];
      if (num >= val - smallVal && num < val) {
        result += smallSym + sym;
        num -= (val - smallVal);
        continue;
      }
    }

    if (i === 2 || i === 3) { // C, L → use X (90, 40)
      let [smallSym, smallVal] = obj[4];
      if (num >= val - smallVal && num < val) {
        result += smallSym + sym;
        num -= (val - smallVal);
        continue;
      }
    }

    if (i === 4 || i === 5) { // X, V → use I (9, 4)
      let [smallSym, smallVal] = obj[6];
      if (num >= val - smallVal && num < val) {
        result += smallSym + sym;
        num -= (val - smallVal);
        continue;
      }
    }

    // Normal case
    while (num >= val) {
      result += sym;
      num -= val;
    }
  }

  return result;
}


// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

 console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman

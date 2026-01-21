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

    // C before M and D
    if (i === 0 || i === 1) {
      let [sSym, sVal] = obj[2];
      if (num >= val - sVal && num < val) {
        result += sSym + sym;
        num -= (val - sVal);
        continue;
      }
    }

    // X before C and L
    if (i === 2 || i === 3) {
      let [sSym, sVal] = obj[4];
      if (num >= val - sVal && num < val) {
        result += sSym + sym;
        num -= (val - sVal);
        continue;
      }
    }

    // I before X and V
    if (i === 4 || i === 5) {
      let [sSym, sVal] = obj[6];
      if (num >= val - sVal && num < val) {
        result += sSym + sym;
        num -= (val - sVal);
        continue;
      }
    }

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

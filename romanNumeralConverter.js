// FCC Project: RomanNumeralConverter

function convertToRoman(numb) {
  let num = numb;
  let romanNums = [
    { base: 1000, numerals: ['M', 'MM', 'MMM'] },
    { base: 100, numerals: ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'] },
    { base: 10, numerals: ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'] },
    { base: 1, numerals: ['I', 'II', 'III', 'IV', "V", 'VI', 'VII', 'VIII', 'IX'] }
    ];
  let arr = [];

  romanNums.map( (item) => {
    if(num >= item.base && num >= 10){
      console.log(num);
      let count = -1;
      do {
        num -= item.base;
        count ++;
      } while (num >= item.base);
      arr.push(item.numerals[count]);
      console.log('base: ' + item.base + ', count: ' + count + ', numeral: ' + item.numerals[count] + ', arr: ' + arr);
    } else if (num >= item.base && num < 10) {
      let count = -1;
      do {
        num -= item.base;
        count ++;
      } while (num > 0);
      arr.push(item.numerals[count]);
      console.log('base: ' + item.base + ', count: ' + count + ', numeral: ' + item.numerals[count] + ', arr: ' + arr);
    }      
  });

  let str = arr.join('');
  console.log('Roman Numeral = ' + str + '\n' + "('---------')" + '\n');
  return arr.join('');
  
}

convertToRoman(1000); //should return "M"

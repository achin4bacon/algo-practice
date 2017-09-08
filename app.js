function getHighestCCNumber(arr) {
    //set up variables to track highest sum and index
    var highestSum = 0,
        highestIndex,
        sum;
    //loop through array and get rid of dashes
    for (var i = 0; i < arr.length; i++) {
        var noDashes = arr[i].replace(/\-/g, '');
        console.log(`------------------------------------------------------`)
        console.log(`Credit card without dashes: ${noDashes}`)
        sum = 0;
        for (var j = 0; j < noDashes.length; j++) {
            sum += parseInt(noDashes.charAt(j), 10);
        }
        console.log(`Sum at array [${i}] = ${sum}`)
        //check if sum is higher than highest sum (starts at 0)
        if (sum >= highestSum) {
            highestSum = sum;
            console.log(`Highest sum at array[${i}] = ${highestSum}`)
            //highest index is equal to position of highest sum; if looped through and equal, it will be last index
            highestIndex = i;
            console.log(`Highest index at array[${i}] = ${highestIndex}`);
        }
    }
    //return array at position[highest index]
    return arr[highestIndex];
}
console.log(`******Highest CC Number = ${getHighestCCNumber(['4916-2600-1804-0530', '4779-252888-3972', '4252-278893-7978', '4556-4242-9283-2260'])}******`);


function allEqual(string) {
    if (string.length === 0) {
        return true;
    }
    for (var i = 0; i < string.length - 1; i++) {
        {
            if (string[i] === string[i + 1]) {
                return true;
            } else {
                return false;
            }
        }
    }
};

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumLetters that returns the sum of every character in the string

Example:

If you pass "45" it should return 9
If you pass "246" it should return 10
*/


function sumLetters(string) {
    if (string.length === 0) {
      return 0;
    } else {
     var stringArr = string.split('');
      var sum = 0;
      for (var i = 0; i < stringArr.length; i++) {
        sum = sum + parseInt(stringArr[i]);
      }
      return sum;
    }
  }
  
  
  
  
  
  /*
  ----------------------------------------
  CHALLENGE
  ----------------------------------------
  
  Write a function named countVowels that returns the number of vowels in a string, excluding "y"
  
  Example:
  
  If you pass "you" it should return 2
  */
  
  function countVowels (string) {
    var count = 0;
    for(var i = 0; i < string.length; i++){
      if(string[i] == 'a' || string[i] == 'i' || string[i] == 'o' ||string[i] == 'e' ||string[i] == 'u'){
        count+=1;
      }
    }
    return count;
  }
  
  
  
  
  
  /*
  ----------------------------------------
  CHALLENGE
  ----------------------------------------
  
  Write a function named split that takes a string and returns an array of the letters
  
  Example:
  
  If you pass "you" it should return ["y", "o", "u"]
  
  NOTE: do not use the builtin `split` method
  */
  
  
  function split (string){
    var newArray = []; 
    for (var i = 0; i < string.length; i++){
      newArray.push(string[i]);
    }
    return newArray;
  }
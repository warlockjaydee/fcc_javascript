
function confirmEnding(string, substring) {
  if(string.slice(string.length - substring.length) === substring)
    return "true";
  else
    return "false";
}

console.log(confirmEnding("Name is Jatin","Jatin"));


/*
function isLeapYear(year) {
  if(year % 4 == 0) {
    if(year % 100 == 0) {
      if(year % 400 == 0) {
        return `${year} is a leap year.`;
      }
    }
    else {
      return `${year} is not a leap year.`;
    }
  }    
}

let year = 2024;

let result = isLeapYear(year);

console.log(result);

*/


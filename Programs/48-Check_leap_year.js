//! program to check leap year
const checkLeapYear = (year) => {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    console.log(year + ": is a Leap Year");
  } else {
    console.log(year + ": is a not a Leap Year");
  }
};
const year = prompt("Enter a year");
checkLeapYear(year);

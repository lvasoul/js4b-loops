// use: while loop
// don't use: *, / and %
function getReminder(dividend, divider) {

  var result = '';

  while ( true ) {
      result = dividend - divider;
      if( result == 3 ) result -= 2;
      if( result <= 3 ) break;
  }

  return result;
  
}

// use: while loop
// don't use: *, / and %
function integerDivision(dividend, divider) {

  divider += 1;
  var result = '';

  while ( true ) {
      result = dividend - divider;
      if( result == -1 ) result += 2;
      if( result <= 3 ) break;
  }

  return result;
  
}

// * bank deposit calculator
function getDepositDuration2(initialDeposit, monthlyPercent, desiredDeposit) {
  var monthCounter = 0;

  return monthCounter;
}




function getDepositDuration(initialDeposit, monthlyPercent, desiredDeposit) {
  var monthCounter = 0;
  var percent = (monthlyPercent / 100).toFixed(2);
  var result = initialDeposit;

  while (result < desiredDeposit) {
    result += result * percent;
    ++monthCounter;
  }

  return monthCounter;
}


















var initialDeposit = 1000;
var monthlyPercent = 100;
var desiredDeposit = 5000;
async function getDepositDuration(initialDeposit, monthlyPercent, desiredDeposit) {
    var monthCounter = 0;
    var percent = (monthlyPercent / 100).toFixed(2);
    var result = initialDeposit;
  
    while (result < desiredDeposit) {
      result += result * percent;
      ++monthCounter;
    }
  
    return monthCounter;
}

getDepositDuration(initialDeposit, monthlyPercent, desiredDeposit).then( monthCounter => {
    monthCounter;
});
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


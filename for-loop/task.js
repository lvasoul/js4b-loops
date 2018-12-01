function listAll(min, max) {
  var result = '';
  for (let i = min; i <= max; i++) {
  	result += i + ' ';
  };
  return result.trim();
}

function listBetweenDesc(min, max) {
  var result = '';
  for (let i = max-1; i > min; i--) {
      result += i + ' ';
  }
  return result.trim();
}
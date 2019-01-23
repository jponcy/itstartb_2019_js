function multLog(a, b) {
  console.log(a * b);
}

function mult(a, b) {
  return a * b;
}

function maxIf(a, b) {
  var result = a;

  if (b > a) {
    result = b;
  }

  return result;
}

function maxIfElse(a, b) {
  var result;

  if (a > b) {
    result = a;
  } else {
    result = b;
  }

  return result;
}

function maxTer(a, b) {
  return a > b ? a : b;
}

function max(a, b) { return Math.max(a, b); }

function abs(a) { return Math.abs(a); }

function absIf(a) {
  var result = a;

  if (result < 0) {
    result *= -1;
  }

  return result;
}

function absIfElse(a) {
  var result;

  if (result >= 0) {
    result = a;
  } else {
    result = a * -1;
  }

  return result;
}

function absTer(a) {
  return a >= 0 ? a : a * -1;
}

function abs2(a) {
  return maxTer(a, a * -1);
}


function square2(a) { return Math.pow(a, 2); }

function squareSimple(a) {
  return a * a;
}

function squareEnix(a) {
  return a ** 2;
}

function limit(age) {
  var msg;

  if (age <= 0) {
    msg = 'T\'es vraiment un génie !';
  } else if (age < 18) {
    msg = 'Interdit aux mineurs';
  } else if (age < 110) {
    msg = 'Bienvenue';
  } else {
    msg = 'Bravo'
  }

  console.log(msg);
}

function limitIntervals(age) {
  var msg;

  if (age > 0 && age < 18) {
    msg = 'Interdit aux mineurs';
  } else if (age <= 0) {
    msg = 'T\'es vraiment un génie !';
  } else if (age < 110) {
    msg = 'Bienvenue';
  } else {
    msg = 'Bravo'
  }

  console.log(msg);
}

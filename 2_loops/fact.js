function fact(nb) {
  var result = 1;

  for (var i = nb; i >= 2; --i) {
    result *= nb;
  }

  return result;
}

function factWhile(nb) {
  var result = 1;

  while (nb > 1) {
    result *= nb;
    -- nb;
  }

  return result;
}

function factRecursive(nb) {
  var result;

  if (nb <= 1) {
    result = 1;
  } else {
    result = nb * factRecursive(nb - 1);
  }

  return result;
}

function factRecursive2(nb) {
  if (nb <= 1) {
    return 1;
  }

  return nb * factRecursive2(nb - 1);
}

function factRecursiveTern(nb) {
  return nb > 1 ? nb * factRecursiveTern(nb - 1) : 1;
}

function factRedStupid(nb) {
  var tab = [];

  for (var i = 1; i <= nb; ++ i) {
    tab.unshift(i);
  }

  tab.reduce((acc, e) => acc * e);
}

function factRed2(nb) {
  // return 'e'.repeat(nb).split('').map((_, i) => i + 1).reduce((acc, e) => acc * e);
  return 'e'.repeat(nb).split('').reduce((acc, _, i) => acc * i);
}

function factRedEs6(nb) {
  return [...Array(nb)].reduce((acc, _, i) => acc * i);
}

function factRed3(nb) {
  return new Array(nb).fill(null).reduce((acc, _, i) => acc * i);
}

// With lodash.
function factRed_(nb) {
  return _.range(1, nb).reduce((acc, _, i) => acc * i);
}

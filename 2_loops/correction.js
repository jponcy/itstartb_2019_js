function inverse(tab) {
  // for (var element of tab) { // Marche pas dans notre cas (on récupère une copie).

  // for (var i = 0; i < tab.length; ++ i) { // Fonctionne.
  // OU
  for (var i in tab) {
    if (tab[i] !== 0) {
      // tab[i] = tab[i] * -1;
      // tab[i] *= -1;
      tab[i] = -tab[i];
    }
  }

  return tab;
}

function inverse2(tab) {
  var result = [];

  for (var elt of tab) {
    result.push(elt === 0 ? 0 : elt * -1);
  }

  return result;
}

function inverse3(tab) {
  var result = new Array(tab.length);

  for (var i in tab) {
    var elt = tab[i];

    if (elt === 0) {
      result[i] = 0;
    } else {
      result[i] = elt * -1;
    }
  }

  return result;
}

function inverseMap(tab) {
  return tab.map(e => e === 0 ? 0 : e * -1);
}



function list(names) {
  var counter = 0;

  for (var name of names) {
    console.log((++counter) + ') ' + name);
  }
}

function list2(names) {
  // for (var counter = 0; counter < names.length; ++ counter) {
  for (var counter in names) {
    console.log(counter + ') ' + names[counter]);
  }
}

function listForEach(names) {
  names.forEach((name, index) => console.log((index + 1) + ') ' + name));
}



function impaire(tab) {
  var mult = 1;

  for (var value of tab) {
    // if (value % 2 === 1) {
    // OU
    if (value % 2) {
      // mult = mult || 1 * value;
      mult *= value;
    }
  }

  console.log('Le produit des éléments provenants de ' + tab.join(', ') + ' est de ' + mult);
}

function impaire2(tab) {
  // var tab2 = tab.filter(v => v % 2);
  // var mult = tab2.reduce((acc, e) => acc * e);
  // console.log(mult);

  // OU

  console.log(tab
    .filter(v => v % 2)
    .reduce((acc, e) => acc * e));
}
function hello() {
  console.log('Hello');
}

var helloYou = function (name) {
  console.log('Hello ' + (name || 'world'));
}

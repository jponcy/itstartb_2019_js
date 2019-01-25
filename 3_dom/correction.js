function createBtn(label) {
  var btn = document.createElement('button');

  btn.innerText = label;

  document.getElementById('dashboard').appendChild(btn);

  return btn;
}

function bonjour() { alert ('Bonjour'); }

function initBonjour() {
  var bonjourBtn = createBtn('bonjour');

  bonjourBtn.onclick = () => alert('Bonjour');
  // bonjourBtn.onclick = function () { alert('Bonjour'); }
  // bonjourBtn.onclick = bonjour;
}

function initThemeSelector() {
  var btn = createBtn('Change theme');

  // A le probleme de tester la valeur strictement (si on a plusieurs classes actives, ce test ne marche plus).
  // btn.onclick = () => document.body.className = document.body.className === 'dark' ? '' : 'dark';

  // Fonctionnent tres bien (mais on ne conserve pas les potentielles autre classes) :
  // btn.onclick = () => document.body.className = document.body.className.split(' ').includes('dark') ? '' : 'dark';
  // btn.onclick = () => document.body.className = document.body.className.search('dark') >= 0 ? '' : 'dark';

  btn.onclick = function () {
    var className = document.body.className;
    var classes = className.split(' ');
    var result = '';

    if (!classes.includes('dark')) {
      result = 'dark';
    }

    document.body.className = result;
  };
}

function initInputChange() {
  var input = document.createElement('input');
  var p = document.createElement('p');

  input.id = 'changeable';
  input.type = 'number';

  input.onchange = () => p.innerText = input.value;
  input.onkeypress = (event) => p.innerText = input.value + event.key;

  var container = document.getElementById('dashboard');
  container.appendChild(input);
  container.appendChild(p);
}

/**
 *
 * @param {HTMLElement} elt
 *    The HTML element whose will be adapted.
 * @param {string} className
 */
function toggleClass(elt, className) {
  if (elt.className.search(className) >= 0) {
    elt.className = '';
  } else {
    elt.className = className;
  }
}

function initChange() {
  var input = document.getElementById('changeable');

  if (!input)  {
    initInputChange();
    input = document.getElementById('changeable');
  }

  var p = input.querySelector('input[type="number"]#changeable + p');

  input.onmouseenter = () => toggleClass(p, 'focus');
  input.onmouseleave = () => toggleClass(p, 'focus');

  console.log(input, p)
}


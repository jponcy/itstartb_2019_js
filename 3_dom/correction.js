function createBtn(label) {
  var btn = document.createElement('button');

  btn.innerText = label;

  document.getElementById('dashboard').appendChild(btn);

  return btn;
}

function initBonjour() {
  var bonjourBtn = createBtn('bonjour');

  bonjourBtn.onclick = () => alert('Bonjour');
  // bonjourBtn.onclick = function () { alert('Bonjour'); }
}

function initThemeSelector() {
  var btn = createBtn('Change theme');

  btn.onclick = () => document.body.className = document.body.className === 'dark' ? '' : 'dark';
}

function initInputChange() {
  var input = document.createElement('input');
  var p = document.createElement('p');

  input.id = 'changable';
  input.type = 'number';

  input.onchange = () => p.innerText = input.value;

  var container = document.getElementById('dashboard');
  container.appendChild(input);
  container.appendChild(p);
}

function initChange() {
  var input = document.getElementById('changable');

  if (!input)  {
    initInputChange();
    input = document.getElementById('changable');
  }

  var p = input.querySelector('input[type="number"] + p');

  console.log({input, p})
}


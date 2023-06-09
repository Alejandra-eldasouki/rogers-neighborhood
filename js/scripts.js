function createRobogersList() {
  const numInput = document.getElementById('number-input').value;
  const resltContainer = document.getElementById('result');
  resltContainer.textContent = '';

  for (let i = 0; i <= numInput; i++) {
    const substitution = getSubstitution(i);
    resltContainer.textContent += substitution + ' ';
  }
}

function getSubstitution() {}

function createRobogersList() {
  const numInput = document.getElementById('number-input').value;
  const resltContainer = document.getElementById('result');
  resltContainer.textContent = '';

  for (let i = 0; i <= numInput; i++) {
    const substitution = getSubstitution(i);
    resltContainer.textContent += substitution + ' ';
  }
}

function getSubstitution(number) {
  if (containsDigit(number, 3)) {
    return "Won't you be my neighbor?";
  } else if (containsDigit(number, 2)) {
    return 'Boop!';
  } else if (containsDigit(number, 1)) {
    return 'Beep!';
  } else {
    return number;
  }
}

function containsDigit(number, digit) {
  return number.toString().includes(digit);
}

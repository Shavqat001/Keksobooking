let type = document.querySelector('#type'),
  priceField = document.querySelector('#price'),
  timeIn = document.querySelector('#timein'),
  timeOut = document.querySelector('#timeout');

type.addEventListener('change', () => {
  let selected = type.options[type.selectedIndex];

  if (selected.value == 'bungalow') {
    priceField.placeholder = 0;
  } else if (selected.value == 'flat') {
    priceField.placeholder = 1000;
  } else if (selected.value == 'hotel') {
    priceField.placeholder = 3000;
  } else if (selected.value == 'house') {
    priceField.placeholder = 5000;
  } else if (selected.value == 'palace') {
    priceField.placeholder = 10000;
  }
});

timeIn.addEventListener('change', () => {
  const selected = timeIn.value;
  timeOut.value = selected;
});

timeOut.addEventListener('change', () => {
  const selected = timeOut.value;
  timeIn.value = selected;
});

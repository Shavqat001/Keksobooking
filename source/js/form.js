let mainForm = document.querySelector('.ad-form'),
  rooms = document.querySelector('#room_number'),
  capacity = document.querySelector('#capacity'),
  capacityOptions = capacity.children,
  type = document.querySelector('#type'),
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
rooms.addEventListener('change', () => {
  let selected = rooms.options[rooms.selectedIndex].value;
  if (selected == 1) {
    capacityOptions[0].selected = true;
  } else if (selected == 2) {
    capacityOptions[1].selected = true;
  } else if (selected == 3) {
    capacityOptions[2].selected = true;
  } else if (selected == 100) {
    capacityOptions[3].selected = true;
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

mainForm.addEventListener('click', (evt) => {
  // evt.preventDefault();
})

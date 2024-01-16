
const author = {
  'avatar': `img/avatars/user0${1}.png`,
}

const location = {
  'x': 35.65000, // до 5.70000
  'y': 139.70000, // до 139.80000
}

const offer = {
  'title': 'Пустое название',
  'address': `${location.x}}, ${location.y}`,
  'price': 20000,
  'type': 'palace', // palace, flat, house или bungalow.
  'rooms': 6,
  'guests': 60,
  'checkin': '12:00', // 12:00, 13:00 или 14:00.
  'checkout': '14:00', // 12:00, 13:00 или 14:00.
  'features': ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
  'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum itaque, doloribus amet nihil minus quae accusamus animi optio at distinctio.',
  'photos': [
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
  ],
}

export { author, offer, location };

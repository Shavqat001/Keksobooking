import { offer } from './data.js';

let mapCanvas = document.querySelector('#map-canvas');

let offerTemplate = document.querySelector('#card').content,
  newItem = offerTemplate.querySelector('.popup');

const createNewItem = () => {
  let el = newItem.cloneNode(true),
    offerTitle = el.querySelector('.popup__title'),
    offerAddress = el.querySelector('.popup__text--address'),
    offerPrice = el.querySelector('.popup__text--price'),
    offerType = el.querySelector('.popup__type'),
    offerRooms = el.querySelector('.popup__text--capacity'),
    offerCheck = el.querySelector('.popup__text--time'),
    offerFeatures = el.querySelector('.popup__features'),
    offerDescription = el.querySelector('.popup__description'),
    offerPhoto = el.querySelector('.popup__photos'),
    offerPhotos = offerPhoto.children;

  offerTitle.textContent = offer['title'];
  offerAddress.textContent = offer['address'];
  offerPrice.innerHtml = `${offer['price']} <span>₽/ночь</span>`;
  offerRooms.textContent = `${offer['rooms']} комнаты для ${offer['guests']} гостей`;
  offerType.textContent = offer['type'];
  offerCheck.innerHtml = `Заезд после ${offer['checkin']}, выезд до ${offer['checkout']}`;

  offer['features'].forEach(el => {
    offerFeatures.textContent += ` ${el}`;
  });

  offerDescription.textContent = offer['description'];

  const addPicture = (photo, el) => {
    photo.src = el;
  }

  for (let i = 0; i < offerPhotos.length; i++) {
    addPicture(offerPhotos[i], offer['photos'][i]);
  }

  mapCanvas.append(el);
}

export { createNewItem }

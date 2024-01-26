function createCard(avatarIcon, titleText, addressText, priceText, typeText, roomsText, guestsText, checkinText, checkoutText, featuresText, descriptionText, photoSrc) {
  let classesToAdd = [
    'popup__feature--wifi',
    'popup__feature--dishwasher',
    'popup__feature--parking',
    'popup__feature--washer',
    'popup__feature--elevator',
    'popup__feature--conditioner',
  ];
  let popup = document.createElement('article');
  let avatar = document.createElement('img');
  let title = document.createElement('h3');
  let address = document.createElement('p');
  let price = document.createElement('p');
  let type = document.createElement('h4');
  let capacity = document.createElement('p');
  let time = document.createElement('p');
  let featureLists = document.createElement('ul');
  if (Array.isArray(featuresText)) {
    featuresText.forEach((el,i) => {
      let featureItems = document.createElement('li');
      featureItems.classList.add('popup__feature');

      featureItems.classList.add(classesToAdd[i]);
      featureItems.textContent = el;
      featureLists.append(featureItems);
    })
  }
  let description = document.createElement('p');
  let photos = document.createElement('div');

  popup.classList.add('popup');
  avatar.classList.add('popup__avatar');
  title.classList.add('popup__title');
  address.classList.add('popup__text');
  address.classList.add('popup__text--address');
  price.classList.add('popup__text');
  price.classList.add('popup__text--price');
  type.classList.add('popup__text');
  capacity.classList.add('popup__text');
  capacity.classList.add('popup__text--capacity');
  time.classList.add('popup__text');
  time.classList.add('popup__text--time');
  featureLists.classList.add('popup__features');
  description.classList.add('popup__description');
  photos.classList.add('popup__photos');

  avatar.src = avatarIcon;
  title.textContent = titleText;
  address.textContent = addressText;
  price.innerHtml = `${priceText} <span>₽/ночь</span>`;
  type.textContent = typeText;
  capacity.textContent = `${roomsText} комнаты для ${guestsText} гостей`;
  time.textContent = `Заезд после ${checkinText}, выезд до ${checkoutText}`;
  description.textContent = descriptionText;

  if (Array.isArray(photoSrc)) {
    for (let i = 0; i < photoSrc.length; i++) {
      let popupPhoto = document.createElement('img');
      popupPhoto.classList.add('popup__photo');
      popupPhoto.src = photoSrc[i];
      popupPhoto.width = 45;
      popupPhoto.height = 45;
      photos.append(popupPhoto);
    }
  }
  popup.append(
    avatar,
    title,
    address,
    price,
    type,
    capacity,
    time,
    featureLists,
    description,
    photos);

  return popup;
}

export {createCard}

import { fetchData } from './create-fetch.js';

const map = L.map('map-canvas')
  .setView({
    lat: 35.6706173007449,
    lng: 139.75430506380100,
  }, 13);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const createPopup = () => {
  const template = document.querySelector('#card').content.querySelector('.popup');
  return template.cloneNode(true);
}

fetchData().then(data => {
  data.forEach(el => {
    const { location, author, offer } = el;
    const { lat, lng } = location;
    const { avatar } = author;
    const { title } = offer;


    const icon = L.icon({
      iconUrl: avatar,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon,
      },
    );
    marker
      .addTo(map)
      .bindTooltip(title, {
        permanent: true, // чтобы подсказка отображалась всегда
        direction: title, // направление подсказки
      })
      .bindPopup(
        createPopup()
          .querySelector('.popup__avatar').title = title,
      );
  });
});

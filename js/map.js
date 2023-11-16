import { mapFilters } from './page-states.js';

const map = L.map('map-canvas')
  .on('load', () => {
    console.log('Карта инициализирована')
  })
  .setView({
    lat: 35.6806173007449,
    lng: 139.65030686583114,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const createPopup = () => {
  const template = document.querySelector('#card').content.querySelector('.popup');
  const popup = template.cloneNode(true);
  return popup;
}

const mainPinIcon = L.icon({
  iconUrl: './leaflet/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [0, 0],
});
let points = [
  {
    title: '',
    lat: 35.59273436758596,
    lng: 139.7307799528282,
  },
  {
    title: '',
    lat: 35.73304896983635,
    lng: 139.72016462578227,
  },
  {
    title: '',
    lat: 35.686304836222796,
    lng: 139.76834187929836,
  },
];

points.forEach((point) => {
  const { lat, lng } = point;

  const icon = L.icon({
    iconUrl: './leaflet/img/pin.svg',
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
    .bindPopup(
      createPopup(point),
    )
});

if (mapFilters.classList.contains('ad-form--disabled')) {
  mapFilters.classList.remove('ad-form--disabled');
  for (let el of mapFilters.children) {
    el.removeAttribute('disabled');
  }
}

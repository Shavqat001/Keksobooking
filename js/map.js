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

const mainPinIcon = L.icon({
  iconUrl: './leaflet/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [0, 0],
});
let points = [
  {
    lat: 35.59273436758596,
    lng: 139.7307799528282,
  },
  {
    lat: 35.73304896983635,
    lng: 139.72016462578227,
  },
  {
    lat: 35.686304836222796,
    lng: 139.76834187929836,
  },
];

points.forEach(({ lat, lng }) => {
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

  marker.addTo(map)
})

if (mapFilters.classList.contains('ad-form--disabled')) {
  mapFilters.classList.remove('ad-form--disabled');
  for (let el of mapFilters.children) {
    el.removeAttribute('disabled');
  }
}

import {fetchData} from './create-fetch.js';

const map = L.map('map-canvas')
  .setView(
    {
      lat: 35.6706173007449,
      lng: 139.75430506380100,
    }, 13);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainIcon = L.icon({
  iconUrl: '../leaflet/img/main-pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

L.marker(
  {
    lat: 35.6706173007449,
    lng: 139.75430506380100,
  },
  {
    icon: mainIcon,
  },
).addTo(map);

const createPopup = () => {
  const template = document.querySelector('#card').content.querySelector('.popup');
  return template.cloneNode(true);
};

fetchData().then(data => {
  data.slice(0, 10).forEach(el => {
    const {offer, location} = el;
    const {type} = offer;
    const [lat, lng] = Object.values(location);

    const pinIcon = L.icon(
      {
        iconUrl: '../leaflet/img/pin.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      },
    );

    const pinMarker = L.marker(
      {
        lat,
        lng,
      },
      {
        type: type,
        icon: pinIcon,
      },
    );

    pinMarker.addTo(map).bindPopup(createPopup());
  });
});

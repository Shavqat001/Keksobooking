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

const markers = [];

export {map, markers}

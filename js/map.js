// Import necessary modules or functions if required
import { fetchData } from './create-fetch.js';

// Create the map
const map = L.map('map-canvas')
  .setView({
    lat: 35.6706173007449,
    lng: 139.75430506380100,
  }, 13);

// Add the main tile layer
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

// Main icon
const mainIcon = L.icon({
  iconUrl: '../leaflet/img/main-pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

// Main marker
L.marker(
  {
    lat: 35.6706173007449,
    lng: 139.75430506380100,
  },
  {
    icon: mainIcon,
  },
).addTo(map);

// Function to create a popup template
const createPopup = () => {
  const template = document.querySelector('#card').content.querySelector('.popup');
  return template.cloneNode(true);
}

// Fetch data and add markers with pin icons
fetchData().then(data => {
  data.forEach(el => {
    const { location } = el;
    const { lat, lng } = location;

    // Pin icon
    const pinIcon = L.icon({
      iconUrl: '../leaflet/img/pin.svg', // Replace with your server endpoint
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    // Pin marker
    const pinMarker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon: pinIcon,
      },
    );

    pinMarker.addTo(map).bindPopup(createPopup());
  });
});

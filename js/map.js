import {fetchData} from './create-fetch.js';
import {checkHouseType, checkPriceRange, checkRooms, checkGuests} from './map-filters.js';
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

fetchData().then(data => {
  data.slice(0, 10).forEach(el => {
    const {offer, location} = el;
    const {type, price, rooms, guests} = offer;
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
        icon: pinIcon,
        type: type,
        price: price,
        rooms: rooms,
        guests: guests,
      },
    );
    pinMarker.addTo(map);
    markers.push(pinMarker);
  });

  let mapFilters = document.querySelector('.map__filters');
  let houseType = document.querySelector('#housing-type');
  let priceFilter = document.querySelector('#housing-price');
  let houseRooms = document.querySelector('#housing-rooms');
  let houseGuests = document.querySelector('#housing-guests');

  mapFilters.addEventListener('change', () => {
    let selectedType = houseType.options[houseType.selectedIndex].value;
    let selectedPrice = priceFilter.options[priceFilter.selectedIndex].value;
    let selectedRooms = houseRooms.options[houseRooms.selectedIndex].value;
    let selectedGuests = houseGuests.options[houseGuests.selectedIndex].value;

    markers.forEach(marker => {
      const markerType = marker.options.type;
      const markerPrice = marker.options.price;
      const markerRooms = marker.options.rooms;
      const markerGuests = marker.options.guests;
      if (
        checkHouseType(selectedType, markerType) &&
        (selectedPrice === 'any' || checkPriceRange(selectedPrice, markerPrice)) &&
        (selectedRooms === 'any' || checkRooms(selectedRooms, markerRooms)) &&
        (selectedGuests === 'any' || checkGuests(selectedGuests, markerGuests))
      ) {
        marker.addTo(map);
      } else {
        marker.remove();
      }
    });
  });
});

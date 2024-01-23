import {fetchData} from './create-fetch.js';
import {checkGuests, checkHouseType, checkPriceRange, checkRooms} from './map-filters.js';
import {map, markers} from './map.js';
import {createCard} from './create-card.js';

fetchData().then(data => {
  console.log(data)
  data.slice(0, 10).forEach(el => {
    const {author, offer, location} = el;
    const {avatar} = author;
    const {
      title,
      address,
      price,
      type,
      rooms,
      guests,
      checkin,
      checkout,
      features,
      description,
      photos } = offer;

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
        features: features,
      },
    );

    markers.push(pinMarker);
    pinMarker.bindPopup(createCard(
      avatar, title, address, price, type,
      rooms, guests, checkin, checkout,
      features, description, photos))
    pinMarker.addTo(map);
  });

  let mapFilters = document.querySelector('.map__filters');
  let houseType = document.querySelector('#housing-type');
  let priceFilter = document.querySelector('#housing-price');
  let houseRooms = document.querySelector('#housing-rooms');
  let houseGuests = document.querySelector('#housing-guests');
  let housingFeatures = document.querySelector('#housing-features');
  let checkFeatures = housingFeatures.querySelectorAll('input[type="checkbox"]');

  mapFilters.addEventListener('change', () => {
    let selectedType = houseType.options[houseType.selectedIndex].value;
    let selectedPrice = priceFilter.options[priceFilter.selectedIndex].value;
    let selectedRooms = houseRooms.options[houseRooms.selectedIndex].value;
    let selectedGuests = houseGuests.options[houseGuests.selectedIndex].value;

    let markersToRemove = [];

    markers.forEach(marker => {
      if (!marker.closePopup()) {
        marker.closePopup();
      }

      const markerType = marker.options.type;
      const markerPrice = marker.options.price;
      const markerRooms = marker.options.rooms;
      const markerGuests = marker.options.guests;
      const markerFeatures = marker.options.features;

      if (Array.isArray(markerFeatures)) {
        let hasAllFeatures = true;
        for (let i = 0; i < checkFeatures.length; i++) {
          if (checkFeatures[i].checked && !markerFeatures.includes(checkFeatures[i].value)) {
            hasAllFeatures = false;
            break;
          }
        }

        if (!hasAllFeatures) {
          markersToRemove.push(marker);
        }
      }

      if (
        checkHouseType(selectedType, markerType) &&
        (selectedPrice === 'any' || checkPriceRange(selectedPrice, markerPrice)) &&
        (selectedRooms === 'any' || checkRooms(selectedRooms, markerRooms)) &&
        (selectedGuests === 'any' || checkGuests(selectedGuests, markerGuests))
      ) {
        marker.addTo(map);
      } else {
        markersToRemove.push(marker);
      }
    });

    markersToRemove.forEach(marker => {
      marker.remove();
    });
  });
});


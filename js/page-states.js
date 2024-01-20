import {fetchData} from './create-fetch.js';

// let mapFilters = document.querySelector('.map__filters');
let houseType = document.querySelector('.leaflet-marker-pane');

// let types = houseType.children;
console.log(houseType)
fetchData().then(data => {
  data.forEach(el => {
    const { offer } = el;
    const { type } = offer;

    // for (const typeElement of types) {
    //   typeElement.type = type;
    // }
  });
});

// export { mapFilters }

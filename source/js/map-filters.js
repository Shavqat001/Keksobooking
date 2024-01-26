function checkPriceRange(selectedPrice, markerPrice) {
  switch (selectedPrice) {
    case 'low':
      return markerPrice <= 10000;
    case 'middle':
      return markerPrice > 10000 && markerPrice <= 50000;
    case 'high':
      return markerPrice > 50000;
    default:
      return true;
  }
}

function checkHouseType(selectedType, markerType) {
  return selectedType === 'any' || selectedType === markerType;
}

function checkRooms(selectedRoom, markerRoom) {
  return selectedRoom === 'any' || parseInt(selectedRoom) === markerRoom;
}

function checkGuests(selectedGuest, markerGuest) {
  return selectedGuest === 'any' || parseInt(selectedGuest) === markerGuest;
}

function getFeatures(markersToRemove, markerFeatures, checkFeatures, marker) {
  if (Array.isArray(markerFeatures)) {
    let hasAllFeatures = true;
    for (let i = 0; i < checkFeatures.length; i++) {
      const featureCheckbox = checkFeatures[i];
      if (featureCheckbox.checked && !markerFeatures.includes(featureCheckbox.value)) {
        hasAllFeatures = false;
        break;
      }
    }

    if (!hasAllFeatures) {
      markersToRemove.push(marker);
    }
  }
}

export {checkPriceRange, checkHouseType, checkRooms, checkGuests, getFeatures};

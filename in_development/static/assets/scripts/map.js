function initMap() {
  let options = {
    zoom: 8,
    center: { lat: 52.3324, lng: 1.0585 },
  }
  let map = new google.maps.Map(document.getElementById('map'), options)
  const marker = new google.maps.Marker({ position: { lat: 52.3324, lng: 1.0585 }, map: map })
}

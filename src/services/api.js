const ACCESS_TOKEN_MAP_BOX =
  'pk.eyJ1IjoidGF5bG9yYnlrcyIsImEiOiJja2c3N2t1MTEwMG9tMnhtaHRya2FnOG8xIn0.MbZsKNHOGYQqZU4KJaT3lA'

export const fetchLocalMapBox = (local) =>
  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?${ACCESS_TOKEN_MAP_BOX}`)
    .then((response) => response.json())
    .then((data) => data)

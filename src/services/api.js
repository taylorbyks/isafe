import React from 'react'

export const fetchLocalMapBox = (local) =>
  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?${ACCESS_TOKEN_MAP_BOX}`)
    .then((response) => response.json())
    .then((data) => data)

export const data = [
  {
    latitude: -24.95,
    longitude: -53.45
  },
  {
    latitude: -24.96,
    longitude: -53.46
  },
  {
    latitude: -24.97,
    longitude: -53.44
  },
  {
    latitude: -24.975,
    longitude: -53.47
  }
]

export const retrieveGeoLocation = (position) => {
    if (!position) {
        return { lon: null, lat: null }
    }
    const geoLocations = position.split(',')
    const lon = parseFloat(geoLocations[0])
    const lat = parseFloat(geoLocations[1])
    return { lon, lat }
}

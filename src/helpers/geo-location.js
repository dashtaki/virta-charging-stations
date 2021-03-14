export const retrieveGeoLocation = (position) => {
    if (!position) {
        return null
    }
    const geoLocations = position.split(',')
    const lng = parseFloat(geoLocations[0])
    const lat = parseFloat(geoLocations[1])
    return { lng, lat }
}

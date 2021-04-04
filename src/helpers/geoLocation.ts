export const retrieveGeoLocation = (
    position: string
): { lon: number; lat: number } => {
    if (!position) {
        return { lon: 0, lat: 0 }
    }
    const geoLocations: string[] = position.split(',')
    const lon: number = parseFloat(geoLocations[0])
    const lat: number = parseFloat(geoLocations[1])
    return { lon, lat }
}

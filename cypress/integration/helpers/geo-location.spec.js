const { retrieveGeoLocation } = require('../../../src/helpers/GeoLocation')
describe('GeoLocation.js', () => {
    it('should return null if position is null or undefined', () => {
        const actual = retrieveGeoLocation()

        expect(actual).to.be.null
    })

    it('should return latitude and longitude of position', () => {
        const expected = { lng: 60.467149, lat: 22.027585 }
        const position = '60.467149,22.027585'
        const actual = retrieveGeoLocation(position)

        expect(actual).to.deep.eq(expected)
    })
})

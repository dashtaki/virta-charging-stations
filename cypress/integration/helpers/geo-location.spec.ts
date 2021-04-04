describe("GeoLocation.js", () => {
  const { retrieveGeoLocation } = require("../../../src/helpers/geoLocation")

  it("should return null if position is null or undefined", () => {
    const actual = retrieveGeoLocation()

    expect(actual).to.deep.eq({ lon: 0, lat: 0 })
  })

  it("should return latitude and longitude of position", () => {
    const expected = { lon: 60.467149, lat: 22.027585 }
    const position = "60.467149,22.027585"
    const actual = retrieveGeoLocation(position)

    expect(actual).to.deep.eq(expected)
  })
})

export {}

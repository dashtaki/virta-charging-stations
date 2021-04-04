export const getAllStations = () => {
    cy.intercept(
        {
            method: 'GET',
            url: 'https://api.test.virtaglobal.com/stations',
        },
        { fixture: '../fixtures/all_stations.json' }
    )
}

export const getStationsForWindowing = () => {
    cy.intercept(
        {
            method: 'GET',
            url: 'https://api.test.virtaglobal.com/stations',
        },
        { fixture: '../fixtures/45_stations_for_windowing.json' }
    )
}

export const getStation = () => {
    cy.intercept(
        {
            method: 'GET',
            url: 'https://api.test.virtaglobal.com/stations/101',
        },
        { fixture: '../fixtures/station.json' }
    )
}

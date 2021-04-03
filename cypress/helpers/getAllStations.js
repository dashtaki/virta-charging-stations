export const getAllStations = () => {
    cy.intercept(
        {
            method: 'GET',
            url: 'https://api.test.virtaglobal.com/stations',
        },
        { fixture: '../fixtures/all_stations.json' }
    )
}

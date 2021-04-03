import { getAllStations } from '../../helpers/getAllStations'
import * as apollo from '@apollo/react-hooks'

describe('spinner', () => {
    it('should show title as "Your stations"', () => {
        // getAllStations()
        // cy.stubGraphQL('../fixtures/all_stations.json')
        // cy.stub(apollo, 'useQuery')
        //     .callThrough().returns({data: 'test'})
        cy.visit('/')
        cy.get('h1').should('contain', 'Your stations')
    })

    it('should station name', () => {
        cy.get('ul li:first-child strong').should('contain', 'Endesa')
    })

    it('should put offline icon for offline station', () => {
        cy.get('ul li span:nth-child(2) img').should(
            'have.attr',
            'src',
            '../offline_icon.png'
        )
    })

    it('should show offline text for offline station', () => {
        cy.get('ul li span:nth-child(2) p').should('contain', 'Offline')
    })

    it('should put available icon for available station', () => {
        cy.get('ul li:nth-child(4) span:nth-child(2) img').should(
            'have.attr',
            'src',
            '../available_icon.png'
        )
    })

    it('should show available text for available station', () => {
        cy.get('ul li:nth-child(4) span:nth-child(2) p').should(
            'contain',
            'Available'
        )
    })

    it('should set "station-availability__text" for text availability', () => {
        cy.get('ul li span:nth-child(2) p').should(
            'have.class',
            'station-availability__text'
        )
    })

    it('should go to station detail on click', () => {
        cy.get('ul li:first-child').click()

        cy.location().should((location) => {
            expect(location.pathname).to.eq('/station/101')
        })
    })
})

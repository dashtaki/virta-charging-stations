import { getAllStations, getStation } from '../../helpers/getAllStations'

describe('Station', () => {
    it('should show image for back button', () => {
        getStation()
        cy.visit('/station/101')

        cy.get('.back-button').should(
            'have.attr',
            'src',
            '../backButton_icon.png'
        )
    })

    it('should go back to main page', () => {
        getAllStations()
        cy.get('.back-button').click()

        cy.location().should((location) => {
            expect(location.pathname).to.eq('/')
        })
    })

    it('should show offline icon', () => {
        getStation()
        cy.get('.stations-list__wrapper div div:first-child div').click()

        cy.get('.station-availability__icon').should(
            'have.attr',
            'src',
            '../offline_icon.png'
        )
    })

    it('should show Is connected as "Yes"', () => {
        cy.get('.station-detail__value:nth-child(3)').should('contain', 'Yes')
    })

    it('should show currency as "EUR"', () => {
        cy.get('.station-detail__value:nth-child(4)').should('contain', 'EUR')
    })

    it('should show free usage as "Yes"', () => {
        cy.get('.station-detail__value:nth-child(5)').should('contain', 'Yes')
    })

    it('should shoe station error', () => {
        cy.get('.station__error').should('contain', 'Station not available')
    })

    it('should show map', () => {
        cy.get('.position__wrapper .map__no-position-provided').should(
            'have.length',
            0
        )
    })

    it('should show specific text when position not provided', () => {
        cy.visit('/station/101')

        cy.get('.map__no-position-provided').and(
            'contain',
            'There is no position provided!'
        )
    })

    it('should show specific view when station id is not exist', () => {
        cy.visit('/station/de4001')

        cy.get('h2').should(
            'contain',
            'Opps! Station does not exist. See the stations list '
        )
    })

    it('should go to stations list in not exist station page', () => {
        getAllStations()
        cy.get('a').click()
        cy.location().should((location) => {
            expect(location.pathname).to.eq('/')
        })
    })

    it('should show date and time', () => {
        getAllStations()
        cy.visit('/')
        getStation()
        cy.get('.stations-list__wrapper div div:first-child div').click()

        cy.get('.station-detail__value:nth-child(2)').should(
            'contain',
            '22/02/2019, 15:35:48'
        )
    })
})

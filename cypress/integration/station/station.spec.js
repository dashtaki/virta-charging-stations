describe('Station', () => {
    it('should show image for back button', () => {
        cy.visit('/station/101');

        cy.get('.station-detail__header').within(_ => {
            cy.get('img')
                .should('have.attr', 'src', '../backButton_icon.png')
        })
    });

    it('should go back to main page', () => {
        cy.visit('/station/101');

        cy.get('.station-detail__header').within(_ => {
            cy.get('img').click();
            cy.location().should((location) => {
                expect(location.pathname).to.eq('/')
            });
        })
    });

    it('should offline icon', () => {
        cy.visit('/station/101');

        cy.get('.station-availability__icon')
            .should('have.attr', 'src', '../offline_icon.png')
    });

    it('should show date and time', () => {
        cy.visit('/station/101');

        cy.get('.station-detail__value:nth-child(2)')
            .should('contain', '22/02/2019, 15:35:48')
    });

    it('should show Is connected as "Yes"', () => {
        cy.visit('/station/101');

        cy.get('.station-detail__value:nth-child(3)')
            .should('contain', 'Yes')
    });

    it('should show map', () => {
        cy.visit('/station/101');

        cy.get('.station-detail + div').within(_ => {
            cy.get('div')
                .should('not.have.class', 'map__no-position-provided')
        })
    });

    it('should show specific text when position not provided', () => {
        cy.visit('/station/401');

        cy.get('.station-detail + div').within(_ => {
            cy.get('div')
                .should('have.class', 'map__no-position-provided')
                .and('contain', 'There is no position provided!')
        })
    });

    it('should show specific view when station id is not exist', () => {
        cy.visit('/station/4001');

        cy.get('h2')
            .should('contain', 'Opps! Station does not exist. See the stations list ')
    });

    it('should go to stations list in not exist station page', () => {
        cy.visit('/station/4001');

        cy.get('a').click();
        cy.location().should((location) => {
            expect(location.pathname).to.eq('/')
        })
    });
})

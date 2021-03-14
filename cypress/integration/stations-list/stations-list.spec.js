describe('spinner', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('should show title as "Your stations"', () => {
        cy.get('h1')
            .should('contain', 'Your stations');
    });

    it('should show all stations', () => {
        cy.get('ul').get('li').should('have.length', 27);
    });

    it('should put offline icon for offline station', () => {
        cy.get('ul').within(_ => {
            cy.get('li').within(_ => {
                cy.get('span:nth-child(2)').within(_ => {
                    cy.get('img')
                        .should('have.attr', 'src', '../offline_icon.png');
                })
            })
        })
    });

    it('should put available icon for available station', () => {
        cy.get('ul').within(_ => {
            cy.get('li:nth-child(4)').within(_ => {
                cy.get('span:nth-child(2)').within(_ => {
                    cy.get('img')
                        .should('have.attr', 'src', '../available_icon.png');
                })
            })
        })
    });

    it('should set "station-availability__text" for text availability', () => {
        cy.get('ul').within(_ => {
            cy.get('li').within(_ => {
                cy.get('span:nth-child(2)').within(_ => {
                    cy.get('p')
                        .should('have.class', 'station-availability__text');
                })
            })
        })
    });

    it('should go to station detail on click', () => {
        cy.get('ul').within(_ => {
            cy.get('li:first-child').click();
            cy.location().should((location) => {
                expect(location.pathname).to.eq('/station/101')
            });
        });
    });
})

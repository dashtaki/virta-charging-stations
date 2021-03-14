describe('spinner', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('should show title as "Your stations"', () => {
        // cy.intercept('GET', '**/', { fixture: 'example.json' }).as('/')
        // cy.intercept('/', [
        //     {
        //         "station_ID": 101,
        //         "custom_evse_id": null,
        //         "location_ID": 101,
        //         "seller_ID": 27,
        //         "name": "Endesa",
        //         "connected": 1,
        //         "position": "60.868623,26.702901",
        //         "available": 0,
        //         "lastconnect": "2019-02-22T13:35:48.000Z",
        //         "roaming_identifier_cpo": "FI*001"
        //     }]
        // );

        cy.intercept({
                method: 'GET',
                url: '**/',
                headers: {'content-type': 'application/json',}
            },
            [
                {
                    "station_ID": 101,
                    "custom_evse_id": null,
                    "location_ID": 101,
                    "seller_ID": 27,
                    "name": "Endesa",
                    "connected": 1,
                    "position": "60.868623,26.702901",
                    "available": 0,
                    "lastconnect": "2019-02-22T13:35:48.000Z",
                    "roaming_identifier_cpo": "FI*001"
                }
            ]
        ).as('getStations')

        cy.get('h1')
            .should('contain', 'Your stations');
    });

    it('should set "station-name" class name for station name', () => {
        cy.get('ul').within(_ => {
            cy.get('li').within(_ => {
                cy.get('span')
                    .should('have.class', 'station-name');
            })
        })
    });

    it('should show all stations', () => {
        cy.get('ul').get('li').should('have.length', 27);
    });

    it('should set "station-availability" class name for station availability', () => {
        cy.get('ul').within(_ => {
            cy.get('li').within(_ => {
                cy.get('span:nth-child(2)')
                    .should('have.class', 'station-availability');
            })
        })
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

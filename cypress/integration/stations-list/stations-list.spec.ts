import {
  getAllStations,
  getStationsForWindowing,
} from "../../helpers/getAllStations"

describe("spinner", () => {
  it('should show title as "Your stations"', () => {
    getAllStations()
    cy.visit("/")

    cy.get("h1").should("contain", "Your stations")
  })

  it("should station name", () => {
    cy.get(".stations-list__wrapper div div:first-child strong").should(
      "contain",
      "Endesa"
    )
  })

  it("should put offline icon for offline station", () => {
    cy.get(".stations-list__wrapper div div span:nth-child(2) img").should(
      "have.attr",
      "src",
      "../offline_icon.png"
    )
  })

  it("should show offline text for offline station", () => {
    cy.get(".stations-list__wrapper div div span:nth-child(2) p").should(
      "contain",
      "Offline"
    )
  })

  it("should put available icon for available station", () => {
    cy.get(
      ".stations-list__wrapper div div:nth-child(2) span:nth-child(2) img"
    ).should("have.attr", "src", "../available_icon.png")
  })

  it("should show available text for available station", () => {
    cy.get(
      ".stations-list__wrapper div div:nth-child(2) span:nth-child(2) p"
    ).should("contain", "Available")
  })

  it('should set "station-availability__text" for text availability', () => {
    cy.get(".stations-list__wrapper div div span:nth-child(2) p").should(
      "have.class",
      "station-availability__text"
    )
  })

  it("should go to station detail on click", () => {
    cy.get(".stations-list__wrapper div div:first-child").click()

    cy.location().should((location) => {
      expect(location.pathname).to.eq("/station/101")
    })
  })

  it("should show limited stations based on windowing", () => {
    getStationsForWindowing()
    cy.visit("/")

    cy.get(".stations-list__wrapper div div").should("have.length", "26")
  })
})

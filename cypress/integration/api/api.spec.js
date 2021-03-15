import { getAllTransactions } from '../../../src/API/API'
import axios from 'axios'

describe('API', () => {
    it('should get all stations', () => {
        const spy = cy.spy(axios, 'get').as('anyArgs')
        getAllTransactions()

        expect(spy).to.be.calledWith('http://localhost:3000/stations-data.json')
    })
})

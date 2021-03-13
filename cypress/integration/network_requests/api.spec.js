import {getAllTransactions} from '../../../src/API/api';
import axios from "axios";

describe('API', () => {
    it('should get all stations', () => {
        const spy = cy.spy(axios, 'get').as('anyArgs')
        getAllTransactions();

        expect(spy).to.be.calledWith('stations-data.json')
    });
});

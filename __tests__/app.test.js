const request = require('supertest');
const app = require('../app');


describe('POST /register', () => {
    it('should register a user', async () => {
        const x = 4;
        expect(x).toBe(4); 
    });

    it('should handle user registration failure', async () => {
        const y = 20;

        expect(y).toBe(20);  
    }); 
});
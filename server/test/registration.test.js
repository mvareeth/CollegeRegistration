const request = require('supertest');
const expect = require('chai').expect;
const app = require('../app');

describe('api/v1', () => {
    beforeEach(async () => {
        //await User.deleteMany({});
    });

    describe('GET /Academic years', () => {
        it('should return all acadedmic years based on college id', async () => {
            const res = await request(app).get('/api/v1/registration/academicyears/1');
            const jsonKey = 'academicYearList';
            expect(res.status).to.equal(200);
            // console.log(res.body[jsonKey]);
            expect(res.body[jsonKey].length).to.equal(1);
        });
    });

    describe('GET /Courses By College', () => {
        it('should return all courses in this college', async () => {
            const res = await request(app).get('/api/v1/registration/coursesByCollege/1');
            const jsonKey = 'coursesByCollege';
            expect(res.status).to.equal(200);
            expect(res.body[jsonKey].length).to.greaterThan(1);
        });
    });

    describe('GET /All courses', () => {
        it('should return all courses', async () => {
            const res = await request(app).get('/api/v1/registration/courses');
            const jsonKey = 'courses';
            expect(res.status).to.equal(200);
            expect(res.body[jsonKey].length).to.greaterThan(1);
        });
    });

    describe('GET /All Security Questions', () => {
        it('should return all security questions', async () => {
            const res = await request(app).get('/api/v1/registration/securityQuestions');
            const jsonKey = 'securityQuestions';
            expect(res.status).to.equal(200);
            expect(res.body[jsonKey].length).to.greaterThan(1);
        });
    });

    describe('GET /All Reservation Quotas', () => {
        it('should return all Reservation Quotas', async () => {
            const res = await request(app).get('/api/v1/registration/reservationQuotas');
            const jsonKey = 'reservationQuotas';
            expect(res.status).to.equal(200);
            expect(res.body[jsonKey].length).to.greaterThan(1);
        });
    });

    describe('GET /All Cities', () => {
        it('should return all City', async () => {
            const res = await request(app).get('/api/v1/registration/city');
            const jsonKey = 'city';
            expect(res.status).to.equal(200);
            expect(res.body[jsonKey].length).to.greaterThan(1);
        });
    });
    describe('GET /All States', () => {
        it('should return all state', async () => {
            const res = await request(app).get('/api/v1/registration/state');
            const jsonKey = 'state';
            expect(res.status).to.equal(200);
            expect(res.body[jsonKey].length).to.greaterThan(1);
        });
    });
    describe('GET /All Countries', () => {
        it('should return all country', async () => {
            const res = await request(app).get('/api/v1/registration/country');
            const jsonKey = 'country';
            expect(res.status).to.equal(200);
            expect(res.body[jsonKey].length).to.greaterThan(1);
        });
    });
});
import { createServer } from '../src/app/http/app'
import { Application } from 'express'
import request from 'supertest';

let app: Application;

//Avant toute chose, on attend la création de notre serveur
beforeAll(async () => {
    app = await createServer();
});

describe('GET /', () => {
    it('should return 200 & valid response with Hello world !', async (done) => {
        request(app)
            .get(`/api/v2/`)
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toMatch('hello World');
                done();
            });
    });
});

describe('POST /', () => {
    it('should return test', async (done) => {
        request(app)
            .post(`/api/v2/`)
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toMatch('test');
                done();
            });
    });
});
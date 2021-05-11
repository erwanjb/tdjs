import express, { Application } from 'express';
import router from './router';
import {API_BASE_URL} from '../../constants';

export const createServer = async () : Promise<Application> => {
    const app: Application = express();

    app.use(API_BASE_URL, router);

    app.listen(4000, () => {
        console.log('App listening on port 4000')
    })

    return app;
}
import express, { Application } from 'express';
import router from './router';
import {API_BASE_URL} from '../../constants';

//Documentation
import swaggerConfig from '../../middleware/documentation/swagger.json'
import swaggerUi from 'swagger-ui-express'

export const createServer = async () : Promise<Application> => {
    const app: Application = express();

    app.use(API_BASE_URL, router);

    app.use(`${API_BASE_URL}documentation/`, swaggerUi.serve, swaggerUi.setup(swaggerConfig));

    app.listen(4000, () => {
        console.log('App listening on port 4000')
    })

    return app;
}
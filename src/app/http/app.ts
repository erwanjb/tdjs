import express, { Application } from 'express';
import router from './router';
import {API_BASE_URL} from '../../constants';
import skillRouter from '../../modules/skill/skillRouter';
import categoryRouter from '../../modules/category/categoryRouter';
import levelRouter from '../../modules/level/levelRouter';
import progressionRouter from '../../modules/progression/progressionRouter';
import userRouter from '../../modules/user/userRouter';

//Documentation
import swaggerConfig from '../../middleware/documentation/swagger.json'
import swaggerUi from 'swagger-ui-express'

export const createServer = async () : Promise<Application> => {
    const app: Application = express();
    app.use(express.json())
    app.use(API_BASE_URL, router);

    app.use(`${API_BASE_URL}documentation/`, swaggerUi.serve, swaggerUi.setup(swaggerConfig));

    app.use(`${API_BASE_URL}skill/`, skillRouter);

    app.use(`${API_BASE_URL}category/`, categoryRouter);

    app.use(`${API_BASE_URL}level/`, levelRouter);

    app.use(`${API_BASE_URL}user/`, userRouter);

    app.use(`${API_BASE_URL}progression/`, progressionRouter);

    app.listen(4000, () => {
        console.log('App listening on port 4000')
    })

    return app;
}
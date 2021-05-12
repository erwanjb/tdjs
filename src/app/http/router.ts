import { Router, Request, Response, NextFunction } from 'express';

const v1Router: Router = Router();

v1Router.get('/', (_req: Request, res: Response, _next: NextFunction) => {
    

    res.status(200).json('hello World')
})

v1Router.post('/', (_req: Request, res: Response, _next: NextFunction) => {
    

    res.status(200).json('test')
})


export default v1Router;
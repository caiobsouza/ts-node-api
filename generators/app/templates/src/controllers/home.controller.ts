import { Router, Request, Response, NextFunction } from 'express';

export class HomeController {
    router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    get(req: Request, res: Response, next: NextFunction) {
        res.json('OK');
    }

    private initializeRoutes() {
        this.router.get('/', this.get.bind(this));
    }
}
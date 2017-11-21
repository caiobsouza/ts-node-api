import { Router, Request, Response, NextFunction } from 'express';
import { Converter } from 'showdown';
import * as path from 'path';
import * as fs from 'fs';

export class HomeController {
    router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    get(req: Request, res: Response, next: NextFunction) {
        fs.readFile(path.resolve(`${__dirname}/../../README.md`), (err, data) => {

            const converter = new Converter()
            const markdown = converter.makeHtml(data.toString());

            res.render('home', {
                title: '<%= projectTitle %>',
                markdown: markdown
            });
        });
        
    }

    private initializeRoutes() {
        this.router.get('/', this.get.bind(this));
    }
}
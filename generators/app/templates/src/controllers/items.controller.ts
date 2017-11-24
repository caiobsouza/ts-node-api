import { Item } from "../models/item.model";
import { Router, Request, Response, NextFunction } from "express";

export class ItemsController {

    public router: Router;

    constructor() {
        this.router = Router();
        this.initRoutes();
    }

    private get(req: Request, res: Response, next: NextFunction) {

        Item.findById(req.params.id)
            .then(resolve => {
                res.status(200).json(resolve);
            })
            .catch(err => {
                console.error(err);
            });
    }

    private getAll(req: Request, res: Response, next: NextFunction) {
        Item.find({})
            .then(resolve => {
                res.status(200).json(resolve);
            })
            .catch(err => {
                console.error(err);
            });
    }

    private post(req: Request, res: Response, next: NextFunction) {
        let item = new Item(req.body);

        item.save()
            .then(resolve => {
                res.status(200).json(resolve);
            })
            .catch(err => {
                res.status(500).json(err);
            });
    }

    private initRoutes() {
        this.router
            .get('/', this.getAll.bind(this))
            .get('/:id', this.get.bind(this))
            .post('/', this.post.bind(this));
    }

}
import { Request, Response } from "express";

import { Pet } from "../models/pet";
import { creatMenuObject } from "../helpers/createMenuObject";

export const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string;

    if(!query) {
        res.redirect('/');
        return;
    }

    let list = Pet.getFromName(query);

    // res.send('search no controller');
    res.render('pages/page', {
        menu: creatMenuObject(''),
        list,
        query
    });
}

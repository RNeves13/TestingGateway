import * as links from "../data/publicitaki";
import { Request, Response } from "express";
import { secureRequest } from "../utils/requests";

export async function resquestHandler(req: Request<any>, res: Response) {
    console.log(links.notifiations_link);
    const link = links.notifiations_link+req.path;
    const data = await secureRequest(link, req.params, req.method);
    res.json(data);
}
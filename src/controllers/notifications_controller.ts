import * as links from "../data/links";
import { Request, Response } from "express";
import { secureRequest } from "../utils/requests";

export async function adminNotificationsHandler(req: Request<any>, res: Response) {
    req.method
    const link = links.notifiations_link+req.path;
    const data = await secureRequest(link, req.params, req.method);
    res.json(data);
}
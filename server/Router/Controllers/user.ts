import { Request, Response } from "express";
import { logCustomMessage } from "../../utils/logger";

const userController = {
  //Route-1  route = "/api/"
  index: (req: Request, res: Response) => {
    res.send("hello");
  },

  home: (req: Request, res: Response) => {
    res.send("home");
  },
};

export default userController;

import { Request, Response } from "express";
import { logCustomMessage } from "../../utils/logger";

// Create an instance of the Tokens class

const userController = {
  //*Route-1 route get "/api/"
  index: (req: Request, res: Response) => {
    res.send("get method");
  },

  //*Route-2 route POST "/api/example"
  example: (req: Request, res: Response) => {
    res.send("post method");
  },
};

export default userController;

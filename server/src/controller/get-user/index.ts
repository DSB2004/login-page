import getUser from "../../services/user";
import { Request, Response } from "express";
const UserController = async (req: Request, res: Response): Promise<any> => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1] as string;

    const result = await getUser(token);

    if (!result.success) {
      return res.status(400).send({ error: result.message });
    }

    res.status(200).send({
      message: "User Found",
      user: result.message,
    });
  } catch (err) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

export default UserController;

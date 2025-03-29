import handleAccount from "../../services/create-account";
import { Request, Response } from "express";
const AccountController = async (req: Request, res: Response): Promise<any> => {
  try {
    const data = req.body;
    const result = await handleAccount(data);

    if (!result.success) {
      return res.status(400).send({ error: result.message });
    }
    
    res.status(201).send({
      message: "User added successfully",
      token: result.message,
    });
  } catch (err) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

export default AccountController;

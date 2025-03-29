import handleLogin from "../../services/login";

import { Request, Response } from "express";
const LoginController = async (req: Request, res: Response): Promise<any> => {
  try {
    const data = req.body;
    const result = await handleLogin(data);

    if (!result.success) {
      return res.status(400).send({ error: result.message });
    }

    res.status(200).send({
      message: "User logged in successfully",
      token: `Bearer ${result.message}`,
    });
  } catch (err) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

export default LoginController;

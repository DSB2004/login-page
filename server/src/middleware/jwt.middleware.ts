import { Request, Response, NextFunction } from "express";
import { isValid } from "../utils/handleJWT"; // Assuming isValid checks the token's validity

const JWTMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

    const token = req.headers["authorization"]?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Authorization token required" });
    }

    const isValidToken = await isValid(token);

    if (!isValidToken) {
      return res.status(403).json({ error: "Invalid or expired token" });
    }


    return next();
  } catch (error) {
    // Handle any errors that occur during verification
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export default JWTMiddleware;

import { Request, Response, NextFunction } from "express";


const LoggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  console.log(
    `[DEBUG] ${start.toLocaleString()} ${req.method} ${req.originalUrl}`
  );
  next();
};

export default LoggerMiddleware;

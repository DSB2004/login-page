import jwt from "jsonwebtoken";

const create_jwt = (data: any) => {
  const secret = process.env.JWT_SECRET as string;
  if (!secret) throw new Error("JWT_SECRET is not defined");

  return jwt.sign(data, secret, {
    algorithm: "HS256",
    expiresIn: "7d",
  });
};

const verify_jwt = (token: string) => {
  const secret = process.env.JWT_SECRET as string;
  if (!secret) throw new Error("JWT_SECRET is not defined");

  try {
    const payload = jwt.verify(token, secret) as jwt.JwtPayload;
    return payload.email as string;
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
};

const isValid = (token: string) => {
  const secret = process.env.JWT_SECRET as string;
  if (!secret) throw new Error("JWT_SECRET is not defined");

  try {
    jwt.verify(token, secret);
    return true;
  } catch (error) {
    return false;
  }
};

export { create_jwt, verify_jwt, isValid };

import { SignJWT, jwtVerify } from "jose";

const create_jwt = async (data: any) => {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  const token = await new SignJWT(data)
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);

  return token;
};

const verify_jwt = async (token: string) => {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  try {
    const { payload } = await jwtVerify(token, secret);
    const email = payload.email as string;
    return email;
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
};

const isValid = async (token: string) => {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  try {
    await jwtVerify(token, secret);
    return true;
  } catch (error) {
    return false;
  }
};
export { create_jwt, verify_jwt ,isValid};

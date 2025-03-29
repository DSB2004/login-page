import { loginSchema, LoginFormType } from "./dto";
import bcrypt from "bcrypt";
import prisma from "../../lib/prisma";
import { create_jwt } from "../../utils/handleJWT";
const handleLogin = async (data: any) => {
  const result = loginSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      message: "Failed Validation",
    };
  }

  const { email, password } = data as LoginFormType;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return { success: false, message: "User not found" };
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return { success: false, message: "Invalid credentials" };
  }

  const token = await create_jwt({ email });
  return { success: true, message: token };
};

export default handleLogin;
